/* BOLSODRIVE · O rio em 60 segundos (N01) — rio60.html.
   Os 8 casos "de perto" da Foz (a lista CONHECIDOS de assets/historia.js) em formato stories: uma tela por caso,
   toque à direita/esquerda (ou setas do teclado, ou arrastar), barra de progresso por tela, avanço automático
   que se pausa (botão, segurar o dedo, aba escondida, menu aberto, foco do teclado) e a tela final com os 40.
   Cada tela é a unidade da Foz: faixa · nome · número ou frase-choque (numero.valor) · a frase que diz quem afirma
   (numero.texto; sem número, data/foz-curto.js) · a situação dele em cor neutra (foz-curto `ele`, só quando há) ·
   a fonte datada · um botão de enviar (button.env[data-share=<id>], assets/compartilhar.js) · a porta para a ficha.
   O rio do fundo é o da Foz: a lane na cor do caso (vermelho = alguém preso ou condenado no caminho; âmbar =
   investigado; verde = outros), com as gotas descendo. Com prefers-reduced-motion: nada se mexe, o avanço
   automático começa desligado e o toque continua funcionando.
   Lê só window.FOZ, window.FOZ_CURTO e window.BD_TOPICOS. Link direto: rio60.html#<id> · rio60.html#os-40. */
(function(){
'use strict';
const doc = document;
const $ = s => doc.querySelector(s);
const FOZ = window.FOZ || {}, CURTO = window.FOZ_CURTO || {};
const TOP = () => window.BD_TOPICOS || {};
const TODOS = FOZ.escandalos || [];
const REDIR = FOZ.redireciona || {};

/* os 8 casos de perto, na ordem destas telas: o mais recente e o que tem a situação dele primeiro; o dinheiro da
   Alerj em sequência (rachadinha → loja → os auditores que a originaram); a viagem ao Vorcaro; e o que ele promete */
const ORDEM = ['master', 'marielle-ifop', 'mocoes-pms-reus-condenados', 'rachadinha-alerj', 'loja-chocolates',
  'abin-defesa-rachadinha', 'cota-senado-viagens', 'trama-golpista'];
const FAIXA = { direto: 'Ele mesmo', gabinete: 'O gabinete', familia: 'A família', entorno: 'O entorno' };
const ORDEM_RIO = ['entorno', 'familia', 'gabinete', 'direto'];          /* da nascente à foz, como na Foz */
const ROT_RIO = { entorno: 'entorno', familia: 'família', gabinete: 'gabinete', direto: 'ele mesmo' };
const RGB = { preso_ou_condenado_na_cadeia: [255, 92, 92], investigado_na_cadeia: [255, 176, 46], sem_processo_na_cadeia: [92, 138, 99] };
const CLS = { preso_ou_condenado_na_cadeia: 'grave', investigado_na_cadeia: 'medio', sem_processo_na_cadeia: 'outros' };
const PESO = { preso_ou_condenado_na_cadeia: 2, investigado_na_cadeia: 1, sem_processo_na_cadeia: 0 };
const mqReduz = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
let REDUZ = !!mqReduz.matches;
const TAU = Math.PI * 2;

/* ---------- texto (as mesmas regras da ficha da Foz) ---------- */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fimPonto = s => { s = String(s || '').trim(); return /[.!?…]$/.test(s) ? s : s + '.'; };
/* "R$ 131" não quebra; "buscá-la" não quebra no hífen */
const nbsp = s => String(s).replace(/R\$ (?=\d)/g, 'R$\u00a0').replace(/([A-Za-zÀ-ú])-(l[aoe]s?|n[aoe]s?|se|me|te|lhe|lhes)(?![\wÀ-ú])/g, '$1\u2011$2');
function dataBR(d){
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(d || '');
  return m ? (m[3] ? m[3] + '/' : '') + m[2] + '/' + m[1] : (d || '');
}
/* o número do caso: só com valor e texto; nunca em dólar */
function numeroDe(e){
  const n = e && e.numero;
  if (!n || !n.valor || !n.texto) return null;
  if (/US\$|d[óo]lar|USD/i.test(n.valor + ' ' + n.texto)) return null;
  return n;
}
const DESFECHO_FIM = /[;,.]\s*(?:investigado no STF, sem denúncia|denúncia anulada|sem denúncia)\.?\s*$/i;
const eleDe = e => (CURTO[e.id] || {}).ele || '';
/* a frase sob o número: o texto do próprio número; com a linha ELE, sem repetir o desfecho no fim */
function fraseDe(e){
  const n = numeroDe(e);
  if (n){ const t = String(n.texto).trim(); return nbsp(fimPonto(eleDe(e) ? t.replace(DESFECHO_FIM, '') : t)); }
  const c = CURTO[e.id];
  return c && c.frase ? nbsp(fimPonto(c.frase)) : '';
}
/* a fonte da tela: a do número; sem ela, a primeira fonte do caso com endereço */
function fonteDe(e){
  const n = numeroDe(e), ok = f => f && /^https?:\/\//.test(f.url || '');
  if (n && ok(n.fonte)) return n.fonte;
  return (e.fontes || []).find(ok) || null;
}
/* "R$ 131 milhões" → R$ · 131 · milhões; "90% do salário" → 90% · do salário */
function partes(v){
  const m = /^(.*?)(\d[\d.,]*%?)(.*)$/.exec(String(v).trim());
  return m ? { p: m[1].trim(), v: m[2], u: m[3].trim() } : { p: '', v: String(v), u: '' };
}
/* só conta (0 → valor) o que é número simples no padrão brasileiro: 131 · 1.512 · 2,7 · 199.999,79 */
function alvoConta(v){
  const s = String(v).replace(/%$/, '');
  if (!/^\d{1,3}(\.\d{3})*(,\d+)?$|^\d+(,\d+)?$/.test(s)) return null;
  const dec = (s.split(',')[1] || '').length;
  return { n: parseFloat(s.replace(/\./g, '').replace(',', '.')), dec, pct: /%$/.test(v) };
}
const fmt = (x, a) => x.toLocaleString('pt-BR', { minimumFractionDigits: a.dec, maximumFractionDigits: a.dec }) + (a.pct ? '%' : '');
const palavras = s => String(s || '').split(/\s+/).filter(Boolean).length;

/* ---------- as telas ---------- */
function acha(id){
  let k = id;
  if (Object.prototype.hasOwnProperty.call(REDIR, k)) k = REDIR[k];
  return k ? TODOS.find(e => e.id === k) || null : null;
}
const TELAS = [];
ORDEM.forEach(id => {
  const e = acha(id);
  if (!e || TELAS.some(t => t.id === e.id)) return;
  const n = numeroDe(e), frase = fraseDe(e), ele = eleDe(e);
  if (!n && !frase) return;
  /* tempo de leitura: o número, a frase e a situação (~230 palavras/min); entre 5,5 e 9,5 s; as 8 somam ~60 s */
  const w = palavras(e.rotulo || e.nome) + palavras(n ? n.valor : '') + palavras(frase) + palavras(ele);
  TELAS.push({ id: e.id, e, n, frase, ele, fonte: fonteDe(e), nome: e.rotulo || e.nome, faixa: FAIXA[e.faixa] || '',
    cls: CLS[e.gravidade] || 'outros', cor: RGB[e.gravidade] || RGB.sem_processo_na_cadeia,
    dur: Math.max(5.5, Math.min(9.5, 2.4 + 0.19 * w)) });
});
const NT = TELAS.length;
if (!NT) return;                            /* sem dados: fica a página com o <noscript> e o cabeçalho */
const N = NT + 1;                           /* + a tela final (os 40) */
const FIM = N - 1;
const DUR = TELAS.map(t => t.dur).concat([0]);

/* o endereço público do site (o link que vai no envio da tela final) */
function base(){
  const a = (TOP().abertura || {}).url || '';
  if (/\/c\/[^/]+\.html$/.test(a)) return a.replace(/c\/[^/]+\.html$/, '');
  const c = doc.querySelector('link[rel="canonical"]');
  return c ? c.href.replace(/[^/]*$/, '') : location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
}

function htmlNumero(n, extra){
  if (!n) return '';
  const cor = n.cor === 'tinta' ? ' tinta' : '';
  if (n.tipo === 'frase') return '<p class="r6-num frase' + cor + '">' + esc(n.valor) + '</p>';
  const q = partes(n.valor);
  return '<p class="r6-num' + cor + (extra || '') + '"><span class="r6-sr">' + esc(n.valor) + '</span>' +
    '<span class="r6-nv" aria-hidden="true"><span class="r6-l1">' + (q.p ? '<span class="p">' + esc(q.p) + '</span>' : '') +
    '<span class="v"><span class="fant">' + esc(q.v) + '</span><span class="c">' + esc(q.v) + '</span></span></span>' +
    (q.u ? '<span class="u">' + esc(q.u) + '</span>' : '') + '</span></p>';
}
function htmlTela(t, k){
  const f = t.fonte;
  const fonte = f ? '<p class="r6-f"><a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') +
    (f.data ? ', ' + esc(dataBR(f.data)) : '') + ' ↗</a></p>' : '';
  const envio = TOP()[t.id] ? '<button type="button" class="env" data-share="' + esc(t.id) + '">enviar ↗</button>'
    : '<button type="button" class="env" data-r6-caso="' + esc(t.id) + '">enviar ↗</button>';
  return '<section class="r6-tela" id="r6-' + esc(t.id) + '" data-i="' + k + '" data-cls="' + t.cls + '" role="group" aria-roledescription="tela"' +
    ' aria-label="' + (k + 1) + ' de ' + NT + ': ' + esc(t.nome) + '" aria-hidden="true" inert>' +
    '<div class="r6-corpo"><div class="r6-in">' +
      '<p class="r6-k">' + esc(t.faixa) + '</p>' +
      '<h2 class="r6-nome">' + esc(t.nome) + '</h2>' +
      htmlNumero(t.n) +
      (t.frase ? '<p class="r6-t">' + esc(t.frase) + '</p>' : '') +
      (t.ele ? '<p class="r6-ele"><b>ELE</b> ' + esc(t.ele) + '</p>' : '') +
      fonte +
    '</div></div>' +
    '<div class="r6-acoes">' + envio + '<a class="porta" href="foz.html#' + esc(t.id) + '">o caminho, elo por elo →</a></div>' +
  '</section>';
}

/* a tela final: os 40 como a bacia da Foz (cada rio na cor do caso), os 8 destas telas acesos */
const conta = f => TODOS.filter(f).length;
const porFaixa = f => conta(e => e.faixa === f);
const nGrave = conta(e => CLS[e.gravidade] === 'grave'), nMedio = conta(e => CLS[e.gravidade] === 'medio'), nOutros = conta(e => CLS[e.gravidade] === 'outros');
const VISTOS = TELAS.map(t => t.id);
function bacia(){
  const W = 340, H = 168, cx = W / 2, cy = H - 15, topo = 20, pad = 5, gap = 12;
  const grupos = ORDEM_RIO.map(f => TODOS.filter(e => e.faixa === f)
    .sort((a, b) => (PESO[b.gravidade] || 0) - (PESO[a.gravidade] || 0) || a.id.localeCompare(b.id)));
  const n = grupos.reduce((s, g) => s + g.length, 0) || 1;
  const usados = grupos.filter(g => g.length).length;
  const passo = (W - 2 * pad - gap * Math.max(0, usados - 1)) / Math.max(1, n - 1);
  let k = 0, gi = 0, fundo = '', frente = '', rot = '';
  const css = c => 'rgb(' + c.join(',') + ')';
  grupos.forEach((g, i) => {
    if (!g.length) return;
    const x0 = pad + k * passo + gi * gap;
    g.forEach(e => {
      const x = pad + k * passo + gi * gap, c = css(RGB[e.gravidade] || RGB.sem_processo_na_cadeia);
      const on = VISTOS.includes(e.id);
      const d = 'M' + x.toFixed(1) + ' ' + topo + 'C' + x.toFixed(1) + ' ' + (topo + 62) + ' ' + (cx + (x - cx) * 0.22).toFixed(1) + ' ' + (cy - 58) + ' ' + cx + ' ' + (cy - 13);
      const atraso = ' style="--d:' + k + '"';
      fundo += '<path d="' + d + '" pathLength="1" stroke="' + c + '" class="g' + (on ? ' on' : '') + '"' + atraso + '/>';
      frente += '<path d="' + d + '" pathLength="1" stroke="' + c + '" class="c' + (on ? ' on' : '') + '"' + atraso + '/>';
      k++;
    });
    const x1 = pad + (k - 1) * passo + gi * gap;
    rot += '<text x="' + ((x0 + x1) / 2).toFixed(1) + '" y="10">' + esc(ROT_RIO[ORDEM_RIO[i]]) + '</text>';
    gi++;
  });
  return '<svg class="r6-bacia" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Os ' + TODOS.length + ' casos como rios que chegam a ele, na cor de cada caso; em destaque, os ' + NT + ' destas telas.">' +
    '<g class="rot">' + rot + '</g><g fill="none" stroke-linecap="round">' + fundo + frente + '</g>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="13" class="foz"/><text x="' + cx + '" y="' + (cy + 0.5) + '" class="fb">FB</text></svg>';
}
function htmlFim(){
  const nF = TODOS.length;
  const frase = 'em volta dele: ' + porFaixa('direto') + ' por ele mesmo, ' + porFaixa('gabinete') + ' pelo gabinete, ' +
    porFaixa('familia') + ' pela família e ' + porFaixa('entorno') + ' pelo entorno. Cada um com o caminho até ele e a fonte.';
  return '<section class="r6-tela r6-fim" id="r6-os-40" data-i="' + FIM + '" role="group" aria-roledescription="tela" aria-label="Os ' + nF + ' casos" aria-hidden="true" inert>' +
    '<div class="r6-corpo"><div class="r6-in">' +
      '<p class="r6-k">A Foz</p>' +
      htmlNumero({ valor: nF + ' casos', texto: '-' }, ' fim') +
      '<p class="r6-t">' + esc(frase) + '</p>' +
      '<figure class="r6-fig">' + bacia() + '<figcaption>acesos, os ' + NT + ' destas telas</figcaption></figure>' +
      '<div class="legenda"><span><i class="grave"></i>' + nGrave + ' com alguém preso ou condenado</span>' +
        '<span><i class="medio"></i>' + nMedio + ' com alguém investigado</span><span><i class="outros"></i>' + nOutros + ' outros</span></div>' +
    '</div></div>' +
    '<div class="r6-acoes r6-acoes-fim"><a class="porta r6-porta-g" href="foz.html">ver os ' + nF + ' na Foz →</a>' +
      '<span class="r6-ac2"><button type="button" class="env" id="r6-envia-tudo">enviar os 60 segundos ↗</button>' +
      '<button type="button" class="r6-denovo" id="r6-denovo">de novo ↺</button></span></div>' +
    '<footer class="site-footer r6-rod"></footer>' +
  '</section>';
}

/* ---------- DOM ---------- */
const card = $('#r6-card'), telasEl = $('#r6-telas'), barrasEl = $('#r6-barras'), contEl = $('#r6-cont');
const btPausa = $('#r6-pausa'), btAnt = $('#r6-ant'), btProx = $('#r6-prox'), dica = $('#r6-dica'), vivo = $('#r6-vivo');
telasEl.innerHTML = TELAS.map(htmlTela).join('') + htmlFim();
const telas = Array.from(telasEl.children);
barrasEl.innerHTML = new Array(N).fill('<i><b></b></i>').join('');
const barras = Array.from(barrasEl.querySelectorAll('b'));
const pad2 = k => (k < 9 ? '0' : '') + (k + 1);

/* desktop: o índice das telas à esquerda e o "como ler" à direita */
const ind = $('#r6-ind');
if (ind){
  ind.innerHTML = '<p class="r6-lk">O rio em 60 segundos</p><ol>' + TELAS.map((t, k) =>
    '<li><a href="#' + esc(t.id) + '" data-i="' + k + '"><span class="n">' + pad2(k) + '</span><i class="' + t.cls + '"></i><span class="t">' + esc(t.nome) + '</span></a></li>').join('') +
    '<li><a href="#os-40" data-i="' + FIM + '"><span class="n">' + TODOS.length + '</span><i class="todos"></i><span class="t">Os ' + TODOS.length + ' na Foz</span></a></li></ol>';
}
const lado = $('#r6-lado');
if (lado){
  lado.innerHTML = '<p class="r6-lk">Como ler</p>' +
    '<p>Oito casos da Foz, um por tela. O número vem sempre com quem afirma e a fonte; a linha <b>ELE</b> é a situação dele no caso, quando há.</p>' +
    '<p class="r6-lk2">A cor do rio</p><div class="legenda r6-leg-v"><span><i class="grave"></i>alguém preso ou condenado no caminho</span>' +
    '<span><i class="medio"></i>alguém investigado</span><span><i class="outros"></i>outros</span></div>' +
    '<p class="r6-teclas"><kbd>←</kbd> <kbd>→</kbd> passar · <kbd>espaço</kbd> pausar</p>';
}

/* ---------- estado ---------- */
let atual = -1;
let tocando = !REDUZ;          /* a escolha da pessoa (botão); com movimento reduzido, começa parado */
let espera = false;            /* pausa curta: tocou em enviar, na fonte ou na ficha; volta ao passar de tela */
let segura = false, oculto = !!doc.hidden, focoTec = false;
let decorrido = 0, ultimoT = 0, raf = 0, relogio = 0;
const menuAberto = () => { const m = doc.getElementById('nv-mapa'); return !!(m && !m.hidden); };
const parado = () => !tocando || espera || segura || oculto || focoTec || menuAberto() || atual === FIM;

function poeBarra(k, f){ if (barras[k]) barras[k].style.transform = 'scaleX(' + Math.max(0, Math.min(1, f)).toFixed(4) + ')'; }
/* o botão mostra se a tela anda sozinha: parada pela pessoa (pausa) ou esperando depois de um toque em enviar/fonte */
function mostraPausa(){
  const anda = tocando && !espera;
  card.classList.toggle('pausado', !anda);
  btPausa.setAttribute('aria-label', anda ? 'pausar o avanço automático' : 'avançar sozinho');
  btPausa.setAttribute('aria-pressed', anda ? 'false' : 'true');
}

function vai(i, como){
  i = Math.max(0, Math.min(FIM, i | 0));
  if (i === atual) return;
  const antes = atual;
  /* o foco não pode ficar numa tela que vai sumir */
  const foco = doc.activeElement;
  const perdeFoco = foco && telas[antes] && telas[antes].contains(foco);
  atual = i; decorrido = 0;
  if (espera){ espera = false; mostraPausa(); }
  telas.forEach((el, k) => {
    const on = k === i;
    el.classList.toggle('on', on);
    el.setAttribute('aria-hidden', on ? 'false' : 'true');
    if (on) el.removeAttribute('inert'); else el.setAttribute('inert', '');
  });
  if (perdeFoco) card.focus({ preventScroll: true });
  barras.forEach((b, k) => poeBarra(k, k < i ? 1 : 0));
  if (i === FIM || REDUZ) poeBarra(i, 1);
  card.classList.toggle('no-fim', i === FIM);
  card.classList.toggle('no-inicio', i === 0);
  btAnt.disabled = i === 0; btProx.disabled = i === FIM;
  contEl.innerHTML = '<span class="r6-marca">O rio em 60 segundos</span>' +
    (i === FIM ? '<span class="r6-pos">os ' + TODOS.length + '</span>' : '<span class="r6-pos"><b>' + (i + 1) + '</b>/' + NT + '</span>');
  if (ind) ind.querySelectorAll('a').forEach(a => { if (+a.dataset.i === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current'); });
  const id = i === FIM ? 'os-40' : TELAS[i].id;
  try { if (decodeURIComponent(location.hash.slice(1)) !== id) history.replaceState(null, '', '#' + id); } catch (_){}
  vivo.textContent = i === FIM ? 'Os ' + TODOS.length + ' casos na Foz.' : (i + 1) + ' de ' + NT + '. ' + TELAS[i].nome + '.';
  if (como !== 'inicio') escondeDica();
  ajusta(telas[i]);
  contaNumero(telas[i]);
  trocaRio(i === FIM ? null : TELAS[i]);
  try { if (window.BDNav && typeof window.BDNav.atualiza === 'function') window.BDNav.atualiza(); } catch (_){}
  agenda();
}
const prox = () => { if (atual < FIM) vai(atual + 1); };
const ant = () => { if (atual > 0) vai(atual - 1); else { decorrido = 0; poeBarra(0, REDUZ ? 1 : 0); } };
/* o cabeçalho (nav.js, S13) manda o tópico da tela atual */
window.BD_TELA = () => (atual >= 0 && atual < FIM ? TELAS[atual].id : (TOP().rio60 ? 'rio60' : 'abertura'));

/* ---------- tempo: um quadro só para a barra e o rio ---------- */
function agenda(){
  if (REDUZ){
    clearTimeout(relogio);
    if (!parado()) relogio = setTimeout(() => { if (!parado()) prox(); }, DUR[atual] * 1000);
    desenha(0);
    return;
  }
  if (!raf && !oculto) raf = requestAnimationFrame(quadro);
}
function quadro(t){
  raf = 0;
  const dt = ultimoT ? Math.min(0.1, (t - ultimoT) / 1000) : 0;
  ultimoT = t;
  if (!parado() && DUR[atual] > 0){
    decorrido += dt;
    poeBarra(atual, decorrido / DUR[atual]);
    if (decorrido >= DUR[atual]){ prox(); }
  }
  desenha(dt);
  /* o prox() acima já pode ter agendado o próximo quadro (agenda): um laço só */
  if (!oculto && !raf) raf = requestAnimationFrame(quadro);
}

/* ---------- o número conta até o valor (0,9 s) ---------- */
let contaRaf = 0;
function contaNumero(el){
  if (contaRaf){ cancelAnimationFrame(contaRaf); contaRaf = 0; }
  const c = el && el.querySelector('.r6-num .c');
  if (!c) return;
  const alvo = alvoConta(c.previousSibling ? c.previousSibling.textContent : c.textContent);
  const final = c.previousSibling ? c.previousSibling.textContent : c.textContent;
  if (REDUZ || !alvo){ c.textContent = final; return; }
  const t0 = performance.now(), T = 900;
  const passo = t => {
    const k = Math.min(1, (t - t0) / T), e = 1 - Math.pow(1 - k, 3);
    c.textContent = k >= 1 ? final : fmt(alvo.n * e, alvo);
    contaRaf = k < 1 ? requestAnimationFrame(passo) : 0;
  };
  c.textContent = fmt(0, alvo);
  contaRaf = requestAnimationFrame(passo);
}

/* ---------- cabe na tela: o número no maior tamanho que cabe na largura e na altura ---------- */
function ajusta(el){
  if (!el) return;
  const corpo = el.querySelector('.r6-corpo'), num = el.querySelector('.r6-num');
  el.classList.remove('aperta', 'aperta2');
  if (!corpo) return;
  if (!num){ if (corpo.scrollHeight > corpo.clientHeight + 1) el.classList.add('aperta'); return; }
  const cw = corpo.clientWidth, ch = corpo.clientHeight;
  const frase = num.classList.contains('frase'), fim = num.classList.contains('fim');
  const max = frase ? Math.min(cw * 0.16, 58) : Math.min(cw * 0.47, ch * (fim ? 0.15 : 0.22), 172);
  const min = frase ? 28 : 40;
  let fs = Math.max(min, Math.floor(max));
  const linha = num.querySelector('.r6-l1');
  for (let k = 0; k < 10; k++){
    num.style.fontSize = fs + 'px';
    const larg = linha ? linha.getBoundingClientRect().width : num.scrollWidth;
    const cabe = linha ? cw : num.clientWidth;
    if (larg > cabe + 0.5 && fs > min){ fs = Math.max(min, Math.min(fs - 1, Math.floor(fs * cabe / larg))); continue; }
    if (corpo.scrollHeight > ch + 1){
      if (!el.classList.contains('aperta')){ el.classList.add('aperta'); continue; }
      if (fs > min){ fs = Math.max(min, Math.floor(fs * 0.9)); continue; }
    }
    break;
  }
  /* a tela final num celular muito baixo: sem os rótulos da bacia e sem a legenda da figura */
  if (fim && corpo.scrollHeight > ch + 1) el.classList.add('aperta2');
}
function ajustaTodas(){ telas.forEach(ajusta); }

/* ---------- o rio do fundo (canvas): a lane do caso, no desenho da Foz ---------- */
const cv = $('#r6-cv'), ctx = cv.getContext('2d');
let CW = 0, CH = 0, DPR = 1, rio = null, rioAntes = null, mistura = 1;
const cache = new Map();
function hash(s){ let h = 2166136261; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function sorteio(seed){ let s = seed || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return (s % 100000) / 100000; }; }
const rgba = (c, a) => 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')';
const clareia = (c, k) => c.map(v => Math.round(v + (255 - v) * k));
const FUNDO = [7, 10, 7];
const sobreFundo = (c, a) => c.map((v, i) => Math.round(FUNDO[i] + (v - FUNDO[i]) * a));
function mede(){
  const r = card.getBoundingClientRect();
  CW = r.width; CH = r.height; DPR = Math.min(2, window.devicePixelRatio || 1);
  cv.width = Math.max(1, Math.round(CW * DPR)); cv.height = Math.max(1, Math.round(CH * DPR));
  cache.clear();
}
function gota(cor, raio){
  const R = raio * 2.4, S = Math.max(4, Math.ceil(R * 2 * DPR));
  const c = doc.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'), m = S / 2, claro = clareia(cor, 0.55);
  const grd = g.createRadialGradient(m, m, 0, m, m, m);
  grd.addColorStop(0, rgba(claro, 1)); grd.addColorStop(0.2, rgba(claro, 0.95));
  grd.addColorStop(0.34, rgba(cor, 0.55)); grd.addColorStop(0.62, rgba(cor, 0.13)); grd.addColorStop(1, rgba(cor, 0));
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  return { img: c, r: R };
}
function fazRio(t){
  const chave = t.id + '|' + CW + 'x' + CH;
  if (cache.has(chave)) return cache.get(chave);
  const R = sorteio(hash(t.id) || 7), largo = CW >= 520;
  /* a lane corre pela direita (onde o texto é mais curto), serpenteando; alarga rio abaixo */
  const x0 = CW * 0.8 + CW * 0.07 * (R() - 0.5);
  const a1 = CW * (0.05 + 0.035 * R()), a2 = CW * (0.012 + 0.018 * R());
  const k1 = (0.75 + 0.6 * R()) * TAU / CH, k2 = (2 + 1.3 * R()) * TAU / CH, f1 = R() * TAU, f2 = R() * TAU;
  const w0 = largo ? 7.5 : 6.5, P = 4;
  const x = [], y = [], w = [], s = [];
  let L = 0;
  for (let yy = -40; yy <= CH + 40; yy += P){
    const xx = x0 + a1 * Math.sin(f1 + k1 * yy) + a2 * Math.sin(f2 + k2 * yy);
    if (x.length) L += Math.hypot(xx - x[x.length - 1], P);
    x.push(xx); y.push(yy); s.push(L); w.push(w0 * (0.6 + 0.75 * Math.max(0, Math.min(1, yy / CH))));
  }
  const img = doc.createElement('canvas'); img.width = cv.width; img.height = cv.height;
  const g = img.getContext('2d');
  g.setTransform(DPR, 0, 0, DPR, 0, 0); g.lineCap = 'round'; g.lineJoin = 'round';
  /* cores opacas (a cor do caso misturada ao fundo, como na Foz): os trechos se sobrepõem sem acumular brilho */
  const cor = t.cor, nucleo = clareia(cor, 0.12);
  [[v => v * 2 + 9, cor, 0.12], [v => v, cor, 0.44], [v => Math.max(0.7, v * 0.24), nucleo, 0.9]].forEach(([lw, c, a]) => {
    g.strokeStyle = rgba(sobreFundo(c, a), 1);
    for (let i = 0; i < x.length - 1; i += 6){
      const j = Math.min(x.length - 1, i + 6);
      g.beginPath(); g.lineWidth = lw((w[i] + w[j]) / 2); g.moveTo(x[i], y[i]);
      for (let q = i + 1; q <= j; q++) g.lineTo(x[q], y[q]);
      g.stroke();
    }
  });
  const gotas = [];
  for (let k = 0; k < 12; k++) gotas.push({ s: R() * L, v: 34 + 34 * R(), u: (R() - 0.5) * 0.7 });
  const r = { id: t.id, img, x, y, w, s, L, gotas, sp: gota(cor, largo ? 2.6 : 2.3) };
  cache.set(chave, r);
  return r;
}
function trocaRio(t){
  if (!CW) mede();
  const novo = t ? fazRio(t) : null;
  if (novo === rio) return;
  rioAntes = rio; rio = novo; mistura = REDUZ ? 1 : 0;
}
function desenha(dt){
  if (!CW) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, cv.width, cv.height);
  mistura = Math.min(1, mistura + dt / 0.55);
  if (rioAntes && mistura < 1){ ctx.globalAlpha = 1 - mistura; ctx.drawImage(rioAntes.img, 0, 0); }
  if (rio){
    ctx.globalAlpha = mistura; ctx.drawImage(rio.img, 0, 0);
    if (!REDUZ){
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const r = rio, n = r.x.length;
      for (const gt of r.gotas){
        gt.s += gt.v * dt; if (gt.s > r.L) gt.s -= r.L;
        let lo = 0, hi = n - 1;
        while (hi - lo > 1){ const m = (lo + hi) >> 1; if (r.s[m] <= gt.s) lo = m; else hi = m; }
        const f = r.s[hi] > r.s[lo] ? (gt.s - r.s[lo]) / (r.s[hi] - r.s[lo]) : 0;
        const px = r.x[lo] + (r.x[hi] - r.x[lo]) * f + gt.u * r.w[lo] * 0.5, py = r.y[lo] + (r.y[hi] - r.y[lo]) * f;
        const a = mistura * Math.min(1, gt.s / 60) * Math.min(1, (r.L - gt.s) / 60) * 0.9;
        if (a <= 0.02) continue;
        ctx.globalAlpha = a;
        ctx.drawImage(r.sp.img, px - r.sp.r, py - r.sp.r, r.sp.r * 2, r.sp.r * 2);
      }
    }
  }
  ctx.globalAlpha = 1;
  if (mistura >= 1) rioAntes = null;
}

/* ---------- toque, arrasto, segurar ---------- */
const interativo = el => !!(el && el.closest && el.closest('a,button,input,select,textarea,label,[role="button"]'));
let toque = null, seguraT = 0, suprime = false;
card.addEventListener('pointerdown', ev => {
  suprime = false;
  if ((ev.button && ev.button !== 0) || interativo(ev.target)) return;
  toque = { x: ev.clientX, y: ev.clientY };
  clearTimeout(seguraT);
  seguraT = setTimeout(() => { if (toque){ segura = true; card.classList.add('segura'); } }, 240);
});
card.addEventListener('pointermove', ev => {
  if (toque && (Math.abs(ev.clientX - toque.x) > 10 || Math.abs(ev.clientY - toque.y) > 10)) clearTimeout(seguraT);
}, { passive: true });
function solta(ev){
  clearTimeout(seguraT);
  const t = toque; toque = null;
  if (segura){ segura = false; card.classList.remove('segura'); suprime = true; ultimoT = 0; agenda(); return; }
  if (!t || ev.type === 'pointercancel') return;
  const dx = ev.clientX - t.x, dy = ev.clientY - t.y;
  if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.3){ suprime = true; if (dx < 0) prox(); else ant(); }
}
card.addEventListener('pointerup', solta);
card.addEventListener('pointercancel', solta);
card.addEventListener('lostpointercapture', () => { clearTimeout(seguraT); if (segura){ segura = false; card.classList.remove('segura'); agenda(); } });
card.addEventListener('contextmenu', ev => { if (!interativo(ev.target)) ev.preventDefault(); });
/* tocou em enviar, na fonte ou na ficha: a tela espera (volta a andar ao passar de tela ou no ▶) */
card.addEventListener('click', ev => {
  if (ev.target.closest && ev.target.closest('.r6-tela a, .r6-tela button') && !ev.target.closest('#r6-denovo')){ espera = true; mostraPausa(); }
}, true);
card.addEventListener('click', ev => {
  if (suprime){ suprime = false; return; }
  if (interativo(ev.target)) return;
  const r = card.getBoundingClientRect();
  if (ev.clientX - r.left < r.width * 0.3) ant(); else prox();
});
btAnt.addEventListener('click', ant);
btProx.addEventListener('click', prox);
btPausa.addEventListener('click', () => {
  if (!tocando || espera){ tocando = true; espera = false; } else tocando = false;
  if (tocando && atual === FIM) vai(0);
  mostraPausa(); ultimoT = 0; agenda();
});
if (ind) ind.addEventListener('click', ev => {
  const a = ev.target.closest && ev.target.closest('a[data-i]');
  if (!a) return;
  ev.preventDefault(); vai(+a.dataset.i);
});
$('#r6-denovo').addEventListener('click', () => { tocando = true; espera = false; mostraPausa(); vai(0); ultimoT = 0; agenda(); });
/* sair: volta para onde a pessoa estava no site; vinda de fora, vai para a abertura */
$('#r6-sai').addEventListener('click', ev => {
  try {
    if (doc.referrer && new URL(doc.referrer).origin === location.origin && history.length > 1 && !/rio60\.html/.test(doc.referrer)){
      ev.preventDefault(); history.back();
    }
  } catch (_){}
});

/* envio da tela final: o tópico "rio60" quando existir; até lá, o cartão da abertura com o texto e o link destas telas */
function enviaTudo(){
  const B = window.BDShare, url = base() + 'rio60.html';
  if (B && TOP().rio60){ B.enviar('rio60'); return; }
  const texto = '*O rio em 60 segundos*: ' + NT + ' casos em volta dele, um por tela, cada um com o número, a situação e a fonte.\nFlávio Bolsonaro · BOLSODRIVE\n';
  if (B){ B.enviar('abertura', { texto, url, titulo: 'O rio em 60 segundos' }); return; }
  window.open('https://wa.me/?text=' + encodeURIComponent(texto + url), '_blank', 'noopener');
}
$('#r6-envia-tudo').addEventListener('click', enviaTudo);
/* caso sem tópico gerado (não deve acontecer; os 8 têm): texto curto do caso com o link da ficha */
telasEl.addEventListener('click', ev => {
  const b = ev.target.closest && ev.target.closest('[data-r6-caso]');
  if (!b) return;
  const t = TELAS.find(x => x.id === b.getAttribute('data-r6-caso'));
  if (!t) return;
  const texto = t.nome + ': ' + (t.n ? t.n.valor + ' ' : '') + t.frase + '\nBOLSODRIVE\n', url = base() + 'foz.html#' + t.id;
  if (window.BDShare) window.BDShare.enviar('abertura', { texto, url });
  else window.open('https://wa.me/?text=' + encodeURIComponent(texto + url), '_blank', 'noopener');
});

/* teclado: ← → passam, espaço pausa, Home/End; nada com o menu do site aberto */
doc.addEventListener('keydown', ev => {
  if (ev.altKey || ev.ctrlKey || ev.metaKey || menuAberto()) return;
  const k = ev.key, emControle = ev.target && ev.target.closest && ev.target.closest('a,button,input,textarea,select');
  if (k === 'ArrowRight' || k === 'PageDown'){ ev.preventDefault(); prox(); }
  else if (k === 'ArrowLeft' || k === 'PageUp'){ ev.preventDefault(); ant(); }
  else if ((k === ' ' || k === 'Spacebar') && !emControle){ ev.preventDefault(); btPausa.click(); }
  else if (k === 'Home' && !emControle){ ev.preventDefault(); vai(0); }
  else if (k === 'End' && !emControle){ ev.preventDefault(); vai(FIM); }
});
/* foco de teclado dentro da tela: para (quem navega por Tab lê no próprio ritmo) */
card.addEventListener('focusin', ev => {
  let v = false; try { v = ev.target.matches(':focus-visible'); } catch (_){}
  focoTec = v && !!(ev.target.closest && ev.target.closest('.r6-tela'));
});
card.addEventListener('focusout', ev => {
  const r = ev.relatedTarget;
  if (!r || !card.contains(r) || !(r.closest && r.closest('.r6-tela'))){ focoTec = false; ultimoT = 0; agenda(); }
});
doc.addEventListener('visibilitychange', () => { oculto = !!doc.hidden; ultimoT = 0; if (!oculto) agenda(); });
/* o menu do site fechou: volta a andar */
new MutationObserver(() => { ultimoT = 0; agenda(); }).observe(doc.body, { subtree: true, attributes: true, attributeFilter: ['hidden'] });

/* link direto: rio60.html#<id> */
function doHash(){
  const h = decodeURIComponent((location.hash || '').slice(1));
  if (!h) return -1;
  if (h === 'os-40' || h === 'fim') return FIM;
  let k = TELAS.findIndex(t => t.id === h);
  if (k < 0 && REDIR[h]) k = TELAS.findIndex(t => t.id === REDIR[h]);
  return k;
}
window.addEventListener('hashchange', () => { const k = doHash(); if (k >= 0) vai(k); });

/* dica na primeira visita (some no primeiro toque ou em 5 s) */
let dicaT = 0;
function escondeDica(){ clearTimeout(dicaT); if (!dica.hidden){ dica.classList.add('sai'); setTimeout(() => { dica.hidden = true; }, 400); } }
function mostraDica(){
  if (atual === FIM) return;
  let vista = false;
  try { vista = localStorage.getItem('r6_dica') === '1'; localStorage.setItem('r6_dica', '1'); } catch (_){}
  if (vista) return;
  const fino = window.matchMedia && matchMedia('(pointer:fine)').matches;
  dica.textContent = fino ? '← → para passar · espaço pausa' : 'toque à direita para avançar';
  dica.hidden = false;
  dicaT = setTimeout(escondeDica, 5000);
}

/* movimento reduzido ligado/desligado com a página aberta */
const mudaReduz = () => { REDUZ = !!mqReduz.matches; card.classList.toggle('reduz', REDUZ); if (REDUZ){ if (raf){ cancelAnimationFrame(raf); raf = 0; } poeBarra(atual, 1); } ultimoT = 0; agenda(); };
if (mqReduz.addEventListener) mqReduz.addEventListener('change', mudaReduz); else if (mqReduz.addListener) mqReduz.addListener(mudaReduz);

let redim = 0;
window.addEventListener('resize', () => {
  clearTimeout(redim);
  redim = setTimeout(() => { mede(); const t = atual >= 0 && atual < FIM ? TELAS[atual] : null; rio = t ? fazRio(t) : null; rioAntes = null; mistura = 1; ajustaTodas(); desenha(0); }, 120);
});

/* ---------- começo ---------- */
card.classList.toggle('reduz', REDUZ);
mostraPausa();
mede();
const k0 = doHash();
vai(k0 >= 0 ? k0 : 0, 'inicio');
mostraDica();
/* as fontes do sistema já estão prontas; o ajuste de novo depois do load cobre a largura final do cabeçalho */
window.addEventListener('load', () => { mede(); rio = atual < FIM ? fazRio(TELAS[atual]) : null; rioAntes = null; mistura = 1; ajustaTodas(); desenha(0); });
})();
