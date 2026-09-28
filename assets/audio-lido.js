/* =====================================================================
   assets/audio-lido.js · O ÁUDIO, LIDO (N04, P2-B)

   A transcrição publicada pela fonte aparece letra a letra sobre o osciloscópio da marca (o O de BOLSO):
   enquanto as letras saem, o traço do logo vira sinal; quando o texto termina, ele volta ao desenho exato do logo.
   O texto vem de data/darkhorse.js (audio.trechos[].t), que monta_darkhorse.py copia literal das mensagens "aud" de
   data/zap/dark-horse.json; aqui nada é reescrito (o texto inteiro está no DOM desde o início: a parte ainda não
   "lida" fica transparente, então a linha não pula e o leitor de tela lê tudo).
   Não hospeda áudio: "ouça na <veículo> ↗" leva à página da fonte que publicou o áudio.

   Modos: 'cheio' (a unidade inteira: rótulo, osciloscópio, trechos, quem e quando, a situação dele em cor neutra,
   ouça, a fonte da transcrição, enviar) e 'palco' (osciloscópio e trechos; a legenda do momento dh-cobranca, em
   assets/darkhorse.js, põe o resto). Movimento reduzido, ou a captura og: tudo de uma vez e o logo parado.

   window.BDAudioLido = {
     html(A, o)      o HTML (o = { modo, quem, share, envio })
     monta(el, A, o) monta em el e devolve o controle; o.auto: lê sozinho quando aparece na tela (a Foz)
     ouca(A)         o link "ouça na <veículo> ↗"
     carrega(cb)     cb(A) com data/darkhorse.js (se a página não o tem, injeta o <script type="text/x-adiado" data-al-dados>)
     le(el)          para os testes: { trechos: [texto de cada trecho], vistos: [o que já apareceu], feito }
   }
   controle = { n, k, feito, mostra(k), rola(k), corre(dt), passo(dt), cheio(), zera(), rele() }
   ===================================================================== */
(function(){
'use strict';
if (window.BDAudioLido) return;
const doc = document;
const mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
const parado = () => !!(mq && mq.matches) || doc.documentElement.classList.contains('og');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const dataBR = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || ''); return m ? m[3] + '/' + m[2] + '/' + m[1] : ''; };

/* ---------- a marca: o traço do O (assets/marca/simbolo.svg), sem redesenho ----------
   A faixa do traço é um contorno de 292 pontos: a borda de cima (da esquerda ao pico) e a de baixo (de volta).
   O ponto i e o ponto N-1-i são o mesmo lugar do traço (a espessura entre eles); o sinal desloca os dois juntos
   só na vertical, então a espessura não muda e, com amplitude zero, o desenho é o do logo, número a número. */
const FX = '-6.07 48.30 -5.40 48.26 -4.82 48.20 -4.26 48.12 -3.72 48.03 -3.20 47.91 -2.69 47.78 -2.20 47.64 -1.72 47.48 -1.26 47.30 -0.80 47.12 -0.35 46.91 0.10 46.70 0.54 46.47 0.97 46.23 1.40 45.98 1.83 45.72 2.26 45.44 2.69 45.16 3.12 44.86 3.55 44.55 3.98 44.24 4.42 43.92 4.86 43.59 5.30 43.25 5.75 42.91 6.21 42.56 6.67 42.21 7.15 41.86 7.63 41.50 8.12 41.15 8.63 40.79 9.15 40.44 9.68 40.09 10.23 39.75 10.80 39.42 11.38 39.09 11.99 38.78 12.61 38.48 13.26 38.19 13.92 37.92 14.61 37.68 15.32 37.45 16.05 37.25 16.80 37.08 17.57 36.94 18.37 36.83 19.18 36.75 20.05 36.71 21.09 36.72 22.16 36.81 23.22 36.98 24.24 37.22 25.23 37.52 26.18 37.88 27.09 38.30 27.97 38.76 28.81 39.26 29.61 39.80 30.38 40.36 31.11 40.95 31.82 41.56 32.50 42.18 33.15 42.82 33.78 43.47 34.39 44.13 34.99 44.80 35.56 45.46 36.12 46.13 36.67 46.80 37.21 47.47 37.73 48.13 38.24 48.78 38.74 49.42 39.24 50.05 39.72 50.66 40.20 51.26 40.67 51.83 41.13 52.38 41.58 52.90 42.02 53.39 42.45 53.86 42.87 54.28 43.27 54.67 43.66 55.02 44.04 55.33 44.39 55.60 44.71 55.83 45.02 56.01 45.29 56.15 45.53 56.26 45.74 56.33 45.92 56.37 46.08 56.39 46.22 56.40 46.36 56.39 46.62 56.37 46.81 56.35 47.11 56.32 47.40 56.29 47.68 56.25 47.95 56.20 48.21 56.14 48.47 56.09 48.72 56.02 48.97 55.95 49.21 55.88 49.44 55.80 49.68 55.72 49.91 55.63 50.13 55.53 50.36 55.43 50.58 55.33 50.81 55.22 51.03 55.11 51.25 54.99 51.48 54.86 51.70 54.73 51.93 54.60 52.16 54.45 52.39 54.31 52.62 54.16 52.86 54.00 53.09 53.84 53.33 53.67 53.58 53.50 53.82 53.32 54.07 53.14 54.33 52.95 54.59 52.76 54.85 52.57 55.12 52.37 55.39 52.17 55.67 51.96 55.95 51.75 56.24 51.54 56.54 51.32 56.84 51.10 57.15 50.88 57.47 50.66 57.79 50.44 58.13 50.22 58.48 49.99 58.83 49.77 59.15 49.58 60.02 49.08 66.72 60.92 65.85 61.42 65.61 61.55 65.40 61.65 65.19 61.76 64.97 61.89 64.74 62.02 64.51 62.15 64.26 62.30 64.01 62.45 63.75 62.61 63.48 62.78 63.21 62.95 62.92 63.13 62.63 63.32 62.33 63.51 62.02 63.70 61.71 63.90 61.38 64.10 61.05 64.30 60.71 64.51 60.36 64.72 60.00 64.93 59.63 65.14 59.25 65.36 58.86 65.57 58.46 65.78 58.05 65.98 57.63 66.19 57.20 66.39 56.76 66.59 56.31 66.78 55.85 66.97 55.38 67.15 54.90 67.33 54.40 67.49 53.90 67.65 53.39 67.80 52.86 67.94 52.33 68.07 51.78 68.18 51.23 68.29 50.67 68.38 50.10 68.46 49.52 68.52 48.93 68.57 48.33 68.61 47.73 68.63 47.12 68.64 46.38 68.63 45.35 68.55 44.22 68.39 43.13 68.13 42.08 67.80 41.09 67.40 40.15 66.94 39.26 66.43 38.43 65.88 37.65 65.30 36.92 64.69 36.23 64.06 35.57 63.41 34.95 62.75 34.35 62.08 33.79 61.40 33.24 60.72 32.71 60.03 32.20 59.33 31.71 58.64 31.22 57.95 30.75 57.26 30.29 56.57 29.83 55.89 29.38 55.22 28.94 54.56 28.50 53.91 28.07 53.28 27.64 52.66 27.22 52.07 26.79 51.49 26.37 50.94 25.96 50.42 25.55 49.92 25.14 49.45 24.74 49.02 24.34 48.61 23.95 48.25 23.57 47.91 23.20 47.61 22.83 47.35 22.47 47.12 22.13 46.92 21.79 46.75 21.45 46.61 21.10 46.49 20.75 46.40 20.39 46.33 19.95 46.29 19.59 46.27 19.19 46.28 18.81 46.30 18.43 46.33 18.06 46.38 17.69 46.45 17.32 46.53 16.95 46.63 16.57 46.75 16.20 46.88 15.82 47.03 15.43 47.19 15.04 47.37 14.64 47.57 14.23 47.78 13.81 48.00 13.39 48.24 12.96 48.50 12.52 48.76 12.08 49.04 11.62 49.33 11.16 49.63 10.68 49.94 10.20 50.25 9.70 50.57 9.19 50.89 8.68 51.22 8.14 51.55 7.60 51.87 7.04 52.20 6.46 52.52 5.87 52.84 5.26 53.15 4.64 53.45 4.00 53.74 3.34 54.02 2.66 54.28 1.97 54.53 1.25 54.76 0.52 54.97 -0.23 55.15 -1.00 55.31 -1.79 55.45 -2.60 55.56 -3.42 55.64 -4.27 55.69 -5.12 55.71 -5.93 55.70'.split(' ').map(Number);
const FIXO = 'M55.70,54.50 L72.14,-8.66 L89.86,-3.34 L68.73,58.42ZM69.02,57.46 L68.24,60.05 L65.85,61.42 L62.50,55.50ZM55.98,53.54 L56.76,50.95 L59.15,49.58 L62.50,55.50ZM85.30,40.70 L91.30,40.70 L91.30,43.30 L85.30,43.30ZM85.96,50.70 L91.96,50.70 L91.96,53.30 L85.96,53.30ZM84.41,60.70 L90.41,60.70 L90.41,63.30 L84.41,63.30ZM80.40,70.70 L86.40,70.70 L86.40,73.30 L80.40,73.30Z';
const NP = FX.length / 2;
const PX = [], PY = [], CX = [];
for (let i = 0; i < NP; i++){ PX.push(FX[2 * i]); PY.push(FX[2 * i + 1]); }
for (let i = 0; i < NP; i++) CX.push((PX[i] + PX[NP - 1 - i]) / 2);
const f2 = v => v.toFixed(2);
const traco = dy => { let s = ''; for (let i = 0; i < NP; i++) s += (i ? ' L' : 'M') + f2(PX[i]) + ',' + f2(PY[i] + (dy ? dy[i] : 0)); return s + 'Z'; };
const LOGO = traco(null);
/* o sinal mexe só na onda, à esquerda do pico: inteiro até x = 36, some até x = 57 (a junta com o pico fica parada) */
const JAN = CX.map(x => x <= 36 ? 1 : x >= 57 ? 0 : (t => 1 - t * t * (3 - 2 * t))((x - 36) / 21));
const DY = new Float32Array(NP);
function onda(amp, fase){
  if (amp < 0.02) return LOGO;
  for (let i = 0; i < NP; i++){
    const x = CX[i];
    DY[i] = JAN[i] ? JAN[i] * amp * (Math.sin(x * 0.21 - fase) + 0.3 * Math.sin(x * 0.53 - fase * 1.7)) : 0;
  }
  return traco(DY);
}
let nOsc = 0;
function osc(){
  const id = 'al-osc-' + (++nOsc);
  return '<svg viewBox="0 0 100 100" focusable="false" aria-hidden="true"><mask id="' + id + '" maskUnits="userSpaceOnUse" x="-30" y="-30" width="160" height="160">' +
    '<rect x="-30" y="-30" width="160" height="160" fill="#fff"/><path class="al-onda" fill="#000" d="' + LOGO + '"/><path fill="#000" d="' + FIXO + '"/></mask>' +
    '<circle cx="50" cy="50" r="46" fill="#ffb02e" mask="url(#' + id + ')"/></svg>';
}

/* ---------- o HTML ---------- */
function ouca(A){
  const o = (A && A.ouca) || {};
  if (!o.url) return '';
  return '<a class="al-ouca" href="' + esc(o.url) + '" target="_blank" rel="noopener"><span class="al-play" aria-hidden="true"></span>ouça na ' + esc(o.veiculo || 'fonte') + ' ↗</a>';
}
function trechosHtml(A){
  return '<blockquote class="al-q"' + (A.trechos[0] && A.trechos[0].fonte && A.trechos[0].fonte.url ? ' cite="' + esc(A.trechos[0].fonte.url) + '"' : '') + '>' +
    A.trechos.map((t, i) => '<p class="al-p" data-i="' + i + '"><span class="al-aspa al-a0">“</span><span class="al-t"><span class="al-v"></span><span class="al-r">' +
      esc(t.t) + '</span></span><span class="al-aspa al-a1">”</span></p>').join('') + '</blockquote>';
}
function html(A, o){
  o = o || {};
  if (!A || !(A.trechos || []).length) return '';
  const corpo = '<div class="al-corpo"><span class="al-osc">' + osc() + '</span>' + trechosHtml(A) + '</div>';
  if (o.modo === 'palco') return '<div class="al al-palco" data-audio="' + esc(A.id) + '">' + corpo + '</div>';
  /* quem gravou, para quem, como a fonte o obteve, quando */
  const quem = [(o.quem || A.quem) + (A.a ? ' ' + A.a : ''), A.meio, dataBR(A.data)].filter(Boolean).map(esc).join(' · ');
  /* a fonte da transcrição (uma vez cada), com a data */
  const vistas = new Set();
  const fontes = A.trechos.map(t => t.fonte).filter(f => f && f.url && !vistas.has(f.url) && vistas.add(f.url))
    .map(f => '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + (f.data ? ', ' + esc(dataBR(f.data)) : '') + ' ↗</a>').join('');
  const env = o.share ? '<button type="button" class="env" data-share="' + esc(o.share) + '">' + esc(o.envio || 'enviar ↗') + '</button>' : '';
  return '<figure class="al al-cheio" data-audio="' + esc(A.id) + '">' +
    '<div class="al-cab"><p class="al-k">' + esc(A.rotulo || 'O áudio, lido') + '</p><button type="button" class="al-de-novo" hidden>↺ ler de novo</button></div>' + corpo +
    '<figcaption class="al-m">' + quem + '</figcaption>' +
    (A.sit ? '<p class="al-s">' + esc(A.sit) + '</p>' : '') +
    '<div class="al-acoes">' + env + ouca(A) + '</div>' +
    (fontes ? '<p class="al-f">transcrição: ' + fontes + '</p>' : '') +
    '</figure>';
}

/* ---------- o controle: quantas letras já apareceram, e o sinal ---------- */
const VOGAL = /[aeiouáéíóúâêôãõàü]/i, LETRA = /[a-zà-ü0-9]/i;
const CPS = 30;                   /* letras por segundo, lendo sozinho */
const PAUSA_VIRGULA = 0.2, PAUSA_TRECHO = 0.55;
const AMP = 8.5;                  /* amplitude máxima do sinal (em unidades do desenho de 100) */
function monta(el, A, o){
  o = o || {};
  if (!el || !A || !(A.trechos || []).length) return null;
  if (!el.querySelector('.al')) el.innerHTML = html(A, o);
  const raiz = el.querySelector('.al');
  const PS = Array.prototype.slice.call(raiz.querySelectorAll('.al-p'));
  const T = A.trechos.map(t => t.t);
  const OFF = []; let n = 0; T.forEach(t => { OFF.push(n); n += t.length; });
  const V = PS.map(p => p.querySelector('.al-v')), R = PS.map(p => p.querySelector('.al-r'));
  const A0 = PS.map(p => p.querySelector('.al-a0')), A1 = PS.map(p => p.querySelector('.al-a1'));
  const ondaEl = raiz.querySelector('.al-onda');
  const deNovo = raiz.querySelector('.al-de-novo');
  const cur = doc.createElement('span'); cur.className = 'al-cur'; cur.setAttribute('aria-hidden', 'true');
  const ctl = { n, k: -1, feito: false };
  let amp = 0, fase = 0, falando = 0, acc = 0, dAnt = '', ultima = '';

  function desenha(){
    const d = onda(amp, fase);
    if (d !== dAnt && ondaEl){ ondaEl.setAttribute('d', d); dAnt = d; }
  }
  ctl.mostra = function(k){
    k = Math.max(0, Math.min(n, Math.round(k)));
    if (k === ctl.k) return;
    ctl.k = k;
    let ativo = -1;
    T.forEach((t, i) => {
      const c = Math.max(0, Math.min(t.length, k - OFF[i]));
      const v = t.slice(0, c), r = t.slice(c);
      if (V[i].textContent !== v) V[i].textContent = v;
      if (R[i].textContent !== r) R[i].textContent = r;
      if (ativo < 0 && c < t.length) ativo = i;
      A0[i].classList.toggle('off', c === 0 && ativo !== i);
      A1[i].classList.toggle('off', c < t.length);
    });
    ctl.feito = k >= n;
    raiz.classList.toggle('al-feito', ctl.feito);
    if (ativo >= 0){ if (cur.nextSibling !== R[ativo]) R[ativo].parentNode.insertBefore(cur, R[ativo]); }
    else if (cur.parentNode) cur.parentNode.removeChild(cur);
    ultima = k > 0 ? (T.join('')[k - 1] || '') : '';
    if (deNovo) deNovo.hidden = !ctl.feito || parado();
  };
  /* a rolagem manda (o palco do Dark Horse): a letra acompanha, para a frente e para trás */
  ctl.rola = function(k){
    const k0 = ctl.k; ctl.mostra(k);
    if (ctl.k !== k0){ falando = 0.18; acc = 0; }
  };
  /* sozinho: a partir de onde está, até o fim */
  ctl.corre = function(dt){
    if (ctl.feito) return false;
    acc += dt || 0;
    let k = ctl.k < 0 ? 0 : ctl.k;
    const todo = T.join('');
    for (let g = 0; g < 12 && k < n; g++){
      const ch = todo[k - 1] || '';
      let passo = 1 / CPS;
      if (k > 0 && OFF.indexOf(k) > 0) passo += PAUSA_TRECHO;
      else if (/[,;:]/.test(ch)) passo += PAUSA_VIRGULA;
      if (acc < passo) break;
      acc -= passo; k++;
    }
    if (k !== ctl.k){ ctl.mostra(k); falando = 0.18; }
    cur.classList.toggle('pisca', false);
    return !ctl.feito;
  };
  /* o sinal: a amplitude segue a letra que acabou de sair (vogal alta, consoante média, espaço baixo, pontuação nada) */
  ctl.passo = function(dt){
    dt = Math.min(0.1, dt || 0);
    const alvo = parado() ? 0 : falando > 0 ? AMP * (VOGAL.test(ultima) ? 1 : LETRA.test(ultima) ? 0.62 : ultima === ' ' ? 0.22 : 0.05) : 0;
    falando = Math.max(0, falando - dt);
    amp += (alvo - amp) * Math.min(1, dt * 14);
    if (alvo === 0 && amp < 0.02) amp = 0;
    fase += dt * 9;
    desenha();
    cur.classList.toggle('pisca', falando <= 0 && !ctl.feito);
    return amp > 0 || falando > 0;
  };
  ctl.cheio = function(){ ctl.mostra(n); amp = 0; falando = 0; desenha(); };
  ctl.zera = function(){ ctl.mostra(0); amp = 0; falando = 0; acc = 0; desenha(); };
  ctl.mostra(0);
  el.__al = ctl;

  if (parado()){ ctl.cheio(); return ctl; }
  if (o.auto){
    let raf = 0, ult = 0, vivo = false;
    const tick = ts => {
      raf = 0;
      if (!raiz.isConnected) return;
      const dt = ult ? Math.min(0.1, (ts - ult) / 1000) : 1 / 60; ult = ts;
      const a = ctl.corre(dt), b = ctl.passo(dt);
      if (a || b) raf = requestAnimationFrame(tick); else ult = 0;
    };
    const vai = () => { if (!raf){ ult = 0; raf = requestAnimationFrame(tick); } };
    ctl.rele = () => { ctl.zera(); vai(); };
    if (deNovo) deNovo.addEventListener('click', () => ctl.rele());
    const comeca = () => { if (vivo) return; vivo = true; setTimeout(vai, 250); };
    if ('IntersectionObserver' in window){
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)){ io.disconnect(); comeca(); } }, { threshold: 0.35 });
      io.observe(raiz.querySelector('.al-corpo') || raiz);
    } else comeca();
  }
  return ctl;
}

/* ---------- os dados: data/darkhorse.js (na Foz, só quando a ficha pede) ---------- */
let fila = null;
function carrega(cb){
  const A = (window.DARKHORSE || {}).audio;
  if (A){ cb(A); return; }
  if (fila){ fila.push(cb); return; }
  fila = [cb];
  const tag = doc.querySelector('script[data-al-dados]');
  const s = doc.createElement('script');
  s.src = (tag && tag.getAttribute('src')) || 'data/darkhorse.js';
  s.async = true;
  const fim = () => { const q = fila || []; fila = null; const A2 = (window.DARKHORSE || {}).audio || null; q.forEach(f => f(A2)); };
  s.onload = fim; s.onerror = fim;
  (doc.head || doc.body).appendChild(s);
}

function le(el){
  const r = el && (el.matches && el.matches('.al') ? el : el.querySelector('.al'));
  if (!r) return null;
  const ps = Array.prototype.slice.call(r.querySelectorAll('.al-p'));
  return { trechos: ps.map(p => p.querySelector('.al-t').textContent), vistos: ps.map(p => p.querySelector('.al-v').textContent),
    feito: r.classList.contains('al-feito') };
}

window.BDAudioLido = { html, monta, ouca, carrega, le, osc };
})();
