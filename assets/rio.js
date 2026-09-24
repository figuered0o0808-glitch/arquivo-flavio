/* =====================================================================
   assets/rio.js · RIO: motor de água do BolsoDrive. Canvas 2D, sem dependências.
   Objeto global window.RIO. A abertura (index.html) usa este arquivo; o motor é
   o mesmo que roda na Foz (foz.html), copiado de lá sem mudar o desenho: é o mesmo rio.
   Acréscimos em relação à cópia da Foz: RIO.inverte, RIO.nitidez, RIO.parcial (a história
   rolável da abertura, assets/historia.js) e, nas rotas da correnteza, a opção semFoz
   (água que sai e não acende a foz). Depois: o leito em cinco passes (margens discretas,
   canal e reflexo), a largura orgânica (RIO.organico) e as linhas da correnteza reaproveitáveis
   (RIO.tracos), para a água da página, a da história e a da foz serem um curso só.

   Regras de movimento do site
     requestAnimationFrame; canvas 2D sem blur (o brilho é um sprite pré-renderizado);
     DPR até 1,75 e no máximo 5 Mpx por canvas (RIO.nitidez); pausa fora da tela e com a
     aba oculta (RIO.observa); prefers-reduced-motion = um quadro parado e completo.

   Conceitos
     curso  caminho reamostrado a cada RIO.PASSO px, com largura e cor por ponto:
            { x[], y[], s[] (comprimento acumulado), nx[], ny[] (normal),
              w[] (largura), c[] (cor [r,g,b]), n (pontos), L (comprimento) }
     rota   cursos emendados, da nascente até a foz; é por onde a gota corre.
     gota   partícula luminosa que desce uma rota, na cor da sua nascente.

   Geometria
     RIO.curso(pts)                 [[x,y],...] -> curso reamostrado, com normais
     RIO.bezier(p0,p1,p2,p3,n)      pontos de uma cúbica
     RIO.meandro(a, b, op)          afluente sinuoso de a=[x,y] até b=[x,y]
                                    op: { amp, ondas (meias voltas), fase, ta:[dx,dy] saída, tb:[dx,dy] chegada, tensao }
     RIO.pinta(curso, fn)           fn(i, y, t) -> [largura, cor]; t = fração do comprimento
     RIO.rota([curso,i0,i1], ...)   emenda trechos numa rota contínua
     RIO.inverte(curso)             o mesmo caminho no sentido contrário (água que sai)
     RIO.primeiro(arr, v)           primeiro índice com arr[i] >= v (arr crescente)
     RIO.nitidez(W, H)              DPR do canvas W x H: até 1,75 e no máximo ~5 Mpx

   Desenho parado (uma vez por layout, numa camada própria)
     RIO.leito(ctx, lista, op)      lista [{curso, fosco 0..1, aberto}]: margem larga e fraca, margem,
                                    corpo, canal e reflexo (PASSES), com as cores já misturadas ao
                                    fundo (sem blur por quadro); aberto = a ponta final é emenda com
                                    outro canvas (o reflexo não para antes dela)
                                    op: { fundo:[r,g,b], foz:{x,y,r,cor,fosco} }
     RIO.organico(curso, op)        largura que alarga e estreita devagar; op.jan(y, s) = 0 nas emendas
     RIO.tracos(curso, rnd, base)   as linhas tracejadas da correnteza de um curso (Path2D)
     RIO.pintaTracos(ctx, l, t, vel, a, b, alfa)  desenha essas linhas no instante t (entre y = a e b)
     RIO.traco(ctx, rota, cor, lw)  realce de uma rota inteira (nascente -> foz)
     RIO.parcial(ctx, curso, a, b, op)  o mesmo desenho do leito, só do trecho [a, b] do curso
                                    (frações do comprimento), para água que cresce quadro a quadro
                                    op: { fundo:[r,g,b], alfa 0..1, k (multiplica a largura) }
     RIO.setas(ctx, curso, cor, d)  setas de sentido a cada d px (versão parada)

   Movimento
     RIO.correnteza(canvas, cena)   -> { liga(), desliga(), quadro(), marca(fn), surto(id,n), medir(n) }; fica também em canvas.rio
        cena: { W, H, dpr, vel (px/s), raio, ox (o canvas começa ox px à direita da origem dos cursos: um canvas
                estreito, só na faixa do rio, cabe nos 5 Mpx com mais nitidez),
                cursos:[{curso, id, grupo}]   traços da correnteza (mais lentos junto à margem)
                rotas:[{rota, cor, taxa, fila, leve, semFoz, id, grupo}]   gotas da nascente até a foz:
                      taxa = gotas por segundo; cada gota leva o próximo item da fila (em ordem);
                      leve = gotejamento discreto (sem registros), que não acende a foz;
                      semFoz = a rota não termina na foz (a gota some no fim sem acender o aro)
                fontes:[{x, y, cor, id, grupo}]         nascentes que pulsam
                foz:{x, y, r, cor, aro}                 ondulação na foz (aro: cor fixa do anel; o anel é dele, então é sempre neutro)
                janela() -> [topo, base] visível em px do canvas (só isso é desenhado)
                intro (onda de luz de cima para baixo na primeira vez), aoChegar() quando ela chega à foz,
                aoGota(cor, item) quando uma gota (não esmaecida) chega à foz: o aro pulsa na cor dela
                aroFixo = true: o aro fica na cor da foz (sem legenda por perto, a cor da gota seria lida como situação dele) }
        marca(fn): fn({id, grupo}) -> opacidade de cada rota, traço e nascente
        surto(id, n): solta de uma vez, mais depressa, até n itens da fila daquele rio
     RIO.observa(el, ctl)           liga só com el na tela e a aba visível; devolve desliga()
     RIO.gota(cor, raio, dpr)       sprite pré-renderizado (o brilho custa um drawImage)

   Cores
     RIO.mix(a, b, t), RIO.mistura([[cor,peso],...]) (as águas se misturam), RIO.css(cor, alfa)
     RIO.reduzido: prefers-reduced-motion. Nesse caso liga() desenha um quadro parado.
   ===================================================================== */
window.RIO = (function(){
'use strict';
const PASSO = 3, TAU = Math.PI * 2;
const reduzido = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const lerp = (a, b, t) => a + (b - a) * t;
const suave = t => t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t);
const mix = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const css = (c, a) => (a == null ? 'rgb(' : 'rgba(') + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + (a == null ? ')' : ',' + a + ')');
function mistura(pares){
  let r = 0, g = 0, b = 0, p = 0;
  pares.forEach(x => { const w = x[1]; if (w > 0){ r += x[0][0] * w; g += x[0][1] * w; b += x[0][2] * w; p += w; } });
  return p ? [r / p, g / p, b / p] : [128, 128, 128];
}
function semente(n){
  let a = (n >>> 0) || 1;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const unit = v => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };

function curso(pts){
  const n = pts.length, cum = [0];
  for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const L = cum[n - 1] || 0, m = Math.max(2, Math.ceil(L / PASSO) + 1);
  const x = [], y = [], s = [];
  let j = 0;
  for (let k = 0; k < m; k++){
    const d = L * k / (m - 1);
    while (j < n - 2 && cum[j + 1] < d) j++;
    const seg = cum[j + 1] - cum[j], t = seg > 0 ? (d - cum[j]) / seg : 0;
    x.push(lerp(pts[j][0], pts[Math.min(n - 1, j + 1)][0], t));
    y.push(lerp(pts[j][1], pts[Math.min(n - 1, j + 1)][1], t));
    s.push(d);
  }
  const nx = [], ny = [];
  for (let k = 0; k < m; k++){
    const a = Math.max(0, k - 1), b = Math.min(m - 1, k + 1);
    const u = unit([x[b] - x[a], y[b] - y[a]]);
    nx.push(-u[1]); ny.push(u[0]);
  }
  return { x, y, s, nx, ny, w: new Array(m).fill(1), c: new Array(m).fill([200, 200, 200]), n: m, L };
}
function bezier(p0, p1, p2, p3, n){
  const out = [];
  for (let i = 0; i <= n; i++){
    const t = i / n, u = 1 - t;
    out.push([u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
              u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]]);
  }
  return out;
}
function meandro(a, b, op){
  op = op || {};
  const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const ta = unit(op.ta || [b[0] - a[0], b[1] - a[1]]), tb = unit(op.tb || [b[0] - a[0], b[1] - a[1]]);
  const k = d * (op.tensao || 0.42);
  const base = bezier(a, [a[0] + ta[0] * k, a[1] + ta[1] * k], [b[0] - tb[0] * k, b[1] - tb[1] * k], b, Math.max(24, Math.ceil(d / 2)));
  const amp = op.amp || 0, ondas = op.ondas || 2, fase = op.fase || 0, n = base.length - 1;
  if (!amp) return base;
  return base.map((p, i) => {
    const t = i / n, i0 = Math.max(0, i - 1), i1 = Math.min(n, i + 1);
    const tg = unit([base[i1][0] - base[i0][0], base[i1][1] - base[i0][1]]);
    const o = amp * Math.sin(Math.PI * t) * Math.sin(Math.PI * ondas * t + fase);
    return [p[0] - tg[1] * o, p[1] + tg[0] * o];
  });
}
function pinta(c, fn){
  for (let i = 0; i < c.n; i++){ const r = fn(i, c.y[i], c.L ? c.s[i] / c.L : 0); c.w[i] = r[0]; c.c[i] = r[1]; }
  return c;
}
function rota(){
  const r = { x: [], y: [], nx: [], ny: [], w: [], c: [], s: [] };
  for (let a = 0; a < arguments.length; a++){
    const [c, i0, i1] = arguments[a];
    for (let i = i0; i <= i1; i++){
      const k = r.x.length;
      if (k && Math.hypot(c.x[i] - r.x[k - 1], c.y[i] - r.y[k - 1]) < 0.5) continue;
      r.x.push(c.x[i]); r.y.push(c.y[i]); r.nx.push(c.nx[i]); r.ny.push(c.ny[i]); r.w.push(c.w[i]); r.c.push(c.c[i]);
    }
  }
  let acc = 0; r.s.push(0);
  for (let i = 1; i < r.x.length; i++){ acc += Math.hypot(r.x[i] - r.x[i - 1], r.y[i] - r.y[i - 1]); r.s.push(acc); }
  r.L = acc; r.n = r.x.length;
  return r;
}
function inverte(c){
  const r = { x: c.x.slice().reverse(), y: c.y.slice().reverse(), nx: c.nx.map(v => -v).reverse(), ny: c.ny.map(v => -v).reverse(),
              w: c.w.slice().reverse(), c: c.c.slice().reverse(), s: [], n: c.n, L: c.L };
  for (let i = 0; i < c.n; i++) r.s.push(c.L - c.s[c.n - 1 - i]);
  return r;
}
function nitidez(W, H){ return Math.max(1, Math.min(1.75, window.devicePixelRatio || 1, Math.sqrt(4.98e6 / Math.max(1, W * H)))); }
function primeiro(arr, v){
  let lo = 0, hi = arr.length - 1;
  if (arr[hi] < v) return hi;
  while (lo < hi){ const m = (lo + hi) >> 1; if (arr[m] >= v) hi = m; else lo = m + 1; }
  return lo;
}

/* ---- o desenho da água, de fora para dentro: margem larga e fraca, margem, corpo, canal e reflexo.
   As cores já vêm misturadas ao fundo (opacas): onde dois traços se cruzam nada se acumula.
   a = quanto da cor da água entra na mistura; o fosco (0..1) apaga a margem inteira e o resto em 90%.
   min: o passe só entra onde a água tem pelo menos essa largura (o canal não existe num fio d'água). ---- */
const BRANCO = [255, 255, 255];
const PASSES = [
  { lw: w => w * 1.5 + 9, a: 0.055, margem: true },
  { lw: w => w * 1.1 + 3.5, a: 0.15, margem: true },
  { lw: w => w, a: 0.5 },
  { lw: w => w * 0.5, a: 0.64, min: 3.2 },
  { lw: w => Math.max(0.6, w * 0.17), a: 0.95, branco: 0.16, desvio: 0.22, corta: true },
];
const corPasse = (P, F, c, f) => { const m = mix(F, c, P.a * (1 - (P.margem ? 1 : 0.9) * f)); return P.branco ? mix(m, BRANCO, P.branco * (1 - f)) : m; };
/* um passe de um trecho [i0, i1] do curso: segmentos agrupados por largura (de 1/4 em 1/4 px) e cor */
function passe(ctx, P, c, i0, i1, F, f, k){
  const dv = P.desvio || 0;
  let chave = null;
  for (let i = i0; i < i1; i++){
    const w = (c.w[i] + c.w[i + 1]) / 2 * k;
    if (P.min && w < P.min){ if (chave !== null){ ctx.stroke(); chave = null; } continue; }
    const lw = Math.round(P.lw(w) * 4) / 4, cs = css(corPasse(P, F, c.c[i], f)), ch = lw + cs;
    if (ch !== chave){
      if (chave !== null) ctx.stroke();
      ctx.beginPath(); ctx.lineWidth = lw; ctx.strokeStyle = cs;
      ctx.moveTo(c.x[i] + c.nx[i] * c.w[i] * k * dv, c.y[i] + c.ny[i] * c.w[i] * k * dv);
      chave = ch;
    }
    ctx.lineTo(c.x[i + 1] + c.nx[i + 1] * c.w[i + 1] * k * dv, c.y[i + 1] + c.ny[i + 1] * c.w[i + 1] * k * dv);
  }
  if (chave !== null) ctx.stroke();
}
/* ---- leito: os passes de todos os cursos, um passe por vez (a margem de um nunca cobre o corpo de outro).
   item.aberto = true: a ponta final é uma emenda com o canvas seguinte (o reflexo vai até o fim) ---- */
function leito(ctx, lista, op){
  const F = op.fundo || [5, 8, 5];
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const foz = op.foz;
  PASSES.forEach((P, pi) => {
    lista.forEach(item => {
      const c = item.curso;
      let fim = c.n - 1;
      if (P.corta && !item.aberto) fim = Math.max(1, fim - Math.ceil((c.w[fim] * 0.7 + 3) / PASSO));
      passe(ctx, P, c, 0, fim, F, item.fosco || 0, 1);
    });
    if (foz){
      const f = foz.fosco || 0, cf = foz.aro || foz.cor;
      ctx.beginPath();
      /* com aro fixo, o halo em volta da foto também é neutro: a cor da água para antes dele */
      if (pi === 0){ ctx.fillStyle = css(mix(F, cf, (foz.aro ? 0.05 : 0.1) * (1 - f))); ctx.arc(foz.x, foz.y, foz.r + 26, 0, TAU); ctx.fill(); }
      if (pi === 1){ ctx.fillStyle = css(mix(F, cf, (foz.aro ? 0.1 : 0.2) * (1 - f))); ctx.arc(foz.x, foz.y, foz.r + 15, 0, TAU); ctx.fill(); }
      if (pi === 2){ ctx.fillStyle = css(mix(F, cf, (foz.aro ? 0.16 : 0.5) * (1 - 0.8 * f))); ctx.arc(foz.x, foz.y, foz.r + 10, 0, TAU); ctx.fill(); }
      if (pi === 4){ ctx.strokeStyle = css(mix(F, cf, 0.9 * (1 - 0.8 * f))); ctx.lineWidth = 1.2; ctx.arc(foz.x, foz.y, foz.r + 10, 0, TAU); ctx.stroke(); }
    }
  });
}
/* ---- parcial: o leito de um pedaço do curso (a água que cresce, na história rolável) ---- */
function parcial(ctx, c, a, b, op){
  op = op || {};
  const F = op.fundo || [5, 8, 5], al = op.alfa == null ? 1 : op.alfa, k = op.k || 1;
  if (!c || c.n < 2 || b <= a || al <= 0.01) return;
  const i0 = Math.min(c.n - 2, primeiro(c.s, Math.max(0, a) * c.L)), i1 = Math.max(i0 + 1, primeiro(c.s, Math.min(1, b) * c.L));
  ctx.save();
  ctx.globalAlpha *= al; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  PASSES.forEach(P => passe(ctx, P, c, i0, i1, F, 0, k));
  ctx.restore();
}
/* ---- largura orgânica: a água alarga e estreita devagar (duas ondas longas, fora de fase).
   op: { amp (fração da largura), onda (período da onda maior, px), semente, jan(y, s) -> 0..1 (0 = sem mudança: as emendas) } ---- */
function organico(c, op){
  op = op || {};
  const amp = op.amp == null ? 0.08 : op.amp, r = semente(op.semente || 3), f1 = r() * TAU, f2 = r() * TAU;
  const l1 = (op.onda || 260) / TAU, l2 = l1 * 0.43;
  for (let i = 0; i < c.n; i++){
    const s = c.s[i], j = op.jan ? op.jan(c.y[i], s) : 1;
    if (j > 0) c.w[i] *= 1 + amp * j * (0.65 * Math.sin(s / l1 + f1) + 0.35 * Math.sin(s / l2 + f2));
  }
  return c;
}
/* ---- a correnteza desenhada: linhas tracejadas que andam no sentido do fluxo, mais lentas e fracas
   junto à margem; o número de linhas acompanha a largura da água ---- */
function tracos(c, rnd, base){
  rnd = rnd || Math.random;
  let wm = 0, y0 = Infinity, y1 = -Infinity;
  for (let i = 0; i < c.n; i++){ if (c.w[i] > wm) wm = c.w[i]; if (c.y[i] < y0) y0 = c.y[i]; if (c.y[i] > y1) y1 = c.y[i]; }
  const linha = f => { const p = new Path2D(); for (let i = 0; i < c.n; i++){ const o = f * c.w[i]; const x = c.x[i] + c.nx[i] * o, y = c.y[i] + c.ny[i] * o; if (i) p.lineTo(x, y); else p.moveTo(x, y); } return p; };
  const b = Object.assign({ y0: y0 - 12, y1: y1 + 12, alfa: 1 }, base || {});
  const out = [];
  if (wm < 5) out.push(Object.assign({ path: linha(0), dash: [2, 12], lw: 0.9, fase: rnd() * 14, vf: 1, al: 0.24 }, b));
  else if (wm < 11){
    out.push(Object.assign({ path: linha(-0.1), dash: [3, 15], lw: 1.1, fase: rnd() * 18, vf: 1, al: 0.26 }, b));
    out.push(Object.assign({ path: linha(0.26), dash: [2, 21], lw: 0.9, fase: rnd() * 23, vf: 0.82, al: 0.17 }, b));
  } else [[-0.3, 0.16], [-0.04, 0.28], [0.28, 0.16]].forEach((q, j) => out.push(Object.assign({ path: linha(q[0]), dash: [4 + j, 17 + j * 5], lw: j === 1 ? 1.3 : 1.1, fase: rnd() * 25, vf: 1 - Math.abs(q[0]) * 0.7, al: q[1] }, b)));
  return out;
}
function pintaTracos(ctx, lista, t, vel, a, b, alfa){
  ctx.lineCap = 'butt'; ctx.strokeStyle = 'rgb(232,255,236)';
  const g0 = ctx.globalAlpha;
  for (const tr of lista){
    if (tr.y1 < a || tr.y0 > b || tr.alfa < 0.03) continue;
    ctx.globalAlpha = g0 * tr.alfa * tr.al * (alfa == null ? 1 : alfa); ctx.lineWidth = tr.lw; ctx.setLineDash(tr.dash);
    ctx.lineDashOffset = -(t * vel * tr.vf + tr.fase);
    ctx.stroke(tr.path);
  }
  ctx.setLineDash([]); ctx.globalAlpha = g0;
}
function traco(ctx, r, cor, lw){
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  [[lw * 4, 0.2], [lw, 0.95]].forEach(p => {
    ctx.beginPath(); ctx.moveTo(r.x[0], r.y[0]);
    for (let i = 1; i < r.n; i++) ctx.lineTo(r.x[i], r.y[i]);
    ctx.strokeStyle = css(cor, p[1]); ctx.lineWidth = p[0]; ctx.stroke();
  });
}
function setas(ctx, c, cor, cada){
  ctx.strokeStyle = cor; ctx.lineWidth = 1.4; ctx.lineCap = 'round';
  for (let s = cada / 2; s < c.L - cada / 3; s += cada){
    const i = primeiro(c.s, s), tx = c.ny[i], ty = -c.nx[i], x = c.x[i], y = c.y[i];
    ctx.beginPath();
    ctx.moveTo(x - tx * 3 + c.nx[i] * 4, y - ty * 3 + c.ny[i] * 4);
    ctx.lineTo(x + tx * 2, y + ty * 2);
    ctx.lineTo(x - tx * 3 - c.nx[i] * 4, y - ty * 3 - c.ny[i] * 4);
    ctx.stroke();
  }
}
function gota(cor, raio, dpr){
  const R = raio * 2.4, S = Math.max(4, Math.ceil(R * 2 * dpr));
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const g = cv.getContext('2d'), m = S / 2;
  const grd = g.createRadialGradient(m, m, 0, m, m, m);
  const claro = mix(cor, [255, 255, 255], 0.55);
  grd.addColorStop(0, css(claro, 1)); grd.addColorStop(0.2, css(claro, 0.95));
  grd.addColorStop(0.34, css(cor, 0.55)); grd.addColorStop(0.62, css(cor, 0.13)); grd.addColorStop(1, css(cor, 0));
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  return { img: cv, r: R };
}

/* ---- correnteza: o que se mexe a cada quadro ---- */
function correnteza(cv, cena){
  const ctx = cv.getContext('2d');
  const W = cena.W, H = cena.H, dpr = cena.dpr || 1;
  const rnd = semente(cena.semente || 11);
  const vel = cena.vel || 55;
  const sprites = {};
  const sprite = (cor, k) => { const c = cor.join(',') + '/' + k; return sprites[c] || (sprites[c] = gota(cor, (cena.raio || 2.6) * k, dpr)); };
  /* esp: distância (px) entre duas gotas seguidas = velocidade / gotas por segundo */
  const rotas = (cena.rotas || []).map(r => Object.assign({}, r, { esp: vel / Math.max(0.01, r.taxa || 0.05), alfa: 1,
    sp: sprite(r.cor, r.leve ? 0.62 : 1), fila: r.fila || [], idx: 0, acc: 0 }));
  const fontes = (cena.fontes || []).map(f => Object.assign({}, f, { alfa: 1 }));
  const F = cena.foz ? Object.assign({ alfa: 1 }, cena.foz) : null;

  /* traços da correnteza: tracejado que anda no sentido do fluxo; junto à margem anda mais devagar */
  const tr_ = [];
  (cena.cursos || []).forEach(item => { tracos(item.curso, rnd, { id: item.id, grupo: item.grupo }).forEach(x => tr_.push(x)); });

  /* gotas: cada uma leva um item da fila do seu rio, na ordem (a mais adiantada é a mais antiga).
     Já em regime (espalhadas pela rota) para o rio nascer correndo. */
  const gotas = [];
  const poe = g => { const r = rotas[g.ri].rota; while (g.i < r.n - 2 && r.s[g.i + 1] < g.s) g.i++; };
  function nova(ri, s, item, rapido){
    const r = rotas[ri];
    if (item === undefined) item = r.fila.length ? r.fila[r.idx++ % r.fila.length] : null;
    const g = { ri, s, i: 0, u: (rnd() * 2 - 1) * 0.6, v: (0.92 + rnd() * 0.16) * (rapido || 1), viva: true, item, extra: !!rapido };
    poe(g); gotas.push(g);
  }
  rotas.forEach((r, ri) => {
    const off = r.esp * rnd(), ss = [];
    for (let s = off; s < r.rota.L; s += r.esp) ss.push(s);
    ss.reverse().forEach(s => nova(ri, s));
    r.acc = off;                                   /* distância andada desde a última gota solta */
  });

  /* a foz: o aro acende com o que chega e solta um pulso na cor da gota */
  const fixo = !!(cena.aroFixo || (F && F.aro));     /* aro fixo: nunca na cor da gota (a cor seria lida como situação dele) */
  const aro = { brilho: 0, cor: F ? (F.aro || F.cor) : [216, 239, 221], pulsos: [], ult: -9 };
  function chega(g){
    const r = rotas[g.ri];
    if (r.leve || r.semFoz || r.alfa < 0.9 || !F) return;
    aro.brilho = Math.min(1, aro.brilho + 0.14); if (!fixo) aro.cor = r.cor;
    if (t - aro.ult > 0.22){ aro.ult = t; aro.pulsos.push({ t0: t, cor: fixo ? aro.cor : r.cor }); if (cena.aoGota && !fixo) cena.aoGota(r.cor, g.item); }
  }

  function atualiza(dt){
    let morta = false;
    for (const g of gotas){
      g.s += vel * g.v * dt;
      if (g.s >= rotas[g.ri].rota.L){ g.viva = false; morta = true; chega(g); } else if (g.s > 0) poe(g);
    }
    rotas.forEach((r, ri) => { r.acc += vel * dt; while (r.acc >= r.esp){ r.acc -= r.esp; nova(ri, r.acc); } });
    if (morta){ let j = 0; for (const g of gotas) if (g.viva) gotas[j++] = g; gotas.length = j; }
    aro.brilho *= Math.exp(-dt / 0.5);
    if (aro.pulsos.length) aro.pulsos = aro.pulsos.filter(p => t - p.t0 < 0.9);
  }

  /* abertura: uma onda de luz desce das nascentes até a foz uma vez (nada fica escondido
     se ela não terminar: o leito e as gotas já estão lá) */
  const DUR = 3;
  let t = 0, tIntro = 0, prev = [0, H], revelado = !cena.intro, chegou = !cena.intro;
  const frente = () => revelado ? null : (H + 160) * (1 - Math.pow(1 - Math.min(1, tIntro / DUR), 2)) - 80;

  function desenha(tudo){
    let a = 0, b = H;
    if (!tudo && cena.janela){ const j = cena.janela(); a = Math.max(0, j[0]); b = Math.min(H, j[1]); }
    ctx.setTransform(dpr, 0, 0, dpr, -(cena.ox || 0) * dpr, 0);
    const c0 = Math.max(0, Math.min(a, prev[0])), c1 = Math.min(H, Math.max(b, prev[1]));
    if (c1 > c0) ctx.clearRect(0, c0, W, c1 - c0);
    prev = [a, b];
    const fr = frente();
    if (fr !== null){
      if (!chegou && F && fr >= F.y){ chegou = true; if (cena.aoChegar) cena.aoChegar(); }
      if (tIntro >= DUR) revelado = true;
    }
    const bb = b;
    if (bb <= a) return;
    ctx.save();
    ctx.beginPath(); ctx.rect(0, a, W, bb - a); ctx.clip();

    ctx.globalAlpha = 1;
    pintaTracos(ctx, tr_, t, vel, a, bb);

    ctx.lineWidth = 1;
    fontes.forEach((f, k) => {
      if (f.y < a - 14 || f.y > bb + 14) return;
      const ph = (t / 3.2 + k * 0.173) % 1;
      ctx.globalAlpha = 0.6 * (1 - ph) * f.alfa; ctx.strokeStyle = css(f.cor);
      ctx.beginPath(); ctx.arc(f.x, f.y, 2.6 + ph * 7.5, 0, TAU); ctx.stroke();
    });

    const fimR = F ? F.r * 0.9 : 20;
    for (const g of gotas){
      const r = rotas[g.ri], ro = r.rota, i = g.i, s0 = ro.s[i], s1 = ro.s[i + 1];
      const f = s1 > s0 ? Math.min(1, Math.max(0, (g.s - s0) / (s1 - s0))) : 0;
      const o = g.u * ro.w[i] * 0.5;
      const x = ro.x[i] + (ro.x[i + 1] - ro.x[i]) * f + ro.nx[i] * o;
      const y = ro.y[i] + (ro.y[i + 1] - ro.y[i]) * f + ro.ny[i] * o;
      if (y < a - 10 || y > bb + 10) continue;
      let al = r.alfa * Math.min(1, g.s / 16) * Math.min(1, (ro.L - g.s) / (r.semFoz ? 10 : fimR)) * (r.leve ? 0.5 : 1);
      if (fr !== null && y > fr + 40) al *= 0.4;          /* abaixo da onda, as gotas ainda estão fracas */
      if (al <= 0.02) continue;
      ctx.globalAlpha = al;
      ctx.drawImage(r.sp.img, x - r.sp.r, y - r.sp.r, r.sp.r * 2, r.sp.r * 2);
      if (fr !== null){
        const k = Math.exp(-Math.pow((y - fr) / 60, 2));
        if (k > 0.05){ const q = r.sp.r * (1 + 1.4 * k); ctx.globalAlpha = al * k * 0.8; ctx.drawImage(r.sp.img, x - q, y - q, q * 2, q * 2); }
      }
    }

    if (F && F.y + F.r * 2.3 > a && F.y - F.r * 2.3 < bb){
      ctx.strokeStyle = css(mix(F.aro || F.cor, [255, 255, 255], 0.35)); ctx.lineWidth = 1.3;
      for (let k = 0; k < 3; k++){
        const ph = (t / 4.2 + k / 3) % 1, rr = F.r + 11 + ph * F.r * 1.05;
        ctx.globalAlpha = 0.42 * Math.pow(1 - ph, 1.5) * F.alfa;
        ctx.beginPath();
        for (let j = 0; j <= 56; j++){
          const th = j / 56 * TAU, r2 = rr + 1.5 * Math.sin(th * 5 + t * 1.6 + k * 2.1);
          const x = F.x + Math.cos(th) * r2, y = F.y + Math.sin(th) * r2;
          if (j) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        }
        ctx.stroke();
      }
      if (aro.brilho > 0.02){
        ctx.strokeStyle = css(aro.cor);
        ctx.globalAlpha = aro.brilho * 0.35; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(F.x, F.y, F.r + 4, 0, TAU); ctx.stroke();
        ctx.globalAlpha = Math.min(1, aro.brilho * 1.2); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(F.x, F.y, F.r + 2, 0, TAU); ctx.stroke();
      }
      for (const p of aro.pulsos){
        const k = (t - p.t0) / 0.9;
        ctx.globalAlpha = (1 - k) * 0.7; ctx.strokeStyle = css(p.cor); ctx.lineWidth = 2.2 * (1 - k) + 0.4;
        ctx.beginPath(); ctx.arc(F.x, F.y, F.r + 3 + k * 24, 0, TAU); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  let raf = 0, ult = 0, ativo = false, media = 1 / 60, lento = 0, leve = false, lentos = 0;
  function alivia(){
    leve = true;
    rotas.forEach(r => { r.esp *= 2; });
    let j = 0; gotas.forEach((g, k) => { if (k % 2 === 0 || g.extra) gotas[j++] = g; else g.viva = false; }); gotas.length = j;
  }
  function medir(n){   /* custo por quadro em ms (n quadros seguidos, síncronos) */
    const t0 = performance.now();
    for (let k = 0; k < n; k++){ t += 1 / 60; if (!revelado) tIntro += 1 / 60; atualiza(1 / 60); desenha(false); }
    const ms = (performance.now() - t0) / n;
    return { ms: Math.round(ms * 100) / 100, gotas: gotas.length, tracos: tr_.length };
  }
  function passo(ts){
    raf = 0; if (!ativo) return;
    const real = ult ? (ts - ult) / 1000 : 1 / 60, dt = Math.min(0.1, real); ult = ts;
    /* aparelho lento: se os quadros passam de ~24 ms por 2 s seguidos, metade das gotas */
    if (!leve && real < 0.5){ media = media * 0.95 + real * 0.05; if (media > 0.024){ if ((lento += real) > 2) alivia(); } else lento = 0; }
    t += dt;
    if (!revelado){ tIntro += real; if (real > 0.15 && ++lentos >= 2) tIntro = DUR; }   /* relógio real; aparelho lento pula a revelação */
    atualiza(dt); desenha(false);
    raf = requestAnimationFrame(passo);
  }
  return cv.rio = {
    medir,
    liga(){ if (reduzido){ desenha(true); return; } if (ativo) return; ativo = true; ult = 0; raf = requestAnimationFrame(passo); },
    desliga(){ ativo = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
    quadro(){ desenha(true); },
    marca(fn){
      rotas.forEach(r => { r.alfa = fn(r); }); tr_.forEach(tr => { tr.alfa = fn(tr); }); fontes.forEach(f => { f.alfa = fn(f); });
      if (!ativo) desenha(true);
    },
    surto(id, n){
      if (reduzido) return;
      const ri = rotas.findIndex(r => r.id === id); if (ri < 0) return;
      const r = rotas[ri], k = Math.min(n || 40, r.fila.length);
      /* entram em fila logo atrás da nascente (s negativo = ainda não saiu) e descem mais depressa */
      for (let j = 0; j < k; j++) nova(ri, -j * 9, r.fila[j], 2.2);
    },
    get ativo(){ return ativo; },
    get gotas(){ return gotas.length; }
  };
}

function observa(el, ctl){
  let visivel = false;
  const decide = () => { if (visivel && !document.hidden) ctl.liga(); else ctl.desliga(); };
  const io = ('IntersectionObserver' in window) ? new IntersectionObserver(es => { visivel = es[es.length - 1].isIntersecting; decide(); }, { rootMargin: '60px 0px' }) : null;
  document.addEventListener('visibilitychange', decide);
  if (io) io.observe(el); else { visivel = true; decide(); }
  return () => { if (io) io.disconnect(); document.removeEventListener('visibilitychange', decide); ctl.desliga(); };
}

return { PASSO, TAU, reduzido, lerp, suave, mix, css, mistura, semente, curso, bezier, meandro, pinta, rota, inverte, nitidez, primeiro, leito, parcial, organico, tracos, pintaTracos, traco, setas, gota, correnteza, observa };
})();
