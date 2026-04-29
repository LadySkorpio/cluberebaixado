// Dados dos clubes brasileiros da Série A e B
// rebaixamentos: anos em que foi rebaixado da Série A para a Série B
const CLUBES_BRASILEIROS = {
  // === SÉRIE A 2026 ===
  "Flamengo": {
    escudo: "escudos/flamengo.png",
    nomeCompleto: "Clube de Regatas do Flamengo",
    rebaixamentos: []
  },
  "São Paulo": {
    escudo: "escudos/saopaulo.png",
    nomeCompleto: "São Paulo Futebol Clube",
    rebaixamentos: []
  },
  "Santos": {
    escudo: "escudos/santos.png",
    nomeCompleto: "Santos Futebol Clube",
    rebaixamentos: [2023]
  },
  "Palmeiras": {
    escudo: "escudos/palmeiras.png",
    nomeCompleto: "Sociedade Esportiva Palmeiras",
    rebaixamentos: [2002, 2012]
  },
  "Corinthians": {
    escudo: "escudos/corinthians.png",
    nomeCompleto: "Sport Club Corinthians Paulista",
    rebaixamentos: [2007]
  },
  "Vasco": {
    escudo: "escudos/vasco.png",
    nomeCompleto: "Club de Regatas Vasco da Gama",
    rebaixamentos: [2008, 2013, 2015, 2021]
  },
  "Vasco da Gama": {
    escudo: "escudos/vasco.png",
    nomeCompleto: "Club de Regatas Vasco da Gama",
    rebaixamentos: [2008, 2013, 2015, 2021]
  },
  "Grêmio": {
    escudo: "escudos/gremio.png",
    nomeCompleto: "Grêmio Foot-Ball Porto Alegrense",
    rebaixamentos: [1991, 2004, 2021]
  },
  "Internacional": {
    escudo: "escudos/internacional.png",
    nomeCompleto: "Sport Club Internacional",
    rebaixamentos: [1999, 2016]
  },
  "Cruzeiro": {
    escudo: "escudos/cruzeiro.png",
    nomeCompleto: "Cruzeiro Esporte Clube",
    rebaixamentos: [2019]
  },
  "Atlético-MG": {
    escudo: "escudos/atleticomg.png",
    nomeCompleto: "Clube Atlético Mineiro",
    rebaixamentos: [2005]
  },
  "Atletico-MG": {
    escudo: "escudos/atleticomg.png",
    nomeCompleto: "Clube Atlético Mineiro",
    rebaixamentos: [2005]
  },
  "Atlético Mineiro": {
    escudo: "escudos/atleticomg.png",
    nomeCompleto: "Clube Atlético Mineiro",
    rebaixamentos: [2005]
  },
  "Botafogo": {
    escudo: "escudos/botafogo.png",
    nomeCompleto: "Botafogo de Futebol e Regatas",
    rebaixamentos: [2002, 2014, 2020]
  },
  "Fluminense": {
    escudo: "escudos/fluminense.png",
    nomeCompleto: "Fluminense Football Club",
    rebaixamentos: [1997, 2013]
  },
  "Athletico-PR": {
    escudo: "escudos/athleticopr.png",
    nomeCompleto: "Club Athletico Paranaense",
    rebaixamentos: [1989, 1993, 2011]
  },
  "Athletico Paranaense": {
    escudo: "escudos/athleticopr.png",
    nomeCompleto: "Club Athletico Paranaense",
    rebaixamentos: [1989, 1993, 2011]
  },
  "Athletico": {
    escudo: "escudos/athleticopr.png",
    nomeCompleto: "Club Athletico Paranaense",
    rebaixamentos: [1989, 1993, 2011]
  },
  "Coritiba": {
    escudo: "escudos/coritiba.png",
    nomeCompleto: "Coritiba Foot Ball Club",
    rebaixamentos: [1989, 1993, 2005, 2009, 2017, 2023]
  },
  "Bahia": {
    escudo: "escudos/bahia.png",
    nomeCompleto: "Esporte Clube Bahia",
    rebaixamentos: [1998, 2003, 2014]
  },
  "Chapecoense": {
    escudo: "escudos/chapecoense.png",
    nomeCompleto: "Associação Chapecoense de Futebol",
    rebaixamentos: [2019, 2021]
  },
  "Mirassol": {
    escudo: "escudos/mirassol.jpg",
    nomeCompleto: "Mirassol Futebol Clube",
    rebaixamentos: []
  },
  "Red Bull Bragantino": {
    escudo: "escudos/bragantino.png",
    nomeCompleto: "Red Bull Bragantino",
    rebaixamentos: [1998]
  },
  "Bragantino": {
    escudo: "escudos/bragantino.png",
    nomeCompleto: "Red Bull Bragantino",
    rebaixamentos: [1998]
  },
  "Remo": {
    escudo: "escudos/remo.png",
    nomeCompleto: "Clube do Remo",
    rebaixamentos: []
  },
  "Vitória": {
    escudo: "escudos/vitoria.png",
    nomeCompleto: "Esporte Clube Vitória",
    rebaixamentos: [2004, 2010, 2018]
  },

  // === SÉRIE B 2026 ===
  "América-MG": {
    escudo: "escudos/americamg.png",
    nomeCompleto: "América Futebol Clube",
    rebaixamentos: [1998, 2016, 2023]
  },
  "América Mineiro": {
    escudo: "escudos/americamg.png",
    nomeCompleto: "América Futebol Clube",
    rebaixamentos: [1998, 2016, 2023]
  },
  "Atlético-GO": {
    escudo: "escudos/atleticogo.png",
    nomeCompleto: "Atlético Clube Goianiense",
    rebaixamentos: [2012, 2022, 2024]
  },
  "Atlético Goianiense": {
    escudo: "escudos/atleticogo.png",
    nomeCompleto: "Atlético Clube Goianiense",
    rebaixamentos: [2012, 2022, 2024]
  },
  "Avaí": {
    escudo: "escudos/avai.png",
    nomeCompleto: "Avaí Futebol Clube",
    rebaixamentos: [2011, 2019]
  },
  "Botafogo-SP": {
    escudo: "escudos/botafogosp.png",
    nomeCompleto: "Botafogo Futebol Clube (Ribeirão Preto)",
    rebaixamentos: []
  },
  "Ceará": {
    escudo: "escudos/ceara.png",
    nomeCompleto: "Ceará Sporting Club",
    rebaixamentos: [1993, 2006, 2011, 2017, 2022]
  },
  "CRB": {
    escudo: "escudos/crb.png",
    nomeCompleto: "Clube de Regatas Brasil",
    rebaixamentos: []
  },
  "Criciúma": {
    escudo: "escudos/criciuma.png",
    nomeCompleto: "Criciúma Esporte Clube",
    rebaixamentos: [2006, 2014, 2024]
  },
  "Cuiabá": {
    escudo: "escudos/cuiaba.png",
    nomeCompleto: "Cuiabá Esporte Clube",
    rebaixamentos: [2024]
  },
  "Fortaleza": {
    escudo: "escudos/fortaleza.png",
    nomeCompleto: "Fortaleza Esporte Clube",
    rebaixamentos: []
  },
  "Goiás": {
    escudo: "escudos/goias.png",
    nomeCompleto: "Goiás Esporte Clube",
    rebaixamentos: [2007, 2010, 2015, 2020, 2023]
  },
  "Novorizontino": {
    escudo: "escudos/novorizontino.png",
    nomeCompleto: "Grêmio Novorizontino",
    rebaixamentos: []
  },
  "Juventude": {
    escudo: "escudos/juventude.png",
    nomeCompleto: "Esporte Clube Juventude",
    rebaixamentos: [2004, 2007, 2022]
  },
  "Londrina": {
    escudo: "escudos/londrina.png",
    nomeCompleto: "Londrina Esporte Clube",
    rebaixamentos: []
  },
  "Náutico": {
    escudo: "escudos/nautico.png",
    nomeCompleto: "Clube Náutico Capibaribe",
    rebaixamentos: [2002, 2013]
  },
  "Operário-PR": {
    escudo: "escudos/operario.png",
    nomeCompleto: "Operário Ferroviário Esporte Clube",
    rebaixamentos: []
  },
  "Operário": {
    escudo: "escudos/operario.png",
    nomeCompleto: "Operário Ferroviário Esporte Clube",
    rebaixamentos: []
  },
  "Ponte Preta": {
    escudo: "escudos/pontepreta.png",
    nomeCompleto: "Associação Atlética Ponte Preta",
    rebaixamentos: [2004, 2013, 2017]
  },
  "Sport": {
    escudo: "escudos/sport.png",
    nomeCompleto: "Sport Club do Recife",
    rebaixamentos: [1989, 1997, 2001, 2009, 2012, 2018]
  },
  "Sport Recife": {
    escudo: "escudos/sport.png",
    nomeCompleto: "Sport Club do Recife",
    rebaixamentos: [1989, 1997, 2001, 2009, 2012, 2018]
  },
  "Sport Club do Recife": {
    escudo: "escudos/sport.png",
    nomeCompleto: "Sport Club do Recife",
    rebaixamentos: [1989, 1997, 2001, 2009, 2012, 2018]
  },
  "Vila Nova": {
    escudo: "escudos/vilanova.png",
    nomeCompleto: "Vila Nova Futebol Clube",
    rebaixamentos: []
  },

  // === Outros clubes históricos ===
  "Guarani": {
    escudo: "escudos/guarani.png",
    nomeCompleto: "Guarani Futebol Clube",
    rebaixamentos: [1989, 1994, 2005, 2010]
  },
  "Santa Cruz": {
    escudo: "escudos/santacruz.png",
    nomeCompleto: "Santa Cruz Futebol Clube",
    rebaixamentos: [2006, 2016]
  },
  "Paraná Clube": {
    escudo: "escudos/paranaclube.png",
    nomeCompleto: "Paraná Clube",
    rebaixamentos: [2007, 2010, 2018]
  },
  "Figueirense": {
    escudo: "escudos/figueirense.png",
    nomeCompleto: "Figueirense Futebol Clube",
    rebaixamentos: [2008, 2016]
  },
  "Paysandu": {
    escudo: "escudos/paysandu.png",
    nomeCompleto: "Paysandu Sport Club",
    rebaixamentos: [2005, 2010]
  },
  "CSA": {
    escudo: "escudos/csa.png",
    nomeCompleto: "Centro Sportivo Alagoano",
    rebaixamentos: [2019]
  },
  "Sampaio Corrêa": {
    escudo: "escudos/sampaiocorrea.png",
    nomeCompleto: "Sampaio Corrêa Futebol Clube",
    rebaixamentos: []
  },
  "Tombense": {
    escudo: "escudos/tombense.png",
    nomeCompleto: "Tombense Futebol Clube",
    rebaixamentos: []
  },
  "Ituano": {
    escudo: "escudos/ituano.png",
    nomeCompleto: "Ituano Futebol Clube",
    rebaixamentos: []
  },
  "ABC": {
    escudo: "escudos/abc.png",
    nomeCompleto: "ABC Futebol Clube",
    rebaixamentos: []
  }
};
