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
  //   color: "#6A2D7A",
  //   zoomValue: 13
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
    number: "0562344586",
    picture: "/src/pharmacie.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919",
    zoomValue: 13
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
    number: "0562930167",
    picture: "/src/pharmacie_ba.png",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919",
    zoomValue: 14
  },
  {
    id: 5,
    location: [43.23840601802414, 0.041308664053504154],
    name: "KFC",
    hours: [
      ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"]
    ],
    comment: "Rapide, prends la carte étudiante pour une remise de 20% sur une commande en payant au comptoire",
    GoogleMapLink: "https://www.google.com/maps/dir//KFC+Tarbes,+24+Rte+de+Pau,+65000+Tarbes/@43.238252,0.0412701,17z/data=!4m16!1m7!3m6!1s0x12a9d4338d1dcf9d:0xd369a03465375c39!2sKFC+Tarbes!8m2!3d43.2383928!4d0.0413248!16s%2Fg%2F1pv5x5ftb!4m7!1m0!1m5!1m1!1s0x12a9d4338d1dcf9d:0xd369a03465375c39!2m2!1d0.0413021!2d43.2383936?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562965268",
    picture: "/src/kfc.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 6,
    location: [43.221468127085686, 0.060862804273980095],
    name: "McDonald's Tar",
    hours: [
      ["10h30-00h00"], ["10h30-00h00"], ["10h30-00h00"], ["10h30-00h00"], ["10h30-01h00"], ["10h30-01h00"], ["10h30-00h00"]
    ],
    comment: "Un peu loin de l'IUT, voir pour prendre le T1 de Verdun ou marcher 20min depuis l'IUT",
    GoogleMapLink: "https://www.google.com/maps/dir//McDonald's,+66+Av.+Aristide+Briand,+65000+Tarbes/@43.2215287,0.0605423,19z/data=!4m16!1m7!3m6!1s0x12a9d465d9af90df:0xe5439802e38997d0!2sMcDonald's!8m2!3d43.2214994!4d0.0608333!16s%2Fg%2F1vx7bp1b!4m7!1m0!1m5!1m1!1s0x12a9d465d9af90df:0xe5439802e38997d0!2m2!1d0.0608713!2d43.221437?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562935656",
    picture: "/src/mcdo.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 7,
    location: [43.24130402254873, 0.018420526359407077],
    name: "McDonald's",
    hours: [
      ["10h30-23h00"], ["10h30-23h00"], ["10h30-23h00"], ["10h30-23h00"], ["10h30-23h00"], ["10h30-23h00"], ["11h00-22h30"]
    ],
    comment: "Difficile d'accès depuis le T1 d'Ibos, traverser la nationnale",
    GoogleMapLink: "https://www.google.com/maps/dir//McDonald's,+7+Rte+de+Pau,+65420+Ibos/@43.2412752,0.0180363,19z/data=!4m16!1m7!3m6!1s0xd562a05657e3259:0xbe74b60f3edc4c3b!2sMcDonald's!8m2!3d43.2413177!4d0.0183642!16s%2Fg%2F1td3zqqr!4m7!1m0!1m5!1m1!1s0xd562a05657e3259:0xbe74b60f3edc4c3b!2m2!1d0.0184747!2d43.2413037?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562901313",
    picture: "/src/mcdo2.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 8,
    location: [43.268749562582315, 0.07147329325535867],
    name: "McDonald's",
    hours: [
      ["11h00-23h00"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-00h00"], ["11h00-00h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/dir//McDonald's,+10+Rte+de+Bordeaux,+65320+Bord%C3%A8res-sur-l'%C3%89chez/@43.2686441,0.0710267,19z/data=!4m16!1m7!3m6!1s0x12a9d69bc5554fdd:0x6fd4f00545a849f6!2sMcDonald's!8m2!3d43.2686773!4d0.0714572!16s%2Fg%2F1pzr5086l!4m7!1m0!1m5!1m1!1s0x12a9d69bc5554fdd:0x6fd4f00545a849f6!2m2!1d0.0715323!2d43.2687033?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562317460",
    picture: "/src/mcdo3.png",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 9,
    location: [43.237315363752174, 0.04516873548646833],
    name: "Burger King Tarbes",
    hours: [
      ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-22h30"], ["11h00-23h00"], ["11h00-23h00"], ["11h00-22h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Burger+King/@43.2373911,0.0405559,16z/data=!4m14!1m7!3m6!1s0x12a9d3841314ff4b:0x1e9a61d9526e8aac!2sBurger+King!8m2!3d43.219074!4d0.0803888!16s%2Fg%2F11g8kvb5w4!3m5!1s0x12a9d5002558431d:0x2b10ff65d58c9fc7!8m2!3d43.2371722!4d0.0452483!16s%2Fg%2F11wfdrrgxm?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0554550627",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 10,
    location: [43.241254374305974, 0.07771763495371369],
    name: "Petit Pierrot",
    hours: [
      ["Fermé"], ["11h00-00h00"], ["11h00-00h00"], ["11h00-02h00"], ["11h00-02h00"], ["11h00-02h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/dir//Petit+Pierrot,+7+Av.+des+Forges,+65000+Tarbes/@43.2412661,0.0776915,20z/data=!4m16!1m7!3m6!1s0x12a9d32193016561:0x2721d96d215d6ea8!2sPetit+Pierrot!8m2!3d43.2412236!4d0.0778209!16s%2Fg%2F11k4hjfvzb!4m7!1m0!1m5!1m1!1s0x12a9d32193016561:0x2721d96d215d6ea8!2m2!1d0.0778209!2d43.2412236?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562375211",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 11,
    location: [43.23297253515726, 0.07353731251115758],
    name: "Chez Marcel",
    hours: [
      ["09h00-00h00"], ["09h00-00h00"], ["09h00-00h00"], ["09h00-00h00"], ["09h00-00h00"], ["09h00-00h00"], ["09h00-05h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Chez+Marcel/@43.2329783,0.0632681,15z/data=!3m2!4b1!5s0x12a9d40ab5800705:0xfd90e34d83d9799d!4m6!3m5!1s0x12a9d53294722aa3:0x50be7c3ba9c98378!8m2!3d43.2329788!4d0.0735464!16s%2Fg%2F11hd_d2mz0?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562569931",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 12,
    location: [43.23287143129735, 0.07502769997888897],
    name: "Kapadokya döner",
    hours: [
      ["11h00-14h30 | 15h30-00h00"], ["11h00-14h30 | 15h30-00h00"], ["11h00-14h30 | 15h30-00h00"], ["11h00-14h30 | 15h30-00h00"], ["11h00-14h30 | 15h30-00h00"], ["11h00-14h30 | 15h30-00h00"], ["17h00-00h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Kapadokya+d%C3%B6ner/@43.232868,0.0647494,15z/data=!3m2!4b1!5s0x12a9d3f55373ccd5:0xa2d9e837f310b1ba!4m6!3m5!1s0x12a9d3ad688dd3f5:0x30ced59339dde69!8m2!3d43.2328685!4d0.0750277!16s%2Fg%2F11xmvqrk07?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0983424502",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 13,
    location: [43.2328751656479, 0.0744023294121297],
    name: "Crousty Rice",
    hours: [
      ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"]
    ],
    comment: "Offre étudiante à 8,50€ en la présentant au comptoire",
    GoogleMapLink: "https://www.google.com/maps/place/Crousty+Rice+-+Tarbes/@43.2328732,0.0641033,15z/data=!3m1!4b1!4m6!3m5!1s0x12a9d55a870e005b:0xfec77e05b1d464f5!8m2!3d43.2328737!4d0.074403!16s%2Fg%2F11mcw04lmt?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0956436961",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 14,
    location: [43.239565325953215, 0.06802481256859469],
    name: "O NaaN",
    hours: [
      ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"], ["11h30-23h00"]
    ],
    comment: "Pas d'offre étudiantes mais le moins cher possible (Bon raport qualité / prix)",
    GoogleMapLink: "hhttps://www.google.com/maps/place/O+NaaN/@43.2394867,0.0653748,17z/data=!4m6!3m5!1s0x12a9d38a12ce6629:0x90325e9280a8317a!8m2!3d43.2394403!4d0.0679819!16s%2Fg%2F11sr04sqnz?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562936166",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 17,
    location: [43.22441221792868, 0.04448681626401397],
    name: "Quick",
    hours: [
      ["11h00-22h00"], ["11h00-22h00"], ["11h00-22h00"], ["11h00-22h00"], ["11h00-22h00"], ["11h00-22h00"], ["11h00-22h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Quick/@43.2244274,0.0417187,17z/data=!3m1!5s0x12a9d44e3d3df7bf:0x585b27fc290e6d9d!4m6!3m5!1s0x12a9d5a9365f8f23:0xf5b40a6dc9be7208!8m2!3d43.2242168!4d0.0442937!16s%2Fg%2F11w8r70l9r?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0564010038",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 18,
    location: [43.24067254609665, 0.07326265539848424],
    name: "Jules & John",
    hours: [
      ["06h30-21h30"], ["06h30-21h30"], ["06h30-21h30"], ["06h30-21h30"], ["06h30-22h00"], ["06h30-22h00"], ["06h30-22h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Jules+%26+John/@43.240669,0.0721372,17z/data=!4m6!3m5!1s0x12a9d5ef4f40a58f:0xfc64403efe6f83b!8m2!3d43.2406695!4d0.0732638!16s%2Fg%2F11fgk2cr08?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562948413",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 20,
    location: [43.242119392547764, 0.02016809994841397],
    name: "Fujin",
    hours: [
      ["12h00–14h30 | 19h00–22h30"], ["12h00–14h30 | 19h00–22h30"], ["12h00–14h30 | 19h00–22h30"], ["19h00–22h30"], ["12h00–14h30 | 19h00–22h30"], ["12h00–14h30 | 19h00–22h30"], ["12h00–14h30 | 19h00–22h30"]
    ],
    comment: "Plutôt cher, sans voiture, il est dur d'y aller",
    GoogleMapLink: "https://www.google.com/maps/place/Fujin/@43.2421258,0.0098684,15z/data=!3m2!4b1!5s0x12a9d5c2b5c34709:0x90cf8ef1ca146845!4m6!3m5!1s0x12a9d5b220c66a8b:0x907ee1ad0d0aed20!8m2!3d43.2421106!4d0.0201681!16s%2Fg%2F11vb4g_j_l?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562537627",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 21,
    location: [43.23921171264734, 0.01503445730516317],
    name: "Subway",
    hours: [
      ["10h00–20h00"], ["10h00–20h00"], ["10h00–20h00"], ["10h00–20h00"], ["10h00–20h00"], ["10h00–20h00"], ["12h00–15h00 | 18h00–20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Subway/@43.2396567,0.0146686,18z/data=!3m1!5s0x12a9d5eed83cbb13:0x10015d218483ec9c!4m6!3m5!1s0x12a9d5e8da16a9a1:0xd7b03e0f40692cd1!8m2!3d43.2391918!4d0.0150331!16s%2Fg%2F11b6p6d9t2?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562342793",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 22,
    location: [43.22937486293, 0.056049941060207484],
    name: "Le Sakura",
    hours: [
      ["09h30–14h30 | 17h00–21h30"], ["09h30–14h30 | 17h00–21h30"], ["09h30–14h30 | 17h00–21h30"], ["09h30–14h30 | 17h00–21h30"], ["09h30–14h30 | 17h00–21h30"], ["09h30–14h30 | 17h00-21h30"], ["17h00–21h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Le+Sakura+Asian+Fast+Food+Tarbes/@43.2293842,0.0457489,15z/data=!3m1!4b1!4m6!3m5!1s0x12a9d39bbe901687:0x5968e511b665acf3!8m2!3d43.229369!4d0.0560486!16s%2Fg%2F11bwq8z_t4?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562511888",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Restaurants",
    type_icon: icons["restaurant_icon"],
    color: "#E2D100",
    zoomValue: 13
  },
  {
    id: 23,
    location: [43.23539759254449, 0.055359985150412426],
    name: "Carrefour Market",
    hours: [
      ["08h30–19h30"], ["08h30–19h30"], ["08h30–19h30"], ["08h30–19h30"], ["08h30-19h30"], ["08h30-19h30"], ["09h00–12h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Carrefour+Market+Tarbes+Lacaussade/@43.2355537,0.0549891,19z/data=!4m10!1m2!2m1!1sCarrefour+Market!3m6!1s0x12a9d415878e0467:0xc7f37bd2d0c2a25b!8m2!3d43.23538!4d0.05536!15sChBDYXJyZWZvdXIgTWFya2V0IgOIAQFaEiIQY2FycmVmb3VyIG1hcmtldJIBC3N1cGVybWFya2V0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVF0TkhRMmNHZG5SUkFC4AEA-gEECAAQPQ!16s%2Fg%2F11xqzgg51?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562938168",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 24,
    location: [43.23212713065739, 0.07923389569016591],
    name: "Carrefour City",
    hours: [
      ["07h00-22h00"], ["07h00-22h00"], ["07h00-22h00"], ["07h00-22h00"], ["07h00-22h00"], ["07h00-22h00"], ["07h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Carrefour+City/@43.2357066,0.0543122,14z/data=!4m10!1m2!2m1!1sCarrefour+City+tarbes!3m6!1s0x12a9d53f2878b823:0xeb60376c7051abef!8m2!3d43.2321129!4d0.0782974!15sChVDYXJyZWZvdXIgQ2l0eSB0YXJiZXMiA4gBAVoXIhVjYXJyZWZvdXIgY2l0eSB0YXJiZXOSAQtzdXBlcm1hcmtldJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VORWJFcHhXRWwzRUFF4AEA-gEECCQQSA!16s%2Fg%2F11vbclyzxb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562535027",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 26,
    location: [43.23322318319672, 0.06325252580380253],
    name: "Netto",
    hours: [
      ["08h00-19h30"], ["08h00-19h30"], ["08h00-19h30"], ["08h00-19h30"], ["08h00-19h30"], ["08h00-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Netto+Tarbes/@43.2358315,-0.0074887,12z/data=!4m10!1m2!2m1!1sNetto!3m6!1s0x12a9d4133405272f:0x2bb0824043d70a4c!8m2!3d43.2332022!4d0.0632579!15sCgVOZXR0byIDiAEBWgciBW5ldHRvkgEUZGlzY291bnRfc3VwZXJtYXJrZXSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTllOMlZMUlVWbkVBReABAPoBBAgAEEk!16s%2Fg%2F1pp2t_vn7?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562349432",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 27,
    location: [43.2365648317045, 0.04532443857239676],
    name: "Lidl",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 28,
    location: [43.232678673710474, 0.07675066228953674],
    name: "Ding Fring",
    hours: [
      ["08h30-20h00"], ["08h30-20h00"], ["08h30-20h00"], ["08h30-20h00"], ["08h30-20h00"], ["08h30-20h00"], ["08h30-12h15"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Lidl/@43.2369131,0.0433623,17z/data=!4m9!1m2!2m1!1sNetto!3m5!1s0x12a9d437487d3ba1:0xb352ecbffadbca50!8m2!3d43.2365094!4d0.045326!16s%2Fg%2F11c42nf4rg?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0188247070",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 29,
    location: [43.23473383677849, 0.04599767303259615],
    name: "Grand Frais",
    hours: [
      ["09h00-20h00"], ["09h00-20h00"], ["09h00-20h00"], ["09h00-20h00"], ["09h00-20h00"], ["09h00-20h00"], ["09h00-12h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Grand+Frais+Tarbes/@43.235897,0.043652,17z/data=!4m9!1m2!2m1!1sNetto!3m5!1s0x12a9d5c08af99017:0xc2cb93a8bac83376!8m2!3d43.2347544!4d0.0458882!16s%2Fg%2F11tcc5_6sf?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562344870",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 30,
    location: [43.23897347467577, 0.04462894825310785],
    name: "Gifi",
    hours: [
      ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["10h00-12h30 | 14h00-18h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/GiFi+TARBES/@43.2388437,0.0418496,17z/data=!4m9!1m2!2m1!1sNetto!3m5!1s0x12a9d4373520785d:0x15a885402ad131e9!8m2!3d43.2388753!4d0.0447116!16s%2Fg%2F1tr85z28?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562345644",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 31,
    location: [43.237877427149094, 0.0393350748539817],
    name: "Centrakor",
    hours: [
      ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["09h30-19h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Centrakor+Ibos/@43.2383097,0.0382625,19z/data=!4m6!3m5!1s0x12a9d43380942491:0x7e068b29b52940ce!8m2!3d43.238434!4d0.038688!16s%2Fg%2F11b7xnwn4x?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562441174",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 32,
    location: [43.23810454927675, 0.03788737606734253],
    name: "Cash 31",
    hours: [
      ["14h00–19h00"], ["10h00–12h00 | 14h00–19h00"], ["10h00–12h00 | 14h00–19h00"], ["10h00–12h00 | 14h00–19h00"], ["10h00–12h00 | 14h00–19h00"], ["10h00–19h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Cash+31/@43.2381613,0.0374165,19z/data=!3m1!5s0x12a9d433507b846d:0x3a6bf9ea144a93e!4m6!3m5!1s0xd562a2f7391162d:0xa7b50b22d8214641!8m2!3d43.2380821!4d0.037889!16s%2Fg%2F1tdv9rl3?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562561983",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 33,
    location: [43.24208836613599, 0.01989731323864474],
    name: "Cash Express",
    hours: [
      ["14h00–19h00"], ["10h00–12h30 | 14h00–19h00"], ["10h00–12h30 | 14h00–19h00"], ["10h00–12h30 | 14h00–19h00"], ["10h00–12h30 | 14h00–19h00"], ["10h00–12h30 | 14h00–19h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Cash+Express+Magasin+d'occasions+Multim%C3%A9dia,+Image+et+Son,+T%C3%A9l%C3%A9phonie,+Bijoux,+Achat+d'or/@43.2421777,0.0197068,21z/data=!3m1!5s0x12a9d5c2b5c34709:0x90cf8ef1ca146845!4m6!3m5!1s0x12a9d5ea19282fc3:0x5bf55cf6f0fd2272!8m2!3d43.2420824!4d0.019898!16s%2Fg%2F11rr7jxw3q?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562464434",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 34,
    location: [43.240146522884615, 0.012376511850578016],
    name: "Leclerc",
    hours: [
      ["08h00-20h15"], ["08h00-20h15"], ["08h00-20h15"], ["08h00-20h15"], ["08h00-20h15"], ["08h00-20h15"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 35,
    location: [43.23083644839829, 0.07449395613191195],
    name: "Intermarché Express",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/E.Leclerc+IBOS+CEDEX+9/@43.2425165,0.0051477,15z/data=!3m1!5s0x12a9d5eed83cbb13:0x10015d218483ec9c!4m14!1m7!3m6!1s0x12a9d5b220c66a8b:0x907ee1ad0d0aed20!2sFujin!8m2!3d43.2421106!4d0.0201681!16s%2Fg%2F11vb4g_j_l!3m5!1s0xd562a05655f0f91:0xac2d4158e7065332!8m2!3d43.2403395!4d0.0122591!16s%2Fg%2F1tcwys0_?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562906262",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 36,
    location: [43.25048097331446, 0.0719531069428401],
    name: "Intermarché Super",
    hours: [
      ["08h00-19h45"], ["08h00-19h45"], ["08h00-19h45"], ["08h00-19h45"], ["08h00-19h45"], ["08h00-19h45"], ["08h30-12h30"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Intermarch%C3%A9+SUPER+Tarbes/@43.2401468,-0.0429282,12z/data=!4m10!1m2!2m1!1sIntermarch%C3%A9+Super!3m6!1s0x12a9d40033d3498f:0x8c0506d661f9f95d!8m2!3d43.250469!4d0.0719582!15sChJJbnRlcm1hcmNow6kgU3VwZXIiA4gBAVoUIhJpbnRlcm1hcmNow6kgc3VwZXKSAQtzdXBlcm1hcmtldJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSc2IwNVBTM0ZSUlJBQuABAPoBBAgAED0!16s%2Fg%2F1vq89d1t?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562378585",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 38,
    location: [43.23785402483252, 0.019433710176029524],
    name: "Action",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "00 00 00 00 00",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 39,
    location: [43.25837388984512, 0.07099374556096169],
    name: "Action",
    hours: [
      ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Action+Tarbes/@43.2379554,0.0179594,18z/data=!4m9!1m2!2m1!1sIntermarch%C3%A9+super!3m5!1s0xd562bb83001d94d:0x42adddbcad22f8ab!8m2!3d43.2378386!4d0.019431!16s%2Fg%2F11qndmkccx?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0155564152",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 40,
    location: [43.2407008583896, 0.02060827736069244],
    name: "Kiabi",
    hours: [
      ["09h30-19h30"], ["09h30-19h30"], ["09h30-19h30"], ["09h30-19h30"], ["09h30-19h30"], ["09h30-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Kiabi/@43.2404949,0.0196052,18z/data=!3m1!5s0x12a9d5c2fc7eca39:0x4c86267ae2a0b0c!4m6!3m5!1s0x12a9d58b34b8d8d1:0x5145673032d5270c!8m2!3d43.2406368!4d0.0205216!16s%2Fg%2F1tv6s_9g?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562901415",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  // {
  //   id: 41,
  //   location: [43.236618842598034, 0.04711107488231432],
  //   name: "Decathlon",
  //   hours: [
  //     ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["08h30-19h30"], ["Fermé"]
  //   ],
  //   comment: "À compléter",
  //   GoogleMapLink: "#",
  //   number: "00 00 00 00 00",
  //   picture: "/src/mizuki_cute_test.jpg",
  //   type: "Magasins",
  //   type_icon: icons["store_icon"],
  //   color: "#00A2FF",
  //   zoomValue: 13
  // },
  {
    id: 42,
    location: [43.23272538484126, 0.07432459634081699],
    name: "La Mie Câline",
    hours: [
      ["07h00-19h30"], ["07h00-19h30"], ["07h00-19h30"], ["07h00-19h30"], ["07h00-19h30"], ["07h00-19h30"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/La+Mie+C%C3%A2line/@43.2328945,0.074029,19z/data=!4m6!3m5!1s0x12a9d47552fd3b0d:0x99c8250e99ba9468!8m2!3d43.2327166!4d0.0743186!16s%2Fg%2F1tzhzbbb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562519031",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 43,
    location: [43.23296625376336, 0.07476676639374655],
    name: "TLP Mobilités",
    hours: [
      ["09h00-13h00 | 14h00-17h30"], ["09h00-13h00 | 14h00-17h30"], ["09h00-13h00 | 14h00-17h30"], ["09h00-13h00 | 14h00-17h30"], ["09h00-13h00 | 14h00-17h30"], ["Fermé"], ["Fermé"]
    ],
    comment: "Faire la mise à jour de la carte avant le 18 Octobre",
    GoogleMapLink: "https://www.google.com/maps/place/TLP+Mobilit%C3%A9s/@43.2328886,0.0743868,20z/data=!4m6!3m5!1s0x12a9d5185d2e7a4d:0xe36ec67ba3a8a3bc!8m2!3d43.2328563!4d0.0746269!16s%2Fg%2F11mvqclgmy?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562931393",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 44,
    location: [43.24013184522909, 0.07005479524594305],
    name: "Gare SNCF",
    hours: [
      [], [], [], [], [], [], []
    ],
    comment: "À compléter",
    GoogleMapLink: "#",
    number: "0184943635",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Magasins",
    type_icon: icons["store_icon"],
    color: "#00A2FF",
    zoomValue: 13
  },
  {
    id: 45,
    location: [43.22957398574712, 0.07996806779134943],
    name: "Caf",
    hours: [
      ["08h45-12h15 | 13h15-16h15"], ["08h45-12h15 | 13h15-16h15"], ["08h45-12h15 | 13h15-16h15"], ["08h45-12h15 | 13h15-16h15"], ["08h45-12h15 | 13h15-16h15"], ["Fermé"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Caf+HaPy/@43.2407551,0.0498322,14z/data=!4m10!1m2!2m1!1sCaf+Tarbes!3m6!1s0x12a9d38c7bf9e36f:0x4a93559cc2b4ffbb!8m2!3d43.2295447!4d0.0798581!15sCgpDYWYgVGFyYmVzIgOIAQGSARBjb3Jwb3JhdGVfb2ZmaWNl4AEA!16s%2Fg%2F11b6btvb4w?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0969325252",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733",
    zoomValue: 13
  },
  {
    id: 46,
    location: [43.22967516142773, 0.08029126328754954],
    name: "CPAM",
    hours: [
      ["08h30-12h30 | 13h30-17h00"], ["08h30-12h30 | 13h30-17h00"], ["08h30-12h30 | 13h30-17h00"], ["08h30-12h30 | 13h30-17h00"], ["08h30-12h30 | 13h30-17h00"], ["Fermé"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/CPAM+des+Hautes-Pyr%C3%A9n%C3%A9es/@43.2302857,0.079714,18z/data=!4m6!3m5!1s0x12a9d38c68bed821:0xa777481105fb6018!8m2!3d43.2296063!4d0.080297!16s%2Fg%2F11b6dnp0kw?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0184903646",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733",
    zoomValue: 13
  },
  {
    id: 48,
    location: [43.23372832326439, 0.07634149527313805],
    name: "Commissariat",
    hours: [
      ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Commissariat+de+police+de+Tarbes/@43.2337847,0.0757942,19z/data=!4m6!3m5!1s0x12a9d3f53b7e765f:0x4848fde9caf987e7!8m2!3d43.2335843!4d0.0764437!16s%2Fg%2F11b6dph4l9?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0581752300",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Administration",
    type_icon: icons["administation_icon"],
    color: "#FF5733",
    zoomValue: 13
  },
  {
    id: 51,
    location: [43.22045963060063, 0.057008996668536024],
    name: "Hôpital",
    hours: [
      ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Centre+hospitalier+Tarbes+-+Lourdes/@43.2226239,0.0484659,15z/data=!4m6!3m5!1s0x12a9d40d6daacb6b:0x5c27f63b73592c12!8m2!3d43.2202642!4d0.0564511!16s%2Fg%2F1tds9177?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562515151",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919",
    zoomValue: 15
  },
  {
    id: 54,
    location: [43.24491252169131, 0.0641318064672357],
    name: "Planning familial 65",
    hours: [
      ["Fermé"], ["Fermé"], ["Fermé"], ["Fermé"], ["Fermé"], ["14h00-16h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Planning+familial+65/@43.244748,0.0534566,15z/data=!3m1!4b1!4m6!3m5!1s0x12a9d36a7c096a31:0xe477ce4b6f3429ed!8m2!3d43.2447328!4d0.0637563!16s%2Fg%2F11x_mzlx5h?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0744403114",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919",
    zoomValue: 16
  },
  {
    id: 55,
    location: [43.23188267705487, 0.08500771385880658],
    name: "Inovie Biopyrénées",
    hours: [
      ["07h00-18h00"], ["08h00-19h00"], ["07h00-18h00"], ["07h00-18h00"], ["07h00-18h00"], ["07h30-13h00"], ["Fermé"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/INOVIE+Biopyr%C3%A9n%C3%A9es+-+Tarbes+Ormeau-Giacardy/@43.2288939,0.0701293,15z/data=!4m10!1m2!2m1!1sInovie+Biopyr%C3%A9n%C3%A9es+tarbes!3m6!1s0x12a9d389a7b519c5:0x5a6348a466a3bea0!8m2!3d43.225781!4d0.077127!15sChtJbm92aWUgQmlvcHlyw6luw6llcyB0YXJiZXMiA4gBAVodIhtpbm92aWUgYmlvcHlyw6luw6llcyB0YXJiZXOSAQttZWRpY2FsX2xhYpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOcWRpMDNURzVSUlJBQuABAPoBBAgAEBQ!16s%2Fg%2F1tt7j01v?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562340947",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Médical",
    type_icon: icons["medical_icon"],
    color: "#6BC919",
    zoomValue: 17
  },
  {
    id: 56,
    location: [43.24090655471263, 0.08178013715054284],
    name: "Crédit Agricole",
    hours: [
      ["Fermé"], ["09h00-12h30 | 13h30-18h00"], ["09h00-12h30 | 13h30-18h00"], ["09h00-12h30 | 13h30-18h00"], ["09h00-12h30 | 13h30-18h00"], ["08h30-13h00"], ["Fermé"]
    ],
    comment: "Pas de message actuellement.",
    GoogleMapLink: "https://www.google.com/maps/place/Cr%C3%A9dit+Agricole+Pyr%C3%A9n%C3%A9es+Gascogne+-+Tarbes+Arsenal/@43.2411114,0.0809162,19z/data=!4m6!3m5!1s0x12a9d400e878b31f:0xc7b13191b9004859!8m2!3d43.2407659!4d0.0813188!16s%2Fg%2F1tk69qxr?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562530902",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Banques",
    type_icon: icons["bank_icon"],
    color: "#FFC300",
    zoomValue: 13
  },
  {
    id: 58,
    location: [43.240056071378675, 0.016908646857896358],
    name: "Up2play",
    hours: [
      ["10h00-23h00"], ["10h00-23h00"], ["10h00-23h00"], ["10h00-23h00"], ["10h00-00h00"], ["10h00-00h00"], ["10h00-23h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/UP2PLAY+Ibos-Tarbes/@43.2397689,0.0065366,15z/data=!3m1!4b1!4m6!3m5!1s0xd562b6fb46c2241:0x9ef4d4832d9c3854!8m2!3d43.2397537!4d0.0168363!16s%2Fg%2F11s9__89b4?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0536300300",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 59,
    location: [43.24139509092862, 0.07823425809302996],
    name: "Bowling",
    hours: [
      ["Fermé"], ["Fermé"], ["14h00-00h00"], ["17h00-00h00"], ["17h00-00h00"], ["14h00-02h00"], ["14h00-20h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Arsenal+Park/@43.2413524,0.0775875,18z/data=!4m14!1m7!3m6!1s0xd562b6fb46c2241:0x9ef4d4832d9c3854!2sUP2PLAY+Ibos-Tarbes!8m2!3d43.2397537!4d0.0168363!16s%2Fg%2F11s9__89b4!3m5!1s0x12a9d3f76af8748d:0x63c37bb63bdaf8bf!8m2!3d43.2413749!4d0.0781413!16s%2Fg%2F11bw3dmm5z?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0622015085",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 60,
    location: [43.240924194586235, 0.07851589004442744],
    name: "Cinéma CGR",
    hours: [
      ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/CIN%C3%89MA+CGR+Tarbes/@43.240989,0.0773998,18z/data=!4m6!3m5!1s0x12a9d3f739f6ad15:0xf3282db6f15692ec!8m2!3d43.241087!4d0.078787!16s%2Fg%2F1hc1s10mb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0892688588",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 61,
    location: [43.238021948507225, 0.07619926839134204],
    name: "Parc Massey",
    hours: [
      ["07h00-21h00"], ["07h00-21h00"], ["07h00-21h00"], ["07h00-21h00"], ["07h00-21h00"], ["07h00-21h00"], ["07h00-21h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Jardin+Massey/@43.2399905,0.0722768,16z/data=!4m6!3m5!1s0x12a9d3f6716489db:0x2aa00c9f6c7adeaf!8m2!3d43.23822!4d0.076429!16zL20vMGNxejZt?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562443838",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 63,
    location: [43.239432926225035, 0.01344842236624706],
    name: "Parvis",
    hours: [
      ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"], ["00h00-23h59"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Le+Parvis+sc%C3%A8ne+nationale+Tarbes+Pyr%C3%A9n%C3%A9es/@43.2393231,0.0032882,15z/data=!3m2!4b1!5s0x12a9d5f7288b5c9d:0x5c316803bda763d0!4m6!3m5!1s0x12a9d38a616eb37b:0xfb6a2dd613a3c24b!8m2!3d43.2393079!4d0.0135879!16s%2Fg%2F11bwsgrq59?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562900855",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 64,
    location: [43.24137079008073, 0.07877569345605054],
    name: "Lazer Quest",
    hours: [
      ["Fermé"], ["16h00-21h30"], ["14h00-21h30"], ["16h00-21h30"], ["14h00-21h30"], ["14h00-21h30"], ["14h00-18h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Laser+Quest+Tarbes/@43.2415677,0.0786094,20z/data=!4m6!3m5!1s0x12a9d3e44308f659:0xf9fdb170ce9eb0d0!8m2!3d43.2413459!4d0.078824!16s%2Fg%2F1tnfw0b4?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562960217",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 65,
    location: [43.24092561745605, 0.07742084626407701],
    name: "Blackout",
    hours: [
      ["Fermé"], ["Fermé"], ["Fermé"], ["Fermé"], ["00h00-06h00"], ["00h00-06h00"], ["00h00-06h00"]
    ],
    comment: "À compléter",
    GoogleMapLink: "https://www.google.com/maps/place/Blackout/@43.2409276,0.0671346,15z/data=!3m2!4b1!5s0x12a9d3f70980315b:0x1af87b9c76576be9!4m6!3m5!1s0x12a9d3116bb11973:0x31f0a0f9f14fa286!8m2!3d43.2409124!4d0.0774343!16s%2Fg%2F11vf20g134?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0781278466",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Activités",
    type_icon: icons["activity_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 66,
    location: [43.23686098870668, 0.046103392909376546],
    name: "Plan B",
    hours: [
      ["Fermé"], ["16h00-22h00"], ["16h00-22h00"], ["16h00-02h00"], ["16h00-02h00"], ["16h00-02h00"], ["Fermé"]
    ],
    comment: "Remise en disant qu'on est en MMI",
    GoogleMapLink: "https://www.google.com/maps/place/Le+Plan+B/@43.2368532,0.0358091,15z/data=!3m1!4b1!4m6!3m5!1s0x12a9d5f61f92ec75:0xb9c3ccac50ad60aa!8m2!3d43.236838!4d0.0461088!16s%2Fg%2F11tmww9ldy?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562348592",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Partners",
    type_icon: icons["partner_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 67,
    location: [43.24287319967509, 0.0783771516911453],
    name: "Viking Hache Club",
    hours: [
      ["Fermé"], ["17h00-22h00"], ["17h00-22h00"], ["17h00-00h00"], ["17h00-00h00"], ["14h00-00h00"], ["Fermé"]
    ],
    comment: "-10% sur les pistes de lancer de Hache et les pintes à 5€ en présentant la carte étudiante",
    GoogleMapLink: "https://www.google.com/maps/place/Viking+Hache+Club+-+Bar+%C3%A0+bi%C3%A8re+Tarbes/@43.2429973,0.0778461,19z/data=!4m6!3m5!1s0x12a9d3b33a6eadb7:0xc74bdeaafa9fc962!8m2!3d43.2428678!4d0.0783772!16s%2Fg%2F11vywj86q7?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0562315042",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Partners",
    type_icon: icons["partner_icon"],
    color: "#FF33A8",
    zoomValue: 13
  },
  {
    id: 68,
    location: [43.23205955795294, 0.054462482975416046],
    name: "Forno di Napoli",
    hours: [
      ["18h00-22h00"], ["18h00-22h00"], ["Fermé"], ["18h00-22h00"], ["18h00-22h00"], ["18h00-22h00"], ["18h00-22h00"]
    ],
    comment: "1 pizza achetée = Boisson offerte (sous présentation de la carte étudiante)",
    GoogleMapLink: "https://www.google.com/maps/place/Forno+di+Napoli/@43.2320701,0.0543029,21z/data=!4m6!3m5!1s0x12a9d5b7e7ad89b1:0x559328b93bbde0a4!8m2!3d43.2320566!4d0.0543881!16s%2Fg%2F11y8mc56yq?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    number: "0759598386",
    picture: "/src/mizuki_cute_test.jpg",
    type: "Partners",
    type_icon: icons["partner_icon"],
    color: "#FF33A8",
    zoomValue: 13
  }
];