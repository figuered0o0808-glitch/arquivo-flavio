/* ===== BolsoDrive — o arquivo (drive.html): Recentemente · Arquivo · A teia · Cronologia · Pergunte ao arquivo =====
   No molde da Foz (assets/base.css): um fato por unidade, atribuído, com o botão de enviar ao lado,
   e cada registro ligado ao caso da Foz quando o arquivo sabe qual é.
   Cor: vermelho = preso ou condenado · âmbar = número, fato, ação · verde = fonte, link. A situação dele, em tinta.
   Links que continuam valendo: drive.html#recente|#arquivo|#rede|#cronologia|#noticias|#chat, ?q=a|b#arquivo,
   ?p=<id>#rede (o nome, com o caminho até ele), ?caminho=marielle#rede, ?i=<id do registro>#arquivo (a ficha do
   registro) e ?busca=<termo>#chat (a "Pergunte ao arquivo" já respondida).
   Onda 2 (P2-C): o placar de situação em dois anéis (#rede-dq), os graus de separação (o caminho de um nome até ele,
   no painel, na ficha e no mapa), pessoa → casos da Foz (a cadeia) e a busca única (casos, nomes, BolsoZap, registros). */
(function(){
  const D = window.DOSSIE || {};
  D.itens = D.itens || []; D.temas = D.temas || []; D.grafo = D.grafo || {nodes:[], edges:[]};
  D.grafo.nodes = D.grafo.nodes || []; D.grafo.edges = D.grafo.edges || []; D.status = D.status || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  // "(não é Flávio)" marca, nos dados, o fato que não é sobre ele (serve às contagens); na tela não aparece
  const NAOE = /\s*\(não é Flávio\)\s*$/;
  const tit = t => String(t==null?'':t).replace(NAOE,'');
  const norm = s => String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  // Fato ou manchete em torno de Lula ou do PT fica na base, fora de toda lista: o site não trata deles.
  function FORA(t){ return /\bLula\b|\bPT\b|petista/i.test(String(t||'')); }
  const temaById = {}; D.temas.forEach(t=>{ temaById[t.id]=t; });
  const nodeById = {}; D.grafo.nodes.forEach(n=>{ nodeById[n.id]=n; });
  const VIS = D.itens.filter(i=>!FORA(i.titulo));
  const itemById = {}; D.itens.forEach(i=>{ itemById[i.id]=i; });
  // o endereço público (para os links de envio): o canonical da página, sem o nome do arquivo
  const BASE = (()=>{ const c=$('link[rel="canonical"]'); return String(c ? c.href : location.href).replace(/[?#].*$/,'').replace(/[^\/]*$/,''); })();

  /* ---------------- datas e textos ---------------- */
  const MES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const DIA_S = ['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
  function diaKey(d){ const m=String(d||'').match(/^(\d{4})-(\d{2})-(\d{2})/); return m?m[0]:null; }
  function fmtData(d){ const s=String(d||''); let m;
    if((m=s.match(/^(\d{4})-(\d{2})-(\d{2})/))) return `${m[3]}/${m[2]}/${m[1]}`;
    if((m=s.match(/^(\d{4})-(\d{2})$/))) return `${m[2]}/${m[1]}`;
    return s; }
  function diaMes(d){ const s=String(d||''); let m;
    if((m=s.match(/^\d{4}-(\d{2})-(\d{2})/))) return `${m[2]}/${m[1]}`;
    if((m=s.match(/^\d{4}-(\d{2})$/))) return MES[+m[1]-1] ? MES[+m[1]-1].slice(0,3) : '';
    return ''; }
  function diaLongo(k){ const [y,m,d]=k.split('-'); const w=new Date(k+'T12:00:00Z').getUTCDay(); return `${DIA_S[w]}, ${+d} de ${MES[+m-1]}${y!==String(new Date().getFullYear())?' de '+y:''}`; }
  const porDataDesc = (a,b)=> String(b.data||'').localeCompare(String(a.data||''));
  const statusRot = st => (D.status[st] && D.status[st].rotulo) || '';
  const temaNome = id => { const t=temaById[id]; return t ? String(t.nome).replace('(ALERJ)','(Alerj)') : ''; };
  const fonte1 = i => (i.fontes||[]).find(f=>f && /^https?:\/\//.test(f.url||'')) || null;
  // manchete em caixa alta (vinda da fonte) vira frase normal; siglas e nomes próprios ficam
  const SIGLAS = new Set('STF STJ TSE TRE TCU PF PGR MP MPF MPRJ MP-RJ PL PT CPI BRB ALERJ OAB INSS CNJ PM PMS EUA RJ SP DF BC CNN UOL PSOL PP PSL CV ABIN COAF BNDES PEC PDL TV ONU FBI'.split(' '));
  let PROPRIOS = null;
  function proprios(){
    if(PROPRIOS) return PROPRIOS;
    PROPRIOS = new Set('Flávio Bolsonaro Jair Michelle Eduardo Carlos Vorcaro Queiroz Brasília Rio Janeiro São Paulo Master Dark Horse Moraes Mendonça Dino Senado Câmara Supremo Globo Record Washington Texas Havengate Castro Adriano Marielle Brazão Nóbrega Lindbergh Willer Tomaz Valdemar Ciro Nogueira Alerj Jaguariúna Copacabana Brasil'.split(' '));
    D.grafo.nodes.forEach(n=> String(n.nome||'').split(/\s+/).forEach(w=>{ if(w.length>2 && /^\p{Lu}/u.test(w)) PROPRIOS.add(w.replace(/[^\p{L}-]/gu,'')); }));
    return PROPRIOS;
  }
  function sc(t){
    t = String(t||''); const L = t.match(/\p{L}/gu) || []; if(L.length < 8) return t;
    const up = L.filter(c=> c!==c.toLowerCase()).length;
    if(up/L.length <= .7) return t;
    const P = proprios(); let primeira = true;
    return t.replace(/\p{L}[\p{L}-]*/gu, w=>{
      const U = w.toUpperCase(), low = w.toLowerCase(), cap = low.charAt(0).toUpperCase()+low.slice(1);
      const r = SIGLAS.has(U) ? U : ((primeira || P.has(cap)) ? cap : low);
      primeira = false; return r;
    });
  }
  // número com prefixo/sufixo menores (padrão .numero do base.css)
  function fmtNum(s){ s=String(s||''); let m;
    if((m=s.match(/^(R\$)\s?(.+?)(\s+(?:mil|milhões|milhão|bilhões|bilhão))?$/))) return `<span class="p">${esc(m[1])} </span>${esc(m[2])}${m[3]?`<span class="u">${esc(m[3])}</span>`:''}`;
    if((m=s.match(/^([\d.,]+)(\s+de\s+[\d.,]+)$/))) return `${esc(m[1])}<span class="u">${esc(m[2])}</span>`;
    return esc(s); }

  /* ---------------- envio ---------------- */
  // Todo [data-share] da página passa por aqui (antes do assets/compartilhar.js): o tópico, e, quando o botão
  // tem data-x, um texto próprio (a manchete, o registro) sobre o cartão do tópico.
  const EXTRA = new Map();
  function extra(k, o){ EXTRA.set(k, o); return k; }
  function envia(b){
    const id = b.getAttribute('data-share'); const T = window.BD_TOPICOS || {};
    let ex = b.dataset.x ? EXTRA.get(b.dataset.x) : null;
    if(ex && ex.soSemTopico && T[id]) ex = null;   // o tópico curado (placar-N, do gerador) vale mais que o texto de reserva
    const x = ex ? {texto:ex.texto, url:ex.url} : undefined;
    if(window.BDShare && typeof window.BDShare.enviar === 'function'){ window.BDShare.enviar(id, x); return; }
    const t = T[id] || null;
    const texto = x && x.texto ? x.texto : (t ? t.texto : document.title);
    const url = x && x.url ? x.url : (t ? t.url : location.href);
    if(navigator.share){ navigator.share({text:texto, url}).catch(()=>{}); return; }
    const msg = (/\n\s*$/.test(texto) ? texto.replace(/\s+$/,'')+'\n' : texto+' ') + url;
    window.open('https://wa.me/?text='+encodeURIComponent(msg), '_blank', 'noopener');
  }
  document.addEventListener('click', ev=>{
    const b = ev.target && ev.target.closest ? ev.target.closest('[data-share]') : null;
    if(!b) return;
    ev.preventDefault(); ev.stopPropagation();
    envia(b);
  }, true);

  /* ---------------- a Foz: cada registro no seu caso ---------------- */
  const FOZ = window.FOZ || {escandalos:[]};
  const ESC = FOZ.escandalos || [];
  const escById = {}; ESC.forEach(e=>{ escById[e.id]=e; });
  const FAIXAS = [['direto','Ele mesmo'],['gabinete','O gabinete'],['familia','A família'],['entorno','O entorno']];
  const FAIXA_K = {direto:'ele mesmo', gabinete:'chega a ele pelo gabinete', familia:'chega a ele pela família', entorno:'chega a ele pelo entorno'};
  const nu = u => String(u||'').replace(/^https?:\/\/(www\.)?/,'').replace(/[#?].*$/,'').replace(/\/+$/,'').toLowerCase();
  const casosPorUrl = {};
  ESC.forEach(e=>{
    const us = new Set();
    (e.fontes||[]).forEach(f=> f && us.add(nu(f.url)));
    (e.cadeia||[]).forEach(l=> l.fonte && us.add(nu(l.fonte.url)));
    if(e.numero && e.numero.fonte) us.add(nu(e.numero.fonte.url));
    us.forEach(u=>{ if(u) (casosPorUrl[u]=casosPorUrl[u]||[]).push(e.id); });
  });
  const buscaTermos = e => e.busca ? norm(e.busca).split('|').map(t=>t.trim()).filter(Boolean) : [];
  const blob = i => norm(i.titulo+' '+(i.resumo||'')+' '+temaNome(i.tema));
  // caso forte: o registro usa a mesma fonte que a ficha da Foz (vale para o cartão de envio)
  const memoF = {}, memoC = {};
  function casoForte(i){
    if(i.id in memoF) return memoF[i.id];
    const conta = {};
    (i.fontes||[]).forEach(f=> (casosPorUrl[nu(f && f.url)]||[]).forEach(id=>{ conta[id]=(conta[id]||0)+1; }));
    const ids = Object.keys(conta).sort((a,b)=> conta[b]-conta[a]);
    return (memoF[i.id] = ids.length ? escById[ids[0]] : null);
  }
  // caso para o link "Na Foz": o forte, ou o único caso cuja busca aparece no título
  function casoDoItem(i){
    if(i.id in memoC) return memoC[i.id];
    let c = casoForte(i);
    if(!c){ const t = norm(i.titulo); const hits = ESC.filter(e=> buscaTermos(e).some(x=> x.length>3 && t.includes(x))); if(hits.length===1) c = hits[0]; }
    return (memoC[i.id] = c || null);
  }
  function itensDoCaso(e){
    const qs = buscaTermos(e);
    if(qs.length) return VIS.filter(i=> qs.some(x=> blob(i).includes(x)));
    return VIS.filter(i=>{ const c=casoForte(i); return c && c.id===e.id; });
  }
  const nRegs = {}; ESC.forEach(e=>{ nRegs[e.id] = itensDoCaso(e).length; });
  // por quais rios da Foz um nome passa (só o que a cadeia registra)
  const fozPorNome = {};
  ESC.forEach(e=> (e.cadeia||[]).forEach(l=> [l.de_id, l.para_id].forEach(id=>{
    if(!id) return; const a = fozPorNome[id] || (fozPorNome[id]=[]); if(!a.includes(e)) a.push(e);
  })));
  function fozHTML(id){
    const n = nodeById[id]; if(!n) return '';
    if(id==='flavio'){ return ESC.length ? `<div class="foz-liga"><a href="foz.html">A Foz: os ${ESC.length} casos e como chegam a ele →</a></div>` : ''; }
    const es = fozPorNome[id] || []; if(!es.length) return '';
    // pessoa → casos (N07): só onde o nome está na cadeia do caso (de_id/para_id), com o número da ficha
    return `<div class="foz-liga"><p class="fl-k">Na cadeia de ${es.length===1?'um caso':es.length+' casos'} da Foz</p>` +
      es.map(e=>{ const v = String((e.numero||{}).valor||''), num = /\d/.test(v) && v.length<=22;
        return `<a class="fl-c" href="foz.html#${encodeURIComponent(e.id)}"><span class="fl-n">${esc(e.rotulo||e.nome)}</span>${num?`<span class="fl-v">${esc(v)}</span>`:''}<span class="fl-x">elo por elo →</span></a>`; }).join('') + `</div>`;
  }

  /* ---------------- o registro ---------------- */
  // texto de envio de um registro: a manchete, quem publicou e quando; o link cai no caso da Foz (cartão do caso)
  // ou, sem caso, na ficha do próprio registro
  function textoItem(i, cf){
    const f = fonte1(i), dt = f && f.data ? f.data : i.data;
    const vei = f ? String(f.veiculo||'').replace(/\s*\(([^)]*)\)/g, ' / $1') : '';   // "Jornal de Brasília (Folhapress)" → "… / Folhapress"
    const quem = f ? ` (${vei}${dt?', '+fmtData(dt):''})` : (dt ? ` (${fmtData(dt)})` : '');
    return `*${sc(tit(i.titulo))}*${quem}\n` + (cf ? `${cf.rotulo||cf.nome}, elo por elo, no BOLSODRIVE:` : 'No arquivo do BOLSODRIVE, com fonte:') + '\n';
  }
  function envioItem(i){
    const cf = casoForte(i);
    const k = extra('i:'+i.id, {texto:textoItem(i, cf), url: cf ? undefined : BASE+'drive.html?i='+encodeURIComponent(i.id)+'#arquivo'});
    return `<button type="button" class="env" data-share="${esc(cf ? cf.id : 'abertura')}" data-x="${esc(k)}">enviar ↗</button>`;
  }
  function kickerItem(i, o){
    o = o||{};
    const p = [];
    if(!o.semData && i.data) p.push(fmtData(i.data));
    if(!o.semTema && i.tema) p.push(temaNome(i.tema));
    const st = i.status && i.status!=='fato' && i.status!=='condenacao' ? statusRot(i.status) : '';
    if(st) p.push(st);
    return esc(p.join(' · ')) + (i.status==='condenacao' ? `${p.length?' · ':''}<span class="chip grave">condenação</span>` : '');
  }
  function regHTML(i, o){
    const f = fonte1(i), c = casoDoItem(i);
    return `<article class="reg">
      <p class="reg-k">${kickerItem(i, o)}</p>
      <h3 class="reg-t"><button type="button" class="reg-b" data-abre="${esc(i.id)}">${esc(sc(tit(i.titulo)))}</button></h3>
      <div class="reg-a">${f?`<a class="reg-f" href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')} ↗</a>`:''}${c?`<a class="reg-foz" href="foz.html#${esc(c.id)}" title="Na Foz: ${esc(c.rotulo||c.nome)}">Na Foz →</a>`:''}${envioItem(i)}</div>
    </article>`;
  }
  // lista agrupada por ano (mais recente primeiro); em listas longas, cada ano mostra os primeiros e "ver os N"
  function regsPorAno(its, lim, o){
    o = o||{};
    const l = its.slice().sort(porDataDesc);
    if(!l.length) return '<p class="vazio">Nada aqui.</p>';
    if(l.length <= 10) return `<div class="regs">${l.map(i=>regHTML(i,o)).join('')}</div>`;
    const g = {}; l.forEach(i=>{ const y=(String(i.data||'').match(/^\d{4}/)||['sem data'])[0]; (g[y]=g[y]||[]).push(i); });
    return Object.keys(g).sort().reverse().map(y=>{
      const a = g[y], corta = lim && a.length > lim+2, vis = corta ? a.slice(0,lim) : a;
      return `<h3 class="ano-h">${esc(y)} <span>${a.length} ${a.length===1?'registro':'registros'}</span></h3>
        <div class="regs">${vis.map(i=>regHTML(i,o)).join('')}${corta?`<div class="regs" hidden>${a.slice(lim).map(i=>regHTML(i,o)).join('')}</div><button type="button" class="lm" data-mais>ver os ${a.length} de ${esc(y)} ↓</button>`:''}</div>`;
    }).join('');
  }

  /* ---------------- Router ---------------- */
  const VIEWS=['recente','arquivo','rede','cronologia','noticias','chat'];
  // Regra: nenhum id de elemento pode ter o nome de uma view (o navegador rolaria até ele ao abrir #<view>).
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  // hist==='push': troca pedida pela pessoa → entrada no histórico (o "voltar" do Android volta à view anterior)
  function showView(name, hist){
    let manchetes = false;
    if(name==='noticias'){ name='recente'; manchetes=true; }   // Notícias virou a faixa "Nas manchetes" do Recentemente
    const alvo=$('#view-'+name); if(!alvo) return false;
    const mudou=!alvo.classList.contains('active');
    if(hist==='push' && mudou && location.hash!=='#'+name){
      try{
        history.replaceState(Object.assign({}, history.state, {y:window.scrollY}), '');
        history.pushState({view:name, y:0}, '', '#'+name);
      }catch(e){}
    }
    $$('.view').forEach(v=>v.classList.toggle('active', v===alvo));
    // o cabeçalho do rio (assets/nav.js): a teia é o trecho 1; as outras views são margens
    document.body.dataset.trecho = name==='rede' ? '1' : 'm';
    if(window.BDNav) window.BDNav.atualiza();
    if(name==='rede') Grafo.ensure();
    if(name==='recente') renderRecente();
    if(name==='cronologia') renderTimeline();
    if(mudou) window.scrollTo(0,0);
    if(manchetes){ const m=$('#manchetes'); if(m && !m.hidden){ abreManchetes(); setTimeout(()=> m.scrollIntoView({block:'start'}), 30); } }
    return mudou;
  }

  /* ---------------- RECENTEMENTE ---------------- */
  const JANELA_DIAS = 14;
  const maxDia = lista => (lista||[]).reduce((m,x)=>{ const k=diaKey(x.data); return k && k>m ? k : m; }, '');
  // a janela conta pela data dos fatos, não pelo relógio: os 14 dias terminam no fato mais recente do arquivo
  // (assets/nav.js conta o selo do menu do mesmo jeito). Assim a aba nunca "esvazia" por falta de atualização.
  const ultimoFato = () => maxDia(VIS);
  function recentes(){
    const fim = ultimoFato(); if(!fim) return [];
    const limK = new Date(new Date(fim+'T12:00:00Z').getTime()-JANELA_DIAS*864e5).toISOString().slice(0,10);
    // na vitrine, só o que é sobre ele e sem Lula/PT
    return VIS.filter(i=> !NAOE.test(i.titulo||'') && diaKey(i.data) && diaKey(i.data)>=limK).sort(porDataDesc);
  }
  // o destaque: o registro mais recente que o arquivo liga a um caso da Foz (nos 3 últimos dias com fato), senão o mais recente
  // Pedido de adversário ("suspeita") e declaração não viram a manchete grande: o destaque é um fato apurado.
  const NAO_DESTAQUE = {suspeita:1, declaracao:1};
  function escolheDestaque(ev){
    if(!ev.length) return null;
    const dias = [...new Set(ev.map(i=>diaKey(i.data)))].slice(0,3);
    const ok = i => !NAO_DESTAQUE[i.status] && !FORA(i.resumo);
    return ev.find(i=> dias.includes(diaKey(i.data)) && ok(i) && casoDoItem(i)) || ev.find(ok) || ev[0];
  }
  function destaqueHTML(i){
    const c = casoDoItem(i), f = fonte1(i);
    return `<div class="dq">
      <p class="kicker">${esc(fmtData(i.data))} · ${esc(temaNome(i.tema))}</p>
      <h2 class="dq-h"><button type="button" class="reg-b" data-abre="${esc(i.id)}">${esc(sc(tit(i.titulo)))}</button></h2>
      ${i.resumo?`<p class="dq-t">${esc(i.resumo)}</p><button type="button" class="lm" data-abre="${esc(i.id)}">ler o registro inteiro ↓</button>`:''}
      <div class="dq-a">${c?`<a href="foz.html#${esc(c.id)}">Na Foz: ${esc(c.rotulo||c.nome)} →</a>`:''}${envioItem(i)}
        ${f?`<span class="dq-f"><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo)}${f.data?', '+esc(fmtData(f.data)):''} ↗</a></span>`:''}</div>
    </div>`;
  }
  // manchetes de outros veículos: data/noticias.js (window.BD_NOTICIAS), gerado na rotina do dono; sem ele,
  // a leva salva no dados.js. Nada é buscado ao vivo (os proxies mandavam o IP do leitor a terceiros).
  function manchetes(){
    const src = Array.isArray(window.BD_NOTICIAS) ? window.BD_NOTICIAS : (D.noticiasFallback||[]);
    const vistos = new Set();
    return src.map(n=>{
      const fonte = String(n.fonte||n.source||n.veiculo||'').trim();
      let titulo = String(n.titulo||n.title||'').trim();
      if(fonte && titulo.endsWith(' - '+fonte)) titulo = titulo.slice(0, -(fonte.length+3));
      return {titulo, fonte, url:String(n.url||n.link||''), data:String(n.data||n.date||'')};
    }).filter(n=>{
      if(!n.titulo || !/^https?:\/\//.test(n.url) || FORA(n.titulo)) return false;
      const k = norm(n.titulo); if(vistos.has(k)) return false; vistos.add(k); return true;
    }).sort((a,b)=> String(diaKey(b.data)||'').localeCompare(String(diaKey(a.data)||'')));
  }
  function manHTML(n, k){
    const x = extra('m:'+k, {texto:`*${sc(n.titulo)}*\n${n.fonte}${n.data?', '+fmtData(diaKey(n.data)||n.data):''}. Nas manchetes do arquivo do BOLSODRIVE:\n`, url:BASE+'drive.html#noticias'});
    return `<div class="man"><a class="man-l" href="${esc(n.url)}" target="_blank" rel="noopener">${esc(sc(n.titulo))}</a>
      <div class="man-a"><span class="man-f">${esc(n.fonte)}${n.data?' · '+esc(diaMes(diaKey(n.data)||n.data)):''} ↗</span><button type="button" class="env" data-share="abertura" data-x="${esc(x)}">enviar ↗</button></div></div>`;
  }
  let manAberta = false;
  function abreManchetes(){ const r=$('#man-resto'), b=$('#man-mais'); if(r) r.hidden=false; if(b) b.remove(); manAberta=true; }
  function renderManchetes(){
    const sec = $('#manchetes'), el = $('#man-lista'); if(!sec || !el) return;
    const ms = manchetes(); if(!ms.length){ sec.hidden = true; return; }
    const MAXV = 4, vis = ms.slice(0,MAXV), resto = ms.slice(MAXV);
    el.innerHTML = vis.map(manHTML).join('') + (resto.length ? `<div id="man-resto"${manAberta?'':' hidden'}>${resto.map((n,k)=>manHTML(n,k+MAXV)).join('')}</div>${manAberta?'':`<button type="button" class="lm" id="man-mais">ver as ${ms.length} manchetes ↓</button>`}` : '');
    sec.hidden = false;
  }
  let recFeito = false;
  function renderRecente(){
    const el = $('#rec-lista'); if(!el) return;
    if(recFeito) return; recFeito = true;
    const ev = recentes();
    // "Atualizado em": a data do fato ou da manchete mais recente do arquivo (não a da captura do feed)
    const cap = [ultimoFato(), maxDia(Array.isArray(window.BD_NOTICIAS)?window.BD_NOTICIAS:D.noticiasFallback)].sort().pop();
    const q = $('#rec-quando'); if(q) q.textContent = cap ? `Atualizado em ${fmtData(cap)}.` : '';
    const dq = escolheDestaque(ev);
    const dEl = $('#rec-destaque'); if(dEl) dEl.innerHTML = dq ? destaqueHTML(dq) : '';
    renderManchetes();
    if(!ev.length){ el.innerHTML = '<p class="vazio">Nada novo nos últimos dias do arquivo.</p>'; return; }
    const dias = {}; ev.forEach(i=>{ const k=diaKey(i.data); (dias[k]=dias[k]||[]).push(i); });
    // os 5 dias mais recentes; os anteriores atrás de "dias anteriores"; até 3 registros por dia, o resto em "mais"
    const MAXDIAS = 5, MAXD = 3, ks = Object.keys(dias).sort().reverse();
    el.innerHTML = ks.map((k,di)=>{
      const l = dias[k], vis = l.slice(0,MAXD), resto = l.slice(MAXD);
      return `<section class="dia"${di>=MAXDIAS?' hidden':''}><h3>${esc(diaLongo(k))} <span>${l.length} ${l.length===1?'registro':'registros'}</span></h3>
        <div class="dia-l">${vis.map(i=>regHTML(i,{semData:true})).join('')}${resto.length?`<div class="regs" hidden>${resto.map(i=>regHTML(i,{semData:true})).join('')}</div><button type="button" class="lm" data-mais>mais ${resto.length} deste dia ↓</button>`:''}</div></section>`;
    }).join('') + (ks.length>MAXDIAS?`<button type="button" class="lm" id="rec-dias">os ${ks.length-MAXDIAS} dias anteriores ↓</button>`:'');
    const bd=$('#rec-dias'); if(bd) bd.addEventListener('click', ()=>{ $$('.dia[hidden]', el).forEach(d=>d.hidden=false); bd.remove(); });
  }

  /* ---------------- ARQUIVO ---------------- */
  const arqGrid = $('#arquivo-grid');
  const arqItens = $('#arquivo-itens');
  const busca = $('#busca');
  const itensDoTema = id => VIS.filter(i=>i.tema===id);
  const itensDaPessoa = pid => VIS.filter(i=>(i.pessoas||[]).includes(pid));

  // presos ou condenados com ligação DIRETA a ele (não a rede inteira).
  // prisão anulada segundo a cadeia da Foz (a mesma conta do index): o 'preso' desse nome vira "prisão anulada", neutro
  const PRISAO_ANULADA = (()=>{
    const PA=/anul\S*\s+(?:a\s+)?(?:ordem de\s+)?pris|pris[ãa]o\s+(?:foi\s+)?anulad/i; const s=new Set();
    ESC.forEach(e=>(e.cadeia||[]).forEach(l=>{ if(l.de_id && PA.test(l.status_de||'')) s.add(l.de_id); }));
    return s;
  })();
  const presoHoje = n => (n.situacao||[]).includes('preso') && !PRISAO_ANULADA.has(n.id);
  const vizinhos = id => { const s=new Set(); D.grafo.edges.forEach(e=>{ if(e.de===id) s.add(e.para); if(e.para===id) s.add(e.de); }); return s; };
  const VIZ_FLAVIO = vizinhos('flavio');
  function presosDiretos(){ return D.grafo.nodes.filter(n=> VIZ_FLAVIO.has(n.id) && ((n.situacao||[]).includes('condenado') || presoHoje(n))); }
  // os chips de situação de um nome, como o index: condenado/preso em vermelho (só a borda); denunciado/investigado
  // neutros; denúncia anulada (token 'arquivada') neutra, nunca vermelha nem âmbar; token desconhecido é ignorado
  // os rótulos (a mesma regra dos chips), para o texto de envio: [[rótulo, grave], …]
  function sitRotulos(id, s){
    const n = nodeById[id]||{id, situacao:s};
    s = Array.isArray(s) ? s : (Array.isArray(n.situacao) ? n.situacao : []);
    const cond = s.includes('condenado'), preso = presoHoje(Object.assign({}, n, {situacao:s})), w = [];
    if(cond) w.push(['condenado', true]);
    if(preso) w.push(['preso', true]);
    if(!cond && !preso){
      if(s.includes('preso') && PRISAO_ANULADA.has(id)) w.push(['prisão anulada', false]);
      if(s.includes('denunciado')) w.push(['denunciado', false]); else if(s.includes('investigado')) w.push(['investigado', false]);
    }
    if(s.includes('arquivada')) w.push(['denúncia anulada', false]);
    if(s.includes('morto') && !w.length){ const a = (String(n.status||'').match(/\bmort[oa]\b[^.;]*?\b((?:19|20)\d\d)\b/i)||[])[1]; w.push(['morto' + (a ? ' em ' + a : ''), false]); }
    return w;
  }
  function situacaoChips(id, s){
    return sitRotulos(id, Array.isArray(s) ? s : []).map(([r,g])=>`<span class="chip${g?' grave':''}">${esc(r)}</span>`).join(' ');
  }

  // os números do placar: um .numero, a frase com a fonte, "enviar" (tópico placar-N do gerador) e a pasta
  function placarHTML(){
    const p = D.placar || []; if(!p.length) return '';
    return `<h2 class="kx">Os números</h2><div class="mostr-lista">${p.map((x,k)=>{
      const d = String(x.destino||''), t = d.startsWith('tema:') ? temaById[d.slice(5)] : null;
      const xk = extra('p:'+k, {soSemTopico:true, texto:`*${x.numero}* ${x.rotulo}\nFlávio Bolsonaro · BOLSODRIVE\n`, url:BASE+'drive.html#arquivo'});
      return `<article class="mostr">
        <p class="numero ficha${x.cor==='tinta'?' tinta':''}">${fmtNum(x.numero)}</p>
        <p class="m-t">${esc(x.rotulo)}</p>
        <div class="m-a"><button type="button" class="env" data-share="placar-${k+1}" data-x="${esc(xk)}">enviar ↗</button>${t?`<button type="button" class="m-p" data-tema="${esc(t.id)}">a pasta →</button>`:(d==='rede'?`<button type="button" class="m-p" data-go="rede">a teia →</button>`:'')}</div>
      </article>`; }).join('')}</div><p class="mostr-dica">deslize para os outros ${p.length-1} →</p>`;
  }
  function faixasHTML(){
    if(!ESC.length) return '';
    return `<h2 class="kx">Por caso <span>· os ${ESC.length} da Foz</span></h2><div class="faixas">${FAIXAS.map(([f,nome])=>{
      const es = ESC.filter(e=>e.faixa===f), r = es.reduce((s,e)=>s+(nRegs[e.id]||0),0);
      return `<button type="button" class="afl" data-faixa="${f}" aria-expanded="false" aria-controls="fx-casos"><b class="n">${esc(nome)}</b><span class="an"><b>${es.length}</b><span class="t">casos · ${r} registros</span></span></button>`;
    }).join('')}</div><div class="fx-casos" id="fx-casos" hidden></div>`;
  }
  function faixaCasos(f){
    const el = $('#fx-casos'); if(!el) return;
    const bt = $(`.faixas [data-faixa="${f}"]`), aberta = bt && bt.getAttribute('aria-expanded')==='true';
    $$('.faixas [data-faixa]').forEach(b=> b.setAttribute('aria-expanded','false'));
    if(aberta){ el.hidden = true; return; }
    bt.setAttribute('aria-expanded','true');
    const nome = (FAIXAS.find(x=>x[0]===f)||[])[1]||'';
    const es = ESC.filter(e=>e.faixa===f).sort((a,b)=> (nRegs[b.id]||0)-(nRegs[a.id]||0) || String(a.rotulo).localeCompare(String(b.rotulo),'pt'));
    el.innerHTML = `<p class="kx">${esc(nome)} <span>· ${es.length} casos</span></p>` + es.map(e=> nRegs[e.id]
      ? `<button type="button" class="caso-l" data-caso="${esc(e.id)}"><span class="cl-n">${esc(e.rotulo||e.nome)}</span><span class="cl-r">${nRegs[e.id]} ${nRegs[e.id]===1?'registro':'registros'} →</span></button>`
      : `<a class="caso-l" href="foz.html#${esc(e.id)}"><span class="cl-n">${esc(e.rotulo||e.nome)}</span><span class="cl-r foz">na Foz →</span></a>`).join('');
    el.hidden = false;
  }
  function pastasHTML(){
    return `<h2 class="kx">Pastas</h2><div class="afls pastas">${D.temas.map(t=>{
      const its = itensDoTema(t.id), mid = its.filter(i=>(i.midia||[]).length).length;
      return `<button type="button" class="afl" data-tema="${esc(t.id)}"><b class="n">${esc(temaNome(t.id))}</b><span class="pm">${its.length} ${its.length===1?'registro':'registros'}${mid?` · ${mid} ${mid===1?'mídia':'mídias'}`:''}</span></button>`;
    }).join('')}</div>`;
  }
  function renderTemas(){
    arqItens.hidden = true; arqGrid.hidden = false;
    arqGrid.innerHTML = placarHTML() + faixasHTML() + pastasHTML();
  }
  function listaItens(its, titulo, voltarFn, extraTop, lim, o){
    o = o||{};
    const h = titulo ? `<h2 class="lista-h">${esc(titulo)}</h2>` : '';
    arqGrid.hidden = true; arqItens.hidden = false;
    arqItens.innerHTML = `<button type="button" class="vt" id="volta">← o arquivo</button>${o.tituloAntes?h+(extraTop||''):(extraTop||'')+h}
      <p class="lista-n">${its.length} ${its.length===1?'registro':'registros'}, do mais recente ao mais antigo</p>
      ${regsPorAno(its, lim, o)}`;
    $('#volta').addEventListener('click', ()=>{ (voltarFn||renderTemas)(); window.scrollTo(0, 0); });
  }
  // gráfico de patrimônio declarado ao TSE e atuação no Senado (dados abertos oficiais)
  const fmtMi = v => 'R$ ' + (v/1e6).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}) + ' mi';
  function patrimonioChartHTML(){
    const p = D.patrimonioTSE; if(!p || !p.pontos) return '';
    const max = Math.max(...p.pontos.map(x=>x.valor||0)) * 1.12 || 1;
    const bars = p.pontos.map(x=>{
      const h = x.valor ? Math.max(8, Math.round(x.valor/max*140)) : 132;
      return `<div class="pbar-col"><div class="pbar-val">${esc(x.valor ? fmtMi(x.valor) : (x.rotulo||'?'))}</div>
        <div class="pbar ${x.valor?'':'ghost'}" style="height:${h}px"></div><div class="pbar-yr">${esc(x.ano)}<span>${esc(x.cargo||'')}</span></div></div>`;
    }).join('');
    return `<div class="dados-c"><p class="kicker">Patrimônio declarado ao TSE</p><div class="pbars">${bars}</div>
      <p class="fonte">${esc(p.nota||'')} Fonte: <a href="${esc(p.fonte.url)}" target="_blank" rel="noopener">${esc(p.fonte.veiculo)} ↗</a></p></div>`;
  }
  function senadoStatsHTML(){
    const s = D.senadoStats; if(!s || !s.itens) return '';
    return `<div class="dados-c"><p class="kicker">Atuação no Senado · dados oficiais</p>
      <div class="sstats">${s.itens.map(i=>`<div class="sstat"><p class="numero ficha">${fmtNum(i.valor)}</p><p class="sl">${esc(i.label)}</p></div>`).join('')}</div>
      <p class="fonte">${esc(s.nota||'')} Fonte: <a href="${esc(s.fonte.url)}" target="_blank" rel="noopener">${esc(s.fonte.veiculo)} ↗</a></p></div>`;
  }
  function abrirTema(id){
    const t = temaById[id]; if(!t) return;
    const extraTop = id==='patrimonio' ? patrimonioChartHTML() : id==='senado' ? senadoStatsHTML() : '';
    listaItens(itensDoTema(id), temaNome(id), renderTemas, extraTop, 6, {tituloAntes:true, semTema:true});
    window.scrollTo(0, 0);
  }
  // o caso da Foz, como destaque (número, frase atribuída, fonte, a ficha, enviar) em cima dos registros dele
  function casoDQ(e){
    const nm = e.numero || {}, v = String(nm.valor||''), num = /\d/.test(v) && v.length <= 22;
    const f = nm.fonte && /^https?:\/\//.test(nm.fonte.url||'') ? nm.fonte : fonte1(e);
    return `<div class="dq caso-dq">
      <p class="kicker neutro">na Foz · ${esc(FAIXA_K[e.faixa]||'')}</p>
      <h2>${esc(e.rotulo||e.nome)}</h2>
      ${v?`<p class="numero ${num?'destaque':'frase'}">${num?fmtNum(v):esc(v)}</p>`:''}
      ${nm.texto?`<p class="dq-t">${esc(nm.texto)}</p>`:''}
      <div class="dq-a"><a href="foz.html#${esc(e.id)}">a ficha na Foz →</a><button type="button" class="env" data-share="${esc(e.id)}">enviar ↗</button>
        ${f?`<span class="dq-f"><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo)}${f.data?', '+esc(fmtData(f.data)):''} ↗</a></span>`:''}</div>
    </div>`;
  }
  function abrirCaso(id){
    const e = escById[id]; if(!e) return;
    listaItens(itensDoCaso(e), 'Os registros do caso', renderTemas, casoDQ(e), 6);
    window.scrollTo(0, 0);
  }
  // busca: "a|b" procura qualquer um dos termos (é o formato dos links da Foz); o ano também vale ("2020")
  function buscar(v){
    const q = norm(String(v||'').trim());
    if(!q){ renderTemas(); return; }
    const qs = q.split('|').map(t=>t.trim()).filter(Boolean);
    const hits = VIS.filter(i=>{ const t = blob(i)+' '+String(i.data||''); return qs.some(x=> t.includes(x)); });
    const caso = ESC.find(e=> e.busca && norm(e.busca)===q);
    const rot = String(v).trim().split('|').map(t=>t.trim()).filter(Boolean).join('” ou “');
    listaItens(hits, caso ? '' : `Busca: “${rot}”`, ()=>{ busca.value=''; renderTemas(); }, caso ? casoDQ(caso) : tambemHTML(String(v).trim()), hits.length>30 ? 6 : 0);
  }
  // a busca do Arquivo é a mesma da "Pergunte ao arquivo": acima dos registros, o que mais o arquivo tem (casos, nomes, Zap)
  function tambemHTML(v){
    if(!v || v.indexOf('|')>=0 || typeof Busca==='undefined') return '';
    const r = Busca.procura(v), gs = r.grupos.filter(g=> g.g!=='item'); if(!gs.length) return '';
    const p = gs.map(g=>{ const n = g.l.filter(h=>h.doc.tipo!=='conv').length || g.l.length; return `${n} ${GRUPO_NOME[g.g][n===1?0:1]}`; });
    return `<p class="bf-tb">Também no arquivo: <button type="button" class="lm" data-q-arq="${esc(v)}">${esc(p.join(' · '))} →</button></p>`;
  }
  if(busca) busca.addEventListener('input', ()=> buscar(busca.value));

  /* ---------------- a folha: ficha de um registro, de um nome, o método ---------------- */
  const overlay = $('#overlay'), sheet = $('#sheet');
  const TIER = {primaria:'fonte primária', referencia:'imprensa', agregador:'agregador', blog:'blog ou opinião'};
  function abreFolha(html){
    sheet.innerHTML = `<button type="button" class="fx" id="fechar">fechar ×</button>` + html;
    $('#fechar').addEventListener('click', fechar);
    overlay.classList.add('open'); sheet.scrollTop = 0;
    try{ $('#fechar').focus({preventScroll:true}); }catch(e){}
  }
  function abrirDetalhe(id){
    const i = itemById[id]; if(!i) return;
    const c = casoDoItem(i);
    const midia = (i.midia||[]).map(m=>`<p class="f-midia">${esc(m.tipo==='audio'?'Áudio':m.tipo==='video'?'Vídeo':(m.tipo||'Mídia'))}: ${m.url?`<a href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.titulo)} ↗</a>`:esc(m.titulo)}${m.fonte?` <span class="man-f">(${esc(m.fonte)})</span>`:''}</p>`).join('');
    const pessoas = (i.pessoas||[]).filter(p=>nodeById[p]).map(p=>`<button type="button" data-pessoa="${esc(p)}">${esc(nodeById[p].nome)}</button>`).join('');
    const fontes = (i.fontes||[]).filter(f=>f && f.url).map(f=>`<li><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')}${f.data?', '+esc(fmtData(f.data)):''} ↗</a>${f.tier&&TIER[f.tier]?`<span class="tier">${esc(TIER[f.tier])}</span>`:''}${f.trecho?`<q>${esc(f.trecho)}</q>`:''}</li>`).join('');
    abreFolha(`
      <p class="f-k">${kickerItem(i)}</p>
      <h2 class="f-t">${esc(sc(tit(i.titulo)))}</h2>
      ${i.resumo?`<p class="f-r">${esc(i.resumo)}</p>`:''}
      ${i.observacao?`<p class="ressalva">${esc(i.observacao)}</p>`:''}
      ${midia}
      <div class="f-a">${envioItem(i)}${c?`<a class="porta" href="foz.html#${esc(c.id)}">Na Foz: ${esc(c.rotulo||c.nome)} →</a>`:''}</div>
      <p class="f-sub">Fontes</p>${fontes?`<ul class="f-fontes">${fontes}</ul>`:'<p class="nofonte">Sem fonte registrada.</p>'}
      ${pessoas?`<p class="f-sub">Nomes citados · na teia</p><div class="f-pes">${pessoas}</div>`:''}`);
  }
  const GRUPO_LABEL = { politico:'políticos', familia:'família', operadores:'operadores', milicia:'milícia', juridico:'advogados', financeiro:'dinheiro', aliado:'aliados', golpe:'trama golpista', politico_inst:'instituições', outro:'outros' };
  // a cor da situação (as 3 lanes da Foz); ele, em tinta
  function sitDe(n){
    if(!n) return 'outros'; if(n.id==='flavio') return 'ele';
    const s = Array.isArray(n.situacao) ? n.situacao : [];
    if(s.includes('condenado') || (s.includes('preso') && !PRISAO_ANULADA.has(n.id))) return 'grave';
    if(s.includes('denunciado') || s.includes('investigado')) return 'medio';
    return 'outros';
  }
  const fontesCurtas = fs => (fs||[]).filter(f=>f && /^https?:\/\//.test(f.url||'')).map(f=>`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')}${f.data?', '+esc(fmtData(f.data)):''} ↗</a>`).join(' · ');
  const sitFonte = n => (n && n.situacao_fontes && n.situacao_fontes.length && /^https?:\/\//.test(n.situacao_fontes[0].url||''))
    ? ` <a href="${esc(n.situacao_fontes[0].url)}" target="_blank" rel="noopener">${esc(n.situacao_fontes[0].veiculo||'fonte')} ↗</a>` : '';
  // situação de um vínculo: o status do sistema vira chip; frase livre vai em texto (um chip com uma frase inteira é ruído)
  const edgeSt = e => { if(!e.status || e.status==='fato') return ''; const r = statusRot(e.status);
    return r ? ` <span class="chip${e.status==='condenacao'?' grave':''}">${esc(r)}</span>` : `<br><span class="v-st">${esc(e.status)}</span>`; };
  // a conversa da pessoa no BolsoZap (data/zap-mapa.js), quando existe
  function zapLink(id){ const c=((window.ZAP_MAPA||{}).grafo||{})[id]; return c?`<a class="zap-l" href="zap.html#${esc(c)}">a conversa no BolsoZap →</a>`:''; }
  function envioPessoa(id){
    if(id==='flavio') return `<button type="button" class="env" data-share="abertura">enviar ↗</button>`;
    const es = fozPorNome[id] || [];
    return `<button type="button" class="env" data-share="${esc(es.length ? es[0].id : 'quem-anda')}">enviar ↗</button>`;
  }

  /* ---------------- graus de separação (N07) ----------------
     O caminho mais curto de um nome até ele, pela teia inteira: só arestas que existem em dados.js (grafo.edges),
     cada elo com o rótulo literal da aresta, o status e a fonte; cada nome com a situação (os mesmos chips).
     Quando há mais de um caminho com o mesmo número de elos, o mais documentado (mais fontes) vem primeiro. */
  const GRAU = (()=>{
    const adj = {}; D.grafo.nodes.forEach(n=>{ adj[n.id] = []; });
    D.grafo.edges.forEach(e=>{ if(adj[e.de] && adj[e.para] && e.de!==e.para){ adj[e.de].push([e.para, e]); adj[e.para].push([e.de, e]); } });
    const dist = {}; if(adj.flavio){ dist.flavio = 0; const fila = ['flavio'];
      while(fila.length){ const u = fila.shift(); adj[u].forEach(([v])=>{ if(!(v in dist)){ dist[v] = dist[u]+1; fila.push(v); } }); } }
    return {adj, dist};
  })();
  const nFontes = e => (e.fontes||[]).filter(f=>f && /^https?:\/\//.test(f.url||'')).length;
  const memoCam = {};
  function caminhos(id){
    if(memoCam[id]) return memoCam[id];
    const {adj, dist} = GRAU; if(id==='flavio' || !(id in dist)) return (memoCam[id] = []);
    const todos = [];
    (function vai(u, nos, ars){
      if(todos.length >= 400) return;
      if(u==='flavio'){ todos.push({nos:nos.slice(), ars:ars.slice()}); return; }
      adj[u].forEach(([v, e])=>{ if(dist[v]===dist[u]-1){ nos.push(v); ars.push(e); vai(v, nos, ars); nos.pop(); ars.pop(); } });
    })(id, [id], []);
    const peso = c => c.ars.reduce((s,e)=> s + Math.min(3, nFontes(e)) + (e.rotulo ? 1 : 0), 0);
    todos.sort((a,b)=> peso(b)-peso(a) || a.nos.join('>').localeCompare(b.nos.join('>')));
    const vistos = new Set();
    return (memoCam[id] = todos.filter(c=>{ const k = c.nos.join('>'); if(vistos.has(k)) return false; vistos.add(k); return true; }).slice(0, 12));
  }
  // o texto de envio do caminho: cada nome com a situação, cada elo com a relação literal; ele, sem rótulo
  function textoCaminho(c){
    const lin = [];
    c.nos.forEach((id, k)=>{
      const n = nodeById[id]; if(!n) return;
      if(id==='flavio'){ lin.push(n.nome); return; }
      const r = sitRotulos(id).map(x=>x[0]);
      lin.push(n.nome + (r.length ? ` — ${r.join(', ')}` : ''));
      const e = c.ars[k]; if(e && e.rotulo) lin.push('↓ ' + e.rotulo);
    });
    const el = c.ars.length, n0 = nodeById[c.nos[0]];
    return `*${el} ${el===1?'elo':'elos'}* entre ${n0 ? n0.nome : ''} e Flávio Bolsonaro, na teia de nomes do BOLSODRIVE:\n${lin.join('\n')}\nCada elo com a fonte:\n`;
  }
  // o cartão do caminho (painel, ficha): a cadeia de cima (o nome) para baixo (ele), como a cadeia da Foz
  function caminhoHTML(id, k){
    const cs = caminhos(id); if(!cs.length) return '';
    k = ((+k||0) % cs.length + cs.length) % cs.length;
    const c = cs[k], el = c.ars.length;
    const x = extra('cam:'+id+':'+k, {texto:textoCaminho(c), url:BASE+'drive.html?p='+encodeURIComponent(id)+'#rede'});
    const T = window.BD_TOPICOS || {}, top = T['caminho-'+id] ? 'caminho-'+id : 'quem-anda';
    const li = [];
    c.nos.forEach((nid, i)=>{
      const n = nodeById[nid]; if(!n) return;
      li.push(nid==='flavio'
        ? `<li class="elo-p ele"><b>${esc(n.nome)}</b></li>`
        : `<li class="elo-p ${sitDe(n)}"><button type="button" class="elo-n" data-node="${esc(nid)}">${esc(n.nome)}</button> ${situacaoChips(nid, n.situacao)}</li>`);
      const e = c.ars[i];
      // o elo: a relação literal da aresta e a fonte (o status da aresta fica nos vínculos; aqui poderia ser lido como dele)
      if(e) li.push(`<li class="elo-l">${esc(e.rotulo||'ligação registrada na teia')}${nFontes(e)?`<span class="src">${fontesCurtas((e.fontes||[]).slice(0,2))}</span>`:''}</li>`);
    });
    return `<div class="grau" data-grau="${esc(id)}" data-k="${k}">
      <p class="vlbl">O caminho até ele <b>${el} ${el===1?'elo':'elos'}</b>${cs.length>1?` <span>· caminho ${k+1} de ${cs.length} com ${el} ${el===1?'elo':'elos'}</span>`:''}</p>
      <ol class="elos">${li.join('')}</ol>
      <div class="grau-a"><button type="button" class="env" data-share="${esc(top)}" data-x="${esc(x)}">enviar ↗</button>${cs.length>1?`<button type="button" class="lm grau-outro" data-outro="${esc(id)}" data-k="${k+1}">outro caminho →</button>`:''}</div>
    </div>`;
  }
  // ---- ficha de um nome (perfil completo) ----
  function abrirFicha(id){
    const n = nodeById[id]; if(!n) return;
    const g = D.grafo, ev = g.edges.filter(e=>e.de===id||e.para===id);
    const viz = ev.map(e=>{
      const o=e.de===id?e.para:e.de, on=nodeById[o];
      return `<div class="vrow" data-node="${esc(o)}"><b>${esc(on?on.nome:o)}</b> — ${esc(e.rotulo||'')}${edgeSt(e)}</div>`;
    }).join('');
    const its = itensDaPessoa(id).sort(porDataDesc);
    const lista = its.map(i=>`<div class="vrow" data-item="${esc(i.id)}"><b>${esc(sc(tit(i.titulo)))}</b> <span class="man-f">${esc(fmtData(i.data))}</span></div>`).join('');
    const chips = situacaoChips(id, n.situacao), foto = fotoURL[id], st = sitDe(n);
    abreFolha(`
      <div class="p-top">${foto?`<img class="p-foto ${st}" src="${esc(foto)}" alt="">`:''}<div>
        <p class="f-k">Ficha · ${esc(GRUPO_LABEL[n.grupo]||'na teia')}</p>
        <h2 class="f-t">${esc(n.nome)}</h2>
        ${n.papel?`<p class="p-papel">${esc(n.papel)}</p>`:''}</div></div>
      ${chips?`<div class="p-chips">${chips}</div>`:''}
      ${n.status?`<p class="p-st">${esc(n.status)}${sitFonte(n)}</p>`:''}
      <div class="f-a">${envioPessoa(id)}${zapLink(id)}</div>
      ${caminhoHTML(id)}
      ${fozHTML(id)}
      <p class="f-sub">Vínculos (${ev.length})</p><div>${viz||'<p class="vazio">—</p>'}</div>
      ${its.length?`<p class="f-sub">No arquivo (${its.length})</p><div>${lista}</div>`:''}`);
    $$('.vrow[data-item]', sheet).forEach(r=> r.addEventListener('click', ()=> abrirDetalhe(r.dataset.item)));
    $$('.vrow[data-node]', sheet).forEach(r=> r.addEventListener('click', ()=> abrirFicha(r.dataset.node)));
    ligaGrau(sheet, nid=> abrirFicha(nid));
  }
  // os botões do cartão do caminho: um nome da cadeia (abre o nome) e "outro caminho" (troca o cartão no lugar)
  function ligaGrau(raiz, noNome, aoTrocar){
    const g = raiz.querySelector('.grau'); if(!g) return;
    $$('[data-node]', g).forEach(b=> b.addEventListener('click', ()=> noNome(b.dataset.node)));
    const o = g.querySelector('.grau-outro');
    if(o) o.addEventListener('click', ()=>{
      const id = o.dataset.outro, k = +o.dataset.k||0, tmp = document.createElement('div');
      tmp.innerHTML = caminhoHTML(id, k); const novo = tmp.firstElementChild; if(!novo) return;
      g.replaceWith(novo); ligaGrau(raiz, noNome, aoTrocar);
      if(aoTrocar) aoTrocar(id, +novo.dataset.k||0);
      const b = novo.querySelector('.grau-outro'); try{ (b||novo).focus({preventScroll:true}); }catch(e){}
    });
  }
  window.__abrirFicha = abrirFicha;
  function fechar(){ overlay.classList.remove('open'); }
  overlay.addEventListener('click', e=>{ if(e.target===overlay) fechar(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && overlay.classList.contains('open')) fechar(); });
  // ---- método e transparência ----
  // autoria e licença de cada retrato (assets/fotos.js, window.BD_FOTOS_CREDITO)
  function creditos(){
    const c = window.BD_FOTOS_CREDITO; if(!c || typeof c!=='object') return '';
    const l = Object.keys(c).map(id=>c[id]).filter(x=>x && x.nome).sort((a,b)=> String(a.nome).localeCompare(String(b.nome),'pt'));
    if(!l.length) return '';
    return `<ul class="f-fontes creditos">${l.map(x=>`<li>${esc(x.nome)}: ${esc(x.autor||'autor não informado')}, ${x.licenca_url&&/^https?:\/\//.test(x.licenca_url)?`<a href="${esc(x.licenca_url)}" target="_blank" rel="noopener">${esc(x.licenca||'licença')}</a>`:esc(x.licenca||'')}${x.pagina&&/^https?:\/\//.test(x.pagina)?` · <a href="${esc(x.pagina)}" target="_blank" rel="noopener">arquivo ↗</a>`:''}</li>`).join('')}</ul>`;
  }
  function abrirMetodo(){
    abreFolha(`<p class="f-k">Método</p><h2 class="f-t">Método e transparência</h2><div class="metodo-b">
      <p>Compilação de fatos de interesse público sobre um agente público, com recorte crítico assumido. Regras fixas:</p>
      <h3>1 · Fonte e situação em tudo</h3><p>Cada registro traz a fonte e a situação jurídica literal: investigação, denúncia, processo, anulação e condenação são coisas diferentes, e cada registro diz qual é. Acusação nunca é tratada como fato provado. A denúncia da rachadinha foi anulada; no caso Master ele é investigado no STF desde julho de 2026, sem denúncia.</p>
      <h3>2 · Procedência</h3><p>Cada fonte tem um nível: fonte primária (MP, STF, STJ, TSE, Coaf, Senado), imprensa profissional, agregador, blog ou opinião. O nível aparece ao lado de cada fonte na ficha do registro.</p>
      <h3>3 · A teia de nomes é proximidade</h3><p>A teia mostra a proximidade entre o senador e os nomes do arquivo, cada um com a situação jurídica e a fonte. A cor de cada nome é a situação dele: vermelho, preso ou condenado; âmbar, investigado ou denunciado; verde, os outros. Quem o acusou, investigou ou julgou, e adversários políticos, não entram. Sem dado privado.</p>
      <h3>4 · Dados oficiais</h3><p>Patrimônio (TSE) e atuação no Senado vêm de dados abertos oficiais.</p>
      <h3>5 · Fotos</h3><p>Os retratos da teia são imagens de uso livre da Wikimedia Commons, só de pessoas com biografia pública.</p>${creditos()}
      <h3>6 · Revisão</h3><p>As fontes seguem em conferência. Cada registro leva à fonte para você conferir por conta própria.</p></div>`);
  }
  window.__abrirMetodo = abrirMetodo;

  /* ---------------- A TEIA (canvas) ---------------- */
  // Cor = situação (as 3 lanes da Foz): vermelho preso ou condenado, âmbar investigado ou denunciado, verde os outros.
  // Ele, em tinta (neutro). Nenhuma outra cor: a categoria (família, milícia…) é filtro, não cor.
  const COR = {grave:'#ff5c5c', medio:'#ffb02e', outros:'#5c8a63', ele:'#d8efdd'};
  const RGB = {grave:'255,92,92', medio:'255,176,46', outros:'92,138,99', ele:'216,239,221'};
  const corNo = n => COR[sitDe(n)];
  const usadas = new Set();   // cores de nó pintadas (window.BD_TEIA.usadas(): conferência)
  // fotos: data/assets/fotos.js (window.BD_FOTOS, baixadas no build) ou, sem ele, retratos da Wikipédia
  const WIKI = {"flavio":"Flávio Bolsonaro","jair":"Jair Bolsonaro","michelle":"Michelle Bolsonaro","eduardo":"Eduardo Bolsonaro","carlos-bolsonaro":"Carlos Bolsonaro","vorcaro":"Daniel Vorcaro","ronnie-lessa":"Ronnie Lessa","adriano":"Adriano da Nóbrega","walter-braga-netto":"Walter Braga Netto","mauro-cesar-barbosa-cid":"Mauro Cid","anderson-torres":"Anderson Torres","augusto-heleno":"Augusto Heleno","almir-garnier":"Almir Garnier Santos","alexandre-ramagem":"Alexandre Ramagem","domingos-brazao":"Domingos Brazão","chiquinho-brazao":"Chiquinho Brazão","wassef":"Frederick Wassef","ciro-nogueira":"Ciro Nogueira","tarcisio-de-freitas":"Tarcísio de Freitas","ibaneis-rocha":"Ibaneis Rocha","mario-frias":"Mário Frias","nelson-tanure":"Nelson Tanure","rivaldo-barbosa":"Rivaldo Barbosa","silvinei-vasques":"Silvinei Vasques"};
  const FOTOS = (window.BD_FOTOS && typeof window.BD_FOTOS==='object') ? window.BD_FOTOS : null;
  const temFoto = id => FOTOS ? !!FOTOS[id] : !!WIKI[id];
  const fotoURL = {};   // id -> url
  const fotoImg = {};   // id -> Image carregada
  window.__fotoURL = fotoURL;

  // caminhos de um caso na teia (drive.html?caminho=<chave>#rede). "foz" é o id do rio em data/foz.js.
  // Caso Marielle: dos 5 condenados pelo STF, dois têm ligação documentada com ele (Ronald e Peixe).
  const CAMINHOS = {
    marielle: {
      titulo: 'Caso Marielle',
      foz: 'marielle-ifop',
      ids: ['flavio','ronald-paulo-alves-pereira','robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca','domingos-brazao','chiquinho-brazao','rivaldo-barbosa'],
      arestas: [['flavio','ronald-paulo-alves-pereira'],['flavio','robson-calixto-fonseca'],['flavio','instituto-de-formacao-profissional-jose-ca'],['robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca'],['domingos-brazao','chiquinho-brazao'],['domingos-brazao','robson-calixto-fonseca'],['domingos-brazao','ronald-paulo-alves-pereira'],['domingos-brazao','rivaldo-barbosa']],
      fontesLig: [['ronald-paulo-alves-pereira','homenagem'],['robson-calixto-fonseca','emenda']],
      fontePenas: {veiculo:'Agência Brasil', url:'https://agenciabrasil.ebc.com.br/justica/noticia/2026-07/caso-marielle-moraes-determina-cumprimento-imediato-de-penas'},
      frase: '2 dos 5 condenados no caso Marielle têm ligação documentada com ele: o major Ronald, homenageado por indicação dele na Alerj em 2004, e o Peixe, que tratou com uma assessora do gabinete dele uma emenda ao Ifop, segundo a PF.',
      curta: '2 dos 5 condenados no caso Marielle têm ligação documentada com ele.',
      share: 'marielle'
    }
  };

  const Grafo = (function(){
    const canvas = $('#grafo'); const painel = $('#rede-painel');
    const box = canvas ? canvas.parentElement : null;
    const cartaoEl = $('#teia-cartao'), dicaEl = $('#teia-dica'), legendaEl = $('#legenda'), capEl = $('#teia-cap'), cheiaBt = $('#grafo-cheia');
    let ctx, W=0, H=0, dpr=1, nodes=[], edges=[], adj={}, started=false, alpha=1, raf=null;
    let sel=null, hover=null;
    let filterSet=null, filtroTitulo='', grupoAtivo=null;
    let caminho=null;   // {chave, ids:Set}: um caso em destaque (drive.html?caminho=marielle#rede)
    let inteira=false;  // desktop: a teia inteira na página (no toque, a teia inteira é a tela cheia)
    let cam={tx:0, ty:0, s:1};
    let BB={x0:-1,y0:-1,x1:1,y1:1};
    let cheia=false;
    let rotulos=[];
    let PREV=[];        // a prévia: os nomes em volta dele com mais ligações
    const PREV_N = 18;
    const RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    const TOQUE = !!(window.matchMedia && matchMedia('(pointer:coarse)').matches);
    const S_MAX = 2.4;

    // os nomes da teia sem ele (o mesmo número do menu: "152 na teia completa")
    const nomesTeia = () => nodes.filter(n=>n.id!=='flavio').length;
    const emPrevia = () => !cheia && !inteira && !sel && !filterSet && !caminho && PREV.length>0;
    // o caminho do nome selecionado até ele (graus de separação): os nomes e os pares de cada elo
    let camSel = null;   // {id, k, nos:Set, pares:[[a,b],…], c}
    function poeCam(id, k){
      const cs = id ? caminhos(id) : [];
      if(!cs.length){ camSel = null; return; }
      k = ((+k||0) % cs.length + cs.length) % cs.length; const c = cs[k];
      camSel = {id, k, c, nos:new Set(c.nos), pares:c.nos.slice(1).map((b,i)=>[c.nos[i], b])};
    }
    function activeIds(){
      if(caminho) return caminho.ids;
      if(sel){ const s=new Set([sel]); (adj[sel]||new Set()).forEach(x=>s.add(x)); if(camSel && camSel.id===sel) camSel.nos.forEach(x=>s.add(x)); return s; }
      if(filterSet) return filterSet;
      return null;
    }

    let porId = {};
    function build(){
      const g = D.grafo;
      const deg = {}; g.edges.forEach(e=>{deg[e.de]=(deg[e.de]||0)+1;deg[e.para]=(deg[e.para]||0)+1;});
      // âncora de grupo: cada grupo ganha um setor em torno do centro (ele)
      const grupos = [...new Set(g.nodes.map(n=>n.grupo).filter(x=>x && x!=='politico'))];
      const GA = {}; const R = 540;
      grupos.forEach((gr,k)=>{ const a = (k/grupos.length)*Math.PI*2 - Math.PI/2; GA[gr] = {x:Math.cos(a)*R, y:Math.sin(a)*R}; });
      nodes = g.nodes.map((n)=>{
        const an = (n.id==='flavio') ? {x:0,y:0} : (GA[n.grupo]||{x:0,y:0});
        const jx=(Math.abs(Math.sin((n.id||'x').length*12.9898))*2-1)*70;
        const jy=(Math.abs(Math.sin((n.id||'y').length*78.233))*2-1)*70;
        let rr = n.id==='flavio'?26:(9+Math.min(13,(deg[n.id]||0)*1.4));
        if(temFoto(n.id)) rr = Math.max(rr, 16);
        return Object.assign({}, n, {deg:deg[n.id]||0, ax:an.x, ay:an.y, wx:an.x+jx, wy:an.y+jy, vx:0, vy:0, r:rr, st:sitDe(n)});
      });
      const map = {}; nodes.forEach(n=>{ map[n.id]=n; }); porId = map;
      edges = g.edges.map(e=>Object.assign({}, e, {a:map[e.de], b:map[e.para]})).filter(e=>e.a&&e.b);
      adj = {}; nodes.forEach(n=>adj[n.id]=new Set());
      edges.forEach(e=>{ adj[e.de].add(e.para); adj[e.para].add(e.de); });
      const f = map['flavio']; if(f){ f.wx=0; f.wy=0; f.ax=0; f.ay=0; f.pin=true; }
      // a prévia: os PREV_N nomes ligados a ele com mais ligações na teia (desempate: foto, nome)
      PREV = [...(adj.flavio||[])].map(id=>map[id]).filter(Boolean)
        .sort((a,b)=> b.deg-a.deg || (temFoto(b.id)-temFoto(a.id)) || String(a.nome).localeCompare(String(b.nome),'pt'))
        .slice(0, PREV_N);
      if(capEl) capEl.textContent = `os ${PREV.length} com mais ligações, dos ${(adj.flavio||new Set()).size} em volta dele`;
    }
    function resize(){
      const r = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio||1; W=r.width; H=r.height;
      canvas.width=Math.round(W*dpr); canvas.height=Math.round(H*dpr); ctx=canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function step(piso){
      for(let i=0;i<nodes.length;i++){ for(let j=i+1;j<nodes.length;j++){
        const a=nodes[i],b=nodes[j]; let dx=a.wx-b.wx, dy=a.wy-b.wy; let d2=dx*dx+dy*dy||0.01; let d=Math.sqrt(d2);
        let rep=Math.min(4.5, 4600/d2); const ux=dx/d, uy=dy/d;
        a.vx+=ux*rep; a.vy+=uy*rep; b.vx-=ux*rep; b.vy-=uy*rep;
      }}
      edges.forEach(e=>{ const a=e.a,b=e.b; let dx=b.wx-a.wx, dy=b.wy-a.wy; let d=Math.sqrt(dx*dx+dy*dy)||0.01;
        const target=(a.id==='flavio'||b.id==='flavio')?150:96;
        const k=(d-target)*0.045; const ux=dx/d, uy=dy/d; a.vx+=ux*k; a.vy+=uy*k; b.vx-=ux*k; b.vy-=uy*k;
      });
      nodes.forEach(n=>{
        if(n.pin){ n.wx=0; n.wy=0; n.vx=0; n.vy=0; return; }
        n.vx += (n.ax-n.wx)*0.032 + (-n.wx)*0.0005;
        n.vy += (n.ay-n.wy)*0.032 + (-n.wy)*0.0005;
        n.vx*=0.86; n.vy*=0.86;
        n.wx+=n.vx*alpha; n.wy+=n.vy*alpha;
      });
      alpha=Math.max(piso, alpha*0.99);
    }
    // O layout assenta uma vez, antes do primeiro quadro, e para: nada se mexe sozinho depois. Só a câmera anda.
    function assenta(){
      for(let i=0;i<600;i++) step(0.04);
      for(let i=0;i<160;i++){ step(0); alpha*=0.965; }
      alpha=0;
      let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
      nodes.forEach(n=>{ n.vx=n.vy=0; x0=Math.min(x0,n.wx-n.r); x1=Math.max(x1,n.wx+n.r); y0=Math.min(y0,n.wy-n.r); y1=Math.max(y1,n.wy+n.r+16); });
      BB={x0,y0,x1,y1};
    }
    const SX = n => n.wx*cam.s + cam.tx;
    const SY = n => n.wy*cam.s + cam.ty;
    const rotulo = n => n.nome.length>22 ? n.nome.slice(0,21)+'…' : n.nome;
    const fonteRot = n => (n.id==='flavio'?'700 13px ':'600 12px ')+'system-ui, -apple-system, Roboto, sans-serif';
    const largRot = {};
    function larguraRot(n){
      if(largRot[n.id]==null && ctx){ ctx.save(); ctx.font=fonteRot(n); largRot[n.id]=ctx.measureText(rotulo(n)).width+6; ctx.restore(); }
      return largRot[n.id]||0;
    }
    function showLabel(n){
      const act = activeIds();
      if(act) return act.has(n.id) || n===hover;
      return n===hover || n.id==='flavio' || n.deg>=6 || cam.s>1.1;
    }
    // um nome: a foto (com anel na cor da situação) ou o disco na cor da situação
    function desenhaNo(n, x, y, r, foco){
      const cor = COR[n.st] || COR.outros; usadas.add(cor);
      const im=fotoImg[n.id];
      if(foco){ ctx.shadowColor=cor; ctx.shadowBlur=16; }
      if(im && im.naturalWidth){
        ctx.save(); ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.closePath(); ctx.clip();
        const sc=Math.max(2*r/im.naturalWidth, 2*r/im.naturalHeight), iw=im.naturalWidth*sc, ih=im.naturalHeight*sc;
        ctx.drawImage(im, x-iw/2, y-ih/2, iw, ih); ctx.restore();
        ctx.lineWidth = n.st==='grave' ? 3 : 2.2; ctx.strokeStyle=cor; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=cor; ctx.fill();
      }
      ctx.shadowBlur=0;
    }

    // ---- a prévia: os nomes em duas margens, as lanes descendo até ele (o desenho da bacia da Foz) ----
    const rPrev = q => q.id==='flavio' ? 28 : (fotoImg[q.id] && fotoImg[q.id].naturalWidth ? 13 : 7);
    const ORG = /^(Banco|Instituto|Fundo|Empresa)\b/;
    function nomeCurto(n){
      const s = String(n.nome||''), m = s.match(/^(.*?)\s*\(([^)]{1,24})\)\s*$/);
      if(m){ const a = m[1].trim(); return ORG.test(a) ? m[2].replace(/'/g,'') : a.split(/\s+/)[0]+' ('+m[2]+')'; }
      const w = s.split(/\s+/); if(w.length<=2) return s;
      const PART = /^(da|de|do|dos|das|e)$/i, ult = w[w.length-1], ant = w[w.length-2];
      return w[0] + ' ' + (PART.test(ant) ? ant+' ' : '') + ult;
    }
    function cabe(txt, max){
      if(ctx.measureText(txt).width <= max) return txt;
      let t = txt; while(t.length>3 && ctx.measureText(t+'…').width > max) t = t.slice(0,-1);
      return t.replace(/\s+$/,'')+'…';
    }
    function layoutPrevia(){
      const f = porId.flavio; if(!f) return;
      const lin = Math.ceil(PREV.length/2), topo = 48, baseY = H - 66;
      const passo = lin>1 ? (baseY - 60 - topo)/(lin-1) : 0;
      const cx = W/2, d0 = W<360 ? 12 : (W<520 ? 15 : 40), d1 = W<360 ? 8 : (W<520 ? 13 : Math.min(110, W*.13));
      if(capEl){ const k=(adj.flavio||new Set()).size, t = W<380 ? `os ${PREV.length} com mais ligações` : `os ${PREV.length} com mais ligações, dos ${k} em volta dele`; if(capEl.textContent!==t) capEl.textContent=t; }
      PREV.forEach((q,k)=>{
        const i = Math.floor(k/2), lado = k%2 ? 1 : -1, t = lin>1 ? 1 - i/(lin-1) : 1;
        q.px = cx + lado*(d0 + d1*t); q.py = topo + i*passo; q.lado = lado;
      });
      f.px = cx; f.py = baseY; f.lado = 0;
    }
    function drawPrevia(){
      ctx.clearRect(0,0,W,H); layoutPrevia();
      const f = porId.flavio; if(!f) return;
      const yb = f.py - rPrev(f) - 2, cx = f.px;
      // as lanes: da margem até ele, na cor da situação de quem está nela
      PREV.forEach(q=>{
        const foco = q===hover, rgb = RGB[q.st]||RGB.outros;
        const trilha = ()=>{ ctx.beginPath(); ctx.moveTo(q.px, q.py); ctx.bezierCurveTo(q.px, q.py + (yb-q.py)*0.6, cx + (q.px-cx)*0.25, yb - 22, cx, yb); };
        ctx.lineCap='round';
        trilha(); ctx.strokeStyle=`rgba(${rgb},${foco ? .22 : .1})`; ctx.lineWidth=7; ctx.stroke();
        trilha(); ctx.strokeStyle=`rgba(${rgb},${foco ? 1 : .62})`; ctx.lineWidth=foco?2.6:1.8; ctx.stroke();
      });
      const caixas = [];
      PREV.concat([f]).forEach(q=>{ desenhaNo(q, q.px, q.py, rPrev(q), q===hover); });
      ctx.lineJoin='round'; ctx.textBaseline='middle';
      PREV.forEach(q=>{
        const r = rPrev(q), x = q.px + q.lado*(r+7), max = q.lado<0 ? x-6 : W-x-6;
        ctx.font = (W<360 ? '600 11.5px ' : W<520 ? '600 12px ' : '600 13px ')+'system-ui, -apple-system, Roboto, sans-serif';
        let t = q.nome;
        if(ctx.measureText(t).width > max) t = nomeCurto(q);
        if(ctx.measureText(t).width > max){ const w = t.split(/\s+/); if(w.length>1 && !/^\(/.test(w[1])) t = w[0].charAt(0)+'. '+w.slice(1).join(' '); }
        t = cabe(t, max);
        ctx.textAlign = q.lado<0 ? 'right' : 'left';
        ctx.lineWidth=3.5; ctx.strokeStyle='rgba(5,8,5,.95)'; ctx.strokeText(t, x, q.py);
        ctx.fillStyle = q===hover ? '#ffffff' : '#d8efdd'; ctx.fillText(t, x, q.py);
        const w = ctx.measureText(t).width;
        caixas.push({x: q.lado<0 ? x-w : x, y:q.py-10, w, h:20, n:q});
      });
      ctx.font='700 14px system-ui, -apple-system, Roboto, sans-serif'; ctx.textAlign='center';
      const ty = f.py + rPrev(f) + 14;
      ctx.lineWidth=3.5; ctx.strokeStyle='rgba(5,8,5,.95)'; ctx.strokeText(f.nome, cx, ty); ctx.fillStyle='#d8efdd'; ctx.fillText(f.nome, cx, ty);
      const wf = ctx.measureText(f.nome).width; caixas.push({x:cx-wf/2, y:ty-10, w:wf, h:20, n:f});
      ctx.textBaseline='alphabetic';
      rotulos = caixas;
    }

    function draw(){
      if(emPrevia()){ drawPrevia(); return; }
      ctx.clearRect(0,0,W,H);
      const act = activeIds();
      edges.forEach(e=>{
        let on = false;
        if(caminho){
          // só as arestas entre nomes do caso, em tinta (a cor de situação fica em cada nome)
          const cm = caminho.arestas ? caminho.arestas.some(p => (p[0]===e.de && p[1]===e.para) || (p[1]===e.de && p[0]===e.para)) : (caminho.ids.has(e.de) && caminho.ids.has(e.para));
          ctx.strokeStyle = cm ? 'rgba(216,239,221,.9)' : 'rgba(216,239,221,.04)';
          ctx.lineWidth = cm ? 2 : 0.8;
          ctx.beginPath(); ctx.moveTo(SX(e.a),SY(e.a)); ctx.lineTo(SX(e.b),SY(e.b)); ctx.stroke();
          return;
        }
        if(sel) on = (e.de===sel||e.para===sel);
        else if(filterSet) on = filterSet.has(e.de) && filterSet.has(e.para);
        if(hover && (e.de===hover.id||e.para===hover.id)) on = true;
        ctx.strokeStyle = on ? 'rgba(216,239,221,.8)' : (act?'rgba(216,239,221,.04)':'rgba(216,239,221,.1)');
        ctx.lineWidth = on?1.6:0.8;
        ctx.beginPath(); ctx.moveTo(SX(e.a),SY(e.a)); ctx.lineTo(SX(e.b),SY(e.b)); ctx.stroke();
      });
      // o caminho até ele (graus de separação): os elos por cima, mais grossos, em tinta
      if(sel && camSel && camSel.id===sel){
        ctx.lineCap='round';
        camSel.pares.forEach(([a,b])=>{ const A=porId[a], B=porId[b]; if(!A||!B) return;
          ctx.beginPath(); ctx.moveTo(SX(A),SY(A)); ctx.lineTo(SX(B),SY(B));
          ctx.strokeStyle='rgba(216,239,221,.16)'; ctx.lineWidth=9; ctx.stroke();
          ctx.beginPath(); ctx.moveTo(SX(A),SY(A)); ctx.lineTo(SX(B),SY(B));
          ctx.strokeStyle='rgba(238,243,238,.95)'; ctx.lineWidth=3; ctx.stroke(); });
      }
      ctx.textAlign='center'; ctx.lineJoin='round';
      const caixas=[];
      const livre=(x,y,w,h)=>{ for(const c of caixas){ if(x<c.x+c.w && x+w>c.x && y<c.y+c.h && y+h>c.y) return false; } return true; };
      const ordem=[...nodes].sort((a,b)=>(b.id===sel)-(a.id===sel) || (b===hover)-(a===hover) || (b.id==='flavio')-(a.id==='flavio') || b.deg-a.deg);
      nodes.forEach(n=>{
        const x=SX(n), y=SY(n), r=Math.max(4, n.r*cam.s);
        if(x+r+60<0 || x-r-60>W || y+r+30<0 || y-r-30>H) return;
        const near = act ? act.has(n.id) : true;
        const ring = (n.id===sel) || (n===hover) || (filterSet && filterSet.has(n.id)) || (caminho && caminho.ids.has(n.id)) || (sel && camSel && camSel.id===sel && camSel.nos.has(n.id));
        ctx.globalAlpha = near?1:(caminho?0.1:0.16);
        desenhaNo(n, x, y, r, ring);
        if(ring){ ctx.lineWidth=2; ctx.strokeStyle='#d8efdd'; ctx.beginPath(); ctx.arc(x,y,r+3,0,Math.PI*2); ctx.stroke(); }
        ctx.globalAlpha=1;
      });
      const discos = act ? nodes.filter(q=>act.has(q.id)).map(q=>({q, x:SX(q), y:SY(q), r:Math.max(4, q.r*cam.s)})) : null;
      const cobre = (n,x,y,w,h) => !!discos && discos.some(d=> d.q!==n && d.x+d.r>x && d.x-d.r<x+w && d.y+d.r>y && d.y-d.r<y+h);
      ordem.forEach(n=>{
        if(!showLabel(n)) return;
        const near = act ? act.has(n.id) : true;
        const x=SX(n), y=SY(n), r=Math.max(4, n.r*cam.s);
        if(x<-120 || x>W+120 || y<-40 || y>H+40) return;
        const lab = rotulo(n);
        ctx.font=fonteRot(n);
        const w=larguraRot(n), h=15, lx=x-w/2;
        const pos = act ? [y+r+2, y-r-2-h] : [y+r+2];
        let ly = pos.find(p=> livre(lx,p,w,h) && !cobre(n,lx,p,w,h));
        if(ly===undefined) ly = pos.find(p=> livre(lx,p,w,h));
        if(ly===undefined) return;
        caixas.push({x:lx, y:ly, w, h, n});
        ctx.globalAlpha = near?1:0.18;
        ctx.lineWidth=3.5; ctx.strokeStyle='rgba(5,8,5,.95)'; ctx.strokeText(lab, x, ly+10);
        ctx.fillStyle = near?'#eef3ee':'#aab0a8'; ctx.fillText(lab, x, ly+10);
        ctx.globalAlpha=1;
      });
      rotulos = caixas;
    }

    // ---- desenho sob demanda: só pinta quando algo muda ----
    let fora=false, tween=null;
    function pede(){ if(!raf && started && !fora) raf=requestAnimationFrame(quadro); }
    function quadro(){
      raf=null; if(!canvas.offsetParent) return;
      const anda = passoTween(); draw();
      if(box) box.classList.toggle('previa', emPrevia());
      rotuloCheia();
      if(anda) pede();
    }
    if(canvas && 'IntersectionObserver' in window) new IntersectionObserver(es=>{ fora=!es[es.length-1].isIntersecting; if(!fora) pede(); }).observe(canvas);
    function rotuloCheia(){
      if(!cheiaBt) return;
      const volta = !TOQUE && !emPrevia();
      const t = volta ? `voltar aos ${PREV.length} nomes com mais ligações` : `abrir a teia inteira · ${nomesTeia()} nomes`;
      if(cheiaBt.textContent!==t) cheiaBt.textContent = t;
      cheiaBt.dataset.volta = volta ? '1' : '';
    }

    // ---- câmera: limites, enquadramento e animação ----
    function areaLivre(){
      const r = canvas.getBoundingClientRect(); let x0=0, x1=W, y0=0, y1=H;
      [legendaEl, cartaoEl, $('#grafo-fechar'), cheiaBt].forEach(el=>{
        if(!el || el.hidden || !el.offsetParent) return;
        const b = el.getBoundingClientRect();
        if(!b.height || b.bottom<=r.top || b.top>=r.bottom || b.right<=r.left || b.left>=r.right) return;
        const op = [['t',(b.bottom-r.top)/H, b.top-r.top], ['b',(r.bottom-b.top)/H, r.bottom-b.bottom],
                    ['l',(b.right-r.left)/W, b.left-r.left], ['r',(r.right-b.left)/W, r.right-b.right]]
          .filter(o=>o[2]<24).sort((p,q)=>p[1]-q[1]);
        const lado = op.length ? op[0][0] : ((b.top+b.bottom)/2 - r.top < H/2 ? 't' : 'b');
        if(lado==='t') y0 = Math.max(y0, b.bottom-r.top+4);
        else if(lado==='b') y1 = Math.min(y1, b.top-r.top-4);
        else if(lado==='l') x0 = Math.max(x0, b.right-r.left+4);
        else x1 = Math.min(x1, b.left-r.left-4);
      });
      if(y1-y0 < H*0.35){ y0=0; y1=H; }
      if(x1-x0 < W*0.4){ x0=0; x1=W; }
      return {x0, y0, x1, y1};
    }
    function camPara(ids, o){
      o = o||{};
      const lista = ids ? nodes.filter(n=>ids.has(n.id)) : nodes;
      if(!lista.length) return Object.assign({}, cam);
      let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
      lista.forEach(n=>{ x0=Math.min(x0,n.wx-n.r); x1=Math.max(x1,n.wx+n.r); y0=Math.min(y0,n.wy-n.r); y1=Math.max(y1,n.wy+n.r+18); });
      const A=areaLivre(), px=o.padX!=null?o.padX:30, py=o.padY!=null?o.padY:24;
      const aw=Math.max(40, A.x1-A.x0-2*px), ah=Math.max(40, A.y1-A.y0-2*py);
      let s=Math.min(o.sMax||1.6, aw/(x1-x0||1), ah/(y1-y0||1)), ex=[x0*s, x1*s];
      if(o.rot){
        const ext = s => { let a=1e9, b=-1e9; lista.forEach(n=>{ const e=Math.max(n.r*s, larguraRot(n)/2); a=Math.min(a, n.wx*s-e); b=Math.max(b, n.wx*s+e); }); return [a,b]; };
        const cabeS = s => { const [a,b]=ext(s); return b-a<=aw; };
        if(!cabeS(s) && cabeS(s*0.35)){ let lo=s*0.35, hi=s; for(let i=0;i<18;i++){ const m=(lo+hi)/2; if(cabeS(m)) lo=m; else hi=m; } s=lo; }
        ex = ext(s);
      }
      return {s, tx:(A.x0+A.x1)/2-(ex[0]+ex[1])/2, ty:(A.y0+A.y1)/2-(y0+y1)/2*s};
    }
    let sFit=0.3;
    const sMin = () => Math.min(sFit*0.9, 0.9);
    function limita(c){
      const s=Math.max(sMin(), Math.min(S_MAX, c.s)), cx=W/2, cy=H/2;
      const bx=(BB.x0+BB.x1)/2, by=(BB.y0+BB.y1)/2, rx=(BB.x1-BB.x0)/2+0.15*W/s, ry=(BB.y1-BB.y0)/2+0.15*H/s;
      let wx=(cx-c.tx)/s, wy=(cy-c.ty)/s; const k=Math.hypot((wx-bx)/rx, (wy-by)/ry);
      if(k>1){ wx=bx+(wx-bx)/k; wy=by+(wy-by)/k; }
      let tx=cx-wx*s, ty=cy-wy*s;
      const q = 0.15 + 0.30*Math.max(0, Math.min(1, (s/sFit-1)/0.5));
      if(q<0.45){
        const A=areaLivre();
        const eixo = (lo, hi, a0, a1, t) => {
          const p=q*(a1-a0), e0=lo*s+t-p, e1=hi*s+t+p;
          if(e1-e0 <= a1-a0) return t + ((a0+a1)-(e0+e1))/2;
          if(e0>a0) return t-(e0-a0);
          if(e1<a1) return t+(a1-e1);
          return t;
        };
        tx = eixo(BB.x0, BB.x1, A.x0, A.x1, tx); ty = eixo(BB.y0, BB.y1, A.y0, A.y1, ty);
      }
      return {s, tx, ty};
    }
    function anima(para, dur){
      para = limita(para);
      if(RM || dur===0 || !W){ tween=null; cam=para; pede(); return; }
      tween = {de:Object.assign({}, cam), para, t0:performance.now(), dur:dur||320}; pede();
    }
    function passoTween(){
      if(!tween) return false;
      const k=Math.max(0, Math.min(1,(performance.now()-tween.t0)/tween.dur)), e=1-Math.pow(1-k,3), a=tween.de, b=tween.para;
      cam={s:a.s+(b.s-a.s)*e, tx:a.tx+(b.tx-a.tx)*e, ty:a.ty+(b.ty-a.ty)*e};
      if(k>=1){ cam=Object.assign({}, b); tween=null; return false; }
      return true;
    }
    const zoomEm = (c,f,mx,my) => { const ns=Math.max(sMin(), Math.min(S_MAX, c.s*f)); return {s:ns, tx:mx-(mx-c.tx)*(ns/c.s), ty:my-(my-c.ty)*(ns/c.s)}; };
    function zoomBotao(f){
      const A=areaLivre(), c=tween?tween.para:cam, n=sel&&porId[sel];
      let mx=(A.x0+A.x1)/2, my=(A.y0+A.y1)/2;
      if(n){ const x=n.wx*c.s+c.tx, y=n.wy*c.s+c.ty; if(x>=A.x0 && x<=A.x1 && y>=A.y0 && y<=A.y1){ mx=x; my=y; } }
      anima(zoomEm(c, f, mx, my), 220);
    }
    function fitView(anim){
      if(!nodes.length || !W) return;
      const c = camPara(null, {padX: W<600?14:30, padY: W<600?14:24});
      sFit = c.s;
      // no celular, a teia na página começa mais perto, com ele no centro
      if(!cheia && W<600){ const f=porId.flavio; if(f){ c.s=Math.max(c.s*1.5, .7); c.tx=W/2-f.wx*c.s; c.ty=H/2-f.wy*c.s; } }
      if(anim) anima(c); else { tween=null; cam=limita(c); pede(); }
    }
    // mostra um nome e os vizinhos dele (de uma lista, da busca ou de um link: enquadra a vizinhança)
    function mostra(id, deLista, semAnim){
      const n = porId[id]; if(!n || !W) return;
      const A = areaLivre(), cx=(A.x0+A.x1)/2, cy=(A.y0+A.y1)/2;
      const viz = new Set([id]); (adj[id]||new Set()).forEach(x=>viz.add(x));
      if(camSel && camSel.id===id) camSel.nos.forEach(x=>viz.add(x));   // o caminho até ele entra no quadro
      if(deLista){
        let c = camPara(viz, {sMax:1.4, padX:16, padY:30, rot:true});
        if(c.s < 0.5){ const s=Math.max(cam.s, 0.8); c={s, tx:cx-n.wx*s, ty:cy-n.wy*s}; }
        anima(c, semAnim?0:undefined); return;
      }
      const m=24, vis = q => { const x=SX(q), y=SY(q); return x>=A.x0+m && x<=A.x1-m && y>=A.y0+m && y<=A.y1-m; };
      if([...viz].every(k=>porId[k] && vis(porId[k]))) return;
      const c = camPara(viz, {padX:16, padY:24, rot:true});
      if(c.s >= cam.s){ const bx=(cx-c.tx)/c.s, by=(cy-c.ty)/c.s; anima({s:cam.s, tx:cx-bx*cam.s, ty:cy-by*cam.s}); return; }
      if(Math.hypot(SX(n)-cx, SY(n)-cy) > 40) anima({s:cam.s, tx:cam.tx+(cx-SX(n)), ty:cam.ty+(cy-SY(n))});
    }

    // ---- o painel: a teia inteira em números (lista literal ao tocar) ----
    const vrowNome = n => `<div class="vrow" data-node="${esc(n.id)}"><b>${esc(n.nome)}</b>${n.papel?`<br>${esc(n.papel)}`:''}</div>`;
    function ligaPainel(){
      const b=$('#ov-back', painel); if(b) b.addEventListener('click', ()=>{ inteira=false; showOverview(); });
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
      $$('.vrow[data-item]', painel).forEach(r=> r.addEventListener('click', ()=>abrirDetalhe(r.dataset.item)));
    }
    function marcaGrupo(){ $$('.teia-grupos button[data-grupo]').forEach(b=> b.setAttribute('aria-pressed', b.dataset.grupo===grupoAtivo ? 'true' : 'false')); }
    // o painel de entrada: a teia inteira em graus de separação (quantos elos até ele), cada linha abre a lista
    const GRAUS = [[1,'1 elo','ligados diretamente a ele'],[2,'2 elos','ligados a alguém ligado a ele'],[3,'3 elos',''],[4,'4 elos ou mais','']];
    const noGrau = (n,g) => { const d = GRAU.dist[n.id]; return n.id!=='flavio' && d!=null && (g===4 ? d>=4 : d===g); };
    function showOverview(){
      sairCaminho(); sel=null; camSel=null; filterSet=null; filtroTitulo=''; grupoAtivo=null; marcaGrupo();
      const rows = GRAUS.map(([g,rot,t])=>({g, rot, t, n: nodes.filter(n=>noGrau(n,g)).length})).filter(r=>r.n);
      painel.innerHTML = `<p class="kx">A teia inteira <span>· ${nomesTeia()} nomes</span></p>
        <p class="gr-t">Quantos elos separam cada nome dele:</p>
        <div class="sit-lista">${rows.map(r=>`<button type="button" class="sit" data-grau="${r.g}"><b>${r.n}</b> a ${esc(r.rot)}${r.t?`<i>${esc(r.t)}</i>`:''}<span>→</span></button>`).join('')}</div>
        <p class="ph">Toque num nome, no mapa ou numa lista: aparece o caminho mais curto até ele, elo por elo, com a situação de cada nome e a fonte de cada ligação.</p>`;
      $$('.sit[data-grau]', painel).forEach(b=> b.addEventListener('click', ()=>showGrau(+b.dataset.grau)));
      cartao(); pede();
    }
    function mostraLista(ids, titulo, linha, ordem){
      sairCaminho(); sel=null; camSel=null;
      const membros = nodes.filter(n=>ids.has(n.id));
      if(ordem) membros.sort(ordem);
      filterSet = new Set(membros.map(n=>n.id)); filtroTitulo=titulo;
      painel.innerHTML = `<button type="button" class="vt" id="ov-back">← a teia</button>
        <h3>${esc(titulo)} <span class="man-f">(${membros.length})</span></h3>
        <div class="vlist">${membros.map(linha||vrowNome).join('')||'<p class="ph">—</p>'}</div>`;
      ligaPainel(); cartao(); enquadraFiltro(); pede();
    }
    function showGrau(g){
      const r = GRAUS.find(x=>x[0]===g); if(!r){ showOverview(); return; }
      grupoAtivo=null; marcaGrupo();
      const rk = {grave:0, medio:1, outros:2};
      mostraLista(new Set(nodes.filter(n=>noGrau(n,g)).map(n=>n.id)), 'Nomes a '+r[1]+' dele',
        n=>`<div class="vrow" data-node="${esc(n.id)}"><b>${esc(n.nome)}</b> ${situacaoChips(n.id, n.situacao)}${n.papel?`<br>${esc(n.papel)}`:''}</div>`,
        (a,b)=> rk[a.st]-rk[b.st] || String(a.nome).localeCompare(String(b.nome),'pt'));
    }
    // a lista literal de uma linha do placar (nome, situação, fonte), acesa no mapa
    function showSit(ids, titulo){
      grupoAtivo=null; marcaGrupo();
      mostraLista(new Set(ids), titulo, n=>`<div class="vrow" data-node="${esc(n.id)}"><b>${esc(n.nome)}</b> ${situacaoChips(n.id, n.situacao)}<br>${esc(n.status||'')}${sitFonte(n)}</div>`);
    }
    function enquadraFiltro(){ if(filterSet && filterSet.size && filterSet.size<=40 && W){ const c=camPara(filterSet, {sMax:1.4, padX:16, padY:24, rot:true}); if(c.s>=sMin()) anima(c); } }
    function showGrupo(g){
      if(grupoAtivo===g){ showOverview(); return; }
      const membros = nodes.filter(n=>n.grupo===g); if(!membros.length) return;
      grupoAtivo = g; marcaGrupo();
      mostraLista(new Set(membros.map(n=>n.id)), GRUPO_LABEL[g]||g);
      grupoAtivo = g; marcaGrupo();
    }
    function doSearch(q){
      q = norm(q).trim();
      if(q.length<2){ showOverview(); return; }
      const m = nodes.filter(n=> norm(n.nome).includes(q));
      sairCaminho(); sel=null; filterSet=new Set(m.map(n=>n.id)); filtroTitulo='busca: '+q; grupoAtivo=null; marcaGrupo();
      if(m.length===1) mostra(m[0].id, true);
      else if(m.length && m.length<=12){ const c=camPara(filterSet, {sMax:1.3, padX:16, padY:30, rot:true}); if(c.s>=sMin()) anima(c); }
      painel.innerHTML = `<p class="kx">Busca <span>· ${m.length} ${m.length===1?'nome':'nomes'}</span></p>
        <div class="vlist">${m.map(vrowNome).join('')||'<p class="ph">Nenhum nome com essas letras na teia.</p>'}</div>`;
      ligaPainel(); cartao(); pede();
    }
    function painelPessoa(id){
      const n = nodeById[id]; if(!n){ showOverview(); return; }
      const ev = edges.filter(e=>e.de===id||e.para===id);
      const viz = ev.map(e=>{
        const o=e.de===id?e.para:e.de; const on=nodeById[o];
        return `<div class="vrow" data-node="${esc(o)}"><b>${esc(on?on.nome:o)}</b> — ${esc(e.rotulo||'')}${edgeSt(e)}${(e.fontes||[]).length?`<br><span class="src">${fontesCurtas(e.fontes)}</span>`:''}</div>`;
      }).join('');
      const its = itensDaPessoa(id).sort(porDataDesc);
      const lista = its.map(i=>`<div class="vrow" data-item="${esc(i.id)}"><b>${esc(sc(tit(i.titulo)))}</b> <span class="src">${esc(fmtData(i.data))}</span></div>`).join('');
      const chips = situacaoChips(id, n.situacao);
      painel.innerHTML = `<button type="button" class="vt" id="ov-back">← a teia</button>
        <h3>${esc(n.nome)}</h3>${n.papel?`<p class="papel">${esc(n.papel)}</p>`:''}
        ${(chips||n.status)?`<div class="p-sit">${chips?`<div>${chips}</div>`:''}${n.status?esc(n.status):''}${sitFonte(n)}</div>`:''}
        ${camSel && camSel.id===id ? caminhoHTML(id, camSel.k) : ''}
        <div class="pa"><button type="button" class="sec" id="ov-ficha">ficha completa</button>${zapLink(id)}</div>
        ${fozHTML(id)}
        <div class="vlist"><p class="vlbl">Vínculos (${ev.length})</p>${viz||'<p class="ph">—</p>'}</div>
        ${its.length?`<div class="vlist"><p class="vlbl">No arquivo (${its.length})</p>${lista}</div>`:''}`;
      ligaPainel();
      ligaGrau(painel, nid=> select(nid, true), (cid, k)=>{ poeCam(cid, k); cartao(); mostra(cid); pede(); });
      $('#ov-ficha', painel).addEventListener('click', ()=> abreFicha(id));
    }
    function select(id, deLista){
      if(!nodeById[id]) return;
      const daPrevia = emPrevia();
      sairCaminho(); filterSet=null; filtroTitulo=''; grupoAtivo=null; marcaGrupo(); sel=id; hover=null; poeCam(id, 0);
      painelPessoa(id); cartao(); mostra(id, deLista || daPrevia, daPrevia); pede();
    }
    // ---- caminho de um caso: acende só os nomes e as arestas do caso ----
    function sairCaminho(){
      if(!caminho) return;
      caminho=null;
      const b=$('#caminho-marielle'); if(b) b.setAttribute('aria-pressed','false');
      const nota=$('#caminho-nota'); if(nota) nota.hidden=true;
      try{ const u=new URL(location.href); if(u.searchParams.has('caminho')){ u.searchParams.delete('caminho'); history.replaceState(history.state, '', u.pathname+u.search+u.hash); } }catch(e){}
    }
    function showCaminho(chave){
      const C = CAMINHOS[chave]; if(!C) return;
      const daPrevia = emPrevia();
      const ids = new Set(C.ids.filter(id=>porId[id]));
      sel=null; filterSet=null; filtroTitulo=''; hover=null; grupoAtivo=null; marcaGrupo();
      caminho = {chave, ids, arestas: C.arestas};
      const b=$('#caminho-marielle'); if(b) b.setAttribute('aria-pressed','true');
      try{ const u=new URL(location.href); u.searchParams.delete('p'); u.searchParams.set('caminho', chave); u.hash='rede'; history.replaceState(history.state, '', u.pathname+u.search+u.hash); }catch(e){}
      const e = escById[C.foz] || {};
      const nf = C.fontePenas && /^https?:\/\//.test(C.fontePenas.url||'') ? C.fontePenas : null;
      const fl = (C.fontesLig||[]).map(([id,rot])=>{ const l=(e.cadeia||[]).find(x=>x.de_id===id && x.fonte && /^https?:\/\//.test(x.fonte.url||'')); return l ? {rot, f:l.fonte} : null; }).filter(Boolean);
      const fA = f => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')} ↗</a>`;
      const rows = C.ids.filter(id=>id!=='flavio' && nodeById[id]).map(id=> vrowNome(nodeById[id])).join('');
      painel.innerHTML = `<button type="button" class="vt" id="ov-back">← a teia</button>
        <h3>${esc(C.titulo)}</h3>
        <p class="cm-t">${esc(C.frase)}</p>
        <div class="cm-a">${C.share?`<button type="button" class="env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<a class="cm-foz" href="foz.html#${esc(C.foz)}">elo por elo, na Foz →</a></div>
        ${nf||fl.length?`<p class="cm-f">${[nf?'penas, '+fA(nf):''].concat(fl.map(x=>x.rot+', '+fA(x.f))).filter(Boolean).join(' · ')}</p>`:''}
        <div class="vlist"><p class="vlbl">Nomes do caso (${ids.size-1})</p>${rows}</div>`;
      ligaPainel();
      $('#ov-back', painel).addEventListener('click', ()=>{ fitView(true); });
      // no celular o painel fica abaixo do mapa: uma nota curta acima dele
      const nota=$('#caminho-nota');
      if(nota){
        nota.innerHTML = `<b>${esc(C.titulo)}.</b> ${esc(C.curta)} <span class="cn-a">${C.share?`<button type="button" class="env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<button type="button" class="lm cn-mais">as ligações ↓</button></span>`;
        nota.hidden=false;
        nota.querySelector('.cn-mais').addEventListener('click', ()=> painel.scrollIntoView({behavior:'smooth', block:'start'}));
      }
      cartao();
      if(W){ const c=camPara(ids, {sMax:1.6, padX:16, padY:30, rot:true}); anima(c, (started && !daPrevia)?320:0); }
      pede();
    }

    // ---- ficha: abre por cima; o "voltar" do celular fecha a ficha, não sai do site ----
    let fichaNossa=false;
    function empurra(extra){
      try{
        history.replaceState(Object.assign({}, history.state, {y:window.scrollY}), '');
        history.pushState(Object.assign({}, history.state, extra, {y:window.scrollY}), '', location.href);
      }catch(e){}
    }
    function abreFicha(id){ empurra({ficha:1}); fichaNossa=true; window.__abrirFicha(id); }

    // ---- cartão (só em tela cheia): quem foi tocado, sem cobrir o nome ----
    function cartao(){
      if(!cartaoEl) return;
      if(!cheia){ cartaoEl.hidden=true; return; }
      let h='';
      if(sel && nodeById[sel]){
        const n=nodeById[sel], nv=(adj[sel]||new Set()).size, chips=situacaoChips(sel, n.situacao);
        // o caminho até ele, numa linha (o cartão inteiro está no painel e na ficha)
        let cam = '', envCam = '';
        if(camSel && camSel.id===sel){
          const c = camSel.c, el = c.ars.length;
          cam = `<p class="tc-cam"><b>${el} ${el===1?'elo':'elos'} até ele:</b> ${c.nos.map(x=> esc(nodeById[x] ? nodeById[x].nome : x)).join(' → ')}</p>`;
          const T = window.BD_TOPICOS || {}, k = extra('cam:'+sel+':'+camSel.k, {texto:textoCaminho(c), url:BASE+'drive.html?p='+encodeURIComponent(sel)+'#rede'});
          envCam = `<button type="button" class="env" data-share="${esc(T['caminho-'+sel] ? 'caminho-'+sel : 'quem-anda')}" data-x="${esc(k)}">enviar ↗</button>`;
        }
        h = `<div class="tc-top"><b class="tc-nome">${esc(n.nome)}</b><button type="button" class="tc-x" aria-label="limpar seleção">×</button></div>
          ${n.papel?`<p class="tc-papel">${esc(n.papel)}</p>`:''}
          ${(chips||n.status)?`<p class="tc-sit">${chips?chips+' ':''}${esc(n.status||'')}${sitFonte(n)}</p>`:''}
          ${cam}
          <div class="tc-a">${envCam}<button type="button" class="sec tc-ficha">ficha completa</button>${zapLink(sel)}<span class="tc-viz">${nv} ${nv===1?'vínculo aceso':'vínculos acesos'} no mapa</span></div>`;
      } else if(caminho){
        const C=CAMINHOS[caminho.chave]||{};
        h = `<div class="tc-top"><b class="tc-nome">${esc(C.titulo||'')}</b><button type="button" class="tc-x" aria-label="sair do caminho">×</button></div>
          <p class="tc-papel">${esc(C.curta||'')}</p>
          <div class="tc-a">${C.share?`<button type="button" class="env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<a class="tc-foz" href="foz.html#${esc(C.foz||'')}">elo por elo, na Foz →</a></div>`;
      } else if(filterSet){
        h = `<div class="tc-top"><b class="tc-nome">${esc(filtroTitulo||'filtro')} <span class="tc-n">(${filterSet.size})</span></b><button type="button" class="tc-x" aria-label="limpar filtro">×</button></div>
          <p class="tc-papel">Toque num nome aceso.</p>`;
      }
      cartaoEl.innerHTML = h; cartaoEl.hidden = !h;
      if(!h) return;
      const x=cartaoEl.querySelector('.tc-x'); if(x) x.addEventListener('click', ()=>{ showOverview(); });
      const f=cartaoEl.querySelector('.tc-ficha'); if(f) f.addEventListener('click', ()=> abreFicha(sel));
    }

    // ---- tela cheia (toque): um dedo move, pinça dá zoom, toque abre a pessoa ----
    let marcador=null, focoVolta=null;
    function centroMundo(){ return {wx:(W/2-cam.tx)/cam.s, wy:(H/2-cam.ty)/cam.s}; }
    function abreCheia(id, teclado){
      if(cheia || !box) return;
      const c0 = W ? centroMundo() : null;
      empurra({teia:1});
      marcador = document.createElement('div'); marcador.className='teia-lugar';
      marcador.style.height = box.offsetHeight+'px'; box.parentNode.insertBefore(marcador, box);
      cheia=true; box.classList.add('tela-cheia'); document.documentElement.classList.add('teia-cheia');
      resize(); sFit = camPara(null, {padX:14, padY:14}).s;
      if(c0){ tween=null; cam=limita({s:cam.s, tx:W/2-c0.wx*cam.s, ty:H/2-c0.wy*cam.s}); }
      if(id) select(id, true);
      else {
        cartao();
        const alvo = caminho ? caminho.ids : (filterSet && filterSet.size<=20 ? filterSet : null);
        if(alvo && alvo.size) anima(camPara(alvo, {sMax:1.6, padX:16, padY:30, rot:true}), 0);
        else fitView();
        pede();
      }
      focoVolta = teclado ? document.activeElement : null;
      if(teclado){ const x=$('#grafo-fechar'); if(x) try{ x.focus({preventScroll:true}); }catch(e){} }
    }
    function fechaCheia(){
      if(!cheia) return;
      const c0 = centroMundo();
      cheia=false; box.classList.remove('tela-cheia'); document.documentElement.classList.remove('teia-cheia');
      if(marcador){ marcador.remove(); marcador=null; }
      cartao(); resize(); sFit = camPara(null, {padX:14, padY:14}).s;
      const n = sel && porId[sel], w = n ? {wx:n.wx, wy:n.wy} : c0;
      tween=null; cam=limita({s:cam.s, tx:W/2-w.wx*cam.s, ty:H/2-w.wy*cam.s}); pede();
      if(focoVolta && focoVolta.isConnected) try{ focoVolta.focus({preventScroll:true}); }catch(e){}
      focoVolta=null;
    }
    function pedeFechar(){ if(history.state && history.state.teia && !history.state.ficha) history.back(); else fechaCheia(); }
    // desktop: a teia inteira na página (sai da prévia), ou de volta à prévia
    function entraInteira(){ if(inteira) return; inteira=true; fitView(); pede(); }

    let dicaT=null;
    const MAC = /Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||'');
    function dica(){
      if(!dicaEl) return;
      dicaEl.textContent = (MAC?'⌘':'Ctrl')+' + roda para aproximar';
      dicaEl.classList.add('on'); clearTimeout(dicaT); dicaT=setTimeout(()=>dicaEl.classList.remove('on'), 1300);
    }

    // o toque vale no círculo, no rótulo pintado ou perto do nome (folga maior no dedo)
    function nodeAt(mx,my,folga){
      if(emPrevia()){
        let best=null, bd=1e9;
        PREV.concat([porId.flavio]).forEach(q=>{ if(!q) return; const d=Math.hypot(mx-q.px, my-q.py); if(d<=rPrev(q)+folga && d<bd){ bd=d; best=q; } });
        if(best) return best;
        for(const c of rotulos){ if(mx>=c.x-4 && mx<=c.x+c.w+4 && my>=c.y-3 && my<=c.y+c.h+3) return c.n; }
        return null;
      }
      const act = activeIds(); let best=null, bd=1e9;
      const nomeado = new Set(rotulos.map(c=>c.n.id));
      for(const n of nodes){ if(!(act && act.has(n.id)) && !nomeado.has(n.id)) continue; const d=Math.hypot(mx-SX(n), my-SY(n)); if(d<=Math.max(4,n.r*cam.s) && d<bd){ bd=d; best=n; } }
      if(best) return best; bd=1e9;
      for(let i=rotulos.length-1;i>=0;i--){ const c=rotulos[i]; if(mx>=c.x && mx<=c.x+c.w && my>=c.y-2 && my<=c.y+c.h+2) return c.n; }
      for(const n of nodes){
        const r=Math.max(4,n.r*cam.s), d=Math.hypot(mx-SX(n), my-SY(n));
        let s2 = d<=r ? d-r-1000 : d-r;
        if(act && act.has(n.id) && d>r) s2 -= 6;
        if(s2<=folga && s2<bd){ bd=s2; best=n; }
      }
      return best;
    }

    function bind(){
      // Pointer Events cobrem mouse e toque. No toque, a teia na página é uma prévia:
      // o dedo rola a página por cima dela e um toque abre a tela cheia (no nome tocado).
      const pts = new Map(); let pinch=null, panning=false, last=null, downPos=null, moved=0, ativo=false, tipo='', limpaT=null;
      const toque = e => e.pointerType==='touch' || e.pointerType==='pen';
      const pos = e => { const r=canvas.getBoundingClientRect(); return {mx:e.clientX-r.left, my:e.clientY-r.top}; };
      canvas.addEventListener('pointerdown', e=>{
        tween=null; tipo=e.pointerType; clearTimeout(limpaT);
        if(toque(e) && !cheia){ const p=pos(e); downPos=p; last=p; moved=0; return; }
        if(e.pointerType==='mouse' && e.button!==0) return;
        if(emPrevia()){ downPos=pos(e); last=downPos; moved=0; panning=false; return; }   // na prévia não se arrasta
        try{ canvas.setPointerCapture(e.pointerId); }catch(_){}
        pts.set(e.pointerId, pos(e));
        if(pts.size===2){
          const [a,b]=[...pts.values()], mx=(a.mx+b.mx)/2, my=(a.my+b.my)/2;
          pinch={d:Math.hypot(a.mx-b.mx,a.my-b.my)||1, s:cam.s, wx:(mx-cam.tx)/cam.s, wy:(my-cam.ty)/cam.s};
          panning=false; downPos=null; return;
        }
        if(pts.size>2) return;
        const p=pos(e); downPos=p; last=p; moved=0; panning=true;
      });
      canvas.addEventListener('pointermove', e=>{
        const p=pos(e);
        if(toque(e) && !cheia){ if(last){ moved+=Math.abs(p.mx-last.mx)+Math.abs(p.my-last.my); last=p; } return; }
        if(pts.has(e.pointerId)) pts.set(e.pointerId, p);
        if(pinch && pts.size>=2){
          const [a,b]=[...pts.values()], d=Math.hypot(a.mx-b.mx,a.my-b.my), mx=(a.mx+b.mx)/2, my=(a.my+b.my)/2;
          const ns=Math.max(sMin(), Math.min(S_MAX, pinch.s*d/pinch.d));
          cam=limita({s:ns, tx:mx-pinch.wx*ns, ty:my-pinch.wy*ns}); moved=99; pede(); return;
        }
        if(panning && last && pts.has(e.pointerId)){
          const dx=p.mx-last.mx, dy=p.my-last.my; moved+=Math.abs(dx)+Math.abs(dy); last=p;
          if(moved>6){ cam=limita({s:cam.s, tx:cam.tx+dx, ty:cam.ty+dy}); box.classList.add('arrastando'); if(e.pointerType==='mouse') ativo=true; pede(); }
          return;
        }
        if(e.pointerType==='mouse' && downPos && e.buttons){ moved+=Math.abs(p.mx-last.mx)+Math.abs(p.my-last.my); last=p; }
        if(e.pointerType==='mouse' && !e.buttons && p.mx>=0&&p.my>=0&&p.mx<=W&&p.my<=H){
          const h=nodeAt(p.mx,p.my,6); if(h!==hover){ hover=h; canvas.style.cursor=h?'pointer':''; pede(); }
        }
      });
      const fim = e=>{
        const tinha = pts.delete(e.pointerId);
        box.classList.remove('arrastando');
        if(e.type==='pointercancel'){ pinch=null; panning=false; downPos=null; pts.clear(); return; }
        if(pinch){
          if(pts.size<2){ pinch=null; downPos=null;
            if(pts.size===1){ last=[...pts.values()][0]; panning=true; moved=99; } else panning=false; }
          return;
        }
        if(downPos && moved<8){
          const {mx,my}=pos(e);
          if(mx>=0&&my>=0&&mx<=W&&my<=H){
            const n=nodeAt(mx,my, toque(e)?(cheia?18:10):6);
            // na prévia, o toque abre a tela cheia; num nome (aceso, se há caminho ou filtro), já nele
            if(toque(e) && !cheia){ const act=activeIds(); abreCheia(n && (!act || act.has(n.id)) ? n.id : null); }
            else if(n) select(n.id);
            else if(sel||filterSet||caminho){ if(toque(e)) showOverview(); else limpaT=setTimeout(showOverview, 300); }
          }
        }
        if(tinha || !pts.size){ panning=false; downPos=null; last=null; }
      };
      canvas.addEventListener('pointerup', fim); canvas.addEventListener('pointercancel', fim);
      canvas.addEventListener('pointerleave', e=>{ if(e.pointerType==='mouse'){ ativo=false; if(hover){ hover=null; pede(); } } });
      // roda: zoom só com Ctrl/⌘ (a pinça do trackpad chega assim) ou depois de arrastar o mapa;
      // fora disso, a página rola normalmente e aparece a dica. Na prévia, Ctrl + roda abre a teia inteira.
      canvas.addEventListener('wheel', e=>{
        if(emPrevia()){ if(e.ctrlKey || e.metaKey){ e.preventDefault(); entraInteira(); } return; }
        if(!(e.ctrlKey || e.metaKey || ativo)){ dica(); return; }
        e.preventDefault(); tween=null;
        const {mx,my}=pos(e); const dy = e.deltaMode===1 ? e.deltaY*16 : e.deltaY;
        const f = Math.exp(-Math.max(-60, Math.min(60, dy))*0.004);
        cam=limita(zoomEm(cam, f, mx, my)); pede();
      }, {passive:false});
      canvas.addEventListener('dblclick', e=>{ clearTimeout(limpaT); if(tipo!=='mouse' || emPrevia()) return; const {mx,my}=pos(e); anima(zoomEm(cam, 1.8, mx, my), 260); });
      const fitBtn=$('#grafo-fit'); if(fitBtn) fitBtn.addEventListener('click', ()=>{ fitView(true); });
      const mais=$('#grafo-mais'); if(mais) mais.addEventListener('click', ()=> zoomBotao(1.5));
      const menos=$('#grafo-menos'); if(menos) menos.addEventListener('click', ()=> zoomBotao(1/1.5));
      if(cheiaBt) cheiaBt.addEventListener('click', e=>{
        if(TOQUE){ abreCheia(sel, e.detail===0); return; }
        if(cheiaBt.dataset.volta){ inteira=false; showOverview(); return; }
        entraInteira();
      });
      const fecha=$('#grafo-fechar'); if(fecha) fecha.addEventListener('click', pedeFechar);
      const camBtn = $('#caminho-marielle'); if(camBtn) camBtn.addEventListener('click', ()=>{ if(caminho && caminho.chave==='marielle'){ showOverview(); } else showCaminho('marielle'); });
      const sb = $('#rede-search'); if(sb) sb.addEventListener('input', ()=> doSearch(sb.value));
      window.addEventListener('popstate', ()=>{
        const st=history.state||{}; if(cheia && !st.teia) fechaCheia(); if(!st.ficha) fichaNossa=false;
        try{ const u=new URL(location.href), quer=caminho?caminho.chave:null;
          if(u.hash==='#rede' && (u.searchParams.get('caminho')||null)!==quer){ if(quer) u.searchParams.set('caminho',quer); else u.searchParams.delete('caminho'); history.replaceState(history.state, '', u.pathname+u.search+u.hash); } }catch(e){}
      });
      try{ const st=history.state; if(st && (st.teia || st.ficha)) history.replaceState(Object.assign({}, st, {teia:0, ficha:0}), ''); }catch(e){}
      window.addEventListener('keydown', e=>{ if(e.key==='Escape' && cheia && !$('#overlay.open')) pedeFechar(); }, true);
      const ov=$('#overlay'), vista=$('#view-rede');
      if('MutationObserver' in window){
        const mo = new MutationObserver(()=>{
          if(fichaNossa && ov && !ov.classList.contains('open')){ fichaNossa=false; if(history.state && history.state.ficha) history.back(); }
          if(cheia && vista && !vista.classList.contains('active')) fechaCheia();
        });
        [ov, vista].forEach(el=>{ if(el) mo.observe(el, {attributes:true, attributeFilter:['class']}); });
      }
      let lw=window.innerWidth;
      window.addEventListener('resize', ()=>{ if(!started || !canvas.offsetParent) return;
        const c0=centroMundo(); resize(); sFit=camPara(null, {padX:14, padY:14}).s;
        if(!cheia && window.innerWidth!==lw){ lw=window.innerWidth; fitView(); return; }
        lw=window.innerWidth; cam=limita({s:cam.s, tx:W/2-c0.wx*cam.s, ty:H/2-c0.wy*cam.s}); cartao(); pede(); });
    }

    // a legenda: os 3 status (sempre os mesmos 3) e o filtro por grupo (a categoria não é cor)
    function renderLegenda(){
      const grupos=[...new Set(D.grafo.nodes.map(n=>n.grupo).filter(Boolean))]
        .map(g=>({g, n:D.grafo.nodes.filter(x=>x.grupo===g).length})).sort((a,b)=>b.n-a.n);
      legendaEl.innerHTML = `<div class="legenda"><span><i class="grave"></i>preso ou condenado</span><span><i class="medio"></i>investigado ou denunciado</span><span><i class="outros"></i>outros</span></div>
        <div class="teia-grupos" role="group" aria-label="filtrar por grupo"><span class="tg-k">filtrar:</span>${grupos.map(x=>`<button type="button" data-grupo="${esc(x.g)}" aria-pressed="false">${esc(GRUPO_LABEL[x.g]||x.g)}</button>`).join('')}</div>`;
      $$('button[data-grupo]', legendaEl).forEach(s=> s.addEventListener('click', ()=>showGrupo(s.dataset.grupo)));
    }

    let fotosIdas = false;
    async function carregarFotos(){
      if(fotosIdas) return; fotosIdas = true;
      const carrega = (id, url)=>{ fotoURL[id]=url; if(!porId[id] && !nodeById[id]) return; const im=new Image(); im.onload=()=>{ fotoImg[id]=im; pede(); }; im.src=url; };
      if(FOTOS){ Object.keys(FOTOS).forEach(id=>{ if(FOTOS[id]) carrega(id, FOTOS[id]); }); return; }
      let cache={}; try{ cache=JSON.parse(localStorage.getItem('af_fotos_v1'))||{}; }catch(e){}
      const ids=Object.keys(WIKI), faltam=ids.filter(id=>!(WIKI[id] in cache));
      for(let i=0;i<faltam.length;i+=40){
        const chunk=faltam.slice(i,i+40), titles=chunk.map(id=>WIKI[id]);
        try{
          const u='https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=200&redirects=1&origin=*&titles='+encodeURIComponent(titles.join('|'));
          const d=await fetch(u).then(r=>r.json());
          const rd={}; (d.query.redirects||[]).forEach(x=>rd[x.from]=x.to);
          const byT={}; Object.values(d.query.pages).forEach(p=>{ byT[p.title]=(p.thumbnail||{}).source||''; });
          chunk.forEach(id=>{ const eff=rd[WIKI[id]]||WIKI[id], url=byT[eff]; if(url) cache[WIKI[id]]=url; });
        }catch(e){}
      }
      try{ localStorage.setItem('af_fotos_v1', JSON.stringify(cache)); }catch(e){}
      ids.forEach(id=>{ const url=cache[WIKI[id]]; if(url) carrega(id, url); });
    }
    window.BD_TEIA = { cores: COR, usadas: ()=> [...usadas], porCor: ()=>{ const o={}; nodes.forEach(n=>{ (o[n.st]=o[n.st]||[]).push(n.id); }); return {ele:o.ele||[], grave:(o.grave||[]).length, medio:(o.medio||[]).length, outros:(o.outros||[]).length}; }, previa: ()=> emPrevia() ? PREV.map(n=>n.id) : null, rotulos: ()=> rotulos.map(c=>c.n.id),
      graus: ()=>{ const o={}; Object.keys(GRAU.dist).forEach(id=>{ if(id!=='flavio'){ const d=GRAU.dist[id]; o[d]=(o[d]||0)+1; } }); return o; },
      caminho: (id,k)=>{ const c=caminhos(id)[k||0]; return c ? {nos:c.nos, elos:c.ars.map(e=>e.de+'>'+e.para), n:caminhos(id).length} : null; },
      aceso: ()=> camSel ? {id:camSel.id, k:camSel.k, nos:[...camSel.nos]} : null, sel: ()=> sel };
    return {
      ensure(){ if(started){ resize(); pede(); return; } if(!canvas) return; started=true; resize(); build(); bind();
        assenta(); renderLegenda(); fitView(); showOverview(); pede(); carregarFotos();
      },
      focus(id){ this.ensure(); select(id, true); },
      lista(ids, titulo){ this.ensure(); grupoAtivo=null; marcaGrupo(); mostraLista(new Set(ids), titulo); },
      sit(ids, titulo){ this.ensure(); showSit(ids, titulo); },
      caminho(chave){ this.ensure(); showCaminho(chave); },
      preloadFotos(){ try{ carregarFotos(); }catch(e){} }
    };
  })();

  /* ---------------- o placar de situação em dois anéis (N07) ----------------
     O destaque da teia: quantos dos nomes em volta dele foram presos ou condenados (o número do tópico quem-anda),
     e o placar: anel de dentro, os nomes ligados diretamente a ele (as arestas dele); anel de fora, a rede ampla
     (a teia inteira, os de dentro incluídos). Cada contador conta só o token literal de `situacao` de cada nome
     (dados.js); "presos ou condenados" é a cor vermelha da teia (condenado, ou preso sem prisão anulada).
     Ele fica fora da conta, no centro, em tinta. Tocar num número: a lista literal (nome, situação, fonte);
     tocar num nome: a pessoa na teia, com o caminho até ele. */
  const temTok = (n, t) => Array.isArray(n.situacao) && n.situacao.includes(t);
  const PLC = [
    {k:'grave',       rot:'presos ou condenados', cor:'grave',  f:n=> sitDe(n)==='grave'},
    {k:'preso',       rot:'foram presos',         cor:'grave',  sub:1, f:n=> temTok(n,'preso')},
    {k:'condenado',   rot:'condenados',           cor:'grave',  sub:1, f:n=> temTok(n,'condenado')},
    {k:'denunciado',  rot:'denunciados',          cor:'medio',  f:n=> temTok(n,'denunciado')},
    {k:'investigado', rot:'investigados',         cor:'medio',  f:n=> temTok(n,'investigado')},
    {k:'arquivada',   rot:'denúncia anulada',     cor:'neutro', f:n=> temTok(n,'arquivada')}
  ];
  const ANEL = {
    viz: D.grafo.nodes.filter(n=> n.id!=='flavio' && VIZ_FLAVIO.has(n.id)),
    all: D.grafo.nodes.filter(n=> n.id!=='flavio')
  };
  const ANEL_ROT = {viz:'em volta dele', all:'na rede ampla'};
  const RK = {grave:0, medio:1, outros:2};
  const plcConta = (a, k) => { const t = PLC.find(x=>x.k===k); return t ? ANEL[a].filter(t.f) : []; };
  function aneisSVG(){
    const deg = {}; D.grafo.edges.forEach(e=>{ deg[e.de]=(deg[e.de]||0)+1; deg[e.para]=(deg[e.para]||0)+1; });
    const ord = l => l.slice().sort((a,b)=> RK[sitDe(a)]-RK[sitDe(b)] || (deg[b.id]||0)-(deg[a.id]||0) || String(a.nome).localeCompare(String(b.nome),'pt'));
    const GAP = 0.2;   // folga no alto de cada anel, onde fica o número dele
    const pts = (l, R, r, anel) => l.map((n,k)=>{
      const a = -Math.PI/2 + GAP + (k+.5)/l.length*(2*Math.PI - 2*GAP);
      return `<circle class="pd ${sitDe(n)}" data-anel="${anel}" data-id="${esc(n.id)}" cx="${(Math.cos(a)*R).toFixed(1)}" cy="${(Math.sin(a)*R).toFixed(1)}" r="${r}"><title>${esc(n.nome)}</title></circle>`;
    }).join('');
    const foto = (FOTOS && FOTOS.flavio) || '';
    return `<svg class="aneis" viewBox="-160 -160 320 320" role="img" aria-label="Dois anéis de pontos, um por nome, na cor da situação: dentro, os ${ANEL.viz.length} ligados diretamente a ele; fora, a rede ampla, ${ANEL.all.length} nomes. No centro, ele.">
      <circle class="guia" r="146"/><circle class="guia" r="86"/>
      ${pts(ord(ANEL.all), 146, 2.5, 'all')}${pts(ord(ANEL.viz), 86, 5.2, 'viz')}
      <text class="an-n" x="0" y="-142">${ANEL.all.length}</text><text class="an-n" x="0" y="-82">${ANEL.viz.length}</text>
      <clipPath id="plc-ele"><circle r="36"/></clipPath>
      <circle class="ele" r="37"/>${foto?`<image href="${esc(foto)}" x="-36" y="-36" width="72" height="72" clip-path="url(#plc-ele)" preserveAspectRatio="xMidYMid slice"/>`:''}
    </svg>`;
  }
  function renderRedeDq(){
    const el=$('#rede-dq'); if(!el) return;
    const pd = presosDiretos(); if(!pd.length){ el.innerHTML=''; return; }
    const linha = t => `<tr${t.sub?' class="sub"':''}><th scope="row">${esc(t.rot)}</th>${['viz','all'].map(a=>{ const n = plcConta(a, t.k).length;
      return `<td><button type="button" class="plc-n ${t.cor}" data-plc="${a}:${t.k}" aria-pressed="false"${n?'':' disabled'} aria-label="${n} ${esc(t.rot)}, ${ANEL_ROT[a]}">${n}</button></td>`; }).join('')}</tr>`;
    el.innerHTML = `<div class="dq plc">
      <h2>Em volta dele</h2>
      <p class="numero destaque">${pd.length}<span class="u"> de ${VIZ_FLAVIO.size}</span></p>
      <p class="dq-t">nomes ligados diretamente a ele foram presos ou condenados, segundo as fontes de cada ficha.</p>
      <div class="plc-g">
        <figure class="plc-fig">${aneisSVG()}
          <figcaption><span class="legenda"><span><i class="grave"></i>preso ou condenado</span><span><i class="medio"></i>investigado ou denunciado</span><span><i class="outros"></i>outros</span></span>
          <span class="plc-an">Um ponto por nome. Dentro, os ${ANEL.viz.length} ligados diretamente a ele; fora, a rede ampla, os ${ANEL.all.length} da teia. No centro, ele, fora da conta.</span></figcaption>
        </figure>
        <div class="plc-t">
          <table class="plc-tab"><thead><tr><td></td><th scope="col"><b>${ANEL.viz.length}</b>em volta dele</th><th scope="col"><b>${ANEL.all.length}</b>na rede ampla</th></tr></thead>
            <tbody>${PLC.map(linha).join('')}</tbody></table>
          <p class="plc-nota">Toque num número: a lista, com a situação literal e a fonte de cada nome. Um nome pode estar em mais de uma linha.</p>
        </div>
      </div>
      <div class="plc-lista" id="plc-lista" aria-live="polite" hidden></div>
      <div class="dq-a"><button type="button" class="env" data-share="quem-anda">enviar ↗</button><button type="button" class="lm" data-lista="presos">ver na teia ↓</button></div>
    </div>`;
    ligaPlacar(el);
  }
  function plcListaHTML(a, k){
    const t = PLC.find(x=>x.k===k); if(!t) return '';
    const l = plcConta(a, k).sort((x,y)=> RK[sitDe(x)]-RK[sitDe(y)] || String(x.nome).localeCompare(String(y.nome),'pt'));
    const MAX = 8;
    const row = n => `<article class="plc-p"><p class="plc-nm"><button type="button" class="plc-pes" data-pessoa="${esc(n.id)}">${esc(n.nome)}</button> ${situacaoChips(n.id, n.situacao)}</p>${n.status?`<p class="plc-s">${esc(n.status)}${sitFonte(n)}</p>`:''}</article>`;
    return `<p class="kx">${esc(t.rot.charAt(0).toUpperCase()+t.rot.slice(1))} <span>· ${ANEL_ROT[a]} · ${l.length}</span></p>
      ${l.slice(0,MAX).map(row).join('')}${l.length>MAX?`<div hidden>${l.slice(MAX).map(row).join('')}</div><button type="button" class="lm" data-mais>ver os outros ${l.length-MAX} ↓</button>`:''}
      <p class="plc-ac"><button type="button" class="lm" data-plc-teia="${a}:${k}">acender ${l.length===1?'este nome':'os '+l.length} na teia ↓</button></p>`;
  }
  let plcSel = '';
  function ligaPlacar(el){
    const svg = $('.aneis', el), lista = $('#plc-lista', el);
    const marca = v => {
      plcSel = v;
      $$('.plc-n', el).forEach(b=> b.setAttribute('aria-pressed', b.dataset.plc===v ? 'true' : 'false'));
      const [a, k] = v ? v.split(':') : ['',''], ids = v ? new Set(plcConta(a, k).map(n=>n.id)) : null;
      if(svg){ svg.classList.toggle('foco', !!v);
        $$('.pd', svg).forEach(c=> c.classList.toggle('on', !!ids && ids.has(c.dataset.id) && (a==='all' || c.dataset.anel==='viz'))); }
      if(lista){ lista.hidden = !v; lista.innerHTML = v ? plcListaHTML(a, k) : ''; }
    };
    $$('.plc-n', el).forEach(b=> b.addEventListener('click', ()=> marca(plcSel===b.dataset.plc ? '' : b.dataset.plc)));
    if(svg) svg.addEventListener('click', ev=>{ const c = ev.target.closest && ev.target.closest('.pd'); if(!c) return; Grafo.focus(c.dataset.id); irTeia(); });
  }
  const irTeia = () => { const b=$('.canvas-box'); if(b) setTimeout(()=> b.scrollIntoView({block:'start', behavior: RMq() ? 'auto' : 'smooth'}), 30); };
  const RMq = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- CRONOLOGIA ---------------- */
  const PESO = {condenacao:6, denuncia:5, decisao_judicial:4, investigacao:4, processo:3, anulado:3, arquivado:3, suspeita:2, fato:2, declaracao:1};
  let EV = null;
  function eventos(){
    if(EV) return EV;
    const ev = [];
    // marcos e fatos em torno de Lula/PT ficam na base, fora da lista
    (D.timeline||[]).forEach(e=>{ if(e.data && !FORA(e.titulo)) ev.push({data:String(e.data), titulo:e.titulo, tema:e.tema, fontes:e.fontes||[], marco:true}); });
    VIS.forEach(i=>{ if(i.data) ev.push({data:String(i.data), titulo:i.titulo, tema:i.tema, fontes:i.fontes||[], status:i.status, id:i.id, i}); });
    const k = d => (String(d||'').replace(/[^0-9]/g,'')+'00000000').slice(0,8);
    ev.forEach(e=>{ e.k = k(e.data); e.peso = (e.marco?5:(PESO[e.status]||1)) + (e.i && casoDoItem(e.i) ? 1 : 0); });
    ev.sort((a,b)=> a.k.localeCompare(b.k));
    return (EV = ev);
  }
  function crItem(e){
    const f = (e.fontes||[]).find(x=>x && /^https?:\/\//.test(x.url||''));
    const k = [temaNome(e.tema)];
    if(e.status && e.status!=='fato' && e.status!=='condenacao') k.push(statusRot(e.status));
    if(e.marco) k.unshift('marco');
    const kh = esc(k.filter(Boolean).join(' · ')) + (e.status==='condenacao' ? ' · <span class="chip grave">condenação</span>' : '') + (f && !e.id ? ` · <a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')} ↗</a>` : '');
    const inner = `<span class="cr-d">${esc(diaMes(e.data)||'—')}</span><span class="cr-t">${esc(sc(tit(e.titulo)))}</span><span class="cr-k">${kh}</span>`;
    return e.id ? `<button type="button" class="cr-it${e.marco?' marco':''}" data-abre="${esc(e.id)}">${inner}</button>` : `<div class="cr-it${e.marco?' marco':''}">${inner}</div>`;
  }
  let crFeito = false;
  function renderTimeline(){
    if(crFeito) return; crFeito = true;
    const ev = eventos(), g = {};
    ev.forEach(e=>{ const y=String(e.data).slice(0,4); (g[y]=g[y]||[]).push(e); });
    const anos = Object.keys(g).sort(), y0 = +anos[0], y1 = +anos[anos.length-1];
    const max = Math.max(...anos.map(y=>g[y].length));
    const topo = $('#cr-topo');
    if(topo && anos.length){
      let barras=''; for(let y=y0;y<=y1;y++){ const n=(g[y]||[]).length; barras += n ? `<button type="button" class="h-b" data-ano="${y}" style="--h:${Math.max(3, Math.round(n/max*100))}%" aria-label="${y}: ${n} registros" title="${y}: ${n}"><i></i></button>` : `<span class="h-b vz" aria-hidden="true"><i></i></span>`; }
      const meio = Math.round((y0+y1)/2);
      const nm = ev.filter(e=>e.marco).length;
      topo.innerHTML = `<div class="cr-topo"><p><b>${ev.length-nm}</b> registros e <b>${nm}</b> marcos, de ${y0} a ${y1}. Toque num ano.</p><div class="hist">${barras}</div><div class="h-eixo"><span>${y0}</span><span>${meio}</span><span>${y1}</span></div></div>`;
    }
    const MOSTRA = 4;
    $('#timeline').innerHTML = anos.map(y=>{
      const l = g[y];
      if(l.length <= MOSTRA+1) return `<section class="cr-ano" id="ano-${y}"><h2 class="cr-h"><span class="cr-y">${y}</span><span class="cr-n">${l.length} ${l.length===1?'registro':'registros'}</span></h2><div class="cr-l">${l.map(crItem).join('')}</div></section>`;
      // os principais do ano (marcos, condenações, denúncias…), na ordem das datas; todos em "ver os N"
      const top = l.slice().sort((a,b)=> b.peso-a.peso || a.k.localeCompare(b.k)).slice(0, MOSTRA).sort((a,b)=> a.k.localeCompare(b.k));
      return `<section class="cr-ano" id="ano-${y}"><h2 class="cr-h"><span class="cr-y">${y}</span><span class="cr-n">${l.length} registros · ${MOSTRA} em destaque</span></h2>
        <div class="cr-l">${top.map(crItem).join('')}</div>
        <div class="cr-l" hidden>${l.map((e,k)=>{ const m = String(e.data).slice(5,7), mp = k ? String(l[k-1].data).slice(5,7) : ''; return (m && m!==mp && /^\d\d$/.test(m) ? `<p class="cr-mes">${esc(MES[+m-1]||'')}</p>` : '') + crItem(e); }).join('')}</div>
        <button type="button" class="lm" data-todos>ver os ${l.length} de ${y} ↓</button></section>`;
    }).join('');
  }
  let swimDone=false;
  function renderSwimlanes(){
    const el = $('#swimlanes'); if(!el) return;
    const its = VIS.filter(i=>i.data && /^\d{4}/.test(String(i.data)));
    if(!its.length) return;
    const yrs = its.map(i=>parseInt(String(i.data).slice(0,4)));
    const minY=Math.min(...yrs), maxY=Math.max(...yrs), span=Math.max(1,maxY-minY);
    const temas = D.temas.filter(t=> its.some(i=>i.tema===t.id));
    // ponto âmbar = fato; vermelho só condenação
    el.innerHTML = `<div class="sl-axis"><span>${minY}</span><span>${Math.round((minY+maxY)/2)}</span><span>${maxY}</span></div>` +
      temas.map(t=>{
        const dots = its.filter(i=>i.tema===t.id).map(i=>{
          const y=parseInt(String(i.data).slice(0,4)); const left=((y-minY)/span*100);
          return `<button type="button" class="sl-dot${i.status==='condenacao'?' grave':''}" style="left:${left}%" data-abre="${esc(i.id)}" title="${esc((i.data||'')+' · '+tit(i.titulo))}" aria-label="${esc(fmtData(i.data)+': '+tit(i.titulo))}"></button>`;
        }).join('');
        return `<div class="sl-lane"><div class="sl-name">${esc(temaNome(t.id))}</div><div class="sl-track">${dots}</div></div>`;
      }).join('');
    swimDone=true;
  }

  /* ---------------- PERGUNTE AO ARQUIVO: a busca única (N08; busca por palavra, não gera texto) ----------------
     Uma caixa para tudo: os casos da Foz (data/foz.js), os nomes da teia (dados.js), as mensagens do BolsoZap
     (data/busca.js, window.BD_BUSCA, gerado por bolso-os-fontes/gera_busca.py) e os registros do arquivo (dados.js).
     Procura cada palavra no começo de uma palavra do texto, sem acento; o resultado vem em fichas, cada uma com a
     fonte e o link. Nada é escrito na hora: o que aparece é o que o arquivo já tem. */
  const Busca = (function(){
    const nz = s => ' ' + norm(s).replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    const STOP = new Set(('a o as os de da do das dos e em no na nos nas num numa um uma uns umas que quem qual quais quando onde como '+
      'por pelo pela pelos pelas para pra pro com sem sobre ao aos ate entre foi era ser sao tem ter ha seu sua seus suas dele dela deles '+
      'delas isso isto esse essa este esta me te se lhe eu voce ele ela eles elas mais menos muito ja nao sim ou mas tambem so sabe fala '+
      'falou disse diz ver caso casos coisa historia tudo sobre').split(' '));
    const FRACO = new Set(['flavio', 'bolsonaro', 'senador']);   // estão em quase tudo: só contam se não houver outra palavra
    const B = () => window.BD_BUSCA || {};
    let DOCS = null, comZap = false;
    function monta(){
      if(DOCS && (comZap || !window.BD_BUSCA)) return DOCS;   // refaz uma vez quando o data/busca.js (defer) chega
      comZap = !!window.BD_BUSCA;
      const b = B(), docs = [];
      // os casos: a ficha da Foz (rótulo, termos de busca do caso, número) e, no corpo, o texto do número, o resumo e os nomes da cadeia
      const casos = ESC.length ? ESC : [];
      casos.forEach(e=>{ const nm = e.numero || {};
        docs.push({tipo:'caso', id:e.id, e, A:nz((e.rotulo||'')+' '+(e.nome||'')), T:nz(String(e.busca||'').replace(/\|/g,' ')), B:nz(nm.valor||''),
          C:nz((nm.texto||'')+' '+(e.resumo||'')+' '+(e.operacao||'')+' '+(e.cadeia||[]).map(l=>(l.de||'')+' '+(l.para||'')).join(' '))}); });
      if(!casos.length) (b.casos||[]).forEach(c=> docs.push({tipo:'caso', id:c.id, c, A:nz((c.r||'')+' '+(c.nm||'')), T:nz((c.termos||[]).join(' ')), B:nz(c.num||''), C:nz((c.tx||'')+' '+(c.nomes||[]).join(' '))}));
      // os nomes da teia (ele não: o arquivo inteiro é sobre ele)
      const pes = D.grafo.nodes.length ? D.grafo.nodes : (b.pessoas||[]).map(p=>({id:p.id, nome:p.n, grupo:p.g, situacao:p.s}));
      pes.forEach(n=>{ if(n.id==='flavio') return;
        docs.push({tipo:'pessoa', id:n.id, n, A:nz(n.nome), B:nz(n.papel||''), C:nz((n.status||'')+' '+(GRUPO_LABEL[n.grupo]||''))}); });
      // o BolsoZap: as conversas (pelo nome) e as mensagens (a citação, o texto, quem diz, a conversa)
      const cv = b.conversas || {};
      Object.keys(cv).forEach(c=> docs.push({tipo:'conv', id:c, cv:cv[c], A:nz(cv[c].n), B:' ', C:' '}));
      (b.zap||[]).forEach(z=>{ const q = z.q || null, c = cv[z.c] || {};
        docs.push({tipo:'zap', id:z.c+'/'+z.m, z, d:z.d, A:nz(q ? q.t : z.t), B:nz((c.n||'')+' '+(z.de||'')+' '+(q ? q.quem : '')),
          C:nz((q ? (z.t||'')+' '+(q.meio||'') : '')+' '+((z.f||{}).veiculo||''))}); });
      // os registros do arquivo: o título, a pasta, e no corpo o resumo e os veículos
      VIS.forEach(i=> docs.push({tipo:'item', id:i.id, i, d:i.data, A:nz(tit(i.titulo)), B:nz(temaNome(i.tema)),
        C:nz((i.resumo||'')+' '+(i.fontes||[]).map(f=>f && f.veiculo || '').join(' '))}));
      return (DOCS = docs);
    }
    function termos(q){
      const ws = norm(q).replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(w=> w && !STOP.has(w));
      const fortes = [...new Set(ws.filter(w=> !FRACO.has(w)))];
      return {ts: fortes, soEle: !fortes.length && ws.some(w=> FRACO.has(w))};
    }
    // pontos de uma palavra num documento: título/nome 10, apelido/termo/pasta 7, corpo 3; palavra inteira +2;
    // ano (2020) na data do registro ou da mensagem: 5. Palavra de 1–2 letras só vale inteira ("PF", "8").
    function pontua(doc, t){
      const curto = t.length < 3;
      const m = (h, w) => h.indexOf(' '+t+' ') >= 0 ? w+2 : (!curto && h.indexOf(' '+t) >= 0 ? w : 0);
      let s = Math.max(m(doc.A,10), doc.T ? m(doc.T,10) : 0, m(doc.B,7), m(doc.C,3));
      if(/^(19|20)\d\d$/.test(t) && String(doc.d||'').slice(0,4)===t) s = Math.max(s, 10);   // o ano do registro ou da mensagem
      return s;
    }
    // bônus de tipo, quando a palavra está no nome (pessoa, conversa) ou no rótulo/termos/número (caso): o nome de uma
    // pessoa vem antes de um caso que só a cita; uma instituição da teia (Ifop, BRB) vem depois do caso dela
    const ORG = /^(Banco|Instituto|Fundo|Empresa|Loja|Precision|ONG|Associa|Funda)/i;
    // os termos de busca do caso (curados na Foz: "Vorcaro", "Ifop") dizem que o caso é sobre aquilo: vem antes do nome
    const bonus = (d, t) => d.tipo==='pessoa' ? (ORG.test(d.n.nome||'') ? 5 : 7) : d.tipo==='caso' ? (t ? 8 : 6) : d.tipo==='conv' ? 5 : 0;
    const noT = (d, t) => !!d.T && (d.T.indexOf(' '+t+' ')>=0 || (t.length>=3 && d.T.indexOf(' '+t)>=0));
    const forteEm = d => d.tipo==='caso' ? 7 : 10;
    const GRUPO = ['caso', 'pessoa', 'zap', 'item'];
    function procura(q){
      const {ts, soEle} = termos(q);
      if(!ts.length) return {ts, soEle, grupos:[], total:0};
      const hits = [];
      monta().forEach(doc=>{
        let s = 0, n = 0, forte = false, tt = false;
        ts.forEach(t=>{ const p = pontua(doc, t); if(p){ s += p; n++; if(p >= forteEm(doc)) forte = true; if(noT(doc, t)) tt = true; } });
        if(n) hits.push({doc, s: s + (forte ? bonus(doc, tt) : 0), n});
      });
      // todas as palavras, quando há resultado com todas; senão, a maioria
      const todas = hits.filter(h=> h.n===ts.length);
      const need = ts.length <= 2 ? 1 : Math.ceil(ts.length*0.6);
      const ok = todas.length ? todas : hits.filter(h=> h.n>=need);
      const por = {}; ok.forEach(h=>{ const g = h.doc.tipo==='conv' ? 'zap' : h.doc.tipo; (por[g]=por[g]||[]).push(h); });
      const grupos = GRUPO.filter(g=> por[g]).map(g=>{
        const dist = h => h.doc.tipo==='pessoa' ? (GRAU.dist[h.doc.id]==null ? 99 : GRAU.dist[h.doc.id]) : 0;
        const l = por[g].sort((a,b)=> b.n-a.n || b.s-a.s || (b.doc.tipo==='conv')-(a.doc.tipo==='conv') || dist(a)-dist(b) || String(b.doc.d||'').localeCompare(String(a.doc.d||'')));
        return {g, l, top: l[0].s};
      }).sort((a,b)=> b.top-a.top || GRUPO.indexOf(a.g)-GRUPO.indexOf(b.g));
      return {ts, soEle, grupos, total: ok.length};
    }
    return {procura, termos, monta};
  })();

  // as fichas de cada tipo: número/fato + situação literal + fonte + o link para onde está; um "enviar" por ficha
  const fonteLink = f => f && /^https?:\/\//.test(f.url||'') ? `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')}${f.data?', '+esc(fmtData(f.data)):''} ↗</a>` : '';
  function fichaCaso(e){
    const nm = e.numero || {}, v = String(nm.valor||''), num = /\d/.test(v) && v.length <= 22;
    const f = nm.fonte && /^https?:\/\//.test(nm.fonte.url||'') ? nm.fonte : fonte1(e);
    return `<article class="bf">
      <p class="bf-k">caso da Foz · ${esc(FAIXA_K[e.faixa]||'')}</p>
      <h3 class="bf-n">${esc(e.rotulo||e.nome)}</h3>
      ${v?`<p class="numero ficha${num?'':' frase'}">${num?fmtNum(v):esc(v)}</p>`:''}
      ${nm.texto?`<p class="bf-t">${esc(nm.texto)}</p>`:''}
      ${f?`<p class="bf-f">${fonteLink(f)}</p>`:''}
      <div class="bf-a"><a class="bf-p" href="foz.html#${esc(e.id)}">elo por elo, na Foz →</a><button type="button" class="env" data-share="${esc(e.id)}">enviar ↗</button></div>
    </article>`;
  }
  function fichaPessoa(n){
    const chips = situacaoChips(n.id, n.situacao), es = fozPorNome[n.id] || [], d = GRAU.dist[n.id];
    return `<article class="bf">
      <p class="bf-k">na teia · ${esc(GRUPO_LABEL[n.grupo]||'nome')}${d?` · a ${d} ${d===1?'elo':'elos'} dele`:''}</p>
      <h3 class="bf-n">${esc(n.nome)}</h3>
      ${n.papel?`<p class="bf-papel">${esc(n.papel)}</p>`:''}
      ${chips?`<div class="bf-chips">${chips}</div>`:''}
      ${n.status?`<p class="bf-s">${esc(n.status)}${sitFonte(n)}</p>`:''}
      ${d>=2 && caminhos(n.id).length ? `<p class="bf-c">O caminho até ele: ${caminhos(n.id)[0].nos.map(x=> esc(nodeById[x] ? nodeById[x].nome : x)).join(' → ')}</p>` : ''}
      ${es.length?`<p class="bf-c">Na cadeia de ${es.length===1?'um caso':es.length+' casos'} da Foz: ${es.map(e=>`<a href="foz.html#${esc(e.id)}">${esc(e.rotulo||e.nome)}</a>`).join(' · ')}</p>`:''}
      <div class="bf-a"><button type="button" class="bf-p" data-pessoa="${esc(n.id)}">na teia, o caminho até ele →</button>${zapLink(n.id)}${envioPessoa(n.id)}</div>
    </article>`;
  }
  function fichaConv(id, cv){
    return `<article class="bf">
      <p class="bf-k">conversa do BolsoZap</p>
      <h3 class="bf-n">${esc(cv.n||id)}</h3>
      <div class="bf-a"><a class="bf-p" href="zap.html#${esc(id)}">abrir a conversa →</a></div>
    </article>`;
  }
  function fichaZap(z){
    const cv = ((window.BD_BUSCA||{}).conversas || {})[z.c] || {}, q = z.q || null;
    const T = window.BD_TOPICOS || {}, top = cv.foz && T[cv.foz] ? cv.foz : 'abertura';
    const dia = fmtData(z.d);
    const texto = (q ? `“${q.t}”, ${q.quem}${q.meio?' ('+q.meio+')':''}` : z.t) + `\n${z.f && z.f.veiculo ? z.f.veiculo : ''}${dia?', '+dia:''}. No BolsoZap, conversa ${cv.n||z.c}:\n`;
    const k = extra('z:'+z.c+'/'+z.m, {texto, url: BASE + (z.lk || ('zap.html#'+z.c+'/'+z.m))});
    return `<article class="bf bf-zap">
      <p class="bf-k">BolsoZap · ${esc(cv.n||z.c)}${dia?' · '+esc(dia):''}</p>
      ${q?`<blockquote class="bf-q">“${esc(q.t)}”<cite>${esc(q.quem)}${q.meio?', '+esc(q.meio):''}</cite></blockquote>${z.t?`<p class="bf-t">${esc(z.t)}</p>`:''}`:`<p class="bf-m">${esc(z.t)}</p>`}
      <p class="bf-f">${z.de && z.f && z.de!==z.f.veiculo ? esc(z.de)+' · ' : ''}${fonteLink(z.f)}</p>
      <div class="bf-a"><a class="bf-p" href="zap.html#${esc(z.c)}/${esc(z.m)}">na conversa →</a><button type="button" class="env" data-share="${esc(top)}" data-x="${esc(k)}">enviar ↗</button></div>
    </article>`;
  }
  const GRUPO_NOME = {caso:['caso da Foz','casos da Foz'], pessoa:['nome na teia','nomes na teia'], zap:['no BolsoZap','no BolsoZap'], item:['registro do arquivo','registros do arquivo']};
  const GRUPO_VIS = {caso:3, pessoa:3, zap:3, item:4};
  function fichaDe(h){
    const d = h.doc;
    if(d.tipo==='caso') return d.e ? fichaCaso(d.e) : '';
    if(d.tipo==='pessoa') return fichaPessoa(d.n);
    if(d.tipo==='conv') return fichaConv(d.id, d.cv);
    if(d.tipo==='zap') return fichaZap(d.z);
    if(d.tipo==='item') return regHTML(d.i);
    return '';
  }
  function resultadoHTML(q, o){
    o = o || {};
    const r = Busca.procura(q);
    let h = o.semTopo ? '' : `<p class="resp-q">Você procurou: <b>${esc(q)}</b></p>`;
    if(r.soEle) return h + `<p class="resp-i">O arquivo inteiro é sobre ele. Comece pela <a class="bf-p" href="foz.html">Foz: os ${ESC.length} casos e como cada um chega a ele →</a></p>`;
    if(!r.grupos.length) return h + `<p class="resp-i">O arquivo não tem nada com ${r.ts.length>1?'essas palavras':'essa palavra'}. Tente um nome (Queiroz, Vorcaro), um caso (rachadinha, Ifop) ou um ano (2020).</p>`;
    const conta = r.grupos.map(g=>{ const n = g.l.filter(h=>h.doc.tipo!=='conv').length || g.l.length; return `<b>${n}</b> ${GRUPO_NOME[g.g][n===1?0:1]}`; });
    h += `<p class="resp-i">${conta.length>1 ? conta.slice(0,-1).join(', ')+' e '+conta[conta.length-1] : conta[0]}.</p>`;
    r.grupos.forEach(g=>{
      const max = o.max ? Math.min(o.max, GRUPO_VIS[g.g]) : GRUPO_VIS[g.g], vis = g.l.slice(0, max), resto = o.max ? [] : g.l.slice(max);
      h += `<section class="bg"><h3 class="kx">${esc(GRUPO_NOME[g.g][1].charAt(0).toUpperCase()+GRUPO_NOME[g.g][1].slice(1))} <span>· ${g.l.length}</span></h3>
        <div class="${g.g==='item'?'regs':'bfs'}">${vis.map(fichaDe).join('')}${resto.length && g.g!=='item'?`<div class="bfs" hidden>${resto.map(fichaDe).join('')}</div><button type="button" class="lm" data-mais>${resto.length===1 ? (g.g==='zap'?'ver a outra':'ver o outro') : `ver ${g.g==='zap'?'as outras':'os outros'} ${resto.length}`} ↓</button>`:''}</div>
        ${g.g==='item' && g.l.length>max ? `<button type="button" class="lm" data-busca="${esc(r.ts.join('|'))}">ver os ${g.l.length} registros no Arquivo →</button>` : ''}</section>`;
    });
    return h;
  }
  const chatMsgs = $('#chat-msgs'), chatInp = $('#chat-inp');
  let ultimaPergunta = '';
  function perguntar(q, o){
    q = String(q||'').trim(); if(!q || !chatMsgs) return;
    o = o || {};
    if(chatInp && chatInp.value.trim()!==q) chatInp.value = q;
    if(q===ultimaPergunta && chatMsgs.firstChild && !o.forca) return;
    ultimaPergunta = q;
    chatMsgs.innerHTML = `<div class="resp">${resultadoHTML(q)}</div>`;
    if(o.rola) try{ chatMsgs.scrollIntoView({behavior: RMq() ? 'auto' : 'smooth', block:'start'}); }catch(e){}
  }
  // data/busca.js vem com defer: a pergunta que chegar antes dele espera o DOMContentLoaded
  function quandoPronto(fn){ if(window.BD_BUSCA || document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded', fn, {once:true}); }
  const chatForm = $('#chat-form');
  if(chatForm) chatForm.addEventListener('submit', e=>{ e.preventDefault(); const v = chatInp.value.trim(); if(!v) return; quandoPronto(()=> perguntar(v, {forca:true})); try{ chatInp.blur(); }catch(_){} });
  let tDig = null;
  if(chatInp) chatInp.addEventListener('input', ()=>{ clearTimeout(tDig); const v = chatInp.value.trim(); if(v.length < 3) return; tDig = setTimeout(()=> quandoPronto(()=> perguntar(v)), 220); });
  const chips = $('#chat-chips');
  if(chips){ chips.innerHTML = ['Queiroz','Ifop','jato','Vorcaro','rachadinha','Adriano','Marielle','2020'].map(t=>`<button type="button" data-q="${esc(t)}">${esc(t)}</button>`).join(''); }
  const chatSub = $('#chat-sub');
  // o texto não depende do data/busca.js (que chega depois, com defer): nada muda de tamanho depois de pintado
  if(chatSub) chatSub.textContent = `Uma caixa para o arquivo inteiro: os ${ESC.length} casos da Foz, os ${D.grafo.nodes.filter(n=>n.id!=='flavio').length} nomes da teia, as mensagens do BolsoZap e os ${VIS.length} registros. A resposta é o que o arquivo tem, com a fonte; nada é escrito na hora.`;
  // o menu (assets/nav.js) pergunta daqui: window.BDBusca.perguntar('Queiroz')
  window.BDBusca = { perguntar: q=> quandoPronto(()=>{ showView('chat','push'); perguntar(q, {forca:true}); window.scrollTo(0,0); }), procura: q=> Busca.procura(q) };

  /* ---------------- cliques (um só lugar) ---------------- */
  function aoClicar(ev){
    const t = ev.target && ev.target.closest ? ev.target.closest('[data-abre],[data-pessoa],[data-tema],[data-caso],[data-faixa],[data-go],[data-mais],[data-todos],[data-ano],[data-q],[data-lista],[data-busca],#man-mais,[data-cron],[data-plc-teia],[data-q-arq]') : null;
    if(!t) return;
    const d = t.dataset;
    if(t.id==='man-mais'){ abreManchetes(); return; }
    if(d.abre){ abrirDetalhe(d.abre); return; }
    if(d.pessoa){ if(overlay.classList.contains('open')) fechar(); showView('rede','push'); Grafo.focus(d.pessoa); irTeia(); return; }
    if(d.tema){ showView('arquivo','push'); abrirTema(d.tema); return; }
    if(d.caso){ abrirCaso(d.caso); return; }
    if(d.faixa){ faixaCasos(d.faixa); return; }
    if(d.go){ showView(d.go,'push'); return; }
    if('mais' in d){ const r=t.previousElementSibling; if(r) r.hidden=false; t.remove(); return; }
    if('todos' in d){ const s=t.closest('.cr-ano'); if(s){ const ls=$$('.cr-l', s); if(ls[0]) ls[0].hidden=true; if(ls[1]) ls[1].hidden=false; } t.remove(); return; }
    if(d.ano){ const s=$('#ano-'+d.ano); if(s) s.scrollIntoView({block:'start', behavior: RMq() ? 'auto' : 'smooth'}); return; }
    if(d.q){ quandoPronto(()=> perguntar(d.q, {forca:true})); return; }
    if(d.qArq){ window.BDBusca.perguntar(d.qArq); return; }
    if(d.plcTeia){ const [a,k] = d.plcTeia.split(':'), t0 = PLC.find(x=>x.k===k); if(!t0) return;
      Grafo.sit(plcConta(a,k).map(n=>n.id), t0.rot.charAt(0).toUpperCase()+t0.rot.slice(1)+', '+ANEL_ROT[a]); irTeia(); return; }
    if(d.lista==='presos'){ showView('rede','push'); Grafo.lista(presosDiretos().map(n=>n.id), 'Presos ou condenados, em volta dele'); irTeia(); return; }
    if(d.busca){ showView('arquivo','push'); busca.value = d.busca; buscar(d.busca); return; }
    if(d.cron){
      $$('.cron-tab').forEach(x=>{ const on = x===t; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on?'true':'false'); });
      const faixas = d.cron==='faixas';
      $('#timeline').hidden = faixas; $('#swimlanes').hidden = !faixas; const tp=$('#cr-topo'); if(tp) tp.hidden = faixas;
      if(faixas && !swimDone) renderSwimlanes();
      return;
    }
  }
  $('main').addEventListener('click', aoClicar);
  sheet.addEventListener('click', aoClicar);

  /* ---------------- init ---------------- */
  // o cabeçalho e a variável --hdr são do assets/nav.js
  function init(){
    Grafo.preloadFotos();
    renderTemas(); renderRedeDq();
    const sub = $('#arq-sub'); if(sub) sub.textContent = `${VIS.length} registros, cada um com fonte. Procure um nome, um caso ou um ano.`;
    const lm = $('#link-metodo'); if(lm) lm.addEventListener('click', abrirMetodo);
    const qs = new URLSearchParams(location.search);
    // drive.html?q=termo#arquivo abre o Arquivo com a busca preenchida (links vindos da Foz)
    const q0 = qs.get('q');
    if(q0 && busca){ busca.value = q0; buscar(q0); }
    // drive.html?p=<id>#rede abre a teia com aquele nome no centro; ?caminho=marielle#rede, o caminho do caso
    const p0 = qs.get('p'), pessoa = p0 && nodeById[p0] ? p0 : null;
    const c0 = qs.get('caminho'), caminho0 = c0 && CAMINHOS[c0] ? c0 : null;
    // drive.html?i=<id>#arquivo abre a ficha do registro (o link que vai no envio de um registro sem caso na Foz)
    const i0 = qs.get('i'), item0 = i0 && itemById[i0] ? i0 : null;
    // drive.html?busca=<termo>#chat abre a "Pergunte ao arquivo" já respondida; o menu (nav.js) passa a pergunta
    // pelo sessionStorage (bd_pergunta), para o termo não ir no endereço
    let b0 = qs.get('busca') || '';
    try{ const sv = sessionStorage.getItem('bd_pergunta'); if(sv){ sessionStorage.removeItem('bd_pergunta'); if(!b0) b0 = sv; } }catch(e){}
    const h = (location.hash||'').slice(1);
    const v0 = VIEWS.includes(h) ? h : (b0 ? 'chat' : (pessoa || caminho0) ? 'rede' : (item0 ? 'arquivo' : 'recente'));
    if(!b0 && v0==='chat' && q0) b0 = q0;
    showView(v0);
    if(b0){ if(v0!=='chat') showView('chat'); quandoPronto(()=> perguntar(b0, {forca:true})); }
    if(caminho0 && v0==='rede'){ Grafo.caminho(caminho0); irTeia(); }
    else if(pessoa && v0==='rede'){ Grafo.focus(pessoa); irTeia(); }
    if(item0) abrirDetalhe(item0);
    // voltar/avançar (popstate) e hash digitado ou clicado (hashchange): mostra a view e devolve a rolagem guardada
    const sync = ()=>{
      const k=(location.hash||'#recente').slice(1); if(!VIEWS.includes(k)) return;
      if(overlay.classList.contains('open')) fechar();
      showView(k);
      const y = history.state && typeof history.state.y==='number' ? history.state.y : null;
      if(y!=null) window.scrollTo(0,y);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
  }
  init();
})();
