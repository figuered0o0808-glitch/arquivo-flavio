/* BOLSODRIVE · Dark Horse · "Quanto é isso" (o comparador).
   Monta-se sozinho em <section id="dh-custa" data-comparador> (dark-horse.html), com os dados de
   window.DARKHORSE (data/darkhorse.js, gerado por bolso-os-fontes/monta_darkhorse.py):
     totais.pago / totais.pedido   as duas bases (R$ 60 milhões pagos, R$ 131 milhões pedidos, segundo a PF)
     comparador                    título, nota fixa do custo do filme, legenda da grade, rótulos
     comparacoes[]                 um botão por item; as contas (conta.pago / conta.pedido) vêm prontas do gerador
   Nada é calculado aqui além do desenho: o número, a unidade e o qualificador ("mais de", "quase") são os do gerador.
   Âncoras: dark-horse.html#dh-custa-<id> abre já no item (e rola até o resultado). O item com so:"pedido" (Oscar)
   troca a base sozinho. Verbos: "cabe" (filmes), "para juntar" (salário); "equivale" fica para o modo "unidades".
   D5 (26/09/2026): só cinema e trabalho — os R$ 60 milhões são dinheiro privado; nenhuma comparação com serviço público.
   Teste: window.__cmp = { estado(), item(id), base(b) }.

   API pura (Onda 1, 27/09/2026), para qualquer página: window.BDComparador
     valorDe('R$ 131 milhões')   -> { v: 131000000, mes: false } | null (faixa, "até", dólar: null)
     compara(valor)               -> { v, mes, itens:[{ grupo, n, q, num, unid, frase, base, fonte, icone }] } | null
                                     valor: número em reais ou o texto ('R$ 20,7 mil por mês'). Só cinema e salário
                                     mínimo (D5/F11: nada de serviço público). Uma conta por valor; nunca soma casos.
     bloco(res, { quem })         -> HTML do "Quanto é isso" (usa .qe-* de assets/comparador.css)
   As bases são as mesmas do Dark Horse: com data/darkhorse.js na página, valem as de lá; sem ele, a cópia abaixo
   (conferida com darkhorse.js em 27/09/2026). Qualificador igual ao do gerador: "mais de 2", "quase 3", "12". */
(function(){
'use strict';
var FILMES = [   /* ordem de preferência: o mais conhecido primeiro; v_hoje = orçamento corrigido pelo IPCA */
  { id:'agente-secreto', rot:'O Agente Secreto', unid:['filme do tamanho de O Agente Secreto','filmes do tamanho de O Agente Secreto'], v_hoje:29000000,
    base_txt:'R$ 28 milhões, em 2025 (R$ 29 milhões em valores de hoje, pelo IPCA)',
    fonte:{ veiculo:'CNN Brasil', data:'2026-03-04', url:'https://www.cnnbrasil.com.br/entretenimento/oscar-2026-o-agente-secreto-tem-o-menor-orcamento-dos-indicados/' } },
  { id:'ainda-estou-aqui', rot:'Ainda Estou Aqui', unid:['filme do tamanho de Ainda Estou Aqui','filmes do tamanho de Ainda Estou Aqui'], v_hoje:48600000,
    base_txt:'estimativa de cerca de R$ 45 milhões, em 2024 (R$ 48,6 milhões em valores de hoje, pelo IPCA)',
    fonte:{ veiculo:'Metrópoles', data:'2026-05-13', url:'https://www.metropoles.com/entretenimento/cinema/dark-horse-filme-de-bolsonaro-pode-ser-o-mais-caro-da-historia-do-brasil' } },
  { id:'cidade-de-deus', rot:'Cidade de Deus', unid:['filme do tamanho de Cidade de Deus','filmes do tamanho de Cidade de Deus'], v_hoje:32100000,
    base_txt:'cerca de R$ 8 milhões, em 2002 (R$ 32,1 milhões em valores de hoje, pelo IPCA)',
    fonte:{ veiculo:'Aventuras na História', data:'2022-01-26', url:'https://aventurasnahistoria.com.br/noticias/reportagem/ha-20-anos-cidade-de-deus-era-lancado-e-aclamado-mundialmente.phtml' } },
  { id:'bacurau', rot:'Bacurau', unid:['filme do tamanho de Bacurau','filmes do tamanho de Bacurau'], v_hoje:10900000,
    base_txt:'R$ 7,5 milhões, em 2019 (R$ 10,9 milhões em valores de hoje, pelo IPCA)',
    fonte:{ veiculo:'Jornal do Brasil', data:'2026-05-14', url:'https://www.jb.com.br/brasil/2026/05/1059617-a-reacao-de-kleber-mendonca-cujo-filme-custou-5-vezes-menos-que-o-de-bolsonaro-ao-escandalo-de-flavio-com-vorcaro.html' } }
];
var SALARIO = { mensal:1621, ano:21073, base_txt:'salário mínimo de R$ 1.621 em 2026, com 13º: R$ 21.073 por ano',
  fonte:{ veiculo:'Planalto', data:'2025-12-23', url:'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12797.htm' } };

/* com data/darkhorse.js carregado, as bases de lá mandam (a fonte da verdade é a curadoria do Dark Horse) */
function bases(){
  var C = (window.DARKHORSE && window.DARKHORSE.comparacoes) || null;
  if (!C) return { filmes: FILMES, salario: SALARIO };
  var f = FILMES.map(function(x){
    var d = C.filter(function(c){ return c.id === x.id && c.v_hoje; })[0];
    return d ? { id:x.id, rot:d.rot, unid:d.unid || x.unid, v_hoje:d.v_hoje, base_txt:d.base_txt, fonte:d.fonte } : x;
  });
  var s = C.filter(function(c){ return c.id === 'salario'; })[0];
  return { filmes: f, salario: s ? { mensal:s.mensal, ano:s.v, base_txt:s.base_txt, fonte:s.fonte } : SALARIO };
}

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function num(s){ return parseFloat(String(s).replace(/\./g, '').replace(',', '.')); }
var MULT = { mil:1e3, milhao:1e6, milhoes:1e6, bilhao:1e9, bilhoes:1e9 };

/* "R$ 131 milhões" / "R$ 199.999,79" / "R$ 20,7 mil por mês". Faixa ("R$ 20 a R$ 40"), teto ("até"), dólar: null. */
function valorDe(t){
  t = String(t == null ? '' : t);
  if (/US\$|U\$|d[óo]lar|(?:^|\s)(?:at[ée]|entre)(?=\s)|\d\s*(?:a|e)\s*R\$/i.test(t)) return null;
  var m = /R\$\s?(\d{1,3}(?:\.\d{3})*(?:,\d+)?|\d+(?:,\d+)?)(?:\s+(milh(?:ão|ões)|bilh(?:ão|ões)|mil)(?![a-zà-ú]))?/i.exec(t);
  if (!m) return null;
  var k = m[2] ? MULT[m[2].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')] || 1 : 1;
  var v = num(m[1]) * k;
  if (!(v > 0)) return null;
  return { v: v, mes: /\bpor m[êe]s\b|\bmensa(l|is)\b/i.test(t) };
}

/* 2,07 -> "mais de 2"; 2,70 -> "quase 3"; 12,02 -> "12"; 6.216 -> "mais de 6,2 mil" (a regra dos cartões do Dark Horse) */
function qtd(r){
  if (r >= 1000){
    var k = Math.floor(r / 100) / 10, exato = Math.abs(r - Math.round(r / 100) * 100) < 5;
    return { q: exato ? '' : 'mais de', num: String(k).replace('.', ',') + ' mil', n: r };
  }
  var i = Math.floor(r), fr = r - i;
  if (fr < 0.05) return { q: '', num: String(i), n: r };
  if (fr > 0.95) return { q: '', num: String(i + 1), n: r };
  if (fr >= 0.6) return { q: 'quase', num: String(i + 1), n: r };
  return { q: 'mais de', num: String(i), n: r };
}
function reais(v){   /* 131000000 -> "R$ 131 milhões" (só para frases de reserva; o texto do caso manda) */
  if (v >= 1e9) return 'R$ ' + String(Math.round(v / 1e8) / 10).replace('.', ',') + (v >= 2e9 ? ' bilhões' : ' bilhão');
  if (v >= 1e6) return 'R$ ' + String(Math.round(v / 1e5) / 10).replace('.', ',') + (v >= 2e6 ? ' milhões' : ' milhão');
  if (v >= 1e3) return 'R$ ' + String(Math.round(v / 100) / 10).replace('.', ',') + ' mil';
  return 'R$ ' + String(Math.round(v * 100) / 100).replace('.', ',');
}

function compara(valor){
  var x = typeof valor === 'number' ? { v: valor, mes: false } : valorDe(valor);
  if (!x) return null;
  var B = bases(), itens = [];
  if (x.mes){
    var rm = x.v / B.salario.mensal;
    if (rm >= 1){
      var qm = qtd(rm);
      itens.push({ grupo:'trabalho', icone:'ano', n: rm, q: qm.q, num: qm.num, unid: rm < 1.95 && !qm.q ? 'salário mínimo por mês' : 'salários mínimos por mês',
        frase: 'todo mês', base: 'salário mínimo de R$ 1.621 em 2026', fonte: B.salario.fonte });
    }
  } else {
    var ra = x.v / B.salario.ano;
    if (ra >= 1){
      var qa = qtd(ra);
      itens.push({ grupo:'trabalho', icone:'ano', n: ra, q: qa.q, num: qa.num, unid: (ra < 1.95 && !qa.q ? 'ano' : 'anos') + ' de salário mínimo, com 13º e sem gastar nada',
        frase: 'para juntar com um salário mínimo', base: B.salario.base_txt, fonte: B.salario.fonte });
    }
    /* cinema só quando cabe ao menos 2 filmes de um dos quatro (o primeiro da lista que couber) */
    var f = B.filmes.filter(function(y){ return x.v / y.v_hoje >= 2; })[0];
    if (f){
      var rf = x.v / f.v_hoje, qf = qtd(rf);
      itens.push({ grupo:'cinema', icone:'filme', n: rf, q: qf.q, num: qf.num, unid: f.unid[1], frase: 'cabem nesse valor',
        base: 'Orçamento: ' + f.base_txt, fonte: f.fonte });
    }
  }
  return itens.length ? { v: x.v, mes: x.mes, itens: itens } : null;
}

/* ---------- desenho (HTML em texto; o CSS é .qe-* em assets/comparador.css) ---------- */
var ICO = {
  filme: { vb:'0 0 16 16', c:'<path fill-rule="evenodd" d="M1 3h14v10H1z M2.3 4.3h1.3v1.4H2.3z M2.3 7.3h1.3v1.4H2.3z M2.3 10.3h1.3v1.4H2.3z M12.4 4.3h1.3v1.4h-1.3z M12.4 7.3h1.3v1.4h-1.3z M12.4 10.3h1.3v1.4h-1.3z M4.9 4.3h6.2v7.4H4.9z"/>',
           o:'<path fill="none" stroke="currentColor" stroke-width="1.2" d="M1.6 3.6h12.8v8.8H1.6z"/>' },
  ano:   { vb:'4.5 0 7 16', c:'<rect x="6.4" y="1" width="3.2" height="14" rx="1"/>',
           o:'<rect x="7" y="1.6" width="2" height="12.8" rx=".6" fill="none" stroke="currentColor" stroke-width="1.2"/>' }
};
var ESCALAS = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
function pictos(it, max){
  var s = ESCALAS.filter(function(e){ return Math.ceil(it.n / e - 1e-9) <= max; })[0] || 1000;
  var x = it.n / s, cheios = Math.floor(x + 1e-9);
  return { s: s, cheios: cheios, contorno: x - cheios >= 0.05 ? 1 : 0 };
}
function svg(ic, o, d){
  var I = ICO[ic];
  return '<svg class="qe-i' + (o ? ' o' : '') + '" viewBox="' + I.vb + '" style="--d:' + d + 'ms" aria-hidden="true" focusable="false">' + (o ? I.o : I.c) + '</svg>';
}
function dataBR(d){ var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(d || ''); return m ? (m[3] ? m[3] + '/' : '') + m[2] + '/' + m[1] : (d || ''); }
function bloco(res, op){
  if (!res || !res.itens.length) return '';
  op = op || {};
  var h = '<section class="qe" aria-label="Quanto é isso">' +
    '<p class="qe-k">Quanto é isso</p>' +
    (op.quem ? '<p class="qe-de">' + esc(op.quem) + '</p>' : '');
  res.itens.forEach(function(it){
    var p = pictos(it, 30), ic = '';
    for (var i = 0; i < p.cheios; i++) ic += svg(it.icone, false, Math.min(i * 14, 700));
    if (p.contorno) ic += svg(it.icone, true, Math.min(p.cheios * 14, 700));
    var cada = p.s > 1 ? (it.icone === 'ano' ? 'cada traço = ' + p.s + (it.unid.indexOf('mês') >= 0 ? ' salários' : ' anos') : 'cada ícone = ' + p.s + ' filmes') +
      (p.contorno ? '; em contorno, a fração que sobra' : '') : (p.contorno ? 'em contorno, a fração que sobra' : '');
    var f = it.fonte || {};
    h += '<div class="qe-it qe-' + esc(it.grupo) + '">' +
      '<p class="qe-n">' + (it.q ? '<span class="qe-q">' + esc(it.q) + '</span> ' : '') + esc(it.num) + '</p>' +
      '<p class="qe-u">' + esc(it.unid) + '</p>' +
      '<div class="qe-pic ' + (p.cheios + p.contorno <= 12 ? 'g1' : p.cheios + p.contorno <= 30 ? 'g2' : 'g3') + (it.icone === 'ano' ? ' tr' : '') + '">' + ic + '</div>' +
      (cada ? '<p class="qe-esc">' + esc(cada) + '</p>' : '') +
      '<p class="qe-b">' + esc(it.base.charAt(0).toUpperCase() + it.base.slice(1)) +
        (f.url ? ' · <a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + (f.data ? ', ' + esc(dataBR(f.data)) : '') + ' ↗</a>' : '') + '</p>' +
      '</div>';
  });
  return h + '<p class="qe-nota">A conta só mede o tamanho do valor.</p></section>';
}

window.BDComparador = { valorDe: valorDe, compara: compara, qtd: qtd, reais: reais, bloco: bloco, bases: bases };
})();

(function(){
'use strict';
var D = window.DARKHORSE;
if (!D || !D.comparacoes || !D.totais || !D.totais.pago || !D.totais.pedido) return;

var doc = document;
var C = D.comparacoes, CFG = D.comparador || {}, TOT = D.totais;
var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
var POR_ID = {}; C.forEach(function(c){ POR_ID[c.id] = c; });

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function mi(v){ return Math.round(v / 1e6); }
function maiuscula(s){ s = String(s || ''); return s.charAt(0).toUpperCase() + s.slice(1); }

var BASES = {
  pago:   { gotas: mi(TOT.pago.v),   rot: (CFG.bases && CFG.bases.pago) || 'pagos · ' + TOT.pago.txt,
            frase: 'os ' + TOT.pago.txt + ' que teriam sido pagos, ' + (TOT.pago.quem || 'segundo a PF') },
  pedido: { gotas: mi(TOT.pedido.v), rot: (CFG.bases && CFG.bases.pedido) || 'pedidos · ' + TOT.pedido.txt,
            frase: 'os ' + TOT.pedido.txt + ' pedidos, ' + (TOT.pedido.quem || 'segundo a PF') }
};
var TOTAL = Math.max(BASES.pago.gotas, BASES.pedido.gotas);            /* 131 gotas */
var CHEIAS = BASES.pago.gotas;                                          /* 60 cheias */

/* ---------- ícones (símbolos SVG; o contorno é a fração que sobra) ---------- */
var ICONES = {
  filme: { cheio: '<path fill-rule="evenodd" d="M1 3h14v10H1z M2.3 4.3h1.3v1.4H2.3z M2.3 7.3h1.3v1.4H2.3z M2.3 10.3h1.3v1.4H2.3z M12.4 4.3h1.3v1.4h-1.3z M12.4 7.3h1.3v1.4h-1.3z M12.4 10.3h1.3v1.4h-1.3z M4.9 4.3h6.2v7.4H4.9z"/>',
           contorno: '<path fill="none" stroke="currentColor" stroke-width="1.2" d="M1.6 3.6h12.8v8.8H1.6z"/>' },
  ano:   { cheio: '<rect x="6.4" y="1" width="3.2" height="14" rx="1"/>',
           contorno: '<rect x="7" y="1.6" width="2" height="12.8" rx=".6" fill="none" stroke="currentColor" stroke-width="1.2"/>' }
};
var PLURAL = { filme:'filmes', ano:'anos' };
function simbolos(){
  var s = '';
  Object.keys(ICONES).forEach(function(k){
    var vb = k === 'ano' ? '4.5 0 7 16' : '0 0 16 16';
    s += '<symbol id="cmp-i-' + k + '" viewBox="' + vb + '">' + ICONES[k].cheio + '</symbol>' +
         '<symbol id="cmp-i-' + k + '-o" viewBox="' + vb + '">' + ICONES[k].contorno + '</symbol>';
  });
  return '<svg class="cmp-defs" aria-hidden="true" focusable="false">' + s + '</svg>';
}

/* ---------- textos do resultado (as contas vêm do gerador) ---------- */
function conta(c, b){ return c.conta && c.conta[b]; }
function partes(txt){
  var m = String(txt || '').match(/^(mais de|quase)\s+(.+)$/);
  return m ? { q: m[1], n: m[2] } : { q: '', n: String(txt || '') };
}
function frase(c, b){
  var k = conta(c, b); if (!k) return { num: partes(''), html: '' };
  if (c.modo === 'fixo'){
    /* "15 vencedores do Oscar" + "de melhor filme, entre os últimos 20, custaram menos que o pedido, …" */
    var m = String(k.txt || '').match(/^(\d[\d.,]*)\s+(.+)$/);
    return { num: { q: '', n: m ? m[1] : k.txt }, html: '<b>' + esc(m ? m[2] : '') + '</b> ' + esc(k.u || '') };
  }
  var um = k.n === 1;
  var sub = c.sub ? (c.sub === 'estimativa' ? ' (estimativa)' : ', ' + c.sub + ',') : (c.modo === 'anos' ? ',' : '');
  var verbo = c.modo === 'vezes' ? (um ? 'cabe' : 'cabem') + ' n' + BASES[b].frase
            : c.modo === 'unidades' ? (um ? 'equivale' : 'equivalem') + ' a' + BASES[b].frase
            : 'para juntar ' + BASES[b].frase;
  return { num: partes(k.txt), html: '<b>' + esc(k.u || '') + '</b>' + esc(sub) + ' ' + esc(verbo) + '.' };
}
function linhaBase(c){
  var t = c.grupo === 'cinema' && c.modo !== 'fixo' ? 'Orçamento: ' + c.base_txt : maiuscula(c.base_txt);
  var f = c.fonte || {};
  return esc(t) + (f.url ? ' · fonte: <a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.veiculo || 'fonte') + ' ↗</a>' : '');
}

/* quantos ícones: até 120, na escala {1, 2, 5, 10, 50, 100}; a fração que sobra vira contorno */
function pictos(c, b){
  var k = conta(c, b); if (!k) return { cheios: 0, contorno: 0, escala: 1 };
  var q = c.modo === 'fixo' ? k.n : (c.modo === 'vezes' ? (k.r != null ? k.r : k.n) : k.n);
  var esc_ = [1, 2, 5, 10, 50, 100].filter(function(s){ return Math.ceil(q / s - 1e-9) <= 120; })[0] || 100;
  var x = q / esc_, cheios = Math.floor(x + 1e-9);
  return { cheios: cheios, contorno: x - cheios >= 0.05 ? 1 : 0, escala: esc_ };
}

/* ---------- montagem ---------- */
function monta(sec){
  if (sec.__cmp) return; sec.__cmp = 1;
  sec.classList.add('cmp');
  if (!sec.hasAttribute('aria-labelledby')) sec.setAttribute('aria-labelledby', 'cmp-h');

  var grupos = [], porGrupo = {};
  C.forEach(function(c){ if (!porGrupo[c.grupo]){ porGrupo[c.grupo] = []; grupos.push(c.grupo); } porGrupo[c.grupo].push(c); });
  var nota = CFG.nota || '', nf = CFG.nota_fonte || (TOT.custo && TOT.custo.fonte) || {};

  var gotas = '';
  for (var i = 0; i < TOTAL; i++) gotas += '<i class="g' + (i < CHEIAS ? ' c' : '') + '"></i>';

  sec.innerHTML =
    simbolos() +
    '<h2 class="cmp-h" id="cmp-h">' + esc(CFG.titulo || 'Quanto é isso') + '</h2>' +
    '<div class="cmp-corpo">' +
      '<div class="cmp-esq">' +
        '<div class="cmp-bases" role="group" aria-label="Base da conta">' +
          ['pago', 'pedido'].map(function(b){
            var r = String(BASES[b].rot).split(' · ');            /* "pagos · R$ 60 milhões" → rótulo pequeno + valor */
            return '<button type="button" class="cmp-pb" data-base="' + b + '" aria-pressed="false">' +
              (r.length > 1 ? '<small>' + esc(r[0]) + '</small><b>' + esc(r.slice(1).join(' · ')) + '</b>' : '<b>' + esc(r[0]) + '</b>') + '</button>';
          }).join('') +
        '</div>' +
        '<p class="cmp-quem">' + esc(TOT.pago.quem || 'segundo a PF') + '</p>' +
        '<div class="cmp-grade" role="img" aria-label="' + esc(CFG.legenda || '') + '">' + gotas + '</div>' +
        '<p class="cmp-leg">' + esc(CFG.legenda || '') + '</p>' +
        '<p class="cmp-faixa" hidden></p>' +
        (nota ? '<p class="cmp-nota">' + esc(nota) + (nf.url ? ' <a href="' + esc(nf.url) + '" target="_blank" rel="noopener">' + esc(nf.veiculo || 'fonte') + ' ↗</a>' : '') + '</p>' : '') +
      '</div>' +
      '<div class="cmp-dir">' +
        '<div class="cmp-grupos">' +
          grupos.map(function(g){
            var rot = (CFG.grupos && CFG.grupos[g]) || g;
            return '<div class="cmp-grupo" role="group" aria-label="' + esc(rot) + '"><span class="cmp-gk" aria-hidden="true">' + esc(rot) + '</span>' +
              porGrupo[g].map(function(c){
                return '<button type="button" class="cmp-it" data-item="' + esc(c.id) + '" aria-pressed="false">' + esc(c.rot) + '</button>';
              }).join('') + '</div>';
          }).join('') +
        '</div>' +
        '<div class="cmp-res" id="cmp-res">' +
          '<div class="cmp-vivo" aria-live="polite" aria-atomic="true">' +
            '<p class="cmp-num"><span class="cmp-q"></span><span class="cmp-n"></span></p>' +
            '<p class="cmp-frase"></p>' +
            '<p class="cmp-extra" hidden></p>' +
          '</div>' +
          '<div class="cmp-pic" aria-hidden="true"></div>' +
          '<p class="cmp-escala" hidden></p>' +
          '<p class="cmp-base"></p>' +
          '<button type="button" class="cmp-env env" data-share="dh-custa">enviar ↗</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  var $ = function(s){ return sec.querySelector(s); };
  var el = { res: $('.cmp-res'), q: $('.cmp-q'), n: $('.cmp-n'), frase: $('.cmp-frase'), extra: $('.cmp-extra'),
             pic: $('.cmp-pic'), escala: $('.cmp-escala'), base: $('.cmp-base'), env: $('.cmp-env'), faixa: $('.cmp-faixa'),
             gotas: sec.querySelectorAll('.cmp-grade i') };
  var estado = { base: 'pago', item: C[0].id, ultimo: C[0].id };
  var tPic = 0;

  function desenhaGrade(c){
    var nb = BASES[estado.base].gotas, bloco = c && c.modo === 'vezes' && c.blocos ? c.blocos : 0;
    var inteiros = bloco ? Math.floor(nb / bloco) : 0;
    for (var i = 0; i < el.gotas.length; i++){
      var g = el.gotas[i], k = '';
      if (bloco && i < inteiros * bloco) k = Math.floor(i / bloco) % 2 ? 'k2' : 'k1';
      g.className = 'g' + (i < CHEIAS ? ' c' : '') + (i >= nb ? ' fora' : '') + (k ? ' ' + k : '');
    }
    el.faixa.hidden = !bloco;
    if (bloco) el.faixa.textContent = ('cada faixa: um ' + (c.unid ? c.unid[0] : 'filme')).replace(/(^|\s)(\S{1,2}) /g, '$1$2\u00a0').replace(/(^|\s)(\S{1,2}) /g, '$1$2\u00a0');   /* "de O Agente": o "O" não fica sozinho no fim da linha */
  }

  function desenhaPictos(c){
    clearTimeout(tPic);
    var p = pictos(c, estado.base), ic = c.icone && ICONES[c.icone] ? c.icone : 'filme';
    var tam = p.cheios + p.contorno <= 16 ? 'g1' : (p.cheios + p.contorno <= 60 ? 'g2' : 'g3');
    var h = '';
    for (var i = 0; i < p.cheios; i++) h += '<svg class="pi" style="--d:' + (i * 8) + 'ms"><use href="#cmp-i-' + ic + '"/></svg>';
    if (p.contorno) h += '<svg class="pi o" style="--d:' + (p.cheios * 8) + 'ms"><use href="#cmp-i-' + ic + '-o"/></svg>';
    el.pic.className = 'cmp-pic ' + tam + (ic === 'ano' ? ' tr' : '') + (RM ? ' on' : '');
    el.pic.innerHTML = h;
    if (!RM){
      void el.pic.offsetWidth;                                        /* o estado vazio entra na tela antes de encher */
      tPic = setTimeout(function(){ el.pic.classList.add('on'); }, 16);
    }
    el.escala.hidden = p.escala === 1;
    if (p.escala > 1) el.escala.textContent = (ic === 'ano' ? 'cada traço = ' : 'cada ícone = ') + p.escala + ' ' + (PLURAL[ic] || '') +
      (p.contorno ? '; em contorno, a fração que sobra' : '');
  }

  function mostra(){
    var c = POR_ID[estado.item] || C[0], b = estado.base;
    Array.prototype.forEach.call(sec.querySelectorAll('.cmp-pb'), function(x){
      x.setAttribute('aria-pressed', x.getAttribute('data-base') === b ? 'true' : 'false');
    });
    Array.prototype.forEach.call(sec.querySelectorAll('.cmp-it'), function(x){
      x.setAttribute('aria-pressed', x.getAttribute('data-item') === c.id ? 'true' : 'false');
    });
    var f = frase(c, b);
    el.q.textContent = f.num.q ? f.num.q + ' ' : '';
    el.n.textContent = f.num.n;
    el.frase.innerHTML = f.html;
    var ex = c.extra && c.extra[b];
    el.extra.hidden = !ex; if (ex) el.extra.textContent = maiuscula(ex) + '.';
    el.base.innerHTML = linhaBase(c);
    el.env.setAttribute('data-share', c.share || 'dh-custa');
    sec.setAttribute('data-base', b); sec.setAttribute('data-item', c.id);
    desenhaGrade(c);
    desenhaPictos(c);
  }

  function escolheItem(id){
    var c = POR_ID[id]; if (!c) return false;
    estado.item = id;
    if (c.so) estado.base = c.so; else estado.ultimo = id;
    if (!conta(c, estado.base)) estado.base = conta(c, 'pago') ? 'pago' : 'pedido';
    mostra(); return true;
  }
  function escolheBase(b){
    if (!BASES[b]) return;
    estado.base = b;
    var c = POR_ID[estado.item];
    if (c && !conta(c, b)) estado.item = estado.ultimo;                /* Oscar só existe no pedido: volta ao último item */
    mostra();
  }

  /* o resultado entra na tela depois do toque, se tiver ficado abaixo dela (celular) */
  function revela(){
    var r = el.res.getBoundingClientRect(), vh = window.innerHeight || 0;
    if (r.top > vh - 160) window.scrollBy({ top: r.top - Math.max(vh * 0.3, vh - 300), behavior: RM ? 'auto' : 'smooth' });
  }

  sec.addEventListener('click', function(e){
    var t = e.target && e.target.closest ? e.target.closest('button') : null;
    if (!t || !sec.contains(t)) return;
    if (t.hasAttribute('data-base')) escolheBase(t.getAttribute('data-base'));
    else if (t.hasAttribute('data-item')){ escolheItem(t.getAttribute('data-item')); revela(); }
  });

  /* âncoras: #dh-custa-<id> abre no item; #dh-custa abre no padrão */
  function ancora(rola){
    var h = decodeURIComponent((location.hash || '').slice(1));
    if (h.indexOf('dh-custa') !== 0) return false;
    var id = h.slice('dh-custa-'.length);
    if (h !== 'dh-custa' && POR_ID[id]){ estado.base = 'pago'; escolheItem(id); }   /* o mesmo número do cartão enviado */
    else mostra();                                                    /* #dh-custa: o item em que está (na abertura, o padrão); sem isso o resultado ficava vazio */
    if (rola) vai(h !== 'dh-custa');
    return true;
  }
  /* rola até o resultado (celular) ou até a seção inteira, quando ela cabe com o resultado na tela */
  function vai(noItem){
    var ir = function(){
      var s = sec.getBoundingClientRect(), r = el.res.getBoundingClientRect(), vh = window.innerHeight || 0;
      var hdr = parseFloat(getComputedStyle(doc.documentElement).getPropertyValue('--hdr')) || 57;
      var alvo = (!noItem || r.top + 160 - s.top <= vh - hdr) ? sec : el.res;
      var y = alvo.getBoundingClientRect().top + window.pageYOffset - hdr - 8;
      window.scrollTo(0, Math.max(0, y));
    };
    requestAnimationFrame(function(){ requestAnimationFrame(ir); });
    if (doc.readyState !== 'complete') window.addEventListener('load', function(){ setTimeout(ir, 60); }, { once: true });
    setTimeout(ir, 450);                                              /* o palco acima ajusta a altura depois do load */
  }
  window.addEventListener('hashchange', function(){ ancora(true); });

  if (!ancora(true)) mostra();

  window.__cmp = {
    estado: function(){ return { base: estado.base, item: estado.item, numero: (el.q.textContent + el.n.textContent).trim(),
      frase: el.frase.textContent, pictos: el.pic.querySelectorAll('.pi:not(.o)').length, contorno: el.pic.querySelectorAll('.pi.o').length,
      escala: el.escala.hidden ? '' : el.escala.textContent, share: el.env.getAttribute('data-share'),
      gotas: el.gotas.length, cheias: sec.querySelectorAll('.cmp-grade i.c').length }; },
    item: function(id){ return escolheItem(id); },
    base: function(b){ escolheBase(b); }
  };
}

/* ---------- procura a seção (a página pode montá-la depois deste script) ---------- */
function procura(){
  var s = doc.querySelector('section#dh-custa[data-comparador]') || doc.querySelector('[data-comparador]');
  if (s){ monta(s); return true; }
  return false;
}
if (!procura()){
  var mo = null;
  var para = function(){ if (mo){ mo.disconnect(); mo = null; } };
  if ('MutationObserver' in window && doc.documentElement){
    mo = new MutationObserver(function(){ if (procura()) para(); });
    mo.observe(doc.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', function(){ setTimeout(function(){ procura(); para(); }, 3000); }, { once: true });
  }
  doc.addEventListener('DOMContentLoaded', function(){ if (procura()) para(); });
}
})();
