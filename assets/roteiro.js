/* =====================================================================
   assets/roteiro.js · O ROTEIRO da abertura (index.html): a página inteira como um vídeo.

   "Siga o rio ↓" faz a página descer sozinha, de ponta a ponta, na ordem da página:
     a bacia · o caso Marielle · 01 quem anda com ele · 02 o dinheiro ·
     a história (assets/historia.js: abertura, capítulos, fim) · a foto · a semana · o teste · mande adiante
   O roteiro sai do próprio HTML: cada elemento com data-rot diz o que fazer ali.
     data-rot="pausa:2.4"  a tela desliza até ele (acelera no meio, freia na chegada) e para 2,4 s
     data-rot="leitura"    a tela passa devagar por ele (uma lista que se lê enquanto desce)
     data-rot="historia"   entra o ritmo da história (o tempo de cada fase, em assets/historia.js)
     data-rot-marca        ponto para onde "pular ↓" leva (além da primeira parada de cada seção)
   O controle flutuante (#h-ctl) vale para a página toda: pausar / continuar / 1×–2× / pular ↓ / parar.
   Tocar, rolar ou usar o teclado pausa; continuar retoma de onde a pessoa estiver. Para no fim.
   index.html#assistir abre já tocando. Com prefers-reduced-motion não há rolagem contínua:
   a página salta de parada em parada.

   A rolagem à mão conta a mesma história (as cenas):
     [data-conta]  o número conta de 0 ao valor conforme sobe na tela (e desconta ao descer de volta)
     [data-seq]    o item aparece quando chega à tela (pela posição: quem rola rápido encontra tudo cheio)

   Um requestAnimationFrame só (window.BDQuadro, também usado pela história); as posições ficam
   guardadas e só são medidas de novo quando o tamanho muda; listeners passivos.
   ===================================================================== */
(function(){
'use strict';
const doc = document, raiz = doc.documentElement;
if (raiz.classList.contains('og')) return;           /* modo imagem de prévia (?og=1): nada se move */

const $ = (s, r) => (r || doc).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || doc).querySelectorAll(s));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const suave = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
const sai3 = x => 1 - Math.pow(1 - x, 3);
const reduzido = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const PASSO_REDUZIDO = 6;          /* s entre um salto e outro, com movimento reduzido (em 1×) */

/* =====================================================================
   Um quadro só: primeiro o roteiro rola; depois quem desenha lê a posição
   ===================================================================== */
const Q = (function(){
  const pre = [], pos = []; let raf = 0, ult = 0;
  const api = {
    add(f, antes){ (antes ? pre : pos).push(f); api.agenda(); },
    agenda(){ if (!raf) raf = requestAnimationFrame(tick); }
  };
  function roda(l, dt, ts){ let mais = false; for (const f of l){ try { if (f(dt, ts)) mais = true; } catch (e){ console.error(e); } } return mais; }
  function tick(ts){
    raf = 0;
    const dt = ult ? Math.min(0.1, (ts - ult) / 1000) : 1 / 60; ult = ts;
    const a = roda(pre, dt, ts), b = roda(pos, dt, ts);
    if (a || b) raf = requestAnimationFrame(tick); else ult = 0;
  }
  window.addEventListener('scroll', api.agenda, { passive: true });
  doc.addEventListener('visibilitychange', () => { if (!doc.hidden) api.agenda(); });
  return api;
})();
window.BDQuadro = Q;

const hdrEl = $('.site-header');
const hdr = () => hdrEl ? hdrEl.offsetHeight : 57;
/* topo na página sem transformações */
function topo(el){ let y = 0; while (el){ y += el.offsetTop; el = el.offsetParent; } return y; }
const visto = el => !!(el && el.getClientRects().length);

/* =====================================================================
   AS CENAS DA ROLAGEM À MÃO: número que conta e itens que chegam
   ===================================================================== */
let CN = null;                     /* {contas:[{el, y, ...}], seqs:[{el, y, op}]} */
const RX_N = /(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?/;
function fmt(v, dec, mil){
  const f = v.toFixed(dec).split('.');
  const i = mil ? f[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') : f[0];
  return f[1] ? i + ',' + f[1] : i;
}
function cenasMede(){
  const contas = $$('[data-conta]').filter(visto).map(el => {
    if (!el.dataset.cheio) el.dataset.cheio = el.textContent;
    const t = el.dataset.cheio, m = RX_N.exec(t);
    if (!m) return null;
    return { el, y: topo(el), pre: t.slice(0, m.index), pos: t.slice(m.index + m[0].length), alvo: parseFloat(m[1].replace(/\./g, '') + (m[2] ? '.' + m[2] : '')),
      dec: m[2] ? m[2].length : 0, mil: /\./.test(m[1]), txt: null };
  }).filter(Boolean);
  const seqs = $$('[data-seq]').filter(visto).map(el => ({ el, y: topo(el), op: -1 }));
  CN = { contas, seqs };
}
function cenasQuadro(){
  if (reduzido) return false;
  if (!CN) cenasMede();
  const y = window.scrollY, vh = window.innerHeight;
  CN.contas.forEach(c => {
    const p = clamp((y + vh * 0.92 - c.y) / (vh * 0.42), 0, 1);
    const t = p >= 1 ? c.el.dataset.cheio : c.pre + fmt(c.alvo * sai3(p), c.dec, c.mil) + c.pos;
    if (t !== c.txt){ c.txt = t; c.el.textContent = t; }
  });
  CN.seqs.forEach(s => {
    const a = Math.round(suave((y + vh * 0.98 - s.y) / (vh * 0.16)) * 20) / 20;
    const op = 0.1 + 0.9 * a;
    if (op !== s.op){ s.op = op; s.el.style.opacity = op >= 1 ? '' : String(op); }
  });
  return false;
}
Q.add(cenasQuadro);

/* =====================================================================
   O ROTEIRO NO TEMPO: segmentos {t0, t1, y0, y1, ease}
   ===================================================================== */
const ctl = $('#h-ctl'), btPlay = $('#h-play'), btVel = $('#h-vel'), btPula = $('#h-pula'), btPara = $('#h-para');
let M = null;                      /* o roteiro medido (refeito quando o tamanho muda) */
const easeViagem = suave;
const easeFase = x => 0.55 * x + 0.45 * suave(x);     /* na história: quase constante, com uma freada leve em cada fase */
function monta(){
  const vh = window.innerHeight, h = hdr(), util = vh - h;
  const max = Math.max(0, raiz.scrollHeight - vh);
  const desk = window.innerWidth >= 900;
  const segs = [], marcas = [], paradas = [];
  let t = 0, y = 0;
  const vai = (y1, dur, ease) => {
    y1 = clamp(Math.max(y1, y), 0, max);
    if (dur <= 0) return;
    segs.push({ t0: t, t1: t + dur, y0: y, y1, ease }); t += dur; y = y1;
  };
  const viagem = y1 => { y1 = clamp(Math.max(y1, y), 0, max); const d = y1 - y; if (d < 2) return; vai(y1, clamp(0.5 + d / (desk ? 1100 : 850), 0.6, 3.4), easeViagem); };
  const pausa = s => { if (s > 0) vai(y, s, null); };
  let secAnt = null;
  $$('[data-rot]').forEach(el => {
    if (!visto(el)) return;
    /* "pular ↓" leva ao começo de cada seção (a primeira parada dela) e a cada capítulo da história */
    const secEl = el.closest('section'), nova = secEl !== secAnt; secAnt = secEl;
    const r = String(el.dataset.rot).split(':'), tipo = r[0], n = parseFloat(r[1]);
    const al = el.dataset.rotAl != null ? parseFloat(el.dataset.rotAl) : 0.24;
    if (tipo === 'pausa'){
      /* se já está inteiro na tela (no terço de cima para baixo), a tela não se mexe: só para */
      const yEl = topo(el) - y, cabe = yEl >= h + util * 0.08 && yEl + el.offsetHeight <= vh * 0.86;
      if (!cabe || !el.hasAttribute('data-seq')) viagem(topo(el) - h - util * al);
      if (el.hasAttribute('data-rot-marca') || (nova && secEl && secEl.id !== 'nascente')) marcas.push(t);
      paradas.push(y);
      pausa(isFinite(n) ? n : 2);
    } else if (tipo === 'leitura'){
      const y1 = topo(el) + el.offsetHeight - h - util * 0.7;
      const d = clamp(y1, 0, max) - y;
      if (d > 4) vai(y1, Math.max(1.2, d / (isFinite(n) ? n : 95)), null);
    } else if (tipo === 'historia'){
      const H = window.__historia && window.__historia.roteiro ? window.__historia.roteiro() : null;
      if (!H || !H.keys.length) return;
      viagem(H.keys[0].y);
      marcas.push(t);
      const tH = t;
      for (let i = 1; i < H.keys.length; i++){ const k = H.keys[i]; vai(k.y, Math.max(0.01, tH + k.t - t), easeFase); }
      H.marcas.forEach(yy => { const tt = tDeY(yy, segs); if (tt != null) marcas.push(tt); });
      H.paradas.forEach(yy => paradas.push(clamp(yy, 0, max)));
    }
  });
  viagem(max);                     /* até o pé da página */
  marcas.sort((a, b) => a - b);
  paradas.sort((a, b) => a - b);
  M = { segs, total: t, marcas, paradas, max, vh, w: window.innerWidth };
}
/* a posição no tempo t */
function yDeT(t){
  const S = M.segs; if (!S.length) return window.scrollY;
  if (t <= 0) return S[0].y0;
  for (const s of S) if (t <= s.t1){ const x = (t - s.t0) / Math.max(1e-6, s.t1 - s.t0); return s.ease ? lerp(s.y0, s.y1, s.ease(x)) : lerp(s.y0, s.y1, x); }
  return S[S.length - 1].y1;
}
/* o tempo de uma posição (o primeiro instante em que o roteiro passa por ela) */
function tDeY(y, S){
  S = S || M.segs; if (!S.length) return 0;
  if (y <= S[0].y0) return 0;
  for (const s of S){
    if (y > s.y1 + 0.5) continue;
    if (s.y1 - s.y0 < 0.5) return s.t0;
    let a = 0, b = 1, x = (y - s.y0) / (s.y1 - s.y0);
    if (s.ease){ for (let k = 0; k < 30; k++){ const m = (a + b) / 2; if (s.ease(m) < x) a = m; else b = m; } x = (a + b) / 2; }
    return lerp(s.t0, s.t1, clamp(x, 0, 1));
  }
  return S[S.length - 1].t1;
}

/* =====================================================================
   TOCAR
   ===================================================================== */
const AP = { on: false, estado: 'parado', t: 0, vel: 1, set: -1, acc: 0 };   /* estado: parado · tocando · pausado · fim */
function semSuave(on){ raiz.classList.toggle('rolando', on); }
function toca(o){
  o = o || {};
  if (!M) monta();
  if (o.y != null){ AP.t = tDeY(o.y); }
  else if (o.doInicio) AP.t = 0;
  else if (!(AP.estado === 'pausado' && Math.abs(window.scrollY - AP.set) < 3)) AP.t = tDeY(window.scrollY);
  if (AP.t >= M.total - 0.05) AP.t = 0;
  AP.on = true; AP.estado = 'tocando'; AP.acc = reduzido ? PASSO_REDUZIDO - 1.2 : 0;   /* com movimento reduzido, o primeiro salto vem logo */
  semSuave(true);
  const y = yDeT(AP.t);
  if (Math.abs(window.scrollY - y) > 2) window.scrollTo(0, y);
  AP.set = Math.round(window.scrollY);
  rotulos(); Q.agenda();
}
function pausa(){ if (!AP.on) return; AP.on = false; AP.estado = 'pausado'; semSuave(false); rotulos(); }
function para(){ AP.on = false; AP.estado = 'parado'; semSuave(false); rotulos(); }
function fim(){ AP.on = false; AP.estado = 'fim'; semSuave(false); rotulos(); }
function passo(dt){
  if (!AP.on) return false;
  if (doc.hidden) return true;
  if (!M) { monta(); AP.t = tDeY(window.scrollY); AP.set = Math.round(window.scrollY); }
  /* rolou por fora (barra de rolagem, âncora, gesto que não passou pelos eventos): pausa */
  if (AP.set >= 0 && Math.abs(window.scrollY - AP.set) > 40){ pausa(); return false; }
  if (reduzido){
    AP.acc += dt * AP.vel;
    if (AP.acc < PASSO_REDUZIDO) return true;
    AP.acc = 0;
    const prox = M.paradas.find(p => p > window.scrollY + 8);
    if (prox == null){ fim(); return false; }
    window.scrollTo(0, prox); AP.set = Math.round(window.scrollY); AP.t = tDeY(prox);
    return true;
  }
  AP.t = Math.min(M.total, AP.t + dt * AP.vel);
  window.scrollTo(0, yDeT(AP.t));
  AP.set = Math.round(window.scrollY);
  if (AP.t >= M.total){ fim(); return false; }
  return true;
}
Q.add(passo, true);
function pula(){
  if (!M) monta();
  const t = Math.max(AP.t, tDeY(window.scrollY));
  const m = M.marcas.find(x => x > t + 0.3);
  const alvo = m != null ? m : M.total;
  AP.t = alvo;
  const y = yDeT(alvo);
  semSuave(true); window.scrollTo(0, y); AP.set = Math.round(window.scrollY);
  if (!AP.on) semSuave(false);
  if (alvo >= M.total){ fim(); return; }
  if (AP.estado !== 'tocando') toca({ y });
  Q.agenda();
}

/* a pessoa toca, rola ou usa o teclado: pausa (os botões do próprio controle não contam) */
['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(tipo => window.addEventListener(tipo, e => {
  if (!AP.on) return;
  if (e.target && e.target.closest && e.target.closest('#h-ctl')) return;
  if (tipo === 'keydown' && /^(Shift|Control|Alt|Meta|CapsLock|Tab)$/.test(e.key)) return;
  pausa();
}, { passive: true, capture: true }));

/* =====================================================================
   O CONTROLE
   ===================================================================== */
let vistoCtl = false;
function rotulos(){
  if (!ctl) return;
  const ic = $('.ic', btPlay), tx = $('.tx', btPlay);
  const E = AP.estado;
  const r = E === 'tocando' ? ['❚❚', 'pausar', 'Pausar'] : E === 'pausado' ? ['▶', 'continuar', 'Continuar: a página volta a descer'] :
    E === 'fim' ? ['↺', 'rever', 'Rever do começo'] : ['▶', 'assistir', 'Assistir: a página desce sozinha e conta a história'];
  if (ic.textContent !== r[0]) ic.textContent = r[0];
  if (tx.textContent !== r[1]) tx.textContent = r[1];
  btPlay.setAttribute('aria-label', r[2]);
  const ativo = E === 'tocando' || E === 'pausado' || E === 'fim';
  ctl.classList.toggle('ativo', ativo);
  ctl.classList.toggle('no-fim', E === 'fim');
  btVel.textContent = AP.vel + '×';
  btVel.setAttribute('aria-label', 'Velocidade ' + AP.vel + '×; tocar para ' + (AP.vel === 1 ? 2 : 1) + '×');
  if (ativo) vistoCtl = true;
  mostra();
}
/* parado: só aparece depois da primeira tela (lá o botão é o "Siga o rio") */
let rM = 0;
function mostra(){
  if (!ctl) return;
  const ativo = AP.estado !== 'parado';
  const n = $('#nascente');
  const lim = n ? topo(n) + n.offsetHeight * 0.6 : window.innerHeight * 0.6;
  const v = ativo || window.scrollY > lim;
  if (ctl.hidden === v) ctl.hidden = !v;
}
window.addEventListener('scroll', () => { if (!rM) rM = requestAnimationFrame(() => { rM = 0; mostra(); }); }, { passive: true });
if (ctl){
  btPlay.addEventListener('click', () => {
    if (AP.estado === 'tocando') pausa();
    else if (AP.estado === 'fim') toca({ doInicio: true });
    else toca();
  });
  btVel.addEventListener('click', () => { AP.vel = AP.vel === 1 ? 2 : 1; rotulos(); });
  btPula.addEventListener('click', pula);
  btPara.addEventListener('click', para);
}
/* "Siga o rio ↓": a página desce sozinha a partir daqui */
const siga = $('#siga');
if (siga) siga.addEventListener('click', e => { e.preventDefault(); toca(); });

/* =====================================================================
   Novo tamanho: mede de novo (sem trancos: o tempo sai da posição atual)
   ===================================================================== */
let rt = 0;
function invalida(){
  clearTimeout(rt);
  rt = setTimeout(() => {
    CN = null; const eraM = !!M; M = null;
    if (AP.on || AP.estado === 'pausado'){ monta(); AP.t = tDeY(window.scrollY); AP.set = Math.round(window.scrollY); }
    else if (eraM) M = null;
    Q.agenda(); mostra();
  }, 160);
}
window.addEventListener('resize', invalida);
if ('ResizeObserver' in window){
  let h0 = 0;
  new ResizeObserver(() => { const h = doc.body.scrollHeight; if (Math.abs(h - h0) < 3) return; h0 = h; invalida(); }).observe(doc.body);
}
window.addEventListener('load', invalida);
doc.addEventListener('historia:layout', invalida);

/* index.html#assistir: abre já tocando, do começo */
function autoplay(){
  if (!/^#assistir$/.test(location.hash)) return;
  if (history.replaceState){ try { history.replaceState(null, '', location.pathname + location.search); } catch (_){} }
  semSuave(true); window.scrollTo(0, 0);
  setTimeout(() => { M = null; toca({ doInicio: true }); }, 450);
}
if (doc.readyState === 'complete') autoplay(); else window.addEventListener('load', autoplay, { once: true });

rotulos();
window.BDRoteiro = {
  toca, pausa, para, pula,
  tocaHistoria(){ const h = window.__historia && window.__historia.roteiro ? window.__historia.roteiro() : null; M = null; monta(); toca(h && h.keys.length ? { y: h.keys[0].y } : {}); },
  estado: () => ({ estado: AP.estado, t: Math.round(AP.t * 100) / 100, total: M ? Math.round(M.total * 10) / 10 : null, vel: AP.vel, marcas: M ? M.marcas.length : 0 }),
  segmentos: () => { if (!M) monta(); return M.segs.map(s => ({ t0: +s.t0.toFixed(2), t1: +s.t1.toFixed(2), y0: Math.round(s.y0), y1: Math.round(s.y1), e: s.ease ? (s.ease === easeFase ? 'fase' : 'viagem') : 'linear' })); }
};
})();
