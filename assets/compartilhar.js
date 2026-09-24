/* BolsoDrive — enviar por tópico.
   Todo elemento [data-share="<id>"] vira um botão de enviar AQUELE tópico (o capítulo, o escândalo,
   o fluxo, o trecho, a pergunta), com texto e imagem próprios. Os tópicos vêm de data/topicos.js
   (window.BD_TOPICOS, gerado por bolso-os-fontes/gera_compartilhar.py).

   window.BDShare.enviar(id)  envia o tópico:
     1. celular com Web Share nível 2 (navigator.canShare({files})): o cartão c/img/<id>.png + texto + link;
     2. senão navigator.share({ text, url });
     3. senão abre https://wa.me/?text=<texto + link>.
     O link é sempre c/<id>.html: a prévia do link mostra o cartão do tópico e a página leva ao lugar certo.
   window.BDShare.topico(id)  → { titulo, texto, url, img } (ou null).

   O cartão é baixado antes do toque (quando o botão aparece na tela ou no toque), para o share()
   ainda contar como gesto do usuário. Se o navegador recusar por demora, pede um segundo toque. */
(function(){
'use strict';
if (window.BDShare) return;

const TOP = () => window.BD_TOPICOS || {};
function topico(id){
  const t = TOP()[id];
  return t ? { titulo: t.titulo, texto: t.texto, url: t.url, img: t.img } : null;
}

/* Web Share com arquivo: só no celular (no computador vai o texto com o link) */
const ua = navigator.userAgent || '';
const CELULAR = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
let comArquivo = false;
try {
  comArquivo = CELULAR && typeof navigator.canShare === 'function' && typeof File === 'function' &&
    navigator.canShare({ files: [new File([new Uint8Array([137, 80, 78, 71])], 'x.png', { type: 'image/png' })] });
} catch (_){ comArquivo = false; }

/* o cartão de cada tópico, baixado uma vez */
const pedido = new Map(), pronto = new Map();
function cartao(id){
  if (!pedido.has(id)){
    const t = topico(id);
    const p = !t || !t.img ? Promise.resolve(null) :
      fetch(t.img, { cache: 'force-cache' })
        .then(r => (r.ok ? r.blob() : null))
        .then(b => (b && b.size ? new File([b], id + '.png', { type: 'image/png' }) : null))
        .catch(() => null);
    p.then(f => { pronto.set(id, f); });
    pedido.set(id, p);
  }
  return pedido.get(id);
}

/* aviso curto, no rodapé da tela */
let avisoEl = null, avisoT = 0;
function aviso(msg){
  if (!avisoEl){
    avisoEl = document.createElement('div');
    avisoEl.setAttribute('role', 'status');
    avisoEl.style.cssText = 'position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:9999;' +
      'max-width:calc(100% - 32px);padding:10px 14px;background:#0e160e;color:#d8efdd;border:1px solid rgba(125,245,154,.35);' +
      'font:600 14px/1.3 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;border-radius:2px;pointer-events:none;transition:opacity .2s';
    document.body.appendChild(avisoEl);
  }
  avisoEl.textContent = msg; avisoEl.style.opacity = '1';
  clearTimeout(avisoT); avisoT = setTimeout(() => { avisoEl.style.opacity = '0'; }, 2600);
}

function porZap(t){
  window.open('https://wa.me/?text=' + encodeURIComponent(t.texto + ' ' + t.url), '_blank', 'noopener');
}

const ocupado = new Set();
async function enviar(id){
  const t = topico(id) || topico('abertura');
  if (!t){ porZap({ texto: document.title, url: location.href }); return; }   /* página sem data/topicos.js */
  const chave = TOP()[id] ? id : 'abertura';
  if (ocupado.has(chave)) return;
  ocupado.add(chave);
  try {
    if (comArquivo){
      let f = pronto.get(chave), esperou = false;
      if (f === undefined){
        esperou = true;
        f = await Promise.race([cartao(chave), new Promise(r => setTimeout(() => r(undefined), 2500))]);
      }
      if (f){
        try {
          if (navigator.canShare({ files: [f] })){ await navigator.share({ files: [f], text: t.texto + ' ' + t.url }); return; }
        } catch (err){
          if (err && err.name === 'AbortError') return;
          /* o download demorou e o navegador não aceitou mais como toque: o cartão já está pronto */
          if (err && err.name === 'NotAllowedError' && esperou){ aviso('Pronto. Toque em enviar de novo.'); return; }
        }
      } else if (f === undefined){ aviso('Preparando a imagem. Toque em enviar de novo.'); return; }
    }
    if (navigator.share){
      try { await navigator.share({ text: t.texto, url: t.url }); return; }
      catch (err){ if (err && err.name === 'AbortError') return; }
    }
    porZap(t);
  } finally { ocupado.delete(chave); }
}

/* ---------- ligação: delegação de evento, e o cartão baixado antes do toque ---------- */
document.addEventListener('click', ev => {
  const b = ev.target && ev.target.closest ? ev.target.closest('[data-share]') : null;
  if (!b) return;
  ev.preventDefault();
  enviar(b.getAttribute('data-share'));
});
if (comArquivo){
  const cedo = ev => { const b = ev.target && ev.target.closest ? ev.target.closest('[data-share]') : null; if (b) cartao(b.getAttribute('data-share')); };
  document.addEventListener('pointerdown', cedo, { passive: true });
  document.addEventListener('touchstart', cedo, { passive: true });
}

/* botão sem rótulo ganha "enviar ↗" e um nome acessível; com imagem, o cartão é baixado quando aparece */
const io = comArquivo && 'IntersectionObserver' in window ?
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ cartao(e.target.getAttribute('data-share')); io.unobserve(e.target); } }), { rootMargin: '200px 0px' }) : null;
function prepara(el){
  const id = el.getAttribute('data-share');
  if (el.__bdShare === id) return; el.__bdShare = id;
  const t = topico(id);
  if (!el.textContent.trim()) el.textContent = 'enviar ↗';
  if (t && (!el.getAttribute('aria-label') || el.__bdRotulo)){ el.setAttribute('aria-label', 'Enviar: ' + t.titulo.replace(/^Flávio Bolsonaro · /, '')); el.__bdRotulo = 1; }
  if (el.tagName === 'BUTTON' && !el.getAttribute('type')) el.setAttribute('type', 'button');
  if (io) io.observe(el);
}
function varre(raiz){
  if (!raiz || !raiz.querySelectorAll) return;
  if (raiz.matches && raiz.matches('[data-share]')) prepara(raiz);
  raiz.querySelectorAll('[data-share]').forEach(prepara);
}
function liga(){
  const st = document.createElement('style');
  st.textContent = '[data-share]{min-height:44px;min-width:44px;cursor:pointer;touch-action:manipulation}';
  document.head.appendChild(st);
  varre(document.body);
  if ('MutationObserver' in window){
    new MutationObserver(ms => ms.forEach(m => {
      m.addedNodes.forEach(n => { if (n.nodeType === 1) varre(n); });
      if (m.type === 'attributes' && m.target.nodeType === 1 && m.target.hasAttribute('data-share')) prepara(m.target);
    })).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-share'] });
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();

window.BDShare = { enviar, topico, prepara: cartao };
})();
