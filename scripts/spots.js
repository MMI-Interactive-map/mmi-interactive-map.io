import {icons} from "./icons.js";

export let spots_places = [
  // {
  //   id: 0,
  //   location: [43.2308973, 0.0753484],
  //   name: "Home",
  //   hours: [
  //     ["Close"], ["Close"], ["Close"], ["Close"], ["Close"], ["Close"], ["Close"]
  //   ],
  //   comment: "Nothing, this is a test",
  //   GoogleMapLink: "mizuena so cute :3",
  //   number: "00 00 00 00 00",
  //   picture: "/src/mizuki_cute_test.jpg",
  //   type: "Test_type",
  //   type_icon: icons["test_icon"],
  //   color: "#6A2D7A"
  // },
  {
    id: 1,
    location: [43.2329997, 0.0744123],
    name: "Pharmacie wellpharma",
    hours: [
      ["08h45-19h00"], ["08h45-19h00"], ["08h45-19h00"], ["08h45-19h00"], ["08h45-19h00"], ["08h45-19h00"], ["Fermé"]
    ],
    comment: "C'est une bonne pharmacie, demande cependant pour certains produit de devoir les commander avant",
    GoogleMapLink: "https://www.google.com/maps/dir//...",
    number: "05 62 34 45 86",
    picture: "/src/pharmacie.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919"
  },
  {
    id: 2,
    location: [43.2319096, 0.0743968],
    name: "Pharmacie Brauhauban",
    hours: [
      ["09h30-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["Fermé"]
    ],
    comment: "Pas de commentaire, ceci est un test",
    GoogleMapLink: "https://www.google.com/maps/dir//...",
    number: "05 62 93 01 67",
    picture: "/src/pharmacie_ba.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919"
  },
  // {
  //   id: 3,
  //   location: [43.2334227, 0.077761],
  //   name: "Restaurant test",
  //   hours: [
  //     ["09h30-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["Fermé"]
  //   ],
  //   comment: "Pas de commentaire, ceci est un test",
  //   GoogleMapLink: "https://www.google.com/maps/dir//...",
  //   number: "05 62 93 01 67",
  //   picture: "/src/pharmacie_ba.png",
  //   type: "Restaurants",
  //   type_icon: icons["restaurant_icon"],
  //   color: "#E2D100"
  // },
  // {
  //   id: 4,
  //   location: [43.234009, 0.0784369],
  //   name: "Partner test",
  //   hours: [
  //     ["09h30-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["08h45-19h30"], ["Fermé"]
  //   ],
  //   comment: "Pas de commentaire, ceci est un test",
  //   GoogleMapLink: "https://www.google.com/maps/dir//...",
  //   number: "05 62 93 01 67",
  //   picture: "/src/pharmacie_ba.png",
  //   type: "Partners",
  //   type_icon: icons["partner_icon"],
  //   color: "#C300BC"
  // },
  {
    id: 5,
    location: [43.2383928,0.0413248],
    name: "KFC",
    hours: [
      ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"]
    ],
    comment: "Rapide, prends la carte étudiante pour une remise de 20% sur une commande",
    GoogleMapLink: "https://www.google.com/maps/dir//KFC+Tarbes,+24+Rte+de+Pau,+65000+Tarbes/@43.2383928,0.0413248,17z/data=!4m16!1m7!3m6!1s0x12a9d4338d1dcf9d:0xd369a03465375c39!2sKFC+Tarbes!8m2!3d43.2383928!4d0.0413248!16s%2Fg%2F1pv5x5ftb!4m7!1m0!1m5!1m1!1s0x12a9d4338d1dcf9d:0xd369a03465375c39!2m2!1d0.0413021!2d43.2383936?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562965268",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 6,
    location: [43.2214989,0.050555],
    name: "McDonald's Tarbes",
    hours: [
      ["10h30-00h00"], ["10h30-00h00"], ["10h30-00h00"], ["10h30-00h00"], ["10h30-00h00"], ["10h30-01h00"], ["10h30-01h00"]
    ],
    comment: "Un peu loin de l'IUT, voir pour prendre le T1 de Verdun ou marcher 20min depuis l'IUT",
    GoogleMapLink: "https://www.google.com/maps/dir//McDonald's,+66+Av.+Aristide+Briand,+65000+Tarbes/@43.2232706,0.0527063,15z/data=!4m16!1m7!3m6!1s0x12a9d465d9af90df:0xe5439802e38997d0!2sMcDonald's!8m2!3d43.2214994!4d0.0608333!16s%2Fg%2F1vx7bp1b!4m7!1m0!1m5!1m1!1s0x12a9d465d9af90df:0xe5439802e38997d0!2m2!1d0.0608713!2d43.221437?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562935656",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 7,
    location: [43.230000, 0.070000],
    name: "McDonald's  Ibos",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "Difficile d'accès depuis le T1 d'Ibos, traverser la nationnale",
    GoogleMapLink: "https://www.google.com/maps/dir//McDonald's,+7+Rte+de+Pau,+65420+Ibos/@43.2414416,0.0139159,16z/data=!4m16!1m7!3m6!1s0xd562a05657e3259:0xbe74b60f3edc4c3b!2sMcDonald's!8m2!3d43.2413177!4d0.0183642!16s%2Fg%2F1td3zqqr!4m7!1m0!1m5!1m1!1s0xd562a05657e3259:0xbe74b60f3edc4c3b!2m2!1d0.0184747!2d43.2413037?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 8,
    location: [43.2686768,0.0611789],
    name: "McDonald's Bordères-sur-l'Échez",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 9,
    location: [43.237315363752174, 0.04516873548646833],
    name: "Burger King Tarbes",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 10,
    location: [43.24148145320575, 0.07862555705333908],
    name: "Petit Pierrot",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 11,
    location: [43.23314292290253, 0.07386826228957867],
    name: "Chez Marcel",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 12,
    location: [43.233001356194634, 0.07562851201080051],
    name: "Kapadokya döner",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 13,
    location: [43.2330378231854, 0.07474631996045321],
    name: "Crousty Rice - Tarbes",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 14,
    location: [43.239565325953215, 0.06802481256859469],
    name: "O NaaN",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  // {
  //   id: 15,
  //   location: [43.230000, 0.070000],
  //   name: "Naan 2",
  //   hours: [
  //     ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Restaurants",
  //   type_icon: icons["restaurant_icon"],
  //   color: "#E2D100"
  // },
  // {
  //   id: 16,
  //   location: [43.230000, 0.070000],
  //   name: "Soulinan",
  //   hours: [
  //     ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Restaurants",
  //   type_icon: icons["restaurant_icon"],
  //   color: "#E2D100"
  // },
  {
    id: 17,
    location: [43.22441221792868, 0.04448681626401397],
    name: "Quick Tarbes",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 18,
    location: [43.24079452343024, 0.07357493345448543],
    name: "Jules & John Tarbes",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  // {
  //   id: 19,
  //   location: [43.230000, 0.070000],
  //   name: "Kebab (T2)",
  //   hours: [
  //     ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Restaurants",
  //   type_icon: icons["restaurant_icon"],
  //   color: "#E2D100"
  // },
  {
    id: 20,
    location: [43.24228251386642, 0.02033975859391513],
    name: "Fujin Ibos",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 21,
    location: [43.23926706573353, 0.015011603949695492],
    name: "Subway Ibos",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 22,
    location: [43.22958003579569, 0.056713785023274545],
    name: "Le Sakura",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100"
  },
  {
    id: 23,
    location: [43.23556756571121, 0.05596081201093759],
    name: "Carrefour Market",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 24,
    location: [43.23224592122665, 0.07861944324965431],
    name: "Carrefour City",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 26,
    location: [43.23331942204437, 0.06365486413762207],
    name: "Netto Tarbes",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 27,
    location: [43.238452916838746, 0.046949900710068146],
    name: "Lidl",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 28,
    location: [43.232678673710474, 0.07675066228953674],
    name: "Ding Fring",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 29,
    location: [43.235012316135006, 0.046853792415628995],
    name: "Grand Frais",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 30,
    location: [43.2388280478346, 0.04514553884202606],
    name: "Gifi",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 31,
    location: [43.23854377868418, 0.03933018379737043],
    name: "Centrakor",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 32,
    location: [43.238213350608206, 0.037494958248707244],
    name: "Cash 31",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 33,
    location: [43.24478705129032, 0.027187642869071306],
    name: "Cash Express Ibos",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 34,
    location: [43.240511418865054, 0.012602419960755758],
    name: "Leclerc Ibos",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 35,
    location: [43.23405702198432, 0.08195093851886612],
    name: "Intermarché Braubahauban",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 36,
    location: [43.25112612411141, 0.06924799736636289],
    name: "Intermarché Super Tarbes",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  // {
  //   id: 37,
  //   location: [43.230000, 0.070000],
  //   name: "Centre Commercial Ibos",
  //   hours: [
  //     ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Magasins",
  //   type_icon: icons["store_icon"],
  //   color: "#00A2FF"
  // },
  {
    id: 38,
    location: [43.23789034975553, 0.019619711696504755],
    name: "Action Ibos",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 39,
    location: [43.259190080045464, 0.07220915596588634],
    name: "Action 2 Tarbes",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 40,
    location: [43.2407008583896, 0.02060827736069244],
    name: "Kiabi Ibos",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 41,
    location: [43.23671313501331, 0.047550992637200494],
    name: "Decathlon Tarbes",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 42,
    location: [43.23287290683964, 0.07472629297304713],
    name: "La Mie Câline",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 43,
    location: [43.2329119906755, 0.0748711322513907],
    name: "TLP Mobilités",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 44,
    location: [43.24004836909606, 0.07077358565289783],
    name: "Gare SNCF",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF"
  },
  {
    id: 45,
    location: [43.22957398574712, 0.07996806779134943],
    name: "Caf HaPy",
    hours: [
      ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733"
  },
  {
    id: 46,
    location: [43.22968342634802, 0.08045622980354446],
    name: "CPAM des Hautes-Pyrénées",
    hours: [
      ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733"
  },
  // {
  //   id: 47,
  //   location: [43.230000, 0.070000],
  //   name: "Palais de Justice",
  //   hours: [
  //     ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Administration",
  //   type_icon: icons["administation_icon"],
  //   color: "#FF5733"
  // },
  {
    id: 48,
    location: [43.2337366109457, 0.07682971456629156],
    name: "Commissariat de police de Tarbes",
    hours: [
      ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733"
  },
  // {
  //   id: 49,
  //   location: [43.230000, 0.070000],
  //   name: "Free",
  //   hours: [
  //     ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Administration",
  //   type_icon: icons["administation_icon"],
  //   color: "#FF5733"
  // },
  // {
  //   id: 50,
  //   location: [43.230000, 0.070000],
  //   name: "Boyeeg",
  //   hours: [
  //     ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["09h00-17h00"], ["Fermé"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Administration",
  //   type_icon: icons["administation_icon"],
  //   color: "#FF5733"
  // },
  {
    id: 51,
    location: [43.22045963060063, 0.057008996668536024],
    name: "Hospital Center De Bigorre",
    hours: [
      ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-12h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919"
  },
  // {
  //   id: 52,
  //   location: [43.230000, 0.070000],
  //   name: "Pharmaacie",
  //   hours: [
  //     ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-12h00"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Médical",
  //   type_icon: icons["medical_icon"],
  //   color: "#6BC919"
  // },
  // {
  //   id: 53,
  //   location: [43.230000, 0.070000],
  //   name: "Maison de Santé",
  //   hours: [
  //     ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-12h00"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Médical",
  //   type_icon: icons["medical_icon"],
  //   color: "#6BC919"
  // },
  {
    id: 54,
    location: [43.24491252169131, 0.0641318064672357],
    name: "Planning familial 65",
    hours: [
      ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-12h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919"
  },
  {
    id: 55,
    location: [43.23188267705487, 0.08500771385880658],
    name: "Inovie Biopyrénées - Tarbes Marcadieu",
    hours: [
      ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-19h00"], ["08h00-12h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919"
  },
  {
    id: 56,
    location: [43.24090655471263, 0.08178013715054284],
    name: "Crédit Agricole",
    hours: [
      ["Fermé"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-12h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Banques",
    type_icon: icons["bank_icon"],
    color: "#FFC300"
  },
  // {
  //   id: 57,
  //   location: [43.230000, 0.070000],
  //   name: "Société general",
  //   hours: [
  //     ["Fermé"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-17h30"], ["09h00-12h30"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Banques",
  //   type_icon: icons["bank_icon"],
  //   color: "#FFC300"
  // },
  {
    id: 58,
    location: [43.239917804652535, 0.017480027352864063],
    name: "Up2play Ibos",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 59,
    location: [43.24154681594269, 0.07854899297337725],
    name: "Bowling - Tarbes Arsenal",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 60,
    location: [43.241234188858286, 0.07933219795997584],
    name: "Cinéma CGR Arsenal",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 61,
    location: [43.238021948507225, 0.07619926839134204],
    name: "Park Massey Tarbes",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  // {
  //   id: 62,
  //   location: [43.230000, 0.070000],
  //   name: "Musées",
  //   hours: [
  //     ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Activités",
  //   type_icon: icons["activity_icon"],
  //   color: "#FF33A8"
  // },
  {
    id: 63,
    location: [43.239432926225035, 0.01344842236624706],
    name: "Parvis Scène Nationale Tarbes Pyrenees",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 64,
    location: [43.24147092204178, 0.07933898132770717],
    name: "Lazer Quest Tarbes",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 65,
    location: [43.23700211250697, 0.0466023236566732],
    name: "Plan B Tarbes",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  {
    id: 66,
    location: [43.24109213296388, 0.07784199297337406],
    name: "Blackout Tarbes",
    hours: [
      ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/placeholder.png",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8"
  },
  // {
  //   id: 68,
  //   location: [43.230000, 0.070000],
  //   name: "Parc d'exposition",
  //   hours: [
  //     ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-23h00"], ["14h00-01h00"], ["14h00-01h00"], ["14h00-20h00"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/placeholder.png",
  //   type: "Activités",
  //   type_icon: icons["activity_icon"],
  //   color: "#FF33A8"
  // }
];