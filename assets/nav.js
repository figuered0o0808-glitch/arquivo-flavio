/* BOLSODRIVE · a espinha do rio.
   Monta o cabeçalho, o menu e o link "siga o rio" de todas as páginas.
   O menu (Onda 1, X03/D13): 5 destinos (A Foz, ↳ Dark Horse, O dinheiro, BolsoZap, Quiz) + "Arquivo", que agrupa o
   resto (Recentemente, os registros, a teia de nomes e a órbita, Cronologia); no alto, "O rio em 60 segundos" e a caixa
   "Pergunte ao arquivo" (a busca única do drive.html#chat: casos, nomes, BolsoZap e registros); no pé, "enviar esta
   tela" (S13: o tópico da tela atual) e o "Kit de envio". Notícias virou a faixa "Nas manchetes" do Recentemente
   (drive.html#noticias continua valendo) e saiu do menu (Onda 2, P2-C).
   Celular: [ MENU ] abre o menu em tela cheia. Desktop: os 5 destinos em linha; [ MENU ] abre o resto.
   Os trechos do rio (0 nascente → 3 foz) continuam: a linha do curso, o "trecho N de 3" e o "siga o rio".
   Página que quiser dizer qual tópico é a tela atual: window.BD_TELA = 'id' ou function(){ return 'id' }.
   Contrato de cada página:
     <body data-trecho="N">  0 nascente · 1 a teia de nomes · 2 o dinheiro · 3 a foz · "m" margem
     <body data-curto="A teia">  opcional: nome curto do trecho/margem na linha do celular (senão vale o `curto` da lista)
     Rodapé: injeta "fatos até dd/mm" (data do último fato do arquivo; sem o arquivo, a data mais recente dos dados da página).
     <body data-trecho="3" data-afluente="Dark Horse">  um afluente do trecho (TRECHOS[n].afluentes): aparece
       dentro do trecho no mapa (↳), no "você está aqui" e no menu do desktop; o "siga o rio" volta ao trecho
     (na abertura, index.html, data-trecho acompanha os trechos 01/02/03 da própria página e volta a 0 no topo)
     <header class="site-header" data-nav></header>
     <link rel="stylesheet" href="assets/header.css">  e, no fim do body,  <script src="assets/nav.js"></script>
   Em drive.html, a troca de view muda data-trecho e chama window.BDNav.atualiza().
   BolsoZap (zap.html, data-trecho="m"): um dos 5 destinos (no desktop, na linha).
   window.BDNav: { atualiza, abre, fecha, TRECHOS, MARGENS (tudo o que não é trecho), DESTINOS, ARQUIVO }. */
(function(){
  'use strict';
  var doc = document, body = doc.body, raiz = doc.documentElement;
  var hdr = doc.querySelector('header.site-header[data-nav]') || doc.querySelector('header.site-header');
  if (!hdr || !body) return;

  function D(){ return window.DOSSIE || null; }
  function F(){ return window.FOZ || null; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  /* ---------- a lista única: trechos (a correnteza) e margens ---------- */
  /* curto: o nome que cabe na linha do celular ("trecho 1 · A TEIA") e no botão "margem: …" do desktop */
  var TRECHOS = [
    {nome:'Nascente', href:'index.html',
     desc:function(){ return 'a abertura: o rio numa tela só'; }},
    {nome:'A teia de nomes', curto:'A teia', href:'drive.html#rede',
     /* duas contagens, sempre qualificadas: os nomes ligados a ele e a teia inteira (o index conta do mesmo jeito) */
     desc:function(){ var d = D(), g = d && d.grafo;
       if (!g || !g.nodes) return 'os nomes em volta dele e a teia completa, com a situação de cada um';
       var viz = {}; (g.edges || []).forEach(function(e){ if (e.de === 'flavio') viz[e.para] = 1; if (e.para === 'flavio') viz[e.de] = 1; });
       delete viz.flavio;
       /* com data/resumo.js (index) o grafo vem recortado: as contagens da teia inteira estão em meta.n */
       var mn = (d.meta && d.meta.lite && d.meta.n) || null;
       var n1 = mn && mn.nomes ? mn.nomes : Object.keys(viz).length,
           n = mn && mn.nos ? mn.nos - 1 : g.nodes.filter(function(x){ return x.id !== 'flavio'; }).length;
       return n1 + ' nomes em volta dele; ' + n + ' na teia completa, com a situação de cada um'; }},
    {nome:'O dinheiro', href:'siga-o-dinheiro.html',
     desc:function(){ var d = D(), f = d && d.fluxoDinheiro && d.fluxoDinheiro.fluxos;
       if (!f) return 'de onde vem e para onde vai';
       var n = f.filter(function(x){ return x && typeof x.valor === 'string'; }).length;
       return n + ' fluxos de dinheiro, cada um com fonte'; }},
    {nome:'A Foz', href:'foz.html',
     desc:function(){ var z = F();
       if (!z || !z.escandalos) return 'os 40 casos e como chegam a ele';
       return 'os ' + z.escandalos.length + ' casos e como chegam a ele'; },
     afluentes:[{id:'dark-horse', nome:'Dark Horse', href:'dark-horse.html', desc:'o dinheiro do filme, mês a mês', volta:'foz.html#master'}]}
  ];
  /* os 5 destinos do menu (D13), nesta ordem; afl = afluente do anterior (recuado, com ↳) */
  var DESTINOS = [
    {id:'foz', nome:'A Foz', href:'foz.html', trecho:3,
     desc:function(){ var z = F(); return 'os ' + (z && z.escandalos ? z.escandalos.length : 40) + ' casos, e como cada um chega a ele'; }},
    {id:'dark-horse', nome:'Dark Horse', href:'dark-horse.html', afl:true, desc:'o dinheiro do filme, mês a mês'},
    {id:'dinheiro', nome:'O dinheiro', href:'siga-o-dinheiro.html', trecho:2, desc:function(){ return TRECHOS[2].desc(); }},
    {id:'zap', nome:'BolsoZap', href:'zap.html', desc:'cada mensagem é uma reportagem, com fonte'},
    {id:'quiz', nome:'Quiz', href:'quiz.html',
     desc:function(){ var t = window.BD_TOPICOS || {}, n = Object.keys(t).filter(function(k){ return /^q-\d+$/.test(k); }).length;
       return (n ? n + ' perguntas' : 'perguntas') + ', com a fonte de cada resposta'; }}
  ];
  /* "Arquivo": o resto, num grupo só (a teia de nomes é o trecho 1; a órbita é um modo dela) */
  var ARQUIVO = [
    {id:'recente',    nome:'Recentemente',        href:'drive.html#recente'},
    {id:'arquivo',    nome:'Os registros',        curto:'Registros', href:'drive.html#arquivo'},
    {id:'rede',       nome:'A teia de nomes',     curto:'A teia', href:'drive.html#rede'},
    {id:'orbita',     nome:'Em órbita',           curto:'Em órbita', href:'close-friends.html'},
    {id:'cronologia', nome:'Cronologia',          href:'drive.html#cronologia'},
    {id:'chat',       nome:'Pergunte ao arquivo', curto:'Pergunte', href:'drive.html#chat'}   // no menu, é a caixa de busca (nv-busca)
  ];
  var RIO60 = {id:'rio60', nome:'O rio em 60 segundos', curto:'60 segundos', href:'rio60.html', desc:'os casos principais, um por tela, com o envio em cada um'};
  var KIT = {id:'kit', nome:'Kit de envio', curto:'Kit de envio', href:'kit.html', desc:'20 cartões com fonte, textos prontos e stories para o status'};
  /* MARGENS (contrato antigo, lido pelo zap.js): tudo o que não é trecho, na ordem do menu */
  var MARGENS = [DESTINOS[3], DESTINOS[4], RIO60, KIT].concat(ARQUIVO.filter(function(x){ return x.id !== 'rede'; }));
  var ROTULO_GRUPO = {zap:'conversas', quiz:'teste', rio60:'em 1 minuto', kit:'mande adiante'};
  /* nome curto: o da página (<body data-curto="…">) vence o da lista */
  function curtoDe(x){ return body.getAttribute('data-curto') || (x && x.curto) || (x && x.nome) || ''; }
  var VIEWS_DRIVE = ['recente','arquivo','rede','cronologia','noticias','chat'];

  /* ---------- onde a pessoa está ---------- */
  function pagina(){ var p = location.pathname.split('/').pop(); return p || 'index.html'; }
  function trechoAtual(){
    var t = body.getAttribute('data-trecho');
    if (t === '0' || t === '1' || t === '2' || t === '3') return +t;
    return -1; // margem
  }
  /* o afluente desta página (body data-afluente="Dark Horse"), dentro do trecho atual */
  function afluenteAtual(t){
    var a = body.getAttribute('data-afluente'), l = t >= 0 && TRECHOS[t].afluentes || [], p = pagina();
    for (var i = 0; i < l.length; i++){
      if (a ? (a.toLowerCase() === l[i].nome.toLowerCase() || a === l[i].id) : p === l[i].href) return l[i];
    }
    return null;
  }
  function descDe(x){ return typeof x.desc === 'function' ? x.desc() : (x.desc || ''); }
  function viewDrive(){
    var v = doc.querySelector('.view.active');
    var id = v && v.id ? v.id.replace(/^view-/, '') : (location.hash || '#recente').slice(1);
    return VIEWS_DRIVE.indexOf(id) >= 0 ? id : 'recente';
  }
  function margemAtual(){
    var p = pagina();
    if (p === 'zap.html') return 'zap';
    if (p === 'quiz.html') return 'quiz';
    if (p === 'kit.html') return 'kit';
    if (p === 'rio60.html') return 'rio60';
    if (p === 'close-friends.html') return 'orbita';
    if (p === 'drive.html') return viewDrive();
    return '';
  }
  /* o item do menu em que a pessoa está (destino, item do Arquivo, 60 s ou kit); '' na abertura */
  function aquiId(){
    var p = pagina();
    if (p === 'foz.html') return 'foz';
    if (p === 'dark-horse.html') return 'dark-horse';
    if (p === 'siga-o-dinheiro.html') return 'dinheiro';
    if (p === 'drive.html') return viewDrive();
    return margemAtual();
  }
  function itemDe(id){
    var l = DESTINOS.concat(ARQUIVO, [RIO60, KIT]);
    for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i];
    return null;
  }
  function noArquivo(id){ return ARQUIVO.some(function(x){ return x.id === id; }); }
  function lerUltimo(){
    try { var v = sessionStorage.getItem('rio_ultimo'); if (v === '0' || v === '1' || v === '2' || v === '3') return +v; } catch (e) {}
    return 1;
  }
  function gravarUltimo(n){ try { sessionStorage.setItem('rio_ultimo', String(n)); } catch (e) {} }

  /* ---------- datas: pela data dos fatos, nunca pelo relógio ---------- */
  var ISO = /^\d{4}-\d{2}-\d{2}/;
  /* o fato mais recente do arquivo (data/dados.js) */
  function ultimoFato(){
    var d = D(), max = ''; if (d && d.meta && d.meta.lite && d.meta.ultimo && !d.itens) return d.meta.ultimo;
    if (!d || !d.itens) return '';
    d.itens.forEach(function(i){ var m = String(i.data || '').match(ISO); if (m && m[0] > max) max = m[0]; });
    return max;
  }
  /* páginas sem o arquivo (zap, dark-horse): a data mais recente que os dados da própria página carregam
     (qualquer campo com data ISO em FOZ, DARKHORSE, BOLSOZAP, menos as datas de geração/captura), nunca depois de hoje */
  var NAO_DATA = {gerado:1, captura:1, noticiasCaptura:1, atualizadoEm:1, v:1};
  function ultimaDataDe(obj){
    var max = '', hoje = new Date().toISOString().slice(0, 10), vistos = 0;
    (function anda(o, prof){
      if (!o || typeof o !== 'object' || prof > 8 || ++vistos > 60000) return;
      if (Array.isArray(o)){ for (var i = 0; i < o.length; i++) anda(o[i], prof + 1); return; }
      for (var k in o){
        var v = o[k];
        if (typeof v === 'string'){ if (!NAO_DATA[k]){ var m = v.match(ISO); if (m && m[0] > max && m[0] <= hoje) max = m[0]; } }
        else if (v && typeof v === 'object') anda(v, prof + 1);
      }
    })(obj, 0);
    return max;
  }
  function ultimaData(){
    var k = ultimoFato(); if (k) return k;
    /* sem o arquivo: a data que os dados da página declaram como a do último fato do arquivo (BolsoZap: fatos_ate,
       gerado pelo monta_zap.py a partir de dados.js; Dark Horse: periodo.ate, curado igual; quiz: BD_FATOS_ATE,
       gravado em data/topicos.js pelo gera_compartilhar.py a partir de dados.js) */
    var z = (window.BOLSOZAP || {}).fatos_ate || ((window.DARKHORSE || {}).periodo || {}).ate || window.BD_FATOS_ATE || '';
    if (ISO.test(z)) return z.slice(0, 10);
    var fontes = [window.FOZ, window.DARKHORSE, window.BOLSOZAP], max = '';
    for (var i = 0; i < fontes.length; i++){ var m = ultimaDataDe(fontes[i]); if (m > max) max = m; }
    return max;
  }
  function ddmm(k){ return k ? k.slice(8, 10) + '/' + k.slice(5, 7) : ''; }
  /* manchete ou fato em torno de Lula/PT fica fora de toda vitrine (o site não trata deles); "(não é Flávio)" marca fato que não é sobre ele */
  var FORA = /\bLula\b|\bPT\b|petista/i, NAOE = /\(não é Flávio\)\s*$/;
  /* fatos do arquivo nos 14 dias que terminam no fato mais recente: a mesma janela e a mesma peneira da view Recentemente */
  function contaRecentes(){
    var d = D(), fim = ultimoFato();
    if (d && d.contagens && !d.itens) return d.contagens.recentes14 || 0;   /* data/resumo.js: a conta já vem feita */
    if (!d || !d.itens || !fim) return 0;
    var lim = new Date(new Date(fim + 'T12:00:00Z').getTime() - 14 * 864e5).toISOString().slice(0, 10);
    return d.itens.filter(function(i){
      var m = String(i.data || '').match(ISO), t = String(i.titulo || '');
      return m && m[0] >= lim && !FORA.test(t) && !NAOE.test(t);
    }).length;
  }
  /* rodapé de todas as páginas: uma só data de verdade, derivada do último fato.
     Entra só depois do load: os scripts da própria página ainda mexem no rodapé (index: textContent += …) e
     no BolsoZap os dados chegam depois deste script. */
  var fatosEl = null;
  function rodape(){
    if (doc.readyState !== 'complete') return;
    var k = ultimaData(); if (!k) return;
    if (!fatosEl || !fatosEl.isConnected){
      fatosEl = doc.createElement('p'); fatosEl.className = 'nv-fatos';
      var alvo = doc.querySelector('footer.site-footer, .rodape, body > footer');
      if (alvo) alvo.appendChild(fatosEl);
      else if (segue && segue.parentNode) segue.parentNode.insertBefore(fatosEl, segue.nextSibling);
      else body.appendChild(fatosEl);
    }
    fatosEl.textContent = 'fatos até ' + ddmm(k);
  }

  /* ---------- a marca: o logo Osciloscópio (o O de BOLSO é a tela de um osciloscópio) ----------
     SVG inline, com o nome já em contornos (não depende de fonte). Arquivos em assets/marca/.
     Cada cópia ganha um id de máscara próprio (o logo aparece no cabeçalho e no topo do mapa). */
  var LOGO = '<svg viewBox="-2.0 -78.8 840.4 82.6" class="nv-logo" role="img" aria-label="BOLSODRIVE" focusable="false"><path d="M60.4 -36.4 62.4 -41Q70.9 -40.7 76.6 -38.3Q82.3 -35.9 85.15 -31.65Q88 -27.4 88 -21.5Q88 -15.4 85.25 -10.5Q82.5 -5.6 76.9 -2.8Q71.3 0 62.9 0H4L9.7 -38.5L4 -75H60.8Q71.2 -75 77.1 -70.15Q83 -65.3 83 -56.7Q83 -51.8 80.8 -47.5Q78.6 -43.2 73.65 -40.25Q68.7 -37.3 60.4 -36.4ZM29.2 -5.6 19.4 -17.1H54.7Q58 -17.1 59.9 -18.85Q61.8 -20.6 61.8 -23.6Q61.8 -26.3 59.95 -28.2Q58.1 -30.1 54.5 -30.1H24.9V-46.9H50.7Q53.3 -46.9 55.05 -48.5Q56.8 -50.1 56.8 -52.6Q56.8 -54.9 55.2 -56.4Q53.6 -57.9 50.7 -57.9H19.5L29.2 -69.4L34.3 -38.5Z" fill="#d8efdd"/><g transform="translate(90.48,-80.22) scale(0.8543)"><mask id="@ID@" maskUnits="userSpaceOnUse" x="-30" y="-30" width="160" height="160"><rect x="-30" y="-30" width="160" height="160" fill="#fff"/><path d="M-6.07,48.30 L-5.40,48.26 L-4.82,48.20 L-4.26,48.12 L-3.72,48.03 L-3.20,47.91 L-2.69,47.78 L-2.20,47.64 L-1.72,47.48 L-1.26,47.30 L-0.80,47.12 L-0.35,46.91 L0.10,46.70 L0.54,46.47 L0.97,46.23 L1.40,45.98 L1.83,45.72 L2.26,45.44 L2.69,45.16 L3.12,44.86 L3.55,44.55 L3.98,44.24 L4.42,43.92 L4.86,43.59 L5.30,43.25 L5.75,42.91 L6.21,42.56 L6.67,42.21 L7.15,41.86 L7.63,41.50 L8.12,41.15 L8.63,40.79 L9.15,40.44 L9.68,40.09 L10.23,39.75 L10.80,39.42 L11.38,39.09 L11.99,38.78 L12.61,38.48 L13.26,38.19 L13.92,37.92 L14.61,37.68 L15.32,37.45 L16.05,37.25 L16.80,37.08 L17.57,36.94 L18.37,36.83 L19.18,36.75 L20.05,36.71 L21.09,36.72 L22.16,36.81 L23.22,36.98 L24.24,37.22 L25.23,37.52 L26.18,37.88 L27.09,38.30 L27.97,38.76 L28.81,39.26 L29.61,39.80 L30.38,40.36 L31.11,40.95 L31.82,41.56 L32.50,42.18 L33.15,42.82 L33.78,43.47 L34.39,44.13 L34.99,44.80 L35.56,45.46 L36.12,46.13 L36.67,46.80 L37.21,47.47 L37.73,48.13 L38.24,48.78 L38.74,49.42 L39.24,50.05 L39.72,50.66 L40.20,51.26 L40.67,51.83 L41.13,52.38 L41.58,52.90 L42.02,53.39 L42.45,53.86 L42.87,54.28 L43.27,54.67 L43.66,55.02 L44.04,55.33 L44.39,55.60 L44.71,55.83 L45.02,56.01 L45.29,56.15 L45.53,56.26 L45.74,56.33 L45.92,56.37 L46.08,56.39 L46.22,56.40 L46.36,56.39 L46.62,56.37 L46.81,56.35 L47.11,56.32 L47.40,56.29 L47.68,56.25 L47.95,56.20 L48.21,56.14 L48.47,56.09 L48.72,56.02 L48.97,55.95 L49.21,55.88 L49.44,55.80 L49.68,55.72 L49.91,55.63 L50.13,55.53 L50.36,55.43 L50.58,55.33 L50.81,55.22 L51.03,55.11 L51.25,54.99 L51.48,54.86 L51.70,54.73 L51.93,54.60 L52.16,54.45 L52.39,54.31 L52.62,54.16 L52.86,54.00 L53.09,53.84 L53.33,53.67 L53.58,53.50 L53.82,53.32 L54.07,53.14 L54.33,52.95 L54.59,52.76 L54.85,52.57 L55.12,52.37 L55.39,52.17 L55.67,51.96 L55.95,51.75 L56.24,51.54 L56.54,51.32 L56.84,51.10 L57.15,50.88 L57.47,50.66 L57.79,50.44 L58.13,50.22 L58.48,49.99 L58.83,49.77 L59.15,49.58 L60.02,49.08 L66.72,60.92 L65.85,61.42 L65.61,61.55 L65.40,61.65 L65.19,61.76 L64.97,61.89 L64.74,62.02 L64.51,62.15 L64.26,62.30 L64.01,62.45 L63.75,62.61 L63.48,62.78 L63.21,62.95 L62.92,63.13 L62.63,63.32 L62.33,63.51 L62.02,63.70 L61.71,63.90 L61.38,64.10 L61.05,64.30 L60.71,64.51 L60.36,64.72 L60.00,64.93 L59.63,65.14 L59.25,65.36 L58.86,65.57 L58.46,65.78 L58.05,65.98 L57.63,66.19 L57.20,66.39 L56.76,66.59 L56.31,66.78 L55.85,66.97 L55.38,67.15 L54.90,67.33 L54.40,67.49 L53.90,67.65 L53.39,67.80 L52.86,67.94 L52.33,68.07 L51.78,68.18 L51.23,68.29 L50.67,68.38 L50.10,68.46 L49.52,68.52 L48.93,68.57 L48.33,68.61 L47.73,68.63 L47.12,68.64 L46.38,68.63 L45.35,68.55 L44.22,68.39 L43.13,68.13 L42.08,67.80 L41.09,67.40 L40.15,66.94 L39.26,66.43 L38.43,65.88 L37.65,65.30 L36.92,64.69 L36.23,64.06 L35.57,63.41 L34.95,62.75 L34.35,62.08 L33.79,61.40 L33.24,60.72 L32.71,60.03 L32.20,59.33 L31.71,58.64 L31.22,57.95 L30.75,57.26 L30.29,56.57 L29.83,55.89 L29.38,55.22 L28.94,54.56 L28.50,53.91 L28.07,53.28 L27.64,52.66 L27.22,52.07 L26.79,51.49 L26.37,50.94 L25.96,50.42 L25.55,49.92 L25.14,49.45 L24.74,49.02 L24.34,48.61 L23.95,48.25 L23.57,47.91 L23.20,47.61 L22.83,47.35 L22.47,47.12 L22.13,46.92 L21.79,46.75 L21.45,46.61 L21.10,46.49 L20.75,46.40 L20.39,46.33 L19.95,46.29 L19.59,46.27 L19.19,46.28 L18.81,46.30 L18.43,46.33 L18.06,46.38 L17.69,46.45 L17.32,46.53 L16.95,46.63 L16.57,46.75 L16.20,46.88 L15.82,47.03 L15.43,47.19 L15.04,47.37 L14.64,47.57 L14.23,47.78 L13.81,48.00 L13.39,48.24 L12.96,48.50 L12.52,48.76 L12.08,49.04 L11.62,49.33 L11.16,49.63 L10.68,49.94 L10.20,50.25 L9.70,50.57 L9.19,50.89 L8.68,51.22 L8.14,51.55 L7.60,51.87 L7.04,52.20 L6.46,52.52 L5.87,52.84 L5.26,53.15 L4.64,53.45 L4.00,53.74 L3.34,54.02 L2.66,54.28 L1.97,54.53 L1.25,54.76 L0.52,54.97 L-0.23,55.15 L-1.00,55.31 L-1.79,55.45 L-2.60,55.56 L-3.42,55.64 L-4.27,55.69 L-5.12,55.71 L-5.93,55.70ZM55.70,54.50 L72.14,-8.66 L89.86,-3.34 L68.73,58.42ZM69.02,57.46 L68.24,60.05 L65.85,61.42 L62.50,55.50ZM55.98,53.54 L56.76,50.95 L59.15,49.58 L62.50,55.50Z" fill="#000"/></mask><circle cx="50" cy="50" r="46" fill="#ffb02e" mask="url(#@ID@)"/></g><path d="M207.5 -75V-11.4L195.9 -23H251.7V0H181.7V-75Z" fill="#d8efdd"/><path d="M257.3 -24.7H283.5Q283.9 -22.5 285.8 -20.95Q287.7 -19.4 291 -18.55Q294.3 -17.7 298.9 -17.7Q304.9 -17.7 308.25 -18.9Q311.6 -20.1 311.6 -22.8Q311.6 -24.6 309.7 -25.85Q307.8 -27.1 301.9 -27.5L289.5 -28.3Q272.6 -29.4 265.1 -35.5Q257.6 -41.6 257.6 -51.6Q257.6 -60 262.4 -65.6Q267.2 -71.2 275.85 -74Q284.5 -76.8 296.1 -76.8Q307.4 -76.8 316.15 -73.65Q324.9 -70.5 330.05 -64.8Q335.2 -59.1 335.7 -51.5H309.5Q309.2 -53.3 307.55 -54.6Q305.9 -55.9 302.9 -56.6Q299.9 -57.3 295.6 -57.3Q290.1 -57.3 286.95 -56.2Q283.8 -55.1 283.8 -52.6Q283.8 -50.9 285.65 -49.7Q287.5 -48.5 292.8 -48.1L306.8 -47.2Q317.8 -46.5 324.6 -43.95Q331.4 -41.4 334.55 -36.9Q337.7 -32.4 337.7 -25.8Q337.7 -17.5 332.8 -11.3Q327.9 -5.1 319.05 -1.65Q310.2 1.8 298.4 1.8Q286.2 1.8 277 -1.5Q267.8 -4.8 262.65 -10.8Q257.5 -16.8 257.3 -24.7Z" fill="#d8efdd"/><path d="M389.6 1.8Q375.9 1.8 365.65 -3.1Q355.4 -8 349.7 -16.85Q344 -25.7 344 -37.5Q344 -49.3 349.7 -58.15Q355.4 -67 365.65 -71.9Q375.9 -76.8 389.6 -76.8Q403.3 -76.8 413.55 -71.9Q423.8 -67 429.5 -58.15Q435.2 -49.3 435.2 -37.5Q435.2 -25.7 429.5 -16.85Q423.8 -8 413.55 -3.1Q403.3 1.8 389.6 1.8ZM389.6 -21.2Q395.7 -21.2 400.1 -23.15Q404.5 -25.1 406.85 -28.75Q409.2 -32.4 409.2 -37.5Q409.2 -42.6 406.85 -46.25Q404.5 -49.9 400.1 -51.85Q395.7 -53.8 389.6 -53.8Q383.5 -53.8 379.1 -51.85Q374.7 -49.9 372.35 -46.25Q370 -42.6 370 -37.5Q370 -32.4 372.35 -28.75Q374.7 -25.1 379.1 -23.15Q383.5 -21.2 389.6 -21.2Z" fill="#d8efdd"/><path d="M484.2 -75Q497.9 -75 508.15 -70.35Q518.4 -65.7 524.1 -57.3Q529.8 -48.9 529.8 -37.5Q529.8 -26.2 524.1 -17.75Q518.4 -9.3 508.15 -4.65Q497.9 0 484.2 0H444.4V-75ZM470 -11.5 458.4 -23H486.2Q491.7 -23 495.65 -24.75Q499.6 -26.5 501.7 -29.75Q503.8 -33 503.8 -37.5Q503.8 -42.1 501.7 -45.3Q499.6 -48.5 495.65 -50.25Q491.7 -52 486.2 -52H458.4L470 -63.5Z" fill="#d8efdd"/><path d="M556.8 -42.9H582Q585.8 -42.9 587.9 -44.7Q590 -46.5 590 -49.9Q590 -53.3 587.9 -55.1Q585.8 -56.9 582 -56.9H553.2L564.8 -68.5V0H539V-75H586Q595 -75 601.75 -71.85Q608.5 -68.7 612.25 -63.1Q616 -57.5 616 -49.9Q616 -42.5 612.25 -36.85Q608.5 -31.2 601.75 -28.1Q595 -25 586 -25H556.8ZM565.6 -35.1H594.1L619 0H589.5Z" fill="#d8efdd"/><path d="M626.6 -75H652.4V0H626.6Z" fill="#d8efdd"/><path d="M712.4 -11.8H701.8L728.5 -75H755.5L721.5 0H692.1L658.1 -75H685.7Z" fill="#d8efdd"/><path d="M828.1 -46.4V-28.6H771.6V-46.4ZM789.3 -37.5 784.7 -9.6 774.9 -20.4H831.8V0H759.2L764.7 -37.5L759.2 -75H831.3V-54.6H774.9L784.7 -65.4Z" fill="#d8efdd"/></svg>';
  var nLogo = 0;
  function marca(){
    nLogo++;
    return '<a class="nv-mark" href="index.html"><span class="nv-m">' + LOGO.replace(/@ID@/g, 'nv-osc-' + nLogo) + '</span>' +
      '<span class="nv-tag">um rio de escândalos</span></a>';
  }

  /* ícones da aba e da tela inicial, se a página ainda não tiver */
  (function icones(){
    var h = doc.head; if (!h) return;
    [['icon', 'image/png', '32x32', 'assets/marca/icone-32.png', 'link[rel~="icon"][sizes="32x32"]'],
     ['icon', 'image/svg+xml', '', 'assets/marca/favicon.svg', 'link[rel~="icon"][type="image/svg+xml"]'],
     ['apple-touch-icon', '', '', 'assets/marca/icone-180.png', 'link[rel~="apple-touch-icon"]']
    ].forEach(function(x){
      if (h.querySelector(x[4])) return;
      var l = doc.createElement('link'); l.rel = x[0];
      if (x[1]) l.type = x[1];
      if (x[2]) l.setAttribute('sizes', x[2]);
      l.href = x[3]; h.appendChild(l);
    });
  })();

  /* ---------- estilo do menu (Onda 1): vem junto com o markup, depois do header.css (o integrador pode movê-lo para lá) ---------- */
  (function estilo(){
    if (doc.getElementById('nv-estilo')) return;
    var s = doc.createElement('style'); s.id = 'nv-estilo';
    s.textContent = [
      /* "O rio em 60 segundos": a entrada rápida, no alto do menu */
      '.nv-60{display:flex; align-items:center; gap:12px; min-height:64px; margin:6px 0 2px; padding:10px 14px 10px 12px; border:1px solid rgba(255,176,46,.5); border-radius:4px; background:#0e160e; color:#d8efdd; text-decoration:none!important}',
      '.nv-60:hover,.nv-60[aria-current]{border-color:#ffb02e}',
      '.nv-60 .nv-play{flex:none; width:40px; height:40px; border-radius:50%; background:#ffb02e; position:relative}',
      '.nv-60 .nv-play::after{content:""; position:absolute; left:15px; top:12px; border-style:solid; border-width:8px 0 8px 13px; border-color:transparent transparent transparent #120c00}',
      '.nv-60 b{display:block; font-family:var(--nv-sans); font-size:17px; font-weight:700; line-height:1.25; color:#ffb02e}',
      '.nv-60 .nv-d{display:block; font-size:13.5px; line-height:1.35; color:#86a58c; margin-top:2px}',
      /* os destinos: sem a linha do rio (não são trechos em ordem); o atual em âmbar com um ponto */
      '.nv-dest{list-style:none; margin:0; padding:0}',
      '.nv-dest > li{position:relative}',
      '.nv-dest > li > a,.nv-dest .nv-abre{display:flex; flex-direction:column; justify-content:center; width:100%; min-height:62px; padding:10px 0 10px 18px; text-align:left; text-decoration:none!important; color:#d8efdd; background:none; border:0; border-bottom:1px solid rgba(116,255,150,.12); font:inherit; cursor:pointer}',
      '.nv-dest > li > a::before,.nv-dest .nv-abre::before{content:""; position:absolute; left:2px; top:50%; width:7px; height:7px; margin-top:-4px; border-radius:50%; border:1.5px solid #4f6b51}',
      '.nv-dest > li > a[aria-current]::before{background:#ffb02e; border-color:#ffb02e; box-shadow:0 0 0 3px rgba(255,176,46,.22)}',
      '.nv-dest > li > a b,.nv-dest .nv-abre b{font-family:var(--nv-mono); font-size:15px; font-weight:700; text-transform:uppercase; letter-spacing:.04em}',
      '.nv-dest > li > a .nv-d,.nv-dest .nv-abre .nv-d{display:block; font-size:14px; line-height:1.35; color:#86a58c; margin-top:3px}',
      '.nv-dest > li > a[aria-current] b,.nv-dest > li > a:hover b,.nv-dest .nv-abre:hover b{color:#ffb02e}',
      '.nv-dest li.nv-afl-i > a{min-height:52px; padding-left:40px}',
      '.nv-dest li.nv-afl-i > a::before{left:22px}',
      '.nv-dest li.nv-afl-i b::before{content:"↳\\00a0"; color:#86a58c}',
      '.nv-dest .nv-abre{position:relative; padding-right:52px}',
      '.nv-dest .nv-abre .nv-mais{position:absolute; right:0; top:50%; margin-top:-22px; width:44px; height:44px; display:flex; align-items:center; justify-content:center; font-family:var(--nv-mono); font-size:18px; color:#ffb02e; border:1px solid rgba(116,255,150,.25); border-radius:4px}',
      '.nv-dest .nv-abre[aria-expanded="true"] .nv-mais{border-color:#ffb02e}',
      '.nv-dest .nv-abre.nv-aqui-grupo::before{background:#ffb02e; border-color:#ffb02e}',
      '.nv-arq{padding:10px 0 12px; border-bottom:1px solid rgba(116,255,150,.12)}',
      '.nv-arq .nv-margens{grid-template-columns:repeat(2,minmax(0,1fr))}',
      '.nv-arq .nv-margens a{padding:0 8px; font-size:12px; letter-spacing:.01em}',
      '.nv-arq[hidden]{display:none}',
      '.nv-arq .nv-margens a span{white-space:nowrap}',
      /* a busca única no menu */
      '.nv-busca{margin:10px 0 4px}',
      '.nv-busca .nv-k{display:block; margin:0 0 6px}',
      '.nv-bq{display:flex; gap:6px}',
      '.nv-bq input{flex:1; min-width:0; min-height:44px; padding:0 12px; border:1px solid rgba(116,255,150,.25); border-radius:4px; background:#0e160e; color:#d8efdd; font:16px var(--nv-sans); -webkit-appearance:none; appearance:none}',
      '.nv-bq input::placeholder{color:#86a58c}',
      '.nv-bq input:focus{outline:none; border-color:#ffb02e}',
      '.nv-bq button{flex:none; min-height:44px; padding:0 14px; border:1.5px solid #ffb02e; border-radius:2px; background:transparent; color:#ffb02e; font:700 15px var(--nv-sans); cursor:pointer}',
      '.nv-bq button:focus-visible{outline:2px solid #ffb02e; outline-offset:2px}',
      /* mande adiante: enviar a tela atual (S13) e o kit */
      '.nv-env{display:flex; align-items:center; justify-content:center; width:100%; min-height:48px; padding:0 18px; border:1.5px solid #ffb02e; border-radius:2px; background:#ffb02e; color:#120c00; font-family:var(--nv-sans); font-size:16px; font-weight:700; cursor:pointer}',
      '.nv-env:focus-visible{outline:2px solid #ffb02e; outline-offset:2px}',
      '.nv-vai{font-family:var(--nv-mono); font-size:12px; line-height:1.45; color:#86a58c; margin:8px 0 0}',
      '.nv-vai b{font-weight:400; color:#d8efdd}',
      '.nv-kit{display:flex; flex-wrap:wrap; align-items:baseline; gap:2px 10px; min-height:56px; padding:14px 0 4px; margin-top:12px; border-top:1px solid rgba(116,255,150,.12); color:#d8efdd; text-decoration:none!important}',
      '.nv-kit b{font-family:var(--nv-sans); font-size:17px; font-weight:700; color:#ffb02e}',
      '.nv-kit .nv-d{flex-basis:100%; font-size:14px; line-height:1.4; color:#86a58c}',
      '.nv-kit:hover b{text-decoration:underline; text-underline-offset:3px; text-decoration-thickness:1px}',
      '.nv-kit[aria-current] b{text-decoration:underline; text-underline-offset:3px}',
      '.nv-60:focus-visible,.nv-kit:focus-visible,.nv-abre:focus-visible{outline:2px solid #ffb02e; outline-offset:2px}',
      '.nv-sec-envio{margin-top:6px}',
      '.nv-mapa .nv-sec-rio{display:block}',
      ':root{--nv-sans:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}',
      /* celular: a linha do cabeçalho sem "trecho 0" (a abertura não é um trecho a descer) */
      '.nv-aqui:empty{visibility:hidden}',
      /* 320–359 px: colchetes colados ao "menu" e o nome em 10,5 px, para "KIT DE ENVIO" e "↳ DARK HORSE" caberem inteiros */
      '@media (max-width:359px){ .nv-row .nv-bt::before{content:"["} .nv-row .nv-bt::after{content:"]"} .nv-row .nv-aqui b{font-size:10.5px} }',
      /* desktop: os 5 destinos já estão na linha; o menu mostra o 60 s, o Arquivo aberto e o envio */
      '@media (min-width:900px){',
      '  .nv-mapa{width:360px}',
      '  .nv-mapa .nv-dest > li:not(.nv-grupo){display:none}',
      '  .nv-mapa .nv-sec-rio > .nv-k{display:none}',
      '  .nv-dest .nv-abre{min-height:0; padding:12px 0 2px; border:0; cursor:default}',
      '  .nv-dest .nv-abre::before,.nv-dest .nv-abre .nv-mais{display:none}',
      '  .nv-dest .nv-abre b{font-size:12px; letter-spacing:.08em; color:#5c8a63}',
      '  .nv-dest .nv-abre b::before{content:"//\\00a0"}',
      '  .nv-dest .nv-abre .nv-d{display:none}',
      '  .nv-arq,.nv-arq[hidden]{display:block; padding:6px 0 12px; border:0}',
      '  .nv-arq .nv-margens{grid-template-columns:repeat(2,minmax(0,1fr))}',
      '  .nv-arq .nv-margens a:last-child:nth-child(odd){grid-column:1/-1}',
      '  .nv-trechos a.nv-afl-t .nv-n{margin-right:5px}',
      '  .nv-row.nv-sem-zap .nv-trechos a.nv-opc{display:none}',
      '  .nv-mapa.nv-com-opc .nv-dest > li.nv-opc-i{display:block}',
      '}'
    ].join('\n');
    doc.head.appendChild(s);
  })();

  /* ---------- markup (montado uma vez) ---------- */
  hdr.innerHTML =
    '<div class="nv-row">' +
      marca() +
      '<span class="nv-aqui" id="nv-aqui"></span>' +
      '<nav class="nv-trechos" id="nv-trechos" aria-label="Destinos"></nav>' +   // desktop: os 5 destinos em linha
      '<button type="button" class="nv-bt" id="nv-bt" aria-expanded="false" aria-controls="nv-mapa">' +
        '<span class="nv-bt-m">menu</span><span class="nv-bt-d" id="nv-bt-d">menu</span></button>' +
    '</div>' +
    '<div class="nv-curso" id="nv-curso" aria-hidden="true"><span class="nv-feito" id="nv-feito"></span></div>';

  var mapa = doc.createElement('div');
  mapa.className = 'nv-mapa'; mapa.id = 'nv-mapa'; mapa.hidden = true;
  mapa.setAttribute('role', 'dialog'); mapa.setAttribute('aria-modal', 'true'); mapa.setAttribute('aria-label', 'Menu');
  mapa.innerHTML =
    '<div class="nv-mapa-in">' +
      '<div class="nv-topo">' + marca() +
        '<button type="button" class="nv-fecha" id="nv-fecha">fechar</button></div>' +
      '<a class="nv-60" id="nv-60" href="' + RIO60.href + '"><span class="nv-play" aria-hidden="true"></span>' +
        '<span><b>' + esc(RIO60.nome) + '</b><span class="nv-d">' + esc(RIO60.desc) + '</span></span></a>' +
      '<form class="nv-busca" id="nv-busca" role="search" action="drive.html#chat">' +
        '<label class="nv-k" for="nv-q">pergunte ao arquivo</label>' +
        '<div class="nv-bq"><input id="nv-q" type="search" enterkeyhint="search" autocomplete="off" placeholder="Queiroz, Ifop, jato…">' +
        '<button type="submit">procurar</button></div></form>' +
      '<div class="nv-sec nv-sec-rio"><p class="nv-k">o rio</p><ol class="nv-dest" id="nv-lista"></ol></div>' +
      '<div class="nv-sec nv-sec-envio"><p class="nv-k">mande adiante</p>' +
        '<button type="button" class="nv-env" id="nv-env">enviar esta tela ↗</button>' +
        '<p class="nv-vai" id="nv-vai"></p>' +
        '<a class="nv-kit" id="nv-kit" href="' + KIT.href + '"><b>' + esc(KIT.nome) + ' →</b><span class="nv-d">' + esc(KIT.desc) + '</span></a>' +
      '</div>' +
    '</div>';
  hdr.parentNode.insertBefore(mapa, hdr.nextSibling);

  var el = function(id){ return doc.getElementById(id); };
  var bt = el('nv-bt'), fecha = el('nv-fecha'), curso = el('nv-curso'), feito = el('nv-feito');
  var grupoAberto = null;   // o Arquivo aberto ou fechado (null = o padrão: aberto só quando a pessoa está nele)

  /* estações da linha do curso */
  TRECHOS.forEach(function(t, i){
    var p = doc.createElement('i');
    p.style.left = 'calc(16px + (100% - 32px) * ' + (i / (TRECHOS.length - 1)) + ')';
    curso.appendChild(p);
  });
  var estacoes = curso.querySelectorAll('i');

  /* link "siga o rio" antes do rodapé */
  var segue = doc.createElement('nav');
  segue.className = 'nv-segue'; segue.setAttribute('aria-label', 'Siga o rio');
  (function posiciona(){
    var alvo = doc.querySelector('[data-rio-fim], footer.site-footer, .rodape, body > .fim, body > footer');
    if (alvo){ alvo.parentNode.insertBefore(segue, alvo); }
    else {
      var box = doc.querySelector('main') || doc.querySelector('.wrap');
      if (box) box.appendChild(segue);
      else body.insertBefore(segue, doc.querySelector('body > script'));
    }
    if (segue.parentNode === body) segue.classList.add('solto');
  })();

  /* ---------- atualização (a cada troca de trecho ou de view) ---------- */
  var tAtual = -2;
  function atualiza(){
    var t = trechoAtual(), m = t < 0 ? margemAtual() : '', ult;
    var naAbertura = pagina() === 'index.html', afl = afluenteAtual(t);
    tAtual = t;
    if (t >= 0 && !(naAbertura && t > 0)) gravarUltimo(t);
    ult = t >= 0 ? t : lerUltimo();
    var mg = itemDe(m), aqui = aquiId(), naArq = noArquivo(aqui);
    body.classList.toggle('nv-na-margem', t < 0);
    var cur = function(id){ return id === aqui ? ' aria-current="page"' : ''; };

    /* onde a pessoa está (celular): "trecho N de 3" nos trechos 1 a 3 (sem "trecho 0": a abertura não é um trecho),
       o afluente, ou o grupo da margem ("arquivo", "conversas", "teste"…) com o nome curto */
    el('nv-aqui').innerHTML = afl
      ? '<small>trecho ' + t + '<span class="nv-lg nv-afl-lg"> · afluente</span></small><b>↳ ' + esc(afl.nome) + '</b>'
      : t > 0
      ? '<small>trecho ' + t + '<span class="nv-lg"> de ' + (TRECHOS.length - 1) + '</span><span class="nv-ct">/' + (TRECHOS.length - 1) + '</span></small><b>' + esc(curtoDe(TRECHOS[t])) + '</b>'
      : t === 0 ? ''
      : '<small>' + esc(noArquivo(m) ? 'arquivo' : (ROTULO_GRUPO[m] || 'margem do rio')) + '</small><b>' + esc(mg ? curtoDe(mg) : 'fora do rio') + '</b>';

    /* os 5 destinos em linha (desktop); no afluente, o destino-pai fica marcado com contorno */
    el('nv-trechos').innerHTML = DESTINOS.map(function(x){
      var pai = afl && x.trecho === t && !x.afl;
      return '<a href="' + x.href + '"' + cur(x.id) + (x.afl ? ' class="nv-afl-t' + '"' : pai ? ' class="nv-pai"' : x.id === 'quiz' ? ' class="nv-opc"' : '') + '>' +
        (x.afl ? '<span class="nv-n">↳</span>' : '') + esc(x.nome) + '</a>';
    }).join('');
    el('nv-trechos').classList.remove('com-afl');
    /* o botão: "menu"; no desktop, numa página do Arquivo (ou 60 s, kit), diz onde a pessoa está, com o nome curto */
    var fora = !!mg && !DESTINOS.some(function(x){ return x.id === mg.id; });
    el('nv-bt-d').textContent = fora ? (naArq ? 'arquivo: ' : '') + curtoDe(mg) : (t === 1 ? 'arquivo: ' + curtoDe(itemDe('rede')) : 'menu');
    bt.classList.toggle('nv-bt-margem', fora || t === 1);

    /* o menu: os 5 destinos e o Arquivo (um grupo que abre) */
    var aberto = grupoAberto === null ? naArq : grupoAberto;
    var rc = contaRecentes();
    el('nv-lista').innerHTML = DESTINOS.map(function(x){
      return '<li' + (x.afl ? ' class="nv-afl-i"' : x.id === 'quiz' ? ' class="nv-opc-i"' : '') + '><a href="' + x.href + '"' + cur(x.id) + '><b>' + esc(x.nome) + '</b>' +
        '<span class="nv-d">' + esc(descDe(x)) + '</span></a></li>';
    }).join('') +
      '<li class="nv-grupo"><button type="button" class="nv-abre' + (naArq ? ' nv-aqui-grupo' : '') + '" id="nv-abre" aria-expanded="' + aberto + '" aria-controls="nv-arq">' +
        '<b>Arquivo</b><span class="nv-d">o que saiu, os registros, a teia de nomes</span><span class="nv-mais" aria-hidden="true">' + (aberto ? '−' : '+') + '</span></button>' +
      '<div class="nv-arq" id="nv-arq"' + (aberto ? '' : ' hidden') + '><div class="nv-margens">' +
      ARQUIVO.filter(function(x){ return x.id !== 'chat'; }).map(function(x){
        var conta = x.id === 'recente' && rc ? '<b class="nv-conta" aria-label="' + rc + ' fatos novos">' + rc + '</b>' : '';
        return '<a href="' + x.href + '"' + cur(x.id) + '><span>' + esc(x.nome) + '</span>' + conta + '</a>';
      }).join('') + '</div></div></li>';
    el('nv-abre').addEventListener('click', function(){
      if (mqDesk.matches) return;
      var ab = this.getAttribute('aria-expanded') !== 'true';
      grupoAberto = ab; this.setAttribute('aria-expanded', String(ab));
      el('nv-arq').hidden = !ab; this.querySelector('.nv-mais').textContent = ab ? '−' : '+';
    });
    if (aqui === 'rio60') el('nv-60').setAttribute('aria-current', 'page'); else el('nv-60').removeAttribute('aria-current');
    if (aqui === 'kit') el('nv-kit').setAttribute('aria-current', 'page'); else el('nv-kit').removeAttribute('aria-current');
    envioTela();

    /* linha do curso */
    curso.classList.toggle('margem', t < 0);
    curso.classList.toggle('afl', !!afl);
    Array.prototype.forEach.call(estacoes, function(p, i){
      p.className = t < 0 ? (i === ult ? 'volta' : '') : (i < t ? 'ok' : (i === t ? 'agora' : ''));
    });
    progresso();

    /* siga o rio / voltar ao rio */
    var alvo, k, dsc;
    if (afl){ segue.innerHTML = linkSegue(afl.volta || TRECHOS[t].href, 'volte à foz →', t + ' · ' + TRECHOS[t].nome, TRECHOS[t].desc()); }
    else if (naAbertura && t >= 0){ alvo = TRECHOS[1]; segue.innerHTML = linkSegue(alvo.href, 'comece a descida completa →', '1 · ' + alvo.nome, alvo.desc()); }
    else if (t >= 0 && t < TRECHOS.length - 1){ alvo = TRECHOS[t + 1]; k = 'siga o rio →'; dsc = alvo.desc(); segue.innerHTML = linkSegue(alvo.href, k, (t + 1) + ' · ' + alvo.nome, dsc); }
    else if (t === TRECHOS.length - 1){ segue.innerHTML = linkSegue('quiz.html', 'depois da foz →', 'Quiz', 'teste o que viu, com fonte em cada resposta'); }
    else { alvo = TRECHOS[ult]; segue.innerHTML = linkSegue(alvo.href, 'voltar ao rio →', ult + ' · ' + alvo.nome, alvo.desc()); }
    rodape();
    medir();
  }
  if (doc.readyState === 'complete') rodape(); else window.addEventListener('load', rodape);

  /* ---------- S13: enviar a tela atual (o tópico do trecho, do caso ou da página) ----------
     Ordem: a página diz (window.BD_TELA); senão o fragmento (#<caso> na Foz, #q-N no quiz, a conversa no Zap);
     senão o tópico da página. Tópico que não existe em BD_TOPICOS cai no da abertura; sem tópicos, vai o endereço. */
  function topicos(){ return window.BD_TOPICOS || {}; }
  function existe(id){ return !!(id && topicos()[id]); }
  function topicoTela(){
    var T = topicos(), p = pagina(), h = decodeURIComponent((location.hash || '').slice(1)), t = trechoAtual(), id = '';
    try { var b = window.BD_TELA; id = typeof b === 'function' ? b() : b; } catch (e) { id = ''; }
    if (existe(id)) return id;
    if (p === 'foz.html') id = existe(h) ? h : (T[(window.FOZ && window.FOZ.redireciona || {})[h]] ? window.FOZ.redireciona[h] : '');
    else if (p === 'dark-horse.html') id = existe(h) ? h : 'dark-horse';
    else if (p === 'siga-o-dinheiro.html') id = 'siga';
    else if (p === 'quiz.html') id = /^q-\d+$/.test(h) && existe(h) ? h : 'quiz';
    else if (p === 'zap.html'){ var c = h.split(/--|\//)[0]; id = existe('zap-' + h.replace('/', '--')) ? 'zap-' + h.replace('/', '--') : existe('zap-' + c) ? 'zap-' + c : 'zap'; }
    else if (p === 'close-friends.html') id = 'quem-anda';
    else if (p === 'kit.html') id = 'kit';
    else if (p === 'rio60.html') id = existe('rio60') ? 'rio60' : 'abertura';
    else if (p === 'drive.html'){ var v = viewDrive(); id = v === 'rede' ? 'quem-anda' : v === 'recente' ? 'semana' : 'abertura'; }
    else if (p === 'index.html') id = t === 1 ? 'quem-anda' : t === 2 ? 'dinheiro' : 'abertura';
    return existe(id) ? id : (existe('abertura') ? 'abertura' : '');
  }
  function tituloCurto(s){ return String(s || '').replace(/^(BOLSODRIVE|Flávio Bolsonaro)\s*·\s*/, ''); }
  function envioTela(){
    var b = el('nv-env'), id = topicoTela(), t = id ? topicos()[id] : null;
    if (id) b.setAttribute('data-share', id); else b.removeAttribute('data-share');
    el('nv-vai').innerHTML = t ? 'vai o cartão e o link: <b>' + esc(tituloCurto(t.titulo)) + '</b>' : 'vai o endereço desta página';
  }
  /* sem o módulo de envio (assets/compartilhar.js) ou sem tópico: o título e o endereço da tela */
  el('nv-env').addEventListener('click', function(ev){
    if (window.BDShare && this.hasAttribute('data-share')) return;      // o compartilhar.js cuida (delegação no document)
    ev.preventDefault();
    var url = location.href, tit = doc.title;
    if (navigator.share){ navigator.share({ title: tit, url: url }).catch(function(){}); return; }
    var w = 'https://wa.me/?text=' + encodeURIComponent(tit + '\n' + url);
    if (/FBAN|FBAV|Instagram|WhatsApp|; wv\)/i.test(navigator.userAgent || '')) location.href = w; else window.open(w, '_blank', 'noopener');
  });
  function linkSegue(href, k, nome, d){
    return '<a href="' + href + '"><span class="nv-k2">' + esc(k) + '</span><b>' + esc(nome) + '</b>' + (d ? '<span class="nv-d">' + esc(d) + '</span>' : '') + '</a>';
  }

  /* o trecho enche até o próximo conforme a página rola (só a linha; sem animação própria) */
  var raf = 0;
  function progresso(){
    raf = 0;
    var t = tAtual, p = 0;
    if (t >= 0){
      var max = raiz.scrollHeight - window.innerHeight;
      var s = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      p = t >= TRECHOS.length - 1 ? 1 : (t + s) / (TRECHOS.length - 1);
    }
    feito.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }
  window.addEventListener('scroll', function(){ if (!raf && tAtual >= 0 && tAtual < TRECHOS.length - 1) raf = requestAnimationFrame(progresso); }, {passive:true});

  /* --hdr: altura real do cabeçalho, para o scroll-padding-top e os títulos grudados */
  function medir(){ cabeLinha(); raiz.style.setProperty('--hdr', hdr.offsetHeight + 'px'); }
  /* desktop: se a linha não cabe (os destinos transbordariam por cima do logo), tira os colchetes; se ainda não couber,
     tira o Quiz da linha (.nv-opc; ele segue no menu). Mede a largura natural de cada item, não a da caixa. */
  var linha = hdr.querySelector('.nv-row');
  function excede(){
    var cs = getComputedStyle(linha), gap = parseFloat(cs.columnGap) || 0, tr = el('nv-trechos'), gt = parseFloat(getComputedStyle(tr).columnGap) || 0;
    var soma = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight), n = 0;
    Array.prototype.forEach.call(linha.children, function(x){
      if (getComputedStyle(x).display === 'none') return;
      n++;
      if (x !== tr){ soma += x.getBoundingClientRect().width; return; }
      Array.prototype.forEach.call(tr.children, function(a, i){ soma += a.getBoundingClientRect().width + (i ? gt : 0); });
    });
    return soma + gap * Math.max(0, n - 1) > linha.clientWidth + 0.5;
  }
  function cabeLinha(){
    linha.classList.remove('nv-aperta', 'nv-sem-zap');
    if (!mqDesk.matches){ mapa.classList.remove('nv-com-opc'); return; }
    if (excede()) linha.classList.add('nv-aperta');
    if (excede()) linha.classList.add('nv-sem-zap');
    mapa.classList.toggle('nv-com-opc', linha.classList.contains('nv-sem-zap'));   // o Quiz que saiu da linha entra no menu
  }
  window.addEventListener('resize', function(){ medir(); progresso(); });

  /* ---------- o mapa: tela cheia no celular, menu das margens no desktop ---------- */
  var mqDesk = window.matchMedia('(min-width:900px)');
  function aberto(){ return !mapa.hidden; }
  function abre(v, devolveFoco){
    if (v === aberto()) return;
    mapa.hidden = !v;
    bt.setAttribute('aria-expanded', v ? 'true' : 'false');
    var cheia = v && !mqDesk.matches;
    raiz.classList.toggle('nv-trava', cheia);
    mapa.setAttribute('aria-modal', cheia ? 'true' : 'false');
    if (v){
      envioTela();
      var foco = mqDesk.matches ? el('nv-60') : fecha;
      if (foco) foco.focus();
    } else if (devolveFoco !== false){ bt.focus(); }
  }
  bt.addEventListener('click', function(){ abre(!aberto()); });
  fecha.addEventListener('click', function(){ abre(false); });
  mapa.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a');
    if (a) abre(false, false);                      // link para outra view na mesma página: fecha o mapa
  });
  doc.addEventListener('keydown', function(e){
    if (!aberto()) return;
    if (e.key === 'Escape' || e.key === 'Esc'){ e.preventDefault(); abre(false); return; }
    if (e.key !== 'Tab') return;
    var f = Array.prototype.filter.call(mapa.querySelectorAll('a[href],button,input'), function(x){ return x.offsetParent !== null; });
    if (mqDesk.matches) f = [bt].concat(f);         // desktop: o foco circula entre o botão e o menu
    if (!f.length) return;
    var i = f.indexOf(doc.activeElement);
    if (e.shiftKey && i <= 0){ e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && (i < 0 || i === f.length - 1)){ e.preventDefault(); f[0].focus(); }
  });
  /* desktop: clique fora fecha o menu */
  doc.addEventListener('mousedown', function(e){
    if (aberto() && mqDesk.matches && !mapa.contains(e.target) && !bt.contains(e.target)) abre(false, false);
  });
  var mudaMq = function(){ if (aberto()) abre(false, false); };
  if (mqDesk.addEventListener) mqDesk.addEventListener('change', mudaMq); else if (mqDesk.addListener) mqDesk.addListener(mudaMq);
  /* voltar do navegador (bfcache) não pode trazer o mapa aberto */
  window.addEventListener('pageshow', function(e){ if (e.persisted && aberto()) abre(false, false); });

  /* "pergunte ao arquivo": no drive, responde ali mesmo; fora dele, leva a pergunta ao drive.html#chat pelo
     sessionStorage (o termo não vai no endereço) ou, sem ele, por ?busca= */
  el('nv-busca').addEventListener('submit', function(e){
    e.preventDefault();
    var q = String(el('nv-q').value || '').trim(); if (!q) { el('nv-q').focus(); return; }
    if (window.BDBusca && typeof window.BDBusca.perguntar === 'function'){ abre(false, false); el('nv-q').value = ''; window.BDBusca.perguntar(q); return; }
    var ok = false;
    try { sessionStorage.setItem('bd_pergunta', q); ok = sessionStorage.getItem('bd_pergunta') === q; } catch (_){}
    location.href = ok ? 'drive.html#chat' : 'drive.html?busca=' + encodeURIComponent(q) + '#chat';
  });

  window.BDNav = { atualiza: atualiza, abre: function(){ abre(true); }, fecha: function(){ abre(false); }, TRECHOS: TRECHOS, MARGENS: MARGENS, DESTINOS: DESTINOS, ARQUIVO: ARQUIVO };
  atualiza();
  try { if (new URLSearchParams(location.search).get('menu')) abre(true); } catch (e) {}
})();
