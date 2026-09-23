/* Perguntas do bloco 'o básico' do quiz (quiz.html). Ficam num arquivo à parte para que
   outras páginas (a Foz) contem as perguntas sem repetir o número à mão. */
window.__QUIZ_BASICO = (function(){
'use strict';
const fmtBRL = v => 'R$ ' + Number(v).toLocaleString('pt-BR', {
  minimumFractionDigits: Number.isInteger(v) ? 0 : 2, maximumFractionDigits: 2 });
const fmtPct = v => Number(v).toLocaleString('pt-BR') + '%';

/* Fontes (veículo, detalhe, URL). Cada resposta aponta para uma ou duas. */
const F = {
  poder_doacoes: { v:'Poder360', d:'prestação de contas parcial ao TSE, consultada em 26/08/2026',
    u:'https://www.poder360.com.br/poder-eleicoes-2026/flavio-lidera-em-doacoes-a-candidatos-ao-planalto-lula-e-2o/' },
  poder_patrimonio: { v:'Poder360', d:'registro da candidatura no TSE, 13/08/2026',
    u:'https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/' },
  jbr: { v:'Jornal de Brasília', d:'08/08/2026',
    u:'https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-concentrou-emendas-em-seguranca-e-defesa-e-deixou-ciencia-e-agricultura-de-fora/' },
  em: { v:'Estado de Minas', d:'28/06/2026',
    u:'https://www.em.com.br/politica/2026/06/7450571-flavio-bolsonaro-se-ausentou-em-43-das-votacoes-nominais-do-senado.html' },
  bdf: { v:'Brasil de Fato', d:'02/04/2026',
    u:'https://www.brasildefato.com.br/2026/04/02/em-sete-anos-flavio-bolsonaro-teve-apenas-um-projeto-de-lei-aprovado-no-congresso/' },
  senado: { v:'Senado Federal', d:'Dados Abertos, cód. 5894, apurados em 09/09/2026',
    u:'https://www25.senado.leg.br/web/senadores/senador/-/perfil/5894' },
  itatiaia: { v:'Itatiaia', d:'entrevista ao Jornal Nacional, 28/08/2026',
    u:'https://www.itatiaia.com.br/politica/eleicoes/flavio-bolsonaro-justifica-medalha-a-adriano-da-nobrega-policial-exemplar-na-epoca/' },
  carta: { v:'CartaCapital', d:'decisão do STF de 26/02/2025',
    u:'https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/' },
  metropoles: { v:'Metrópoles', d:'pedido à PF em 02/07/2026',
    u:'https://www.metropoles.com/colunas/manoela-alcantara/lindbergh-pede-a-pf-que-investigue-mansao-usada-por-flavio-como-qg' }
};

/* As perguntas. Só fatos; status jurídico dentro da resposta. */
const BASICO = [
  { tipo:'faixa', min:0, max:1000000, passo:1, inicio:500000, fmt:fmtBRL, dif: d => fmtBRL(Math.round(d * 100) / 100),
    extremos:['R$ 0','R$ 1 milhão'],
    pergunta:'Até 26/08/2026, na prestação de contas parcial ao TSE, quanto pessoas físicas tinham doado à campanha presidencial dele?',
    valor:6.01, acerta: v => v <= 10000,
    numero:'R$ 6,01',
    resposta:'Na prestação de contas parcial ao TSE consultada em 26/08/2026, pessoas físicas tinham doado <b>R$ 6,01</b> à campanha presidencial de Flávio Bolsonaro. O PL, partido dele, repassou <b>R$ 42 milhões</b>.',
    ressalva:'Em setembro de 2026, as maiores doações de pessoa física registradas eram de R$ 500 mil (Erasmo Battistella e Fernando de Castro Marques).',
    chip:'FATO · PRESTAÇÃO DE CONTAS AO TSE',
    fontes:[F.poder_doacoes],
    curto:'Doações de pessoas físicas até 26/08', gab:'R$ 6,01',
    zap:'Até 26/08/2026, pessoas físicas tinham doado R$ 6,01 à campanha presidencial de Flávio Bolsonaro; o PL, partido dele, repassou R$ 42 milhões. Prestação de contas parcial ao TSE.' },

  { tipo:'multi',
    pergunta:'Quantos projetos de autoria dele viraram lei em 7 anos de Senado?',
    opcoes:['0','1','12','37'], certa:1,
    numero:'1 projeto',
    resposta:'Em 7 anos de Senado, <b>1 projeto de autoria dele virou lei</b>. Dados oficiais do Senado (cód. 5894, apurados em 09/09/2026): 188 relatorias, 1.142 votações, 1 projeto de autoria aprovado.',
    chip:'FATO · DADOS ABERTOS DO SENADO',
    fontes:[F.bdf, F.senado],
    curto:'Projetos de autoria dele que viraram lei', gab:'1',
    zap:'Em 7 anos de Senado, 1 projeto de autoria de Flávio Bolsonaro virou lei. Dados oficiais do Senado (cód. 5894, apurados em 09/09/2026): 188 relatorias, 1.142 votações, 1 projeto de autoria aprovado.' },

  { tipo:'faixa', min:0, max:500, passo:5, inicio:250, fmt:fmtPct, dif: d => Number(d).toLocaleString('pt-BR') + (d === 1 ? ' ponto percentual' : ' pontos percentuais'),
    extremos:['0%','500%'],
    pergunta:'Quanto o patrimônio que ele declarou ao TSE cresceu de 2018 a 2026, acima da inflação?',
    valor:211, acerta: v => v >= 180 && v <= 240,
    numero:'211%',
    resposta:'O patrimônio declarado ao TSE foi de <b>R$ 1,74 milhão</b> (2018, eleição ao Senado) a <b>R$ 8,19 milhões</b> (2026, registro da candidatura): <b>4,7 vezes</b>, cerca de <b>211% de alta real</b> descontado o IPCA. A inflação sozinha levaria 2018 a cerca de R$ 2,6 milhões.',
    chip:'FATO · DECLARADO POR ELE AO TSE',
    fontes:[F.poder_patrimonio],
    ressalva:'A declaração usa valor de aquisição. O maior item é uma casa no Lago Sul, de R$ 6,2 milhões.',
    curto:'Alta do patrimônio acima da inflação', gab:'211%',
    zap:'O patrimônio que Flávio Bolsonaro declarou ao TSE foi de R$ 1,74 milhão (2018) a R$ 8,19 milhões (2026): 4,7 vezes, cerca de 211% de alta real descontado o IPCA.' },

  { tipo:'multi',
    pergunta:'De cada R$ 100 em emendas indicadas por ele, quanto foi para educação?',
    opcoes:['R$ 0,80','R$ 8','R$ 21','R$ 50'], certa:0,
    numero:'R$ 0,80',
    resposta:'Das emendas indicadas por ele nos orçamentos 2020–2026 (R$ 364 milhões, corrigidos pela inflação), educação ficou com <b>0,8%</b> (R$ 2,9 mi). <b>Pouco mais da metade foi para saúde</b>: 50,8% (R$ 185,5 mi). Defesa, 21,8%; segurança pública, 19,4%; ciência e agricultura, nada.',
    chip:'FATO · ORÇAMENTO DA UNIÃO',
    fontes:[F.jbr],
    curto:'Emendas para educação, de cada R$ 100', gab:'R$ 0,80',
    zap:'De cada R$ 100 em emendas indicadas por Flávio Bolsonaro nos orçamentos 2020–2026, R$ 0,80 foi para educação. Saúde ficou com 50,8%; defesa, 21,8%; segurança pública, 19,4%; ciência e agricultura, nada.' },

  { tipo:'multi',
    pergunta:'Em 2026, ele não registrou voto em que fração das votações nominais do Senado?',
    opcoes:['4%','20%','43%','71%'], certa:2,
    numero:'43%',
    resposta:'Não registrou voto em <b>43%</b> das 49 deliberações nominais do Senado analisadas em 2026 (até 16/06). <b>A média entre os 81 senadores é 20%</b>; ele é o <b>5º em ausências</b> (Romário, 53%, lidera).',
    chip:'FATO · VOTAÇÕES NOMINAIS DO SENADO',
    fontes:[F.em],
    curto:'Ausência em votações nominais (2026)', gab:'43%',
    zap:'Flávio Bolsonaro não registrou voto em 43% das 49 deliberações nominais do Senado analisadas em 2026 (até 16/06). A média entre os 81 senadores é 20%; ele é o 5º em ausências.' },

  { tipo:'multi',
    pergunta:'A quem ele deu a Medalha Tiradentes na Alerj, homenagem que justificou na TV em 28/08/2026?',
    opcoes:['A um delegado da Polícia Civil',
            'A Adriano da Nóbrega, ex-capitão apontado como chefe do Escritório do Crime',
            'A um oficial do Corpo de Bombeiros',
            'A um desembargador do TJ-RJ'], certa:1,
    resposta:'Flávio concedeu na Alerj a <b>Medalha Tiradentes (2005)</b> e uma moção de louvor (2003) a <b>Adriano Magalhães da Nóbrega</b>, ex-capitão do Bope apontado como chefe do “Escritório do Crime”, condenado por homicídio em 2014 e morto em operação policial em 09/02/2020. Em 28/08/2026, no Jornal Nacional, Flávio disse que ele era um <b>“policial exemplar”</b> à época.',
    chip:'FATO · ALERJ (2003 E 2005) · JORNAL NACIONAL, 28/08/2026',
    fontes:[F.itatiaia],
    curto:'Medalha Tiradentes na Alerj', gab:'Adriano da Nóbrega',
    zap:'Flávio Bolsonaro concedeu na Alerj a Medalha Tiradentes (2005) e uma moção de louvor (2003) a Adriano da Nóbrega, ex-capitão do Bope apontado como chefe do "Escritório do Crime", condenado por homicídio em 2014. Em 28/08/2026, no Jornal Nacional, disse que ele era um "policial exemplar" à época.' },

  { tipo:'multi',
    pergunta:'Ele foi condenado no caso da rachadinha da Alerj?',
    opcoes:['Sim, em 2022',
            'Sim, mas recorreu',
            'Não: a denúncia foi anulada e o mérito nunca foi julgado',
            'O caso ainda está em julgamento'], certa:2,
    numero:'NUNCA CONDENADO',
    resposta:'A denúncia do MP-RJ (2020) foi <b>anulada</b>: o STJ anulou as provas em 2021, o STF reconheceu o foro privilegiado, o caso foi arquivado em 2022 e o STF negou os recursos do MP em 26/02/2025. Ele <b>nunca foi condenado</b> e o mérito <b>nunca foi julgado</b>.',
    chip:'DENÚNCIA ANULADA · NUNCA CONDENADO',
    fontes:[F.carta],
    ressalva:'Se alguém disser que ele foi condenado por rachadinha, está errado. A pergunta está aqui para que o status do caso fique claro.',
    curto:'Rachadinha da Alerj', gab:'Nunca condenado',
    zap:'Sobre a rachadinha da Alerj: a denúncia foi anulada e Flávio Bolsonaro nunca foi condenado. O STJ anulou as provas em 2021, o caso foi arquivado em 2022 e o STF negou os recursos do MP em 26/02/2025. O mérito nunca foi julgado.' },

  { tipo:'multi',
    pergunta:'Quanto custou a mansão usada como QG da pré-campanha dele, em nome de um coordenador da campanha?',
    opcoes:['R$ 1,4 milhão','R$ 4 milhões','R$ 14,5 milhões','R$ 42 milhões'], certa:2,
    numero:'R$ 14,5 milhões',
    resposta:'A mansão de <b>R$ 14,5 milhões</b> em Brasília está registrada em nome do advogado José Vicente Santini, coordenador da campanha, e foi usada como QG da pré-campanha: R$ 4 milhões de entrada e <b>R$ 10,5 milhões financiados pelo BRB</b>. Em 02/07/2026 um deputado pediu à PF que apurasse a origem dos recursos. Santini diz que a renda vem do escritório e de uma empresa de segurança e que <b>“está tudo declarado”</b>.',
    chip:'FATO · PEDIDO DE APURAÇÃO À PF EM 02/07/2026',
    fontes:[F.metropoles],
    curto:'Mansão usada como QG da pré-campanha', gab:'R$ 14,5 milhões',
    zap:'A mansão de R$ 14,5 milhões usada como QG da pré-campanha de Flávio Bolsonaro está em nome do advogado José Vicente Santini, coordenador da campanha: R$ 4 milhões de entrada e R$ 10,5 milhões financiados pelo BRB. Em 02/07/2026 um deputado pediu à PF que apurasse a origem dos recursos; Santini diz que "está tudo declarado".' }
];
return BASICO;
})();
