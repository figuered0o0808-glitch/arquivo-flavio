/* ===== BolsoDrive — app integrado (Arquivo / Rede / Cronologia / Especialista) ===== */
(function(){
  const D = window.DOSSIE;
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const esc = s => (s==null?'':String(s)).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  // "(não é Flávio)" marca, nos dados, o fato que não é sobre ele (serve às contagens); na tela não aparece
  const NAOE = /\s*\(não é Flávio\)\s*$/;
  const tit = t => String(t==null?'':t).replace(NAOE,'');
  const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const temaById = Object.fromEntries(D.temas.map(t=>[t.id,t]));
  const nodeById = Object.fromEntries((D.grafo?.nodes||[]).map(n=>[n.id,n]));

  function badge(st){
    const s = D.status[st] || {rotulo:st,cor:'var(--muted)'};
    return `<span class="badge" style="color:${s.cor}">${esc(s.rotulo)}</span>`;
  }
  // selo de procedência (tier da fonte)
  const TIER = {
    primaria:  {rotulo:'PRIMÁRIA',  cor:'#57f08a'},
    referencia:{rotulo:'REFERÊNCIA',cor:'#ffb02e'},
    agregador: {rotulo:'AGREGADOR', cor:'#8aa39a'},
    blog:      {rotulo:'BLOG/OPINIÃO', cor:'#ff7a7a'}
  };
  const tierPip = t => { const x=TIER[t]||TIER.agregador; return `<span class="ftier" style="color:${x.cor}" title="fonte ${x.rotulo}">◆</span>`; };
  function lastroBadge(l){ const x=TIER[l]||TIER.agregador; return `<span class="lastro" style="color:${x.cor}">lastro: ${x.rotulo}</span>`; }
  function fontesHTML(fontes){
    if(fontes && fontes.length){
      return 'Fontes: ' + fontes.map(f=>`${tierPip(f.tier)}<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo)}${f.data?` (${esc(f.data)})`:''}</a>`).join(' · ');
    }
    return '<span class="nofonte">⚠ sem fonte — adicionar antes de publicar</span>';
  }
  // enviar: o botão manda o tópico da tela (assets/compartilhar.js, data-share="<id>");
  // sem o módulo carregado, manda a página atual
  function ligaEnvio(root){
    $$('[data-share]', root||document).forEach(b=>{
      if(b.dataset.lig) return; b.dataset.lig='1';
      b.addEventListener('click', ev=>{
        ev.preventDefault(); ev.stopImmediatePropagation();
        const id=b.dataset.share;
        if(window.BDShare && typeof window.BDShare.enviar==='function'){ window.BDShare.enviar(id); return; }
        const url=location.href;
        if(navigator.share){ navigator.share({url}).catch(()=>{}); return; }
        window.open('https://wa.me/?text='+encodeURIComponent(url),'_blank','noopener');
      });
    });
  }
  const itensDoTema = id => D.itens.filter(i=>i.tema===id);
  const itensDaPessoa = pid => D.itens.filter(i=>(i.pessoas||[]).includes(pid));

  // A Foz (data/foz.js): por quais rios cada nome passa. Só vale o que a cadeia registra
  // (de_id/para_id de cada elo); nome fora da cadeia não ganha link.
  const FOZ = window.FOZ || {escandalos:[]};
  const fozPorNome = {};
  (FOZ.escandalos||[]).forEach(e=> (e.cadeia||[]).forEach(l=> [l.de_id, l.para_id].forEach(id=>{
    if(!id) return; const a = fozPorNome[id] || (fozPorNome[id]=[]); if(!a.includes(e)) a.push(e);
  })));
  function fozHTML(id){
    const n = nodeById[id]; if(!n) return '';
    if(id==='flavio'){
      const k = (FOZ.escandalos||[]).length;
      return k ? `<div class="foz-liga"><a href="foz.html">A Foz: ${k} escândalos chegam a ele →</a></div>` : '';
    }
    const es = fozPorNome[id] || []; if(!es.length) return '';
    return `<div class="foz-liga"><div class="fl-k">Nos escândalos: ${es.length} ${es.length===1?'rio passa':'rios passam'} por ${esc(n.nome)}</div>` +
      es.map(e=>`<a href="foz.html#${encodeURIComponent(e.id)}">${esc(e.rotulo||e.nome)} →</a>`).join('') + `</div>`;
  }

  // gráfico de patrimônio declarado ao TSE (dados abertos oficiais)
  const fmtMi = v => 'R$ ' + (v/1e6).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}) + ' mi';
  function patrimonioChartHTML(){
    const p = D.patrimonioTSE; if(!p || !p.pontos) return '';
    const max = Math.max(...p.pontos.map(x=>x.valor||0)) * 1.18 || 1;
    const bars = p.pontos.map(x=>{
      const h = x.valor ? Math.max(8, Math.round(x.valor/max*150)) : 142;
      const lab = x.valor ? fmtMi(x.valor) : (x.rotulo||'?');
      return `<div class="pbar-col">
        <div class="pbar-val">${esc(lab)}</div>
        <div class="pbar ${x.valor?'':'ghost'}" style="height:${h}px"></div>
        <div class="pbar-yr">${x.ano}<span>${esc(x.cargo||'')}</span></div>
      </div>`;
    }).join('');
    return `<div class="patrimonio-card">
      <div class="pc-h">📈 Patrimônio declarado ao TSE</div>
      <div class="pbars">${bars}</div>
      <div class="pc-src">${esc(p.nota||'')} Fonte: <a href="${esc(p.fonte.url)}" target="_blank" rel="noopener">${esc(p.fonte.veiculo)}</a></div>
    </div>`;
  }
  function senadoStatsHTML(){
    const s = D.senadoStats; if(!s || !s.itens) return '';
    return `<div class="patrimonio-card">
      <div class="pc-h">🏛️ Atuação no Senado (dados oficiais)</div>
      <div class="senado-stats">${s.itens.map(i=>`<div class="sstat"><div class="sv">${esc(i.valor)}</div><div class="sl">${esc(i.label)}</div></div>`).join('')}</div>
      <div class="pc-src">${esc(s.nota||'')} Fonte: <a href="${esc(s.fonte.url)}" target="_blank" rel="noopener">${esc(s.fonte.veiculo)}</a></div>
    </div>`;
  }

  /* ---------------- Router ---------------- */
  const VIEWS=['recente','arquivo','rede','cronologia','noticias','chat'];
  // Regra: nenhum id de elemento pode ter o nome de uma view. Se tiver, o navegador
  // rola até ele ao abrir drive.html#<view> (era a "faixa preta" do #recente).
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  // hist==='push': troca pedida pela pessoa (aba, link, cartão) → vira entrada no
  // histórico, e o "voltar" do Android volta à view anterior em vez de sair do site.
  // Sem hist: só mostra (abertura da página, voltar/avançar); a URL não é reescrita.
  function showView(name, hist){
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
    if(name==='noticias') Noticias.ensure();
    if(name==='recente') renderRecente();
    if(mudou) window.scrollTo(0,0);
    return mudou;
  }

  /* ---------------- Arquivo ---------------- */
  const arqGrid = $('#arquivo-grid');
  const arqItens = $('#arquivo-itens');
  const busca = $('#busca');
  let filtroTipo = 'todos';

  function fluxoMoneyHTML(){
    const f = D.fluxoDinheiro; if(!f || !f.fluxos) return '';
    const rows = f.fluxos.map(x=>{
      const t = temaById[x.tema];
      return `<div class="flux-row">
        <span class="flux-de">${esc(x.de)}</span>
        <span class="flux-mid">──▶ <b>${esc(x.valor)}</b> ──▶</span>
        <span class="flux-para">${esc(x.para)}</span>
        ${x.fonte&&x.fonte.url?`<a class="flux-src" href="${esc(x.fonte.url)}" target="_blank" rel="noopener" title="${esc(x.fonte.veiculo||'')}">» fonte</a>`:''}
        <div class="flux-obs">${esc(x.obs||'')}${t?` · ${esc(t.nome)}`:''}</div>
      </div>`;
    }).join('');
    return `<div class="moneyflow-card"><div class="pc-h">💰 Siga o dinheiro</div>${rows}<div class="pc-src">${esc(f.nota||'')}</div></div>`;
  }
  // a conversa da pessoa no BolsoZap (data/zap-mapa.js), quando existe
  function zapLink(id){ const c=((window.ZAP_MAPA||{}).grafo||{})[id]; return c?` <a class="backlink" href="zap.html#${esc(c)}">» a conversa no BolsoZap</a>`:''; }
  // presos ou condenados com ligação DIRETA a ele (não a rede inteira)
  function presosDiretos(){
    const g=D.grafo||{nodes:[],edges:[]}; const viz=new Set();
    g.edges.forEach(e=>{ if(e.de==='flavio') viz.add(e.para); if(e.para==='flavio') viz.add(e.de); });
    // a mesma conta do index: prisão anulada (segundo a cadeia da Foz) não conta
    const PA=/anul\S*\s+(?:a\s+)?(?:ordem de\s+)?pris|pris[ãa]o\s+(?:foi\s+)?anulad/i; const anul=new Set();
    ((window.FOZ||{}).escandalos||[]).forEach(e=>(e.cadeia||[]).forEach(l=>{ if(l.de_id && PA.test(l.status_de||'')) anul.add(l.de_id); }));
    return g.nodes.filter(n=>{ const s=n.situacao||[]; return viz.has(n.id) && (s.includes('condenado') || (s.includes('preso') && !anul.has(n.id))); });
  }
  function placarHTML(){
    const p = (D.placar||[]).slice(); const pd = presosDiretos();
    if(pd.length) p.push({numero:String(pd.length), rotulo:'pessoas ligadas diretamente a ele estiveram presas ou foram condenadas', destino:'rede'});
    return `<div class="placar-band">${p.map(x=>`<button class="pl" data-dest="${esc(x.destino)}"><span class="pn"${x.cor==='tinta'?' style="color:var(--text)"':''}>${esc(x.numero)}</span><span class="pr">${esc(x.rotulo)}</span></button>`).join('')}</div>`;
  }
  function renderTemas(){
    arqItens.style.display='none'; arqGrid.style.display='grid';
    arqGrid.innerHTML = placarHTML() + D.temas.map(t=>{
      const its = itensDoTema(t.id);
      const mid = its.filter(i=>(i.midia||[]).length).length;
      return `<div class="folder" data-tema="${t.id}">
        <div class="tab-c" style="background:${t.cor}"></div>
        <div class="emoji">${t.icone||'📁'}</div>
        <h3>${esc(t.nome)}</h3>
        <div class="count"><span>📄 ${its.length} ${its.length===1?'item':'itens'}</span>${mid?`<span>🎬 ${mid} mídia</span>`:''}</div>
      </div>`;
    }).join('');
    $$('.folder', arqGrid).forEach(f=> f.addEventListener('click', ()=>abrirTema(f.dataset.tema)));
    $$('.placar-band .pl', arqGrid).forEach(b=> b.addEventListener('click', ()=>{
      const d=b.dataset.dest||''; if(d==='rede'){ showView('rede','push'); Grafo.focus('flavio'); }
      else if(d.startsWith('tema:')){ abrirTema(d.slice(5)); window.scrollTo(0,0); }
    }));
  }

  function cardHTML(i){
    const pessoas = (i.pessoas||[]).map(pid=>{
      const n = nodeById[pid]; return n?`<span class="pchip" data-pessoa="${pid}">↔ ${esc(n.nome)}</span>`:'';
    }).join('');
    const fpid = (i.pessoas||[]).find(p=> window.__fotoURL && window.__fotoURL[p]);
    const thumb = fpid ? `<img class="card-foto" src="${esc(window.__fotoURL[fpid])}" alt="">` : '';
    return `<div class="card" data-item="${i.id}">${thumb}
      <div class="row">${badge(i.status)}<span class="tipo">${esc(i.tipo)}</span><span class="date">${esc(i.data||'')}</span>${i.lastro?lastroBadge(i.lastro):''}</div>
      <h4>${esc(tit(i.titulo))}</h4>
      <div class="resumo">${esc(i.resumo||'')}</div>
      <div class="meta-row">${pessoas}</div>
      <div class="src" style="margin-top:8px">${fontesHTML(i.fontes)}</div>
    </div>`;
  }

  function listaItens(its, titulo, voltarFn, extraTop){
    arqGrid.style.display='none'; arqItens.style.display='block';
    arqItens.innerHTML =
      `<button class="backlink" id="volta">← ${esc(titulo)}</button>
       ${extraTop||''}
       <div class="items">${its.map(cardHTML).join('') || '<p style="color:#6c7280">Nada aqui ainda.</p>'}</div>`;
    $('#volta').addEventListener('click', voltarFn||renderTemas);
    wireItemCards(arqItens);
  }
  function abrirTema(id){
    const t = temaById[id];
    const extra = id==='patrimonio' ? patrimonioChartHTML() : id==='senado' ? senadoStatsHTML() : '';
    listaItens(itensDoTema(id), `${t.icone} ${t.nome}`, renderTemas, extra);
  }

  function wireItemCards(root){
    $$('.card', root).forEach(c=> c.addEventListener('click', e=>{
      if(e.target.closest('.pchip')) return;
      abrirDetalhe(c.dataset.item);
    }));
    $$('.pchip', root).forEach(p=> p.addEventListener('click', e=>{
      e.stopPropagation(); showView('rede','push'); Grafo.focus(p.dataset.pessoa);
    }));
  }

  // busca global
  busca && busca.addEventListener('input', ()=>{
    const q = norm(busca.value.trim());
    if(!q){ renderTemas(); return; }
    // "a|b" busca qualquer um dos termos (é o formato dos links da Foz)
    const qs = q.split('|').map(t=>t.trim()).filter(Boolean);
    const hits = D.itens.filter(i=>{ const t = norm(i.titulo+' '+i.resumo+' '+(temaById[i.tema]?.nome||'')); return qs.some(x=> t.includes(x)); });
    listaItens(hits, `Busca: "${busca.value.trim().split('|').map(t=>t.trim()).join('" ou "')}" (${hits.length})`, ()=>{busca.value='';renderTemas();});
  });

  /* ---------------- Detalhe (overlay) ---------------- */
  const overlay = $('#overlay'), sheet = $('#sheet');
  function abrirDetalhe(id){
    const i = D.itens.find(x=>x.id===id); if(!i) return;
    const t = temaById[i.tema];
    const midia = (i.midia||[]).map(m=>`<div class="src">${esc(m.tipo)}: ${m.url?`<a href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.titulo)}</a>`:esc(m.titulo)}</div>`).join('');
    const pessoas = (i.pessoas||[]).map(pid=>{const n=nodeById[pid];return n?`<span class="pchip" data-pessoa="${pid}">↔ ${esc(n.nome)}</span>`:'';}).join('');
    sheet.innerHTML = `
      <header>
        <div>${badge(i.status)} <span class="tipo">${esc(i.tipo)}</span> <span class="date">${esc(i.data||'')}</span>
          <h2 style="margin-top:8px">${esc(tit(i.titulo))}</h2>
          <div style="color:#9aa1b0;font-size:13px;margin-top:2px">${t?esc(t.icone+' '+t.nome):''}</div>
        </div>
        <button class="close" id="fechar">×</button>
      </header>
      <div class="body">
        <div class="resumo">${esc(i.resumo||'')}</div>
        ${i.observacao?`<div class="block"><div class="lbl">Observação</div><div class="src">${esc(i.observacao)}</div></div>`:''}
        ${midia?`<div class="block"><div class="lbl">Mídia</div>${midia}</div>`:''}
        ${pessoas?`<div class="block"><div class="lbl">Pessoas citadas</div><div class="meta-row">${pessoas}</div></div>`:''}
        <div class="block"><div class="lbl">Fontes ${i.lastro?'· '+lastroBadge(i.lastro):''}</div><div class="src">${fontesHTML(i.fontes)}</div></div>
      </div>`;
    $('#fechar').addEventListener('click', fechar);
    $$('.pchip', sheet).forEach(p=>p.addEventListener('click', ()=>{fechar();showView('rede','push');Grafo.focus(p.dataset.pessoa);}));
    overlay.classList.add('open');
  }

  // ---- Ficha do investigado (perfil completo de uma pessoa) ----
  function abrirFicha(id){
    const n = nodeById[id]; if(!n) return;
    const g = D.grafo;
    const viz = (g.edges||[]).filter(e=>e.de===id||e.para===id).map(e=>{
      const o=e.de===id?e.para:e.de, on=nodeById[o];
      return `<div class="vrow" data-node="${o}" style="cursor:pointer"><b>${esc(on?on.nome:o)}</b> — ${esc(e.rotulo||'')} ${e.status?badge(e.status):''}</div>`;
    }).join('');
    const its = itensDaPessoa(id);
    const lista = its.map(i=>`<div class="vrow" data-item="${i.id}" style="cursor:pointer">${badge(i.status)} <b>${esc(tit(i.titulo))}</b> <span class="date">${esc(i.data||'')}</span></div>`).join('');
    const flags = (n.situacao||[]).map(s=>badge(s)).join(' ');
    const sf = (n.situacao_fontes&&n.situacao_fontes.length)?` <a href="${esc(n.situacao_fontes[0].url)}" target="_blank" rel="noopener">[fonte]</a>`:'';
    // Nem todo nome do mapa responde a processo — parte da rede é entorno político,
    // doador e família. Chamar essas pessoas de "investigado" seria falso.
    // A checagem ignora frases negativas: "não é réu, denunciado nem condenado"
    // afirma o contrário das palavras que contém.
    const temProcesso = (n.situacao||[]).length>0 || (n.status||'')
      .split(/[.;]/)
      .filter(f=>!/\b(n[ãa]o|nem|sem processo|sem den[úu]ncia|inexist)/i.test(f))
      .some(f=>/\b(preso|presa|condenad|denunciad|r[ée]u|indiciad|investigad|delator|foragid)/i.test(f));
    const rotuloFicha = temProcesso ? 'FICHA DO INVESTIGADO' : 'FICHA';
    const rotuloSit = temProcesso ? 'Situação penal' : 'Situação';
    sheet.innerHTML = `
      <header>
        ${(window.__fotoURL&&window.__fotoURL[id])?`<img class="ficha-foto" src="${esc(window.__fotoURL[id])}" alt="">`:''}
        <div>
          <div class="lbl" style="color:var(--amber)">${rotuloFicha}</div>
          <h2 style="margin-top:6px">${esc(n.nome)}</h2>
          <div style="color:#9aa1b0;font-size:13px;margin-top:2px">${esc(n.papel||'')}</div>
        </div>
        <button class="close" id="fechar">×</button>
      </header>
      <div class="body">
        <div class="block"><div class="lbl">${rotuloSit}</div><div class="meta-row">${flags||'<span class="src">—</span>'}</div>${n.status?`<div class="src" style="margin-top:6px">${esc(n.status)}${sf}</div>`:''}</div>
        ${fozHTML(id)?`<div class="block">${fozHTML(id)}</div>`:''}
        <div class="block"><div class="lbl">Vínculos (${(g.edges||[]).filter(e=>e.de===id||e.para===id).length})</div><div class="vlist">${viz||'<div class="src">—</div>'}</div></div>
        ${its.length?`<div class="block"><div class="lbl">No arquivo (${its.length})</div><div class="vlist">${lista}</div></div>`:''}
      </div>`;
    $('#fechar').addEventListener('click', fechar);
    $$('.vrow[data-item]', sheet).forEach(r=> r.addEventListener('click', ()=>{ fechar(); showView('arquivo','push'); abrirDetalhe(r.dataset.item); }));
    $$('.vrow[data-node]', sheet).forEach(r=> r.addEventListener('click', ()=> abrirFicha(r.dataset.node)));
    overlay.classList.add('open');
  }
  window.__abrirFicha = abrirFicha;
  function fechar(){ overlay.classList.remove('open'); }
  overlay.addEventListener('click', e=>{ if(e.target===overlay) fechar(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') fechar(); });

  // ---- Método & transparência ----
  function abrirMetodo(){
    sheet.innerHTML = `
      <header><div><div class="lbl" style="color:var(--amber)">DOC</div><h2 style="margin-top:6px">Método &amp; Transparência</h2></div><button class="close" id="fechar">×</button></header>
      <div class="body">
        <div class="resumo">Dossiê de <b>accountability</b> sobre um agente público, com recorte crítico assumido. Para se sustentar, segue regras fixas:</div>
        <div class="block"><div class="lbl">1 · Fonte e status em tudo</div><div class="src">Cada registro traz fonte e o status jurídico correto: investigação ≠ denúncia ≠ processo ≠ anulado ≠ condenação. Acusação nunca é tratada como fato provado.</div></div>
        <div class="block"><div class="lbl">2 · Selo de procedência</div><div class="src">Cada fonte é classificada por nível: ${tierPip('primaria')} PRIMÁRIA (MP/STF/STJ/TSE/COAF/Senado), ${tierPip('referencia')} REFERÊNCIA (imprensa profissional), ${tierPip('agregador')} AGREGADOR, ${tierPip('blog')} BLOG/OPINIÃO. O "lastro" do item é o nível mais alto entre suas fontes.</div></div>
        <div class="block"><div class="lbl">3 · Sem condenação ≠ culpado</div><div class="src">Ex.: a rachadinha foi anulada/arquivada por STJ/STF — sem condenação, e o site diz isso. O Caso Master está em investigação.</div></div>
        <div class="block"><div class="lbl">4 · Close Friends = proximidade</div><div class="src">A rede mostra só a teia de proximidade/favor do senador com gente suspeita. Quem o acusou/investigou/julgou e adversários políticos não entram. Sem dado privado / sem doxxing.</div></div>
        <div class="block"><div class="lbl">5 · Dados oficiais</div><div class="src">Patrimônio (TSE) e atuação no Senado vêm de dados abertos oficiais — com o caminho de reprodução.</div></div>
        <div class="block"><div class="lbl">6 · Modo revisão</div><div class="src">As fontes seguem em conferência. Cada item linka a fonte para você <b>verificar por conta própria</b>.</div></div>
      </div>`;
    $('#fechar').addEventListener('click', fechar);
    overlay.classList.add('open');
  }
  window.__abrirMetodo = abrirMetodo;

  /* ---------------- Rede (grafo force-directed em canvas) ---------------- */
  // o nó dele (grupo "politico") fica em cor neutra: nada dele em vermelho ou âmbar
  const GRUPO_COR = { politico:'#d8efdd', familia:'#fb7185', operadores:'#f59e0b', milicia:'#7c6cf0', juridico:'#60a5fa', financeiro:'#34d399', aliado:'#22d3ee', golpe:'#d946ef', politico_inst:'#22d3ee', outro:'#94a3b8', default:'#94a3b8' };
  const GRUPO_LABEL = { politico:'Flávio', familia:'família', operadores:'operadores', milicia:'milícia', juridico:'advogado', financeiro:'financeiro', aliado:'aliados', golpe:'trama golpista', politico_inst:'instituições', outro:'outros' };
  const grupoCor = g => GRUPO_COR[g] || GRUPO_COR.default;

  // fotos (retratos livres da Wikipédia/Wikimedia — só pessoas com biografia própria, verificadas)
  const WIKI = {"flavio":"Flávio Bolsonaro","jair":"Jair Bolsonaro","michelle":"Michelle Bolsonaro","eduardo":"Eduardo Bolsonaro","carlos-bolsonaro":"Carlos Bolsonaro","vorcaro":"Daniel Vorcaro","ronnie-lessa":"Ronnie Lessa","adriano":"Adriano da Nóbrega","walter-braga-netto":"Walter Braga Netto","mauro-cesar-barbosa-cid":"Mauro Cid","anderson-torres":"Anderson Torres","augusto-heleno":"Augusto Heleno","almir-garnier":"Almir Garnier Santos","alexandre-ramagem":"Alexandre Ramagem","domingos-brazao":"Domingos Brazão","chiquinho-brazao":"Chiquinho Brazão","wassef":"Frederick Wassef","ciro-nogueira":"Ciro Nogueira","tarcisio-de-freitas":"Tarcísio de Freitas","ibaneis-rocha":"Ibaneis Rocha","mario-frias":"Mário Frias","nelson-tanure":"Nelson Tanure","rivaldo-barbosa":"Rivaldo Barbosa","silvinei-vasques":"Silvinei Vasques"};
  const fotoURL = {};   // id -> url (preenchido em runtime)
  const fotoImg = {};   // id -> Image carregada
  window.__fotoURL = fotoURL;

  // caminhos de um caso na teia (drive.html?caminho=<chave>#rede). "foz" é o id do rio em data/foz.js.
  // Caso Marielle: dos 5 condenados pelo STF, dois têm ligação documentada com ele (Ronald e Peixe).
  const CAMINHOS = {
    marielle: {
      titulo: 'Caso Marielle',
      foz: 'marielle-ifop',
      ids: ['flavio','ronald-paulo-alves-pereira','robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca','domingos-brazao','chiquinho-brazao','rivaldo-barbosa'],
      // só as arestas documentadas acendem (entre os nomes do caso há outras, antigas, que não são do caso)
      arestas: [['flavio','ronald-paulo-alves-pereira'],['flavio','robson-calixto-fonseca'],['flavio','instituto-de-formacao-profissional-jose-ca'],['robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca'],['domingos-brazao','chiquinho-brazao'],['domingos-brazao','robson-calixto-fonseca'],['domingos-brazao','ronald-paulo-alves-pereira'],['domingos-brazao','rivaldo-barbosa']],
      // a fonte de cada ligação vem do elo da cadeia na Foz que sai desse nome; a das penas é fixa (o destaque da Foz mudou de fonte)
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
    const cartaoEl = $('#teia-cartao'), dicaEl = $('#teia-dica'), legendaEl = $('#legenda');
    let ctx, W=0, H=0, dpr=1, nodes=[], edges=[], adj={}, started=false, alpha=1, raf=null;
    let sel=null, hover=null;
    let filterSet=null, filterCat=null, filtroTitulo='';
    let caminho=null;   // {chave, ids:Set}: um caso em destaque (drive.html?caminho=marielle#rede)
    let cam={tx:0, ty:0, s:1};
    let BB={x0:-1,y0:-1,x1:1,y1:1};   // caixa da teia (mundo), fixa depois que o layout assenta
    let cheia=false;    // celular: a teia aberta em tela cheia
    let rotulos=[];     // caixas dos rótulos pintados no último quadro (o toque no nome também vale)
    const RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
    const S_MAX = 2.4;

    // categorias de situação penal (placar clicável) — testadas sobre status normalizado (sem acento)
    const SIT = [
      {key:'preso',       label:'Presos ou já presos',     emoji:'🔒', re:/preso|presa|prisao|detid/},
      {key:'condenado',   label:'Condenados',              emoji:'⚖️', re:/condenad/},
      {key:'denunciado',  label:'Denunciados / réus',      emoji:'📋', re:/denunciad|denuncia|\breu\b|\bre em/},
      {key:'investigado', label:'Investigados / suspeitos',emoji:'🔍', re:/investigad|investigac|suspeit|inquerito|\balvo/}
    ];
    // usa tags explícitas (n.situacao) quando houver; senão, regex no texto do status. Uma pessoa pode cair em várias.
    const sitMatch = (n,c) => Array.isArray(n.situacao) ? n.situacao.includes(c.key) : (()=>{const s=norm(n.status||''); return !!(s && c.re.test(s));})();
    function activeIds(){
      if(caminho) return caminho.ids;
      if(sel){ const s=new Set([sel]); (adj[sel]||new Set()).forEach(x=>s.add(x)); return s; }
      if(filterSet) return filterSet;
      return null;
    }
    const sitFonte = n => (n && n.situacao_fontes && n.situacao_fontes.length)
      ? ` <a href="${esc(n.situacao_fontes[0].url)}" target="_blank" rel="noopener" style="color:#86b3ff">[fonte]</a>` : '';

    let GA = {}, porId = {};
    function build(){
      const g = D.grafo || {nodes:[],edges:[]};
      const deg = {}; g.edges.forEach(e=>{deg[e.de]=(deg[e.de]||0)+1;deg[e.para]=(deg[e.para]||0)+1;});
      // âncora de grupo: cada grupo ganha um setor em torno do centro (Flávio)
      const grupos = [...new Set(g.nodes.map(n=>n.grupo).filter(x=>x && x!=='politico'))];
      GA = {}; const R = 540;
      grupos.forEach((gr,k)=>{ const a = (k/grupos.length)*Math.PI*2 - Math.PI/2; GA[gr] = {x:Math.cos(a)*R, y:Math.sin(a)*R}; });
      nodes = g.nodes.map((n)=>{
        const an = (n.id==='flavio') ? {x:0,y:0} : (GA[n.grupo]||{x:0,y:0});
        const jx=(Math.abs(Math.sin((n.id||'x').length*12.9898))*2-1)*70;
        const jy=(Math.abs(Math.sin((n.id||'y').length*78.233))*2-1)*70;
        let rr = n.id==='flavio'?26:(9+Math.min(13,(deg[n.id]||0)*1.4));
        if(WIKI[n.id]) rr = Math.max(rr, 16);   // com foto: maior p/ ver o rosto
        return {...n, deg:deg[n.id]||0, ax:an.x, ay:an.y, wx:an.x+jx, wy:an.y+jy, vx:0, vy:0, r:rr};
      });
      const map = Object.fromEntries(nodes.map(n=>[n.id,n])); porId = map;
      edges = g.edges.map(e=>({...e, a:map[e.de], b:map[e.para]})).filter(e=>e.a&&e.b);
      adj = {}; nodes.forEach(n=>adj[n.id]=new Set());
      edges.forEach(e=>{ adj[e.de].add(e.para); adj[e.para].add(e.de); });
      const f = map['flavio']; if(f){ f.wx=0; f.wy=0; f.ax=0; f.ay=0; f.pin=true; }
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
        // puxa pro centro do GRUPO (forma lóbulos) + leve atração ao centro geral
        n.vx += (n.ax-n.wx)*0.032 + (-n.wx)*0.0005;
        n.vy += (n.ay-n.wy)*0.032 + (-n.wy)*0.0005;
        n.vx*=0.86; n.vy*=0.86;
        n.wx+=n.vx*alpha; n.wy+=n.vy*alpha;
      });
      alpha=Math.max(piso, alpha*0.99);
    }
    // O layout assenta uma vez, antes do primeiro quadro, e para: nada se mexe sozinho
    // depois (nem ao tocar num nome). Só a câmera anda.
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
    // rótulo de cada nome (texto, fonte e largura na tela, que não muda com o zoom)
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
    function draw(){
      ctx.clearRect(0,0,W,H);
      const act = activeIds();
      edges.forEach(e=>{
        let on = false;
        if(caminho){
          // só as arestas entre nomes do caso, em cor neutra (a cor de situação fica no anel de cada nome)
          const cm = caminho.arestas ? caminho.arestas.some(p => (p[0]===e.de && p[1]===e.para) || (p[1]===e.de && p[0]===e.para)) : (caminho.ids.has(e.de) && caminho.ids.has(e.para));
          ctx.strokeStyle = cm ? 'rgba(216,239,221,.9)' : 'rgba(120,200,140,.04)';
          ctx.lineWidth = cm ? 2 : 0.8;
          ctx.beginPath(); ctx.moveTo(SX(e.a),SY(e.a)); ctx.lineTo(SX(e.b),SY(e.b)); ctx.stroke();
          return;
        }
        if(sel) on = (e.de===sel||e.para===sel);
        else if(filterSet) on = filterSet.has(e.de) && filterSet.has(e.para);
        if(hover && (e.de===hover.id||e.para===hover.id)) on = true;
        ctx.strokeStyle = on ? 'rgba(255,176,46,.85)' : (act?'rgba(120,200,140,.05)':'rgba(116,255,150,.11)');
        ctx.lineWidth = on?1.6:0.8;
        ctx.beginPath(); ctx.moveTo(SX(e.a),SY(e.a)); ctx.lineTo(SX(e.b),SY(e.b)); ctx.stroke();
      });
      ctx.textAlign='center'; ctx.lineJoin='round';
      const caixas=[];   // rótulos já pintados neste quadro
      const livre=(x,y,w,h)=>{ for(const c of caixas){ if(x<c.x+c.w && x+w>c.x && y<c.y+c.h && y+h>c.y) return false; } return true; };
      // prioridade de rótulo: selecionado, hover, Flávio, maior grau
      const ordem=[...nodes].sort((a,b)=>(b.id===sel)-(a.id===sel) || (b===hover)-(a===hover) || (b.id==='flavio')-(a.id==='flavio') || b.deg-a.deg);
      nodes.forEach(n=>{
        const x=SX(n), y=SY(n), r=Math.max(4, n.r*cam.s);
        if(x+r+60<0 || x-r-60>W || y+r+30<0 || y-r-30>H) return;   // fora da vista
        const near = act ? act.has(n.id) : true;
        const ring = (n.id===sel) || (n===hover) || (filterSet && filterSet.has(n.id)) || (caminho && caminho.ids.has(n.id));
        ctx.globalAlpha = near?1:(caminho?0.1:0.18);
        if(ring){ ctx.shadowColor=grupoCor(n.grupo); ctx.shadowBlur=16; }
        const im=fotoImg[n.id];
        if(im && im.naturalWidth){
          ctx.save(); ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.closePath(); ctx.clip();
          const sc=Math.max(2*r/im.naturalWidth, 2*r/im.naturalHeight), iw=im.naturalWidth*sc, ih=im.naturalHeight*sc;
          ctx.drawImage(im, x-iw/2, y-ih/2, iw, ih); ctx.restore();
          ctx.lineWidth=2; ctx.strokeStyle=grupoCor(n.grupo); ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke();
        } else {
          ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=grupoCor(n.grupo); ctx.fill();
        }
        ctx.shadowBlur=0;
        // o anel vermelho diz o que importa: preso ou condenado
        if(sitMatch(n,SIT[0]) || sitMatch(n,SIT[1])){ ctx.lineWidth=2.5; ctx.strokeStyle='#ff5c5c'; ctx.beginPath(); ctx.arc(x,y,r+2.5,0,Math.PI*2); ctx.stroke(); }
        if(ring){ ctx.lineWidth=2.5; ctx.strokeStyle='#fff'; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.stroke(); }
        ctx.globalAlpha=1;
      });
      // com nomes acesos, um rótulo não cobre o círculo de outro nome aceso (senão o toque
      // nele pega o rótulo): se embaixo não dá, vai para cima do círculo
      const discos = act ? nodes.filter(q=>act.has(q.id)).map(q=>({q, x:SX(q), y:SY(q), r:Math.max(4, q.r*cam.s)})) : null;
      const cobre = (n,x,y,w,h) => !!discos && discos.some(d=> d.q!==n && d.x+d.r>x && d.x-d.r<x+w && d.y+d.r>y && d.y-d.r<y+h);
      // rótulos por último, em ordem de prioridade, sem sobreposição
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
        ctx.lineWidth=3; ctx.strokeStyle='rgba(6,10,8,.92)'; ctx.strokeText(lab, x, ly+10);
        ctx.fillStyle = near?'#eef0f5':'#aab0bd'; ctx.fillText(lab, x, ly+10);
        ctx.globalAlpha=1;
      });
      rotulos = caixas;
    }

    // ---- desenho sob demanda: só pinta quando algo muda (câmera, seleção, foto) ----
    let fora=false, tween=null;
    function pede(){ if(!raf && started && !fora) raf=requestAnimationFrame(quadro); }
    function quadro(){
      raf=null; if(!canvas.offsetParent) return;
      const anda = passoTween(); draw();
      if(anda) pede();
    }
    if(canvas && 'IntersectionObserver' in window) new IntersectionObserver(es=>{ fora=!es[es.length-1].isIntersecting; if(!fora) pede(); }).observe(canvas);

    // ---- câmera: limites, enquadramento e animação ----
    // área do mapa que nada cobre (a legenda no pé, no desktop; o cartão e a legenda, em tela cheia)
    // Cada peça por cima do mapa corta a área pelo lado que menos tira dele (a legenda em
    // coluna, no desktop largo, corta a esquerda; o cartão, o pé; o "fechar", o topo).
    function areaLivre(){
      const r = canvas.getBoundingClientRect(); let x0=0, x1=W, y0=0, y1=H;
      [legendaEl, cartaoEl, $('#grafo-fechar'), $('#grafo-cheia')].forEach(el=>{
        if(!el || el.hidden || !el.offsetParent) return;
        const b = el.getBoundingClientRect();
        if(!b.height || b.bottom<=r.top || b.top>=r.bottom || b.right<=r.left || b.left>=r.right) return;
        // [lado, fração do mapa que se perde, distância até a borda do mapa]
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
    // câmera que cabe os nomes em ids (todos, se null) na área livre.
    // o.rot: os rótulos também cabem inteiros (eles têm largura fixa na tela, não crescem com o zoom)
    function camPara(ids, o){
      o = o||{};
      const lista = ids ? nodes.filter(n=>ids.has(n.id)) : nodes;
      if(!lista.length) return {...cam};
      let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
      lista.forEach(n=>{ x0=Math.min(x0,n.wx-n.r); x1=Math.max(x1,n.wx+n.r); y0=Math.min(y0,n.wy-n.r); y1=Math.max(y1,n.wy+n.r+18); });
      const A=areaLivre(), px=o.padX!=null?o.padX:30, py=o.padY!=null?o.padY:24;
      const aw=Math.max(40, A.x1-A.x0-2*px), ah=Math.max(40, A.y1-A.y0-2*py);
      let s=Math.min(o.sMax||1.6, aw/(x1-x0||1), ah/(y1-y0||1)), ex=[x0*s, x1*s];
      if(o.rot){
        const ext = s => { let a=1e9, b=-1e9; lista.forEach(n=>{ const e=Math.max(n.r*s, larguraRot(n)/2); a=Math.min(a, n.wx*s-e); b=Math.max(b, n.wx*s+e); }); return [a,b]; };
        const cabe = s => { const [a,b]=ext(s); return b-a<=aw; };
        if(!cabe(s) && cabe(s*0.35)){ let lo=s*0.35, hi=s; for(let i=0;i<18;i++){ const m=(lo+hi)/2; if(cabe(m)) lo=m; else hi=m; } s=lo; }
        ex = ext(s);
      }
      return {s, tx:(A.x0+A.x1)/2-(ex[0]+ex[1])/2, ty:(A.y0+A.y1)/2-(y0+y1)/2*s};
    }
    let sFit=0.3;
    const sMin = () => Math.min(sFit*0.9, 0.9);
    // zoom entre "a teia inteira" e 2,4×; o centro da vista não se afasta da teia
    // (sempre sobra teia à vista: não dá para se perder)
    function limita(c){
      const s=Math.max(sMin(), Math.min(S_MAX, c.s)), cx=W/2, cy=H/2;
      // elipse inscrita na caixa da teia, com folga de 15% da vista: nos cantos da caixa não há teia
      const bx=(BB.x0+BB.x1)/2, by=(BB.y0+BB.y1)/2, rx=(BB.x1-BB.x0)/2+0.15*W/s, ry=(BB.y1-BB.y0)/2+0.15*H/s;
      let wx=(cx-c.tx)/s, wy=(cy-c.ty)/s; const k=Math.hypot((wx-bx)/rx, (wy-by)/ry);
      if(k>1){ wx=bx+(wx-bx)/k; wy=by+(wy-by)/k; }
      let tx=cx-wx*s, ty=cy-wy*s;
      // perto da teia inteira, ela não vai para um canto (depois de afastar com a pinça): no
      // máximo 15% da área fica vazia de um lado; o arraste ainda responde. A folga cresce com
      // o zoom: aproximado, vale só a elipse.
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
      tween = {de:{...cam}, para, t0:performance.now(), dur:dur||320}; pede();
    }
    // o relógio é performance.now(), não a hora do quadro (que pode vir antes do t0 e
    // fazer a câmera recuar ou passar do limite)
    function passoTween(){
      if(!tween) return false;
      const k=Math.max(0, Math.min(1,(performance.now()-tween.t0)/tween.dur)), e=1-Math.pow(1-k,3), a=tween.de, b=tween.para;
      cam={s:a.s+(b.s-a.s)*e, tx:a.tx+(b.tx-a.tx)*e, ty:a.ty+(b.ty-a.ty)*e};
      if(k>=1){ cam={...b}; tween=null; return false; }
      return true;
    }
    const zoomEm = (c,f,mx,my) => { const ns=Math.max(sMin(), Math.min(S_MAX, c.s*f)); return {s:ns, tx:mx-(mx-c.tx)*(ns/c.s), ty:my-(my-c.ty)*(ns/c.s)}; };
    // + e −: com um nome escolhido e à vista, o zoom é nele (ele não foge para baixo do cartão)
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
      // no celular, o mapa na página é uma prévia: começa mais perto, com Flávio no centro
      if(!cheia && W<600){ const f=nodes.find(n=>n.id==='flavio'); if(f){ c.s=Math.max(c.s*1.5, .7); c.tx=W/2-f.wx*c.s; c.ty=H/2-f.wy*c.s; } }
      if(anim) anima(c); else { tween=null; cam=limita(c); pede(); }
    }
    // mostra um nome e os vizinhos dele. De uma lista, da busca ou de um link: enquadra a
    // vizinhança. De um toque no mapa: o zoom fica; se algum vizinho está fora da vista, desliza
    // até a vizinhança (quando ela cabe) ou põe o nome no meio (e nunca debaixo do cartão).
    function mostra(id, deLista){
      const n = porId[id]; if(!n || !W) return;
      const A = areaLivre(), cx=(A.x0+A.x1)/2, cy=(A.y0+A.y1)/2;
      const viz = new Set([id]); (adj[id]||new Set()).forEach(x=>viz.add(x));
      if(deLista){
        let c = camPara(viz, {sMax:1.4, padX:16, padY:30, rot:true});
        if(c.s < 0.5){ const s=Math.max(cam.s, 0.8); c={s, tx:cx-n.wx*s, ty:cy-n.wy*s}; }
        anima(c); return;
      }
      const m=24, vis = q => { const x=SX(q), y=SY(q); return x>=A.x0+m && x<=A.x1-m && y>=A.y0+m && y<=A.y1-m; };
      if([...viz].every(k=>porId[k] && vis(porId[k]))) return;
      const c = camPara(viz, {padX:16, padY:24, rot:true});
      if(c.s >= cam.s){ const bx=(cx-c.tx)/c.s, by=(cy-c.ty)/c.s; anima({s:cam.s, tx:cx-bx*cam.s, ty:cy-by*cam.s}); return; }
      if(Math.hypot(SX(n)-cx, SY(n)-cy) > 40) anima({s:cam.s, tx:cam.tx+(cx-SX(n)), ty:cam.ty+(cy-SY(n))});
    }

    // ---- placar (visão geral) ----
    function showOverview(){
      sairCaminho(); sel=null; filterSet=null; filterCat=null; filtroTitulo='';
      const rows = SIT.map(c=>({...c, ids: nodes.filter(n=>sitMatch(n,c)).map(n=>n.id)}));
      const pd = presosDiretos().length;
      painel.innerHTML = `<h3 style="margin-bottom:2px">Situação penal da rede</h3>
        <div class="papel"><b style="color:var(--text)">${pd} ligados diretamente a ele</b> estiveram presos ou foram condenados.</div>
        <div class="stats">${rows.map(r=>`<button class="stat-row" data-cat="${r.key}">
          <span class="se">${r.emoji}</span><span class="sl">${r.label}</span><span class="sn">${r.ids.length}</span></button>`).join('')}</div>`;
      $$('.stat-row', painel).forEach(b=> b.addEventListener('click', ()=>showCategory(b.dataset.cat)));
      cartao(); pede();
    }
    function showCategory(key){
      const c = SIT.find(x=>x.key===key); if(!c){ showOverview(); return; }
      sairCaminho(); sel=null; const membros = nodes.filter(n=>sitMatch(n,c));
      filterSet = new Set(membros.map(n=>n.id)); filterCat=key; filtroTitulo=c.label;
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3 style="margin-bottom:2px">${c.emoji} ${esc(c.label)} <span style="color:#6c7280">(${membros.length})</span></h3>
        <div class="vlist">${membros.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer">
          <b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.status||'')}${sitFonte(n)}</span></div>`).join('')||'<div class="ph">—</div>'}</div>`;
      $('#ov-back').addEventListener('click', showOverview);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
      cartao(); enquadraFiltro(); pede();
    }
    // um grupo ou uma categoria acesa: enquadra os nomes (se não forem quase a teia inteira)
    function enquadraFiltro(){ if(filterSet && filterSet.size && filterSet.size<=40 && W){ const c=camPara(filterSet, {sMax:1.4, padX:16, padY:24, rot:true}); if(c.s>=sMin()) anima(c); } }
    function showGrupo(g){
      sairCaminho(); sel=null; const membros = nodes.filter(n=>n.grupo===g);
      if(!membros.length) return;
      filterSet = new Set(membros.map(n=>n.id)); filterCat=null; filtroTitulo=GRUPO_LABEL[g]||g;
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3><span style="color:${grupoCor(g)}">●</span> ${esc(GRUPO_LABEL[g]||g)} <span style="color:#6c7280">(${membros.length})</span></h3>
        <div class="vlist">${membros.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer"><b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.papel||'')}</span></div>`).join('')}</div>`;
      $('#ov-back').addEventListener('click', showOverview);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
      cartao(); enquadraFiltro(); pede();
    }
    function doSearch(q){
      q = norm(q).trim();
      if(q.length<2){ showOverview(); return; }
      const m = nodes.filter(n=> norm(n.nome).includes(q));
      sairCaminho(); sel=null; filterSet=new Set(m.map(n=>n.id)); filterCat=null; filtroTitulo='busca: '+q;
      // enquadra o que achou (poucos nomes); com um só, aproxima nele
      if(m.length===1) mostra(m[0].id, true);
      else if(m.length && m.length<=12){ const c=camPara(filterSet, {sMax:1.3, padX:16, padY:30, rot:true}); if(c.s>=sMin()) anima(c); }
      painel.innerHTML = `<div class="papel">busca: "${esc(q)}" — ${m.length} resultado(s)</div>
        <div class="vlist">${m.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer"><b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.papel||'')}</span></div>`).join('')||'<div class="ph">nada encontrado</div>'}</div>`;
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
      cartao(); pede();
    }

    function painelPessoa(id){
      const n = nodeById[id]; if(!n){ showOverview(); return; }
      const viz = edges.filter(e=>e.de===id||e.para===id).map(e=>{
        const o=e.de===id?e.para:e.de; const on=nodeById[o];
        return `<div class="vrow" data-node="${o}" style="cursor:pointer"><b>${esc(on?on.nome:o)}</b> — ${esc(e.rotulo||'')} ${e.status?badge(e.status):''}<br>${fontesHTML(e.fontes)}</div>`;
      }).join('');
      const its = itensDaPessoa(id);
      const lista = its.map(i=>`<div class="vrow" data-item="${i.id}" style="cursor:pointer"><b>${esc(tit(i.titulo))}</b> ${badge(i.status)}</div>`).join('');
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3>${esc(n.nome)}</h3><div class="papel">${esc(n.papel||'')}${n.status?` · ${esc(n.status)}${sitFonte(n)}`:''}</div>
        <button class="backlink" id="ov-ficha" style="margin:10px 0 0">» ficha completa</button>${zapLink(id)}
        ${fozHTML(id)}
        <div class="vlist"><div class="lbl" style="color:#6c7280;font-size:11px;text-transform:uppercase">Vínculos (${edges.filter(e=>e.de===id||e.para===id).length})</div>${viz||'<div class="ph">—</div>'}</div>
        ${its.length?`<div class="vlist"><div class="lbl" style="color:#6c7280;font-size:11px;text-transform:uppercase;margin-top:6px">No arquivo</div>${lista}</div>`:''}`;
      $('#ov-back').addEventListener('click', showOverview);
      $('#ov-ficha').addEventListener('click', ()=> abreFicha(id));
      $$('.vrow[data-item]', painel).forEach(r=> r.addEventListener('click', ()=>abrirDetalhe(r.dataset.item)));
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
    }
    // deLista: veio de uma lista, da busca ou de um link (enquadra a vizinhança); sem ele, veio de um toque no mapa
    function select(id, deLista){
      if(!nodeById[id]) return;
      sairCaminho(); filterSet=null; filterCat=null; filtroTitulo=''; sel=id; hover=null;
      painelPessoa(id); cartao(); mostra(id, deLista); pede();
    }
    // ---- caminho de um caso: foca Flávio e acende só os nomes e arestas do caso ----
    function sairCaminho(){
      if(!caminho) return;
      caminho=null;
      const b=$('#caminho-marielle'); if(b) b.setAttribute('aria-pressed','false');
      const nota=$('#caminho-nota'); if(nota) nota.hidden=true;
      try{ const u=new URL(location.href); if(u.searchParams.has('caminho')){ u.searchParams.delete('caminho'); history.replaceState(history.state, '', u.pathname+u.search+u.hash); } }catch(e){}
    }
    function showCaminho(chave){
      const C = CAMINHOS[chave]; if(!C) return;
      const ids = new Set(C.ids.filter(id=>nodes.some(n=>n.id===id)));
      sel=null; filterSet=null; filterCat=null; filtroTitulo=''; hover=null;
      caminho = {chave, ids, arestas: C.arestas};
      const b=$('#caminho-marielle'); if(b) b.setAttribute('aria-pressed','true');
      try{ const u=new URL(location.href); u.searchParams.delete('p'); u.searchParams.set('caminho', chave); u.hash='rede'; history.replaceState(history.state, '', u.pathname+u.search+u.hash); }catch(e){}
      const e = ((window.FOZ||{}).escandalos||[]).find(z=>z.id===C.foz) || {};
      const nf = C.fontePenas && /^https?:\/\//.test(C.fontePenas.url||'') ? C.fontePenas : null;
      const fl = (C.fontesLig||[]).map(([id,rot])=>{ const l=(e.cadeia||[]).find(x=>x.de_id===id && x.fonte && /^https?:\/\//.test(x.fonte.url||'')); return l ? {rot, f:l.fonte} : null; }).filter(Boolean);
      const fA = f => `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veiculo||'fonte')} ↗</a>`;
      const rows = C.ids.filter(id=>id!=='flavio' && nodeById[id]).map(id=>{ const n=nodeById[id];
        return `<div class="vrow" data-node="${esc(id)}" style="cursor:pointer"><b>${esc(n.nome)}</b></div>`; }).join('');
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3>${esc(C.titulo)}</h3>
        <p class="cm-t">${esc(C.frase)}</p>
        <div class="cm-a">${C.share?`<button type="button" class="cm-env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<a class="cm-foz" href="foz.html#${esc(C.foz)}">elo por elo, na Foz →</a></div>
        ${nf||fl.length?`<p class="cm-f">${[nf?'penas, '+fA(nf):''].concat(fl.map(x=>x.rot+', '+fA(x.f))).filter(Boolean).join(' · ')}</p>`:''}
        <div class="vlist"><div class="lbl" style="color:#6c7280;font-size:11px;text-transform:uppercase">Nomes do caso (${ids.size-1})</div>${rows}</div>`;
      $('#ov-back').addEventListener('click', ()=>{ showOverview(); fitView(true); });
      ligaEnvio(painel);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node, true)));
      // no celular o painel fica abaixo do mapa: uma nota curta acima dele, com a situação dele junto
      const nota=$('#caminho-nota');
      if(nota){
        nota.innerHTML = `<b>${esc(C.titulo)}.</b> ${esc(C.curta)} <span class="cn-a">${C.share?`<button type="button" class="cm-env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<button type="button" class="cn-mais">as ligações ↓</button></span>`;
        nota.hidden=false;
        ligaEnvio(nota);
        nota.querySelector('.cn-mais').addEventListener('click', ()=> painel.scrollIntoView({behavior:'smooth', block:'start'}));
      }
      cartao();
      // câmera: enquadra Flávio e os nomes do caso, com folga para os rótulos
      if(W){ const c=camPara(ids, {sMax:1.6, padX:16, padY:30, rot:true}); anima(c, started?320:0); }
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
        const n=nodeById[sel], nv=(adj[sel]||new Set()).size;
        h = `<div class="tc-top"><b class="tc-nome">${esc(n.nome)}</b><button type="button" class="tc-x" aria-label="limpar seleção">×</button></div>
          ${n.papel?`<p class="tc-papel">${esc(n.papel)}</p>`:''}
          ${n.status?`<p class="tc-sit">${esc(n.status)}${sitFonte(n)}</p>`:''}
          <div class="tc-a"><button type="button" class="tc-ficha">ficha completa</button>${zapLink(sel)}<span class="tc-viz">${nv} ${nv===1?'vínculo aceso':'vínculos acesos'} no mapa</span></div>`;
      } else if(caminho){
        const C=CAMINHOS[caminho.chave]||{};
        h = `<div class="tc-top"><b class="tc-nome">${esc(C.titulo||'')}</b><button type="button" class="tc-x" aria-label="sair do caminho">×</button></div>
          <p class="tc-papel">${esc(C.curta||'')}</p>
          <div class="tc-a">${C.share?`<button type="button" class="cm-env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<a class="tc-foz" href="foz.html#${esc(C.foz||'')}">elo por elo, na Foz →</a></div>`;
      } else if(filterSet){
        h = `<div class="tc-top"><b class="tc-nome">${esc(filtroTitulo||'filtro')} <span class="tc-n">(${filterSet.size})</span></b><button type="button" class="tc-x" aria-label="limpar filtro">×</button></div>
          <p class="tc-papel">Toque num nome aceso.</p>`;
      }
      cartaoEl.innerHTML = h; cartaoEl.hidden = !h;
      if(!h) return;
      const x=cartaoEl.querySelector('.tc-x'); if(x) x.addEventListener('click', ()=>{ showOverview(); });
      const f=cartaoEl.querySelector('.tc-ficha'); if(f) f.addEventListener('click', ()=> abreFicha(sel));
      ligaEnvio(cartaoEl);
    }

    // ---- tela cheia (toque): um dedo move, pinça dá zoom, toque abre a pessoa ----
    let marcador=null, focoVolta=null;
    function centroMundo(){ return {wx:(W/2-cam.tx)/cam.s, wy:(H/2-cam.ty)/cam.s}; }
    function abreCheia(id, teclado){
      if(cheia || !box) return;
      const c0 = W ? centroMundo() : null;
      empurra({teia:1});
      marcador = document.createElement('div'); marcador.className='teia-lugar';
      marcador.style.height = (box.offsetHeight + (parseFloat(getComputedStyle(box).marginBottom)||0))+'px'; box.parentNode.insertBefore(marcador, box);
      cheia=true; box.classList.add('tela-cheia'); document.documentElement.classList.add('teia-cheia');
      resize(); sFit = camPara(null, {padX:14, padY:14}).s;
      if(c0){ tween=null; cam=limita({s:cam.s, tx:W/2-c0.wx*cam.s, ty:H/2-c0.wy*cam.s}); }
      if(id) select(id);
      else {
        cartao();
        // um caso ou uma busca acesos: enquadra os nomes acima do cartão
        const alvo = caminho ? caminho.ids : (filterSet && filterSet.size<=20 ? filterSet : null);
        if(alvo && alvo.size) anima(camPara(alvo, {sMax:1.6, padX:16, padY:30, rot:true}), 0);   // os rótulos cabem inteiros
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
      // de volta à página: o nome escolhido fica no meio da prévia
      const n = sel && porId[sel], w = n ? {wx:n.wx, wy:n.wy} : c0;
      tween=null; cam=limita({s:cam.s, tx:W/2-w.wx*cam.s, ty:H/2-w.wy*cam.s}); pede();
      if(focoVolta && focoVolta.isConnected) try{ focoVolta.focus({preventScroll:true}); }catch(e){}
      focoVolta=null;
    }
    function pedeFechar(){ if(history.state && history.state.teia && !history.state.ficha) history.back(); else fechaCheia(); }

    // ---- dica do desktop: a roda rola a página; zoom com Ctrl/⌘ + roda ----
    let dicaT=null;
    const MAC = /Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent||'');
    function dica(){
      if(!dicaEl) return;
      dicaEl.textContent = (MAC?'⌘':'Ctrl')+' + roda para aproximar';
      dicaEl.classList.add('on'); clearTimeout(dicaT); dicaT=setTimeout(()=>dicaEl.classList.remove('on'), 1300);
    }

    // o toque vale no círculo, no rótulo pintado ou perto do nome (folga maior no dedo)
    function nodeAt(mx,my,folga){
      const act = activeIds(); let best=null, bd=1e9;
      // dentro do círculo de um nome aceso ou com o nome escrito na tela: é ele, mesmo com o
      // rótulo de outro por cima (o círculo sem nome embaixo de um rótulo continua cedendo ao rótulo)
      const nomeado = new Set(rotulos.map(c=>c.n.id));
      for(const n of nodes){ if(!(act && act.has(n.id)) && !nomeado.has(n.id)) continue; const d=Math.hypot(mx-SX(n), my-SY(n)); if(d<=Math.max(4,n.r*cam.s) && d<bd){ bd=d; best=n; } }
      if(best) return best; bd=1e9;
      for(let i=rotulos.length-1;i>=0;i--){ const c=rotulos[i]; if(mx>=c.x && mx<=c.x+c.w && my>=c.y-2 && my<=c.y+c.h+2) return c.n; }
      for(const n of nodes){
        const r=Math.max(4,n.r*cam.s), d=Math.hypot(mx-SX(n), my-SY(n));
        let sc = d<=r ? d-r-1000 : d-r;        // dentro do círculo ganha; senão, o mais perto
        if(act && act.has(n.id) && d>r) sc -= 6;   // perto de um nome aceso, prefere o aceso
        if(sc<=folga && sc<bd){ bd=sc; best=n; }
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
        if(toque(e) && !cheia){ const p=pos(e); downPos=p; last=p; moved=0; return; }   // sem captura: a página rola
        if(e.pointerType==='mouse' && e.button!==0) return;
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
            // sobrou um dedo: ele segue movendo o mapa, sem salto
            if(pts.size===1){ last=[...pts.values()][0]; panning=true; moved=99; } else panning=false; }
          return;
        }
        if(downPos && moved<8){
          const {mx,my}=pos(e);
          if(mx>=0&&my>=0&&mx<=W&&my<=H){
            const n=nodeAt(mx,my, toque(e)?(cheia?18:8):6);
            // na prévia, o toque abre a tela cheia; num nome (aceso, se há caminho ou filtro), já nele
            if(toque(e) && !cheia){ const act=activeIds(); abreCheia(n && (!act || act.has(n.id)) ? n.id : null); }
            else if(n) select(n.id);
            // clique no vazio limpa a seleção; com o mouse, espera um instante: se for um
            // duplo clique (zoom), o segundo clique cancela e a seleção fica
            else if(sel||filterSet||caminho){ if(toque(e)) showOverview(); else limpaT=setTimeout(showOverview, 300); }
          }
        }
        if(tinha || !pts.size){ panning=false; downPos=null; last=null; }
      };
      canvas.addEventListener('pointerup', fim); canvas.addEventListener('pointercancel', fim);
      canvas.addEventListener('pointerleave', e=>{ if(e.pointerType==='mouse'){ ativo=false; if(hover){ hover=null; pede(); } } });
      // roda: zoom só com Ctrl/⌘ (a pinça do trackpad chega assim) ou depois de arrastar o mapa;
      // fora disso, a página rola normalmente e aparece a dica
      canvas.addEventListener('wheel', e=>{
        if(!(e.ctrlKey || e.metaKey || ativo)){ dica(); return; }
        e.preventDefault(); tween=null;
        const {mx,my}=pos(e); const dy = e.deltaMode===1 ? e.deltaY*16 : e.deltaY;
        const f = Math.exp(-Math.max(-60, Math.min(60, dy))*0.004);
        cam=limita(zoomEm(cam, f, mx, my)); pede();
      }, {passive:false});
      canvas.addEventListener('dblclick', e=>{ clearTimeout(limpaT); if(tipo!=='mouse') return; const {mx,my}=pos(e); anima(zoomEm(cam, 1.8, mx, my), 260); });
      const fitBtn=$('#grafo-fit'); if(fitBtn) fitBtn.addEventListener('click', ()=>{ fitView(true); });
      const mais=$('#grafo-mais'); if(mais) mais.addEventListener('click', ()=> zoomBotao(1.5));
      const menos=$('#grafo-menos'); if(menos) menos.addEventListener('click', ()=> zoomBotao(1/1.5));
      const abre=$('#grafo-cheia'); if(abre) abre.addEventListener('click', e=> abreCheia(sel, e.detail===0));
      const fecha=$('#grafo-fechar'); if(fecha) fecha.addEventListener('click', pedeFechar);
      const camBtn = $('#caminho-marielle'); if(camBtn) camBtn.addEventListener('click', ()=>{ if(caminho && caminho.chave==='marielle'){ showOverview(); fitView(true); } else showCaminho('marielle'); });
      const sb = $('#rede-search'); if(sb) sb.addEventListener('input', ()=> doSearch(sb.value));
      // voltar do celular: fecha a tela cheia (e a ficha aberta por cima dela, uma de cada vez).
      // A entrada de volta pode trazer um ?caminho= que já não vale: a URL segue o mapa.
      window.addEventListener('popstate', ()=>{
        const st=history.state||{}; if(cheia && !st.teia) fechaCheia(); if(!st.ficha) fichaNossa=false;
        try{ const u=new URL(location.href), quer=caminho?caminho.chave:null;
          if(u.hash==='#rede' && (u.searchParams.get('caminho')||null)!==quer){ if(quer) u.searchParams.set('caminho',quer); else u.searchParams.delete('caminho'); history.replaceState(history.state, '', u.pathname+u.search+u.hash); } }catch(e){}
      });
      // recarregou a página em tela cheia ou com a ficha aberta: a marca antiga não vale mais
      try{ const st=history.state; if(st && (st.teia || st.ficha)) history.replaceState(Object.assign({}, st, {teia:0, ficha:0}), ''); }catch(e){}
      window.addEventListener('keydown', e=>{ if(e.key==='Escape' && cheia && !$('#overlay.open')) pedeFechar(); }, true);
      // ficha fechada no × (ou fora dela): desfaz a entrada que ela pôs no histórico.
      // A teia saiu da tela (a ficha levou a outra aba): a tela cheia fecha junto.
      const ov=$('#overlay'), vista=$('#view-rede');
      if('MutationObserver' in window){
        const mo = new MutationObserver(()=>{
          if(fichaNossa && ov && !ov.classList.contains('open')){ fichaNossa=false; if(history.state && history.state.ficha) history.back(); }
          if(cheia && vista && !vista.classList.contains('active')) fechaCheia();
        });
        [ov, vista].forEach(el=>{ if(el) mo.observe(el, {attributes:true, attributeFilter:['class']}); });
      }
      // No celular, o resize dispara quando a barra de endereço some ou volta (só a altura
      // muda): aí não se recentraliza, para não desfazer o zoom e o arraste da pessoa.
      let lw=window.innerWidth;
      window.addEventListener('resize', ()=>{ if(!started || !canvas.offsetParent) return;
        const c0=centroMundo(); resize(); sFit=camPara(null, {padX:14, padY:14}).s;
        if(!cheia && window.innerWidth!==lw){ lw=window.innerWidth; fitView(); return; }
        lw=window.innerWidth; cam=limita({s:cam.s, tx:W/2-c0.wx*cam.s, ty:H/2-c0.wy*cam.s}); cartao(); pede(); });
    }

    function renderLegenda(){
      const grupos=[...new Set((D.grafo?.nodes||[]).map(n=>n.grupo).filter(Boolean))];
      const el=legendaEl;
      el.innerHTML = grupos.map(g=>`<span data-grupo="${esc(g)}" title="filtrar ${esc(GRUPO_LABEL[g]||g)}"><i style="background:${grupoCor(g)}"></i>${esc(GRUPO_LABEL[g]||g)}</span>`).join('');
      $$('span[data-grupo]', el).forEach(s=> s.addEventListener('click', ()=>showGrupo(s.dataset.grupo)));
    }

    async function carregarFotos(){
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
      ids.forEach(id=>{ const url=cache[WIKI[id]]; if(!url) return; fotoURL[id]=url;
        const im=new Image(); im.onload=()=>{ fotoImg[id]=im; pede(); }; im.src=url; });
    }
    return {
      ensure(){ if(started){ resize(); pede(); return; } started=true; resize(); build(); bind();
        assenta();                             // assenta o layout e para
        renderLegenda();                       // antes do enquadramento: a legenda ocupa o pé do mapa
        fitView();
        showOverview(); pede(); carregarFotos();
      },
      focus(id, centrar){ this.ensure(); select(id, true); },
      caminho(chave){ this.ensure(); showCaminho(chave); },
      preloadFotos(){ try{ carregarFotos(); }catch(e){} }
    };
  })();

  /* ---------------- Cronologia ---------------- */
  function renderTimeline(){
    // log de eventos: marcos curados + TODOS os itens datados, ordenados, agrupados por ano
    const ev = [];
    (D.timeline||[]).forEach(e=>{ if(e.data) ev.push({data:e.data, titulo:e.titulo, tema:e.tema, fontes:e.fontes||[], status:null}); });
    (D.itens||[]).forEach(i=>{ if(i.data) ev.push({data:i.data, titulo:i.titulo, tema:i.tema, fontes:i.fontes||[], status:i.status, id:i.id}); });
    const k = d => (String(d||'').replace(/[^0-9]/g,'')+'00000000').slice(0,8);
    ev.sort((a,b)=> k(a.data).localeCompare(k(b.data)));
    let html='', yr=null;
    ev.forEach(e=>{
      const y = String(e.data||'????').slice(0,4);
      if(y!==yr){ yr=y; html += `<div class="tl-year">${esc(y)}</div>`; }
      const t = temaById[e.tema];
      const tag = (t? t.id : (e.tema||'')).toUpperCase();
      html += `<div class="tl-log" ${e.id?`data-item="${e.id}"`:''}>
        <span class="tl-ts">${esc(e.data||'')}</span>
        <span class="tl-tag" style="color:${t?t.cor:'#888'}">[${esc(tag)}]</span>
        ${e.status?badge(e.status):''}
        <span class="tl-tit">${esc(tit(e.titulo))}</span>
        ${(e.fontes&&e.fontes.length&&e.fontes[0].url)?`<a class="tl-src" href="${esc(e.fontes[0].url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">» fonte</a>`:''}
      </div>`;
    });
    const el = $('#timeline'); el.innerHTML = html;
    $$('.tl-log[data-item]', el).forEach(r=> r.addEventListener('click', ()=>{ showView('arquivo','push'); abrirDetalhe(r.dataset.item); }));
  }
  let swimDone=false;
  function renderSwimlanes(){
    const el = $('#swimlanes'); if(!el) return;
    const its = (D.itens||[]).filter(i=>i.data && /^\d{4}/.test(String(i.data)));
    const yrs = its.map(i=>parseInt(String(i.data).slice(0,4)));
    const minY=Math.min(...yrs), maxY=Math.max(...yrs), span=Math.max(1,maxY-minY);
    const temas = D.temas.filter(t=> its.some(i=>i.tema===t.id));
    el.innerHTML = `<div class="sl-axis"><span>${minY}</span><span>${Math.round((minY+maxY)/2)}</span><span>${maxY}</span></div>` +
      temas.map(t=>{
        const dots = its.filter(i=>i.tema===t.id).map(i=>{
          const y=parseInt(String(i.data).slice(0,4)); const left=((y-minY)/span*100);
          const st=D.status[i.status]||{cor:'#888'};
          return `<span class="sl-dot" style="left:${left}%;background:${st.cor};box-shadow:0 0 6px ${st.cor}" data-item="${esc(i.id)}" title="${esc((i.data||'')+' · '+tit(i.titulo))}"></span>`;
        }).join('');
        return `<div class="sl-lane"><div class="sl-name" style="color:${t.cor}">${esc(t.nome)}</div><div class="sl-track">${dots}</div></div>`;
      }).join('');
    $$('.sl-dot', el).forEach(d=> d.addEventListener('click', ()=>{ showView('arquivo','push'); abrirDetalhe(d.dataset.item); }));
    swimDone=true;
  }

  /* ---------------- Especialista (retrieval) ---------------- */
  const chatMsgs = $('#chat-msgs');
  function addMsg(role, html){
    const m=document.createElement('div'); m.className='msg';
    m.innerHTML = role==='user'
      ? `<div class="av user">EU</div><div class="bubble">${html}</div>`
      : `<div class="av bot">F</div><div class="bubble">${html}</div>`;
    chatMsgs.appendChild(m); m.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
  function answerItem(i){
    return `<div class="ans-item">${badge(i.status)} <b>${esc(tit(i.titulo))}</b><br><span style="color:#c6cad6">${esc(i.resumo||'')}</span><br><span class="src">${fontesHTML(i.fontes)}</span> <a href="#" data-open="${i.id}" style="color:#7db1ff">abrir no arquivo →</a></div>`;
  }
  function responder(q){
    const nq = norm(q);
    const words = nq.split(/\s+/).filter(w=>w.length>3);
    // pessoa?
    const pessoa = (D.grafo?.nodes||[]).find(n=> nq.includes(norm(n.nome.split(' ')[0])) || nq.includes(norm(n.nome.split(' ').slice(-1)[0])));
    if(pessoa && pessoa.id!=='flavio'){
      const its = itensDaPessoa(pessoa.id);
      return `<b>${esc(pessoa.nome)}</b> — ${esc(pessoa.papel||'')}. ${pessoa.status?'('+esc(pessoa.status)+'). ':''}Veja a aba <b>Rede</b> para os vínculos.` + (its.length?its.map(answerItem).join(''):'');
    }
    // itens por score
    const scored = D.itens.map(i=>{
      const blob = norm(i.titulo+' '+i.resumo+' '+(temaById[i.tema]?.nome||''));
      let s=0; words.forEach(w=>{ if(blob.includes(w)) s++; });
      return {i,s};
    }).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,3);
    if(scored.length){
      return `Encontrei no arquivo:` + scored.map(x=>answerItem(x.i)).join('');
    }
    return `Respondo a partir do arquivo documentado. Tente temas como: ${D.temas.map(t=>t.nome).join(', ')} — ou nomes (ex.: Queiroz).`;
  }
  function perguntar(q){ addMsg('user', esc(q)); setTimeout(()=>{ const m=document.createElement('div'); m.className='msg'; m.innerHTML=`<div class="av bot">F</div><div class="bubble">${responder(q)}</div>`; chatMsgs.appendChild(m);
    $$('[data-open]', m).forEach(a=>a.addEventListener('click', e=>{e.preventDefault();showView('arquivo','push');abrirDetalhe(a.dataset.open);}));
    m.scrollIntoView({behavior:'smooth',block:'nearest'}); }, 200); }
  $('#chat-form').addEventListener('submit', e=>{ e.preventDefault(); const v=$('#chat-inp').value.trim(); if(!v)return; $('#chat-inp').value=''; perguntar(v); });
  $('#chat-chips').innerHTML = D.temas.map(t=>`<button class="c" data-q="${esc(t.nome)}">${t.icone} ${esc(t.nome)}</button>`).join('') + `<button class="c" data-q="Quem é Fabrício Queiroz?">Quem é Queiroz?</button>`;
  $$('#chat-chips .c').forEach(c=> c.addEventListener('click', ()=>perguntar(c.dataset.q)));

  /* ---------------- Notícias (feed ao vivo) ---------------- */
  const Noticias = (function(){
    const Q = '"Flávio Bolsonaro" (rachadinha OR Vorcaro OR "Banco Master" OR investigação OR PF OR STF OR denúncia OR escândalo OR preso OR mansão)';
    const RSS = 'https://news.google.com/rss/search?q=' + encodeURIComponent(Q) + '&hl=pt-BR&gl=BR&ceid=BR:pt-419';
    // Proxies CORS públicos caem com frequência; por isso são vários, e por isso
    // o build também embute uma leva de notícias reais em D.noticiasFallback.
    const PROXIES = [
      u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
      u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u),
      u => 'https://corsproxy.io/?url=' + encodeURIComponent(u),
      u => 'https://api.allorigins.win/get?url=' + encodeURIComponent(u)   // devolve JSON
    ];
    const KEY = 'af_noticias_v1';
    let started=false, itens=[], timer=null;
    const $list = () => $('#news-list'), $st = () => $('#news-status');

    function fmtData(s){ try{ const d=new Date(s); if(isNaN(d)) return ''; return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}); }catch(e){ return ''; } }
    function render(){
      itens = itens.filter(n=>!FORA(n.titulo||n.title));
      $list().innerHTML = itens.length ? itens.map(n=>`
        <a class="news-item" href="${esc(n.url||n.link||'#')}" target="_blank" rel="noopener">
          <div class="nt">${esc(n.titulo||n.title||'')}</div>
          <div class="nm">${esc(n.fonte||n.source||'')}${(n.data||n.date)?' · '+esc(n.data||n.date):''}</div>
        </a>`).join('') : '<div class="ph">Sem notícias no momento.</div>';
    }
    async function buscar(){
      $st().textContent = 'buscando ao vivo…';
      for(const px of PROXIES){
        try{
          // sem prazo, um proxy pendurado deixa o status em "buscando" para sempre
          const ac = new AbortController();
          const kill = setTimeout(()=>ac.abort(), 8000);
          let r;
          try{ r = await fetch(px(RSS), {cache:'no-store', signal:ac.signal}); }
          finally{ clearTimeout(kill); }
          if(!r.ok) continue;
          let txt = await r.text();
          if(txt.trim().startsWith('{')){                 // proxy que embrulha em JSON
            try{ txt = JSON.parse(txt).contents || ''; }catch(e){ continue; }
          }
          const xml = new DOMParser().parseFromString(txt, 'text/xml');
          const its = [...xml.querySelectorAll('item')].slice(0,30).map(it=>({
            titulo: (it.querySelector('title')||{}).textContent || '',
            link:   (it.querySelector('link')||{}).textContent || '',
            data:   fmtData((it.querySelector('pubDate')||{}).textContent || ''),
            fonte:  (it.querySelector('source')||{}).textContent || ''
          })).filter(x=>x.titulo);
          if(its.length){
            itens = its; render();
            try{ localStorage.setItem(KEY, JSON.stringify({t:Date.now(), itens})); }catch(e){}
            $st().textContent = '🟢 ao vivo · ' + its.length + ' notícias · ' + new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
            return true;
          }
        }catch(e){}
      }
      const cap = D.noticiasCaptura;
      $st().textContent = '🟡 feed ao vivo indisponível — ' +
        (cap ? 'mostrando as notícias salvas em ' + esc(cap.split('-').reverse().join('/'))
             : 'mostrando as últimas salvas');
      return false;
    }
    function inicial(){
      try{ const c=JSON.parse(localStorage.getItem(KEY)); if(c&&c.itens&&c.itens.length){ itens=c.itens; render(); return; } }catch(e){}
      itens = (D.noticiasFallback||[]); render();
    }
    function renderArquivo(){
      const el = $('#news-arquivo'); if(!el) return;
      const its = (D.itens||[]).filter(i=>i.data && i.fontes && i.fontes.length && i.fontes[0].url)
        .slice().sort((a,b)=> String(b.data).localeCompare(String(a.data))).slice(0,18);
      el.innerHTML = its.map(i=>{
        const f=i.fontes[0], t=temaById[i.tema];
        const fp=(i.pessoas||[]).find(p=>window.__fotoURL&&window.__fotoURL[p]);
        const th=fp?`<img class="news-foto" src="${esc(window.__fotoURL[fp])}" alt="">`:'';
        return `<a class="news-item${th?' has-foto':''}" href="${esc(f.url)}" target="_blank" rel="noopener">${th}
          <div class="nt">${esc(tit(i.titulo))}</div>
          <div class="nm">${esc(f.veiculo||'fonte')} · ${esc(i.data)} · ${esc(t?t.nome:(i.tema||''))}</div></a>`;
      }).join('');
    }
    return {
      ensure(){
        if(!started){ started=true; inicial(); renderArquivo(); const b=$('#news-refresh'); if(b) b.addEventListener('click', buscar); }
        buscar();
        if(!timer) timer = setInterval(()=>{ if($('#view-noticias').classList.contains('active')) buscar(); }, 5*60*1000);
      }
    };
  })();

  /* ---------------- Recentemente ---------------- */
  // manchete de terceiros que gira em torno de Lula ou do PT fica fora (o site não trata deles)
  function FORA(t){ return /\bLula\b|\bPT\b|petista/i.test(String(t||'')); }
  const JANELA_DIAS = 14;
  function diaKey(d){ const m=String(d||'').match(/^(\d{4})-(\d{2})-(\d{2})/); return m?m[0]:null; }
  function fmtDia(k){ const [y,m,d]=k.split('-'); return `${d}/${m}/${y}`; }
  function recentes(){
    const hoje = new Date(); const lim = new Date(hoje.getTime()-JANELA_DIAS*864e5);
    const limK = lim.toISOString().slice(0,10);
    const ev = [];
    // na vitrine, só o que é sobre ele e sem Lula/PT
    (D.itens||[]).forEach(i=>{ if(FORA(i.titulo) || NAOE.test(i.titulo||'')) return; const k=diaKey(i.data); if(k && k>=limK) ev.push({k, tipo:'fato', i}); });
    (D.noticiasFallback||[]).filter(n=>!FORA(n.titulo)).forEach(n=>{ const k=diaKey(n.data); if(k && k>=limK) ev.push({k, tipo:'news', n}); });
    // manchete que repete um fato do arquivo no mesmo dia não entra duas vezes
    ev.sort((a,b)=> b.k.localeCompare(a.k) || (a.tipo==='fato'?-1:1));
    return ev;
  }
  function renderRecente(){
    const el = $('#rec-lista'); if(!el) return;
    const ev = recentes();
    const cap = D.noticiasCaptura ? fmtDia(D.noticiasCaptura) : '';
    $('#rec-quando') && ($('#rec-quando').textContent = cap ? `Atualizado em ${cap}.` : '');
    if(!ev.length){ el.innerHTML = '<div class="ph">Nada novo nos últimos dias.</div>'; return; }
    const dias = {}; ev.forEach(e=>{ (dias[e.k]=dias[e.k]||[]).push(e); });
    // os 5 dias mais recentes; os anteriores atrás de "dias anteriores"
    const MAXDIAS = 5, ks = Object.keys(dias).sort().reverse();
    el.innerHTML = ks.map((k,di)=>{
      const lista = dias[k];
      const rows = lista.map(e=>{
        if(e.tipo==='fato'){ const i=e.i, t=temaById[i.tema], f=(i.fontes||[])[0];
          return `<div class="rec-it" data-item="${i.id}"><span class="rk" style="color:${t?t.cor:'#888'}">[${esc((t?t.id:i.tema||'').toUpperCase())}]</span>
            <span class="rt">${esc(tit(i.titulo))}${badge(i.status)}</span></div>`; }
        const x=e.n;
        return `<a class="rec-it news" href="${esc(x.url)}" target="_blank" rel="noopener"><span class="rk">[NOTÍCIA]</span><span class="rt">${esc(x.titulo)}</span><span class="rs">» ${esc(x.fonte||'')}</span></a>`;
      });
      // até 4 linhas por dia; o resto atrás de "mais"
      const MAXD = 3, vis = rows.slice(0,MAXD).join(''), resto = rows.slice(MAXD);
      const nf = lista.filter(e=>e.tipo==='fato').length, nn = lista.length-nf;
      return `<div class="rec-day"${di>=MAXDIAS?' hidden':''}><h3>${fmtDia(k)}<span>${nf?`${nf} ${nf===1?'fato':'fatos'}`:''}${nf&&nn?' · ':''}${nn?`${nn} ${nn===1?'manchete':'manchetes'}`:''}</span></h3>${vis}${resto.length?`<div class="rec-resto" hidden>${resto.join('')}</div><button type="button" class="backlink rec-vermais">mais ${resto.length} →</button>`:''}</div>`;
    }).join('') + (ks.length>MAXDIAS?`<button type="button" class="backlink rec-dias">dias anteriores →</button>`:'');
    const bd=$('.rec-dias', el); if(bd) bd.addEventListener('click', ()=>{ $$('.rec-day[hidden]', el).forEach(d=>d.hidden=false); bd.remove(); });
    $$('.rec-it[data-item]', el).forEach(r=> r.addEventListener('click', ()=>{ showView('arquivo','push'); abrirDetalhe(r.dataset.item); }));
    $$('.rec-vermais', el).forEach(b=> b.addEventListener('click', ()=>{ const r=b.previousElementSibling; if(r) r.hidden=false; b.remove(); }));
  }
  $$('.rec-mais [data-go]').forEach(b=> b.addEventListener('click', ()=> showView(b.dataset.go,'push')));

  /* ---------------- init ---------------- */
  // o cabeçalho e a variável --hdr são do assets/nav.js
  function init(){
    if(D.meta && D.meta.revisar===false) $('#revisar') && ($('#revisar').style.display='none');
    Grafo.preloadFotos();
    renderTemas(); renderTimeline();
    const lm = $('#link-metodo'); if(lm) lm.addEventListener('click', abrirMetodo);
    $$('.cron-tab').forEach(b=> b.addEventListener('click', ()=>{
      $$('.cron-tab').forEach(x=>x.classList.toggle('active', x===b));
      const faixas = b.dataset.cron==='faixas';
      $('#timeline').style.display = faixas?'none':'';
      $('#swimlanes').style.display = faixas?'block':'none';
      if(faixas && !swimDone) renderSwimlanes();
    }));
    addMsg('bot', `Sobre o que quer saber?`);
    renderRecente();
    // drive.html?q=termo#arquivo abre o Arquivo com a busca preenchida (links vindos da Foz)
    const q0 = new URLSearchParams(location.search).get('q');
    if(q0 && busca){ busca.value = q0; setTimeout(()=> busca.dispatchEvent(new Event('input')), 0); }
    // lê o hash sem reescrever a URL (drive.html, drive.html#arquivo e ?q=a|b#arquivo seguem como vieram)
    // drive.html?p=<id>#rede abre a teia com aquele nome no centro (links da Foz)
    const p0 = new URLSearchParams(location.search).get('p');
    const pessoa = p0 && nodeById[p0] ? p0 : null;
    const h = (location.hash||'').slice(1);
    // drive.html?caminho=marielle#rede abre a teia com o caminho do caso aceso
    const c0 = new URLSearchParams(location.search).get('caminho');
    const caminho0 = c0 && CAMINHOS[c0] ? c0 : null;
    const v0 = VIEWS.includes(h) ? h : ((pessoa || caminho0) ? 'rede' : 'recente');
    showView(v0);
    if(caminho0 && v0==='rede') Grafo.caminho(caminho0);
    else if(pessoa && v0==='rede') Grafo.focus(pessoa, true);
    // voltar/avançar (popstate) e hash digitado ou clicado (hashchange): mostra a view e
    // devolve a rolagem guardada naquela entrada do histórico
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
