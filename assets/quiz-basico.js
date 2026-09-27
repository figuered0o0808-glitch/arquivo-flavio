/* Perguntas do bloco 'o básico' do quiz (quiz.html). Ficam num arquivo à parte para que
   outras páginas (a Foz) contem as perguntas sem repetir o número à mão. */
window.__QUIZ_BASICO = (function(){
'use strict';
const fmtBRL = v => 'R$ ' + Number(v).toLocaleString('pt-BR', {
  minimumFractionDigits: Number.isInteger(v) ? 0 : 2, maximumFractionDigits: 2 });
const fmtPct = v => Number(v).toLocaleString('pt-BR') + '%';

/* Fontes (veículo, detalhe, URL). Cada resposta aponta para uma ou mais. */
const F = {
  brasilianista: { v:'O Brasilianista', d:'prestação de contas parcial ao TSE (entregue em 13/09/2026), 21/09/2026',
    u:'https://obrasilianista.com.br/2026/09/21/politica/onde-esta-o-dinheiro-das-campanhas-de-lula-flavio-e-caiado' },
  correio: { v:'Correio Braziliense', d:'doações de pessoas físicas na prestação parcial ao TSE, 18/09/2026',
    u:'https://www.correiobraziliense.com.br/politica/2026/09/7503612-flavio-e-caiado-lideram-lista-de-doacoes-de-pessoas-fisicas-rs-25-milhoes.html' },
  poder_doacoes: { v:'Poder360', d:'prestação de contas parcial ao TSE, consultada em 26/08/2026',
    u:'https://www.poder360.com.br/poder-eleicoes-2026/flavio-lidera-em-doacoes-a-candidatos-ao-planalto-lula-e-2o/' },
  poder_patrimonio: { v:'Poder360', d:'registro da candidatura no TSE, 13/08/2026',
    u:'https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/' },
  jbr: { v:'Jornal de Brasília', d:'08/08/2026',
    u:'https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-concentrou-emendas-em-seguranca-e-defesa-e-deixou-ciencia-e-agricultura-de-fora/' },
  em: { v:'Estado de Minas', d:'28/06/2026',
    u:'https://www.em.com.br/politica/2026/06/7450571-flavio-bolsonaro-se-ausentou-em-43-das-votacoes-nominais-do-senado.html' },
  senado: { v:'Senado Federal', d:'Dados Abertos, cód. 5894, apurados em 09/09/2026',
    u:'https://www25.senado.leg.br/web/senadores/senador/-/perfil/5894' },
  bdf: { v:'Brasil de Fato', d:'02/04/2026',
    u:'https://www.brasildefato.com.br/2026/04/02/em-sete-anos-flavio-bolsonaro-teve-apenas-um-projeto-de-lei-aprovado-no-congresso/' },
  itatiaia: { v:'Itatiaia', d:'entrevista ao Jornal Nacional, 28/08/2026',
    u:'https://www.itatiaia.com.br/politica/eleicoes/flavio-bolsonaro-justifica-medalha-a-adriano-da-nobrega-policial-exemplar-na-epoca/' },
  carta: { v:'CartaCapital', d:'decisão do STF de 26/02/2025',
    u:'https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/' }
};

/* As perguntas. Só fatos; status jurídico dentro da resposta. */
const BASICO = [
  { tipo:'faixa', min:0, max:100, passo:1, inicio:50, fmt:fmtPct, dif: d => Number(d).toLocaleString('pt-BR') + (d === 1 ? ' ponto percentual' : ' pontos percentuais'),
    extremos:['0%','100%'],
    pergunta:'Do dinheiro que a campanha presidencial dele arrecadou até 08/09/2026, que fatia veio do partido, o PL?',
    valor:95, acerta: v => v >= 85,
    numero:'95%',
    resposta:'Pela prestação de contas parcial entregue ao TSE em 13/09/2026 (movimentação até 08/09), a campanha presidencial de Flávio Bolsonaro recebeu <b>R$ 53,5 milhões</b> da direção nacional do PL: <b>95% do total</b>. Pessoas físicas doaram <b>R$ 2,56 milhões</b>; a maior doação, de R$ 500 mil, foi do empresário Erasmo Battistella.',
    ressalva:'Até 26/08/2026, a prestação parcial registrava R$ 6,01 doados por pessoas físicas (Poder360).',
    chip:'FATO · PRESTAÇÃO DE CONTAS PARCIAL AO TSE',
    fontes:[F.brasilianista, F.correio, F.poder_doacoes],
    curto:'Fatia da campanha vinda do PL (até 08/09)', gab:'95%',
    breve:'R$ 53,5 milhões do PL, segundo a prestação de contas parcial ao TSE (13/09); de pessoas físicas, R$ 2,56 milhões.',
    zap:'Do dinheiro que a campanha presidencial de Flávio Bolsonaro arrecadou até 08/09/2026, 95% veio do PL: R$ 53,5 milhões, segundo a prestação de contas parcial ao TSE (13/09). Pessoas físicas doaram R$ 2,56 milhões; a maior doação foi de R$ 500 mil (Erasmo Battistella). Fontes: O Brasilianista (21/09/2026), Correio Braziliense (18/09/2026).' },

  { tipo:'multi',
    pergunta:'Em 7 anos de Senado, quantos projetos de lei de autoria dele foram aprovados pelo Congresso?',
    opcoes:['0','1','12','37'], certa:1,
    numero:'1 projeto',
    resposta:'Em 7 anos de Senado, <b>1 projeto de lei de autoria dele foi aprovado pelo Congresso</b>: o PL 3.190/2023, sobre microcrédito, sancionado com vetos. Dados abertos do Senado (cód. 5894, apurados em 09/09/2026): 188 relatorias, 1.142 votações, 1 projeto de autoria aprovado.',
    chip:'FATO · DADOS ABERTOS DO SENADO',
    fontes:[F.senado, F.bdf],
    curto:'Projetos de lei de autoria dele aprovados', gab:'1',
    breve:'Aprovado pelo Congresso em 7 anos de Senado: o PL 3.190/2023 (microcrédito), sancionado com vetos, segundo os dados abertos do Senado.',
    zap:'Em 7 anos de Senado, 1 projeto de lei de autoria de Flávio Bolsonaro foi aprovado pelo Congresso: o PL 3.190/2023, sobre microcrédito, sancionado com vetos. Dados abertos do Senado (cód. 5894, apurados em 09/09/2026): 188 relatorias, 1.142 votações, 1 projeto de autoria aprovado.' },

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
    breve:'De R$ 1,74 milhão (2018) a R$ 8,19 milhões (2026), declarados por ele ao TSE.',
    zap:'O patrimônio que Flávio Bolsonaro declarou ao TSE foi de R$ 1,74 milhão (2018) a R$ 8,19 milhões (2026): 4,7 vezes, cerca de 211% de alta real descontado o IPCA.' },

  { tipo:'multi',
    pergunta:'De cada R$ 100 em emendas indicadas por ele, quanto foi para educação?',
    opcoes:['R$ 0,80','R$ 8','R$ 21','R$ 50'], certa:0,
    numero:'R$ 0,80',
    resposta:'Das emendas indicadas por ele nos orçamentos 2020–2026 (R$ 364 milhões, corrigidos pela inflação), educação ficou com <b>0,8%</b> (R$ 2,9 mi). <b>Pouco mais da metade foi para saúde</b>: 50,8% (R$ 185,5 mi). Defesa, 21,8%; segurança pública, 19,4%; ciência e agricultura, nada.',
    chip:'FATO · ORÇAMENTO DA UNIÃO',
    fontes:[F.jbr],
    curto:'Emendas para educação, de cada R$ 100', gab:'R$ 0,80',
    breve:'De cada R$ 100 em emendas dele, para educação.',
    zap:'De cada R$ 100 em emendas indicadas por Flávio Bolsonaro nos orçamentos 2020–2026, R$ 0,80 foi para educação. Saúde ficou com 50,8%; defesa, 21,8%; segurança pública, 19,4%; ciência e agricultura, nada.' },

  { tipo:'multi',
    pergunta:'Em 2026, até 16/06, ele não registrou voto em que fração das deliberações nominais do Senado?',
    opcoes:['4%','20%','43%','71%'], certa:2,
    numero:'43%',
    resposta:'Não registrou voto em <b>43%</b> das 49 deliberações nominais do Senado analisadas em 2026 (até 16/06). <b>A média entre os 81 senadores é 20%</b>; ele é o <b>5º em ausências</b> (Romário, 53%, lidera).',
    chip:'FATO · VOTAÇÕES NOMINAIS DO SENADO',
    fontes:[F.em],
    curto:'Ausência em votações nominais (2026)', gab:'43%',
    breve:'Das votações de 2026 sem voto dele; a média no Senado é 20%.',
    zap:'Flávio Bolsonaro não registrou voto em 43% das 49 deliberações nominais do Senado analisadas em 2026 (até 16/06). A média entre os 81 senadores é 20%; ele é o 5º em ausências.' },

  { tipo:'multi',
    pergunta:'A quem ele deu a Medalha Tiradentes na Alerj, homenagem que justificou na TV em 28/08/2026?',
    opcoes:['A um delegado da Polícia Civil',
            'A Adriano da Nóbrega, ex-capitão apontado pelo MP-RJ como chefe do Escritório do Crime',
            'A um oficial do Corpo de Bombeiros',
            'A um desembargador do TJ-RJ'], certa:1,
    resposta:'Flávio concedeu na Alerj a <b>Medalha Tiradentes (2005)</b> e uma moção de louvor (2003) a <b>Adriano Magalhães da Nóbrega</b>, ex-capitão do Bope: condenado em 1ª instância em 2005 pela morte de um guardador de carros e absolvido depois; exonerado da PM em 2014; apontado pelo MP-RJ como chefe do “Escritório do Crime”; morto em operação policial em 09/02/2020, sem ser julgado no caso do Escritório do Crime. Em 28/08/2026, no Jornal Nacional, Flávio disse que ele era um <b>“policial exemplar”</b> à época.',
    chip:'FATO · ALERJ (2003 E 2005) · JORNAL NACIONAL, 28/08/2026',
    fontes:[F.itatiaia],
    curto:'Medalha Tiradentes na Alerj', gab:'Adriano da Nóbrega',
    breve:'A Adriano da Nóbrega, apontado pelo MP-RJ como chefe do Escritório do Crime.',
    zap:'Flávio Bolsonaro concedeu na Alerj a Medalha Tiradentes (2005) e uma moção de louvor (2003) a Adriano da Nóbrega, ex-capitão do Bope apontado pelo MP-RJ como chefe do "Escritório do Crime": condenado em 1ª instância em 2005 e absolvido depois; exonerado da PM em 2014; morto em 09/02/2020 sem ser julgado no caso do Escritório do Crime. Em 28/08/2026, no Jornal Nacional, Flávio disse que ele era um "policial exemplar" à época.' },

  { tipo:'multi',
    pergunta:'Quantas pessoas o MP-RJ denunciou na rachadinha da Alerj, em 2020?',
    opcoes:['3','9','17','40'], certa:2,
    numero:'17 denunciados',
    resposta:'Em 2020, o MP-RJ denunciou <b>17 pessoas</b> na rachadinha da Alerj, ele entre elas. A denúncia foi <b>anulada</b>: o STJ anulou as provas em 2021, o caso foi arquivado em 2022 e o STF negou os recursos do MP em 26/02/2025.',
    chip:'DENÚNCIA ANULADA',
    fontes:[F.carta],
    curto:'Denunciados na rachadinha da Alerj', gab:'17',
    breve:'Ele entre eles; denúncia anulada.',
    zap:'Em 2020, o MP-RJ denunciou 17 pessoas na rachadinha da Alerj, Flávio Bolsonaro entre elas. A denúncia foi anulada: o STJ anulou as provas em 2021 e o caso foi arquivado em 2022.' }
];
return BASICO;
})();
