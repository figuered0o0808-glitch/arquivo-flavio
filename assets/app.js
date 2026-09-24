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
      titulo: 'Caso Marielle · 2 de 5',
      foz: 'marielle-ifop',
      ids: ['flavio','ronald-paulo-alves-pereira','robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca','domingos-brazao','chiquinho-brazao','rivaldo-barbosa'],
      // só as arestas documentadas acendem (entre os nomes do caso há outras, antigas, que não são do caso)
      arestas: [['flavio','ronald-paulo-alves-pereira'],['flavio','robson-calixto-fonseca'],['flavio','instituto-de-formacao-profissional-jose-ca'],['robson-calixto-fonseca','instituto-de-formacao-profissional-jose-ca'],['domingos-brazao','chiquinho-brazao'],['domingos-brazao','robson-calixto-fonseca'],['domingos-brazao','ronald-paulo-alves-pereira'],['domingos-brazao','rivaldo-barbosa']],
      // a fonte de cada ligação vem do elo da cadeia na Foz que sai desse nome; a do número (Agência Brasil) é a das penas
      fontesLig: [['ronald-paulo-alves-pereira','homenagem'],['robson-calixto-fonseca','emenda']],
      frase: '2 dos 5 condenados no caso Marielle têm ligação documentada com ele: o major Ronald, homenageado por indicação dele na Alerj em 2004, e o Peixe, que tratou com uma assessora do gabinete dele uma emenda ao Ifop, segundo a PF.',
      curta: '2 dos 5 condenados no caso Marielle têm ligação documentada com ele.',
      share: 'marielle'
    }
  };

  const Grafo = (function(){
    const canvas = $('#grafo'); const painel = $('#rede-painel');
    let ctx, W=0, H=0, dpr=1, nodes=[], edges=[], adj={}, started=false, alpha=1, raf=null;
    let drag=null, panning=false, last=null, downPos=null, moved=0, sel=null, hover=null;
    let filterSet=null, filterCat=null;
    let caminho=null;   // {chave, ids:Set}: um caso em destaque (drive.html?caminho=marielle#rede)
    let cam={tx:0, ty:0, s:1};

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

    let GA = {};
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
      const map = Object.fromEntries(nodes.map(n=>[n.id,n]));
      edges = g.edges.map(e=>({...e, a:map[e.de], b:map[e.para]})).filter(e=>e.a&&e.b);
      adj = {}; nodes.forEach(n=>adj[n.id]=new Set());
      edges.forEach(e=>{ adj[e.de].add(e.para); adj[e.para].add(e.de); });
      const f = map['flavio']; if(f){ f.wx=0; f.wy=0; f.ax=0; f.ay=0; f.pin=true; }
    }
    function resize(){
      const box = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio||1; W=box.width; H=box.height;
      canvas.width=W*dpr; canvas.height=H*dpr; ctx=canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function step(){
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
        if(n===drag) return;
        n.wx+=n.vx*alpha; n.wy+=n.vy*alpha;
      });
      alpha=Math.max(0.04, alpha*0.99);
    }
    const SX = n => n.wx*cam.s + cam.tx;
    const SY = n => n.wy*cam.s + cam.ty;

    function showLabel(n){
      const act = activeIds();
      if(act) return act.has(n.id) || n===hover;
      return n===hover || n.id==='flavio' || n.deg>=6 || cam.s>1.25;
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
      const livre=(x,y,w,h)=>{ for(const c of caixas){ if(x<c.x+c.w && x+w>c.x && y<c.y+c.h && y+h>c.y) return false; } caixas.push({x,y,w,h}); return true; };
      // prioridade de rótulo: selecionado, hover, Flávio, maior grau
      const ordem=[...nodes].sort((a,b)=>(b.id===sel)-(a.id===sel) || (b===hover)-(a===hover) || (b.id==='flavio')-(a.id==='flavio') || b.deg-a.deg);
      nodes.forEach(n=>{
        const near = act ? act.has(n.id) : true;
        const ring = (n.id===sel) || (n===hover) || (filterSet && filterSet.has(n.id)) || (caminho && caminho.ids.has(n.id));
        const x=SX(n), y=SY(n), r=Math.max(4, n.r*cam.s);
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
      // rótulos por último, em ordem de prioridade, sem sobreposição
      ordem.forEach(n=>{
        if(!showLabel(n)) return;
        const near = act ? act.has(n.id) : true;
        const x=SX(n), y=SY(n), r=Math.max(4, n.r*cam.s);
        const lab = n.nome.length>22 ? n.nome.slice(0,21)+'…' : n.nome;
        ctx.font=(n.id==='flavio'?'700 13px ':'600 12px ')+'system-ui, -apple-system, Roboto, sans-serif';
        const w=ctx.measureText(lab).width+6, h=15;
        if(!livre(x-w/2, y+r+2, w, h)) return;
        ctx.globalAlpha = near?1:0.18;
        ctx.lineWidth=3; ctx.strokeStyle='rgba(6,10,8,.92)'; ctx.strokeText(lab, x, y+r+12);
        ctx.fillStyle = near?'#eef0f5':'#aab0bd'; ctx.fillText(lab, x, y+r+12);
        ctx.globalAlpha=1;
      });
    }
    // pausa com a view escondida ou o mapa fora da tela; volta no ensure() ou quando reaparece
    let fora=false;
    function loop(){ if(fora || !canvas.offsetParent){ raf=null; return; } step(); acompanha(); draw(); raf=requestAnimationFrame(loop); }
    if(canvas && 'IntersectionObserver' in window) new IntersectionObserver(es=>{ fora=!es[es.length-1].isIntersecting; if(!fora && started && !raf) loop(); }).observe(canvas);
    function nodeAt(mx,my){ for(let i=nodes.length-1;i>=0;i--){ const n=nodes[i]; const dx=mx-SX(n),dy=my-SY(n); const rr=Math.max(6,n.r*cam.s)+9; if(dx*dx+dy*dy<=rr*rr) return n; } return null; }

    function fitView(){
      if(!nodes.length) return;
      let minX=1e9,minY=1e9,maxX=-1e9,maxY=-1e9;
      nodes.forEach(n=>{ minX=Math.min(minX,n.wx); maxX=Math.max(maxX,n.wx); minY=Math.min(minY,n.wy); maxY=Math.max(maxY,n.wy); });
      const bw=(maxX-minX)||1, bh=(maxY-minY)||1, pad=70;
      cam.s = Math.max(0.32, Math.min(1.6, Math.min((W-pad)/bw, (H-pad)/bh)));
      cam.tx = W/2 - ((minX+maxX)/2)*cam.s;
      cam.ty = H/2 - ((minY+maxY)/2)*cam.s;
      // em tela pequena, começa mais perto, com Flávio no centro: o dedo precisa alcançar os nós
      if(W<600){ const f=nodes.find(n=>n.id==='flavio'); if(f){ cam.s=Math.max(cam.s*1.5, .7); cam.tx=W/2-f.wx*cam.s; cam.ty=H/2-f.wy*cam.s; } }
    }

    // ---- placar (visão geral) ----
    function showOverview(){
      sairCaminho(); sel=null; filterSet=null; filterCat=null;
      const total = nodes.length;
      const rows = SIT.map(c=>({...c, ids: nodes.filter(n=>sitMatch(n,c)).map(n=>n.id)}));
      const pd = presosDiretos().length;
      painel.innerHTML = `<h3 style="margin-bottom:2px">Situação penal da rede</h3>
        <div class="papel"><b style="color:var(--text)">${pd} ligados diretamente a ele</b> estiveram presos ou foram condenados.</div>
        <div class="stats">${rows.map(r=>`<button class="stat-row" data-cat="${r.key}">
          <span class="se">${r.emoji}</span><span class="sl">${r.label}</span><span class="sn">${r.ids.length}</span></button>`).join('')}</div>`;
      $$('.stat-row', painel).forEach(b=> b.addEventListener('click', ()=>showCategory(b.dataset.cat)));
    }
    function showCategory(key){
      const c = SIT.find(x=>x.key===key); if(!c){ showOverview(); return; }
      sairCaminho(); sel=null; const membros = nodes.filter(n=>sitMatch(n,c));
      filterSet = new Set(membros.map(n=>n.id)); filterCat=key; alpha=Math.max(alpha,.3);
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3 style="margin-bottom:2px">${c.emoji} ${esc(c.label)} <span style="color:#6c7280">(${membros.length})</span></h3>
        <div class="vlist">${membros.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer">
          <b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.status||'')}${sitFonte(n)}</span></div>`).join('')||'<div class="ph">—</div>'}</div>`;
      $('#ov-back').addEventListener('click', showOverview);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node)));
    }
    function showGrupo(g){
      sairCaminho(); sel=null; const membros = nodes.filter(n=>n.grupo===g);
      if(!membros.length) return;
      filterSet = new Set(membros.map(n=>n.id)); filterCat=null; alpha=Math.max(alpha,.3);
      painel.innerHTML = `<button class="backlink" id="ov-back">← placar</button>
        <h3><span style="color:${grupoCor(g)}">●</span> ${esc(GRUPO_LABEL[g]||g)} <span style="color:#6c7280">(${membros.length})</span></h3>
        <div class="vlist">${membros.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer"><b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.papel||'')}</span></div>`).join('')}</div>`;
      $('#ov-back').addEventListener('click', showOverview);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node)));
    }
    function doSearch(q){
      q = norm(q).trim();
      if(q.length<2){ showOverview(); return; }
      const m = nodes.filter(n=> norm(n.nome).includes(q));
      sairCaminho(); sel=null; filterSet=new Set(m.map(n=>n.id)); filterCat=null; alpha=Math.max(alpha,.2);
      if(m.length===1){ const n=m[0]; cam.s=Math.max(cam.s,1.1); cam.tx=W/2-n.wx*cam.s; cam.ty=H/2-n.wy*cam.s; }
      painel.innerHTML = `<div class="papel">busca: "${esc(q)}" — ${m.length} resultado(s)</div>
        <div class="vlist">${m.map(n=>`<div class="vrow" data-node="${n.id}" style="cursor:pointer"><b>${esc(n.nome)}</b><br><span style="color:#9aa1b0">${esc(n.papel||'')}</span></div>`).join('')||'<div class="ph">nada encontrado</div>'}</div>`;
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node)));
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
        <button class="backlink" id="ov-ficha" style="margin:10px 0 0">» ficha completa</button>
        ${fozHTML(id)}
        <div class="vlist"><div class="lbl" style="color:#6c7280;font-size:11px;text-transform:uppercase">Vínculos (${edges.filter(e=>e.de===id||e.para===id).length})</div>${viz||'<div class="ph">—</div>'}</div>
        ${its.length?`<div class="vlist"><div class="lbl" style="color:#6c7280;font-size:11px;text-transform:uppercase;margin-top:6px">No arquivo</div>${lista}</div>`:''}`;
      $('#ov-back').addEventListener('click', showOverview);
      $('#ov-ficha').addEventListener('click', ()=> window.__abrirFicha(id));
      $$('.vrow[data-item]', painel).forEach(r=> r.addEventListener('click', ()=>abrirDetalhe(r.dataset.item)));
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node)));
    }
    function select(id){ sairCaminho(); filterSet=null; filterCat=null; sel=id; alpha=Math.max(alpha,.4); painelPessoa(id); }
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
      sel=null; filterSet=null; filterCat=null; hover=null; segue=null;
      caminho = {chave, ids, arestas: C.arestas}; alpha=Math.max(alpha,.2);
      const b=$('#caminho-marielle'); if(b) b.setAttribute('aria-pressed','true');
      try{ const u=new URL(location.href); u.searchParams.delete('p'); u.searchParams.set('caminho', chave); u.hash='rede'; history.replaceState(history.state, '', u.pathname+u.search+u.hash); }catch(e){}
      // câmera: enquadra Flávio e os nomes do caso, com folga para os rótulos
      if(W){
        let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
        nodes.forEach(n=>{ if(ids.has(n.id)){ x0=Math.min(x0,n.wx-n.r); x1=Math.max(x1,n.wx+n.r); y0=Math.min(y0,n.wy-n.r); y1=Math.max(y1,n.wy+n.r+18); } });
        if(x1>x0){
          // no desktop a legenda ocupa o pé do mapa; no celular ela fica abaixo dele
          const padX = W<600 ? 56 : 110, top = 50, base = W<600 ? 36 : 110;
          cam.s = Math.max(0.3, Math.min(1.6, (W-2*padX)/(x1-x0||1), (H-top-base)/(y1-y0||1)));
          cam.tx = W/2 - (x0+x1)/2*cam.s; cam.ty = top + (H-top-base)/2 - (y0+y1)/2*cam.s;
        }
      }
      const e = ((window.FOZ||{}).escandalos||[]).find(z=>z.id===C.foz) || {};
      const nf = e.numero && e.numero.fonte && /^https?:\/\//.test(e.numero.fonte.url||'') ? e.numero.fonte : null;
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
      $('#ov-back').addEventListener('click', ()=>{ showOverview(); fitView(); });
      ligaEnvio(painel);
      $$('.vrow[data-node]', painel).forEach(r=> r.addEventListener('click', ()=>select(r.dataset.node)));
      // no celular o painel fica abaixo do mapa: uma nota curta acima dele, com a situação dele junto
      const nota=$('#caminho-nota');
      if(nota){
        nota.innerHTML = `<b>${esc(C.titulo)}.</b> ${esc(C.curta)} <span class="cn-a">${C.share?`<button type="button" class="cm-env" data-share="${esc(C.share)}">enviar ↗</button>`:''}<button type="button" class="cn-mais">as ligações ↓</button></span>`;
        nota.hidden=false;
        ligaEnvio(nota);
        nota.querySelector('.cn-mais').addEventListener('click', ()=> painel.scrollIntoView({behavior:'smooth', block:'start'}));
      }
    }
    // centraliza um nome (drive.html?p=<id>#rede). O layout ainda assenta por um instante
    // depois da seleção; a câmera acompanha o nó por 2 s ou até a pessoa mexer no mapa.
    let segue=null, segueAte=0;
    function centra(id){
      const n = nodes.find(x=>x.id===id); if(!n || !W) return;
      cam.s = Math.max(cam.s, 1); segue = n; segueAte = performance.now()+2000; acompanha();
    }
    function acompanha(){
      if(!segue) return;
      if(performance.now()>segueAte){ segue=null; return; }
      cam.tx = W/2 - segue.wx*cam.s; cam.ty = H/2 - segue.wy*cam.s;
    }

    // No toque, o mapa começa "solto": um dedo rola a página por cima dele e o toque
    // simples ainda abre a pessoa. "mover o mapa" liga arrastar e pinçar (touch-action:none
    // só nesse modo, via .movendo em app.css); tocar de novo devolve a rolagem à página.
    let movendo=false;
    const toque = e => e.pointerType==='touch' || e.pointerType==='pen';
    function setMovendo(v){
      movendo=!!v; const box=canvas.parentElement, b=$('#grafo-mover');
      if(box) box.classList.toggle('movendo', movendo);
      if(b){ b.setAttribute('aria-pressed', movendo?'true':'false'); b.textContent = movendo ? 'rolar a página' : 'mover o mapa'; }
    }
    function bind(){
      // Pointer Events cobrem mouse e toque; dois dedos = pinça (zoom).
      const pts = new Map(); let pinch=null;
      const pos = e => { const r=canvas.getBoundingClientRect(); return {mx:e.clientX-r.left, my:e.clientY-r.top}; };
      canvas.addEventListener('pointerdown', e=>{
        segue=null;
        // modo solto no toque: sem captura, para o navegador poder rolar a página
        if(toque(e) && !movendo){ const {mx,my}=pos(e); downPos={mx,my}; last={mx,my}; moved=0; drag=null; panning=false; return; }
        canvas.setPointerCapture(e.pointerId); pts.set(e.pointerId, pos(e));
        if(pts.size===2){ const [a,b]=[...pts.values()]; pinch={d:Math.hypot(a.mx-b.mx,a.my-b.my), s:cam.s, cx:(a.mx+b.mx)/2, cy:(a.my+b.my)/2}; drag=null; panning=false; return; }
        const {mx,my}=pos(e); const n=nodeAt(mx,my); downPos={mx,my}; moved=0; last={mx,my};
        if(n){ drag=n; } else { panning=true; }
      });
      canvas.addEventListener('pointermove', e=>{
        const {mx,my}=pos(e);
        if(toque(e) && !movendo){ if(last){ moved+=Math.abs(mx-last.mx)+Math.abs(my-last.my); last={mx,my}; } return; }
        if(pts.has(e.pointerId)) pts.set(e.pointerId,{mx,my});
        if(pinch && pts.size>=2){
          const [a,b]=[...pts.values()]; const d=Math.hypot(a.mx-b.mx,a.my-b.my);
          const ns=Math.max(0.25, Math.min(3, pinch.s*(d/pinch.d)));
          const cx=(a.mx+b.mx)/2, cy=(a.my+b.my)/2;
          cam.tx = cx - (pinch.cx-cam.tx)*(ns/cam.s) - (pinch.cx-cx)*0; cam.ty = cy - (pinch.cy-cam.ty)*(ns/cam.s);
          cam.s=ns; pinch.cx=cx; pinch.cy=cy; moved=99; return;
        }
        if(drag){ drag.wx=(mx-cam.tx)/cam.s; drag.wy=(my-cam.ty)/cam.s; drag.vx=drag.vy=0; alpha=Math.max(alpha,.3); moved+=Math.abs(mx-last.mx)+Math.abs(my-last.my); last={mx,my}; return; }
        if(panning){ cam.tx+=mx-last.mx; cam.ty+=my-last.my; moved+=Math.abs(mx-last.mx)+Math.abs(my-last.my); last={mx,my}; return; }
        if(e.pointerType==='mouse' && mx>=0&&my>=0&&mx<=W&&my<=H){ const h=nodeAt(mx,my); if(h!==hover){ hover=h; canvas.style.cursor=h?'pointer':'grab'; } }
      });
      const fim = e=>{
        pts.delete(e.pointerId);
        // pointercancel = o navegador assumiu o gesto (rolagem): não é toque num nó
        if(e.type==='pointercancel'){ if(pts.size<2) pinch=null; drag=null; panning=false; downPos=null; return; }
        if(pinch){ if(pts.size<2){ pinch=null; drag=null; panning=false; downPos=null; } return; }
        if(downPos && moved<6){ const {mx,my}=pos(e); const n=nodeAt(mx,my);
          if(n) select(n.id); else if(mx>=0&&my>=0&&mx<=W&&my<=H){ showOverview(); } }
        drag=null; panning=false; downPos=null;
      };
      canvas.addEventListener('pointerup', fim); canvas.addEventListener('pointercancel', fim);
      canvas.addEventListener('wheel', e=>{ e.preventDefault(); segue=null; const r=canvas.getBoundingClientRect(); const mx=e.clientX-r.left,my=e.clientY-r.top;
        const f=e.deltaY<0?1.12:0.89; const ns=Math.max(0.25, Math.min(3, cam.s*f));
        cam.tx = mx - (mx-cam.tx)*(ns/cam.s); cam.ty = my - (my-cam.ty)*(ns/cam.s); cam.s=ns; }, {passive:false});
      const fitBtn = $('#grafo-fit'); if(fitBtn) fitBtn.addEventListener('click', ()=>{ showOverview(); fitView(); });
      const movBtn = $('#grafo-mover'); if(movBtn) movBtn.addEventListener('click', ()=> setMovendo(!movendo));
      const camBtn = $('#caminho-marielle'); if(camBtn) camBtn.addEventListener('click', ()=>{ if(caminho && caminho.chave==='marielle'){ showOverview(); fitView(); } else showCaminho('marielle'); });
      const sb = $('#rede-search'); if(sb) sb.addEventListener('input', ()=> doSearch(sb.value));
      // No celular, o resize dispara quando a barra de endereço some ou volta (só a altura
      // muda): aí não se recentraliza, para não desfazer o zoom e o arraste da pessoa.
      let lw=window.innerWidth;
      window.addEventListener('resize', ()=>{ if(!started) return; resize();
        if(window.innerWidth!==lw){ lw=window.innerWidth; fitView(); } });
    }

    function renderLegenda(){
      const grupos=[...new Set((D.grafo?.nodes||[]).map(n=>n.grupo).filter(Boolean))];
      const el=$('#legenda');
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
        const im=new Image(); im.onload=()=>{ fotoImg[id]=im; alpha=Math.max(alpha,.1); }; im.src=url; });
    }
    return {
      ensure(){ if(started){ resize(); if(!raf) loop(); return; } started=true; resize(); build(); bind();
        for(let i=0;i<600;i++) step();        // pré-assenta o layout
        fitView(); canvas.style.cursor='grab';
        showOverview(); renderLegenda(); loop(); carregarFotos();
      },
      focus(id, centrar){ this.ensure(); select(id); if(centrar) centra(id); },
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
