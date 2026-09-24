/* BolsoDrive — base de dados. Atualizado em setembro de 2026. */

window.DOSSIE = {
 "meta": {
  "revisar": true,
  "atualizadoEm": "2026-09",
  "titulo": "BolsoDrive",
  "subtitulo": "um rio de escândalos",
  "aviso": "Compilação jornalística de fatos de interesse público, com fonte e status jurídico. Fontes em conferência."
 },
 "status": {
  "investigacao": {
   "rotulo": "Em investigação",
   "cor": "#f5a623"
  },
  "suspeita": {
   "rotulo": "Suspeita",
   "cor": "#f5a623"
  },
  "denuncia": {
   "rotulo": "Denúncia",
   "cor": "#f97316"
  },
  "processo": {
   "rotulo": "Processo",
   "cor": "#eab308"
  },
  "decisao_judicial": {
   "rotulo": "Decisão judicial",
   "cor": "#60a5fa"
  },
  "condenacao": {
   "rotulo": "Condenação",
   "cor": "#e5484d"
  },
  "absolvicao": {
   "rotulo": "Absolvição",
   "cor": "#34d399"
  },
  "anulado": {
   "rotulo": "Anulado/encerrado",
   "cor": "#8b95a5"
  },
  "arquivado": {
   "rotulo": "Arquivado",
   "cor": "#8b95a5"
  },
  "acordo": {
   "rotulo": "Acordo",
   "cor": "#a78bfa"
  },
  "declaracao": {
   "rotulo": "Declaração",
   "cor": "#2e9bd6"
  },
  "fato": {
   "rotulo": "Fato",
   "cor": "#94a3b8"
  }
 },
 "temas": [
  {
   "id": "rachadinha",
   "nome": "Rachadinha (ALERJ)",
   "cor": "#e5484d",
   "icone": "💸",
   "descricao": "Assessores devolviam parte do salário no gabinete dele na Alerj, segundo o MP-RJ. A denúncia foi anulada por questão de foro; o mérito nunca foi julgado."
  },
  {
   "id": "queiroz",
   "nome": "Fabrício Queiroz",
   "cor": "#f59e0b",
   "icone": "🧾",
   "descricao": "O ex-assessor apontado como operador do esquema: R$ 1,2 milhão em movimentações atípicas, cheques para a família do chefe e prisão em 2020."
  },
  {
   "id": "milicia",
   "nome": "Milícia / Escritório do Crime",
   "cor": "#7c6cf0",
   "icone": "🕵️",
   "descricao": "O chefe do Escritório do Crime recebeu medalha das mãos dele; a mãe e a mulher do miliciano trabalharam no gabinete."
  },
  {
   "id": "juridico",
   "nome": "Defesa e Justiça",
   "cor": "#60a5fa",
   "icone": "⚖️",
   "descricao": "Como o caso da rachadinha morreu sem julgamento: foro privilegiado, provas anuladas e recursos negados."
  },
  {
   "id": "mansao",
   "nome": "Mansão (BRB)",
   "cor": "#f5a623",
   "icone": "🏠",
   "descricao": "A mansão de R$ 5,97 mi financiada pelo BRB — banco cujo então presidente está preso — e o QG de campanha de R$ 14,5 mi em nome de terceiro."
  },
  {
   "id": "master",
   "nome": "Banco Master / Vorcaro",
   "cor": "#22c55e",
   "icone": "💵",
   "descricao": "O banqueiro preso que bancou o filme sobre o pai dele. Investigado no STF desde julho de 2026; delação homologada em setembro."
  },
  {
   "id": "patrimonio",
   "nome": "Patrimônio e chocolates",
   "cor": "#3e9b4f",
   "icone": "🍫",
   "descricao": "De R$ 1,74 milhão a R$ 8,19 milhões declarados ao TSE, com salário de senador. E a loja de chocolates."
  },
  {
   "id": "senado",
   "nome": "Atuação no Senado",
   "cor": "#38bdf8",
   "icone": "🏛️",
   "descricao": "Um projeto de lei em sete anos, 43% de faltas em 2026 e R$ 0,80 de cada R$ 100 em emendas para educação."
  },
  {
   "id": "eleicoes",
   "nome": "Eleições e elegibilidade",
   "cor": "#e879f9",
   "icone": "🗳️",
   "descricao": "A campanha presidencial: R$ 42 milhões do partido, R$ 6,01 de pessoas físicas, o vice, a chapa e as ações no TSE."
  },
  {
   "id": "declaracoes",
   "nome": "Declarações e episódios",
   "cor": "#2e9bd6",
   "icone": "🎤",
   "descricao": "O que ele disse, na íntegra e com data: da defesa da medalha ao miliciano à anistia prometida ao pai."
  },
  {
   "id": "familia",
   "nome": "Clã Bolsonaro (contexto)",
   "cor": "#fb7185",
   "icone": "👪",
   "descricao": "O pai condenado, o irmão condenado, o outro irmão investigado — e onde cada caso encosta em Flávio."
  }
 ],
 "itens": [
  {
   "id": "raimunda-teria-transferido-r-4-6-mil-a-queiroz",
   "tipo": "investigacao",
   "tema": "rachadinha",
   "data": "2019-01-22",
   "status": "investigacao",
   "titulo": "Raimunda teria transferido R$ 4,6 mil a Queiroz",
   "resumo": "Conforme apuração do MP-RJ noticiada à época, Raimunda Veras Magalhães, então com 68 anos, teria transferido R$ 4,6 mil para a conta de Fabrício Queiroz, no âmbito do esquema de rachadinha investigado no gabinete de Flávio Bolsonaro na Alerj.",
   "pessoas": [
    "raimunda",
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Blog do BG",
     "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/",
     "data": "2019-01-22",
     "trecho": "Raimunda teria repassado R$ 4,6 mil para a conta do policial militar Fabrício Queiroz",
     "tier": "blog"
    }
   ],
   "lastro": "blog"
  },
  {
   "id": "inquerito-sobre-funcionarios-fantasmas-no-gabine",
   "tipo": "investigacao",
   "tema": "rachadinha",
   "data": "2019-11-22",
   "status": "investigacao",
   "titulo": "Inquérito sobre 'funcionários fantasmas' no gabinete de Flávio na Alerj",
   "resumo": "O MP-RJ confirmou em novembro de 2019 inquérito separado da rachadinha para apurar 'funcionários fantasmas' no gabinete de Flávio na Alerj. Júlia Lotufo, viúva de Adriano da Nóbrega, afirmou que a ex-mulher dele recebeu R$ 10 mil/mês por 11 anos sem trabalhar. A defesa nega; provas correlatas foram depois anuladas pelo STJ.",
   "observacao": "Em novembro de 2021 o STJ anulou provas do caso, alegando que o juiz não tinha competência para investigar Flávio (foro). Defesa nega irregularidades.",
   "pessoas": [
    "flavio",
    "julia_lotufo",
    "adriano",
    "wassef"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/breves/nova-inquerito-contra-flavio-bolsonaro-investiga-funcionarios-fantasmas-em-gabinete/",
     "data": "2019-11",
     "trecho": "Novo inquérito contra Flávio Bolsonaro investiga funcionários fantasmas em gabinete",
     "tier": "referencia"
    },
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/app/noticia/politica/2022/04/08/interna_politica,1358724/flavio-bolsonaro-tinha-funcionaria-fantasma-diz-viuva-de-ex-pm.shtml",
     "data": "2022-04-08",
     "trecho": "Flávio Bolsonaro tinha funcionária fantasma, diz viúva de ex-PM",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "danielle-teria-devolvido-ao-menos-r-150-mil-a-qu",
   "tipo": "investigacao",
   "tema": "rachadinha",
   "data": "2019-12-19",
   "status": "investigacao",
   "titulo": "Danielle teria devolvido ao menos R$ 150 mil a Queiroz; R$ 115 mil via contas de Adriano",
   "resumo": "Segundo o MP-RJ, Danielle Mendonça devolveu ao menos R$ 150 mil a Fabrício Queiroz dos salários recebidos entre 2007 e 2018; ao menos R$ 115 mil teriam passado por contas controladas por Adriano da Nóbrega. Promotores apontaram que Queiroz retinha contracheques e contabilizava percentuais devolvidos.",
   "pessoas": [
    "danielle",
    "queiroz",
    "adriano",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Sul21",
     "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/",
     "data": "2019-12-19",
     "trecho": "Danielle devolveu ao menos R$ 150 mil a Queiroz; ao menos R$ 115 mil transferidos via contas controladas por Adriano",
     "tier": "agregador"
    },
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/miliciano-adriano-da-nobrega-fazia-parte-da-rachadinha-de-queiroz-e-flavio-bolsonaro-segundo-mp",
     "data": "2019-12-19",
     "trecho": "Miliciano Adriano da Nóbrega fazia parte da rachadinha de Queiroz e Flávio Bolsonaro, segundo MP",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "rachadinha-teria-financiado-parte-juridica-da-ca",
   "tipo": "investigacao",
   "tema": "rachadinha",
   "data": "2020-09",
   "status": "investigacao",
   "titulo": "Rachadinha teria financiado parte jurídica da campanha de Flávio ao Senado em 2018",
   "resumo": "Investigação do MP-RJ indicou 22 repasses mensais entre junho e dezembro de 2018, período eleitoral, ao advogado Luis Gustavo Botto Maia, responsável pela parte jurídica da candidatura de Flávio ao Senado. Os depósitos partiram de assessoras parlamentares (Alessandra Oliveira e Valdenice Meliga) apontadas no esquema da 'rachadinha'.",
   "observacao": "Caso da rachadinha foi posteriormente anulado por questões processuais (foro); apuração sobre 2018 inconclusa.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Sul 21",
     "url": "https://sul21.com.br/ultimas-noticiaspolitica/2020/09/flavio-bolsonaro-usou-esquema-de-rachadinha-nas-eleicoes-de-2018/",
     "data": "2020-09",
     "trecho": "Flávio Bolsonaro usou esquema de rachadinha nas eleições de 2018",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mp-rj-denuncia-flavio-bolsonaro-por-rachadinha-n",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "MP-RJ denuncia Flávio Bolsonaro por rachadinha na Alerj",
   "resumo": "O Ministério Público do Rio, pelo então procurador-geral Eduardo Gussem, ofereceu denúncia ao Órgão Especial do TJ-RJ contra Flávio Bolsonaro e mais 16 pessoas por organização criminosa, peculato, lavagem de dinheiro e apropriação indébita, no esquema de rachadinha em seu gabinete na Alerj.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/",
     "data": "2020-11-04",
     "trecho": "MP denuncia Flávio Bolsonaro por esquema de rachadinha na Alerj",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/flavio-bolsonaro-e-denunciado-por-rachadinha-na-assembleia-do-rio/",
     "data": "2020-11-04",
     "trecho": "Denúncia entregue ao TJ-RJ em 19 de outubro de 2020, redistribuída em 3 de novembro",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2020/11/04/flavio-bolsonaro-e-denunciado-por-organizacao-criminosa-no-esquema-das-rachadinhas/",
     "data": "2020-11-04",
     "trecho": "Flávio Bolsonaro é denunciado por organização criminosa no esquema das rachadinhas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tipificacoes-organizacao-criminosa-peculato-lava",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "Tipificações: organização criminosa, peculato, lavagem e apropriação indébita",
   "resumo": "A denúncia imputou a Flávio Bolsonaro os crimes de organização criminosa, peculato, lavagem de dinheiro e apropriação indébita. Segundo o MP-RJ, o documento descreveu 1.803 crimes de peculato e 263 atos de lavagem de dinheiro praticados ao longo do período investigado.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/flavio-bolsonaro-e-denunciado-por-rachadinha-na-assembleia-do-rio/",
     "data": "2020-11-04",
     "trecho": "1.803 crimes de peculato e 263 atos de lavagem de dinheiro",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/leia-toda-a-denuncia-do-mprj-contra-flavio-bolsonaro-por-rachadinhas-no-rio/",
     "data": "2020-11-04",
     "trecho": "1.803 crimes de peculato e 263 atos de lavagem de dinheiro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "valores-r-6-1-milhoes-desviados-r-2-08-mi-compro",
   "tipo": "financeiro",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "Valores: R$ 6,1 milhões desviados, R$ 2,08 mi comprovados a Queiroz",
   "resumo": "Segundo o MP-RJ, o esquema desviou cerca de R$ 6,1 milhões de recursos públicos. Desse total, R$ 2,08 milhões foram comprovadamente repassados a Fabrício Queiroz; outros R$ 2,15 milhões sacados de contas de supostos funcionários fantasmas teriam sido disponibilizados à organização criminosa.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Folha PE",
     "url": "https://www.folhape.com.br/politica/saiba-como-estao-casos-de-rachadinha-e-funcionarios-fantasmas-nos/269120/",
     "data": "2023-01-01",
     "trecho": "R$ 6,1 milhões desviados, dos quais R$ 2,08 milhões comprovadamente repassados a Queiroz",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/04/13/da-rachadinha-a-doacao-de-campanha-do-master-relembre-escandalos-ligados-a-flavio-bolsonaro/",
     "data": "2026-04-13",
     "trecho": "Só as rachadinhas de Flávio desviaram mais de R$ 6 milhões",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-apontado-como-zero-um-lider-da-organizaca",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "Flávio apontado como 'zero um', líder da organização criminosa",
   "resumo": "Na denúncia, Flávio Bolsonaro foi apontado como líder da organização criminosa, referido como 'zero um'. Fabrício Queiroz, ex-assessor e amigo da família, foi descrito como operador financeiro do esquema, responsável por arrecadar as devoluções de salários dos servidores entre 2007 e 2018.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/04/13/da-rachadinha-a-doacao-de-campanha-do-master-relembre-escandalos-ligados-a-flavio-bolsonaro/",
     "data": "2026-04-13",
     "trecho": "'Zero um' (Flávio) apontado como líder da organização criminosa e Queiroz como operador",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/leia-toda-a-denuncia-do-mprj-contra-flavio-bolsonaro-por-rachadinhas-no-rio/",
     "data": "2020-11-04",
     "trecho": "Flávio descrito como líder da organização criminosa; Queiroz como operador financeiro do grupo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "periodo-do-esquema-2007-a-2018-gabinete-de-flavi",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "Período do esquema: 2007 a 2018, gabinete de Flávio na Alerj",
   "resumo": "A denúncia abarca o período de 2007 a 2018, quando Flávio Bolsonaro era deputado estadual na Alerj. Funcionários do gabinete devolviam parte dos salários, repassados a Queiroz; o dinheiro retornava ao então deputado via despesas em dinheiro vivo, loja de chocolates e transações imobiliárias.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/",
     "data": "2020-11-04",
     "trecho": "Esquema entre 2007 e 2018, quando era deputado estadual",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2020/11/04/flavio-bolsonaro-e-denunciado-por-organizacao-criminosa-no-esquema-das-rachadinhas/",
     "data": "2020-11-04",
     "trecho": "Funcionários devolviam parte dos salários a Queiroz; valores retornavam via chocolates e imóveis",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "17-denunciados-incluindo-queiroz-e-funcionarios",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "17 denunciados, incluindo Queiroz e funcionários fantasmas",
   "resumo": "Ao todo foram 17 denunciados: Flávio Bolsonaro e mais 16 pessoas, entre elas Fabrício Queiroz e ex-assessores do gabinete. A denúncia detalhou funcionários fantasmas, cujos salários sacados teriam alimentado o esquema. Miguel Ângelo Braga Grillo, chefe de gabinete de Flávio no Senado, foi citado.",
   "pessoas": [
    "flavio",
    "queiroz",
    "grillo",
    "luiza_paes"
   ],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/04/13/da-rachadinha-a-doacao-de-campanha-do-master-relembre-escandalos-ligados-a-flavio-bolsonaro/",
     "data": "2026-04-13",
     "trecho": "Eduardo Gussem denunciou Flávio e mais 16 pessoas, incluindo Fabrício Queiroz",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/flavio-bolsonaro-e-denunciado-por-rachadinha-na-assembleia-do-rio/",
     "data": "2020-11-04",
     "trecho": "Flávio Bolsonaro e mais 16 outros denunciados, total de 17",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-rj-denuncia-flavio-bolsonaro-e-queiroz-por-ra",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "MP-RJ denuncia Flávio Bolsonaro e Queiroz por rachadinha na Alerj (out/2020)",
   "resumo": "O MP-RJ, pelo procurador-geral Eduardo Gussem, denunciou Flávio Bolsonaro, Fabrício Queiroz e outras 15 pessoas por peculato, lavagem, apropriação indébita e organização criminosa (fatos de 2007-2018). Flávio é apontado como líder do esquema; o MP afirma uso de ao menos R$ 2,7 milhões em dinheiro vivo do gabinete na Alerj.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/",
     "data": "2020-11-04",
     "trecho": "MP denuncia Flávio Bolsonaro por esquema de 'rachadinha' na Alerj",
     "tier": "referencia"
    },
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/334032/mp-rj-conclui-inquerito-e-denunciara-flavio-bolsonaro-e-queiroz-por-rachadinha-na-alerj",
     "data": "2020-11-04",
     "trecho": "denunciará Flávio Bolsonaro e Queiroz por rachadinha na Alerj",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "denuncia-do-mp-rj-por-peculato-lavagem-e-organiz",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-10-19",
   "status": "denuncia",
   "titulo": "Denúncia do MP-RJ por peculato, lavagem e organização criminosa (out/2020)",
   "resumo": "Em 19/10/2020 o MP-RJ denunciou Flávio Bolsonaro, Fabrício Queiroz e mais 15 pessoas por peculato, lavagem de dinheiro, apropriação indébita e organização criminosa, por fatos de 2007 a 2018. A acusação cita a loja de chocolates como uma das formas de lavar o dinheiro, ao lado de imóveis em espécie e despesas pessoais.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Conjur",
     "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/",
     "data": "2020-11-04",
     "trecho": "MP denuncia Flávio Bolsonaro por esquema de rachadinha na Alerj",
     "tier": "referencia"
    },
    {
     "veiculo": "Diário do Rio",
     "url": "https://diariodorio.com/mp-denuncia-flavio-bolsonaro-por-lavagem-de-dinheiro-peculato-e-organizacao-criminosa/",
     "data": "2020",
     "trecho": "valores eram lavados e voltavam ao senador via despesas em espécie, loja de chocolates e imóveis",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "raimunda-mae-de-adriano-denunciada-por-lavar-r-8",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-11",
   "status": "denuncia",
   "titulo": "Raimunda, mãe de Adriano, denunciada por lavar R$ 8,5 milhões com pizzarias",
   "resumo": "Raimunda Veras Magalhães, ex-assessora de Flávio e mãe de Adriano, foi acusada de participar de lavagem de dinheiro do filho miliciano, usando quatro empresas (entre elas pizzarias) e movimentando cerca de R$ 8,5 milhões, enquanto figurava como assessora parlamentar no gabinete de Flávio.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Hora do Povo",
     "url": "https://horadopovo.com.br/mp-do-rio-denuncia-assessora-de-flavio-rachadinha-por-lavagem-de-dinheiro-da-milicia/",
     "data": "2020-11",
     "trecho": "MP do Rio denuncia assessora de Flávio por lavagem de dinheiro da milícia",
     "tier": "agregador"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/opiniao/politica/contas-da-mae-do-miliciano-adriano-revelam-transferencias-para-fabricio-queiroz-1.2378953",
     "data": "2019",
     "trecho": "Contas da mãe do miliciano Adriano revelam transferências para Fabrício Queiroz",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mae-e-ex-mulher-de-adriano-eram-assessoras-fanta",
   "tipo": "investigacao",
   "tema": "rachadinha",
   "data": "2020-11-23",
   "status": "denuncia",
   "titulo": "Mãe e ex-mulher de Adriano eram assessoras-fantasma no gabinete de Flávio na Alerj",
   "resumo": "Segundo denúncia do MP-RJ, a mãe de Adriano, Raimunda Veras Magalhães, e a ex-mulher, Danielle Mendonça da Costa, foram lotadas como assessoras no gabinete de Flávio na Alerj (a partir de 2016 e 2007), sem trabalhar. Teriam recebido ao menos R$ 1,029 milhão em salários, parte revertida ao esquema de rachadinha.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/",
     "data": "2020-11-23",
     "trecho": "Miliciano repassou mais de R$ 200 mil a Queiroz em 'rachadinha'",
     "tier": "referencia"
    },
    {
     "veiculo": "Wikipédia (verbete Adriano da Nóbrega)",
     "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega",
     "data": "2020-11-23",
     "trecho": "received at least R$ 1.029 million in salaries",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-adriano-repassou-mais-de-r-200-mil-a-queiroz",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2020-11-23",
   "status": "denuncia",
   "titulo": "MP: Adriano repassou mais de R$ 200 mil a Queiroz no esquema de rachadinha",
   "resumo": "Denúncia do MP-RJ (23/11/2020) aponta que R$ 203.002,57 foram repassados por Danielle e Raimunda a Fabrício Queiroz. As transferências ocorriam via agência do Itaú no Rio Comprido, na mesma rua de restaurantes/pizzarias controlados pela mãe de Adriano. Queiroz teria operado o esquema por cerca de 11 anos.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/",
     "data": "2020-11-23",
     "trecho": "R$ 203.002,57 repassados por Danielle e Raimunda",
     "tier": "referencia"
    },
    {
     "veiculo": "Sul21",
     "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/",
     "data": "2019-12",
     "trecho": "Contas do chefe do Escritório do Crime foram usadas em rachadinha de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "provas-da-rachadinha-contra-flavio-declaradas-il",
   "tipo": "decisao_judicial",
   "tema": "rachadinha",
   "data": "2021",
   "status": "anulado",
   "titulo": "Provas da rachadinha contra Flávio declaradas ilegais pela 2ª Turma do STF",
   "resumo": "A 2ª Turma do STF (e antes a 5ª Turma do STJ, em 2021) declarou ilegais/anulou provas e decisões contra Flávio Bolsonaro no caso da rachadinha, por entender que ele tinha foro como deputado estadual e o juízo de 1ª instância era incompetente. Decisões e quebras de sigilo foram invalidadas.",
   "observacao": "A anulação foi por vício processual (competência/foro), não absolvição de mérito. Incluído como 'outro caso' por ser decisão judicial relevante que afeta os demais.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "STF (Notícias)",
     "url": "https://noticias.stf.jus.br/postsnoticias/2a-turma-decide-que-provas-contra-flavio-bolsonaro-no-caso-das-chamadas-rachadinhas-sao-ilegais/",
     "data": "2021",
     "trecho": "2ª Turma decide que provas contra Flávio Bolsonaro no caso das rachadinhas são ilegais",
     "tier": "primaria"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2025",
     "trecho": "STJ anulou todas as decisões da Justiça do Rio por foro privilegiado de Flávio",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "contexto-caso-da-rachadinha-de-flavio-foi-anulad",
   "tipo": "decisao_judicial",
   "tema": "rachadinha",
   "data": "2022-05-01",
   "status": "anulado",
   "titulo": "Contexto: caso da rachadinha de Flávio foi anulado e arquivado",
   "resumo": "O caso original da rachadinha de Flávio na Alerj - que incluía os repasses de Danielle e Raimunda a Queiroz - foi esvaziado após o STJ anular decisões (2021) e o STF anular relatórios do Coaf (nov/2021). A Corte Especial do TJ-RJ arquivou o caso em maio de 2022. Em 2025 o STF rejeitou reabertura.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2025-01-01",
     "trecho": "O que aconteceu com o caso da rachadinha de Flávio Bolsonaro; decisões do STJ e STF e arquivamento",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/gilmar-mendes-nega-reabertura-rachadinhas-flavio-bolsonaro/",
     "data": "2025-01-01",
     "trecho": "Gilmar Mendes nega reabertura do caso das rachadinhas de Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "denuncia-de-2026-raimunda-e-danielle-teriam-rece",
   "tipo": "denuncia",
   "tema": "rachadinha",
   "data": "2026-03-19",
   "status": "denuncia",
   "titulo": "Denúncia de 2026: Raimunda e Danielle teriam recebido +R$ 1 milhão em salários sem trabalhar",
   "resumo": "Na denúncia de lavagem de março de 2026, o MP-RJ afirmou que Raimunda Veras Magalhães e Danielle Mendonça (primeira mulher de Adriano) receberam mais de R$ 1 milhão em salários do gabinete de Flávio na Alerj, mas não compareciam para trabalhar - caracterizando funcionárias fantasmas.",
   "pessoas": [
    "raimunda",
    "danielle",
    "adriano",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano",
     "data": "2026-03-19",
     "trecho": "Raimunda e Danielle receberam mais de R$ 1 milhão em salários, mas não apareciam para trabalhar",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "periodos-de-lotacao-danielle-desde-2010-raimunda",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2018-11-13",
   "status": "fato",
   "titulo": "Períodos de lotação: Danielle desde 2010, Raimunda desde 2016",
   "resumo": "Segundo registros oficiais, Danielle Mendonça atuava no gabinete de Flávio desde pelo menos novembro de 2010 e Raimunda desde 29 de junho de 2016 (segundo o MPRJ, de abril de 2016). As duas foram exoneradas a pedido em 13 de novembro de 2018, antes de o caso vir a público.",
   "pessoas": [
    "raimunda",
    "danielle",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Blog do BG",
     "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/",
     "data": "2019-01-22",
     "trecho": "Raimunda trabalhava desde 29 de junho de 2016; Danielle atuava desde pelo menos novembro de 2010; ambas exoneradas em 13/11/2018",
     "tier": "blog"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano",
     "data": "2026-03-19",
     "trecho": "Raimunda trabalhou como assessora de Flávio na Alerj entre abril de 2016 e novembro de 2018",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "origem-relatorios-do-coaf-apontaram-movimentacao",
   "tipo": "investigacao",
   "tema": "queiroz",
   "data": "2018-12-01",
   "status": "investigacao",
   "titulo": "Origem: relatórios do Coaf apontaram movimentação atípica de R$ 1,2 mi de Queiroz",
   "resumo": "A investigação partiu de relatório do Coaf de 2018 que identificou movimentação atípica de R$ 1,2 milhão na conta de Fabrício Queiroz durante o mandato de Flávio na Alerj. Os dados financeiros embasaram a apuração que resultou na denúncia de 2020.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026-01-01",
     "trecho": "Coaf identificou movimentação atípica de R$ 1,2 milhão na conta de Queiroz",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "coaf-aponta-r-1-2-milhao-em-movimentacoes-atipic",
   "tipo": "investigacao",
   "tema": "queiroz",
   "data": "2018-12-06",
   "status": "investigacao",
   "titulo": "COAF aponta R$ 1,2 milhão em movimentações atípicas na conta de Queiroz",
   "resumo": "Em 6/12/2018, relatório do COAF apontou movimentações atípicas de R$ 1.236.838 na conta de Fabrício Queiroz entre janeiro de 2016 e janeiro de 2017, valor tido como incompatível com sua renda. O caso deu origem à investigação da 'rachadinha' no gabinete de Flávio Bolsonaro.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Wikipédia",
     "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz",
     "data": "2018-12-06",
     "trecho": "COAF released report disclosing movimentações atípicas no valor de 1.236.838 reais entre janeiro de 2016 e janeiro de 2017.",
     "tier": "agregador"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2018",
     "trecho": "COAF report identified atypical movement of 1.2 million reais in Queiroz's account.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "esquema-da-rachadinha-funcionarios-depositavam-p",
   "tipo": "investigacao",
   "tema": "queiroz",
   "data": "2019-01-18",
   "status": "investigacao",
   "titulo": "Esquema da 'rachadinha': funcionários depositavam parte do salário na conta de Queiroz",
   "resumo": "Investigações indicaram que ao menos oito funcionários do gabinete de Flávio Bolsonaro depositaram cerca de R$ 150 mil na conta de Queiroz, sempre após o pagamento dos salários. Reportagens também apontaram 48 depósitos de R$ 2 mil (R$ 96 mil) feitos a Flávio em um mês.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Wikipédia",
     "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz",
     "data": "2019-01-18",
     "trecho": "Oito funcionários do gabinete de Flávio fizeram depósitos que totalizaram 150 mil reais; Flávio recebeu 48 depósitos de dois mil reais.",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mae-e-ex-mulher-de-adriano-da-nobrega-eram-lotad",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2019-01-22",
   "status": "fato",
   "titulo": "Mãe e ex-mulher de Adriano da Nóbrega eram lotadas no gabinete de Flávio na Alerj",
   "resumo": "Reportagens revelaram que Raimunda Veras Magalhães (mãe) e Danielle Mendonça da Costa (esposa) do miliciano Adriano da Nóbrega ocupavam cargos no gabinete de Flávio Bolsonaro na Alerj. Ambas tinham cargo CCDAL-5, com salário de R$ 6.490,35, e foram exoneradas a pedido em 13/11/2018.",
   "pessoas": [
    "raimunda",
    "danielle",
    "adriano",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-empregou-em-seu-gabinete-mae-e-mulher-de-miliciano-suspeito-da-morte-de-marielle/",
     "data": "2019-01-22",
     "trecho": "Flávio Bolsonaro empregou em seu gabinete mãe e mulher de miliciano suspeito da morte de Marielle",
     "tier": "referencia"
    },
    {
     "veiculo": "Blog do BG",
     "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/",
     "data": "2019-01-22",
     "trecho": "Ambas ocuparam cargo CCDAL-5 com remuneração de R$ 6.490,35; exoneradas a pedido em 13 de novembro de 2018",
     "tier": "blog"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "queiroz-teria-indicado-familiares-de-adriano-par",
   "tipo": "investigacao",
   "tema": "queiroz",
   "data": "2019-01-22",
   "status": "investigacao",
   "titulo": "Queiroz teria indicado familiares de Adriano para o gabinete",
   "resumo": "Segundo o MP-RJ, foi Fabrício Queiroz, ex-assessor de Flávio e amigo de Jair Bolsonaro desde os anos 1980, o responsável por indicar a mãe e a então esposa de Adriano da Nóbrega para o gabinete. As nomeações ocorreram no contexto da investigação sobre rachadinha conduzida por Queiroz.",
   "pessoas": [
    "queiroz",
    "adriano",
    "raimunda",
    "danielle",
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Blog do BG",
     "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/",
     "data": "2019-01-22",
     "trecho": "Queiroz - amigo do presidente Jair Bolsonaro desde os anos 1980 - foi o responsável pelas indicações dos familiares de Adriano",
     "tier": "blog"
    }
   ],
   "lastro": "blog"
  },
  {
   "id": "sobre-prisao-de-queiroz-flavio-diz-mais-uma-peca",
   "tipo": "declaracao",
   "tema": "queiroz",
   "data": "2020-06",
   "status": "declaracao",
   "titulo": "Sobre prisão de Queiroz, Flávio diz: 'mais uma peça foi movida no tabuleiro para atacar Bolsonaro'",
   "resumo": "Ao comentar a prisão de Queiroz nas redes, Flávio relacionou o caso a uma tentativa de atacar o pai: 'Mais uma peça foi movida no tabuleiro para atacar Bolsonaro. Em 16 anos como deputado no Rio nunca houve uma vírgula contra mim. Bastou o presidente Bolsonaro ser eleito para tudo mudar! O jogo é pesado!'",
   "pessoas": [
    "flavio",
    "queiroz",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/ligacoes-de-queiroz-com-familia-bolsonaro-ex-assessor/",
     "data": "2020",
     "trecho": "Mais uma peça foi movida no tabuleiro para atacar Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "quem-e-fabricio-queiroz-pm-reformado-e-amigo-dos",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2020-06-18",
   "status": "fato",
   "titulo": "Quem é Fabrício Queiroz: PM reformado e amigo dos Bolsonaro virou assessor de Flávio",
   "resumo": "Fabrício José Carlos de Queiroz (nascido em 8/10/1965, em Belo Horizonte) serviu cerca de 31 anos na Polícia Militar do Rio, aposentando-se como subtenente em 2018. Amigo de Jair Bolsonaro desde 1984, atuou como assessor parlamentar, motorista e segurança de Flávio Bolsonaro na Alerj.",
   "pessoas": [
    "queiroz",
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Wikipédia",
     "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz",
     "data": "2020",
     "trecho": "Fabrício José Carlos de Queiroz (born October 8, 1965): Former PM subtenente e ex-assessor de Flávio.",
     "tier": "agregador"
    },
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/2020/06/18/conheca-fabricio-queiroz--ex-assessor-de-flavio-bolsonaro-preso-nesta-quinta-feira.html",
     "data": "2020-06-18",
     "trecho": "Conheça Fabrício Queiroz, ex-assessor de Flávio Bolsonaro preso.",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "queiroz-e-preso-em-atibaia-em-imovel-do-advogado",
   "tipo": "evento",
   "tema": "queiroz",
   "data": "2020-06-18",
   "status": "fato",
   "titulo": "Queiroz é preso em Atibaia, em imóvel do advogado Frederick Wassef",
   "resumo": "Em 18/6/2020, Fabrício Queiroz foi preso em Atibaia (SP), em imóvel pertencente a Frederick Wassef, advogado de Flávio e de Jair Bolsonaro. O mandado se referia à investigação da 'rachadinha' na Alerj. Wassef havia dito em 2019 desconhecer o paradeiro de Queiroz.",
   "pessoas": [
    "queiroz",
    "wassef",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/queiroz-foi-preso-em-imovel-de-frederick-wassef-advogado-de-flavio-bolsonaro/",
     "data": "2020-06-18",
     "trecho": "Queiroz foi preso em imóvel de Frederick Wassef, advogado de Flávio Bolsonaro.",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/fabricio-queiroz-ex-assessor-de-flavio-bolsonaro-e-preso/",
     "data": "2020-06-18",
     "trecho": "Fabrício Queiroz é preso em Atibaia, no interior de São Paulo.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "frederick-wassef-escondeu-fabricio-queiroz-em-ca",
   "tipo": "caso",
   "tema": "queiroz",
   "data": "2020-06-18",
   "status": "fato",
   "titulo": "Frederick Wassef escondeu Fabrício Queiroz em casa em Atibaia",
   "resumo": "Fabrício Queiroz, ex-assessor de Flávio e operador apontado na rachadinha, foi preso pela PF em 18/06/2020 numa propriedade de Frederick Wassef, advogado da família Bolsonaro, em Atibaia (SP). Dois dias depois, Wassef afirmou que Flávio e o então presidente Jair não sabiam do paradeiro de Queiroz.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2023/01/27/fim-do-sigilo-frederick-wassef-fez-16-visitas-a-bolsonaro-enquanto-escondia-queiroz-em-casa/",
     "data": "2023-01-27",
     "trecho": "Em 18/06/2020 PF prendeu Queiroz em propriedade de Wassef em Atibaia; Wassef disse que Flávio não sabia",
     "tier": "referencia"
    },
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/frederick-wassef-a-veja-escondi-queiroz-para-proteger-bolsonaro/",
     "data": "2023",
     "trecho": "Wassef à Veja: escondi Queiroz para proteger Bolsonaro, por razões humanitárias",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "negociacao-de-delacao-premiada-de-queiroz-com-o",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2020-06-26",
   "status": "declaracao",
   "titulo": "Negociação de delação premiada de Queiroz com o MP-RJ (2020)",
   "resumo": "Em junho de 2020, veículos noticiaram que Queiroz negociava delação premiada com o MP-RJ, pedindo prisão domiciliar e proteção à mulher, Márcia Aguiar, e às filhas, também investigadas. A defesa de Queiroz negou estar negociando colaboração. O acordo não se concretizou.",
   "pessoas": [
    "queiroz",
    "marcia-aguiar"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/fabricio-queiroz-negocia-delacao-premiada-com-o-mp/",
     "data": "2020-06-26",
     "trecho": "Fabrício Queiroz negocia delação premiada com o MP.",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/politica-brasil/defesa-de-fabricio-queiroz-nega-que-esteja-negociando-delacao-premiada",
     "data": "2020",
     "trecho": "Defesa de Fabrício Queiroz nega que esteja negociando delação premiada.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "cheques-de-r-89-mil-de-queiroz-para-michelle-bol",
   "tipo": "investigacao",
   "tema": "queiroz",
   "data": "2020-08",
   "status": "investigacao",
   "titulo": "Cheques de R$ 89 mil de Queiroz para Michelle Bolsonaro",
   "resumo": "Investigações revelaram 27 cheques de Queiroz somando cerca de R$ 89 mil depositados na conta de Michelle Bolsonaro. Queiroz alegou devolução de empréstimos; Jair Bolsonaro disse depois que os cheques 'eram para ele'. Em 2022 a PGR rejeitou abrir investigação sobre o caso.",
   "pessoas": [
    "queiroz",
    "michelle",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/bolsonaro-diz-se-arrepender-de-ter-autorizado-queiroz-a-depositar-cheques-na-conta-de-michelle/",
     "data": "2020",
     "trecho": "Queiroz depositou 27 cheques que somam R$ 89 mil na conta de Michelle Bolsonaro.",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/artigo/56528/pgr-investigacao-89-mil-michelle-bolsonaro",
     "data": "2022",
     "trecho": "PGR rejeita investigar Bolsonaro sobre cheques de R$ 89 mil a Michelle.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-defende-queiroz-e-diz-que-caso-so-repercu",
   "tipo": "declaracao",
   "tema": "queiroz",
   "data": "2020-08-05",
   "status": "declaracao",
   "titulo": "Flávio defende Queiroz e diz que caso só repercutiu por ser filho do presidente",
   "resumo": "Em entrevista ao O Globo, Flávio admitiu pela primeira vez que Queiroz pagava contas pessoais suas e disse que o caso 'só ganhou repercussão por ser filho do presidente'. Afirmou: 'Tenho uma vida simples para caramba... Meu modo de vida passa longe de uma pessoa rica'.",
   "pessoas": [
    "flavio",
    "queiroz",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/flavio-bolsonaro-defende-queiroz-e-diz-que-caso-so-ganhou-repercussao-por-ele-ser-filho-do-presidente/",
     "data": "2020-08-05",
     "trecho": "Tenho uma vida simples para caramba. Não esbanjo nada. Meu modo de vida passa longe de uma pessoa rica",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "denuncia-do-mp-rj-flavio-queiroz-e-mais-15-por-o",
   "tipo": "denuncia",
   "tema": "queiroz",
   "data": "2020-10",
   "status": "denuncia",
   "titulo": "Denúncia do MP-RJ: Flávio, Queiroz e mais 15 por organização criminosa",
   "resumo": "Em 2020 o Ministério Público do Rio denunciou Flávio Bolsonaro, Queiroz e outras 15 pessoas por organização criminosa, lavagem de dinheiro, peculato e apropriação indébita, apontando Flávio como líder do esquema. A apuração mencionou compras em dinheiro e uma loja de chocolates como possíveis canais de lavagem.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2020",
     "trecho": "Public Ministry charged Flávio, Queiroz, and 15 others with organized crime, money laundering, embezzlement, and misappropriation.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "queiroz-admite-rachadinha-ao-mp-e-tenta-inocenta",
   "tipo": "declaracao",
   "tema": "queiroz",
   "data": "2020-11-25",
   "status": "declaracao",
   "titulo": "Queiroz admite 'rachadinha' ao MP e tenta inocentar Flávio",
   "resumo": "Em petição ao Órgão Especial do TJ-RJ, Queiroz admitiu que assessores que indicava devolviam parte do salário, mas afirmou que o esquema ocorreu sem consulta ou anuência de Flávio Bolsonaro. O MP classificou a versão como 'fantasiosa' diante de transferências superiores a R$ 2 milhões em uma década.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/queiroz-admite-esquema-de-rachadinhas-ao-mp-e-tenta-inocentar-flavio-bolsonaro/",
     "data": "2020-11-25",
     "trecho": "Queiroz alegou que o esquema ocorreu sem consulta ou anuência do então deputado nem de seu chefe de gabinete.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-nega-ter-sido-avisado-da-operacao-furna-d",
   "tipo": "declaracao",
   "tema": "queiroz",
   "data": "2021",
   "status": "declaracao",
   "titulo": "Flávio nega ter sido avisado da Operação Furna da Onça",
   "resumo": "Após o empresário Paulo Marinho afirmar à Folha que a PF avisou Flávio sobre a deflagração da Operação Furna da Onça entre os turnos de 2018, Flávio negou em depoimento ao MPF ter recebido informação privilegiada. Ele faltou a uma acareação marcada com Marinho.",
   "pessoas": [
    "flavio",
    "paulo-marinho",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/em-depoimento-flavio-nega-ter-sido-informado-sobre-operacao-furna-da-onca/",
     "data": "2021",
     "trecho": "Em depoimento, Flávio nega ter sido informado sobre operação Furna da Onça",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/breves/flavio-bolsonaro-depoimento-vazamento-furna-da-onca/",
     "data": "2021",
     "trecho": "Flávio Bolsonaro nega em depoimento ter sido avisado da Furna da Onça",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stf-2-turma-anula-4-relatorios-do-coaf-por-3-a-1",
   "tipo": "decisao_judicial",
   "tema": "queiroz",
   "data": "2021-11-30",
   "status": "anulado",
   "titulo": "STF (2ª Turma) anula 4 relatórios do COAF por 3 a 1 (nov/2021)",
   "resumo": "Em 30/11/2021, a 2ª Turma do STF, relator Gilmar Mendes, anulou por 3 a 1 quatro RIFs do COAF (34.670, 38.484, 39.127 e 40.698). Mendes apontou 'investigação disfarçada': os relatórios começaram em julho/2018, mas Flávio só foi formalmente incluído em março/2019, sem autorização prévia do TJ-RJ; o COAF não poderia produzir relatórios 'por encomenda' do MP. Fachin ficou vencido.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2021-nov-30/anulados-relatorios-coaf-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-30",
     "trecho": "o Coaf não pode produzir, por encomenda do Ministério Público ou da polícia, relatórios de inteligência financeira",
     "tier": "referencia"
    },
    {
     "veiculo": "STF (Portal)",
     "url": "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=477496",
     "data": "2021-11-30",
     "trecho": "2ª Turma decide que provas contra Flávio Bolsonaro no caso das chamadas rachadinhas são ilegais",
     "tier": "primaria"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/breves/stf-anula-relatorios-do-coaf-que-embasaram-inquerito-contra-flavio-bolsonaro/",
     "data": "2021-11-30",
     "trecho": "STF anula relatórios que embasaram inquérito contra Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "stj-e-stf-anulam-provas-tj-rj-rejeita-denuncia-e",
   "tipo": "decisao_judicial",
   "tema": "queiroz",
   "data": "2022-05",
   "status": "anulado",
   "titulo": "STJ e STF anulam provas; TJ-RJ rejeita denúncia em maio de 2022",
   "resumo": "O STJ anulou decisões do juiz Flávio Itabaiana e o STF (2ª Turma) invalidou relatórios do COAF/provas obtidas sem autorização judicial prévia. Diante das nulidades, o próprio MP pediu retirada da denúncia e o Órgão Especial do TJ-RJ a rejeitou em maio de 2022.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2022-05/justica-do-rio-arquiva-processo-de-caso-de-supostas-rachadinhas",
     "data": "2022-05",
     "trecho": "Justiça do Rio arquiva processo de caso de supostas rachadinhas.",
     "tier": "agregador"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stf-anula-provas-do-processo-contra-flavio-bolsonaro-e-defesa-sugere-nulidade/",
     "data": "2021-11",
     "trecho": "STF anula provas do processo contra Flávio Bolsonaro.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "wassef-fez-16-visitas-a-jair-bolsonaro-enquanto",
   "tipo": "caso",
   "tema": "queiroz",
   "data": "2023-01-27",
   "status": "fato",
   "titulo": "Wassef fez 16 visitas a Jair Bolsonaro enquanto escondia Queiroz",
   "resumo": "Registros liberados pela Lei de Acesso à Informação mostraram que Frederick Wassef fez 16 visitas ao então presidente Jair Bolsonaro (13 no Planalto, 3 no Alvorada) entre outubro/2019 e junho/2020, período em que mantinha Fabrício Queiroz escondido em sua casa em Atibaia. Os registros estavam sob sigilo imposto em julho/2020.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2023/01/27/fim-do-sigilo-frederick-wassef-fez-16-visitas-a-bolsonaro-enquanto-escondia-queiroz-em-casa/",
     "data": "2023-01-27",
     "trecho": "Wassef fez 16 visitas a Bolsonaro (13 Planalto, 3 Alvorada) entre out/2019 e jun/2020 enquanto escondia Queiroz",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "queiroz-disputa-eleicao-de-2024-e-fica-como-supl",
   "tipo": "evento",
   "tema": "queiroz",
   "data": "2024-10-06",
   "status": "fato",
   "titulo": "Queiroz disputa eleição de 2024 e fica como suplente de vereador",
   "resumo": "Candidato a vereador em Saquarema (RJ) pelo PL, Fabrício Queiroz recebeu 588 votos, abaixo do necessário, e ficou como suplente. Flávio Bolsonaro pediu votos para ele nas redes. Em 2022, Queiroz já havia tentado, sem sucesso, vaga de deputado estadual pelo PTB.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/fabricio-queiroz-recebe-588-votos-e-nao-se-elege-vereador-em-municipio-do-rio/",
     "data": "2024-10-06",
     "trecho": "Fabrício Queiroz recebe 588 votos e não se elege vereador em município do Rio.",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes/queiroz-fica-como-suplente-de-vereador-em-saquarema-rj/",
     "data": "2024",
     "trecho": "Queiroz fica como suplente de vereador em Saquarema (RJ).",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "procedimento-civel-arquivado-e-tentativas-de-ret",
   "tipo": "decisao_judicial",
   "tema": "queiroz",
   "data": "2026-02",
   "status": "arquivado",
   "titulo": "Procedimento cível arquivado e tentativas de retomada negadas (2024-2026)",
   "resumo": "Em 2024, o Conselho Superior do MP-RJ arquivou o procedimento cível, citando prescrição. O TJ-RJ negou recurso para nova quebra de sigilo. Em fevereiro de 2026, segundo reportagens, Gilmar Mendes negou recursos do MP para reabrir a apuração, que tramita sob sigilo.",
   "pessoas": [
    "queiroz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026",
     "trecho": "Em fevereiro, Gilmar Mendes negou recursos do MP para reabrir a apuração.",
     "tier": "referencia"
    },
    {
     "veiculo": "Notícias ao Minuto",
     "url": "https://www.noticiasaominuto.com.br/politica/2363992/tj-rj-negou-tentativa-de-retomada-do-caso-rachadinha-contra-flavio-bolsonaro",
     "data": "2024",
     "trecho": "TJ-RJ negou tentativa de retomada do caso 'rachadinha' contra Flávio Bolsonaro.",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "queiroz-vira-subsecretario-de-seguranca-de-saqua",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2026-04-12",
   "status": "fato",
   "titulo": "Queiroz vira subsecretário de Segurança de Saquarema (2025)",
   "resumo": "Após não se eleger, Queiroz foi nomeado subsecretário de Segurança e Ordem Pública de Saquarema (RJ), supervisionando a Guarda Municipal. A nomeação resultou de articulação do ex-prefeito Antonio Peres com Flávio Bolsonaro, evidenciando que segue politicamente protegido.",
   "pessoas": [
    "queiroz",
    "flavio",
    "antonio-peres"
   ],
   "fontes": [
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/2026/04/12/ex-assessor-de-flavio-bolsonaro-queiroz-vira-subsecretario-em-saquarema.html",
     "data": "2026-04-12",
     "trecho": "Ex-assessor de Flávio Bolsonaro, Queiroz vira subsecretário em Saquarema.",
     "tier": "agregador"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/pos-rachadinha-subsecretario-queiroz-monitora-guarda-municipal-no-rj",
     "data": "2026",
     "trecho": "Pós-rachadinha: subsecretário, Queiroz monitora Guarda Municipal no RJ.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "queiroz-reaparece-em-ato-de-flavio-em-cabo-frio",
   "tipo": "evento",
   "tema": "queiroz",
   "data": "2026-09-12",
   "status": "fato",
   "titulo": "Queiroz reaparece em ato de Flávio em Cabo Frio; diz que 'Flávio nem me viu'",
   "resumo": "No sábado 12/9/2026, Fabrício Queiroz, ex-assessor de Flávio e apontado pelo MPRJ como operador da 'rachadinha' (caso anulado, sem condenação), compareceu ao ato de campanha do candidato em Cabo Frio (RJ), permanecendo 'de maneira discreta ao lado do palco', em área reservada a assessores e aliados, sem subir ao palanque. Em 16/8, a assessoria de Flávio dissera que Queiroz não estivera no ato de Copacabana, apesar de foto de abraço publicada por ele; desta vez a presença foi registrada. À coluna de Igor Gadelha (Metrópoles), Queiroz negou ter sido 'escondido': 'Flávio nem me viu. Não tem que subir no palanque, não sou candidato a nada'. A campanha de Flávio não comentou nas matérias abertas.",
   "observacao": "Diário Carioca é portal regional. Queiroz ocupa cargo de subsecretário na prefeitura de Saquarema (RJ), segundo o próprio Diário Carioca.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles (coluna Igor Gadelha)",
     "url": "https://www.metropoles.com/colunas/igor-gadelha/queiroz-rechaca-ter-sido-escondido-por-flavio-em-evento-no-rio",
     "data": "2026-09-14",
     "trecho": "Na verdade, Flávio nem me viu. Não tem que subir no palanque, não sou candidato a nada",
     "tier": "referencia"
    },
    {
     "veiculo": "Diário Carioca",
     "url": "https://www.diariocarioca.com/2026/09/12/politica/eleicoes/fabricio-queiroz-protagonista-das-rachadinhas-reaparece-em-ato-de-flavio-bolsonaro",
     "data": "2026-09-12",
     "trecho": "de maneira discreta ao lado do palco",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "jb-flavio-e-queiroz-tiveram-encontro-reservado-e",
   "tipo": "noticia",
   "tema": "queiroz",
   "data": "2026-09-13",
   "status": "fato",
   "titulo": "JB: Flávio e Queiroz tiveram encontro reservado em Brasília no início de 2026, após insistência do ex-assessor",
   "resumo": "Reportagem do Jornal do Brasil de 13/9/2026 relata que Fabrício Queiroz procurou repetidamente Flávio no início de 2026 até conseguir um encontro discreto em Brasília, no fim do primeiro trimestre. Segundo interlocutores, Flávio teria exigido sigilo máximo e que Queiroz não usasse avião; o ex-assessor fez cerca de 15 horas de carro do Rio a Brasília. O senador teria deixado claro que queria distância durante a campanha e pedido que Queiroz não o procurasse mais. Depois, os dois se cruzaram na Avenida Atlântica (RJ), com abraço registrado por celulares e publicado por Queiroz. 'Flávio preferiu não comentar o caso nem respondeu às tentativas de contato da reportagem'.",
   "observacao": "Relato baseado em interlocutores não identificados; sem confirmação oficial de nenhuma das partes. Fonte única.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/politica/2026/09/1060896-flavio-bolsonaro-e-fabricio-queiroz-se-reuniram-em-brasilia-apos-insistencia.html",
     "data": "2026-09-13",
     "trecho": "Flávio preferiu não comentar o caso nem respondeu às tentativas de contato da reportagem",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-bolsonaro-concedeu-a-adriano-a-medalha-ti",
   "tipo": "evento",
   "tema": "milicia",
   "data": "2005-09",
   "status": "fato",
   "titulo": "Flávio Bolsonaro concedeu a Adriano a Medalha Tiradentes em 2005, com ele preso",
   "resumo": "Em setembro de 2005, ainda preso preventivamente aguardando julgamento, Adriano da Nóbrega recebeu do então deputado estadual Flávio Bolsonaro a Medalha Tiradentes, maior honraria da Alerj (Resolução nº 931/2005). A justificativa citava a 'prisão de doze criminosos'. Flávio já havia concedido a Adriano uma moção de louvor em outubro de 2003.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Wikipédia (verbete Adriano da Nóbrega)",
     "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega",
     "data": "2005-09",
     "trecho": "While imprisoned, received Medalha Tiradentes from Flávio Bolsonaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2020/02/01/miliciano-homenageado-por-flavio-bolsonaro-pode-perder-medalha-tiradentes/",
     "data": "2020-02-01",
     "trecho": "Miliciano homenageado por Flávio Bolsonaro pode perder Medalha Tiradentes",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "trajetoria-criminal-de-adriano-bope-homicidio-de",
   "tipo": "noticia",
   "tema": "milicia",
   "data": "2014-01",
   "status": "fato",
   "titulo": "Trajetória criminal de Adriano: BOPE, homicídio de flanelinha e expulsão da PM",
   "resumo": "Ex-BOPE e atirador de elite, Adriano (nascido em 1977, ingressou na PM-RJ em 1996) foi preso em 2004 pelo homicídio do flanelinha Leandro dos Santos Silva e condenado em 1ª instância a 19 anos e 6 meses em 2005; a sentença foi anulada e ele absolvido. Foi expulso da PM em janeiro de 2014.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Wikipédia (verbete Adriano da Nóbrega)",
     "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega",
     "data": "2014-01",
     "trecho": "Convicted to 19 years and 6 months; Conviction annulled; Expelled from PM",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "adriano-fundou-e-chefiou-o-escritorio-do-crime-g",
   "tipo": "investigacao",
   "tema": "milicia",
   "data": "2019-01",
   "status": "investigacao",
   "titulo": "Adriano fundou e chefiou o Escritório do Crime, grupo de matadores ex-PMs",
   "resumo": "O Escritório do Crime, criado em meados dos anos 2000 por Adriano da Nóbrega (o 'Capitão Adriano'), é apontado como grupo de pistoleiros de elite e matadores de aluguel da Zona Oeste do Rio, formado por PMs e ex-PMs. Em janeiro de 2019, a Operação Os Intocáveis mirou o grupo; Adriano fugiu e virou foragido.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "InsightCrime",
     "url": "https://insightcrime.org/brazil-organized-crime-news/escritorio-do-crime/",
     "data": "2020",
     "trecho": "created in the mid-2000s by a former special operations police captain, Capitão Adriano",
     "tier": "agregador"
    },
    {
     "veiculo": "Wikipédia (Escritório do Crime)",
     "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime",
     "data": "2020",
     "trecho": "milícia de pistoleiros de elite e matadores de aluguel da Zona Oeste do Rio",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "alerj-revogou-a-medalha-tiradentes-de-adriano-da",
   "tipo": "decisao_judicial",
   "tema": "milicia",
   "data": "2020-02",
   "status": "fato",
   "titulo": "Alerj revogou a Medalha Tiradentes de Adriano da Nóbrega",
   "resumo": "A Assembleia Legislativa do Rio (Alerj) aprovou projeto que revogou a Resolução nº 931/2005, que concedia a Medalha Tiradentes e o diploma ao 1º tenente PM Adriano Magalhães da Nóbrega. O pedido de revogação foi feito pelas deputadas Renata Souza, Dani Monteiro e Mônica Francisco, do PSOL.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Nova Sul Fluminense AM",
     "url": "https://www.novasulfluminenseam.com.br/artigo/alerj-vota-na-terca-revogacao-da-medalha-tiradentes-concedida-a-adriano-da-nobrega",
     "data": "2020-02",
     "trecho": "ALERJ vota revogação da Medalha Tiradentes concedida a Adriano da Nóbrega",
     "tier": "agregador"
    },
    {
     "veiculo": "Alerj (resolução)",
     "url": "http://www3.alerj.rj.gov.br/lotus_notes/default.asp?id=156&url=L3NjcHJvMTkyMy5uc2YvMWUxYmUwZTc3OWFkYWIyNzgzMjU2NmVjMDAxOGQ4MzgvN2Y2MjczMzk2ODVlYmI0NDgzMjU4Mzk5MDA1MWI5OTM/T3BlbkRvY3VtZW50",
     "data": "2020-02",
     "trecho": "Revogação da Resolução nº 931/2005",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "jair-e-flavio-bolsonaro-defenderam-adriano-como",
   "tipo": "declaracao",
   "tema": "milicia",
   "data": "2020-02",
   "status": "declaracao",
   "titulo": "Jair e Flávio Bolsonaro defenderam Adriano como 'herói' apesar de condenação",
   "resumo": "Em 2020, Jair Bolsonaro afirmou que, à época das homenagens, Adriano era 'um herói' da PM. Em 2005, então deputado federal, Jair o defendeu em discurso na Câmara por ocasião da condenação por homicídio. As homenagens de Flávio na Alerj teriam sido feitas a pedido do pai.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/governo/bolsonaro-diz-que-adriano-da-nobrega-era-1-heroi-quando-foi-homenageado/",
     "data": "2020-02",
     "trecho": "Bolsonaro diz que Adriano da Nóbrega era 1 'herói' quando foi homenageado",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/pais/politica/2020/02/1022248-mesmo-preso--o-miliciano-adriano-era--um-heroi--a-epoca-em-que-foi-homenageado-por-flavio-na-alerj--diz-bolsonaro.html",
     "data": "2020-02",
     "trecho": "Mesmo preso, o miliciano Adriano era 'um herói'",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "orelha-braco-direito-de-adriano-tambem-foi-homen",
   "tipo": "evento",
   "tema": "milicia",
   "data": "2020-02",
   "status": "fato",
   "titulo": "'Orelha', braço-direito de Adriano, também foi homenageado por Flávio na Alerj",
   "resumo": "Luiz Carlos Felipe Martins, o 'Orelha', apontado como braço-direito de Adriano da Nóbrega no Escritório do Crime, também recebeu homenagem (medalha) da Alerj por iniciativa de Flávio Bolsonaro quando deputado estadual. Em escutas, Orelha disse que Adriano 'se fodia por ser amigo do Presidente da República'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/justica/apos-mencao-a-bolsonaro-mp-suspende-grampo-no-caso-adriano-da-nobrega/",
     "data": "2021-02-10",
     "trecho": "Orelha: Nóbrega 'dizia que se fodia por ser amigo do Presidente da República'",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles (Blog do Noblat)",
     "url": "https://www.metropoles.com/blog-do-noblat/ricardo-noblat/os-lacos-de-flavio-bolsonaro-com-o-submundo-do-crime-no-rio",
     "data": "2020",
     "trecho": "Os laços de Flávio Bolsonaro com o submundo do crime no Rio",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "adriano-da-nobrega-condecorado-por-flavio-na-ale",
   "tipo": "noticia",
   "tema": "milicia",
   "data": "2020-02-09",
   "status": "fato",
   "titulo": "Adriano da Nóbrega: condecorado por Flávio na Alerj, morto em 2020 na Bahia",
   "resumo": "Adriano Magalhães da Nóbrega, ex-PM apontado como chefe do Escritório do Crime, foi homenageado por Flávio Bolsonaro na Alerj (moção em 2003 e Medalha Tiradentes em 2005, esta já com Adriano preso). Foragido por mais de um ano, foi morto em operação policial na Bahia em 09/02/2020.",
   "pessoas": [
    "adriano",
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/governo/bolsonaro-diz-que-adriano-da-nobrega-era-1-heroi-quando-foi-homenageado/",
     "data": "2020-02-11",
     "trecho": "Bolsonaro diz que Adriano da Nóbrega era um herói quando foi homenageado",
     "tier": "referencia"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/",
     "data": "2020-02-10",
     "trecho": "Adriano recebeu das mãos de Flávio Bolsonaro a Medalha Tiradentes, maior honraria do estado do Rio",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "adriano-da-nobrega-chefe-do-escritorio-do-crime",
   "tipo": "evento",
   "tema": "milicia",
   "data": "2020-02-09",
   "status": "fato",
   "titulo": "Adriano da Nóbrega, chefe do Escritório do Crime, é morto na Bahia",
   "resumo": "O ex-capitão da PM Adriano Magalhães da Nóbrega, apontado como chefe do Escritório do Crime (grupo de extermínio de PMs e ex-PMs no Rio), foi morto em Esplanada, na Bahia, durante operação policial. Estava foragido havia cerca de um ano. A versão oficial diz que ele reagiu e houve troca de tiros.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2020/02/09/chefe-do-escritorio-do-crime-miliciano-ligado-a-flavio-bolsonaro-e-morto-na-ba/",
     "data": "2020-02-09",
     "trecho": "miliciano ligado a Flávio Bolsonaro é morto na BA",
     "tier": "referencia"
    },
    {
     "veiculo": "Wikipédia (verbete Adriano da Nóbrega)",
     "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega",
     "data": "2020-02-09",
     "trecho": "Killed in Esplanada, Bahia during alleged confrontation",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fotos-e-laudos-reforcam-suspeita-de-queima-de-ar",
   "tipo": "investigacao",
   "tema": "milicia",
   "data": "2020-02-20",
   "status": "suspeita",
   "titulo": "Fotos e laudos reforçam suspeita de 'queima de arquivo' na morte de Adriano",
   "resumo": "Após a morte, surgiram suspeitas de execução. A revista Veja publicou imagens e exames que indicariam tiro à queima-roupa, corte na testa e marca de cano de arma no abdômen. A viúva e o advogado acusaram execução para eliminar provas sobre grupos criminosos formados por agentes. Laudo parcial não confirmou nem descartou tortura.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Correio (BA)",
     "url": "https://www.correio24horas.com.br/bahia/fotos-de-miliciano-morto-fortalecem-suspeita-de-queima-de-arquivo-diz-revista-0220",
     "data": "2020-02-20",
     "trecho": "Fotos de miliciano morto fortalecem suspeita de queima de arquivo",
     "tier": "agregador"
    },
    {
     "veiculo": "Meia Hora",
     "url": "https://www.meiahora.com.br/geral/2020/02/5868470-fotos-de-adriano-da-nobrega-morto-reforcam-tese-de--queima-de-arquivo.html",
     "data": "2020-02",
     "trecho": "Fotos de Adriano da Nóbrega morto reforçam tese de queima de arquivo",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mp-rj-suspendeu-grampos-no-caso-adriano-apos-men",
   "tipo": "investigacao",
   "tema": "milicia",
   "data": "2021-02-10",
   "status": "investigacao",
   "titulo": "MP-RJ suspendeu grampos no caso Adriano após menções a Bolsonaro",
   "resumo": "Reportagem aponta que o MP-RJ deixou de renovar interceptações telefônicas no caso Adriano da Nóbrega logo após conversas monitoradas mencionarem Jair Bolsonaro. Em um caso, a irmã Tatiana; em outro, o aliado 'Orelha'. O MP não tinha competência para investigar o presidente e não teria repassado o material à PGR.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/justica/apos-mencao-a-bolsonaro-mp-suspende-grampo-no-caso-adriano-da-nobrega/",
     "data": "2021-02-10",
     "trecho": "Após menção a Bolsonaro, MP suspende grampos do caso Adriano da Nóbrega",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "irma-de-adriano-acusa-governo-bolsonaro-de-ofere",
   "tipo": "declaracao",
   "tema": "milicia",
   "data": "2022-04-06",
   "status": "declaracao",
   "titulo": "Irmã de Adriano acusa governo Bolsonaro de oferecer cargos pela morte do miliciano",
   "resumo": "Em conversas interceptadas, Daniela, irmã de Adriano, afirmou que o governo Bolsonaro teria oferecido cargos comissionados no Planalto 'pela vida' do irmão: 'Fizeram uma reunião com o nome do Adriano no Planalto'. Ela reforçou a tese de queima de arquivo, mas responsabilizou o então governador Witzel pela morte.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2022/04/06/governo-bolsonaro-ofereceu-cargos-pela-morte-de-adriano-da-nobrega-acusa-irma-do-miliciano/",
     "data": "2022-04-06",
     "trecho": "Já tinham dado cargos comissionados no Planalto pela vida dele",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "adriano-e-ronnie-lessa-condenado-pela-morte-de-m",
   "tipo": "investigacao",
   "tema": "milicia",
   "data": "2024-01",
   "status": "investigacao",
   "titulo": "Adriano e Ronnie Lessa, condenado pela morte de Marielle, teriam matado juntos",
   "resumo": "Jornalismo e livro apontam que Adriano da Nóbrega e Ronnie Lessa, ex-PMs e disputados como 'melhores' matadores do Rio, se uniam para eliminar alvos comuns. Lessa foi condenado por executar a vereadora Marielle Franco e o motorista Anderson Gomes em 2018 e morava na mesma rua de Jair Bolsonaro no Vivendas da Barra.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/brasil/2024/01/6792485-ronnie-lessa-e-adriano-da-nobrega-ja-mataram-juntos-diz-jornalista.html",
     "data": "2024-01",
     "trecho": "'Ronnie Lessa e Adriano da Nóbrega já mataram juntos', diz jornalista",
     "tier": "agregador"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/entrevistas/alem-de-rivais-livro-revela-a-conexao-mortal-entre-ronnie-lessa-e-adriano-da-nobrega/",
     "data": "2024",
     "trecho": "livro revela a conexão mortal entre Ronnie Lessa e Adriano da Nóbrega",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-rj-denuncia-raimunda-por-lavagem-de-dinheiro",
   "tipo": "denuncia",
   "tema": "milicia",
   "data": "2026-03-19",
   "status": "denuncia",
   "titulo": "MP-RJ denuncia Raimunda por lavagem de dinheiro do jogo do bicho (março/2026)",
   "resumo": "Em 19/03/2026 o MP-RJ denunciou 19 pessoas, entre elas Raimunda Veras Magalhães, por integrar rede criminosa usada para receber, movimentar e ocultar valores do jogo do bicho ligados a Adriano da Nóbrega. Quatro empresas teriam movimentado R$ 8,5 milhões.",
   "pessoas": [
    "raimunda",
    "adriano",
    "bernardo_bello",
    "julia_lotufo",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano",
     "data": "2026-03-19",
     "trecho": "MP denuncia ex-assessora de Flávio Bolsonaro por esquema de lavagem de dinheiro de filho miliciano; 19 denunciados; R$ 8,5 milhões",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/",
     "data": "2026-03-19",
     "trecho": "Mãe de miliciano morto, ex-assessora de Flávio Bolsonaro, é denunciada por lavagem de dinheiro",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/ex-assessora-de-flavio-e-denunciada-por-suspeita-de-lavar-dinheiro",
     "data": "2026-03-19",
     "trecho": "Ex-assessora de Flávio é denunciada por suspeita de lavar dinheiro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "esquema-de-jogo-do-bicho-dominio-em-copacabana-c",
   "tipo": "investigacao",
   "tema": "milicia",
   "data": "2026-03-19",
   "status": "denuncia",
   "titulo": "Esquema de jogo do bicho: domínio em Copacabana com Bernardo Bello e empresas de fachada",
   "resumo": "Segundo o MP-RJ, Adriano da Nóbrega exercia domínio sobre a exploração do jogo do bicho em Copacabana em parceria com o contraventor Bernardo Bello. Empresas de fachada (depósito de bebida, bar, restaurante, pizzaria, quiosque de sobrancelha) lavavam o dinheiro; um quiosque movimentou cerca de R$ 2 milhões em seis meses.",
   "pessoas": [
    "adriano",
    "bernardo_bello",
    "julia_lotufo"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/ex-assessora-de-flavio-e-denunciada-por-suspeita-de-lavar-dinheiro",
     "data": "2026-03-19",
     "trecho": "Adriano exercia domínio sobre o jogo do bicho em Copacabana em parceria com o contraventor Bernardo Bello",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/",
     "data": "2026-03-19",
     "trecho": "Empresas de fachada: depósito de bebida, bar, restaurante, quiosque de sobrancelha (~R$ 2 milhões em 6 meses), pizzaria",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "julia-lotufo-viuva-de-adriano-apontada-como-lide",
   "tipo": "denuncia",
   "tema": "milicia",
   "data": "2026-03-19",
   "status": "denuncia",
   "titulo": "Julia Lotufo, viúva de Adriano, apontada como líder da contabilidade da organização",
   "resumo": "Na denúncia de 2026, Julia Lotufo, viúva de Adriano, é apontada pelo MP-RJ como líder que controlava a contabilidade e os ativos da organização criminosa. Ela teria vendido imóveis avaliados em R$ 3,5 milhões, atribuídos ao miliciano, ao deputado federal Rogério Teixeira Júnior, o Juninho do Pneu.",
   "pessoas": [
    "julia_lotufo",
    "adriano",
    "rogerio-teixeira-junior-juninho-do-pneu"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/ex-assessora-de-flavio-e-denunciada-por-suspeita-de-lavar-dinheiro",
     "data": "2026-03-19",
     "trecho": "Julia Lotufo atuava como líder e controlava toda a contabilidade e ativos da organização criminosa",
     "tier": "referencia"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano",
     "data": "2026-03-19",
     "trecho": "Julia Lotufo vendeu imóveis avaliados em R$ 3,5 milhões a Juninho do Pneu",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "moraes-reconhece-transito-em-julgado-e-manda-exe",
   "tipo": "decisao_judicial",
   "tema": "milicia",
   "data": "2026-07-13",
   "status": "condenacao",
   "titulo": "Moraes reconhece trânsito em julgado e manda executar as penas dos cinco condenados no caso Marielle",
   "resumo": "Em decisões publicadas em 13 de julho de 2026, o ministro Alexandre de Moraes reconheceu o trânsito em julgado das condenações no caso Marielle Franco e Anderson Gomes, já certificado pela Secretaria Judiciária do STF, e determinou 'o início imediato do cumprimento da pena dos cinco condenados', após considerar de 'caráter procrastinatório' os embargos infringentes apresentados pelas defesas. As penas: Domingos Brazão e Chiquinho Brazão, 76 anos e 3 meses mais 200 dias-multa cada; Ronald Paulo Alves Pereira, 56 anos; Rivaldo Barbosa, ex-chefe da Polícia Civil do Rio, 18 anos mais 360 dias-multa; e Robson Calixto Fonseca, 9 anos mais 200 dias-multa. Domingos Brazão foi destinado ao presídio Constantino Cokotós, Rivaldo Barbosa ao presídio Pedrolino Werling de Oliveira e Ronald Pereira à Penitenciária Federal de Brasília. Chiquinho Brazão cumpre prisão domiciliar, inicialmente por 90 dias, com tornozeleira eletrônica e proibição de visitas e de redes sociais, por doença arterial coronariana crônica, diabetes tipo 2, sinais de nefropatia bilateral e hipertensão.",
   "observacao": "Flávio Bolsonaro não é parte neste processo; o item entra pela frente Marielle/milícia. Correções em relação ao item proposto: nenhuma das duas fontes verificadas diz que Rivaldo Barbosa foi condenado por corrupção passiva e obstrução de justiça com reenquadramento da imputação de homicídio, nem tipifica os crimes de Robson Calixto — essas atribuições foram removidas por falta de lastro. A menção a 'Bangu 8' também foi removida: as fontes citam apenas o presídio Pedrolino Werling de Oliveira. A versão das defesas é o próprio recurso (embargos infringentes), tratado por Moraes como protelatório.",
   "pessoas": [
    "domingos-brazao",
    "chiquinho-brazao",
    "rivaldo-barbosa",
    "ronald-paulo-alves-pereira",
    "robson-calixto-fonseca"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-07/caso-marielle-moraes-determina-cumprimento-imediato-de-penas",
     "data": "2026-07-14",
     "trecho": "o início imediato do cumprimento da pena dos cinco condenados",
     "tier": "agregador"
    },
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/460306/moraes-determina-cumprimento-das-penas-de-condenados-no-caso-marielle",
     "data": "2026-07-14",
     "trecho": "reconheceram o trânsito em julgado das condenações, já certificado pela Secretaria Judiciária",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "no-jornal-nacional-flavio-justifica-homenagem-a",
   "tipo": "declaracao",
   "tema": "milicia",
   "data": "2026-08-28",
   "status": "declaracao",
   "titulo": "No Jornal Nacional, Flávio justifica homenagem a Adriano da Nóbrega: 'policial exemplar na época'",
   "resumo": "Em 28 de agosto de 2026, em sabatina no Jornal Nacional conduzida por Renata Vasconcellos e César Tralli, Flávio Bolsonaro foi questionado sobre a medalha que concedeu ao ex-capitão do Bope Adriano Magalhães da Nóbrega. O senador afirmou que Nóbrega era um 'policial exemplar' à época da homenagem e que 'eu não posso ser responsabilizado pelo que a pessoa se transforma depois de cinco, 10, 15, 20 anos'; em outra passagem, disse que quando o homenageou 'não sabia que ele era um matador'. Sobre a contratação da mãe e da mulher de Nóbrega em seu gabinete na Alerj, justificou que via Nóbrega como um 'policial exemplar que estava sendo preso injustamente' e que conheceu os familiares por meio de movimentos de defesa de policiais.",
   "observacao": "São DECLARAÇÕES do senador, não fatos provados. Correções em relação ao item proposto: as fontes verificadas dizem apenas 'medalha', sem nomear a Medalha Tiradentes, e não afirmam que Nóbrega estava preso por homicídio na data da homenagem — essas informações foram removidas. Também removidos da lista de pessoas os nomes da mãe e da mulher de Nóbrega, que não são citados pelas fontes. A TVT News é ligada à CUT: usar apenas como corroboração de data e teor.",
   "pessoas": [
    "flavio",
    "adriano"
   ],
   "fontes": [
    {
     "veiculo": "Rádio Itatiaia",
     "url": "https://www.itatiaia.com.br/politica/eleicoes/flavio-bolsonaro-justifica-medalha-a-adriano-da-nobrega-policial-exemplar-na-epoca/",
     "data": "2026-08-28",
     "trecho": "Eu não posso ser responsabilizado pelo que a pessoa se transforma depois de cinco, 10, 15, 20 anos",
     "tier": "agregador"
    },
    {
     "veiculo": "TVT News",
     "url": "https://tvtnews.com.br/acompanhe-a-entrevista-de-flavio-bolsonaro-na-globo/",
     "data": "2026-08-28",
     "trecho": "quando homenageou Adriano da Nóbrega, ele não sabia que ele era um matador",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "video-de-gregorio-duvivier-chama-flavio-de-cria",
   "tipo": "midia",
   "tema": "milicia",
   "data": "2026-09-16",
   "status": "declaracao",
   "titulo": "Vídeo de Gregório Duvivier chama Flávio de 'cria da milícia de Rio das Pedras' e reacende tema da medalha a Adriano da Nóbrega",
   "resumo": "Em 16/9/2026 repercutiu nas redes um vídeo do humorista Gregório Duvivier afirmando que 'Flávio Bolsonaro é cria da milícia de Rio das Pedras' e que 'O Flávio vai transformar o Brasil num grande Rio de Janeiro', em crítica ao discurso de segurança pública do candidato. O tema remete à Medalha Tiradentes concedida por Flávio, quando deputado estadual, a Adriano da Nóbrega, então preso preventivamente por homicídio e depois apontado como ligado à milícia de Rio das Pedras, e ao emprego da mãe e da ex-mulher de Adriano em seu gabinete na Alerj. Não há desdobramento judicial novo. Defesa de Flávio, conforme registrada pela Fórum: Adriano era 'policial exemplar' à época da homenagem, falas antigas sobre milícia foram 'retiradas de contexto' e hoje defende enquadrar milicianos como terroristas.",
   "observacao": "Conteúdo de opinião/humor amplificado por veículo de esquerda (Revista Fórum), fonte única; não é fato judicial. Mantido por ser o único desdobramento do tema 'milícia' na janela.",
   "pessoas": [
    "flavio",
    "adriano"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/gregorio-flavio-bolsonaro-milicia/",
     "data": "2026-09-16",
     "trecho": "Flávio Bolsonaro é cria da milícia de Rio das Pedras",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tese-de-mandatos-cruzados-estrategia-central-da",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2020-06-26",
   "status": "fato",
   "titulo": "Tese de 'mandatos cruzados': estratégia central da defesa de Flávio",
   "resumo": "A defesa sustentou que Flávio manteve foro especial mesmo após deixar o cargo de deputado estadual, por ter assumido sem interrupção mandato de senador. A 3ª Câmara Criminal do TJ-RJ acolheu a tese e enviou o caso ao Órgão Especial, contrariando entendimento restritivo do STF de 2018. A Rede questionou via ADI 6477.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Conjur",
     "url": "https://www.conjur.com.br/2020-jun-26/tj-rj-contraria-supremo-manter-foro-especial-flavio-bolsonaro/",
     "data": "2020-06-26",
     "trecho": "TJ-RJ contraria Supremo ao manter foro especial de Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Conjur",
     "url": "https://www.conjur.com.br/2020-jun-29/rede-questiona-entendimento-tj-rj-flavio",
     "data": "2020-06-29",
     "trecho": "Rede questiona entendimento do TJ-RJ sobre Flávio Bolsonaro (ADI 6477)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-1-decisao-mar-2021-mantem-competencia-do-jui",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-03-16",
   "status": "decisao_judicial",
   "titulo": "STJ (1ª decisão, mar/2021) mantém competência do juiz Itabaiana por 3 a 2",
   "resumo": "Em março de 2021, a 5ª Turma do STJ negou, por 3 votos a 2, pedido da defesa para anular as decisões do juiz Flávio Itabaiana (27ª Vara Criminal do Rio). Felix Fischer, Ribeiro Dantas e Reynaldo Soares da Fonseca votaram por manter a competência do magistrado de primeira instância. Essa posição seria revertida meses depois.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://cnnbrasil.com.br/politica/2021/03/16/stj-impoe-novo-reves-a-flavio-bolsonaro-e-mantem-decisoes-do-juiz-itabaiana",
     "data": "2021-03-16",
     "trecho": "STJ impõe novo revés a Flávio Bolsonaro e mantém decisões do juiz Itabaiana",
     "tier": "referencia"
    },
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2021-nov-09/stj-anula-atos-juiz-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "mudou posição tomada em março de 2021",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stf-fixa-tese-dos-mandatos-cruzados-na-pet-9-189",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-05-14",
   "status": "decisao_judicial",
   "titulo": "STF fixa tese dos 'mandatos cruzados' na Pet 9.189 (mai/2021)",
   "resumo": "Em 14 de maio de 2021, o STF julgou a Pet 9.189 e fixou a tese dos 'mandatos cruzados': a competência penal originária do parlamentar federal se mantém quando há mudança de casa legislativa sem interrupção. Essa tese foi o fundamento que a defesa de Flávio usaria para sustentar a incompetência do juízo de primeira instância.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2021-nov-09/stj-anula-atos-juiz-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "doutrina dos 'mandatos cruzados' do STF na Pet 9.189 (14 de maio de 2021)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-anula-provas-do-caso-da-rachadinha-que-embas",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-08-25",
   "status": "anulado",
   "titulo": "STJ anula provas do caso da 'rachadinha' que embasava suspeitas patrimoniais",
   "resumo": "A 5ª Turma do STJ, por 4 a 1, anulou decisões e provas (celulares apreendidos e dados de quebras de sigilo) colhidas em dois anos de investigação do MP-RJ contra Flávio. Sem as provas, o TJ-RJ rejeitou a denúncia e o processo da 'rachadinha' — base das suspeitas sobre os imóveis — voltou à estaca zero.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-08-25",
     "trecho": "STJ anula decisões contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "referencia"
    },
    {
     "veiculo": "STF/Notícias",
     "url": "https://noticias.stf.jus.br/postsnoticias/2a-turma-decide-que-provas-contra-flavio-bolsonaro-no-caso-das-chamadas-rachadinhas-sao-ilegais/",
     "data": "2022-04-26",
     "trecho": "provas contra Flávio Bolsonaro no caso das chamadas rachadinhas são ilegais",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "stf-anula-4-dos-5-relatorios-do-coaf-usados-cont",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-11",
   "status": "anulado",
   "titulo": "STF anula 4 dos 5 relatórios do Coaf usados contra Flávio (nov/2021)",
   "resumo": "Em novembro de 2021, a 2ª Turma do STF acolheu habeas corpus e anulou quatro dos cinco relatórios de inteligência financeira do Coaf que embasavam a acusação contra Flávio, por considerar ilegítimo o compartilhamento de dados. As provas derivadas tornaram-se contaminadas.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/stf-anula-provas-contra-flavio-bolsonaro-no-caso-das-rachadinhas",
     "data": "2021",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2025",
     "trecho": "STF anulou quatro dos cinco relatórios do Coaf, considerando o compartilhamento de dados ilegítimo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stf-anula-4-de-5-relatorios-do-coaf-que-embasara",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-11-01",
   "status": "anulado",
   "titulo": "STF anula 4 de 5 relatórios do Coaf que embasaram a denúncia",
   "resumo": "Em novembro de 2021, a Segunda Turma do STF anulou quatro dos cinco relatórios de inteligência financeira do Coaf que embasavam a denúncia, por entender que o compartilhamento dos dados ocorreu de forma ilegítima, com irregularidades procedimentais.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026-01-01",
     "trecho": "Segunda Turma do STF anulou quatro dos cinco relatórios do Coaf por compartilhamento ilegítimo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-anula-decisoes-da-justica-do-rj-por-foro-de",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-11-09",
   "status": "anulado",
   "titulo": "STJ anula decisões da Justiça do RJ por foro de deputado estadual",
   "resumo": "Em novembro de 2021, a 5ª Turma do STJ, por 4 votos a 1, anulou todas as decisões da Justiça do Rio no caso, acolhendo a tese de que Flávio mantinha foro privilegiado de deputado estadual (mandato cruzado). Provas como celulares apreendidos e quebras de sigilo foram invalidadas, e o MP-RJ pediu a anulação da própria denúncia, acolhida pelo Órgão Especial do TJ-RJ.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2021-nov-09/stj-anula-atos-juiz-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "STJ anula atos de juiz contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2021/11/10/stj-anula-todas-as-decisoes-da-justica-do-rj-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11-10",
     "trecho": "Por 4 a 1, STJ acolheu tese do foro privilegiado de deputado estadual",
     "tier": "referencia"
    },
    {
     "veiculo": "JOTA",
     "url": "https://www.jota.info/legislativo/stj-anula-decisoes-de-juiz-e-provas-contra-flavio-bolsonaro-no-caso-das-rachadinhas",
     "data": "2021-11-09",
     "trecho": "STJ anula decisões de juiz e provas contra Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-2-decisao-nov-2021-reverte-posicao-e-anula-a",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-11-09",
   "status": "anulado",
   "titulo": "STJ (2ª decisão, nov/2021) reverte posição e anula atos do juiz Itabaiana",
   "resumo": "Em 9/11/2021, a 5ª Turma do STJ, ao julgar embargos com efeitos infringentes, reverteu a posição de março e anulou os atos do juiz Flávio Itabaiana. Aplicou a tese dos 'mandatos cruzados' (Pet 9.189): como Flávio passou de deputado estadual a senador sem interrupção, o caso deveria ter tramitado no Órgão Especial do TJ-RJ, não em 1ª instância. Prevaleceu o voto divergente de João Otávio de Noronha.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2021-nov-09/stj-anula-atos-juiz-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "a alteração da competência invalida automaticamente as decisões tomadas pelo juiz Flávio Itabaiana",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/stj-atende-flavio-bolsonaro-e-anula-decisoes-do-caso-das-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "STJ atende Flávio Bolsonaro e anula decisões do caso das 'rachadinhas'",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "STJ anula decisões contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-anula-quebras-de-sigilo-e-provas-do-caso-nov",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2021-11-09",
   "status": "anulado",
   "titulo": "STJ anula quebras de sigilo e provas do caso (nov/2021)",
   "resumo": "Em 09/11/2021, a 5ª Turma do STJ, por 4 votos a 1, anulou as decisões da Justiça do RJ contra Flávio no caso das rachadinhas, invalidando quebras de sigilo bancário, fiscal e telefônico. A defesa alegou foro de então deputado estadual; a investigação voltou à estaca zero.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "STJ anula decisões contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2021/11/10/stj-anula-todas-as-decisoes-da-justica-do-rj-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11-10",
     "trecho": "STJ anula todas as decisões da Justiça do RJ contra Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stj-5-turma-anula-atos-do-juiz-flavio-itabaiana",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2021-11-09",
   "status": "decisao_judicial",
   "titulo": "STJ (5ª Turma) anula atos do juiz Flávio Itabaiana e quebras de sigilo",
   "resumo": "Por 4 a 1, a 5ª Turma do STJ anulou as decisões do juiz Flávio Itabaiana (27ª Vara Criminal do RJ), por incompetência, e as cautelares de 1ª instância, incluindo quebras de sigilo bancário, fiscal e telefônico. Aplicou a tese de 'mandatos cruzados' do STF (maio/2021).",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Conjur",
     "url": "https://www.conjur.com.br/2021-nov-09/stj-anula-atos-juiz-flavio-bolsonaro-rachadinhas/",
     "data": "2021-11-09",
     "trecho": "STJ anula atos do juiz contra Flávio Bolsonaro nas rachadinhas; maioria 4x1, relator João Otávio de Noronha",
     "tier": "referencia"
    },
    {
     "veiculo": "JOTA",
     "url": "https://www.jota.info/legislativo/stj-anula-decisoes-de-juiz-e-provas-contra-flavio-bolsonaro-no-caso-das-rachadinhas",
     "data": "2021-11-09",
     "trecho": "STJ anula decisões de juiz e provas contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stf-2-turma-reconhece-foro-privilegiado-de-flavi",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2021-11-30",
   "status": "decisao_judicial",
   "titulo": "STF (2ª Turma) reconhece foro privilegiado de Flávio no caso das rachadinhas",
   "resumo": "Por 3 a 1 (relator Gilmar Mendes; vencido Fachin), a 2ª Turma do STF reconheceu que Flávio Bolsonaro tinha foro por prerrogativa de função, aplicando a tese de 'mandatos cruzados'. A investigação não poderia ter corrido em 1ª instância no Rio, devendo ir ao Órgão Especial do TJ-RJ.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stf-mantem-foro-privilegiado-de-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11-30",
     "trecho": "Por 3 votos a 1, 2ª Turma manteve foro privilegiado; relator Gilmar Mendes, vencido Fachin",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/justica/rachadinhas-2a-turma-do-stf-reconhece-foro-privilegiado-de-flavio-bolsonaro/",
     "data": "2021-11-30",
     "trecho": "2ª Turma do STF reconhece foro privilegiado de Flávio Bolsonaro nas rachadinhas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "gilmar-aponta-investigacao-disfarcada-e-stf-anul",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2021-11-30",
   "status": "decisao_judicial",
   "titulo": "Gilmar aponta 'investigação disfarçada' e STF anula 4 dos 5 relatórios do Coaf",
   "resumo": "No mesmo julgamento, a 2ª Turma anulou quatro dos cinco relatórios do Coaf que embasavam a denúncia. Gilmar Mendes destacou que os relatórios começaram em julho/2018, quando Flávio era deputado estadual, mas sua inclusão formal só ocorreu em março/2019, configurando 'investigação disfarçada' e compartilhamento ilegítimo de dados.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "STF (portal oficial)",
     "url": "https://noticias.stf.jus.br/postsnoticias/2a-turma-decide-que-provas-contra-flavio-bolsonaro-no-caso-das-chamadas-rachadinhas-sao-ilegais/",
     "data": "2021-11-30",
     "trecho": "2ª Turma decide que provas contra Flávio Bolsonaro nas 'rachadinhas' são ilegais",
     "tier": "primaria"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026",
     "trecho": "Mendes apontou 'investigação disfarçada'; relatórios começaram em julho/2018, inclusão formal só em março/2019",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "defesa-de-flavio-na-rachadinha-advogados-e-ataqu",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2022",
   "status": "fato",
   "titulo": "Defesa de Flávio na rachadinha: advogados e ataque ao foro que o salvou",
   "resumo": "Na rachadinha, Flávio foi defendido por advogados como Rodrigo Roca e Luciana Pires. Apesar de Flávio criticar publicamente o foro privilegiado, foi justamente o reconhecimento do foro por prerrogativa de função que levou à anulação das provas e ao arquivamento do caso.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/flavio-bolsonaro-ataca-o-foro-privilegiado-mas-foi-salvo-por-ele-no-caso-das-rachadinhas",
     "data": "2021",
     "trecho": "Flávio ataca o foro privilegiado, mas foi salvo por ele no caso das rachadinhas",
     "tier": "agregador"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026",
     "trecho": "Rodrigo Roca assumiu a defesa de Flávio em 2020; Luciana Pires também atua",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tj-rj-orgao-especial-arquiva-a-denuncia-contra-f",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2022-05-16",
   "status": "arquivado",
   "titulo": "TJ-RJ (Órgão Especial) arquiva a denúncia contra Flávio (mai/2022)",
   "resumo": "Em maio de 2022, o Órgão Especial do TJ-RJ arquivou a denúncia. O próprio MP-RJ pediu a extinção após as provas serem anuladas pelo STJ e pelo STF. O colegiado entendeu que a quebra de sigilo negada era imprescindível para avançar e que, passados cinco anos do fim do mandato estadual de Flávio, o caso já estaria prescrito em relação a ele.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2022-mai-16/tj-rj-arquiva-denuncia-flavio-bolsonaro-rachadinha/",
     "data": "2022-05-16",
     "trecho": "TJ-RJ arquiva denúncia contra Flávio Bolsonaro por 'rachadinha'",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2022-05/justica-do-rio-arquiva-processo-de-caso-de-supostas-rachadinhas",
     "data": "2022-05",
     "trecho": "Justiça do Rio arquiva processo de caso de supostas rachadinhas",
     "tier": "agregador"
    },
    {
     "veiculo": "JOTA",
     "url": "https://www.jota.info/justica/tjrj-arquiva-denuncia-contra-flavio-bolsonaro-no-caso-das-rachadinhas",
     "data": "2022-05",
     "trecho": "TJRJ arquiva denúncia contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "orgao-especial-do-tj-rj-arquiva-denuncia-por-fal",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2022-05-16",
   "status": "arquivado",
   "titulo": "Órgão Especial do TJ-RJ arquiva denúncia por falta de justa causa",
   "resumo": "O Órgão Especial do TJ-RJ arquivou a denúncia contra Flávio Bolsonaro após STJ e STF anularem as provas. O próprio MP-RJ pediu a extinção, reconhecendo que dados bancários e fiscais não poderiam embasar a acusação. O arquivamento por falta de justa causa não impede reabertura com novas provas.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2022-05/justica-do-rio-arquiva-processo-de-caso-de-supostas-rachadinhas",
     "data": "2022-05-16",
     "trecho": "Justiça do Rio arquiva processo de caso de supostas rachadinhas",
     "tier": "agregador"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2022/05/16/justica-do-rj-rejeita-denuncia-contra-flavio-bolsonaro-depois-de-stj-e-stf-anularem-provas/",
     "data": "2022-05-16",
     "trecho": "Justiça do RJ arquiva denúncia depois de STJ e STF anularem provas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tj-rj-nega-ao-mp-nova-quebra-de-sigilo-do-senado",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2022-09",
   "status": "arquivado",
   "titulo": "TJ-RJ nega ao MP nova quebra de sigilo do senador (set/2022)",
   "resumo": "Em setembro de 2022, a 2ª Câmara de Direito Público do TJ-RJ rejeitou recurso do MP-RJ que buscava realizar nova quebra de sigilo bancário e fiscal de Flávio Bolsonaro para tentar reabrir as investigações da rachadinha.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Notícias ao Minuto",
     "url": "https://www.noticiasaominuto.com.br/politica/2363992/tj-rj-negou-tentativa-de-retomada-do-caso-rachadinha-contra-flavio-bolsonaro",
     "data": "2022-09",
     "trecho": "TJ-RJ negou tentativa de retomada do caso 'rachadinha' contra Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "stj-admite-recurso-do-mp-rj-e-encaminha-ao-stf-a",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2023-04-18",
   "status": "processo",
   "titulo": "STJ admite recurso do MP-RJ e encaminha ao STF a questão dos 'mandatos cruzados' (abr/2023)",
   "resumo": "Em fevereiro/2023 o MP-RJ apresentou agravo em recurso especial buscando retomar a apuração, sob argumento de 'renovar os atos' com provas lícitas. Em abril de 2023, o STJ admitiu o recurso e o encaminhou ao STF para manifestação sobre a tese dos 'mandatos cruzados' aplicada ao caso.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2023-abr-18/stj-envia-stf-recurso-nulidades-flavio-bolsonaro/",
     "data": "2023-04-18",
     "trecho": "STJ envia ao STF recurso contra nulidades no 'caso Flávio Bolsonaro'",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026",
     "trecho": "STJ admitiu recurso e encaminhou ao STF para manifestação sobre mandatos cruzados",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tentativas-de-reabertura-barradas-risco-de-presc",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2024-02-01",
   "status": "anulado",
   "titulo": "Tentativas de reabertura barradas; risco de prescrição",
   "resumo": "Após a anulação, o MP-RJ recorreu para reabrir a investigação. Em fevereiro de 2024, o ministro Gilmar Mendes negou recurso do MP. Entre 2025 e 2026, prevaleceu o entendimento de inviabilidade de reabertura criminal, com risco de prescrição, e o caso seguiu sem processo ativo.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2026-01-01",
     "trecho": "Gilmar Mendes negou recursos do MP em 2024; caso sem proceso ativo",
     "tier": "referencia"
    },
    {
     "veiculo": "Vermelho",
     "url": "https://vermelho.org.br/2026/04/07/manobras-e-prescricao-blindam-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2026-04-07",
     "trecho": "Manobras e prescrição blindam Flávio Bolsonaro no caso das rachadinhas",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "wassef-acusa-pf-de-apreensao-ilegal-de-celulares",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2024-07",
   "status": "declaracao",
   "titulo": "Wassef acusa PF de apreensão ilegal de celulares e pede nulidade das provas",
   "resumo": "No inquérito das joias, Frederick Wassef sustentou que a PF apreendeu seus celulares de forma ilegal e que as informações dos aparelhos deveriam ser consideradas 'prova nula' pela Justiça, replicando a estratégia de questionamento de provas usada na defesa dos Bolsonaro.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Hora Brasília",
     "url": "https://horabrasilia.com.br/2024/07/frederick-wassef-acusa-pf-de-apreensao-ilegal-de-celulares-em-inquerito-sobre-joias-sauditas/",
     "data": "2024-07",
     "trecho": "Wassef acusa PF de apreensão ilegal de celulares em inquérito sobre joias sauditas",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "wassef-indiciado-pela-pf-no-caso-das-joias-por-l",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2024-07-04",
   "status": "investigacao",
   "titulo": "Wassef indiciado pela PF no caso das joias por lavagem e associação criminosa",
   "resumo": "Frederick Wassef foi indiciado pela PF no caso das joias sauditas por lavagem de dinheiro e associação criminosa, sob a acusação de ter recomprado nos EUA um Rolex do acervo presidencial. Wassef diz ter comprado com recursos próprios para devolver à União e afirma sofrer perseguição 'apenas por exercer advocacia em defesa de Bolsonaro'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/estou-passando-por-tudo-isto-apenas-por-exercer-advocacia-em-defesa-de-bolsonaro-diz-wassef/",
     "data": "2024",
     "trecho": "Wassef indiciado por lavagem e associação criminosa; 'estou passando por isto por exercer advocacia em defesa de Bolsonaro'",
     "tier": "referencia"
    },
    {
     "veiculo": "Wikipédia (Caso das joias)",
     "url": "https://pt.wikipedia.org/wiki/Caso_das_joias_envolvendo_Jair_Bolsonaro",
     "data": "2024",
     "trecho": "Wassef indiciado pela PF por lavagem de dinheiro e associação criminosa no caso das joias",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "caso-esvaziado-por-prescricao-e-nulidades-gilmar",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2025-02",
   "status": "arquivado",
   "titulo": "Caso esvaziado por prescrição e nulidades; Gilmar nega recurso do MP (2022-2025)",
   "resumo": "Em maio de 2022 o Órgão Especial do TJ-RJ determinou o arquivamento das acusações a pedido da Procuradoria, após as anulações de provas. Em fevereiro de 2025, o ministro Gilmar Mendes (STF) negou recursos do MP para reabrir as investigações. Com a prescrição consumada, o Estado perdeu a capacidade de punir.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2025",
     "trecho": "Em fevereiro de 2025, o ministro Gilmar Mendes negou recursos do Ministério Público para reabrir investigações",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "gilmar-mendes-stf-nega-recursos-do-mp-e-mantem-a",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2025-02-26",
   "status": "arquivado",
   "titulo": "Gilmar Mendes (STF) nega recursos do MP e mantém arquivamento (fev/2025)",
   "resumo": "Em 26/02/2025, o ministro Gilmar Mendes negou os recursos do MP-RJ que tentavam reabrir o caso. Apontou que não havia norma constitucional a justificar análise pelo STF, que a questão do foro por prerrogativa já estava pacificada e que o MP 'perdeu o prazo para recorrer'. As anulações não impedem nova denúncia com provas lícitas; o processo corre em sigilo.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/gilmar-mendes-nega-reabertura-rachadinhas-flavio-bolsonaro/",
     "data": "2025-02-26",
     "trecho": "Gilmar Mendes nega reabertura do caso das 'rachadinhas' de Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/regionais/brasilia/stf-nega-recursos-para-reabrir-o-caso-rachadinha-de-flavio-bolsonaro",
     "data": "2025",
     "trecho": "STF nega recursos para reabrir o 'caso rachadinha' de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "gilmar-mendes-nega-recursos-do-mp-rj-e-mantem-ar",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2025-02-26",
   "status": "decisao_judicial",
   "titulo": "Gilmar Mendes nega recursos do MP-RJ e mantém arquivado o caso das rachadinhas",
   "resumo": "Gilmar Mendes rejeitou recursos do MP-RJ que buscavam reabrir a apuração, argumentando que não havia norma constitucional para análise pelo STF, que a questão do foro já estava pacificada e que faltava interesse processual, já que as anulações não impedem nova denúncia com novas provas. Caso segue arquivado.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/gilmar-mendes-nega-reabertura-rachadinhas-flavio-bolsonaro/",
     "data": "2025-02-27",
     "trecho": "Decisão de 26/02/2025; foro pacificado; sem norma constitucional; falta de interesse processual",
     "tier": "referencia"
    },
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/gilmar-nega-recursos-e-mantem-arquivado-caso-das-rachadinhas-de-flavio-bolsonaro/",
     "data": "2025-02-26",
     "trecho": "Gilmar nega recursos e mantém arquivado caso das rachadinhas de Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "moraes-cobra-novo-parecer-da-pgr-sobre-dados-de",
   "tipo": "caso",
   "tema": "juridico",
   "data": "2026-03-19",
   "status": "investigacao",
   "titulo": "Moraes cobra novo parecer da PGR sobre dados de Wassef no caso das joias",
   "resumo": "O ministro Alexandre de Moraes (STF) determinou novo parecer da PGR sobre o material apreendido pela PF contra Frederick Wassef no caso das joias sauditas, apontando que a PGR não havia se manifestado especificamente sobre as provas antes de decidir pelo encerramento ou continuidade da apuração.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-03/stf-pede-novo-parecer-da-pgr-sobre-caso-das-joias-saudita",
     "data": "2026-03",
     "trecho": "STF pede novo parecer da PGR sobre caso das joias sauditas",
     "tier": "agregador"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/caso-das-joias-moraes-pede-parecer-da-pgr-sobre-dados-de-wassef/",
     "data": "2026-03",
     "trecho": "Moraes pede parecer da PGR sobre dados de Wassef no caso das joias",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "lindbergh-farias-pede-a-pgr-inclusao-de-flavio-e",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-05-18",
   "status": "investigacao",
   "titulo": "Lindbergh Farias pede à PGR inclusão de Flávio e Jair em inquérito sobre o caso",
   "resumo": "O deputado Lindbergh Farias (PT-RJ) pediu em 18/5/2026 a inclusão de Flávio e Jair Bolsonaro em investigação, alegando 'fortes indícios' de que recursos do 'Dark Horse' bancariam a ofensiva internacional de Eduardo. Moraes encaminhou o pedido à PGR, dando prazo de 5 dias úteis ao PGR Paulo Gonet (25/5).",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/pgr-tem-ate-hoje-para-dar-parecer-sobre-incluir-flavio-e-bolsonaro-em-inquerito",
     "data": "2026-06-02",
     "trecho": "PGR tem até hoje para dar parecer sobre incluir Flávio e Bolsonaro em inquérito",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/moraes-parecer-pgr-flavio-jair-bolsonaro-investigacao/",
     "data": "2026-05-25",
     "trecho": "Moraes pede parecer da PGR para incluir Flávio e Jair Bolsonaro em investigação",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-envia-a-pgr-parecer-favoravel-a-investigar-fl",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-05-21",
   "status": "investigacao",
   "titulo": "PF envia à PGR parecer favorável a investigar Flávio por pedido de dinheiro a Vorcaro",
   "resumo": "A Polícia Federal enviou à PGR parecer favorável à abertura de investigação contra Flávio Bolsonaro pelos pedidos de dinheiro a Daniel Vorcaro para o filme sobre Jair Bolsonaro.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/policia/2026/05/1059801-pf-envia-a-pgr-parecer-favoravel-pra-investigar-flavio-bolsonaro-por-pedido-de-dinheiro-a-vorcaro.html",
     "data": "2026-05-21",
     "trecho": "PF envia à PGR parecer favorável pra investigar Flávio Bolsonaro por pedido de dinheiro a Vorcaro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "pgr-analisa-incluir-flavio-e-jair-em-inquerito-q",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-05-25",
   "status": "investigacao",
   "titulo": "PGR analisa incluir Flávio (e Jair) em inquérito que apura Eduardo Bolsonaro",
   "resumo": "Alexandre de Moraes (STF) determinou em 25/05/2026 que a PGR se manifeste, em cinco dias úteis, sobre incluir Flávio e Jair Bolsonaro no Inquérito 4.995, que apura Eduardo Bolsonaro por coação e obstrução de Justiça. A apuração liga recursos do filme a campanha de sanções no exterior. Prazo encerrou em 02/06/2026.",
   "observacao": "Pedido inicial feito pelo deputado Lindbergh Farias em 18/05/2026. Não confirmei o teor final do parecer da PGR após o prazo.",
   "pessoas": [
    "flavio",
    "jair",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/pgr-tem-ate-hoje-para-dar-parecer-sobre-incluir-flavio-e-bolsonaro-em-inquerito",
     "data": "2026-06-02",
     "trecho": "Prazo final para parecer da PGR sobre incluir Flávio e Jair no Inquérito 4.995",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/moraes-pede-parecer-da-pgr-sobre-incluir-jair-e-flavio-em-inquerito",
     "data": "2026-05-27",
     "trecho": "Moraes pede parecer da PGR sobre incluir Jair e Flávio em inquérito",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/policia/2026/05/1059801-pf-envia-a-pgr-parecer-favoravel-pra-investigar-flavio-bolsonaro-por-pedido-de-dinheiro-a-vorcaro.html",
     "data": "2026-05",
     "trecho": "PF envia à PGR parecer favorável para investigar Flávio por pedido de dinheiro a Vorcaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-pede-que-stf-declare-moraes-suspeito-no-c",
   "tipo": "processo",
   "tema": "juridico",
   "data": "2026-06-01",
   "status": "processo",
   "titulo": "Flávio pede que STF declare Moraes suspeito no caso Master",
   "resumo": "Em 01/06/2026, advogados de Flávio Bolsonaro pediram ao STF que Alexandre de Moraes seja declarado suspeito para atuar em processos ligados ao Banco Master e a Vorcaro, alegando supostas trocas de mensagens entre Moraes e o banqueiro e contrato do Master com a esposa do ministro. Pedem remessa ao ministro André Mendonça.",
   "observacao": "Item baseado em uma única fonte (blog). Convém confirmar com veículo de maior porte. Status: pedido protocolado, pendente de análise.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Blog Nelson Dantas",
     "url": "https://www.nelsondantas.com.br/2026/06/flavio-bolsonaro-pede-que-stf-declare.html",
     "data": "2026-06-01",
     "trecho": "Flávio pede que STF declare Moraes suspeito para julgar caso Master; petição analisada por Edson Fachin",
     "tier": "blog"
    }
   ],
   "lastro": "blog"
  },
  {
   "id": "flavio-pede-ao-stf-suspeicao-de-moraes-no-caso-m",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-06-05",
   "status": "processo",
   "titulo": "Flávio pede ao STF suspeição de Moraes no caso Master e quer relatoria de Mendonça",
   "resumo": "A defesa de Flávio protocolou no STF pedido para declarar Alexandre de Moraes suspeito nos processos sobre Banco Master e Vorcaro, alegando que o escritório de Viviane Barci de Moraes recebeu R$ 80,2 mi do banco. Pede redistribuição ao relator André Mendonça. O pedido seria analisado pela Presidência (Fachin).",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Band",
     "url": "https://www.band.com.br/noticias/flavio-bolsonaro-pede-suspeicao-de-alexandre-de-moraes-no-caso-banco-master-202606051555",
     "data": "2026-06-05",
     "trecho": "Flávio Bolsonaro pede suspeição de Alexandre de Moraes no caso Banco Master",
     "tier": "agregador"
    },
    {
     "veiculo": "Diário de Pernambuco",
     "url": "https://www.diariodepernambuco.com.br/politica/2026/06/11715873-flavio-bolsonaro-pede-que-stf-declare-moraes-suspeito-para-julgar-caso-master.html",
     "data": "2026-06-05",
     "trecho": "Flávio Bolsonaro pede que STF declare Moraes suspeito para julgar caso Master",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "moraes-nega-diligencias-pedidas-pela-defesa-de-f",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-06-16",
   "status": "decisao_judicial",
   "titulo": "Moraes nega diligências pedidas pela defesa de Flávio em inquérito sobre suposta calúnia contra Lula",
   "resumo": "Em 16/06/2026 o ministro Alexandre de Moraes (STF) indeferiu requerimentos da defesa do senador Flávio Bolsonaro no inquérito que apura suposta calúnia contra o presidente Lula, entre eles o pedido de depoimento do próprio Lula. Moraes escreveu que os requerimentos 'implicam no direcionamento ou interferência na condução da investigação' e que 'não cabe ao investigado pretender pautar a atividade investigativa'. O inquérito trata de publicação do senador na rede X, em janeiro de 2026, associando Lula a Nicolás Maduro e a crimes de tráfico de drogas, lavagem de dinheiro e fraude eleitoral. Nesta fase Flávio é investigado: não havia denúncia da PGR nem ação penal.",
   "observacao": "Decisão em fase de inquérito. Flávio é INVESTIGADO — não denunciado, não réu, não condenado. Cortei da versão original a lista de testemunhas (María Corina Machado, Deltan Dallagnol, Sergio Moro), o ofício ao Judiciário dos EUA e a data de abertura do inquérito (abril/2026): nenhuma das duas fontes confirma esses detalhes.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/119708/moraes-nega-pedido-de-flavio-por-depoimento-de-lula-sobre-venezuela",
     "data": "2026-06-16",
     "trecho": "Não se revela cabível, na presente fase investigatória, o acolhimento dos requerimentos formulados por Flávio Nantes Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/moraes-rejeita-pedido-de-flavio-bolsonaro-para-interferir-em-inquerito-sobre-lula/",
     "data": "2026-06-16",
     "trecho": "Não cabe ao investigado pretender pautar a atividade investigativa",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fachin-nega-pedido-de-flavio-bolsonaro-para-decl",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-06-25",
   "status": "decisao_judicial",
   "titulo": "Fachin nega pedido de Flávio Bolsonaro para declarar Moraes suspeito nas ações do caso Master",
   "resumo": "Em 25 de junho de 2026 o presidente do STF, ministro Edson Fachin, negou o pedido da defesa de Flávio Bolsonaro para declarar o ministro Alexandre de Moraes suspeito de atuar nas ações ligadas ao Banco Master e ao caso 'Dark Horse'. Os advogados do senador alegavam suposta relação entre Moraes e Daniel Vorcaro. Fachin fundamentou a negativa no fato de que a ação usada pela defesa para sustentar o questionamento já não estava sob relatoria de Moraes, e sim de André Mendonça. A PGR concordou com o despacho em 26 de junho e o procedimento foi formalmente encerrado em 6 de agosto de 2026.",
   "observacao": "Decisão processual (perda de objeto por mudança de relatoria); não avaliou o mérito das alegações da defesa sobre imparcialidade. Fonte única, de veículo com linha editorial declarada. O detalhamento sobre mensagens de 17/11/2025 e o contrato do escritório de Viviane Barci de Moraes não foi confirmado nesta fonte e saiu do resumo.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/fachin-nega-suspeicao-de-moraes-pedida-por-flavio-bolsonaro-em-acoes-do-caso-dark-horse/",
     "data": "2026-08-07",
     "trecho": "a ação apontada por Flávio não está mais sob responsabilidade do ministro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "pf-conclui-em-relatorio-final-que-flavio-bolsona",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-06-26",
   "status": "investigacao",
   "titulo": "PF conclui em relatório final que Flávio Bolsonaro cometeu calúnia contra Lula",
   "resumo": "Em 26/06/2026 a Polícia Federal concluiu o relatório final do inquérito supervisionado por Alexandre de Moraes e apontou que o senador Flávio Bolsonaro cometeu crime de calúnia contra o presidente Lula. Segundo a PF, o senador 'imputou falsamente ao presidente Lula o cometimento dos crimes de tráfico internacional de drogas, tráfico internacional de arma e lavagem de dinheiro'. A apuração trata de publicação na rede X em que o senador escreveu: 'Lula será delatado. É o fim do Foro de São Paulo: tráfico internacional de drogas e armas, lavagem de dinheiro'. Conclusão de relatório da PF não é acusação formal — cabe à PGR denunciar ou pedir arquivamento. A Agência Brasil procurou a assessoria de Flávio e não obteve retorno até a publicação.",
   "observacao": "Relatório de PF NÃO equivale a denúncia. Até esta data Flávio não havia sido denunciado nem se tornado réu. Defesa procurada, sem retorno registrado.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/pf-conclui-que-flavio-bolsonaro-cometeu-calunia-contra-lula-nas-redes",
     "data": "2026-06-26",
     "trecho": "imputou falsamente ao presidente Lula o cometimento dos crimes de tráfico internacional de drogas",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "pt-protocola-representacao-na-pgr-pedindo-invest",
   "tipo": "denuncia",
   "tema": "juridico",
   "data": "2026-06-30",
   "status": "suspeita",
   "titulo": "PT protocola representação na PGR pedindo investigação de Flávio pela carta de Rubio",
   "resumo": "Em 30/06/2026, o Partido dos Trabalhadores protocolou na PGR representação criminal pedindo a investigação de Flávio Bolsonaro por suposta corrupção passiva, crimes contra a soberania nacional e violação de sigilo funcional. O partido sustenta que a carta de Marco Rubio, de 23/06, expõe que 'houve tratativa direta entre um parlamentar brasileiro e potência estrangeira' e pede apuração sobre se informações sigilosas 'foram, ou seriam, compartilhadas com governo estrangeiro'. Trata-se de pedido de apuração formulado por partido adversário: nas fontes abertas não há inquérito instaurado, indiciamento nem denúncia da PGR contra o senador nesse caso. Nenhuma das matérias registra resposta da defesa ou da assessoria de Flávio.",
   "observacao": "Lastro é a petição de um adversário político, não ato de autoridade: status correto é suspeita levantada por terceiro, não investigação. Sem contraditório registrado — a defesa de Flávio não se manifestou nas matérias abertas. Trocado o trecho do Jornal de Brasília, cuja citação proposta ('auxílio indevido em sua campanha eleitoral') não foi localizada literalmente no texto aberto.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/pt-aciona-pgr-contra-flavio-bolsonaro-por-suposto-crime-grave-apos-carta-de-marco-rubio/",
     "data": "2026-06-30",
     "trecho": "houve tratativa direta entre um parlamentar brasileiro e potência estrangeira",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/pt-aciona-pgr-contra-flavio-bolsonaro-apos-carta-de-marco-rubio/",
     "data": "2026-06-30",
     "trecho": "corrupção passiva, crimes contra a soberania nacional e violação de sigilo funcional",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "moraes-abre-apuracao-apartada-sobre-achados-no-c",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-06-30",
   "status": "investigacao",
   "titulo": "Moraes abre apuração apartada sobre achados no celular de Wassef e não arquiva o caso das joias",
   "resumo": "Em 30 de junho de 2026, o ministro Alexandre de Moraes ordenou a abertura de investigação sigilosa e apartada sobre 'eventos fortuitos' encontrados no celular do advogado Frederick Wassef, e concedeu 15 dias para a PGR se manifestar sobre os achados e sobre as hipóteses criminais levantadas. Com isso, Moraes não arquivou a apuração principal do caso das joias sauditas, apesar de a PGR, sob Paulo Gonet, ter pedido o arquivamento sob o argumento de que a ausência de lei específica sobre a destinação de presentes recebidos por presidentes da República inviabilizaria denúncia por peculato. A defesa de Wassef sustenta que a busca e apreensão foi 'nula e ilegal' pela ausência de representante da OAB no ato.",
   "observacao": "Flávio Bolsonaro aparece na matéria apenas como cliente do advogado; nada lhe é imputado neste inquérito, cujo investigado principal é Jair Bolsonaro. Não há denúncia nem condenação de Wassef. Corrigido em relação ao item proposto: a fonte não data o parecer da PGR em março de 2026, e o fundamento do pedido de arquivamento é a ausência de lei específica sobre presentes.",
   "pessoas": [
    "wassef",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/moraes-abre-investigacao-sobre-achados-no-celular-de-wassef/",
     "data": "2026-07-01",
     "trecho": "abertura de uma investigação sigilosa e separada sobre 'eventos fortuitos' encontrados no celular de Frederick Wassef",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pgr-pede-que-inquerito-da-calunia-volte-a-pf-par",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-07-06",
   "status": "investigacao",
   "titulo": "PGR pede que inquérito da calúnia volte à PF para ouvir Flávio e cita possibilidade de retratação",
   "resumo": "Em 06/07/2026 o procurador-geral da República, Paulo Gonet, manifestou-se ao STF pedindo que o inquérito sobre suposta calúnia contra Lula retornasse à Polícia Federal para a oitiva de Flávio Bolsonaro. Segundo a Agência Brasil, 'para o procurador, o inquérito deve retornar à Polícia Federal para a realização da oitiva'. Gonet citou a legislação penal e apontou que Flávio pode apresentar retratação de suas falas, possibilidade que pode isentá-lo de pena nos crimes contra a honra. A PGR, portanto, NÃO ofereceu denúncia nesta data. A reportagem procurou a assessoria do senador e não obteve retorno.",
   "observacao": "Ponto de rigor: NÃO houve denúncia da PGR neste caso até a data. Status permanece inquérito com investigado. Substituí o trecho citado na proposta original ('remanesce a necessidade de oitiva...') pelo trecho que consegui confirmar literalmente na matéria.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-07/pgr-pede-que-flavio-bolsonaro-seja-ouvido-por-calunia-contra-lula",
     "data": "2026-07-06",
     "trecho": "Para o procurador, o inquérito deve retornar à Polícia Federal para a realização da oitiva",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "moraes-suspende-por-90-dias-visitas-de-flavio-ao",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-07-13",
   "status": "decisao_judicial",
   "titulo": "Moraes suspende por 90 dias visitas de Flávio ao pai e manda MPE apurar propaganda antecipada",
   "resumo": "Em 11/07/2026 Flávio Bolsonaro divulgou nas redes sociais uma carta escrita pelo pai em apoio à sua pré-candidatura à Presidência. Em 13/07/2026, Moraes suspendeu por 90 dias as visitas do senador ao ex-presidente, escrevendo que, 'utilizando-se do seu direito de visita, Flávio Nantes Bolsonaro obteve uma carta do investigado Jair Messias Bolsonaro, com a exclusiva finalidade de divulgá-la nas redes sociais'. Na mesma decisão determinou que o Ministério Público Eleitoral apurasse possível propaganda eleitoral antecipada, por haver 'expressões com carga semântica equivalente a pedido explícito de voto', e concedeu 48 horas para a defesa informar se Jair sabia que a carta seria divulgada. Em nota, a defesa de Flávio afirmou que a decisão é 'ilegal e inconstitucional'; o advogado Tracy Reinaldet disse que a medida desrespeita a Constituição, a Lei de Execução Penal e o Estatuto da Advocacia.",
   "observacao": "Desdobramento datado: em 20/07/2026 a defesa de Jair Bolsonaro — petição assinada por Celso Vilardi, Paulo Cunha Bueno e pelo próprio Flávio — recorreu, alegando medida 'manifestamente desproporcional' e que Flávio, além de filho, é advogado do pai, o que atingiria prerrogativa profissional. Não há, nas fontes abertas, decisão sobre esse recurso. O envio ao MPE é pedido de apuração: não há representação eleitoral julgada contra Flávio por esse fato na janela. Removidas do resumo as citações do conteúdo da carta ('a melhor opção para livrarmos o Brasil da corrupção...') e o trecho 'reincidente em sua conduta desrespeitosa', não confirmados nas fontes abertas.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/moraes-proibe-flavio-de-ter-contato-com-bolsonaro-por-90-dias/",
     "data": "2026-07-13",
     "trecho": "obteve uma carta do investigado Jair Messias Bolsonaro, com a exclusiva finalidade de divulgá-la nas redes sociais",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/120449/moraes-ve-propaganda-antecipada-em-carta-de-bolsonaro-e-envia-ao-mp",
     "data": "2026-07-13",
     "trecho": "expressões com carga semântica equivalente a pedido explícito de voto",
     "tier": "referencia"
    },
    {
     "veiculo": "Terra",
     "url": "https://www.terra.com.br/noticias/brasil/politica/moraes-aciona-mpe-para-apurar-propaganda-eleitoral-antecipada-apos-flavio-divulgar-carta-de-jair-bolsonaro,5b08982142e93c845583d9272235bf037p0r7b90.html",
     "data": "2026-07-13",
     "trecho": "a defesa de Flávio Bolsonaro afirmou que a decisão de Alexandre de Moraes é 'ilegal e inconstitucional'",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-nao-depoe-a-pf-entrega-defesa-por-escrito",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-07-28",
   "status": "investigacao",
   "titulo": "Flávio não depõe à PF, entrega defesa por escrito e Moraes dá 15 dias à PGR",
   "resumo": "Em 28/07/2026 o depoimento presencial de Flávio Bolsonaro à Polícia Federal, marcado para as 14h no inquérito da suposta calúnia contra Lula, foi cancelado depois que a defesa protocolou manifestação por escrito. Como investigado, o senador tem o direito de não depor. Na peça, os advogados alegam que não houve crime de calúnia e sustentam que 'as manifestações atribuídas ao senador se inserem no contexto do debate político e dizem respeito a posicionamentos públicos', invocando a liberdade de expressão. No mesmo dia Moraes determinou que a PGR se manifestasse sobre o cancelamento da oitiva, com prazo de 15 dias.",
   "observacao": "Cortei duas citações da defesa que não consegui confirmar literalmente ('atribuição de um fato específico e falso' e 'ausência de justa causa'). Não localizei, até 09/09/2026, notícia com o desfecho desse prazo. Status permanece: inquérito, investigado.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/depoimento-de-flavio-bolsonaro-a-policia-federal-defesa-escrita-inquerito-lula/",
     "data": "2026-07-28",
     "trecho": "As manifestações atribuídas ao senador se inserem no contexto do debate político e dizem respeito a posicionamentos públicos",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles (coluna Manoela Alcântara)",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/calunia-a-lula-apos-defesa-por-escrito-de-flavio-moraes-manda-caso-para-pgr",
     "data": "2026-07-28",
     "trecho": "O ministro Alexandre de Moraes determinou que a PGR se manifeste sobre o cancelamento do depoimento",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "moraes-da-48h-a-defesa-de-bolsonaro-sobre-video",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-07-29",
   "status": "decisao_judicial",
   "titulo": "Moraes dá 48h à defesa de Bolsonaro sobre vídeo com IA exibido na convenção do PL",
   "resumo": "Em 29/07/2026, o ministro Alexandre de Moraes (STF) deu 48 horas para a defesa de Jair Bolsonaro esclarecer se o ex-presidente autorizou o uso de sua imagem e voz em vídeo produzido com inteligência artificial exibido na convenção do PL de 25/07. Segundo a decisão, a eventual concordância de Bolsonaro \"constituiria nova e grave transgressão\" às medidas cautelares, com risco de reversão da prisão domiciliar humanitária; se não houve autorização, Flávio Bolsonaro e o PL poderiam responder pelo uso de mídia sintética sem consentimento, vedado pela legislação eleitoral. Em 11/08/2026, a defesa de Flávio sustentou ao TSE que a falta de autorização, por si só, não caracteriza deepfake, que exigiria intenção de enganar o eleitor, e citou paródia, sátira e charges como comparação.",
   "observacao": "Intimação e processo em curso: não há condenação nem punição na janela, e a defesa nega irregularidade. Cortados por falta de lastro: a citação de que o vídeo mostrava Bolsonaro dizendo estar \"preso e silenciado\" e a menção específica à Resolução 23.610/2019 do TSE.",
   "pessoas": [
    "jair",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/120847/decisao-de-moraes-sobre-video-com-ia-encurrala-bolsonaro-e-flavio",
     "data": "2026-07-29",
     "trecho": "constituiria nova e grave transgressão",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/flavio-video-bolsonaro-deepfake-tse",
     "data": "2026-08-11",
     "trecho": "A ausência de autorização também é absolutamente indiferente em tema de identificação de deepfake",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "willer-tomaz-advogado-proximo-de-flavio-e-alvo-d",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-08-04",
   "status": "investigacao",
   "titulo": "Willer Tomaz, advogado próximo de Flávio, é alvo de buscas da PF na Operação Sem Desconto",
   "resumo": "Em 04/08/2026 a Polícia Federal cumpriu 18 mandados de busca e apreensão expedidos pelo STF, no Distrito Federal e no Maranhão, em nova fase da Operação Sem Desconto, que apura descontos indevidos em benefícios do INSS. Entre os alvos está o advogado Willer Tomaz, descrito pela reportagem como 'amigo próximo do senador Flávio Bolsonaro, a quem costuma acompanhar em agendas e viagens privadas'. Flávio Bolsonaro não é apontado como alvo nem como investigado na operação. Tomaz já havia sido preso em 2017 na Operação Greenfield, com as acusações posteriormente rejeitadas por insuficiência de provas. A matéria não registra manifestação das defesas.",
   "observacao": "Flávio Bolsonaro NÃO é alvo da operação — o item registra apenas o vínculo pessoal noticiado, e só é relevante ao dossiê porque a OAB alegou depois que documentos sobre ele foram recolhidos nessa busca. Retirei o senador Weverton Rocha da lista de alvos: a fonte aberta não o menciona.",
   "pessoas": [
    "willer-tomaz",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/08/7473338-amigo-de-flavio-bolsonaro-e-advogado-veja-quem-e-willer-tomaz-alvo-da-pf.html",
     "data": "2026-08-04",
     "trecho": "amigo próximo do senador Flávio Bolsonaro, a quem costuma acompanhar em agendas e viagens privadas",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "moraes-nega-visita-de-flavio-carlos-e-jair-renan",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-08-08",
   "status": "decisao_judicial",
   "titulo": "Moraes nega visita de Flávio, Carlos e Jair Renan ao pai no Dia dos Pais",
   "resumo": "Em 08/08/2026, Moraes negou pedido da defesa para que Flávio, Carlos e Jair Renan visitassem Jair Bolsonaro no Dia dos Pais. O ministro entendeu que autorizar os encontros 'desrespeitaria medida que suspendeu por 30 dias visitas de caráter político' e retomou o fundamento da decisão de 13/07, segundo a qual, 'utilizando-se do seu direito de visita, Flávio Nantes Bolsonaro obteve uma carta do investigado', depois divulgada nas redes sociais. Registrou que a 'fiel observância é requisito obrigatório para o cumprimento da prisão domiciliar'. A defesa alegou que o ex-presidente não sabia que Flávio divulgaria a carta; Moraes rejeitou o argumento. Atinge diretamente Flávio, então já candidato oficializado à Presidência.",
   "observacao": "Corrigido o trecho de decisão: a citação proposta ('Patente, portanto, o desrespeito de Jair Messias Bolsonaro à medida cautelar') não foi localizada literalmente no texto aberto; usado o fragmento efetivamente confirmado. A matéria aberta não detalha quais atendimentos (médicos, fisioterapia, advogados) permaneceram autorizados, item removido do resumo.",
   "pessoas": [
    "jair",
    "flavio",
    "carlos-bolsonaro"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/moraes-nega-pedido-para-filhos-visitarem-bolsonaro-no-dia-dos-pais/",
     "data": "2026-08-08",
     "trecho": "fiel observância é requisito obrigatório para o cumprimento da prisão domiciliar",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "filiacao-de-flavio-e-alterada-para-o-partido-mis",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-08-13",
   "status": "decisao_judicial",
   "titulo": "Filiação de Flávio é alterada para o partido Missão, trava o registro e é restabelecida por Nunes Marques",
   "resumo": "Às vésperas do prazo final de registro, a filiação partidária de Flávio Bolsonaro foi alterada no sistema da Justiça Eleitoral: em vez de PL, ele passou a constar como filiado ao partido Missão, presidido por Renan Santos, adversário na disputa presidencial. Sem a filiação correta, o PL não conseguiu concluir o registro da candidatura. Segundo o TSE, alguém do partido Missão utilizou indevidamente a ferramenta para efetivar a desfiliação. Flávio afirmou em vídeo: \"Vocês viram que fraudaram minha filiação partidária\". Em 13/08/2026, o presidente do TSE, ministro Nunes Marques, determinou o restabelecimento imediato do vínculo com o PL com efeito desde a filiação original de 30/11/2021, o cancelamento do registro no Missão, a liberação do sistema para o registro da candidatura, a preservação dos logs de acesso e o envio do caso à Polícia Federal. O ministro considerou implausível a tese de migração voluntária. O registro foi protocolado às 19h43 do mesmo dia. Em 31/08/2026 o TSE começou a julgar em plenário virtual os registros presidenciais, com o processo de Flávio sob relatoria do ministro André Mendonça, previsto para se encerrar em 02/09.",
   "observacao": "Não localizei fonte aberta confirmando o desfecho (deferimento) do julgamento do registro até 09/09/2026. A InfoMoney (14/08) data o protocolo do registro em \"quinta-feira, 11\", o que é internamente inconsistente: 11/08/2026 foi terça e 13/08 foi quinta, data que bate com o Poder360 (19h43) e com a decisão do TSE. Adotado 13/08.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes/tse-restabelece-filiacao-de-flavio-ao-pl-e-viabiliza-candidatura/",
     "data": "2026-08-13",
     "trecho": "determinou nesta 5ª feira (13.ago.2026) o restabelecimento imediato da filiação do senador Flávio Bolsonaro ao PL",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/fraude-sistema-do-tse-trava-registro-candidatura-flavio-bolsonaro/",
     "data": "2026-08-13",
     "trecho": "Vocês viram que fraudaram minha filiação partidária",
     "tier": "referencia"
    },
    {
     "veiculo": "Terra",
     "url": "https://www.terra.com.br/noticias/eleicoes/tse-comeca-a-julgar-registros-de-lula-flavio-bolsonaro-e-outros-candidatos-a-presidencia,ec58173279040415dba15865590311e06a9ivgdq.html",
     "data": "2026-08-31",
     "trecho": "Os processos que envolvem Lula, Zema, Flávio Bolsonaro (...) têm como relator o ministro André Mendonça",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-abre-inquerito-para-apurar-a-filiacao-fraudul",
   "tipo": "investigacao",
   "tema": "juridico",
   "data": "2026-08-18",
   "status": "investigacao",
   "titulo": "PF abre inquérito para apurar a filiação fraudulenta de Flávio ao partido Missão",
   "resumo": "Em 18 de agosto de 2026, a Polícia Federal instaurou inquérito, por determinação do presidente do TSE, ministro Nunes Marques, para apurar a filiação de Flávio Bolsonaro ao partido Missão, registrada em 12 de agosto. Segundo o TSE, 'a filiação de Flávio Bolsonaro ao partido Missão não foi fruto de hackeamento do sistema de filiação partidária, mas sim de uso indevido da ferramenta por parte de alguém que possuía as credenciais da legenda'. O partido Missão alegou ser vítima de tentativa de filiação fraudulenta, afirmou que percebeu o erro e tentou cancelar o registro no mesmo dia e citou desalinhamento ideológico com o senador. Flávio tratou o episódio como fraude, afirmando que 'o sistema vai tentar de tudo' para detê-lo, mas que 'Deus está no comando'.",
   "observacao": "Inquérito em fase inicial: ninguém foi indiciado ou denunciado. Flávio figura como vítima da alteração, não como investigado. Cortadas por falta de lastro na fonte as declarações atribuídas ao Missão (\"não tinha qualquer intenção de filiar o candidato do PL\", entrega do IP ao TSE) e a alegação da campanha de que os e-mails de aviso foram tratados como spam.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/8/19/policia-federal-comeca-a-investigar-filiacao-fraudulenta-de-flavio-ao-missao",
     "data": "2026-08-19",
     "trecho": "A Polícia Federal (PF) abriu um inquérito para apurar a suposta fraude na filiação",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes/tse-restabelece-filiacao-de-flavio-ao-pl-e-viabiliza-candidatura/",
     "data": "2026-08-13",
     "trecho": "alguém do partido Missão utilizou indevidamente a ferramenta para efetivar a desfiliação",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/08/19/pf-abre-inquerito-para-investigar-suposta-fraude-que-filiou-flavio-bolsonaro-ao-partido-missao/",
     "data": "2026-08-19",
     "trecho": "não foi fruto de hackeamento do sistema de filiação partidária, mas sim de uso indevido da ferramenta",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "visitas-a-jair-bolsonaro-sao-retomadas-mas-flavi",
   "tipo": "noticia",
   "tema": "juridico",
   "data": "2026-08-21",
   "status": "fato",
   "titulo": "Visitas a Jair Bolsonaro são retomadas, mas Flávio segue proibido de ver o pai",
   "resumo": "Em 21/08/2026, a defesa de Jair Bolsonaro comunicou ao STF que o ex-presidente voltaria a receber visitas durante a prisão domiciliar, encerrada a suspensão de 30 dias. A retomada, porém, 'não inclui o senador Flávio Bolsonaro (PL), que permanece impedido de visitar o pai', por força da suspensão específica de 90 dias aplicada em 13/07 após a divulgação da carta política. A matéria registra ainda que Bolsonaro 'continua proibido de realizar manifestações de caráter político-eleitoral, inclusive por intermédio de terceiros, até o encerramento das eleições de outubro'. Na prática, o candidato do PL à Presidência seguiu sem contato presencial com o pai na fase inicial da campanha.",
   "observacao": "Esclarece confusão frequente na cobertura: houve DUAS restrições distintas — 30 dias para visitas de caráter político em geral, encerrada em agosto, e 90 dias apenas para Flávio, em vigor durante o restante da janela. Removida a citação da petição da defesa ('Transcorrido o referido prazo...'), não confirmada literalmente no texto aberto.",
   "pessoas": [
    "jair",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Jornal do Comércio",
     "url": "https://www.jornaldocomercio.com/politica/2026/08/1260576-defesa-de-bolsonaro-retoma-agendamento-de-visitas-apos-fim-de-restricao-imposta-por-moraes.html",
     "data": "2026-08-21",
     "trecho": "não inclui o senador Flávio Bolsonaro (PL), que permanece impedido de visitar o pai",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "tse-suspende-insercao-do-pt-sobre-flavio-campanh",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-08-30",
   "status": "decisao_judicial",
   "titulo": "TSE suspende inserção do PT sobre Flávio; campanha de Lula pede resposta por falas na Globo",
   "resumo": "Em 30/08/2026, a ministra Estela Aranha (TSE) determinou em liminar a suspensão da inserção do PT \"Filme 02 – Lula – Conheça o currículo de Flávio Bolsonaro\" até o julgamento do pedido principal, proibindo Lula e a coligação Brasil Pronto Pra Mais de veiculá-la novamente. A peça afirmava que Flávio começou como \"funcionário fantasma\", foi \"denunciado por lavagem de dinheiro e organização criminosa\", homenageou \"o líder do maior grupo de matadores de aluguel do Rio de Janeiro\" e foi \"flagrado pedindo 134 milhões no escândalo do Banco Master\". Segundo a decisão, a denúncia por lavagem e organização criminosa de fato existiu, mas foi posteriormente arquivada, sem condenação, e a peça transmitia a falsa impressão de que Flávio está atualmente denunciado por esses crimes. O processo seguiu para manifestação da Procuradoria-Geral Eleitoral e posterior julgamento pelo plenário do TSE. No dia seguinte, 31/08, a coligação de Lula acionou o TSE pedindo direito de resposta por declarações \"falsas e gravemente descontextualizadas\" de Flávio na sabatina do Jornal Nacional de 28/08 sobre urnas, 8 de Janeiro e a condenação de Bolsonaro, a homenagem a Adriano da Nóbrega, Daniel Vorcaro, o tarifaço dos EUA e o salário mínimo, pedindo tempo de resposta em dobro; o pedido foi encaminhado ao presidente do TSE, ministro Nunes Marques, e incluiu a TV Globo no polo passivo.",
   "observacao": "CORREÇÃO DE STATUS: a versão original afirmava que a liminar \"concedeu direito de resposta a Flávio\". Isso é falso — a liminar apenas suspendeu a inserção até o julgamento do pedido principal; o pedido de direito de resposta, que foi a ação movida por Flávio, seguia pendente na PGE e no plenário. Decisão liminar não absolve nem condena Flávio no mérito dos fatos citados na propaganda. Note também a distinção jurídica que a própria decisão faz: denúncia arquivada não é absolvição.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/tse-manda-lula-suspender-comercial-com-curriculo-de-flavio/",
     "data": "2026-08-30",
     "trecho": "flagrado pedindo 134 milhões no escândalo do Banco Master",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/campanha-de-lula-pede-resposta-por-falas-de-flavio-na-globo/",
     "data": "2026-08-31",
     "trecho": "falsas e gravemente descontextualizadas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-afasta-cupula-da-pf-por-liminar-flavio",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-09-08",
   "status": "decisao_judicial",
   "titulo": "Mendonça afasta cúpula da PF por liminar; Flávio celebra 'grupo especial de Lula desmascarado'",
   "resumo": "Em 8/9, o ministro André Mendonça (STF) concedeu liminar na Pet 16.662 afastando o diretor-geral da PF, Andrei Rodrigues, e o diretor de Inteligência, Leandro Almada, alegando 'monitoramento ilícito de Ministro da Suprema Corte' por relatórios de inteligência ('ao menos há mais de 30 dias este relator tem sido monitorado pela Polícia Federal'); também suspendeu a produção de relatórios sobre ministros. Em sessão virtual da 2ª Turma, Fux (10h04) e Nunes Marques (10h06) acompanharam o relator, mas Gilmar Mendes pediu vista e o referendo foi interrompido; Toffoli não votou. Flávio Bolsonaro, candidato do PL, escreveu nas redes: 'Grupo especial de Lula na Polícia Federal desmascarado oficialmente', e pediu que a PF 'volte a ter autonomia para ir atrás de bandidos, e não de adversários políticos de Lula'. A AGU recorreu alegando competência exclusiva do presidente da República para nomear e exonerar dirigentes federais.",
   "observacao": "Item de contexto: Flávio não é parte do processo; entra pela declaração pública do candidato. Liminar revertida por Dino em 9/9 (ver item seguinte). Horários dos votos conferidos na Gazeta do Povo (8/9).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/9/8/flavio-bolsonaro-apoia-afastamento-de-andrei-e-afirma-que-grupo-de-lula-na-pf-foi-desmascarado",
     "data": "2026-09-08",
     "trecho": "Grupo especial de Lula na Polícia Federal desmascarado oficialmente.",
     "tier": "referencia"
    },
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/463991/2-turma-tem-maioria-para-afastar-andrei-da-pf-gilmar-pede-vista",
     "data": "2026-09-08",
     "trecho": "Ao menos há mais de 30 dias este relator tem sido monitorado pela Polícia Federal",
     "tier": "referencia"
    },
    {
     "veiculo": "Conjur",
     "url": "https://conjur.com.br/2026-set-08/decisao-de-mendonca-de-afastar-diretor-da-pf-pode-ser-suspensa-por-fachin-e-submetida-ao-plenario/",
     "data": "2026-09-08",
     "trecho": "afastar de suas funções o diretor-geral da Polícia Federal, Andrei Rodrigues",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "dino-derruba-liminar-de-mendonca-e-reintegra-and",
   "tipo": "decisao_judicial",
   "tema": "juridico",
   "data": "2026-09-09",
   "status": "decisao_judicial",
   "titulo": "Dino derruba liminar de Mendonça e reintegra Andrei Rodrigues à chefia da PF",
   "resumo": "Um dia após o afastamento, o ministro Flávio Dino, na Pet 16.669 (acesso da PF ao material apreendido pela Polícia Civil de SP na apuração de emendas parlamentares destinadas a empresas do filme 'Dark Horse'), determinou a reintegração de Andrei Rodrigues e de Leandro Almada e vedou 'novas medidas cautelares fundadas em atos praticados no regular exercício de suas atribuições funcionais'. Dino apontou a ilegitimidade do partido Novo (que tem candidato próprio, Romeu Zema) para pedir cautelares em investigação criminal, a incompetência de Mendonça (nomeação do diretor-geral cabe à Presidência; relatórios da PF já estavam sob análise de Fachin) e o prejuízo às investigações: 'a interrupção dos trabalhos de direção de investigações policiais interessa, sobretudo, aos investigados'. Perguntou ainda: 'Uma parte pode ser juiz de si mesma e antecipar juízos de valor sobre relatórios da Polícia Federal que expressamente a mencionam?'. Só o Plenário poderia rever sua decisão, segundo o próprio Dino.",
   "observacao": "Decisão proferida na petição ligada às emendas do Dark Horse, o que a conecta ao caso; Flávio não é parte. A expressão 'atropelos processuais' consta na Agência Brasil, não no Conjur.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Conjur",
     "url": "https://conjur.com.br/2026-set-09/dino-reintegra-diretor-geral-da-pf-e-proibe-interferencia-de-ministros-do-stf/",
     "data": "2026-09-09",
     "trecho": "a interrupção dos trabalhos de direção de investigações policiais interessa, sobretudo, aos investigados",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-09/dino-determina-reintegracao-de-andrei-rodrigues-no-comando-da-pf",
     "data": "2026-09-09",
     "trecho": "atropelos processuais",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "oab-alega-em-peticao-sigilosa-que-pf-recolheu-do",
   "tipo": "processo",
   "tema": "juridico",
   "data": "2026-09-09",
   "status": "suspeita",
   "titulo": "OAB alega em petição sigilosa que PF recolheu documentos sobre Flávio fora do escopo do mandado",
   "resumo": "Reportagem de 09/09/2026 informa que o advogado Michael Cunha, representando a OAB, apresentou petição sob sigilo acusando investigadores da Polícia Federal de extrapolarem suas prerrogativas legais na busca de 04/08/2026 no escritório do advogado Willer Tomaz, na Operação Sem Desconto — operação cujo mandado foi autorizado pelo ministro André Mendonça. Segundo a reportagem, os agentes teriam recolhido material relativo a Flávio Bolsonaro, que não é alvo formal daquela investigação. Trata-se de alegação da entidade de classe, sem decisão judicial reconhecendo a irregularidade. A matéria não traz manifestação da Polícia Federal nem do gabinete de Mendonça.",
   "observacao": "ALEGAÇÃO, não fato provado: petição sob sigilo, sem decisão judicial confirmando e sem contraditório da PF na reportagem. CORREÇÃO relevante: a fonte NÃO diz que a petição foi endereçada a Mendonça — ele apenas autorizou o mandado. Também cortei 'fotografia de telefone e compartilhamento de mensagens', detalhe que só circulou em blogs partidários (claudiodantas.com.br, tvfloridausa) e que não pude verificar.",
   "pessoas": [
    "flavio",
    "willer-tomaz"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-governo/flavio-compara-pf-do-governo-lula-a-policia-nazista/",
     "data": "2026-09-09",
     "trecho": "acusa investigadores da PF de extrapolarem suas prerrogativas legais",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-oficio-a-fux-gilmar-acusa-previo-ajuste-com-m",
   "tipo": "noticia",
   "tema": "juridico",
   "data": "2026-09-11",
   "status": "fato",
   "titulo": "Em ofício a Fux, Gilmar acusa 'prévio ajuste' com Mendonça no afastamento da cúpula da PF (não é Flávio)",
   "resumo": "Em ofício de 11/9 ao presidente da 2ª Turma, Luiz Fux, divulgado pelo Metrópoles em 17/9, o ministro Gilmar Mendes afirmou ter havido 'prévio ajuste — não comunicado a parcela dos demais colegas integrantes do colegiado' entre Fux e André Mendonça na sessão virtual de 8/9, na qual Fux (10h04) e Nunes Marques (10h06) votaram quatro e seis minutos após seu pedido de vista (10h). Gilmar sustenta que 'a Turma não é composta por seu presidente e mais um ou dois ministros. É colegiado de cinco membros'. Gilmar já havia formalizado proposta de emenda regimental para 'impedir que policiais e militares atuem nos gabinetes, exceto na segurança'. O afastamento de Andrei Rodrigues fora revertido por Dino em 9/9; a matéria não registra resposta formal de Fux ou Mendonça.",
   "observacao": "Data do fato = ofício de 11/9; divulgação em 17/9. Cortada a afirmação de que Gilmar 'defende que o tema vá ao Plenário' (não consta). Item de contexto da briga no STF; Flávio não é parte.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/gilmar-diz-que-fux-combinou-com-mendonca-voto-para-afastar-diretor-da-pf",
     "data": "2026-09-17",
     "trecho": "prévio ajuste — não comunicado a parcela dos demais colegas integrantes do colegiado",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/gilmar-mendes-suspende-julgamento-de-afastamento-de-andrei-determinado-por-mendonca/",
     "data": "2026-09-08",
     "trecho": "impedir que policiais e militares atuem nos gabinetes, exceto na segurança",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "coligacao-de-lula-aciona-o-tse-contra-o-pronunci",
   "tipo": "processo",
   "tema": "juridico",
   "data": "2026-09-16",
   "status": "processo",
   "titulo": "Coligação de Lula aciona o TSE contra o 'pronunciamento' de Flávio e pede direito de resposta; relator é André Mendonça",
   "resumo": "Em 16/09, a coligação de Lula protocolou representação no TSE contra Flávio Bolsonaro pelo vídeo do horário eleitoral de 15/09. Pede direito de resposta e, em liminar, a proibição de reexibição do programa. Argumenta que a propaganda veicula 'fato inverídico, mentiroso e malicioso, em evidente má-fé', desinforma sobre a 'arquitetura constitucional do Estado brasileiro', apresenta como 'fato consumado' a investigação ainda pendente contra Moraes e busca 'acirrar a crise institucional e convertê-la em instrumento de campanha'. O caso foi distribuído ao ministro André Mendonça. Até 17/09 não havia decisão publicada nem manifestação da campanha de Flávio nos autos localizada.",
   "observacao": "Status jurídico literal: representação em tramitação no TSE, sem liminar conhecida até 17/09. A versão de Flávio é a própria peça de propaganda (ver item do pronunciamento). URL da fonte corrigida (o original tinha erro de digitação).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles (coluna Manoela Alcântara)",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/lula-vai-ao-tse-contra-flavio-apos-acusacao-de-dividir-poder-com-moraes",
     "data": "2026-09-17",
     "trecho": "acirrar a crise institucional e convertê-la em instrumento de campanha",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "patrimonio-declarado-de-r-1-74-mi-em-2018-contra",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2018",
   "status": "fato",
   "titulo": "Patrimônio declarado de R$ 1,74 mi em 2018 contrastado com mansão de ~R$ 6 mi",
   "resumo": "Reportagens destacam o contraste entre os R$ 1,74 milhão em bens declarados por Flávio ao TSE em 2018 (eleição ao Senado) e a mansão de quase R$ 6 milhões adquirida em 2021, usado pelos críticos para questionar a compatibilidade patrimonial.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-mansao-luxuosa-renda/",
     "data": "2024",
     "trecho": "Em 2018, declarou bens de R$ 1,74 milhão, valor incompatível com o imóvel adquirido",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/flavio-bolsonaro-quita-antecipadamente-financiamento-de-mansao-com-brb",
     "data": "2024-07-03",
     "trecho": "Bens declarados ao TSE (2018): R$ 1,7 milhão",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-compra-mansao-de-r-6-mi-no-lago-sul-com-f",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2021",
   "status": "fato",
   "titulo": "Flávio compra mansão de ~R$ 6 mi no Lago Sul com financiamento de R$ 3,1 mi do BRB (2021)",
   "resumo": "Em 2021, Flávio Bolsonaro adquiriu mansão avaliada em R$ 5,97 milhões no Setor de Mansões Dom Bosco, Lago Sul (Brasília), com 2.400 m². O BRB liberou financiamento de R$ 3,1 milhões em 360 parcelas (30 anos), a juros de 3,65% a 3,71% ao ano mais IPCA.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-quando-brb-deu-polemico-financiamento-de-r-59-milhoes-a-flavio-bolsonaro",
     "data": "2026",
     "trecho": "BRB liberou R$ 3,1 milhões para a compra de mansão avaliada em R$ 5,97 milhões no Setor de Mansões Dom Bosco, no Lago Sul",
     "tier": "referencia"
    },
    {
     "veiculo": "O Potiguar",
     "url": "https://www.opotiguar.com.br/2026/04/04/mansao-de-6-milhoes-de-flavio-bolsonaro-financiada-pelo-brb-entra-na-lista-de-suspeitos-no-caso-master",
     "data": "2026-04-04",
     "trecho": "Taxa de juros: 3,65% a 3,71% ao ano (mais IPCA); 2.400 m²",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "entrada-e-tributos-r-2-9-mi-de-entrada-e-r-181-m",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2021",
   "status": "fato",
   "titulo": "Entrada e tributos: R$ 2,9 mi de entrada e R$ 181 mil à vista em imposto e taxas",
   "resumo": "Para fechar a compra, Flávio Bolsonaro pagou R$ 2,9 milhões de entrada e cerca de R$ 181 mil à vista em imposto de transmissão e taxas, segundo levantamento de documentos da operação. O restante (R$ 3,1 milhões) foi financiado pelo BRB.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/para-compra-de-mansao-flavio-bolsonaro-pagou-r-181-mil-a-vista-em-imposto-e-taxas/",
     "data": "2024",
     "trecho": "Para compra de mansão, Flávio Bolsonaro pagou R$ 181 mil à vista em imposto e taxas",
     "tier": "agregador"
    },
    {
     "veiculo": "Terra",
     "url": "https://www.terra.com.br/noticias/flavio-bolsonaro-pagou-r-181-mil-a-vista-em-imposto-e-taxas-alem-de-r-29-mi-de-entrada-na-mansao,9617b37e76c79f9236a208cf964b5cbdfy74o4rm.html",
     "data": "2024",
     "trecho": "pagou R$ 181 mil à vista em imposto e taxas, além de R$ 2,9 mi de entrada na mansão",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-mansao-de-r-6-mi-foi-paga-com-ren",
   "tipo": "declaracao",
   "tema": "mansao",
   "data": "2021",
   "status": "declaracao",
   "titulo": "Flávio diz que mansão de R$ 6 mi foi paga com renda de advogado",
   "resumo": "Em defesa a ação popular movida pela deputada Erika Kokay, Flávio afirmou que a mansão de cerca de R$ 6 mi comprada em Brasília (mar/2021) foi paga com sua renda como advogado, empresário e com o trabalho da esposa, dentista. Reportagens apontam não haver registro de atuação dele como advogado.",
   "pessoas": [
    "flavio",
    "fernanda-antunes-figueira-bolsonaro"
   ],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/20550/flavio-bolsonaro-diz-que-mansao-de-r-6-milhoes-foi-paga-com-renda-de-advogado",
     "data": "2021",
     "trecho": "mansão de R$ 6 milhões foi paga com renda de advogado",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/flavio-bolsonaro-compra-mansao-avaliada-em-r-6-milhoes-em-brasilia/",
     "data": "2021",
     "trecho": "Flávio Bolsonaro compra mansão de 1.000 m² por R$ 5,9 milhões em Brasília",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "compra-de-mansao-de-r-5-97-milhoes-em-brasilia-l",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2021-02",
   "status": "fato",
   "titulo": "Compra de mansão de R$ 5,97 milhões em Brasília (Lago Sul)",
   "resumo": "Flávio e a esposa Fernanda compraram mansão de R$ 5,97 milhões no Setor de Mansões Dom Bosco, Lago Sul, com 1.100 m² construídos em terreno de 2.500 m². Pagaram R$ 2,87 milhões de entrada e financiaram R$ 3,1 milhões pelo BRB em 360 parcelas (30 anos). Pagaram ainda R$ 181 mil à vista em impostos e taxas.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/para-compra-de-mansao-flavio-bolsonaro-pagou-r-181-mil-a-vista-em-imposto-e-taxas/",
     "data": "2021-02-25",
     "trecho": "pagou R$ 181 mil à vista em imposto e taxas",
     "tier": "agregador"
    },
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2021/03/4909818-valor-de-mansao-de-flavio-e-bem-maior-que-patrimonio-declarado-em-2018.html",
     "data": "2021-03-01",
     "trecho": "Valor de mansão de Flávio é bem maior que patrimônio declarado em 2018",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mansao-custa-quase-4-vezes-o-patrimonio-declarad",
   "tipo": "noticia",
   "tema": "mansao",
   "data": "2021-03-02",
   "status": "fato",
   "titulo": "Mansão custa quase 4 vezes o patrimônio declarado em 2018",
   "resumo": "O preço da mansão de Brasília (R$ 6 milhões, sendo R$ 3,1 milhões financiados) equivale a cerca de 3,5 a 4 vezes o patrimônio total de R$ 1,74 milhão declarado por Flávio ao TSE em 2018, alimentando questionamentos sobre a compatibilidade entre a aquisição e a renda do senador.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/preco-da-mansao-de-flavio-bolsonaro-e-quase-quatro-vezes-maior-que-o-patrimonio-declarado-em-2018/",
     "data": "2021-03-02",
     "trecho": "representam um valor quase quatro vezes maior que o patrimônio declarado",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "alegada-incompatibilidade-de-renda-casal-declaro",
   "tipo": "caso",
   "tema": "mansao",
   "data": "2022",
   "status": "suspeita",
   "titulo": "Alegada incompatibilidade de renda: casal declarou R$ 36,9 mil; simulador do BRB exigia R$ 46,8 mil",
   "resumo": "Segundo a ação que questiona o empréstimo, a renda declarada do casal (R$ 36,9 mil) seria inferior aos R$ 46,8 mil exigidos pelo próprio simulador do BRB para crédito de R$ 3,1 milhões. O BRB respondeu que a renda líquida comprovada era R$ 65,4 mil (R$ 56,8 mil de Flávio e R$ 8,6 mil de Fernanda).",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Partido dos Trabalhadores",
     "url": "https://pt.org.br/acao-questiona-brb-e-flavio-bolsonaro-por-emprestimo-irregular/",
     "data": "2022",
     "trecho": "renda informada pelo casal, de R$ 36,9 mil, não é suficiente; necessário R$ 46,8 mil segundo a simulação do próprio banco",
     "tier": "agregador"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/juiz-do-df-considera-regular-emprestimo-de-flavio-bolsonaro-no-brb",
     "data": "2025-07",
     "trecho": "Renda comprovada pelo BRB: R$ 65,4 mil (R$ 56,8 mil de Flávio; R$ 8,6 mil de Fernanda)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "acao-popular-de-erika-kokay-pt-contra-brb-flavio",
   "tipo": "processo",
   "tema": "mansao",
   "data": "2022",
   "status": "processo",
   "titulo": "Ação popular de Erika Kokay (PT) contra BRB, Flávio e Fernanda por empréstimo 'irregular'",
   "resumo": "A deputada Erika Kokay (PT-DF) ajuizou ação popular contra o BRB, Flávio Bolsonaro e a esposa Fernanda, alegando 'desvio de finalidade' e lesão à moralidade administrativa no financiamento. Apontou possível influência política, já que o pai do senador era presidente e aliado do governador Ibaneis Rocha, controlador do BRB.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Partido dos Trabalhadores",
     "url": "https://pt.org.br/acao-questiona-brb-e-flavio-bolsonaro-por-emprestimo-irregular/",
     "data": "2022",
     "trecho": "ação popular na Justiça contra o BRB, o senador Flávio Bolsonaro e sua esposa Fernanda Bolsonaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Revista Oeste",
     "url": "https://revistaoeste.com/politica/juiz-rejeita-acao-contra-flavio-bolsonaro-por-propriedade-em-brasilia/",
     "data": "2025",
     "trecho": "alegou irregularidades na concessão do crédito habitacional ao senador",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "defesa-flavio-diz-ter-renda-de-advogado-mas-nao",
   "tipo": "declaracao",
   "tema": "mansao",
   "data": "2022-06",
   "status": "declaracao",
   "titulo": "Defesa: Flávio diz ter renda de advogado, mas não há registro de atuação na OAB",
   "resumo": "Na defesa, Flávio afirmou ter pago parte do financiamento com recursos obtidos 'como profissional do Direito' e como empresário; a esposa, com a odontologia. Segundo a Folha, não há registros de processos em que ele atue como advogado no DF ou no RJ, embora tenha inscrição na OAB.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/regionais/brasilia/flavio-bolsonaro-diz-que-comprou-mansao-com-renda-de-advocacia-sem-jamais-ter-advogado",
     "data": "2022",
     "trecho": "não há registros de processos nos quais Flávio atue como advogado no Distrito Federal e no Rio",
     "tier": "agregador"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/flavio-bolsonaro-justifica-mansao-por-ter-renda-que-excede-salario-de-senador/",
     "data": "2022",
     "trecho": "Flávio Bolsonaro justifica mansão por ter renda que excede salário de senador",
     "tier": "referencia"
    },
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2022/06/5012206-flavio-bolsonaro-justifica-compra-de-mansao-com-outras-fontes-de-renda.html",
     "data": "2022-06",
     "trecho": "Flávio Bolsonaro justifica compra de mansão com outras fontes de renda",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "quitacao-acelerada-r-3-4-mi-em-seis-aportes-extr",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2024-03-21",
   "status": "fato",
   "titulo": "Quitação acelerada: R$ 3,4 mi em seis aportes extraordinários, financiamento de 30 anos zerado em ~3 anos",
   "resumo": "Flávio Bolsonaro quitou o saldo do financiamento de 30 anos em cerca de três anos. Foram R$ 3,4 milhões pagos em seis aportes extraordinários, um deles de R$ 997 mil e o último de R$ 520,2 mil. A quitação oficial ocorreu em 21 de março de 2024.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/flavio-bolsonaro-quita-antecipadamente-financiamento-de-mansao-com-brb",
     "data": "2024-07-03",
     "trecho": "21 de março de 2024: data oficial de quitação; seis pagamentos extras; último pagamento R$ 520,2 mil",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/29101/flavio-bolsonaro-quita-mansao-com-seis-pagamentos-extras-de-r-34-milhoes",
     "data": "2024",
     "trecho": "Flávio Bolsonaro quita mansão com seis pagamentos extras de R$ 3,4 milhões",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/flavio-bolsonaro-paga-34-milhoes-para-quitar-mansao-comprada-no-lago-sul/",
     "data": "2024",
     "trecho": "Flávio Bolsonaro paga R$ 3,4 milhões para quitar mansão comprada no Lago Sul",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "quitacao-antecipada-da-mansao-em-2024-com-aporte",
   "tipo": "patrimonio",
   "tema": "mansao",
   "data": "2024-07-03",
   "status": "fato",
   "titulo": "Quitação antecipada da mansão em 2024 com aportes de R$ 3,4 milhões",
   "resumo": "Flávio quitou em 21/03/2024 o financiamento de R$ 3,1 milhões da mansão, contratado para 30 anos, em apenas 3 anos, com último pagamento de R$ 520,2 mil. Entre fim de 2022 e março de 2024 fez aportes extraordinários de cerca de R$ 3,4 milhões, incluindo quase R$ 1 milhão em janeiro de 2023. Disse que tudo é 'fruto do suor de meu trabalho'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/flavio-bolsonaro-quita-antecipadamente-financiamento-de-mansao-com-brb",
     "data": "2024-07-03",
     "trecho": "quitado em apenas três anos; último pagamento de R$ 520,2 mil; quitado em 21 de março de 2024",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/politica/2024/07/1050829-flavio-bolsonaro-quita-mansao-com-aportes-de-rs-34-milhoes-suor-do-meu-trabalho.html",
     "data": "2024-07-03",
     "trecho": "quita mansão com aportes de R$ 3,4 milhões: 'Suor do meu trabalho'",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "renda-do-casal-abaixo-da-exigida-pelo-banco-empr",
   "tipo": "investigacao",
   "tema": "mansao",
   "data": "2024-07-03",
   "status": "processo",
   "titulo": "Renda do casal abaixo da exigida pelo banco; empréstimo do BRB questionado na Justiça",
   "resumo": "À época do financiamento, a renda mensal declarada por Flávio e a esposa era de R$ 36,9 mil, abaixo dos R$ 46,8 mil exigidos pelas simulações do banco para a operação. A deputada Erika Kokay (PT-DF) ajuizou ação popular na Justiça do DF apontando supostas irregularidades na concessão do crédito pelo BRB.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/flavio-bolsonaro-quita-antecipadamente-financiamento-de-mansao-com-brb",
     "data": "2024-07-03",
     "trecho": "renda exigida para esse tipo de operação era de R$ 46,8 mil",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "juiz-julga-improcedente-a-acao-e-considera-o-emp",
   "tipo": "decisao_judicial",
   "tema": "mansao",
   "data": "2025-07-01",
   "status": "decisao_judicial",
   "titulo": "Juiz julga improcedente a ação e considera o empréstimo do BRB regular (jul/2025)",
   "resumo": "Em 1º de julho de 2025, o juiz Leonardo Maciel Foster, da 1ª Vara Cível de Brasília, julgou improcedente a ação de Kokay. Concluiu que a renda comprovada de Flávio (mais de R$ 65 mil) era compatível e que o contrato estava 'dentro da prática comercial regular do BRB', sem violação à legalidade e moralidade.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/juiz-do-df-considera-regular-emprestimo-de-flavio-bolsonaro-no-brb",
     "data": "2025-07",
     "trecho": "Leonardo Maciel Foster; 1ª Vara Cível de Brasília; sentença 1º de julho de 2025; improcedente",
     "tier": "referencia"
    },
    {
     "veiculo": "Revista Oeste",
     "url": "https://revistaoeste.com/politica/juiz-rejeita-acao-contra-flavio-bolsonaro-por-propriedade-em-brasilia/",
     "data": "2025",
     "trecho": "Juiz rejeita ação contra Flávio Bolsonaro por propriedade em Brasília",
     "tier": "agregador"
    },
    {
     "veiculo": "O Antagonista",
     "url": "https://oantagonista.com.br/brasil/justica-rejeita-acao-de-deputada-do-pt-sobre-emprestimo-de-flavio-bolsonaro/",
     "data": "2025",
     "trecho": "Justiça rejeita ação de deputada do PT sobre empréstimo de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "financiamento-da-mansao-de-flavio-no-lago-sul-te",
   "tipo": "investigacao",
   "tema": "mansao",
   "data": "2025-11",
   "status": "investigacao",
   "titulo": "Financiamento da mansão de Flávio no Lago Sul teve aval de ex-chefe do BRB",
   "resumo": "O BRB liberou R$ 3,1 milhões em 2021 para Flávio comprar mansão de R$ 5,97 mi no Lago Sul (Brasília). O negócio passou pela diretoria colegiada presidida por Paulo Henrique Costa, demitido do BRB em novembro de 2025. Costa negocia delação com a PF, ampliando o foco sobre o crédito e ligações com Vorcaro.",
   "observacao": "O empréstimo do BRB em si não é ilegal; a investigação se concentra nas circunstâncias e ligações com o Master. Item baseado em uma fonte.",
   "pessoas": [
    "flavio",
    "paulo_henrique",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/caso-master-financiamento-da-mansao-de-flavio-bolsonaro-teve-aval-de-ex-chefe-do-brb/",
     "data": "2025-11",
     "trecho": "Financiamento da mansão de Flávio teve aval de ex-chefe do BRB; Paulo Henrique Costa negocia delação",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mansao-volta-ao-radar-da-pf-e-possivel-delacao-d",
   "tipo": "investigacao",
   "tema": "mansao",
   "data": "2026-04",
   "status": "investigacao",
   "titulo": "Mansão volta ao radar da PF e possível delação de Costa preocupa aliados de Flávio (2026)",
   "resumo": "Em abril de 2026, o financiamento da mansão entrou na lista de operações observadas no Caso Master. Uma eventual delação de Paulo Henrique Costa preocupa aliados do pré-candidato Flávio Bolsonaro; ele também teria aprovado cerca de R$ 978 mil em empréstimos pessoais ao senador.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "O Potiguar",
     "url": "https://www.opotiguar.com.br/2026/04/04/mansao-de-6-milhoes-de-flavio-bolsonaro-financiada-pelo-brb-entra-na-lista-de-suspeitos-no-caso-master",
     "data": "2026-04-04",
     "trecho": "teria aprovado R$ 978 mil em empréstimos pessoais; campanha bolsonarista teme delação",
     "tier": "agregador"
    },
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/regionais/brasilia/delacao-no-brb-preocupa-aliados-de-flavio-bolsonaro",
     "data": "2026",
     "trecho": "Delação no BRB preocupa aliados de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "ex-presidente-do-brb-que-avalizou-o-financiament",
   "tipo": "investigacao",
   "tema": "mansao",
   "data": "2026-04-16",
   "status": "investigacao",
   "titulo": "Ex-presidente do BRB que avalizou o financiamento, Paulo Henrique Costa, é preso na Operação Compliance Zero",
   "resumo": "Paulo Henrique Costa, ex-presidente do BRB, foi preso preventivamente pela PF na 4ª fase da Operação Compliance Zero (16/04/2026). Ele presidia a diretoria colegiada que aprovou o financiamento da mansão de Flávio. A operação apura fraudes bilionárias no Banco Master e lavagem de dinheiro.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/ceo-brb-preso-financiou-r-59-milhoes-mansao-flavio-bolsonaro/",
     "data": "2026-04",
     "trecho": "CEO do BRB preso financiou parte dos R$ 5,9 milhões para mansão de Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/blogs/elijonasmaia/politica/ex-presidente-do-brb-paulo-henrique-costa-e-preso/",
     "data": "2026-04",
     "trecho": "Compliance Zero: ex-presidente do BRB, Paulo Henrique Costa é preso pela PF",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-quando-brb-deu-polemico-financiamento-de-r-59-milhoes-a-flavio-bolsonaro",
     "data": "2026",
     "trecho": "Paulo Henrique era presidente quando BRB deu polêmico financiamento de R$ 5,9 milhões a Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "lindbergh-farias-leva-a-pf-mansao-de-r-14-5-milh",
   "tipo": "denuncia",
   "tema": "mansao",
   "data": "2026-07-02",
   "status": "fato",
   "titulo": "Lindbergh Farias leva à PF mansão de R$ 14,5 milhões financiada pelo BRB e usada como QG de Flávio",
   "resumo": "O deputado federal Lindbergh Farias (PT-RJ) protocolou notícia de fato na Polícia Federal pedindo apuração sobre a compra de uma mansão de R$ 14,5 milhões em Brasília, registrada em nome do advogado José Vicente Santini e usada como QG da pré-campanha de Flávio Bolsonaro. A operação teve R$ 4 milhões de entrada e R$ 10,5 milhões financiados pelo Banco de Brasília (BRB), com prestações estimadas em R$ 128 mil mensais, o que exigiria renda comprovada de cerca de R$ 429 mil por mês. O pedido quer que a PF apure 'a origem dos recursos, a capacidade financeira real dos compradores, as condições do financiamento e a natureza do uso político do imóvel', e se houve benefício patrimonial indireto ao senador. A assessoria de Flávio Bolsonaro foi procurada e não respondeu até a publicação; não há manifestação de Santini nem do BRB.",
   "observacao": "É PEDIDO de apuração feito por adversário político, NÃO inquérito instaurado: nenhuma das fontes confirma abertura de investigação pela PF. O imóvel está em nome de Santini, não de Flávio. Contraditório em aberto. Data corrigida para 02/07/2026 (data das duas matérias); a data do protocolo não é informada pelas fontes. O item proposto descrevia Santini como 'coordenador da pré-campanha' — as fontes verificadas o identificam apenas como advogado, e a descrição foi removida.",
   "pessoas": [
    "jose-vicente-santini",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/lindbergh-pede-a-pf-que-investigue-mansao-usada-por-flavio-como-qg",
     "data": "2026-07-02",
     "trecho": "a origem dos recursos, a capacidade financeira real dos compradores, as condições do financiamento",
     "tier": "referencia"
    },
    {
     "veiculo": "VGN Notícias",
     "url": "https://www.vgnoticias.com.br/vgnjur/pt-aciona-pf-para-investigar-mansao-de-r-145-milhoes-ligada-a-pre-campanha-de-flavio-bolsonaro/148424",
     "data": "2026-07-02",
     "trecho": "a investigação deve esclarecer se houve benefício patrimonial indireto ao senador",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "origem-dos-recursos-discrepancia-na-declaracao-e",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2014",
   "status": "suspeita",
   "titulo": "Origem dos recursos: discrepância na declaração e dinheiro da esposa Fernanda",
   "resumo": "Segundo o MP, Flávio declarou apenas R$ 50 mil no IR de 2014, mas R$ 550 mil saíram da conta de sua mulher, Fernanda Antunes Figueira Bolsonaro, que não é sócia formal do negócio. Investigadores suspeitam que parte dos recursos vinha do esquema de 'rachadinha' na Alerj.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/",
     "data": "2020",
     "trecho": "Flávio declarou apenas R$ 50 mil no IR de 2014, mas R$ 550 mil saíram da conta de sua mulher, Fernanda, que não é sócia formal",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-bolsonaro-vira-socio-da-franquia-kopenhag",
   "tipo": "patrimonio",
   "tema": "master",
   "data": "2015",
   "status": "fato",
   "titulo": "Flávio Bolsonaro vira sócio da franquia Kopenhagen (Bolsotini) em 2015",
   "resumo": "Flávio Bolsonaro e o amigo Alexandre Ferreira Dias Santini compraram em 2015 a franquia Kopenhagen 'Bolsotini Chocolates e Café Ltda.', no Via Parque Shopping (Barra da Tijuca, RJ), por cerca de R$ 1 milhão: R$ 800 mil ao antigo dono, R$ 200 mil de integralização de capital (R$ 100 mil de cada sócio) e R$ 45 mil de taxa de franquia.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/",
     "data": "2020",
     "trecho": "A loja Bolsotini Chocolates e Café foi comprada por R$ 1 milhão em 2015; o antigo dono recebeu R$ 800 mil",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/brasil/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-pelo-mp/",
     "data": "2021-02-02",
     "trecho": "franquia da loja de chocolates Kopenhagen que os dois administravam",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "1-512-depositos-em-especie-com-padrao-de-smurfin",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2018",
   "status": "suspeita",
   "titulo": "1.512 depósitos em espécie com padrão de 'smurfing' (estruturação)",
   "resumo": "Entre mar/2015 e dez/2018, a loja recebeu 1.512 depósitos em dinheiro fracionados (smurfing), com valores repetidos de R$ 1,5 mil, R$ 2 mil e R$ 3 mil para ficar abaixo do limite de R$ 10 mil de comunicação obrigatória ao Coaf. Em 25/10/2018 houve até 11 depósitos de R$ 3 mil (R$ 33 mil) no mesmo dia.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/flavio-bolsonaro-recebeu-1-512-depositos-suspeitos-em-loja-de-chocolate-diz-tv/",
     "data": "2020-08-20",
     "trecho": "1.512 depósitos em espécie, fracionados, em padrão de smurfing; em 25/10/2018, onze depósitos de R$ 3 mil",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "coaf-uif-apontou-transacoes-atipicas-que-origina",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2018",
   "status": "fato",
   "titulo": "Coaf/UIF apontou transações atípicas que originaram a investigação",
   "resumo": "A apuração da loja de chocolates teve origem em relatórios do antigo Coaf (hoje UIF), que apontaram movimentações atípicas na Bolsotini Chocolates e Café, franquia Kopenhagen na Barra da Tijuca, desproporcionais ao faturamento declarado pela empresa.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/",
     "data": "2025",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/flavio-bolsonaro-recebeu-1-512-depositos-suspeitos-em-loja-de-chocolate-diz-tv/",
     "data": "2020-08-20",
     "trecho": "qualquer movimentação acima de R$ 10 mil deveria ser notificada às autoridades",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-rj-investiga-lavagem-de-cerca-de-r-2-1-milhoe",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2019",
   "status": "investigacao",
   "titulo": "MP-RJ investiga lavagem de cerca de R$ 2,1 milhões na loja de chocolates",
   "resumo": "O Ministério Público do Rio (MP-RJ) investigou se a Bolsotini/Kopenhagen serviu para lavar cerca de R$ 2,1 milhões: ao menos R$ 500 mil escondidos na aquisição da loja (dez/2014) e R$ 1,6 milhão movimentado de forma suspeita na conta da empresa, registrado como vendas de chocolate em espécie para disfarçar a origem.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/",
     "data": "2020",
     "trecho": "Pelo menos R$ 500 mil teriam sido escondidos na aquisição da loja e outros R$ 1,6 milhão movimentados de forma suspeita",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "socio-alexandre-santini-suspeito-de-atuar-como-l",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2019",
   "status": "suspeita",
   "titulo": "Sócio Alexandre Santini suspeito de atuar como 'laranja'",
   "resumo": "O MP-RJ quebrou os sigilos de Bolsotini, do sócio Alexandre Ferreira Dias Santini e do contador. Investigadores suspeitam que Santini pode ter figurado nos contratos como 'laranja' (testa de ferro) para simular divisão igualitária de custos, quando o casal Bolsonaro teria arcado com quase todas as despesas.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/",
     "data": "2020",
     "trecho": "Santini pode ter figurado em contratos como laranja para simular que os custos eram divididos meio a meio",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal GGN",
     "url": "https://jornalggn.com.br/crise/o-socio-laranja-de-flavio-bolsonaro-na-bomboniere-por-luis-nassif/",
     "data": "2020",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mp-rj-faz-buscas-e-quebra-sigilos-na-loja-de-cho",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2019-12",
   "status": "investigacao",
   "titulo": "MP-RJ faz buscas e quebra sigilos na loja de chocolates (dez/2019)",
   "resumo": "Em dezembro de 2019, o MP-RJ cumpriu mandado de busca e o juiz Flávio Itabaiana autorizou a quebra dos sigilos bancário e fiscal da loja, do sócio Santini e do contador, como parte da apuração de lavagem ligada à 'rachadinha' da Alerj.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/",
     "data": "2020",
     "trecho": "Dezembro de 2019: sigilos bancário e fiscal da loja, de Santini e do contador foram quebrados pelo juiz Flávio Itabaiana",
     "tier": "agregador"
    },
    {
     "veiculo": "Crusoé",
     "url": "https://crusoe.com.br/diario/mp-faz-busca-em-loja-de-chocolates-de-flavio-bolsonaro/",
     "data": "2019",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-e-santini-entregam-a-franquia-kopenhagen",
   "tipo": "evento",
   "tema": "master",
   "data": "2021-02-01",
   "status": "fato",
   "titulo": "Flávio e Santini entregam a franquia Kopenhagen à CRM (fev/2021)",
   "resumo": "Em 1º de fevereiro de 2021, Flávio Bolsonaro e o sócio Alexandre Santini entregaram a franquia da loja Kopenhagen que administravam no Via Parque Shopping. O grupo CRM (dono da Kopenhagen) assumiu a operação e comunicou às autoridades.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/brasil/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-pelo-mp/",
     "data": "2021-02-02",
     "trecho": "Flávio Bolsonaro e o sócio Alexandre Santini entregaram a franquia da loja de chocolates Kopenhagen",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/flavio-bolsonaro-e-socio-entregam-loja-investigada-pelo-mp/",
     "data": "2021",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fabiano-zettel-cunhado-de-vorcaro-foi-maior-doad",
   "tipo": "financeiro",
   "tema": "master",
   "data": "2022-10-10",
   "status": "fato",
   "titulo": "Fabiano Zettel, cunhado de Vorcaro, foi maior doador individual de Jair Bolsonaro em 2022 (R$ 3 mi)",
   "resumo": "Segundo registros do TSE, Fabiano Campos Zettel, cunhado do dono do Banco Master Daniel Vorcaro, doou R$ 3 milhões à campanha de reeleição de Jair Bolsonaro em 10/10/2022, sendo o maior doador individual. Também doou R$ 2 milhões a Tarcísio de Freitas e R$ 10 mil ao deputado Lucas Gonzalez.",
   "observacao": "Doações registradas no TSE; doador foi posteriormente alvo da PF no caso Master.",
   "pessoas": [
    "zettel",
    "vorcaro",
    "jair",
    "tarcisio-de-freitas"
   ],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/nota/quem-e-fabiano-zettel-maior-doador-de-tarcisio-de-freitas/",
     "trecho": "R$ 3 milhões à campanha de Jair Bolsonaro (10 de outubro); R$ 2 milhões a Tarcísio de Freitas (13 de outubro)",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/alvo-da-pf-doou-r-5-mi-para-campanhas-de-bolsonaro-e-tarcisio-em-2022/",
     "trecho": "Alvo da PF doou R$ 5 mi para campanhas de Bolsonaro e Tarcísio em 2022",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "ex-socio-santini-cobra-calote-de-r-1-4-1-5-milha",
   "tipo": "relacao",
   "tema": "master",
   "data": "2023-11-09",
   "status": "declaracao",
   "titulo": "Ex-sócio Santini cobra calote de ~R$ 1,4-1,5 milhão e ameaça Flávio",
   "resumo": "Rompido com Flávio na campanha de 2022, Alexandre Santini cobra na Justiça cerca de R$ 1,4-1,5 milhão. Alega que, apesar de a sociedade ser meio a meio, Flávio ficou com R$ 1,7 milhão de lucro contra cerca de R$ 630-644 mil dele. Em rede social, ameaçou: 'Se eu quiser, eu ponho o Flávio na cadeia'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/se-eu-quiser-eu-ponho-o-flavio-bolsonaro-na-cadeia-ameaca-ex-socio-do-senador/",
     "data": "2023-11-09",
     "trecho": "Se eu quiser, eu ponho o Flávio na cadeia. Com o que eu tenho na mão, ele vai preso",
     "tier": "referencia"
    },
    {
     "veiculo": "JB",
     "url": "https://www.jb.com.br/brasil/politica/2023/11/1047206-ex-socio-de-flavio-bolsonaro-na-kopenhagen-o-acusa-de-calote-e-ameaca-coloca-lo-na-prisao.html",
     "data": "2023-11",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "audio-de-flavio-cobrando-vorcaro-fico-sem-graca",
   "tipo": "midia",
   "tema": "master",
   "data": "2025-09-08",
   "status": "fato",
   "titulo": "Áudio de Flávio cobrando Vorcaro: 'fico sem graça de ficar te cobrando... momento muito decisivo do filme'",
   "resumo": "Em áudio de 8/9/2025, Flávio cobra pagamentos a Vorcaro: 'Eu fico sem graça de ficar te cobrando, está em um momento muito decisivo aqui do filme'. Em outro trecho cita risco de 'dar calote no Jim Caviezel, num Cyrus'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/vorcaro-pagou-r-61-milhoes-para-filme-de-bolsonaro-flavio-cobrou-dinheiro-ouca",
     "data": "2026-05-13",
     "trecho": "Eu fico sem graça de ficar te cobrando, está em um momento muito decisivo aqui do filme",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/ouca-o-audio-de-flavio-bolsonaro-pedindo-dinheiro-a-vorcaro/",
     "data": "2026-05-13",
     "trecho": "Ouça o áudio de Flávio Bolsonaro pedindo dinheiro a Vorcaro",
     "tier": "referencia"
    }
   ],
   "midia": [
    {
     "tipo": "audio",
     "titulo": "Áudio de Flávio cobrando pagamento a Vorcaro",
     "url": "https://www.cnnbrasil.com.br/politica/ouca-o-audio-de-flavio-bolsonaro-pedindo-dinheiro-a-vorcaro/",
     "fonte": "CNN Brasil / Intercept"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-chamava-vorcaro-de-irmao-em-mensagens-est",
   "tipo": "midia",
   "tema": "master",
   "data": "2025-11-17",
   "status": "fato",
   "titulo": "Flávio chamava Vorcaro de 'irmão' em mensagens ('estou e estarei com você sempre')",
   "resumo": "Mensagens vazadas mostram tom íntimo. Um dia antes da prisão de Vorcaro (nov/2025), Flávio escreveu: 'Irmão, estou e estarei com você sempre, não tem conversa pela metade entre a gente'. Em 7/11/2025: 'Tá perdendo, irmão! Tudo isso só está sendo possível por causa de vc'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/flavio-nega-conhecer-vorcaro-a-banqueiro-e-apos-audio-nao-e-recebido/",
     "data": "2026-05-14",
     "trecho": "Irmão, estou e estarei com você sempre, não tem conversa pela metade entre a gente",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/",
     "data": "2026-05-14",
     "trecho": "Tá perdendo, irmão! Tudo isso só está sendo possível por causa de vc",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "vorcaro-preso-na-operacao-compliance-zero-master",
   "tipo": "evento",
   "tema": "master",
   "data": "2025-11-18",
   "status": "processo",
   "titulo": "Vorcaro preso na Operação Compliance Zero; Master liquidado com rombo de ~R$ 47 bi ao FGC",
   "resumo": "Daniel Vorcaro foi preso pela PF em novembro de 2025 (Operação Compliance Zero) ao tentar deixar o país. O Banco Master foi liquidado pelo Banco Central em 18/11/2025, deixando rombo de ~R$ 47 bi ao FGC, considerado a maior fraude bancária da história do país. Vorcaro foi preso de novo em 4/3/2026.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/451048/pf-prende-daniel-vorcaro-em-nova-fase-do-caso-master",
     "data": "2025-11-18",
     "trecho": "PF prende Daniel Vorcaro em nova fase do caso Master",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/03/banco-master-a-reconstrucao-completa-de-como-uma-fraude-capturou-a-republica/",
     "data": "2026-03-01",
     "trecho": "Banco Master liquidado deixando rombo de ~R$ 47 bilhões ao FGC; maior fraude bancária da história",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-doacao-ligada-a-vorcaro-foi-sem-c",
   "tipo": "declaracao",
   "tema": "master",
   "data": "2026-03",
   "status": "declaracao",
   "titulo": "Flávio diz que doação ligada a Vorcaro foi 'sem contato nem contrapartida'",
   "resumo": "Questionado sobre a doação de R$ 3 milhões de Fabiano Zettel à campanha de Jair em 2022, Flávio Bolsonaro afirmou à CNN que ocorreu 'sem qualquer ligação, sem contrapartida, sem contato pessoal'. Disse que a equipe de compliance só verificava se doadores não tinham antecedentes criminais e atribuiu o caso a uma 'narrativa falsa'.",
   "observacao": "Versão pública do senador, posterior questionada pela divulgação dos áudios com Vorcaro.",
   "pessoas": [
    "flavio",
    "zettel",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/a-cnn-flavio-diz-que-doacao-a-campanha-ligada-a-vorcaro-foi-sem-contato/",
     "trecho": "A doação à campanha ligada a Vorcaro foi 'sem contato'",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mario-frias-recua-e-admite-recursos-ligados-a-vo",
   "tipo": "declaracao",
   "tema": "master",
   "data": "2026-05",
   "status": "declaracao",
   "titulo": "Mário Frias recua e admite recursos ligados a Vorcaro no filme após produtora negar",
   "resumo": "A produtora GOUP Entertainment negou ter recebido 'um único centavo' de Vorcaro/Banco Master. Cerca de 20 horas depois, o produtor executivo Mário Frias recuou, citando 'diferença de interpretação' e afirmando que a relação jurídica foi com a empresa 'Entre Investimentos', que operava em parceria com negócios de Vorcaro.",
   "observacao": "Coaf indica que a Entre Investimentos recebeu R$ 159,2 mi de fundos investigados no caso Master.",
   "pessoas": [
    "mario-frias",
    "vorcaro",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/mario-frias-recua-e-admite-dinheiro-de-vorcaro-em-filme-sobre-bolsonaro/",
     "trecho": "Mário Frias recua e admite dinheiro de Vorcaro em filme sobre Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "master-investiu-r-614-mi-em-grupo-que-financiou",
   "tipo": "financeiro",
   "tema": "master",
   "data": "2026-05",
   "status": "investigacao",
   "titulo": "Master investiu R$ 614 mi em grupo que financiou o filme; Grupo Entre comprou sites da IstoÉ",
   "resumo": "Investigações apontam que o Banco Master aplicou R$ 614 milhões em empresas do Grupo Entre, ligado a Antonio Carlos Freixo Júnior ('Mineiro'), que bancou o filme sobre Jair. A Entre adquiriu sites da revista IstoÉ em leilão judicial. Parte dos recursos teria sido repassada ao Havengate Development Fund, no Texas, ligado a aliados de Eduardo.",
   "observacao": "Trama financeira complexa; cifras e fluxos ainda sob apuração da PF. Flávio nega que Eduardo tenha gerido recursos do filme.",
   "pessoas": [
    "vorcaro",
    "antonio-carlos-freixo-junior-mineiro",
    "eduardo",
    "paulo-calixto",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247 / CONTEE",
     "url": "https://www.brasil247.com/brasil/master-investiu-r-614-mi-em-grupo-que-bancou-filme-de-bolsonaro",
     "data": "2026-05",
     "trecho": "Master investiu R$ 614 mi em grupo que bancou filme de Bolsonaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/",
     "data": "2026-05",
     "trecho": "US$ 2 milhões repassados ao Havengate Development Fund LP, no Texas, controlado por aliados de Eduardo Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "audios-revelam-negociacao-de-r-134-mi-entre-flav",
   "tipo": "denuncia",
   "tema": "master",
   "data": "2026-05-13",
   "status": "denuncia",
   "titulo": "Áudios revelam negociação de ~R$ 134 mi entre Flávio e Vorcaro para filme sobre Jair",
   "resumo": "O Intercept divulgou áudios, mensagens e comprovantes mostrando que Flávio Bolsonaro negociou cerca de R$ 134 milhões com o ex-banqueiro Daniel Vorcaro, dono do Banco Master, para financiar o filme 'Dark Horse', cinebiografia de Jair Bolsonaro.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio Bolsonaro negociou com Daniel Vorcaro R$ 134 milhões para bancar filme sobre Jair",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/flavio-pediu-r-134-mi-a-vorcaro-para-filme-de-bolsonaro-diz-intercept/",
     "data": "2026-05-13",
     "trecho": "Flávio pediu R$ 134 mi a Vorcaro para filme de Bolsonaro, diz Intercept",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pelo-menos-r-61-mi-us-10-6-mi-ja-teriam-sido-tra",
   "tipo": "financeiro",
   "tema": "master",
   "data": "2026-05-13",
   "status": "denuncia",
   "titulo": "Pelo menos R$ 61 mi já teriam sido transferidos em seis operações (2025)",
   "resumo": "Documentos indicam que ao menos R$ 61 milhões foram pagos entre fevereiro e maio de 2025, em seis transferências bancárias, para o projeto. Os repasses teriam passado pela empresa 'Entre Investimentos e Participações'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/vorcaro-pagou-r-61-milhoes-para-filme-de-bolsonaro-flavio-cobrou-dinheiro-ouca",
     "data": "2026-05-13",
     "trecho": "Seis operações realizadas entre fevereiro e maio de 2025; R$ 61 milhões transferidos",
     "tier": "referencia"
    },
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "US$ 10,6 milhões pagos entre fevereiro e maio de 2025 em seis transferências",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "suspeita-de-desvio-us-2-mi-teriam-ido-a-fundo-no",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-05-13",
   "status": "investigacao",
   "titulo": "Suspeita de desvio: cerca de R$ 11,6 mi teriam ido a fundo nos EUA ligado a aliado de Eduardo Bolsonaro",
   "resumo": "Investigadores apuram se parte dos recursos não foi para o filme, mas para bancar despesas do ex-deputado Eduardo Bolsonaro nos EUA. Cerca de R$ 11,6 milhões (pela cotação do Banco Central de 13/02/2025, dia do repasse) teriam ido ao fundo texano Havengate Development Fund LP, gerido por Paulo Calixto, advogado de Eduardo. A PF investiga se a produção foi 'fachada' para lavagem.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "data": "2026-05-14",
     "trecho": "US$ 2 milhões direcionados ao Havengate Development Fund LP, gerido por Paulo Calixto, advogado de Eduardo Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/",
     "data": "2026-05-14",
     "trecho": "Investigadores examinam se o financiamento serviu de fachada para lavagem ou para despesas de Eduardo nos EUA",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "audio-revela-flavio-negociando-r-134-milhoes-com",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-05-13",
   "status": "investigacao",
   "titulo": "Áudio revela Flávio negociando R$ 134 milhões com Vorcaro para filme sobre Jair",
   "resumo": "Áudio e mensagens divulgados mostram que Flávio Bolsonaro negociou repasse de cerca de R$ 134 milhões com o ex-dono do Banco Master, Daniel Vorcaro, para financiar o filme 'Dark Horse' sobre Jair Bolsonaro. Flávio admitiu o pedido: 'era um filho buscando patrocínio'.",
   "observacao": "Apuração jornalística; Flávio reconheceu a negociação após divulgação dos áudios.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair",
    "thiago-miranda"
   ],
   "fontes": [
    {
     "veiculo": "The Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio Bolsonaro negociou com Daniel Vorcaro R$ 134 milhões para bancar filme sobre Jair",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "trecho": "Negociação de repasse de US$ 24 milhões (aproximadamente R$ 134 milhões)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-apura-desembolso-de-us-10-6-milhoes-r-61-mi-d",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-05-13",
   "status": "investigacao",
   "titulo": "PF apura desembolso de R$ 61 milhões do Master ao filme entre fev e maio de 2025",
   "resumo": "Documentos indicam que ao menos R$ 61 milhões foram transferidos em seis operações bancárias entre fevereiro e maio de 2025 para o financiamento do filme 'Dark Horse'. A Polícia Federal investiga se os recursos foram à produção ou serviram para camuflar transferências.",
   "observacao": "Linha de investigação aberta pela PF; valores em apuração.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "trecho": "Fevereiro a maio de 2025: pelo menos US$ 10,6 milhões (cerca de R$ 61 milhões) foram transferidos em seis operações bancárias",
     "tier": "referencia"
    },
    {
     "veiculo": "Fundação Perseu Abramo",
     "url": "https://fpabramo.org.br/caso-master-rastro-do-dinheiro-chega-ao-senador-flavio-bolsonaro-e-amplia-crise-em-ano-eleitoral/",
     "trecho": "Vorcaro teria liberado ao menos R$ 61 milhões",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "caso-master-vorcaro-flavio-cobrou-repasses-do-ba",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-05-13",
   "status": "investigacao",
   "titulo": "Caso Master/Vorcaro: Flávio cobrou repasses do banqueiro para filme sobre Jair",
   "resumo": "Áudios e mensagens divulgados pelo Intercept mostram Flávio Bolsonaro negociando com o ex-banqueiro Daniel Vorcaro (Banco Master) cerca de R$ 134 milhões para o filme Dark Horse, sobre Jair. Cerca de R$ 61 milhões foram pagos entre fevereiro e maio de 2025.",
   "observacao": "Flávio confirmou ter pedido dinheiro a Vorcaro, dizendo ser 'um filho procurando patrocínio' para o filme, e nega irregularidade.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio negociou com Vorcaro R$ 134 milhões para bancar filme sobre Jair",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/",
     "data": "2026-05",
     "trecho": "US$ 10,6 milhões já pagos para a produção do filme; PF investiga possível operação de fachada",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "data": "2026-05",
     "trecho": "Seis transferências bancárias somaram US$ 10,6 mi entre fevereiro e maio de 2025",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "produtora-goup-entertainment-nega-financiamento",
   "tipo": "declaracao",
   "tema": "master",
   "data": "2026-05-14",
   "status": "declaracao",
   "titulo": "Produtora GOUP Entertainment nega financiamento de Vorcaro: 'nenhum centavo'",
   "resumo": "A produtora GOUP Entertainment, responsável pelo 'Dark Horse', afirmou em nota que 'não consta um único centavo proveniente do sr. Daniel Vorcaro' ou de empresas dele. Disse que o projeto seguiu modelo privado de desenvolvimento audiovisual e invocou NDAs para não revelar financiadores.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/produtora-nega-patrocinio-de-vorcaro-a-filme-de-bolsonaro-nenhum-centavo/",
     "data": "2026-05-14",
     "trecho": "não consta um único centavo proveniente do sr. Daniel Vorcaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "filme-dark-horse-o-azarao-jim-caviezel-como-jair",
   "tipo": "noticia",
   "tema": "master",
   "data": "2026-05-14",
   "status": "fato",
   "titulo": "Filme 'Dark Horse' (O Azarão): Jim Caviezel como Jair, estreia anunciada para 11/9/2026",
   "resumo": "O 'Dark Horse' (O Azarão) é cinebiografia de Jair Bolsonaro, com Jim Caviezel no papel principal e direção de Cyrus Nowrasteh; Mário Frias, ex-secretário de Cultura, aparece ligado à produção. A estreia foi anunciada para 11/9/2026, semanas antes da eleição presidencial.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/",
     "data": "2026-05-14",
     "trecho": "Dark Horse, com Jim Caviezel e direção de Cyrus Nowrasteh; estreia anunciada",
     "tier": "referencia"
    },
    {
     "veiculo": "Wikipédia",
     "url": "https://pt.wikipedia.org/wiki/Dark_Horse_(2026)",
     "data": "2026-05-14",
     "trecho": "Dark Horse (2026), cinebiografia de Jair Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fundo-havengate-no-texas-recebeu-us-2-mi-de-empr",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-05-24",
   "status": "investigacao",
   "titulo": "Fundo Havengate, no Texas, recebeu cerca de R$ 11,6 mi de empresa ligada a Vorcaro; PF apura repasse a Eduardo",
   "resumo": "A PF investiga se parte dos recursos do Master, repassados a pedido de Flávio, financiou Eduardo Bolsonaro nos EUA. O Havengate Development Fund, sediado no Texas, recebeu pelo menos o equivalente a cerca de R$ 11,6 milhões (pela cotação do Banco Central de 13/02/2025, dia do repasse); tem como agente legal Paulo Calixto, advogado de Eduardo. Flávio nega e diz que tudo foi para o filme.",
   "observacao": "Investigação em curso; Flávio nega desvio ao irmão.",
   "pessoas": [
    "flavio",
    "eduardo",
    "vorcaro",
    "paulo-calixto"
   ],
   "fontes": [
    {
     "veiculo": "O Povo/BBC",
     "url": "https://www.opovo.com.br/agencia/bbc/2026/05/24/havengate-o-fundo-na-mira-da-pf-que-conecta-vorcaro-flavio-e-eduardo-bolsonaro.html",
     "data": "2026-05-24",
     "trecho": "Havengate: o fundo na mira da PF que conecta Vorcaro, Flávio e Eduardo Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/05/14/pf-apura-se-dinheiro-do-banco-master-foi-usado-para-bancar-eduardo-bolsonaro-nos-estados-unidos/",
     "trecho": "PF apura se dinheiro do Banco Master foi usado para bancar Eduardo Bolsonaro nos Estados Unidos",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "vorcaro-tratava-pagamento-ao-filme-como-priorida",
   "tipo": "denuncia",
   "tema": "master",
   "data": "2026-06-02",
   "status": "denuncia",
   "titulo": "Vorcaro tratava pagamento ao filme como prioridade: 'esse é o mais importante disparado'",
   "resumo": "Em nova reportagem, o Intercept mostrou mensagens em que, em janeiro de 2025, Vorcaro tratava os pagamentos do projeto como prioridade absoluta. Quando dito que o filme não estava entre as prioridades financeiras, respondeu: 'Esse é o mais importante disparado' e 'Não pode falhar mais'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/06/02/mais-importante-disparado-vorcaro-bolsonaro/",
     "data": "2026-06-02",
     "trecho": "Vorcaro tratou pagamento a filme de Bolsonaro como prioridade após cobrança de Flávio",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "delacao-de-vorcaro-cita-repasses-a-flavio-filme",
   "tipo": "denuncia",
   "tema": "master",
   "data": "2026-06-02",
   "status": "denuncia",
   "titulo": "Delação de Vorcaro cita repasses a Flávio (filme) e propina a Ciro Nogueira ('Emenda Master')",
   "resumo": "Em nova proposta de delação, Vorcaro detalhou os repasses ao filme pedidos por Flávio (segundo a apuração citada pelo Correio Braziliense, R$ 124 mi negociados e pelo menos R$ 60 mi efetivados) e citou pagamentos a Ciro Nogueira em troca da 'Emenda Master', que elevaria o limite de cobertura do FGC. Entregou documentos e gravações de reuniões com Flávio.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2026/06/7434397-caso-master-flavio-bolsonaro-e-ciro-nogueira-na-delacao-de-vorcaro.html",
     "data": "2026-06-03",
     "trecho": "Caso Master: Flávio Bolsonaro e Ciro Nogueira na delação de Vorcaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/vorcaro-delacao-propina-ciro-nogueira/",
     "data": "2026-06-03",
     "trecho": "Vorcaro passou a narrar repasses como propina em troca da Emenda Master",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pgr-rejeita-2-proposta-de-delacao-de-vorcaro-pf",
   "tipo": "decisao_judicial",
   "tema": "master",
   "data": "2026-06-15",
   "status": "processo",
   "titulo": "PGR rejeita 2ª proposta de delação de Vorcaro; PF já havia rejeitado duas",
   "resumo": "A PGR comunicou ao STF em 15/6/2026 que rejeitou a segunda proposta de colaboração premiada de Vorcaro. A PF já havia rejeitado a primeira (20/5) e a segunda (10/6), considerando o material superficial e que omitia informações sobre aliados políticos. A defesa do banqueiro foi reorganizada (de 14 para 5 integrantes).",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/blogs/matheus-teixeira/politica/pgr-rejeita-delacao-premiada-de-daniel-vorcaro/",
     "data": "2026-06-15",
     "trecho": "PGR rejeita segunda proposta de delação premiada de Daniel Vorcaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-suspeita-que-vorcaro-aposta-em-vitoria-de-fla",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-06-15",
   "status": "investigacao",
   "titulo": "PF suspeita que Vorcaro aposta em vitória de Flávio para evitar processo",
   "resumo": "Após tentativas frustradas de delação, integrantes da PF e do STF suspeitam que Daniel Vorcaro estaria usando as negociações como manobra protelatória, apostando que uma eventual vitória de Flávio Bolsonaro em 2026 poderia blindá-lo. A delação não teria trazido fatos novos que justificassem acordo.",
   "observacao": "Suspeita de investigadores; sem acusação formal sobre intenção do banqueiro.",
   "pessoas": [
    "vorcaro",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "ICL Notícias",
     "url": "https://iclnoticias.com.br/fracasso-em-delacao-vorcaro-aposta-flavio/",
     "data": "2026-06-15",
     "trecho": "Após fracasso em delação, PF suspeita que Vorcaro aposta em vitória de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "pgr-rejeita-proposta-de-delacao-de-paulo-henriqu",
   "tipo": "processo",
   "tema": "master",
   "data": "2026-06-25",
   "status": "processo",
   "titulo": "PGR rejeita proposta de delação de Paulo Henrique Costa, ex-presidente do BRB",
   "resumo": "Em 25 de junho de 2026, o procurador-geral da República, Paulo Gonet, manifestou-se ao ministro André Mendonça, do STF, recusando a proposta de colaboração premiada da defesa de Paulo Henrique Costa, ex-presidente do Banco de Brasília (BRB). Gonet apontou 'reduzida utilidade e débil eficácia potencial', 'ausência de ineditismo' e falta de 'sinalização mínima do potencial de ressarcimento'. Costa está preso desde 16 de abril, na Papudinha, no âmbito da Operação Compliance Zero, que apura irregularidades envolvendo BRB e Banco Master, e é suspeito de ter recebido seis imóveis avaliados em cerca de R$ 146 milhões de Daniel Vorcaro, controlador do Master. A defesa afirmou que Costa 'nunca foi ouvido: nem no inquérito (salvo por uma acareação sem interrogatório prévio), nem pela PGR'.",
   "observacao": "RESSALVA DE PERTINÊNCIA: nenhuma das duas fontes verificadas menciona Flávio Bolsonaro. O item entra apenas pela frente BRB/Master; qualquer ligação com o senador é inferência do dossiê, não das fontes. Não há delação homologada — a proposta foi recusada, e recusa de delação não é juízo sobre culpa.",
   "pessoas": [
    "paulo_henrique",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/gonet-rejeita-proposta-de-delacao-de-ex-presidente-do-brb",
     "data": "2026-06-25",
     "trecho": "reduzida utilidade e débil eficácia potencial",
     "tier": "referencia"
    },
    {
     "veiculo": "Times Brasil (CNBC)",
     "url": "https://timesbrasil.com.br/brasil/pgr-recusa-acordo-de-delacao-de-paulo-henrique-costa-ex-presidente-do-brb/",
     "data": "2026-06-25",
     "trecho": "Paulo nunca foi ouvido: nem no inquérito, nem pela PGR, como conviria em caso de candidato à colaboração",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fachin-redistribui-a-andre-mendonca-por-prevenca",
   "tipo": "decisao_judicial",
   "tema": "master",
   "data": "2026-06-26",
   "status": "decisao_judicial",
   "titulo": "Fachin redistribui a André Mendonça, por prevenção, apuração sobre repasses do Banco Master ao filme 'Dark Horse'",
   "resumo": "Em 26/06/2026 o presidente do STF, Edson Fachin, determinou a redistribuição ao ministro André Mendonça da notícia-crime apresentada pelo líder do PT na Câmara, Lindbergh Farias, sobre repasses do banqueiro Daniel Vorcaro (Banco Master) ao filme 'Dark Horse'. Fachin escreveu que 'as circunstâncias justificam a redistribuição destes autos, por parâmetro de prevenção, ao Ministro André Mendonça'. A peça de Lindbergh aponta ligação entre o financiamento do filme, as apurações sobre o Banco Master e a relação do senador Flávio Bolsonaro com Vorcaro, citando valores de cerca de R$ 134 milhões a R$ 150 milhões (pela cotação média do Banco Central em 2025, ano das negociações). A decisão trata apenas de relatoria/competência e não analisou o mérito das acusações.",
   "observacao": "Decisão de competência interna. Cortei a afirmação de que a peça teria sido protocolada nos autos do inquérito de Moraes sobre a atuação de Eduardo Bolsonaro no exterior — a fonte não diz isso. Nesta data Flávio não foi formalmente incluído como investigado.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/120013/fachin-define-mendonca-como-relator-de-caso-sobre-filme-de-bolsonaro",
     "data": "2026-06-26",
     "trecho": "As circunstâncias justificam a redistribuição destes autos, por parâmetro de prevenção, ao Ministro André Mendonça",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "defesa-de-flavio-peticiona-a-fachin-para-tirar-d",
   "tipo": "processo",
   "tema": "master",
   "data": "2026-07-07",
   "status": "processo",
   "titulo": "Defesa de Flávio peticiona a Fachin para tirar de Flávio Dino a apuração sobre emendas ligadas ao 'Dark Horse'",
   "resumo": "Em 07/07/2026 os advogados de Flávio Bolsonaro — Tracy Reinaldet, Matteus Macedo e Leonardo Castegnaro — peticionaram ao presidente do STF, Edson Fachin, pedindo que André Mendonça assumisse a investigação sobre suspeita de envio de emendas parlamentares à produtora do filme 'Dark Horse', então no gabinete do ministro Flávio Dino. A petição sustenta o pedido 'em homenagem à coerência e à efetividade jurisdicional, assim como a fim de evitar decisões conflitantes e medidas contraditórias'. Trata-se de requerimento da defesa, não de decisão judicial.",
   "observacao": "É PETIÇÃO da defesa, não decisão. Cortei a afirmação de que Mendonça aguardava parecer da PGR para decidir sobre abrir inquérito — a fonte não sustenta essa frase nessa data.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil (blog Teo Cury)",
     "url": "https://www.cnnbrasil.com.br/blogs/teo-cury/politica/defesa-de-flavio-aciona-fachin-e-tenta-tirar-caso-dark-horse-de-dino/",
     "data": "2026-07-07",
     "trecho": "em homenagem à coerência e à efetividade jurisdicional, assim como a fim de evitar decisões conflitantes e medidas contraditórias",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "10-fase-da-compliance-zero-mira-publicitario-apo",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-07-09",
   "status": "investigacao",
   "titulo": "10ª fase da Compliance Zero mira publicitário apontado como elo entre Flávio Bolsonaro e Vorcaro",
   "resumo": "Em 9 de julho de 2026 a PF deflagrou a 10ª fase da Operação Compliance Zero, que apura suspeitas de fraudes financeiras ligadas ao Banco Master, com busca e apreensão contra o publicitário Thiago Miranda, autorizada pelo ministro André Mendonça. Nesta etapa os investigadores analisam possível ação coordenada em redes sociais para comprometer a credibilidade do Banco Central. Segundo mensagens obtidas pela investigação, Miranda foi o responsável pela aproximação entre Flávio Bolsonaro e Daniel Vorcaro; uma delas registra 'Confirmei com o Flávio Bolsonaro. Quarta dia 11 às 17:30 aqui na sua casa de Brasília'. Documentos citados indicam R$ 134 milhões comprometidos por Vorcaro e cerca de R$ 62 milhões efetivamente repassados. Medidas cautelares não representam condenação e os investigados mantêm o direito de defesa.",
   "observacao": "Flávio Bolsonaro não é alvo desta fase. Cortei do resumo original: número de mandados ('dois'), a atribuição da agência 'MiThi' a Miranda, a data de dezembro/2024 para o primeiro encontro e as menções a intimidação de jornalistas e monitoramento irregular — nenhum desses pontos aparece nas fontes verificadas.",
   "pessoas": [
    "thiago-miranda",
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/operacao-contra-publicitario-de-vorcaro-deve-aprofundar-investigacao-sobre-dark-horse/",
     "data": "2026-07-09",
     "trecho": "As mensagens mostraram que Thiago Miranda foi o responsável pela aproximação de Flávio e Vorcaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Transmissão Política",
     "url": "https://transmissaopolitica.com.br/politica-nacional/2026/07/10/banco-master-operacao-compliance-zero-10-fase/",
     "data": "2026-07-10",
     "trecho": "a 10ª fase da Operação Compliance Zero, que apura suspeitas de fraudes financeiras relacionadas ao Banco Master",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "thiago-miranda-entrega-passaporte-a-pf-por-ordem",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-07-13",
   "status": "fato",
   "titulo": "Thiago Miranda entrega passaporte à PF por ordem de Mendonça e anuncia fechamento da agência",
   "resumo": "O publicitário Thiago Miranda entregou o passaporte à Polícia Federal em 13 de julho de 2026, cumprindo determinação do ministro André Mendonça; a PF havia feito o pedido no domingo anterior, após identificar indícios de risco de fuga. No mesmo período Miranda anunciou nas redes sociais o encerramento da agência: 'Estou cansado. Foram dez anos ininterruptos, vivendo a agência 24 horas por dia'. Segundo a reportagem, as mensagens dele com o ex-banqueiro Daniel Vorcaro tratavam da cobrança de R$ 62 milhões em investimentos no filme sobre Jair Bolsonaro. Flávio Bolsonaro afirma que a relação com Miranda era estritamente profissional.",
   "observacao": "Medida cautelar (retenção de passaporte), não prisão nem condenação. Cortei os R$ 8 milhões de 'gestão de crise' e a gestão de seleção de influenciadores: não constam da fonte verificada.",
   "pessoas": [
    "thiago-miranda",
    "vorcaro",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/master-thiago-miranda-entrega-passaporte-a-pf-e-anuncia-que-fechou-agencia/",
     "data": "2026-07-13",
     "trecho": "as mensagens com o ex-banqueiro tratavam da cobrança de R$ 62 milhões em investimentos no filme",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-autoriza-inquerito-sobre-o-financiament",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-07-22",
   "status": "investigacao",
   "titulo": "Mendonça autoriza inquérito sobre o financiamento de 'Dark Horse'; Flávio Bolsonaro vira investigado",
   "resumo": "O ministro André Mendonça, do STF, autorizou a abertura de inquérito na Polícia Federal para apurar o destino das verbas que financiaram o filme 'Dark Horse', um dia após parecer favorável da PGR enviado em 21 de julho de 2026. A autorização foi necessária porque Flávio Bolsonaro tem foro privilegiado como senador: ele passou à condição de investigado por ter negociado o patrocínio com o banqueiro Daniel Vorcaro. Não é denunciado nem réu. A apuração alcança também Eduardo Bolsonaro, Daniel Vorcaro e o deputado Mário Frias, e abrange R$ 134 milhões negociados, R$ 61 milhões efetivamente recebidos e R$ 2 milhões enviados por Frias via emenda parlamentar. O pedido de investigação partiu do deputado Lindbergh Farias (PT-RJ). O coordenador da pré-campanha, senador Rogério Marinho, minimizou: 'Tranquilo. Vai ficar demonstrado que não há ilícito'.",
   "observacao": "Divergência de data entre as fontes: a Metrópoles registra o parecer da PGR em 21/07 e a assinatura da decisão em 22/07; o Brasil de Fato dá a autorização como de 23/07. Status literal: INVESTIGADO em inquérito — não há denúncia da PGR contra Flávio Bolsonaro até 09/09/2026. Cortei o contrato de R$ 108 milhões com a Prefeitura de São Paulo e a fala anônima sobre 'caixa de Pandora': não constam das fontes verificadas.",
   "pessoas": [
    "flavio",
    "eduardo",
    "vorcaro",
    "mario-frias",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/igor-gadelha/mendonca-autorizou-investigacao-de-flavio-um-dia-apos-parecer-da-pgr",
     "data": "2026-07-23",
     "trecho": "Flávio virou oficialmente investigado por ter sido o responsável por negociar o patrocínio com o banqueiro",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/07/23/mendonca-autoriza-investigacao-da-pf-sobre-financiamento-de-cinebiografia-de-jair-bolsonaro/",
     "data": "2026-07-23",
     "trecho": "autorizou nesta quinta-feira (23) que a Polícia Federal abra um inquérito para investigar o destino das verbas",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/caso-master-volta-a-gerar-preocupacao-nos-aliados-de-flavio-bolsonaro",
     "data": "2026-07-24",
     "trecho": "Tranquilo. Vai ficar demonstrado que não há ilícito",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "deputados-do-pt-pedem-a-pf-apuracao-sobre-atuaca",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-07-30",
   "status": "suspeita",
   "titulo": "Deputados do PT pedem à PF apuração sobre atuação de Flávio Bolsonaro ligada ao Banco Master",
   "resumo": "Em 30 de julho de 2026, os deputados Lindbergh Farias (PT-RJ) e Rogério Correia (PT-MG) apresentaram representação à Polícia Federal pedindo que se apure se a atuação legislativa do senador Flávio Bolsonaro beneficiou o Banco Master. O pedido cita a participação dele na aprovação do artigo 58 da Lei Geral de Licenciamento Ambiental, que reduziu a responsabilidade de instituições financeiras por danos ambientais, a Emenda 157 apresentada durante a tramitação de medida provisória e o voto pela derrubada do veto presidencial ao dispositivo, em 27 de novembro de 2025. A representação vincula essa atuação às relações financeiras e pessoais do senador com o banqueiro Daniel Vorcaro no mesmo período. A reportagem do Brasil de Fato registra que 'não há qualquer prova de que a atuação parlamentar tenha ocorrido para beneficiar Daniel Vorcaro ou o Banco Master'. A assessoria do senador não respondeu a nenhum dos dois veículos.",
   "observacao": "Status corrigido para suspeita: trata-se de PEDIDO de apuração feito por deputados adversários políticos. Não há inquérito instaurado contra Flávio Bolsonaro por esses fatos, ele não é investigado formalmente, indiciado, denunciado nem réu, e a própria reportagem afirma que não há prova de nexo. Foram retiradas desta versão a menção ao ministro André Mendonça, o pedido de perícia em metadados e a citação literal a 'corrupção passiva e lavagem de dinheiro', que não constam das duas reportagens abertas.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/pt-pede-pf-investigar-flavio-bolsonaro-favorecimento-master/",
     "data": "2026-07-30",
     "trecho": "reduziu a responsabilidade de instituições financeiras por danos ambientais",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/07/30/flavio-bolsonaro-atuou-por-regra-que-favorecia-setor-onde-master-investia/",
     "data": "2026-07-30",
     "trecho": "Não há qualquer prova de que a atuação parlamentar tenha ocorrido para beneficiar Daniel Vorcaro ou o Banco Master",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "ancine-autua-produtora-de-dark-horse-por-filmage",
   "tipo": "processo",
   "tema": "master",
   "data": "2026-08-07",
   "status": "processo",
   "titulo": "Ancine autua produtora de 'Dark Horse' por filmagem irregular e depois concede registro à obra",
   "resumo": "A Ancine lavrou em 28 de julho de 2026 auto de infração contra a Go Up Entertainment por ter filmado no Brasil parte de 'Dark Horse', produção estrangeira sobre a trajetória política de Jair Bolsonaro, sem fazer a comunicação prévia exigida pela legislação. A penalidade prevista vai de R$ 2 mil a R$ 100 mil e não impede automaticamente o lançamento. Em 7 de agosto a mesma agência emitiu o Registro de Obra Estrangeira (ROE); ainda são necessários o Certificado de Registro de Título e a classificação indicativa do Ministério da Justiça para exibição comercial. Em reportagem de 22 de junho, a produtora e o deputado Mário Frias negaram ter recebido dinheiro direto de Vorcaro, embora Karina Ferreira da Gama tenha admitido em entrevista que 90% da verba do filme veio do fundo ligado ao banqueiro.",
   "observacao": "Processo administrativo em curso na Ancine, sem decisão final nem multa aplicada até 09/09/2026. Flávio Bolsonaro não é parte nesse processo. Este item absorveu o item que tratava da resistência das redes de cinema, cuja parte sobre a Ancine era duplicata e cuja parte sobre exibidores não nomeava nenhuma rede.",
   "pessoas": [
    "karina-ferreira-da-gama",
    "mario-frias",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Pipoca Moderna",
     "url": "https://pipocamoderna.com.br/2026/08/dark-horse-autuacao-ancine/",
     "data": "2026-08-05",
     "trecho": "O auto de infração, emitido em 28 de julho, pode resultar em multa de R$ 2 mil a R$ 100 mil",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-cultura/ancine-concede-registro-a-dark-horse-filme-sobre-bolsonaro/",
     "data": "2026-08-25",
     "trecho": "Segundo a lista de registros de Obras Não Publicitárias [...] o ROE foi emitido em 7 de agosto",
     "tier": "referencia"
    },
    {
     "veiculo": "Band",
     "url": "https://www.band.com.br/noticias/dark-horse-cadeias-de-cinemas-nao-querem-exibir-202606221728",
     "data": "2026-06-22",
     "trecho": "A produtora e o deputado Mário Frias negam ter recebido dinheiro direto de Vorcaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "fachin-rejeita-pedido-de-flavio-para-declarar-mo",
   "tipo": "decisao_judicial",
   "tema": "master",
   "data": "2026-08-07",
   "status": "decisao_judicial",
   "titulo": "Fachin rejeita pedido de Flávio para declarar Moraes suspeito em ação do caso 'Dark Horse'",
   "resumo": "Em 07/08/2026 o presidente do STF, Edson Fachin, rejeitou pedido apresentado pelo senador Flávio Bolsonaro (PL) para que o ministro Alexandre de Moraes fosse declarado suspeito de atuar em ação ligada ao caso 'Dark Horse'. Fachin fundamentou a decisão no fato de que 'a ação apontada por Flávio para questionar a atuação de Moraes não está mais sob responsabilidade do ministro': o processo, originado de iniciativa do deputado Lindbergh Farias (PT-RJ), já havia passado à relatoria de André Mendonça. A rejeição, portanto, se deu por perda de objeto decorrente da mudança de relator, não por julgamento do mérito da alegação de suspeição.",
   "observacao": "Lastro reforçado: o Brasil 247 é a única fonte que abri diretamente, mas a checagem em agregador confirma cobertura do mesmo fato e da mesma data por Estadão e Revista Fórum — recomenda-se substituir/acrescentar a fonte do Estadão antes de publicar. Cortei detalhes não confirmados por esta fonte: data de protocolo (01/06/2026), mensagens de 17/11/2025 e contrato do Master com o escritório de Viviane Barci de Moraes.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/fachin-nega-suspeicao-de-moraes-pedida-por-flavio-bolsonaro-em-acoes-do-caso-dark-horse/",
     "data": "2026-08-07",
     "trecho": "a ação apontada por Flávio para questionar a atuação de Moraes não está mais sob responsabilidade do ministro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "relatorio-do-coaf-revelado-pela-piaui-aponta-nov",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-01",
   "status": "investigacao",
   "titulo": "Relatório do Coaf revelado pela piauí aponta novos repasses de Vorcaro ao filme sobre Bolsonaro",
   "resumo": "Reportagem da revista piauí, com base em relatório do Coaf, apontou repasses adicionais do ex-banqueiro Daniel Vorcaro ao filme \"Dark Horse\", sobre Jair Bolsonaro: um pagamento de cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia) ao Havengate Development Fund em 16/09/2025, oito dias depois de Flávio cobrar parcelas atrasadas, e nova cobrança em 22/10/2025 feita pelo publicitário Thiago Miranda (\"Consegue liberar as parcelas do filme?\"); segundo Vorcaro, houve ainda outro repasse de mesmo valor, não confirmado nos documentos. Se ele tiver sido feito, o total desembolsado chegaria a aproximadamente R$ 72 milhões, segundo a piauí. Os dados contradizem a versão dada por Flávio à GloboNews, de que o último pagamento do banqueiro teria ocorrido em maio de 2025. Procurada, a assessoria de Flávio respondeu \"Isso não é com a gente\", atribuindo o assunto à produtora do filme. Em 20/08/2026, Flávio já havia dito que o caso é \"página virada\", que \"já aconteceu\" e que viu a prestação de contas e \"estava tudo certinho\".",
   "observacao": "Flávio não é investigado formalmente, denunciado nem réu neste caso segundo as fontes consultadas, e nega irregularidade. Cortadas por falta de lastro: a comparação com os valores antes reconhecidos e a afirmação de que a Polícia Federal apura se os recursos foram destinados ao filme. Eduardo Bolsonaro foi removido da lista de pessoas por não constar das fontes.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair",
    "thiago-miranda"
   ],
   "fontes": [
    {
     "veiculo": "Terra",
     "url": "https://www.terra.com.br/noticias/eleicoes/revista-revela-novos-pagamentos-de-vorcaro-a-filme-sobre-bolsonaro-nao-e-com-a-gente-rebate-flavio,bfb0793ef25cc0a250ab8fb384f14c4e3wnhofx8.html",
     "data": "2026-09-01",
     "trecho": "Isso não é com a gente",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/08/20/sem-explicar-dinheiro-de-vorcaro-e-do-banco-master-flavio-bolsonaro-diz-que-dark-horse-e-pagina-virada/",
     "data": "2026-08-20",
     "trecho": "Já aconteceu; estava tudo certinho",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pt-protocola-representacao-no-conselho-de-etica",
   "tipo": "denuncia",
   "tema": "master",
   "data": "2026-09-02",
   "status": "denuncia",
   "titulo": "PT protocola representação no Conselho de Ética e pede a cassação de Flávio Bolsonaro por caso Dark Horse",
   "resumo": "Em 2 de setembro de 2026, o líder do PT no Senado, Camilo Santana (CE), protocolou representação no Conselho de Ética pedindo a perda do mandato de Flávio Bolsonaro por quebra de decoro parlamentar. O partido aponta contradições entre a versão do senador e os registros do Coaf sobre o financiamento do filme 'Dark Horse', cinebiografia de Jair Bolsonaro: segundo o Poder360, Daniel Vorcaro fez repasses ao projeto em valor superior ao admitido por Flávio, incluindo transferência de cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia) em 16 de setembro de 2025 ao fundo Havengate. A representação cita ainda áudio de 8 de setembro de 2025 em que o senador cobra pagamentos do banqueiro e repasses de cerca de R$ 61 milhões entre fevereiro e maio de 2025. Nenhum processo disciplinar foi instaurado: o Conselho de Ética está paralisado desde julho de 2024, com pelo menos 19 representações por quebra de decoro paradas. A assessoria do senador não respondeu a nenhuma das reportagens; em vídeo nas redes sociais em maio de 2026, Flávio confirmou o pedido de ajuda financeira a Vorcaro, mas negou irregularidades.",
   "observacao": "É representação partidária protocolada, NÃO denúncia do Ministério Público nem processo instaurado: o senador não é investigado formalmente por esse fato, nem indiciado, denunciado ou réu, e o Conselho de Ética não delibera desde julho de 2024. Retirada a afirmação de que Flávio teria dito 'em entrevista' que o último repasse foi em maio de 2025 — as fontes abertas registram apenas que os repasses superam o valor admitido por ele. A negativa de irregularidade é de maio de 2026, anterior à janela, incluída como contraditório porque a assessoria não respondeu às reportagens de setembro.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/pt-aciona-conselho-de-etica-do-senado-contra-flavio-bolsonaro/",
     "data": "2026-09-03",
     "trecho": "Vorcaro fez repasses para o projeto em valor superior ao admitido por Flávio",
     "tier": "referencia"
    },
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/pt-pede-cassacao-de-flavio-bolsonaro-no-conselho-de-etica-do-senado-por-financiamento-do-filme-dark-horse-com-pagamentos-de-vorcaro/",
     "data": "2026-09-03",
     "trecho": "mensagem de áudio, datada de 8 de setembro de 2025, na qual o senador cobra os pagamentos do banqueiro",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/por-que-as-denuncias-contra-davi-alcolumbre-e-outros-senadores-estao-paradas/",
     "data": "2026-08-04",
     "trecho": "O Conselho de Ética do Senado está paralisado desde julho de 2024",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "repasse-de-us-1-6-milhao-ao-havengate-em-setembr",
   "tipo": "financeiro",
   "tema": "master",
   "data": "2026-09-02",
   "status": "investigacao",
   "titulo": "Repasse de cerca de R$ 8,8 milhões ao Havengate em setembro de 2025 contradiz versão de Flávio sobre fim dos pagamentos",
   "resumo": "Análise publicada pela Agência Pública em 2 de setembro de 2026, assinada por Thiago Domenici, retoma reportagem da revista piauí segundo a qual Daniel Vorcaro enviou mais cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia) ao Havengate Development Fund em 16 de setembro de 2025, dois meses antes de sua prisão. O dado contraria a versão dada por Flávio Bolsonaro, que afirmou que 'o último pagamento que ele fez foi em maio de 2025' e que o fundo 'foi fechado, isolado'. O mesmo texto registra outros elementos do caso Master no período: contrato de R$ 131 milhões entre o escritório de Viviane Barci de Moraes e o banco, de R$ 3,6 milhões mensais por três anos, assinado em 23 de janeiro de 2024; e um encontro de duas horas entre o ministro André Mendonça e Vorcaro em 14 de março de 2025, em São Paulo, no Iter, instituto fundado pelo próprio ministro. Não há, até 09/09/2026, manifestação da defesa de Flávio reconciliando as datas.",
   "observacao": "O texto da Agência Pública é assinado como análise e credita a revelação do repasse à revista piauí. A contradição é entre uma declaração pública do senador e documentos citados pela imprensa; não equivale, por si só, a imputação de crime. O valor em reais é a conversão, pela cotação de venda do Banco Central (PTAX) de 16/09/2025, do valor que consta da fonte. Retirei a atribuição da reportagem a Breno Pires, não confirmada na página.",
   "pessoas": [
    "vorcaro",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/09/analise-as-revelacoes-sobre-master-vorcaro-moraes-e-mendonca/",
     "data": "2026-09-02",
     "trecho": "Em 16 de setembro de 2025, Vorcaro mandou mais 1,6 milhão de dólares ao Havengate Development Fund",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pgr-fecha-delacao-com-operador-de-repasses-ao-da",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-03",
   "status": "investigacao",
   "titulo": "PGR fecha delação com operador de repasses ao 'Dark Horse'; acordo vai a Mendonça e não está homologado",
   "resumo": "Em 03/09/2026 a Procuradoria-Geral da República fechou acordo de colaboração premiada com o empresário Antonio Carlos Freixo Júnior, o 'Mineiro', dono da Entre Investimentos e Participações, apontado como operador de repasses ligados ao financiamento do filme 'Dark Horse'. O acordo foi enviado ao ministro André Mendonça, relator no STF, a quem cabe decidir se homologa a colaboração — ou seja, NÃO está homologado. As reportagens registram que 'as parcelas pagas por Vorcaro para a produção do Dark Horse foram negociadas pelo senador Flávio Bolsonaro' e que Flávio negociou com Vorcaro financiamento de cerca de R$ 134 milhões. As autoridades investigam o destino dos recursos e suspeitam que parte possa ter beneficiado Eduardo Bolsonaro. O senador afirmou ter buscado patrocínio privado para um filme sobre o próprio pai, sem dinheiro público.",
   "observacao": "Delação ASSINADA não é prova nem acusação: falta homologação por Mendonça. Nenhuma das duas fontes afirma que Freixo tenha imputado crime a Flávio; a CNN registra explicitamente que não se alega que Flávio tenha recebido recursos indevidos, apenas que negociou os pagamentos.",
   "pessoas": [
    "antonio-carlos-freixo-junior-mineiro",
    "vorcaro",
    "flavio",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/dark-horse-pgr-fecha-delacao-com-empresario-ligado-a-fundo-nos-eua/",
     "data": "2026-09-03",
     "trecho": "As parcelas pagas por Vorcaro para a produção do 'Dark Horse' foram negociadas pelo senador Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/121922/dark-horse-pgr-fecha-delacao-com-empresario-ligado-a-vorcaro",
     "data": "2026-09-03",
     "trecho": "O senador afirmou ter buscado patrocínio privado para um filme sobre o próprio pai, sem dinheiro público",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-homologa-delacao-de-mineiro-us-12-3-mi",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-09",
   "status": "investigacao",
   "titulo": "Mendonça homologa delação de 'Mineiro': cerca de R$ 69 mi em 7 remessas ao Havengate; pedido inicial seria de R$ 134 mi",
   "resumo": "Em 9/9 o ministro André Mendonça homologou a colaboração premiada de Antonio Carlos Freixo Júnior ('Mineiro'), dono da Entre Investimentos, que a mando de Daniel Vorcaro fez os repasses ao fundo Havengate Development (EUA), ligado ao filme 'Dark Horse'. Segundo o delator, foram sete transferências em 2025 somando cerca de R$ 69 milhões pela cotação da época, 51,3% do total prometido; Vorcaro o procurou por WhatsApp entre o fim de 2024 e o início de 2025, e o restante não foi pago por causa da prisão do ex-banqueiro em nov/2025. Conversas do celular de Vorcaro atribuem a Flávio Bolsonaro o pedido do valor total. Flávio sustenta que os recursos foram integralmente para o filme. Segundo o Poder360, a campanha avalia que 'a colaboração de Mineiro não trouxe, por enquanto, um elemento inteiramente novo que altere a avaliação já feita sobre as transferências' e que tudo passou 'pelo sistema bancário, com utilização do código Swift e sob supervisão do Coaf'.",
   "observacao": "Delação homologada não equivale a prova; Flávio segue como investigado, não denunciado. Cortado 'mais de dez subscrições entre jan/2025 e jan/2026' (nenhuma fonte sustenta). O total prometido corresponde aos R$ 134 mi do áudio já conhecido.",
   "pessoas": [
    "flavio",
    "antonio-carlos-freixo-junior-mineiro",
    "vorcaro",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "A Crítica (Campo Grande)",
     "url": "https://acritica.net/justica/delator-eleva-a-us-12-3-milhoes-dinheiro-enviado-a-fundo-do-filme-sobre-bolsonaro/",
     "data": "2026-09-10",
     "trecho": "média de US$ 1,76 milhão por operação",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/informe-jb/2026/09/1060868-delacao-aponta-uss-24-milhoes-prometidos-para-fundo-ligado-a-filme-sobre-bolsonaro.html",
     "data": "2026-09-10",
     "trecho": "entrou em contato com ele por WhatsApp no fim de 2024 e no início de 2025",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/caso-dark-horse-delacao-de-mineiro-nao-assusta-a-campanha-de-flavio/",
     "data": "2026-09-09",
     "trecho": "a colaboração de Mineiro não trouxe, por enquanto, um elemento inteiramente novo que altere a avaliação já feita sobre as transferências",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-homologa-delacao-de-operador-que-fez-se",
   "tipo": "decisao_judicial",
   "tema": "master",
   "data": "2026-09-09",
   "status": "decisao_judicial",
   "titulo": "Mendonça homologa delação de operador que fez sete repasses ao fundo ligado ao filme sobre Bolsonaro",
   "resumo": "O ministro André Mendonça, do STF, homologou em 9 de setembro de 2026 o acordo de colaboração premiada de Antonio Carlos Freixo Júnior, o 'Mineiro', operador do mercado financeiro, fechado com a PGR em 8 de agosto. Ele confirmou sete transferências ao Havengate Development Fund, nos Estados Unidos, somando cerca de R$ 69 milhões pela cotação da época, feitas em 2025 a pedido de Daniel Vorcaro. Segundo a delação, o dinheiro foi pedido pelo senador e candidato à Presidência Flávio Bolsonaro e se destinava ao filme 'Dark Horse'. O fundo é administrado pelo advogado de imigração Paulo Calixto, próximo do ex-deputado Eduardo Bolsonaro, que nega envolvimento: 'Não exerci qualquer posição de gestão ou emprego no fundo, apenas cedi meus direitos de imagem'. Flávio sustenta que os recursos foram destinados integralmente à produção do filme. A homologação valida o acordo como meio de prova; não implica juízo sobre a veracidade do relato nem sobre culpa de terceiros.",
   "observacao": "Relato de colaborador premiado, que por lei não basta isoladamente para condenação e precisa ser corroborado. Nem Flávio nem Eduardo Bolsonaro foram denunciados. Fundi aqui o item separado de 08/09 sobre o conteúdo da delação, por tratar do mesmo fato. As fontes divergem sobre o período dos repasses (Brasil de Fato: janeiro a setembro de 2025; Diário Carioca: fevereiro a setembro), por isso o resumo diz apenas '2025'. Cortei 'cerca de quatro meses de negociação' e a movimentação de R$ 1,3 bilhão entre 2020 e 2025, não confirmadas nas fontes verificadas.",
   "pessoas": [
    "antonio-carlos-freixo-junior-mineiro",
    "vorcaro",
    "flavio",
    "eduardo",
    "paulo-calixto"
   ],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/09/09/mendonca-aceita-delacao-de-empresario-que-enviou-r-60-milhoes-a-fundo-ligado-a-eduardo-bolsonaro/",
     "data": "2026-09-09",
     "trecho": "O dinheiro foi pedido pelo senador e candidato a presidente Flávio Bolsonaro (PL)",
     "tier": "referencia"
    },
    {
     "veiculo": "Mais Minas",
     "url": "https://maisminas.com.br/brasil/mendonca-homologa-delacao-sobre-financiamento-do-filme-sobre-bolsonaro/",
     "data": "2026-09-09",
     "trecho": "homologou nesta quarta-feira (9) a delação do doleiro Antônio Carlos Freixo Júnior",
     "tier": "agregador"
    },
    {
     "veiculo": "Diário Carioca",
     "url": "https://www.diariocarioca.com/2026/09/08/politica/corrupcao-investigacao/delator-confirma-transferencias-de-us-123-milhoes-feitas-por-vorcaro-ao-fundo-ligado-a-eduardo-bolsonaro",
     "data": "2026-09-08",
     "trecho": "sete transferências para o fundo Havengate que somaram US$ 12,3 milhões",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "operacao-make-up-dino-autoriza-49-mandados-contr",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-10",
   "status": "investigacao",
   "titulo": "Operação Make Up: Dino autoriza 49 mandados contra Frias e produtora do Dark Horse; defesa de Flávio tentara tirar o caso de Dino",
   "resumo": "Em 10/9 (quinta) a PF deflagrou a Operação Make Up, com 49 mandados de busca e apreensão (SP, RJ, CE e DF) autorizados por Flávio Dino, contra o deputado Mário Frias (PL-SP) e a produtora Karina Gama, ligada à GoUp, ao Instituto Conhecer Brasil e à Academia Nacional de Cultura, por suspeita de desvio de emendas parlamentares (peculato, falsidade documental, lavagem, organização criminosa e crimes licitatórios). Na decisão, assinada em 3/9, Dino viu 'fortes indícios de uma única organização criminosa, estruturada para captar, disseminar e ocultar recursos provenientes de verbas públicas', ligando a frente das emendas à do dinheiro de Vorcaro apurada por Mendonça. Segundo o Painel Político, a defesa de Flávio apresentou quatro pedidos entre 13 e 29 de julho para transferir o procedimento de Dino a Mendonça, alegando 'manipulação das regras de competência, a fim de criar uma prevenção artificial'; todos foram rejeitados. Flávio não é alvo da operação. As assessorias de Frias e Karina Gama não responderam.",
   "observacao": "Mundo Positivo e Painel Político são fontes secundárias; data de 10/9 (quinta) confirmada por Poder360 e Painel Político. Revista Fórum datou a operação em 9/9 — divergência não adotada. Data da decisão (3/9) vem só da Fórum.",
   "pessoas": [
    "flavio",
    "mario-frias"
   ],
   "fontes": [
    {
     "veiculo": "Mundo Positivo",
     "url": "https://www.mundopositivo.com.br/noticias/brasil/mario-frias-e-produtora-de-dark-horse-sao-alvos-de-operacao-da-pf/",
     "data": "2026-09-11",
     "trecho": "existência de organização criminosa que usou recursos públicos de maneira irregular",
     "tier": "agregador"
    },
    {
     "veiculo": "Painel Político",
     "url": "https://painelpolitico.com/defesa-de-flavio-tentou-4-vezes-tirar-dark-horse-de-dino-e-dar-a-mendonca",
     "data": "2026-09-12",
     "trecho": "verdadeira manipulação das regras de competência, a fim de criar uma prevenção artificial",
     "tier": "agregador"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/pf-elo-mario-frias-karina-gama-flavio-bolsonaro-master",
     "data": "2026-09-10",
     "trecho": "fortes indícios de uma única organização criminosa, estruturada para captar, disseminar e ocultar recursos provenientes de verbas públicas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "sigilo-levantado-flavio-e-investigado-desde-julh",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-11",
   "status": "investigacao",
   "titulo": "Sigilo levantado: Flávio é investigado desde julho por corrupção, lavagem e evasão; PF o aponta como 'interlocutor direto' de Vorcaro",
   "resumo": "Na madrugada de 11/9, após determinação do presidente do STF, Edson Fachin, de envio em 24h dos procedimentos ligados à Pet 15.556/Operação Compliance Zero, André Mendonça levantou o sigilo de parte dos autos do caso Master, incluindo a Pet 16.369 (Dark Horse). Os documentos mostram que a PF pediu em 8/7 a abertura de apuração contra Flávio Bolsonaro, a PGR opinou favoravelmente em 21/7 ('indícios consistentes'), Mendonça autorizou em 22/7 e o inquérito foi instaurado em 23/7, por 'lavagem de dinheiro, evasão de divisas, corrupção e outros delitos correlatos' no repasse de cerca de R$ 61 milhões de Vorcaro ao filme. Relatório da PF, com base no celular de Vorcaro e em dados do Coaf, descreve o senador como 'interlocutor direto de Vorcaro para viabilizar aportes financeiros', com cobranças reiteradas: áudio de 8/9/2025 cobrando 'repasses atrasados' e citando risco de calote com Jim Caviezel, e ligação em 16/9/2025, dia da remessa de cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia) da Entre Investimentos ao Havengate. Os autos trazem projeção de bilheteria de até R$ 358 milhões. A defesa diz que a captação 'teve caráter estritamente privado', que não houve dinheiro público, que Flávio não recebeu qualquer valor diretamente e que não ofereceu vantagens ao banqueiro; ele não nega a autenticidade dos áudios.",
   "observacao": "Status literal: INVESTIGADO (inquérito instaurado em julho; sigilo levantado em 11/9). Não há denúncia. ICL registrou, em versão anterior no mesmo dia, que o inquérito Dark Horse seguia sigiloso; Diário Carioca relata que Mendonça ampliou a abertura em 11/9 incluindo a Pet 16.369. ICL e Diário Carioca são fontes de menor porte.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "ICL Notícias",
     "url": "https://iclnoticias.com.br/pf-investiga-flavio-bolsonaro-esquema-vorcaro/",
     "data": "2026-09-11",
     "trecho": "corrupção, lavagem de dinheiro e evasão de divisas",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/justica/2026/09/1060884-mendonca-incluiu-flavio-bolsonaro-como-investigado-no-caso-dark-horse.html",
     "data": "2026-09-11",
     "trecho": "lavagem de dinheiro, evasão de divisas, corrupção e outros delitos correlatos",
     "tier": "agregador"
    },
    {
     "veiculo": "Times Brasil / CNBC",
     "url": "https://timesbrasil.com.br/brasil/politica/relatorio-pf-linha-tempo-flavio-bolsonaro-vorcaro/",
     "data": "2026-09-12",
     "trecho": "interlocutor direto de Vorcaro para viabilizar aportes financeiros",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-ligacao-flaviovorcaro-em-16-9-2025-coincide-c",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-11",
   "status": "investigacao",
   "titulo": "PF: ligação Flávio–Vorcaro em 16/9/2025 coincide com última remessa, de cerca de R$ 8,8 mi, ao fundo do 'Dark Horse'",
   "resumo": "Relatório da PF, com sigilo levantado pelo relator André Mendonça em 11/9 (após determinação de publicidade do presidente Edson Fachin, segundo a Fórum), registra ligação de 42 segundos entre Flávio e Daniel Vorcaro em 16/9/2025, mesmo dia da última transferência, de cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia), da Entre Investimentos ao Havengate Development Fund, fundo nos EUA ligado ao filme 'Dark Horse'. As remessas identificadas somam cerca de R$ 69 milhões pela cotação da época, pouco mais da metade do total combinado em 14 parcelas; a PF aponta orientação de Eduardo (21/3/2025) sobre envio de recursos aos EUA e áudio de Flávio em 8/9/2025 cobrando parcelas atrasadas ('Imagina a gente dando calote num Jim Caviezel'). O parecer fala em 'indícios consistentes' de corrupção passiva e ativa, evasão de divisas e lavagem. Status: Flávio é investigado, não denunciado. Defesa: sustenta que se tratou de captação privada de patrocínio para a obra audiovisual, nega recebimento direto de valores e irregularidades ou uso de verba pública.",
   "observacao": "A coincidência de datas não prova, por si, que Flávio ordenou o pagamento. Revista Fórum e Brasil de Fato têm linha editorial à esquerda; CNN, O Povo e GPS Brasília confirmam os dados centrais.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "eduardo",
    "thiago-miranda"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-vorcaro-ultima-parcela-de-us-16-mi-eduardo",
     "data": "2026-09-11",
     "trecho": "há registro de ligação entre DANIEL VORCARO e FLÁVIO BOLSONARO, coincidindo temporalmente com a última remessa",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/",
     "data": "2026-09-12",
     "trecho": "seria muito ruim não realizar o pagamento para o ator Jim Caviezel ou para Cyrus Nowrasteh",
     "tier": "referencia"
    },
    {
     "veiculo": "GPS Brasília",
     "url": "https://gpsbrasilia.com.br/pf-revela-cronologia-de-contatos-entre-flavio-bolsonaro-e-vorcaro-para-financiar-filme-dark-horse/",
     "data": "2026-09-12",
     "trecho": "relação privada de captação de patrocínio",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-retira-sigilo-do-inquerito-dark-horse-p",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-11",
   "status": "investigacao",
   "titulo": "Mendonça retira sigilo do inquérito Dark Horse; PF registra 'interlocução direta' e 'reiteradas cobranças' de Flávio a Vorcaro",
   "resumo": "Em 11/9/2026, após pressão do presidente do STF, Edson Fachin, dos ministros Alexandre de Moraes e Cristiano Zanin e da PGR, André Mendonça levantou o sigilo de dezenas de peças ligadas ao caso Master (18 processos e 20 procedimentos, segundo o Brasil de Fato), entre elas o inquérito sobre o financiamento do filme Dark Horse, aberto em julho a pedido da PF e autorizado pelo próprio Mendonça. O relatório da PF registra 'interlocução direta' entre Flávio Bolsonaro e Daniel Vorcaro a partir de agosto de 2025 e 'reiteradas cobranças' do senador para liberação dos recursos, além de uma ligação entre os dois em 16/9/2025, dia da última remessa, de cerca de R$ 8,8 milhões (conversão pela cotação do Banco Central do dia), ao Havengate. Parecer do PGR Paulo Gonet (21/7/2026) aponta 'indícios consistentes' de corrupção passiva e ativa, evasão de divisas e lavagem de capitais e afirma que Eduardo Bolsonaro 'orientou a gestão dos recursos em solo estrangeiro'. Flávio é investigado; não há denúncia. Defesa: no mesmo dia, em Manaus, Flávio disse 'abra o sigilo, tira o sigilo de tudo, mostra tudo para o povo' e que 'o ministro André Mendonça está certo'. Moraes, por sua vez, classificou o levantamento como 'seletivo e direcionado'.",
   "observacao": "Brasil de Fato e Revista Fórum têm linha editorial à esquerda; Gazeta Brasil e Gazeta da Amazônia são portais de porte médio. Os trechos do relatório da PF coincidem entre os veículos. O relatório fala em 'interlocução direta', não em 'interlocutor direto'.",
   "pessoas": [
    "flavio",
    "eduardo",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/09/11/pressionado-mendonca-retira-sigilo-de-investigacao-sobre-pedido-de-dinheiro-de-flavio-a-vorcaro-para-financiar-dark-horse/",
     "data": "2026-09-11",
     "trecho": "O levantamento seletivo e direcionado do sigilo realizado pelo Ministro André Mendonça, na proteção ostensiva de determinado grupo político",
     "tier": "referencia"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-vorcaro-ultima-parcela-de-us-16-mi-eduardo",
     "data": "2026-09-11",
     "trecho": "há registro de ligação entre DANIEL VORCARO e FLÁVIO BOLSONARO, coincidindo temporalmente com a última remessa",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta da Amazônia",
     "url": "https://gazetadaamazonia.com.br/11/09/2026/eduardo-bolsonaro-dark-horse/",
     "data": "2026-09-11",
     "trecho": "as reiteradas cobranças realizadas por FLÁVIO BOLSONARO para liberação dos recursos constituem, em juízo de cognição sumária, um conjunto coerente de elementos que evidencia justa causa",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pgr-pediu-a-pf-apurar-se-flavio-atuou-no-senado",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-11",
   "status": "investigacao",
   "titulo": "PGR pediu à PF apurar se Flávio atuou no Senado a favor de Vorcaro e vê 'promessa de apoio ou interferências'",
   "resumo": "Entre os documentos tornados públicos em 11/9 está o parecer do procurador-geral Paulo Gonet, de 21/7, que apontou 'indícios consistentes' de crimes e pediu à PF o levantamento das 'proposições legislativas apresentadas ou endossadas pelo senador Flávio Nantes Bolsonaro' e pelo deputado Mário Frias 'que possam ser de interesse do Banco Master ou de empresas a ele vinculadas', além de busca completa nos telefones apreendidos. Gonet destacou mensagem de Flávio a Vorcaro em 16/11/2025, véspera da prisão ('Irmão, estou e estarei contigo sempre, não tem meia conversa entre a gente. Só preciso que me dê uma luz! Abs!'), e escreveu que o banqueiro obteve, 'às vésperas da deflagração da fase ostensiva da Operação Compliance Zero, promessa de apoio ou interferências do próprio Senador'. O objetivo é verificar se houve 'ato típico da função parlamentar que possa ser atribuído, numa lógica de causa e efeito, ao negócio cinematográfico'; a PGR não afirma interferência comprovada. Flávio e Frias não responderam ao Poder360; em outras ocasiões o senador negou ter oferecido vantagens ao banqueiro.",
   "observacao": "O parecer é de 21/7 (fora da janela); o fato datado é sua publicidade em 11/9 com o levantamento do sigilo. É pedido de diligência, não denúncia. A mensagem de 16/11/2025 consta no Diário Carioca e na Gazeta do Povo.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "mario-frias"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/dark-horse-pgr-pediu-levantamento-sobre-atuacao-de-flavio-bolsonaro-no-congresso/",
     "data": "2026-09-11",
     "trecho": "que possam ser de interesse do Banco Master ou de empresas a ele vinculadas",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/pgr-suspeita-que-flavio-atuou-no-senado-em-defesa-de-vorcaro/",
     "data": "2026-09-11",
     "trecho": "proposições legislativas apresentadas ou endossadas pelo senador Flávio Nantes Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "ICL Notícias",
     "url": "https://iclnoticias.com.br/gonet-vorcaro-promessa-apoio-flavio-bolsonaro/",
     "data": "2026-09-11",
     "trecho": "obteve, às vésperas da deflagração da fase ostensiva da Operação Compliance Zero, promessa de apoio ou interferências do próprio Senador",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "europa-filmes-adia-dark-horse-sem-nova-data-film",
   "tipo": "noticia",
   "tema": "master",
   "data": "2026-09-11",
   "status": "fato",
   "titulo": "Europa Filmes adia 'Dark Horse' sem nova data; filme não estreou em 11/9 anunciado por Caviezel",
   "resumo": "Em 11/9, data que Jim Caviezel havia anunciado nas redes para a estreia (nunca confirmada oficialmente para o mercado brasileiro), a distribuidora Europa Filmes disse que só lançará o filme quando houver clareza sobre o desfecho das investigações. O diretor-geral Wilson Feitosa afirmou: 'O lançamento do filme terá que estar livre de possíveis impedimentos. Não dá para saber o desenrolar de tudo isso, mas não seria responsável fazer o lançamento deste filme com todos estes acontecimentos', um dia após a Operação Make Up; em julho, já defendia lançamento pós-eleição. Em 14/9, a distribuidora desmentiu cartaz de suposta pré-estreia em 30/9 compartilhado pelo deputado Gustavo Gayer ('nunca demos data de lançamento'; o cartaz 'não foi produzido pela distribuidora'). A obra tem registro ROE na Ancine desde 7/8 sob o título 'O Azarão'. Não há reação da campanha de Flávio nas matérias.",
   "observacao": "'Por tempo indeterminado' não consta nas fontes; título ajustado para 'sem nova data'. Papo de Cinema é site especializado em cinema.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/lancamento-de-dark-horse-e-adiado-por-distribuidora/",
     "data": "2026-09-11",
     "trecho": "não seria responsável fazer o lançamento deste filme com todos estes acontecimentos",
     "tier": "referencia"
    },
    {
     "veiculo": "Papo de Cinema",
     "url": "https://www.papodecinema.com.br/noticias/dark-horse-estreia",
     "data": "2026-09-14",
     "trecho": "nunca demos data de lançamento",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-detalha-mensagens-de-flavio-a-vorcaro-pedido",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-12",
   "status": "investigacao",
   "titulo": "PF detalha mensagens de Flávio a Vorcaro: pedido de R$ 131 mi, cobranças de atraso e fundo 'operacionalmente inerte' por 4 anos",
   "resumo": "Com o sigilo levantado, a imprensa publicou em 12 e 13/9/2026 o conteúdo do relatório da PF: Flávio pediu R$ 131 milhões a Vorcaro para o filme, dos quais R$ 60 milhões teriam sido pagos (em 14 parcelas combinadas, segundo a CNN: duas de cerca de R$ 11 milhões e as demais de cerca de R$ 9 milhões cada, pela cotação da época; a primeira remessa saiu em 13/02/2025, via Entre Investimentos para o fundo Havengate). Em áudio de 8/9/2025, Flávio diz que seria 'muito ruim' não pagar o ator Jim Caviezel e o diretor Cyrus Nowrasteh e que 'tá todo mundo tenso'; em 22/10/2025 afirma que o filme está 'no limite'; em 16/11/2025, véspera da prisão de Vorcaro, escreve 'Só preciso que me dê uma luz! Abs!'. A PF afirma que o Havengate, criado para fins imobiliários, ficou 'operacionalmente inerte por quase 4 anos' até a primeira remessa, contrariando a versão de Flávio à GloboNews (maio) de que era 'um fundo exclusivo criado para a realização do filme'. Status: investigado, sem denúncia. Defesa: em 12/9, no interior do RJ, Flávio disse 'Graças a Deus o sigilo foi afastado e tudo está aí às claras', 'não tem absolutamente nada de errado nesse filme' e 'Eu acho que o impacto é zero'; ao Poder360, Flávio e Eduardo não responderam.",
   "observacao": "Os valores variam entre veículos (R$ 131 mi / R$ 134 mi pedidos; R$ 60 mi pagos, ou cerca de R$ 69 mi pela cotação da época; a CNN fala em 14 parcelas combinadas). A frase 'Irmão, estou e estarei contigo sempre' não foi localizada nas fontes abertas e foi retirada.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "thiago-miranda",
    "mario-frias"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/",
     "data": "2026-09-12",
     "trecho": "Só preciso que me dê uma luz! Abs!",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/relatorio-da-pf-sobre-dark-horse-contraria-versao-de-flavio/",
     "data": "2026-09-12",
     "trecho": "operacionalmente inerte por quase 4 anos, sem qualquer atividade pública registrada",
     "tier": "referencia"
    },
    {
     "veiculo": "O Povo",
     "url": "https://mais.opovo.com.br/jornal/dom/2026/09/13/pf-aponta-cobrancas-de-flavio-a-vorcaro-e-detalha-relacao-sobre-dark-horse.html",
     "data": "2026-09-13",
     "trecho": "É porque tá num momento muito decisivo aqui do filme e como tem muita parcela pra trás, cara, tá todo mundo tenso",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-flavio-e-eduardo-pediram-reuniao-com-vorcaro",
   "tipo": "investigacao",
   "tema": "master",
   "data": "2026-09-13",
   "status": "investigacao",
   "titulo": "PF: Flávio e Eduardo pediram reunião com Vorcaro no dia em que Eduardo anunciou ficar nos EUA",
   "resumo": "Mensagem apreendida pela PF no celular de Vorcaro mostra que, às 9h34 de 18/3/2025, o intermediário Thiago Miranda escreveu ao banqueiro: 'Flavio B e Eduardo querem marcar uma agenda com vc. Filme.'; às 11h37 do mesmo dia Eduardo fez live anunciando que permaneceria nos EUA. A PF apura se recursos destinados ao 'Dark Horse' custearam a estadia de Eduardo no exterior (corrupção, lavagem e evasão de divisas). Defesa: Eduardo, por meio de Paulo Figueiredo, negou conversas ou reuniões com Vorcaro e qualquer ligação entre sua permanência nos EUA e o dinheiro do filme; a defesa de Flávio não comentou, mas o senador afirma não ter cometido irregularidades e já defendeu a retirada do sigilo da investigação.",
   "observacao": "Fonte única (Revista Fórum, linha editorial à esquerda) citando relatório da PF; não localizada cobertura da grande imprensa sobre este trecho específico. A cronologia geral do relatório é confirmada pelo item de 11/9.",
   "pessoas": [
    "flavio",
    "eduardo",
    "vorcaro",
    "thiago-miranda"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-eduardo-bolsonaro-vorcaro-fuga-eua",
     "data": "2026-09-13",
     "trecho": "Flavio B e Eduardo querem marcar uma agenda com vc. Filme.",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "lula-diz-que-flavio-tem-raiva-de-moraes-por-mari",
   "tipo": "declaracao",
   "tema": "master",
   "data": "2026-09-16",
   "status": "declaracao",
   "titulo": "Lula diz que Flávio tem 'raiva' de Moraes por Marielle e 8/1 e cobra 'os R$ 130 milhões' de Vorcaro",
   "resumo": "Em entrevista ao podcast 'Desce a Letra Show' (Cauê Moura e Load Comics), em 16/9/2026, o presidente Lula afirmou: 'A raiva dele pelo Alexandre de Moraes é porque o Alexandre de Moraes mandou prender o cara que mandou matar a Marielle' e 'A bronca dele com o Alexandre de Moraes é porque o Alexandre de Moraes prendeu o pai dele e os golpistas que tentaram fazer o 8 de Janeiro'. Disse que Flávio está 'nervosinho' porque vão aparecer as 'falcatruas dele com o Vorcaro, o churrasco, as bebidas, as mulheres', que 'O que tem que explicar é cadê os R$ 130 milhões que ele pegou do Vorcaro' e que 'É quase que uma quadrilha, e não uma família'. Elogiou Moraes ('trabalho extraordinário para garantir a democracia nesse país'), mas defendeu que investigações contra o ministro prossigam se houver ilícitos. Resposta de Flávio, no mesmo dia, em ato no Recife: 'Se o Lula foi declarado presidente da República, ele deve ao Alexandre de Moraes' e Lula 'passou a mão na cabeça do Alexandre de Moraes'.",
   "observacao": "A menção a Marielle refere-se à prisão dos irmãos Brazão. Flávio não é investigado no assassinato. O valor de R$ 130 milhões consta em O Tempo, não na matéria do Metrópoles.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/lula-afirma-que-flavio-bolsonaro-tem-raiva-de-moraes-por-prisao-do-pai",
     "data": "2026-09-16",
     "trecho": "A raiva dele pelo Alexandre de Moraes é porque o Alexandre de Moraes mandou prender o cara que mandou matar a Marielle",
     "tier": "referencia"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/9/16/lula-elogia-moraes-e-diz-que-flavio-esta-nervosinho-porque-vao-aparecer-falcatruas-com-vorcaro",
     "data": "2026-09-16",
     "trecho": "R$ 130 milhões que ele pegou do Vorcaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/lula-passou-a-mao-na-cabeca-de-moraes-diz-flavio-em-ato-no-recife",
     "data": "2026-09-16",
     "trecho": "passou a mão na cabeça do Alexandre de Moraes",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "patrimonio-declarado-de-r-1-74-milhao-em-2018-ao",
   "tipo": "patrimonio",
   "tema": "patrimonio",
   "data": "2018-08-15",
   "status": "fato",
   "titulo": "Patrimônio declarado de R$ 1,74 milhão em 2018 ao ser eleito senador",
   "resumo": "Ao se eleger senador em 2018, Flávio declarou ao TSE R$ 1,74 milhão em bens: apartamento na Barra da Tijuca (R$ 917 mil), sala comercial (R$ 150 mil), 50% da franquia Bolsotini Chocolates (R$ 50 mil), um Volvo XC 2014 (R$ 66,5 mil) e aplicações de R$ 558,2 mil. Valor usado depois como base de comparação com a mansão.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/preco-da-mansao-de-flavio-bolsonaro-e-quase-quatro-vezes-maior-que-o-patrimonio-declarado-em-2018/",
     "data": "2021-03-02",
     "trecho": "o total declarado por Flávio ao Tribunal Superior Eleitoral era de 1,7 milhão de reais",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2021/03/02/imovel-comprado-por-flavio-bolsonaro-e-mais-de-tres-vezes-maior-do-que-patrimonio/",
     "data": "2021-03-02",
     "trecho": "Imóvel comprado por Flávio Bolsonaro é mais de três vezes maior do que seu patrimônio",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-rj-aponta-r-9-4-milhoes-investidos-em-19-imov",
   "tipo": "investigacao",
   "tema": "patrimonio",
   "data": "2019-05-15",
   "status": "investigacao",
   "titulo": "MP-RJ aponta R$ 9,4 milhões investidos em 19 imóveis (2010-2017)",
   "resumo": "Em pedido de quebra de sigilo, o MP-RJ afirmou que Flávio investiu R$ 9,425 milhões na compra de 19 imóveis entre 2010 e 2017, enquanto deputado estadual, com lucro de R$ 3,089 milhões nas revendas. Promotores viram indícios de lavagem de dinheiro via transações imobiliárias. Flávio negou e chamou os valores de falsos.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/politica-brasil/flavio-bolsonaro-comprou-19-imoveis-por-r-9-milhoes-afirma-mp",
     "data": "2019-05-15",
     "trecho": "indícios de que o filho do presidente da República praticou lavagem de dinheiro por meio de transações imobiliárias",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "investigacao-do-mp-rj-sobre-imoveis-de-flavio-ch",
   "tipo": "investigacao",
   "tema": "patrimonio",
   "data": "2019-07-01",
   "status": "investigacao",
   "titulo": "Investigação do MP-RJ sobre imóveis de Flávio chega a 37 propriedades",
   "resumo": "A investigação do MP-RJ sobre o gabinete de Flávio na Alerj alcançou 37 imóveis ligados ao senador, sua família e à empresa Bolsotini Chocolates: 14 apartamentos e 23 salas comerciais em Copacabana, Botafogo, Barra da Tijuca e Jacarepaguá. A apuração derivou das movimentações atípicas do ex-assessor Fabrício Queiroz.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metro 1",
     "url": "https://www.metro1.com.br/noticias/politica/74052,investigacao-sobre-flavio-bolsonaro-alcanca-37-imoveis",
     "data": "2019-07-01",
     "trecho": "investigação sobre o gabinete de Flávio Bolsonaro na Alerj atingiu um total de 37 imóveis",
     "tier": "agregador"
    },
    {
     "veiculo": "Senado/BDSF",
     "url": "https://www2.senado.leg.br/bdsf/bitstream/handle/id/563239/noticia.html?sequence=1&isAllowed=y",
     "data": "2019-07-01",
     "trecho": "14 apartamentos e 23 salas comerciais",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "documentos-apontam-cla-bolsonaro-com-51-imoveis",
   "tipo": "investigacao",
   "tema": "patrimonio",
   "data": "2022-08-30",
   "status": "investigacao",
   "titulo": "Documentos apontam clã Bolsonaro com 51 imóveis pagos em dinheiro vivo e acesso a cofre",
   "resumo": "Documentos do MP-RJ e do UOL indicam que a família Bolsonaro pagou em dinheiro vivo 51 de 107 imóveis (R$ 13,5 mi à época). Flávio acessou cofre compartilhado com Carlos em agência do BB no Rio um dia antes de usar R$ 638 mil em espécie para comprar dois apartamentos em 2012. Investiga-se lavagem ligada à rachadinha.",
   "observacao": "Compra em dinheiro vivo não é, por si, ilegal; o MP-RJ aponta como indício de lavagem. Parte das apurações de origem foi anulada por questões de foro.",
   "pessoas": [
    "flavio",
    "carlos-bolsonaro",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/flavio-bolsonaro-tinha-cofre-que-acessava-antes-de-pagar-imoveis-em-dinheiro-vivo",
     "data": "2022",
     "trecho": "Flávio tinha cofre que acessava antes de pagar imóveis em dinheiro vivo",
     "tier": "agregador"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2022/08/30/cla-bolsonaro-comprou-51-imoveis-em-dinheiro-vivo-presidente-ira-a-menos-debates-e-mais/",
     "data": "2022-08-30",
     "trecho": "Clã Bolsonaro comprou 51 imóveis em dinheiro vivo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mp-rj-flavio-comprou-16-imoveis-com-pagamento-pa",
   "tipo": "investigacao",
   "tema": "patrimonio",
   "data": "2022-09-19",
   "status": "investigacao",
   "titulo": "MP-RJ: Flávio comprou 16 imóveis com pagamento parcial em espécie",
   "resumo": "Dados de quebra de sigilo do MP-RJ indicaram que Flávio adquiriu 16 imóveis com pagamentos parciais em dinheiro vivo e movimentou mais de R$ 3 milhões em espécie pela conta da antiga loja de chocolates. Promotores associaram os recursos à 'rachadinha'. Assessoria contestou: 'moeda corrente não é dinheiro em espécie'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2022/09/19/flavio-bolsonaro-usou-r-3-milhoes-em-dinheiro-vivo-para-pagar-despesas/",
     "data": "2022-09-19",
     "trecho": "16 imóveis adquiridos com pagamento parcial em espécie",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/alem-da-compra-de-imoveis-flavio-gastou-outros-r-3-milhoes-em-dinheiro-vivo-revela-site/",
     "data": "2022-09-19",
     "trecho": "além da compra de imóveis, Flávio gastou outros R$ 3 milhões em dinheiro vivo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "r-3-milhoes-em-especie-para-despesas-pessoais-sa",
   "tipo": "investigacao",
   "tema": "patrimonio",
   "data": "2022-09-19",
   "status": "investigacao",
   "titulo": "R$ 3 milhões em espécie para despesas pessoais, salários e impostos",
   "resumo": "Segundo o MP-RJ, Flávio usou dinheiro vivo para pagar despesas pessoais (R$ 261,6 mil), impostos de imóveis (R$ 91,8 mil) e salários de funcionários (R$ 40 mil), entre outros gastos, totalizando mais de R$ 3 milhões. A Promotoria apurou desvios de pelo menos R$ 6,1 milhões no esquema da 'rachadinha'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/flavio-bolsonaro-tem-gastos-de-r-3-milhoes-em-dinheiro-vivo",
     "data": "2022-09-19",
     "trecho": "gastos de R$ 3 milhões em dinheiro vivo",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/regionais/brasilia/alem-da-compra-de-16-imoveis-flavio-bolsonaro-ja-movimentou-mais-de-r-3-milhoes-em-dinheiro-vivo",
     "data": "2022-09-19",
     "trecho": "movimentou mais de R$ 3 milhões em dinheiro vivo",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-declara-r-8-186-milhoes-ao-tse-4-7-vezes",
   "tipo": "patrimonio",
   "tema": "patrimonio",
   "data": "2026-08-13",
   "status": "fato",
   "titulo": "Flávio declara R$ 8,186 milhões ao TSE, 4,7 vezes o patrimônio informado em 2018",
   "resumo": "Ao registrar a candidatura à Presidência no TSE em 13/08/2026, às 19h43, Flávio Bolsonaro declarou R$ 8,186 milhões em bens. O maior item é uma casa no Lago Sul, área nobre de Brasília, avaliada em R$ 6,2 milhões; a declaração inclui ainda um automóvel ano 2014 de R$ 133 mil. O valor é 4,7 vezes o declarado na eleição ao Senado em 2018, de R$ 1,74 milhão, alta nominal de cerca de 370%. Corrigido pelo IPCA até junho de 2026, o patrimônio de 2018 equivaleria a cerca de R$ 2,6 milhões, o que representa crescimento real de 210,8% em oito anos. A série histórica declarada por ele é: R$ 385 mil (2006), R$ 691 mil (2010), R$ 714 mil (2014), R$ 1,5 milhão (2016) e R$ 1,7 milhão (2018). O patrimônio declarado é quase o dobro do informado por Lula (R$ 4,8 milhões).",
   "observacao": "Valores autodeclarados à Justiça Eleitoral, que usa valores de aquisição e não de mercado. Cortados por não terem sido reproduzidos pela fonte na verificação os itens de detalhe (R$ 1 milhão em fundo, R$ 568,7 mil em saldo bancário, R$ 103,7 mil em poupança, R$ 56 mil em participações societárias) — o total e os itens principais estão confirmados.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/",
     "data": "2026-08-13",
     "trecho": "um crescimento real de 210,8%",
     "tier": "referencia"
    },
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/flavio-bolsonaro-registra-candidatura-a-presidente-e-declara-r-81-milhoes-em-bens/",
     "data": "2026-08-14",
     "trecho": "A evolução patrimonial se deve, sobretudo, à compra de uma mansão de R$ 6,2 milhões no Lago Sul",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-integrou-a-cpi-da-pandemia-que-o-apontou",
   "tipo": "investigacao",
   "tema": "senado",
   "data": "2021-10-26",
   "status": "investigacao",
   "titulo": "Flávio integrou a CPI da Pandemia, que o apontou em rede de desinformação",
   "resumo": "Flávio Bolsonaro (então Patriota-RJ) integrou a CPI da Pandemia (2021), atuando na defesa do governo. O relatório final apontou o senador como figura ativa em rede de desinformação antivacina e o associou a suspeitas no contrato da VTCLog. Ele chamou ações da CPI de 'censura'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/ao-contrario-do-pai-flavio-bolsonaro-diz-ter-tomado-vacina-mas-cpi-apontou-seu-papel-em-rede-negacionista-e-em-esquema-na-saude/",
     "data": "2021-01-01",
     "trecho": "CPI apontou seu papel em rede negacionista e em esquema na Saúde",
     "tier": "referencia"
    },
    {
     "veiculo": "Rádio Senado",
     "url": "https://www12.senado.leg.br/radio/1/noticia/2021/10/26/cpi-aprova-quebra-de-sigilo-das-redes-sociais-de-bolsonaro-e-aliados-acusam-a-comissao-de-censura",
     "data": "2021-10-26",
     "trecho": "CPI aprova quebra de sigilo das redes sociais de Bolsonaro e aliados acusam a comissão de censura",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "pl-3-190-2023-microcredito-e-o-unico-projeto-de",
   "tipo": "noticia",
   "tema": "senado",
   "data": "2023-01-01",
   "status": "fato",
   "titulo": "PL 3.190/2023 (microcrédito) é o único projeto de Flávio aprovado pelo Congresso",
   "resumo": "O PL 3.190/2023 altera a Lei 13.636 (Programa Nacional de Microcrédito Produtivo Orientado), ajustando destinações de empresas participantes e limites diferenciados de juros. É o único projeto de autoria de Flávio aprovado nas duas Casas; recebeu vetos presidenciais que aguardavam análise do Congresso.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/04/02/em-sete-anos-flavio-bolsonaro-teve-apenas-um-projeto-de-lei-aprovado-no-congresso/",
     "data": "2026-04-02",
     "trecho": "PL 3.190 de 2023, que muda a lei 13.636 que trata sobre o Programa Nacional de Microcrédito Produtivo Orientado",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-foi-relator-no-plenario-do-projeto-que-re",
   "tipo": "decisao_judicial",
   "tema": "senado",
   "data": "2024-02-20",
   "status": "fato",
   "titulo": "Flávio foi relator no plenário do projeto que restringiu saídas temporárias de presos (virou lei)",
   "resumo": "Em fevereiro de 2024, Flávio Bolsonaro foi relator em plenário do PL 2.253/2022, que restringe saídas temporárias de presos condenados por crimes hediondos ou com violência. Modificou o texto para manter saídas de estudo e trabalho. O projeto foi aprovado pelo Senado e transformado em lei.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Rádio Senado",
     "url": "https://www12.senado.leg.br/radio/1/noticia/2024/02/20/senado-restringe-saidas-temporarias-de-presos",
     "data": "2024-02-20",
     "trecho": "Senado restringe saídas temporárias de presos",
     "tier": "primaria"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-mirou-seguranca-mas-nao-teve-projetos-proprios-transformados-em-lei/",
     "data": "2026-04-02",
     "trecho": "Rapporteur (2024): bill eliminating temporary prisoner releases — approved and enacted",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "flavio-votou-contra-a-regulamentacao-da-reforma",
   "tipo": "evento",
   "tema": "senado",
   "data": "2024-12-01",
   "status": "fato",
   "titulo": "Flávio votou contra a regulamentação da reforma tributária no Senado",
   "resumo": "Flávio Bolsonaro votou 'não' na regulamentação da reforma tributária (PLP 108/24), acompanhando a posição da oposição e do PL. Justificou que não votaria para 'colocar a mão no bolso do contribuinte'. O coordenador de campanha disse que ele proporia PEC para suspender a reforma do consumo por um ano.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/112521/reforma-tributaria-como-cada-senador-votou-na-regulamentacao",
     "data": "2024-01-01",
     "trecho": "Todos os votos contra o PLP 108/24 vieram da oposição, incluindo Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/economia/flavio-bolsonaro-vai-suspender-reforma-tributaria-por-um-ano-para-rediscuti-la-diz-coordenador/",
     "data": "2026-01-01",
     "trecho": "Flávio Bolsonaro vai suspender reforma tributária por um ano",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-relatou-pl-que-eleva-penas-por-atentado-a",
   "tipo": "evento",
   "tema": "senado",
   "data": "2025-01-01",
   "status": "processo",
   "titulo": "Flávio relatou PL que eleva penas por atentado à segurança de transportes (até 30 anos)",
   "resumo": "O PL 5.594/2025, de autoria de Flávio Bolsonaro, aprovado na Comissão de Infraestrutura, eleva as penas por atentado à segurança de transporte marítimo, fluvial ou aéreo, podendo chegar a 30 anos em caso de morte. Teve parecer favorável de Marcos Rogério e avançou para a CCJ.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "AeroIn",
     "url": "https://aeroin.net/projeto-do-senador-flavio-bolsonaro-que-eleva-penas-para-ataques-a-aeronaves-a-ate-30-anos-avanca-para-a-ccj/",
     "data": "2025-01-01",
     "trecho": "Projeto do senador Flávio Bolsonaro que eleva penas para ataques a aeronaves a até 30 anos avança para a CCJ",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-apresentou-pdl-para-sustar-decreto-sobre",
   "tipo": "evento",
   "tema": "senado",
   "data": "2025-01-01",
   "status": "processo",
   "titulo": "Flávio apresentou PDL para sustar decreto sobre uso da força por agentes de segurança",
   "resumo": "Flávio Bolsonaro apresentou o Projeto de Decreto Legislativo nº 29/2025, que busca sustar o Decreto 12.341/2024, o qual regulamenta o uso da força por profissionais de segurança pública.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Senado Federal",
     "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/167000",
     "data": "2025-01-01",
     "trecho": "Projeto de Decreto Legislativo para sustar o Decreto nº 12.341, de 23 de dezembro de 2024",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "flavio-bolsonaro-eleito-presidente-da-comissao-d",
   "tipo": "evento",
   "tema": "senado",
   "data": "2025-02-19",
   "status": "fato",
   "titulo": "Flávio Bolsonaro eleito presidente da Comissão de Segurança Pública (CSP) do Senado",
   "resumo": "Em 19 de fevereiro de 2025, Flávio Bolsonaro foi eleito presidente da Comissão de Segurança Pública (CSP) do Senado, com mandato de dois anos. Anunciou prioridade para endurecer a legislação penal, incluindo regras mais duras de audiência de custódia e tipificação do 'domínio de cidades' (PL 5.365/2020). Sérgio Moro tornou-se vice.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Senado Notícias",
     "url": "https://www12.senado.leg.br/noticias/materias/2025/02/19/flavio-bolsonaro-e-eleito-presidente-da-csp",
     "data": "2025-02-19",
     "trecho": "Flávio Bolsonaro é eleito presidente da CSP",
     "tier": "primaria"
    },
    {
     "veiculo": "Senado Notícias",
     "url": "https://www12.senado.leg.br/noticias/materias/2025/02/20/flavio-bolsonaro-quer-definir-crime-de-dominio-de-cidades-na-csp",
     "data": "2025-02-20",
     "trecho": "Flávio Bolsonaro quer definir crime de 'domínio de cidades' na CSP",
     "tier": "primaria"
    },
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2025/02/7065041-flavio-bolsonaro-e-eleito-presidente-da-comissao-de-seguranca-publica-do-senado.html",
     "data": "2025-02-19",
     "trecho": "Flávio Bolsonaro é eleito presidente da Comissão de Segurança Pública do Senado",
     "tier": "agregador"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "flavio-celebrou-rejeicao-inedita-de-jorge-messia",
   "tipo": "evento",
   "tema": "senado",
   "data": "2025-11-29",
   "status": "fato",
   "titulo": "Flávio celebrou rejeição inédita de Jorge Messias ao STF pelo Senado",
   "resumo": "Flávio Bolsonaro reforçou voto contra a indicação de Jorge Messias ao STF e celebrou a rejeição pelo Senado (16 a 11 na comissão), chamando-a de 'histórica' e vitória da oposição. O Senado não rejeitava um indicado ao Supremo desde 1894.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/flavio-reforca-voto-contra-messias-e-diz-que-plenario-pode-surpreender/",
     "data": "2025-11-29",
     "trecho": "Flávio reforça voto contra Messias e diz que plenário pode 'surpreender'",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/senado-rejeita-messias-e-impoe-derrota-historica-do-governo-lula/",
     "data": "2025-11-29",
     "trecho": "Senado rejeita Messias e impõe derrota histórica do governo Lula",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "discursos-de-flavio-no-senado-pico-de-83-interve",
   "tipo": "declaracao",
   "tema": "senado",
   "data": "2025-12-31",
   "status": "declaracao",
   "titulo": "Discursos de Flávio no Senado: pico de 83 intervenções em 2024, focados em segurança, STF e defesa do pai",
   "resumo": "Análise de cerca de 193 intervenções em plenário (2019-2025) mostra pico de 83 em 2024. Temas predominantes: defesa de Jair Bolsonaro, segurança pública, críticas a Lula e ao STF (especialmente Moraes) e defesa de condenados pelo 8 de janeiro.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/discursos-flavio-bolsonaro-senado-indicacoes-sobre-temas-campanha-presidencial/",
     "data": "2026-01-01",
     "trecho": "193 intervenções em plenário de fev/2019 a dez/2025; 83 intervenções em 2024 (recorde)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "lider-da-maior-bancada-pl-e-principal-articulado",
   "tipo": "noticia",
   "tema": "senado",
   "data": "2026-01-01",
   "status": "fato",
   "titulo": "Líder da maior bancada (PL) e principal articulador da oposição no Senado",
   "resumo": "Com Jair Bolsonaro isolado e com restrição de visitas, Flávio tornou-se elo central do PL no Senado, liderando a estratégia da maior bancada da Casa (14 senadores) e a articulação de candidaturas ao Senado para 2026.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/restricao-de-visitas-a-bolsonaro-amplia-poder-de-flavio-na-escolha-de-candidatos-ao-senado/",
     "data": "2026-01-01",
     "trecho": "Com Bolsonaro isolado, Flávio lidera estratégia do PL ao Senado",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/politica-brasil/oposicao-articula-quem-serao-os-lideres-no-senado-veja-os-cotados",
     "data": "2025-01-01",
     "trecho": "Oposição articula quem serão os líderes no Senado",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-7-anos-de-senado-flavio-teve-so-1-projeto-pro",
   "tipo": "noticia",
   "tema": "senado",
   "data": "2026-04-02",
   "status": "fato",
   "titulo": "Em 7 anos de Senado, Flávio teve só 1 projeto próprio virando lei",
   "resumo": "Levantamento aponta que, desde 2019, Flávio Bolsonaro propôs 57 projetos de lei e foi autor/coautor de cerca de 92 PECs, mas apenas o PL 3.190/2023 (microcrédito produtivo) foi aprovado nas duas Casas como projeto de sua autoria. Sua principal bandeira é segurança pública.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/04/02/em-sete-anos-flavio-bolsonaro-teve-apenas-um-projeto-de-lei-aprovado-no-congresso/",
     "data": "2026-04-02",
     "trecho": "o único projeto aprovado nas duas Casas até então é o PL 3.190 de 2023",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-mirou-seguranca-mas-nao-teve-projetos-proprios-transformados-em-lei/",
     "data": "2026-04-02",
     "trecho": "57 bills (PLs) e 92 PECs como autor ou coautor; foco em segurança",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pedidos-de-cassacao-de-flavio-por-quebra-de-deco",
   "tipo": "denuncia",
   "tema": "senado",
   "data": "2026-05-13",
   "status": "denuncia",
   "titulo": "Pedidos de cassação de Flávio por quebra de decoro após áudios com Vorcaro",
   "resumo": "Após a divulgação dos áudios, partidos (PSOL, PT, Rede e Missão) protocolaram representações pedindo a cassação de Flávio Bolsonaro por quebra de decoro no Conselho de Ética do Senado. O colegiado, porém, não realiza reuniões desde julho de 2024, o que trava o andamento. Levantamento aponta ao menos 20 pedidos jurídicos.",
   "observacao": "São representações/denúncias, não há instauração de processo no Conselho de Ética até o momento.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/psol-pt-e-rede-pedem-cassacao-de-flavio-bolsonaro-por-quebra-de-decoro/",
     "data": "2026-05",
     "trecho": "PSOL, PT e Rede pedem cassação de Flávio Bolsonaro por quebra de decoro",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/missao-vai-pedir-cassacao-de-flavio-no-conselho-de-etica-do-senado/",
     "data": "2026-05",
     "trecho": "Missão vai pedir cassação de Flávio no Conselho de Ética; conselho não se reúne desde julho de 2024",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/ofensiva-juridica-apos-audio-de-flavio-a-vorcaro-soma-ao-menos-20-pedidos/",
     "data": "2026-05",
     "trecho": "Ofensiva jurídica após áudio de Flávio a Vorcaro soma ao menos 20 pedidos",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "levantamento-aponta-que-flavio-bolsonaro-nao-vot",
   "tipo": "midia",
   "tema": "senado",
   "data": "2026-06-28",
   "status": "fato",
   "titulo": "Levantamento aponta que Flávio Bolsonaro não votou em 43% das deliberações nominais do Senado em 2026",
   "resumo": "Levantamento divulgado em 28 de junho de 2026 apontou que o senador Flávio Bolsonaro (PL-RJ) não registrou voto em 43% das 49 deliberações nominais do Senado analisadas em 2026, contra média de 20% entre os 81 senadores. Ele aparece em quinto lugar no ranking de ausências, atrás de Romário (53%), Wilder Moraes (49%), Angelo Coronel e Oriovisto Guimarães (47% cada). Entre as votações em que não votou ou não compareceu estão a PEC sobre transporte rodoviário, o projeto de licença-paternidade, o projeto sobre o Funpen e as sabatinas de embaixadores e do presidente da CVM. As reportagens registram que a assessoria do senador foi procurada por e-mail e telefone em 26 de junho e não respondeu até a publicação. Em julho, respondendo a outro levantamento, a assessoria afirmou que ele teve três faltas em 2026 — uma delas para encontrar Donald Trump — e que 'exerce seu mandato de forma ativa e comprometida, dentro e fora do Congresso Nacional'.",
   "observacao": "As duas fontes divergem sobre o recorte: o Estado de Minas fala em 49 matérias 'até 22 de junho', o Jornal de Brasília em '24 de fevereiro a 16 de junho'. Foram retirados desta versão os quatro senadores empatados com ele e a votação sobre entidades filantrópicas, que não constam de nenhuma das fontes abertas. A resposta da assessoria só foi localizada em site partidário (PT), que a atribui a levantamento do SBT News não verificado nesta apuração.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/06/7450571-flavio-bolsonaro-se-ausentou-em-43-das-votacoes-nominais-do-senado-em-2026.html",
     "data": "2026-06-28",
     "trecho": "43% das votações nominais do Senado em 2026; a média geral entre os 81 senadores é de 20%",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-se-ausentou-em-43-das-votacoes-nominais-do-senado-este-ano/",
     "data": "2026-06-28",
     "trecho": "Flávio foi procurado por meio de sua assessoria de imprensa na sexta (26) por email e telefone, mas não respondeu",
     "tier": "referencia"
    },
    {
     "veiculo": "PT (site partidário)",
     "url": "https://pt.org.br/flavio-bolsonaro-deixa-de-votar-na-maioria-das-decisoes-e-so-emplaca-duas-propostas-em-7-anos/",
     "data": "2026-07-21",
     "trecho": "exerce seu mandato de forma ativa e comprometida, dentro e fora do Congresso Nacional",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-depoe-em-audiencia-do-ustr-em-w",
   "tipo": "evento",
   "tema": "senado",
   "data": "2026-07-07",
   "status": "fato",
   "titulo": "Flávio Bolsonaro depõe em audiência do USTR em Washington sobre tarifa de 25% a produtos brasileiros",
   "resumo": "Em 7 de julho de 2026, o senador e pré-candidato à Presidência Flávio Bolsonaro (PL-RJ) participou de audiência pública do USTR, o escritório comercial do governo dos Estados Unidos, sobre a taxação adicional de 25% a produtos brasileiros. Antes da audiência ele havia enviado ao governo Trump uma carta de 86 páginas defendendo a suspensão das tarifas, com o argumento de que a medida fortalece o presidente Lula, seu adversário na eleição. Segundo o Jornal do Brasil, na audiência ele tratou de regulação das redes sociais, acusações de corrupção no Brasil e do sistema Pix, e em documento anterior defendeu maior participação de empresas estrangeiras no mercado brasileiro de cartões e pediu que o Pix não fosse integrado a sistemas de pagamento ligados aos Brics. Ele disse ter de 'ficar mais um dia aqui nos Estados Unidos para defender o Brasil desse tarifaço' e afirmou que não se omitiria do debate. A decisão final dos EUA sobre as tarifas estava marcada para 15 de julho.",
   "observacao": "Foram retirados desta versão a composição do painel (Roberto Azevêdo/CNI e Letícia Sperb Masselli/Abicalçados) e a inscrição para 'cinco minutos padrão': nenhuma das três fontes abertas menciona esses detalhes — o Jornal do Brasil explicitamente não identifica quem dividiu o painel com o senador.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/nota/flavio-bolsonaro-vai-aos-eua-para-audiencia-sobre-tarifaco/",
     "data": "2026-07-06",
     "trecho": "enviou ao governo de Donald Trump uma carta de 86 páginas",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/120277/flavio-estende-viagem-nos-eua-para-novas-reunioes-com-aliados-de-trump",
     "data": "2026-07-07",
     "trecho": "ficar mais um dia aqui nos Estados Unidos para defender o Brasil desse tarifaço",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/politica/2026/07/1060213-flavio-bolsonaro-e-criticado-por-fala-em-audiencia-sobre-tarifas-nos-eua.html",
     "data": "2026-07-08",
     "trecho": "regulação das redes sociais, acusações de corrupção no Brasil e o sistema de pagamentos Pix",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-apresenta-a-emenda-4-ao-projeto",
   "tipo": "processo",
   "tema": "senado",
   "data": "2026-07-09",
   "status": "fato",
   "titulo": "Flávio Bolsonaro apresenta a Emenda 4 ao projeto que regula o uso de drones pela segurança pública",
   "resumo": "Conforme a tramitação oficial do Senado, em 9 de julho de 2026 foi recebida a Emenda 4, de autoria do senador Flávio Bolsonaro (PL-RJ), ao PL 3.611/2021, do senador Veneziano Vital do Rêgo (MDB-PB), que dispõe sobre o uso de veículos aéreos não tripulados por órgãos de segurança pública. É a terceira emenda dele à matéria: a Emenda 2, de 14/05/2024, foi retirada a seu pedido em 14/10/2025, e a Emenda 3 é de 14/10/2025. O relator do projeto é o senador Marcos do Val (Podemos-ES), que apresentou parecer favorável em 21/02/2024. Segundo o site especializado PickDrones, as emendas de Flávio retiram do texto as proibições à pilotagem por inteligência artificial e ao armamento de drones policiais, permitindo avaliação caso a caso. Em 25 de agosto de 2026 a Rádio Senado informou que a Comissão de Segurança Pública pode votar as regras para drones ainda em 2026.",
   "observacao": "Só a data e a autoria da Emenda 4 estão confirmadas em fonte oficial; o conteúdo da emenda é descrição do site especializado PickDrones — o texto da emenda não foi lido nesta apuração e a afirmação está atribuída à fonte, não asserida. A matéria da Rádio Senado não menciona Flávio Bolsonaro: sustenta apenas o calendário da comissão. A PickDrones afirma que ele preside a CSP desde 7 de agosto de 2026, mas o perfil oficial no Senado o registra apenas como titular da comissão, sem indicar a presidência. Foi retirada a informação de que a matéria segue à CCJ em decisão terminativa, não confirmada na tramitação aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Senado Federal (tramitação oficial)",
     "url": "https://www25.senado.leg.br/web/atividade/materias/-/materia/150299",
     "data": "2026-07-09",
     "trecho": "Emenda 4 — Senador Flávio Bolsonaro (PL/RJ) — 09/07/2026",
     "tier": "primaria"
    },
    {
     "veiculo": "PickDrones",
     "url": "https://pickdrones.com/pt/senado-drones-armados-policia-pl-3611/",
     "data": "2026-08-28",
     "trecho": "O senador propôs retirar do texto as proibições à pilotagem por inteligência artificial e ao armamento de drones policiais",
     "tier": "agregador"
    },
    {
     "veiculo": "Rádio Senado",
     "url": "https://www12.senado.leg.br/radio/1/noticia/2026/08/25/comissao-de-seguranca-publica-deve-votar-regras-para-drones",
     "data": "2026-08-25",
     "trecho": "A Comissão de Segurança Pública (CSP) pode votar, em 2026, regras para o uso de drones no policiamento",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "levantamento-emendas-de-flavio-bolsonaro-somam-r",
   "tipo": "financeiro",
   "tema": "senado",
   "data": "2026-08-08",
   "status": "fato",
   "titulo": "Levantamento: emendas de Flávio Bolsonaro somam R$ 364 milhões desde 2020, metade delas para a saúde",
   "resumo": "Levantamento publicado em 8 de agosto de 2026, com base na plataforma Siga Brasil, apontou que as emendas parlamentares indicadas por Flávio Bolsonaro entre os orçamentos de 2020 e 2026 somam R$ 364 milhões corrigidos pela inflação, dos quais R$ 245 milhões já pagos e R$ 75 milhões empenhados aguardando pagamento. Por área, a saúde concentra 50,8% (R$ 185,5 milhões), a defesa nacional 21,8% (R$ 79,5 milhões) e a segurança pública 19,4% (R$ 70,9 milhões); a educação ficou com 0,8% (R$ 2,9 milhões) e não houve nenhuma emenda para habitação, transporte, ciência e tecnologia, cultura, energia e agricultura. Por destino, R$ 32,5 milhões foram para ações de caráter nacional e R$ 26,2 milhões para o Rio de Janeiro. O gabinete do senador respondeu que prioriza municípios e regiões em situação mais precária e que 'saúde e segurança também são priorizadas'.",
   "observacao": "São emendas individuais regulares do mandato, autorizadas no Orçamento: não há neste item qualquer acusação de irregularidade. Item sustentado em fonte única. O título original da reportagem enfatiza segurança e defesa, mas os próprios percentuais publicados mostram a saúde como maior fatia — o título foi corrigido aqui. Os valores por município (capital fluminense e São Gonçalo) foram retirados: não constam da versão aberta da reportagem. O período coberto pelo levantamento é anterior à janela; o que ocorre dentro dela é a publicação.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-concentrou-emendas-em-seguranca-e-defesa-e-deixou-ciencia-e-agricultura-de-fora/",
     "data": "2026-08-08",
     "trecho": "saúde e segurança também são priorizadas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "levantamento-aponta-3-propostas-sobre-seguranca",
   "tipo": "midia",
   "tema": "senado",
   "data": "2026-08-21",
   "status": "fato",
   "titulo": "Levantamento aponta 3 propostas sobre segurança da mulher entre as 306 apresentadas por Flávio em 24 anos",
   "resumo": "A Agência Pública publicou em 21 de agosto de 2026 levantamento das proposições legislativas de Flávio Bolsonaro entre 2003 e 2026: 306 propostas no total — 140 projetos de lei e 14 PECs estaduais na Alerj (2003-2019) e, no Senado desde 2019, 59 projetos de lei e 93 PECs. Apenas três tratam de segurança de mulheres: o PL 2.786/2017, na Alerj, sobre divulgação de dados processuais de condenados por crimes contra mulheres, arquivado em 2019; a PEC 41/2025, de 11 de novembro de 2025, que inclui na Constituição o direito da mulher a uma vida livre de violência e aguarda relator; e o PL 1.400/2026, de 25 de março de 2026, que permite à autoridade policial conceder medidas protetivas imediatas e aguarda despacho. Segundo a reportagem, as três representam menos de 1% de tudo que ele assinou, e duas foram apresentadas quando já era pré-candidato à Presidência. A assessoria do senador respondeu que a proteção às vítimas e o combate aos crimes sexuais 'sempre estiveram entre as principais bandeiras' do mandato e constituem uma pauta da direita.",
   "observacao": "Item sustentado em fonte única, integralmente conferida. O período coberto pelo levantamento é anterior à janela; o que ocorre dentro dela é a publicação.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/08/flavio-bolsonaro-fez-3-propostas-de-lei-sobre-seguranca-da-mulher-em-24-anos-como-politico/",
     "data": "2026-08-21",
     "trecho": "sempre estiveram entre as principais bandeiras",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-relata-projeto-que-libera-porte",
   "tipo": "processo",
   "tema": "senado",
   "data": "2026-09-01",
   "status": "fato",
   "titulo": "Flávio Bolsonaro relata projeto que libera porte de arma a defensores públicos, aprovado na CSP",
   "resumo": "Em 1º de setembro de 2026, a Comissão de Segurança Pública do Senado aprovou o PL 2.343/2025, do senador Carlos Portinho (PL-RJ), que altera o Estatuto do Desarmamento para incluir membros da Defensoria Pública entre os autorizados a portar arma de fogo em todo o território nacional. O relator foi o senador Flávio Bolsonaro, que apresentou parecer favorável e 'acatou emenda sugerida pelo senador Alessandro Vieira (MDB-SE)', acrescentando os advogados públicos ao rol de autorizados, desde que atendam a requisitos técnicos e psicológicos. A decisão na comissão não encerra a tramitação: o projeto seguiu para análise da Comissão de Constituição e Justiça.",
   "observacao": "Retirada a citação atribuída ao autor do projeto sobre defensores que 'atuam em situações sensíveis e de elevado risco', não localizada na matéria aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Senado",
     "url": "https://www12.senado.leg.br/noticias/materias/2026/09/01/vai-a-ccj-projeto-que-libera-porte-de-arma-para-defensores-publicos",
     "data": "2026-09-01",
     "trecho": "acatou emenda sugerida pelo senador Alessandro Vieira (MDB-SE), que acrescenta os advogados públicos",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "governo-atribui-a-flavio-bolsonaro-e-rogerio-mar",
   "tipo": "processo",
   "tema": "senado",
   "data": "2026-09-02",
   "status": "fato",
   "titulo": "Governo atribui a Flávio Bolsonaro e Rogério Marinho obstrução que barrou a PEC do fim da escala 6x1",
   "resumo": "Em 2 de setembro de 2026, a CCJ do Senado aprovou simbolicamente a PEC que acaba com a escala 6x1, com quatro votos contrários registrados — Rogério Marinho (PL-RN), Hamilton Mourão (Republicanos-RS), Tereza Cristina (PP-MS) e Jaime Bagattoli (PL-RO). Flávio Bolsonaro, membro suplente da CCJ, não compareceu à sessão. No mesmo dia a proposta não foi levada ao plenário: o líder do governo, Randolfe Rodrigues, atribuiu o resultado a uma 'ação coordenada' de oposicionistas, com participação direta de Flávio Bolsonaro e do líder da oposição, Rogério Marinho. Na véspera, o senador evitou dizer como votaria e defendeu uma PEC alternativa que daria liberdade ao trabalhador para negociar a jornada com o empregador: 'As propostas vão andar em conjunto, então não preciso escolher entre uma ou outra'. A votação em plenário foi adiada para depois das eleições de outubro. A Agência Brasil procurou o senador, que não respondeu.",
   "observacao": "O título foi corrigido: a liderança da obstrução é atribuição do líder do governo, Randolfe Rodrigues, não fato apurado. As fontes divergem levemente sobre a posição do senador — O Tempo diz que ele 'tem se declarado contra a PEC', enquanto o Metrópoles registra que ele evitou indicar como votaria. Retirados o número da PEC, a redução de 44 para 40 horas e a informação de que Rogério Marinho coordena a campanha presidencial de Flávio: nada disso consta das fontes abertas.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/senado-oposicao-obstrui-e-fim-da-escala-6x1-nao-vai-plenario",
     "data": "2026-09-02",
     "trecho": "ação coordenada de oposicionistas, com participação direta dos senadores Flávio Bolsonaro e Rogério Marinho",
     "tier": "agregador"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/congresso/2026/9/2/pec-do-fim-da-escala-6x1-e-aprovada-pela-ccj-do-senado-mas-sem-garantia-de-votacao-no-plenario",
     "data": "2026-09-02",
     "trecho": "Membro suplente da CCJ, o senador Flávio Bolsonaro (PL-RJ) não compareceu à sessão",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/flavio-evita-indicar-posicao-sobre-6x1-e-volta-a-defender-pec-alternativa",
     "data": "2026-09-01",
     "trecho": "As propostas vão andar em conjunto, então não preciso escolher entre uma ou outra",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "sem-decisao-sobre-moraes-oposicao-no-senado-pres",
   "tipo": "noticia",
   "tema": "senado",
   "data": "2026-09-16",
   "status": "fato",
   "titulo": "Sem decisão sobre Moraes, oposição no Senado pressiona Alcolumbre por impeachment; Flávio leva crise à campanha",
   "resumo": "Após o STF suspender em 15/9 a análise sobre Moraes, senadores de oposição cobraram de Davi Alcolumbre posicionamento sobre pedidos de impeachment do ministro; o presidente do Senado já sinalizara resistência, citando 109 requerimentos contra os dez ministros ('Isso não é normal'). Rogério Marinho (PL-RN) propôs mudar o rito para que pedidos avancem automaticamente ao atingir maioria; Damares Alves (Republicanos-DF) disse que a vista serve para 'só adiar a sangria. Só adiar o desgaste' e há proposta de grupo de trabalho na CCJ para apresentar reforma do Judiciário em 60 dias. A CDH acompanhou a sessão do STF com telões no plenário. Flávio incorporou a crise do STF ao discurso de campanha.",
   "observacao": "Fonte única. Afirmações sobre ausência de Flávio em votações nominais e sobre aprovação na CDH não constavam da fonte e foram cortadas.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/sem-decisao-sobre-moraes-julgamento-no-stf-amplia-reacao-no-senado",
     "data": "2026-09-16",
     "trecho": "adiar a sangria. Só adiar o desgaste",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "antes-do-senado-flavio-cumpriu-quatro-mandatos-d",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2018-07-22",
   "status": "fato",
   "titulo": "Antes do Senado, Flávio cumpriu quatro mandatos de deputado estadual no RJ",
   "resumo": "Antes de chegar ao Senado em 2018, Flávio Bolsonaro exerceu quatro mandatos como deputado estadual na Alerj (a partir dos 21 anos). Em 2016, disputou a Prefeitura do Rio pelo PSC e não foi eleito. Sua candidatura ao Senado foi lançada na convenção do PSL em 22/07/2018.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/de-inicio-aos-21-anos-ao-senado-a-trajetoria-politica-de-flavio-bolsonaro-ate-o-anuncio-de-2026/",
     "trecho": "De início aos 21 anos ao Senado: a trajetória política de Flávio Bolsonaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Wikipédia (PT)",
     "url": "https://en.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro",
     "trecho": "exerceu quatro mandatos como deputado estadual; em 2016 disputou a Prefeitura do Rio pelo PSC",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-bolsonaro-e-eleito-senador-pelo-rj-em-201",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2018-10-07",
   "status": "fato",
   "titulo": "Flávio Bolsonaro é eleito senador pelo RJ em 2018 com 4,38 milhões de votos",
   "resumo": "Em sua estreia em cargo eletivo majoritário, Flávio Bolsonaro (PSL) foi o candidato mais votado ao Senado pelo Rio de Janeiro, com 4.380.418 votos (31,36% dos válidos), eleito para a 56ª legislatura (2019-2027) junto à eleição presidencial do pai, Jair Bolsonaro.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Senado Notícias",
     "url": "https://www12.senado.leg.br/noticias/materias/2018/10/07/flavio-bolsonaro-e-arolde-de-oliveira-sao-eleitos-pelo-rio-de-janeiro",
     "data": "2018-10-07",
     "trecho": "Flávio Bolsonaro e Arolde de Oliveira são eleitos pelo Rio de Janeiro",
     "tier": "primaria"
    },
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/de-inicio-aos-21-anos-ao-senado-a-trajetoria-politica-de-flavio-bolsonaro-ate-o-anuncio-de-2026/",
     "trecho": "Flávio recebeu 4.380.418 votos (31,36%), mais votado para o Senado pelo RJ",
     "tier": "agregador"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "tse-apontou-doacoes-sem-origem-r-345-mil-repassa",
   "tipo": "financeiro",
   "tema": "eleicoes",
   "data": "2018-12",
   "status": "fato",
   "titulo": "TSE apontou doações sem origem (R$ 345 mil) repassadas às campanhas de Flávio e Eduardo em 2018",
   "resumo": "A área técnica do TSE apontou que a campanha presidencial de Jair Bolsonaro em 2018 informou doações às campanhas de Flávio e Eduardo Bolsonaro somando R$ 345 mil, mas não declarou os doadores originais desses recursos. As contas de Jair foram aprovadas com ressalvas pelo TSE.",
   "observacao": "Falha apontada pela área técnica; contas aprovadas com ressalvas, não rejeitadas.",
   "pessoas": [
    "flavio",
    "eduardo",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/area-tecnica-do-tse-aponta-falhas-na-prestacao-de-contas-de-bolsonaro/",
     "trecho": "Campanha informou doações às campanhas de Flávio e Eduardo somando R$ 345 mil, sem informar os doadores originais",
     "tier": "agregador"
    },
    {
     "veiculo": "TSE",
     "url": "https://www.tse.jus.br/comunicacao/noticias/2018/Dezembro/tribunal-aprova-com-ressalvas-contas-de-campanha-de-jair-bolsonaro",
     "trecho": "Tribunal aprova com ressalvas contas de campanha de Jair Bolsonaro",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "caso-da-rachadinha-foi-anulado-arquivado-removen",
   "tipo": "decisao_judicial",
   "tema": "eleicoes",
   "data": "2022-05-01",
   "status": "anulado",
   "titulo": "Caso da 'rachadinha' foi anulado/arquivado, removendo entrave eleitoral pré-existente",
   "resumo": "STJ e STF anularam provas e decisões do caso das 'rachadinhas' (foro/quebras de sigilo consideradas ilegais); a Justiça do RJ rejeitou a denúncia e o MP-RJ pediu a extinção. Com o caso arquivado/anulado, deixou de existir como obstáculo concreto à elegibilidade de Flávio.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "trecho": "STJ anula decisões contra Flávio Bolsonaro no caso das rachadinhas",
     "tier": "referencia"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2022-05/justica-do-rio-arquiva-processo-de-caso-de-supostas-rachadinhas",
     "data": "2022-05",
     "trecho": "Justiça do Rio arquiva processo de caso de supostas rachadinhas",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "jair-bolsonaro-foi-declarado-inelegivel-pelo-tse",
   "tipo": "decisao_judicial",
   "tema": "eleicoes",
   "data": "2023-06-30",
   "status": "decisao_judicial",
   "titulo": "Jair Bolsonaro foi declarado inelegível pelo TSE até 2030, abrindo vácuo na sucessão",
   "resumo": "Por 5 votos a 2, o TSE declarou Jair Bolsonaro inelegível por oito anos (contados de 2022, alcançando 2030), por abuso de poder político e uso indevido dos meios de comunicação na reunião com embaixadores. A inelegibilidade abriu o debate sobre quem o substituiria como candidato da direita em 2026.",
   "pessoas": [
    "jair",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "TSE",
     "url": "https://www.tse.jus.br/comunicacao/noticias/2023/Junho/por-maioria-de-votos-tse-declara-bolsonaro-inelegivel-por-8-anos",
     "data": "2023-06-30",
     "trecho": "Por maioria de votos, TSE declara Bolsonaro inelegível por 8 anos",
     "tier": "primaria"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/ministros-do-tse-descartam-bolsonaro-elegivel-em-2026/",
     "trecho": "Ministros do TSE descartam Bolsonaro elegível em 2026",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "flavio-diz-que-candidatura-presidencial-e-irreve",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2025-12-09",
   "status": "declaracao",
   "titulo": "Flávio diz que candidatura presidencial é 'irreversível' e atrelada à liberdade do pai",
   "resumo": "Após visitar o pai pela primeira vez depois do anúncio, Flávio afirmou que sua candidatura é 'irreversível' ('Não vamos voltar atrás, vamos seguir em frente'), e que a única condição para revê-la seria Bolsonaro livre: 'Bolsonaro livre, ou seja, não tem preço'.",
   "pessoas": [
    "flavio",
    "jair",
    "tarcisio-de-freitas"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/candidatura-e-irreversivel-nao-vamos-voltar-atras-diz-flavio-sobre-2026/",
     "data": "2025-12-09",
     "trecho": "Essa candidatura é irreversível, palavras dele. Não vamos voltar atrás",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "carta-de-jair-bolsonaro-confirma-flavio-como-pre",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2025-12-25",
   "status": "declaracao",
   "titulo": "Carta de Jair Bolsonaro confirma Flávio como pré-candidato à Presidência em 2026",
   "resumo": "Carta de Jair Bolsonaro, escrita em 23/12/2025 na sede da PF e lida por Flávio em 25/12/2025 em frente ao hospital DF Star (horas antes de cirurgia do pai), reafirmou o filho como sucessor e pré-candidato ao Planalto em 2026, descrevendo a escolha como 'consciente'.",
   "pessoas": [
    "jair",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2025/12/7320825-bolsonaro-divulga-carta-e-reafirma-flavio-como-pre-candidato-ao-planalto-em-2026.html",
     "data": "2025-12-25",
     "trecho": "Bolsonaro divulga carta e reafirma Flávio como pré-candidato ao Planalto em 2026",
     "tier": "agregador"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/bolsonaro-confirma-pre-candidatura-de-flavio-em-carta-escrita-na-prisao/",
     "trecho": "Bolsonaro confirma pré-candidatura de Flávio em carta antes de cirurgia",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "reeleicao-ao-senado-pelo-rj-figura-como-plano-b",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-01-01",
   "status": "fato",
   "titulo": "Reeleição ao Senado pelo RJ figura como 'plano B' de Flávio em 2026",
   "resumo": "Aliados e dirigentes do PL apontam a reeleição de Flávio ao Senado pelo RJ como alternativa caso ele deixe a disputa presidencial. Fontes afirmam que ele teria prioridade absoluta para uma das vagas do RJ; a hipótese influenciou Carlos Bolsonaro a buscar o Senado por Santa Catarina, evitando disputa interna.",
   "pessoas": [
    "flavio",
    "carlos-bolsonaro"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/flavio-bolsonaro-tem-reeleicao-ao-senado-como-plano-b-a-disputa-presidencial",
     "trecho": "Flávio Bolsonaro tem reeleição ao Senado como plano B à disputa presidencial",
     "tier": "agregador"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/brasil/pl-descarta-recuo-de-flavio-bolsonaro-com-ida-de-carlos-para-sc-senado/",
     "trecho": "PL descarta recuo de Flávio Bolsonaro com ida de Carlos para SC",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-sera-candidato-mesmo-se-inelegibi",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2026-03-24",
   "status": "declaracao",
   "titulo": "Flávio diz que será candidato mesmo se inelegibilidade do pai for revertida",
   "resumo": "Em entrevista à CNN Brasil, Flávio relatou que o pai, inelegível e preso, lhe assegurou que ele deve seguir como candidato presidencial da família mesmo se a inelegibilidade for revertida: 'Independente do que acontecer, é você, Flávio'. A família planeja ação de revisão criminal das condenações.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/flavio-diz-que-sera-candidato-mesmo-se-bolsonaro-reverter-inelegibilidade/",
     "data": "2026-03-24",
     "trecho": "Flávio diz que será candidato mesmo se Bolsonaro reverter inelegibilidade",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-lanca-pre-candidatura-presidencial-na-cpa",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-03-28",
   "status": "declaracao",
   "titulo": "Flávio lança pré-candidatura presidencial na CPAC, em Dallas",
   "resumo": "Em 28/03/2026, durante a conferência conservadora CPAC em Dallas (EUA), Flávio lançou formalmente a pré-candidatura à Presidência, dizendo aceitar a missão a pedido do pai (em prisão domiciliar) e pedindo monitoramento e pressão diplomática internacional por 'eleições justas' no Brasil.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/117674/na-cpac-flavio-pede-pressao-dos-eua-sobre-eleicoes-no-brasil",
     "data": "2026-03-28",
     "trecho": "Na CPAC, Flávio pede pressão dos EUA sobre eleições no Brasil",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/em-evento-nos-eua-flavio-pede-monitoramento-e-pressao-diplomatica-por-eleicoes-justas-no-brasil/",
     "trecho": "Flávio pede monitoramento e pressão diplomática por 'eleições justas' no Brasil",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "especialistas-veem-risco-muito-baixo-de-inelegib",
   "tipo": "investigacao",
   "tema": "eleicoes",
   "data": "2026-04-22",
   "status": "investigacao",
   "titulo": "Especialistas veem risco 'muito baixo' de inelegibilidade de Flávio para 2026",
   "resumo": "Após Moraes abrir, em 15/04/2026, investigação por suposta calúnia de Flávio contra Lula (post ligando Lula a tráfico), especialistas avaliam risco de inelegibilidade como 'muito baixo': a Lei da Ficha Limpa não liga calúnia a inelegibilidade, e o trâmite só terminaria após a eleição. Flávio tem imunidade parlamentar (art. 53).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/vida-e-cidadania/flavio-bolsonaro-pode-ficar-inelegivel-2026-suposta-calunia/",
     "data": "2026-04-22",
     "trecho": "Não há que haver inelegibilidade... a Ficha Limpa não liga calúnia a inelegibilidade",
     "tier": "referencia"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/paulo-cappelli/flavio-ficara-inelegivel-se-condenado-por-calunia-diz-especialista",
     "trecho": "Flávio ficará inelegível se condenado por calúnia, diz especialista",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-se-eleito-sera-presidente-de-fato",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2026-05-08",
   "status": "declaracao",
   "titulo": "Flávio diz que, se eleito, será 'presidente de fato', não o pai",
   "resumo": "Em entrevista à CNN Brasil, Flávio afirmou que, se eleito, exercerá ele o cargo: 'Sendo a vontade do povo, o presidente será Flávio Bolsonaro'. Disse que daria anistia 'ampla, geral e irrestrita' ao pai e que este poderia exercer cargo em seu governo se quisesse.",
   "pessoas": [
    "flavio",
    "jair",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/flavio-bolsonaro-diz-que-sera-presidente-de-fato-em-eventual-governo-nao-o-pai/",
     "data": "2026-05-08",
     "trecho": "Sendo a vontade do povo, o presidente será Flávio Bolsonaro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tse-manda-suspender-pesquisa-atlasintel-que-liga",
   "tipo": "decisao_judicial",
   "tema": "eleicoes",
   "data": "2026-06-08",
   "status": "decisao_judicial",
   "titulo": "TSE manda suspender pesquisa AtlasIntel que ligava Flávio a dono do Banco Master",
   "resumo": "Em 08/06/2026, o presidente do TSE, ministro Kassio Nunes Marques, determinou a suspensão da divulgação de pesquisa da AtlasIntel que associava o senador Flávio Bolsonaro (PL-RJ) ao dono do Banco Master, Daniel Vorcaro.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/atlasintel-presidente-maio-2026/",
     "data": "2026-06-08",
     "trecho": "Pesquisa AtlasIntel que associou Flávio ao dono do Banco Master teve publicação suspensa por Kassio Nunes Marques",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pt-aciona-pf-e-stf-por-suspeita-de-caixa-2-no-fi",
   "tipo": "denuncia",
   "tema": "eleicoes",
   "data": "2026-06-10",
   "status": "investigacao",
   "titulo": "PT aciona PF e STF por suspeita de caixa 2 no financiamento do filme 'Dark Horse'",
   "resumo": "O PT protocolou representações à PF e ao STF (via ADPF) pedindo investigação sobre o financiamento de 'Dark Horse', alegando possível caixa 2 eleitoral (art. 350 do Código Eleitoral), abuso de poder econômico e uso de recursos para beneficiar a pré-campanha presidencial de Flávio. Estreia prevista para 11/09/2026, perto das eleições.",
   "observacao": "Representação partidária; alegações ainda sob análise das autoridades.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Brasil 247",
     "url": "https://www.brasil247.com/brasil/pt-aciona-pf-e-stf-para-investigar-se-financiamento-de-dark-horse-foi-usado-como-caixa-2-na-campanha-de-flavio-bolsonaro",
     "data": "2026-06-10",
     "trecho": "PT aciona PF e STF para investigar se financiamento de Dark Horse foi usado como caixa 2 na campanha de Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "tse-extingue-por-ilegitimidade-ativa-acao-de-pet",
   "tipo": "decisao_judicial",
   "tema": "eleicoes",
   "data": "2026-06-12",
   "status": "decisao_judicial",
   "titulo": "TSE extingue por ilegitimidade ativa ação de petistas para barrar exibição de 'Dark Horse'",
   "resumo": "Em 12 de junho de 2026 o presidente do TSE, ministro Kassio Nunes Marques, extinguiu a representação movida pelo deputado Rogério Correia (PT-MG) e pelo advogado Marco Aurélio de Carvalho, que pedia a suspensão da exibição do filme 'Dark Horse' no período eleitoral. A decisão foi processual: o ministro entendeu faltar legitimidade ativa aos autores, já que Correia não era candidato em eleição majoritária e Carvalho não concorria a cargo algum. Não houve exame do mérito das acusações de propaganda antecipada ou abuso de poder econômico.",
   "observacao": "Extinção por ilegitimidade ativa, não absolvição: o TSE não avaliou se o filme configura propaganda antecipada.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/tse-rejeita-pedido-para-suspender-exibicao-de-dark-horse-em-periodo-eleitoral/",
     "data": "2026-06-12",
     "trecho": "está ausente a legitimidade ativa ad causam para ajuizar representação por propaganda contra candidatos",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pesquisa-cnt-de-junho-2026-mostra-flavio-em-segu",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-06-15",
   "status": "fato",
   "titulo": "Pesquisa CNT de junho/2026 mostra Flávio em segundo, atrás de Lula",
   "resumo": "Pesquisa CNT/MDA (11 a 15/06/2026, 2.002 entrevistas, margem 2,2 p.p.) aponta Lula (PT) com 41,8% e Flávio Bolsonaro (PL) com 28,2% para presidente, confirmando o senador como principal adversário do petista no campo da direita.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/cnt-presidente-junho-2026/",
     "data": "2026-06-15",
     "trecho": "Lula (PT): 41,8%; Flávio Bolsonaro (PL): 28,2% (CNT/MDA, jun/2026)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "rubio-responde-a-flavio-mantem-tarifas-e-agradec",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-06-23",
   "status": "fato",
   "titulo": "Rubio responde a Flávio, mantém tarifas e agradece oferta de equipe de transição",
   "resumo": "Em 23/06/2026, o secretário de Estado dos EUA, Marco Rubio, respondeu por carta ao senador Flávio Bolsonaro, que havia pedido que os EUA desistissem de novas tarifas sobre produtos brasileiros. Rubio manteve o apoio a duas investigações comerciais — uma propondo tarifa de 25% e outra 12,5% adicionais — e escreveu que 'continuamos a ter divergências substanciais', citando Pix, propriedade intelectual, etanol e desmatamento ilegal. Na mesma carta registrou: 'Observamos com otimismo sua expectativa em relação às próximas eleições de outubro e sua oferta generosa de colocar uma equipe de transição à nossa disposição.' A matéria não registra manifestação de Flávio ou de sua assessoria após a resposta.",
   "observacao": "O fato verificado é a existência e o teor da resposta de Rubio — não há aqui imputação de ilícito. Removida da versão proposta a citação 'sérios danos', atribuída à carta de Flávio, que não foi confirmada no texto aberto; a íntegra da carta está em página separada, não aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-internacional/marco-rubio-mantem-tarifas-e-ignora-apelo-de-flavio-bolsonaro/",
     "data": "2026-06-26",
     "trecho": "sua oferta generosa de colocar uma equipe de transição à nossa disposição",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "indicado-ao-senado-por-flavio-e-alvo-da-6-fase-d",
   "tipo": "investigacao",
   "tema": "eleicoes",
   "data": "2026-07-07",
   "status": "investigacao",
   "titulo": "Indicado ao Senado por Flávio é alvo da 6ª fase da Unha e Carne e preso em flagrante com fuzil",
   "resumo": "Em 07/07/2026 a Polícia Federal cumpriu mandados de busca e apreensão na sexta fase da Operação Unha e Carne, sob relatoria do ministro Alexandre de Moraes, contra Márcio Canella (União Brasil), prefeito licenciado de Belford Roxo e nome recomendado ao Senado pelo Rio de Janeiro por Flávio Bolsonaro, e contra o delegado Marcus Amin, ex-chefe da Polícia Civil do RJ na gestão de Cláudio Castro. A investigação apura lavagem de dinheiro por meio de uma rede de postos de combustíveis, com movimentação superior a R$ 7,6 bilhões em seis anos segundo o Coaf. No mesmo dia Canella foi preso em flagrante 'por porte de arma de calibre restrito', um fuzil encontrado em seu carro. Flávio Bolsonaro não é apontado como investigado na operação. A reportagem tentou contato com a assessoria de Canella e não obteve retorno.",
   "observacao": "Flávio Bolsonaro NÃO é alvo nem investigado nesta operação; o único vínculo é a indicação política de Canella ao Senado. Corrigi 'ex-prefeito' para 'prefeito licenciado' (Brasil de Fato) e retirei a menção à ADPF das Favelas, não confirmada nas fontes.",
   "pessoas": [
    "marcio-canella",
    "flavio",
    "claudio-castro"
   ],
   "fontes": [
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/pf-faz-buscas-em-indicado-ao-senado-por-flavio-bolsonaro-em-investigacao-sobre-lavagem-em-postos-no-rj/",
     "data": "2026-07-07",
     "trecho": "A ação é a sexta fase da Operação Unha e Carne, sob a relatoria do ministro Alexandre de Moraes, do STF",
     "tier": "referencia"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/07/08/candidato-ao-senado-apoiado-por-flavio-bolsonaro-e-preso-em-flagrante-por-porte-de-fuzil-no-rio/",
     "data": "2026-07-08",
     "trecho": "preso em flagrante por porte de arma de calibre restrito, arma que estava em seu carro",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "europa-filmes-confirma-que-dark-horse-so-sera-la",
   "tipo": "midia",
   "tema": "eleicoes",
   "data": "2026-07-08",
   "status": "fato",
   "titulo": "Europa Filmes confirma que 'Dark Horse' só será lançado depois das eleições",
   "resumo": "O diretor-geral da distribuidora Europa Filmes, Wilson Feitosa, confirmou em julho de 2026 que o lançamento de 'Dark Horse' no Brasil ficaria para depois das eleições de outubro: 'Não tem data ainda. Com certeza não será antes de novembro, mas ainda será neste ano, independentemente de quem ganhar as eleições'. A distribuidora planejava lançamento em pelo menos 650 salas, com cerca de 99% das cópias dubladas, e projeções de público entre 800 mil (pessimista), 1,5 a 2 milhões (realista) e acima de 2 milhões (otimista). Em 13 de junho de 2026, o advogado da produtora, Ricardo Sayeg, já havia recomendado publicamente o lançamento pós-eleições para que 'não pairem dúvidas sobre a natureza cultural e artística' da obra.",
   "observacao": "Retirei do título e do resumo a afirmação de que havia data anunciada de 11/09/2026: nenhuma das três fontes verificadas menciona essa data. Também retirei a atribuição do adiamento à investigação da PF e à resistência das redes exibidoras, que as fontes não fazem. Substituí o trecho da ND Mais, que estava incorreto.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-cultura/dark-horse-sera-lancado-apos-as-eleicoes-diz-distribuidora/",
     "data": "2026-07-08",
     "trecho": "Com certeza não será antes de novembro, mas ainda será neste ano",
     "tier": "referencia"
    },
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/distribuidora-crava-data-estreia-dark-horse-cinemas/",
     "data": "2026-07-08",
     "trecho": "Não tem data ainda. Com certeza não será antes de novembro, mas ainda será neste ano",
     "tier": "referencia"
    },
    {
     "veiculo": "RIC",
     "url": "https://ric.com.br/politica/dark-horse-filme-sobre-bolsonaro-pode-ter-estreia-adiada",
     "data": "2026-06-13",
     "trecho": "minha recomendação [...] é que o filme seja lançado depois das eleições",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-questiona-seguranca-das-urnas-e-defende-o",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2026-07-23",
   "status": "declaracao",
   "titulo": "Flávio questiona segurança das urnas e defende observadores internacionais; Tarcísio rebate",
   "resumo": "O senador Flávio Bolsonaro (PL-RJ) questionou a segurança das urnas eletrônicas e defendeu o envio de observadores internacionais para as eleições brasileiras. Em 23/07/2026, o governador de São Paulo, Tarcísio de Freitas (Republicanos), reagiu à fala e afirmou confiar no sistema eletrônico: \"Eu confio nas urnas. Até porque, se eu não confiasse, não estava disputando a eleição\". Tarcísio pediu que o debate se concentrasse em projetos de governo. Nenhuma prova de fraude nas urnas foi apresentada.",
   "observacao": "Lastro de fonte única. A versão original do item atribuía a Flávio menções a documento da CIA sobre a Venezuela e à empresa Smartmatic, além de uma representação do PT no TSE pedindo multa de R$ 30 mil: NADA disso é sustentado pela fonte aberta e foi cortado. A data registrada é a da reação de Tarcísio; a fala do senador é anterior e não foi possível datá-la com precisão em fonte aberta.",
   "pessoas": [
    "flavio",
    "tarcisio-de-freitas"
   ],
   "fontes": [
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/tarcisio-reage-a-flavio-bolsonaro-sobre-urnas/",
     "data": "2026-07-23",
     "trecho": "Eu confio nas urnas. Até porque, se eu não confiasse, não estava dispu[tando]",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pl-oficializa-flavio-candidato-a-presidencia-sem",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-07-25",
   "status": "fato",
   "titulo": "PL oficializa Flávio candidato à Presidência sem vice; vídeo com IA simula Jair Bolsonaro",
   "resumo": "Em 25/07/2026, no Mercado Pago Hall, na Arena Pacaembu, em São Paulo, o PL oficializou em convenção nacional a candidatura de Flávio Bolsonaro à Presidência, ainda sem vice definido. No discurso, Flávio chamou o pai de maior e mais injustiçado líder político brasileiro, vítima da maior farsa que o país testemunhou, e disse que ainda o afeta profundamente ver a imagem do pai 'ainda que com inteligência artificial'. O vídeo exibido reproduziu imagem e voz do ex-presidente, que na peça afirma estar 'preso e calado por uma decisão injusta'. O PT acionou o TSE questionando 'o uso irregular de inteligência artificial e propaganda eleitoral antecipada', e o julgamento foi pautado para 01/09/2026, às 19h. Michelle Bolsonaro não compareceu e enviou vídeo.",
   "observacao": "O RESULTADO do julgamento do TSE de 01/09/2026 NÃO foi verificado em nenhuma fonte aberta e não pode ser afirmado no dossiê — o item registra apenas a convenção, o conteúdo do vídeo e a existência da ação do PT, sem afirmar condenação nem absolvição eleitoral. Corrigidas as alegações do PT para o que a fonte diz ('uso irregular de inteligência artificial e propaganda eleitoral antecipada'): a versão proposta acrescentava 'deepfake' e 'transferência ilícita de capital político', não confirmados. Removidos Valdemar Costa Neto, Milei e Tarcísio da lista de pessoas, ausentes das fontes abertas.",
   "pessoas": [
    "flavio",
    "jair",
    "michelle"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/assista-ao-discurso-de-flavio-bolsonaro-na-convencao-do-pl-na-integra/",
     "data": "2026-07-25",
     "trecho": "ainda que com inteligência artificial",
     "tier": "referencia"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/121748/tse-marca-para-a-proxima-terca-julgamento-de-video-de-bolsonaro-com-ia",
     "data": "2026-08-28",
     "trecho": "preso e calado por uma decisão injusta",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pl-realiza-convencao-nacional-em-25-de-julho-par",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-07-25",
   "status": "fato",
   "titulo": "PL realiza convenção nacional em 25 de julho para lançar Flávio Bolsonaro à Presidência",
   "resumo": "O PL realizou convenção nacional em 25/07/2026, às 10h, no Mercado Pago Hall, na Arena Pacaembu, em São Paulo, para lançar o senador Flávio Bolsonaro (PL-RJ) candidato à Presidência da República. Na data da convenção a chapa estava incompleta: o nome do vice não havia sido anunciado e não havia apoio formal de partidos do centrão, o que poderia ampliar o tempo de propaganda eleitoral. O evento também tratou de candidaturas ao Senado por São Paulo (o deputado estadual André do Prado e o deputado federal Guilherme Derrite) e à Câmara (Renato Bolsonaro e Padre Kelmon). Eduardo Bolsonaro, Carla Zambelli e Ricardo Salles não disputam este ciclo.",
   "observacao": "Cortados por falta de lastro na fonte: os nomes de Daniella Marques e Simone Marquetto como cotadas para vice, a previsão de registro da chapa no TSE \"nos primeiros dias de agosto\" (o prazo legal noticiado pelo Poder360 era 15/08) e a cifra de R$ 881,6 milhões do FEFC para o PL. A matéria do O Tempo é prospectiva (do dia do evento); a segunda fonte serve apenas para confirmar que a convenção ocorreu.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/7/25/pl-faz-convencao-neste-sabado-para-confirmar-flavio-bolsonaro-ao-planalto-em-chapa-ainda-indefinida",
     "data": "2026-07-25",
     "trecho": "Mercado Pago Hall, na Arena Pacaembu, às 10h",
     "tier": "referencia"
    },
    {
     "veiculo": "Wikipedia (Flávio Bolsonaro 2026 presidential campaign)",
     "url": "https://en.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro_2026_presidential_campaign",
     "data": "2026-09-09",
     "trecho": "The convention that formalized his candidacy took place on July 25, 2026, at the Pacaembu Convention Center",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "plano-de-governo-de-flavio-registrado-no-tse-tem",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-08",
   "status": "fato",
   "titulo": "Plano de governo de Flávio registrado no TSE tem 76 páginas e capítulo central sobre segurança",
   "resumo": "O plano de governo de Flávio Bolsonaro registrado no TSE, intitulado \"Para o Brasil vencer o atraso\", tem 76 páginas. O capítulo \"Brasil sem medo\" concentra as propostas de segurança pública: declarar PCC, Comando Vermelho e milícias como organizações narcoterroristas; reduzir a maioridade penal para 16 anos, com punição de maiores de 14 em crimes graves; castração química para condenados por abuso sexual; fim da progressão de regime para crimes hediondos; dobrar os investimentos federais em segurança em quatro anos; criar cinco presídios de segurança máxima em modelo inspirado em El Salvador; um Sistema Nacional de Fronteira com tropa de elite em fronteiras, portos e aeroportos; e um sistema de reconhecimento facial batizado de \"Muralha Brasileira\".",
   "observacao": "São propostas de campanha, sem valor normativo; várias dependeriam de emenda constitucional. Data reduzida a mês: a fonte não informa a data de entrega do plano, que acompanha o registro da candidatura (13/08). Cortados por falta de lastro: \"nove eixos temáticos\", \"diretrizes para 2027-2030\" e as propostas de corte de ministérios, redução de tributos e fim da reeleição presidencial.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/propostas-flavio-bolsonaro-plano-de-governo-seguranca-publica/",
     "data": "2026-08-19",
     "trecho": "Declarar PCC, CV, milícias e todas as outras facções como organizações narcoterroristas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "michelle-bolsonaro-e-oficializada-ao-senado-pelo",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-08-02",
   "status": "fato",
   "titulo": "Michelle Bolsonaro é oficializada ao Senado pelo DF e endossa a candidatura de Flávio",
   "resumo": "Em 02/08/2026, no Parque da Cidade, em Brasília, o PL oficializou Michelle Bolsonaro como candidata ao Senado pelo Distrito Federal. Ela não compareceu ao evento: em mensagem, disse estar havia mais de dez dias com enxaqueca aguda e que 'fui para o hospital, onde fiquei internada'. Na mesma mensagem, endossou publicamente a candidatura presidencial do enteado, afirmando que 'meu marido escolheu o Flávio para estar à frente' e que caminhariam 'juntos e à passos largos'. O endosso consolidou em público a trégua com Flávio após a crise familiar de junho.",
   "observacao": "Mantido apenas o núcleo confirmado na fonte aberta. Removidos Bia Kicis e Celina Leão, que a versão proposta citava mas o texto aberto não confirma. A matéria não especifica quem leu a mensagem no palco. Dados de pesquisa eleitoral sobre a disputa no DF não foram confirmados em fonte aberta e não constam.",
   "pessoas": [
    "michelle",
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/michelle-bolsonaro-e-oficializada-como-candidata-ao-senado-pelo-df/",
     "data": "2026-08-02",
     "trecho": "meu marido escolheu o Flávio para estar à frente",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-anuncia-alfredo-gaspar-pl-al-co",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-08-05",
   "status": "fato",
   "titulo": "Flávio Bolsonaro anuncia Alfredo Gaspar (PL-AL) como vice em chapa formada só pelo PL",
   "resumo": "Em 05/08/2026, na sede do PL em Brasília, Flávio Bolsonaro anunciou o deputado federal Alfredo Gaspar (PL-AL) como candidato a vice-presidente. Gaspar é ex-integrante do Ministério Público e foi relator da CPMI do INSS; havia lançado pouco antes candidatura ao Senado por Alagoas. A chapa ficou restrita ao PL depois que PP, União Brasil, Republicanos e Podemos recusaram coligação nacional e optaram pela neutralidade, embora nomes desses partidos tenham declarado apoio pessoal. Ao justificar a escolha, Flávio disse: \"A pessoa que tem que ser o meu vice é aquele vice que não volta pra cena do crime\". Michelle Bolsonaro não compareceu ao evento. O anúncio ocorreu no último dia do prazo de convenções partidárias.",
   "observacao": "Cortada por falta de lastro a fala atribuída a Gaspar (\"Vossa Excelência escolheu uma pessoa simples, nordestina...\"). A fonte do Poder360 é uma cobertura ao vivo publicada antes do anúncio e serve para o local (sede do PL em Brasília) e o contexto de neutralidade dos partidos do centrão.",
   "pessoas": [
    "flavio",
    "alfredo-gaspar",
    "michelle"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/flavio-anuncia-alfredo-gaspar-como-vice-em-chapa-pura-a-presidencia/",
     "data": "2026-08-05",
     "trecho": "A pessoa que tem que ser o meu vice é aquele vice que não volta pra cena do crime",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/ao-vivo-flavio-bolsonaro-anuncia-vice-para-disputa-a-presidencia/",
     "data": "2026-08-05",
     "trecho": "o nome escolhido por Flávio deve ser do próprio PL",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-usa-promessa-de-mandato-unico-e",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2026-08-10",
   "status": "declaracao",
   "titulo": "Flávio Bolsonaro usa promessa de mandato único e sua PEC 4/2026 para negociar apoio de partidos",
   "resumo": "Reportagem de 10 de agosto de 2026 registrou que Flávio Bolsonaro transformou o fim da reeleição presidencial em um dos principais ativos na negociação com partidos de centro e centro-direita, com o objetivo de reduzir resistências à sua candidatura em 2026 e manter aberta a disputa pelo Planalto em 2030 — cenário preservado por Tarcísio de Freitas, que optou pela reeleição em São Paulo. O aceno se apoia na PEC 4/2026, apresentada por ele no Senado, que impede o presidente da República de disputar um segundo mandato seguido, com aplicação imediata, inclusive para quem vencer a eleição deste ano. Em 12 de agosto, o Poder360 informou que o fim da reeleição foi incorporado ao plano de governo do candidato, com o argumento de que 'sem a necessidade de disputar um novo mandato, o presidente poderá concentrar sua energia em governar'. É promessa de campanha apoiada em proposta ainda não votada pelo Senado.",
   "observacao": "Retirados a data de apresentação da PEC ('março de 2026') e o trecho da justificação sobre 'independência decisória do governante': nenhuma das duas fontes abertas traz esses elementos, e a data não foi confirmada na base oficial do Senado. O fato dentro da janela é o uso político da proposta como moeda de negociação, não a apresentação da PEC.",
   "pessoas": [
    "flavio",
    "tarcisio-de-freitas"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/flavio-bolsonaro-promete-mandato-unico-para-destravar-apoios-e-a-sucessao-de-2030/",
     "data": "2026-08-10",
     "trecho": "impede o presidente de disputar um segundo mandato seguido",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-defende-fim-da-reeleicao-para-presidente-em-plano-de-governo/",
     "data": "2026-08-12",
     "trecho": "sem a necessidade de disputar um novo mandato, o presidente poderá concentrar sua energia em governar",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pesquisas-de-agosto-lula-lidera-flavio-aparece-c",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-08-11",
   "status": "fato",
   "titulo": "Pesquisas de agosto: Lula lidera; Flávio aparece com 30% (Quaest) e 28,7% (CNT/MDA) no 1º turno",
   "resumo": "Duas pesquisas registradas no TSE mediram a disputa presidencial em agosto de 2026. A Genial/Quaest (campo de 31/07 a 03/08, 2.004 entrevistas, margem de 2 pontos, nível de confiança de 95%, registro BR-06591/2026) apontou no 1º turno estimulado Lula (PT) com 39% e Flávio Bolsonaro (PL) com 30%, com os demais candidatos entre 2% e 4%; no 2º turno, Lula 44% x Flávio 39%. A CNT/MDA (campo de 05 a 09/08, 2.002 entrevistas, margem de 2,2 pontos, nível de confiança de 95%, registro BR-06935/2026) apontou Lula 42,4% x Flávio 28,7% no 1º turno e Lula 48% x Flávio 39,1% no 2º turno. Em ambos os institutos, Lula liderava todos os cenários de 2º turno testados.",
   "observacao": "Pesquisa é retrato do momento, com margem de erro; não é previsão de resultado. Os percentuais individuais dos candidatos menores no cenário Quaest não foram detalhados pela fonte e foram substituídos pela faixa que ela informa.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/genial-quaest-presidente-agosto-2026/",
     "data": "2026-08-05",
     "trecho": "2.004 entrevistados pela Genial/Quaest de 31 de julho a 3 de agosto de 2026",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/cnt-mda-presidente-agosto-2026/",
     "data": "2026-08-11",
     "trecho": "Lula: 42,4%; Flávio Bolsonaro: 28,7%; registro BR-06935/2026",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-reune-em-brasilia-e-apoia-47-ca",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-08-11",
   "status": "fato",
   "titulo": "Flávio Bolsonaro reúne em Brasília e apoia 47 candidaturas ao Senado distribuídas em nove partidos",
   "resumo": "Flávio Bolsonaro reuniu-se em Brasília, em 11 de agosto de 2026, com o grupo de candidatos ao Senado apoiado por ele nas eleições de outubro. São 47 candidaturas: 33 do PL e 14 de coligações estaduais, distribuídas por nove partidos — além do PL, Republicanos, Novo, MDB, Progressistas, Podemos, PSD, PSDB e União Brasil. A articulação combina candidaturas próprias com alianças estaduais no pleito que renova parte do Senado.",
   "observacao": "Retirada a citação atribuída ao senador sobre a renovação de dois terços do Senado e um Senado 'ainda mais de centro-direita', que não foi localizada na reportagem aberta, assim como a menção ao anúncio prévio em live. A data foi corrigida da publicação (13/08) para a do fato (11/08).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/quem-sao-candidatos-senado-apoiados-flavio-bolsonaro/",
     "data": "2026-08-13",
     "trecho": "o pré-candidato à Presidência se reuniu com o grupo apoiado por ele na quarta-feira (11), em Brasília",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-so-participa-de-debates-em-que-lu",
   "tipo": "declaracao",
   "tema": "eleicoes",
   "data": "2026-08-11",
   "status": "declaracao",
   "titulo": "Flávio diz que só participa de debates em que Lula estiver presente",
   "resumo": "Em 11/08/2026, Flávio Bolsonaro condicionou sua ida a debates presidenciais à presença de Lula: \"Eu vou aonde o Lula estiver, nós vamos estar lá\", acrescentando que quem deve explicações ao Brasil é Lula e que seu debate é com ele. Na data, os candidatos ainda não haviam confirmado presença no primeiro debate, marcado pela Band para 23/08/2026.",
   "observacao": "Removida da versão original a afirmação de que Flávio, Lula e Zema teriam faltado ao debate da Band de 23/08: não há fonte aberta verificada para isso e o próprio item admitia não tê-la aberto.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-diz-que-so-vai-a-debates-em-que-lula-for/",
     "data": "2026-08-11",
     "trecho": "Eu vou aonde o Lula estiver, nós vamos estar lá",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "campanha-de-flavio-lidera-arrecadacao-com-r-42-m",
   "tipo": "financeiro",
   "tema": "eleicoes",
   "data": "2026-08-26",
   "status": "fato",
   "titulo": "Campanha de Flávio lidera arrecadação com R$ 42 milhões do PL e R$ 6,01 de pessoas físicas",
   "resumo": "Segundo dados do TSE consultados em 26/08/2026, a campanha de Flávio Bolsonaro liderava a arrecadação entre os candidatos ao Planalto, com R$ 42 milhões declarados: R$ 42 milhões repassados pelo PL e R$ 6,01 em doações de pessoas físicas. Lula aparecia em segundo, com R$ 35,2 milhões, sendo R$ 35.150.000 do PT e R$ 20.600,90 de pessoas físicas. Antes disso, em 30/07/2026, durante transmissão ao vivo no YouTube, Flávio lançou uma vaquinha virtual pela plataforma Contribua, que recebe Pix, cartão e boleto; até a manhã de 31/07 a arrecadação era de cerca de R$ 24 mil, com 615 participantes e contribuições entre R$ 10 e R$ 1.064.",
   "observacao": "Prestações de contas parciais na data da consulta; o próprio Poder360 ressalva que os dados do TSE podem divergir dos divulgados pelas campanhas. Cortados por falta de lastro: a atribuição explícita dos R$ 42 milhões ao FEFC (a fonte diz apenas que vieram do PL), a cifra de R$ 881,6 milhões do FEFC para o PL, o prazo de \"cerca de dez dias\" e a citação direta atribuída a Flávio sobre a vaquinha.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-lidera-em-doacoes-a-candidatos-ao-planalto-lula-e-2o/",
     "data": "2026-08-26",
     "trecho": "Os dados do TSE podem não bater com as informações divulgadas pelas campanhas",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/flavio-arrecada-r-24-mil-no-lancamento-de-vaquinha-virtual-para-campanha-presidencial/",
     "data": "2026-07-31",
     "trecho": "R$ 24 mil nas primeiras horas de sua campanha de financiamento coletivo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "horario-eleitoral-estreia-com-flavio-tendo-4min2",
   "tipo": "midia",
   "tema": "eleicoes",
   "data": "2026-08-28",
   "status": "fato",
   "titulo": "Horário eleitoral estreia com Flávio tendo 4min20 contra 5min31 de Lula, por disputar sem coligação",
   "resumo": "O horário eleitoral gratuito em rádio e TV começou em 28/08/2026 e vai até 1º de outubro, três dias antes do 1º turno, com quatro candidatos presidenciais com tempo na tela. Flávio Bolsonaro tem 4 minutos e 20 segundos por bloco; Lula, 5 minutos e 31 segundos; Ronaldo Caiado (PSD), 2 minutos e 2 segundos; e Augusto Cury (Avante), 35 segundos. Flávio disputa pelo PL sem coligação nacional, enquanto Lula concorre pela coligação \"Brasil Pronto pra Mais\" (PDT, PSB, Federação Brasil da Esperança — PT, PCdoB e PV —, PSOL e Rede), que ficou com 434 das 980 inserções de 30 segundos. Na estreia, em 29/08, o programa de Flávio tratou de custo de vida (\"A caixa de chocolate, que vinha 20, agora vem 16\") e segurança pública, e trouxe a mulher, Fernanda, e uma homenagem à mãe, Rogéria Bolsonaro. Lula usou cerca de um minuto do seu tempo para criticar Flávio, mencionando áudios em que o senador pediria recursos financeiros.",
   "observacao": "Cortados por falta de lastro: a bancada de \"98 deputados\" do PL, a citação \"as pessoas nunca tiveram tanto medo\", a afirmação de que Flávio citou Jair Bolsonaro uma única vez e a cifra de \"R$ 61 milhões\" atribuída ao ataque de Lula — a fonte fala em áudios com pedido de recursos, sem valor, e a peça do PT suspensa pelo TSE menciona R$ 134 milhões. As duas fontes divergem no tempo de Lula (5min31 na Exame, 5min32 no ND Mais).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/horario-eleitoral-na-tv-comeca-nesta-sexta-lula-tera-27-mais-tempo-que-flavio-bolsonaro/",
     "data": "2026-08-28",
     "trecho": "Flávio disputa a eleição pelo PL sem uma coligação nacional",
     "tier": "agregador"
    },
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/estreia-do-horario-eleitoral-2026-lula-flavio-bolsonaro-caiado-cury/",
     "data": "2026-08-29",
     "trecho": "A caixa de chocolate, que vinha 20, agora vem 16",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pesquisas-do-inicio-da-campanha-atlasintel-quaes",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-03",
   "status": "fato",
   "titulo": "Pesquisas do início da campanha: AtlasIntel, Quaest e Datafolha mostram 2º turno apertado",
   "resumo": "Três pesquisas registradas no TSE mediram a disputa no início do período oficial de campanha. A AtlasIntel (campo de 25 a 30/08, 5.014 entrevistas, margem de 1 ponto, registro BR-07972/2026), divulgada em 31/08, apontou 2º turno com Lula 47,1% x Flávio 42,6%, diferença de 4,5 pontos ante 6,3 pontos em julho. A Quaest (campo de 30/08 a 01/09, 2.004 entrevistas, margem de 2 pontos, registro BR-07065/2026) indicou 1º turno com Lula 37%, Flávio 30% e Augusto Cury 10%; no 2º turno, Lula 42% x Flávio 41%. O Datafolha (2.002 entrevistas, margem de 2 pontos, registro BR-03669/2026), divulgado em 03/09, apontou 1º turno com Lula 39% e Flávio 32% e 2º turno com Lula 46% x Flávio 44%, com 9% de brancos e nulos e 2% de indecisos — empate técnico dentro da margem de erro.",
   "observacao": "Divergências entre fontes: o registro do Datafolha aparece como TSE-03669/2026 na CNN e BR-03669/2026 na Gazeta do Povo; o campo é \"1º a 3 de setembro\" na Gazeta e \"1 e 2 de setembro\" na CNN. Cortados por falta de lastro os percentuais dos demais candidatos no cenário Datafolha (Cury 7%, Renan Santos 4%, Caiado 4%, Zema 2%, Marçal 2%). Institutos usam metodologias distintas (AtlasIntel é on-line/recrutamento digital), o que explica parte da variação.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/datafolha-presidente-setembro-2026/",
     "data": "2026-09-03",
     "trecho": "2.002 entrevistados pelo Datafolha Instituto de Pesquisas, de 1º a 3 de setembro de 2026",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/datafolha-lula-tem-46-das-intencoes-de-voto-no-2o-turno-flavio-44/",
     "data": "2026-09-03",
     "trecho": "2.002 respondentes; margem de erro de dois pontos; registro TSE-03669/2026",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/quaest-presidente-setembro-2026/",
     "data": "2026-09-02",
     "trecho": "Lula 37%, Flávio Bolsonaro 30%; 2º turno: Lula 42%, Flávio 41%",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "tse-admite-aije-da-coligacao-de-lula-contra-chap",
   "tipo": "processo",
   "tema": "eleicoes",
   "data": "2026-09-08",
   "status": "processo",
   "titulo": "TSE admite AIJE da coligação de Lula contra chapa Flávio/Alfredo Gaspar por ato em Barretos",
   "resumo": "O corregedor-geral eleitoral, ministro Antonio Carlos Ferreira, admitiu a Ação de Investigação Judicial Eleitoral proposta pela coligação 'Brasil Pronto pra Mais' (Lula/Alckmin) contra Flávio Bolsonaro e o vice Alfredo Gaspar por suposto abuso de poder econômico na 71ª Festa do Peão de Barretos (22/8), onde o candidato discursou no palco principal, em estrutura que a coligação diz ter sido custeada por empresas privadas, para público estimado em 60 mil pessoas ('o eleitor que comprou um ingresso para assistir a shows artísticos foi surpreendido com um verdadeiro ato de campanha eleitoral durante o intervalo'). A coligação pede cassação dos registros e inelegibilidade por oito anos. O TSE entendeu que os fatos 'podem, em tese, configurar irregularidade eleitoral e, por isso, devem ser apurados' e deu cinco dias para defesa; só depois deliberará sobre provas testemunhais. Não há juízo de mérito. A campanha de Flávio não se manifestou nas matérias consultadas.",
   "observacao": "Data da decisão inferida pela publicação do BNews às 19h33 de 8/9. BNews fala em 'recursos públicos e privados' na festa; O Povo, em estrutura custeada por empresas privadas — mantida a versão do O Povo (Estadão), que reproduz a petição.",
   "pessoas": [
    "flavio",
    "alfredo-gaspar"
   ],
   "fontes": [
    {
     "veiculo": "BNews",
     "url": "https://www.bnews.com.br/noticias/politica/tse-abre-investigacao-contra-chapa-de-flavio-bolsonaro-que-pode-deixa-la-inelegivel.html",
     "data": "2026-09-08",
     "trecho": "somente após apresentar a defesa, a deliberação sobre os requerimentos de produção de prova testemunhal irá começar.",
     "tier": "agregador"
    },
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/2026/09/09/tse-abre-investigacao-sobre-suposto-abuso-de-poder-economico-em-ato-de-flavio-em-barretos.html",
     "data": "2026-09-09",
     "trecho": "podem, em tese, configurar irregularidade eleitoral e, por isso, devem ser apurados",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "pool-sbt-redetv-cnn-cancela-debate-de-14-09-apos",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-09-08",
   "status": "fato",
   "titulo": "Pool SBT/RedeTV!/CNN cancela debate de 14/09 após Lula e Flávio não confirmarem presença",
   "resumo": "Em 08/09, o pool 'O Momento da Decisão' (CNN Brasil, Exame, Metrópoles, Nova Brasil FM, Rádio Itatiaia, RedeTV!, Rede Vida, SBT, SBT News, Terra e VEJA+ TV) anunciou o cancelamento do debate presidencial marcado para 14/09, porque Lula (PT) e Flávio Bolsonaro (PL) não confirmaram participação até o prazo de 07/09. Flávio mantém a posição de não participar de debates sem Lula presente; ambos já haviam faltado ao debate da Band em 23/08. Seguem no calendário os debates da Record (27/09, 21h) e da Globo (01/10, 21h30), sem confirmação dos dois líderes.",
   "observacao": "Versão de Flávio: a condição pública de só debater com Lula no palco. Nenhuma nota específica da campanha sobre o cancelamento nas matérias abertas.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/ula-flavio-debate-cancelado",
     "data": "2026-09-08",
     "trecho": "o motivo foi a ausência de confirmação de Lula (PT) e Flávio Bolsonaro (PL) dentro do prazo estabelecido pelos organizadores",
     "tier": "referencia"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/proximos-debates-tv-candidatos-presidente/",
     "data": "2026-09-09",
     "trecho": "Flávio confirmou que não vai participar de debates sem a presença de Lula",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mendonca-no-tse-manda-apagar-video-de-ia-que-mos",
   "tipo": "decisao_judicial",
   "tema": "eleicoes",
   "data": "2026-09-09",
   "status": "decisao_judicial",
   "titulo": "Mendonça, no TSE, manda apagar vídeo de IA que mostrava Flávio 'preso' em frente ao Banco Master",
   "resumo": "Liminar assinada em 9/9 pelo ministro André Mendonça, como integrante do TSE, determinou a exclusão de vídeo gerado por inteligência artificial em que Flávio Bolsonaro aparece dançando diante de uma fachada do Banco Master entre cédulas e, em seguida, sendo algemado por agentes da PF; o dono do perfil foi intimado. Para o ministro, o conteúdo fotorrealista tinha 'grau de verossimilhança suficiente para que, no curso ordinário da visualização, o eleitor médio possa apreendê-lo como documentação autêntica' e construía a prisão fictícia de modo a 'dar aparência documental a um acontecimento que nunca ocorreu'. As matérias não informam quem pediu a remoção nem a plataforma. A Revista Fórum contrapõe que a relação Flávio-Vorcaro está documentada pela PF e que o TSE liberou dias antes vídeo de IA de Jair Bolsonaro feito para a campanha de Flávio.",
   "observacao": "Decisão de 9/9 só noticiada em 16/9. Revista Fórum é veículo de linha editorial à esquerda; usada como segunda fonte.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles (Grande Angular)",
     "url": "https://www.metropoles.com/colunas/grande-angular/mendonca-manda-apagar-video-de-ia-que-ligava-flavio-bolsonaro-a-vorcaro",
     "data": "2026-09-16",
     "trecho": "grau de verossimilhança suficiente para que, no curso ordinário da visualização, o eleitor médio possa apreendê-lo como documentação autêntica",
     "tier": "referencia"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/mendonca-video-flavio-vorcaro/",
     "data": "2026-09-16",
     "trecho": "dar aparência documental a um acontecimento que nunca ocorreu",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "prestacao-parcial-ao-tse-flavio-lidera-arrecadac",
   "tipo": "financeiro",
   "tema": "eleicoes",
   "data": "2026-09-09",
   "status": "fato",
   "titulo": "Prestação parcial ao TSE: Flávio lidera arrecadação com R$ 44,4 milhões, R$ 42,9 mi vindos do PL",
   "resumo": "Dados de prestação de contas parcial do TSE divulgados em 09/09 mostram Flávio Bolsonaro (PL) na liderança da arrecadação entre presidenciáveis, com R$ 44,4 milhões, dos quais R$ 42,9 milhões repassados pelo PL. Lula (PT) aparece com R$ 35,9 milhões (R$ 35,1 mi do PT); Ronaldo Caiado (PSD) R$ 6,6 mi (R$ 4,1 mi do partido); Romeu Zema (Novo) R$ 3,9 mi (R$ 3,6 mi do partido); Renan Santos (Missão) R$ 1,3 mi (R$ 1,22 mi de financiamento coletivo); Augusto Cury (Avante) R$ 317 mil (R$ 250 mil do próprio bolso). A arrecadação pode seguir até 04/10.",
   "observacao": "Cortados: prazo de prestação final (14/11) e cifra de gastos (R$ 49,5 mi), não sustentados pela fonte aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/tse-flavio-bolsonaro-recebe-r-44-milhoes-e-lidera-doacoes-eleitorais",
     "data": "2026-09-09",
     "trecho": "R$ 42,9 milhões vieram do Partido Liberal (PL)",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "datafolha-810-09-lula-39-x-flavio-35-no-1-turno",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-11",
   "status": "fato",
   "titulo": "Datafolha (8–10/09): Lula 39% x Flávio 35% no 1º turno; 2º turno 46% x 44%, empate técnico",
   "resumo": "Pesquisa Datafolha divulgada em 11/09 (campo 8 a 10/09, 2.002 entrevistados, margem de 2 pontos, registro BR-01833/2026) mostra Lula (PT) com 39% e Flávio Bolsonaro (PL) com 35% no cenário estimulado de 1º turno, empate técnico dentro da margem. Seguem Augusto Cury (Avante) 6%, Ronaldo Caiado (PSD) 4% e Renan Santos (Missão) 3%. Na simulação de 2º turno, Lula 46% x Flávio 44%; contra Cury, Lula 45% x 43%; contra Renan Santos, 48% x 37%.",
   "observacao": "Cortada a comparação com a rodada anterior (38% x 32%), não presente na fonte aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/datafolha-presidente-setembro-2026-2/",
     "data": "2026-09-11",
     "trecho": "Lula (PT): 39%; Flávio Bolsonaro (PL): 35%",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-faz-carreata-em-campos-com-douglas-ruas-e",
   "tipo": "evento",
   "tema": "eleicoes",
   "data": "2026-09-12",
   "status": "fato",
   "titulo": "Flávio faz carreata em Campos com Douglas Ruas e promete 'neutralizar' narcotraficantes",
   "resumo": "Em 12/09, Flávio Bolsonaro cumpriu agenda em Cabo Frio e Campos dos Goytacazes (RJ) ao lado de Douglas Ruas (PL), candidato ao governo do RJ. Em Campos, fez carreata acompanhado de Wladimir Garotinho (ex-prefeito e coordenador da campanha), Carlos Jordy e Carlos Portinho (candidatos ao Senado) e Sóstenes Cavalcante (Câmara). No discurso, tratou de segurança pública, preço dos alimentos e proposta de CNH a partir dos 16 anos, e disse: 'Os narcotraficantes serão presos ou neutralizados e vamos devolver a soberania aos territórios'. Não deu entrevista após a fala.",
   "observacao": "Fonte regional única. Cortados: passagens por Macaé e Itaperuna e duração de 'cerca de uma hora' da carreata, não confirmadas na fonte.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agenda do Poder",
     "url": "https://agendadopoder.com.br/flavio-bolsonaro-e-douglas-ruas-fazem-carreata-juntos-em-campos-dos-goytacazes/",
     "data": "2026-09-12",
     "trecho": "Os narcotraficantes serão presos ou neutralizados e vamos devolver a soberania aos territórios",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "quaest-1013-09-lula-36-x-flavio-31-no-2-turno-fl",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-14",
   "status": "fato",
   "titulo": "Quaest (10–13/09): Lula 36% x Flávio 31%; no 2º turno Flávio 42% x Lula 40%, empate técnico",
   "resumo": "Pesquisa Genial/Quaest divulgada em 14/09 (campo 10 a 13/09, 2.004 entrevistados, margem de 2 pontos, registro BR-03607/2026) mostra Lula 36% e Flávio Bolsonaro 31% no 1º turno, com Cury 7%, Renan Santos 4%, Caiado 4% e Zema 1%; indecisos 10%, brancos/nulos 7%. Na rodada de 07/09, Flávio tinha 29% e Lula os mesmos 36%; a diferença caiu de sete para cinco pontos. No 2º turno, Flávio 42% x Lula 40%, empate técnico (brancos/nulos 13%, indecisos 5%). Ambos têm 55% de rejeição. A próxima rodada está prevista para 21/09. É a primeira vantagem numérica do senador na série da Quaest para o 2º turno.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/09/14/pesquisa-quaest-lula-registra-36-e-flavio-bolsonaro-alcanca-31-no-primeiro-turno/",
     "data": "2026-09-14",
     "trecho": "Flávio Bolsonaro aparece com 42% e Lula soma 40%, configurando uma situação de empate técnico",
     "tier": "referencia"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/a-nova-pesquisa-quaest-sobre-lula-x-flavio-bolsonaro-a-menos-de-duas-semanas-do-1o-turno/",
     "data": "2026-09-16",
     "trecho": "O cenário, porém, é de empate técnico",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-tem-42-contra-40-de-lula-no-2o-turno-diz-quaest/",
     "data": "2026-09-14",
     "trecho": "55% de rejeição cada",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "cnt-mda-913-09-lula-40-5-x-flavio-30-4-no-1-turn",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-15",
   "status": "fato",
   "titulo": "CNT/MDA (9–13/09): Lula 40,5% x Flávio 30,4% no 1º turno; 2º turno 47,3% x 40%",
   "resumo": "Pesquisa CNT/MDA divulgada em 15/09 (campo 9 a 13/09, 2.002 eleitores, coleta presencial domiciliar e em ponto de fluxo, margem de 2,2 pontos, registro BR-06902/2026) mostra Lula com 40,5% e Flávio Bolsonaro com 30,4% no 1º turno. No 2º turno, Lula 47,3% x Flávio 40%, com 10,2% de brancos/nulos e 2,5% de indecisos. Nos demais cenários de 2º turno, Lula vence Cury (45,3% x 38,4%), Caiado (46,4% x 37,3%), Zema (47,7% x 34,5%) e Renan Santos (47,3% x 33,9%).",
   "observacao": "Cortados os percentuais de Cury, Caiado e Renan Santos no 1º turno e o juízo de 'mais favorável a Lula da semana', não sustentados pela fonte aberta.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Exame",
     "url": "https://exame.com/brasil/cnt-mda-lula-tem-473-e-flavio-bolsonaro-40-no-2o-turno/",
     "data": "2026-09-15",
     "trecho": "Lula: 47,3%; Flávio: 40%; Brancos/nulos: 10,2%; Indecisos: 2,5%",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "acm-neto-evita-palanque-com-flavio-na-bahia-e-re",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-17",
   "status": "fato",
   "titulo": "ACM Neto evita palanque com Flávio na Bahia e reitera apoio a Caiado no 1º turno",
   "resumo": "Na agenda de Flávio Bolsonaro em Vitória da Conquista (BA) em 17/09 (concentração no antigo aeroporto e motocarreata até o Estádio Lomanto Júnior, recebido por João Roma, presidente do PL-BA e candidato ao Senado), o candidato ao governo ACM Neto (União Brasil) não participou: cumpriu reuniões com lideranças pela manhã, carreata em Eunápolis à tarde e caminhada e comício em Ibicaraí à noite. Neto já declarou apoio a Ronaldo Caiado (PSD) para presidente; sobre bandeiras com os nomes de Neto e Flávio vistas no ato de 7 de Setembro em Salvador, a campanha disse que não havia produzido o material. Não há manifestação do PL-BA ou de Flávio sobre a ausência na matéria aberta.",
   "observacao": "Fonte regional única aberta; sem contraditório do PL na matéria.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "bahia.ba",
     "url": "https://bahia.ba/politica/acm-neto-se-afasta-de-flavio-bolsonaro-em-agenda-na-bahia/",
     "data": "2026-09-17",
     "trecho": "ACM Neto já declarou apoio a Ronaldo Caiado (PSD) na disputa pela Presidência da República",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "atlasintel-1116-09-lula-44-1-x-flavio-41-7-no-1",
   "tipo": "noticia",
   "tema": "eleicoes",
   "data": "2026-09-17",
   "status": "fato",
   "titulo": "AtlasIntel (11–16/09): Lula 44,1% x Flávio 41,7% no 1º turno; 2º turno Flávio 47,2% x Lula 46,8%",
   "resumo": "Pesquisa AtlasIntel divulgada em 17/09 (campo 11 a 16/09, 5.018 entrevistados, margem de 1 ponto, registro BR-06221/2026) mostra Lula 44,1% e Flávio Bolsonaro 41,7% no 1º turno em votos totais, seguidos de Renan Santos 5,1%, Cury 3,5%, Caiado 1,7%, Zema 1,1% e Samara 0,7%; em votos válidos, Lula 45% x Flávio 42,6%. No 2º turno, Flávio 47,2% x Lula 46,8%, empate técnico. Aprovação de Lula: 45,4% aprovam, 53,6% desaprovam.",
   "observacao": "Corrigido: Renan Santos tem 5,1% em votos totais (não 5,2% em válidos). Cortado o 2º turno em votos válidos (50,2% x 49,8%), não presente na fonte.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/atlasintel-presidente-setembro-2026-2/",
     "data": "2026-09-17",
     "trecho": "Entrevistou 5.018 pessoas de 11 a 16 de setembro de 2026",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-sugere-conspiracao-no-atentado-a-jair-que",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2022-07-26",
   "status": "declaracao",
   "titulo": "Flávio sugere conspiração no atentado a Jair: 'Quem mandou matar Bolsonaro?'",
   "resumo": "Flávio voltou a alimentar teoria sobre o atentado a faca de 2018, escrevendo: 'A pergunta segue a mesma: Quem mandou matar o Bolsonaro? Ou a pergunta seria por que querem soltar o Adélio?'. A PF concluiu que Adélio Bispo agiu sozinho, sem mandante.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "O Rebate",
     "url": "https://orebate.com.br/brasil/quatro-anos-depois-atentado-contra-bolsonaro-ainda-alimenta-teorias-da-conspiracao-a-direita-e-a-esquerda",
     "data": "2022",
     "trecho": "A pergunta segue a mesma: Quem mandou matar o Bolsonaro? Ou a pergunta seria por que querem soltar o Adélio?",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "contradicao-flavio-negou-a-monica-bergamo-mar-20",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2025-03-16",
   "status": "declaracao",
   "titulo": "Contradição: Flávio negou a Monica Bergamo (mar/2025) ter tido contato com Vorcaro",
   "resumo": "Em 16/3/2025, Flávio disse à jornalista Monica Bergamo (Folha) que nunca havia tido contato com Daniel Vorcaro. A divulgação dos áudios e mensagens contradiz essa versão, expondo diálogos em tom íntimo e cobranças de pagamento.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/banco-master-veja-historico-de-posicionamentos-de-flavio-sobre-o-caso/",
     "data": "2026-05-13",
     "trecho": "Em 16 de março, Flávio disse a Monica Bergamo que nunca tivera contato com Vorcaro",
     "tier": "referencia"
    },
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/flavio-bolsonaro-mentiu-banco-master-duas-vezes/",
     "data": "2026-05-13",
     "trecho": "Flávio Bolsonaro mentiu sobre o Banco Master duas vezes no mesmo dia",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-promete-anistia-e-projeta-volta-do-pai-ao",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2025-08-01",
   "status": "declaracao",
   "titulo": "Flávio promete anistia e projeta volta do pai ao Planalto em 2027",
   "resumo": "Em ato 'Acorda Brasil', Flávio prometeu anistia aos condenados pelo 8 de janeiro e projetou a volta do pai à Presidência em 2027. Disse que penas como '17 anos por vandalizar uma estátua com batom' seriam, 'em algum momento', declaradas nulas.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/flavio-bolsonaro-promete-anistia-e-projeta-volta-do-pai-ao-planalto-em-2027/",
     "data": "2025-08",
     "trecho": "Flávio Bolsonaro promete anistia e projeta volta do pai ao Planalto em 2027",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "audio-vazado-flavio-pede-r-134-mi-a-vorcaro-para",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2025-11",
   "status": "declaracao",
   "titulo": "Áudio vazado: Flávio pede R$ 134 mi a Vorcaro para filme sobre o pai",
   "resumo": "Em áudio obtido pela Intercept e divulgado em maio/2026, Flávio cobra de Daniel Vorcaro (dono do Banco Master) parcelas atrasadas de cerca de R$ 134 mi para o filme 'Dark Horse' sobre Jair. Diz: 'não pode não honrar com os compromissos... senão a gente perde tudo, ator, diretor'. PT pediu quebra de sigilo.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio negociou diretamente com Vorcaro R$ 134 milhões para bancar filme sobre Jair",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/ouca-o-audio-de-flavio-bolsonaro-pedindo-dinheiro-a-vorcaro/",
     "data": "2026-05-13",
     "trecho": "Não pode não honrar com os compromissos aqui, porque senão a gente perde tudo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-defende-anistia-ao-8-de-janeiro-como-obje",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2025-11-24",
   "status": "declaracao",
   "titulo": "Flávio defende anistia ao 8 de janeiro como 'objetivo único' e descarta dosimetria",
   "resumo": "Após a prisão do pai, Flávio afirmou em reunião do PL que a anistia aos condenados pelo 8 de janeiro é 'objetivo único' e que 'não temos compromisso nenhum com a dosimetria. Que vença quem tiver mais votos'. Comparou penas a tratamento dado a estupradores e pedófilos.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/congresso/2025/11/24/anistia-e-objetivo-unico-e-nao-ha-compromisso-com-dosimetria-diz-flavio-bolsonaro",
     "data": "2025-11-24",
     "trecho": "Não temos compromisso nenhum com a dosimetria. Que vença quem tiver mais votos",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "post-sobre-lula-gera-inquerito-por-calunia-no-st",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-01-03",
   "status": "investigacao",
   "titulo": "Post sobre Lula gera inquérito por calúnia no STF",
   "resumo": "Em 3/1/2026 Flávio postou no X: 'Lula será delatado. É o fim do Foro de São Paulo: tráfico internacional de drogas e armas, lavagem de dinheiro, suporte a terroristas e ditaduras, eleições fraudadas…', com montagem citando Maduro. Moraes abriu inquérito por calúnia; PGR viu imputação 'falsa, pública e vexatória'.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/moraes-abre-acao-contra-flavio-bolsonaro-por-suposta-calunia-lula",
     "data": "2026-04",
     "trecho": "Lula será delatado. É o fim do Foro de São Paulo: tráfico internacional de drogas e armas...",
     "tier": "agregador"
    },
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/454026/stf-moraes-abre-inquerito-contra-flavio-bolsonaro-por-post-sobre-lula",
     "data": "2026",
     "trecho": "Moraes abre inquérito contra Flávio Bolsonaro por post sobre Lula",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "no-cpac-flavio-pede-pressao-diplomatica-dos-eua",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-03-28",
   "status": "declaracao",
   "titulo": "No CPAC, Flávio pede 'pressão diplomática' dos EUA sobre as instituições brasileiras",
   "resumo": "Em discurso na CPAC (Texas), Flávio pediu que os EUA 'apliquem pressão diplomática para que nossas instituições funcionem adequadamente' e por 'eleições livres e justas'. Descreveu o Brasil como 'campo de batalha' pelo futuro do hemisfério por causa de terras-raras. A palavra 'democracia' não apareceu no discurso.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Pública",
     "url": "https://apublica.org/2026/03/o-moderado-candidato-flavio-bolsonaro-e-made-in-usa/",
     "data": "2026-03",
     "trecho": "Apliquem pressão diplomática para que nossas instituições funcionem adequadamente",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-diz-que-sera-presidente-de-fato-nao-o-pai",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-05-08",
   "status": "declaracao",
   "titulo": "Flávio diz que será 'presidente de fato', não o pai, em eventual governo",
   "resumo": "Em entrevista à CNN Brasil, ao lançar pré-candidatura, Flávio afirmou: 'Sendo a vontade do povo, o presidente será Flávio Bolsonaro', e que exerceria pessoalmente a presidência se eleito, com o pai como 'norte e bússola'. Disse ainda que a candidatura é 'irreversível'.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/flavio-bolsonaro-diz-que-sera-presidente-de-fato-em-eventual-governo-nao-o-pai/",
     "data": "2026-05-08",
     "trecho": "Sendo a vontade do povo, o presidente será Flávio Bolsonaro",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/candidatura-e-irreversivel-nao-vamos-voltar-atras-diz-flavio-sobre-2026/",
     "data": "2026",
     "trecho": "Candidatura é irreversível, não vamos voltar atrás, diz Flávio sobre 2026",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-usava-bordao-o-pix-e-do-bolsonaro-o-maste",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-05-13",
   "status": "declaracao",
   "titulo": "Flávio usava bordão 'O Pix é do Bolsonaro, o Master é do Lula' e negava intimidade",
   "resumo": "Flávio repetia em entrevistas e atos o bordão 'O Pix é do Bolsonaro, o Master é do Lula' e afirmou à CNN que 'essa conta do Banco Master está longe de chegar perto da direita'. Após os áudios, justificou o 'irmão' como 'jeito carioca de falar'.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "data": "2026-05-14",
     "trecho": "Flávio negou intimidade com Vorcaro, alegando que usar 'irmão' é o 'jeito carioca de falar'",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/banco-master-veja-historico-de-posicionamentos-de-flavio-sobre-o-caso/",
     "data": "2026-05-13",
     "trecho": "essa conta do Banco Master está longe de chegar perto da direita",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-confirmou-ter-pedido-patrocinio-era-um-fi",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-05-13",
   "status": "declaracao",
   "titulo": "Flávio confirmou ter pedido patrocínio: 'era um filho procurando patrocínio', nega vantagem indevida",
   "resumo": "Após a divulgação dos áudios, Flávio confirmou ter solicitado dinheiro a Vorcaro, mas negou ter recebido vantagem indevida, afirmando que 'era um filho procurando patrocínio' e que 100% dos recursos foram investidos no filme. Citou cláusula de confidencialidade para justificar o sigilo.",
   "pessoas": [],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/entenda-o-caso-flavio-vorcaro-em-6-pontos/",
     "data": "2026-05-14",
     "trecho": "Flávio confirmou solicitar patrocínio, afirmando que 'era um filho procurando patrocínio'",
     "tier": "referencia"
    },
    {
     "veiculo": "Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio confirmou o pedido de dinheiro a Vorcaro horas após a reportagem",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-chama-condenacao-de-eduardo-de-grande-inj",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-06-17",
   "status": "declaracao",
   "titulo": "Flávio chama condenação de Eduardo de 'grande injustiça' e diz que Moraes é suspeito",
   "resumo": "Em 17/06/2026, um dia após a condenação do irmão, o senador Flávio Bolsonaro publicou vídeo nas redes sociais classificando o caso como 'mais uma grande injustiça cometida contra o Eduardo Bolsonaro, num processo que é absolutamente nulo'. Afirmou que Alexandre de Moraes 'deveria se declarar impedido para julgar essa causa, já que em tese ele é a vítima, portanto, ele é parte sim nesse processo', e que 'é suspeito para julgar porque é público e notório que virou uma questão pessoal contra o Eduardo Bolsonaro, parece claramente uma vingança'. São declarações do senador, não fatos apurados: nenhuma arguição de impedimento ou suspeição de Moraes foi acolhida pelo STF nesse processo dentro da janela verificada.",
   "observacao": "Lastro de fonte única para as citações (Metro1, veículo regional da Bahia), conferidas na íntegra no texto aberto. Corrigida a citação: o senador disse 'num processo que é absolutamente nulo', não 'absolutamente nulo sobre qualquer aspecto', como constava da versão proposta.",
   "pessoas": [
    "flavio",
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Metro1",
     "url": "https://www.metro1.com.br/noticias/politica/184058,flavio-bolsonaro-chama-condenacao-de-eduardo-pelo-stf-de-grande-injustica-e-fala-em-vinganca",
     "data": "2026-06-17",
     "trecho": "Mais uma grande injustiça cometida contra o Eduardo Bolsonaro, num processo que é absolutamente nulo",
     "tier": "agregador"
    },
    {
     "veiculo": "MPF / Procuradoria-Geral da República",
     "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/stf-condena-eduardo-bolsonaro-a-quatro-anos-e-dois-meses-de-prisao-pelo-crime-de-coacao-no-curso-do-processo",
     "data": "2026-06-16",
     "trecho": "coação no curso do processo (art. 344 do Código Penal), cometido de forma continuada",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "secom-chama-fala-de-flavio-bolsonaro-no-ustr-de",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-07-07",
   "status": "declaracao",
   "titulo": "Secom chama fala de Flávio Bolsonaro no USTR de 'traição à Pátria'; empresários criticam atuação",
   "resumo": "Em nota de 7 de julho de 2026, a Secretaria de Comunicação Social da Presidência afirmou que, entre os 34 brasileiros inscritos na audiência do USTR, 'só Flávio Bolsonaro não se posicionou contrário às medidas contra o Brasil', e concluiu: 'Convocar uma potência estrangeira a pressionar o próprio país é traição à Pátria'. A nota acusou ainda o senador de omitir sua ligação com o banqueiro Daniel Vorcaro, de quem teria pedido mais de R$ 130 milhões para, segundo alega, produzir um filme sobre o pai. Reportagem do Jornal do Brasil de 8 de julho registrou que participantes classificaram a atuação do senador como deslocada do ambiente técnico do encontro. Publicamente, Flávio afirmou que não se omitiria na defesa do Brasil.",
   "observacao": "'Traição à Pátria' é qualificação política em nota oficial do governo, não tipificação penal, denúncia ou processo: não há apuração formal por esses fatos. Foi retirada a atribuição de que o senador teria 'apenas sugerido o adiamento da medida com claro objetivo eleitoreiro', que não aparece na versão da nota reproduzida pela fonte aberta, e a afirmação de que ele não respondeu às duas reportagens, que também não consta delas.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Band",
     "url": "https://www.band.com.br/politica/eleicoes/2026/governo-chama-fala-de-flavio-em-audiencia-nos-eua-de-traicao-a-patria-202607071958",
     "data": "2026-07-07",
     "trecho": "Convocar uma potência estrangeira a pressionar o próprio país é traição à Pátria",
     "tier": "agregador"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/politica/2026/07/1060213-flavio-bolsonaro-e-criticado-por-fala-em-audiencia-sobre-tarifas-nos-eua.html",
     "data": "2026-07-08",
     "trecho": "classificou a atuação do senador como deslocada do ambiente técnico do encontro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-bolsonaro-chama-dark-horse-de-pagina-vira",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-08-20",
   "status": "declaracao",
   "titulo": "Flávio Bolsonaro chama 'Dark Horse' de 'página virada' e recusa mostrar o contrato com Vorcaro",
   "resumo": "Questionado em agenda de campanha em São Miguel Paulista, zona leste de São Paulo, em 20 de agosto de 2026, Flávio Bolsonaro afirmou sobre o financiamento de 'Dark Horse': 'Olha, já aconteceu. Inclusive eu vi a própria prestação de contas que foi feita do filme' e 'na nossa parte está tudo, página virada', acrescentando que 'quem tem que prestar contas é o Lula, não sou eu'. Ele não apresentou valores recebidos, gastos ou destino dos recursos. Em 24 de agosto, em coletiva na Fiesp, repetiu a recusa ao ser cobrado a mostrar o contrato com Daniel Vorcaro: 'vocês querem insistir em uma relação privada, em um filme privado'. A reportagem registra que ele havia afirmado antes estar '100% disposto' a apresentar o contrato. Em 26 de agosto, o Estado de Minas relatou que o senador terceirizou a divulgação do balanço para a produtora Go Up Entertainment; a perícia privada contratada pela defesa de Karina Gama concluiu que o filme custou cerca de R$ 75,2 milhões e foi bancado por investimentos privados.",
   "observacao": "São declarações do senador, não fatos comprovados. O laudo citado é perícia privada contratada pela defesa da produtora, não perícia oficial. Corrigi o trecho de O Tempo, que trazia uma continuação ('que não tem contrapartida pública') não confirmada. Este item absorveu o item sobre a terceirização da prestação de contas, cuja fonte principal (coluna de Caio Junqueira na CNN) retorna HTTP 404; com isso caiu também a alegação de sigilo do fundo Havengate imposto pelo governo dos EUA, que ficou sem lastro.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "karina-ferreira-da-gama"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/flavio-diz-que-dark-horse-e-pagina-virada-e-evita-detalhar-contas/",
     "data": "2026-08-20",
     "trecho": "na nossa parte está tudo, página virada",
     "tier": "referencia"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/8/25/voces-querem-insistir-em-uma-relacao-privada-diz-flavio-ao-ser-questionado-sobre-dark-horse",
     "data": "2026-08-25",
     "trecho": "vocês querem insistir em uma relação privada, em um filme privado",
     "tier": "referencia"
    },
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/08/7487703-flavio-bolsonaro-terceiriza-prestacao-de-contas-de-dark-horse.html",
     "data": "2026-08-26",
     "trecho": "terceirizou a divulgação de um balanço para a produtora da obra, a Go Up Entertainment",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-sabatina-na-globo-flavio-promete-anistia-ao-p",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-08-28",
   "status": "declaracao",
   "titulo": "Em sabatina na Globo, Flávio promete anistia ao pai e ao 8 de Janeiro ainda na transição",
   "resumo": "Em sabatina exibida pela TV Globo em 28/08/2026, Flávio Bolsonaro afirmou que, se eleito, trabalhará pela anistia ao pai e aos condenados pelos atos de 8 de janeiro de 2023 já durante o período de transição: \"Eu, como presidente da República, vou fazer, vou trabalhar pra que a anistia seja feita ainda na transição\". Disse que, caso a anistia não avance no Congresso, a alternativa seria o indulto. Sobre a condenação de Jair Bolsonaro, afirmou: \"Ele foi julgado pelos seus inimigos\". Sobre o 8 de Janeiro, sustentou que \"as pessoas que estavam naquele oito de janeiro nem se conheciam, nunca se viram na vida\" e que \"não foi encontrada uma arma no oito de janeiro\". São declarações do candidato, contrariadas pela decisão condenatória do STF.",
   "observacao": "Registra declaração de campanha, não fato consumado: anistia depende do Congresso e o indulto tem limites fixados pelo STF. Corrigida a citação sobre a condenação, que na fonte é \"Ele foi julgado pelos seus inimigos\".",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/flavio-diz-que-buscara-anistia-para-bolsonaro-ainda-durante-governo-de-transicao/",
     "data": "2026-08-28",
     "trecho": "vou trabalhar pra que a anistia seja feita ainda na transição",
     "tier": "referencia"
    },
    {
     "veiculo": "Euronews (português)",
     "url": "https://pt.euronews.com/2026/08/29/filho-de-bolsonaro-insiste-que-julgamento-do-pai-foi-uma-farsa-e-que-lhe-concedera-um-indu",
     "data": "2026-08-29",
     "trecho": "vou trabalhar para que a amnistia seja feita ainda na transição e, caso não ocorra, um indulto",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "flavio-bolsonaro-discursa-pelo-impeachment-de-mo",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-01",
   "status": "declaracao",
   "titulo": "Flávio Bolsonaro discursa pelo impeachment de Moraes e o acusa de trabalhar 'para um banqueiro'",
   "resumo": "Na sessão do Senado de 1º de setembro de 2026, nove senadores discursaram em defesa do impeachment do ministro Alexandre de Moraes, do STF: Alessandro Vieira (MDB-SE), Carlos Viana (PSD-MG), Cleitinho (Republicanos-MG), Damares Alves (Republicanos-DF), Esperidião Amin (PP-SC), Flávio Bolsonaro (PL-RJ), Izalci Lucas (PL-DF), Luis Carlos Heinze (PP-RS) e Magno Malta (PL-ES). Flávio afirmou que Moraes cometeu crime de responsabilidade ao ser flagrado trabalhando 'para um banqueiro' e declarou: 'É inadmissível que tenhamos pessoas da cúpula do poder deste país sendo suspeitas do cometimento de vários crimes'. O presidente do Senado, Davi Alcolumbre, disse a jornalistas: 'Minha percepção é que tem 109 pedidos. Isso não é normal: 109 solicitações no Congresso de impeachment dos dez ministros do Supremo Tribunal Federal'. A admissibilidade dos pedidos depende do presidente do Senado, que não os pautou.",
   "observacao": "São discursos em plenário, não processo instaurado: nenhum pedido de impeachment contra Moraes foi admitido. A fonte oficial não identifica quem seria 'o banqueiro' citado por Flávio — a identificação como Daniel Vorcaro foi retirada desta versão por ser inferência não sustentada pela fonte.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Agência Senado",
     "url": "https://www12.senado.leg.br/noticias/materias/2026/09/01/senadores-pedem-impeachment-do-ministro-alexandre-de-moraes-do-stf",
     "data": "2026-09-01",
     "trecho": "É inadmissível que tenhamos pessoas da cúpula do poder deste país sendo suspeitas do cometimento de vários crimes",
     "tier": "primaria"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "flavio-comemora-afastamento-do-diretor-geral-da",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-09",
   "status": "declaracao",
   "titulo": "Flávio comemora afastamento do diretor-geral da PF por Mendonça e chama a PF de 'gestapo do Lula'",
   "resumo": "O ministro André Mendonça determinou o afastamento preventivo, por até 90 dias, do diretor-geral da PF, Andrei Rodrigues, e do diretor de Inteligência, Leandro Almada da Costa, alegando ter sido alvo de 'monitoramento sistemático e ilegal' pela estrutura da Polícia Federal. Segundo o Metrópoles (09/09/2026), Flávio Bolsonaro comemorou a decisão, chamou o diretor-geral da PF de 'cupincha' e 'pau-mandado' de Lula; a Segunda Turma chegou a formar maioria para manter a decisão, mas Gilmar Mendes pediu vista. No mesmo dia, ao compartilhar reportagem sobre suposto excesso da PF na busca no escritório do advogado Willer Tomaz, o senador escreveu: 'Os dias dessa gestapo do Lula estão contados. A PF do Brasil voltará a ser respeitada!'. Após Flávio Dino reintegrar Andrei Rodrigues à chefia da PF, o senador afirmou: 'O Brasil virou a várzea com o que está acontecendo, perderam qualquer pudor de tomar decisões contra o Supremo, contra a Constituição para se protegerem'.",
   "observacao": "São DECLARAÇÕES do senador, não fatos apurados; as decisões de Mendonça e Dino não têm Flávio como parte. A frase 'Brasil virou a várzea' só foi confirmada em veículo pequeno (CLM Brasil) — lastro a reforçar. Cortei da versão original a fundamentação atribuída a Dino (risco de paralisar apurações, caso Marielle Franco): nenhuma fonte aberta sustenta. PENDÊNCIA: a checagem em agregador indica que, ainda em 09/09/2026, Fachin suspendeu as decisões de Mendonça E de Dino — fato não coberto por nenhuma das fontes acima e que precisa de item e fonte próprios.",
   "pessoas": [
    "flavio",
    "willer-tomaz"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/decisao-de-mendonca-deixa-corrida-presidencial-refem-da-guerra-no-stf",
     "data": "2026-09-09",
     "trecho": "O senador comemorou a decisão de Mendonça, chamou o diretor-geral da PF de 'cupincha' e 'pau-mandado' de Lula",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-governo/flavio-compara-pf-do-governo-lula-a-policia-nazista/",
     "data": "2026-09-09",
     "trecho": "Os dias dessa gestapo do Lula estão contados. A PF do Brasil voltará a ser respeitada!",
     "tier": "referencia"
    },
    {
     "veiculo": "CLM Brasil",
     "url": "https://www.clmbrasil.com.br/brasil-virou-a-varzea-flavio-bolsonaro-dispara-contra-decisao-de-flavio-dino-sobre-a-policia-federal",
     "data": "2026-09-09",
     "trecho": "O Brasil virou a várzea com o que está acontecendo, perderam qualquer pudor de tomar decisões",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-manaus-flavio-pede-a-mendonca-abrir-os-sigilo",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-11",
   "status": "declaracao",
   "titulo": "Em Manaus, Flávio pede a Mendonça 'abrir os sigilos' e que Dino seja investigado",
   "resumo": "Em Manaus (AM), em 11/9, horas após vir a público que é investigado formalmente, Flávio Bolsonaro declarou: 'abra os sigilos, tira o sigilo de tudo, mostra tudo pro povo' e 'Eu quero transparência para tudo'. Disse ainda: 'Eu estou pedindo que o Dino seja investigado formalmente', alegando que documentos apreendidos na operação indicariam ameaças à produtora Karina Gama por pessoas próximas a Dino e a Lula. Negou irregularidades e afirmou não ter recebido recursos pessoalmente. Não há registro de pedido formal protocolado nem de resposta dos ministros na matéria.",
   "observacao": "Declaração do candidato; a alegação sobre ameaças a Karina Gama não foi verificada por fonte independente. Fonte única.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/flavio-defende-fim-dos-sigilos-do-caso-master-e-pede-investigacao-de-dino",
     "data": "2026-09-11",
     "trecho": "Eu estou pedindo que o Dino seja investigado formalmente",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-cabo-frio-flavio-diz-que-quem-vota-em-lula-es",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-12",
   "status": "declaracao",
   "titulo": "Em Cabo Frio, Flávio diz que 'quem vota em Lula está votando em Alexandre de Moraes' e acusa Dino de 'sequestrar' o caso Dark Horse",
   "resumo": "Em discurso no sábado 12/9/2026 em Cabo Frio (RJ), Flávio Bolsonaro afirmou que 'quem vota em Lula está votando em Alexandre de Moraes' e que 'Quem governa o Brasil hoje é Alexandre de Moraes', além de 'Acabou a palhaçada no Brasil, porque o mau exemplo está vindo de cima, está vindo do presidente da República, que abandonou o país'. No mesmo dia, no X, comemorou a queda do sigilo do inquérito Dark Horse ('Graças a Deus caiu o sigilo'), acusou o ministro Flávio Dino de ter 'sequestrado' a investigação por um 'atalho' e disse que sua defesa pediu a devolução do caso ao 'relator natural', André Mendonça; escreveu ainda: 'Como Presidente do Brasil, vou proteger as instituições das laranjas podres que as contaminam'. Segundo o InfoMoney, a defesa havia pedido a Fachin em 3/7 a redistribuição do inquérito, aberto no âmbito da ADPF 854 (relatada por Dino) a pedido dos deputados Tabata Amaral e Pastor Henrique Vieira.",
   "observacao": "TMC é veículo regional; o Portal Claudio Oliveira é blog pequeno que cita R7 e Metrópoles; a fala sobre Dino foi confirmada em InfoMoney, Jornal de Brasília e Jovem Pan.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "TMC",
     "url": "https://tmc.com.br/politica/durante-discurso-flavio-bolsonaro-diz-que-quem-vota-em-lula-vota-em-moraes/",
     "data": "2026-09-12",
     "trecho": "quem vota em Lula está votando em Alexandre de Moraes",
     "tier": "agregador"
    },
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/flavio-bolsonaro-dino-sequestrou-dark-horse-para-usa-lo-ilegalmente-contra-mim/",
     "data": "2026-09-12",
     "trecho": "Como Presidente do Brasil, vou proteger as instituições das laranjas podres que as contaminam",
     "tier": "referencia"
    },
    {
     "veiculo": "Portal Claudio Oliveira (cita R7 e Metrópoles)",
     "url": "https://www.portalclaudiooliveira.com/2026/09/gracas-deus-caiu-o-sigilo-diz-flavio.html",
     "data": "2026-09-12",
     "trecho": "Graças a Deus caiu o sigilo",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-cabo-frio-flavio-diz-que-quebra-de-sigilo-tem",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-12",
   "status": "declaracao",
   "titulo": "Em Cabo Frio, Flávio diz que quebra de sigilo tem 'impacto zero' na campanha",
   "resumo": "Em comício em Cabo Frio (RJ) em 12/9, horas depois de Mendonça divulgar inquéritos do caso Master, Flávio Bolsonaro afirmou: 'Estou muito tranquilo. Acho que o impacto é zero'. Negou irregularidades na produção de 'Dark Horse' e pediu também a quebra de sigilo dos documentos da fraude no INSS, associando-a ao governo Lula.",
   "observacao": "Fonte única; a frase 'Graças a Deus, o sigilo foi afastado e tudo está às claras' não foi confirmada na matéria e foi cortada.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/9/12/flavio-diz-estar-tranquilo-com-quebra-de-sigilo-e-que-caso-master-tem-impacto-zero-na-campanha",
     "data": "2026-09-12",
     "trecho": "Estou muito tranquilo. Acho que o impacto é zero",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-belem-flavio-diz-que-stf-tem-a-obrigacao-de-a",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-14",
   "status": "declaracao",
   "titulo": "Em Belém, Flávio diz que STF 'tem a obrigação' de autorizar investigação contra Moraes e que ele 'precisa ser afastado'",
   "resumo": "Durante motociata em Belém (PA) em 14/09, véspera da sessão extraordinária do STF sobre a abertura de investigação da relação do ministro Alexandre de Moraes com o ex-banqueiro Daniel Vorcaro (Banco Master), Flávio afirmou que 'a maioria do Supremo no Plenário tem a obrigação de autorizar o início de investigação contra ele' e que Moraes 'precisa ser afastado'; disse que 15/09 'será um dos dias mais importantes dos últimos anos no Brasil'. Em 15/09, a sessão durou mais de seis horas e terminou sem decisão: por 4 a 3 o tribunal separou o caso de Moraes do exame dos atos do ministro André Mendonça, e um pedido de vista de Flávio Dino suspendeu o julgamento por até 90 dias. Não há investigação instaurada contra Moraes até 17/09.",
   "observacao": "Status jurídico: deliberação no STF sobre abertura de investigação, suspensa por pedido de vista; nenhuma investigação instaurada. Moraes e o STF não responderam às declarações nas matérias abertas.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/flavio-diz-que-stf-tem-obrigacao-de-autorizar-investigacao-contra-moraes",
     "data": "2026-09-14",
     "trecho": "a maioria do Supremo no Plenário tem a obrigação de autorizar o início de investigação contra ele [Moraes]. Precisa ser afastado",
     "tier": "referencia"
    },
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/9/14/flavio-bolsonaro-sobre-julgamento-sobre-moraes-sera-um-dos-dias-mais-importantes-nos-ultimos-anos",
     "data": "2026-09-14",
     "trecho": "Amanhã (terça-feira, 15) será um dos dias mais importantes dos últimos anos no Brasil",
     "tier": "referencia"
    },
    {
     "veiculo": "O Povo",
     "url": "https://mais.opovo.com.br/jornal/politica/2026/09/15/supremo-adia-definicao-sobre-moraes-mas-escancara-fraturas-em-sessao-historica.html",
     "data": "2026-09-15",
     "trecho": "Flávio Dino solicitou vista, interrompendo o julgamento",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-belem-flavio-torce-por-afastamento-de-moraes",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-14",
   "status": "declaracao",
   "titulo": "Em Belém, Flávio torce por afastamento de Moraes: 'um dos dias mais importantes dos últimos anos'",
   "resumo": "Na segunda-feira 14/9/2026, em almoço com candidatos e apoiadores em Belém (PA), Flávio Bolsonaro disse: 'Amanhã (terça-feira, 15) será um dos dias mais importantes dos últimos anos no Brasil. É o início de um julgamento que tenho certeza que vai fazer com que o Alexandre de Moraes seja oficialmente investigado'. Afirmou também: 'Eu estou aqui na torcida para que o Alexandre de Moraes seja afastado amanhã do Supremo Tribunal Federal' e 'Ele precisa ser afastado', e acusou o ministro, sem apresentar provas, de trabalhar 'mais para enriquecer a família do que para seguir a Constituição'. A sessão extraordinária do STF de 15/9 analisaria a abertura de investigação contra Moraes por suposta relação com Daniel Vorcaro (caso Master). Flávio usava camiseta com o verso 'Verás que o filho teu não foge à luta'.",
   "pessoas": [
    "flavio",
    "vorcaro"
   ],
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/9/14/flavio-bolsonaro-sobre-julgamento-sobre-moraes-sera-um-dos-dias-mais-importantes-nos-ultimos-anos",
     "data": "2026-09-14",
     "trecho": "Amanhã (terça-feira, 15) será um dos dias mais importantes dos últimos anos no Brasil",
     "tier": "referencia"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/em-belem-flavio-diz-torcer-por-afastamento-de-moraes-do-stf/",
     "data": "2026-09-14",
     "trecho": "Eu estou aqui na torcida para que o Alexandre de Moraes seja afastado amanhã do Supremo Tribunal Federal",
     "tier": "referencia"
    },
    {
     "veiculo": "Diário do Grande ABC",
     "url": "https://www.dgabc.com.br/Noticia/4346885/flavio-bolsonaro-terca-feira-sera-um-dos-dias-mais-importantes-nos-ultimos-anos-para-o-brasil",
     "data": "2026-09-14",
     "trecho": "a maioria do Supremo no plenário tem a obrigação de autorizar o início de investigação contra ele. Ele precisa ser afastado",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "no-horario-eleitoral-flavio-diz-que-lula-dividiu",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-15",
   "status": "declaracao",
   "titulo": "No horário eleitoral, Flávio diz que Lula 'dividiu o seu poder' com Moraes; Dino pede vista e STF adia decisão sobre o ministro",
   "resumo": "Em 15/9/2026, dia da sessão extraordinária do STF sobre Moraes, Flávio Bolsonaro veiculou no horário eleitoral gratuito um vídeo em formato de 'pronunciamento à nação': 'O atual presidente dividiu o seu poder com Alexandre de Moraes e, no fim, o Brasil ficou sem presidente nenhum'; 'O atual governo criou um desequilíbrio institucional. Decidiu governar ao lado de uma parte do Supremo Tribunal Federal'; 'Sempre que me atacarem, é porque querem fugir da vergonha de assumir a decepção que causaram no povo brasileiro'. O STF encerrou a sessão sem decidir se Moraes será investigado: a questão de ordem de Gilmar Mendes, que propunha reunir os casos de Moraes e André Mendonça e adiar o julgamento para 23/9, foi rejeitada por 4 a 3 (Fachin, Fux, Cármen Lúcia e Mendonça contra; Gilmar, Moraes e Zanin a favor), e Flávio Dino pediu vista, com prazo regimental de até 90 dias, o que empurra a decisão para depois das eleições.",
   "observacao": "A versão anterior do item dizia que a questão de ordem de Gilmar 'prevaleceu' e que o julgamento foi remarcado para 23/9; Poder360 e O Tempo (16/9) indicam o oposto: proposta rejeitada por 4 a 3, vista de Dino sem data de retorno.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil (blog Caio Junqueira)",
     "url": "https://www.cnnbrasil.com.br/blogs/caio-junqueira/politica/flavio-faz-pronunciamento-a-nacao-e-cola-moraes-em-lula-veja/",
     "data": "2026-09-15",
     "trecho": "O atual presidente dividiu o seu poder com Alexandre de Moraes",
     "tier": "referencia"
    },
    {
     "veiculo": "O Povo / Agência Estado",
     "url": "https://www.opovo.com.br/noticias/politica/2026/09/15/flavio-bolsonaro-diz-que-lula-dividiu-seu-poder-com-moraes-em-programa-eleitoral.html",
     "data": "2026-09-15",
     "trecho": "Sempre que me atacarem, é porque querem fugir da vergonha de assumir a decepção",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360 (ao vivo)",
     "url": "https://www.poder360.com.br/ao-vivo/ao-vivo-stf-julga-se-moraes-sera-investigado-no-caso-master-acompanhe/",
     "data": "2026-09-15",
     "trecho": "STF tem 4 X 3 para analisar casos de Moraes e Mendonça separados; Dino pede vista",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "em-fortaleza-flavio-acusa-tropa-de-choque-do-lul",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-15",
   "status": "declaracao",
   "titulo": "Em Fortaleza, Flávio acusa 'tropa de choque do Lula' de blindar Moraes e dispensa apoio de Ciro",
   "resumo": "Na noite de 15/9, em ato no Conjunto Ceará (Fortaleza), Flávio reagiu à suspensão do julgamento no STF: avaliou a sessão como 'positiva', mas disse que 'a tropa de choque do Lula no Supremo entrou em campo', citando o pedido de vista de Flávio Dino, a quem chamou de 'ex-ministro da Injustiça'; afirmou que 'Alexandre de Moraes será investigado pelos crimes em tese' e cunhou o mote 'Votar em Lula é votar em Alexandre de Moraes'. Questionado se buscaria o apoio de Ciro Gomes (PSDB, apoiado por políticos do PL no Ceará) num 2º turno, respondeu: 'Não vai precisar porque eu vou ganhar no primeiro'. Ciro dissera em 14/9 que se demitiu 'de qualquer participação da sucessão nacional'. Não há resposta de Dino ou Moraes registrada.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "A Tarde",
     "url": "https://atarde.com.br/eleicoes/tentativa-de-proteger-moraes-diz-flavio-sobre-sessao-do-stf-1402301",
     "data": "2026-09-16",
     "trecho": "a tropa de choque do Lula no Supremo entrou em campo",
     "tier": "agregador"
    },
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/eleicoes/2026/09/15/no-ce-flavio-bolsonaro-diz-nao-precisar-buscar-apoio-de-ciro.html",
     "data": "2026-09-15",
     "trecho": "Não vai precisar (buscar apoio) porque eu vou ganhar no primeiro",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "no-recife-flavio-diz-dizem-que-sou-o-bolsonaro-m",
   "tipo": "evento",
   "tema": "declaracoes",
   "data": "2026-09-16",
   "status": "declaracao",
   "titulo": "No Recife, Flávio diz: 'Dizem que sou o Bolsonaro moderado, mas eu vou ser radical' e chama Moraes de 'laranja podre'",
   "resumo": "Após agenda no Ceará (bloco no Conjunto Ceará, em Fortaleza, em 15/09; carreata em Juazeiro do Norte até o Horto do Padre Cícero em 16/09), Flávio fez comício no Cais/Paço Alfândega, no Recife, em 16/09, ao lado de Mendonça Filho (candidato ao Senado), Alfredo Gaspar (vice na chapa), Anderson Ferreira (presidente do PL-PE), Gilson Machado e Clarissa Tércio. Disse 'Dizem que eu sou o Bolsonaro moderado, mas eu vou ser radical' (sobre segurança), 'Quem está votando em Lula, está votando em Alexandre de Moraes e Flávio Dino' e 'Não dá para ter uma laranja podre como Alexandre de Moraes contaminando o ambiente, usando a caneta para enriquecer a família'. Prometeu indicar ao STF 'homens e mulheres que sejam contra o aborto, contra as drogas', 'declarar guerra às facções criminosas' e castração química para estupradores. Houve gritos de 'Fora, Moraes!' e 'Fora, Lula!' no ato.",
   "observacao": "Cortados: caminhada 'do Marco Zero' e a atribuição a Mendonça Filho dos gritos de 'fora, Moraes', não confirmadas nas fontes. Agenda do Ceará vem de matéria prévia (programação anunciada), não de cobertura do evento. CBN cita Quaest de 08/09 com Flávio a 21% em Pernambuco, 30 pontos atrás de Lula (dado estadual não conferido na fonte primária).",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/eleicoes/2026/09/16/no-recife-flavio-diz-ser-bolsonaro-moderado-e-critica-stf.html",
     "data": "2026-09-16",
     "trecho": "Dizem que eu sou o Bolsonaro moderado, mas eu vou ser radical",
     "tier": "agregador"
    },
    {
     "veiculo": "CBN Recife",
     "url": "https://www.cbnrecife.com/2026/09/16/no-recife-flavio-bolsonaro-associa-lula-a-alexandre-de-moraes-e-propoe-guerra-contra-faccoes/",
     "data": "2026-09-16",
     "trecho": "acabou para Alexandre de Moraes, acabou pra Flávio Dino",
     "tier": "agregador"
    },
    {
     "veiculo": "O Povo (agenda Ceará)",
     "url": "https://mais.opovo.com.br/jornal/politica/2026/09/14/bloco-em-fortaleza-e-carreata-em-juazeiro-veja-a-agenda-de-flavio-bolsonaro-no-ceara.html",
     "data": "2026-09-14",
     "trecho": "cumprir dois dias de agenda no Estado, incluindo passagem por Fortaleza e pelo município de Juazeiro do Norte",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "apos-estadao-revelar-exigencia-eleitoral-de-trum",
   "tipo": "declaracao",
   "tema": "declaracoes",
   "data": "2026-09-17",
   "status": "declaracao",
   "titulo": "Após Estadão revelar exigência eleitoral de Trump nas negociações do tarifaço, Flávio nega ajuda dos EUA: 'Essa narrativa não vai colar'",
   "resumo": "Em 17/9/2026, em Vitória da Conquista (BA), Flávio Bolsonaro reagiu à revelação do Estadão de que o governo Trump enviou ao Brasil, em outubro de 2025, um documento com 21 exigências nas negociações sobre tarifas, incluindo eleição 'livre e justa' em 2026 e o compromisso de que o país 'não deterá, prenderá nem limitará arbitrariamente' a participação de 'dissidentes políticos', referência que integrantes do governo associaram a Jair Bolsonaro. Flávio declarou: 'Vamos ser bem claros: não existe ajuda do governo americano. Essa narrativa não vai colar' e 'Quem resolve a eleição é a gente aqui'. Chamou a diplomacia do governo Lula de 'porcaria' e disse: 'Eu vou me aproximar de grandes países, grandes democracias'. Segundo diplomatas ouvidos pelos veículos, o governo Lula considerou os termos inaceitáveis e comunicou que não negociaria nessa base.",
   "observacao": "Item de declaração; o documento dos EUA é de outubro/2025, revelado em 16-17/9/2026. As menções a 'confirmação pela Folha', a 'tarifaço de 50%' e a Eduardo Bolsonaro como articulador não constam das fontes abertas e foram retiradas.",
   "pessoas": [
    "flavio",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-nega-ter-recebido-ajuda-de-trump-apos-documento-dos-eua-ligar-tarifaco-a-eleicao/",
     "data": "2026-09-17",
     "trecho": "Vamos ser bem claros: não existe ajuda do governo americano. Essa narrativa não vai colar",
     "tier": "referencia"
    },
    {
     "veiculo": "A Crítica de Campo Grande",
     "url": "https://acritica.net/eleicoes-2026/flavio-bolsonaro-nega-apoio-dos-eua-a-campanha-apos-revelacao-sobre-exigencias-eleitorais/",
     "data": "2026-09-17",
     "trecho": "Quem resolve a eleição é a gente aqui",
     "tier": "agregador"
    },
    {
     "veiculo": "O Povo",
     "url": "https://www.opovo.com.br/noticias/politica/2026/09/17/flavio-bolsonaro-diz-que-nao-existe-ajuda-de-governo-dos-eua-nas-eleicoes-brasileiras.html",
     "data": "2026-09-17",
     "trecho": "Não existe ajuda do governo americano. Essa narrativa não vai colar",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "mae-e-ex-esposa-de-adriano-da-nobrega-empregadas",
   "tipo": "investigacao",
   "tema": "familia",
   "data": "2003",
   "status": "investigacao",
   "titulo": "Mãe e ex-esposa de Adriano da Nóbrega empregadas no gabinete de Flávio (Alerj)",
   "resumo": "Raimunda Veras Magalhães (mãe) e Danielle Mendonça da Costa da Nóbrega (ex-esposa) de Adriano da Nóbrega trabalharam por anos no gabinete de Flávio na Alerj, com salários acima de R$ 6 mil. O MP-RJ apontou que Danielle teria repassado ao menos R$ 150 mil a assessor, no contexto da rachadinha.",
   "observacao": "Item de Flávio. Fonte primária: MP-RJ.",
   "pessoas": [
    "flavio",
    "raimunda",
    "danielle",
    "adriano"
   ],
   "fontes": [
    {
     "veiculo": "IHU/Unisinos",
     "url": "https://www.ihu.unisinos.br/666705-bolsonaros-tiveram-ligacao-com-investigados-por-organizacoes-criminosas-mostram-episodios",
     "data": "2026",
     "trecho": "Mãe e ex-esposa de Adriano trabalharam durante anos no gabinete de Flávio Bolsonaro",
     "tier": "agregador"
    },
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/05/7431770-cla-bolsonaro-e-a-relacao-com-suspeitos-de-envolvimento-no-crime-organizado.html",
     "data": "2026-05",
     "trecho": "Raimunda Veras Magalhães e Danielle Mendonça da Costa da Nóbrega; Danielle teria repassado ao menos R$ 150 mil",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-condecorou-e-defendeu-o-miliciano-adriano",
   "tipo": "evento",
   "tema": "familia",
   "data": "2005-06",
   "status": "fato",
   "titulo": "Flávio condecorou e defendeu o miliciano Adriano da Nóbrega (Medalha Tiradentes, 2005)",
   "resumo": "Como deputado estadual, Flávio Bolsonaro concedeu Moção de Louvor (out/2003) e a Medalha Tiradentes (jun/2005) ao então PM Adriano da Nóbrega, depois apontado pelo MP-RJ como chefe da milícia de Rio das Pedras e do 'Escritório do Crime'. Jair o defendeu em discurso na Câmara em out/2005.",
   "observacao": "Item de Flávio (cruzamento clã: Jair também defendeu Nóbrega). Nóbrega foi morto pela polícia em 2020.",
   "pessoas": [
    "flavio",
    "adriano",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/governo/bolsonaro-diz-que-adriano-da-nobrega-era-1-heroi-quando-foi-homenageado/",
     "data": "2020",
     "trecho": "Adriano da Nóbrega era 'herói' quando foi homenageado",
     "tier": "referencia"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/pais/politica/2020/02/1022540-miliciano-era-seguranca-de-bicheiro-quando-foi-condecorado-como-heroi-por-flavio-bolsonaro.html",
     "data": "2020-02",
     "trecho": "Miliciano era segurança de bicheiro quando foi condecorado como herói por Flávio Bolsonaro",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pms-gemeos-alan-e-alex-operacao-quarto-elemento",
   "tipo": "investigacao",
   "tema": "familia",
   "data": "2018-08",
   "status": "investigacao",
   "titulo": "PMs gêmeos Alan e Alex (Operação Quarto Elemento) ligados à campanha de Flávio (2018)",
   "resumo": "Os policiais militares gêmeos Alan e Alex Rodrigues Oliveira, presos sob suspeita de integrar quadrilha especializada em extorsões (Operação Quarto Elemento), teriam atuado em atividades ligadas à campanha de Flávio Bolsonaro ao Senado em 2018.",
   "observacao": "Item de Flávio. O artigo do EM não cita fonte original específica para o vínculo com a campanha — confiança média.",
   "pessoas": [
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "IHU/Unisinos",
     "url": "https://www.ihu.unisinos.br/666705-bolsonaros-tiveram-ligacao-com-investigados-por-organizacoes-criminosas-mostram-episodios",
     "data": "2026",
     "trecho": "Alan e Alex Rodrigues Oliveira teriam atuado na segurança da campanha de Flávio ao Senado",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "rachadinha-flavio-stj-anulou-provas-em-2021-inve",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2021-11",
   "status": "anulado",
   "titulo": "Rachadinha (Flávio): STJ anulou provas em 2021; investigação esvaziada",
   "resumo": "Em novembro de 2021, a 5ª Turma do STJ, por 4 a 1, anulou decisões da investigação da 'rachadinha' de Flávio Bolsonaro, invalidando provas obtidas pelo MP-RJ (quebras de sigilo, celulares apreendidos) e a prisão de Fabrício Queiroz na Operação Anjo (jun/2020).",
   "observacao": "Caso de Flávio (não confundir com rachadinha de Carlos). Status: ANULADO.",
   "pessoas": [
    "flavio",
    "queiroz"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/",
     "data": "2021-11",
     "trecho": "5ª Turma do STJ decidiu anular as decisões tomadas na investigação da rachadinha; provas consideradas anuladas",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "wal-do-acai-acao-de-improbidade-era-contra-jair",
   "tipo": "processo",
   "tema": "familia",
   "data": "2022-03",
   "status": "processo",
   "titulo": "Wal do Açaí: ação de improbidade era contra JAIR Bolsonaro (não Flávio)",
   "resumo": "Walderice Santos da Conceição, a 'Wal do Açaí', foi secretária parlamentar lotada no gabinete de JAIR Bolsonaro (então deputado federal) de 2003 a 2018, sob suspeita de ser funcionária fantasma. O MPF propôs ação de improbidade contra Jair e Wal. ATENÇÃO: o caso é do gabinete de JAIR, não de Flávio.",
   "observacao": "Caso do gabinete de JAIR Bolsonaro, NÃO de Flávio. Inserido aqui como contexto do clã. MPF apontou que 83,77% da remuneração foi sacada em espécie.",
   "pessoas": [
    "walderice-santos-da-conceicao-wal-do-acai",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "MPF/Procuradoria da República no DF",
     "url": "https://www.mpf.mp.br/df/sala-de-imprensa/noticias-df/mpf-propoe-acao-de-improbidade-contra-o-presidente-da-republica-jair-bolsonaro-e-wal-do-acai",
     "data": "2022-03-22",
     "trecho": "ação de improbidade administrativa contra o presidente Jair Messias Bolsonaro e a ex-secretária parlamentar Walderice Santos da Conceição",
     "tier": "primaria"
    },
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/brasil/politica-brasil/mpf-denuncia-bolsonaro-e-wal-do-acai-por-improbidade-administrativa",
     "data": "2022-03-22",
     "trecho": "acusada de ser funcionária fantasma no gabinete de Bolsonaro entre 2003 e 2018, quando era deputado federal",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "cla-bolsonaro-condecorou-ao-menos-16-policiais-l",
   "tipo": "evento",
   "tema": "familia",
   "data": "2022-09",
   "status": "fato",
   "titulo": "Clã Bolsonaro condecorou ao menos 16 policiais ligados ao crime (contexto)",
   "resumo": "Levantamento aponta que o clã Bolsonaro (Flávio na Alerj e outros) condecorou ao menos 16 policiais posteriormente ligados a milícias ou ao crime, sendo Adriano da Nóbrega o caso mais conhecido. Contextualiza o padrão de homenagens de Flávio na Alerj.",
   "observacao": "Fonte secundária/partidária para o número '16'; confiança média. Usar como contexto, não como fato isolado.",
   "pessoas": [
    "flavio",
    "adriano"
   ],
   "fontes": [
    {
     "veiculo": "PCdoB (republicação de levantamento)",
     "url": "https://pcdob.org.br/2022/09/cla-bolsonaro-condecorou-pelo-menos-16-policiais-ligados-ao-crime/",
     "data": "2022-09",
     "trecho": "Clã Bolsonaro condecorou pelo menos 16 policiais ligados ao crime",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "wal-do-acai-trf-1-manteve-acao-e-juiza-definiu-5",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2023",
   "status": "processo",
   "titulo": "Wal do Açaí: TRF-1 manteve ação e juíza definiu 5 atos de improbidade (caso de Jair)",
   "resumo": "A juíza Ivani Silva da Luz definiu que Jair Bolsonaro e Wal do Açaí respondem por atos de improbidade em 5 incisos dos arts. 9 e 10 da Lei 14.230/2021; o TRF-1 rejeitou recurso e manteve a ação. Caso ainda sem sentença de mérito (de Jair, não de Flávio).",
   "observacao": "Caso de JAIR. Não localizei sentença de mérito final até junho/2026.",
   "pessoas": [
    "walderice-santos-da-conceicao-wal-do-acai",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/justica-define-atos-de-improbidade-que-bolsonaro-respondera-no-caso-wal-do-acai/",
     "data": "2023",
     "trecho": "Justiça define atos de improbidade que Bolsonaro responderá no caso 'Wal do Açaí'",
     "tier": "referencia"
    },
    {
     "veiculo": "O Antagonista",
     "url": "https://oantagonista.com.br/brasil/wal-do-acai-trf-1-mantem-acao-de-improbidade-contra-bolsonaro/",
     "data": "2023",
     "trecho": "TRF-1 decidiu por unanimidade rejeitar recurso e manter ação de improbidade contra o ex-presidente",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "encontro-de-flavio-jair-e-carlos-com-rodrigo-bac",
   "tipo": "evento",
   "tema": "familia",
   "data": "2024-07",
   "status": "fato",
   "titulo": "Encontro de Flávio, Jair e Carlos com Rodrigo Bacellar, depois preso (2024)",
   "resumo": "Em julho de 2024, Flávio, Jair e Carlos Bolsonaro se reuniram com Rodrigo Bacellar, então presidente da Alerj, em discussões sobre o cenário eleitoral. Bacellar foi depois preso sob suspeita de organização criminosa e vazamento de informações ao Comando Vermelho.",
   "observacao": "Envolve Flávio, Jair e Carlos (múltiplos do clã).",
   "pessoas": [
    "flavio",
    "jair",
    "carlos-bolsonaro",
    "rodrigo-bacellar"
   ],
   "fontes": [
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/05/7431770-cla-bolsonaro-e-a-relacao-com-suspeitos-de-envolvimento-no-crime-organizado.html",
     "data": "2026-05",
     "trecho": "encontro com Flávio, Jair e Carlos; depois preso por suspeita de ligações com Comando Vermelho",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "eduardo-bolsonaro-condenado-pelo-stf-por-coacao",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2025",
   "status": "condenacao",
   "titulo": "Eduardo Bolsonaro condenado pelo STF por coação (não é Flávio)",
   "resumo": "EDUARDO Bolsonaro foi condenado pelo STF a 4 anos e 2 meses (regime semiaberto) por coação no curso do processo, ao articular sanções internacionais contra integrantes do STF. Vive nos EUA desde fev/2025. ATENÇÃO: condenação é de EDUARDO, não de Flávio.",
   "observacao": "Caso de EDUARDO, NÃO de Flávio. Inserido como contexto do clã.",
   "pessoas": [
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/entenda-o-julgamento-de-eduardo-bolsonaro-no-stf-que-comeca-nesta-terca-feira/",
     "data": "2025",
     "trecho": "julgamento de Eduardo Bolsonaro no STF",
     "tier": "referencia"
    },
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/eduardo-bolsonaro-rubio-extradita-trump-processo-condenou/",
     "data": "2025",
     "trecho": "Eduardo Bolsonaro... processo que o condenou no STF",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "carlos-bolsonaro-mprj-reabriu-investigacao-de-ra",
   "tipo": "investigacao",
   "tema": "familia",
   "data": "2026-02-09",
   "status": "investigacao",
   "titulo": "Carlos Bolsonaro: MPRJ reabriu investigação de rachadinha na Câmara do Rio (não é Flávio)",
   "resumo": "O MPRJ reabriu, em fev/2026, a investigação de rachadinha contra CARLOS Bolsonaro e 25 pessoas, após considerar prematuro o arquivamento de set/2024. O esquema teria movimentado cerca de R$ 1,9 milhão (2005-2021) sob o ex-chefe de gabinete Jorge Luiz Fernandes. ATENÇÃO: é caso de CARLOS, não de Flávio.",
   "observacao": "Caso de CARLOS Bolsonaro, NÃO de Flávio. Contexto do clã. Pontos suspeitos: apto em Copacabana (R$ 70 mil, 2009), plano de saúde irregular, acesso a cofre.",
   "pessoas": [
    "carlos-bolsonaro",
    "jorge-luiz-fernandes"
   ],
   "fontes": [
    {
     "veiculo": "Diário do Rio",
     "url": "https://diariodorio.com/mp-reabre-investigacoes-contra-carlos-bolsonaro-por-rachadinha",
     "data": "2026-02",
     "trecho": "MP reabre investigações contra Carlos Bolsonaro por rachadinha",
     "tier": "agregador"
    },
    {
     "veiculo": "Brado Jornal",
     "url": "https://www.bradojornal.com/noticias/justica/2026/02/25/mprj-reabre-investigacao-contra-carlos-bolsonaro-por-suspeita-de-rachadinha/",
     "data": "2026-02-25",
     "trecho": "MPRJ reabre investigação contra Carlos Bolsonaro por suspeita de rachadinha",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "banco-master-vorcaro-flavio-negociou-r-134-mi-pa",
   "tipo": "investigacao",
   "tema": "familia",
   "data": "2026-05-13",
   "status": "investigacao",
   "titulo": "Banco Master/Vorcaro: Flávio negociou R$ 134 mi para filme sobre Jair (contexto clã)",
   "resumo": "Áudios e mensagens divulgados pelo Intercept mostram Flávio Bolsonaro negociando com o ex-banqueiro Daniel Vorcaro (Banco Master, preso desde nov/2025) R$ 134 milhões para o filme 'Dark Horse' sobre Jair. Documentos indicam cerca de R$ 61 milhões pagos entre fev e mai/2025. Flávio admitiu encontro com Vorcaro.",
   "observacao": "Item de Flávio, mas com forte dimensão de clã (filme sobre Jair; PF investiga se dinheiro do Master custeou Eduardo nos EUA). Filme financiado beneficia a figura de Jair.",
   "pessoas": [
    "flavio",
    "vorcaro",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "The Intercept Brasil",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "data": "2026-05-13",
     "trecho": "Flávio Bolsonaro negociou com Daniel Vorcaro R$ 134 milhões para bancar filme sobre Jair",
     "tier": "referencia"
    },
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/ouca-o-audio-de-flavio-bolsonaro-pedindo-dinheiro-a-vorcaro/",
     "data": "2026-05",
     "trecho": "áudio de Flávio Bolsonaro pedindo dinheiro a Vorcaro",
     "tier": "referencia"
    }
   ],
   "midia": [
    {
     "tipo": "audio",
     "titulo": "Áudio de Flávio negociando com Vorcaro",
     "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/",
     "fonte": "The Intercept Brasil"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "pf-investiga-se-dinheiro-de-vorcaro-master-custe",
   "tipo": "investigacao",
   "tema": "familia",
   "data": "2026-05-14",
   "status": "investigacao",
   "titulo": "PF investiga se dinheiro de Vorcaro/Master custeou Eduardo nos EUA (não é Flávio)",
   "resumo": "A PF apura se recursos ligados a Daniel Vorcaro (Banco Master) custearam EDUARDO Bolsonaro nos EUA. Eduardo aparece em mensagens como operador da estrutura americana ligada ao filme 'Dark Horse'. Apura-se desvio de finalidade, caixa dois ou benefício pessoal. Caso de EDUARDO, conectado à mesma trama do clã.",
   "observacao": "Foco em EDUARDO, NÃO em Flávio — mas parte da mesma trama Master/Vorcaro em que Flávio negociou. Contexto de clã.",
   "pessoas": [
    "eduardo",
    "vorcaro",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Vermelho",
     "url": "https://vermelho.org.br/2026/05/14/pf-investiga-se-dinheiro-do-master-custeou-eduardo-bolsonaro-nos-eua/",
     "data": "2026-05-14",
     "trecho": "PF investiga se dinheiro do Master custeou Eduardo Bolsonaro nos EUA",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "stf-condena-eduardo-bolsonaro-a-4-anos-e-2-meses",
   "tipo": "processo",
   "tema": "familia",
   "data": "2026-06-16",
   "status": "condenacao",
   "titulo": "STF condena Eduardo Bolsonaro a 4 anos e 2 meses por coação no curso do processo",
   "resumo": "Em 16/06/2026, a Primeira Turma do STF condenou por unanimidade o ex-deputado Eduardo Bolsonaro a quatro anos e dois meses de reclusão em regime inicial semiaberto, mais 50 dias-multa, por coação no curso do processo (art. 344 do Código Penal) cometida de forma continuada 'em pelo menos nove ocasiões'. Segundo o MPF, ele articulou sanções e sobretaxas do governo dos EUA contra o Brasil para tentar interferir no julgamento do pai. A condenação inclui perda do cargo de escrivão da Polícia Federal e inelegibilidade por oito anos após o cumprimento da pena. Votaram Moraes (relator), Zanin, Cármen Lúcia e Dino. Não é fato de Flávio Bolsonaro: entra no dossiê apenas porque é o objeto da declaração do senador no dia seguinte.",
   "observacao": "Decisão de instância única no STF, SEM trânsito em julgado dentro da janela: os embargos de declaração foram pautados para o plenário virtual de 11/09/2026, depois do fechamento (09/09/2026) — o resultado não foi verificado e não deve ser afirmado. A Defensoria Pública da União, que atua na defesa, não contesta os fatos nos embargos e pede apenas revisão da dosimetria. Corrigido: a versão proposta afirmava que a DPU pedia absolvição, o que a fonte contradiz. Também removido o valor por dia-multa, não confirmado.",
   "pessoas": [
    "eduardo",
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "MPF / Procuradoria-Geral da República",
     "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/stf-condena-eduardo-bolsonaro-a-quatro-anos-e-dois-meses-de-prisao-pelo-crime-de-coacao-no-curso-do-processo",
     "data": "2026-06-16",
     "trecho": "quatro anos e dois meses de reclusão, em regime inicial semiaberto, além de pagar 50 dias-multa",
     "tier": "primaria"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/por-unanimidade-stf-condena-eduardo-bolsonaro-no-caso-do-tarifaco",
     "data": "2026-06-16",
     "trecho": "articular o tarifaço contra as exportações brasileiras",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/stf-marca-julgamento-para-recurso-de-eduardo-bolsonaro/",
     "data": "2026-08-31",
     "trecho": "Os ministros julgarão os embargos de declaração contra a condenação no dia 11 de setembro",
     "tier": "referencia"
    }
   ],
   "lastro": "primaria"
  },
  {
   "id": "moraes-prorroga-prisao-domiciliar-humanitaria-de",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2026-07-03",
   "status": "decisao_judicial",
   "titulo": "Moraes prorroga prisão domiciliar humanitária de Jair Bolsonaro e revoga porte de arma",
   "resumo": "Em 03/07/2026, Alexandre de Moraes acolheu pedido da defesa e prorrogou a prisão domiciliar humanitária de Jair Bolsonaro, condenado a mais de 27 anos de prisão por tentativa de golpe de Estado. Foram mantidas todas as restrições anteriores, entre elas o 'uso de monitoramento eletrônico, a proibição de utilizar celular, telefone ou qualquer outro meio de comunicação' e a limitação de visitas a pessoas previamente autorizadas. Na mesma decisão, revogou o porte de armas e deu 48 horas para a defesa entregar o armamento à Polícia Federal, sob pena de revogação do benefício humanitário. A defesa havia justificado o pedido com crises de soluço recorrentes e novos exames médicos. Não é fato de Flávio: é o regime sob o qual incidem as restrições de visita que atingem o senador em seguida.",
   "observacao": "É prisão domiciliar humanitária substitutiva do regime fechado por motivo de saúde — não é liberdade, absolvição nem progressão de regime. Removidos da versão proposta os detalhes não confirmados na fonte aberta: início em março, prazo original de 90 dias, término em 25/06, internação por broncopneumonia e a lista completa dos crimes. A matéria não especifica o novo prazo da prorrogação.",
   "pessoas": [
    "jair"
   ],
   "fontes": [
    {
     "veiculo": "Correio Braziliense",
     "url": "https://www.correiobraziliense.com.br/politica/2026/07/7454707-moraes-prorroga-prisao-domiciliar-humanitaria-de-jair-bolsonaro.html",
     "data": "2026-07-03",
     "trecho": "uso de monitoramento eletrônico, a proibição de utilizar celular, telefone ou qualquer outro meio de comunicação",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "mp-rj-cobra-cerca-de-r-1-9-milhao-de-sete-ex-ser",
   "tipo": "processo",
   "tema": "familia",
   "data": "2026-07-22",
   "status": "processo",
   "titulo": "MP-RJ cobra cerca de R$ 1,9 milhão de sete ex-servidores do gabinete de Carlos Bolsonaro",
   "resumo": "O Ministério Público do Rio de Janeiro ajuizou ação civil pública por improbidade administrativa contra sete ex-servidores do gabinete do vereador Carlos Bolsonaro na Câmara Municipal do Rio, pedindo a devolução de quase R$ 1,9 milhão aos cofres públicos por suposto esquema de repasses de salários entre 2005 e 2021. Entre os réus estão o ex-chefe de gabinete Jorge Luiz Fernandes, sua mulher e ex-assessora Regina Célia Sobral Fernandes e a ex-assessora Andrea Cristina da Cruz Martins; os outros quatro não são nomeados na reportagem. Segundo a matéria, 'o vereador Carlos Bolsonaro não consta como réu nesta ação específica'. A defesa de Jorge Luiz e Regina Célia informou que 'apresentará as justificativas e apontará os equívocos da acusação diretamente nos autos do processo'; a defesa de Carlos Bolsonaro não se manifestou e a reportagem não obteve retorno da defesa de Andrea Cristina.",
   "observacao": "LASTRO MODERADO: fonte única, veículo de pequeno porte, sem corroboração independente obtida. Ação é CÍVEL (improbidade), não criminal, e Carlos Bolsonaro não é réu nela. É o gabinete de CARLOS na Câmara do Rio, não o gabinete de Flávio na Alerj — não confundir com a apuração da rachadinha de Flávio, que foi anulada. Data é a da publicação; a data do ajuizamento não é informada.",
   "pessoas": [
    "carlos-bolsonaro",
    "jorge-luiz-fernandes"
   ],
   "fontes": [
    {
     "veiculo": "Diário Carioca",
     "url": "https://diariocarioca.com/2026/07/22/politica/corrupcao-investigacao/mprj-cobra-1-9-milhao-rachadinha-gabinete-carlos-bolsonaro/",
     "data": "2026-07-22",
     "trecho": "O vereador Carlos Bolsonaro não consta como réu nesta ação específica",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "flavio-pede-desculpas-publicas-a-michelle-bolson",
   "tipo": "declaracao",
   "tema": "familia",
   "data": "2026-07-23",
   "status": "declaracao",
   "titulo": "Flávio pede desculpas públicas a Michelle Bolsonaro dois dias antes da convenção do PL",
   "resumo": "Em 23/07/2026, dois dias antes da convenção nacional do PL, Flávio Bolsonaro publicou vídeo nas redes sociais pedindo desculpas formais à madrasta Michelle Bolsonaro e convidando-a a voltarem a 'caminhar juntos'. Admitiu que houve 'momentos de desconforto' e disse que o momento exige 'desprendimento, humildade e espírito de união'. No vídeo afirmou: 'Ninguém é perfeito. Eu não sou perfeito e, mais uma vez, peço desculpas por alguns momentos juntos que causaram desconforto.' Minutos após a postagem, Michelle curtiu a publicação. Em vídeo exibido no telão da convenção, em 25/07, ela respondeu: 'Todos nós cometemos erros, isso é humano.'",
   "observacao": "CORREÇÃO relevante: a frase 'Eu não sou perfeito e, mais uma vez, peço desculpas' é do vídeo de 23/07, não de fala na convenção de 25/07, como afirmava a versão proposta. Removidas as circunstâncias da ruptura anterior (data de 24/06, motivo no Ceará, as palavras 'maltratada' e 'humilhada'), não confirmadas em fonte aberta. A motivação de bastidor (disputa pela vaga de vice) é interpretação, não fato verificado.",
   "pessoas": [
    "flavio",
    "michelle"
   ],
   "fontes": [
    {
     "veiculo": "Tribuna de Jundiaí",
     "url": "https://tribunadejundiai.com.br/politica/eleicoes-2026/flavio-bolsonaro-pede-desculpas-michelle-convencao-pl/",
     "data": "2026-07-23",
     "trecho": "desprendimento, humildade e espírito de união",
     "tier": "agregador"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/sem-vice-definido-pl-lanca-flavio-bolsonaro-candidato-a-presidente/",
     "data": "2026-07-25",
     "trecho": "Todos nós cometemos erros, isso é humano",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "michelle-convoca-exercito-rosa-do-pl-mulher-para",
   "tipo": "midia",
   "tema": "familia",
   "data": "2026-09-09",
   "status": "fato",
   "titulo": "Michelle convoca 'Exército Rosa' do PL Mulher para apoiar Flávio; senador compartilha o vídeo (não é Flávio)",
   "resumo": "Em vídeo publicado em 9/9, Michelle Bolsonaro convocou as presidentes estaduais do PL Mulher a formar um 'Exército Rosa' pela candidatura de Flávio; aparecem dirigentes de sete estados (CE, SP, MA, AM, PI, PR, PA), entre elas a deputada Priscila Costa, envolvida na crise entre Michelle e Flávio. É a reentrada pública de Michelle na campanha do enteado após deixar a presidência nacional do PL Mulher em junho, dias depois de publicar vídeos críticos a ele. Flávio compartilhou a publicação em suas redes.",
   "observacao": "Fato do clã; único vínculo direto com Flávio é o compartilhamento do vídeo. Fonte única.",
   "pessoas": [
    "michelle",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/michelle-convoca-exercito-rosa-para-eleger-flavio-bolsonaro/",
     "data": "2026-09-10",
     "trecho": "Eu convoco vocês e todas as mulheres de bem da nossa nação para apoiarmos Flávio Bolsonaro como o próximo presidente do Brasil",
     "tier": "referencia"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "moraes-autoriza-5-parentes-a-visitar-jair-para-l",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2026-09-10",
   "status": "decisao_judicial",
   "titulo": "Moraes autoriza 5 parentes a visitar Jair para liberar campanha de Michelle; Flávio segue vetado (não é Flávio)",
   "resumo": "Alexandre de Moraes autorizou visitas permanentes a Jair Bolsonaro, em prisão domiciliar em Brasília, do irmão Renato Bolsonaro, do sogro Vicente de Paulo Reinaldo, da madrasta de Michelle, Maisa Torres Antunes, e das irmãs de Michelle, Geovanna e Suyane Lima, às quartas e sábados, nas janelas 8h-10h, 11h-13h e 14h-16h, para que Michelle, candidata ao Senado pelo DF, possa se ausentar em campanha. Moraes indeferiu incluir os ex-auxiliares Sérgio Cordeiro e Max Guilherme como 'profissionais de rotina' da residência. Flávio permanece proibido de visitar o pai até 11/10 por ter divulgado em live uma carta de Jair. Resposta: a assessoria de Michelle disse que a decisão 'é bem restritiva e não corresponde ao que foi solicitado', pois a petição de 31/8 pedia permanência dos parentes na casa, não visitas em horários fixos.",
   "observacao": "Poder360 e Terra datam a decisão em 10/9; Estado de Minas cita terça (8/9). Adotada a data majoritária. Fonte Poder360 de 7/9 usada só para o prazo do veto a Flávio.",
   "pessoas": [
    "jair",
    "michelle",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/moraes-autoriza-visitas-permanentes-de-5-familiares-a-bolsonaro/",
     "data": "2026-09-10",
     "trecho": "quartas-feiras e aos sábados, nos períodos da manhã e da tarde",
     "tier": "referencia"
    },
    {
     "veiculo": "Terra",
     "url": "https://www.terra.com.br/noticias/brasil/politica/moraes-autoriza-sogro-a-visitar-bolsonaro-enquanto-michelle-estiver-fora-de-casa-em-campanha,9f05dac95b6d27e767c59d4de6265df8erzgkdf6.html",
     "data": "2026-09-10",
     "trecho": "medida razoável e compatível com os princípios constitucionais da eficiência e da celeridade processual",
     "tier": "referencia"
    },
    {
     "veiculo": "O Antagonista",
     "url": "https://oantagonista.com.br/brasil/michelle-contesta-decisao-de-moraes-sobre-visitas-a-bolsonaro/",
     "data": "2026-09-11",
     "trecho": "restritiva e não corresponde ao que foi solicitado",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "stf-comeca-a-julgar-embargos-de-eduardo-moraes-v",
   "tipo": "decisao_judicial",
   "tema": "familia",
   "data": "2026-09-11",
   "status": "processo",
   "titulo": "STF começa a julgar embargos de Eduardo; Moraes vota por manter 4 anos e 2 meses (não é Flávio)",
   "resumo": "A 1ª Turma do STF abriu em 11/9, em plenário virtual, o julgamento dos embargos de declaração da Defensoria Pública da União contra a condenação de Eduardo Bolsonaro a 4 anos e 2 meses por coação no curso do processo; a votação vai até 18/9. O relator Alexandre de Moraes votou por rejeitar o recurso, que 'representa apenas inconformismo com o resultado do julgamento', e negou a atenuante de confissão espontânea porque Eduardo 'nunca admitiu a consumação do crime' e não compareceu ao interrogatório. A DPU questiona pontos do acórdão e pede o reconhecimento da atenuante. Faltam os votos de Cármen Lúcia, Zanin e Dino.",
   "observacao": "Julgamento em curso; não é decisão final. Eduardo vive nos EUA e é representado pela DPU.",
   "pessoas": [
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "Terra / Estadão Conteúdo",
     "url": "https://www.terra.com.br/noticias/brasil/politica/moraes-vota-para-manter-condenacao-de-eduardo-bolsonaro-a-4-anos-e-2-meses,4b78c2e3815cb9a8708af55da4e6ed52si8z146m.html",
     "data": "2026-09-11",
     "trecho": "o recurso representa apenas inconformismo com o resultado do julgamento",
     "tier": "referencia"
    },
    {
     "veiculo": "Diário do Grande ABC",
     "url": "https://www.dgabc.com.br/Noticia/4346326/stf-comeca-a-julgar-recurso-de-eduardo-bolsonaro-contra-condenacao-a-4-anos-e-2-meses",
     "data": "2026-09-11",
     "trecho": "embargos de declaração apresentados pela Defensoria Pública da União",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  },
  {
   "id": "condenacao-de-jair-completa-1-ano-pedido-de-anul",
   "tipo": "noticia",
   "tema": "familia",
   "data": "2026-09-11",
   "status": "processo",
   "titulo": "Condenação de Jair completa 1 ano; pedido de anulação segue no STF com parecer contrário da PGR (não é Flávio)",
   "resumo": "Em 11/9/2026 completou um ano a condenação de Jair Bolsonaro pela 1ª Turma do STF a 27 anos e 3 meses por tentativa de golpe. Ele cumpre a pena em prisão domiciliar desde março de 2026, com visitas restritas por Moraes. A defesa pediu em maio a anulação da condenação (relator Kassio Nunes Marques) e a PGR (Paulo Gonet) opinou em junho pela rejeição, citando 'vigoroso conjunto probatório'; a reversão é tida como improvável até por aliados. Flávio, proibido por Moraes de visitar o pai desde julho, repete que, se eleito, anistiará os condenados do 8 de Janeiro e subirá a rampa com o pai.",
   "observacao": "Marco de calendário; nenhum ato judicial novo sobre Jair na janela além das visitas (item de 10/9). Fonte única.",
   "pessoas": [
    "jair",
    "flavio"
   ],
   "fontes": [
    {
     "veiculo": "Estado de Minas",
     "url": "https://www.em.com.br/politica/2026/09/7498425-condenacao-de-bolsonaro-completa-um-ano-com-stf-em-crise.html",
     "data": "2026-09-11",
     "trecho": "vigoroso conjunto probatório",
     "tier": "agregador"
    }
   ],
   "lastro": "agregador"
  },
  {
   "id": "eduardo-pede-no-departamento-de-estado-sancoes-m",
   "tipo": "evento",
   "tema": "familia",
   "data": "2026-09-16",
   "status": "fato",
   "titulo": "Eduardo pede no Departamento de Estado sanções Magnitsky a Moraes, Dino e Gilmar (não é Flávio)",
   "resumo": "Um dia após a sessão do STF, Eduardo Bolsonaro e Paulo Figueiredo se reuniram em 16/9 com integrantes do governo Trump no Departamento de Estado, em Washington, e pediram sanções contra Alexandre de Moraes, Flávio Dino e Gilmar Mendes. Figueiredo disse à CNN que 'Moraes continua sob a designação da Lei Global Magnitsky e que não há razão para que ele não seja reincluído' (a OFAC retirou a designação em dezembro de 2025) e que Dino e Gilmar 'estão prestando apoio material a um indivíduo designado'. Reunião na Casa Branca estava prevista para 17/9. Eduardo está condenado a 4 anos e 2 meses por coação, com recurso em julgamento até 18/9. Não há manifestação de Flávio sobre a viagem nas fontes.",
   "observacao": "Fato do irmão; respinga em Flávio por ser a mesma articulação pela qual Eduardo foi condenado por coação.",
   "pessoas": [
    "eduardo"
   ],
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/internacional/eduardo-bolsonaro-pede-a-equipe-de-trump-sancoes-a-moraes-gilmar-e-dino/",
     "data": "2026-09-16",
     "trecho": "Flávio Dino e Gilmar Mendes estão prestando apoio material a um indivíduo designado",
     "tier": "referencia"
    },
    {
     "veiculo": "WSCOM",
     "url": "https://wscom.com.br/noticias/2026/09/16/eduardo-bolsonaro-paulo-figueiredo-governo-trump-eua-moraes/",
     "data": "2026-09-16",
     "trecho": "série de reuniões em Washington",
     "tier": "agregador"
    }
   ],
   "lastro": "referencia"
  }
 ],
 "grafo": {
  "nodes": [
   {
    "id": "flavio",
    "nome": "Flávio Bolsonaro",
    "papel": "Senador (PL-RJ); à época da rachadinha, deputado estadual na Alerj",
    "grupo": "politico",
    "status": "Foi investigado e denunciado pelo MP-RJ em 2020 no caso das rachadinhas (peculato, lavagem, organização criminosa). As provas foram anuladas pelo STJ e pelo STF, a denúncia foi arquivada em 2022 e, em fev/2025, Gilmar Mendes negou os recursos do MP. Nunca foi condenado nem preso.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "STF (Notícias)",
      "url": "https://noticias.stf.jus.br/postsnoticias/2a-turma-decide-que-provas-contra-flavio-bolsonaro-no-caso-das-chamadas-rachadinhas-sao-ilegais/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
     }
    ]
   },
   {
    "id": "queiroz",
    "nome": "Fabrício Queiroz",
    "papel": "Ex-assessor, motorista e segurança de Flávio na Alerj; PM reformado; apontado como operador financeiro da rachadinha",
    "grupo": "operadores",
    "status": "Ex-assessor de Flávio, foi preso em jun/2020 (depois prisão domiciliar) e denunciado no esquema de 'rachadinha' por peculato, lavagem e organização criminosa; as provas do caso foram anuladas pelo STJ em 2021 e ele não foi condenado.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/fabricio-queiroz-e-preso-no-interior-de-sao-paulo/"
     },
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/330505/ministro-noronha-concede-prisao-domiciliar-a-fabricio-queiroz"
     }
    ]
   },
   {
    "id": "jair",
    "nome": "Jair Messias Bolsonaro",
    "papel": "Ex-presidente; pai de Flávio; amigo de Queiroz desde 1984",
    "grupo": "familia",
    "status": "Condenado pelo STF em 11/09/2025 na trama golpista a 27 anos e 3 meses (golpe de Estado, organização criminosa armada e outros); condenação transitou em julgado em 25/11/2025 e ele cumpre pena preso na sede da PF em Brasília.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-09/por-4-1-stf-condena-bolsonaro-e-mais-sete-pela-trama-golpista"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-11/saiba-os-crimes-cometidos-por-bolsonaro-e-6-aliados-na-trama-golpista"
     }
    ]
   },
   {
    "id": "michelle",
    "nome": "Michelle Bolsonaro",
    "papel": "Ex-primeira-dama; recebeu cheques de Queiroz",
    "grupo": "familia",
    "status": "Foi alvo de apuração da PF sobre quem custeou despesas dela quando primeira-dama e citada no contexto Banco Master/Vorcaro, mas não há denúncia formal do MP/PGR contra ela como ré; acusações públicas de 'denúncia' partiram do deputado André Janones, contra quem ela move queixa-crime no STF.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/cgu-abre-processo-contra-empresa-investigada-por-pagar-despesas-de-michelle-bolsonaro/"
     },
     {
      "veiculo": "O Cafezinho",
      "url": "https://www.ocafezinho.com/2026/06/03/stf-sorteia-kassio-nunes-marques-para-relatar-queixa-crime-de-michelle-bolsonaro-contra-janones/amp/"
     }
    ]
   },
   {
    "id": "eduardo",
    "nome": "Eduardo Bolsonaro",
    "papel": "Deputado federal licenciado; irmão de Flávio; atuação nos EUA é objeto de inquérito no STF",
    "grupo": "familia",
    "status": "Condenado pelo STF em 16/06/2026 a 4 anos e 2 meses (regime semiaberto) por coação no curso do processo na trama golpista, além de inelegível por 8 anos; denunciado pela PGR em set/2025 e tornado réu em nov/2025; vive nos EUA desde 2024 e não foi preso (prisão dependeria de extradição).",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "MPF/PGR",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/stf-condena-eduardo-bolsonaro-a-quatro-anos-e-dois-meses-de-prisao-pelo-crime-de-coacao-no-curso-do-processo"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/stf-condena-eduardo-bolsonaro-inelegibilidade-e-4-anos-de-prisao"
     }
    ]
   },
   {
    "id": "wassef",
    "nome": "Frederick Wassef",
    "papel": "Advogado de Flávio e Jair; dono do imóvel em Atibaia onde Queiroz foi preso",
    "grupo": "juridico",
    "status": "Indiciado pela PF em jul/2024 por lavagem de dinheiro e associação criminosa no caso das joias (recompra de Rolex nos EUA) e investigado no STF; tornou-se réu por racismo, injúria racial e lesão corporal contra garçonete em Brasília; escondeu Fabrício Queiroz em Atibaia em 2020, mas não foi preso nesse episódio; sem condenação criminal confirmada.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Frederick_Wassef"
     },
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/advogado-dos-bolsonaros-wassef-vira-reu-por-racismo-contra-garconete-1.2615813"
     }
    ]
   },
   {
    "id": "grillo",
    "nome": "Miguel Ângelo Braga Grillo (Coronel Braga)",
    "papel": "Chefe de gabinete de Flávio no Senado, citado na denúncia com atuação determinante",
    "grupo": "operadores",
    "status": "Conhecido como Coronel Braga, ex-chefe de gabinete de Flávio Bolsonaro na Alerj; investigado (sigilo bancário/fiscal quebrado) e citado como atuante no esquema da rachadinha, foi um dos denunciados pelo MP-RJ em 2020; a denúncia foi rejeitada/anulada (TJ-RJ em 2021, provas consideradas ilegais pelo STF; reabertura negada por Gilmar Mendes em fev/2025); sem condenação ou prisão.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Brasil 247",
      "url": "https://www.brasil247.com/regionais/sudeste/chefe-de-gabinete-de-flavio-bolsonaro-fez-mais-de-1-mil-saques-que-totalizam-r-727-mil"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/tag/miguel-angelo-braga-grillo/"
     }
    ]
   },
   {
    "id": "luiza_paes",
    "nome": "Luiza Souza Paes",
    "papel": "Ex-assessora citada como envolvida nas devoluções de salário",
    "grupo": "operadores",
    "status": "Ex-assessora de Flávio Bolsonaro na Alerj que confessou ao MP-RJ ter devolvido mais de 90% do salário a Fabrício Queiroz na rachadinha; investigada e incluída entre os denunciados pelo MP-RJ em 2020, mas a denúncia foi rejeitada/anulada (TJ-RJ 2021, provas anuladas pelo STF; reabertura negada em fev/2025); sem condenação ou prisão.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/ex-assessora-de-flavio-confessou-rachadinha-em-depoimento-ao-mp/"
     },
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/breves/assessora-flavio-bolsonaro-pagamentos-queiroz-rachadinha/"
     }
    ]
   },
   {
    "id": "adriano",
    "nome": "Adriano Magalhães da Nóbrega",
    "papel": "Ex-PM apontado como chefe do Escritório do Crime; homenageado por Flávio na Alerj",
    "grupo": "milicia",
    "status": "Ex-capitão do BOPE apontado como chefe do 'Escritório do Crime'; foi condenado por homicídio (2014), preso, fugiu e foi morto em operação policial na Bahia em 9/2/2020; era réu/denunciado por milícia e investigado por ligação com a morte de Marielle Franco e com a rachadinha no gabinete de Flávio Bolsonaro.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/adriano-da-nobrega-irma-diz-que-morte-dele-ocorreu-em-troca-de-cargos"
     }
    ]
   },
   {
    "id": "raimunda",
    "nome": "Raimunda Veras Magalhães",
    "papel": "Mãe de Adriano da Nóbrega; ex-assessora (CCDAL-5) no gabinete de Flávio na Alerj",
    "grupo": "milicia",
    "status": "Mãe de Adriano da Nóbrega e ex-assessora de Flávio Bolsonaro na Alerj; denunciada pelo MPRJ em 19/3/2026 por lavagem de dinheiro do jogo do bicho ligado ao filho (rede de empresas que movimentou R$ 8,5 mi); também foi investigada na rachadinha, caso arquivado após anulação de provas pelo STJ/STF.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/"
     },
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano"
     }
    ]
   },
   {
    "id": "danielle",
    "nome": "Danielle Mendonça da Costa da Nóbrega",
    "papel": "Primeira esposa de Adriano da Nóbrega; ex-assessora (CCDAL-5) no gabinete de Flávio na Alerj",
    "grupo": "milicia",
    "status": "Esposa/ex-mulher de Adriano da Nóbrega e ex-funcionária do gabinete de Flávio Bolsonaro na Alerj; investigada por receber salários como suposta funcionária-fantasma e por movimentar recursos da rachadinha (caso arquivado após anulação de provas pelo STJ/STF); não consta entre os denunciados na operação do MPRJ de março/2026.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/"
     },
     {
      "veiculo": "Intercept Brasil",
      "url": "https://www.intercept.com.br/2020/04/25/flavio-bolsonaro-rachadinha-financiou-milicia/"
     }
    ]
   },
   {
    "id": "julia_lotufo",
    "nome": "Julia Lotufo",
    "papel": "Viúva de Adriano da Nóbrega; apontada como contadora da organização do jogo do bicho",
    "grupo": "milicia",
    "status": "Viúva/companheira de Adriano da Nóbrega; denunciada pelo MPRJ/GAECO em 19/3/2026 como líder e gestora financeira da organização criminosa (lavagem, agiotagem, jogo do bicho e venda de imóveis ilícitos de R$ 3,5 mi ao deputado Juninho do Pneu); não há confirmação nas fontes de que tenha sido presa nos dois mandados cumpridos na operação.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/operacao-mira-grupo-ligado-ao-miliciano-adriano-da-nobrega-no-rio/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/manoela-alcantara/mp-denuncia-deputado-em-operacao-sobre-jogo-do-bicho-e-miliciano"
     }
    ]
   },
   {
    "id": "bernardo_bello",
    "nome": "Bernardo Bello",
    "papel": "Apontado como contraventor do jogo do bicho, sócio de Adriano em Copacabana",
    "grupo": "milicia",
    "status": "Bicheiro apontado como chefe do jogo do bicho no RJ, foragido desde 2022 (foi preso pela Interpol na Colômbia em jan/2022 e solto por HC após 4 meses); é réu e vai a júri popular pela morte do rival 'Bid', além de denunciado por lavagem de dinheiro e organização criminosa, sem condenação criminal própria até junho/2026.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Bernardo_Bello"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/bicheiro-vai-a-juri-popular-acusado-de-matar-rival-crime-inspirou-serie/"
     }
    ]
   },
   {
    "id": "orelha",
    "nome": "Luiz Carlos Felipe Martins ('Orelha')",
    "papel": "Apontado braço-direito de Adriano; homenageado por Flávio na Alerj",
    "grupo": "milicia",
    "status": "Já falecido; apontado pelo GAECO/MPRJ como participante, ao lado de Adriano da Nóbrega, dos homicídios de 'Zé Personal' e 'PH' (2011) a mando de Bernardo Bello e ligado ao 'Escritório do Crime', mas por estar morto não foi denunciado nem condenado nessas investigações.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "MPRJ",
      "url": "https://portalsei.mprj.mp.br/web/guest/visualizar?noticiaId=176006"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/jogo-do-bicho-mprj-mira-suspeita-por-morte-do-marido-de-shanna-garcia/"
     }
    ]
   },
   {
    "id": "vorcaro",
    "nome": "Daniel Vorcaro",
    "papel": "Dono do Banco Master; apontado pela PF como chefe de esquema financeiro",
    "grupo": "financeiro",
    "status": "Dono do Banco Master, preso duas vezes pela PF na Operação Compliance Zero (17/nov/2025 e 04/mar/2026) e com prisão determinada pelo STF; investigado por fraude bilionária no mercado financeiro e organização criminosa ('A Turma'), sem condenação até junho/2026.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "STF",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-atende-a-pedido-da-pf-e-determina-prisao-de-daniel-vorcaro-e-outros-investigados-por-supostas-fraudes-no-banco-master/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/pf-prendeu-13-pessoas-em-operacoes-contra-fraudes-no-master-e-brb"
     }
    ]
   },
   {
    "id": "zettel",
    "nome": "Fabiano Campos Zettel",
    "papel": "Pastor, cunhado de Vorcaro; doou R$ 3 mi à campanha presidencial de 2018",
    "grupo": "financeiro",
    "status": "Cunhado de Daniel Vorcaro e maior doador individual da campanha de Bolsonaro em 2022, foi detido temporariamente em 14/jan/2026 (solto horas depois por Toffoli) e teve prisão preventiva decretada pelo STF em 04/mar/2026, sendo investigado na Operação Compliance Zero como operador financeiro e responsável por unidade de intimidação ('A Turma'), sem condenação até junho/2026.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Fabiano_Zettel"
     },
     {
      "veiculo": "TVT News",
      "url": "https://tvtnews.com.br/quem-e-fabiano-zettel-preso-preventivamente-pela-pf/"
     }
    ]
   },
   {
    "id": "paulo_henrique",
    "nome": "Paulo Henrique Costa",
    "papel": "Ex-presidente do BRB que aprovou o financiamento da mansão de Flávio",
    "grupo": "financeiro",
    "status": "Ex-presidente do BRB, preso preventivamente em 16/04/2026 na 4ª fase da Operação Compliance Zero (caso Banco Master) por suspeita de corrupção passiva e lavagem; prisão mantida por unanimidade pelo STF. Era presidente do BRB quando o banco financiou R$ 3,1 mi da mansão de Flávio Bolsonaro.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/quem-e-paulo-henrique-costa-ex-presidente-do-brb-preso-em-operacao-da-pf/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/por-unanimidade-stf-mantem-prisao-de-ex-presidente-do-brb"
     }
    ]
   },
   {
    "id": "santini",
    "nome": "Alexandre Ferreira Dias Santini",
    "papel": "Ex-sócio de Flávio na franquia Kopenhagen; suspeito de atuar como 'laranja'",
    "grupo": "financeiro",
    "status": "Ex-sócio de Flávio Bolsonaro na chocolataria 'Bolsotini' (Barra da Tijuca/RJ); foi investigado pelo MP-RJ por suspeita de lavar dinheiro da rachadinha pela loja, mas obteve habeas corpus em 2020 trancando o inquérito quanto a ele e o STJ anulou as provas; hoje disputa com Flávio uma cobrança cível milionária.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/se-eu-quiser-eu-ponho-o-flavio-bolsonaro-na-cadeia-ameaca-ex-socio-do-senador/"
     },
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2020-jan-22/magistrado-cita-juiz-garantias-liminar-socio-flavio/"
     }
    ]
   },
   {
    "id": "marcia-aguiar",
    "nome": "Márcia Oliveira de Aguiar",
    "papel": "Esposa de Queiroz; investigada no esquema; chegou a estar foragida",
    "grupo": "financeiro",
    "status": "Denunciada no caso da 'rachadinha' do gabinete de Flávio Bolsonaro; defesa nega desvio de verbas.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Brasil 247",
      "url": "https://www.brasil247.com/regionais/sudeste/miliciano-adriano-da-nobrega-deu-r-80-mil-para-queiroz-pagar-cirurgia-no-einstein"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
     }
    ]
   },
   {
    "id": "antonio-peres",
    "nome": "Antonio Peres",
    "papel": "Ex-prefeito de Saquarema (PL); articulou a nomeação de Queiroz",
    "grupo": "operadores",
    "status": "Antonio Peres Alves, ex-prefeito de Saquarema (RJ) e líder local do PL que articulou com Flávio Bolsonaro a nomeação de Fabrício Queiroz a cargo de segurança no município; é investigado/alvo de buscas em operações do MPRJ (2021 e 2025) por organização criminosa, peculato/desvio, lavagem e fraude tributária, sem registro de prisão.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2021-05/ex-prefeito-de-saquarema-e-alvo-de-operacao-do-mprj"
     },
     {
      "veiculo": "Diário do Rio",
      "url": "https://diariodorio.com/mprj-deflagra-operacao-contra-ex-prefeita-de-saquarema-e-mais-20-pessoas-e-10-empresas"
     }
    ]
   },
   {
    "id": "rogerio-teixeira-junior-juninho-do-pneu",
    "nome": "Rogério Teixeira Júnior (Juninho do Pneu)",
    "papel": "Deputado federal (União Brasil-RJ); comprou imóveis de Julia Lotufo atribuídos a Adriano",
    "grupo": "operadores",
    "status": "Deputado federal denunciado pelo MPRJ na Operação Legado por lavagem de dinheiro, exploração de jogo do bicho e ocultação de bens ligados ao grupo do miliciano Adriano da Nóbrega; denunciado junto com Raimunda Veras (mãe de Adriano e ex-assessora de Flávio na Alerj). Não há mandado de prisão contra ele.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/manoela-alcantara/mp-denuncia-deputado-em-operacao-sobre-jogo-do-bicho-e-miliciano"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/juninho-do-pneu-adriano-nobrega-mprj/"
     }
    ]
   },
   {
    "id": "ronnie-lessa",
    "nome": "Ronnie Lessa",
    "papel": "Ex-PM e atirador; condenado por executar Marielle Franco",
    "grupo": "milicia",
    "status": "Ex-PM preso desde 2019, condenado em out/2024 a cerca de 79 anos pelos homicidios de Marielle Franco e Anderson Gomes e a mais 90 anos em mai/2025 por duplo homicidio; delator, cumpre pena na penitenciaria de Tremembe (SP).",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-mai-22/ronnie-lessa-e-condenado-a-90-anos-de-prisao-por-duplo-assassinato-no-rio/"
     },
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/justica/assassino-de-marielle-franco-ronnie-lessa-e-condenado-a-90-anos-de-prisao-por-morte-de-casal/"
     }
    ]
   },
   {
    "id": "fernanda-antunes-figueira-bolsonaro",
    "nome": "Fernanda Antunes Figueira Bolsonaro",
    "papel": "Esposa de Flávio; coproprietária da mansão de Brasília",
    "grupo": "familia",
    "status": "Esposa de Flavio Bolsonaro, foi denunciada e investigada pelo MP-RJ em 2020 no caso das rachadinhas (lavagem de dinheiro e organizacao criminosa), mas a denuncia foi rejeitada/anulada por questoes de foro privilegiado; nao foi presa nem condenada.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/mulher-de-flavio-bolsonaro-tambem-foi-denunciada-pelo-mp-rj/"
     },
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/app/noticia/politica/2020/11/04/interna_politica,1201186/mulher-de-flavio-bolsonaro-tambem-e-denunciada-pelo-mp.shtml"
     }
    ]
   },
   {
    "id": "banco-de-brasilia-brb",
    "nome": "Banco de Brasília (BRB)",
    "papel": "Banco que concedeu o financiamento de R$ 3,1 milhões da mansão",
    "grupo": "financeiro",
    "status": "Instituicao financeira (pessoa juridica) no centro do escandalo do Banco Master/Operacao Compliance Zero da PF; o BRB se coloca como vitima/assistente de acusacao, mas seus negocios com o Master (cerca de R$ 12 bi) estao sob investigacao e a Justica do DF bloqueou acoes ligadas a investigados; nao ha condenacao da instituicao.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-02/justica-bloqueia-acoes-do-brb-ligadas-banco-master"
     },
     {
      "veiculo": "Times Brasil/CNBC",
      "url": "https://timesbrasil.com.br/empresas-e-negocios/entenda-como-funcionava-o-esquema-entre-brb-e-master/"
     }
    ]
   },
   {
    "id": "bolsotini-chocolates-e-cafe",
    "nome": "Bolsotini Chocolates e Café",
    "papel": "Empresa de Flávio cuja conta movimentou dinheiro em espécie",
    "grupo": "financeiro",
    "status": "Loja de chocolates (franquia Kopenhagen) que pertenceu a Flavio Bolsonaro; foi investigada pelo MP-RJ como suposto instrumento de lavagem de dinheiro (cerca de R$ 2,1 mi) das rachadinhas, mas a investigacao foi anulada junto com o caso; a empresa nao foi condenada e Flavio deixou a operacao em 2021.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/brasil/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-pelo-mp/"
     },
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/loja-de-chocolates-de-flavio-bolsonaro-investigada-pelo-mp-e-vendida/"
     }
    ]
   },
   {
    "id": "ibaneis-rocha",
    "nome": "Ibaneis Rocha",
    "papel": "Governador do DF (MDB)",
    "grupo": "aliado",
    "status": "Governador do DF foi investigado por suposta omissão no 8 de janeiro de 2023 e afastado cautelarmente do cargo por cerca de dois meses (não chegou a ser preso); o inquérito foi arquivado pelo STF em março de 2025, a pedido da PGR, sem denúncia ou condenação.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/moraes-arquiva-inquerito-contra-ibaneis-rocha-por-8-de-janeiro/"
     },
     {
      "veiculo": "STF (Notícias)",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-atende-a-pedido-da-pgr-e-arquiva-inquerito-sobre-governador-ibaneis-rocha-pelo-8-de-janeiro/"
     }
    ]
   },
   {
    "id": "ciro-nogueira",
    "nome": "Ciro Nogueira",
    "papel": "Senador (PP-PI)",
    "grupo": "aliado",
    "status": "Senador (PP-PI) é investigado pela PF/STF no escândalo do Banco Master, suspeito de receber 'mesada' de Daniel Vorcaro (estimada em R$ 6 milhões em 2024-2025) em troca de atuação legislativa; foi alvo de busca e apreensão em maio de 2026, mas até junho/2026 não foi preso nem denunciado.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/2026/05/7414093-pf-mira-ciro-nogueira-em-operacao-sobre-fraudes-ligadas-ao-banco-master.html"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/mesada-e-viagens-internacionais-veja-o-que-pf-diz-sobre-ciro-nogueira"
     }
    ]
   },
   {
    "id": "mario-frias",
    "nome": "Mário Frias",
    "papel": "Ex-secretário de Cultura; ligado à produção do filme",
    "grupo": "aliado",
    "status": "Deputado federal e ex-secretário de Cultura é investigado pelo STF (rel. Flávio Dino) por suposto desvio de finalidade no repasse de R$ 2 milhões em emendas ao Instituto Conhecer Brasil, ONG ligada à produtora do filme 'Dark Horse' sobre Bolsonaro; teve dificuldade de ser intimado por estar no exterior, nega irregularidades e até junho/2026 não foi preso nem denunciado.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2026-05/stf-apura-emenda-parlamentar-para-produtora-de-filme-sobre-bolsonaro"
     },
     {
      "veiculo": "InfoMoney",
      "url": "https://www.infomoney.com.br/politica/mario-frias-diz-ao-stf-que-emendas-para-ong-nao-foram-para-dark-horse/"
     }
    ]
   },
   {
    "id": "goup-entertainment",
    "nome": "GOUP Entertainment",
    "papel": "Produtora do filme",
    "grupo": "financeiro",
    "status": "Produtora do filme 'Dark Horse' sobre Bolsonaro é alvo de investigações (Polícia Civil-SP fez busca e apreensão na sede em junho/2026, além de apurações da PF, do STF sobre emendas a ONGs ligadas à empresa e da CGU por desvios no Sistema S); por ser pessoa jurídica não há prisão/condenação, e não consta ação penal formal instaurada contra a empresa até junho/2026.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Go Up Entertainment)",
      "url": "https://pt.wikipedia.org/wiki/Go_Up_Entertainment"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/cpmi-do-dark-horse/"
     }
    ]
   },
   {
    "id": "paulo-calixto",
    "nome": "Paulo Calixto",
    "papel": "Advogado de Eduardo Bolsonaro",
    "grupo": "operadores",
    "status": "Advogado de Eduardo Bolsonaro nos EUA e administrador do fundo Havengate (Dallas), investigado pela Polícia Federal por suspeita de canalizar cerca de R$ 61 milhões do banqueiro Daniel Vorcaro (Banco Master) para bancar os Bolsonaro; sem prisão, condenação ou denúncia formal até junho/2026.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "O Povo / BBC",
      "url": "https://www.opovo.com.br/agencia/bbc/2026/05/24/havengate-o-fundo-na-mira-da-pf-que-conecta-vorcaro-flavio-e-eduardo-bolsonaro.html"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/quebra-de-sigilo-havengate-flavio-eduardo-bolsonaro-master-pcc/"
     }
    ]
   },
   {
    "id": "thiago-miranda",
    "nome": "Thiago Miranda",
    "papel": "Publicitário; intermediou o contato de Flávio com Vorcaro, segundo a Agência Pública",
    "grupo": "operadores",
    "status": "Confirmou a transferência de cerca de R$ 62 mi para o Dark Horse; citado nas investigações sobre o financiamento.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "id": "tarcisio-de-freitas",
    "nome": "Tarcísio de Freitas",
    "papel": "Governador de São Paulo",
    "grupo": "aliado",
    "status": "Governador de São Paulo; não há condenação, prisão ou denúncia criminal pessoal contra ele até junho/2026 — enfrenta ações políticas/jurídicas do PT e denúncias administrativas à ONU/OEA sobre letalidade policial, mas não figura como réu criminal.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/pt-faz-ofensiva-juridica-contra-tarcisio-de-freitas/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2024-03/tarcisio-e-denunciado-onu-por-operacoes-letais-em-sao-paulo"
     }
    ]
   },
   {
    "id": "paulo-marinho",
    "nome": "Paulo Marinho",
    "papel": "Empresário",
    "grupo": "aliado",
    "status": "Empresário e ex-suplente de Flávio Bolsonaro no Senado; foi o denunciante (não o acusado) ao revelar em 2020 supostos vazamentos da PF a Flávio na Operação Furna de Onça; sem prisão, condenação, denúncia ou investigação criminal contra ele, e já reconciliado com Flávio.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/mpf-vai-apurar-denuncia-de-paulo-marinho-contra-flavio-bolsonaro-1.2338507"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/igor-gadelha/apesar-de-denuncia-em-2020-flavio-faz-as-pazes-com-paulo-marinho"
     }
    ]
   },
   {
    "id": "rodrigo-roca",
    "nome": "Rodrigo Roca",
    "papel": "Advogado de Flávio Bolsonaro na rachadinha",
    "grupo": "outro",
    "status": ""
   },
   {
    "id": "luciana-pires",
    "nome": "Luciana Pires",
    "papel": "Advogada de Flávio Bolsonaro na rachadinha",
    "grupo": "outro",
    "status": ""
   },
   {
    "id": "carlos-bolsonaro",
    "nome": "Carlos Bolsonaro",
    "papel": "Vereador (PL); irmão de Flávio; cogitado ao Senado por SC",
    "grupo": "familia",
    "status": "Investigado: indiciado pela PF no caso da 'Abin Paralela' (núcleo político; PGR pediu em 18/06/2026 envio à 1ª instância) e alvo de inquérito de rachadinha reaberto pelo MPRJ em fev/2026 (gabinete na Câmara do Rio, 2005–2021, ~R$ 1,7 mi); sem prisão, condenação ou denúncia do MP que o torne réu até junho/2026.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/2025/06/7177288-carlos-bolsonaro-e-ramagem-sao-indiciados-por-abin-paralela.html"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-justica/pgr-quer-que-investigacao-sobre-abin-paralela-va-para-1a-instancia/"
     }
    ]
   },
   {
    "id": "antonio-carlos-freixo-junior-mineiro",
    "nome": "Antonio Carlos Freixo Júnior ('Mineiro')",
    "papel": "Empresário do Grupo Entre",
    "grupo": "operadores",
    "status": "citado"
   },
   {
    "id": "walderice-santos-da-conceicao-wal-do-acai",
    "nome": "Walderice Santos da Conceição (Wal do Açaí)",
    "papel": "Ex-secretária parlamentar",
    "grupo": "operadores",
    "status": "Ex-secretária parlamentar de Jair Bolsonaro (não diretamente de Flávio); investigada pelo MPF como suposta funcionária-fantasma e alvo de ação de improbidade administrativa (esfera cível, não penal) ajuizada em 2022; não há denúncia criminal, condenação penal nem prisão registradas.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/bolsonaro-respondera-por-5-atos-de-improbidade-no-caso-wal-do-acai/"
     },
     {
      "veiculo": "MPF",
      "url": "https://www.mpf.mp.br/df/sala-de-imprensa/noticias-df/mpf-propoe-acao-de-improbidade-contra-o-presidente-da-republica-jair-bolsonaro-e-wal-do-acai"
     }
    ]
   },
   {
    "id": "rodrigo-bacellar",
    "nome": "Rodrigo Bacellar",
    "papel": "Ex-presidente da Alerj",
    "grupo": "aliado",
    "status": "Ex-presidente da Alerj denunciado pela PGR por obstrução de investigação de organização criminosa armada; preso preventivamente em dezembro/2025, solto após decisão da Alerj e preso novamente em março/2026 por Moraes após o TSE cassar seu mandato; também investigado por lavagem de dinheiro; sem condenação criminal até junho/2026.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "STF",
      "url": "https://noticias.stf.jus.br/postsnoticias/relator-decreta-prisao-preventiva-do-ex-deputado-estadual-rodrigo-bacellar-uniao-rj/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-03/pf-volta-prender-rodrigo-bacellar-ex-presidente-da-alerj"
     }
    ]
   },
   {
    "id": "jorge-luiz-fernandes",
    "nome": "Jorge Luiz Fernandes",
    "papel": "Ex-chefe de gabinete de Carlos",
    "grupo": "operadores",
    "status": "Chefe de gabinete de Carlos Bolsonaro na Câmara do Rio (ligado ao entorno do clã, seguido por Flávio nas redes); investigado pelo MP-RJ como suposto operador de rachadinha, com inquérito reaberto em 2025/2026 após ter sido arquivado em 2024; não há denúncia formal, condenação nem prisão registradas.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Exame",
      "url": "https://exame.com/brasil/quem-e-jorge-fernandes-apontado-como-operador-de-rachadinha-no-gabinete-de-carlos-bolsonaro/"
     },
     {
      "veiculo": "Folha PE",
      "url": "https://www.folhape.com.br/politica/quem-e-jorge-fernandes-apontado-como-operador-de-rachadinha-no/269237/"
     }
    ]
   },
   {
    "id": "erasmo-carlos-battistella",
    "nome": "Erasmo Carlos Battistella",
    "papel": "Doador de Flávio: empresário gaúcho, fundador e CEO da Be8 (biocombustíveis, Passo Fundo/RS), integrante do Conselhão da Presidência e do conselho da Aprobio. Doou R$ 500 mil à campanha de Flávio e R$ 500 mil à de Lula no início de setembro/2026 (transferência eletrônica e Pix), tornando-se um dos dois maiores doadores pessoa física de Flávio e o maior de Lula até 09/09 (dados TSE/DivulgaCand). Versão da assessoria: doações como pessoa física, dentro dos limites da legislação eleitoral, com compromisso de 'governança, integridade e transparência'.",
    "grupo": "financeiro",
    "status": "Doador pessoa física registrado no TSE; sem investigação conhecida"
   },
   {
    "id": "fernando-de-castro-marques",
    "nome": "Fernando de Castro Marques",
    "papel": "Doador de Flávio: dono e CEO da União Química Farmacêutica, descrito pelo Poder360 como 'conhecido aliado da direita bolsonarista' (tentou emplacar a vacina Sputnik V na Anvisa durante a pandemia; candidato derrotado ao Senado pelo DF em 2018). Aparece nos dados do TSE (08-09/09/2026) como doador de R$ 500 mil à campanha presidencial de Flávio, empatado com Battistella como maior doador pessoa física. Também doou R$ 500 mil à reeleição de Tarcísio de Freitas (SP). Sem manifestação pública dele nas matérias abertas.",
    "grupo": "financeiro",
    "status": "Doador pessoa física registrado no TSE; sem investigação conhecida"
   },
   {
    "id": "angelo-calmon-de-sa",
    "nome": "Ângelo Calmon de Sá",
    "papel": "Doador de Flávio: ex-banqueiro (91 anos), ex-controlador do Banco Econômico (intervenção do BC em 1995, liquidado em 1996), ministro da Indústria e Comércio no governo Geisel (1977-79) e ministro no governo Collor (1992). Doação de R$ 400 mil registrada no DivulgaCand/TSE em setembro/2026 — Minha Bahia a lista entre as doações diretas à candidatura de Flávio, como 3º maior doador pessoa física; a Folha (10/09) o descreve como 'entre os maiores doadores da campanha de Flávio'. Já havia doado R$ 300 mil ao PL em 2024 (Metrópoles). Em 2026 também doou R$ 400 mil a ACM Neto (BA), R$ 200 mil a Pedro Lupion (PR) e valores menores a candidatos baianos. Sem manifestação dele nas matérias abertas.",
    "grupo": "financeiro",
    "status": "Doador registrado no TSE. Foi condenado pela Justiça Federal na Bahia por gestão fraudulenta do Banco Econômico (pena de 13 anos e 4 meses noticiada em 2007); em 2019 a defesa alegou prescrição e idade avançada no STF. A situação atual da pena não foi verificada."
   },
   {
    "id": "karina-ferreira-da-gama",
    "nome": "Karina Ferreira da Gama",
    "papel": "Produtora do filme 'Dark Horse' (Go Up Entertainment), cujo financiamento por Vorcaro foi pedido por Flávio; preside o Instituto Conhecer Brasil (ICB) e controla a Academia Nacional de Cultura (ANC). Alvo de busca e apreensão na Operação Make Up (10/09/2026). Segundo decisão de Flávio Dino citada pelo Poder360, recursos saíam do ICB, passavam por terceirizadas e voltavam à ANC — R$ 6.175.273,64 com 'contornos de lavagem de dinheiro'; a movimentação se relaciona a contrato de Wi-Fi com a Prefeitura de SP. Versão da defesa (nota de 13/09, advogado Ricardo Sayeg): entregou voluntariamente mais de 20 mil páginas à PF, sua participação no filme 'se restringiu à prestação de serviços técnicos', desconhece detalhes do financiamento, 'investigação não é acusação, muito menos condenação'; ajuizou reclamação constitucional no STF.",
    "grupo": "operadores",
    "status": "Investigada; alvo de busca e apreensão (Operação Make Up, 10/09/2026); não denunciada"
   },
   {
    "id": "renato-araujo",
    "nome": "Renato Araújo",
    "papel": "Aliado de Flávio e coordenador regional do PL na Costa Verde (RJ) desde maio/2025, escolhido por Jair Bolsonaro e Valdemar Costa Neto; candidato a deputado federal (PL-RJ) em 2026 (derrotado para prefeito de Angra em 2024). Empresário de 40 anos, fundador da Bravo Construções (2011; hoje no nome da esposa), que recebeu R$ 16 milhões do Estado do RJ para reparos em 15 escolas. Organizou motociata e carreata de barcos para Flávio em Angra (29/08/2026) e esteve no ato de 07/09 na Paulista. A PF encontrou contrato não assinado de R$ 900 mil para obras na casa de Bolsonaro em Angra. Perfil da Agência Pública (09/09/2026). Versão: não respondeu ao pedido de entrevista da Pública.",
    "grupo": "operadores",
    "status": "Investigado (Operação Sarasvati, Polícia Civil-RJ, ago/2026, 20 mandados: Bravo Construções alvo por suspeita de superfaturamento e lavagem em obras de escolas); não denunciado"
   },
   {
    "id": "willer-tomaz",
    "nome": "Willer Tomaz",
    "papel": "Amigo e aliado de Flávio desde o início do governo Jair Bolsonaro: advogado, alvo de busca e apreensão da PF em 04/08/2026 (Operação Sem Desconto, fraudes no INSS; a PF o aponta como 'hub financeiro, patrimonial e logístico' de políticos). Novidades na janela: a revista piauí revelou (16/09) que Flávio usou na primeira quinzena de agosto, em SP, apartamento de 158 m² da WT Administração de Imóveis e Bens (empresa de Tomaz) para reuniões de campanha, podcasts e gravação de vídeos — imóvel comprado em 10/02/2026 por R$ 3,5 mi (deságio de R$ 2 mi; registro em 04/03/2026) de Fabiano Zettel, cunhado e operador de Vorcaro. Em 09/09, segundo a Revista Fórum, Flávio comparou a PF à 'Gestapo' ao defendê-lo. Versão de Flávio: 'apenas se hospedou em hotéis da região'. Versão de Tomaz: nega irregularidades, diz não conhecer Zettel nem Vorcaro e fala em 'ataques sem qualquer fundamento' de adversários. Não é investigado no caso Master.",
    "grupo": "aliado",
    "status": "Investigado (alvo de busca e apreensão da PF em 04/08/2026, caso INSS); não denunciado"
   },
   {
    "id": "tallis-gomes",
    "nome": "Tallis Gomes",
    "papel": "Conselheiro informal de Flávio (autodeclarado): empresário (G4 Educação), membro da Rockbridge Network — rede de investidores dos EUA fundada em 2019 por J.D. Vance. Em vídeo citado pela Fórum (15/09): 'Eu tenho um papel de conselheiro do Flávio. Desde antes de ele anunciar a campanha dele, eu tenho agido ali como uma espécie do que o Elon Musk foi para o Trump' e 'faço parte de um grupo empresarial nos Estados Unidos chamado Rockbridge'. Renan Santos (Missão, adversário) e o site Amado Mundo o apontam, com Pedro Sang, como representante da Rockbridge que ofereceu apoio a candidaturas; o PT (Lindbergh Farias) levou notícia de fato ao STF em 13/09 sobre suposto custeio estrangeiro. Versão de Tallis (CNN): é membro simples da rede, sem função de gestão, nega integrar formalmente a campanha e diz nunca ter doado. Campanha de Flávio não respondeu. Mesma apuração cita Pedro Sang (documentado no comitê de SP; nega intermediar fundos) e André Marinho (memorando sobre terras raras; diz ser 'exercício hipotético').",
    "grupo": "aliado",
    "status": "Sem investigação conhecida; objeto de notícia de fato do PT ao STF (13/09/2026) — acusação de adversários, não de autoridade"
   },
   {
    "id": "alfredo-gaspar",
    "nome": "Alfredo Gaspar",
    "papel": "candidato a vice na chapa de Flávio Bolsonaro, anunciada em 5/8/2026 e registrada no TSE sob o número 22; deputado federal (PL-AL) de primeiro mandato, ex-secretário de Segurança Pública de Alagoas",
    "grupo": "politico",
    "status": "Não é réu, denunciado nem condenado. Em 7/9/2026 o corregedor-geral eleitoral reconheceu a admissibilidade de uma Ação de Investigação Judicial Eleitoral movida pela coligação de Lula contra ele e Flávio, por suposto abuso de poder econômico na Festa do Peão de Barretos; a chapa ainda deve apresentar defesa."
   },
   {
    "id": "daniella-marques-consentino",
    "nome": "Daniella Marques Consentino",
    "papel": "coordenadora da área econômica da campanha de Flávio Bolsonaro; ex-presidente da Caixa Econômica Federal e ex-secretária de Paulo Guedes no Ministério da Economia. Participou do jantar de banqueiros na casa de Marcelo Kayath, no fim de agosto de 2026, e é citada como possível ministra da Casa Civil.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "adolfo-sachsida",
    "nome": "Adolfo Sachsida",
    "papel": "integra a coordenação econômica da campanha de Flávio Bolsonaro ao lado de Daniella Marques, conforme noticiado em 20/8/2026; ex-ministro de Minas e Energia de Jair Bolsonaro e ex-braço direito de Paulo Guedes.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "jose-vicente-santini",
    "nome": "José Vicente Santini",
    "papel": "coordenador da campanha de Flávio Bolsonaro. Comprou em setembro de 2025, por R$ 14,5 milhões, a mansão no Lago Sul (DF) que Flávio passou a usar para reuniões e articulações de campanha a partir de 1º/7/2026. Foi secretário nacional de Justiça e secretário-executivo da Casa Civil no governo Jair Bolsonaro, exonerado em 2020 por usar avião da FAB em viagem à Índia; era assessor especial do governador Tarcísio de Freitas quando foi escalado para a campanha. Advoga para o grupo J&F, dos irmãos Batista.",
    "grupo": "aliado",
    "status": "Não é investigado formalmente, denunciado nem réu. Em 2/7/2026 o deputado Lindbergh Farias (PT-RJ) apresentou notícia de fato à PF pedindo apuração da origem dos recursos da compra do imóvel (R$ 4 milhões de entrada e R$ 10,5 milhões financiados no BRB). Santini afirmou que 'o dinheiro está tudo declarado, imposto está pago'. Sua ida a um evento em Washington com Marco Rubio e Joesley Batista, em julho de 2026, gerou incômodo em uma ala da campanha."
   },
   {
    "id": "nelson-santini",
    "nome": "Nelson Santini",
    "papel": "coordenador logístico e financeiro da campanha de Flávio Bolsonaro, anunciado em 27/2/2026; conhecido como 'Tenente Santini', é oficial da reserva da PM e empresário do setor de segurança, irmão de José Vicente Santini e filho do general Nelson Santini Junior. Foi vereador em Campinas (SP) e já atuou nas campanhas da família Bolsonaro em 2018 e 2022.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "jmartelo-solucoes-em-comunicacao",
    "nome": "JMartelo Soluções em Comunicação",
    "papel": "fornecedora da campanha de Flávio Bolsonaro: contratada por R$ 1,6 milhão sob a rubrica de serviços prestados por terceiros; a agência é de um ex-assessor da Casa Civil do governo Tarcísio de Freitas",
    "grupo": "aliado",
    "status": "Sem processo conhecido. O nome civil do dono não foi confirmado em fonte aberta."
   },
   {
    "id": "duda-lima",
    "nome": "Duda Lima",
    "papel": "marqueteiro da campanha de Flávio Bolsonaro desde 30/7/2026, quando substituiu Alexandre Oltramari e Eduardo Fischer — segunda troca no comando da comunicação em menos de três meses. Foi marqueteiro de Jair Bolsonaro em 2022, da reeleição de Ricardo Nunes em 2024 e de Celso Russomanno em 2016.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "maria-claudia-bucchianeri",
    "nome": "Maria Claudia Bucchianeri",
    "papel": "advogada da campanha de Flávio Bolsonaro, escolhida em março de 2026 para a atuação contenciosa no TSE; ex-ministra do TSE, nomeada por Jair Bolsonaro em 2021, deixou a Corte em 2023.",
    "grupo": "juridico",
    "status": "Sem processo conhecido."
   },
   {
    "id": "claudio-lottenberg",
    "nome": "Cláudio Lottenberg",
    "papel": "anunciado por Flávio Bolsonaro em 28/8/2026, em entrevista à TV Globo, como seu futuro ministro da Saúde. Médico oftalmologista, 65 anos, preside o Conselho Deliberativo do Hospital Albert Einstein, o Instituto Coalizão Saúde e a Confederação Israelita do Brasil.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "marcelo-kayath",
    "nome": "Marcelo Kayath",
    "papel": "empresário do mercado financeiro que ofereceu jantar a Flávio Bolsonaro em sua casa, em São Paulo, no fim de agosto de 2026; banqueiros, investidores e empresários presentes o sugeriram ao candidato para ministro da Fazenda de um eventual governo. Ex-presidente do Credit Suisse no Brasil e sócio da gestora QMS Capital, apoiou Lula em 2022.",
    "grupo": "aliado",
    "status": "Sem processo conhecido."
   },
   {
    "id": "walter-schlatter",
    "nome": "Walter Schlatter",
    "papel": "maior doador pessoa física da campanha de Flávio Bolsonaro, com R$ 300 mil registrados na prestação de contas eleitoral. Prefeito de Chapadão do Sul (MS) pelo PP, produtor rural e empresário.",
    "grupo": "financeiro",
    "status": "Sem processo conhecido. Confirmou pessoalmente a doação por telefone ao Portal Agência da Notícia em 6/9/2026."
   },
   {
    "id": "flavio-roscoe",
    "nome": "Flávio Roscoe",
    "papel": "candidato do PL ao governo de Minas Gerais, lançado em 5/8/2026 como o nome de Flávio Bolsonaro para dar palanque estadual à candidatura presidencial; é o candidato que mais recebeu doações privadas no país até o fim de agosto de 2026 (R$ 4 milhões de pessoas físicas). Empresário do setor têxtil, presidiu a Fiemg e disputa sua primeira eleição.",
    "grupo": "politico",
    "status": "Sem processo conhecido."
   },
   {
    "id": "marcio-canella",
    "nome": "Márcio Canella",
    "papel": "candidato ao Senado pelo Rio de Janeiro com apoio declarado de Flávio Bolsonaro, que manifestou publicamente 'apoio integral' a ele mesmo após a operação da PF; ex-prefeito de Belford Roxo.",
    "grupo": "operadores",
    "status": "Responde em liberdade. Foi preso em flagrante em 7/7/2026, na Operação Unha e Carne da PF, por posse de fuzil calibre 5,56 encontrado em seu veículo — sua defesa alegou que a arma era do segurança. Em 10/7/2026 o ministro Alexandre de Moraes concedeu liberdade provisória, com tornozeleira, entrega de passaporte e suspensão do porte de arma; as cautelares foram revogadas em 24/7/2026. É investigado por lavagem de dinheiro em rede de postos de combustíveis. Não há denúncia formal conhecida.",
    "situacao": [
     "preso",
     "investigado"
    ]
   },
   {
    "id": "rogeria-nantes-bolsonaro",
    "nome": "Rogéria Nantes Bolsonaro",
    "papel": "mãe de Flávio Bolsonaro e suplente na chapa ao Senado de Márcio Canella; a indicação foi feita pelo próprio Flávio.",
    "grupo": "familia",
    "status": "Sem processo conhecido. Não é alvo da Operação Unha e Carne."
   },
   {
    "id": "elcio-de-queiroz",
    "nome": "Élcio Vieira de Queiroz",
    "papel": "Ex-PM, motorista do carro usado no assassinato de Marielle Franco; fez delação premiada",
    "grupo": "operadores",
    "status": "Condenado em out/2024 a 59 anos e 8 meses; firmou acordo de delação premiada que destravou o caso.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Assassinato_de_Marielle_Franco"
     },
     {
      "veiculo": "Notícias ao Minuto",
      "url": "https://www.noticiasaominuto.com/mundo/2662095/assassinos-de-marielle-franco-condenados-a-78-e-59-anos-de-prisao"
     }
    ]
   },
   {
    "id": "maxwell-simoes-correa",
    "nome": "Maxwell Simões Corrêa (Suel)",
    "papel": "Ex-bombeiro 'Suel', apontado como planejador, fez vigilância da rotina de Marielle e ocultou armas após o crime",
    "grupo": "operadores",
    "status": "Condenado a 4 anos por obstrução; pronunciado para júri popular pelos homicídios de Marielle e Anderson.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/413661/maxwell-simoes-vai-a-juri-popular-pelo-assassinato-de-marielle-franco"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-as-pontas-soltas-e-os-proximos-passos-apos-delacao"
     }
    ]
   },
   {
    "id": "ronald-paulo-alves-pereira",
    "nome": "Ronald Paulo Alves Pereira",
    "papel": "Major da PMERJ 'Major Ronald'/'Tartaruga', apontado como 2º chefe do Escritório do Crime e do mercado imobiliário ilegal da milícia",
    "grupo": "milicia",
    "status": "Condenado a 56 anos por dois homicídios qualificados e um homicídio tentado no caso Marielle.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/02/irmaos-brazao-a-condenacao-por-matar-marielle-franco/"
     },
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/450632/stf-veja-penas-fixadas-pela-1-turma-a-mandantes-da-morte-de-marielle"
     }
    ]
   },
   {
    "id": "mauricio-silva-da-costa",
    "nome": "Maurício Silva da Costa",
    "papel": "Tenente reformado da PMERJ apontado pelo MP-RJ como um dos chefes da milícia ao lado de Adriano e Major Ronald",
    "grupo": "milicia",
    "status": "Denunciado pelo MP-RJ como integrante da cúpula da milícia da zona oeste; segundo o MP, nenhuma ação ocorria sem o aval dele, de Adriano e de Ronald.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/miliciano-adriano-da-nobrega-prestava-servicos-a-cupula-do-jogo-do-bicho-diz-mp/"
     }
    ]
   },
   {
    "id": "leonardo-gouvea-da-silva",
    "nome": "Leonardo Gouvêa da Silva",
    "papel": "'Mad', apontado como sucessor de Adriano na liderança do Escritório do Crime",
    "grupo": "milicia",
    "status": "Preso e condenado em 29 de maio de 2024 a 26 anos e 8 meses pelo homicídio de Marcelo Diotti da Mata (2018); assumiu o comando do grupo após a morte de Adriano.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     }
    ]
   },
   {
    "id": "leandro-gouvea-da-silva",
    "nome": "Leandro Gouvêa da Silva",
    "papel": "'Tonhão', braço-direito e motorista da liderança do Escritório do Crime",
    "grupo": "milicia",
    "status": "Preso e condenado em 29 de maio de 2024 a 26 anos e 8 meses pelo homicídio de Marcelo Diotti da Mata (2018).",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     }
    ]
   },
   {
    "id": "domingos-brazao",
    "nome": "Domingos Brazão",
    "papel": "Conselheiro afastado do TCE-RJ, apontado como um dos mandantes do assassinato de Marielle Franco",
    "grupo": "milicia",
    "status": "Preso desde março/2024 e condenado pelo STF em fev/2026 a 76 anos e 3 meses por duplo homicídio, homicídio tentado e organização criminosa armada.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "STF",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-condena-irmaos-brazao-a-76-anos-de-prisao-pelo-assassinato-de-marielle-franco-e-anderson-gomes/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/irmaos-brazao-sao-condenados-a-76-anos-e-3-meses-por-morte-de-marielle/"
     }
    ]
   },
   {
    "id": "chiquinho-brazao",
    "nome": "Chiquinho Brazão",
    "papel": "Deputado federal cassado, apontado como um dos mandantes do assassinato de Marielle Franco",
    "grupo": "milicia",
    "status": "Preso desde março/2024 e condenado pelo STF em fev/2026 a 76 anos e 3 meses por duplo homicídio, homicídio tentado e organização criminosa armada.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "STF",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-condena-irmaos-brazao-a-76-anos-de-prisao-pelo-assassinato-de-marielle-franco-e-anderson-gomes/"
     },
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/02/irmaos-brazao-a-condenacao-por-matar-marielle-franco/"
     }
    ]
   },
   {
    "id": "rogerio-de-andrade",
    "nome": "Rogério de Andrade",
    "papel": "Contraventor (bicheiro) chefe de jogo do bicho que usou matadores como Ronnie Lessa e Adriano em disputas de território",
    "grupo": "financeiro",
    "status": "Preso em 29/10/2024 e denunciado pelo Gaeco/MPRJ como mandante do assassinato de Fernando Iggnácio; responde em processo à parte.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/bicheiro-rogerio-de-andrade-e-preso-no-rio-de-janeiro/"
     },
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/brasil/2024/10/6976497-o-que-se-sabe-sobre-a-prisao-do-bicheiro-rogerio-andrade.html"
     }
    ]
   },
   {
    "id": "jose-luiz-de-barros-lopes",
    "nome": "José Luiz de Barros Lopes (Zé Personal)",
    "papel": "Contraventor 'Zé Personal', apontado como mandante de homicídios executados por Adriano entre 2006 e 2009",
    "grupo": "financeiro",
    "status": "Mandante de ao menos oito homicídios entre 2006 e 2009 segundo apurações; foi assassinado em 2011 em emboscada atribuída a integrantes do Escritório do Crime.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     },
     {
      "veiculo": "Correio do Brasil",
      "url": "https://correiodobrasil.com.br/a/mprj-faz-operacao-sobre-morte-genro-bicheiro-maninho"
     }
    ]
   },
   {
    "id": "valdomiro-paes-garcia",
    "nome": "Valdomiro Paes Garcia",
    "papel": "Contraventor do jogo do bicho cuja família Adriano protegia como segurança a partir de 2006",
    "grupo": "financeiro",
    "status": "Bicheiro da família Paes Garcia (ligada ao Salgueiro); Adriano atuava na segurança de seus parentes, contexto em que cometeu homicídios a mando de contraventores.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/miliciano-adriano-da-nobrega-prestava-servicos-a-cupula-do-jogo-do-bicho-diz-mp/"
     }
    ]
   },
   {
    "id": "rivaldo-barbosa",
    "nome": "Rivaldo Barbosa",
    "papel": "Ex-chefe da Polícia Civil do RJ; teria garantido impunidade aos mandantes",
    "grupo": "milicia",
    "status": "Preso em março/2024; condenado pelo STF a 18 anos por corrupção passiva e obstrução de Justiça (absolvido da acusação de homicídio).",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-ex-chefe-de-policia-rivaldo-barbosa-e-condenado-a-18-anos/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/o-jogo-duplo-de-rivaldo-barbosa/"
     }
    ]
   },
   {
    "id": "robson-calixto-fonseca",
    "nome": "Robson Calixto Fonseca (Peixe)",
    "papel": "Homem de confiança de Domingos Brazão; ex-assessor envolvido em grilagem",
    "grupo": "operadores",
    "status": "Condenado a 9 anos por integrar organização criminosa armada no caso Marielle; investigado pela PF como coordenador de desvio de emendas via ONGs.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/ex-assessor-de-domingos-brazao-e-condenado-a-9-anos-pela-morte-de-marielle/"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-emenda-ong-milicia-brazao-marielle/"
     }
    ]
   },
   {
    "id": "maxwell-simoes-correia",
    "nome": "Maxwell Simões Correia",
    "papel": "Ex-bombeiro que ocultou o carro e armas usados no crime",
    "grupo": "operadores",
    "status": "Conhecido como 'Suel'; condenado a 4 anos por atrapalhar a investigação; teria pego o Cobalt usado no crime, trocado placas e descartado as armas.",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-bombeiro-pega-4-anos-por-atrapalhar-investigacoes"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/bombeiro-e-condenado-por-atrapalhar-investigacao-do-assassinato-de-marielle/"
     }
    ]
   },
   {
    "id": "wellington-da-silva-braga",
    "nome": "Wellington da Silva Braga",
    "papel": "Chefe da maior milícia do RJ (Bonde do Ecko), aliado de Adriano da Nóbrega",
    "grupo": "milicia",
    "status": "Conhecido como 'Ecko'; chefiou a milícia da Zona Oeste em aliança com Nóbrega, expandindo o poder do grupo; preso desde 2021.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/entrevistas/alem-de-rivais-livro-revela-a-conexao-mortal-entre-ronnie-lessa-e-adriano-da-nobrega/"
     },
     {
      "veiculo": "Intercept Brasil",
      "url": "https://www.intercept.com.br/2021/06/14/ecko-miliciano-adriano-nobrega/"
     }
    ]
   },
   {
    "id": "mohana-figueiredo-lessa",
    "nome": "Mohana Figueiredo Lessa",
    "papel": "Filha de Ronnie Lessa, envolvida no esquema de importação de peças de armas",
    "grupo": "financeiro",
    "status": "Recebia e reembalava peças importadas pelo pai e as enviava ao Brasil; foi absolvida das acusações por falta de prova de dolo.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/brasil/ronnie-lessa-e-condenado-na-justica-federal-por-contrabando-de-pecas-de-armas/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/justica-do-rio-condena-ronnie-lessa-por-contrabando-de-pecas-para-armas-de-fogo/"
     }
    ]
   },
   {
    "id": "henrique-vorcaro",
    "nome": "Henrique Moura Vorcaro",
    "papel": "Pai de Daniel Vorcaro, apontado em operações financeiras do esquema Master",
    "grupo": "financeiro",
    "status": "Preso preventivamente na 6ª fase da Operação Compliance Zero (maio/2026).",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2026-05/pai-de-daniel-vorcaro-e-preso-na-6a-fase-da-operacao-compliance-zero"
     }
    ]
   },
   {
    "id": "felipe-cancado-vorcaro",
    "nome": "Felipe Cançado Vorcaro",
    "papel": "Primo de Daniel Vorcaro, apontado como peça central do núcleo financeiro-operacional",
    "grupo": "financeiro",
    "status": "Preso na 5ª fase (maio/2026); havia fugido em carrinho de golfe em Trancoso minutos antes da PF na 2ª fase.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/brasil/politica/preso-primo-de-vorcaro-ja-fugiu-em-carrinho-de-golfe-minutos-antes-da-chegada-da-pf-em-operacao,e9d11e240fbdc39592ed4768a18f27c0w7vryl1i.html"
     },
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/politica/quem-e-felipe-cancado-preso-pf-operacao-compliance-zero-stf/"
     }
    ]
   },
   {
    "id": "augusto-lima",
    "nome": "Augusto Ferreira Lima",
    "papel": "Ex-CEO e ex-sócio do Banco Master, dono do Banco Pleno",
    "grupo": "operadores",
    "status": "Preso na 1ª fase da Compliance Zero (nov/2025), solto após 11 dias com tornozeleira eletrônica; novamente alvo de busca em fase posterior; Banco Pleno liquidado pelo BC.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "NeoFeed",
      "url": "https://neofeed.com.br/negocios/quem-e-o-ex-socio-do-banco-master-que-tambem-foi-preso-pela-policia-federal/"
     },
     {
      "veiculo": "ISTOÉ",
      "url": "https://istoe.com.br/augusto-lima-pf-nova-fase-compliance-zero"
     }
    ]
   },
   {
    "id": "luiz-antonio-bull",
    "nome": "Luiz Antonio Bull",
    "papel": "Ex-diretor de compliance/riscos do Banco Master",
    "grupo": "operadores",
    "status": "Preso preventivamente na Operação Compliance Zero.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Escândalo do Banco Master)",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "id": "nelson-tanure",
    "nome": "Nelson Tanure",
    "papel": "Empresário apontado pela PF como 'sócio oculto' do Banco Master",
    "grupo": "financeiro",
    "status": "Alvo de busca e apreensão na Compliance Zero; investigado no STF; nega ter sido controlador ou sócio. Ganhou relógio milionário de Vorcaro.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/teo-cury/politica/investigacao-da-pf-aponta-nelson-tanure-como-socio-oculto-do-master/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/dinheiro-e-negocios/mpf-e-pf-tratam-nelson-tanure-como-socio-oculto-do-banco-master"
     }
    ]
   },
   {
    "id": "joao-carlos-mansur",
    "nome": "João Carlos Mansur",
    "papel": "Fundador da gestora Reag Investimentos, usada em operações suspeitas do Master",
    "grupo": "financeiro",
    "status": "Alvo da Compliance Zero e da Operação Carbono Oculto (lavagem para o PCC); Reag liquidada pelo BC; depôs na CPI e negou fraudes e vínculo com PCC.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2026-03/cpi-do-crime-fundador-da-empresa-reag-nega-vinculo-com-pcc"
     },
     {
      "veiculo": "Investidor10",
      "url": "https://investidor10.com.br/noticias/quem-e-joao-carlos-mansur-fundador-da-reag-investimentos-e-investigado-pela-pf-117980/"
     }
    ]
   },
   {
    "id": "nathalia-queiroz",
    "nome": "Nathalia Queiroz",
    "papel": "Filha de Queiroz; lotada como assessora-fantasma no gabinete de Flávio na Alerj.",
    "grupo": "operadores",
    "status": "Denunciada pelo MP-RJ por integrar o esquema de funcionários fantasmas; teria transferido cerca de R$ 97 mil. Ação posteriormente trancada por decisões do STJ/STF.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/rachadinha-mp-denuncia-mulher-de-flavio-bolsonaro-e-filhas-de-queiroz"
     },
     {
      "veiculo": "Wikipédia (Caso Queiroz)",
      "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz"
     }
    ]
   },
   {
    "id": "evelyn-queiroz",
    "nome": "Evelyn Queiroz",
    "papel": "Filha de Queiroz; também lotada no gabinete de Flávio como suposta funcionária do esquema.",
    "grupo": "operadores",
    "status": "Citada na denúncia do MP-RJ como uma das filhas de Queiroz lotadas no gabinete de Flávio na Alerj dentro da teia de funcionários fantasmas. Ação trancada por decisões do STJ/STF.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/rachadinha-mp-denuncia-mulher-de-flavio-bolsonaro-e-filhas-de-queiroz"
     },
     {
      "veiculo": "Wikipédia (Caso Queiroz)",
      "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz"
     }
    ]
   },
   {
    "id": "tamara-harrouche-garcia",
    "nome": "Tamara Harrouche Garcia",
    "papel": "Ex-mulher de Bello e filha do bicheiro Maninho; pela ligação com a família Garcia Bello chegou ao comando do jogo do bicho",
    "grupo": "financeiro",
    "status": "Filha de Waldemir Paes Garcia (Maninho); foi casada com Bernardo Bello, e a relação deu a Bello acesso ao império do jogo do bicho da família.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/sociedade/quem-e-o-bicheiro-que-a-policia-do-rio-tenta-prender-em-operacao-nesta-quinta-feira/"
     }
    ]
   },
   {
    "id": "waldemir-paes-garcia-maninho",
    "nome": "Waldemir Paes Garcia (Maninho)",
    "papel": "Antigo chefe do jogo do bicho no Rio e ex-sogro de Bello; patriarca da família Garcia",
    "grupo": "financeiro",
    "status": "Assassinado em 2004 na porta de uma academia; sua família foi protegida por Adriano da Nóbrega e por seguranças ligados ao Escritório do Crime.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_jogo_do_bicho_no_Rio_de_Janeiro"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     }
    ]
   },
   {
    "id": "alcebiades-paes-garcia-bid",
    "nome": "Alcebíades Paes Garcia (Bid)",
    "papel": "Irmão de Maninho e herdeiro do jogo do bicho da família Garcia; vítima do crime cujo julgamento aponta Bello como mandante",
    "grupo": "financeiro",
    "status": "Assassinado em 25 de fevereiro de 2020, no carnaval; Bernardo Bello é apontado como mandante e foi a julgamento (júri popular) por esse homicídio, motivado por disputa de pontos de jogo do bicho e caça-níqueis.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     },
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     }
    ]
   },
   {
    "id": "waldomiro-paes-garcia-junior-mirinho",
    "nome": "Waldomiro Paes Garcia Júnior (Mirinho)",
    "papel": "Filho de Maninho e herdeiro do jogo do bicho da família Garcia; vítima de assassinato",
    "grupo": "financeiro",
    "status": "Assassinado em 2017 aos 27 anos, em meio à guerra pela sucessão do jogo do bicho da família Garcia; o nome de Bello é envolvido em crimes contra ele.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/sociedade/quem-e-o-bicheiro-que-a-policia-do-rio-tenta-prender-em-operacao-nesta-quinta-feira/"
     }
    ]
   },
   {
    "id": "shanna-harrouche-garcia",
    "nome": "Shanna Harrouche Garcia",
    "papel": "Filha de Maninho e ex-cunhada de Bello; acusa Bello de ser mandante de atentado contra ela",
    "grupo": "financeiro",
    "status": "Sobreviveu a tentativa de assassinato em 2019 e acusa Bernardo Bello de ser o mandante do atentado.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/sociedade/quem-e-o-bicheiro-que-a-policia-do-rio-tenta-prender-em-operacao-nesta-quinta-feira/"
     },
     {
      "veiculo": "Wikipédia (Bernardo Bello)",
      "url": "https://pt.wikipedia.org/wiki/Bernardo_Bello"
     }
    ]
   },
   {
    "id": "fernando-iggnacio",
    "nome": "Fernando Iggnácio",
    "papel": "Bicheiro do Rio (parente de Castor de Andrade) assassinado em disputa pela contravenção",
    "grupo": "operadores",
    "status": "Assassinado em novembro de 2020 em emboscada; crime atribuído pela acusação a ordem de Rogério de Andrade, no contexto da guerra pelo espólio de Castor.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     }
    ]
   },
   {
    "id": "edmilson-da-silva-de-oliveira-macale",
    "nome": "Edmilson da Silva de Oliveira (Macalé)",
    "papel": "Sargento PM reformado que, segundo Lessa, intermediava trabalhos para Bello e levou o convite do crime",
    "grupo": "operadores",
    "status": "Identificado pela investigação como integrante da milícia parceira dos Brazão.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "id": "allan-diego-magalhaes-aguiar",
    "nome": "Allan Diego Magalhães Aguiar",
    "papel": "Apontado como braço financeiro da organização de Bello e ex-cunhado; co-investigado no homicídio do advogado Carlos Daniel Dias",
    "grupo": "financeiro",
    "status": "Apontado como operador financeiro da organização de Bello; preso e co-investigado pelo assassinato do advogado Carlos Daniel Ferreira Dias em 2022.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/sociedade/quem-e-o-bicheiro-que-a-policia-do-rio-tenta-prender-em-operacao-nesta-quinta-feira/"
     }
    ]
   },
   {
    "id": "wagner-dantas-alegre",
    "nome": "Wagner Dantas Alegre",
    "papel": "Ex-policial apontado como executor (atirador) do assassinato de Alcebíades Garcia ao lado de Bello",
    "grupo": "operadores",
    "status": "Ex-PM apontado como atirador na morte de Alcebíades Garcia; foragido e levado a julgamento junto com Bello; a 8ª Câmara Criminal do TJ-RJ rejeitou os recursos dos réus.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     }
    ]
   },
   {
    "id": "fernando-bello",
    "nome": "Fernando Bello",
    "papel": "Comparsa de Bernardo Bello, também réu no caso da morte de Alcebíades Garcia",
    "grupo": "operadores",
    "status": "Apontado como comparsa de Bello e réu pelo assassinato de Alcebíades Garcia; foragido da justiça.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     }
    ]
   },
   {
    "id": "jose-carlos-roque-barboza",
    "nome": "José Carlos Roque Barboza",
    "papel": "Chefe de segurança de Bello, acusado de fornecer o veículo usado no atentado contra Marielle Franco",
    "grupo": "operadores",
    "status": "Apontado como chefe de segurança de Bernardo Bello e acusado de ter fornecido o veículo Cobalt usado no atentado que matou Marielle Franco e Anderson Gomes.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-delator-aponta-participacao-de-bicheiro-em-assassinato/"
     }
    ]
   },
   {
    "id": "mauro-cesar-barbosa-cid",
    "nome": "Mauro Cesar Barbosa Cid",
    "papel": "Ex-ajudante de ordens de Bolsonaro; operador central que vendeu joias/relógios nos EUA",
    "grupo": "operadores",
    "status": "Indiciado e delator no caso das joias; condenado pelo STF na trama golpista (caso conexo); confessou ter vendido o Rolex e repassado dinheiro a Bolsonaro.",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-02/cid-confirma-que-bolsonaro-recebeu-us-86-mil-por-venda-de-joias"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/cid-vendeu-rolex-e-wassef-o-recomprou-para-entregar-ao-tcu-diz-pf/"
     }
    ]
   },
   {
    "id": "mauro-cesar-lourena-cid",
    "nome": "Mauro Cesar Lourena Cid",
    "papel": "General reformado, pai de Mauro Cid; teria mantido/intermediado itens em Miami",
    "grupo": "operadores",
    "status": "Indiciado pela PF no caso das joias; alvo da Operação Lucas 12:2; teria emprestado conta bancária no exterior para receber valores das vendas.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/radioagencia-nacional/seguranca/audio/2023-08/pai-de-mauro-cid-e-wassef-sao-alvo-de-nova-operacao-no-caso-das-joias"
     },
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/operacao-pf-mauro-cid-pai-alvo-presentes-oficiais-recebidos-governo/"
     }
    ]
   },
   {
    "id": "marcelo-costa-camara",
    "nome": "Marcelo Costa Câmara",
    "papel": "Ex-assessor de Bolsonaro; atuou na 'operação de resgate' das joias",
    "grupo": "operadores",
    "status": "Indiciado pela PF no caso das joias por associação criminosa; figura entre os 12 indiciados em julho de 2024.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "A Tarde",
      "url": "https://atarde.com.br/politica/caso-das-joias-saiba-quem-sao-os-aliados-de-bolsonaro-indiciados-1277230"
     },
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/politica/2024/07/6891946-caso-das-joias-saiba-por-quais-crimes-bolsonaro-e-acusado-e-possiveis-penas.html"
     }
    ]
   },
   {
    "id": "osmar-crivelatti",
    "nome": "Osmar Crivelatti",
    "papel": "Assessor de Bolsonaro; teria recebido itens devolvidos no aeroporto",
    "grupo": "operadores",
    "status": "Alvo de busca e apreensão da PF na Operação Lucas 12:2 no caso das joias; responsável por guardar o acervo de Bolsonaro em fazenda emprestada por Nelson Piquet.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/fred-wassef-advogado-dos-bolsonaro-e-pai-de-mauro-cid-sao-alvo-da-pf-em-acao-sobre-venda-de-joias,38495e2d15e4c1f8f3462020babb1b7eq6tnkayp.html"
     },
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/operacao-pf-mauro-cid-pai-alvo-presentes-oficiais-recebidos-governo/"
     }
    ]
   },
   {
    "id": "jose-roberto-bueno-junior",
    "nome": "José Roberto Bueno Júnior",
    "papel": "Ex-chefe de gabinete do Ministério de Minas e Energia; envolvido na cadeia de apropriação dos bens",
    "grupo": "operadores",
    "status": "Indiciado no caso das joias por associação criminosa, lavagem de dinheiro e apropriação de bens públicos.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/leia-a-integra-do-relatorio-que-indiciou-bolsonaro-no-caso-das-joias/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     }
    ]
   },
   {
    "id": "marcos-andre-dos-santos-soeiro",
    "nome": "Marcos André dos Santos Soeiro",
    "papel": "Ex-assessor do ministro Bento Albuquerque; ligado à apropriação dos bens",
    "grupo": "operadores",
    "status": "Investigado no caso das joias por transportar as peças e optar pela via 'nada a declarar' na alfândega, conforme identificado pela Receita Federal.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Caso_das_joias_envolvendo_Jair_Bolsonaro"
     }
    ]
   },
   {
    "id": "bento-costa-lima-leite-de-albuquerque-juni",
    "nome": "Bento Costa Lima Leite de Albuquerque Júnior",
    "papel": "Ex-ministro de Minas e Energia; indiciado na cadeia das joias",
    "grupo": "aliado",
    "status": "Indiciado pela PF no caso das joias por tentar liberar peças retidas na Receita; recebeu censura ética em 2025.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2024-07/pf-indicia-bolsonaro-no-caso-das-joias-sauditas"
     },
     {
      "veiculo": "Público",
      "url": "https://www.publico.pt/2024/07/05/mundo/noticia/venda-joias-bolsonaro-indiciado-suspeita-organizacao-criminosa-peculato-2096442"
     }
    ]
   },
   {
    "id": "fabio-wajngarten",
    "nome": "Fábio Wajngarten",
    "papel": "Advogado/ex-secretário de Comunicação do governo Bolsonaro; indiciado no caso das joias",
    "grupo": "juridico",
    "status": "Indiciado pela PF no caso das joias; Wassef declarou que recomprou o Rolex a pedido dele; nega irregularidades.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/brasil/politica/wassef-diz-a-pf-que-recomprou-rolex-a-pedido-de-ex-ministro-fabio-wajngarten,398484a7e469f447b1272e8d4f26be7a3oya4w8n.html"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2024-07/pf-indicia-bolsonaro-no-caso-das-joias-sauditas"
     }
    ]
   },
   {
    "id": "edevaldo-de-oliveira",
    "nome": "Edevaldo de Oliveira",
    "papel": "Advogado, 'correspondente' de Wassef em Atibaia; elo com defensor de Queiroz e do miliciano Adriano",
    "grupo": "juridico",
    "status": "Ex-PRF, advogado desde 2009; correspondente de Wassef em Atibaia; auxiliou Catta Pretta a obter documentos para habeas corpus de Queiroz; teria acompanhado depoimento 'notoriamente combinado' para obstruir investigação.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "id": "paulo-emilio-catta-pretta",
    "nome": "Paulo Emílio Catta Pretta",
    "papel": "Advogado que defendeu Fabrício Queiroz e o miliciano Adriano da Nóbrega",
    "grupo": "juridico",
    "status": "Defensor de Queiroz e do miliciano Adriano da Nóbrega; recrutou Edevaldo de Oliveira (correspondente de Wassef) para apoiar HC de Queiroz por motivo de saúde.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "id": "walter-braga-netto",
    "nome": "Walter Braga Netto",
    "papel": "General da reserva, ex-ministro da Defesa e candidato a vice em 2022; apontado como articulador central da trama.",
    "grupo": "golpe",
    "status": "Condenado pelo STF (Núcleo 1) por tentativa de golpe; foi preso preventivamente por suposta tentativa de obstrução da delação de Cid.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Congresso em Foco",
      "url": "https://www.congressoemfoco.com.br/noticia/115325/relembre-o-julgamento-historico-da-condenacao-de-bolsonaro-no-stf"
     }
    ]
   },
   {
    "id": "augusto-heleno",
    "nome": "Augusto Heleno",
    "papel": "General da reserva, ex-ministro do Gabinete de Segurança Institucional (GSI), homem de confiança de Bolsonaro.",
    "grupo": "golpe",
    "status": "Condenado pelo STF a 21 anos de prisão em regime inicial fechado.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/veja-as-penas-de-cada-um-dos-condenados-pelo-stf-por-suposto-plano-de-golpe/"
     },
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "id": "almir-garnier",
    "nome": "Almir Garnier",
    "papel": "Almirante, ex-comandante da Marinha; teria oferecido tropas para o golpe e recusado transferir comando.",
    "grupo": "golpe",
    "status": "Condenado pelo STF a 24 anos de prisão em regime fechado por cinco crimes da trama golpista; preso em unidade militar em Brasília.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/justica/ex-comandante-da-marinha-almir-garnier-e-preso-em-brasilia/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/mirelle-pinheiro/almir-garnier-ex-comandante-da-marinha-e-preso-por-trama-golpista"
     }
    ]
   },
   {
    "id": "anderson-torres",
    "nome": "Anderson Torres",
    "papel": "Ex-ministro da Justiça e ex-secretário de Segurança do DF; delegado da PF, ligado à omissão no 8 de janeiro.",
    "grupo": "golpe",
    "status": "Condenado pelo STF a 24 anos de prisão por crimes ligados à tentativa de golpe.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/veja-as-penas-de-cada-um-dos-condenados-pelo-stf-por-suposto-plano-de-golpe/"
     },
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "id": "paulo-sergio-nogueira",
    "nome": "Paulo Sérgio Nogueira",
    "papel": "General, ex-ministro da Defesa; apontado como participante das negociações e da apresentação de minuta golpista.",
    "grupo": "golpe",
    "status": "Condenado pelo STF a 19 anos de prisão por crimes ligados à tentativa de golpe.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/veja-as-penas-de-cada-um-dos-condenados-pelo-stf-por-suposto-plano-de-golpe/"
     },
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "id": "alexandre-ramagem",
    "nome": "Alexandre Ramagem",
    "papel": "Ex-diretor da Abin e deputado federal; acusado de usar a inteligência do Estado em favor da trama.",
    "grupo": "operadores",
    "status": "Condenado pelo STF a 16 anos, 1 mês e 15 dias de prisão.",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/veja-as-penas-de-cada-um-dos-condenados-pelo-stf-por-suposto-plano-de-golpe/"
     },
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "id": "filipe-martins",
    "nome": "Filipe Martins",
    "papel": "Ex-assessor de Assuntos Internacionais; apontado como autor/circulador da 'minuta do golpe'.",
    "grupo": "golpe",
    "status": "Condenado pelo STF (núcleo 2) por todos os crimes da denúncia, incluindo golpe de Estado e tentativa de abolição do Estado Democrático.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-12/reus-do-nucleo-2-da-trama-golpista-recebem-penas-entre-8-e-26-anos"
     },
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-dez-16/supremo-condena-cinco-reus-do-nucleo-2-da-trama-golpista/"
     }
    ]
   },
   {
    "id": "mario-fernandes",
    "nome": "Mário Fernandes",
    "papel": "General da reserva, ex-secretário-executivo da Secretaria-Geral; idealizador do plano 'Punhal Verde e Amarelo'.",
    "grupo": "golpe",
    "status": "Condenado pelo STF (Núcleo 2) a 26 anos e 6 meses de prisão; plano executado via 'Operação Copa 2022', depois abortado.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-justica/condenacao-esta-consolidada-ha-tempo-diz-defesa-de-mario-fernandes/"
     },
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "id": "silvinei-vasques",
    "nome": "Silvinei Vasques",
    "papel": "Ex-diretor-geral da Polícia Rodoviária Federal (PRF); acusado de uso da PRF em ações no 2º turno de 2022.",
    "grupo": "operadores",
    "status": "Condenado pelo STF (núcleo 2) por todos os crimes da denúncia.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-12/reus-do-nucleo-2-da-trama-golpista-recebem-penas-entre-8-e-26-anos"
     },
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-dez-16/supremo-condena-cinco-reus-do-nucleo-2-da-trama-golpista/"
     }
    ]
   },
   {
    "id": "marilia-de-alencar",
    "nome": "Marília de Alencar",
    "papel": "Ex-diretora de Inteligência do Ministério da Justiça; única mulher condenada no núcleo 2.",
    "grupo": "milicia",
    "status": "Condenada pelo STF (núcleo 2) pelos crimes de organização criminosa e tentativa de abolição violenta do Estado Democrático.",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-12/reus-do-nucleo-2-da-trama-golpista-recebem-penas-entre-8-e-26-anos"
     },
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-dez-16/supremo-condena-cinco-reus-do-nucleo-2-da-trama-golpista/"
     }
    ]
   },
   {
    "id": "helio-ferreira-lima",
    "nome": "Hélio Ferreira Lima",
    "papel": "Tenente-coronel das Forças Especiais ('kids pretos'); operador do plano de sequestro/assassinato de autoridades.",
    "grupo": "milicia",
    "status": "Condenado pelo STF (Núcleo 3) a 24 anos de prisão em novembro de 2025 por tentativa de golpe e organização criminosa armada.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     },
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/platobr/2025/07/7212726-kids-pretos-delatados-por-mauro-cid-negam-crimes-mas-admitem-planos-de-golpe.html"
     }
    ]
   },
   {
    "id": "rafael-martins-de-oliveira",
    "nome": "Rafael Martins de Oliveira",
    "papel": "Tenente-coronel das Forças Especiais ('kids pretos'); parte do núcleo operacional de ações táticas.",
    "grupo": "milicia",
    "status": "Condenado pelo STF (Núcleo 3) a 21 anos de prisão em novembro de 2025.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/defesas-de-kids-pretos-concluem-sustentacoes-e-negam-trama-golpista/"
     }
    ]
   },
   {
    "id": "rodrigo-bezerra-de-azevedo",
    "nome": "Rodrigo Bezerra de Azevedo",
    "papel": "Tenente-coronel das Forças Especiais ('kids pretos'); integrante do grupo de ações táticas/operacionais.",
    "grupo": "milicia",
    "status": "Condenado pelo STF (Núcleo 3) a 21 anos de prisão em novembro de 2025.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     },
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "id": "wladimir-matos-soares",
    "nome": "Wladimir Matos Soares",
    "papel": "Policial federal; integrante do núcleo 3 ('kids pretos') que planejou ações contra autoridades.",
    "grupo": "milicia",
    "status": "Condenado pelo STF (Núcleo 3) a 21 anos de prisão em novembro de 2025.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     },
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "id": "bernardo-romao-correa-netto",
    "nome": "Bernardo Romão Corrêa Netto",
    "papel": "Coronel do Exército; apontado como articulador do grupo de militares 'kids pretos' (núcleo 3).",
    "grupo": "milicia",
    "status": "Condenado pelo STF (Núcleo 3) a 17 anos de prisão em novembro de 2025.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     }
    ]
   },
   {
    "id": "tercio-arnaud-tomaz",
    "nome": "Tércio Arnaud Tomaz",
    "papel": "Ex-assessor especial da Presidência apontado como líder operacional do 'gabinete do ódio'",
    "grupo": "operadores",
    "status": "Descoberto e nomeado a partir de Carlos Bolsonaro; indiciado pela PF na trama golpista, mas a PGR não o incluiu na denúncia. Investigado nos inquéritos das fake news e milícias digitais e na CPI da Covid.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/filipe-martins-e-tercio-arnaud-quem-sao-os-ex-assessores-diretos-de-bolsonaro-indiciados/"
     },
     {
      "veiculo": "Jornal da Paraíba",
      "url": "https://jornaldaparaiba.com.br/politica/quem-e-tercio-arnaud-ex-assessor-de-bolsonaro-e-alvo-de-operacao-da-policia-federal"
     }
    ]
   },
   {
    "id": "allan-dos-santos",
    "nome": "Allan dos Santos",
    "papel": "Blogueiro fundador do Terça Livre, apontado como um dos líderes da milícia digital bolsonarista",
    "grupo": "milicia",
    "status": "Foragido nos EUA com prisão preventiva decretada por Moraes (out/2021) no inquérito das milícias digitais. Investigado por organização criminosa, lavagem de dinheiro e crimes contra a honra. EUA negaram extradição.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2021-out-21/alexandre-moraes-determina-prisao-preventiva-allan-santos/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/estados-unidos-negam-extradicao-de-allan-dos-santos"
     }
    ]
   },
   {
    "id": "jose-matheus-salles-gomes",
    "nome": "José Matheus Salles Gomes",
    "papel": "Assessor do 'gabinete do ódio' que intermediava comunicação entre Secom e a Presidência",
    "grupo": "operadores",
    "status": "Citado por Alexandre Frota na CPMI das Fake News como um dos três assessores do grupo de milícia digital ligado a Carlos Bolsonaro; admitiu à PF atuação na comunicação do governo.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Yahoo Notícias",
      "url": "https://br.noticias.yahoo.com/membros-do-gabinete-do-odio-admitem-que-trabalhavam-na-comunicacao-do-governo-bolsonaro-115704639.html"
     },
     {
      "veiculo": "DOL",
      "url": "https://dol.com.br/noticias/politica/656955/gabinete-do-odio-assessores-de-bolsonaro-admitem-atuacao"
     }
    ]
   },
   {
    "id": "mateus-matos-diniz",
    "nome": "Mateus Matos Diniz",
    "papel": "Assessor do 'gabinete do ódio' lotado na Secom mas atuando no Planalto na comunicação presidencial",
    "grupo": "operadores",
    "status": "Citado por Alexandre Frota na CPMI das Fake News como um dos três assessores da milícia digital ligada a Carlos Bolsonaro; admitiu à PF interconexão entre Secom e o staff pessoal do presidente.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Yahoo Notícias",
      "url": "https://br.noticias.yahoo.com/membros-do-gabinete-do-odio-admitem-que-trabalhavam-na-comunicacao-do-governo-bolsonaro-115704639.html"
     },
     {
      "veiculo": "DOL",
      "url": "https://dol.com.br/noticias/politica/656955/gabinete-do-odio-assessores-de-bolsonaro-admitem-atuacao"
     }
    ]
   },
   {
    "id": "hans-river-do-nascimento",
    "nome": "Hans River do Nascimento",
    "papel": "Ex-funcionário de agência de disparo em massa de WhatsApp na campanha de 2018",
    "grupo": "operadores",
    "status": "Foi fonte de reportagem da Folha sobre disparos em massa pró-Bolsonaro em 2018; depôs na CPMI das Fake News, onde foi acusado de mentir pela empresa Yacows.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "IstoÉ Dinheiro",
      "url": "https://www.istoedinheiro.com.br/empresa-que-atuou-em-campanha-de-bolsonaro-diz-que-ex-funcionario-mentiu-em-cpi/"
     },
     {
      "veiculo": "Aos Fatos",
      "url": "https://www.aosfatos.org/noticias/nao-ha-discrepancia-entre-datas-de-reportagem-e-explicacao-da-folha-sobre-fonte/"
     }
    ]
   },
   {
    "id": "carlos-cezar-moretzsohn-rocha",
    "nome": "Carlos Cezar Moretzsohn Rocha",
    "papel": "Presidente do Instituto Voto Legal, produtor de relatórios falsos contra as urnas eletrônicas",
    "grupo": "golpe",
    "status": "Condenado pelo STF a 7 anos e 6 meses no núcleo da desinformação da trama golpista; produziu relatórios falsos contra as urnas que eram distribuídos por influenciadores bolsonaristas.",
    "situacao": [
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "MPF",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/tentativa-de-golpe-de-estado-stf-condena-os-sete-integrantes-do-nucleo-da-desinformacao-da-trama-golpista"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-10/stf-define-pena-dos-condenados-do-nucleo-de-desinformacao-do-golpe"
     }
    ]
   },
   {
    "id": "angelo-antonio-ribeiro-da-silva",
    "nome": "Ângelo Antônio Ribeiro da Silva",
    "papel": "Sócio do Banco Master.",
    "grupo": "operadores",
    "status": "Preso preventivamente na 1ª fase da Operação Compliance Zero.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "alberto-felix-de-oliveira-neto",
    "nome": "Alberto Felix de Oliveira Neto",
    "papel": "Superintendente executivo de Tesouraria do Banco Master.",
    "grupo": "operadores",
    "status": "Preso preventivamente na 1ª fase da Operação Compliance Zero.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "daniel-monteiro",
    "nome": "Daniel Monteiro",
    "papel": "Advogado apontado como 'arquiteto jurídico' do esquema e operador de propina a autoridades; estruturou ocultação de imóveis para o ex-presidente do BRB.",
    "grupo": "juridico",
    "status": "Preso na 4ª fase (abr/2026), recolhido na Penitenciária de Araraquara; recebeu ~R$ 86-109 mi de empresas do Master.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Times Brasil / CNBC",
      "url": "https://timesbrasil.com.br/brasil/operacoes-da-pf/daniel-monteiro-advogado-preso-papel-esquema-brb-banco-master/"
     },
     {
      "veiculo": "InfoMoney",
      "url": "https://www.infomoney.com.br/politica/master-declarou-pagamentos-de-r-109-mi-a-empresas-de-advogado-preso-pela-pf/"
     }
    ]
   },
   {
    "id": "andre-felipe-de-oliveira-seixas-maia",
    "nome": "André Felipe de Oliveira Seixas Maia",
    "papel": "Empresário, diretor da Tirreno; apontado por vender cerca de R$ 12 bilhões em créditos fictícios ao Master.",
    "grupo": "financeiro",
    "status": "Alvo de mandados na Operação Compliance Zero (preso/liberado).",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "manoel-mendes-rodrigues",
    "nome": "Manoel Mendes Rodrigues",
    "papel": "Operador do jogo do bicho; apontado como líder de ações intimidatórias do grupo Vorcaro.",
    "grupo": "milicia",
    "status": "Preso preventivamente na 6ª fase da Operação Compliance Zero.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "luiz-philippe-machado-de-moraes-mourao",
    "nome": "Luiz Philippe Machado de Moraes Mourão",
    "papel": "Funcionário de Vorcaro conhecido como 'Sicário'; integrante do núcleo de intimidação e intermediário de pagamentos.",
    "grupo": "milicia",
    "status": "Preso na 3ª fase (mar/2026); morreu em custódia hospitalar após tentativa de suicídio na carceragem.",
    "situacao": [
     "preso",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Escândalo do Banco Master)",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "id": "claudio-castro",
    "nome": "Cláudio Castro",
    "papel": "Ex-governador do Rio de Janeiro (PL); investigado por facilitar transferências do Rioprevidência para o esquema.",
    "grupo": "aliado",
    "status": "Investigado na 8ª fase da Operação Compliance Zero, ligada a aplicações do fundo de previdência estadual.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "michel-temer",
    "nome": "Michel Temer",
    "papel": "Ex-presidente da República; escritório de advocacia recebeu pagamentos do Master.",
    "grupo": "aliado",
    "status": "Citado nas investigações por receber ~R$ 10 mi; afirmou contratação para 'atividade de mediação'.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Escândalo do Banco Master)",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "id": "henrique-meirelles",
    "nome": "Henrique Meirelles",
    "papel": "Ex-presidente do Banco Central e ex-ministro da Fazenda; atuou como consultor remunerado do Master.",
    "grupo": "aliado",
    "status": "Citado por receber ~R$ 18,5 mi como consultor; encerrou o contrato em julho/2025.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Escândalo do Banco Master)",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "id": "antonio-de-rueda",
    "nome": "Antônio de Rueda",
    "papel": "Presidente nacional do União Brasil; escritórios ligados a ele receberam pagamentos do Master/Reag.",
    "grupo": "aliado",
    "status": "Citado por receber ~R$ 6,4 mi desde 2023 em dois escritórios; afirmou ter prestado serviço técnico.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Escândalo do Banco Master)",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "id": "paulo-sergio-de-souza-neves",
    "nome": "Paulo Sérgio de Souza Neves",
    "papel": "Ex-diretor de Fiscalização do Banco Central; autorizou a compra do Banco Máxima (depois Master) por Vorcaro.",
    "grupo": "operadores",
    "status": "Investigado e com tornozeleira eletrônica; apontado por receber pagamentos de Vorcaro (inclusive via galeria de arte).",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "belline-santana",
    "nome": "Belline Santana",
    "papel": "Ex-chefe do Departamento de Supervisão Bancária do Banco Central; teria atuado como 'consultor' informal de Vorcaro.",
    "grupo": "operadores",
    "status": "Investigado e com tornozeleira eletrônica; apontado por receber pagamentos do esquema.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia (Operação Compliance Zero)",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "id": "estevam-theophilo",
    "nome": "Estevam Theophilo",
    "papel": "General, ex-comandante de Operações Terrestres (COTER); acusado pela PGR de aceitar coordenar o uso da força terrestre para o golpe.",
    "grupo": "golpe",
    "status": "Denunciado e julgado pelo STF, foi absolvido por falta de provas além da delação de Cid (voto de Moraes em nov/2025).",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pf-aponta-braga-netto-em-dois-nucleos/"
     },
     {
      "veiculo": "Jornal de Brasília",
      "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/absolvido-por-trama-golpista-era-bolsonarista-e-vem-da-unica-familia-militar-que-pode-usar-barba/"
     }
    ]
   },
   {
    "id": "jairo-moreira-da-silva",
    "nome": "Jairo Moreira da Silva",
    "papel": "Suboficial da Marinha que, por determinação de Cid, usou voo da FAB para tentar recuperar joias em Guarulhos.",
    "grupo": "operadores",
    "status": "Citado na investigação do caso das joias por usar estrutura estatal (voo da FAB) na tentativa de recuperar os bens.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/bolsonaro-veja-a-cronologia-do-caso-das-joias-sauditas/"
     }
    ]
   },
   {
    "id": "giniton-lages",
    "nome": "Giniton Lages",
    "papel": "Delegado que chefiou a investigação na Delegacia de Homicídios e a sabotou, tentando obter falsa confissão para encobrir os mandantes",
    "grupo": "juridico",
    "status": "Denunciado pela PGR por associação criminosa e obstrução de Justiça; denúncia recebida por Moraes no STF em 2026.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-moraes-recebe-denuncia-contra-policiais-por-obstrucao"
     },
     {
      "veiculo": "Tribuna do Sertão",
      "url": "https://www.tribunadosertao.com.br/rj-em-foco/2026/02/13/858061-mpf-denuncia-delegados-rivaldo-barbosa-e-giniton-lages-por-obstrucao-de-justica-no-caso-marielle"
     }
    ]
   },
   {
    "id": "marco-antonio-de-barros-pinto",
    "nome": "Marco Antonio de Barros Pinto",
    "papel": "Investigador/comissário de polícia apontado como integrante do grupo que obstruiu as apurações do caso Marielle",
    "grupo": "juridico",
    "status": "Denunciado pela PGR por associação criminosa e obstrução de Justiça junto com Rivaldo Barbosa e Giniton Lages.",
    "situacao": [
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-moraes-recebe-denuncia-contra-policiais-por-obstrucao"
     },
     {
      "veiculo": "Tribuna do Sertão",
      "url": "https://www.tribunadosertao.com.br/rj-em-foco/2026/02/13/858061-mpf-denuncia-delegados-rivaldo-barbosa-e-giniton-lages-por-obstrucao-de-justica-no-caso-marielle"
     }
    ]
   },
   {
    "id": "edilson-barbosa-dos-santos-orelha",
    "nome": "Edilson Barbosa dos Santos (Orelha)",
    "papel": "Dono de ferro-velho que desmanchou o Cobalt usado no assassinato para destruir provas",
    "grupo": "operadores",
    "status": "Condenado a 5 anos e 17 dias em set/2024 pela destruição do veículo.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Assassinato_de_Marielle_Franco"
     }
    ]
   },
   {
    "id": "marcus-vinicius-reis-dos-santos-fininho",
    "nome": "Marcus Vinicius Reis dos Santos (Fininho)",
    "papel": "Miliciano do grupo que comanda a região de Jacarepaguá, apontado como sócio do clã Brazão em grilagem de terras",
    "grupo": "milicia",
    "status": "Identificado pela investigação como integrante da milícia parceira dos Brazão na zona oeste.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "id": "laerte-silva-de-lima",
    "nome": "Laerte Silva de Lima",
    "papel": "Miliciano de Jacarepaguá apontado como sócio do clã Brazão nos negócios de grilagem da zona oeste",
    "grupo": "milicia",
    "status": "Identificado pela investigação como integrante da milícia parceira dos Brazão.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "id": "instituto-de-formacao-profissional-jose-ca",
    "nome": "Instituto de Formação Profissional José Carlos Procópio (Ifop)",
    "papel": "ONG na Taquara que a PF aponta como ligada aos Brazão, destino de emendas apuradas na Operação Emendatio",
    "grupo": "financeiro",
    "status": "Investigado pela PF por receber emenda de R$ 199.999,79 (destinada por Flávio Bolsonaro) no esquema que a PF atribui a Robson Calixto, o Peixe.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/05/20/pf-apura-emenda-de-flavio-bolsonaro-para-ong-suspeita-de-esquema-comandado-pelos-irmaos-brazao-condenados-pela-morte-de-marielle-franco/"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-emenda-brazao/"
     }
    ]
   },
   {
    "id": "castor-de-andrade",
    "nome": "Castor de Andrade",
    "papel": "Patriarca histórico do jogo do bicho no RJ, tio de Rogério de Andrade; sua morte em 1997 deflagrou a guerra de sucessão pela banca.",
    "grupo": "operadores",
    "status": "Morto em 1997; deixou o espólio da contravenção disputado por Rogério de Andrade e Fernando Iggnácio.",
    "situacao": [],
    "situacao_fontes": [
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/seguranca/quem-e-rogerio-andrade-sobrinho-de-castor-e-dono-da-mocidade-acusado-de-comandar-mafia/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/veja-quem-sao-os-principais-nomes-da-historia-do-jogo-do-bicho-no-rj/"
     }
    ]
   },
   {
    "id": "gilmar-eneas-lisboa",
    "nome": "Gilmar Enéas Lisboa",
    "papel": "Apontado como cúmplice de Rogério de Andrade, acusado de monitorar Fernando Iggnácio de Angra dos Reis até a execução.",
    "grupo": "operadores",
    "status": "Denunciado pelo Gaeco/MPRJ em 2024 e alvo de mandado de prisão; responde junto com Rogério de Andrade em processo separado dos executores.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     },
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/brasil/2024/10/6976497-o-que-se-sabe-sobre-a-prisao-do-bicheiro-rogerio-andrade.html"
     }
    ]
   },
   {
    "id": "rodrigo-da-silva-das-neves",
    "nome": "Rodrigo da Silva das Neves",
    "papel": "Ex-policial militar apontado como executor central do assassinato de Fernando Iggnácio, supostamente a mando de Rogério de Andrade.",
    "grupo": "golpe",
    "status": "Condenado em abril de 2026 a 32 anos, 9 meses e 18 dias por homicídio triplamente qualificado; vasto arsenal (4 fuzis) apreendido em seu apartamento.",
    "situacao": [
     "preso",
     "condenado",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     },
     {
      "veiculo": "Jornal de Brasília",
      "url": "https://jornaldebrasilia.com.br/noticias/brasil/julgamento-de-executor-de-bicheiro-fernando-iggnacio-retoma-no-rio/"
     }
    ]
   },
   {
    "id": "pedro-emanuel-d-onofre-andrade-silva-corde",
    "nome": "Pedro Emanuel D'Onofre Andrade Silva Cordeiro",
    "papel": "Réu acusado de participação direta na execução de Fernando Iggnácio, supostamente a mando de Rogério de Andrade.",
    "grupo": "golpe",
    "status": "Réu no caso Iggnácio; teve o júri de abril/2026 suspenso após dispensar a defesa, aguardando novo julgamento.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "id": "otto-samuel-d-onofre-andrade-silva-cordeir",
    "nome": "Otto Samuel D'Onofre Andrade Silva Cordeiro",
    "papel": "Réu (irmão de Pedro Emanuel) acusado de participação direta na execução de Fernando Iggnácio, supostamente a mando de Rogério de Andrade.",
    "grupo": "golpe",
    "status": "Réu no caso Iggnácio; teve o júri de abril/2026 suspenso após dispensar a defesa, aguardando novo julgamento.",
    "situacao": [
     "preso",
     "denunciado",
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "id": "precision-watches-willow-grove-pa",
    "nome": "Precision Watches (Willow Grove, PA)",
    "papel": "Loja de relógios na Pensilvânia que comprou o Rolex de Mauro Cid e depois revendeu a peça recomprada por Wassef",
    "grupo": "financeiro",
    "status": "Estabelecimento nos EUA por onde passou a revenda do Rolex saudita; recompra feita por Wassef, por R$ 250 mil na cotação da época segundo o Metrópoles, entrou na investigação da PF e do FBI.",
    "situacao": [
     "investigado"
    ],
    "situacao_fontes": [
     {
      "veiculo": "O Antagonista",
      "url": "https://oantagonista.com.br/brasil/wassef-recomprou-rolex-apos-caso-de-joias-chegar-no-tcu/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/cid-vendeu-rolex-e-wassef-o-recomprou-para-entregar-ao-tcu-diz-pf/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/sao-paulo/envolvido-na-recompra-de-rolex-por-r-250-mil-wassef-acumula-dividas"
     }
    ]
   }
  ],
  "edges": [
   {
    "de": "queiroz",
    "para": "flavio",
    "rotulo": "segundo o MP-RJ, operador financeiro do esquema; denúncia arquivada em 2022, sem condenação",
    "status": "arquivado",
    "fontes": [
     {
      "veiculo": "ConJur",
      "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
     },
     {
      "veiculo": "Jornal de Brasília",
      "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/leia-toda-a-denuncia-do-mprj-contra-flavio-bolsonaro-por-rachadinhas-no-rio/"
     },
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/334032/mp-rj-conclui-inquerito-e-denunciara-flavio-bolsonaro-e-queiroz-por-rachadinha-na-alerj"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz"
     },
     {
      "veiculo": "Metro 1",
      "url": "https://www.metro1.com.br/noticias/politica/74052,investigacao-sobre-flavio-bolsonaro-alcanca-37-imoveis"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/flavio-bolsonaro-defende-queiroz-e-diz-que-caso-so-ganhou-repercussao-por-ele-ser-filho-do-presidente/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/stj-anula-decisoes-contra-flavio-bolsonaro-no-caso-das-rachadinhas/"
     }
    ]
   },
   {
    "de": "grillo",
    "para": "flavio",
    "rotulo": "chefe de gabinete no Senado, citado na denúncia com atuação determinante",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Jornal de Brasília",
      "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/leia-toda-a-denuncia-do-mprj-contra-flavio-bolsonaro-por-rachadinhas-no-rio/"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "jair",
    "rotulo": "amigo desde 1984; 'amigo de churrasco' da família",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Caso_Queiroz"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "michelle",
    "rotulo": "depositou ~R$ 89 mil em 27 cheques na conta dela",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/bolsonaro-diz-se-arrepender-de-ter-autorizado-queiroz-a-depositar-cheques-na-conta-de-michelle/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "queiroz",
    "rotulo": "abrigou em imóvel em Atibaia até a prisão",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/queiroz-foi-preso-em-imovel-de-frederick-wassef-advogado-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2023/01/27/fim-do-sigilo-frederick-wassef-fez-16-visitas-a-bolsonaro-enquanto-escondia-queiroz-em-casa/"
     },
     {
      "veiculo": "BBC",
      "url": "https://feeds.bbci.co.uk/news/world-latin-america-53099553"
     },
     {
      "veiculo": "ISTOÉ",
      "url": "https://istoe.com.br/wassef-diz-que-abrigou-fabricio-queiroz-em-atibaia-por-razoes-humanitarias/"
     },
     {
      "veiculo": "Exame",
      "url": "https://exame.com/brasil/frederick-wassef-a-veja-escondi-queiroz-para-proteger-bolsonaro/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "adriano",
    "rotulo": "concedeu Medalha Tiradentes (2005) e moção de louvor (2003) na Alerj",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/governo/bolsonaro-diz-que-adriano-da-nobrega-era-1-heroi-quando-foi-homenageado/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "orelha",
    "rotulo": "concedeu homenagem/medalha na Alerj",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/blog-do-noblat/ricardo-noblat/os-lacos-de-flavio-bolsonaro-com-o-suposto-chefe-da-milicia"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/blog-do-noblat/ricardo-noblat/os-lacos-de-flavio-bolsonaro-com-o-submundo-do-crime-no-rio"
     }
    ]
   },
   {
    "de": "raimunda",
    "para": "adriano",
    "rotulo": "mãe",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/"
     },
     {
      "veiculo": "istoÉ Dinheiro",
      "url": "https://istoedinheiro.com.br/miliciano-adriano-nobrega-integrava-nucleo-de-grupo-de-flavio-bolsonaro-diz-mp"
     }
    ]
   },
   {
    "de": "danielle",
    "para": "adriano",
    "rotulo": "Esposa (primeira mulher)",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Sul21",
      "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/"
     }
    ]
   },
   {
    "de": "julia_lotufo",
    "para": "adriano",
    "rotulo": "viúva; apontada como líder da contabilidade da organização",
    "status": "denuncia",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano"
     },
     {
      "veiculo": "Wikipédia (Bernardo Bello)",
      "url": "https://pt.wikipedia.org/wiki/Bernardo_Bello"
     }
    ]
   },
   {
    "de": "raimunda",
    "para": "flavio",
    "rotulo": "assessora (CCDAL-5) no gabinete da Alerj (2016-2018), citada pelo MP-RJ como assessora-fantasma; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano"
     },
     {
      "veiculo": "Blog do BG",
      "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "Hora do Povo",
      "url": "https://horadopovo.com.br/mp-do-rio-denuncia-assessora-de-flavio-rachadinha-por-lavagem-de-dinheiro-da-milicia/"
     },
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/2026/05/7431770-cla-bolsonaro-e-a-relacao-com-suspeitos-de-envolvimento-no-crime-organizado.html"
     }
    ]
   },
   {
    "de": "danielle",
    "para": "flavio",
    "rotulo": "assessora (CCDAL-5) na Alerj (de ~2010 a 2018); teria devolvido salário a Queiroz, segundo o MP-RJ; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": [
     {
      "veiculo": "Sul21",
      "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "Blog do BG",
      "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/"
     },
     {
      "veiculo": "IHU/Unisinos",
      "url": "https://www.ihu.unisinos.br/666705-bolsonaros-tiveram-ligacao-com-investigados-por-organizacoes-criminosas-mostram-episodios"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "bernardo_bello",
    "rotulo": "parceria no jogo do bicho em Copacabana, segundo MP-RJ",
    "status": "denuncia",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/ex-assessora-de-flavio-e-denunciada-por-suspeita-de-lavar-dinheiro"
     },
     {
      "veiculo": "Wikipédia (Escritório do Crime)",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/saiba-quem-e-o-bicheiro-bernardo-bello/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "vorcaro",
    "rotulo": "teria pedido a Vorcaro R$ 131 mi, segundo a PF, para o filme 'Dark Horse' sobre Jair; ~R$ 61 mi liberados (áudios revelados pela Intercept)",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/moraes-pede-parecer-da-pgr-sobre-incluir-jair-e-flavio-em-inquerito"
     },
     {
      "veiculo": "Intercept Brasil",
      "url": "https://www.intercept.com.br/2026/05/13/audio-flavio-negociou-vorcaro-milhoes/"
     }
    ]
   },
   {
    "de": "zettel",
    "para": "jair",
    "rotulo": "doou R$ 3 mi à campanha presidencial de 2018; é cunhado de Vorcaro",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/04/13/da-rachadinha-a-doacao-de-campanha-do-master-relembre-escandalos-ligados-a-flavio-bolsonaro/"
     },
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/nota/quem-e-fabiano-zettel-maior-doador-de-tarcisio-de-freitas/"
     }
    ]
   },
   {
    "de": "paulo_henrique",
    "para": "flavio",
    "rotulo": "como presidente do BRB, aprovou o financiamento de R$ 3,1 mi da mansão de R$ 5,97 mi",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-quando-brb-deu-polemico-financiamento-de-r-59-milhoes-a-flavio-bolsonaro"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/ceo-brb-preso-financiou-r-59-milhoes-mansao-flavio-bolsonaro/"
     },
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/caso-master-financiamento-da-mansao-de-flavio-bolsonaro-teve-aval-de-ex-chefe-do-brb/"
     }
    ]
   },
   {
    "de": "santini",
    "para": "flavio",
    "rotulo": "ex-sócio na Kopenhagen; suspeito de 'laranja'; cobrou suposto calote de Flávio",
    "status": "suspeita",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/04/13/da-rachadinha-a-doacao-de-campanha-do-master-relembre-escandalos-ligados-a-flavio-bolsonaro/"
     },
     {
      "veiculo": "Exame",
      "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/se-eu-quiser-eu-ponho-o-flavio-bolsonaro-na-cadeia-ameaca-ex-socio-do-senador/"
     }
    ]
   },
   {
    "de": "eduardo",
    "para": "flavio",
    "rotulo": "irmão; inquérito sobre atos nos EUA pode alcançar Flávio (relação com Vorcaro)",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/moraes-pede-parecer-da-pgr-sobre-incluir-jair-e-flavio-em-inquerito"
     }
    ]
   },
   {
    "de": "antonio-peres",
    "para": "queiroz",
    "rotulo": "Articulou nomeação como subsecretário em Saquarema",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/pos-rachadinha-subsecretario-queiroz-monitora-guarda-municipal-no-rj"
     }
    ]
   },
   {
    "de": "danielle",
    "para": "queiroz",
    "rotulo": "Devolveu ao menos R$ 150 mil (rachadinha), segundo MP-RJ",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Sul21",
      "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/"
     }
    ]
   },
   {
    "de": "raimunda",
    "para": "queiroz",
    "rotulo": "repasses de R$ 203 mil no esquema, segundo o MP-RJ; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": [
     {
      "veiculo": "Blog do BG",
      "url": "https://www.blogdobg.com.br/mae-de-miliciano-foragido-foi-lotada-em-gabinete-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/"
     },
     {
      "veiculo": "istoÉ Dinheiro",
      "url": "https://istoedinheiro.com.br/miliciano-adriano-nobrega-integrava-nucleo-de-grupo-de-flavio-bolsonaro-diz-mp"
     }
    ]
   },
   {
    "de": "julia_lotufo",
    "para": "rogerio-teixeira-junior-juninho-do-pneu",
    "rotulo": "Vendeu imóveis (R$ 3,5 mi) atribuídos a Adriano, segundo MP-RJ",
    "status": "denuncia",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "queiroz",
    "rotulo": "Amigos desde 2003 (18º BPM); contas usadas na rachadinha",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Sul21",
      "url": "https://sul21.com.br/ultimas-noticiaspolitica/2019/12/contas-do-chefe-do-escritorio-do-crime-foram-usadas-em-rachadinha-de-flavio-bolsonaro/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/mae-do-capitao-adriano-repassou-mais-de-64-mil-reais-a-contas-de-queiroz/"
     },
     {
      "veiculo": "Diário da Manhã",
      "url": "https://www.dm.jor.br/brasil/2020/11/miliciano-adriano-da-nobrega-participava-da-suposta-rachadinha-de-flavio-bolsonaro-diz-mp/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/miliciano-repassou-mais-de-r-200-mil-a-queiroz-em-rachadinha-diz-denuncia/"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "ronnie-lessa",
    "rotulo": "parceiros no Escritório do Crime",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/brasil/2024/01/6792485-ronnie-lessa-e-adriano-da-nobrega-ja-mataram-juntos-diz-jornalista.html"
     },
     {
      "veiculo": "InSight Crime",
      "url": "https://insightcrime.org/brazil-organized-crime-news/escritorio-do-crime/"
     },
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/entrevistas/alem-de-rivais-livro-revela-a-conexao-mortal-entre-ronnie-lessa-e-adriano-da-nobrega/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "adriano",
    "rotulo": "Defendeu-o publicamente como 'herói'",
    "status": "declaracao",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/governo/bolsonaro-diz-que-adriano-da-nobrega-era-1-heroi-quando-foi-homenageado/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "bolsotini-chocolates-e-cafe",
    "rotulo": "sócio da loja; o MP-RJ apontou depósitos em espécie como lavagem; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2022/09/19/flavio-bolsonaro-usou-r-3-milhoes-em-dinheiro-vivo-para-pagar-despesas/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "banco-de-brasilia-brb",
    "rotulo": "financiou R$ 3,1 mi da mansão; quitado em 3 anos",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/grande-angular/flavio-bolsonaro-quita-antecipadamente-financiamento-de-mansao-com-brb"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-quando-brb-deu-polemico-financiamento-de-r-59-milhoes-a-flavio-bolsonaro"
     }
    ]
   },
   {
    "de": "ibaneis-rocha",
    "para": "banco-de-brasilia-brb",
    "rotulo": "GDF é controlador majoritário do banco",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Revista Oeste",
      "url": "https://revistaoeste.com/politica/juiz-rejeita-acao-contra-flavio-bolsonaro-por-propriedade-em-brasilia/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "paulo_henrique",
    "rotulo": "suposta propina (Caso Master) sob investigação",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "O Potiguar",
      "url": "https://www.opotiguar.com.br/2026/04/04/mansao-de-6-milhoes-de-flavio-bolsonaro-financiada-pelo-brb-entra-na-lista-de-suspeitos-no-caso-master"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/pf-sinaliza-interesse-em-delacao-de-ex-brb-apos-veto-a-proposta-de-vorcaro/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/jussara-soares/politica/delacao-de-ex-presidente-do-brb-pode-avancar-antes-de-vorcaro/"
     }
    ]
   },
   {
    "de": "fernanda-antunes-figueira-bolsonaro",
    "para": "flavio",
    "rotulo": "cocompradora e corré na ação",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "PT",
      "url": "https://pt.org.br/acao-questiona-brb-e-flavio-bolsonaro-por-emprestimo-irregular/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "goup-entertainment",
    "rotulo": "teria financiado ~R$ 61 mi em seis transferências (2025)",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/vorcaro-pagou-r-61-milhoes-para-filme-de-bolsonaro-flavio-cobrou-dinheiro-ouca"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/produtora-nega-patrocinio-de-vorcaro-a-filme-de-bolsonaro-nenhum-centavo/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "ciro-nogueira",
    "rotulo": "apontado pela PF como destinatário de pagamentos do Master ('Emenda Master')",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/vorcaro-delacao-propina-ciro-nogueira/"
     },
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/politica/congresso/2026/5/12/ciro-nogueira-promete-reapresentar-emenda-master-apos-ser-alvo-da-pf"
     },
     {
      "veiculo": "Times Brasil / CNBC",
      "url": "https://timesbrasil.com.br/brasil/operacoes-da-pf/rascunho-automaticooperacao-compliance-zero-preso-primo-vorcaro-ciro-nogueira/"
     }
    ]
   },
   {
    "de": "zettel",
    "para": "vorcaro",
    "rotulo": "cunhado e apontado pela PF como operador financeiro do Master",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/alvo-da-pf-doou-r-5-mi-para-campanhas-de-bolsonaro-e-tarcisio-em-2022/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     },
     {
      "veiculo": "Congresso em Foco",
      "url": "https://www.congressoemfoco.com.br/amp/noticia/116929/pf-prende-cunhado-de-vorcaro-suspeito-de-operar-esquema-do-master"
     }
    ]
   },
   {
    "de": "zettel",
    "para": "tarcisio-de-freitas",
    "rotulo": "doou R$ 2 mi à campanha de governador em 2022",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/nota/quem-e-fabiano-zettel-maior-doador-de-tarcisio-de-freitas/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "eduardo",
    "rotulo": "PF apura se recursos do Master via fundo Havengate o beneficiaram nos EUA",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "O Povo/BBC",
      "url": "https://www.opovo.com.br/agencia/bbc/2026/05/24/havengate-o-fundo-na-mira-da-pf-que-conecta-vorcaro-flavio-e-eduardo-bolsonaro.html"
     },
     {
      "veiculo": "Vermelho",
      "url": "https://vermelho.org.br/2026/05/14/pf-investiga-se-dinheiro-do-master-custeou-eduardo-bolsonaro-nos-eua/"
     },
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "de": "paulo-calixto",
    "para": "eduardo",
    "rotulo": "advogado nos EUA; agente legal do fundo Havengate (Texas)",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "O Povo/BBC",
      "url": "https://www.opovo.com.br/agencia/bbc/2026/05/24/havengate-o-fundo-na-mira-da-pf-que-conecta-vorcaro-flavio-e-eduardo-bolsonaro.html"
     }
    ]
   },
   {
    "de": "mario-frias",
    "para": "vorcaro",
    "rotulo": "admitiu recursos ligados a Vorcaro no filme via 'Entre Investimentos'",
    "status": "declaracao",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/mario-frias-recua-e-admite-dinheiro-de-vorcaro-em-filme-sobre-bolsonaro/"
     },
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "de": "paulo-marinho",
    "para": "flavio",
    "rotulo": "afirmou que PF avisou Flávio sobre a Furna da Onça",
    "status": "declaracao",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/pf-antecipou-a-flavio-bolsonaro-que-queiroz-seria-alvo-de-operacao-diz-suplente/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "flavio",
    "rotulo": "advogado da família / defesa",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2023/01/27/fim-do-sigilo-frederick-wassef-fez-16-visitas-a-bolsonaro-enquanto-escondia-queiroz-em-casa/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/rachadinha-relacao-com-familia-bolsonaro-e-prisao-entenda-o-caso-queiroz/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "jair",
    "rotulo": "16 visitas durante ocultação de Queiroz",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2023/01/27/fim-do-sigilo-frederick-wassef-fez-16-visitas-a-bolsonaro-enquanto-escondia-queiroz-em-casa/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/bolsonaro-veja-a-cronologia-do-caso-das-joias-sauditas/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2024-07/pf-indicia-bolsonaro-no-caso-das-joias-sauditas"
     }
    ]
   },
   {
    "de": "jair",
    "para": "flavio",
    "rotulo": "indicou como sucessor e pré-candidato à Presidência 2026 (carta)",
    "status": "declaracao",
    "fontes": [
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/politica/2025/12/7320825-bolsonaro-divulga-carta-e-reafirma-flavio-como-pre-candidato-ao-planalto-em-2026.html"
     }
    ]
   },
   {
    "de": "jair",
    "para": "walderice-santos-da-conceicao-wal-do-acai",
    "rotulo": "empregou no SEU gabinete (não no de Flávio); réus na mesma ação de improbidade",
    "status": "processo",
    "fontes": [
     {
      "veiculo": "MPF",
      "url": "https://www.mpf.mp.br/df/sala-de-imprensa/noticias-df/mpf-propoe-acao-de-improbidade-contra-o-presidente-da-republica-jair-bolsonaro-e-wal-do-acai"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "jorge-luiz-fernandes",
    "rotulo": "ex-chefe de gabinete apontado como chefe do esquema (caso de CARLOS, não de Flávio)",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "Brado Jornal",
      "url": "https://www.bradojornal.com/noticias/justica/2026/02/25/mprj-reabre-investigacao-contra-carlos-bolsonaro-por-suspeita-de-rachadinha/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "rodrigo-bacellar",
    "rotulo": "reunião em 2024 (também com Jair e Carlos)",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/2026/05/7431770-cla-bolsonaro-e-a-relacao-com-suspeitos-de-envolvimento-no-crime-organizado.html"
     }
    ]
   },
   {
    "de": "erasmo-carlos-battistella",
    "para": "flavio",
    "rotulo": "doou R$ 500 mil à campanha (início de set/2026; também doou R$ 500 mil a Lula)",
    "status": "registrado no TSE",
    "fontes": [
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/politica/2026/09/7498014-empresario-gaucho-doa-rs-500-mil-as-campanhas-de-lula-e-flavio-bolsonaro.html"
     },
     {
      "veiculo": "Agenda do Poder",
      "url": "https://agendadopoder.com.br/flavio-bolsonaro-lidera-doacoes-com-r-44-milhoes-lula-soma-r-359-milhoes/"
     },
     {
      "veiculo": "GZH",
      "url": "https://gauchazh.clicrbs.com.br/colunistas/rosane-de-oliveira/noticia/2026/09/empresario-gaucho-doa-para-campanhas-de-lula-e-de-flavio-bolsonaro-cmtugrjob00wr0135lvs26qch.html"
     }
    ]
   },
   {
    "de": "fernando-de-castro-marques",
    "para": "flavio",
    "rotulo": "doou R$ 500 mil à campanha (dados TSE de 08-09/09/2026); também doou R$ 500 mil a Tarcísio",
    "status": "registrado no TSE",
    "fontes": [
     {
      "veiculo": "Agenda do Poder",
      "url": "https://agendadopoder.com.br/flavio-bolsonaro-lidera-doacoes-com-r-44-milhoes-lula-soma-r-359-milhoes/"
     },
     {
      "veiculo": "Minha Bahia",
      "url": "https://minhabahia.com.br/politica/flavio-bolsonaro-lidera-doacoes-eleitorais-com-r-443-milhoes-lula-recebeu-r-359-milhoes/"
     }
    ]
   },
   {
    "de": "angelo-calmon-de-sa",
    "para": "flavio",
    "rotulo": "doou R$ 400 mil à campanha — 3º maior doador pessoa física (set/2026)",
    "status": "registrado no TSE/DivulgaCand",
    "fontes": [
     {
      "veiculo": "Minha Bahia",
      "url": "https://minhabahia.com.br/politica/flavio-bolsonaro-lidera-doacoes-eleitorais-com-r-443-milhoes-lula-recebeu-r-359-milhoes/"
     },
     {
      "veiculo": "Folha de S.Paulo (título confirmado via Google News; texto não aberto)",
      "url": "https://www1.folha.uol.com.br/poder/2026/09/ex-ministro-de-geisel-condenado-por-fraude-esta-entre-maiores-doadores-da-campanha-de-flavio.shtml"
     }
    ]
   },
   {
    "de": "antonio-carlos-freixo-junior-mineiro",
    "para": "vorcaro",
    "rotulo": "fez, a mando de Vorcaro, os 7 repasses (cerca de R$ 69 mi) ao fundo do filme sobre Jair; delator",
    "status": "delação homologada pelo STF; Flávio nega irregularidade e diz que tudo foi para o filme",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-09/mendonca-homologa-delacao-sobre-financiamento-do-filme-sobre-bolsonaro"
     },
     {
      "veiculo": "TMC",
      "url": "https://tmc.com.br/politica/freixo-junior-delacao-flavio-bolsonaro-havengate-stf/"
     },
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/09/09/mendonca-aceita-delacao-de-empresario-que-enviou-r-60-milhoes-a-fundo-ligado-a-eduardo-bolsonaro/"
     },
     {
      "veiculo": "A Crítica",
      "url": "https://acritica.net/justica/delator-eleva-a-us-12-3-milhoes-dinheiro-enviado-a-fundo-do-filme-sobre-bolsonaro/"
     }
    ]
   },
   {
    "de": "mario-frias",
    "para": "flavio",
    "rotulo": "deputado do PL ligado ao filme 'Dark Horse'; Flávio o defendeu após a Operação Make Up ('terceira facada', 'interferência política' de Dino)",
    "status": "Frias investigado (busca e apreensão 10/09/2026)",
    "fontes": [
     {
      "veiculo": "BNews",
      "url": "https://www.bnews.com.br/noticias/politica/flavio-bolsonaro-reage-a-investigacao-da-pf-contra-mario-frias-terceira-facada.html"
     },
     {
      "veiculo": "A Tarde",
      "url": "https://atarde.com.br/politica/dark-horse-flavio-reage-a-operacao-e-fala-em-interferencia-politica-1401627"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2026-09/mario-frias-e-produtora-de-dark-horse-sao-alvos-de-operacao-da-pf"
     }
    ]
   },
   {
    "de": "karina-ferreira-da-gama",
    "para": "flavio",
    "rotulo": "produtora do filme 'Dark Horse', cujo financiamento por Vorcaro foi pedido por Flávio; alvo da Operação Make Up",
    "status": "investigada (busca e apreensão 10/09/2026)",
    "fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/policia-federal-investiga-produtora-do-filme-sobre-bolsonaro-por-desvios/"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-justica/pf-ve-triangulacao-de-r-61-mi-ligada-a-produtora-de-dark-horse/"
     }
    ]
   },
   {
    "de": "renato-araujo",
    "para": "flavio",
    "rotulo": "coordenador do PL na Costa Verde; organizou motociata/carreata de barcos para Flávio em Angra (29/08) e esteve no ato de 07/09; amigo da família",
    "status": "investigado (Operação Sarasvati, ago/2026)",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/09/o-amigo-do-flavio-bolsonaro-em-angra-dos-reis/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/candidato-investigado-participa-de-barqueata-com-flavio-bolsonaro-em-angra"
     }
    ]
   },
   {
    "de": "willer-tomaz",
    "para": "flavio",
    "rotulo": "amigo/advogado aliado; Flávio usou apartamento de sua empresa em SP na campanha (1ª quinzena de ago/2026), segundo piauí; Flávio o defendeu comparando a PF à 'Gestapo' (Fórum, 09/09)",
    "status": "Tomaz investigado (caso INSS); Flávio diz ter ficado só em hotéis",
    "fontes": [
     {
      "veiculo": "Times Brasil / CNBC (reproduz piauí)",
      "url": "https://timesbrasil.com.br/brasil/apartamento-usado-por-flavio-bolsonaro-durante-campanha-eleitoral-pertenceu-a-cunhado-de-daniel-vorcaro/"
     },
     {
      "veiculo": "Notícias ao Minuto (reproduz piauí)",
      "url": "https://www.noticiasaominuto.com.br/politica/2413854/flavio-usou-em-campanha-imovel-de-advogado-alvo-de-buscas-da-pf-no-caso-inss-diz-revista"
     },
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/flavio-bolsonaro-aniversario-da-filha-em-mansao/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/quem-e-o-advogado-willer-tomaz-alvo-da-pf-na-operacao-sem-desconto"
     }
    ]
   },
   {
    "de": "tallis-gomes",
    "para": "flavio",
    "rotulo": "autodeclarado 'conselheiro do Flávio' ('como o Elon Musk foi para o Trump'); membro da Rockbridge (rede de J.D. Vance); acusado por adversários de intermediar dinheiro estrangeiro — nega",
    "status": "sem investigação; PT levou notícia de fato ao STF (13/09/2026)",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/eleicoes/pt-aciona-stf-para-apurar-suposto-custeio-estrangeiro-a-campanha-de-flavio/"
     },
     {
      "veiculo": "Revista Fórum (fonte com viés; transcreve o vídeo)",
      "url": "https://revistaforum.com.br/politica/apoiador-de-flavio-bolsonaro-g4/"
     }
    ]
   },
   {
    "de": "alfredo-gaspar",
    "para": "flavio",
    "rotulo": "candidato a vice na chapa, anunciado em 5/8/2026",
    "status": "Chapa puro-sangue do PL, registrada sob o número 22. Ambos são alvos da AIJE por suposto abuso de poder econômico cuja admissibilidade foi reconhecida em 7/9/2026, ainda sem defesa apresentada.",
    "fontes": [
     {
      "veiculo": "JOTA",
      "url": "https://www.jota.info/eleicoes/eleicoes-2026/alfredo-gaspar-sera-o-candidato-a-vice-presidente-na-chapa-de-flavio-bolsonaro"
     },
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/eleicoes/quem-e-alfredo-gaspar-candidato-a-vice-presidente-na-chapa-de-flavio-bolsonaro,a194a0cce1da7610e199b6935af23c4c1epqk004.html"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/demetrio-vecchioli/tse-abre-investigacao-por-suposto-abuso-economico-de-flavio-em-barretos"
     }
    ]
   },
   {
    "de": "daniella-marques-consentino",
    "para": "flavio",
    "rotulo": "coordena a área econômica da campanha",
    "status": "Sem processo conhecido. É citada como possível ministra da Casa Civil.",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-bolsonaro-amplia-equipe-economica-com-7-novos-nomes/"
     },
     {
      "veiculo": "Tribuna do Paraná",
      "url": "https://www.tribunapr.com.br/noticias/economia/executivo-que-apoiou-lula-e-cotado-para-fazenda-de-flavio-bolsonaro/"
     }
    ]
   },
   {
    "de": "adolfo-sachsida",
    "para": "flavio",
    "rotulo": "integra a coordenação do plano econômico da campanha desde agosto de 2026",
    "status": "Sem processo conhecido.",
    "fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/eleicoes/adolfo-sachsida-campanha-flavio-bolsonaro/"
     }
    ]
   },
   {
    "de": "adolfo-sachsida",
    "para": "daniella-marques-consentino",
    "rotulo": "divide com ela a coordenação econômica da campanha",
    "status": "Os dois assinam conjuntamente a ampliação da equipe econômica anunciada em agosto de 2026.",
    "fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/eleicoes/adolfo-sachsida-campanha-flavio-bolsonaro/"
     },
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-bolsonaro-amplia-equipe-economica-com-7-novos-nomes/"
     }
    ]
   },
   {
    "de": "jose-vicente-santini",
    "para": "flavio",
    "rotulo": "coordenador da campanha; sua mansão de R$ 14,5 milhões passou a ser usada para reuniões da campanha",
    "status": "Alvo de notícia de fato apresentada à PF por Lindbergh Farias em 2/7/2026; não é investigado formalmente e nega irregularidade.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/flavio-bolsonaro-usa-mansao-de-r-145-milhoes-de-seu-coordenador-de-campanha/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/manoela-alcantara/lindbergh-pede-a-pf-que-investigue-mansao-usada-por-flavio-como-qg"
     }
    ]
   },
   {
    "de": "nelson-santini",
    "para": "flavio",
    "rotulo": "coordenador logístico e financeiro da campanha desde 27/2/2026",
    "status": "Sem processo conhecido.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/tenente-santini-sera-coordenador-logistico-e-financeiro-de-flavio/"
     }
    ]
   },
   {
    "de": "nelson-santini",
    "para": "jose-vicente-santini",
    "rotulo": "irmãos; ambos coordenam áreas da campanha de Flávio",
    "status": "Filhos do general Nelson Santini Junior, morto em 2015; atuaram nas campanhas da família Bolsonaro em 2018 e 2022.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/tenente-santini-sera-coordenador-logistico-e-financeiro-de-flavio/"
     }
    ]
   },
   {
    "de": "jmartelo-solucoes-em-comunicacao",
    "para": "flavio",
    "rotulo": "sua empresa, a JMartelo, foi contratada pela campanha por R$ 1,6 milhão",
    "status": "Contrato declarado na prestação de contas eleitoral, revelado em 5/9/2026.",
    "fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-jmartelo/"
     }
    ]
   },
   {
    "de": "duda-lima",
    "para": "flavio",
    "rotulo": "assumiu o marketing da campanha em 30/7/2026",
    "status": "Substituiu Alexandre Oltramari e Eduardo Fischer, na segunda troca no comando da comunicação em menos de três meses.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/flavio-bolsonaro-troca-marqueteiro-e-duda-lima-assumira-campanha/"
     }
    ]
   },
   {
    "de": "maria-claudia-bucchianeri",
    "para": "flavio",
    "rotulo": "advogada contratada pela campanha para a atuação no TSE",
    "status": "Escolhida em março de 2026; ex-ministra do TSE nomeada por Jair Bolsonaro.",
    "fontes": [
     {
      "veiculo": "Valor Econômico",
      "url": "https://valor.globo.com/politica/eleicoes-2026/noticia/2026/08/26/campanhas-priorizam-gastos-com-marqueteiros-advogados-e-redes-na-largada.ghtml"
     }
    ]
   },
   {
    "de": "claudio-lottenberg",
    "para": "flavio",
    "rotulo": "anunciado por Flávio como futuro ministro da Saúde em 28/8/2026",
    "status": "Anúncio feito em entrevista ao vivo na TV Globo, após o Jornal Nacional.",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-saude/flavio-anuncia-medico-claudio-lottenberg-como-ministro-da-saude/"
     }
    ]
   },
   {
    "de": "marcelo-kayath",
    "para": "flavio",
    "rotulo": "ofereceu jantar com banqueiros ao candidato e passou a ser cotado para a Fazenda",
    "status": "Sugestão apresentada por banqueiros, investidores e empresários no jantar em sua casa, em São Paulo, no fim de agosto de 2026; Daniella Marques participou do encontro.",
    "fontes": [
     {
      "veiculo": "Tribuna do Paraná",
      "url": "https://www.tribunapr.com.br/noticias/economia/executivo-que-apoiou-lula-e-cotado-para-fazenda-de-flavio-bolsonaro/"
     }
    ]
   },
   {
    "de": "walter-schlatter",
    "para": "flavio",
    "rotulo": "doou R$ 300 mil à campanha, a maior doação de pessoa física",
    "status": "Doação registrada na prestação de contas e confirmada por ele por telefone em 6/9/2026.",
    "fontes": [
     {
      "veiculo": "Agência da Notícia",
      "url": "https://www.agenciadanoticia.com.br/mato-grosso/noticia/146289/prefeito-e-empresario-walter-schlatter-confirma-doacao-de-r-300-mil-a-campanha-de-flavio-bolsonaro"
     }
    ]
   },
   {
    "de": "flavio-roscoe",
    "para": "flavio",
    "rotulo": "candidato do PL ao governo de MG lançado em 5/8/2026 como o nome de Flávio no estado",
    "status": "Lidera o ranking nacional de doações privadas a candidatos (R$ 4 milhões).",
    "fontes": [
     {
      "veiculo": "SBT News",
      "url": "https://sbtnews.sbt.com.br/colunas/coluna-do-ranier/candidato-de-flavio-em-mg-lidera-ranking-de-doacoes-privadas"
     }
    ]
   },
   {
    "de": "marcio-canella",
    "para": "flavio",
    "rotulo": "candidato ao Senado pelo RJ apoiado por Flávio, que declarou 'apoio integral' mesmo após a operação da PF",
    "status": "Preso em flagrante em 7/7/2026 e solto por decisão de Moraes em 10/7/2026; cautelares revogadas em 24/7/2026. Investigado por lavagem de dinheiro, sem denúncia conhecida. A prisão levou o União Brasil a descartar apoio a Flávio.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/jussara-soares/politica/aliado-de-flavio-no-rio-e-alvo-da-pf-e-abre-nova-crise-na-pre-campanha/"
     },
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/07/11/moraes-manda-soltar-ex-prefeito-de-belford-roxo-apos-prisao-com-fuzil/"
     }
    ]
   },
   {
    "de": "rogeria-nantes-bolsonaro",
    "para": "marcio-canella",
    "rotulo": "suplente na chapa dele ao Senado pelo Rio de Janeiro",
    "status": "A indicação foi feita pelo próprio Flávio Bolsonaro; ela não é alvo da operação da PF.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/jussara-soares/politica/aliado-de-flavio-no-rio-e-alvo-da-pf-e-abre-nova-crise-na-pre-campanha/"
     }
    ]
   },
   {
    "de": "rogeria-nantes-bolsonaro",
    "para": "flavio",
    "rotulo": "mãe de Flávio Bolsonaro e suplente na chapa ao Senado de Márcio Canella",
    "status": "Sem processo conhecido.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/jussara-soares/politica/aliado-de-flavio-no-rio-e-alvo-da-pf-e-abre-nova-crise-na-pre-campanha/"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "ronald-paulo-alves-pereira",
    "rotulo": "co-chefe da milícia",
    "status": "Apontados pelo MP-RJ como líderes conjuntos da milícia da zona oeste e do Escritório do Crime; alvos da Operação Os Intocáveis.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "mauricio-silva-da-costa",
    "rotulo": "co-chefe da milícia",
    "status": "Citado pelo MP-RJ ao lado de Adriano e Major Ronald como integrante da cúpula sem cujo aval nenhuma ação da milícia ocorria.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "leonardo-gouvea-da-silva",
    "rotulo": "sucessor na liderança",
    "status": "'Mad' assumiu o comando do Escritório do Crime após a morte de Adriano em 2020.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "leandro-gouvea-da-silva",
    "rotulo": "integrante do grupo",
    "status": "'Tonhão' era braço-direito da liderança que sucedeu Adriano no Escritório do Crime.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Escrit%C3%B3rio_do_Crime"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "jose-luiz-de-barros-lopes",
    "rotulo": "executor a mando do contraventor",
    "status": "Segundo o MP, Adriano participou de ao menos oito homicídios entre 2006 e 2009 a mando do contraventor 'Zé Personal'.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "valdomiro-paes-garcia",
    "rotulo": "segurança da família do bicheiro",
    "status": "A partir de 2006 Adriano atuou na segurança de parentes do contraventor Valdomiro Paes Garcia.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/miliciano-adriano-da-nobrega-prestava-servicos-a-cupula-do-jogo-do-bicho-diz-mp/"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "rogerio-de-andrade",
    "rotulo": "prestava serviços ao bicheiro",
    "status": "O Escritório do Crime de Adriano prestava serviços de execução à cúpula do jogo do bicho em disputas de território, segundo o MP.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/miliciano-adriano-da-nobrega-prestava-servicos-a-cupula-do-jogo-do-bicho-diz-mp/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "elcio-de-queiroz",
    "rotulo": "atirador e motorista no crime",
    "status": "Lessa efetuou os disparos e Élcio dirigiu o carro no assassinato de Marielle Franco; ambos condenados em 2024.",
    "fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2024-out-31/ronnie-lessa-e-elcio-de-queiroz-sao-condenados-por-assassinar-marielle-franco/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Assassinato_de_Marielle_Franco"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "maxwell-simoes-correa",
    "rotulo": "forneceu carro / destruiu provas",
    "status": "Suel fez a vigilância da rotina de Marielle e, após o crime, ajudou a ocultar as armas usadas por Lessa.",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/poder-flash/leia-a-integra-da-delacao-premiada-de-elcio-queiroz-no-caso-marielle/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-as-pontas-soltas-e-os-proximos-passos-apos-delacao"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "domingos-brazao",
    "rotulo": "executor e mandante",
    "status": "Lessa apontou os irmãos Brazão como mandantes do assassinato de Marielle; Domingos foi condenado pelo STF em 2026.",
    "fontes": [
     {
      "veiculo": "AOL/AP",
      "url": "https://www.aol.com/politician-brothers-convicted-brazil-ordering-193515048.html"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/apos-condenacao-de-executores-de-marielle-atencoes-se-voltam-ao-julgamento-de-mandantes/"
     },
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "chiquinho-brazao",
    "rotulo": "irmãos e co-mandantes",
    "status": "Os dois irmãos foram denunciados pela PGR e condenados pelo STF em fevereiro de 2026 como mandantes do crime.",
    "fontes": [
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/406998/pgr-denuncia-irmaos-brazao-e-delegado-por-assassinato-de-marielle"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/quem-sao-os-cinco-acusados-de-mandar-matar-marielle-e-anderson/"
     },
     {
      "veiculo": "STF",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-condena-irmaos-brazao-a-76-anos-de-prisao-pelo-assassinato-de-marielle-franco-e-anderson-gomes/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "rogerio-de-andrade",
    "rotulo": "ex-segurança / homem de confiança",
    "status": "Lessa atuou para o bicheiro Rogério de Andrade até perder sua confiança, quando se aproximou de Adriano.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/acusado-de-matar-marielle-manteve-contato-com-bicheiros-diz-promotora/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "chiquinho-brazao",
    "rotulo": "executor x mandante",
    "status": "Delação de Lessa levou à prisão de Chiquinho Brazão, apontado como mandante e depois condenado pelo STF.",
    "fontes": [
     {
      "veiculo": "InfoMoney",
      "url": "https://www.infomoney.com.br/politica/ronnie-lessa-e-elcio-queiroz-sao-condenados-pelo-assassinato-de-marielle-franco/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "rivaldo-barbosa",
    "rotulo": "executor x facilitador de impunidade",
    "status": "Rivaldo, então chefe de polícia, teria garantido impunidade aos mandantes do crime cometido por Lessa.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-ex-chefe-de-policia-rivaldo-barbosa-e-condenado-a-18-anos/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "ronald-paulo-alves-pereira",
    "rotulo": "executor x monitorador",
    "status": "Major Ronald teria monitorado a rotina de Marielle e repassado informações aos executores, entre eles Lessa.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/quem-sao-os-cinco-acusados-de-mandar-matar-marielle-e-anderson/"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "maxwell-simoes-correia",
    "rotulo": "executor x ocultador de provas",
    "status": "Maxwell ocultou o carro e as armas usados por Lessa no crime, atrapalhando a investigação.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-bombeiro-pega-4-anos-por-atrapalhar-investigacoes"
     }
    ]
   },
   {
    "de": "ronnie-lessa",
    "para": "mohana-figueiredo-lessa",
    "rotulo": "pai e filha no esquema de armas",
    "status": "Mohana recebia, reembalava e reenviava ao Brasil peças de armas importadas por Lessa; foi absolvida.",
    "fontes": [
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/brasil/ronnie-lessa-e-condenado-na-justica-federal-por-contrabando-de-pecas-de-armas/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "robson-calixto-fonseca",
    "rotulo": "patrão e homem de confiança",
    "status": "Robson 'Peixe' era ex-assessor e homem de confiança de Domingos Brazão, envolvido em grilagem de terras.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/quem-sao-os-cinco-acusados-de-mandar-matar-marielle-e-anderson/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/ex-assessor-de-domingos-brazao-e-condenado-a-9-anos-pela-morte-de-marielle/"
     },
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "wellington-da-silva-braga",
    "rotulo": "aliança miliciana",
    "status": "Nóbrega manteve aliança de anos com Ecko, chefe do Bonde do Ecko, expandindo o poder da milícia na Zona Oeste.",
    "fontes": [
     {
      "veiculo": "Intercept Brasil",
      "url": "https://www.intercept.com.br/2021/06/14/ecko-miliciano-adriano-nobrega/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "thiago-miranda",
    "rotulo": "intermediário do contato com Flávio Bolsonaro",
    "status": "Thiago Miranda organizou em dezembro de 2024 o primeiro encontro entre Vorcaro e o senador Flávio Bolsonaro, ponte para o financiamento do filme 'Dark Horse'.",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "henrique-vorcaro",
    "rotulo": "pai / operador financeiro",
    "status": "Pai de Daniel, preso na 6ª fase da Compliance Zero por participação em operações do esquema.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2026-05/pai-de-daniel-vorcaro-e-preso-na-6a-fase-da-operacao-compliance-zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "felipe-cancado-vorcaro",
    "rotulo": "primo / núcleo financeiro-operacional",
    "status": "Primo de Daniel, preso em 7 de maio de 2026 como peça central do núcleo financeiro-operacional.",
    "fontes": [
     {
      "veiculo": "O Folha de Minas",
      "url": "https://ofolhademinas.com.br/stf-mantem-prisao-de-familiares-de-daniel-vorcaro-em-investigacao-sobre-supostas-fraudes-no-banco-master/"
     },
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/politica/quem-e-felipe-cancado-preso-pf-operacao-compliance-zero-stf/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "augusto-lima",
    "rotulo": "ex-sócio e ex-CEO do Master",
    "status": "Ex-sócio e ex-CEO do Banco Master, preso ao lado de Vorcaro na 1ª fase (nov/2025).",
    "fontes": [
     {
      "veiculo": "Band",
      "url": "https://www.band.com.br/noticias/quem-e-augusto-lima-ex-socio-de-daniel-vorcaro-e-alvo-de-operacao-da-pf-202606180823"
     },
     {
      "veiculo": "NeoFeed",
      "url": "https://neofeed.com.br/negocios/quem-e-o-ex-socio-do-banco-master-que-tambem-foi-preso-pela-policia-federal/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "luiz-antonio-bull",
    "rotulo": "ex-diretor do Master",
    "status": "Ex-diretor de compliance/riscos preso na 1ª fase; disse ter assinado documentos sem ler.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/banco-master-ex-diretor-disse-a-pf-que-assinava-documentos-sem-ler/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "nelson-tanure",
    "rotulo": "apontado como sócio oculto do Master",
    "status": "PF aponta Tanure como 'sócio oculto' do Master, com influência via fundos e CCBs; Tanure nega.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/blogs/teo-cury/politica/investigacao-da-pf-aponta-nelson-tanure-como-socio-oculto-do-master/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "joao-carlos-mansur",
    "rotulo": "gestor (Reag) que inflava ativos do Master",
    "status": "Recursos desviados do Master teriam circulado por fundos da Reag, gestora fundada por Mansur.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/economia/macroeconomia/alem-de-vorcaro-pf-faz-buscas-contra-nelson-tanure-e-joao-carlos-mansur/"
     },
     {
      "veiculo": "Investidor10",
      "url": "https://investidor10.com.br/noticias/quem-e-joao-carlos-mansur-fundador-da-reag-investimentos-e-investigado-pela-pf-117980/"
     }
    ]
   },
   {
    "de": "nelson-tanure",
    "para": "joao-carlos-mansur",
    "rotulo": "cunhados / fundos interligados",
    "status": "Tanure é cunhado de Mansur; fundos da Reag teriam destino em empresas de fachada associadas a Tanure.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/tanure-investigado-bc-pf-mpf-quebra-master-reag/"
     },
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "paulo-calixto",
    "rotulo": "repasses via fundo Havengate",
    "status": "Repasses do Master para financiar o filme nos EUA teriam passado pelo fundo Havengate, controlado por Calixto, advogado de Eduardo Bolsonaro.",
    "fontes": [
     {
      "veiculo": "The Intercept Brasil",
      "url": "https://www.intercept.com.br/2026/06/09/planilha-comprovante-bancario-vorcaro-dinheiro-eua-ar-dark-horse/"
     }
    ]
   },
   {
    "de": "thiago-miranda",
    "para": "mario-frias",
    "rotulo": "intermediação conjunta do filme",
    "status": "Ambos intermediaram contatos entre Vorcaro e o entorno de Flávio/Eduardo Bolsonaro para o financiamento de 'Dark Horse'.",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "marcia-aguiar",
    "rotulo": "cônjuge / movimentação financeira",
    "status": "investigacao",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://cnnbrasil.com.br/politica/2020/11/23/mulher-de-queiroz-recebeu-mais-de-r-1-milhao-dizem-promotores-em-denuncia"
     },
     {
      "veiculo": "Brasil 247",
      "url": "https://www.brasil247.com/regionais/sudeste/miliciano-adriano-da-nobrega-deu-r-80-mil-para-queiroz-pagar-cirurgia-no-einstein"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "nathalia-queiroz",
    "rotulo": "filha / assessora-fantasma",
    "status": "Filha de Queiroz lotada no gabinete de Flávio; teria transferido ~R$ 97 mil dentro do esquema.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/rachadinha-mp-denuncia-mulher-de-flavio-bolsonaro-e-filhas-de-queiroz"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "evelyn-queiroz",
    "rotulo": "filha / lotada no gabinete",
    "status": "Filha de Queiroz citada na denúncia como lotada no gabinete de Flávio na Alerj.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/rachadinha-mp-denuncia-mulher-de-flavio-bolsonaro-e-filhas-de-queiroz"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "grillo",
    "rotulo": "co-operador do esquema",
    "status": "Enquanto Queiroz fazia a contabilidade da rachadinha, Coronel Braga atestava falsamente a frequência dos assessores-fantasmas, segundo o MP-RJ.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/politica/assessor-de-flavio-bolsonaro-era-determinante-em-esquema-de-rachadinha-diz-mprj/"
     }
    ]
   },
   {
    "de": "queiroz",
    "para": "santini",
    "rotulo": "lavagem na loja de chocolates",
    "status": "Depósitos em espécie na loja Kopenhagen de Santini coincidem com o período em que Queiroz coletava salários de assessores na Alerj, segundo o MP-RJ.",
    "fontes": [
     {
      "veiculo": "Exame",
      "url": "https://exame.com/brasil/mp-rj-investiga-lavagem-de-r21-milhoes-em-loja-de-flavio-bolsonaro/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "tamara-harrouche-garcia",
    "rotulo": "ex-mulher / entrada na família Garcia",
    "status": "Bello foi casado com Tamara, filha de Maninho; a relação lhe deu acesso ao império do jogo do bicho da família Garcia.",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     }
    ]
   },
   {
    "de": "tamara-harrouche-garcia",
    "para": "waldemir-paes-garcia-maninho",
    "rotulo": "filha de",
    "status": "Tamara é filha do bicheiro Maninho, patriarca da família Garcia.",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "alcebiades-paes-garcia-bid",
    "rotulo": "mandante do assassinato",
    "status": "Bello é apontado como mandante da morte de Bid (fev/2020) e foi a júri popular pelo crime, motivado por disputa de pontos do jogo do bicho.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "waldomiro-paes-garcia-junior-mirinho",
    "rotulo": "envolvido na morte",
    "status": "O nome de Bello é envolvido no assassinato de Mirinho (2017), filho de Maninho, em meio à guerra de sucessão.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/sociedade/quem-e-o-bicheiro-que-a-policia-do-rio-tenta-prender-em-operacao-nesta-quinta-feira/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "shanna-harrouche-garcia",
    "rotulo": "acusado de atentado",
    "status": "Shanna acusa Bello de ser o mandante de tentativa de assassinato contra ela em 2019.",
    "fontes": [
     {
      "veiculo": "Wikipédia (Bernardo Bello)",
      "url": "https://pt.wikipedia.org/wiki/Bernardo_Bello"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "rogerio-de-andrade",
    "rotulo": "rivais na cúpula do bicho",
    "status": "Rogério Andrade é o principal rival de Bello na disputa pelos pontos de jogo do bicho do Rio.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/colunas/guilherme-amado/preso-bicheiro-rogerio-andrade-tem-rival-foragido-ha-dois-anos"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/saiba-quem-e-o-bicheiro-bernardo-bello/"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "fernando-iggnacio",
    "rotulo": "rival / mandante apontado da morte",
    "status": "Rogério Andrade foi preso e denunciado como mandante do assassinato do rival Fernando Iggnácio (2020); ação rejeitada pelo STF em 2022.",
    "fontes": [
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/brasil/cidades/bicheiro-rogerio-de-andrade-e-preso-no-rio-por-assassinato-do-rival-fernando-iggnacio,71f6e3c9b097fbdbd969491731852fe4p6j3honr.html"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "ronnie-lessa",
    "rotulo": "contratou para matar",
    "status": "Em delação, Lessa diz ter sido contratado por Bello (via Macalé) para matar Regina Celi, do Salgueiro, mediante R$ 50 mil mensais; Bello também teria fornecido telefone a Lessa.",
    "fontes": [
     {
      "veiculo": "Metro 1",
      "url": "https://www.metro1.com.br/noticias/brasil/147812,ronnie-lessa-diz-em-delacao-que-foi-contratado-por-bernardo-bello-para-matar-ex-presidente-do-salgueiro"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-delator-aponta-participacao-de-bicheiro-em-assassinato/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "edmilson-da-silva-de-oliveira-macale",
    "rotulo": "intermediário / operador",
    "status": "Segundo a delação de Lessa, Macalé era o elo entre Bello e os matadores e dizia não poder negar pedidos do bicheiro; morto em 2021.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-delator-aponta-participacao-de-bicheiro-em-assassinato/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "allan-diego-magalhaes-aguiar",
    "rotulo": "braço financeiro / co-réu",
    "status": "Aguiar é apontado como operador financeiro de Bello e co-investigado no homicídio do advogado Carlos Daniel Dias (2022); está preso.",
    "fontes": [
     {
      "veiculo": "O Tempo",
      "url": "https://www.otempo.com.br/brasil/quem-e-bernardo-bello-contraventor-apontado-como-chefe-do-jogo-do-bicho-no-rio-1.3344870"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "wagner-dantas-alegre",
    "rotulo": "executor (co-réu)",
    "status": "Ex-PM apontado como atirador na morte de Alcebíades Garcia, julgado junto com Bello; foragido.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "fernando-bello",
    "rotulo": "comparsa (co-réu)",
    "status": "Apontado como comparsa de Bello e réu pela morte de Alcebíades Garcia; foragido.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/geral/noticia/2025-11/contraventor-e-ex-pm-vao-julgamento-pela-morte-de-alcebiades-garcia"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "jose-carlos-roque-barboza",
    "rotulo": "chefe de segurança",
    "status": "Apontado como chefe de segurança de Bello e acusado de fornecer o veículo usado no atentado contra Marielle Franco.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-delator-aponta-participacao-de-bicheiro-em-assassinato/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "elcio-de-queiroz",
    "rotulo": "delator que liga grupo de Bello a crimes",
    "status": "Em delação, o ex-PM Élcio de Queiroz implicou o grupo do bicheiro Bello nos assassinatos de Marielle Franco e Anderson Gomes (2018).",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/caso-marielle-delator-aponta-participacao-de-bicheiro-em-assassinato/"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "julia_lotufo",
    "rotulo": "delatora / acusação",
    "status": "Júlia, viúva de Adriano da Nóbrega, em delação acusou Bello de coagir um miliciano ligado ao jogo do bicho.",
    "fontes": [
     {
      "veiculo": "Wikipédia (Bernardo Bello)",
      "url": "https://pt.wikipedia.org/wiki/Bernardo_Bello"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "mauro-cesar-barbosa-cid",
    "rotulo": "recompra do Rolex vendido por Cid",
    "status": "Wassef recomprou nos EUA um Rolex que havia sido vendido por Mauro Cid; ambos indiciados no caso das joias.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/bolsonaro-veja-a-cronologia-do-caso-das-joias-sauditas/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/cid-vendeu-rolex-e-wassef-o-recomprou-para-entregar-ao-tcu-diz-pf/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "mauro-cesar-lourena-cid",
    "rotulo": "cadeia da venda/recompra das joias",
    "status": "Pai de Mauro Cid e Wassef foram alvos da mesma operação da PF no caso das joias em agosto/2023.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/radioagencia-nacional/seguranca/audio/2023-08/pai-de-mauro-cid-e-wassef-sao-alvo-de-nova-operacao-no-caso-das-joias"
     },
     {
      "veiculo": "A Tarde",
      "url": "https://atarde.com.br/politica/caso-das-joias-saiba-quem-sao-os-aliados-de-bolsonaro-indiciados-1277230"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "marcelo-costa-camara",
    "rotulo": "co-indiciado (joias)",
    "status": "Ambos indiciados pela PF no caso das joias.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "osmar-crivelatti",
    "rotulo": "co-indiciado (joias)",
    "status": "Ambos indiciados pela PF no caso das joias.",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/leia-a-integra-do-relatorio-que-indiciou-bolsonaro-no-caso-das-joias/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "jose-roberto-bueno-junior",
    "rotulo": "co-indiciado (joias)",
    "status": "Ambos indiciados pela PF no caso das joias.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "marcos-andre-dos-santos-soeiro",
    "rotulo": "co-indiciado (joias)",
    "status": "Ambos indiciados pela PF no caso das joias.",
    "fontes": [
     {
      "veiculo": "Poder360",
      "url": "https://www.poder360.com.br/justica/leia-a-integra-do-relatorio-que-indiciou-bolsonaro-no-caso-das-joias/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "bento-costa-lima-leite-de-albuquerque-juni",
    "rotulo": "co-indiciado (joias)",
    "status": "Ambos indiciados pela PF no caso das joias em julho/2024.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "fabio-wajngarten",
    "rotulo": "recomprou Rolex a pedido de",
    "status": "Ambos indiciados pela PF no caso das joias.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     },
     {
      "veiculo": "Terra",
      "url": "https://www.terra.com.br/noticias/brasil/politica/wassef-diz-a-pf-que-recomprou-rolex-a-pedido-de-ex-ministro-fabio-wajngarten,398484a7e469f447b1272e8d4f26be7a3oya4w8n.html"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "edevaldo-de-oliveira",
    "rotulo": "correspondente em Atibaia",
    "status": "Edevaldo se descreve como correspondente de Wassef em Atibaia, com escritório a ~4 km do imóvel onde Queiroz foi preso.",
    "fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "de": "edevaldo-de-oliveira",
    "para": "paulo-emilio-catta-pretta",
    "rotulo": "auxiliou a defesa de Queiroz",
    "status": "Catta Pretta recrutou Edevaldo para obter documentos médicos em apoio a habeas corpus de Queiroz.",
    "fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "de": "paulo-emilio-catta-pretta",
    "para": "queiroz",
    "rotulo": "advogado de defesa",
    "status": "Catta Pretta atuou na defesa de Fabrício Queiroz.",
    "fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "de": "paulo-emilio-catta-pretta",
    "para": "adriano",
    "rotulo": "advogado de defesa",
    "status": "Catta Pretta defendeu o miliciano Adriano da Nóbrega, do Escritório do Crime.",
    "fontes": [
     {
      "veiculo": "Crusoé",
      "url": "https://crusoe.com.br/diario/um-elo-em-atibaia-advogado-conecta-wassef-a-defensor-de-queiroz-e-do-miliciano-adriano/"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "mauro-cesar-lourena-cid",
    "rotulo": "pai / coautor da venda de joias",
    "status": "Pai e filho indiciados juntos no caso das joias; o pai teria intermediado itens em Miami.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/grupo-agiu-para-enriquecimento-ilicito-de-bolsonaro-no-caso-das-joias-diz-relatorio-da-pf/"
     },
     {
      "veiculo": "Jovem Pan",
      "url": "https://jovempan.com.br/noticias/politica/delacao-de-mauro-cid-revela-entrega-de-us-86-mil-a-bolsonaro-por-venda-de-joias.html"
     },
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/operacao-pf-mauro-cid-pai-alvo-presentes-oficiais-recebidos-governo/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "walter-braga-netto",
    "rotulo": "co-réu / vice na chapa de 2022",
    "status": "Ambos condenados no núcleo crucial; Braga Netto apontado como articulador operacional da trama.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-09/por-4-1-stf-condena-bolsonaro-e-mais-sete-pela-trama-golpista"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-09/supremo-condena-braga-netto-26-anos-de-prisao-pela-trama-golpista"
     }
    ]
   },
   {
    "de": "jair",
    "para": "augusto-heleno",
    "rotulo": "co-réu / ministro do GSI",
    "status": "Heleno, homem de confiança de Bolsonaro, condenado a 21 anos no núcleo crucial.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/alem-de-bolsonaro-saiba-as-penas-impostas-pelo-stf-aos-outros-condenados-pela-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "almir-garnier",
    "rotulo": "co-réu / ex-comandante da Marinha",
    "status": "Garnier teria oferecido tropas a Bolsonaro; condenado a 24 anos no núcleo crucial.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/alem-de-bolsonaro-saiba-as-penas-impostas-pelo-stf-aos-outros-condenados-pela-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "anderson-torres",
    "rotulo": "co-réu / ex-ministro da Justiça",
    "status": "Torres condenado a 24 anos por participação/omissão na trama, no núcleo crucial.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/alem-de-bolsonaro-saiba-as-penas-impostas-pelo-stf-aos-outros-condenados-pela-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "paulo-sergio-nogueira",
    "rotulo": "co-réu / ex-ministro da Defesa",
    "status": "Paulo Sérgio condenado a 19 anos; apontado em negociação de minuta golpista.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/alem-de-bolsonaro-saiba-as-penas-impostas-pelo-stf-aos-outros-condenados-pela-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "alexandre-ramagem",
    "rotulo": "co-réu / ex-diretor da Abin",
    "status": "Ramagem condenado a 16 anos; perdeu mandato de deputado por uso da Abin na trama.",
    "fontes": [
     {
      "veiculo": "CartaCapital",
      "url": "https://www.cartacapital.com.br/justica/alem-de-bolsonaro-saiba-as-penas-impostas-pelo-stf-aos-outros-condenados-pela-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "mauro-cesar-barbosa-cid",
    "rotulo": "co-réu / ex-ajudante de ordens e delator",
    "status": "Cid, ajudante de ordens de Bolsonaro, fez delação que sustentou as condenações.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-10/moraes-manda-cid-tirar-tornozeleira-e-cumprir-pena-em-regime-aberto"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/mauro-cid-a-trajetoria-do-ajudante-de-ordens-que-virou-delator/"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-02/cid-confirma-que-bolsonaro-recebeu-us-86-mil-por-venda-de-joias"
     }
    ]
   },
   {
    "de": "jair",
    "para": "filipe-martins",
    "rotulo": "co-réu / ex-assessor (minuta do golpe)",
    "status": "Martins, assessor de Bolsonaro, condenado a 21 anos por elaborar/circular a minuta golpista.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/filipe-martins-e-condenado-pelo-stf-a-21-anos-de-prisao-por-plano-de-golpe/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "mario-fernandes",
    "rotulo": "co-réu / general autor do 'Punhal Verde e Amarelo'",
    "status": "Fernandes condenado a 26,5 anos; admitiu autoria do plano para matar Lula, Alckmin e Moraes.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/general-mario-fernandes-e-condenado-a-26-anos-e-6-meses-de-prisao/"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/punhal-verde-e-amarelo-entenda-plano-para-matar-lula-alckmin-e-moraes/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "silvinei-vasques",
    "rotulo": "co-réu / ex-diretor da PRF",
    "status": "Silvinei condenado a 24,5 anos no núcleo 2; ligado a ações da PRF no pleito de 2022.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-12/reus-do-nucleo-2-da-trama-golpista-recebem-penas-entre-8-e-26-anos"
     }
    ]
   },
   {
    "de": "jair",
    "para": "marcelo-costa-camara",
    "rotulo": "co-réu / ex-assessor (núcleo 2)",
    "status": "Coronel ex-assessor de Bolsonaro condenado a 21 anos, ligado ao monitoramento de alvos.",
    "fontes": [
     {
      "veiculo": "Migalhas",
      "url": "https://www.migalhas.com.br/quentes/446559/por-unanimidade-1-turma-do-stf-condena-nucleo-2-da-trama-golpista"
     }
    ]
   },
   {
    "de": "jair",
    "para": "marilia-de-alencar",
    "rotulo": "co-ré / ex-diretora de Inteligência do MJ",
    "status": "Condenada a 8,5 anos no núcleo 2 por organização criminosa e tentativa de abolição do Estado de Direito.",
    "fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-dez-16/supremo-condena-cinco-reus-do-nucleo-2-da-trama-golpista/"
     }
    ]
   },
   {
    "de": "jair",
    "para": "bernardo-romao-correa-netto",
    "rotulo": "co-réu / articulador dos 'kids pretos'",
    "status": "Coronel apontado como articulador do núcleo 3, condenado a 17 anos.",
    "fontes": [
     {
      "veiculo": "Band",
      "url": "https://www.band.com.br/politica/noticias/moraes-manda-prender-sete-kids-pretos-condenados-pela-trama-golpista-202603131651"
     }
    ]
   },
   {
    "de": "mario-fernandes",
    "para": "helio-ferreira-lima",
    "rotulo": "plano de assassinato compartilhado",
    "status": "O plano 'Punhal Verde e Amarelo' de Fernandes convergiu com as ações táticas dos 'kids pretos' do núcleo 3.",
    "fontes": [
     {
      "veiculo": "Band",
      "url": "https://www.band.com.br/politica/noticias/moraes-manda-prender-sete-kids-pretos-condenados-pela-trama-golpista-202603131651"
     },
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/justica/kids-pretos-stf-condena-por-unanimidade-o-nucleo-3/"
     },
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     }
    ]
   },
   {
    "de": "bernardo-romao-correa-netto",
    "para": "helio-ferreira-lima",
    "rotulo": "mesmo núcleo operacional ('kids pretos')",
    "status": "Ambos condenados no núcleo 3 que planejou sequestrar e matar Lula, Alckmin e Moraes.",
    "fontes": [
     {
      "veiculo": "Congresso em Foco",
      "url": "https://www.congressoemfoco.com.br/noticia/117269/moraes-manda-prender-kids-pretos-condenados-por-trama-golpista"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "walter-braga-netto",
    "rotulo": "delatou / tentativa de obstrução",
    "status": "Cid (delator) e Braga Netto foram submetidos a acareação no STF sobre a trama.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-09/por-4-1-stf-condena-bolsonaro-e-mais-sete-pela-trama-golpista"
     },
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-06/cid-diz-que-entregou-dinheiro-em-sacola-pedido-de-braga-netto"
     },
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4241563/braga-netto-e-mauro-cid-se-confrontam-em-acareacao-no-stf-na-acao-por-tentativa-de-golpe"
     },
     {
      "veiculo": "Congresso em Foco",
      "url": "https://www.congressoemfoco.com.br/noticia/115325/relembre-o-julgamento-historico-da-condenacao-de-bolsonaro-no-stf"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "tercio-arnaud-tomaz",
    "rotulo": "descobriu e nomeou; chefiava o gabinete do ódio",
    "status": "Tércio foi descoberto por Carlos na internet e nomeado assessor; apontado como líder operacional do gabinete do ódio comandado por Carlos.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/filipe-martins-e-tercio-arnaud-quem-sao-os-ex-assessores-diretos-de-bolsonaro-indiciados/"
     },
     {
      "veiculo": "Jornal da Paraíba",
      "url": "https://jornaldaparaiba.com.br/politica/quem-e-tercio-arnaud-ex-assessor-de-bolsonaro-e-alvo-de-operacao-da-policia-federal"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "allan-dos-santos",
    "rotulo": "co-liderança apontada do gabinete do ódio",
    "status": "PF e CPMI das Fake News apontam Allan dos Santos como um dos líderes do gabinete do ódio, também liderado por Carlos Bolsonaro.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/foragido-allan-dos-santos-passa-instrucoes-a-bolsonaristas-em-video"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "jose-matheus-salles-gomes",
    "rotulo": "assessor do grupo de milícia digital",
    "status": "Apontado na CPMI das Fake News como um dos três assessores do grupo de milícia digital chefiado por Carlos Bolsonaro.",
    "fontes": [
     {
      "veiculo": "Yahoo Notícias",
      "url": "https://br.noticias.yahoo.com/membros-do-gabinete-do-odio-admitem-que-trabalhavam-na-comunicacao-do-governo-bolsonaro-115704639.html"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "mateus-matos-diniz",
    "rotulo": "assessor do grupo de milícia digital",
    "status": "Apontado na CPMI das Fake News como um dos três assessores do grupo de milícia digital chefiado por Carlos Bolsonaro.",
    "fontes": [
     {
      "veiculo": "Yahoo Notícias",
      "url": "https://br.noticias.yahoo.com/membros-do-gabinete-do-odio-admitem-que-trabalhavam-na-comunicacao-do-governo-bolsonaro-115704639.html"
     }
    ]
   },
   {
    "de": "tercio-arnaud-tomaz",
    "para": "jose-matheus-salles-gomes",
    "rotulo": "atuavam juntos no gabinete do ódio",
    "status": "Tércio declarou à PF que José Matheus e Mateus Diniz trabalhavam com ele na comunicação ligada à Secom.",
    "fontes": [
     {
      "veiculo": "DOL",
      "url": "https://dol.com.br/noticias/politica/656955/gabinete-do-odio-assessores-de-bolsonaro-admitem-atuacao"
     }
    ]
   },
   {
    "de": "tercio-arnaud-tomaz",
    "para": "mateus-matos-diniz",
    "rotulo": "atuavam juntos no gabinete do ódio",
    "status": "Tércio declarou à PF que Mateus Diniz e José Matheus trabalhavam com ele na comunicação ligada à Secom.",
    "fontes": [
     {
      "veiculo": "DOL",
      "url": "https://dol.com.br/noticias/politica/656955/gabinete-do-odio-assessores-de-bolsonaro-admitem-atuacao"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "filipe-martins",
    "rotulo": "ex-assessor próximo da família indiciado junto",
    "status": "Filipe Martins atuava como assessor próximo da família Bolsonaro e foi indiciado/condenado na trama golpista junto a aliados citados ao lado de Carlos.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/filipe-martins-e-tercio-arnaud-quem-sao-os-ex-assessores-diretos-de-bolsonaro-indiciados/"
     }
    ]
   },
   {
    "de": "carlos-bolsonaro",
    "para": "hans-river-do-nascimento",
    "rotulo": "operador de disparo em massa pró-campanha",
    "status": "Hans River atuou em esquema de disparo em massa de WhatsApp pró-Bolsonaro em 2018, estrutura associada às milícias digitais sob articulação de Carlos.",
    "fontes": [
     {
      "veiculo": "IstoÉ Dinheiro",
      "url": "https://www.istoedinheiro.com.br/empresa-que-atuou-em-campanha-de-bolsonaro-diz-que-ex-funcionario-mentiu-em-cpi/"
     }
    ]
   },
   {
    "de": "allan-dos-santos",
    "para": "carlos-cezar-moretzsohn-rocha",
    "rotulo": "rede de desinformação sobre urnas",
    "status": "Relatórios falsos contra as urnas produzidos por Moretzsohn Rocha eram distribuídos por influenciadores bolsonaristas da milícia digital, ecossistema do qual Allan dos Santos fazia parte.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-10/stf-define-pena-dos-condenados-do-nucleo-de-desinformacao-do-golpe"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "angelo-antonio-ribeiro-da-silva",
    "rotulo": "sócio do Master",
    "status": "Sócio do banco, preso na 1ª fase da Compliance Zero.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "alberto-felix-de-oliveira-neto",
    "rotulo": "superintendente de Tesouraria",
    "status": "Executivo da tesouraria do Master, preso na 1ª fase.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "daniel-monteiro",
    "rotulo": "advogado / arquiteto jurídico do esquema",
    "status": "Advogado que estruturava operações irregulares e operava propina; recebeu dezenas de milhões do Master.",
    "fontes": [
     {
      "veiculo": "Times Brasil / CNBC",
      "url": "https://timesbrasil.com.br/brasil/operacoes-da-pf/daniel-monteiro-advogado-preso-papel-esquema-brb-banco-master/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "andre-felipe-de-oliveira-seixas-maia",
    "rotulo": "vendedor de créditos fictícios",
    "status": "Diretor da Tirreno; teria vendido ~R$ 12 bi em créditos fictícios ao Master.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "manoel-mendes-rodrigues",
    "rotulo": "operador de intimidação",
    "status": "Operador do jogo do bicho; liderou ações intimidatórias do grupo; preso na 6ª fase.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "luiz-philippe-machado-de-moraes-mourao",
    "rotulo": "funcionário / 'Sicário' do núcleo de intimidação",
    "status": "Funcionário de Vorcaro no núcleo de intimidação; preso na 3ª fase, morreu em custódia.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "thiago-miranda",
    "para": "flavio",
    "rotulo": "intermediou contato com Vorcaro",
    "status": "Publicitário que ligou Flávio a Vorcaro e confirmou transferência de ~R$ 62 mi ao Dark Horse.",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/05/flavio-bolsonaro-vorcaro-master-escandalo-filme-dark-horse-azarao/"
     }
    ]
   },
   {
    "de": "felipe-cancado-vorcaro",
    "para": "ciro-nogueira",
    "rotulo": "operou pagamentos ao senador",
    "status": "Apontado pela PF como responsável por operacionalizar pagamentos e participação societária a Ciro Nogueira.",
    "fontes": [
     {
      "veiculo": "Times Brasil / CNBC",
      "url": "https://timesbrasil.com.br/brasil/operacoes-da-pf/rascunho-automaticooperacao-compliance-zero-preso-primo-vorcaro-ciro-nogueira/"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "claudio-castro",
    "rotulo": "transferências do Rioprevidência",
    "status": "Investigado por facilitar aplicações do fundo de previdência do RJ no esquema (8ª fase).",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "ibaneis-rocha",
    "rotulo": "articulou compra do Master pelo BRB",
    "status": "Investigado por promover/articular a tentativa de aquisição do Master pelo BRB.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "michel-temer",
    "rotulo": "escritório recebeu pagamentos",
    "status": "Escritório de Temer recebeu ~R$ 10 mi do Master; alegada 'mediação'.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "henrique-meirelles",
    "rotulo": "consultor remunerado",
    "status": "Recebeu ~R$ 18,5 mi como consultor do Master até jul/2025.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "antonio-de-rueda",
    "rotulo": "escritórios receberam pagamentos",
    "status": "Escritórios ligados ao dirigente do União Brasil receberam ~R$ 6,4 mi do Master/Reag.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_Banco_Master"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "paulo-sergio-de-souza-neves",
    "rotulo": "regulador do BC corrompido",
    "status": "Ex-diretor do BC que autorizou a compra do banco por Vorcaro e teria recebido pagamentos.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "vorcaro",
    "para": "belline-santana",
    "rotulo": "regulador do BC como 'consultor'",
    "status": "Ex-chefe de supervisão bancária do BC que teria atuado como consultor informal de Vorcaro mediante pagamentos.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_Compliance_Zero"
     }
    ]
   },
   {
    "de": "daniel-monteiro",
    "para": "paulo_henrique",
    "rotulo": "ocultou imóveis para o ex-BRB",
    "status": "Estruturou a rede societária que transferiu ~6 imóveis de luxo a Paulo Henrique Costa.",
    "fontes": [
     {
      "veiculo": "Times Brasil / CNBC",
      "url": "https://timesbrasil.com.br/brasil/operacoes-da-pf/daniel-monteiro-advogado-preso-papel-esquema-brb-banco-master/"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "rafael-martins-de-oliveira",
    "rotulo": "financiamento dos kids pretos",
    "status": "Cid afirmou que o dinheiro recebido de Braga Netto seria entregue a Rafael de Oliveira, major 'kid preto'.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-06/cid-diz-que-entregou-dinheiro-em-sacola-pedido-de-braga-netto"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "helio-ferreira-lima",
    "rotulo": "reunião com kids pretos (nov/2022)",
    "status": "Em 12/11/2022, núcleo de militares das Forças Especiais ('kids pretos') reuniu-se na casa de Braga Netto, segundo a PF.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pf-aponta-braga-netto-em-dois-nucleos/"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "mario-fernandes",
    "rotulo": "co-réus / Punhal Verde e Amarelo",
    "status": "Ambos militares condenados na trama golpista; Fernandes é autor do plano 'Punhal Verde e Amarelo' ligado ao mesmo núcleo de ações.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/kids-pretos-tinham-como-alvos-lula-alckmin-e-moraes-veja-o-que-era-o-plano-punhal-verde-e-amarelo/"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "anderson-torres",
    "rotulo": "co-réus núcleo crucial",
    "status": "Ambos condenados pelo STF como integrantes do núcleo crucial da trama golpista.",
    "fontes": [
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "almir-garnier",
    "rotulo": "co-réus núcleo crucial",
    "status": "Ambos condenados pelo STF; Garnier colocou tropas da Marinha à disposição do plano golpista.",
    "fontes": [
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "augusto-heleno",
    "rotulo": "co-réus núcleo crucial",
    "status": "Ambos generais condenados pelo STF como integrantes do núcleo crucial da trama golpista.",
    "fontes": [
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "alexandre-ramagem",
    "rotulo": "co-réus núcleo crucial",
    "status": "Ambos condenados pelo STF como integrantes do núcleo crucial da trama golpista.",
    "fontes": [
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "paulo-sergio-nogueira",
    "rotulo": "co-réus núcleo crucial",
    "status": "Ambos generais condenados pelo STF como integrantes do núcleo crucial da trama golpista.",
    "fontes": [
     {
      "veiculo": "Ministério Público Federal",
      "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/atos-antidemocraticos-stf-condena-todos-os-oito-reus-do-nucleo-principal-da-trama-golpista"
     }
    ]
   },
   {
    "de": "walter-braga-netto",
    "para": "estevam-theophilo",
    "rotulo": "articulação militar do golpe",
    "status": "PF aponta atuação de Braga Netto em dois núcleos; Theophilo (COTER) foi denunciado por aceitar coordenar a força terrestre, mas absolvido.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pf-aponta-braga-netto-em-dois-nucleos/"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "rafael-martins-de-oliveira",
    "rotulo": "delatou / interlocutor operacional",
    "status": "Cid afirmou ter entregue a Rafael de Oliveira o dinheiro que recebeu de Braga Netto para os 'kids pretos'.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2025-06/cid-diz-que-entregou-dinheiro-em-sacola-pedido-de-braga-netto"
     },
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/defesas-de-kids-pretos-concluem-sustentacoes-e-negam-trama-golpista/"
     }
    ]
   },
   {
    "de": "mario-fernandes",
    "para": "rafael-martins-de-oliveira",
    "rotulo": "plano Punhal Verde e Amarelo",
    "status": "Fernandes elaborou o plano operacionalizado por 'kids pretos' como Rafael de Oliveira, do núcleo 3.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/kids-pretos-tinham-como-alvos-lula-alckmin-e-moraes-veja-o-que-era-o-plano-punhal-verde-e-amarelo/"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "helio-ferreira-lima",
    "rotulo": "delatou / amigo de mais de 20 anos",
    "status": "Cid apontou Hélio na delação como autor da Operação Luneta e integrante do núcleo operacional do golpe.",
    "fontes": [
     {
      "veiculo": "Estado de Minas",
      "url": "https://www.em.com.br/politica/platobr/2025/07/7212726-kids-pretos-delatados-por-mauro-cid-negam-crimes-mas-admitem-planos-de-golpe.html"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "rodrigo-bezerra-de-azevedo",
    "rotulo": "delatou / núcleo operacional",
    "status": "Citado na delação e investigação como integrante do grupo dos kids pretos da Operação Copa 2022.",
    "fontes": [
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "wladimir-matos-soares",
    "rotulo": "delatou / núcleo operacional",
    "status": "Apontado como o policial federal do grupo executor das ações violentas do golpe.",
    "fontes": [
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "bernardo-romao-correa-netto",
    "rotulo": "delatou / coordenação dos atos",
    "status": "Citado na trama como coronel articulador do núcleo operacional do golpe.",
    "fontes": [
     {
      "veiculo": "Conjur",
      "url": "https://www.conjur.com.br/2025-nov-18/supremo-condena-nove-integrantes-do-nucleo-3-da-trama-golpista/"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "mario-fernandes",
    "rotulo": "delação / plano de assassinato",
    "status": "Delação de Cid embasou a acusação sobre o plano Punhal Verde e Amarelo elaborado por Mário Fernandes.",
    "fontes": [
     {
      "veiculo": "Diário do Grande ABC",
      "url": "https://www.dgabc.com.br/Noticia/4257436/trama-golpista-pgr-pede-a-condenacao-de-integrantes-do-nucleo-3-"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "marcelo-costa-camara",
    "rotulo": "co-indiciado / logística das joias",
    "status": "Ambos indiciados pela PF no caso das joias entre os 12 acusados.",
    "fontes": [
     {
      "veiculo": "A Tarde",
      "url": "https://atarde.com.br/politica/caso-das-joias-saiba-quem-sao-os-aliados-de-bolsonaro-indiciados-1277230"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "osmar-crivelatti",
    "rotulo": "co-indiciado / movimentação financeira",
    "status": "Ambos indiciados pela PF no caso das joias por lavagem de dinheiro.",
    "fontes": [
     {
      "veiculo": "A Tarde",
      "url": "https://atarde.com.br/politica/caso-das-joias-saiba-quem-sao-os-aliados-de-bolsonaro-indiciados-1277230"
     },
     {
      "veiculo": "Gazeta do Povo",
      "url": "https://www.gazetadopovo.com.br/republica/operacao-pf-mauro-cid-pai-alvo-presentes-oficiais-recebidos-governo/"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "fabio-wajngarten",
    "rotulo": "co-indiciado no caso das joias",
    "status": "Ambos indiciados pela PF no caso das joias entre os 12 acusados.",
    "fontes": [
     {
      "veiculo": "Correio Braziliense",
      "url": "https://www.correiobraziliense.com.br/politica/2024/07/6891946-caso-das-joias-saiba-por-quais-crimes-bolsonaro-e-acusado-e-possiveis-penas.html"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "jairo-moreira-da-silva",
    "rotulo": "ordenou recuperação das joias",
    "status": "Cid determinou que o suboficial usasse voo da FAB para tentar recuperar joias em Guarulhos.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/bolsonaro-veja-a-cronologia-do-caso-das-joias-sauditas/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "ronald-paulo-alves-pereira",
    "rotulo": "sócio na milícia",
    "status": "Major Ronald, miliciano de Jacarepaguá, apontado como sócio do clã Brazão e condenado pelos homicídios.",
    "fontes": [
     {
      "veiculo": "Agência Pública",
      "url": "https://apublica.org/2026/02/irmaos-brazao-a-condenacao-por-matar-marielle-franco/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "rivaldo-barbosa",
    "rotulo": "obstrução paga",
    "status": "STF entendeu que Rivaldo recebeu dinheiro da milícia dos Brazão para sabotar as investigações.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/voto-ministros-inocentar-rivaldo-barbosa-mandante-marielle"
     }
    ]
   },
   {
    "de": "maxwell-simoes-correa",
    "para": "edilson-barbosa-dos-santos-orelha",
    "rotulo": "destruição do veículo",
    "status": "O Cobalt usado no crime foi desmanchado no ferro-velho de Orelha para apagar provas.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Assassinato_de_Marielle_Franco"
     }
    ]
   },
   {
    "de": "rivaldo-barbosa",
    "para": "giniton-lages",
    "rotulo": "co-obstrutores",
    "status": "Denunciados juntos pela PGR por associação criminosa e obstrução; atuaram para sabotar a investigação.",
    "fontes": [
     {
      "veiculo": "Tribuna do Sertão",
      "url": "https://www.tribunadosertao.com.br/rj-em-foco/2026/02/13/858061-mpf-denuncia-delegados-rivaldo-barbosa-e-giniton-lages-por-obstrucao-de-justica-no-caso-marielle"
     }
    ]
   },
   {
    "de": "giniton-lages",
    "para": "marco-antonio-de-barros-pinto",
    "rotulo": "co-obstrutores",
    "status": "Denunciados juntos pela PGR por obstrução e associação criminosa na investigação do caso Marielle.",
    "fontes": [
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/brasil/caso-marielle-moraes-recebe-denuncia-contra-policiais-por-obstrucao"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "marcus-vinicius-reis-dos-santos-fininho",
    "rotulo": "sócio na grilagem",
    "status": "Fininho, miliciano de Jacarepaguá, identificado pela PGR como sócio do clã Brazão na grilagem.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "laerte-silva-de-lima",
    "rotulo": "sócio na grilagem",
    "status": "Laerte, miliciano de Jacarepaguá, identificado pela PGR como sócio do clã Brazão na grilagem.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "de": "domingos-brazao",
    "para": "edmilson-da-silva-de-oliveira-macale",
    "rotulo": "sócio na grilagem",
    "status": "Macalé, miliciano de Jacarepaguá, identificado pela PGR como sócio do clã Brazão na grilagem.",
    "fontes": [
     {
      "veiculo": "ICL Notícias",
      "url": "https://iclnoticias.com.br/pgr-irmaos-brazao-aliaram-milicia-grilagem-voto/"
     }
    ]
   },
   {
    "de": "robson-calixto-fonseca",
    "para": "instituto-de-formacao-profissional-jose-ca",
    "rotulo": "captou verbas para a ONG",
    "status": "PF aponta Peixe como coordenador do repasse de emendas ao Ifop, ONG ligada à milícia dos Brazão.",
    "fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-emenda-ong-milicia-brazao-marielle/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "instituto-de-formacao-profissional-jose-ca",
    "rotulo": "emenda parlamentar",
    "status": "Senador direcionou emenda de R$ 199 mil ao Ifop, hoje investigada pela PF.",
    "fontes": [
     {
      "veiculo": "Brasil de Fato",
      "url": "https://www.brasildefato.com.br/2026/05/20/pf-apura-emenda-de-flavio-bolsonaro-para-ong-suspeita-de-esquema-comandado-pelos-irmaos-brazao-condenados-pela-morte-de-marielle-franco/"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "robson-calixto-fonseca",
    "rotulo": "uma assessora do gabinete dele tratou com Peixe a emenda ao Ifop (2023), segundo a PF; nenhuma fonte diz que Flávio sabia quem era Peixe",
    "status": "PF identificou troca de mensagens entre Peixe e assessora de Flávio um mês antes do repasse ao Ifop.",
    "fontes": [
     {
      "veiculo": "Revista Fórum",
      "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-emenda-ong-milicia-brazao-marielle/"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "castor-de-andrade",
    "rotulo": "sobrinho e herdeiro da banca",
    "status": "Assumiu a banca do tio após sua morte em 1997, deflagrando guerra de sucessão.",
    "fontes": [
     {
      "veiculo": "ND Mais",
      "url": "https://ndmais.com.br/seguranca/quem-e-rogerio-andrade-sobrinho-de-castor-e-dono-da-mocidade-acusado-de-comandar-mafia/"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "gilmar-eneas-lisboa",
    "rotulo": "cúmplice no homicídio de Iggnácio",
    "status": "Denunciado junto com Rogério; teria monitorado a vítima até a execução.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "rodrigo-da-silva-das-neves",
    "rotulo": "executor a mando dele",
    "status": "Apontado pela Justiça como executor da morte de Iggnácio a mando de Rogério; condenado em abril/2026.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "pedro-emanuel-d-onofre-andrade-silva-corde",
    "rotulo": "executor a mando dele",
    "status": "Réu acusado de participar da execução de Iggnácio a mando de Rogério; aguarda novo júri.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "de": "rogerio-de-andrade",
    "para": "otto-samuel-d-onofre-andrade-silva-cordeir",
    "rotulo": "executor a mando dele",
    "status": "Réu acusado de participar da execução de Iggnácio a mando de Rogério; aguarda novo júri.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "de": "pedro-emanuel-d-onofre-andrade-silva-corde",
    "para": "otto-samuel-d-onofre-andrade-silva-cordeir",
    "rotulo": "irmãos e co-réus",
    "status": "Irmãos réus no mesmo processo pela execução de Iggnácio.",
    "fontes": [
     {
      "veiculo": "Agência Brasil",
      "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-04/juri-condena-ex-pm-pelo-assassinato-do-bicheiro-fernando-iggnacio"
     }
    ]
   },
   {
    "de": "adriano",
    "para": "waldemir-paes-garcia-maninho",
    "rotulo": "segurança da família do bicheiro",
    "status": "Atuou desde 2006 como segurança de parentes de Maninho, dentro da estrutura do jogo do bicho.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     }
    ]
   },
   {
    "de": "jose-luiz-de-barros-lopes",
    "para": "waldemir-paes-garcia-maninho",
    "rotulo": "genro do bicheiro",
    "status": "Casado com uma das filhas de Maninho; integrava a disputa interna pelo controle da banca.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Adriano_da_N%C3%B3brega"
     }
    ]
   },
   {
    "de": "bernardo_bello",
    "para": "waldemir-paes-garcia-maninho",
    "rotulo": "ex-genro e sucessor da banca",
    "status": "Casou-se com Tamara Garcia, filha de Maninho, e assumiu o controle de pontos do bicho após a morte do sogro em 2004.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/saiba-quem-e-o-bicheiro-bernardo-bello/"
     }
    ]
   },
   {
    "de": "fernando-iggnacio",
    "para": "castor-de-andrade",
    "rotulo": "ex-genro do patriarca",
    "status": "Genro de Castor de Andrade, disputava com Rogério o espólio da banca há mais de uma década.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/nacional/sudeste/rj/acusados-pela-morte-de-fernando-iggnacio-vao-a-juri-popular/"
     }
    ]
   },
   {
    "de": "wassef",
    "para": "precision-watches-willow-grove-pa",
    "rotulo": "recomprou Rolex na loja",
    "status": "Wassef pagou R$ 250 mil, na cotação da época segundo o Metrópoles, para recomprar na loja da Pensilvânia o Rolex saudita vendido por Mauro Cid.",
    "fontes": [
     {
      "veiculo": "O Antagonista",
      "url": "https://oantagonista.com.br/brasil/wassef-recomprou-rolex-apos-caso-de-joias-chegar-no-tcu/"
     },
     {
      "veiculo": "Metrópoles",
      "url": "https://www.metropoles.com/sao-paulo/envolvido-na-recompra-de-rolex-por-r-250-mil-wassef-acumula-dividas"
     }
    ]
   },
   {
    "de": "mauro-cesar-barbosa-cid",
    "para": "precision-watches-willow-grove-pa",
    "rotulo": "vendeu Rolex na loja",
    "status": "Mauro Cid viajou de Miami a Willow Grove (PA) e vendeu o Rolex saudita à loja em junho de 2022.",
    "fontes": [
     {
      "veiculo": "CNN Brasil",
      "url": "https://www.cnnbrasil.com.br/politica/cid-vendeu-rolex-e-wassef-o-recomprou-para-entregar-ao-tcu-diz-pf/"
     }
    ]
   },
   {
    "de": "bento-costa-lima-leite-de-albuquerque-juni",
    "para": "marcos-andre-dos-santos-soeiro",
    "rotulo": "ministro e assessor transportador",
    "status": "Soeiro, assessor de Bento Albuquerque, transportou o kit de joias na mochila e passou pela alfândega sem declarar.",
    "fontes": [
     {
      "veiculo": "Wikipédia",
      "url": "https://pt.wikipedia.org/wiki/Caso_das_joias_envolvendo_Jair_Bolsonaro"
     }
    ]
   },
   {
    "de": "flavio",
    "para": "carlos-bolsonaro",
    "rotulo": "irmão de Flávio; vereador",
    "status": "fato",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "luiza_paes",
    "rotulo": "ex-assessora de Flávio na Alerj; devolveu salário, segundo o MP-RJ; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "nathalia-queiroz",
    "rotulo": "lotada no gabinete de Flávio (Alerj), apontada pelo MP-RJ como fantasma; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "evelyn-queiroz",
    "rotulo": "lotada no gabinete de Flávio (Alerj), apontada pelo MP-RJ como fantasma; denúncia arquivada em 2022",
    "status": "arquivado",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "ronald-paulo-alves-pereira",
    "rotulo": "homenageado na Alerj por indicação dele em 2004 (moção honrosa), 14 anos antes do crime",
    "status": "fato",
    "fontes": [
     {
      "veiculo": "IstoÉ",
      "url": "https://istoe.com.br/milicianos-presos-no-rio-foram-homenageados-por-flavio-bolsonaro-na-alerj"
     },
     {
      "veiculo": "Notícias ao Minuto (a partir de O Globo)",
      "url": "https://www.noticiasaominuto.com.br/politica/850505/flavio-bolsonaro-homenageou-milicianos-alvos-de-operacao"
     }
    ]
   },
   {
    "de": "jair",
    "para": "michelle",
    "rotulo": "esposa de Jair; recebeu cheques de Queiroz",
    "status": "fato",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "rodrigo-roca",
    "rotulo": "Advogado de Flávio Bolsonaro na rachadinha",
    "status": "fato",
    "fontes": []
   },
   {
    "de": "flavio",
    "para": "luciana-pires",
    "rotulo": "Advogada de Flávio Bolsonaro na rachadinha",
    "status": "fato",
    "fontes": []
   }
  ]
 },
 "timeline": [
  {
   "data": "2003",
   "titulo": "Flávio concede moção de louvor a Adriano da Nóbrega na Alerj",
   "tema": "milicia",
   "descricao": "Como deputado estadual, Flávio Bolsonaro homenageou o PM Adriano da Nóbrega, depois apontado como chefe do Escritório do Crime.",
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/"
    }
   ]
  },
  {
   "data": "2005-09",
   "titulo": "Flávio concede Medalha Tiradentes a Adriano da Nóbrega, então preso",
   "tema": "milicia",
   "descricao": "A honraria, máxima da Alerj, foi dada a Nóbrega enquanto ele estava preso por homicídio. A medalha foi posteriormente revogada (2020).",
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/"
    }
   ]
  },
  {
   "data": "2018-12",
   "titulo": "COAF aponta R$ 1,2 milhão em movimentação atípica de Queiroz",
   "tema": "queiroz",
   "descricao": "Relatórios de inteligência financeira sobre o ex-assessor Fabrício Queiroz deram origem à apuração da rachadinha no gabinete de Flávio na Alerj.",
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
    }
   ]
  },
  {
   "data": "2020-02-09",
   "titulo": "Adriano da Nóbrega é morto em operação policial na Bahia",
   "tema": "milicia",
   "descricao": "O apontado chefe do Escritório do Crime morreu em ação da polícia; laudos alimentaram suspeitas de 'queima de arquivo'. A Alerj revogou sua Medalha Tiradentes.",
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/blogs/blog-do-rovai/adriano-nobrega-rodrigo-bacelar-amigos-flavio-bolsonaro/"
    }
   ]
  },
  {
   "data": "2020-06-18",
   "titulo": "Queiroz é preso em Atibaia, em imóvel do advogado Frederick Wassef",
   "tema": "queiroz",
   "descricao": "O ex-assessor de Flávio foi encontrado em propriedade de Wassef, advogado da família Bolsonaro.",
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/queiroz-foi-preso-em-imovel-de-frederick-wassef-advogado-de-flavio-bolsonaro/"
    }
   ]
  },
  {
   "data": "2020-10",
   "titulo": "MP-RJ denuncia Flávio, Queiroz e mais 15 por organização criminosa",
   "tema": "rachadinha",
   "descricao": "A denúncia, assinada pelo PGJ Eduardo Gussem, imputa peculato, lavagem, apropriação indébita e organização criminosa, com base no esquema de rachadinha de 2007 a 2018.",
   "fontes": [
    {
     "veiculo": "ConJur",
     "url": "https://www.conjur.com.br/2020-nov-04/mp-denuncia-flavio-bolsonaro-esquema-rachadinha-alerj/"
    }
   ]
  },
  {
   "data": "2021-02",
   "titulo": "Flávio compra mansão de ~R$ 6 milhões no Lago Sul (Brasília)",
   "tema": "mansao",
   "descricao": "O imóvel de R$ 5,97 mi, várias vezes o patrimônio declarado em 2018 (R$ 1,74 mi), teve R$ 3,1 mi financiados pelo BRB.",
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-quando-brb-deu-polemico-financiamento-de-r-59-milhoes-a-flavio-bolsonaro"
    }
   ]
  },
  {
   "data": "2021-11",
   "titulo": "STF anula 4 de 5 relatórios do COAF contra Flávio",
   "tema": "juridico",
   "descricao": "A 2ª Turma considerou ilegal o compartilhamento direto de dados entre MP-RJ e COAF antes de autorização judicial, configurando 'investigação disfarçada'.",
   "fontes": [
    {
     "veiculo": "STF",
     "url": "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=477496&ori=1"
    }
   ]
  },
  {
   "data": "2021-11-09",
   "titulo": "STJ anula decisões da Justiça do RJ por foro de deputado estadual",
   "tema": "juridico",
   "descricao": "Os atos do juiz Flávio Itabaiana foram anulados por incompetência (foro/mandatos cruzados), por 4 a 1.",
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2021/11/10/stj-anula-todas-as-decisoes-da-justica-do-rj-contra-flavio-bolsonaro-no-caso-das-rachadinhas/"
    }
   ]
  },
  {
   "data": "2022-05",
   "titulo": "Órgão Especial do TJ-RJ arquiva a denúncia da rachadinha",
   "tema": "juridico",
   "descricao": "O arquivamento se deu por anulação de provas e prescrição de parte dos fatos.",
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
    }
   ]
  },
  {
   "data": "2024-07",
   "titulo": "Flávio quita a mansão com aportes atípicos de R$ 3,4 milhões",
   "tema": "mansao",
   "descricao": "Após o STF consolidar as anulações na rachadinha, Flávio fez seis pagamentos extras somando R$ 3,4 mi para quitar antecipadamente o financiamento do BRB.",
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/flavio-bolsonaro-paga-34-milhoes-para-quitar-mansao-comprada-no-lago-sul/"
    }
   ]
  },
  {
   "data": "2025-02",
   "titulo": "Gilmar Mendes (STF) nega recursos do MP e mantém arquivamento da rachadinha",
   "tema": "juridico",
   "descricao": "O ministro apontou perda de prazo do MP-RJ e foro pacificado; o caso ficou sem perspectiva de reabertura.",
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/o-que-aconteceu-com-o-caso-da-rachadinha-de-flavio-bolsonaro-suposto-candidato-em-2026/"
    }
   ]
  },
  {
   "data": "2025-11",
   "titulo": "Vorcaro (Banco Master) e ex-presidente do BRB são presos na Operação Compliance Zero",
   "tema": "master",
   "descricao": "Daniel Vorcaro e Paulo Henrique Costa, que aprovou o financiamento da mansão de Flávio, foram presos pela PF.",
   "fontes": [
    {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/ceo-brb-preso-financiou-r-59-milhoes-mansao-flavio-bolsonaro/"
    }
   ]
  },
  {
   "data": "2026-03-19",
   "titulo": "MP-RJ denuncia Raimunda Veras (mãe de Adriano) por lavagem do jogo do bicho",
   "tema": "milicia",
   "descricao": "A ex-assessora de Flávio na Alerj é acusada de lavar dinheiro ligado ao jogo do bicho; a denúncia também menciona salários sem trabalho no gabinete.",
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/politica/judiciario/2026/3/19/mp-denuncia-ex-assessora-de-flavio-bolsonaro-por-esquema-de-lavagem-de-dinheiro-de-filho-miliciano"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/"
    }
   ]
  },
  {
   "data": "2026-05-13",
   "titulo": "Intercept revela áudios: Flávio negociou R$ 134 mi com Vorcaro para filme sobre Jair",
   "tema": "master",
   "descricao": "Segundo a reportagem, Flávio pediu recursos a Vorcaro para o filme 'Dark Horse'; ao menos R$ 61 mi teriam sido liberados.",
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/moraes-pede-parecer-da-pgr-sobre-incluir-jair-e-flavio-em-inquerito"
    }
   ]
  },
  {
   "data": "2026-05-26",
   "titulo": "Moraes pede parecer da PGR sobre incluir Jair e Flávio em inquérito",
   "tema": "juridico",
   "descricao": "A pedido de Lindbergh Farias (PT-RJ) e após a revelação da relação Flávio-Vorcaro, Moraes deu 5 dias para a PGR opinar sobre a inclusão dos dois no inquérito ligado a atos de Eduardo nos EUA.",
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-05/moraes-pede-parecer-da-pgr-sobre-incluir-jair-e-flavio-em-inquerito"
    }
   ]
  },
  {
   "data": "2026-06-01",
   "titulo": "Flávio pede ao STF que declare Moraes suspeito no caso Master",
   "tema": "juridico",
   "descricao": "A defesa alega suposta relação financeira do banco com o escritório da esposa de Moraes (R$ 80 mi) e pede relatoria com André Mendonça.",
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/6/5/flavio-bolsonaro-pede-stf-para-declarar-moraes-suspeito-em-acoes-sobre-vorcaro-e-o-banco-master"
    },
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/republica/flavio-pede-que-moraes-seja-declarado-suspeito-para-julgar-caso-master/"
    }
   ]
  },
  {
   "data": "2026-06-16",
   "titulo": "STF condena Eduardo Bolsonaro a 4 anos e 2 meses por coação no curso do processo",
   "tema": "familia",
   "descricao": "Condenacao do irmao a 4 anos e 2 meses por coacao no curso do processo. Flavio reagiu chamando a decisao de 'grande injustica'.",
   "fontes": [
    {
     "veiculo": "MPF / Procuradoria-Geral da República",
     "url": "https://www.mpf.mp.br/o-mpf/unidades/procuradoria-geral-da-republica-pgr/noticias/stf-condena-eduardo-bolsonaro-a-quatro-anos-e-dois-meses-de-prisao-pelo-crime-de-coacao-no-curso-do-processo"
    },
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/por-unanimidade-stf-condena-eduardo-bolsonaro-no-caso-do-tarifaco"
    }
   ]
  },
  {
   "data": "2026-06-26",
   "titulo": "PF conclui em relatório final que Flávio Bolsonaro cometeu calúnia contra Lula",
   "tema": "juridico",
   "descricao": "A Policia Federal concluiu que houve calunia contra Lula em publicacao do senador; o caso seguiu para a PGR decidir sobre denuncia.",
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-06/pf-conclui-que-flavio-bolsonaro-cometeu-calunia-contra-lula-nas-redes"
    }
   ]
  },
  {
   "data": "2026-07-13",
   "titulo": "Moraes reconhece trânsito em julgado e manda executar as penas dos cinco condenados no caso Marielle",
   "tema": "milicia",
   "descricao": "Encerrou-se o caso Marielle Franco: penas em execucao para os cinco condenados, entre eles os irmaos Brazao.",
   "fontes": [
    {
     "veiculo": "Agência Brasil",
     "url": "https://agenciabrasil.ebc.com.br/justica/noticia/2026-07/caso-marielle-moraes-determina-cumprimento-imediato-de-penas"
    },
    {
     "veiculo": "Migalhas",
     "url": "https://www.migalhas.com.br/quentes/460306/moraes-determina-cumprimento-das-penas-de-condenados-no-caso-marielle"
    }
   ]
  },
  {
   "data": "2026-07-13",
   "titulo": "Moraes suspende por 90 dias visitas de Flávio ao pai e manda MPE apurar propaganda antecipada",
   "tema": "juridico",
   "descricao": "Alem de suspender as visitas, o ministro mandou o Ministerio Publico Eleitoral apurar propaganda antecipada.",
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/moraes-proibe-flavio-de-ter-contato-com-bolsonaro-por-90-dias/"
    },
    {
     "veiculo": "Congresso em Foco",
     "url": "https://www.congressoemfoco.com.br/noticia/120449/moraes-ve-propaganda-antecipada-em-carta-de-bolsonaro-e-envia-ao-mp"
    }
   ]
  },
  {
   "data": "2026-07-22",
   "titulo": "Mendonça autoriza inquérito sobre o financiamento de 'Dark Horse'; Flávio Bolsonaro vira investigado",
   "tema": "master",
   "descricao": "O ponto de virada do caso Master: Flavio passou formalmente a investigado por causa dos repasses de Vorcaro ao filme sobre o pai.",
   "fontes": [
    {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/igor-gadelha/mendonca-autorizou-investigacao-de-flavio-um-dia-apos-parecer-da-pgr"
    },
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/07/23/mendonca-autoriza-investigacao-da-pf-sobre-financiamento-de-cinebiografia-de-jair-bolsonaro/"
    }
   ]
  },
  {
   "data": "2026-07-25",
   "titulo": "PL realiza convenção nacional em 25 de julho para lançar Flávio Bolsonaro à Presidência",
   "tema": "eleicoes",
   "descricao": "O PL oficializou a candidatura de Flavio a Presidencia. A convencao exibiu um video feito com IA simulando Jair Bolsonaro.",
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/7/25/pl-faz-convencao-neste-sabado-para-confirmar-flavio-bolsonaro-ao-planalto-em-chapa-ainda-indefinida"
    },
    {
     "veiculo": "Wikipedia (Flávio Bolsonaro 2026 presidential campaign)",
     "url": "https://en.wikipedia.org/wiki/Fl%C3%A1vio_Bolsonaro_2026_presidential_campaign"
    }
   ]
  },
  {
   "data": "2026-08-05",
   "titulo": "Flávio Bolsonaro anuncia Alfredo Gaspar (PL-AL) como vice em chapa formada só pelo PL",
   "tema": "eleicoes",
   "descricao": "Chapa formada so pelo PL, sem coligacao — o que depois reduziu o tempo de horario eleitoral.",
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/eleicoes/flavio-anuncia-alfredo-gaspar-como-vice-em-chapa-pura-a-presidencia/"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/ao-vivo-flavio-bolsonaro-anuncia-vice-para-disputa-a-presidencia/"
    }
   ]
  },
  {
   "data": "2026-08-13",
   "titulo": "Flávio declara R$ 8,186 milhões ao TSE, 4,7 vezes o patrimônio informado em 2018",
   "tema": "patrimonio",
   "descricao": "No registro da candidatura, o patrimonio declarado chegou a 4,7 vezes o de 2018. O maior item e a casa no Lago Sul, de R$ 6,2 milhoes.",
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/"
    },
    {
     "veiculo": "InfoMoney",
     "url": "https://www.infomoney.com.br/politica/flavio-bolsonaro-registra-candidatura-a-presidente-e-declara-r-81-milhoes-em-bens/"
    }
   ]
  },
  {
   "data": "2026-08-18",
   "titulo": "PF abre inquérito para apurar a filiação fraudulenta de Flávio ao partido Missão",
   "tema": "juridico",
   "descricao": "A pedido do TSE, a PF investiga como a filiacao do senador foi alterada para o partido Missao as vesperas do registro.",
   "fontes": [
    {
     "veiculo": "O Tempo",
     "url": "https://www.otempo.com.br/eleicoes/2026/presidentes/2026/8/19/policia-federal-comeca-a-investigar-filiacao-fraudulenta-de-flavio-ao-missao"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes/tse-restabelece-filiacao-de-flavio-ao-pl-e-viabiliza-candidatura/"
    }
   ]
  },
  {
   "data": "2026-09-02",
   "titulo": "PT protocola representação no Conselho de Ética e pede a cassação de Flávio Bolsonaro por caso Dark Horse",
   "tema": "senado",
   "descricao": "Pedido de cassacao do mandato por quebra de decoro, com base no caso do filme financiado por Vorcaro.",
   "fontes": [
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/pt-aciona-conselho-de-etica-do-senado-contra-flavio-bolsonaro/"
    },
    {
     "veiculo": "ND Mais",
     "url": "https://ndmais.com.br/politica/pt-pede-cassacao-de-flavio-bolsonaro-no-conselho-de-etica-do-senado-por-financiamento-do-filme-dark-horse-com-pagamentos-de-vorcaro/"
    }
   ]
  },
  {
   "data": "2026-09-09",
   "titulo": "Mendonça homologa delação de operador que fez sete repasses ao fundo ligado ao filme sobre Bolsonaro",
   "tema": "master",
   "descricao": "A delacao homologada descreve sete repasses ao fundo ligado ao filme — a primeira colaboracao efetivada no caso.",
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/09/09/mendonca-aceita-delacao-de-empresario-que-enviou-r-60-milhoes-a-fundo-ligado-a-eduardo-bolsonaro/"
    },
    {
     "veiculo": "Mais Minas",
     "url": "https://maisminas.com.br/brasil/mendonca-homologa-delacao-sobre-financiamento-do-filme-sobre-bolsonaro/"
    }
   ]
  },
  {
   "data": "2026-09-11",
   "titulo": "Sigilo levantado: Flávio é investigado desde julho por corrupção, lavagem e evasão; PF o aponta como 'interlocutor direto' de Vorcaro",
   "tema": "master",
   "descricao": "Com o sigilo retirado por Mendonça, o inquérito mostra os crimes apurados — corrupção, lavagem e evasão — e a PF o descreve como interlocutor direto do banqueiro.",
   "fontes": [
    {
     "veiculo": "ICL Notícias",
     "url": "https://iclnoticias.com.br/pf-investiga-flavio-bolsonaro-esquema-vorcaro/"
    },
    {
     "veiculo": "Jornal do Brasil",
     "url": "https://www.jb.com.br/brasil/justica/2026/09/1060884-mendonca-incluiu-flavio-bolsonaro-como-investigado-no-caso-dark-horse.html"
    }
   ]
  },
  {
   "data": "2026-09-11",
   "titulo": "PGR pediu à PF apurar se Flávio atuou no Senado a favor de Vorcaro e vê 'promessa de apoio ou interferências'",
   "tema": "master",
   "descricao": "A PGR quer saber se houve promessa de apoio ou interferência no Senado em favor do Banco Master.",
   "fontes": [
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/politica/dark-horse-pgr-pediu-levantamento-sobre-atuacao-de-flavio-bolsonaro-no-congresso/"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/pgr-suspeita-que-flavio-atuou-no-senado-em-defesa-de-vorcaro/"
    }
   ]
  },
  {
   "data": "2026-09-11",
   "titulo": "Datafolha (8–10/09): Lula 39% x Flávio 35% no 1º turno; 2º turno 46% x 44%, empate técnico",
   "tema": "eleicoes",
   "descricao": "Primeira grande pesquisa da campanha oficial: empate técnico no 2º turno.",
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/datafolha-presidente-setembro-2026-2/"
    }
   ]
  },
  {
   "data": "2026-09-12",
   "titulo": "PF detalha mensagens de Flávio a Vorcaro: pedido de R$ 131 mi, cobranças de atraso e fundo 'operacionalmente inerte' por 4 anos",
   "tema": "master",
   "descricao": "Mensagens do próprio celular, no relatório da PF: pedido de R$ 131 milhões e cobranças de parcelas atrasadas.",
   "fontes": [
    {
     "veiculo": "CNN Brasil",
     "url": "https://www.cnnbrasil.com.br/politica/pf-mostra-conversas-de-flavio-com-vorcaro-sobre-recursos-para-dark-horse/"
    },
    {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-justica/relatorio-da-pf-sobre-dark-horse-contraria-versao-de-flavio/"
    }
   ]
  },
  {
   "data": "2026-09-14",
   "titulo": "Quaest (10–13/09): Lula 36% x Flávio 31%; no 2º turno Flávio 42% x Lula 40%, empate técnico",
   "tema": "eleicoes",
   "descricao": "Pela primeira vez na série da Quaest, Flávio aparece numericamente à frente no 2º turno.",
   "fontes": [
    {
     "veiculo": "Brasil de Fato",
     "url": "https://www.brasildefato.com.br/2026/09/14/pesquisa-quaest-lula-registra-36-e-flavio-bolsonaro-alcanca-31-no-primeiro-turno/"
    },
    {
     "veiculo": "CartaCapital",
     "url": "https://www.cartacapital.com.br/cartaexpressa/a-nova-pesquisa-quaest-sobre-lula-x-flavio-bolsonaro-a-menos-de-duas-semanas-do-1o-turno/"
    }
   ]
  },
  {
   "data": "2026-09-17",
   "titulo": "AtlasIntel (11–16/09): Lula 44,1% x Flávio 41,7% no 1º turno; 2º turno Flávio 47,2% x Lula 46,8%",
   "tema": "eleicoes",
   "descricao": "A três semanas do 1º turno, as pesquisas convergem para um 2º turno decidido no detalhe.",
   "fontes": [
    {
     "veiculo": "Gazeta do Povo",
     "url": "https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/atlasintel-presidente-setembro-2026-2/"
    }
   ]
  }
 ],
 "patrimonioTSE": {
  "nota": "Patrimônio total declarado à Justiça Eleitoral em cada candidatura (valores nominais). Do Senado (2018) à corrida presidencial (2026), o salto é de 4,7 vezes — cerca de 211% de alta real, já descontada a inflação. O valor de 2026 é o do registro de candidatura (13/08/2026), noticiado por Poder360 e InfoMoney; o de 2014 é aproximado.",
  "fonte": {
   "veiculo": "TSE — Dados Abertos (bens de candidatos)",
   "url": "https://dadosabertos.tse.jus.br/"
  },
  "pontos": [
   {
    "ano": 2014,
    "valor": 714000,
    "cargo": "dep. estadual",
    "obs": "valor aproximado da série declarada"
   },
   {
    "ano": 2016,
    "valor": 1454218.06,
    "cargo": "cand. a prefeito"
   },
   {
    "ano": 2018,
    "valor": 1741758.15,
    "cargo": "senador (eleito)"
   },
   {
    "ano": 2026,
    "valor": 8186000,
    "cargo": "cand. à Presidência",
    "obs": "R$ 6,2 mi só na casa do Lago Sul"
   }
  ]
 },
 "senadoStats": {
  "nota": "Atividade no Senado (cód. 5894), apurada em 09/09/2026: muitas relatorias e votações, mas só 1 projeto de autoria virou lei. Mantém o mandato durante a campanha — votou pela última vez em 03/09/2026.",
  "fonte": {
   "veiculo": "Senado Federal — Dados Abertos",
   "url": "https://www25.senado.leg.br/web/senadores/senador/-/perfil/5894"
  },
  "itens": [
   {
    "label": "Relatorias",
    "valor": "188"
   },
   {
    "label": "Votações",
    "valor": "1.142"
   },
   {
    "label": "Projetos de autoria aprovados",
    "valor": "1"
   }
  ]
 },
 "noticiasFallback": [
  {
   "titulo": "TSE reconhece admissibilidade de ação de Flávio Bolsonaro contra Lula",
   "fonte": "Consultor Jurídico",
   "data": "2026-09-20",
   "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNS1N0em1hUDkySEMydjZ0T3B4QS1BTWFXWklrenZFZE5la091YmswYnF0Tk5qbGZRQ0EyTHZKcEdNV3BnUEZfTFhkUWJlUGppTEVOUnVxR1NPQUphemJXNGlHWTF1YTBMY2ZtaDRUZVNNR3doMWNOcFEyQVBjbEEteU0zY3BTRG5CcDFRSnRST2ZUTHE4S2xHbjJTam9vZzRfTTVUU0Qtaw?oc=5"
  },
  {
   "titulo": "FLÁVIO USOU IMÓVEL QUE PERTENCEU A CUNHADO DE VORCARO DURANTE CAMPANHA EM SÃO PAULO",
   "fonte": "revista piauí",
   "data": "2026-09-16",
   "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQTcwQktyV0xTalRGbzItaWlzNXJHNXM3Vk9KNncyY1ZsWXNnN2pDVC1xc3R5YTJ1WVFvY0FkdnpnWFJwNHJEbzVKcUs0MWlEd0F5N2hCcnF6RndsSGN0c3ZSTlBFblVySFhURTBTLWlvd09ubjVjNXJEakE1bDFBTUx2dEFDbTNqU3VDVFZrZzRrbzdBaDk2ekUyV3A?oc=5"
  },
  {
   "titulo": "O caminho para Flávio tirar Bolsonaro da prisão começou com o julgamento do STF",
   "fonte": "JOTA Info",
   "data": "2026-09-16",
   "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQX01rME94WnE1d1BrV3pzcFhaaEIzZmFwdUc2MlVJaDcydWlFMXBaeHBIUFVXbGZXZ0xjRFR4am1nZ0dNb1pYRVRnYWlaMHFyUzNUOUNsb1p4eTY1TWZzQnhVM0U2OVA3djFfU3dScGp0ejdtS2NUbExpYkZfN2JLWEhNTnpxZUcycy10R1BCRklpV3RiZW4yeWRGLWNhVVgxZ2h3QmNyZXZ3U0JGUkVDZnJ3dW9KeEViSF9RS2JZNXItZw?oc=5"
  },
  {
   "titulo": "‘Flávio é Vorcaro’: Levante Popular da Juventude denuncia ‘aliança criminosa’ entre ex-banqueiro e clã Bolsonaro em prédio símbolo do Master",
   "fonte": "Brasil de Fato",
   "data": "2026-09-16",
   "url": "https://news.google.com/rss/articles/CBMiiwJBVV95cUxPdDN1cHcwT3FvQ0tYeXktZnVpS2VMSFBLOXg3Vkk0N05QbERKWUtnYVkzeUdNQVhQbUFnVDA4VGxVcUpnRVlLLW1uaTEzWXA2VW5SQ3BwS2NGZTRWVFBpRFlVSDlOdGJBVUM1RG5WM2JpTVgxSnFTSzMtcERXSVVoR3pWSk56VmZNUHNvT3lhS2hVU1FvbngteE9ZU3hCc1dub19lNU10dEVDdEhINV9JZFEwdXMyUXBzZTVMUm9zaHNXWEVMSDFIUXVyUVoxNEhxMWN3Y2hvU3BOZWhuNWY1clFJVHdZUlF6eTFZTmVia0I2WEtMblhBdlJ5UGh3cFVKVV9XcWdDdk92Q3M?oc=5"
  },
  {
   "titulo": "PSOL reforça pedido de cassação de Flávio Bolsonaro por novas ligações com Vorcaro",
   "fonte": "PSOL 50",
   "data": "2026-09-18",
   "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNZHhWNGtGX21aUkRsNVVma1BYczA0RXdQUkdHZ0kzR04ta29kTHp3WmpoNmdJYnNTMDRVSjVHY3RqSmlpY3lIei1RR3BNWmxYWWdUUWkwcmVPTldqSGJnSUg1SGEzc3JmWUdEdjc1U0o1YUU4U0EwS3c2UGo4N1dSTGJmQVZFZW5CbDFTaGlGVVJWeU9iS3dhV0NPV0d1aWYxNkxHUEJSTzA?oc=5"
  },
  {
   "titulo": "Mendonça manda apagar vídeo de IA que ligava Flávio Bolsonaro a Vorcaro",
   "fonte": "CartaCapital",
   "data": "2026-09-16",
   "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQUUswMWdySmQ4MXl4bGl2TkZHellxMFVDb0NQRmRrWjI4T3lGSTdKZ1VyMDh2U2huUXM4eXRTWTZNdjh1cTJGbDNzTW4tay10U2R2YWdiSUpSQUNQMm9CRS1HWXRhRU1CTWYtQjkyb2haeTZrSFNnUlJiajd0VkRmcy1BZWExWlctTkxueFdEdmwzMnBQMWliQ004eGt3cDRHVFJuMmZPcUFzd201R2JmWjY0bw?oc=5"
  },
  {
   "titulo": "Flávio e aliados usam vídeo de Moraes em jatinho operado por empresa ligada a Vorcaro para desgastar Lula; PT rebate com Dark horse",
   "fonte": "O GLOBO",
   "data": "2026-09-20",
   "url": "https://news.google.com/rss/articles/CBMixAJBVV95cUxNNUtqQmx4bGdoOERWbUh4RXUxTFFUenVJZF92WkVmUEh6cy1EY19zbHkzY3R5WmFiYlk3dm54ZHJ0eVd2Mk9LOFhaekZKcW5UTHF2US1rQTFTNkt1TkdWUjdWeTAwbjQ2bzJtejAzUUhCMkRWUWlSRGdCTlE1MnNFY1VtSHdsTTVqdXIxWVJ4SWo3UjA5Ukk0M2dIaXY0dm9RUm5XSHBOTFg1Vm1jdDJQVlNTWkl1MWNZaV9tN04xZHhDWnVoMmd3RzlmZlZ1czZFRHB0N0lwd0JnQTRSc2RBNG54Z3hDUnJXbXdEX296eHlKODVkMDV2aDc5Qzg0M01kdHAwRFNhY3lOdkRQazNDbzJiTnVucmtIanRyNHJFYTVzNy1sUlZ4aldsZ2UxWWV4c0ZhVi1FLXB5d0hjbzZBdTRWdXDSAdMCQVVfeXFMT1VqbDhYT2JTWm5QRE1PUkpleDZGRlNTT0w3VEtjNkUwbThjMkZfV0d6QjZpQ0pOU0ZUUGo4TUctUFQ1Z0xPVktvZmQxTEFjNkJxWkx5dTBfajB1MXFkRHR2dFpLNVNUNlBMeUxQZ3lqY2NSWUJKVEpoVTQxdGdHSUp3aHBYZjBFTlpCNWI0TllVTnJBTFd3d1BibmxfUDdpaWdaOGVVVnA2cl9oenBQdVRoTnNOakEwLTFrd0hsMXpIX0Z2TkRfdHNXYlR5TUhuZmVfaXdEQ1pycmJmUTJNeGg5WlRMV1EzTU1JVGh2UnlTRDN0WGRQT21RUTZlWWZnU09fbUFldHNOZVc4WkpVWHducWVCeWRIWFBoWUkxaHFfcWZDSVQ1ZktudGJoTXdXMVByaDBsa1dqUGlhdU1kRW16VDNBUGdyc3puaktaUTFSSVZF?oc=5"
  },
  {
   "titulo": "Flávio critica Moraes após vídeo em avião de Vorcaro: \"Aparelhou o Estado\"",
   "fonte": "CNN Brasil",
   "data": "2026-09-20",
   "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQUFN0VU41Z0JTZUhBVWVfZl9HWDRGVUx6VW1sQnJDanE4NWZHdHZJV1pseUN4aDlRcFM0U19qTnNKQXk0ZUx6ZWR6YW8wUkptcENteUVHd2psNEZpWkNES0x0OG1iNGpqTHJGOWlXWDlvdHdkTTVqTW1mWkhVSXV6UEgzQzZOUTVyRG5pVTV1cEtaTlpxZnI3ZHdKblFSQmk3VmxwMnU2amFyVGt2Ync?oc=5"
  },
  {
   "titulo": "O SAFÁRI DOS INVESTIGADOS",
   "fonte": "revista piauí",
   "data": "2026-09-19",
   "url": "https://news.google.com/rss/articles/CBMid0FVX3lxTFBXVndBc0RYc2RmQks1OGVXYWNyUG9hYnNFbUE3Z01lcTItdTR0cW53OFVQalRGY2ctb2l4cHVLcGVBa2E4LTFndUFSajg1cXR5S2diV2VkWDFBUW41ME9ONlNocUotTWlIV0NsTzVWVWJsNkFzM2NZ?oc=5"
  },
  {
   "titulo": "Crise no STF afeta estratégias de Lula e Flávio Bolsonaro",
   "fonte": "G1",
   "data": "2026-09-15",
   "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPTmVNeXhTVWU0LXR5c3gycHlHVGpxMk5oaHdOcVZRN3Rwb3VxN21iRmFJSzdjc1pWZHB0M0QzQ0hfdHZtRjRsOE5rWm9oVExIVnZ6ME5YaHN1a0R2SFlGVlN0MUM3V0V1YldjU21XR1lzcXpnbTI2bWxBWEluUUcyLWdfczRpOWVBQ21lY1BCcHRkdlZiVG5pRklIbTZfLVdDamtKdHF2Qld4cFVNeXVpdVpGV1BXUzJXbVRtadIBywFBVV95cUxPeWFXR2p6cEMtZ1JUNmRrVjRwNXdZNnl1UE1XVGM4LS04Yk9YTlVhcUdGWm9aM3JRcVNVZGFYRUdsUWlyNXFaOTZIRkttXzhiV1Y1T1k0M3ctdTdINmZHUTRKQTQ4OHM5V2VnQnR5MExlU0lsWmVBNW43clVjUUhrVGNrTVdiRkdfSWM2MVBhQ0JIcUx5UzRwd09BSXZtZHlSWm5HX2dZSHU0ZVVoTUF4cGhRMjZHWjFZSkZjQ09kTmdKVTdITzBaRmQyQQ?oc=5"
  },
  {
   "titulo": "Embate no STF ajudou candidatura de Flávio Bolsonaro?",
   "fonte": "Brasil de Fato",
   "data": "2026-09-19",
   "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOb2FaT0FZbUpfdkxveWpqWXJBaWV3bGpuNVJEbk9QT1UzVUwxSGxabHZvWEJKcFZkZHhfOHVQdVFCVVN4aktmRGRPWW5NY2RKQnBHUFZIQUdIWWtrT2g0RFpETzIxZ3Q1bVF3UzVqalN3WTJEV01fcERacm9ZOE5SUUx4UTRDSUFmTHhfX0VtOW5Lcm12OEZ2VEtYM2ZHOHBNTlhxSldfZ0pGckxQNlBueUdHVm5pRzViNGRjNVljTGZLdXNmanE0bm5B?oc=5"
  },
  {
   "titulo": "Lula resiste à crise do STF e Flávio Bolsonaro vai para a defensiva",
   "fonte": "CartaCapital",
   "data": "2026-09-15",
   "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPSE9fRUhvWjFwaXpBd05LQ3dwUkx4MU4zRWgyMFI1c01MU0VRMVlzNlFFRmNUSlE4d2pWbUphV1hlMk94ajVBSmV5ZW9naG9kUG1fVGpDVThTaHJ5NTlRdjNZbmtrZ0FBdG5DRUdEZkl2c3FVXzlYTTR5V3cwbDZGcDdDSUdjSk9Uazh2V3NxalhMTjM0VGUtWGxUb3BQVUQ3MUU5ekRjVnlNakE4?oc=5"
  },
  {
   "titulo": "Flávio Bolsonaro usou durante campanha apartamento que foi de cunhado de Vorcaro",
   "fonte": "Folha de S.Paulo",
   "data": "2026-09-17",
   "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNMEFVUXVPbnFwSUlKcWNFQkE0V0twZUlvT1p4TS1ZVTREYmNiMlRLZm9nQ3l5Qi1sVW9IODJpeUlHdlJNS1hBcU5hU0RVdWRmNmdqdlZJbGZTX1dfMEltT3dEX1VmRDdjV1pNblk0a3hBN1UtbFBldnBIb3RLdDJYMjBNWDdkWldMeGFWODdGQm1UVklkTHEwRE9EaXZTd1FiWkxQR2g0d1VreURlZE52ZEFWNTA2eHhVakk0MUNkWk1icEpqYnZOVXVkOEdTR2RqMUhITnR3?oc=5"
  },
  {
   "titulo": "Em dia de julgamento no STF, Flávio Bolsonaro liga Lula a Moraes, e presidente explora investigação contra senador em horário eleitoral",
   "fonte": "G1",
   "data": "2026-09-16",
   "url": "https://news.google.com/rss/articles/CBMijgJBVV95cUxNaUhEbXlSRk1QWkpoVm82dVhVY19haGlzNWs5eTRsYTBkYWFZeGQxbTMyM0RfYUpPckdsWjlHNTZSRVMxV0otSTY4SmNMYmY4V1VkQ2ZaMkVONVJKRVdaZkV5dnhBUHhLbHQycGlGTUNfUzZiTjdRTlhpRF9DYWJrRXI2YXJRc0l4b3E1WTJvb0pIaEhOVmZsdGQ3QmdYcUpZN2ZqaWN0MFRORWtuWTk5VXpVSzBFdER3bnJSdzNNREZfa25CcDVpODNyeUdKVnFGZi00bncwUEVHWGFzQmxHY0pscXB0bmhFTWJzOXdUaFhrTmNJa3E0NzFua0ZJOGZxblRYaHZhTTQzeXpMS2fSAZwCQVVfeXFMTy1qd1owTHRpM2xuUmNQbmVGSDNQRlRzY1VLbUU0NlRaQVlIQzdHVGFOcldpMTFiYmhsTDR6OEdRVE5sbEVhOWdoOEQxYmQzRFY2VnVJWHQxRHM5U3E3RFpyWE1QdmVYMjFkcjNndmVHY2pQU0xQYlNhM3JMQmhyVVJidktpU3lTV1pvRVlBT1dUMFplTHdCaDlRQnJJVDdhR2pBcDNWME8zLXhtY01tazkyM0h3YjF1end5Szhmc3U2UVRBQkxCaUM3VUZVQnUwemVRaU5tMXJ3eUd3eG96T0VsY0s4VjJYWmk3Tk1zU2hnZHFISmM3TVBoS2ljYTJCQWRNVUpabFozWkVRbnktX3o0b3FhVjZ5OHA1REU?oc=5"
  },
  {
   "titulo": "Flávio Bolsonaro: relembre o processo da rachadinha",
   "fonte": "Valor Econômico",
   "data": "2026-09-01",
   "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOR3otLTAzaUJvY0g3Q0tRWnJ1ZUpsVmVqNTVvOUlfNTU3ODYxdHZiLUlqUlRvS1RmQk5nQS13c1BCejkzTHJVQnQybm5HOWl0bzd4S203NEt5enNudGViVTVnY3JlNURkVWR4MXFMQjBQd2l2LTczM2FaVmdsc0w1UFBhUi1velI1bTl6V3NvU25JTWJadDFmZnBucEdQN2ZweHFfempTdGhoNU9xTXlQejNSM1RGdlp4bWpMRlpGc9IBzgFBVV95cUxNQTV5WDg1dmQ2bDIza1doRzN4alBMMEFxRHF2SFB5aGozUk5tcDctTkdQZExqbHZvUEdnRkxyaXR0OHY4cnFIYmd0SkhiYjg5VHFEa3RNRmZ6UDQ3ZFhJZFJkdlJBcDlJVVVNMTh5MnFYV3Z5aWN3dmR6WWNGaHU5blRuam1abFV3a1RYQlMyTjV6WDBwa2hPQUZSTGJjQl9zQXNWRThVZG41Slg3VWU2VHNuNDFOYUp4OThPTkVBNjI0UTloS1JEM0pubzhCdw?oc=5"
  },
  {
   "titulo": "Flávio fala de crise no STF em propaganda eleitoral com vídeo em formato de 'pronunciamento'",
   "fonte": "Folha de S.Paulo",
   "data": "2026-09-15",
   "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNbXJQcVFtYkppNGM3bTJzUVVxbTB2amFHSTMtMFNVY1FtLUt1MHI0dXB5MWlnRUVNRjM4WUxLMHpwWF9zTDJHdF9yRm9VUC05YjgtSDEydFUweEpwT1diMXFLYXZSOGpDVDF0akpNdExsLVlmTU93UEdOWk5jZVpfUXgyd2hMWUFCMzlrWEZzYVZiMUVwcUk1MV9XOThWZFB3bGtMLWw2ejlSUE1RYjhkbzFvYzlmUDBZRzV0OC1HNlFUUjIwYW9VcmFSVUVQYnMtSFZLVkFHOA?oc=5"
  },
  {
   "titulo": "Escândalo do Master vai eleger quem tomou dinheiro de Vorcaro?",
   "fonte": "O GLOBO",
   "data": "2026-09-18",
   "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPT1RTMV84MnFDYnp0d2RBeXFQOGh6WFpIelFmbDI1aWVpY1hLalY2ZDk1eHp2N251WUtkakNpTlY0TWxzTXJZLW4wMEEzZDVBY3F3MWlibWNxVnlPa19oNnBQUTBNbEJ3TDJhNzdqckJORWdCSzRma0NlLWt1ZzNQeHhtMThIMWhOenVDNVZ6SVotMVZuVURqb3FWVS0wNXY1dk1vR1N4N1AzMGwtSTB5bFR6dkFfNXZYdXNYZmdPaU50eFdtaHYxbkdDNWRSQVNq0gHfAUFVX3lxTE92dHBtZXlyQWttcFFpYkZqaVowcURIUzNZNlcyOWZjbHNpd1M4WHlUcXFjaFRFWjZic2JWUjJ2LXB4SF91WE1aMmdnb0hUeEFyc1N0Z1RwR1lFVnZNbk1jV3ZjVTdWd3RYUGpHNWJ5eEhTenNhdzdfUGxSUmVzcXdPNHUxR2hwTHpjcG1PeXVtRm12RzhWb3dWSUNQQmhPeFNLQlFtMTB3aWdvUlNOTDRZQlBSbzIxdnROZmNzdXRLbFAyN19LaVBOcFcxRUpndjRHRE1nU0hwVXVtM2JXQ0E?oc=5"
  },
  {
   "titulo": "Flávio Bolsonaro e outros candidatos de direita usam foto de Gonet para atacar Lula e STF",
   "fonte": "Folha de S.Paulo",
   "data": "2026-09-19",
   "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNc01DNEg5VU9mU3JXMXFJMGNqRjlpVlBQT3p4NXRGRktYa0hJdG5IX3NlRUo1WENQalZIVXJWUlRZYm8tdW03U0RmbWhnNU1CbE5zbG5QOXp2dEZITlZka3pQVEsyRHhoTzRyMl9hS1lJQzJxN1NObW5VM0Q0ZDRIUFhyeDhpU2Vsd2lVbXhRSHR6MlRSdTVLcVFWbUEyNm5Xd0c3dkYzb0FFZWpoNUtxMEFKSFJPT2I2UE1SQ0Rvb2lQM1VTeV9VVDlTcURMMjFkSlN2cnJ3?oc=5"
  },
  {
   "titulo": "Jogo Político: 'Evangélicos estão com André Mendonça e STF vai eleger Flávio Bolsonaro', diz Apóstolo César Augusto",
   "fonte": "O GLOBO",
   "data": "2026-09-19",
   "url": "https://news.google.com/rss/articles/CBMikgJBVV95cUxNNG9NNFBRSkxlVGZUakNab2QzNlk0Q25rRkFUVEFLc2k4QnV4LXhfUDNVOEFGVWs3MkRuT1hOekNicHZJS001cVhKN3Q2MVIxbUdHVVk2S3pMTUc1eGlscFZxcFN2YkNJRTdDUkVXbzJncjJXRnkzZjd4aEJMcUxWR2VOZW1JZ0k5bFZVSmQxWndNYzlnRTcyeFR6cXoyeTJKVVM0M1JkSGVCSWpSVnNSSkxSb3hHWDBKSFdJMUNnWXZsQTNfZk9uUUlCc2QxMHdNVXZYZkxKZWdfeVYzbmdGcWh6c2d6UmFqTTV2WGdyRDlSanAzYVRhQjZSSDZsbFRsclNVc2h2UkJHY05LLVJ0UjhR0gGgAkFVX3lxTE5XQkE1bkFZMGR5YklaNHpmTldGaTV6VUJYYVZOTkpaTE5Ybnp2WUtjUUdrdjc2TGxmaGJmYkQwOG40aUc2WnQyRmVNSjBDWG0xWUozakZ4TGs2TkIzcHQzalBSOHpxNlMyczhFODNuOG9YSHc4UU8xdGR1ZnRXZ01wU2Y4aGcyX3BkS0RCWmhfUmlUWkRQb0lVeS16MVpuYThFX2RvSnBJR3pIM0hSWDhZaXJiYTdoNngyeWN6aV9jcmFXSTJFNk1QaDF4NHRGSnZEVmhBa0pvc0xiSTlFcVVscFJIclZZbjg2T0lBODVnYUJYNVJoVUVqWTlNV3lIa3ZOZnZCQUZZSm5uSmJ0VkxNcExwd08wc3lUVmhVdFlkTA?oc=5"
  },
  {
   "titulo": "Lula muda estratégia de campanha e passa a confrontar diretamente Flávio Bolsonaro: 'Quem vota em Flávio vota em Vorcaro'",
   "fonte": "G1",
   "data": "2026-09-17",
   "url": "https://news.google.com/rss/articles/CBMilAJBVV95cUxQdm41dHVVdGhLckpQTVBNTHFjdTQ0eU9OaEt0Vm9JWXEyRmpkZTFCak93UUNPYmlUSEF2UlFyRDNoTTgzUkFod2QxTEd1d0NIYXFTbnJHRlVaN2xNRXE2MXNnQnkyMTJWVkdmb2ZERE5wVVVfd0Y4NFYyQ1ZzWEZlOG9wRmozS1Axc21xTVZHY2lETjVIVE01RTUwUHU5d1ptazR0cnMyQnNKYzJSNmV4OExTcUhqakNtRmhleXpLQ2pGUUZwcUNJOHlKeXFMQnVfTXJ1aTNsampzUVg5VjlkVHJwT2R4QURUVlJIb1B3VU0yeTRrUEhSQmx3cFVHNTFzZzZ4SzJLMUpyUDN4R3dSRGtJbkbSAaMCQVVfeXFMT1h5SGNYLVRkUmJHV1A4TEZKRlhKd1J2YVY4WjlFRzlESGZNMlA2YnFfdEp3MGZIbjVna1FlUG1lNmtTX3B2YVVRZTE3LWlRMXI2RXVGWVpwSVl3TzdMcl9kYlh1RmRKSDlVM0lObkxGNmdfdnNGUkxBX1ZFWVFtNmRWdUY3T055Q2c2Y0xpVnB2TFk3a3VxZk4tME1paDJsTzNnZ0QyeHVlNkpKb1JJLXhqM2QzZ2JNUlVrZnRleEdCZnp5TjhkWUhjUUtQX1F4cFlQWmtPS0xybHpNbFBLOUwzNWxzNkNKTUFpMW9YVVFuUTlaZEotTC1DUjJvMFZLbE5IeF9yMmo1MjY2UXBVbzRhYWswNVdWR2Y0UEc3RzlpeTI0?oc=5"
  },
  {
   "titulo": "Defesa de Flávio Bolsonaro pediu 4 vezes para STF tirar investigação sobre ‘Dark Horse’ de Dino",
   "fonte": "Brasil de Fato",
   "data": "2026-09-12",
   "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQdWRKZXZRZFQzSG50c2lLLUFZbVZTQzJKSFFqd0NNQXc3LTdxZzRENVhXY0tjNzh0bVk0azhYT0F3TlNNUWk2alJTLXNSRTNscnJIUFRoOGdVYWNBRHUtXzhIYUhpSk51VVhZcVMzbE55YXFTOEJJSEhINkU1WDBjMXU1aFZwY3d2N2Y4SkVtQlJIbkZkdUNIQ3NYNGQwcU5aOXUzSkJuZndjWVdyTUs1VDhSWk96ZU9KN09SbzE2V2JxenBwUDhxMWdMOFl2c0cteEhz?oc=5"
  },
  {
   "titulo": "Avião de Vorcaro pousou em Angra no dia de festa de Flávio Bolsonaro",
   "fonte": "ICL Notícias",
   "data": "2026-09-20",
   "url": "https://news.google.com/rss/articles/CBMiekFVX3lxTE9PX1RNbldIUkY0UGZGcjNPNnU2MDNwZ0RVamVjTjZycmdiOUlLTFZIMWFLNGFTNV9yRkNOZHltbTB3bGpvcGZ2bU13Ti0xZjZYWGFvUFBmbENsNkV4ZDhIT1NlYXJhZDZqY1cxUUQ3RVgwM3VndTl0UXNn?oc=5"
  },
  {
   "titulo": "Flávio diz que Moraes e Dino não têm condições de seguir no STF e fala em indicar até 6 nomes para a Corte se eleito",
   "fonte": "G1",
   "data": "2026-09-17",
   "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPQmgxSWFNd0RESFhybWZnQzNCNmpSMDI4SXZ2UVVFcmtKRzNtTzkyUWpiM2gzOXI1WnlPN0duVnU2dzlDeUladFQzQXBrd0FJRkxjVVU1Um81NjQ1aGhodGJFeHp6TUZwdDBJcXBVdTZzM0NOQml5YjdLWmUxUXlUaU41Y2NVWWR0MTJMUVZLU0UxZFVFS1V0Z0VR0gGoAUFVX3lxTE1WWWNBa3h0UExLUmdjSG4xVGxxUjltX1J2RTZmOGpHV0JYd2lhd1UwQ0JjR3lzRC1nQzZfZ05Zd1FTZTc3OUlZZHVZbFNKS0V2RTlHTVo2WC1Wb3c1cjY1TGY0OF9QVEJKcVVYSGlDUm9wT0lKSjZfeHYyVnc0bWFxcWQ2Tk1UbWlBLTRyT3RuMmxSektRNTQtVW1WWTNmYklac255QUczYQ?oc=5"
  },
  {
   "titulo": "‘Interlocutor direto’: o que as investigações da PF revelam sobre a relação de Flávio Bolsonaro com Daniel Vorcaro",
   "fonte": "Brasil de Fato",
   "data": "2026-09-11",
   "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxNR0xmLUM1MzFfN294SzlhNjk2dEtBU1NHdnR2Y3ZjTEpjNFRIVmxPTDFmR3ZtOVpVM2NjeUFiMkZoc2w5RHVzWmRnNjdqaHF6MzNwVDFHUnlvNlNzUWxxSF9IRzQ2UGthdWxQWHdSVVlaUHlaQUVzZTNsUDJKWkFwdVoxQzRVbnNFZG1RTkZFcmN5WWlvZzF2UXhZbzBSVWRCeWNMUTZVNzRjRW5jQm5WQUVxWEJHcTlZcUwxbVBzZTBmWnY2ZjcycUJucDlaMnNvR2J3Zl9CLVRXTXo5UG9qY2IzMkpRaGhDOFVj?oc=5"
  },
  {
   "titulo": "Mendonça homologa delação de operador que relata ter enviado cerca de R$ 69 mi, pela cotação da época, ao fundo do filme",
   "fonte": "Brasil de Fato",
   "data": "2026-09",
   "url": "https://www.brasildefato.com.br/2026/09/09/mendonca-aceita-delacao-de-empresario-que-enviou-r-60-milhoes-a-fundo-ligado-a-eduardo-bolsonaro/"
  },
  {
   "titulo": "PT aciona o Conselho de Ética e pede a cassação de Flávio pelo caso 'Dark Horse'",
   "fonte": "Poder360",
   "data": "2026-09",
   "url": "https://www.poder360.com.br/poder-eleicoes-2026/pt-aciona-conselho-de-etica-do-senado-contra-flavio-bolsonaro/"
  },
  {
   "titulo": "Coaf aponta repasses de Vorcaro ao filme depois da data que Flávio alegou",
   "fonte": "Agência Pública",
   "data": "2026-09",
   "url": "https://apublica.org/2026/09/analise-as-revelacoes-sobre-master-vorcaro-moraes-e-mendonca/"
  },
  {
   "titulo": "Flávio declara R$ 8,1 milhões ao TSE, quase o dobro de Lula",
   "fonte": "Poder360",
   "data": "2026-08",
   "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-declara-r-81-milhoes-em-patrimonio-quase-o-dobro-de-lula/"
  },
  {
   "titulo": "PT pede à PF apuração sobre mansão de R$ 14,5 mi usada como QG da campanha",
   "fonte": "Metrópoles",
   "data": "2026-07",
   "url": "https://www.metropoles.com/colunas/manoela-alcantara/lindbergh-pede-a-pf-que-investigue-mansao-usada-por-flavio-como-qg"
  }
 ],
 "noticiasCaptura": "2026-09-20",
 "placar": [
  {
   "numero": "1",
   "rotulo": "projeto de lei de autoria dele virou lei em 7 anos de Senado",
   "destino": "tema:senado"
  },
  {
   "numero": "43%",
   "rotulo": "das votações nominais de 2026 sem o voto dele — a média do Senado é 20%",
   "destino": "tema:senado"
  },
  {
   "numero": "R$ 0,80",
   "rotulo": "de cada R$ 100 em emendas indicadas por ele foram para educação",
   "destino": "tema:senado"
  },
  {
   "numero": "4,7×",
   "rotulo": "o patrimônio que declarou ao TSE, de 2018 a 2026, com salário de senador",
   "destino": "tema:patrimonio"
  },
  {
   "numero": "STF",
   "rotulo": "investigado desde julho de 2026 pelo dinheiro de um banqueiro preso no filme sobre o pai",
   "destino": "tema:master"
  },
  {
   "numero": "R$ 6,01",
   "rotulo": "doados por pessoas físicas à campanha até 26/08; do partido vieram R$ 42 milhões",
   "destino": "tema:eleicoes"
  }
 ],
 "fluxoDinheiro": {
  "nota": "Fluxos citados em reportagens e em documentos públicos. Cada um traz fonte e status jurídico; valores nominais.",
  "fluxos": [
   {
    "de": "BRB (Banco de Brasília)",
    "para": "Mansão de Flávio no Lago Sul",
    "valor": "R$ 3,1 mi",
    "obs": "financiamento em 2021, em 360 parcelas; imóvel de R$ 5,97 mi. Aprovado sob Paulo Henrique Costa, preso em 2026 no caso Master",
    "tema": "mansao",
    "status": "FATO NOTICIADO",
    "defesa": "Ação popular julgada improcedente em 01/07/2025: o juiz entendeu que o empréstimo seguiu a 'prática comercial regular' do banco.",
    "ressalva": "Imóvel de R$ 5,97 mi, com R$ 2,87 mi de entrada e 360 parcelas. A operação passou pela diretoria do BRB presidida por Paulo Henrique Costa, preso preventivamente em abril de 2026 no caso Master.",
    "fonte": {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/grande-angular/paulo-henrique-era-presidente-do-brb-quando-banco-financiou-mansao-de-flavio"
    },
    "foz": "brb-mansao"
   },
   {
    "de": "Operador, a pedido de Daniel Vorcaro",
    "para": "Fundo nos EUA ligado ao filme sobre Jair",
    "valor": "R$ 69 mi",
    "obs": "7 repasses em 2025, descritos em delação homologada pelo STF em 9/9/2026. Flávio é investigado; nega irregularidade",
    "tema": "master",
    "status": "INVESTIGAÇÃO EM CURSO · SEM CONDENAÇÃO",
    "defesa": "Flávio afirma que o dinheiro foi usado integralmente no filme e nega irregularidade.",
    "ressalva": "Inquérito autorizado pelo ministro André Mendonça em 22/07/2026; Flávio é investigado. A delação homologada em 09/09/2026 descreve 7 repasses em 2025, a pedido de Vorcaro, somando cerca de R$ 69 milhões pela cotação da época, segundo o relato do delator (A Crítica e Diário Carioca). Sem denúncia aceita nem condenação. Flávio afirma que o dinheiro foi usado integralmente no filme e nega irregularidade.",
    "fonte": {
     "veiculo": "A Crítica",
     "url": "https://acritica.net/justica/delator-eleva-a-us-12-3-milhoes-dinheiro-enviado-a-fundo-do-filme-sobre-bolsonaro/"
    },
    "foz": "master"
   },
   {
    "de": "PL (partido)",
    "para": "Campanha presidencial 2026",
    "valor": "R$ 42 mi",
    "obs": "contra R$ 6,01 de pessoas físicas na prestação parcial consultada em 26/08/2026",
    "tema": "eleicoes",
    "status": "FATO · PRESTAÇÃO DE CONTAS AO TSE",
    "ressalva": "Prestação parcial. Em setembro de 2026 a maior doação de pessoa física registrada era de R$ 300 mil (Walter Schlatter); os valores do TSE podem divergir dos divulgados pela campanha.",
    "fonte": {
     "veiculo": "Poder360",
     "url": "https://www.poder360.com.br/poder-eleicoes-2026/flavio-lidera-em-doacoes-a-candidatos-ao-planalto-lula-e-2o/"
    }
   },
   {
    "de": "Walter Schlatter",
    "para": "Campanha presidencial 2026",
    "valor": "R$ 300 mil",
    "obs": "maior doação de pessoa física, confirmada pelo doador",
    "tema": "eleicoes",
    "status": "FATO · PRESTAÇÃO DE CONTAS AO TSE",
    "ressalva": "Doação registrada na prestação de contas e confirmada pelo doador por telefone à reportagem.",
    "fonte": {
     "veiculo": "Agência da Notícia",
     "url": "https://www.agenciadanoticia.com.br/mato-grosso/noticia/146289/prefeito-e-empresario-walter-schlatter-doa-r-300-mil-para-campanha-de-flavio-bolsonaro"
    }
   },
   {
    "de": "Campanha presidencial 2026",
    "para": "JMartelo (agência de comunicação)",
    "valor": "R$ 1,6 mi",
    "obs": "contrato declarado na prestação de contas; agência de um ex-assessor da Casa Civil de Tarcísio de Freitas",
    "tema": "eleicoes",
    "status": "FATO · PRESTAÇÃO DE CONTAS AO TSE",
    "ressalva": "Contrato sob a rubrica de serviços prestados por terceiros, na prestação de contas de setembro de 2026. O nome civil do dono da agência não foi confirmado em fonte aberta.",
    "fonte": {
     "veiculo": "Revista Fórum",
     "url": "https://revistaforum.com.br/politica/flavio-bolsonaro-jmartelo/"
    }
   },
   {
    "de": "BRB (Banco de Brasília)",
    "para": "Mansão de José Vicente Santini, coordenador da campanha, usada como QG",
    "valor": "R$ 10,5 mi",
    "obs": "imóvel de R$ 14,5 mi em nome de um coordenador da campanha; um deputado pediu apuração à PF em 02/07/2026. O coordenador diz que está tudo declarado",
    "tema": "mansao",
    "status": "PEDIDO DE APURAÇÃO À PF",
    "defesa": "Santini diz que está tudo declarado.",
    "ressalva": "Imóvel registrado em nome do advogado José Vicente Santini, coordenador da campanha: R$ 4 milhões de entrada e R$ 10,5 milhões financiados pelo BRB. Santini diz que a renda vem do escritório e de uma empresa de segurança e que está tudo declarado.",
    "fonte": {
     "veiculo": "Metrópoles",
     "url": "https://www.metropoles.com/colunas/manoela-alcantara/lindbergh-pede-a-pf-que-investigue-mansao-usada-por-flavio-como-qg"
    }
   },
   {
    "de": "Orçamento da União (emendas)",
    "para": "Destinos indicados por Flávio",
    "valor": "R$ 364 mi",
    "obs": "2020–2026; 50,8% para saúde, 0,8% para educação",
    "tema": "senado",
    "status": "FATO · ORÇAMENTO DA UNIÃO",
    "ressalva": "Valores de 2020–2026 corrigidos pela inflação. Saúde 50,8% (R$ 185,5 mi), defesa 21,8% (R$ 79,5 mi), segurança pública 19,4% (R$ 70,9 mi), educação 0,8% (R$ 2,9 mi); ciência e agricultura, nada.",
    "fonte": {
     "veiculo": "Jornal de Brasília",
     "url": "https://jornaldebrasilia.com.br/noticias/politica-e-poder/flavio-bolsonaro-concentrou-emendas-em-seguranca-e-defesa-e-deixou-ciencia-e-agricultura-de-fora/"
    }
   }
  ]
 }
};
