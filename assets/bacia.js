/* =====================================================================
   assets/bacia.js · A BACIA DOS 40: cada caso é uma nascente; o desenho mostra por onde cada um chega a ele.
   O mesmo desenho da Foz (foz.html, bacia()), copiado sem mudar o traço e posto em função para outras
   páginas: a abertura (index.html) usa esta cópia; a Foz ainda tem a dela.
   Depende de assets/rio.js (window.RIO). Sem dependências além dele.

   Uso
     const b = BDBacia(caixa, {
       casos:   [{ id, nome, rotulo, faixa, gravidade, registros, fila }],   (fila: índices dos registros, em ordem de data)
       forte:   'marielle-ifop',                 nome em negrito (opcional)
       href:    id => 'foz.html#' + id,           com href, cada nome é um link (toque: o rio acende, a página vai)
       aoTocar: id => {},                         sem href: o que o toque faz depois do realce (a Foz abre a ficha)
       foto:    () => url | null,                 a foto da foz (Wikipédia ou assets/fotos); sem ela, as iniciais
       cargo:   'candidato à Presidência'
     });
     b.monta()      (re)desenha na largura atual da caixa (chamar de novo quando a largura mudar)
     b.filtra(f)    realça uma faixa ('direto', 'gabinete', 'familia', 'entorno'; null = todas)
     b.realca(id)   realça um caso (null = nenhum)
     b.foto()       põe a foto na foz (quando ela chegar depois)
     b.estado()     { W, H, linhas: [{ id, top, h }] } para teste

   A caixa precisa de: <div class="bacia"><canvas></canvas><canvas></canvas><div class="rotulos"></div></div>
   (os dois canvas e a camada de nomes são criados se faltarem). O CSS básico vem daqui (especificidade
   mínima, :where); a página que já estiliza .bacia (a Foz) continua mandando.

   Vocabulário e cores são os da Foz: vermelho = alguém preso ou condenado no caminho; âmbar = alguém
   investigado ou denunciado; verde-cinza = outros. Os nomes ficam em cor neutra; o aro dele, sempre neutro.
   ===================================================================== */
(function(){
'use strict';
if (!window.RIO) return;
const RIO = window.RIO, TAU = RIO.TAU, suave = RIO.suave, lerp = RIO.lerp, reduzido = RIO.reduzido;

const FAIXAS = {
  entorno:  { nome: 'O entorno',  curto: 'pelo entorno' },
  familia:  { nome: 'A família',  curto: 'pela família' },
  gabinete: { nome: 'O gabinete', curto: 'pelo gabinete' },
  direto:   { nome: 'Ele mesmo',  curto: 'por ele mesmo' },
};
const ORDEM_RIO = ['entorno', 'familia', 'gabinete', 'direto'];      /* do mais longe (nascente) ao mais perto (foz) */
const RGB = { preso_ou_condenado_na_cadeia: [255, 92, 92], investigado_na_cadeia: [255, 176, 46], sem_processo_na_cadeia: [92, 138, 99] };
const PESO = { preso_ou_condenado_na_cadeia: 2, investigado_na_cadeia: 1, sem_processo_na_cadeia: 0 };
const NOME_COR = '#d8efdd';      /* nomes em cor neutra: a cor fica só na água e nas nascentes */
const FUNDO = [5, 8, 5];
const ARO = [216, 239, 221];     /* o aro em volta dele: sempre neutro, nunca na cor da gravidade */
const CICLO = 10;                /* em quantos segundos cada rio solta a sua fila inteira */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; };
const ordena = lista => lista.slice().sort((a, b) => (PESO[b.gravidade] || 0) - (PESO[a.gravidade] || 0) || (b.registros || 0) - (a.registros || 0) || String(a.nome).localeCompare(String(b.nome)));

/* o CSS de base (o da Foz), uma vez por página; :where() deixa a especificidade no mínimo */
(function(){
  if (document.getElementById('bacia-css')) return;
  const st = document.createElement('style'); st.id = 'bacia-css';
  st.textContent =
    ':where(.bacia){position:relative; border:1px solid var(--linha); border-radius:4px; background:#050805; overflow:hidden}' +
    ':where(.bacia) canvas{position:absolute; left:0; top:0; display:block}' +
    ':where(.bacia) .rotulos{position:absolute; inset:0}' +
    ':where(.bacia) .rt{position:absolute; display:flex; align-items:center; margin:0; border:0; border-radius:3px; background:transparent; cursor:pointer; font-family:var(--sans); font-weight:600; text-align:left; text-decoration:none; -webkit-tap-highlight-color:transparent; transition:opacity .2s}' +
    ':where(.bacia) .rt.d{justify-content:flex-end; text-align:right}' +
    ':where(.bacia) .rt span{white-space:nowrap; text-shadow:0 0 4px #050805, 0 0 8px #050805; transition:opacity .2s}' +
    ':where(.bacia) .rt:hover span, :where(.bacia) .rt:active span{text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px}' +
    ':where(.bacia) .rt:focus-visible{outline:2px solid var(--amber); outline-offset:-2px}' +
    ':where(.bacia) .rt.dim span{opacity:.3}' +
    ':where(.bacia) .rt.forte span{font-weight:800}' +
    ':where(.bacia) .bh{position:absolute; font-family:var(--mono); font-size:12px; font-weight:700; letter-spacing:.1em; color:var(--amber); white-space:nowrap; pointer-events:none}' +
    ':where(.bacia) .bh i{font-style:normal; color:var(--cinza2)}' +
    ':where(.bacia) .foz-b{position:absolute; border-radius:50%; overflow:hidden; border:2px solid var(--tinta); transition:border-color .18s; background:#050805; display:flex; align-items:center; justify-content:center; font:800 22px var(--sans); color:var(--cinza); pointer-events:none}' +
    ':where(.bacia) .foz-b img{position:absolute; left:0; top:0; width:100%; height:100%; object-fit:cover; display:block}' +
    ':where(.bacia) .foz-n{position:absolute; transform:translateX(-50%); text-align:center; white-space:nowrap; pointer-events:none}' +
    ':where(.bacia) .foz-n b{display:block; font-family:var(--mono); font-size:13px; color:var(--tinta); letter-spacing:.06em}' +
    ':where(.bacia) .foz-n span{display:block; font-size:13px; color:var(--cinza); margin-top:2px}' +
    ':where(.bacia) .foz-b.pulso{animation:bacia-pulso 1.4s ease-out 1}' +
    '@keyframes bacia-pulso{0%{box-shadow:0 0 0 0 rgba(216,239,221,.6)} 100%{box-shadow:0 0 0 22px rgba(216,239,221,0)}}' +
    '@media (prefers-reduced-motion:reduce){:where(.bacia) .foz-b.pulso{animation:none}}';
  (document.head || document.documentElement).appendChild(st);
})();

window.BDBacia = function(box, op){
  op = op || {};
  const TODOS = (op.casos || []).filter(e => e && e.id && FAIXAS[e.faixa]);
  const FORTE = op.forte || '';
  const porId = {}; TODOS.forEach(e => { porId[e.id] = e; });
  const faixaDe = id => (porId[id] || {}).faixa || null;
  const medidor = document.createElement('canvas').getContext('2d');
  let cvs = box.querySelectorAll('canvas');
  if (cvs.length < 2){ for (let i = cvs.length; i < 2; i++){ const c = document.createElement('canvas'); c.setAttribute('aria-hidden', 'true'); box.insertBefore(c, box.firstChild); } cvs = box.querySelectorAll('canvas'); }
  const leito = cvs[0], agua = cvs[1];
  let rotulos = box.querySelector('.rotulos');
  if (!rotulos){ rotulos = document.createElement('div'); rotulos.className = 'rotulos'; box.appendChild(rotulos); }
  let B = null, filtro = null, introFeita = false, tocaT = 0, aroT = 0;

  function monta(){
    const W = Math.round(box.clientWidth);
    if (!W || !TODOS.length) return;
    if (B){ B.solta(); B = null; }
    const mob = W < 640;
    const M = mob ? 10 : 22;
    const px = mob ? 14 : 15;
    const lh = Math.round(px * 1.2);
    const toque = !(window.matchMedia && window.matchMedia('(pointer: fine)').matches);
    const rowH = (mob || toque) ? 44 : 32, hdrH = mob ? 28 : 30, topo = mob ? 12 : 22, gapB = mob ? 18 : 22;
    const Lmax = mob ? Math.round(Math.min(122, W * 0.31)) : Math.round(Math.min(230, W * 0.21));
    const cx = W / 2;
    const sobre = mob;
    const dJ = sobre ? 9 : 14, drop = mob ? 40 : 50, minSep = mob ? 56 : 66;
    const wMin = mob ? 1.1 : 1.3, wMax = mob ? 19 : 28;
    const R = mob ? 34 : 44;
    const familia = getComputedStyle(document.body).fontFamily;
    const mede = (t, p, w) => { medidor.font = (w || 600) + ' ' + (p || px) + 'px ' + familia; return medidor.measureText(t).width; };
    const pesoDe = e => e.id === FORTE ? 800 : 600;
    const vazao = e => 1 + Math.sqrt(e.registros || 0) / 3;
    const Qtot = TODOS.reduce((a, e) => a + vazao(e), 0);
    const kW = (wMax - wMin) / Math.sqrt(Qtot);
    const larg = Q => wMin + kW * Math.sqrt(Math.max(0, Q));

    function corta(t, max, p, w){
      if (mede(t, p, w) <= max) return t;
      let s = t; while (s.length > 3 && mede(s + '…', p, w) > max) s = s.slice(0, -1);
      return s + '…';
    }
    function quebra(t, w){
      if (mede(t, 0, w) <= Lmax) return [t];
      if (mob){
        const p = t.split(' '); let best = null;
        for (let i = 1; i < p.length; i++){
          const a = p.slice(0, i).join(' '), b = p.slice(i).join(' '), m = Math.max(mede(a, 0, w), mede(b, 0, w));
          if (!best || m < best.m) best = { l: [a, b], m };
        }
        if (best && best.m <= Lmax) return best.l;
      }
      return [corta(t, Lmax, 0, w)];
    }
    /* celular: o nome fica em 14 px; se não couber numa linha até o rio da faixa, quebra em duas
       e aquela linha da bacia fica mais alta (o alvo de toque cresce junto) */
    function partes(t, max, w){
      if (mede(t, 0, w) <= max) return [t];
      const p = t.split(' '); let best = null;
      for (let i = 1; i < p.length; i++){
        const a = p.slice(0, i).join(' '), b = p.slice(i).join(' '), m = Math.max(mede(a, 0, w), mede(b, 0, w));
        if (!best || m < best.m) best = { l: [a, b], m };
      }
      return best ? best.l.map(x => corta(x, max, 0, w)) : [corta(t, max, 0, w)];
    }

    /* 1. as quatro faixas nas duas margens, na ordem de distância: o entorno e a família nascem no alto e
          formam o rio principal; as seguintes chegam cada uma abaixo da anterior (ele mesmo por último).
          Testa as duas margens para a 3ª faixa e fica com a bacia mais baixa. */
    const bandas = ORDEM_RIO.map(f => ({ f, itens: ordena(TODOS.filter(e => e.faixa === f)).reverse() })).filter(b => b.itens.length);
    const offDe = k => k < 2 ? (mob ? 24 : W * 0.16) : (mob ? 30 : W * 0.2);   /* distância do rio da faixa ao centro */
    bandas.forEach((b, k) => {
      if (sobre){ const cabeW = cx - offDe(k) - M - 6; b.ls = b.itens.map(e => partes(e.rotulo || e.nome, cabeW, pesoDe(e))); }
      b.hs = b.itens.map((e, i) => rowH + (sobre ? (b.ls[i].length - 1) * lh : 0));
    });
    function arranja(l2){
      const colY = { e: topo, d: topo }, pos = [];
      let Jant = 0;
      bandas.forEach((b, k) => {
        const lado = k === 0 ? 'e' : k === 1 ? 'd' : k === 2 ? l2 : k === 3 ? (l2 === 'e' ? 'd' : 'e') : (colY.e <= colY.d ? 'e' : 'd');
        const alt = b.hs.reduce((a, h) => a + h, 0);
        let ini = colY[lado] + hdrH;
        if (k >= 2) ini = Math.max(ini, Jant + minSep - drop - alt);   /* cada faixa chega abaixo da anterior */
        const p = { k, lado, dir: lado === 'e' ? 1 : -1, hdrY: ini - hdrH, ini, fim: ini + alt, J: ini + alt + drop };
        colY[lado] = p.fim + gapB;
        if (k === 1){ p.J = pos[0].J = Math.max(pos[0].fim, p.fim) + drop; }
        pos.push(p); Jant = p.J;
      });
      return pos;
    }
    const opcoes = [arranja('e'), arranja('d')];
    const altura = pos => Math.max.apply(null, pos.map(p => p.J));
    const melhor = altura(opcoes[0]) <= altura(opcoes[1]) ? opcoes[0] : opcoes[1];
    bandas.forEach((b, k) => Object.assign(b, melhor[k]));
    const yC1 = bandas[0].J;                       /* onde nasce o rio principal */
    const yUlt = Math.max.apply(null, bandas.map(b => b.J));
    const yM = yUlt + (mob ? 190 : 185);           /* a foz */
    const H = Math.round(yM + R + (mob ? 74 : 80));
    const dpr = Math.max(1, Math.min(1.75, window.devicePixelRatio || 1, Math.sqrt(4.98e6 / (W * H))));

    /* 2. nomes e nascentes */
    bandas.forEach(b => {
      /* celular: o nome fica sobre o próprio afluente, que nasce na margem e corre por baixo dele;
         tela larga: o nome vem antes da nascente */
      let topoL = b.ini;
      b.linhas = b.itens.map((e, i) => {
        const h = b.hs[i], top = topoL, y = top + h / 2; topoL += h;
        if (sobre) return { e, y, top, h, sy: top + h - 13, ty: top + 15, ls: b.ls[i], px, sx: b.lado === 'e' ? M + 2 : W - M - 2 };
        const ls = quebra(e.rotulo || e.nome, pesoDe(e)), tw = Math.max.apply(null, ls.map(t => mede(t, 0, pesoDe(e))));
        return { e, y, top, h, sy: y, ty: y, ls, tw, sx: b.lado === 'e' ? M + tw + 7 : W - M - tw - 7 };
      });
      const off = offDe(b.k);
      const minT = mob ? 22 : 50;
      const sxs = b.linhas.map(L => L.sx);
      if (sobre) b.xb = cx - b.dir * off;
      else b.xb = b.lado === 'e' ? Math.max(cx - off, Math.max.apply(null, sxs) + minT) : Math.min(cx + off, Math.min.apply(null, sxs) - minT);
      b.a = mob ? 2.5 : 8; b.lam = mob ? 120 : 180; b.fase = b.k * 1.9 + 0.4;
      b.Q = b.linhas.reduce((a, L) => a + vazao(L.e), 0);
      b.wMax = larg(b.Q);
      b.y0 = b.linhas[0].sy + dJ;
      b.cor = RIO.mistura(b.linhas.map(L => [RGB[L.e.gravidade] || RGB.sem_processo_na_cadeia, vazao(L.e)]));
    });
    const bx = (b, y) => b.xb + b.a * Math.sin(TAU * (y - b.y0) / b.lam + b.fase);

    /* 3. rio principal: x(y) da nascença até a foz, desviando dos rios que correm ao lado */
    const nM = Math.max(3, Math.ceil((yM - yC1) / 2) + 1);
    const mx = [], lo = [], hi = [];
    const Amid = mob ? 22 : 46, Alow = mob ? Math.min(W * 0.15, 60) : Math.min(W * 0.1, 110), lamM = mob ? 280 : 360;
    /* a última curva: depois do último encontro o rio se desvia para o lado oposto e volta ao centro na foz */
    const ultima = bandas[bandas.length - 1], ladoCurva = ultima.lado === 'd' ? -1 : 1;
    const c0 = yUlt + 6, c1 = yM - R - 26;
    const meia = larg(Qtot) / 2;
    for (let i = 0; i < nM; i++){
      const y = yC1 + (yM - yC1) * i / (nM - 1);
      const A = lerp(Amid, Alow, suave((y - yUlt) / 70));
      const env = suave((y - yC1) / 80) * suave((yM - R - 20 - y) / 110);
      const meio = cx + A * env * Math.sin(TAU * (y - yC1) / lamM + 0.9);
      const curva = cx + ladoCurva * Alow * Math.sin(Math.PI * Math.max(0, Math.min(1, (y - c0) / (c1 - c0))));
      mx.push(lerp(meio, curva, suave((y - yUlt) / 50)));
      let l = M + 40, h = W - M - 40;
      bandas.forEach(b => {
        if (b.k < 2 || y < b.ini - 8 || y > b.fim + 10) return;
        const folga = b.a + b.wMax / 2 + meia + (mob ? 5 : 14);
        if (b.lado === 'e') l = Math.max(l, b.xb + folga); else h = Math.min(h, b.xb - folga);
      });
      lo.push(l); hi.push(h);
    }
    const aperta = () => { for (let i = 0; i < nM; i++) mx[i] = lo[i] > hi[i] ? (lo[i] + hi[i]) / 2 : Math.min(hi[i], Math.max(lo[i], mx[i])); };
    aperta();
    for (let p = 0; p < 3; p++){
      const cp = mx.slice(), r = 14;
      for (let i = 0; i < nM; i++){ let s = 0, n = 0; for (let j = Math.max(0, i - r); j <= Math.min(nM - 1, i + r); j++){ s += cp[j]; n++; } mx[i] = s / n; }
      aperta();
    }
    for (let i = 0; i < nM; i++) mx[i] = lerp(cx, mx[i], Math.min(suave(i / 20), suave((nM - 1 - i) / 20)));
    const mainX = y => { const f = (y - yC1) / (yM - yC1) * (nM - 1), i = Math.max(0, Math.min(nM - 2, Math.floor(f))); return lerp(mx[i], mx[i + 1], Math.max(0, Math.min(1, f - i))); };
    const ptsM = []; for (let y = yC1; y < yM; y += 3) ptsM.push([mainX(y), y]); ptsM.push([cx, yM]);
    const main = RIO.curso(ptsM);
    RIO.pinta(main, (i, y) => {
      const pares = bandas.map(b => [b.cor, b.Q * (b.k < 2 ? 1 : suave((y - b.J + 2) / 18))]);
      const Q = pares.reduce((a, p) => a + p[1], 0);
      return [larg(Q) * (1 + 0.9 * suave((y - (yM - R - 56)) / 56)), RIO.mistura(pares)];
    });
    const corFoz = RIO.mistura(bandas.map(b => [b.cor, b.Q]));

    /* 4. rios das faixas: descem pela margem e fazem a curva até o principal */
    bandas.forEach(b => {
      const pts = [];
      for (let y = b.y0; y < b.fim; y += 3) pts.push([bx(b, y), y]);
      const x1 = bx(b, b.fim), xJ = mainX(b.J), sg = x1 > xJ ? 1 : -1;
      pts.push([x1, b.fim]);
      const curva = RIO.bezier([x1, b.fim], [x1, b.fim + (b.J - b.fim) * 0.5], [xJ + sg * Math.min(10, Math.abs(x1 - xJ) * 0.35), b.J - (b.J - b.fim) * 0.42], [xJ, b.J], 24);
      b.curso = RIO.curso(pts.concat(curva.slice(1)));
      const jun = b.linhas.map((L, j) => ({ y: L.sy + dJ, q: vazao(L.e), cor: RGB[L.e.gravidade] || RGB.sem_processo_na_cadeia, j }));
      RIO.pinta(b.curso, (i, y) => {
        const pares = jun.map(J => [J.cor, J.q * (J.j === 0 ? 1 : suave((y - J.y + 3) / 14))]);
        return [larg(pares.reduce((a, p) => a + p[1], 0)), RIO.mistura(pares)];
      });
    });

    /* 5. afluentes: da nascente, serpenteando, até o rio da faixa */
    const tribs = [];
    bandas.forEach(b => b.linhas.forEach(L => {
      const yj = L.sy + dJ, xj = bx(b, yj), d = Math.hypot(xj - L.sx, yj - L.sy);
      const pts = RIO.meandro([L.sx, L.sy], [xj, yj], {
        amp: Math.min((rowH - 12) / 2, sobre ? 3.6 : 11, d * 0.12), ondas: Math.max(1, Math.round(d / (sobre ? 34 : 55))),
        fase: hash(L.e.id) * Math.PI, ta: [b.dir, 0.12], tb: [b.dir * 0.5, 1]
      });
      const c = RIO.curso(pts), q = vazao(L.e), wq = larg(q), cor = RGB[L.e.gravidade] || RGB.sem_processo_na_cadeia;
      RIO.pinta(c, (i, y, t) => [wMin + (wq - wMin) * Math.pow(t, 0.6), cor]);
      const rota = RIO.rota([c, 0, c.n - 1], [b.curso, RIO.primeiro(b.curso.y, yj), b.curso.n - 1], [main, RIO.primeiro(main.y, b.J), main.n - 1]);
      tribs.push({ e: L.e, b, sx: L.sx, sy: L.sy, curso: c, rota, cor });
    }));

    /* 6. DOM: camadas, nomes, foz */
    box.style.height = H + 'px'; box.style.minHeight = '0';
    [leito, agua].forEach(cv => { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.width = W + 'px'; cv.style.height = H + 'px'; });
    const tag = op.href ? 'a' : 'button';
    let html = '';
    bandas.forEach(b => {
      html += '<div class="bh" style="' + (b.lado === 'e' ? 'left' : 'right') + ':' + M + 'px;top:' + b.hdrY + 'px;line-height:' + hdrH + 'px"><i>// </i>' + esc(FAIXAS[b.f].nome.toUpperCase()) + ' · ' + b.itens.length + '</div>';
      b.linhas.forEach(L => {
        const m0 = Math.max(0, M - 8);
        const left = b.lado === 'e' ? m0 : Math.round(b.xb + 4);
        const width = b.lado === 'e' ? Math.round(b.xb - 4 - m0) : Math.round(W - m0 - left);
        const rot = L.e.rotulo || L.e.nome;
        const nomeA = (rot === L.e.nome ? rot : rot + ', ' + L.e.nome) + '. Ver o caminho até ele.';
        html += '<' + tag + (op.href ? ' href="' + esc(op.href(L.e.id)) + '"' : ' type="button"') + ' class="rt ' + b.lado + (L.e.id === FORTE ? ' forte' : '') + '" data-id="' + esc(L.e.id) + '" aria-label="' + esc(nomeA) + '" style="left:' + left + 'px;top:' + Math.round(L.top) + 'px;width:' + width + 'px;height:' + L.h + 'px;' +
          (b.lado === 'e' ? 'padding:0 0 0 ' + (M - m0) + 'px;' : 'padding:0 ' + (M - m0) + 'px 0 0;') +
          (sobre ? 'align-items:flex-start;padding-top:' + Math.round(L.ty - lh / 2 - L.top) + 'px;' : '') +
          'font-size:' + (L.px || px) + 'px;line-height:' + lh + 'px;color:' + NOME_COR + '"><span>' + L.ls.map(esc).join('<br>') + '</span></' + tag + '>';
      });
    });
    html += '<div class="foz-b" style="left:' + (cx - R) + 'px;top:' + (yM - R) + 'px;width:' + (2 * R) + 'px;height:' + (2 * R) + 'px"><span>FB</span></div>' +
            '<div class="foz-n" style="left:' + cx + 'px;top:' + (yM + R + 14) + 'px"><b>FLÁVIO BOLSONARO</b><span>' + esc(op.cargo || 'candidato à Presidência') + '</span></div>';
    rotulos.innerHTML = html;
    poeFoto();
    rotulos.querySelectorAll('.rt').forEach(x => {
      x.addEventListener('click', ev => toca(x.dataset.id, ev, x));
      const entra = () => realca(x.dataset.id), sai = () => { if (!tocaT) realca(null); };
      x.addEventListener('mouseenter', entra); x.addEventListener('focus', entra);
      x.addEventListener('mouseleave', sai); x.addEventListener('blur', sai);
    });

    const intro = !introFeita && !reduzido;
    introFeita = true;
    B = { W, H, dpr, mob, R, cx, yM, bandas, tribs, main, corFoz, destaque: null, ctl: null, solta: () => {} };
    pinta();
    B.ctl = RIO.correnteza(agua, {
      W, H, dpr, vel: mob ? 48 : 60, raio: mob ? 2.4 : 2.8, semente: 7,
      cursos: tribs.map(t => ({ curso: t.curso, id: t.e.id, grupo: t.e.faixa }))
        .concat(bandas.map(b => ({ curso: b.curso, grupo: b.f })))
        .concat([{ curso: main, grupo: 'principal' }]),
      /* uma gota por registro, na ordem das datas; sem registros, um gotejar lento e discreto */
      rotas: tribs.map(t => { const fila = t.e.fila || []; return { rota: t.rota, cor: t.cor, fila, leve: !fila.length,
        taxa: fila.length ? fila.length / CICLO : 1 / 16, id: t.e.id, grupo: t.e.faixa }; }),
      fontes: tribs.map(t => ({ x: t.sx, y: t.sy, cor: t.cor, id: t.e.id, grupo: t.e.faixa })),
      foz: { x: cx, y: yM, r: R, cor: corFoz, aro: ARO },
      janela: () => { const r = box.getBoundingClientRect(); return [-r.top - 40, window.innerHeight - r.top + 40]; },
      intro,
      aoChegar: () => { const f = rotulos.querySelector('.foz-b'); if (f) f.classList.add('pulso'); },
      aoGota: () => aroPulsa()
    });
    marca();
    B.solta = RIO.observa(box, B.ctl);
  }

  /* realce e filtro: repinta a camada parada e ajusta a opacidade das gotas */
  function pinta(){
    if (!B) return;
    const ctx = leito.getContext('2d');
    ctx.setTransform(B.dpr, 0, 0, B.dpr, 0, 0);
    ctx.clearRect(0, 0, B.W, B.H);
    const d = B.destaque, fd = d ? faixaDe(d) : null;
    const fT = e => d ? (e.id === d ? 0 : 1) : (filtro && e.faixa !== filtro ? 0.8 : 0);
    const fB = b => d ? (b.f === fd ? 0.3 : 1) : (filtro && b.f !== filtro ? 0.8 : 0);
    const fM = d ? 0.35 : 0;
    const lista = B.tribs.map(t => ({ curso: t.curso, fosco: fT(t.e) }))
      .concat(B.bandas.map(b => ({ curso: b.curso, fosco: fB(b) })))
      .concat([{ curso: B.main, fosco: fM }]);
    RIO.leito(ctx, lista, { fundo: FUNDO, foz: { x: B.cx, y: B.yM, r: B.R, cor: B.corFoz, aro: ARO, fosco: fM } });
    B.tribs.forEach(t => {
      ctx.globalAlpha = 1 - fT(t.e) * 0.85; ctx.fillStyle = RIO.css(t.cor);
      ctx.beginPath(); ctx.arc(t.sx, t.sy, B.mob ? 2.3 : 2.7, 0, TAU); ctx.fill();
    });
    ctx.globalAlpha = 1;
    if (d){ const t = B.tribs.find(z => z.e.id === d); if (t) RIO.traco(ctx, t.rota, t.cor, B.mob ? 1.8 : 2.2); }
    if (reduzido) RIO.setas(ctx, B.main, 'rgba(232,255,236,.5)', B.mob ? 90 : 110);
    rotulos.querySelectorAll('.rt').forEach(x => {
      const e = porId[x.dataset.id];
      x.classList.toggle('dim', !!(d ? x.dataset.id !== d : (filtro && e && e.faixa !== filtro)));
    });
    marca();
  }
  function marca(){
    if (!B || !B.ctl) return;
    const d = B.destaque, fd = d ? faixaDe(d) : null;
    B.ctl.marca(x => {
      if (d){ if (x.id === d) return 1; if (x.id == null) return (x.grupo === 'principal' || x.grupo === fd) ? 0.45 : 0.1; return 0.1; }
      if (filtro) return (x.grupo === filtro || x.grupo === 'principal') ? 1 : 0.14;
      return 1;
    });
  }
  function realca(id){ if (B && B.destaque !== id){ B.destaque = id; pinta(); } }
  function filtra(f){ filtro = FAIXAS[f] ? f : null; if (B){ B.destaque = null; pinta(); } }
  /* tocar num caso: o rio dele acende, os outros esmaecem, sai um surto de gotas (os registros dele);
     depois, a ficha (link) ou o que a página mandar. Com teclas de modificação o link abre como sempre. */
  function toca(id, ev, el){
    if (ev && (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button > 0)) return;
    if (reduzido){ if (!op.href && op.aoTocar) op.aoTocar(id); return; }
    if (ev) ev.preventDefault();
    clearTimeout(tocaT);
    realca(id);
    if (B && B.ctl && B.ctl.surto) B.ctl.surto(id, 40);
    tocaT = setTimeout(() => {
      tocaT = 0;
      if (op.href && el){ location.href = el.getAttribute('href'); setTimeout(() => realca(null), 800); }
      else if (op.aoTocar) op.aoTocar(id);
    }, op.href ? 360 : 400);
  }
  /* o aro da foto pisca quando uma gota chega; sempre em cor neutra (nada dele em vermelho ou âmbar) */
  function aroPulsa(){
    const f = rotulos.querySelector('.foz-b'); if (!f) return;
    f.style.borderColor = '#ffffff';
    clearTimeout(aroT); aroT = setTimeout(() => { f.style.borderColor = ''; }, 260);
  }
  function poeFoto(){
    const f = rotulos.querySelector('.foz-b'), url = op.foto ? op.foto() : null;
    if (!f || !url || f.querySelector('img')) return;
    const im = new Image(); im.alt = ''; im.addEventListener('error', () => im.remove()); im.src = url; f.appendChild(im);
  }
  /* voltar pela história do navegador (bfcache): tira o realce do caso tocado */
  window.addEventListener('pageshow', () => { if (B && B.destaque){ clearTimeout(tocaT); tocaT = 0; realca(null); } });

  return {
    monta, filtra, realca, foto: poeFoto,
    filtro: () => filtro,
    estado: () => B ? { W: B.W, H: B.H, linhas: [].slice.call(rotulos.querySelectorAll('.rt')).map(x => ({ id: x.dataset.id, top: parseInt(x.style.top, 10), h: parseInt(x.style.height, 10) })) } : null
  };
};
window.BDBacia.FAIXAS = FAIXAS;
window.BDBacia.ORDEM = ORDEM_RIO;
})();
