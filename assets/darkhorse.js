/* =====================================================================
   assets/darkhorse.js · O AFLUENTE DARK HORSE (dark-horse.html): o rio-calendário.

   O palco fica preso na tela e a rolagem é o tempo (de dez/2024 a hoje), nos dois sentidos.
   O mundo é um calendário vertical: cada mês tem a altura das etiquetas da margem mais cheia
   (mês vazio fica curto e ganha "≈" na régua); dentro do mês, o dia é linear.
     à esquerda do rio: o dinheiro (as etiquetas alinham no rio);   à direita da fronteira: os EUA
     o rio principal (um curso só, da nascente ao disco FB), o ramo do Havengate (um curso só, até o lago),
     os canais das remessas (a gota atravessa conforme a rolagem, e volta se a pessoa sobe),
     a ponte "mesmo dia", o eixo "Eduardo nos EUA", o trecho sem remessas, a barragem, a água "caso".
   Acima da linha de leitura (62% do palco) é o passado: água, texto; abaixo, leito seco e só os pontos.

   Rolagem: viagens (a câmera desce pelo calendário) e remansos (o tempo quase para, em três fases:
   entra · grande · fecha). O primeiro momento é a vista geral; o último volta a ela.

   Desenho: um canvas do tamanho do palco. O leito seco (e a água cheia, para a vista geral) é desenhado
   uma vez por layout numa faixa do tamanho do mundo; a água molhada é o mesmo leito de rio.js, só do
   trecho visível, em pedaços prontos (sem emendas: todos os cursos no mesmo passe). As etiquetas são
   HTML num "mundo" que a câmera desloca inteiro (um transform por quadro).
   Um requestAnimationFrame só (window.BDQuadro, de assets/roteiro.js); pausa fora da tela e com a aba
   oculta; movimento reduzido: sem correnteza, gotas já no destino, números cheios, sem zoom (corte seco),
   um quadro por mudança de rolagem.

   Links: dark-horse.html#<id do momento> abre no fecho do momento; #dh é a abertura; #dh-lista abre a lista.
   Teste: window.__dh = { medir(n), momentos(), vai(id), ... }. Assistir: window.__historia.roteiro().
   ===================================================================== */
(function(){
'use strict';
const D = window.DARKHORSE, RIO = window.RIO;
const doc = document, raiz = doc.documentElement;
const sec = doc.getElementById('dh-rio');
if (!sec || !D || !RIO || !D.marcos || !D.momentos) return;
if (raiz.classList.contains('og')) return;

const $ = (s, r) => (r || doc).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || doc).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const c01 = v => clamp(v, 0, 1);
const { lerp, suave, TAU, reduzido } = RIO;
const q20 = x => Math.round(c01(x) * 20) / 20;
const sai3 = x => 1 - Math.pow(1 - x, 3);
const FUNDO = [7, 10, 7], AGUA = [125, 245, 154], CASO = [134, 165, 140];
const TINTA = '#d8efdd', CINZA = '#86a58c', CINZA2 = '#4f6b51', CARIMBO = '#ff5c5c';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const MES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const FL = 0.62;                 /* a linha de leitura: fração da altura do palco */
const GAP = 6;                   /* entre duas etiquetas da mesma margem */
const LAG = 46;                  /* o ramo se enche atrás da linha: a gota leva 60 px para cruzar um canal de 14 px */
const FIO = 9;                   /* etiqueta mais de 9 px abaixo da data (o ponto já não fica ao lado da 1ª linha): um fio a liga ao ponto */

/* =====================================================================
   O tempo: meses de dez/2024 a hoje
   ===================================================================== */
const pd = s => { const p = String(s).split('-').map(Number); return { a: p[0], m: p[1], d: p[2] || 1 }; };
const P0 = pd(D.periodo.de), P1 = pd(D.periodo.ate);
const mIdx = (a, m) => (a - P0.a) * 12 + (m - P0.m);
const NM = mIdx(P1.a, P1.m) + 1;
const MESES = [];
for (let i = 0; i < NM; i++){ const t = P0.m - 1 + i; const a = P0.a + Math.floor(t / 12), m = t % 12 + 1; MESES.push({ a, m, dias: i === NM - 1 ? Math.max(1, P1.d) : new Date(a, m, 0).getDate() }); }
const posData = s => { const p = pd(s), i = clamp(mIdx(p.a, p.m), 0, NM - 1); return { i, f: c01((p.d - 1) / MESES[i].dias) }; };
const dataBR = s => { const p = pd(s); return String(p.d).padStart(2, '0') + '/' + String(p.m).padStart(2, '0') + '/' + p.a; };
let MY = [], MH = [];            /* topo e altura de cada mês, em px do mundo */
const yData = s => { const q = posData(s); return MY[q.i] + MH[q.i] * q.f; };
function mesDeY(y){
  let i = 0; while (i < NM - 1 && y >= MY[i + 1]) i++;
  return MESES[i];
}

/* =====================================================================
   Os dados
   ===================================================================== */
const MARCOS = D.marcos.filter(m => m.palco && m.rot);
const REMESSAS = D.marcos.filter(m => (m.gotas || 0) > 0);
const GOTAS = []; REMESSAS.forEach(m => { for (let j = 0; j < m.gotas; j++) GOTAS.push({ m, j }); });
const NG = GOTAS.length;
const MOM = D.momentos.slice();
const NMOM = MOM.length;
const PONTE = (D.pontes || [])[0] || null;
const SECO = (D.secos || [])[0] || null;
const BARR = D.marcos.find(m => m.id === D.barragem) || D.marcos.find(m => m.barragem);
const CASO_DE = D.caso && D.caso.de;
const EIXO = D.marcos.find(m => m.eixo);
const byId = id => D.marcos.find(m => m.id === id);
const partes = rot => { const i = rot.indexOf(' · '); return i < 0 ? ['', rot] : [rot.slice(0, i), rot.slice(i + 3)]; };

/* as etiquetas do palco, na ordem do tempo (as de mesmo dia na ordem dos dados) */
const ETQ = [];
ETQ.push({ id: 'nascente', lado: 'din', tipo: 'lugar', txt: 'Daniel Vorcaro · Banco Master', fixo: true, semPonto: true });
MARCOS.forEach(m => {
  const pr = partes(m.rot);
  ETQ.push({ id: m.id, lado: m.margem === 'eua' ? 'eua' : 'din', data: m.data, d: pr[0], txt: pr[1], ponto: m.ponto, marco: m });
  if (m === EIXO) ETQ.push({ id: 'eixo', lado: 'eua', tipo: 'eixo', data: m.data, txt: 'Eduardo nos EUA ↓', semPonto: true });
});
if (REMESSAS[0]) ETQ.push({ id: 'fundo', lado: 'eua', tipo: 'lugar', data: REMESSAS[0].data, txt: 'fundo Havengate · Texas', semPonto: true });
if (SECO) ETQ.push({ id: 'seco', lado: 'din', tipo: 'nota', data: SECO.de, txt: SECO.rot, semPonto: true });
if (BARR) ETQ.push({ id: 'lago', lado: 'eua', tipo: 'lugar', data: BARR.data, txt: 'Havengate · Texas', semPonto: true, lago: true });
ETQ.forEach((e, k) => { e.ordem = k; });
ETQ.sort((a, b) => (a.fixo ? -1 : 0) - (b.fixo ? -1 : 0) || String(a.data || '').localeCompare(String(b.data || '')) || a.ordem - b.ordem);

/* =====================================================================
   DOM: legenda (um artigo por momento), etiquetas, mostrador
   ===================================================================== */
const cena = $('#dh-cena'), palco = $('#dh-palco'), cv = $('#dh-cv'), rot = $('#dh-rot'), mundoEl = $('#dh-mundo'), leg = $('#dh-leg');
const barra = $('#dh-barra'), mesEl = $('#dh-mes'), mgEl = $('#dh-mg');
const hdrEl = $('.site-header');
const RX_N = /(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?/;
const fmtN = (v, dec) => { const f = v.toFixed(dec).split('.'); const i = f[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); return f[1] ? i + ',' + f[1] : i; };
const fonteA = f => f && f.url ? '<p class="nf"><a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + ' ↗</a></p>' : '';

function artHtml(m, k){
  const g = m.grande || {}, tipo = /^(numero|hora|texto|citacao)$/.test(g.tipo) ? g.tipo : 'texto';
  let gv = esc(g.v);
  if (tipo === 'citacao') gv = gv.replace(/^“/, '<span class="q">“</span>').replace(/”$/, '<span class="q">”</span>');
  const idg = 'dh-g-' + k;
  const grande = '<p class="dh-grande ' + tipo + '" id="' + idg + '"><span class="gv">' + gv + '</span></p>';
  const linhas = (m.linhas || []).length ? '<div class="dh-linhas">' + m.linhas.map(t => '<p>' + esc(t) + '</p>').join('') + '</div>' : '';
  const ele = m.ele ? '<p class="dh-ele">' + esc(m.ele) + '</p>' : '';
  /* a fonte do momento; com m.fontes (duas linhas, duas fontes), um link para cada, sem repetir URL */
  let acoes = (m.fontes && m.fontes.length ? m.fontes : [m.fonte])
    .filter((f, i, a) => f && f.url && a.findIndex(g => g && g.url === f.url) === i).map(f => fonteA(f)).join('');
  if (m.portas && m.portas.length){
    const ord = p => p.share ? 0 : p.href ? 1 : 2;
    acoes += m.portas.slice().sort((x, y) => ord(x) - ord(y)).map(p => p.share ? '<button type="button" class="enviar" data-share="' + esc(p.share) + '">' + esc(p.txt) + '</button>' :
      p.acao === 'rever' ? '<button type="button" class="porta sec" data-rever>' + esc(p.txt) + '</button>' :
      '<a class="porta sec" href="' + esc(p.href) + '">' + esc(p.txt) + '</a>').join('');
  } else if (m.share) acoes += '<button type="button" class="enviar" data-share="' + esc(m.share) + '">enviar ↗</button>';
  if (k === 0 && window.BDRoteiro) acoes += '<button type="button" class="porta sec" data-assistir>▶ assistir</button>';
  return '<article class="dh-m" data-m="' + k + '" data-f="' + (k === 0 ? 'fecha' : 'entra') + '" aria-labelledby="' + (k === 0 ? 'dh-h1' : idg) + '"' + (k ? ' aria-hidden="true"' : '') + '>' +
    '<p class="dh-k">' + esc(m.k) + '</p>' +
    (m.h1 ? '<h1 class="sec dh-h1" id="dh-h1">' + esc(m.h1) + '</h1>' : '') +
    grande +
    '<div class="dh-fecha">' + linhas + ele + (m.dica ? '<p class="dh-dica">' + esc(m.dica) + '</p>' : '') +
    '<div class="dh-acoes">' + acoes + '</div></div></article>';
}
leg.innerHTML = MOM.map(artHtml).join('');
const ARTS = $$('.dh-m', leg);
const regua = doc.createElement('span'); regua.className = 'dh-regua'; regua.setAttribute('aria-hidden', 'true'); leg.appendChild(regua);
const larg = (t, mono) => { regua.classList.toggle('mono', !!mono); regua.textContent = t; return regua.getBoundingClientRect().width || 1; };
/* o número que conta com a rolagem */
MOM.forEach((m, k) => {
  const a = ARTS[k], g = m.grande || {};
  m.art = a; m.gEl = $('.dh-grande', a); m.gv = $('.gv', a);
  if (g.tipo === 'numero'){
    const x = RX_N.exec(g.v || '');
    if (x) m.conta = { pre: g.v.slice(0, x.index), pos: g.v.slice(x.index + x[0].length), alvo: parseFloat(x[1].replace(/\./g, '') + (x[2] ? '.' + x[2] : '')), dec: x[2] ? x[2].length : 0, ok: !!g.conta && k > 0 };
  }
});
/* as 7 minigotas do mostrador */
mgEl.innerHTML = GOTAS.map(() => '<i></i>').join('');
const MG = $$('i', mgEl);

/* etiquetas no mundo */
ETQ.forEach(e => {
  const el = doc.createElement('div');
  el.className = 'dh-e ' + e.lado + (e.tipo ? ' ' + e.tipo : '');
  el.innerHTML = (e.d ? '<b>' + esc(e.d) + '</b> ' : '') + esc(e.txt);
  if (e.ponto) el.dataset.ponto = e.ponto;
  el.dataset.id = e.id;
  mundoEl.appendChild(el); e.el = el; e.op = -1;
});
const EP = PONTE ? (() => { const el = doc.createElement('div'); el.className = 'dh-e ponte'; el.textContent = PONTE.rot || 'mesmo dia'; mundoEl.appendChild(el); return { el, op: -1 }; })() : null;
/* rótulos da vista geral (fora do mundo: posição de tela). Numa camada própria: a das etiquetas do mundo
   some em degradê sob o mostrador (#dh-rot, no CSS), e o nome da nascente, na vista geral, fica logo abaixo dele */
const rotG = doc.createElement('div'); rotG.className = 'dh-rot dh-rotg'; rotG.setAttribute('aria-hidden', 'true');
palco.insertBefore(rotG, rot.nextSibling);
const GERAL = [{ id: 'g-nascente', txt: 'Daniel Vorcaro · Banco Master' }, { id: 'g-lago', txt: 'Havengate · Texas' }].map(o => {
  const el = doc.createElement('div'); el.className = 'dh-e geral'; el.textContent = o.txt; el.dataset.id = o.id; rotG.appendChild(el); return Object.assign(o, { el, op: -1 });
});

/* âncoras dos momentos: posição acertada no layout */
const ANC = MOM.map(m => { const a = doc.createElement('span'); a.className = 'dh-ancora'; a.id = m.id; a.setAttribute('aria-hidden', 'true'); sec.appendChild(a); return a; });
sec.hidden = false;

/* =====================================================================
   Layout: mundo, geometria, camadas paradas, cenas
   ===================================================================== */
let L = null;
const G = { t: 0 };

/* um pedaço de curso (para a água que cresce e para desenhar só o visível) */
function fatia(c, i0, i1){
  i1 = Math.min(c.n - 1, i1); i0 = clamp(i0, 0, i1);
  const f = { x: c.x.slice(i0, i1 + 1), y: c.y.slice(i0, i1 + 1), nx: c.nx.slice(i0, i1 + 1), ny: c.ny.slice(i0, i1 + 1),
    w: c.w.slice(i0, i1 + 1), c: c.c.slice(i0, i1 + 1), s: c.s.slice(i0, i1 + 1), n: i1 - i0 + 1, L: c.s[i1] - c.s[i0], i0, i1 };
  let a = Infinity, b = -Infinity; for (const y of f.y){ if (y < a) a = y; if (y > b) b = y; }
  f.y0 = a - 24; f.y1 = b + 24;
  return f;
}
function pedacos(c, k, rnd){
  const out = [];
  for (let i = 0; i < c.n - 1; i += k){
    const p = fatia(c, i, Math.min(c.n - 1, i + k));
    /* a correnteza de cada pedaço, com a fase do tracejado presa ao comprimento do curso (sem salto entre pedaços) */
    p.tr = RIO.tracos(p, rnd);
    p.tr.forEach((t, j) => { t.fase = -c.s[i] + j * 5; });
    out.push(p);
  }
  return out;
}
const idx = (c, y) => RIO.primeiro(c.y, y);
const xEm = (c, y) => c.x[idx(c, y)];
/* nome de lugar "A · B": numa linha se couber; senão quebra no lugar do ponto (o "·" não fica solto no fim da linha) */
function lugar(el, txt){
  const i = txt.indexOf(' · ');
  if (i < 0){ el.textContent = txt; return; }
  el.textContent = txt; el.style.whiteSpace = 'nowrap';
  const cabe = el.scrollWidth <= el.clientWidth + 1;
  el.style.whiteSpace = '';
  if (!cabe) el.innerHTML = esc(txt.slice(0, i)) + '<br>' + esc(txt.slice(i + 3));
}

function monta(){
  const W = Math.round(sec.clientWidth); if (!W) return;
  const desk = window.innerWidth >= 1024;
  const hdr = hdrEl ? hdrEl.offsetHeight : 57;
  const cenaH = Math.round(cena.clientHeight);
  const palcoH = desk ? cenaH : Math.round(Math.max(0.46 * cenaH, Math.min(0.58 * cenaH, cenaH - 300)));
  sec.style.setProperty('--palcoH', palcoH + 'px');
  const Ws = Math.round(palco.clientWidth), Hs = Math.round(palco.clientHeight);

  /* ---------- colunas ---------- */
  const X = { din0: 0.04 * Ws, din1: 0.36 * Ws, rio: 0.40 * Ws, fronteira: 0.52 * Ws, ramo: 0.57 * Ws, eixo: 0.63 * Ws, eua0: 0.66 * Ws, eua1: 0.97 * Ws };
  const sp = desk ? 11 : 9, WL = desk ? 20 : 17, lagoW = 22 + 6 * sp;
  const xLago0 = X.ramo - 12, xLagoLab = Math.max(X.eua0, xLago0 + lagoW + 12);

  /* ---------- medir as etiquetas ---------- */
  ETQ.forEach(e => {
    const el = e.el;
    let l = e.lado === 'din' ? X.din0 : X.eua0, r = e.lado === 'din' ? X.din1 : X.eua1;
    if (e.lago) l = xLagoLab;
    e.x = Math.round(l); e.w = Math.round(r - l);
    el.style.left = e.x + 'px'; el.style.width = e.w + 'px';
    if (e.tipo === 'lugar') lugar(el, e.txt);
  });
  /* a altura de cada etiqueta medida em negrito (o destaque do momento): o negrito quebra a linha antes e não pode invadir a de baixo */
  ETQ.forEach(e => { const f = !e.tipo && !e.fixo; if (f) e.el.classList.add('foco'); e.h = e.el.offsetHeight; if (f && !e.foco) e.el.classList.remove('foco'); });
  if (EP) EP.w = EP.el.offsetWidth;

  /* ---------- a altura de cada mês: a margem mais cheia; vazio = 10 px ("≈") ---------- */
  const tem = new Array(NM).fill(false), soma = [new Array(NM).fill(0), new Array(NM).fill(0)];
  MARCOS.forEach(m => { tem[posData(m.data).i] = true; });
  ETQ.forEach(e => { if (e.fixo) return; const i = posData(e.data).i; soma[e.lado === 'din' ? 0 : 1][i] += e.h + GAP + (e.lago ? WL : 0); });
  const H0 = MESES.map((x, i) => Math.max(tem[i] ? 28 : 10, soma[0][i], soma[1][i]));
  MH = H0.slice();
  const ySrc = -40;
  const calcY = () => { MY = []; let y = 0; MH.forEach(h => { MY.push(y); y += h; }); };
  let yLago = 0, yDam = 0;
  /* coloca as etiquetas: topo = max(data - 8, fundo da anterior na mesma margem + 6) */
  const coloca = () => {
    const fundo = { din: -Infinity, eua: -Infinity }, ult = { din: null, eua: null };
    yDam = BARR ? yData(BARR.data) : 0;
    ETQ.forEach(e => {
      let ancora;
      if (e.fixo) ancora = ySrc - e.h / 2;
      else { e.yd = yData(e.data); ancora = e.yd - 8; }
      if (e.lago){
        /* o lago fica logo abaixo da barragem, e abaixo da última etiqueta dos EUA (ele invade a coluna no celular) */
        yLago = Math.max(yDam + 24 + WL / 2, fundo.eua + GAP + WL / 2 + 6);
        e.top = yLago - e.h / 2; e.deriva = 0;
        fundo.eua = Math.max(e.top + e.h, yLago + WL / 2 + 16); ult.eua = e; return;
      }
      e.top = Math.max(ancora, fundo[e.lado] + GAP);
      e.deriva = e.top - ancora; e.ant = ult[e.lado];
      fundo[e.lado] = e.top + e.h; ult[e.lado] = e;
    });
  };
  /* relaxa: onde as etiquetas se empurram, o mês cresce (até um teto) */
  for (let it = 0; it < 18; it++){
    calcY(); coloca();
    let mexeu = false;
    ETQ.forEach(e => {
      if (e.fixo || e.lago || e.deriva <= 6) return;
      const i = posData(e.data).i, j = e.ant && !e.ant.fixo ? posData(e.ant.data).i : i;
      const ms = j < i ? [j, i] : [i];
      ms.forEach(m => { const lim = H0[m] * 2 + 40; if (MH[m] < lim){ MH[m] = Math.min(lim, MH[m] + e.deriva * 0.4 / ms.length); mexeu = true; } });
    });
    if (!mexeu) break;
  }
  calcY(); coloca();
  ETQ.forEach(e => { e.el.style.top = Math.round(e.top) + 'px'; });

  /* ---------- geometria ---------- */
  const yHoje = yData(D.periodo.ate), yFB = yHoje + (desk ? 46 : 40), R_FB = desk ? 18 : 15;
  const yCaso = CASO_DE ? yData(CASO_DE) : Infinity;
  const yMinW = ySrc - 74, yMaxW = yFB + R_FB + 30;
  const rnd = RIO.semente(41);
  /* o rio principal: um curso só, da nascente ao disco */
  const main = RIO.curso(RIO.meandro([X.rio, ySrc], [X.rio, yFB], { amp: desk ? 7 : 6, ondas: 9, fase: 0.4, ta: [0, 1], tb: [0, 1] }));
  const w0 = desk ? 10 : 7;
  RIO.pinta(main, (i, y) => [w0 * (0.3 + 0.7 * suave((y - ySrc) / 80)) * (1 + 0.25 * suave((y - (yFB - 90)) / 90)), y <= yDam + 0.5 ? AGUA : CASO]);
  RIO.organico(main, { amp: 0.08, onda: desk ? 300 : 220, semente: 23, jan: y => suave((y - ySrc) / 60) * (1 - suave((y - (yFB - 40)) / 40)) });
  const iDam = BARR ? idx(main, yDam) : main.n - 1, iCaso = isFinite(yCaso) ? idx(main, yCaso) : main.n - 1;

  /* o ramo do Havengate: do fim do 1º canal até o lago; alarga em degrau com as gotas recebidas */
  const yBr0 = REMESSAS[0] ? yData(REMESSAS[0].data) + 14 : 0;
  const chegadas = GOTAS.map(g => yData(g.m.data) + 14);
  const ramo = RIO.curso(RIO.meandro([X.ramo, yBr0], [X.ramo, yLago], { amp: desk ? 4 : 2.5, ondas: Math.max(1, Math.round((yLago - yBr0) / 240)), fase: 1.1, ta: [0, 1], tb: [0, 1] }));
  const wk = desk ? 1.2 : 1;
  RIO.pinta(ramo, (i, y) => { let k = 0; chegadas.forEach(c => { k += suave((y - c + 3) / 10); }); return [(2 + 1.1 * k) * wk, AGUA]; });
  /* o lago: um remanso deitado no fim do ramo */
  const lago = RIO.curso(RIO.meandro([xLago0, yLago], [xLago0 + lagoW, yLago], { amp: 0 }));
  RIO.pinta(lago, (i, y, t) => [WL * Math.pow(Math.sin(Math.PI * c01(t)), 0.55) + 1, AGUA]);
  const slots = []; for (let k = 0; k < 7; k++) slots.push(xLago0 + 11 + k * sp);

  /* os canais: um por data de remessa, do rio ao ramo, 14 px abaixo, cruzando a fronteira */
  const wc = desk ? 2.8 : 2.2;
  const CAN = REMESSAS.map(m => {
    const y0 = yData(m.data), a = [xEm(main, y0) + 1, y0], b = [xEm(ramo, y0 + 14), y0 + 14];
    const c = RIO.curso(RIO.meandro(a, b, { ta: [1, 0.55], tb: [0.35, 1], tensao: 0.4 }));
    RIO.pinta(c, (i, y, t) => [wc * (0.8 + 0.2 * t), AGUA]);
    return { m, y0, c };
  });
  const gotas = GOTAS.map((g, k) => ({ k, m: g.m, j: g.j, off: g.j * 10, can: CAN.find(x => x.m === g.m) }));
  /* onde cada canal passa pela coluna dos nomes dos meses (à esquerda da fronteira): o nome desvia dele */
  const cruz = CAN.map(o => { let a = Infinity, b = -Infinity; const c = o.c; for (let i = 0; i < c.n; i++){ if (c.x[i] >= X.fronteira - 34 && c.x[i] <= X.fronteira + 5){ a = Math.min(a, c.y[i]); b = Math.max(b, c.y[i]); } } return [a, b]; }).filter(f => isFinite(f[0]));

  /* pontos de evento: dinheiro na margem esquerda do rio, EUA no eixo */
  /* (o ponto do dinheiro nunca encosta no fim da etiqueta: no celular o meandro traz o rio para perto dela) */
  const PT = ETQ.filter(e => e.marco && !e.semPonto).map(e => ({ e, x: e.lado === 'din' ? Math.max(xEm(main, e.yd) - (desk ? 11 : 9), X.din1 + 6.5) : X.eixo, y: e.yd,
    cor: e.ponto === 'grave' ? CARIMBO : e.ponto === 'ele' ? TINTA : CINZA }));
  PT.forEach(p => { p.e.px = p.x; });
  const yPonte = PONTE ? yData(byId(PONTE.a).data) : null;
  const yEixo0 = EIXO ? yData(EIXO.data) : null;
  if (EP){ EP.top = yPonte - (desk ? 23 : 21); EP.el.style.left = Math.round(X.fronteira - EP.w / 2) + 'px'; EP.el.style.top = Math.round(EP.top) + 'px'; }

  /* pedaços prontos e a correnteza de cada um */
  const K = 22;
  const mCh = pedacos(main, K, rnd), rCh = pedacos(ramo, K, rnd);

  /* ---------- camadas paradas numa faixa do tamanho do mundo (só a largura do rio) ---------- */
  const dpr = RIO.nitidez(Ws, Hs);
  const xs = [main, ramo, lago].concat(CAN.map(c => c.c)).reduce((acc, c) => { c.x.forEach(x => { if (x < acc[0]) acc[0] = x; if (x > acc[1]) acc[1] = x; }); return acc; }, [Infinity, -Infinity]);
  const fx0 = Math.floor(xs[0] - 36), fx1 = Math.ceil(xs[1] + 36), fw = fx1 - fx0, fh = Math.ceil(yMaxW - yMinW);
  const dS = Math.min(dpr, Math.sqrt(2.6e6 / Math.max(1, fw * fh)));
  const faixa = () => { const c = doc.createElement('canvas'); c.width = Math.max(1, Math.round(fw * dS)); c.height = Math.max(1, Math.round(fh * dS)); const g = c.getContext('2d'); g.setTransform(dS, 0, 0, dS, -fx0 * dS, -yMinW * dS); return { cv: c, g }; };
  const seco = faixa(), cheio = faixa();
  const todos = [{ curso: main }, { curso: ramo }, { curso: lago }].concat(CAN.map(c => ({ curso: c.c })));
  RIO.leito(seco.g, todos, { fundo: FUNDO });
  const cheios = [{ curso: fatia(main, 0, iDam) }, { curso: ramo }, { curso: lago }].concat(CAN.map(c => ({ curso: c.c })));
  if (iCaso < main.n - 1) cheios.push({ curso: fatia(main, iCaso, main.n - 1) });
  RIO.leito(cheio.g, cheios, { fundo: FUNDO });

  cv.width = Math.round(Ws * dpr); cv.height = Math.round(Hs * dpr); cv.style.width = Ws + 'px'; cv.style.height = Hs + 'px';
  const ctx = cv.getContext('2d');

  /* ---------- vista geral: o mesmo mundo com o tempo comprimido (a largura do rio não muda) ---------- */
  const padT = 50, padB = 24, oy0 = ySrc - 14, oy1 = yFB + R_FB + 2;
  const syO = (Hs - padT - padB) / (oy1 - oy0);
  const ov = { wTop: oy0 - padT / syO, wH: Hs / syO };

  /* ---------- os remansos: onde a linha de leitura fica em cada momento ---------- */
  const REM = MOM.map((m, k) => {
    if (k === 0) return { yA: 0, yB: 0 };
    if (k === NMOM - 1) return { yA: yHoje - 30, yB: yFB };
    const y = yData(m.data);
    let yA = y - 8, yB = y + 10;
    const nG = gotas.filter(g => g.m.data === m.data).length;
    if (nG) yB = y + 62 + 10 * (nG - 1) + 10;                              /* a gota atravessa no remanso */
    if (PONTE && byId(PONTE.a).data === m.data) yB = y + 20;              /* a ponte se desenha */
    if (BARR && yDam >= y && yDam - y < 12) yB = yLago + WL / 2 + LAG + 16; /* a barragem, e o lago se enche */
    /* no remanso o tempo para: a linha de leitura desce para a gota cruzar, mas as etiquetas (e os pontos)
       só acendem até a data do momento (e o dia seguinte); o que vem depois acende na viagem */
    const q = posData(m.data), yT0 = Math.min(yB, y + Math.max(10, 1.6 * MH[q.i] / MESES[q.i].dias + 2));
    return { yA, yB, yT0 };
  });

  /* ---------- as cenas: remanso (entra · grande · fecha) e viagem ---------- */
  const u = clamp(cenaH * 0.32, 180, 300);
  const lista = []; let s = 0;
  const add = o => { o.a = s; s += o.len; o.b = s; lista.push(o); return o; };
  MOM.forEach((m, k) => {
    if (k > 0){
      const dist = Math.abs(REM[k].yA - REM[k - 1].yB);
      if (k === 1) add({ tipo: 'v', k, len: 2.6 * u, t: 3.6, zoom: 0.42 });
      else add({ tipo: 'v', k, len: clamp(u * (0.7 + dist / 280), u, 2.5 * u), t: clamp(0.8 + dist / 420, 1, 2.8) });
    }
    const o = { tipo: 'm', k, fases: [] }; let p = 0;
    const fa = (f, len, t) => { o.fases.push({ f, a: p, b: p + len, t }); p += len; };
    if (k === 0) fa('fecha', 1.3 * u, 3.4);
    else if (k === NMOM - 1){ fa('entra', 0.8 * u, 1.8); fa('grande', 1.1 * u, 2.8); fa('fecha', 1.3 * u, 3.8); }
    else { fa('entra', 0.5 * u, 1.1); fa('grande', 0.9 * u, 2.6); fa('fecha', 1.1 * u, 3.6); }
    o.len = p; add(o);
  });
  const C = { lista, total: s };
  sec.style.height = Math.round(C.total + cenaH) + 'px';
  const Y0 = sec.getBoundingClientRect().top + window.scrollY;
  /* âncoras: no começo do fecho de cada momento (a abertura, no topo) */
  lista.filter(o => o.tipo === 'm').forEach(o => {
    const f = o.fases.find(x => x.f === 'fecha');
    ANC[o.k].style.top = (o.k === 0 ? 0 : Math.round(o.a + f.a + 16)) + 'px';
  });

  /* rótulos da vista geral */
  const telaO = y => (y - ov.wTop) * syO;
  GERAL[0].el.style.left = Math.round(X.din0) + 'px'; GERAL[0].el.style.width = Math.round(X.din1 - 2 - X.din0) + 'px'; GERAL[0].el.style.textAlign = 'right';
  GERAL[1].el.style.left = Math.round(xLago0 + lagoW + 10) + 'px'; GERAL[1].el.style.width = Math.round(Math.max(90, X.eua1 - xLago0 - lagoW - 10)) + 'px';
  GERAL.forEach(o => { lugar(o.el, o.txt); o.h = o.el.offsetHeight; });
  GERAL[0].el.style.top = Math.round(telaO(ySrc) - GERAL[0].h / 2) + 'px';
  GERAL[1].el.style.top = Math.round(telaO(yLago) - GERAL[1].h / 2) + 'px';

  L = { W, desk, hdr, cenaH, palcoH, Ws, Hs, dpr, ctx, X, u, C, Y0, REM, ov, syO,
    ySrc, yMinW, yMaxW, yHoje, yFB, R_FB, yDam, yCaso, yLago, yBr0, yPonte, yEixo0, WL, sp, slots, xLago0, lagoW,
    main, ramo, lago, CAN, cruz, gotas, PT, mCh, rCh, iDam, iCaso, seco: seco.cv, cheio: cheio.cv, fx0, fw, fh, dS,
    sprG: RIO.gota(AGUA, desk ? 3.4 : 3, dpr), sprL: RIO.gota(AGUA, desk ? 2.6 : 2.2, dpr) };
  keyframes();
  ajusta();
  Eant = null; legKey = ''; mostKey = '';
  agenda();
  doc.dispatchEvent(new CustomEvent('historia:layout'));
}

/* =====================================================================
   A legenda cabe: o destaque no maior tamanho que cabe; se o momento não couber, letra menor
   ===================================================================== */
function ajusta(){
  const desk = L.desk;
  const alt = leg.clientHeight - (desk ? 70 : 12) - (desk ? parseFloat(getComputedStyle(ARTS[0]).top) || 0 : 12);
  MOM.forEach((m, k) => {
    const a = m.art, g = m.gEl, tipo = (m.grande || {}).tipo;
    const f0 = a.dataset.f, vis = a.style.visibility;
    a.style.visibility = 'hidden'; a.dataset.f = 'fecha'; a.classList.remove('aperta', 'aperta2');
    const Wg = g.clientWidth || 300;
    let fs;
    if (tipo === 'numero'){
      const v = (m.grande.v || ''), max = desk ? 86 : 60;
      const um = 100 * Wg / larg(v);
      const p = v.split(' '); let dois = 0, x = '', y = '';
      for (let i = 1; i < p.length; i++){ const aa = p.slice(0, i).join(' '), bb = p.slice(i).join(' '), w = 100 * Wg / Math.max(larg(aa), larg(bb)); if (w > dois){ dois = w; x = aa; y = bb; } }
      const quebra = dois > um * 1.3 && um < max * 0.8;
      m.quebra = quebra;
      if (!m.conta || !m.conta.ok) m.gv.innerHTML = quebra ? '<span class="n1">' + esc(x) + '</span><span class="n2">' + esc(y) + '</span>' : esc(v);
      else m.gv.innerHTML = quebra ? '<span class="n1"></span><span class="n2">' + esc(y) + '</span>' : '<span class="n1"></span>';
      m.n1 = $('.n1', m.gv);
      if (m.n1 && m.conta && m.conta.ok){ m.conta.pos2 = quebra ? '' : m.conta.pos; m.n1.textContent = m.conta.pre + fmtN(m.conta.alvo, m.conta.dec) + m.conta.pos2; }
      fs = Math.min(max, 0.97 * (quebra ? dois : um));
    } else if (tipo === 'hora') fs = Math.min(desk ? 72 : 46, 0.96 * 100 * Wg / larg(m.grande.v, true));
    else if (tipo === 'citacao') fs = desk ? 38 : 26;
    else fs = desk ? 46 : 33;
    m.fs = fs;
    const tenta = qs => { for (const q of qs){ g.style.fontSize = Math.floor(fs * q) + 'px'; if (a.scrollHeight <= alt) return true; } return false; };
    if (!tenta([1, 0.9, 0.82])){ a.classList.add('aperta'); if (!tenta([1, 0.9, 0.82, 0.74])){ a.classList.add('aperta2'); tenta([1, 0.9, 0.82, 0.74, 0.66, 0.58, 0.5]); } }
    a.dataset.f = f0; a.style.visibility = vis;
  });
}

/* =====================================================================
   Estado a partir da rolagem
   ===================================================================== */
const sAgora = () => L ? window.scrollY + L.hdr - L.Y0 : -1;
const faseDe = (o, l) => { for (const f of o.fases) if (l < f.b) return f; return o.fases[o.fases.length - 1]; };
function camara(yR, z){
  const Hs = L.Hs;
  const topo = clamp(yR - FL * Hs, L.yMinW, Math.max(L.yMinW, L.yMaxW - Hs));
  if (z >= 0.999) return { wTop: Math.round(topo * L.dpr) / L.dpr, sy: 1 };
  const ov = L.ov;
  const wH = Math.exp(lerp(Math.log(ov.wH), Math.log(Hs), z));
  const yF = lerp(ov.wTop + FL * ov.wH, topo + FL * Hs, z);
  return { wTop: yF - FL * wH, sy: Hs / wH };
}
function estadoDe(s){
  const C = L.C;
  let i = 0; while (i < C.lista.length - 1 && s >= C.lista[i].b) i++;
  const o = C.lista[i], l = clamp(s - o.a, 0, o.len);
  const E = { s, i, o, l, z: 1, full: 0, aceso: 1, art: -1, fase: 'fecha', fl: 0, flen: 1, artAl: 1, foco: null };
  if (o.tipo === 'm'){
    const R = L.REM[o.k], F = faseDe(o, l);
    E.art = o.k; E.fase = F.f; E.fl = l - F.a; E.flen = F.b - F.a;
    if (o.k === 0){ E.yR = R.yA; E.z = 0; E.full = 1; E.aceso = 0; }
    else if (o.k === NMOM - 1){
      const en = o.fases[0], gr = o.fases[1];
      E.yR = lerp(R.yA, R.yB, suave(c01(l / en.b)));
      const zx = c01((l - gr.a) / (gr.b - gr.a));
      E.z = reduzido ? (zx >= 0.5 ? 0 : 1) : 1 - suave(zx);
    } else {
      E.yR = lerp(R.yA, R.yB, suave(c01(l / o.fases[1].b)));
      E.yT = Math.min(E.yR, R.yT0);
      E.foco = yData(MOM[o.k].data); { const q = posData(MOM[o.k].data); E.perto = Math.max(8, 1.6 * MH[q.i] / MESES[q.i].dias); E.mesM = MESES[q.i]; }
    }
  } else {
    const A = L.REM[o.k - 1], B = L.REM[o.k], x = l / o.len, a0 = A.yT0 != null ? A.yT0 : A.yB;
    E.art = o.k - 1; E.fase = 'viagem'; E.artAl = 1 - c01(x / 0.28);
    let sv;
    if (o.zoom){
      const zx = c01(x / o.zoom);
      E.z = reduzido ? (zx >= 0.5 ? 1 : 0) : suave(zx);
      E.full = 1 - E.z; E.aceso = E.z;
      sv = suave(c01((x - o.zoom) / (1 - o.zoom)));
    } else sv = suave(x);
    E.yR = lerp(A.yB, B.yA, sv); E.yT = lerp(a0, B.yA, sv);
  }
  if (E.yT == null) E.yT = E.yR;
  E.cam = camara(E.yR, E.z);
  return E;
}

/* =====================================================================
   O desenho do palco
   ===================================================================== */
const pCan = (c, yR, off) => reduzido ? (yR >= c.y0 ? 1 : 0) : c01((yR - c.y0 - (off || 0)) / 60);
function molhado(lista, c, CH, ia, ib, ponta, w0, w1){
  if (ib <= ia) return;
  for (const k of CH){
    if (k.i1 <= ia || k.i0 >= ib || k.y1 < w0 || k.y0 > w1) continue;
    if (k.i0 >= ia && k.i1 <= ib) lista.push({ curso: k, aberto: !(ponta && k.i1 === ib) });
    else { const a = Math.max(ia, k.i0), b = Math.min(ib, k.i1); if (b > a) lista.push({ curso: fatia(c, a, b), aberto: !(ponta && b === ib) }); }
  }
}
let nQuadros = 0;
function desenha(E){
  nQuadros++;
  const g = L.ctx, dpr = L.dpr, Ws = L.Ws, Hs = L.Hs, X = L.X, yR = E.yR, cam = E.cam, sy = cam.sy, wTop = cam.wTop, wBot = wTop + Hs / sy;
  const det = sy > 0.999, ys = y => (y - wTop) * sy;
  const mundo = () => g.setTransform(dpr, 0, 0, dpr * sy, 0, -wTop * sy * dpr);
  const tela = () => g.setTransform(dpr, 0, 0, dpr, 0, 0);
  const faixa = (img) => {
    const a = Math.max(L.yMinW, wTop - 2), b = Math.min(L.yMaxW, wBot + 2); if (b <= a) return;
    const sy0 = (a - L.yMinW) * L.dS, sh = (b - a) * L.dS;
    g.drawImage(img, 0, sy0, img.width, Math.min(sh, img.height - sy0), L.fx0, a, L.fw, Math.min(b - a, (img.height - sy0) / L.dS));
  };
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, L.ctx.canvas.width, L.ctx.canvas.height);
  g.imageSmoothingQuality = det ? 'low' : 'high';
  const aDet = det ? 1 : c01((E.z - 0.8) / 0.2);          /* o que só existe de perto (régua, etiquetas, correnteza) */
  const bF = yR - LAG;                                    /* a frente d'água no ramo */
  const fLago = Math.max(E.full, c01((bF - (L.yLago - L.WL / 2)) / L.WL));

  /* 1. o leito seco */
  mundo(); g.globalAlpha = 0.22; faixa(L.seco); g.globalAlpha = 1;

  /* 2. a fronteira e a régua dos meses (na tela: o tracejado não se deforma na vista geral) */
  tela();
  g.lineWidth = 1; g.strokeStyle = CINZA2; g.globalAlpha = 0.6; g.setLineDash([3, 5]);
  g.beginPath(); g.moveTo(X.fronteira, Math.max(0, ys(L.yMinW + 20))); g.lineTo(X.fronteira, Math.min(Hs, ys(L.yMaxW - 10))); g.stroke();
  g.setLineDash([]); g.globalAlpha = 1;
  /* a régua dos meses vem depois da água (um canal que cruza a fronteira não apaga o nome do mês);
     o texto leva um contorno da cor do fundo */
  const regua = () => {
    g.font = (L.desk ? '11px ' : '10.5px ') + MONO; g.textBaseline = 'middle'; g.textAlign = 'right'; g.lineJoin = 'round';
    const nome = (t, x, y, cor) => { g.lineWidth = 3; g.strokeStyle = 'rgba(7,10,7,.92)'; g.strokeText(t, x, y); g.fillStyle = cor; g.fillText(t, x, y); };
    /* o nome do mês fica ao lado do traço; se um canal passa ali, ele sobe ou desce o bastante para não ficar por baixo da água */
    const yNome = i => {
      let y = MY[i];
      for (const f of L.cruz) if (y + 6 > f[0] - 1.5 && y - 6 < f[1] + 1.5){ const ac = f[0] - 7.5, ab = f[1] + 7.5; y = (ac >= MY[i] - 12 && y - ac <= ab - y) ? ac : ab; }
      return y;
    };
    if (aDet > 0.01){
      g.globalAlpha = aDet;
      for (let i = 0; i < NM; i++){
        const y = ys(MY[i]); if (y < -30 || y > Hs + 30) continue;
        const vazio = MH[i] <= 10.5;
        if (!vazio){
          g.lineWidth = 1; g.strokeStyle = CINZA2; g.beginPath(); g.moveTo(X.fronteira - 4, y); g.lineTo(X.fronteira + 4, y); g.stroke();
          nome(MESES[i].m === 1 ? String(MESES[i].a) : MES[MESES[i].m - 1].toLowerCase(), X.fronteira - 7, ys(yNome(i)) + 0.5, CINZA2);
        } else if (i === 0 || MH[i - 1] > 10.5){
          /* uma sequência de meses vazios: a quebra da régua, um "≈" só, sobre a própria fronteira, longe do traço do
             mês seguinte (um mês vazio só tem 10 px: o "≈" sobe até o fim do mês anterior); se a quebra engole um janeiro, o ano vem ao lado */
          let n = 0; while (i + n < NM && MH[i + n] <= 10.5) n++;
          const yq = ys(MY[i] + n * MH[i] / 2 - 7);
          g.textAlign = 'center'; nome('≈', X.fronteira, yq, CINZA); g.textAlign = 'right';
          for (let j = 0; j < n; j++) if (MESES[i + j].m === 1){ nome(String(MESES[i + j].a), X.fronteira - 7, yq + 0.5, CINZA2); break; }
        }
      }
      g.globalAlpha = 1;
    } else if (!det){
      /* na vista geral, só os anos */
      g.globalAlpha = 1 - E.z;
      MESES.forEach((x, i) => { if (x.m === 1){ const y = ys(MY[i]); g.lineWidth = 1; g.strokeStyle = CINZA2; g.beginPath(); g.moveTo(X.fronteira - 4, y); g.lineTo(X.fronteira + 4, y); g.stroke(); nome(String(x.a), X.fronteira - 8, y + 0.5, CINZA); } });
      g.globalAlpha = 1;
    }
    g.lineWidth = 1;
  };

  /* 3. o eixo "Eduardo nos EUA": cresce com o tempo */
  if (L.yEixo0 != null && yR > L.yEixo0 && E.aceso > 0.01){
    const y1 = Math.min(yR, L.yHoje);
    g.globalAlpha = 0.8 * E.aceso; g.strokeStyle = CINZA; g.lineWidth = 1; g.setLineDash([2, 5]);
    g.beginPath(); g.moveTo(X.eixo, ys(L.yEixo0)); g.lineTo(X.eixo, ys(y1)); g.stroke(); g.setLineDash([]); g.globalAlpha = 1;
  }

  /* 4. a água */
  if (det && E.full < 0.01){
    mundo();
    const lista = [], w0 = wTop - 30, w1 = wBot + 30, main = L.main;
    const iR = idx(main, yR);
    molhado(lista, main, L.mCh, 0, Math.min(iR, L.iDam), true, w0, w1);
    if (yR > L.yCaso) molhado(lista, main, L.mCh, L.iCaso, iR, true, w0, w1);
    if (bF > L.yBr0){ const ib = idx(L.ramo, Math.min(bF, L.yLago)); molhado(lista, L.ramo, L.rCh, 0, ib, bF < L.yLago, w0, w1); }
    if (fLago > 0.001 && L.yLago + 30 > w0 && L.yLago - 30 < w1) lista.push({ curso: L.lago, fosco: 1 - fLago });
    L.CAN.forEach(c => {
      if (c.y0 > w1 || c.y0 + 30 < w0) return;
      const p = pCan(c, yR, 0); if (p <= 0) return;
      if (p >= 1) lista.push({ curso: c.c, aberto: true });
      else { const i = RIO.primeiro(c.c.s, p * c.c.L); if (i >= 1) lista.push({ curso: fatia(c.c, 0, i) }); }
    });
    RIO.leito(g, lista, { fundo: FUNDO });
    /* a correnteza, só no molhado e visível */
    const t = reduzido ? 0 : G.t, vel = L.desk ? 34 : 28;
    const corre = (CH, a, b) => {
      if (b <= a) return;
      g.save(); g.beginPath(); g.rect(0, a, Ws, b - a); g.clip();
      for (const k of CH) if (k.y1 >= a && k.y0 <= b) RIO.pintaTracos(g, k.tr, t, vel, a, b, 0.9);
      g.restore();
    };
    corre(L.mCh, Math.max(w0, L.ySrc), Math.min(w1, yR, L.yDam));
    if (yR > L.yCaso) corre(L.mCh, Math.max(w0, L.yCaso), Math.min(w1, yR));
    if (bF > L.yBr0) corre(L.rCh, Math.max(w0, L.yBr0), Math.min(w1, bF, L.yLago - 6));
  } else {
    mundo();
    g.save(); g.beginPath(); g.rect(L.fx0, wTop - 2, L.fw, Math.max(0, yR - wTop + 2)); g.clip(); faixa(L.cheio); g.restore();
    if (E.full > 0.01){ g.globalAlpha = E.full; faixa(L.cheio); g.globalAlpha = 1; }
  }
  tela();
  regua();

  /* 5. a barragem: a água para ali */
  const aDam = Math.max(E.full, reduzido ? (yR >= L.yDam ? 1 : 0) : c01((yR - L.yDam + 3) / 8));
  if (aDam > 0.01){
    const x = xEm(L.main, L.yDam), y = ys(L.yDam), m = L.desk ? 16 : 13;
    g.globalAlpha = aDam; g.strokeStyle = TINTA; g.lineWidth = 2; g.lineCap = 'butt';
    g.beginPath(); g.moveTo(x - m, y); g.lineTo(x + m, y); g.stroke(); g.globalAlpha = 1;
  }

  /* 6. a ponte: mesmo dia, da margem do dinheiro ao eixo */
  if (L.yPonte != null && E.aceso > 0.01){
    const q = reduzido ? (yR >= L.yPonte ? 1 : 0) : c01((yR - (L.yPonte - 6)) / 20);
    if (q > 0.001){
      const pa = L.PT.find(p => p.e.id === PONTE.a), pb = L.PT.find(p => p.e.id === PONTE.b);
      const x0 = pa ? pa.x : X.rio - 9, x1 = pb ? pb.x : X.eixo, y = ys(L.yPonte), xe = lerp(x0, x1, q);
      g.globalAlpha = 0.6 * E.aceso; g.strokeStyle = TINTA; g.lineWidth = 1;
      g.beginPath(); g.moveTo(x0, y - 1.5); g.lineTo(xe, y - 1.5); g.moveTo(x0, y + 1.5); g.lineTo(xe, y + 1.5); g.stroke(); g.globalAlpha = 1;
    }
  }

  /* 7. as gotas das remessas: andam pelo canal conforme a rolagem */
  if (det && E.full < 0.01){
    L.gotas.forEach(gt => {
      const c = gt.can; if (!c) return;
      const p = pCan(c, yR, gt.off); gt.p = p;
      if (p <= 0 || p >= 1) return;
      const cc = c.c, s = p * cc.L, i = Math.min(cc.n - 2, RIO.primeiro(cc.s, s)), i0 = Math.max(0, i - 1);
      const f = cc.s[i] > cc.s[i0] ? c01((s - cc.s[i0]) / (cc.s[i] - cc.s[i0])) : 0;
      const x = lerp(cc.x[i0], cc.x[i], f), y = ys(lerp(cc.y[i0], cc.y[i], f));
      if (y < -10 || y > Hs + 10) return;
      g.globalAlpha = Math.min(1, p * 12); g.drawImage(L.sprG.img, x - L.sprG.r, y - L.sprG.r, L.sprG.r * 2, L.sprG.r * 2);
    });
    g.globalAlpha = 1;
  } else L.gotas.forEach(gt => { gt.p = gt.can ? pCan(gt.can, yR, gt.off) : 0; });


  /* 9. pontos de evento (vermelho só em prisão ou condenação; o dele, neutro) e os fios das etiquetas deslocadas */
  if (E.aceso > 0.01){
    const r = L.desk ? 3.2 : 2.8;
    for (const p of L.PT){
      const y = ys(p.y); if (y < -6 || y > Hs + 6) continue;
      const passou = E.yT >= p.y - 1;
      g.globalAlpha = (passou ? 1 : 0.3) * E.aceso;
      if (aDet > 0.01 && passou && p.e.deriva > FIO && p.e.op > 0.05){
        /* o fio em cotovelo: do ponto até a borda da etiqueta, e desce rente a ela até a 1ª linha (sem riscar o texto) */
        const din = p.e.lado === 'din', xl = din ? X.din1 + 3 : X.eua0 - 3, yl = ys(p.e.top + 8);
        const xa = din ? p.x - r - 1 : p.x + r + 1, dentro = din ? xa <= xl : xa >= xl;
        g.strokeStyle = CINZA2; g.lineWidth = 1; g.globalAlpha = p.e.op * aDet;
        g.beginPath();
        if (dentro) g.moveTo(xl, y + r + 1); else { g.moveTo(xa, y); g.lineTo(xl, y); }
        g.lineTo(xl, yl); g.stroke();
        g.globalAlpha = (passou ? 1 : 0.3) * E.aceso;
      }
      g.beginPath(); g.arc(p.x, y, det ? r : r * 0.8, 0, TAU); g.fillStyle = p.cor; g.fill();
      g.lineWidth = 1.2; g.strokeStyle = '#070a07'; g.stroke();
    }
    g.globalAlpha = 1;
  }

  /* 10. o lago: 7 gotas que chegaram e, na barragem, 7 anéis secos na margem (na vista geral, o lago em escala de tela) */
  if (!det && fLago > 0.01) desenhaLago(g, ys(L.yLago), fLago);
  desenhaSlots(g, ys(L.yLago), fLago, aDam, E.full);

  /* 11. a ondulação do áudio (momento da cobrança) */
  const ond = L.PT.find(p => p.e.id === ONDA_ID);
  if (ond && det && yR >= ond.y && yR - ond.y < 90){
    const y = ys(ond.y), xo = xEm(L.main, ond.y);
    g.strokeStyle = TINTA; g.lineWidth = 1;
    const n = reduzido ? 1 : 2;
    for (let k = 0; k < n; k++){
      const ph = reduzido ? 0.35 : ((G.t / 1.8 + k / n) % 1);
      g.globalAlpha = 0.5 * (1 - ph); g.beginPath(); g.arc(xo, y, 6 + ph * 12, 0, TAU); g.stroke();
    }
    g.globalAlpha = 1;
  }

  /* 12. a nascente e o disco FB (o aro é dele: sempre neutro; nenhuma gota chega a ele) */
  {
    const x = L.main.x[0], y = ys(L.ySrc);
    if (y > -20 && y < Hs + 20){
      g.fillStyle = RIO.css(AGUA); g.beginPath(); g.arc(x, y, 2.4, 0, TAU); g.fill();
      if (!reduzido && det){ const ph = (G.t / 3.2) % 1; g.globalAlpha = 0.6 * (1 - ph); g.strokeStyle = RIO.css(AGUA); g.lineWidth = 1; g.beginPath(); g.arc(x, y, 2.6 + ph * 8, 0, TAU); g.stroke(); g.globalAlpha = 1; }
    }
    const xf = L.main.x[L.main.n - 1], yf = ys(L.yFB), R = det ? L.R_FB : L.R_FB * 0.8;
    if (yf > -R - 30 && yf < Hs + R + 30){
      if (!reduzido && det && yR >= L.yFB - 8){
        for (let k = 0; k < 2; k++){ const ph = ((G.t / 2.6) + k / 2) % 1; g.globalAlpha = 0.32 * Math.pow(1 - ph, 1.4); g.strokeStyle = TINTA; g.lineWidth = 1.2; g.beginPath(); g.arc(xf, yf, R + 4 + ph * 20, 0, TAU); g.stroke(); }
        g.globalAlpha = 1;
      }
      g.beginPath(); g.arc(xf, yf, R, 0, TAU); g.fillStyle = '#0e160e'; g.fill();
      g.lineWidth = 2; g.strokeStyle = TINTA; g.stroke();
      g.fillStyle = CINZA; g.font = '700 ' + (det ? 12 : 10) + 'px ' + MONO; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('FB', xf, yf + 0.5);
    }
  }
  g.globalAlpha = 1;
}
/* o lago na vista geral: em escala de tela (de perto, ele entra no passe do leito com a água) */
function desenhaLago(g, yL, f){
  const c = L.lago, dy = yL - c.y[0];
  g.save(); g.translate(0, dy); RIO.leito(g, [{ curso: c, fosco: 1 - f }], { fundo: FUNDO }); g.restore();
}
function desenhaSlots(g, yL, f, aDam, full){
  if (yL < -40 || yL > L.Hs + 40) return;
  const S = L.sprL;
  L.slots.forEach((x, k) => {
    const gt = L.gotas[k], a = f * Math.max(full || 0, gt && gt.p >= 1 ? 1 : 0);
    if (a > 0.01){ g.globalAlpha = a; g.drawImage(S.img, x - S.r, yL - S.r, S.r * 2, S.r * 2); }
    if (aDam > 0.01){ g.globalAlpha = aDam; g.strokeStyle = CINZA2; g.lineWidth = 1.5; g.beginPath(); g.arc(x, yL + L.WL / 2 + (L.desk ? 11 : 9), L.desk ? 3 : 2.6, 0, TAU); g.stroke(); }
  });
  g.globalAlpha = 1;
}
const ONDA_ID = (() => { const m = MOM.find(x => x.id === 'dh-cobranca'); const mc = m && MARCOS.find(x => x.data === m.data && x.margem === 'dinheiro'); return mc ? mc.id : null; })();

/* =====================================================================
   HTML por quadro: etiquetas, mostrador, legenda (só quando muda)
   ===================================================================== */
let mundoY = null, mundoOp = -1, mostKey = '';
function aplicaRotulos(E){
  const la = E.cam.sy > 0.999 ? 1 : 0;
  const lab = reduzido ? la : q20((E.z - 0.85) / 0.15) * la;
  const ty = Math.round(-E.cam.wTop * L.dpr) / L.dpr;
  if (lab > 0 && ty !== mundoY){ mundoY = ty; mundoEl.style.transform = 'translate3d(0,' + ty + 'px,0)'; }
  if (lab !== mundoOp){ mundoOp = lab; mundoEl.style.opacity = lab; mundoEl.style.visibility = lab > 0 ? '' : 'hidden'; }
  const yR = E.yR, yT = E.yT, top = E.cam.wTop - 40, bot = E.cam.wTop + L.Hs + 40;
  if (lab > 0){
    for (const e of ETQ){
      if (e.top + e.h < top || e.top > bot){ if (e.op !== 0){ e.op = 0; e.el.style.opacity = 0; } continue; }
      let a = e.fixo ? 1 : reduzido ? (yT >= e.yd - 1 ? 1 : 0) : q20((yT - e.yd + 3) / 14);
      if (e.lago) a = reduzido ? (yR - LAG >= L.yLago - L.WL / 2 ? 1 : 0) : q20((yR - LAG - (L.yLago - L.WL / 2)) / 16);
      const perto = E.foco != null && !e.fixo && Math.abs(e.yd - E.foco) <= E.perto, foco = perto && !e.tipo;
      if (E.foco != null && !perto && a > 0) a = Math.min(a, 0.6);
      if (a !== e.op){ e.op = a; e.el.style.opacity = a; }
      if (foco !== !!e.foco){ e.foco = foco; e.el.classList.toggle('foco', foco); }
    }
    if (EP){
      const q = reduzido ? (yR >= L.yPonte ? 1 : 0) : c01((yR - (L.yPonte - 6)) / 20);
      const a = q >= 0.98 ? 1 : 0;
      if (a !== EP.op){ EP.op = a; EP.el.style.opacity = a; }
    }
  }
  const ag = E.cam.sy < 0.999 ? (reduzido ? (E.z < 0.5 ? 1 : 0) : q20(1 - E.z / 0.3)) : 0;
  GERAL.forEach(o => { if (ag !== o.op){ o.op = ag; o.el.style.opacity = ag; } });
}
function aplicaMostrador(E){
  let txt, n;
  if (E.z < 0.5){ txt = MES[P0.m - 1] + ' ' + P0.a + ' – ' + MES[P1.m - 1] + ' ' + P1.a; n = NG; }
  else {
    const y = clamp(E.yT, 0, L.yHoje), m = E.mesM || mesDeY(y);
    txt = E.yR >= L.yHoje - 2 && !E.mesM ? 'HOJE' : MES[m.m - 1] + ' ' + m.a;
    n = L.gotas.filter(g => g.p >= 1).length;
  }
  const key = txt + '|' + n;
  if (key === mostKey) return;
  mostKey = key;
  mesEl.textContent = txt;
  MG.forEach((el, k) => el.classList.toggle('on', k < n));
  mgEl.setAttribute('aria-label', 'remessas até aqui: ' + n + ' de ' + NG);
}
let legKey = '', interagiu = false, hashAtual = '';
function aplicaLegenda(E){
  const k = E.art, m = MOM[k];
  const fase = E.fase === 'viagem' ? 'fecha' : E.fase;
  const al = q20(E.artAl);
  const key = k + ':' + fase + ':' + al;
  if (key !== legKey){
    legKey = key;
    ARTS.forEach((a, j) => {
      const on = j === k && al > 0;
      if (a.classList.contains('on') !== on) a.classList.toggle('on', on);
      if (on) a.removeAttribute('aria-hidden'); else a.setAttribute('aria-hidden', 'true');
    });
    if (m){ m.art.dataset.f = fase; m.art.style.opacity = al < 1 ? al : ''; }
    /* o link acompanha o momento (só depois que a pessoa rolou) */
    if (interagiu && history.replaceState && E.fase !== 'viagem'){
      const alvo = '#' + m.id;
      if (alvo !== hashAtual && location.hash !== alvo){ hashAtual = alvo; try { history.replaceState(null, '', alvo); } catch (_){} }
    }
  }
  if (!m) return;
  /* o destaque: conta com a rolagem (número) ou aparece (o resto); com movimento reduzido, cheio */
  let p = 1;
  if (E.fase === 'grande' && !reduzido) p = m.conta && m.conta.ok ? c01(E.fl / (0.55 * E.flen)) : c01(E.fl / (0.3 * E.flen));
  if (m.conta && m.conta.ok && m.n1){
    const v = m.conta.pre + fmtN(p >= 1 ? m.conta.alvo : m.conta.alvo * sai3(p), p >= 1 ? m.conta.dec : 0) + (m.conta.pos2 || '');
    if (m.n1.textContent !== v) m.n1.textContent = v;
  } else if (m.gv){
    const o = String(q20(p));
    if (m.gv.style.opacity !== o) m.gv.style.opacity = o === '1' ? '' : o;
  }
}

/* =====================================================================
   O quadro: o requestAnimationFrame único da página (window.BDQuadro, de assets/roteiro.js)
   ===================================================================== */
let visivel = false, Eant = null, barraP = -1;
function quadro(dt){
  if (!L || !visivel || doc.hidden) return false;
  const E = estadoDe(sAgora());
  G.t += dt || 0;
  const mudou = !Eant || Math.abs(E.s - Eant.s) > 0.3;
  if (!reduzido || mudou){ desenha(E); aplicaRotulos(E); aplicaMostrador(E); aplicaLegenda(E); }
  Eant = E;
  const p = Math.round(c01(E.s / L.C.total) * 500) / 500;
  if (p !== barraP){ barraP = p; barra.style.transform = 'scaleX(' + p + ')'; barra.parentNode.style.opacity = p >= 1 || p <= 0 ? 0 : 1; }
  /* só há o que mexer de perto (correnteza, gotas, pulsos) */
  return !reduzido && E.cam.sy > 0.999;
}
const agenda = window.BDQuadro ? () => window.BDQuadro.agenda() : (function(){
  let raf = 0, ult = 0;
  const tick = ts => { raf = 0; const dt = ult ? Math.min(0.1, (ts - ult) / 1000) : 1 / 60; ult = ts; if (quadro(dt)) raf = requestAnimationFrame(tick); else ult = 0; };
  const ag = () => { if (!raf) raf = requestAnimationFrame(tick); };
  window.addEventListener('scroll', ag, { passive: true });
  doc.addEventListener('visibilitychange', () => { if (!doc.hidden) ag(); });
  return ag;
})();
if (window.BDQuadro) window.BDQuadro.add(quadro);
RIO.observa(palco, { liga(){ visivel = true; agenda(); }, desliga(){ visivel = false; } });

/* =====================================================================
   O ritmo para o "assistir" (assets/roteiro.js) e os links diretos
   ===================================================================== */
let KS = [], KT = [];
function keyframes(){
  KS = [0]; KT = [0]; let t = 0;
  L.C.lista.forEach(o => {
    if (o.tipo === 'm') o.fases.forEach(f => { t += f.t; KS.push(o.a + f.b); KT.push(t); });
    else { t += o.t; KS.push(o.b); KT.push(t); }
  });
}
const yDe = s => L.Y0 - L.hdr + s;
function sFecha(k){
  const o = L.C.lista.find(x => x.tipo === 'm' && x.k === k); if (!o) return 0;
  if (k === 0) return 0;
  const f = o.fases.find(x => x.f === 'fecha');
  return o.a + f.a + 10;
}
function semSuave(on){ raiz.classList.toggle('rolando', on); }
function vai(id, comport){
  if (!L) return false;
  const k = MOM.findIndex(m => m.id === id); if (k < 0) return false;
  const y = Math.max(0, yDe(sFecha(k)));
  if (comport === 'smooth' && !reduzido) window.scrollTo({ top: y, behavior: 'smooth' });
  else { semSuave(true); window.scrollTo(0, y); semSuave(false); }
  if (visivel) quadro(0);
  return true;
}
function idDoHash(){ const h = decodeURIComponent(location.hash || '').slice(1); return MOM.some(m => m.id === h) ? h : null; }
/* alvos fora do palco (#dh-lista, #dh-custa*): o layout mudou a altura acima deles; a lista abre */
function alvoForaDoPalco(){
  const h = decodeURIComponent(location.hash || '').slice(1);
  if (!h || idDoHash()) return;
  const el = doc.getElementById(h); if (!el || sec.contains(el)) return;
  const det = el.matches('details') ? el : el.querySelector('details') || el.closest('details');
  if (det) det.open = true;
  semSuave(true); el.scrollIntoView({ block: 'start' }); semSuave(false);
}

leg.addEventListener('click', e => {
  const t = e.target.closest && e.target.closest('[data-rever], [data-assistir]');
  if (!t) return;
  if (t.hasAttribute('data-assistir') && window.BDRoteiro){ window.BDRoteiro.toca({ doInicio: true }); return; }
  if (window.BDRoteiro && window.BDRoteiro.tocaHistoria) window.BDRoteiro.tocaHistoria();
  else window.scrollTo({ top: Math.max(0, yDe(0)), behavior: reduzido ? 'auto' : 'smooth' });
});
/* a pessoa mexeu (a rolagem da própria página ao abrir num link não conta) */
['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(t => window.addEventListener(t, () => { interagiu = true; }, { passive: true, once: true }));

/* =====================================================================
   Depois do palco: a lista com as fontes e os nomes na teia
   ===================================================================== */
function montaLista(){
  const alvo = $('#dh-lista'); if (!alvo) return;
  let ano = null, h = '';
  D.marcos.forEach(m => {
    const a = pd(m.data).a;
    if (a !== ano){ ano = a; h += '<li class="ano" aria-hidden="true">' + a + '</li>'; }
    const hora = m.hora ? ', ' + m.hora.replace(':', 'h') : '';
    const fontes = (m.fontes || []).filter(f => f && f.url).map(f => '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + ' ↗</a>').join('');
    h += '<li class="it ' + (m.margem === 'eua' ? 'eua' : 'din') + (m.ponto === 'grave' ? ' grave' : '') + '">' +
      '<p class="qd"><time datetime="' + esc(m.data) + '">' + dataBR(m.data) + hora + '</time><span>' + (m.margem === 'eua' ? 'EUA' : 'Brasil') + '</span></p>' +
      '<p class="tx">' + esc(m.lista || '') + '</p>' + (fontes ? '<p class="nf">' + fontes + '</p>' : '') + '</li>';
  });
  alvo.innerHTML = '<details id="dh-lista-d"><summary><h2 class="k"><span>O calendário em texto, com as fontes</span></h2></summary>' +
    '<ol class="dh-cal">' + h + '</ol>' +
    '<div class="fim-l"><button type="button" class="enviar" data-share="dh-2025">enviar ↗</button></div></details>';
  const teia = $('#dh-teia');
  if (teia && D.pessoas) teia.innerHTML = '<span class="tk">na teia:</span>' + D.pessoas.map(p => '<a href="drive.html?p=' + encodeURIComponent(p.id) + '#rede">' + esc(p.nome) + '</a>').join('');
}
montaLista();

/* =====================================================================
   Arranque e novo layout
   ===================================================================== */
monta();
/* o primeiro quadro não espera o observador nem o rAF: num link direto, a legenda certa já sai no primeiro desenho */
if (L && !doc.hidden){ const r = palco.getBoundingClientRect(); if (r.bottom > 0 && r.top < (window.innerHeight || 0)){ visivel = true; quadro(0); } }
const h0 = idDoHash();
if (h0){ vai(h0, 'auto'); window.addEventListener('load', () => { if (idDoHash() === h0 && !interagiu) vai(h0, 'auto'); }, { once: true }); }
else if (location.hash){ alvoForaDoPalco(); window.addEventListener('load', () => { if (!interagiu) alvoForaDoPalco(); }, { once: true }); }
window.addEventListener('hashchange', () => { const h = idDoHash(); if (h && '#' + h !== hashAtual) vai(h, 'smooth'); else if (!h) alvoForaDoPalco(); });
let largura = window.innerWidth, altura = window.innerHeight, rt = 0;
const refaz = () => {
  const s = sAgora(), E = L ? estadoDe(s) : null;
  monta();
  if (E && s > 0 && s < L.C.total){ const o = L.C.lista[E.i]; semSuave(true); window.scrollTo(0, yDe(o.a + E.l * (o.len / E.o.len))); semSuave(false); }
};
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    const mudouL = window.innerWidth !== largura, mudouA = Math.abs(window.innerHeight - altura) > 140;
    largura = window.innerWidth; altura = window.innerHeight;
    if (mudouL || mudouA) refaz();
  }, 200);
});
/* se o que está acima do palco mudar de altura (o cabeçalho), acerta o topo */
if ('ResizeObserver' in window){
  let ro = 0;
  new ResizeObserver(() => { clearTimeout(ro); ro = setTimeout(() => { if (!L) return; const y = sec.getBoundingClientRect().top + window.scrollY, h = hdrEl ? hdrEl.offsetHeight : 57; if (Math.abs(y - L.Y0) > 2 || h !== L.hdr){ L.Y0 = y; L.hdr = h; agenda(); doc.dispatchEvent(new CustomEvent('historia:layout')); } }, 120); }).observe(doc.body);
}
window.addEventListener('pageshow', e => { if (e.persisted) monta(); });

/* =====================================================================
   Para o "assistir" (roteiro.js) e para os testes
   ===================================================================== */
window.__historia = {
  roteiro: () => L ? { keys: KS.map((s, i) => ({ y: yDe(s), t: KT[i] })), marcas: L.C.lista.filter(o => o.tipo === 'm' && o.k > 0).map(o => yDe(o.a)),
    paradas: L.C.lista.filter(o => o.tipo === 'm').map(o => yDe(o.k === 0 ? 0 : sFecha(o.k) + 30)) } : null,
  yDe: s => yDe(s), tempo: () => KT[KT.length - 1]
};
window.__dh = {
  medir(n){
    n = n || 60; if (!L) return null;
    const E = estadoDe(sAgora()), t0 = performance.now();
    for (let k = 0; k < n; k++){ G.t += 1 / 60; desenha(E); }
    return { ms: Math.round((performance.now() - t0) / n * 100) / 100, momento: MOM[E.art] && MOM[E.art].id, fase: E.fase };
  },
  momentos: () => MOM.map(m => m.id),
  vai: id => vai(id, 'auto'),
  quadros: () => nQuadros,
  estado: () => { if (!L) return null; const E = estadoDe(sAgora()); return { momento: MOM[E.art] && MOM[E.art].id, fase: E.fase, yR: Math.round(E.yR), z: Math.round(E.z * 100) / 100, sy: Math.round(E.cam.sy * 1000) / 1000, mes: mesEl.textContent, gotas: L.gotas.filter(g => g.p >= 1).length }; },
  vermelhos: () => L ? L.PT.filter(p => p.cor === CARIMBO).map(p => p.e.id) : [],
  layout: () => L && { total: L.C.total, mundo: Math.round(L.yMaxW - L.yMinW), Ws: L.Ws, Hs: L.Hs, dpr: L.dpr, meses: MH.map(h => Math.round(h)), deriva: ETQ.filter(e => e.deriva > 4).map(e => e.id + ':' + Math.round(e.deriva)) }
};
})();
