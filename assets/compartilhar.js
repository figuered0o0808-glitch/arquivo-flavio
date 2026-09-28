/* BolsoDrive — enviar por tópico.
   Todo elemento [data-share="<id>"] vira um botão de enviar AQUELE tópico (o capítulo, o escândalo,
   o fluxo, o trecho, a pergunta), com texto e imagem próprios. Os tópicos vêm de data/topicos.js
   (window.BD_TOPICOS, gerado por bolso-os-fontes/gera_compartilhar.py).

   window.BDShare.enviar(id, extra?)  envia o tópico:
     1. celular com Web Share nível 2 (navigator.canShare({files})): o cartão c/img/<id>.png + texto + link;
        no iOS, se o cartão ainda não está baixado, vai só texto + link (a prévia do c/<id>.html já mostra o
        cartão) e o cartão baixa em segundo plano para a próxima vez — o Safari expira o gesto antes do download;
     2. senão navigator.share({ text, url });
     3. senão https://wa.me/?text=<texto + link>: nova aba, ou a própria aba em navegador embutido
        (Instagram, Facebook, WhatsApp, Line, WebView).
     O link é sempre c/<id>.html: a prévia do link mostra o cartão do tópico e a página leva ao lugar certo.
     extra = { texto, url, titulo } sobrepõe os campos do tópico (o resultado do quiz, a mensagem escolhida).
     Devolve 'arquivo' | 'texto' | 'zap' quando o envio saiu; nada quando a pessoa cancelou.
     Sem tópico nenhum (página sem data/topicos.js), o envio é o título e o endereço da própria tela — o
     mesmo em todas as páginas.
   window.BDShare.topico(id)  → { titulo, texto, url, img } (ou null).
   window.BDShare.envios()    → quantos envios saíram deste aparelho (localStorage['bd_envios']).
   window.BDShare.enviou(id)  → true se este aparelho já mandou o tópico (localStorage['bd_enviados']).

   Contador local (T05f): conta os envios concluídos (share resolvido ou WhatsApp aberto) e guarda os ids já
   mandados. Fica só no aparelho: nada vai para a rede, sem cookie, sem medição. Onde faz sentido:
     · o aviso depois do envio: "Enviado" e, do 2º em diante, "Enviado · você já mandou N deste aparelho"
       (<html data-envio-aviso="nao"> desliga o aviso, para páginas com retorno próprio, como o BolsoZap);
     · qualquer elemento [data-envios] recebe o texto e aparece quando N > 0; o valor do atributo é o modelo
       ({n} = o número; {a|b} = singular|plural), por padrão "você já mandou {n}";
     · todo [data-share] de um tópico já mandado ganha data-enviado="1" (para a página marcar, se quiser);
     · o evento 'bd:envio' em window, com detail = { id, n, modo }.

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
/* o único fallback sem tópico: a tela em que a pessoa está */
function reserva(){ return { titulo: document.title, texto: document.title, url: location.href, img: null }; }
function sobrepoe(base, extra){
  if (!extra || typeof extra !== 'object') return base;
  const t = Object.assign({}, base);
  ['texto', 'url', 'titulo'].forEach(k => { if (typeof extra[k] === 'string' && extra[k]) t[k] = extra[k]; });
  return t;
}
/* texto + link numa mensagem só: se o texto termina em quebra de linha, o link vai na linha de baixo, sem espaço antes */
function junta(t){ const x = String(t.texto || ''); return (/\n\s*$/.test(x) ? x.replace(/\s+$/, '') + '\n' : x + ' ') + t.url; }

/* Web Share com arquivo: só no celular (no computador vai o texto com o link) */
const ua = navigator.userAgent || '';
const IOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
const CELULAR = IOS || /Android|Mobile/i.test(ua);
/* navegador embutido de outro app: window.open é bloqueado ou abre fora do app; o link vai na própria aba */
const EMBUTIDO = /FBAN|FBAV|FB_IAB|Instagram|Line\/|WhatsApp|; wv\)/i.test(ua);
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

/* contador local de envios que saíram (share resolvido ou WhatsApp aberto); fica no aparelho, nunca vai à rede */
const CHAVE = 'bd_envios', CHAVE_IDS = 'bd_enviados';
function envios(){ try { return parseInt(localStorage.getItem(CHAVE), 10) || 0; } catch (_){ return 0; } }
function enviados(){ try { const a = JSON.parse(localStorage.getItem(CHAVE_IDS) || '[]'); return Array.isArray(a) ? a : []; } catch (_){ return []; } }
function enviou(id){ return !!id && enviados().indexOf(id) >= 0; }
function mostraEnvios(){
  const n = envios();
  document.querySelectorAll('[data-envios]').forEach(el => {
    const m = el.getAttribute('data-envios') || 'você já mandou {n}';
    el.textContent = m.replace(/\{n\}/g, n).replace(/\{([^|{}]*)\|([^{}]*)\}/g, (_, a, b) => (n === 1 ? a : b));
    el.setAttribute('data-envios-n', String(n));
    el.hidden = n < 1;
  });
}
function marca(id){ if (id) document.querySelectorAll('[data-share]').forEach(el => { if (el.getAttribute('data-share') === id) el.setAttribute('data-enviado', '1'); }); }
function conta(id, modo){
  let n = envios() + 1;
  try { localStorage.setItem(CHAVE, String(n)); } catch (_){ n = 0; }   /* sem armazenamento (aba anônima): não há contagem */
  if (id){ try { const a = enviados().filter(x => x !== id); a.push(id); localStorage.setItem(CHAVE_IDS, JSON.stringify(a.slice(-400))); } catch (_){} }
  marca(id); mostraEnvios();
  if (modo !== 'zap' && document.documentElement.getAttribute('data-envio-aviso') !== 'nao')
    aviso(n > 1 ? 'Enviado · você já mandou ' + n + ' deste aparelho' : 'Enviado');
  try { window.dispatchEvent(new CustomEvent('bd:envio', { detail: { id: id || '', n: n, modo: modo } })); } catch (_){}
}

function porZap(t){
  const href = 'https://wa.me/?text=' + encodeURIComponent(junta(t));
  let w = null;
  if (!EMBUTIDO){
    try { w = window.open(href, '_blank'); } catch (_){ w = null; }
    if (w){ try { w.opener = null; } catch (_){} }
  }
  if (!w) location.href = href;   /* embutido, ou a janela foi bloqueada: a própria aba */
  conta(t.id, 'zap');
  return 'zap';
}

const ocupado = new Set();
async function enviar(id, extra){
  const chave = TOP()[id] ? id : (TOP().abertura ? 'abertura' : '');
  const t = sobrepoe(topico(chave) || reserva(), extra);
  t.id = chave;
  if (ocupado.has(chave)) return;
  ocupado.add(chave);
  try {
    if (comArquivo && chave && t.img){
      let f = pronto.get(chave), esperou = false;
      if (f === undefined && IOS){
        /* iOS: sem cartão pronto vai texto + link agora; o cartão baixa para a próxima vez */
        cartao(chave); f = null;
      } else if (f === undefined){
        esperou = true;
        f = await Promise.race([cartao(chave), new Promise(r => setTimeout(() => r(undefined), 2500))]);
      }
      if (f){
        try {
          if (navigator.canShare({ files: [f] })){ await navigator.share({ files: [f], text: junta(t) }); conta(chave, 'arquivo'); return 'arquivo'; }
        } catch (err){
          if (err && err.name === 'AbortError') return;
          /* o download demorou e o navegador não aceitou mais como toque: o cartão já está pronto */
          if (err && err.name === 'NotAllowedError' && esperou){ aviso('Pronto. Toque em enviar de novo.'); return; }
        }
      } else if (f === undefined){ aviso('Preparando a imagem. Toque em enviar de novo.'); return; }
    }
    if (navigator.share){
      try { await navigator.share({ text: t.texto, url: t.url }); conta(chave, 'texto'); return 'texto'; }
      catch (err){ if (err && err.name === 'AbortError') return; }
    }
    return porZap(t);
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

/* botão sem rótulo ganha "enviar ↗" e um nome acessível; com imagem, o cartão é baixado quando aparece.
   Botão na tela mas escondido (a legenda de outro capítulo/momento, com aria-hidden) espera: baixa quando o
   bloco dele deixa de estar escondido. Assim a página não baixa de uma vez os cartões de todos os momentos. */
const espera = new Set();
const escondido = el => !!(el.closest && el.closest('[aria-hidden="true"]'));
const baixa = el => { cartao(el.getAttribute('data-share')); if (io) io.unobserve(el); espera.delete(el); };
const io = comArquivo && 'IntersectionObserver' in window ?
  new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting){ espera.delete(e.target); return; }
    if (escondido(e.target)) espera.add(e.target); else baixa(e.target);
  }), { rootMargin: '200px 0px' }) : null;
function revisa(){ if (espera.size) Array.from(espera).forEach(el => { if (!el.isConnected) espera.delete(el); else if (!escondido(el)) baixa(el); }); }
function prepara(el){
  const id = el.getAttribute('data-share');
  if (el.__bdShare === id) return; el.__bdShare = id;
  const t = topico(id);
  if (!el.textContent.trim()) el.textContent = 'enviar ↗';
  if (t && (!el.getAttribute('aria-label') || el.__bdRotulo)){ el.setAttribute('aria-label', 'Enviar: ' + t.titulo.replace(/^Flávio Bolsonaro · /, '')); el.__bdRotulo = 1; }
  if (el.tagName === 'BUTTON' && !el.getAttribute('type')) el.setAttribute('type', 'button');
  if (enviou(id)) el.setAttribute('data-enviado', '1');
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
  mostraEnvios();
  /* outra aba do mesmo site contou um envio: o número acompanha */
  window.addEventListener('storage', e => { if (e.key === CHAVE || e.key === CHAVE_IDS){ mostraEnvios(); enviados().forEach(marca); } });
  if ('MutationObserver' in window){
    new MutationObserver(ms => {
      let mostrou = false;
      ms.forEach(m => {
        m.addedNodes.forEach(n => { if (n.nodeType === 1){ varre(n); if (n.matches && (n.matches('[data-envios]') || n.querySelector('[data-envios]'))) mostraEnvios(); } });
        if (m.type !== 'attributes' || m.target.nodeType !== 1) return;
        if (m.attributeName === 'aria-hidden') mostrou = true;
        else if (m.target.hasAttribute('data-share')) prepara(m.target);
      });
      if (mostrou) revisa();
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: io ? ['data-share', 'aria-hidden'] : ['data-share'] });
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', liga); else liga();

window.BDShare = { enviar, topico, prepara: cartao, envios, enviou };
})();
