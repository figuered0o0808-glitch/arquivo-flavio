/* =====================================================================
   assets/historia.js · A HISTÓRIA ROLÁVEL da abertura (index.html).
   O palco (canvas) fica preso na tela enquanto a página rola; a rolagem é a linha do
   tempo, nos dois sentidos, como arrastar a barra de um vídeo. Tudo o que aparece é
   função da posição de rolagem: s = scrollY + cabeçalho - topo da seção.

   Cenas
     abertura  "40 escândalos chegam a ele. Alguns, de perto:" com o rio completo
     capítulo  um escândalo por vez: o número do caso (conta com a rolagem) ou a frase, com quem afirma e a
               fonte; o título, os elos acendendo um a um (o nome e a situação em poucas
               palavras), a situação dele só quando ele tem situação formal no caso (investigado,
               denunciado, réu), a porta foz.html#<id> (no Master, dark-horse.html) e "enviar ↗" (data-share=<id>)
     fim       os 40 escoam juntos; o rio sai do palco e desce até a foto (#curso-f)

   Texto: só o que existe em window.FOZ, encurtado. Não se ressalta o que ele não é:
   basta não dizer que é.

   Movimento: um único requestAnimationFrame (window.BDQuadro, de assets/roteiro.js), que lê
   scrollY e offsets guardados no layout; canvas 2D sem blur; pausa fora da tela e com a aba
   oculta. Com prefers-reduced-motion: quadros parados, sem gotas.

   Assistir: quem rola a página sozinha é assets/roteiro.js; daqui sai o ritmo (T, por fase)
   em window.__historia.roteiro().

   Link de capítulo: index.html#cap-<id> abre a página já naquele capítulo.
   ===================================================================== */
(function(){
'use strict';
const RIO = window.RIO, FOZ = window.FOZ;
const doc = document, raiz = doc.documentElement;
const sec = doc.getElementById('historia');
if (!RIO || !FOZ || !sec || raiz.classList.contains('og')) return;

const $ = (s, r) => (r || doc).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || doc).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const { lerp, suave, TAU, reduzido } = RIO;
const FUNDO = [7, 10, 7], AGUA = [125, 245, 154];
const RGB = { grave: [255, 92, 92], medio: [255, 176, 46], leve: [92, 138, 99], caso: [134, 165, 140] };
const HEX = { grave: '#ff5c5c', medio: '#ffb02e', leve: '#5c8a63', caso: '#86a58c' };
const GRAV = { preso_ou_condenado_na_cadeia: 'grave', investigado_na_cadeia: 'medio', sem_processo_na_cadeia: 'leve' };
const FAIXAS = ['entorno', 'familia', 'gabinete', 'direto'];          /* de longe para perto */
const CURTO = { entorno: 'pelo entorno', familia: 'pela família', gabinete: 'pelo gabinete', direto: 'por ele mesmo' };
const TODOS = FOZ.escandalos || [];
if (!TODOS.length) return;
const EH_ELE = n => /^Flávio Bolsonaro$/.test(String(n || '').trim());

/* ---------- texto (literal, encurtado) ---------- */
const frases = t => String(t || '').split(/\.\s+(?=[A-ZÁÉÍÓÚÂÊÔÃÕÇ])/).map((s, i, a) => (i < a.length - 1 ? s + '.' : s));
const fimP = t => /[.!?…]$/.test(t) ? t : t + '.';
/* relação curta: a primeira frase; se longa, até o último ";" ou "," que cabe; se ainda longa, cortada numa palavra com "…" */
const relCurta = (t, max) => {
  let o = (frases(t)[0] || '').trim();
  if (o.length > max){ const k = o.lastIndexOf(';', max); if (k > 30) o = o.slice(0, k); }
  if (o.length > max){ const k = o.lastIndexOf(',', max); if (k > 34) o = o.slice(0, k); }
  if (o.length > max) o = o.slice(0, max).replace(/[\s,;:(]+\S*$/, '') + '…';
  o = o.replace(/\s+(?:ou|e|mas|nem|que|de|do|da|dos|das|com|para|a|o)$/i, '');   /* sem conjunção pendurada no corte */
  return o.replace(/[.;,]$/, '');
};
/* o que ele não é não se ressalta: basta não dizer que é. Tira do texto do número, se ainda houver,
   as orações do tipo "ele não é investigado", "não consta entre os indiciados", "nenhuma fonte diz…" */
const RESSALVA = /(?:^|[;,.]\s*)(?:e\s+)?(?:(?:ele|flávio)\s+)?(?:n[ãa]o\s+(?:é|está|foi|consta|há|o\s+\S+)|nenhuma fonte|as fontes n[ãa]o|sem (?:indiciamento|processo|investigação))[^;.]*/gi;
const semRessalva = t => String(t || '').replace(RESSALVA, '').replace(/\s*[;,]\s*$/, '').trim();
/* nome no palco: sem o parêntese quando longo */
const nomeCurto = n => { n = String(n || '').trim(); if (n.length > 26) n = n.replace(/\s*\([^)]*\)\s*$/, ''); return n.length > 34 ? n.slice(0, 33).replace(/\s+\S*$/, '') + '…' : n; };
/* situação de um nome da cadeia pelo texto literal do status: vermelho só para preso ou condenado.
   Antes de procurar, tira as negações ("não condenado", "sem condenação", "nunca foi preso", "não indiciado").
   Condenação vale enquanto não for anulada. Prisão anulada, revogada ou com o nome solto não é vermelha:
   com a denúncia arquivada fica sem processo; sem arquivamento, âmbar ("preso sob suspeita" → investigado).
   "pediu a revogação" não é revogação, e revogar cautelares não desfaz a prisão: só contam "anulou/anulada",
   prisão revogada, "solto", "arquivada". "Processado" conta como investigado (mesma regra de foz.html). */
function statusCls(s){
  s = String(s || '').toLowerCase().replace(/(?:^|[^\wÀ-ú])(n[ãa]o|nunca|sem|nenhum|ningu[ée]m)\s+(\S+\s+){0,2}?(pres[oa]s?|condena\S*|condenad\S*|indiciad\S*|indiciamento\S*|investigad\S*|denunciad\S*|den[úu]ncia\S*|r[ée]u|processad\S*)\b/g, ' ');
  const desfeito = /\banul(ou|ad[oa]s?)\b|revogou a (ordem de )?pris|pris[ãa]o (foi )?revogad|\bsolt[oa]s?\b|\barquivad[oa]s?\b/.test(s);
  if (/\bcondenad[oa]s?\b/.test(s) && !/condena\S*\s+(foi\s+)?anulad/.test(s)) return 'grave';
  if (/\bpres[oa]s?\b/.test(s)) return desfeito ? (/\barquivad/.test(s) ? 'leve' : 'medio') : 'grave';
  if (/(investigad|denunciad|\br[ée]u\b|\balvo\b|indiciad|processad)/.test(s)) return /\barquivad/.test(s) && !/(investigad|\br[ée]u\b|indiciad|processad)/.test(s) ? 'leve' : 'medio';
  return 'leve';
}
/* o dono do selo: o nome sem o parêntese e, se longo, cortado numa palavra */
const nomeSelo = n => { n = String(n || '').trim().replace(/\s*\([^)]*\)\s*$/, ''); return n.length > 30 ? n.slice(0, 29).replace(/\s+\S*$/, '') + '…' : n; };
const dataBR = d => /^\d{4}-\d\d-\d\d/.test(d || '') ? d.slice(8, 10) + '/' + d.slice(5, 7) + '/' + d.slice(0, 4) : '';

/* ---------- o número do caso (e.numero: {valor, texto, fonte}) ----------
   Conta de 0 até o valor só quando o valor é UM número com escala e unidade ("R$ 131 milhões",
   "23 homenageados", "R$ 199.999,79"). Valores compostos ("27 de 33", "4 anos e 2 meses",
   "R$ 20 a R$ 40", "até R$ 500 mil por mês") entram cheios, com fade. No fim da contagem o texto
   é o valor literal dos dados.
   Destaque-frase (numero.tipo = 'frase': "Emenda negociada", "Medalha Tiradentes"): sem contagem,
   letra de manchete menor que a do número, em uma ou duas linhas quebradas entre palavras (ajustaNum). */
const ESCALA = 'mil|milhão|milhões|bilhão|bilhões|trilhão|trilhões';
const RX_NUM = new RegExp('^(R\\$\\s?)?(\\d{1,3}(?:\\.\\d{3})+|\\d+)(?:,(\\d+))?(?:\\s+(' + ESCALA + '))?(?:\\s+(\\D+))?$');
function numeroDe(e){
  const n = e.numero; if (!n || !n.valor || !n.texto) return null;
  const valor = String(n.valor).trim(), m = n.tipo === 'frase' ? null : RX_NUM.exec(valor);
  const fonte = n.fonte && n.fonte.url ? n.fonte : null, tinta = n.cor === 'tinta';
  if (!m) return { valor, texto: String(n.texto).trim(), fonte, tinta, conta: false, frase: n.tipo === 'frase', grande: valor, unid: '' };
  const pre = m[1] ? 'R$ ' : '', dec = m[3] ? m[3].length : 0, mil = /\./.test(m[2]);
  const alvo = parseFloat(m[2].replace(/\./g, '') + (m[3] ? '.' + m[3] : ''));
  const esc_ = m[4] ? ' ' + m[4] : '';
  return { valor, texto: String(n.texto).trim(), fonte, tinta, conta: true, pre, alvo, dec, mil, esc: esc_,
    grande: pre + m[2] + (m[3] ? ',' + m[3] : '') + esc_, unid: m[5] ? m[5].trim() : '' };
}
/* formato pt-BR: ponto no milhar (quando o valor dos dados tem), vírgula decimal */
function fmtNum(v, dec, mil){
  const f = v.toFixed(dec).split('.');
  const i = mil ? f[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') : f[0];
  return f[1] ? i + ',' + f[1] : i;
}

/* ---------- a cadeia como árvore que converge nele ---------- */
function arvore(e){
  const c = e.cadeia || [];
  if (!c.length || c.some(l => EH_ELE(l.de))) return null;           /* ele como origem de um elo: outra gramática, fica na Foz */
  const pai = new Map(), ordem = [];
  for (let i = 0; i < c.length; i++){
    const d = String(c[i].de).trim(), p = String(c[i].para).trim();
    if (pai.has(d)) return null;                                         /* um nome com dois caminhos: fica na Foz */
    pai.set(d, { p, i });
    if (!ordem.includes(d)) ordem.push(d);
    if (!EH_ELE(p) && !ordem.includes(p)) ordem.push(p);
  }
  const prof = n => { let k = 0; while (!EH_ELE(n)){ const x = pai.get(n); if (!x || ++k > 12) return Infinity; n = x.p; } return k; };
  const nos = [];
  for (const n of ordem){ const d = prof(n); if (!isFinite(d)) return null; nos.push({ nome: n, prof: d, pai: pai.get(n).p, elo: pai.get(n).i, cls: statusCls(c[pai.get(n).i].status_de) }); }
  /* a nascente de uma cadeia (o caso, a operação): nome de onde tudo parte e que não chega direto a ele.
     O status desse elo fala do caso, não de uma pessoa: fica neutro (cinza), sem cor de situação */
  nos.forEach(no => { if (no.prof >= 2 && !nos.some(x => x.pai === no.nome)) no.cls = 'caso'; });
  return nos;
}

/* =====================================================================
   A escolha dos capítulos (editorial, calculada dos dados)
   Critério:
     1. fora: caso cuja ligação é só o parentesco (o status dele diz "A ligação é o parentesco");
        caso em que ele é a origem de um elo ou em que a cadeia não converge nele (fica na Foz);
        cadeia com menos de 2 elos documentados.
     2. nota = 3 se é caso conhecido do público (lista abaixo) + gravidade (preso/condenado no
        caminho 2, investigado 1) + 0,75 por elo documentado (até 4) + fontes / 4 (até 3).
     3. o Caso Master entra sempre; pelo menos um de cada faixa (ele mesmo, gabinete, família,
        entorno); no máximo 3 por faixa; 8 capítulos.
     4. ordem: de longe para perto (entorno, família, gabinete, ele mesmo) e, dentro da faixa,
        pelo ano em que começa o período.
   ===================================================================== */
const CONHECIDOS = ['master', 'rachadinha-alerj', 'inss-contador', 'marielle-ifop', 'cv-governo-rj', 'mocoes-pms-reus-condenados', 'abin-defesa-rachadinha', 'trama-golpista'];
const OBRIGATORIOS = ['master'];
const N_CAP = 8, MAX_FAIXA = 3;
const SO_PARENTESCO = /liga[çc][ãa]o é o parentesco/i;

/* =====================================================================
   O CASO MARIELLE: capítulo garantido e o primeiro depois da abertura, com cena própria.
   A cadeia dele na Foz tem duas nascentes ("Caso Marielle" → Peixe e → Ronald), por isso não
   vira árvore; a cena mostra os 5 condenados pelo STF como 5 nós (nome e pena) e acende os dois
   com ligação documentada com ele, cada um pelo caminho da cadeia.
   Tudo calculado: quem são os 5 são os nós do grafo (window.DOSSIE) listados abaixo; nome e
   caminho vêm da cadeia da Foz; a pena vem do resumo da Foz (o parêntese depois do nome); o
   instituto e o que liga cada um a ele, do resumo e da relação de cada elo.
   ===================================================================== */
const MARI = 'marielle-ifop';
const MARI_IDS = ['domingos-brazao', 'chiquinho-brazao', 'ronald-paulo-alves-pereira', 'rivaldo-barbosa', 'robson-calixto-fonseca'];
const MARI_INST = 'instituto-de-formacao-profissional-jose-ca';
const semPar = n => String(n || '').replace(/\s*\([^)]*\)\s*$/, '').trim();
const apelido = n => (String(n || '').match(/\(\s*['"‘’]?([^)'"‘’]+)['"‘’]?\s*\)\s*$/) || [])[1] || '';
/* nome no palco: "Robson Calixto, o Peixe", "Major Ronald", "Domingos Brazão" */
const nomeCena = n => { const a = apelido(n), b = semPar(n).split(/\s+/); return a ? b.slice(0, 2).join(' ') + ', o ' + a : (b.length > 3 ? b.slice(0, 2).join(' ') : b.join(' ')); };
const TITULO = /^(Major|Coronel|Capitão|Tenente|Sargento|Cabo|Delegado|Deputado|Vereador)$/i;
function dadosMarielle(e){
  const G = ((window.DOSSIE || {}).grafo) || {}, NO = new Map((G.nodes || []).map(n => [n.id, n]));
  const res = String(e.resumo || ''), cad = e.cadeia || [];
  const pessoas = MARI_IDS.map(id => {
    const no = NO.get(id), l = cad.find(x => x.de_id === id || x.para_id === id);
    const nome = l ? (l.de_id === id ? l.de : l.para) : (no && no.nome);
    if (!nome) return null;
    /* a pena: o primeiro parêntese com "anos" depois do nome no resumo; se não houver, o status do grafo */
    let pena = '';
    for (const t of semPar(nome).split(/\s+/).filter(t => !TITULO.test(t) && t.length > 3)){
      const i = res.indexOf(t); if (i < 0) continue;
      const m = /\((\d+ anos[^)]*)\)/.exec(res.slice(i)); if (m){ pena = m[1].replace(/\s+cada$/, ''); break; }
    }
    if (!pena && no){ const m = /(\d+ anos(?: e \d+ meses)?)/.exec(no.status || ''); if (m) pena = m[1]; }
    /* o caminho até ele pela cadeia (a partir do elo que sai desse nome) */
    const cam = []; let x = cad.find(y => y.de_id === id), n = 0;
    while (x && n++ < 6){ cam.push(x); if (EH_ELE(x.para)) break; const p = String(x.para).trim(); x = cad.find(y => String(y.de).trim() === p); }
    const liga = cam.length && EH_ELE(cam[cam.length - 1].para) ? cam : null;
    const cls = no ? statusCls(no.status) : (pena ? 'grave' : 'leve');
    return { id, nome, curto: nomeCena(nome), pena, liga, cls };
  }).filter(Boolean);
  const caminhos = pessoas.filter(p => p.liga).sort((a, b) => a.liga.length - b.liga.length);
  if (!caminhos.length) return null;
  /* cada passo de cada caminho é um elo da história (Ronald → ele; Peixe → assessora; assessora → ele) */
  const passos = [];
  caminhos.forEach(p => { p.e0 = passos.length; p.liga.forEach(l => passos.push(l)); });
  const inst = NO.get(MARI_INST);
  const mInst = /instituto ligado aos ([A-ZÁÉÍÓÚ][\wÀ-ú]+)/.exec(res);
  const mAss = /(assessora do gabinete dele(?: no Senado)?)/.exec(res);
  const mEm = /(emenda de R\$ [\d.,]*\d)[^.]*?\bao (Ifop)\b/.exec(res);
  /* a ligação de cada um, curta, para o palco: "moção honrosa da Alerj, 2004" / "emenda de R$ 199.999,79 ao Ifop" */
  caminhos.forEach(p => {
    const rel = String(p.liga[0].relacao || '');
    if (p.liga.length === 1){
      const ano = (rel.match(/\b(19|20)\d\d\b/) || [])[0];
      const o = rel.replace(/^(recebeu|teve|ganhou)\s+/i, '').split(/\s+por\s+|,|;/)[0].trim();
      p.rot = o && o.length <= 44 ? o + (ano ? ', ' + ano : '') : relCurta(rel, 40);
    } else p.rot = mEm ? mEm[1] + ' ao ' + mEm[2] : relCurta(rel, 40);
  });
  return { pessoas, caminhos, passos,
    inst: inst ? { nome: apelido(inst.nome) || semPar(inst.nome), sub: mInst ? mInst[0] : '', de: mInst ? mInst[1] : '' } : null,
    subAss: mAss ? mAss[1] : '' };
}
const MARI_E = TODOS.find(e => e.id === MARI);
const MARI_D = MARI_E && (MARI_E.cadeia || []).length ? dadosMarielle(MARI_E) : null;

const CAND = TODOS.map(e => ({ e, nos: arvore(e) }))
  .filter(x => x.nos && (x.e.cadeia || []).length >= 2 && !SO_PARENTESCO.test(x.e.status_flavio || '') && FAIXAS.includes(x.e.faixa))
  .map(x => Object.assign(x, { nota: (CONHECIDOS.includes(x.e.id) ? 3 : 0) + ({ grave: 2, medio: 1, leve: 0 }[GRAV[x.e.gravidade] || 'leve']) +
    0.75 * Math.min(4, x.e.cadeia.length) + Math.min(3, (x.e.fontes || []).length / 4) }))
  .sort((a, b) => b.nota - a.nota || a.e.id.localeCompare(b.e.id));
const ESCOLHA = [];
const poe = x => { if (x && !ESCOLHA.includes(x) && ESCOLHA.length < N_CAP && ESCOLHA.filter(y => y.e.faixa === x.e.faixa).length < MAX_FAIXA) ESCOLHA.push(x); };
if (MARI_D) poe({ e: MARI_E, nos: [], mari: MARI_D });
OBRIGATORIOS.forEach(id => poe(CAND.find(x => x.e.id === id)));
FAIXAS.forEach(f => { if (!ESCOLHA.some(x => x.e.faixa === f)) poe(CAND.find(x => x.e.faixa === f)); });
CAND.forEach(poe);
const ano = e => parseInt((String(e.periodo || '').match(/\d{4}/) || ['9999'])[0], 10);
/* o caso Marielle vem primeiro; depois, de longe para perto */
ESCOLHA.sort((a, b) => (b.mari ? 1 : 0) - (a.mari ? 1 : 0) || FAIXAS.indexOf(a.e.faixa) - FAIXAS.indexOf(b.e.faixa) || ano(a.e) - ano(b.e));
if (!ESCOLHA.length) return;

/* a frase do capítulo: o texto do número; sem número, a frase curta (data/foz-curto.js) ou a primeira frase do resumo */
const fraseCap = e => e.numero && e.numero.texto ? '' : (((window.FOZ_CURTO || {})[e.id] || {}).frase || relCurta(e.resumo, 170));
/* a situação dele, em uma linha, só quando ele tem situação formal no caso (investigado, denunciado, réu, condenado):
   a primeira frase do status, sem o nome do inquérito, e o desfecho em poucas palavras ("denúncia anulada") */
const FORMAL = /^(Investigad|Denunciad|R[ée]u\b|Condenad)/i;
function statusSeco(e){
  const st = String(e.status_flavio || '').trim();
  if (!FORMAL.test(st)) return '';
  /* a primeira frase: o começo (sem o nome do inquérito) e, das orações seguintes, só as que dizem a situação */
  const pr = (frases(st)[0] || '').replace(/[.;]\s*$/, '').split(/,\s+/);
  let o = [pr[0].replace(/\s+no inquérito d[aoe]s?\s+[^,.;]+/i, '')].concat(pr.slice(1).filter(x => /sem den|sem ser r|anulad|arquivad|condenad|\br[ée]u\b|denunciad/i.test(x))).join(', ');
  o = o.replace(/,?\s*(?:e\s+)?sem ser r[ée]u/i, '');   /* o desfecho curto: "sem denúncia" basta */
  const resto = frases(st).slice(1).join(' ');
  if (!/anulad|arquivad/i.test(o)){
    if (/anulad/i.test(resto)) o += '; denúncia anulada';
    else if (/arquivad/i.test(resto)) o += '; denúncia arquivada';
  }
  return fimP(o.charAt(0).toLowerCase() + o.slice(1));
}
/* a situação de um nome da cadeia em poucas palavras (a mesma regra de cor de statusCls) */
function limpaNeg(s){ return String(s || '').toLowerCase().replace(/(?:^|[^\wÀ-ú])(n[ãa]o|nunca|sem|nenhum|ningu[ée]m)\s+(\S+\s+){0,2}?(pres[oa]s?|condena\S*|condenad\S*|indiciad\S*|indiciamento\S*|investigad\S*|denunciad\S*|den[úu]ncia\S*|r[ée]u|processad\S*)\b/g, ' '); }
function sitCurta(txt, cls){
  const s = limpaNeg(txt);
  if (cls === 'caso') return /julgad|condenad|tr[âa]nsito/.test(s) ? 'caso julgado' : (/arquivad/.test(s) ? 'caso arquivado' : 'em investigação');
  if (cls === 'grave'){
    if (/\bcondenad/.test(s)){ const m = s.match(/\d+ anos(?: e \d+ meses)?/g); return 'condenado' + (m && m.length === 1 ? ', ' + m[0] : ''); }
    return /foragid/.test(s) ? 'foragido' : 'preso';
  }
  if (cls === 'medio'){
    if (/\bpres[oa]\b/.test(s)) return /anul/.test(s) ? 'prisão anulada' : 'solto';
    if (/arquiv\S* a investiga|investiga\S* arquivad|arquivou a apura/.test(s)) return 'investigação arquivada';
    if (/\br[ée]u\b/.test(s)) return 'réu';
    if (/denunciad/.test(s)) return 'denunciado';
    if (/\bindiciad[oa]s? pel|foi indiciad|^indiciad/.test(s)) return 'indiciado';
    return 'investigado';
  }
  if (/v[ií]tima/.test(s)) return 'vítima';
  if (/arquivad/.test(s)) return /den[úu]ncia/.test(s) ? 'denúncia arquivada' : 'caso arquivado';
  return 'sem processo';
}
const CAPS = ESCOLHA.map((x, k) => {
  const e = x.e, nivel = GRAV[e.gravidade] || 'leve';
  const fonte = (e.fontes || []).find(f => f && f.url) || null;
  return { k, e, id: e.id, nivel, cor: RGB[nivel], nos: x.nos, nome: e.nome || e.rotulo, rotulo: e.rotulo || e.nome,
    frase: fraseCap(e), ele: statusSeco(e), fonte, num: numeroDe(e), mari: x.mari || null,
    nElo: x.mari ? x.mari.passos.length : (e.cadeia || []).length };
});
const NCAP = CAPS.length;

/* ---------- ritmo: comprimento de cada fase (em u, fração da altura da cena) e tempo no "assistir" (s, em 1×) ---------- */
const U = { intro: 2.2, num: 2.4, entra: 1.8, elo: 1.1, ele: 2.0, sai: 0.8, fim: 2.2 };
const T = { intro: 3.0, num: 3.6, entra: 1.3, elo: 1.2, ele: 2.2, sai: 0.6, fim: 2.6 };
const CONTA = 0.55;                /* a contagem ocupa os primeiros 55% da fase do número; o resto é para ler */

/* =====================================================================
   DOM: as legendas (uma por cena) e os rótulos do palco
   ===================================================================== */
const cena = $('#h-cena'), palco = $('#h-palco'), cv = $('#h-cv'), rot = $('#h-rot'), leg = $('#h-leg'), barra = $('#h-barra');
const hdrEl = $('.site-header');
const nFoz = TODOS.length;
const legCor = '<p class="h-leg-cor" aria-label="Legenda das cores"><span><i style="background:' + HEX.grave + '"></i>preso ou condenado</span>' +
  '<span><i style="background:' + HEX.medio + '"></i>investigado</span><span><i style="background:' + HEX.leve + '"></i>sem processo</span></p>';
const fonteLink = (f, pre) => f && f.url ? '<p class="nf">' + (pre || '') + '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + ' ↗</a></p>' : '';
/* o bloco do número: valor gigante (conta com a rolagem), a frase com quem afirma e a fonte */
/* quando o capítulo fecha com "ele neste caso", o desfecho não se repete no fim do número */
const DESFECHO_FIM = /[;,.]\s*(?:investigado no STF, sem denúncia|denúncia anulada|sem denúncia)\.?\s*$/i;
const blocoNum = c => {
  const n = c.num; if (!n) return '';
  const g = n.conta ? '<span class="n1">' + esc(n.pre + fmtNum(n.alvo, n.dec, n.mil)) + '</span><span class="n2">' + esc(n.esc) + '</span>' : '<span class="n1">' + esc(n.valor) + '</span>';
  return '<div class="cap-num' + (n.conta ? ' conta' : (n.frase ? ' cheio frase' : ' cheio')) + '">' +
    '<p class="nv"' + (n.tinta ? ' style="color:var(--tinta)"' : '') + '><span class="so-leitor">' + esc(n.valor) + '</span><span class="ng" aria-hidden="true">' + g + '</span></p>' +
    '<p class="nt">' + (n.unid ? '<b aria-hidden="true">' + esc(n.unid) + '</b> ' : '') + esc(fimP(c.ele ? semRessalva(n.texto).replace(DESFECHO_FIM, '') : semRessalva(n.texto)).replace(/R\$ (?=\d)/g, 'R$\u00a0')) + '</p>' +
    fonteLink(n.fonte) + '</div>';
};
/* os elos na legenda: quem → para quem e a situação de quem está na origem, em poucas palavras
   (no caso Marielle, os passos dos dois caminhos até ele, na ordem em que acendem) */
/* o nome no elo, curto e sem "…": o apelido quando é um apelido ("Robson Calixto, o Peixe", "Careca do INSS"),
   senão o nome até a segunda palavra que conta ("Major Ronald", "Maria de Fátima"); ele, "Flávio" */
const PARTICULA = /^(d[aoe]s?|e)$/i;
const nomeElo = n => {
  if (EH_ELE(n)) return 'Flávio';
  const a = apelido(n);
  if (a && /^[A-ZÁÉÍÓÚ]/.test(a)) return /\s/.test(a) ? a : nomeCena(n);
  const b = semPar(n); if (b.length <= 22) return b;
  const w = b.split(/\s+/), o = []; let k = 0;
  for (const x of w){ o.push(x); if (!PARTICULA.test(x) && ++k >= 2) break; }
  return o.join(' ');
};
const eloHtml = (c, l, i) => {
  const cls = (c.nos.find(no => no.elo === i) || {}).cls || statusCls(l.status_de);
  const sc = l.status_de ? sitCurta(l.status_de, cls) : '';
  return '<li class="elo ' + cls + '" data-i="' + i + '"><i class="pt" aria-hidden="true"></i>' +
    /* o selo vem colado ao nome de quem está na origem, para nunca parecer a situação de quem está no fim da seta */
    /* "sem processo" não se diz: basta não dizer que é */
    '<span class="dp">' + esc(nomeElo(l.de)) + (sc && sc !== 'sem processo' ? ' <span class="sit">(' + esc(sc) + ')</span>' : '') +
      ' <i>→</i> ' + esc(nomeElo(l.para)) + '</span>' +
    '<span class="rel">' + esc(relCurta(l.relacao, 72)) + '</span></li>';
};

let html = '<article class="cap cap-intro" data-f="intro" aria-label="A história">' +
  '<h3 class="cap-n"><span class="g">' + nFoz + '</span> escândalos chegam a ele. Alguns, de perto:</h3>' +
  '<ol class="cap-lista">' + CAPS.map(c => '<li><a href="#cap-' + esc(c.id) + '" data-cap="' + c.k + '"><b>' + (c.k + 1) + '</b>' + esc(c.rotulo) + '</a></li>').join('') + '</ol>' +
  legCor + '</article>';
CAPS.forEach(c => {
  const e = c.e;
  html += '<article class="cap" data-f="' + (c.num ? 'num' : 'entra') + '" id="h-cap-' + esc(c.id) + '" aria-labelledby="h-n-' + esc(c.id) + '" aria-hidden="true">' +
    '<p class="cap-k"><b>' + (c.k + 1) + '</b>/' + NCAP + ' · ' + esc(CURTO[e.faixa] || '') + '<span class="kr"> · ' + esc(c.rotulo) + '</span></p>' +
    blocoNum(c) +
    '<h3 class="cap-n" id="h-n-' + esc(c.id) + '">' + esc(c.nome) + '</h3>' +
    (c.frase ? '<div class="cap-res"><p>' + esc(fimP(c.frase)) + '</p>' + fonteLink(c.fonte) + '</div>' : '') +
    '<ol class="cap-elos">' + (c.mari ? c.mari.passos : (e.cadeia || [])).map((l, i) => eloHtml(c, l, i)).join('') + '</ol>' +
    (c.ele ? '<p class="cap-ele"><b>ele neste caso:</b> ' + esc(c.ele) + '</p>' : '') +
    /* o caso Master tem afluente próprio (dark-horse.html): a porta leva ao dinheiro do filme, mês a mês */
    '<div class="cap-acoes">' + (c.id === 'master' ? '<a class="porta" href="dark-horse.html">o afluente, mês a mês →</a>' : '<a class="porta" href="foz.html#' + esc(c.id) + '">o caminho completo →</a>') +
      '<button type="button" class="enviar" data-share="' + esc(c.id) + '" aria-label="Enviar: ' + esc(c.rotulo) + '">enviar ↗</button></div>' +
    '</article>';
});
html += '<article class="cap cap-fim" data-f="fim" aria-label="O fim da história">' +
  '<h3 class="cap-n">Tudo deságua nele.</h3>' +
  '<div class="cap-acoes"><a class="porta" href="foz.html">Os ' + nFoz + ', caso a caso →</a><button type="button" class="porta sec" data-rever>↺ rever</button></div>' +
  '</article>';
leg.innerHTML = html;
const ARTS = $$('.cap', leg);        /* 0 = abertura, 1..N = capítulos, N+1 = fim */
CAPS.forEach(c => { const a = ARTS[c.k + 1]; c.art = a; if (c.num){ c.nv = $('.nv', a); c.ng = $('.ng', a); c.n1 = $('.n1', a); } });
/* régua para medir o número (largura em 100px, sem layout do artigo) */
const regua = doc.createElement('span'); regua.className = 'h-regua'; regua.setAttribute('aria-hidden', 'true'); leg.appendChild(regua);
const larg = t => { regua.textContent = t; return regua.getBoundingClientRect().width || 1; };

/* âncoras #cap-<id> no fluxo da página (posição acertada no layout): o link funciona até sem o script terminar */
const ANC = CAPS.map(c => { const a = doc.createElement('span'); a.id = 'cap-' + c.id; a.className = 'h-ancora'; a.style.cssText = 'position:absolute;left:0;width:1px;height:1px'; sec.appendChild(a); return a; });

sec.hidden = false;

/* =====================================================================
   Layout: cenas, comprimentos, palco (rio completo + árvore de cada capítulo)
   ===================================================================== */
let L = null;               /* tudo o que depende do tamanho */
const G = { gotas: [], rotas: [], t: 0 };

function cenas(u){
  const lista = []; let s = 0;
  const add = (o, len) => { o.a = s; o.len = len; s += len; o.b = s; lista.push(o); return o; };
  add({ tipo: 'intro', t: T.intro }, U.intro * u);
  CAPS.forEach(c => {
    const n = c.nElo;
    const o = { tipo: 'cap', c, fases: [] };
    let p = 0; const fa = (f, len, t, i) => { o.fases.push({ f, a: p, b: p + len, t, i }); p += len; };
    if (c.num) fa('num', U.num * u, T.num);
    fa('entra', U.entra * u, T.entra);
    /* no caso Marielle cada caminho tem mais o que ler: o elo dura mais */
    for (let i = 0; i < n; i++) fa('elo', U.elo * u * (c.mari ? 1.7 : 1), T.elo * (c.mari ? 2.4 : 1), i);
    fa('ele', U.ele * u, T.ele);
    fa('sai', U.sai * u, T.sai);
    add(o, p);
  });
  add({ tipo: 'fim', t: T.fim }, U.fim * u);
  return { lista, total: s };
}

/* ---------- a cena do caso Marielle ----------
   À esquerda, em coluna, os condenados sem ligação com ele (os Brazão no alto, ligados ao instituto)
   e, embaixo, o que liga direto a ele (Ronald). No meio, o instituto e o caminho que passa pelo
   gabinete (Peixe → assessora → ele). Os nós aparecem na fase do número; os caminhos até ele
   acendem um por elo, com a ligação escrita sobre o traço. */
function montaMarielle(c, desk, Hd, m, Ws, main){
  const D = c.mari, J = c.trib.J;
  const x0 = m + 4, x1 = Math.max(x0 + 200, J.x - (desk ? 40 : 24));
  const y0 = Math.max(12, Hd * 0.05), y1 = Math.max(y0 + 120, J.y - (desk ? 34 : 16));
  const dir = D.caminhos.filter(p => p.liga.length === 1), ind = D.caminhos.filter(p => p.liga.length > 1);
  const sem = D.pessoas.filter(p => !p.liga);
  const braz = D.inst && D.inst.de ? sem.filter(p => p.nome.includes(D.inst.de)) : [];
  const col = braz.concat(sem.filter(p => !braz.includes(p)), dir);
  /* a coluna da esquerda tem a largura do rótulo mais largo (medido com a letra do rótulo) */
  const med = doc.createElement('span'); med.className = 'h-no h-mx'; med.style.cssText = 'visibility:hidden;max-width:none;white-space:nowrap';
  rot.appendChild(med);
  const wEsq = Math.max(60, ...col.map(p => { med.innerHTML = '<b>' + esc(p.curto) + '</b><span>' + esc(p.pena) + '</span>'; return med.offsetWidth; }));
  med.remove();
  const xm = Math.min(x0 + 6 + 9 + wEsq + (desk ? 40 : 8), lerp(x0, x1, desk ? 0.5 : 0.62));
  c.wEsq = wEsq;
  const nos = [], segs = [], links = [];
  const no = o => { o.op = -1; o.i = nos.length; nos.push(o); return o; };
  const liga = (a, b, cor, elo, fixo, w, paraJ) => {
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    const cc = RIO.curso(RIO.meandro([a.x, a.y], [b.x, b.y], { amp: Math.min(desk ? 5 : 2.5, d * 0.04), ondas: 1, fase: hash(String(a.x) + b.y) * 3,
      ta: paraJ ? [1, 0.25] : null, tb: paraJ ? [0.85, 0.55] : null, tensao: 0.4 }));
    RIO.pinta(cc, (i, y, t) => [lerp(w * 0.6, w, Math.pow(t, 0.7)), cor]);
    const s = { c: cc, elo, fixo, cor }; segs.push(s); return s;
  };
  const wL = desk ? 3.2 : 2.4, wF = desk ? 1.4 : 1.1;
  const pos = new Map();
  col.forEach((p, i) => pos.set(p, no({ nome: p.curto, sub: p.pena, subC: penaCurta(p.pena), cls: p.cls, x: x0 + 6, y: lerp(y0, y1, col.length > 1 ? i / (col.length - 1) : 0.5),
    elo: p.liga ? p.e0 : -1, esq: true })));
  const yB = braz.length ? braz.reduce((s, p) => s + pos.get(p).y, 0) / braz.length : y0;
  const inst = D.inst ? no({ nome: D.inst.nome, sub: D.inst.sub, cls: 'caso', x: xm, y: yB, elo: -1, inst: true }) : null;
  ind.forEach((p, j) => {
    const v = 0.46 + 0.05 * j;
    const n0 = no({ nome: p.curto, sub: p.pena, subC: penaCurta(p.pena), cls: p.cls, x: xm, y: lerp(y0, y1, v), elo: p.e0, eloG: p.e0 + p.liga.length - 1 });
    pos.set(p, n0);
    /* os nomes do meio do caminho (a assessora) */
    let ant = n0; const passos = [];
    p.liga.slice(1).forEach((l, h) => {
      const mid = no({ nome: nomeCurto(semPar(l.de)), sub: D.subAss, cls: statusCls(l.status_de), x: xm + (desk ? 70 : 24), y: lerp(y0, y1, Math.min(0.9, v + 0.26 * (h + 1))),
        elo: p.e0 + h + 1, ve: p.e0 + h, meio: true });
      passos.push([ant, mid, p.liga[h]]); ant = mid;
    });
    passos.push([ant, J, p.liga[p.liga.length - 1]]);
    passos.forEach((q, h) => { const s = liga(q[0], q[1], RGB[q[0].cls] || RGB.caso, p.e0 + h, false, wL, q[1] === J); s.ordem = 0; s.n = 1; s.cam = p.e0; });
    n0.rota = RIO.rota.apply(null, segs.filter(s => s.cam === p.e0).map(s => [s.c, 0, s.c.n - 1]).concat([[main, c.trib.iJ, main.n - 1]]));
    /* o instituto → Peixe: a emenda (escrita à direita do traço) */
    if (inst){ const s = liga(inst, n0, RGB.caso, n0.elo, false, wF); s.ordem = 0; s.n = 1; s.lateral = true;
      if (p.rot) links.push({ txt: p.rot, elo: n0.elo, c: s.c, onde: 0.5, modo: 'dir', de: inst, para: n0 }); }
    else if (p.rot){ const s = segs.find(x => x.elo === n0.elo); links.push({ txt: p.rot, elo: n0.elo, c: s.c, onde: 0.5, modo: 'dir' }); }
  });
  /* os Brazão ligados ao instituto: traço fino, neutro, desde a abertura da cena */
  if (inst) braz.forEach(p => liga(pos.get(p), inst, RGB.caso, -1, true, wF));
  dir.forEach(p => {
    const n0 = pos.get(p), s = liga(n0, J, RGB[n0.cls] || RGB.caso, n0.elo, false, wL, true); s.ordem = 0; s.n = 1;
    n0.rota = RIO.rota([s.c, 0, s.c.n - 1], [main, c.trib.iJ, main.n - 1]);
    if (p.rot) links.push({ txt: p.rot, elo: n0.elo, c: s.c, onde: 0.62, modo: 'baixo', no: n0 });
  });
  c.arv = nos; c.segs = segs; c.links = links; c.xm = xm; c.iInst = inst ? inst.i : 0;
  /* nenhum trecho da árvore comum: a distância para crescer é a do traço mais longo */
  c.dMax = Math.max(1, ...segs.map(s => s.c.L));
}
/* a pena curta, para o palco apertado: os anos e o que diz do que a pessoa NÃO foi condenada
   ("18 anos; absolvido do homicídio", "9 anos; não pela execução"); o texto inteiro fica no resumo */
function penaCurta(p){
  const t = String(p || '').split(/[,;]\s*/);
  return [t[0]].concat(t.slice(1).filter(x => /absolvid|n[ãa]o pel[ao]/i.test(x))).join('; ');
}
/* os rótulos da cena. No celular, se as penas inteiras fazem um rótulo cobrir outro (ou descer abaixo do palco),
   primeiro a coluna da esquerda, depois a do meio, passam à pena curta */
function rotMarielle(c, desk, Ws, Hd){
  const tira = () => { c.rot.forEach(el => el.remove()); c.links.forEach(lk => lk.el && lk.el.remove()); };
  rotMarielle0(c, desk, Ws, 0);
  if (desk) return;
  const piso = Hd - 4;
  const apertado = () => {
    const esq = c.arv.filter(no => no.esq).sort((a, b) => a.top - b.top);
    return esq.some((no, i) => i && esq[i - 1].bot > no.top - 1) ||
      c.arv.concat(c.links.map(lk => lk.el)).some(x => { const el = x.el || x; return el.getBoundingClientRect().bottom - rot.getBoundingClientRect().top > piso; });
  };
  for (const nivel of [1, 2]){ if (!apertado()) return; tira(); rotMarielle0(c, desk, Ws, nivel); }
}
function rotMarielle0(c, desk, Ws, curto){
  const J = c.trib.J;
  c.rot = c.arv.map(no => {
    const el = doc.createElement('span');
    el.className = 'h-no h-mx ' + no.cls + (no.inst ? ' inst' : '');
    const sub = no.subC && (curto >= 2 || (curto >= 1 && no.esq)) ? no.subC : no.sub;
    el.innerHTML = '<b>' + esc(no.nome) + '</b>' + (sub ? '<span>' + esc(sub) + '</span>' : '');
    const left = no.x + 9;
    const mw = no.esq ? Math.max(84, c.xm - 6 - left) : Math.max(110, Math.min(desk ? 250 : 210, (desk ? J.x + 60 : Ws - 4) - left));
    el.style.maxWidth = mw + 'px'; el.style.transform = 'translate(' + Math.round(left) + 'px,' + Math.round(no.y - 8) + 'px)';
    rot.appendChild(el); no.el = el; no.left = left; no.top = no.y - 8; return el;
  });
  /* a coluna do meio: um rótulo nunca cobre o de cima (desce o necessário) */
  let fundo = -Infinity;
  c.arv.filter(no => !no.esq).sort((a, b) => a.y - b.y).forEach(no => {
    if (no.top < fundo + 2){ no.top = fundo + 2; no.el.style.transform = 'translate(' + Math.round(no.left) + 'px,' + Math.round(no.top) + 'px)'; }
    fundo = no.top + no.el.offsetHeight;
  });
  c.arv.forEach(no => { no.bot = no.top + no.el.offsetHeight; no.right = no.left + no.el.offsetWidth; });
  c.links.forEach(lk => {
    const el = doc.createElement('span'); el.className = 'h-no h-lk'; el.textContent = lk.txt;
    rot.appendChild(el);
    let x, y;
    if (lk.modo === 'dir'){
      /* à direita do traço, no meio dele */
      const i = Math.round(lk.onde * (lk.c.n - 1)), w = el.offsetWidth, h = el.offsetHeight || 16;
      x = clamp(lk.c.x[i] + 7, 4, Ws - w - 4); y = lk.c.y[i] - h / 2;
      /* entre o rótulo de cima (o instituto) e o de baixo (o nome), sem cobrir nenhum */
      if (lk.de) y = Math.max(y, lk.de.bot + 3);
      if (lk.para) y = Math.min(y, lk.para.top - h - 3);
    } else {
      /* embaixo do traço, entre o rótulo do nome de onde ele sai e o ponto em que chega nele (quebra em duas linhas se precisar) */
      const nr = lk.no && lk.no.el ? lk.no.x + 9 + lk.no.el.offsetWidth + 6 : lk.c.x[0] + 10;
      const livre = Math.max(90, J.x - 14 - nr);
      if (el.offsetWidth > livre){ el.style.whiteSpace = 'normal'; el.style.maxWidth = livre + 'px'; }
      const w = el.offsetWidth, xc = clamp(nr + (livre - w) / 2, 4, Ws - w - 4);
      const i = Math.min(lk.c.n - 1, RIO.primeiro(lk.c.x, xc + w / 2));
      x = xc; y = Math.max(lk.c.y[i], lk.no ? lk.no.y - 6 : 0) + (desk ? 9 : 6);
      /* sem cobrir o rótulo de nenhum nome */
      const h = el.offsetHeight;
      c.arv.forEach(no => { if (x < no.right && x + w > no.left && y < no.bot && y + h > no.top) y = no.bot + 2; });
    }
    el.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
    lk.el = el; lk.op = -1;
  });
}
/* o desenho da cena (dentro do quadro, no lugar da árvore) */
function desenhaMarielle(ctx, cap, E, g, lit, k){
  const J = cap.trib.J, F = E.o.fases;
  const nf = F.find(x => x.f === 'num') || F.find(x => x.f === 'entra');
  const ap = i => reduzido ? (E.l >= nf.a ? 1 : 0) : st((E.l - nf.a - (0.06 + 0.07 * i) * (nf.b - nf.a)) / (0.16 * (nf.b - nf.a)));
  const acende = Math.max(0, ...lit);
  const dim = 1 - 0.55 * clamp(acende * 1.5, 0, 1);            /* quem não liga a ele esmaece quando os caminhos acendem */
  const esc_ = 0.35 + 0.65 * k;
  ctx.save();
  ctx.translate(J.x, J.y); ctx.scale(esc_, esc_); ctx.translate(-J.x, -J.y);
  ctx.globalAlpha = k;
  /* traços: os fixos (Brazão → instituto) com os nós; os caminhos, fantasmas com g, acesos com o elo */
  cap.segs.forEach(s => {
    if (s.fixo){ const a = ap(cap.iInst) * dim; if (a > 0.01) RIO.parcial(ctx, s.c, 0, 1, { fundo: FUNDO, alfa: 0.7 * a, k: 0.8 }); return; }
    if (g > 0.001) RIO.parcial(ctx, s.c, 0, g, { fundo: FUNDO, alfa: 0.38, k: 0.7 });
    const l = lit[s.elo] || 0;
    const t = l;
    if (t > 0.001) RIO.parcial(ctx, s.c, 0, t, { fundo: FUNDO, alfa: 1 });
  });
  if (reduzido) cap.segs.forEach(s => { if (!s.fixo && (lit[s.elo] || 0) >= 1) RIO.setas(ctx, s.c, 'rgba(232,255,236,.6)', 40); });
  /* os nós: anel na cor da situação de cada nome (condenado = vermelho); o instituto, neutro */
  cap.arv.forEach(no => {
    const l = no.elo >= 0 ? (lit[no.elo] || 0) : 0;
    const a = (no.meio ? clamp((lit[no.ve] || 0) * 2, 0, 1) : ap(no.i)) * (no.elo >= 0 || no.inst ? 1 : dim) * k;
    no.a = a;
    if (a <= 0.01) return;
    const r = (L.desk ? 5.5 : 4.6) + (l > 0.5 && !no.meio ? 1.5 : 0);
    ctx.globalAlpha = a;
    ctx.beginPath(); ctx.arc(no.x, no.y, r, 0, TAU); ctx.fillStyle = '#0a100a'; ctx.fill();
    ctx.lineWidth = l > 0.5 ? 2.6 : 2; ctx.strokeStyle = HEX[no.cls]; ctx.stroke();
    if (l > 0.5 && !no.meio){ ctx.beginPath(); ctx.arc(no.x, no.y, r * 0.45, 0, TAU); ctx.fillStyle = HEX[no.cls]; ctx.fill(); }
  });
  /* J: onde chega nele (sempre neutro) */
  if (acende > 0.01){
    ctx.globalAlpha = acende * k; ctx.strokeStyle = '#d8efdd'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(J.x, J.y, L.desk ? 8 : 6.5, 0, TAU); ctx.stroke();
    if (!reduzido){ const ph = (performance.now() / 1400) % 1; ctx.globalAlpha = acende * k * 0.6 * (1 - ph); ctx.beginPath(); ctx.arc(J.x, J.y, (L.desk ? 8 : 6.5) + ph * 16, 0, TAU); ctx.stroke(); }
  }
  ctx.restore();
  /* rótulos (HTML) */
  cap.arv.forEach(no => {
    const a = Math.round(clamp(no.a || 0, 0, 1) * 20) / 20;
    if (a !== no.op){ no.op = a; no.el.style.opacity = a; }
    const on = no.elo >= 0 && (lit[no.elo] || 0) > 0.5;
    if (no.el.classList.contains('on') !== on) no.el.classList.toggle('on', on);
  });
  cap.links.forEach(lk => {
    const a = Math.round(clamp(((lit[lk.elo] || 0) - 0.4) * 3, 0, 1) * k * 20) / 20;
    if (a !== lk.op){ lk.op = a; lk.el.style.opacity = a; }
  });
  const aj = Math.round(clamp(acende * 3, 0, 1) * k * 20) / 20;
  if (aj !== cap.jOp){ cap.jOp = aj; cap.jEl.style.opacity = aj; }
}

function monta(){
  const W = Math.round(sec.clientWidth); if (!W) return;
  const desk = window.innerWidth >= 900;
  const hdr = hdrEl ? hdrEl.offsetHeight : 57;
  const cenaH = Math.round(cena.clientHeight);
  const palcoH = desk ? cenaH : Math.round(Math.max(0.46 * cenaH, Math.min(0.58 * cenaH, cenaH - 300)));
  raiz.style.setProperty('--palcoH', palcoH + 'px');
  sec.style.setProperty('--palcoH', palcoH + 'px');
  const u = clamp(cenaH * 0.32, 180, 300);
  const C = cenas(u);
  sec.style.height = Math.round(C.total + cenaH) + 'px';
  const Y0 = sec.getBoundingClientRect().top + window.scrollY;

  /* âncoras: no quadro do "ELE NESTE CASO" de cada capítulo */
  C.lista.filter(o => o.tipo === 'cap').forEach(o => {
    const f = o.fases.find(x => x.f === 'ele');
    ANC[o.c.k].style.top = Math.round(o.a + f.a + (f.b - f.a) * 0.3 + 6) + 'px';
  });

  /* ---------- o palco ---------- */
  const Ws = Math.round(palco.clientWidth), Hs = Math.round(palco.clientHeight);
  const Hd = desk ? Hs : palcoH;                                  /* a área do desenho; embaixo (celular) só o rio segue */
  const S = window.__rioSaida || {};
  const xIn = clamp((S.x != null ? S.x : (desk ? W * 0.74 : W - 27)) - palco.offsetLeft, 20, Ws - 20);
  const m = desk ? 16 : 10;
  /* no celular largo (tablet), o desvio até o meio do palco tem teto: numa volta larga demais, a água
     teria de dobrar em cotovelo para voltar à faixa antes do pé do palco */
  const xMid = desk ? clamp(xIn + 0.08 * Ws, 0.52 * Ws, Ws - 130) : Math.max(Math.round(0.69 * Ws), xIn - 150);
  /* o rio principal entra (vindo do trecho 02) e sai (para a descida até a foto) na vertical, na faixa da
     página (xIn). No meio, a curva base (seno^0,85) leva a água ao meio do palco, onde chegam os capítulos
     (52% a 80% da altura). A entrada (até ENT) e a saída (depois de SAI) são curvas de Hermite que partem
     paradas da faixa e encontram a curva base com a mesma inclinação: a água vira devagar, sem cotovelo.
     A água passa EMENDA px além do alto e do pé do palco (a ponta e o fim do reflexo ficam fora da tela). */
  const ENT = 0.42, SAI = 0.66, EMENDA = 90;
  const base = t => Math.pow(Math.sin(Math.PI * t), 0.85);
  const dBase = t => 0.85 * Math.pow(Math.sin(Math.PI * t), -0.15) * Math.cos(Math.PI * t) * Math.PI;
  const herm = (u, p0, m0, p1, m1) => (2 * u * u * u - 3 * u * u + 1) * p0 + (u * u * u - 2 * u * u + u) * m0 + (3 * u * u - 2 * u * u * u) * p1 + (u * u * u - u * u) * m1;
  const gE = base(ENT), mE = dBase(ENT) * ENT, gS = base(SAI), mS = dBase(SAI) * (1 - SAI);
  const forma = t => t < ENT ? herm(t / ENT, 0, 0, gE, mE) : t > SAI ? herm((t - SAI) / (1 - SAI), gS, mS, 0, 0) : base(t);
  const xMain = y => {
    if (y <= 0 || y >= Hd) return xIn;
    const t = y / Hd;
    return lerp(xIn, xMid, forma(t)) + (desk ? 7 : 3) * Math.sin(TAU * y / (desk ? 260 : 170)) * Math.sin(Math.PI * t) * suave(t / 0.3) * suave((1 - t) / 0.3);
  };
  const ptsM = []; for (let y = -EMENDA; y <= Hs + EMENDA; y += 3) ptsM.push([xMain(y), y]);
  const main = RIO.curso(ptsM);

  /* afluentes: os capítulos chegam na parte de baixo, pela esquerda (sobra lugar para a árvore); os outros se espalham */
  const nOut = TODOS.length - NCAP;
  const idsCap = CAPS.map(c => c.id);
  const outros = TODOS.filter(e => !idsCap.includes(e.id)).sort((a, b) => FAIXAS.indexOf(a.faixa) - FAIXAS.indexOf(b.faixa) || hash(a.id) - hash(b.id));
  const tribs = [];
  const faz = (e, yj, lado, longo) => {
    const iJ = RIO.primeiro(main.y, yj), xj = main.x[iJ]; yj = main.y[iJ];
    const hh = hash(e.id), hy = hash(e.id + 'y');
    let sx, sy;
    if (lado < 0){ const room = xj - m - 14; sx = xj - 14 - room * (longo ? 0.62 + 0.25 * hh : 0.18 + 0.62 * hh); }
    else { const room = Ws - m - xj - 14; sx = xj + 14 + room * (0.3 + 0.65 * hh); }
    sy = Math.max(6, yj - (longo ? 0.16 + 0.1 * hy : 0.06 + 0.22 * hy) * Hd);
    const d = Math.hypot(xj - sx, yj - sy);
    const c = RIO.curso(RIO.meandro([sx, sy], [xj, yj], { amp: Math.min(desk ? 5 : 3, d * 0.06), ondas: Math.max(1, Math.round(d / 70)), fase: hh * Math.PI,
      ta: [lado < 0 ? 0.6 : -0.6, 0.8], tb: [lado < 0 ? 0.9 : -0.9, 0.5], tensao: 0.35 }));
    const nivel = GRAV[e.gravidade] || 'leve', cor = RGB[nivel];
    const wq = (desk ? 1.2 : 0.9) + (desk ? 0.8 : 0.6) * Math.sqrt((e.cadeia || []).length);
    RIO.pinta(c, (i, y, t) => [0.7 + (wq - 0.7) * Math.pow(t, 0.6), cor]);
    const t = { e, id: e.id, c, iJ, J: { x: xj, y: yj }, cor, nivel, src: { x: sx, y: sy } };
    tribs.push(t); return t;
  };
  /* o caso Marielle chega mais embaixo: a cena dos 5 condenados precisa de altura */
  const ordemJ = CAPS.filter(c => !c.mari).concat(CAPS.filter(c => c.mari));
  /* no celular, acima dos botões do "assistir" (que ficam no pé do palco) */
  ordemJ.forEach((c, k) => { const yj = lerp(0.52, 0.8, NCAP > 1 ? k / (NCAP - 1) : 0.5) * Hd; c.trib = faz(c.e, c.mari && !desk ? Math.min(yj, Hd - 88) : yj, -1, true); });
  outros.forEach((e, j) => {
    const yj = lerp(0.08, 0.93, (j + 0.5) / Math.max(1, nOut)) * Hd;
    let lado = j % 2 ? 1 : -1;
    if (lado > 0 && Ws - m - xMain(yj) - 14 < 60) lado = -1;
    faz(e, yj, lado, false);
  });
  tribs.sort((a, b) => a.J.y - b.J.y);
  /* o rio principal entra com a largura e a cor com que sai do trecho 02 (a emenda não aparece),
     engrossa aos poucos com o que chega (cada afluente, nos 30 px depois da junção) e muda de cor */
  const w0 = S.w || (desk ? 20 : 12);
  const corIn = S.cor || AGUA;
  /* abaixo dos pontos de junção dos capítulos (onde está "FLÁVIO") a água é neutra: nada dele em âmbar ou vermelho.
     A mistura dos afluentes clareia até a água neutra nos 150 px antes da primeira junção de capítulo. */
  const yCap = Math.min(...CAPS.map(c => c.trib.J.y));
  RIO.pinta(main, (i, y) => {
    let n = 0; const pares = [[corIn, 8]];
    tribs.forEach(t => { const k = suave((y - t.J.y + 2) / 30); if (k > 0){ n += k; pares.push([t.cor, k]); } });
    return [w0 * (1 + 0.28 * n / tribs.length), RIO.mix(RIO.mistura(pares), AGUA, suave((y - (yCap - 150)) / 150))];
  });
  /* a largura varia devagar, menos perto das emendas */
  RIO.organico(main, { amp: 0.08, onda: desk ? 300 : 220, semente: 17, jan: y => suave(y / 110) * (1 - suave((y - (Hs - 170)) / 130)) });
  const iS = RIO.primeiro(main.y, Hs);
  const wSai = main.w[iS];
  /* a saída, para a descida até a foto (index.html, #curso-f): mesma faixa, mesma largura, mesma cor */
  const saiAntes = window.__rioHist;
  window.__rioHist = { x: xIn + palco.offsetLeft, w: wSai, cor: main.c[iS] };
  const mudouSaida = !saiAntes || saiAntes.x !== window.__rioHist.x || Math.abs(saiAntes.w - wSai) > 0.25 || RIO.css(saiAntes.cor) !== RIO.css(main.c[iS]);

  /* ---------- a árvore de cada capítulo: os nomes em linhas, de cima (mais longe dele) para baixo, até J ---------- */
  CAPS.forEach(c => {
    if (c.mari){ montaMarielle(c, desk, Hd, m, Ws, main); return; }
    const J = c.trib.J;
    const x0 = m + 4, x1 = Math.max(x0 + 150, J.x - 30), y0 = Math.max(10, Hd * 0.06), y1 = J.y - 30;
    const nos = c.nos.slice().sort((a, b) => b.prof - a.prof || a.elo - b.elo);
    const n = nos.length, zig = Math.min(desk ? 70 : 44, 0.25 * (x1 - x0));
    nos.forEach((no, i) => { no.x = x0 + 6 + (i % 2 ? zig : 0); no.y = n === 1 ? lerp(y0, y1, 0.45) : lerp(y0, y1, i / (n - 1)); });
    const porNome = new Map(nos.map(no => [no.nome, no]));
    /* vazão: 1 + tudo o que chega a este nome */
    const vaz = no => 1 + nos.filter(x => x.pai === no.nome).reduce((s, x) => s + vaz(x), 0);
    const wb = desk ? 1.6 : 1.2, wk = desk ? 1.8 : 1.3;
    nos.forEach(no => {
      const alvo = EH_ELE(no.pai) ? J : porNome.get(no.pai);
      const d = Math.hypot(alvo.x - no.x, alvo.y - no.y);
      const pts = RIO.meandro([no.x, no.y], [alvo.x, alvo.y], { amp: Math.min(desk ? 6 : 3, d * 0.05), ondas: 1, fase: hash(no.nome) * 3,
        ta: [0.3, 1], tb: alvo === J ? [0.85, 0.55] : [0.1, 1], tensao: 0.4 });
      no.c = RIO.curso(pts);
      const w = wb + wk * Math.sqrt(vaz(no)), cor = RGB[no.cls];
      RIO.pinta(no.c, (i, y, t) => [lerp(w * 0.5, w, Math.pow(t, 0.7)), cor]);
      no.alvo = alvo === J ? null : alvo;
    });
    /* distância de cada trecho até J (para a árvore crescer a partir do rio) */
    const dJ = no => no.alvo ? no.alvo.c.L + dJ(no.alvo) : 0;
    nos.forEach(no => { no.d0 = dJ(no); no.d1 = no.d0 + no.c.L; });
    c.dMax = Math.max(1, ...nos.map(no => no.d1));
    /* rota das gotas: do nome até J e rio abaixo */
    nos.forEach(no => {
      const partes = []; let x = no;
      while (x){ partes.push([x.c, 0, x.c.n - 1]); x = x.alvo; }
      partes.push([main, c.trib.iJ, main.n - 1]);
      no.rota = RIO.rota.apply(null, partes);
    });
    c.arv = nos;
  });

  /* ---------- camadas paradas (desenhadas uma vez por layout) ---------- */
  const dpr = RIO.nitidez(Ws, Hs);
  const camada = () => { const x = doc.createElement('canvas'); x.width = Math.round(Ws * dpr); x.height = Math.round(Hs * dpr); const g = x.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); return { cv: x, g }; };
  const ovT = camada(), ovM = camada();
  RIO.leito(ovT.g, tribs.map(t => ({ curso: t.c })), { fundo: FUNDO });
  tribs.forEach(t => { ovT.g.fillStyle = RIO.css(t.cor); ovT.g.beginPath(); ovT.g.arc(t.src.x, t.src.y, desk ? 2.2 : 1.8, 0, TAU); ovT.g.fill(); });
  RIO.leito(ovM.g, [{ curso: main, aberto: true }], { fundo: FUNDO });
  if (reduzido) RIO.setas(ovM.g, main, 'rgba(232,255,236,.5)', desk ? 110 : 80);
  /* a correnteza do rio principal: as mesmas linhas tracejadas do resto da página */
  const trM = RIO.tracos(main, RIO.semente(29));
  cv.width = Math.round(Ws * dpr); cv.height = Math.round(Hs * dpr); cv.style.width = Ws + 'px'; cv.style.height = Hs + 'px';

  /* ---------- rótulos do palco (HTML): os nomes da árvore e "ele" em J ---------- */
  rot.textContent = '';
  CAPS.forEach(c => {
    if (c.mari) rotMarielle(c, desk, Ws, Hd);
    else c.rot = c.arv.map(no => {
      const el = doc.createElement('span'); el.className = 'h-no'; el.textContent = nomeCurto(no.nome);
      const left = no.x + 9, mw = Math.max(90, Math.min(desk ? 230 : 150, (desk ? c.trib.J.x - 10 : c.trib.J.x + 10) - left, Ws - 8 - left));
      el.style.maxWidth = mw + 'px'; el.style.transform = 'translate(' + Math.round(left) + 'px,' + Math.round(no.y - 8) + 'px)';
      rot.appendChild(el); no.el = el; no.op = -1; return el;
    });
    const j = doc.createElement('span'); j.className = 'h-no ele'; j.textContent = 'FLÁVIO';
    j.style.transform = 'translate(' + Math.round(c.trib.J.x + 10) + 'px,' + Math.round(c.trib.J.y - 6) + 'px)';
    rot.appendChild(j); c.jEl = j; c.jOp = -1;
  });

  /* ---------- gotas ---------- */
  const vel = desk ? 58 : 44;
  const sp = {}; const sprite = (cor, k) => { const key = cor.join(',') + k; return sp[key] || (sp[key] = RIO.gota(cor, (desk ? 2.6 : 2.2) * k, dpr)); };
  G.rotas = [];
  G.gotas = [];
  tribs.forEach(t => G.rotas.push({ rota: RIO.rota([t.c, 0, t.c.n - 1], [main, t.iJ, main.n - 1]), sp: sprite(t.cor, 0.8), taxa: 0.16 + 0.05 * (t.e.cadeia || []).length, alfa: 1, acc: hash(t.id) * 3, tipo: 'ov', id: t.id }));
  G.rotas.push({ rota: main, sp: sprite(AGUA, 0.8), taxa: 0.5, alfa: 1, acc: 0, tipo: 'main' });
  CAPS.forEach(c => c.arv.forEach(no => { if (no.rota) G.rotas.push({ rota: no.rota, sp: sprite(RGB[no.cls], 1), taxa: 1.1, alfa: 0, acc: 0, tipo: 'arv', cap: c.k, no: no.eloG != null ? { elo: no.eloG } : no }); }));
  G.vel = vel;
  for (let k = 0; k < 24 * 20; k++) passaGotas(1 / 20, 1);      /* já em regime (com movimento reduzido, ficam paradas onde estão, como no resto do rio) */

  L = { W, desk, hdr, cenaH, palcoH, u, C, Y0, Ws, Hs, Hd, dpr, main, tribs, ovT: ovT.cv, ovM: ovM.cv, ctx: cv.getContext('2d'), xIn, wSai, trM };
  keyframes();
  compacta();
  estado = null; legKey = '';
  agenda();
  doc.dispatchEvent(new CustomEvent('historia:layout'));
  if (mudouSaida) doc.dispatchEvent(new CustomEvent('rio:hist'));
}

/* o tamanho do número: o maior que cabe na largura, numa linha ou em duas (número / escala);
   a quebra é decidida aqui, uma vez por layout, para a contagem não mudar de linha no meio */
function ajustaNum(c){
  const n = c.num, W = c.nv.clientWidth; if (!W) return;
  if (n.frase) return ajustaFrase(c, W);
  const max = L0.desk ? 150 : 128;              /* o teto; a altura livre decide o resto (compacta) */
  let um, dois, a, b;
  if (n.conta){ a = n.pre + fmtNum(n.alvo, n.dec, n.mil); b = n.esc.trim(); um = larg(a + n.esc); dois = b ? Math.max(larg(a), larg(b)) : um; }
  else {
    um = larg(n.valor); dois = um;
    const p = n.valor.split(' ');
    for (let i = 1; i < p.length; i++){ const x = p.slice(0, i).join(' '), y = p.slice(i).join(' '), w = Math.max(larg(x), larg(y)); if (w < dois){ dois = w; a = x; b = y; } }
  }
  const f1 = Math.min(max, 100 * W / um), f2 = Math.min(max, 100 * W / dois);
  const quebra = !!b && f2 > f1 * 1.25;
  if (!n.conta) c.ng.innerHTML = quebra ? '<span class="n1">' + esc(a) + '</span><span class="n2"> ' + esc(b) + '</span>' : '<span class="n1">' + esc(n.valor) + '</span>';
  c.nv.classList.toggle('quebra', quebra);
  c.nv.style.setProperty('--fs', Math.floor(0.96 * (quebra ? f2 : f1)) + 'px');
}
/* o destaque-frase: letra de manchete com teto menor que o do número (46px no celular, 62px no desktop).
   Uma linha quando cabe perto do teto; senão, duas, quebradas entre palavras no ponto que deixa as linhas
   mais parecidas. Nunca corta palavra: a letra diminui até a linha mais longa caber. */
function ajustaFrase(c, W){
  const n = c.num, max = L0.desk ? 62 : 46, p = n.valor.split(/\s+/);
  regua.classList.add('frase');
  const f1 = 100 * W / larg(n.valor);
  let dois = Infinity, a = '', b = '';
  for (let i = 1; i < p.length; i++){ const x = p.slice(0, i).join(' '), y = p.slice(i).join(' '), w = Math.max(larg(x), larg(y)); if (w < dois){ dois = w; a = x; b = y; } }
  regua.classList.remove('frase');
  const quebra = !!b && f1 < 0.85 * max, fs = Math.min(max, quebra ? 100 * W / dois : f1);
  c.ng.innerHTML = quebra ? '<span class="n1">' + esc(a) + '</span><span class="n2"> ' + esc(b) + '</span>' : '<span class="n1">' + esc(n.valor) + '</span>';
  c.nv.classList.toggle('quebra', quebra);
  c.nv.style.setProperty('--fs', Math.floor(0.97 * fs) + 'px');
}
let L0 = { desk: false };
/* legendas que não cabem na altura: letra menor; depois, sem a relação do elo atual; por último, sem o sobretítulo */
function compacta(){
  L0 = { desk: window.innerWidth >= 900 };
  ARTS.forEach((a, ia) => {
    const altura = leg.clientHeight - a.offsetTop - (L0.desk ? 44 : 8);   /* no desktop, livre da barra de progresso */
    a.classList.remove('aperta', 'aperta2', 'aperta3');
    const f0 = a.dataset.f, vis = a.style.visibility;
    a.style.visibility = 'hidden'; a.classList.add('medindo');
    const cap = CAPS[ia - 1];
    const fases = a.classList.contains('cap-intro') || a.classList.contains('cap-fim') ? [f0] : ['entra', 'elo', 'ele'];
    /* na fase dos elos, mede cada elo como o atual (com os anteriores acesos): o mais alto nem sempre é o último */
    const els = $$('.elo', a);
    const mede = () => fases.some(f => {
      a.dataset.f = f;
      if (f !== 'elo'){
        els.forEach(x => x.classList.toggle('on', f === 'ele'));
        const h = a.scrollHeight; els.forEach(x => x.classList.remove('on'));
        return h > altura;
      }
      const alto = els.some((_, n) => { els.forEach((x, i) => { x.classList.toggle('on', i <= n); x.classList.toggle('atual', i === n); }); return a.scrollHeight > altura; });
      els.forEach(x => x.classList.remove('on', 'atual'));
      return alto;
    });
    if (mede()){ a.classList.add('aperta'); if (mede()){ a.classList.add('aperta2'); if (mede()) a.classList.add('aperta3'); } }
    /* a fase do número: o maior tamanho que cabe (a frase de quem afirma e a fonte vêm sempre junto) */
    if (cap && cap.num){
      a.dataset.f = 'num'; cap.nv.style.setProperty('--nk', '1'); ajustaNum(cap);
      a.classList.remove('naperta');
      const cabe = () => { for (const nk of [1, 0.88, 0.77, 0.67, 0.58, 0.5, 0.42]){ cap.nv.style.setProperty('--nk', String(nk)); if (a.scrollHeight <= altura) return true; } return false; };
      if (!cabe()){ a.classList.add('naperta'); cabe(); }
    }
    a.dataset.f = f0; a.style.visibility = vis; a.classList.remove('medindo');
  });
}

/* =====================================================================
   Estado a partir da rolagem
   ===================================================================== */
const sAgora = () => L ? window.scrollY + L.hdr - L.Y0 : -1;
function estadoDe(s){
  const C = L.C;
  if (s <= 0) return { i: 0, o: C.lista[0], l: 0 };
  if (s >= C.total) return { i: C.lista.length - 1, o: C.lista[C.lista.length - 1], l: C.lista[C.lista.length - 1].len };
  let i = 0; while (i < C.lista.length - 1 && s >= C.lista[i].b) i++;
  return { i, o: C.lista[i], l: s - C.lista[i].a };
}
const faseDe = (o, l) => { for (const f of o.fases) if (l < f.b) return f; return o.fases[o.fases.length - 1]; };
const st = x => reduzido ? (x > 0 ? 1 : 0) : suave(x);      /* degrau em vez de rampa, com movimento reduzido */

let estado = null, legKey = '', hashCap = '';
function aplicaLegenda(E){
  const o = E.o;
  let f = o.tipo, n = 0, idx = E.i;
  if (o.tipo === 'cap'){ const F = faseDe(o, E.l); f = F.f; n = F.f === 'elo' ? F.i + 1 : (F.f === 'entra' || F.f === 'num' ? 0 : 99); }
  const key = idx + ':' + f + ':' + n;
  if (key === legKey) return;
  legKey = key;
  ARTS.forEach((a, k) => { const on = k === idx; if (a.classList.contains('on') !== on) a.classList.toggle('on', on); if (!on) a.setAttribute('aria-hidden', 'true'); else a.removeAttribute('aria-hidden'); });
  const a = ARTS[idx];
  if (o.tipo === 'cap'){
    a.dataset.f = f;
    $$('.elo', a).forEach((x, i) => { x.classList.toggle('on', i < n); x.classList.toggle('atual', f === 'elo' && i === n - 1); });
  }
  /* o link acompanha o capítulo (só depois que a pessoa rolou ou tocou em assistir) */
  if (interagiu && history.replaceState){
    const alvo = o.tipo === 'cap' ? '#cap-' + o.c.id : '#historia';
    if (alvo !== hashCap && location.hash !== alvo){ hashCap = alvo; try { history.replaceState(null, '', alvo); } catch (_){} }
  }
}

/* o número do capítulo: conta com a rolagem na fase do número (e volta se a pessoa rolar para cima).
   Com movimento reduzido, já cheio. Fora da fase, cheio. */
const sai3 = x => 1 - Math.pow(1 - x, 3);
function numero(E){
  const o = E.o; if (o.tipo !== 'cap' || !o.c.num) return;
  const c = o.c, n = c.num, F = o.fases[0];
  const p = reduzido || F.f !== 'num' ? 1 : clamp((E.l - F.a) / (CONTA * (F.b - F.a)), 0, 1);
  if (n.conta){
    const v = n.pre + fmtNum(p >= 1 ? n.alvo : n.alvo * sai3(p), n.dec, n.mil);
    if (c.n1.textContent !== v) c.n1.textContent = v;
  } else {
    const a = String(Math.round(clamp(p / 0.35, 0, 1) * 20) / 20);
    if (c.ng.style.opacity !== a) c.ng.style.opacity = a;
  }
}

/* =====================================================================
   O desenho do palco
   ===================================================================== */
function passaGotas(dt, surto){
  const R = G.rotas, vel = G.vel;
  for (const r of R){
    if (r.alfa < 0.05) continue;
    r.acc += dt * r.taxa * (r.tipo === 'ov' ? surto : 1);
    while (r.acc >= 1){ r.acc -= 1; G.gotas.push({ r, s: 0, i: 0, u: (Math.random() * 2 - 1) * 0.55, v: 0.9 + Math.random() * 0.2 }); }
  }
  let j = 0;
  for (const g of G.gotas){
    g.s += vel * g.v * dt * (g.r.tipo === 'ov' && surto > 1 ? 1.4 : 1);
    const ro = g.r.rota;
    if (g.s >= ro.L) continue;
    while (g.i < ro.n - 2 && ro.s[g.i + 1] < g.s) g.i++;
    G.gotas[j++] = g;
  }
  G.gotas.length = j;
}

function desenha(E, dt){
  const ctx = L.ctx, dpr = L.dpr, o = E.o;
  /* parâmetros da cena */
  let aOv = 1, hl = 0, hlTodos = 0, g = 0, k = 1, surto = 1, cap = null, lit = null;
  if (o.tipo === 'intro'){ hlTodos = st((E.l - 0.6 * L.u) / (0.8 * L.u)); }
  else if (o.tipo === 'fim'){ surto = 1 + 2.2 * st(E.l / (0.8 * L.u)); hlTodos = 0; }
  else {
    cap = o.c;
    const F = o.fases, en = F.find(x => x.f === 'entra'), e0 = en.a, e1 = en.b, sai = F[F.length - 1], ele = F[F.length - 2];
    aOv = 1 - 0.86 * st(E.l / (0.9 * L.u));
    const ks = st((E.l - sai.a) / (sai.b - sai.a));
    aOv = aOv + (1 - aOv) * ks;
    hl = st(E.l / (0.5 * L.u)) * (1 - ks);
    g = st((E.l - e0 - 0.35 * L.u) / Math.max(1, e1 - e0 - 0.45 * L.u));
    k = 1 - ks;
    lit = F.filter(x => x.f === 'elo').map(x => E.l >= ele.a ? 1 : st((E.l - x.a) / (0.7 * (x.b - x.a))));
  }
  /* as camadas paradas têm o mesmo tamanho em pixels do canvas: cópia pixel a pixel, sem reamostrar
     (reamostrada, a água borra meio pixel e desalinha da água do trecho 02 e da descida até a foto) */
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.globalAlpha = aOv; ctx.drawImage(L.ovT, 0, 0);
  ctx.globalAlpha = Math.max(aOv, 0.55); ctx.drawImage(L.ovM, 0, 0);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  G.t += dt || 0;
  RIO.pintaTracos(ctx, L.trM, G.t, G.vel, -20, L.Hs + 20, 1);
  ctx.globalAlpha = 1;
  /* os capítulos acesos na abertura; o do capítulo, aceso na cor da gravidade */
  if (hlTodos > 0.01) CAPS.forEach(c => { ctx.globalAlpha = hlTodos * 0.7; RIO.traco(ctx, c.trib.c, c.cor, L.desk ? 1.4 : 1.1); });
  /* o afluente do capítulo acende NEUTRO: a cor é de cada nome e só aparece com os nomes */
  if (cap && hl * (1 - 0.9 * g) > 0.01){ ctx.globalAlpha = hl * (1 - 0.9 * g); RIO.traco(ctx, cap.trib.c, RGB.caso, L.desk ? 2 : 1.6); }
  ctx.globalAlpha = 1;

  /* a árvore: cresce a partir do rio (fantasma), depois cada elo acende da nascente até ele */
  if (cap && k > 0.01 && cap.mari) desenhaMarielle(ctx, cap, E, g, lit, k);
  else if (cap && k > 0.01){
    const J = cap.trib.J, esc_ = 0.35 + 0.65 * k;
    ctx.save();
    ctx.translate(J.x, J.y); ctx.scale(esc_, esc_); ctx.translate(-J.x, -J.y);
    ctx.globalAlpha = k;
    const D = g * cap.dMax;
    cap.arv.forEach(no => {
      const rev = clamp((D - no.d0) / no.c.L, 0, 1);
      if (rev > 0) RIO.parcial(ctx, no.c, 1 - rev, 1, { fundo: FUNDO, alfa: 0.38, k: 0.7 });
    });
    cap.arv.forEach(no => { const l = lit[no.elo] || 0; if (l > 0.001) RIO.parcial(ctx, no.c, 0, l, { fundo: FUNDO, alfa: 1 }); });
    if (reduzido) cap.arv.forEach(no => { if ((lit[no.elo] || 0) >= 1) RIO.setas(ctx, no.c, 'rgba(232,255,236,.6)', 40); });
    /* os nomes */
    cap.arv.forEach(no => {
      const l = Math.max(lit[no.elo] || 0, ...cap.arv.filter(x => x.pai === no.nome).map(x => lit[x.elo] || 0));
      const a = clamp(l * 3, 0, 1) * k;
      if (a <= 0.01) return;
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(no.x, no.y, L.desk ? 5 : 4.2, 0, TAU); ctx.fillStyle = '#0a100a'; ctx.fill();
      ctx.lineWidth = 2; ctx.strokeStyle = HEX[no.cls]; ctx.stroke();
    });
    /* J: onde chega nele */
    const lj = Math.max(0, ...cap.arv.filter(no => EH_ELE(no.pai)).map(no => lit[no.elo] || 0));
    if (lj > 0.01){
      ctx.globalAlpha = lj * k; ctx.strokeStyle = '#d8efdd'; ctx.lineWidth = 2;          /* ele: sempre neutro; a cor é dos nomes da cadeia */
      ctx.beginPath(); ctx.arc(J.x, J.y, L.desk ? 8 : 6.5, 0, TAU); ctx.stroke();
      if (!reduzido){ const ph = (performance.now() / 1400) % 1; ctx.globalAlpha = lj * k * 0.6 * (1 - ph); ctx.beginPath(); ctx.arc(J.x, J.y, (L.desk ? 8 : 6.5) + ph * 16, 0, TAU); ctx.stroke(); }
    }
    ctx.restore();
    /* rótulos (HTML) */
    cap.arv.forEach(no => {
      const l = Math.max(lit[no.elo] || 0, ...cap.arv.filter(x => x.pai === no.nome).map(x => lit[x.elo] || 0));
      const a = Math.round(clamp(l * 3, 0, 1) * k * 20) / 20;
      if (a !== no.op){ no.op = a; no.el.style.opacity = a; }
    });
    const aj = Math.round(clamp(lj * 3, 0, 1) * k * 20) / 20;
    if (aj !== cap.jOp){ cap.jOp = aj; cap.jEl.style.opacity = aj; }
  }
  /* rótulos dos outros capítulos apagados */
  CAPS.forEach(c => { if (c === cap && k > 0.01) return; c.arv.forEach(no => { if (no.op !== 0){ no.op = 0; no.el.style.opacity = 0; } }); (c.links || []).forEach(lk => { if (lk.op !== 0){ lk.op = 0; lk.el.style.opacity = 0; } }); if (c.jOp !== 0){ c.jOp = 0; c.jEl.style.opacity = 0; } });

  /* gotas; com movimento reduzido, paradas (o trecho 02 e a descida até a foto também mostram as gotas paradas:
     sem elas aqui, a água mudaria de aspecto nas duas emendas) */
  {
    G.rotas.forEach(r => {
      if (r.tipo === 'ov') r.alfa = aOv;                  /* as gotas do afluente têm a cor do caso: não realçam antes dos nomes */
      else if (r.tipo === 'arv') r.alfa = cap && r.cap === cap.k ? (lit[r.no.elo] >= 0.98 ? k : 0) : 0;
    });
    if (!reduzido) passaGotas(dt, surto);
    const vy0 = -10, vy1 = L.Hs + 10;
    for (const gt of G.gotas){
      const r = gt.r; if (r.alfa < 0.03) continue;
      const ro = r.rota, i = gt.i, s0 = ro.s[i], s1 = ro.s[i + 1];
      const f = s1 > s0 ? clamp((gt.s - s0) / (s1 - s0), 0, 1) : 0, off = gt.u * ro.w[i] * 0.5;
      const x = ro.x[i] + (ro.x[i + 1] - ro.x[i]) * f + ro.nx[i] * off, y = ro.y[i] + (ro.y[i + 1] - ro.y[i]) * f + ro.ny[i] * off;
      if (y < vy0 || y > vy1) continue;
      let al = r.alfa * Math.min(1, gt.s / 14);
      if (r.tipo === 'arv' && cap){                          /* a gota da árvore encolhe junto com ela */
        if (k < 0.999){ const J = cap.trib.J, e_ = 0.35 + 0.65 * k; if (gt.s < ro.L - (L.main.L - L.main.s[cap.trib.iJ])){ const xx = J.x + (x - J.x) * e_, yy = J.y + (y - J.y) * e_; ctx.globalAlpha = al; ctx.drawImage(r.sp.img, xx - r.sp.r, yy - r.sp.r, r.sp.r * 2, r.sp.r * 2); continue; } }
      }
      ctx.globalAlpha = al;
      ctx.drawImage(r.sp.img, x - r.sp.r, y - r.sp.r, r.sp.r * 2, r.sp.r * 2);
    }
    ctx.globalAlpha = 1;
  }
}

/* =====================================================================
   O quadro: o requestAnimationFrame único da página (window.BDQuadro, de assets/roteiro.js);
   sem ele, um próprio
   ===================================================================== */
let visivel = false, interagiu = false, barraP = -1;
function quadro(dt){
  if (!L || !visivel || doc.hidden) return false;
  const s = sAgora();
  const E = estadoDe(s);
  aplicaLegenda(E);
  numero(E);
  const mudou = !estado || estado.i !== E.i || Math.abs(estado.l - E.l) > 0.5;
  if (!reduzido || mudou) desenha(E, dt);
  estado = E;
  const p = Math.round(clamp(s / L.C.total, 0, 1) * 500) / 500;
  if (p !== barraP){ barraP = p; barra.style.transform = 'scaleX(' + p + ')'; barra.parentNode.style.opacity = p >= 1 || p <= 0 ? 0 : 1; }
  return !reduzido;
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
if ('IntersectionObserver' in window){
  new IntersectionObserver(es => { visivel = es[es.length - 1].isIntersecting; if (visivel) agenda(); }, { rootMargin: '80px 0px' }).observe(sec);
} else visivel = true;

/* =====================================================================
   O ritmo, para o roteiro da página (assets/roteiro.js): (s, t) em cada fronteira de fase,
   com o tempo T de cada fase em 1×
   ===================================================================== */
let KS = [], KT = [];
function keyframes(){
  KS = [0]; KT = [0]; let t = 0;
  L.C.lista.forEach(o => {
    if (o.tipo === 'cap') o.fases.forEach(f => {
      /* o "ele neste caso" fica mais na tela quando existe */
      t += f.f === 'ele' && o.c.ele ? f.t + 1 : f.t; KS.push(o.a + f.b); KT.push(t); });
    else { t += o.t; KS.push(o.b); KT.push(t); }
  });
}
const yDe = s => L.Y0 - L.hdr + s;
/* com movimento reduzido: as paradas (a abertura, o número e o fecho de cada capítulo, o fim) */
function paradas(){
  const l = [];
  L.C.lista.forEach(o => {
    if (o.tipo !== 'cap'){ l.push(o.a + o.len * 0.45); return; }
    const nf = o.fases.find(x => x.f === 'num'); if (nf) l.push(o.a + nf.a + (nf.b - nf.a) * 0.7);
    const f = o.fases.find(x => x.f === 'ele'); l.push(o.a + f.a + (f.b - f.a) * 0.4);
  });
  return l;
}
function semSuave(on){ raiz.classList.toggle('rolando', on); }
leg.addEventListener('click', e => {
  const t = e.target.closest && e.target.closest('a[data-cap], [data-rever]');
  if (!t) return;
  if (t.matches('a[data-cap]')){ e.preventDefault(); if (window.BDRoteiro) window.BDRoteiro.pausa(); vaiCap(+t.dataset.cap, reduzido ? 'auto' : 'smooth'); }
  else if (window.BDRoteiro) window.BDRoteiro.tocaHistoria();
  else window.scrollTo({ top: yDe(0), behavior: reduzido ? 'auto' : 'smooth' });
});
window.addEventListener('scroll', function liga(){ interagiu = true; window.removeEventListener('scroll', liga); }, { passive: true, once: true });

/* ---------- ir a um capítulo (link #cap-<id>): no fecho do capítulo ---------- */
function vaiCap(k, comport){
  const o = L.C.lista.find(x => x.tipo === 'cap' && x.c.k === k); if (!o) return;
  const f = o.fases.find(x => x.f === 'ele');
  const y = yDe(o.a + f.a + (f.b - f.a) * 0.3);
  if (comport === 'auto'){ semSuave(true); window.scrollTo(0, y); semSuave(false); }
  else window.scrollTo({ top: y, behavior: comport });
}
function capDoHash(){ const m = /^#cap-(.+)$/.exec(decodeURIComponent(location.hash || '')); return m ? CAPS.findIndex(c => c.id === m[1]) : -1; }

/* =====================================================================
   Arranque e novo layout
   ===================================================================== */
monta();
const k0 = capDoHash();
if (k0 >= 0){ vaiCap(k0, 'auto'); window.addEventListener('load', () => { if (capDoHash() === k0 && !interagiu) vaiCap(k0, 'auto'); }, { once: true }); }
window.addEventListener('hashchange', () => { const k = capDoHash(); if (k >= 0 && '#cap-' + CAPS[k].id !== hashCap) vaiCap(k, reduzido ? 'auto' : 'smooth'); });
let largura = window.innerWidth, altura = window.innerHeight, rt = 0;
const refaz = () => { const s = sAgora(), cap = L ? estadoDe(s) : null; monta(); if (cap && s > 0 && s < L.C.total){ semSuave(true); window.scrollTo(0, yDe(L.C.lista[cap.i].a + cap.l * (L.C.lista[cap.i].len / cap.o.len))); semSuave(false); } };
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    const mudouL = window.innerWidth !== largura, mudouA = Math.abs(window.innerHeight - altura) > 140;
    largura = window.innerWidth; altura = window.innerHeight;
    if (mudouL || mudouA) refaz();
  }, 200);
});
doc.addEventListener('rio:saida', () => { clearTimeout(rt); rt = setTimeout(refaz, 60); });
/* offsets guardados: se a página acima mudar de altura (fonte, foto, quebra de linha), refaz */
if ('ResizeObserver' in window){
  let h0 = doc.body.scrollHeight, ro = 0;
  new ResizeObserver(() => { const h = doc.body.scrollHeight; if (Math.abs(h - h0) < 4) return; h0 = h; clearTimeout(ro); ro = setTimeout(() => { if (L){ const y = sec.getBoundingClientRect().top + window.scrollY; if (Math.abs(y - L.Y0) > 2){ L.Y0 = y; agenda(); doc.dispatchEvent(new CustomEvent('historia:layout')); } } }, 120); }).observe(doc.body);
}
window.addEventListener('pageshow', e => { if (e.persisted){ monta(); } });
window.__historia = { caps: () => CAPS.map(c => c.id), criterio: () => CAND.map(x => ({ id: x.e.id, faixa: x.e.faixa, nota: Math.round(x.nota * 100) / 100 })),
  layout: () => L && { total: L.C.total, Y0: L.Y0, hdr: L.hdr, cenaH: L.cenaH, palcoH: L.palcoH, u: L.u, cenas: L.C.lista.map(o => ({ tipo: o.tipo, id: o.c && o.c.id, a: o.a, b: o.b, fases: o.fases && o.fases.map(f => ({ f: f.f, a: o.a + f.a, b: o.a + f.b })) })) },
  yDe: s => yDe(s), tempo: () => KT[KT.length - 1],
  /* para o roteiro: as fronteiras de fase em (y, t), os começos de capítulo (para "pular") e as paradas (movimento reduzido) */
  roteiro: () => L ? { keys: KS.map((s, i) => ({ y: yDe(s), t: KT[i] })), marcas: L.C.lista.filter(o => o.tipo !== 'intro').map(o => yDe(o.a)), paradas: paradas().map(yDe) } : null,
  medir: n => { const E = estadoDe(sAgora()), t0 = performance.now(); for (let k = 0; k < n; k++) desenha(E, 1 / 60); return Math.round((performance.now() - t0) / n * 100) / 100 + ' ms/quadro, ' + G.gotas.length + ' gotas'; }, estado: () => estado && { i: estado.i, l: estado.l, legenda: legKey } };
})();
