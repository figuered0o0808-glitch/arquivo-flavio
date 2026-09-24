/* BolsoZap (zap.html): notícias e documentos em forma de conversa. Ninguém fala com o leitor: quem envia é a fonte.
   Dados: window.BOLSOZAP (data/zap.js, o índice) e data/zap/<id>.json (uma conversa, baixada ao abrir).
   Opcionais: window.BDNav (nav.js), window.BDShare (compartilhar.js), window.BD_TOPICOS (data/topicos-zap.js).
   Módulos: util · memória · lista · conversa · revelação · folha · menu · Dados · Atualizações · Rio · encaminhar · rotas · teclado. */
(function(){
'use strict';
const Z = window.BOLSOZAP, d = document, W = window, H = history;
const app = d.getElementById('z-app'), cv = d.getElementById('z-cv'), lista = d.getElementById('z-linhas');
if (!Z || !Array.isArray(Z.conversas) || !app || !cv || !lista) return;
const $ = (s, r) => (r || d).querySelector(s), $$ = (s, r) => Array.from((r || d).querySelectorAll(s));
const RED = !!(W.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const TUDO = RED || !('IntersectionObserver' in W);
const C = {}; Z.conversas.forEach(c => { C[c.id] = c; });
const JS = new Map(), PED = {};
const R = { aba: 'conversas', f: 'tudo', q: '', conv: null, c: null, j: null, itens: null, alvo: null, listaY: 0, convY: 0 };
if (RED) d.documentElement.classList.add('z-red');
try { H.scrollRestoration = 'manual'; } catch (e) {}

/* ---------- util ---------- */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ic = (n, k) => '<svg class="z-i' + (k ? ' ' + k : '') + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>';
const MES = 'janeiro fevereiro março abril maio junho julho agosto setembro outubro novembro dezembro'.split(' '), M3 = MES.map(m => m.slice(0, 3));
const SEM = 'domingo segunda-feira terça-feira quarta-feira quinta-feira sexta-feira sábado'.split(' ');
const p2 = n => (n < 10 ? '0' : '') + n;
const hj = new Date(), HOJE = hj.getFullYear() + '-' + p2(hj.getMonth() + 1) + '-' + p2(hj.getDate());
const pt = s => String(s || '').split('-').map(Number);
const ms = s => { const [a, m, x] = pt(s); return Date.UTC(a, (m || 1) - 1, x || 1); };
const dias = (a, b) => Math.round((ms(b) - ms(a)) / 864e5);
const fimP = s => (s = s || '').length === 4 ? s + '-12-31' : s.length === 7 ? s + '-31' : s;
function dLonga(s){ const [a, m, x] = pt(s); return x ? x + ' de ' + MES[m - 1] + ' de ' + a : m ? MES[m - 1] + ' de ' + a : '' + a; }
function dCurta(s){ const [a, m, x] = pt(s); return x ? p2(x) + '/' + p2(m) + '/' + a : m ? M3[m - 1] + '/' + a : '' + a; }
function carimbo(m){ if (m.h) return m.h; const [a, mm, x] = pt(m.d); return x ? x + ' ' + M3[mm - 1] : mm ? M3[mm - 1] + ' ' + a : '' + a; }
function dLista(s){
  if (s.length < 10) return dCurta(s);
  const n = dias(s, HOJE);
  return n === 0 ? 'Hoje' : n === 1 ? 'Ontem' : n > 1 && n < 7 ? SEM[new Date(ms(s)).getUTCDay()] : dCurta(s);
}
/* linha única com reticências: com valor em R$, a atribuição final (", segundo a PF") vai para a frente e não some no corte */
const frente = t => { const m = /^(.*R\$.*?),\s*segundo (a|o) ([^,.;]+)\.?$/.exec(t || ''); return m ? 'Segundo ' + m[2] + ' ' + m[3] + ', ' + m[1] + '.' : t; };
const pub = x => x && x.d ? 'publicada em ' + dCurta(x.d) : '';
const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const aspas = s => /^[“"…]/.test(s) ? s : '“' + s + '”';
const corta = (s, n) => (s = String(s || '')).length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s;
const ini = v => (String(v).match(/[A-Za-zÀ-ÿ0-9]/) || ['?'])[0].toUpperCase();
const art = s => /^(PF|PGR|Câmara|Alerj|CGU|Polícia)/.test(s) ? 'a' : 'o';
const umaCol = () => innerWidth < 768;
function aviso(t){
  let a = R.av;
  if (!a){ a = R.av = d.createElement('div'); a.className = 'z-aviso'; a.setAttribute('role', 'status'); d.body.appendChild(a); }
  a.textContent = t; a.style.opacity = '1'; clearTimeout(R.avT); R.avT = setTimeout(() => { a.style.opacity = '0'; }, 2400);
}

/* ---------- memória (localStorage/sessionStorage, sempre com try) ---------- */
function st(k, v, s){
  try { const S = s ? W.sessionStorage : W.localStorage; if (v === undefined) return JSON.parse(S.getItem(k) || 'null'); S.setItem(k, JSON.stringify(v)); } catch (e) {}
  return null;
}
const MEM = (o => o && typeof o === 'object' ? o : {})(st('zap:v1'));
const VIS = new Set(st('zap:vistos') || []);
const EU = st('zap:eu', undefined, 1) || [];
let memT = 0;
function grava(){ clearTimeout(memT); memT = setTimeout(() => { st('zap:v1', MEM); if (R.c) linhaDe(R.c.id); }, 500); }
function naoLidas(c){
  const m = MEM[c.id]; if (!m || !m.ate) return c.n;
  const i = c.ids.indexOf(m.ate);
  let n = i < 0 ? Math.max(0, c.n - (m.n | 0)) : c.ids.length - 1 - i;
  if (m.em && c.p) for (let k = 0; k <= i; k++) if ((c.p[c.ids[k]] || '') > m.em) n++;
  return n;
}

/* ---------- lista ---------- */
function ordem(){
  return Z.conversas.slice().sort((a, b) => (a.fix && b.fix) ? a.fix - b.fix : a.fix ? -1 : b.fix ? 1 :
    fimP(b.ult.d) < fimP(a.ult.d) ? -1 : fimP(b.ult.d) > fimP(a.ult.d) ? 1 : (b.n - a.n) || a.nome.localeCompare(b.nome, 'pt'));
}
const av = (c, k) => '<span class="z-av' + (c.tipo === 'e' ? ' z-q' : '') + (k || '') + '" aria-hidden="true">' + esc(c.av) + '</span>';
/* quando a prévia já abre com quem falou ('Flávio: “…”'), o remetente vai com ' · ', para não somar dois ':' */
const sepDe = u => u.qc ? ' · ' : ': ';
function linhaHtml(c){
  const n = naoLidas(c), u = c.ult, dt = dLista(u.d), e = EU.filter(x => x.c === c.id).pop();
  const pv = e ? ic('tq') + 'Você: encaminhou ' + (e.m ? 'uma mensagem' : 'esta conversa')
    : (u.k === 'doc' ? ic('doc') : u.k === 'aud' ? ic('mic') : '') + esc((u.de ? u.de + sepDe(u) : '') + frente(u.t));
  const rot = c.nome + (n ? ', ' + n + (n > 1 ? ' mensagens não lidas' : ' mensagem não lida') : '') + (c.fix ? ', fixada' : '') + ', ' + dt + '. ' + (u.de ? u.de + sepDe(u) : '') + u.t;
  return '<li class="z-linha" data-c="' + c.id + '"' + (c.id === R.conv ? ' aria-current="true"' : '') + '><a class="z-la" href="#' + c.id + '" data-ir="' + c.id + '" aria-label="' + esc(rot) + '">' + av(c) +
    '<span class="z-lc" aria-hidden="true"><span class="z-l1"><b>' + esc(c.nome) + '</b><span class="z-ld' + (n ? ' z-ac' : '') + '">' + dt + '</span></span>' +
    '<span class="z-l2"><span class="z-lp">' + pv + '</span>' + (c.fix ? ic('pin') : '') + (n ? '<b class="z-cont">' + n + '</b>' : '') + '</span></span></a></li>';
}
function desenhaLista(){
  const q = norm(R.q);
  const l = ordem().filter(c => (R.f === 'tudo' || (R.f === 'nl' ? naoLidas(c) > 0 : c.tipo === R.f)) &&
    (!q || norm(c.nome + ' ' + c.papel + ' ' + (c.sit ? c.sit.t : '')).includes(q)));
  lista.innerHTML = l.map(linhaHtml).join('');
  $('#z-vazio').hidden = l.length > 0;
  contaNl();
}
function contaNl(){ const n = Z.conversas.filter(c => naoLidas(c) > 0).length; $('#z-nnl').textContent = n || ''; }
function linhaDe(id){
  const li = lista.querySelector('[data-c="' + id + '"]');
  if (li && !li.contains(d.activeElement)) li.outerHTML = linhaHtml(C[id]);
  contaNl();
}

/* ---------- conversa ---------- */
function carrega(c){
  if (!PED[c.id]) PED[c.id] = fetch(c.arq).then(r => { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
    .then(j => { JS.set(c.id, j); return j; }).catch(e => { delete PED[c.id]; throw e; });
  return PED[c.id];
}
const pil = (h, k) => '<span class="z-pil' + (k ? ' ' + k : '') + '">' + h + '</span>';
const leit = t => '<li class="z-sep z-leit" data-t="d" role="note">' + pil(esc(t)) + '</li>';
function sepHtml(s, ant){
  let t = s === HOJE ? 'Hoje' : s.length === 10 && dias(s, HOJE) === 1 ? 'Ontem' : dLonga(s);
  if (ant){ const n = dias(ant, s); if (n > 730) t += ' · ' + Math.floor(n / 365.25) + ' anos depois'; }
  return '<li class="z-sep" data-t="d" role="note">' + pil(esc(t)) + '</li>';
}
const ICS = { justica: 'bal', policia: 'esc', revelacao: 'cad2', temporario: 'cro', cargo: 'pes' };
function sisHtml(m){
  return '<li class="z-msg z-sis" id="zm-' + m.id + '" data-id="' + m.id + '" data-t="s" data-fontes="' + (m.f || []).length + '" role="note" tabindex="-1">' +
    '<button type="button" aria-haspopup="dialog">' + pil(ic(ICS[m.ic] || 'info') + esc(m.t) + ' · ' + dCurta(m.d)) + '</button></li>';
}
function previa(f){
  const a = f[0]; if (!a) return '';
  return '<a class="z-prev" href="' + esc(a.u) + '" target="_blank" rel="noopener" aria-label="' + (a.doc ? 'Documento' : 'Reportagem') + ': ' + esc(a.v) + (a.d ? ', ' + pub(a) : '') + ' (abre em outra aba)">' +
    '<span class="z-pi" aria-hidden="true">' + (a.doc ? ic('doc') : esc(ini(a.v))) + '</span><span class="z-pv"><b>' + esc(a.doc ? 'Documento · ' + a.dom : a.v) + '</b><span>' + esc(a.doc ? a.v : a.dom) +
    (f.length > 1 ? ' · +' + (f.length - 1) + (f.length > 2 ? ' fontes' : ' fonte') : '') + '</span>' + (a.d ? '<span>' + pub(a) + '</span>' : '') + '</span>' + ic('ext') + '</a>';
}
const quemMeio = q => q.quem + (q.a ? ', ' + q.a : '') + ' · ' + q.meio;
function balHtml(m, cab){
  const f = m.f || [], q = m.q;
  const rot = m.de + ', ' + dLonga(m.d) + (m.h ? ', ' + m.h : '') + ': ' + (q ? quemMeio(q) + ': ' + aspas(q.t) + (m.t ? ' ' + m.t : '') : m.t) + (m.anota ? ' Depois: ' + m.anota.t + ', ' + dCurta(m.anota.d) + '.' : '');
  let h = '<li class="z-msg z-bl' + (cab ? ' z-cab' : '') + (m.dest ? ' z-dest' : '') + '" id="zm-' + m.id + '" data-id="' + m.id + '" data-t="m" data-de="' + esc(m.de) + '" data-cat="' + m.cat +
    '" data-n="' + ((m.t || '').length + (q ? q.t.length : 0)) + '" data-fontes="' + f.length + '" tabindex="-1" aria-label="' + esc(rot) + '"><div class="z-bal">';
  if (cab) h += '<span class="z-de ' + (m.cat === 'inst' ? 'z-ins' : 'z-imp') + '">' + esc(m.de) + '</span>';
  if (m.enc) h += '<span class="z-encm">' + ic('enc') + 'Encaminhada</span>';
  if (m.k === 'aud'){ const o = m.de.split(' · ')[0]; h += '<span class="z-aud">' + ic('mic') + 'Transcrição de áudio, segundo ' + art(o) + ' ' + esc(o) + '</span>'; }
  if (q) h += '<blockquote class="z-cit"><span class="z-qq">' + esc(quemMeio(q)) + '</span>' + esc(aspas(q.t)) + '</blockquote>';
  if (m.t) h += '<p class="z-tx">' + esc(m.t) + '</p>';
  h += previa(f);
  if (m.anota) h += '<p class="z-anota">' + ic('info') + '<span>Depois: ' + esc(m.anota.t) + ' · ' + dCurta(m.anota.d) + '</span></p>';
  return h + '<span class="z-hora">' + (m.ed ? '<em>editada</em>' : '') + carimbo(m) + '</span><button type="button" class="z-mais" aria-label="Fontes desta mensagem" aria-haspopup="dialog">' + ic('bx') + '</button></div>' +
    '<button type="button" class="z-encb" aria-label="Encaminhar esta mensagem"><span>' + ic('enc') + '</span></button></li>';
}
const abrev = de => String(de || '').split(' · ')[0];
function textoFix(m){ const q = m.q; return q ? aspas(q.t) + (m.anota ? ' · Depois: ' + m.anota.t : m.t ? ' ' + m.t : '') : frente(m.t) + (m.anota ? ' · Depois: ' + m.anota.t : ''); }
function ligas(c, j){
  const L = j.liga || {}, l = [];
  if (L.foz) l.push(['Na Foz', 'foz.html#' + L.foz]);
  if (L.teia) l.push(['Na teia', 'drive.html?p=' + encodeURIComponent(L.teia) + '#rede']);
  if (L.dh) l.push(['Mês a mês', 'dark-horse.html']);
  return l;
}
function monta(c, j, alvo){
  pare();
  const M = j.m, ids = M.map(m => m.id), mem = MEM[c.id];
  R.c = c; R.j = j; R.msgs = {}; M.forEach(m => { R.msgs[m.id] = m; });
  let ai = alvo ? ids.indexOf(alvo) : -1;
  if (alvo && ai < 0){ aviso('Mensagem não encontrada'); H.replaceState(H.state, '', '#' + c.id); alvo = null; }
  const ate = ai < 0 && mem && mem.ate ? ids.indexOf(mem.ate) : -1, nl = ate >= 0 ? M.length - 1 - ate : 0, lido = ate >= 0 && !nl;
  const h = ['<li class="z-sis z-ui" data-t="s" role="note"><button type="button" data-sobre>' + pil(ic('cad') + 'Tudo nesta conversa tem fonte. Toque numa mensagem para ver a fonte.', 'z-amb') + '</button></li>',
    '<li class="z-sis z-ui" data-t="s" role="note"><button type="button" data-dados>' + pil(esc(j.criou)) + '</button></li>'];
  let sep = null, de = null;
  M.forEach((m, i) => {
    if (nl && i === ate + 1) h.push(leit(nl + (nl > 1 ? ' mensagens não lidas' : ' mensagem não lida')));
    if (m.d !== sep){ h.push(sepHtml(m.d, sep)); sep = m.d; de = null; }
    if (m.k === 'sis'){ h.push(sisHtml(m)); de = null; } else { h.push(balHtml(m, m.de !== de)); de = m.de; }
  });
  if (lido) h.push(leit('Você está em dia · conversa atualizada em ' + dCurta(j.gerado)));
  const nx = C[c.depois], lk = ligas(c, j).map(x => '<a href="' + x[1] + '">' + x[0] + '</a>');
  lk.push('<a href="zap.html" data-ir="">Todas as conversas</a>');
  h.push('<li class="z-fecho" id="z-fecho" data-t="s" tabindex="-1"><button type="button" class="z-sit" aria-haspopup="dialog">' + pil(esc(j.fecho.t)) + '</button><div class="z-fim">' +
    '<p>Fim da conversa, por enquanto · atualizada em ' + dCurta(j.gerado) + '</p><button type="button" class="z-bt1" data-enc-conv>' + ic('enc') + 'Encaminhar esta conversa</button>' +
    (nx ? '<a class="z-bt2" href="#' + nx.id + '" data-ir="' + nx.id + '">Próxima conversa: ' + esc(nx.nome) + ' →</a>' : '') +
    '<p class="z-lks">' + lk.join('<span aria-hidden="true">·</span>') + '</p></div></li>');
  const fx = j.fixada && R.msgs[j.fixada];
  cv.className = 'z-cv' + (fx ? '' : ' z-semfix');
  cv.innerHTML = '<div class="z-ccab"><button type="button" class="z-ib" data-volta aria-label="Voltar para as conversas">' + ic('vol') + '</button>' +
    '<button type="button" class="z-quem" data-dados aria-label="Dados da conversa: ' + esc(c.nome) + '">' + av(c) + '<span><b>' + esc(c.nome) + '</b><small>' + esc(c.sit ? c.sit.t : c.papel) + '</small></span></button>' +
    '<button type="button" class="z-ib" data-enc-conv aria-label="Encaminhar esta conversa">' + ic('enc') + '</button>' +
    '<button type="button" class="z-ib" data-menu="conv" aria-label="Mais opções" aria-haspopup="menu" aria-expanded="false">' + ic('mais') + '</button></div>' +
    (fx ? '<button type="button" class="z-fix" data-fix="' + fx.id + '" aria-label="Mensagem fixada: ' + esc(abrev(fx.de || (fx.f[0] || {}).v) + ': ' + textoFix(fx)) + '">' + ic('pin') + '<span><b>' + esc(abrev(fx.de || (fx.f[0] || {}).v)) + ':</b> ' + esc(textoFix(fx)) + '</span></button>' : '') +
    '<button type="button" class="z-pula">Pular para a situação atual</button><div class="z-flut" aria-hidden="true"><span class="z-pil"></span></div>' +
    '<ol class="z-fluxo" aria-label="Mensagens: ' + esc(c.nome) + '">' + h.join('') + '</ol>' +
    '<div class="z-cbaixo"><button type="button" class="z-desce" hidden aria-label="Ir para o fim da conversa"><span>' + ic('bx') + '</span><b hidden></b></button>' +
    '<p>Só as fontes enviam mensagens nesta conversa</p><button type="button" class="z-bt1" data-enc-conv aria-label="Encaminhar esta conversa">' + ic('enc') + '</button></div>';
  R.ol = $('.z-fluxo', cv); R.flut = $('.z-flut', cv); R.desce = $('.z-desce', cv); R.fecho = $('#z-fecho', cv); R.seps = null;
  R.itens = $$(':scope>li', R.ol); R.idx = new Map(R.itens.map((li, i) => [li, i]));
  R.tot = M.length;
  const iDe = id => R.itens.findIndex(li => li.dataset.id === id), N = R.itens.length;
  let k;
  if (TUDO || lido) k = N;
  else if (ai >= 0) k = iDe(alvo) + 1;
  else if (ate >= 0){ k = iDe(ids[ate]) + 1; while (k < N && R.itens[k].dataset.t === 'd') k++; }
  else { let n = 0; k = 0; while (k < N && n < 2){ if (R.itens[k].dataset.id) n++; k++; } }
  R.itens.forEach((li, i) => { li.dataset.z = i < k ? '1' : '0'; });
  R.rev = R.fila = R.inst = k; R.fase = null; R.extra = 0;
  R.nMsg = R.itens.slice(0, k).filter(li => li.dataset.id).length;
  const ult = R.itens.slice(0, k).filter(li => li.dataset.id).pop();
  if (ult && (!mem || ids.indexOf(mem.ate) < ids.indexOf(ult.dataset.id) || !mem.em)){ MEM[c.id] = { ate: ult.dataset.id, n: R.nMsg, em: HOJE }; grava(); }
  EU.filter(e => e.c === c.id).forEach(poeEu);
  if (ai >= 0){ const li = R.itens[iDe(alvo)]; posiciona(li); acende(li); }
  else if (nl) posiciona($('.z-leit', R.ol));
  else W.scrollTo(0, 0);
  if (!TUDO && k < N){
    const linha = innerHeight * .78; let n = 0, q = k, i = k;
    for (; i < N; i++){ if (R.itens[i].getBoundingClientRect().top >= linha) break; if (n < 4){ q = i + 1; if (R.itens[i].dataset.id) n++; } }
    R.io = new IntersectionObserver(vistos, { rootMargin: '0px 0px -22% 0px' });
    for (let x = i; x < N; x++) R.io.observe(R.itens[x]);
    if (q > k) enfileira(q, 0);
  }
  agenda();
}
function pare(){ clearTimeout(R.T); R.T = 0; if (R.io) R.io.disconnect(); R.io = null; digita(); }
function posiciona(li){ if (li) W.scrollTo(0, Math.max(0, li.getBoundingClientRect().top + W.scrollY - innerHeight * .3)); }
function acende(li){ li.classList.add('z-acende'); setTimeout(() => li.classList.remove('z-acende'), 1200); }
function pula(id, ac){
  const li = R.ol && R.ol.querySelector('#zm-' + id);
  if (!li){ aviso('Mensagem não encontrada'); return; }
  const i = R.idx.get(li); enfileira(i + 1, i + 1); posiciona(li); if (ac) acende(li);
}
function tudo(foco){
  if (!R.itens) return;
  enfileira(R.itens.length, R.itens.length);
  W.scrollTo(0, d.documentElement.scrollHeight);
  if (foco) R.fecho.focus({ preventScroll: true });
}

/* ---------- revelação: uma fila, um "digitando…" por vez ---------- */
function vistos(es){
  let a = -1, b = -1;
  es.forEach(e => {
    const i = R.idx && R.idx.get(e.target); if (i == null) return;
    if (e.isIntersecting) a = Math.max(a, i);
    else if (e.boundingClientRect.bottom < (e.rootBounds ? e.rootBounds.top : 0)){ a = Math.max(a, i); b = Math.max(b, i); }
  });
  if (a >= 0) enfileira(a + 1, b + 1);
}
/* tamanho da fila em mensagens (separadores não contam) */
function fila(){ let n = 0; for (let i = R.rev; i < R.fila; i++) if (R.itens[i].dataset.t !== 'd') n++; return n; }
function enfileira(a, b){
  if (!R.itens) return;
  if (b > R.inst) R.inst = b;
  if (a > R.fila){ if (R.io) for (let i = R.fila; i < a; i++) R.io.unobserve(R.itens[i]); R.fila = a; }
  if (fila() >= 5 || R.inst > R.rev){ clearTimeout(R.T); R.T = 0; passo(); }
  else if (!R.T) passo();
}
function passo(){
  R.T = 0;
  if (R.fila <= R.rev){ digita(); return; }
  const n = fila();
  if (n >= 5 || R.inst > R.rev) return rajada();
  const li = R.itens[R.rev], t = li.dataset.t;
  if (t === 'd'){ entrega(li); return passo(); }
  if (R.fase !== li){
    R.fase = li;
    if (t === 's'){ R.T = setTimeout(passo, 250); return; }
    const dur = n === 1 ? Math.min(800, 300 + 3 * (+li.dataset.n || 0)) : 200, ex = R.extra;
    const vai = () => { digita(li); R.T = setTimeout(passo, dur); };
    R.extra = 0;
    if (ex) R.T = setTimeout(vai, ex); else vai();
    return;
  }
  R.fase = null; digita(); entrega(li);
  if (t === 's') R.extra = 250;
  passo();
}
function rajada(){
  digita(); R.fase = null;
  const a = R.rev, b = Math.max(R.fila, R.inst), longe = R.inst > a;
  for (let i = a; i < b; i++){ const li = R.itens[i]; if (!longe && i - a < 10) li.style.transitionDelay = (i - a) * 30 + 'ms'; entrega(li); }
  R.fila = Math.max(R.fila, b);
}
function entrega(li){
  li.dataset.z = '1'; R.rev = R.idx.get(li) + 1;
  if (R.io) R.io.unobserve(li);
  const id = li.dataset.id;
  if (id && R.c){
    R.nMsg++;
    /* a memória só avança: reler um trecho por link direto não devolve mensagens já lidas para "não lidas" */
    const cur = MEM[R.c.id], ix = R.c.ids || [];
    if (!cur || ix.indexOf(cur.ate) <= ix.indexOf(id)){ MEM[R.c.id] = { ate: id, n: R.nMsg, em: HOJE }; grava(); }
  }
  agenda();
}
function digita(li){
  const g = R.dig;
  if (!li){ if (g && g.parentNode) g.remove(); return; }
  if (RED) return;
  if (!g){ R.dig = d.createElement('li'); R.dig.className = 'z-digitando'; R.dig.setAttribute('aria-hidden', 'true'); }
  R.dig.innerHTML = '<span class="z-de ' + (li.dataset.cat === 'inst' ? 'z-ins' : 'z-imp') + '">' + esc(li.dataset.de) + '</span><i></i><i></i><i></i>';
  R.dig.style.top = li.offsetTop + 'px';
  R.ol.appendChild(R.dig);
}
/* um quadro por rolagem: fim da página, data flutuante e ↓ */
function agenda(){ if (!R.raf) R.raf = requestAnimationFrame(quadro); }
function quadro(){
  R.raf = 0; if (!R.itens || !R.conv) return;
  const y = W.scrollY, h = innerHeight;
  if (!TUDO && R.fila < R.itens.length && y + h >= d.documentElement.scrollHeight - 6) enfileira(R.itens.length, 0);
  const f = R.flut;
  if (!R.seps) R.seps = $$('.z-sep:not(.z-leit)', R.ol).map(li => [li.getBoundingClientRect().top + y, li.textContent]);
  /* a data que já saiu por cima; quando um separador de verdade está passando pela vaga dela, ela some (nada de duas pílulas empilhadas) */
  const ft = R.j && R.j.fixada ? 118 : 70;
  let t = '', perto = false;
  for (const s of R.seps){ const v = s[0] - y; if (v <= ft + 4){ t = s[1]; perto = v > ft - 34; } else { if (v < ft + 34) perto = true; break; } }
  if (t && y > 40 && !perto){
    f.firstChild.textContent = t; f.classList.add('on');
    if (!RED){ clearTimeout(R.flT); R.flT = setTimeout(() => f.classList.remove('on'), 1000); }
  } else f.classList.remove('on');
  const b = R.desce, falta = R.tot - R.nMsg;
  b.hidden = R.fecho.getBoundingClientRect().top < h;
  b.lastChild.hidden = !falta; b.lastChild.textContent = falta;
  b.setAttribute('aria-label', 'Ir para o fim da conversa' + (falta ? ', ' + falta + (falta > 1 ? ' mensagens a aparecer' : ' mensagem a aparecer') : ''));
}

/* ---------- folha de fontes ---------- */
const linkF = x => '<a class="z-fl" href="' + esc(x.u) + '" target="_blank" rel="noopener"><span>' + esc(x.v) + (x.d ? ' · ' + pub(x) : '') + '</span>' + ic('ext') + '</a>';
const acao = (i, t, a) => '<button type="button" class="z-fa" ' + a + '>' + ic(i) + t + '</button>';
function abreFolha(html, ancora){
  const F = $('#z-folha'), V = $('#z-veu'), pop = innerWidth >= 1024 && !!ancora;
  if (!R.folha) R.folha = { volta: d.activeElement };
  F.innerHTML = '<div class="z-alca" aria-hidden="true"><i></i></div>' + html + '<button type="button" class="z-fa" data-fecha>' + ic('vol') + 'Fechar</button>';
  F.classList.toggle('z-pop', pop); V.classList.toggle('z-pop', pop);
  F.style.translate = ''; F.hidden = V.hidden = false;
  if (pop){
    const r = ancora.getBoundingClientRect(); let x = r.right + 12;
    if (x + 360 > innerWidth - 12) x = Math.max(12, innerWidth - 376);
    F.style.left = x + 'px'; F.style.top = Math.max(12, Math.min(r.top, innerHeight - F.offsetHeight - 12)) + 'px';
  } else F.style.left = F.style.top = '';
  if (!(H.state && H.state.folha)){ H.pushState(Object.assign({}, H.state, { folha: 1, z: ((H.state && H.state.z) || 0) + 1 }), ''); R.folha.push = 1; }
  const a = F.querySelector('a[href],button'); if (a) a.focus({ preventScroll: true });
}
function fechaFolha(){ if (!R.folha) return; if (R.folha.push && H.state && H.state.folha) H.back(); else escondeFolha(); }
function escondeFolha(){
  const F = $('#z-folha'); F.hidden = $('#z-veu').hidden = true;
  const v = R.folha && R.folha.volta; R.folha = null;
  if (v && v.isConnected && v.focus) v.focus({ preventScroll: true });
}
function folhaMsg(m, ancora){
  if (!m) return;
  const f = m.f || [], a = f[0], L = (R.j && R.j.liga) || {};
  let h = '<p class="z-ft" id="z-folha-t">Mensagem de ' + dCurta(m.d) + ' · ' + f.length + (f.length === 1 ? ' fonte' : ' fontes') + '</p>';
  if (a) h += '<a class="z-f1" href="' + esc(a.u) + '" target="_blank" rel="noopener">' + esc(a.doc ? 'Abrir documento · ' + a.dom : 'Abrir reportagem · ' + a.v) + ic('ext') + '</a>';
  f.slice(1).forEach(x => { h += linkF(x); });
  if (m.ed) h += '<p class="z-fnota">Corrigida em ' + dCurta(m.ed.d) + ': ' + esc(m.ed.nota) + '</p>';
  if (m.anota){ h += '<p class="z-fk">Depois · ' + dCurta(m.anota.d) + '</p><p class="z-fnota">' + esc(m.anota.t) + '</p>'; m.anota.f.forEach(x => { h += linkF(x); }); }
  h += '<p class="z-fk">Esta mensagem</p>' + acao('enc', 'Encaminhar esta mensagem', 'data-enc-msg') + acao('doc', 'Copiar com a fonte', 'data-copia="f"') + acao('ext', 'Copiar link', 'data-copia="l"') +
    (L.foz ? '<a class="z-fa" href="foz.html#' + L.foz + '">' + ic('rio') + 'Na Foz</a>' : '') + acao('info', 'Dados da mensagem', 'data-dm aria-expanded="false"') +
    '<dl class="z-fdl" hidden><dt>Data do fato</dt><dd>' + dLonga(m.d) + (m.h ? ', ' + m.h : '') + '</dd>' + (a && a.d ? '<dt>Publicada em</dt><dd>' + dCurta(a.d) + ' (' + esc(a.v) + ')</dd>' : '') +
    (m.p ? '<dt>No BolsoZap</dt><dd>desde ' + dCurta(m.p) + '</dd>' : '') + (L.q ? '<dt>No arquivo</dt><dd><a href="drive.html?q=' + encodeURIComponent(L.q) + '#arquivo">buscar “' + esc(L.q) + '”</a></dd>' : '') + '</dl>';
  R.fm = m; abreFolha(h, ancora);
}
function folhaSit(b){
  const f = (R.j.fecho.f || []);
  abreFolha('<p class="z-ft" id="z-folha-t">Situação · ' + f.length + (f.length === 1 ? ' fonte' : ' fontes') + '</p><p class="z-fnota">' + esc(R.j.fecho.t) + '</p>' + f.map(linkF).join('') +
    '<p class="z-fk">Esta conversa</p>' + acao('enc', 'Encaminhar esta conversa', 'data-enc-conv') + acao('ext', 'Copiar link', 'data-copia="c"'), b);
}
function folhaLink(k){
  const t = (W.BD_TOPICOS || {})[k] || {};
  R.fm = null;
  abreFolha('<p class="z-ft" id="z-folha-t">Encaminhar</p><p class="z-fnota">' + esc(t.texto) + '</p>' + acao('ext', 'Copiar link', 'data-copia="u" data-u="' + esc(t.url) + '"') +
    acao('doc', 'Copiar texto e link', 'data-copia="t" data-u="' + esc((t.texto || '') + ' ' + (t.url || '')) + '"'));
}
function copia(s){
  const ok = () => aviso('Copiado');
  if (navigator.clipboard && W.isSecureContext) navigator.clipboard.writeText(s).then(ok, () => velho(s)); else velho(s);
}
function velho(s){
  const t = d.createElement('textarea'); t.value = s; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;top:0;opacity:0';
  d.body.appendChild(t); t.select(); let ok = false; try { ok = d.execCommand('copy'); } catch (e) {}
  t.remove(); aviso(ok ? 'Copiado' : 'Não foi possível copiar');
}
function comFonte(c, m){
  const a = (m.f || [])[0] || {}, q = m.q;
  const corpo = m.k === 'sis' ? m.t + ' · ' + dCurta(m.d) : q ? quemMeio(q) + ': ' + aspas(q.t) + (m.t ? ' ' + m.t : '') : m.t;
  return corpo + ' — Fonte: ' + a.v + (a.d ? ', ' + dCurta(a.d) : '') + ': ' + a.u + ' · BolsoZap: ' + linkMsg(c, m);
}

/* ---------- menu (⋮) ---------- */
function menu(b){
  if (R.menu && R.menu.bt === b) return fechaMenu(1);
  const it = [], N = W.BDNav;
  if (b.dataset.menu === 'lista') it.push(['Sobre o BolsoZap', sobre]);
  else {
    it.push(['Dados da conversa', abreDados], ['Encaminhar conversa', enviaConv], ['Ler do começo', doComeco]);
    ligas(R.c, R.j || {}).forEach(x => it.push(x));
  }
  if (N && N.abre) it.push(['Mapa do rio', () => N.abre()]);
  fechaMenu();
  const M = $('#z-menu');
  M.innerHTML = it.map((x, i) => typeof x[1] === 'string' ? '<a role="menuitem" href="' + x[1] + '">' + esc(x[0]) + '</a>' : '<button type="button" role="menuitem" data-i="' + i + '">' + esc(x[0]) + '</button>').join('');
  M.hidden = false; R.menu = { bt: b, it }; b.setAttribute('aria-expanded', 'true');
  const r = b.getBoundingClientRect();
  M.style.top = Math.max(8, Math.min(r.bottom + 4, innerHeight - M.offsetHeight - 8)) + 'px';
  M.style.left = Math.max(8, Math.min(r.right - M.offsetWidth, innerWidth - M.offsetWidth - 8)) + 'px';
  M.firstChild.focus();
}
function fechaMenu(foco){
  if (!R.menu) return;
  $('#z-menu').hidden = true; R.menu.bt.setAttribute('aria-expanded', 'false');
  if (foco) R.menu.bt.focus(); R.menu = null;
}
function sobre(){ const S = $('#z-sobre'); if (S.showModal){ if (!S.open) S.showModal(); } else S.setAttribute('open', ''); }

/* ---------- Dados da conversa ---------- */
function abreDados(){ if (R.conv && !R.dados){ R.dPush = 1; ir(R.conv + '/dados'); } }
function fechaDados(){ if (R.dPush && H.state && H.state.z > 0){ R.dPush = 0; H.back(); } else ir(R.conv, 1); }
function desenhaDados(){
  const c = R.c, j = R.j, D = $('#z-dados'); if (!c || !j) return;
  const G = {};
  j.m.forEach(m => (m.f || []).concat(m.anota ? m.anota.f : []).forEach(x => { (G[x.v] = G[x.v] || new Map()).set(x.u, x); }));
  const vs = Object.keys(G).sort((a, b) => G[b].size - G[a].size || a.localeCompare(b, 'pt'));
  const nF = vs.reduce((s, v) => s + G[v].size, 0), lg = ligas(c, j), L = j.liga || {};
  const bts = [acao('enc', 'Encaminhar', 'data-enc-conv').replace('z-fa', 'z-db')].concat(lg.filter(x => x[0] !== 'Mês a mês').map(x => '<a href="' + x[1] + '">' + ic(x[0] === 'Na Foz' ? 'rio' : 'pes') + x[0] + '</a>'));
  const cm = (c.comum || []).filter(id => C[id]);
  D.innerHTML = '<div class="z-dcab"><button type="button" class="z-ib" data-fecha-dados aria-label="Fechar os dados da conversa">' + ic('vol') + '</button><span>Dados da conversa</span></div>' +
    '<div class="z-dtop">' + av(c) + '<h2>' + esc(c.nome) + '</h2><p>' + esc(c.papel) + '</p><div class="z-dbts">' + bts.join('') + '</div></div>' +
    (c.sit ? '<section class="z-dsec"><h3 class="z-dk">Situação</h3><p>' + esc(c.sit.t) + '</p><p class="z-fs">' + (c.sit.f || []).map(x => '<a href="' + esc(x.u) + '" target="_blank" rel="noopener">' + esc(x.v) + (x.d ? ', ' + dCurta(x.d) : '') + ic('ext') + '</a>').join('<span aria-hidden="true">·</span>') + '</p></section>' : '') +
    '<section class="z-dsec"><h3 class="z-dk">Links e documentos · ' + nF + '</h3>' + vs.map(v => '<div class="z-dv"><b>' + esc(v) + '</b><div>' +
      Array.from(G[v].values()).sort((a, b) => fimP(a.d) < fimP(b.d) ? -1 : 1).map(x => '<a href="' + esc(x.u) + '" target="_blank" rel="noopener" aria-label="' + esc(x.v + (x.d ? ', ' + pub(x) : '')) + '">' + (pub(x) || 'reportagem') + ic('ext') + '</a>').join('') + '</div></div>').join('') + '</section>' +
    (cm.length ? '<section class="z-dsec"><h3 class="z-dk">Em comum · ' + cm.length + '</h3>' + cm.map(mini).join('') + '</section>' : '') +
    '<section class="z-dsec"><h3 class="z-dk">No resto do rio</h3><div class="z-dl">' + lg.map(x => '<a href="' + x[1] + '">' + x[0] + '</a>').join('') +
      (L.q ? '<a href="drive.html?q=' + encodeURIComponent(L.q) + '#arquivo">No arquivo</a>' : '') + '</div></section>' +
    '<section class="z-dsec"><h3 class="z-dk">Como esta conversa foi montada</h3><p class="z-dtx">Cada mensagem é uma reportagem ou um documento público; quem envia é quem publicou. As falas são citações literais, com quem disse, a quem e por qual meio. Toque em qualquer mensagem para abrir a fonte.</p></section>';
}
const mini = id => { const c = C[id]; return '<a class="z-mini" href="#' + id + '" data-ir="' + id + '">' + av(c) + '<span><b>' + esc(c.nome) + '</b><small>' + esc(c.papel) + '</small></span></a>'; };

/* ---------- Atualizações e Rio ---------- */
function recentes(){
  const r = (Z.recentes || []).filter(x => C[x.c]), l = r.filter(x => { const n = dias(x.d, HOJE); return n >= 0 && n <= 14; });
  return l.length ? [l, 'Fatos dos últimos 14 dias nestas conversas'] : [r.slice(0, 10), 'Últimas atualizações'];
}
function pontoAt(){ const [l] = recentes(), v = l.some(x => !VIS.has(x.c + '/' + x.m)); $$('.z-ponto').forEach(p => { p.hidden = !v; }); }
/* uma linha por conversa, como no app: o fato mais recente e quantos há; o toque abre no mais antigo do período, e a leitura desce pelos outros */
function desenhaAt(){
  const [l, tit] = recentes(), G = [], por = {};
  l.forEach(x => { let g = por[x.c]; if (!g){ g = por[x.c] = []; G.push(g); } g.push(x); });
  $('#z-atualizacoes').innerHTML = '<div class="z-scab"><h2>Atualizações</h2></div><p class="z-atop">' + ic('cro') + tit + '</p><ul class="z-linhas">' + G.slice(0, 10).map(g => {
    const x = g[0], o = g[g.length - 1], c = C[x.c], k = o.c + '/' + o.m, n = dias(x.d, HOJE), ks = g.map(y => y.c + '/' + y.m);
    return '<li class="z-linha z-at' + (ks.every(y => VIS.has(y)) ? ' z-visto' : '') + '"><a class="z-la" href="#' + k + '" data-ir="' + k + '" data-visto="' + ks.join(' ') + '">' + av(c) +
      '<span class="z-lc"><span class="z-l1"><b>' + esc(c.nome) + '</b></span><span class="z-lp">' + (n === 0 ? 'hoje' : n === 1 ? 'ontem' : 'há ' + n + ' dias') +
      (g.length > 1 ? ' · ' + g.length + ' fatos' : x.de ? ' · ' + esc(x.de) : '') + '</span><span class="z-lp" style="color:var(--z-texto)">' + esc(frente(x.t)) + '</span></span></a></li>';
  }).join('') + '</ul>';
}
const FT = [['Nascente', 'index.html', 'a abertura: o rio numa tela só'], ['Quem anda com ele', 'drive.html#rede', 'a teia de nomes em volta dele'], ['O dinheiro', 'siga-o-dinheiro.html', 'de onde vem e para onde vai'], ['A Foz', 'foz.html', 'os escândalos que chegam a ele']];
function desenhaRio(){
  const N = W.BDNav, T = N && N.TRECHOS ? N.TRECHOS : FT.map(x => ({ nome: x[0], href: x[1], desc: x[2], afluentes: x[0] === 'A Foz' ? [{ nome: 'Dark Horse', href: 'dark-horse.html', desc: 'o dinheiro do filme, mês a mês' }] : [] }));
  const Mg = N && N.MARGENS ? N.MARGENS : [['Arquivo', 'drive.html#arquivo'], ['Cronologia', 'drive.html#cronologia'], ['Notícias', 'drive.html#noticias'], ['Quiz', 'quiz.html']].map(x => ({ nome: x[0], href: x[1] }));
  const ds = x => { try { return typeof x.desc === 'function' ? x.desc() : x.desc || ''; } catch (e) { return ''; } };
  const lin = (a, n, s, u) => '<li class="z-linha"><a class="z-la" href="' + u + '"><span class="z-av z-q" aria-hidden="true">' + esc(a) + '</span><span class="z-lc"><span class="z-l1"><b>' + esc(n) + '</b></span>' + (s ? '<span class="z-lp">' + esc(s) + '</span>' : '') + '</span></a></li>';
  let h = '';
  T.forEach((t, i) => { h += lin(i, t.nome, ds(t), t.href); (t.afluentes || []).forEach(a => { h += lin('↳', a.nome, ds(a), a.href); }); });
  $('#z-rio').innerHTML = '<div class="z-scab"><h2>Rio</h2></div><div class="z-rio-c"><span class="z-av z-q" aria-hidden="true">BD</span><span><b>BOLSODRIVE</b><small>Um rio de escândalos</small></span></div>' +
    '<p class="z-rio-k">Da nascente à foz</p><ul class="z-linhas">' + h + '</ul><p class="z-rio-k">Nas margens</p><ul class="z-linhas">' +
    Mg.filter(x => x.id !== 'zap').map(x => lin(ini(x.nome), x.nome, '', x.href)).join('') + '</ul>';
}

/* ---------- encaminhar ---------- */
const T = () => W.BD_TOPICOS || (W.BD_TOPICOS = {});
function base(){ const t = T(), u = (t.zap || t.abertura || {}).url; return u ? u.replace(/c\/[^/]*$/, '') : 'https://figuered0o0808-glitch.github.io/arquivo-flavio/'; }
const linkMsg = (c, m) => base() + 'c/zap-' + c.id + '.html?m=' + encodeURIComponent(m.id);
function topAba(){
  if (!T().zap) T().zap = { titulo: 'Flávio Bolsonaro · BolsoZap', texto: 'Flávio Bolsonaro · BolsoZap: conversas com fonte sobre Flávio, os casos e as pessoas em volta. Cada mensagem é uma reportagem ou um documento público, com data e fonte.', url: base() + 'c/zap.html', img: 'c/img/zap.png' };
  return 'zap';
}
function topConv(c){
  const k = 'zap-' + c.id;
  if (!T()[k]){
    const pre = 'Flávio Bolsonaro · BolsoZap · ' + c.nome;
    let tx = pre + (c.sit ? ' · ' + c.sit.t : '') + '. A conversa, com fonte em cada mensagem.';
    if (tx.length > 220) tx = pre + ': a conversa, com fonte em cada mensagem.';
    T()[k] = { titulo: pre, texto: tx, url: base() + 'c/' + k + '.html', img: 'c/img/' + k + '.png' };
  }
  return k;
}
function topMsg(c, m){
  const k = 'zap-' + c.id + '--' + m.id, cc = T()['zap-' + c.id];
  if (!T()[k]) T()[k] = { titulo: 'Flávio Bolsonaro · BolsoZap · ' + c.nome, texto: m.env || 'Flávio Bolsonaro · BolsoZap · ' + c.nome, url: linkMsg(c, m), img: cc && cc.img || 'c/img/zap-' + c.id + '.png' };
  return k;
}
function registra(c, j){ topConv(c); j.m.forEach(m => topMsg(c, m)); }
/* o BDShare.enviar resolve sem dizer se o envio aconteceu: um invólucro em navigator.share conta os envios concluídos
   (a promessa do share só resolve quando a pessoa escolhe para quem mandar; cancelar rejeita e não conta) */
let nEnv = 0;
function vigia(){
  const N = navigator;
  if (R.vigia || typeof N.share !== 'function') return;
  const sh = N.share;
  try { Object.defineProperty(N, 'share', { configurable: true, writable: true, value: function(){ return Promise.resolve(sh.apply(N, arguments)).then(v => { nEnv++; return v; }); } }); R.vigia = 1; } catch (e) {}
}
function envia(k, rot){
  const S = W.BDShare;
  if (!S || typeof S.enviar !== 'function') return folhaLink(k);
  vigia(); const n0 = nEnv;
  let p; try { p = S.enviar(k); } catch (e) { return folhaLink(k); }
  Promise.resolve(p).then(r => { if (rot && (nEnv > n0 || r === 'arquivo' || r === 'texto')) eu(rot); }, () => {});
}
function enviaConv(){ const c = R.c; if (c) envia(topConv(c), { c: c.id, m: null, de: c.nome, q: corta(c.sit ? c.sit.t : c.papel, 60) }); }
function enviaMsg(m){
  const c = R.c; if (!c || !m) return;
  envia(topMsg(c, m), { c: c.id, m: m.id, de: m.de || (m.f[0] || {}).v, q: corta(m.q ? aspas(m.q.t) : m.t, 60) });
}
function eu(e){
  e.h = (n => p2(n.getHours()) + ':' + p2(n.getMinutes()))(new Date());
  EU.push(e); st('zap:eu', EU, 1);
  if (R.c && R.c.id === e.c) poeEu(e);
  linhaDe(e.c);
}
function poeEu(e){
  if (!R.ol) return;
  const li = d.createElement('li'); li.className = 'z-eu'; li.dataset.z = '1';
  li.innerHTML = '<div class="z-bal"><span class="z-encm">' + ic('enc') + 'Você encaminhou ' + (e.m ? 'esta mensagem' : 'esta conversa') + '</span><div class="z-cit"><span class="z-qq">' + esc(e.de) + '</span>' + esc(e.q) +
    '</div><span class="z-hora">' + e.h + ' <span class="z-tq" aria-label="enviada">✓✓</span></span></div>';
  const alvo = e.m && R.ol.querySelector('#zm-' + e.m);
  if (alvo) alvo.after(li); else R.ol.appendChild(li);
  R.seps = null;
}
function topicoDe(b){
  if (b.closest('[data-enc-aba]')) return topAba();
  if (!R.c) return null;
  if (b.closest('[data-enc-conv]')) return topConv(R.c);
  const li = b.closest('.z-msg'), m = li ? R.msgs[li.dataset.id] : b.closest('[data-enc-msg]') ? R.fm : null;
  return m ? topMsg(R.c, m) : null;
}

/* ---------- rotas ---------- */
function le(){
  let h = location.hash.slice(1); try { h = decodeURIComponent(h); } catch (e) {}
  const [a, b] = h.split('/');
  if (!a) return { aba: 'conversas' };
  if (a === 'atualizacoes' || a === 'rio') return { aba: a };
  if (C[a]) return { conv: a, msg: b && b !== 'dados' ? b : null, dados: b === 'dados' };
  return { aba: 'conversas', perdida: 1 };
}
function ir(h, troca){
  const s = H.state || {}, url = h ? '#' + h : location.pathname + location.search;
  if (!troca && url === (h ? location.hash : location.pathname + location.search + location.hash)) return rota();
  H[troca ? 'replaceState' : 'pushState']({ z: (s.z || 0) + (troca ? 0 : 1) }, '', url);
  rota();
}
function volta(){ if (H.state && H.state.z > 0) H.back(); else ir('', 1); }
function vaiAba(a){
  if (R.conv && !umaCol()){ R.aba = a; telas(); return; }
  ir(a === 'conversas' ? '' : a, 1);
}
function rota(){
  fechaMenu();
  const r = le(), s = H.state || {};
  if (R.folha && !s.folha) escondeFolha();
  if (r.conv){
    if (r.conv !== R.conv) abreConv(r.conv, r.msg);
    else if (r.msg && r.msg !== R.alvo && R.itens) pula(r.msg, 1);
    if (r.msg) R.alvo = r.msg;
    const era = R.dados; R.dados = r.dados;
    if (R.dados && !era) desenhaDados();
    if (!R.dados) R.dPush = 0;
  } else {
    if (R.conv) fechaConv();
    R.aba = r.aba; R.dados = false;
    if (r.perdida){ aviso('Conversa não encontrada'); H.replaceState(s, '', location.pathname + location.search); }
  }
  telas();
}
function abreConv(id, alvo){
  const c = C[id];
  R.conv = id; R.alvo = alvo; R.dados = false; R.c = c; R.j = null; R.itens = null;
  telas(); marca();
  const j = JS.get(id);
  if (j){ registra(c, j); monta(c, j, alvo); return; }
  pare();
  cv.className = 'z-cv'; cv.innerHTML = '<div class="z-ccab"><button type="button" class="z-ib" data-volta aria-label="Voltar para as conversas">' + ic('vol') + '</button><span class="z-quem">' + av(c) + '<span><b>' + esc(c.nome) + '</b><small>' + esc(c.sit ? c.sit.t : c.papel) + '</small></span></span></div>';
  W.scrollTo(0, 0);
  carrega(c).then(j => { if (R.conv === id){ registra(c, j); monta(c, j, alvo); if (R.dados) desenhaDados(); } }, () => {
    if (R.conv === id) cv.insertAdjacentHTML('beforeend', '<p class="z-vazio">Não foi possível abrir esta conversa agora. <a href="#' + id + '" data-ir="' + id + '">Tentar de novo</a></p>');
  });
}
function fechaConv(){ pare(); R.conv = null; R.c = R.j = R.itens = R.ol = null; R.alvo = null; cv.innerHTML = ''; desenhaLista(); }
function marca(){ $$('.z-linha[data-c]', lista).forEach(li => { if (li.dataset.c === R.conv) li.setAttribute('aria-current', 'true'); else li.removeAttribute('aria-current'); }); }
function telas(){
  const y = W.scrollY, um = umaCol(), tres = innerWidth >= 1280, dados = !!(R.conv && R.dados);
  const t = R.conv ? (dados && !tres ? 'dados' : 'conversa') : R.aba === 'conversas' ? 'lista' : R.aba, antes = app.dataset.tela;
  if (antes === 'lista' && t !== 'lista') R.listaY = y;
  if (antes === 'conversa' && t === 'dados') R.convY = y;
  app.dataset.tela = t;
  app.classList.toggle('z-aberta', !!R.conv); app.classList.toggle('z-com-dados', dados && tres);
  ['conversas', 'atualizacoes', 'rio'].forEach(a => { $(a === 'conversas' ? '#z-lista' : '#z-' + a).hidden = R.aba !== a; });
  $$('[data-aba]').forEach(b => { if (b.dataset.aba === R.aba) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  $('#z-conversa').hidden = um ? !R.conv || dados : dados && !tres;
  $('#z-dados').hidden = !dados;
  const abaNova = R.abaVista !== R.aba; R.abaVista = R.aba;   /* com a conversa aberta (trilho, tablet) a tela não muda, mas a aba sim */
  if (R.aba === 'atualizacoes' && (t !== antes || abaNova)) desenhaAt();
  if (R.aba === 'rio' && !$('#z-rio').firstChild) desenhaRio();
  if (t === antes) return;
  if (t === 'lista' && um) W.scrollTo(0, R.listaY);
  else if (t === 'dados' || ((t === 'atualizacoes' || t === 'rio') && um) || (t === 'lista' && antes === 'conversa')) W.scrollTo(0, 0);
  else if (antes === 'dados' && t === 'conversa') W.scrollTo(0, R.convY);
}
function doComeco(){ const c = R.c, j = R.j; if (!c || !j) return; delete MEM[c.id]; st('zap:v1', MEM); monta(c, j, null); W.scrollTo(0, 0); }

/* ---------- eventos ---------- */
d.addEventListener('click', e => {
  const t = e.target; if (!t || !t.closest) return;
  let b;
  if ((b = t.closest('#z-menu [data-i]'))){ const f = R.menu && R.menu.it[+b.dataset.i]; fechaMenu(); if (f) f[1](); return; }
  if (t.closest('#z-menu a')){ fechaMenu(); return; }
  if ((b = t.closest('[data-ir]'))){
    if (e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (b.dataset.visto){ b.dataset.visto.split(' ').forEach(k => VIS.add(k)); st('zap:vistos', Array.from(VIS)); pontoAt(); }
    if (R.folha) escondeFolha();
    ir(b.getAttribute('data-ir')); return;
  }
  if ((b = t.closest('[data-aba]'))) return vaiAba(b.dataset.aba);
  if ((b = t.closest('.z-chips [data-f]'))){
    R.f = b.dataset.f; $$('.z-chips [data-f]').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false')); desenhaLista(); return;
  }
  if (t.closest('[data-sobre]')) return sobre();
  if (t.closest('[data-volta]')) return volta();
  if (t.closest('[data-fecha-dados]')) return fechaDados();
  if (t.closest('[data-dados]')) return abreDados();
  if ((b = t.closest('[data-menu]'))) return menu(b);
  if (t.closest('[data-enc-aba]')) return envia(topAba(), null);
  if (t.closest('[data-enc-conv]')) return enviaConv();
  if (t.closest('[data-enc-msg]')){ const m = R.fm; fechaFolha(); return enviaMsg(m); }
  if ((b = t.closest('.z-encb'))) return enviaMsg(R.msgs[b.closest('li').dataset.id]);
  if ((b = t.closest('[data-fix]'))) return pula(b.dataset.fix, 1);
  if (t.closest('.z-desce')) return tudo();
  if (t.closest('.z-pula')) return tudo(1);
  if ((b = t.closest('.z-sit'))) return folhaSit(b);
  if ((b = t.closest('[data-copia]'))){
    const k = b.dataset.copia, m = R.fm;
    copia(k === 'f' ? comFonte(R.c, m) : k === 'l' ? linkMsg(R.c, m) : k === 'c' ? T()[topConv(R.c)].url : b.dataset.u); return;
  }
  if ((b = t.closest('[data-dm]'))){ const x = b.nextElementSibling; x.hidden = !x.hidden; b.setAttribute('aria-expanded', x.hidden ? 'false' : 'true'); return; }
  if (t.closest('[data-fecha]') || t.closest('#z-veu')) return fechaFolha();
  if ((b = t.closest('.z-fluxo .z-msg')) && !t.closest('a')) return folhaMsg(R.msgs[b.dataset.id], b.querySelector('.z-bal') || b);
});
d.addEventListener('pointerdown', e => {
  const t = e.target;
  if (R.menu && t.closest && !t.closest('#z-menu') && !t.closest('[data-menu]')) fechaMenu();
  const b = t.closest && t.closest('[data-enc-conv],[data-enc-msg],[data-enc-aba],.z-encb'), S = W.BDShare;
  if (b && S){ const k = topicoDe(b), f = S.baixa || S.prepara; if (k && typeof f === 'function') try { f(k); } catch (x) {} }
}, { passive: true });
d.addEventListener('focusin', e => {
  const li = R.itens && e.target.closest && e.target.closest('.z-fluxo>li');
  if (li && li.dataset.z === '0'){ const i = R.idx.get(li); if (i != null) enfileira(i + 1, i + 1); }
});
$('#z-q').addEventListener('input', e => { R.q = e.target.value; desenhaLista(); });
(() => { // arrastar a folha para baixo fecha (celular)
  const F = $('#z-folha');
  F.addEventListener('pointerdown', e => {
    if (F.classList.contains('z-pop') || !e.target.closest('.z-alca,.z-ft')) return;
    const y0 = e.clientY; let dy = 0;
    const mv = v => { dy = Math.max(0, v.clientY - y0); F.style.translate = '0 ' + dy + 'px'; };
    const up = () => { F.removeEventListener('pointermove', mv); F.removeEventListener('pointerup', up); F.removeEventListener('pointercancel', up); if (dy > 80) fechaFolha(); else F.style.translate = ''; };
    try { F.setPointerCapture(e.pointerId); } catch (x) {}
    F.addEventListener('pointermove', mv); F.addEventListener('pointerup', up); F.addEventListener('pointercancel', up);
  });
})();
d.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key, t = e.target, campo = /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName), mp = d.getElementById('nv-mapa');
  if ((mp && !mp.hidden) || $('#z-sobre').open) return;
  if (R.menu){
    const it = $$('#z-menu>*'), i = it.indexOf(d.activeElement);
    if (k === 'Escape'){ e.preventDefault(); fechaMenu(1); }
    else if (k === 'ArrowDown' || k === 'ArrowUp'){ e.preventDefault(); it[(i + (k === 'ArrowDown' ? 1 : it.length - 1)) % it.length].focus(); }
    else if (k === 'Tab') fechaMenu();
    return;
  }
  if (k === 'Escape'){
    if (R.folha){ e.preventDefault(); fechaFolha(); } else if (R.dados){ e.preventDefault(); fechaDados(); }
    else if (R.conv && !campo){ e.preventDefault(); volta(); }
    return;
  }
  if (R.folha && k === 'Tab'){
    const f = $$('#z-folha a[href],#z-folha button').filter(x => x.offsetParent), i = f.indexOf(d.activeElement);
    if (e.shiftKey && i <= 0){ e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1){ e.preventDefault(); f[0].focus(); }
    return;
  }
  if (campo || R.folha) return;
  if (k === '/' && !(R.conv && umaCol())){ e.preventDefault(); vaiAba('conversas'); $('#z-q').focus(); return; }
  if ((k === 'j' || k === 'k') && R.itens){ e.preventDefault(); jk(k === 'j' ? 1 : -1); return; }
  if ((k === 'ArrowDown' || k === 'ArrowUp') && t.closest && t.closest('.z-linhas')){
    const as = $$('a', t.closest('.z-linhas')), n = as[as.indexOf(t.closest('a')) + (k === 'ArrowDown' ? 1 : -1)];
    if (n){ e.preventDefault(); n.focus(); }
  }
});
function jk(dir){
  const l = R.itens.filter(li => li.dataset.id);
  let i = l.indexOf(d.activeElement);
  if (i < 0){ const lim = innerHeight * .3 + 2; i = l.findIndex(li => li.getBoundingClientRect().top > lim); if (i < 0) i = l.length; if (dir < 0) i--; }
  else i += dir;
  const li = l[Math.max(0, Math.min(l.length - 1, i))]; if (!li) return;
  const x = R.idx.get(li); enfileira(x + 1, x + 1); posiciona(li); li.focus({ preventScroll: true });
}
W.addEventListener('scroll', agenda, { passive: true });
W.addEventListener('resize', () => { R.seps = null; if (!R.rz) R.rz = requestAnimationFrame(() => { R.rz = 0; telas(); agenda(); }); });
W.addEventListener('popstate', rota);

/* ---------- início ---------- */
(() => {
  const sp = new URLSearchParams(location.search), m = sp.get('m'), s = H.state || {};
  if (m){ const c = location.hash.slice(1).split('/')[0]; sp.delete('m'); const q = sp.toString(); H.replaceState({ z: s.z || 0 }, '', location.pathname + (q ? '?' + q : '') + (c ? '#' + c + '/' + m : '')); }
  else H.replaceState({ z: s.z || 0 }, '');
})();
desenhaLista();
$('#z-boas-l').innerHTML = Z.conversas.filter(c => c.fix).sort((a, b) => a.fix - b.fix).map(c => mini(c.id)).join('');
pontoAt();
rota();
(W.requestIdleCallback || (f => setTimeout(f, 1500)))(() => Z.conversas.filter(c => c.fix).forEach(c => { carrega(c).catch(() => {}); }));
})();
