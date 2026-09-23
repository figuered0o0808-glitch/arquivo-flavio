/* BOLSODRIVE · a espinha do rio.
   Monta o cabeçalho, o mapa do rio e o link "siga o rio" de todas as páginas.
   Contrato de cada página:
     <body data-trecho="N">  0 nascente · 1 quem anda com ele · 2 o dinheiro · 3 a foz · "m" margem
     (na abertura, index.html, data-trecho acompanha os trechos 01/02/03 da própria página e volta a 0 no topo)
     <header class="site-header" data-nav></header>
     <link rel="stylesheet" href="assets/header.css">  e, no fim do body,  <script src="assets/nav.js"></script>
   Em drive.html, a troca de view muda data-trecho e chama window.BDNav.atualiza(). */
(function(){
  'use strict';
  var doc = document, body = doc.body, raiz = doc.documentElement;
  var hdr = doc.querySelector('header.site-header[data-nav]') || doc.querySelector('header.site-header');
  if (!hdr || !body) return;

  function D(){ return window.DOSSIE || null; }
  function F(){ return window.FOZ || null; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  /* ---------- a lista única: trechos (a correnteza) e margens ---------- */
  var TRECHOS = [
    {nome:'Nascente', href:'index.html',
     desc:function(){ return 'a abertura: o rio numa tela só'; }},
    {nome:'Quem anda com ele', href:'drive.html#rede',
     desc:function(){ var d = D(), g = d && d.grafo;
       if (!g || !g.nodes) return 'a teia de nomes em volta dele';
       var n = g.nodes.filter(function(x){ return x.id !== 'flavio'; }).length;
       return n + ' nomes na teia, com a situação de cada um'; }},
    {nome:'O dinheiro', href:'siga-o-dinheiro.html',
     desc:function(){ var d = D(), f = d && d.fluxoDinheiro && d.fluxoDinheiro.fluxos;
       if (!f) return 'de onde vem e para onde vai';
       var n = f.filter(function(x){ return x && typeof x.valor === 'string'; }).length;
       return n + ' fluxos de dinheiro, cada um com fonte'; }},
    {nome:'A Foz', href:'foz.html',
     desc:function(){ var z = F();
       if (!z || !z.escandalos) return 'os escândalos que chegam a ele';
       return z.escandalos.length + ' escândalos que chegam a ele'; }}
  ];
  var MARGENS = [
    {id:'recente',    nome:'Recentemente',     href:'drive.html#recente'},
    {id:'arquivo',    nome:'Arquivo',          href:'drive.html#arquivo'},
    {id:'cronologia', nome:'Cronologia',       href:'drive.html#cronologia'},
    {id:'noticias',   nome:'Notícias',         href:'drive.html#noticias'},
    {id:'chat',       nome:'FlávioGPT',        href:'drive.html#chat'},
    {id:'quiz',       nome:'Quiz',             href:'quiz.html'},
    {id:'orbita',     nome:'A rede em órbita', href:'close-friends.html'}
  ];
  var VIEWS_DRIVE = ['recente','arquivo','rede','cronologia','noticias','chat'];

  /* ---------- onde a pessoa está ---------- */
  function pagina(){ var p = location.pathname.split('/').pop(); return p || 'index.html'; }
  function trechoAtual(){
    var t = body.getAttribute('data-trecho');
    if (t === '0' || t === '1' || t === '2' || t === '3') return +t;
    return -1; // margem
  }
  function margemAtual(){
    var p = pagina();
    if (p === 'quiz.html') return 'quiz';
    if (p === 'close-friends.html') return 'orbita';
    if (p === 'drive.html'){
      var v = doc.querySelector('.view.active');
      var id = v && v.id ? v.id.replace(/^view-/, '') : (location.hash || '#recente').slice(1);
      return VIEWS_DRIVE.indexOf(id) >= 0 ? id : 'recente';
    }
    return '';
  }
  function lerUltimo(){
    try { var v = sessionStorage.getItem('rio_ultimo'); if (v === '0' || v === '1' || v === '2' || v === '3') return +v; } catch (e) {}
    return 1;
  }
  function gravarUltimo(n){ try { sessionStorage.setItem('rio_ultimo', String(n)); } catch (e) {} }

  /* fatos do arquivo com data nos últimos 14 dias: a mesma janela da view Recentemente */
  function contaRecentes(){
    var d = D(); if (!d || !d.itens) return 0;
    var lim = new Date(Date.now() - 14 * 864e5).toISOString().slice(0, 10);
    return d.itens.filter(function(i){ var m = String(i.data || '').match(/^\d{4}-\d{2}-\d{2}/); return m && m[0] >= lim; }).length;
  }

  /* ---------- markup (montado uma vez) ---------- */
  hdr.innerHTML =
    '<div class="nv-row">' +
      '<a class="nv-mark" href="index.html"><span class="nv-m">BOLSODRIVE</span><span class="nv-tag">um rio de escândalos</span></a>' +
      '<span class="nv-aqui" id="nv-aqui"></span>' +
      '<nav class="nv-trechos" id="nv-trechos" aria-label="Trechos do rio"></nav>' +
      '<button type="button" class="nv-bt" id="nv-bt" aria-expanded="false" aria-controls="nv-mapa">' +
        '<span class="nv-bt-m">rio</span><span class="nv-bt-d" id="nv-bt-d">margens</span></button>' +
    '</div>' +
    '<div class="nv-curso" id="nv-curso" aria-hidden="true"><span class="nv-feito" id="nv-feito"></span></div>';

  var mapa = doc.createElement('div');
  mapa.className = 'nv-mapa'; mapa.id = 'nv-mapa'; mapa.hidden = true;
  mapa.setAttribute('role', 'dialog'); mapa.setAttribute('aria-modal', 'true'); mapa.setAttribute('aria-label', 'Mapa do rio');
  mapa.innerHTML =
    '<div class="nv-mapa-in">' +
      '<div class="nv-topo"><a class="nv-mark" href="index.html"><span class="nv-m">BOLSODRIVE</span><span class="nv-tag">um rio de escândalos</span></a>' +
        '<button type="button" class="nv-fecha" id="nv-fecha">fechar</button></div>' +
      '<div class="nv-sec nv-sec-rio"><p class="nv-k">o rio, da nascente à foz</p><ol class="nv-lista" id="nv-lista"></ol></div>' +
      '<div class="nv-sec"><p class="nv-k">nas margens</p><div class="nv-margens" id="nv-margens"></div></div>' +
      '<p class="nv-nota">Estar no rio não é ser acusado. Cada registro traz fonte e status jurídico.</p>' +
    '</div>';
  hdr.parentNode.insertBefore(mapa, hdr.nextSibling);

  var el = function(id){ return doc.getElementById(id); };
  var bt = el('nv-bt'), fecha = el('nv-fecha'), curso = el('nv-curso'), feito = el('nv-feito');

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
    var naAbertura = pagina() === 'index.html';
    /* na abertura os trechos 1 a 3 são o resumo: a página de cada trecho ainda não foi vista */
    var atual = function(i){ return i === t ? (naAbertura && t > 0 ? ' aria-current="location"' : ' aria-current="page"') : ''; };
    tAtual = t;
    if (t >= 0 && !(naAbertura && t > 0)) gravarUltimo(t);
    ult = t >= 0 ? t : lerUltimo();
    var mg = null; MARGENS.forEach(function(x){ if (x.id === m) mg = x; });
    body.classList.toggle('nv-na-margem', t < 0);

    /* trecho atual (celular) */
    el('nv-aqui').innerHTML = t >= 0
      ? '<small>trecho ' + t + ' de ' + (TRECHOS.length - 1) + '</small><b>' + esc(TRECHOS[t].nome) + '</b>'
      : '<small>margem do rio</small><b>' + esc(mg ? mg.nome : 'fora do rio') + '</b>';

    /* os 4 trechos em linha (desktop) */
    el('nv-trechos').innerHTML = TRECHOS.map(function(x, i){
      return '<a href="' + x.href + '"' + atual(i) + '><span class="nv-n">' + i + '</span>' + esc(x.nome) + '</a>';
    }).join('');
    el('nv-bt-d').textContent = mg ? 'margem: ' + mg.nome : 'margens';
    bt.classList.toggle('nv-bt-margem', !!mg);

    /* mapa */
    el('nv-lista').innerHTML = TRECHOS.map(function(x, i){
      var c = t < 0 ? (i === ult ? 'volta' : '') : (i < t ? 'ok' : (i === t ? 'agora' : ''));
      return '<li class="' + c + '"><a href="' + x.href + '"' + atual(i) + '>' +
        '<span class="nv-n">' + i + '</span><b>' + esc(x.nome) + '</b><span class="nv-d">' + esc(x.desc()) + '</span></a></li>';
    }).join('');
    var rc = contaRecentes();
    el('nv-margens').innerHTML = MARGENS.map(function(x){
      var conta = x.id === 'recente' && rc ? '<b class="nv-conta" aria-label="' + rc + ' fatos novos">' + rc + '</b>' : '';
      return '<a href="' + x.href + '"' + (x.id === m ? ' aria-current="page"' : '') + '><span>' + esc(x.nome) + '</span>' + conta + '</a>';
    }).join('');

    /* linha do curso */
    curso.classList.toggle('margem', t < 0);
    Array.prototype.forEach.call(estacoes, function(p, i){
      p.className = t < 0 ? (i === ult ? 'volta' : '') : (i < t ? 'ok' : (i === t ? 'agora' : ''));
    });
    progresso();

    /* siga o rio / voltar ao rio */
    var alvo, k, dsc;
    if (naAbertura && t >= 0){ alvo = TRECHOS[1]; segue.innerHTML = linkSegue(alvo.href, 'comece a descida completa →', '1 · ' + alvo.nome, alvo.desc()); }
    else if (t >= 0 && t < TRECHOS.length - 1){ alvo = TRECHOS[t + 1]; k = 'siga o rio →'; dsc = alvo.desc(); segue.innerHTML = linkSegue(alvo.href, k, (t + 1) + ' · ' + alvo.nome, dsc); }
    else if (t === TRECHOS.length - 1){ segue.innerHTML = linkSegue('quiz.html', 'depois da foz →', 'Quiz', 'teste o que viu, com fonte em cada resposta'); }
    else { alvo = TRECHOS[ult]; segue.innerHTML = linkSegue(alvo.href, 'voltar ao rio →', ult + ' · ' + alvo.nome, alvo.desc()); }
    medir();
  }
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
  function medir(){ raiz.style.setProperty('--hdr', hdr.offsetHeight + 'px'); }
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
      var foco = mqDesk.matches ? mapa.querySelector('.nv-margens a') : fecha;
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
    var f = Array.prototype.filter.call(mapa.querySelectorAll('a[href],button'), function(x){ return x.offsetParent !== null; });
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

  window.BDNav = { atualiza: atualiza, abre: function(){ abre(true); }, fecha: function(){ abre(false); }, TRECHOS: TRECHOS, MARGENS: MARGENS };
  atualiza();
  try { if (new URLSearchParams(location.search).get('menu')) abre(true); } catch (e) {}
})();
