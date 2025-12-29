console.log("standards_global cargado");

window.countries_global = {
  // TOP 5 SUPERPOTENCIAS
  usa: {
    name: "Estados Unidos", 
    code: "us",
    region: "North America",
    quality: 1.1, modernity: 1.1, readiness: 1.1, 
    budget: 895, industrial: 1.00,
    land: { infantry: 1328000, tanks: 4640, armored: 391963, artillery: 2524 },
    air: { fighters: 2679, bombers: 140, support: 2170 },
    navy: { frigates: 0, destroyers: 81, submarines: 70, carriers: 11, corvettes: 26, patrol: 150 }
  },

  china: {
    name: "China", 
    code: "cn", 
    region: "Asia",
    quality: 1.0, modernity: 1.0, readiness: 1.0, 
    budget: 267, industrial: 0.95,
    land: { infantry: 2035000, tanks: 6800, armored: 144017, artillery: 7240 },
    air: { fighters: 1583, bombers: 120, support: 411 },
    navy: { frigates: 47, destroyers: 50, submarines: 61, carriers: 3, corvettes: 72, patrol: 220 }
  },

  russia: {
    name: "Rusia", 
    code: "ru", 
    region: "Europe",
    quality: 0.9, modernity: 0.85, readiness: 0.85, 
    budget: 126, industrial: 0.85,
    land: { infantry: 1320000, tanks: 5750, armored: 131527, artillery: 16678 },
    air: { fighters: 1522, bombers: 140, support: 616 },
    navy: { frigates: 12, destroyers: 10, submarines: 63, carriers: 1, corvettes: 83, patrol: 180 }
  },

  // GRANDES POTENCIAS (Tier A)
  india: {
    name: "India", 
    code: "in", 
    region: "Asia",
    quality: 0.85, modernity: 0.8, readiness: 0.85, 
    budget: 75, industrial: 0.70,
    land: { infantry: 1455550, tanks: 4201, armored: 148594, artillery: 4339 },
    air: { fighters: 643, bombers: 0, support: 350 },
    navy: { frigates: 14, destroyers: 13, submarines: 18, carriers: 2, corvettes: 18, patrol: 95 }
  },

  uk: {
    name: "Reino Unido", 
    code: "gb", 
    region: "Europe",
    quality: 1.05, modernity: 1.05, readiness: 1.0, 
    budget: 72, industrial: 0.75,
    land: { infantry: 184860, tanks: 227, armored: 38200, artillery: 226 },
    air: { fighters: 144, bombers: 0, support: 66 },
    navy: { frigates: 8, destroyers: 6, submarines: 9, carriers: 2, corvettes: 0, patrol: 45 }
  },

  france: {
    name: "Francia", 
    code: "fr", 
    region: "Europe",
    quality: 1.05, modernity: 1.05, readiness: 1.0, 
    budget: 55, industrial: 0.75,
    land: { infantry: 200000, tanks: 215, armored: 110932, artillery: 105 },
    air: { fighters: 226, bombers: 0, support: 179 },
    navy: { frigates: 11, destroyers: 11, submarines: 9, carriers: 1, corvettes: 0, patrol: 60 }
  },

  japan: {
    name: "Japón", 
    code: "jp", 
    region: "Asia",
    quality: 1.05, modernity: 1.05, readiness: 0.95, 
    budget: 57, industrial: 0.85,
    land: { infantry: 247150, tanks: 521, armored: 31964, artillery: 683 },
    air: { fighters: 255, bombers: 0, support: 206 },
    navy: { frigates: 6, destroyers: 42, submarines: 24, carriers: 0, corvettes: 0, patrol: 85 }
  },

  germany: {
    name: "Alemania", 
    code: "de", 
    region: "Europe",
    quality: 1.05, modernity: 1.0, readiness: 0.95, 
    budget: 55, industrial: 0.80,
    land: { infantry: 185000, tanks: 320, armored: 5000, artillery: 159 },
    air: { fighters: 140, bombers: 0, support: 89 },
    navy: { frigates: 11, destroyers: 0, submarines: 6, carriers: 0, corvettes: 5, patrol: 35 }
  },

  // POTENCIAS REGIONALES (Tier B)
  southkorea: {
    name: "Corea del Sur", 
    code: "kr", 
    region: "Asia",
    quality: 0.90, modernity: 0.95, readiness: 0.95, 
    budget: 46, industrial: 0.80,
    land: { infantry: 600000, tanks: 2236, armored: 58880, artillery: 8096 },
    air: { fighters: 413, bombers: 0, support: 81 },
    navy: { frigates: 17, destroyers: 13, submarines: 22, carriers: 0, corvettes: 5, patrol: 110 }
  },

  italy: {
    name: "Italia", 
    code: "it", 
    region: "Europe",
    quality: 0.95, modernity: 0.95, readiness: 0.90, 
    budget: 31, industrial: 0.70,
    land: { infantry: 165500, tanks: 200, armored: 73480, artillery: 193 },
    air: { fighters: 156, bombers: 0, support: 61 },
    navy: { frigates: 10, destroyers: 3, submarines: 8, carriers: 2, corvettes: 0, patrol: 40 }
  },

  turkey: {
    name: "Turquía", 
    code: "tr", 
    region: "Middle East",
    quality: 0.75, modernity: 0.75, readiness: 0.85, 
    budget: 47, industrial: 0.60,
    land: { infantry: 355200, tanks: 2238, armored: 61173, artillery: 3041 },
    air: { fighters: 201, bombers: 0, support: 119 },
    navy: { frigates: 17, destroyers: 0, submarines: 13, carriers: 0, corvettes: 9, patrol: 55 }
  },

  pakistan: {
    name: "Pakistán", 
    code: "pk", 
    region: "Asia",
    quality: 0.65, modernity: 0.60, readiness: 0.75, 
    budget: 8, industrial: 0.50,
    land: { infantry: 654000, tanks: 2627, armored: 17516, artillery: 3891 },
    air: { fighters: 418, bombers: 0, support: 95 },
    navy: { frigates: 9, destroyers: 0, submarines: 8, carriers: 0, corvettes: 9, patrol: 30 }
  },

  israel: {
    name: "Israel", 
    code: "il", 
    region: "Middle East",
    quality: 0.93, modernity: 0.93, readiness: 1.0, 
    budget: 31, industrial: 0.65,
    land: { infantry: 170000, tanks: 1300, armored: 35985, artillery: 706 },
    air: { fighters: 278, bombers: 0, support: 46 },
    navy: { frigates: 0, destroyers: 0, submarines: 5, carriers: 0, corvettes: 7, patrol: 25 }
  },

  iran: {
    name: "Irán", 
    code: "ir", 
    region: "Middle East",
    quality: 0.7, modernity: 0.6, readiness: 0.8, 
    budget: 15, industrial: 0.55,
    land: { infantry: 610000, tanks: 1713, armored: 65825, artillery: 3979 },
    air: { fighters: 209, bombers: 0, support: 103 },
    navy: { frigates: 7, destroyers: 0, submarines: 25, carriers: 0, corvettes: 3, patrol: 75 }
  },

  egypt: {
    name: "Egipto", 
    code: "eg", 
    region: "Africa",
    quality: 0.65, modernity: 0.60, readiness: 0.70, 
    budget: 6, industrial: 0.45,
    land: { infantry: 440000, tanks: 3620, armored: 41012, artillery: 2546 },
    air: { fighters: 328, bombers: 0, support: 72 },
    navy: { frigates: 13, destroyers: 0, submarines: 8, carriers: 0, corvettes: 7, patrol: 65 }
  },

  indonesia: {
    name: "Indonesia", 
    code: "id", 
    region: "Asia",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 11, industrial: 0.45,
    land: { infantry: 400000, tanks: 331, armored: 20440, artillery: 612 },
    air: { fighters: 75, bombers: 0, support: 88 },
    navy: { frigates: 7, destroyers: 0, submarines: 4, carriers: 0, corvettes: 25, patrol: 180 }
  },

  australia: {
    name: "Australia", 
    code: "au", 
    region: "Oceania",
    quality: 0.9, modernity: 0.95, readiness: 0.9, 
    budget: 56, industrial: 0.70,
    land: { infantry: 57350, tanks: 59, armored: 15648, artillery: 48 },
    air: { fighters: 86, bombers: 0, support: 74 },
    navy: { frigates: 7, destroyers: 3, submarines: 6, carriers: 0, corvettes: 0, patrol: 35 }
  },

  saudiarabia: {
    name: "Arabia Saudí", 
    code: "sa", 
    region: "Middle East",
    quality: 0.8, modernity: 0.9, readiness: 0.8, 
    budget: 75, industrial: 0.50,
    land: { infantry: 257000, tanks: 840, armored: 19040, artillery: 1120 },
    air: { fighters: 364, bombers: 0, support: 87 },
    navy: { frigates: 7, destroyers: 0, submarines: 0, carriers: 0, corvettes: 9, patrol: 50 }
  },

  spain: {
    name: "España", 
    code: "es", 
    region: "Europe",
    quality: 0.95, modernity: 0.95, readiness: 0.95, 
    budget: 23, industrial: 0.70,
    land: { infantry: 133282, tanks: 317, armored: 17626, artillery: 382 },
    air: { fighters: 150, bombers: 0, support: 80 },
    navy: { frigates: 11, destroyers: 0, submarines: 6, carriers: 1, corvettes: 0, patrol: 100 }
  },

  // NUEVOS PAÍSES AÑADIDOS (para completar Top 40)
  canada: {
    name: "Canadá", 
    code: "ca", 
    region: "North America",
    quality: 0.9, modernity: 0.95, readiness: 0.85, 
    budget: 26, industrial: 0.65,
    land: { infantry: 68000, tanks: 82, armored: 2130, artillery: 42 },
    air: { fighters: 77, bombers: 0, support: 122 },
    navy: { frigates: 12, destroyers: 0, submarines: 4, carriers: 0, corvettes: 0, patrol: 30 }
  },

  brazil: {
    name: "Brasil", 
    code: "br", 
    region: "South America",
    quality: 0.86, modernity: 0.8, readiness: 0.7, 
    budget: 19, industrial: 0.60,
    land: { infantry: 334500, tanks: 437, armored: 1872, artillery: 899 },
    air: { fighters: 86, bombers: 0, support: 224 },
    navy: { frigates: 6, destroyers: 0, submarines: 5, carriers: 1, corvettes: 2, patrol: 45 }
  },

  mexico: {
    name: "México", 
    code: "mx", 
    region: "North America",
    quality: 0.7, modernity: 0.8, readiness: 0.7, 
    budget: 7, industrial: 0.55,
    land: { infantry: 280000, tanks: 0, armored: 745, artillery: 72 },
    air: { fighters: 0, bombers: 0, support: 106 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 8, patrol: 189 }
  },

  poland: {
    name: "Polonia", 
    code: "pl", 
    region: "Europe",
    quality: 0.9, modernity: 0.9, readiness: 0.85, 
    budget: 16, industrial: 0.60,
    land: { infantry: 114050, tanks: 863, armored: 4119, artillery: 538 },
    air: { fighters: 48, bombers: 0, support: 89 },
    navy: { frigates: 2, destroyers: 0, submarines: 5, carriers: 0, corvettes: 3, patrol: 22 }
  },

  ukraine: {
    name: "Ucrania", 
    code: "ua", 
    region: "Europe",
    quality: 0.8, modernity: 0.5, readiness: 1.0, 
    budget: 5, industrial: 0.50,
    land: { infantry: 700000, tanks: 880, armored: 2800, artillery: 1100 },
    air: { fighters: 69, bombers: 0, support: 32 },
    navy: { frigates: 1, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  vietnam: {
    name: "Vietnam", 
    code: "vn", 
    region: "Asia",
    quality: 0.65, modernity: 0.6, readiness: 0.8, 
    budget: 5, industrial: 0.45,
    land: { infantry: 482000, tanks: 1855, armored: 3150, artillery: 1240 },
    air: { fighters: 66, bombers: 0, support: 46 },
    navy: { frigates: 7, destroyers: 0, submarines: 9, carriers: 0, corvettes: 8, patrol: 125 }
  },

  taiwan: {
    name: "Taiwán", 
    code: "tw", 
    region: "Asia",
    quality: 0.8, modernity: 0.85, readiness: 0.85, 
    budget: 13, industrial: 0.70,
    land: { infantry: 163000, tanks: 1160, armored: 9500, artillery: 1977 },
    air: { fighters: 286, bombers: 0, support: 86 },
    navy: { frigates: 22, destroyers: 4, submarines: 4, carriers: 0, corvettes: 12, patrol: 53 }
  },

  thailand: {
    name: "Tailandia", 
    code: "th", 
    region: "Asia",
    quality: 0.7, modernity: 0.65, readiness: 0.75, 
    budget: 7, industrial: 0.55,
    land: { infantry: 360000, tanks: 793, armored: 1624, artillery: 550 },
    air: { fighters: 61, bombers: 0, support: 108 },
    navy: { frigates: 7, destroyers: 0, submarines: 0, carriers: 1, corvettes: 8, patrol: 120 }
  },

  malaysia: {
    name: "Malasia", 
    code: "my", 
    region: "Asia",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 4, industrial: 0.50,
    land: { infantry: 110000, tanks: 74, armored: 1290, artillery: 265 },
    air: { fighters: 30, bombers: 0, support: 68 },
    navy: { frigates: 10, destroyers: 0, submarines: 2, carriers: 0, corvettes: 6, patrol: 85 }
  },

  singapore: {
    name: "Singapur", 
    code: "sg", 
    region: "Asia",
    quality: 0.95, modernity: 1.0, readiness: 0.95, 
    budget: 11, industrial: 0.75,
    land: { infantry: 72000, tanks: 96, armored: 1724, artillery: 312 },
    air: { fighters: 60, bombers: 0, support: 44 },
    navy: { frigates: 6, destroyers: 0, submarines: 4, carriers: 0, corvettes: 12, patrol: 35 }
  },

  netherlands: {
    name: "Países Bajos", 
    code: "nl", 
    region: "Europe",
    quality: 0.95, modernity: 1.0, readiness: 0.9, 
    budget: 13, industrial: 0.70,
    land: { infantry: 43500, tanks: 18, armored: 634, artillery: 24 },
    air: { fighters: 61, bombers: 0, support: 47 },
    navy: { frigates: 6, destroyers: 0, submarines: 4, carriers: 0, corvettes: 0, patrol: 18 }
  },

  sweden: {
    name: "Suecia", 
    code: "se", 
    region: "Europe",
    quality: 0.95, modernity: 1.0, readiness: 0.9, 
    budget: 8, industrial: 0.75,
    land: { infantry: 24000, tanks: 120, armored: 1350, artillery: 48 },
    air: { fighters: 72, bombers: 0, support: 32 },
    navy: { frigates: 7, destroyers: 0, submarines: 5, carriers: 0, corvettes: 0, patrol: 25 }
  },

  switzerland: {
    name: "Suiza", 
    code: "ch", 
    region: "Europe",
    quality: 0.9, modernity: 0.95, readiness: 0.95, 
    budget: 5, industrial: 0.80,
    land: { infantry: 140000, tanks: 134, armored: 1132, artillery: 48 },
    air: { fighters: 54, bombers: 0, support: 32 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  norway: {
    name: "Noruega", 
    code: "no", 
    region: "Europe",
    quality: 0.9, modernity: 0.95, readiness: 0.9, 
    budget: 8, industrial: 0.70,
    land: { infantry: 24000, tanks: 36, armored: 204, artillery: 24 },
    air: { fighters: 57, bombers: 0, support: 28 },
    navy: { frigates: 5, destroyers: 0, submarines: 6, carriers: 0, corvettes: 0, patrol: 22 }
  },

  finland: {
    name: "Finlandia", 
    code: "fi", 
    region: "Europe",
    quality: 0.85, modernity: 0.9, readiness: 0.95, 
    budget: 6, industrial: 0.65,
    land: { infantry: 28000, tanks: 100, armored: 1630, artillery: 720 },
    air: { fighters: 62, bombers: 0, support: 18 },
    navy: { frigates: 4, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 18 }
  },

  argentina: {
    name: "Argentina", 
    code: "ar", 
    region: "South America",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 3, industrial: 0.45,
    land: { infantry: 75000, tanks: 231, armored: 634, artillery: 220 },
    air: { fighters: 24, bombers: 0, support: 58 },
    navy: { frigates: 9, destroyers: 0, submarines: 3, carriers: 0, corvettes: 4, patrol: 45 }
  },

  chile: {
    name: "Chile", 
    code: "cl", 
    region: "South America",
    quality: 0.9, modernity: 0.85, readiness: 0.9, 
    budget: 5, industrial: 0.55,
    land: { infantry: 80000, tanks: 321, armored: 1635, artillery: 85 },
    air: { fighters: 46, bombers: 0, support: 52 },
    navy: { frigates: 8, destroyers: 0, submarines: 4, carriers: 0, corvettes: 0, patrol: 35 }
  },

  colombia: {
    name: "Colombia", 
    code: "co", 
    region: "South America",
    quality: 0.7, modernity: 0.65, readiness: 0.8, 
    budget: 10, industrial: 0.50,
    land: { infantry: 295000, tanks: 0, armored: 1764, artillery: 48 },
    air: { fighters: 22, bombers: 0, support: 86 },
    navy: { frigates: 4, destroyers: 0, submarines: 4, carriers: 0, corvettes: 2, patrol: 95 }
  },

  peru: {
    name: "Perú", 
    code: "pe", 
    region: "South America",
    quality: 0.7, modernity: 0.7, readiness: 0.7, 
    budget: 2, industrial: 0.40,
    land: { infantry: 120000, tanks: 290, armored: 520, artillery: 312 },
    air: { fighters: 19, bombers: 0, support: 62 },
    navy: { frigates: 8, destroyers: 0, submarines: 6, carriers: 0, corvettes: 6, patrol: 55 }
  },

  algeria: {
    name: "Argelia", 
    code: "dz", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 10, industrial: 0.45,
    land: { infantry: 520000, tanks: 2000, armored: 4800, artillery: 650 },
    air: { fighters: 119, bombers: 0, support: 82 },
    navy: { frigates: 6, destroyers: 0, submarines: 6, carriers: 0, corvettes: 11, patrol: 45 }
  },

  nigeria: {
    name: "Nigeria", 
    code: "ng", 
    region: "Africa",
    quality: 0.5, modernity: 0.4, readiness: 0.5, 
    budget: 3, industrial: 0.35,
    land: { infantry: 135000, tanks: 362, armored: 950, artillery: 320 },
    air: { fighters: 9, bombers: 0, support: 42 },
    navy: { frigates: 1, destroyers: 0, submarines: 0, carriers: 0, corvettes: 2, patrol: 85 }
  },

  southafrica: {
    name: "Sudáfrica", 
    code: "za", 
    region: "Africa",
    quality: 0.65, modernity: 0.6, readiness: 0.6, 
    budget: 3, industrial: 0.50,
    land: { infantry: 47000, tanks: 195, armored: 1910, artillery: 72 },
    air: { fighters: 26, bombers: 0, support: 55 },
    navy: { frigates: 4, destroyers: 0, submarines: 3, carriers: 0, corvettes: 0, patrol: 22 }
  },

  // POTENCIAS NUCLEARES ADICIONALES
  northkorea: {
    name: "Corea del Norte", 
    code: "kp", 
    region: "Asia",
    quality: 0.4, modernity: 0.3, readiness: 0.8, 
    budget: 1.6, industrial: 0.25,
    land: { infantry: 1300000, tanks: 4000, armored: 4500, artillery: 8500 },
    air: { fighters: 458, bombers: 0, support: 318 },
    navy: { frigates: 0, destroyers: 0, submarines: 70, carriers: 0, corvettes: 0, patrol: 430 }
  },

// PAÍSES ADICIONALES (40 nuevos para expandir global)
  unitedarabemirates: {
    name: "Emiratos Árabes Unidos", 
    code: "ae", 
    region: "Middle East",
    quality: 0.95, modernity: 0.95, readiness: 0.9, 
    budget: 22, industrial: 0.55,
    land: { infantry: 65000, tanks: 388, armored: 8500, artillery: 245 },
    air: { fighters: 120, bombers: 0, support: 80 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 12, patrol: 50 }
  },

  greece: {
    name: "Grecia", 
    code: "gr", 
    region: "Europe",
    quality: 0.9, modernity: 0.85, readiness: 0.85, 
    budget: 8, industrial: 0.60,
    land: { infantry: 142000, tanks: 1200, armored: 4500, artillery: 580 },
    air: { fighters: 189, bombers: 0, support: 60 },
    navy: { frigates: 13, destroyers: 0, submarines: 11, carriers: 0, corvettes: 0, patrol: 35 }
  },

  philippines: {
    name: "Filipinas", 
    code: "ph", 
    region: "Asia",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 5, industrial: 0.45,
    land: { infantry: 143000, tanks: 0, armored: 550, artillery: 250 },
    air: { fighters: 12, bombers: 0, support: 45 },
    navy: { frigates: 2, destroyers: 0, submarines: 0, carriers: 0, corvettes: 10, patrol: 80 }
  },

  bangladesh: {
    name: "Bangladés", 
    code: "bd", 
    region: "Asia",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 4, industrial: 0.40,
    land: { infantry: 204000, tanks: 320, armored: 1100, artillery: 450 },
    air: { fighters: 44, bombers: 0, support: 36 },
    navy: { frigates: 6, destroyers: 0, submarines: 2, carriers: 0, corvettes: 8, patrol: 60 }
  },

  morocco: {
    name: "Marruecos", 
    code: "ma", 
    region: "Africa",
    quality: 0.7, modernity: 0.7, readiness: 0.75, 
    budget: 5, industrial: 0.50,
    land: { infantry: 195000, tanks: 1024, armored: 2800, artillery: 428 },
    air: { fighters: 88, bombers: 0, support: 50 },
    navy: { frigates: 3, destroyers: 0, submarines: 0, carriers: 0, corvettes: 6, patrol: 40 }
  },

  venezuela: {
    name: "Venezuela", 
    code: "ve", 
    region: "South America",
    quality: 0.5, modernity: 0.4, readiness: 0.5, 
    budget: 1, industrial: 0.30,
    land: { infantry: 123000, tanks: 200, armored: 600, artillery: 100 },
    air: { fighters: 20, bombers: 0, support: 40 },
    navy: { frigates: 3, destroyers: 0, submarines: 2, carriers: 0, corvettes: 6, patrol: 30 }
  },

  ecuador: {
    name: "Ecuador", 
    code: "ec", 
    region: "South America",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 2, industrial: 0.40,
    land: { infantry: 40000, tanks: 0, armored: 300, artillery: 100 },
    air: { fighters: 18, bombers: 0, support: 30 },
    navy: { frigates: 2, destroyers: 0, submarines: 2, carriers: 0, corvettes: 6, patrol: 25 }
  },

  bolivia: {
    name: "Bolivia", 
    code: "bo", 
    region: "South America",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 1, industrial: 0.35,
    land: { infantry: 55000, tanks: 54, armored: 200, artillery: 150 },
    air: { fighters: 0, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 30 } // Río/lago
  },

  cuba: {
    name: "Cuba", 
    code: "cu", 
    region: "North America",
    quality: 0.5, modernity: 0.4, readiness: 0.6, 
    budget: 1, industrial: 0.30,
    land: { infantry: 50000, tanks: 900, armored: 800, artillery: 200 },
    air: { fighters: 20, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 20 }
  },

  qatar: {
    name: "Catar", 
    code: "qa", 
    region: "Middle East",
    quality: 0.9, modernity: 0.95, readiness: 0.85, 
    budget: 20, industrial: 0.50,
    land: { infantry: 16000, tanks: 92, armored: 500, artillery: 50 },
    air: { fighters: 72, bombers: 0, support: 40 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 6, patrol: 20 }
  },

  // Más para llegar a 40...
  denmark: {
    name: "Dinamarca", 
    code: "dk", 
    region: "Europe",
    quality: 0.95, modernity: 1.0, readiness: 0.9, 
    budget: 6, industrial: 0.70,
    land: { infantry: 20000, tanks: 44, armored: 400, artillery: 24 },
    air: { fighters: 58, bombers: 0, support: 20 },
    navy: { frigates: 9, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  portugal: {
    name: "Portugal", 
    code: "pt", 
    region: "Europe",
    quality: 0.85, modernity: 0.85, readiness: 0.8, 
    budget: 4, industrial: 0.60,
    land: { infantry: 30000, tanks: 37, armored: 500, artillery: 100 },
    air: { fighters: 40, bombers: 0, support: 30 },
    navy: { frigates: 5, destroyers: 0, submarines: 2, carriers: 0, corvettes: 0, patrol: 20 }
  },

  romania: {
    name: "Rumania", 
    code: "ro", 
    region: "Europe",
    quality: 0.75, modernity: 0.7, readiness: 0.75, 
    budget: 6, industrial: 0.55,
    land: { infantry: 70000, tanks: 400, armored: 1500, artillery: 300 },
    air: { fighters: 48, bombers: 0, support: 40 },
    navy: { frigates: 4, destroyers: 0, submarines: 1, carriers: 0, corvettes: 7, patrol: 15 }
  },

  czechrepublic: {
    name: "República Checa", 
    code: "cz", 
    region: "Europe",
    quality: 0.85, modernity: 0.85, readiness: 0.8, 
    budget: 5, industrial: 0.65,
    land: { infantry: 30000, tanks: 90, armored: 600, artillery: 100 },
    air: { fighters: 24, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  hungary: {
    name: "Hungría", 
    code: "hu", 
    region: "Europe",
    quality: 0.8, modernity: 0.75, readiness: 0.75, 
    budget: 4, industrial: 0.60,
    land: { infantry: 40000, tanks: 150, armored: 800, artillery: 150 },
    air: { fighters: 18, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  // Continúo hasta 40 con variedad (África, Asia, Europa, etc.)
  kenya: {
    name: "Kenia", 
    code: "ke", 
    region: "Africa",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 1, industrial: 0.35,
    land: { infantry: 40000, tanks: 100, armored: 300, artillery: 100 },
    air: { fighters: 20, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  ethiopia: {
    name: "Etiopía", 
    code: "et", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.7, 
    budget: 1, industrial: 0.40,
    land: { infantry: 150000, tanks: 400, armored: 800, artillery: 300 },
    air: { fighters: 30, bombers: 0, support: 40 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  myanmar: {
    name: "Myanmar", 
    code: "mm", 
    region: "Asia",
    quality: 0.55, modernity: 0.5, readiness: 0.65, 
    budget: 2, industrial: 0.40,
    land: { infantry: 400000, tanks: 400, armored: 1200, artillery: 500 },
    air: { fighters: 60, bombers: 0, support: 50 },
    navy: { frigates: 5, destroyers: 0, submarines: 1, carriers: 0, corvettes: 6, patrol: 50 }
  },

  srilanka: {
    name: "Sri Lanka", 
    code: "lk", 
    region: "Asia",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 1, industrial: 0.35,
    land: { infantry: 200000, tanks: 100, armored: 500, artillery: 200 },
    air: { fighters: 20, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 40 }
  },

  newzealand: {
    name: "Nueva Zelanda", 
    code: "nz", 
    region: "Oceania",
    quality: 0.85, modernity: 0.9, readiness: 0.85, 
    budget: 3, industrial: 0.60,
    land: { infantry: 9000, tanks: 0, armored: 200, artillery: 24 },
    air: { fighters: 0, bombers: 0, support: 20 },
    navy: { frigates: 2, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },
  
  // PAÍSES ADICIONALES COMPLETANDO 40 + 20 EXTRA (total 30 aquí)
  belgium: {
    name: "Bélgica", 
    code: "be", 
    region: "Europe",
    quality: 0.9, modernity: 0.95, readiness: 0.85, 
    budget: 6, industrial: 0.70,
    land: { infantry: 25000, tanks: 0, armored: 400, artillery: 50 },
    air: { fighters: 48, bombers: 0, support: 30 },
    navy: { frigates: 2, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  austria: {
    name: "Austria", 
    code: "at", 
    region: "Europe",
    quality: 0.85, modernity: 0.9, readiness: 0.8, 
    budget: 4, industrial: 0.70,
    land: { infantry: 30000, tanks: 54, armored: 600, artillery: 80 },
    air: { fighters: 15, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 } // Río
  },

  bulgaria: {
    name: "Bulgaria", 
    code: "bg", 
    region: "Europe",
    quality: 0.7, modernity: 0.65, readiness: 0.7, 
    budget: 2, industrial: 0.50,
    land: { infantry: 31000, tanks: 200, armored: 800, artillery: 300 },
    air: { fighters: 20, bombers: 0, support: 30 },
    navy: { frigates: 4, destroyers: 0, submarines: 1, carriers: 0, corvettes: 3, patrol: 15 }
  },

  croatia: {
    name: "Croacia", 
    code: "hr", 
    region: "Europe",
    quality: 0.75, modernity: 0.7, readiness: 0.75, 
    budget: 2, industrial: 0.55,
    land: { infantry: 15000, tanks: 75, armored: 300, artillery: 150 },
    air: { fighters: 12, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 2, carriers: 0, corvettes: 5, patrol: 15 }
  },

  serbia: {
    name: "Serbia", 
    code: "rs", 
    region: "Europe",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 2, industrial: 0.50,
    land: { infantry: 25000, tanks: 200, armored: 600, artillery: 200 },
    air: { fighters: 30, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 } // Río
  },

  kazakhstan: {
    name: "Kazajistán", 
    code: "kz", 
    region: "Asia",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 5, industrial: 0.50,
    land: { infantry: 70000, tanks: 300, armored: 1000, artillery: 400 },
    air: { fighters: 80, bombers: 0, support: 50 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 20 } // Caspio
  },

  uzbekistan: {
    name: "Uzbekistán", 
    code: "uz", 
    region: "Asia",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 2, industrial: 0.45,
    land: { infantry: 48000, tanks: 340, armored: 800, artillery: 300 },
    air: { fighters: 40, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  azerbaijan: {
    name: "Azerbaiyán", 
    code: "az", 
    region: "Asia",
    quality: 0.75, modernity: 0.75, readiness: 0.8, 
    budget: 4, industrial: 0.55,
    land: { infantry: 67000, tanks: 570, armored: 1500, artillery: 400 },
    air: { fighters: 20, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 4, carriers: 0, corvettes: 0, patrol: 15 } // Caspio
  },

  armenia: {
    name: "Armenia", 
    code: "am", 
    region: "Asia",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 1, industrial: 0.45,
    land: { infantry: 42000, tanks: 100, armored: 400, artillery: 150 },
    air: { fighters: 0, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  jordan: {
    name: "Jordania", 
    code: "jo", 
    region: "Middle East",
    quality: 0.75, modernity: 0.7, readiness: 0.8, 
    budget: 3, industrial: 0.50,
    land: { infantry: 100000, tanks: 900, armored: 2000, artillery: 300 },
    air: { fighters: 60, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  tunisia: {
    name: "Túnez", 
    code: "tn", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 1, industrial: 0.45,
    land: { infantry: 35000, tanks: 84, armored: 300, artillery: 150 },
    air: { fighters: 20, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 25 }
  },

  ghana: {
    name: "Ghana", 
    code: "gh", 
    region: "Africa",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 1, industrial: 0.40,
    land: { infantry: 15000, tanks: 0, armored: 200, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 4, patrol: 20 }
  },

  angola: {
    name: "Angola", 
    code: "ao", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 2, industrial: 0.45,
    land: { infantry: 107000, tanks: 200, armored: 600, artillery: 300 },
    air: { fighters: 50, bombers: 0, support: 40 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 6, patrol: 20 }
  },

  libya: {
    name: "Libia", 
    code: "ly", 
    region: "Africa",
    quality: 0.5, modernity: 0.45, readiness: 0.5, 
    budget: 3, industrial: 0.40,
    land: { infantry: 30000, tanks: 300, armored: 800, artillery: 200 },
    air: { fighters: 20, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 2, patrol: 20 }
  },

  syria: {
    name: "Siria", 
    code: "sy", 
    region: "Middle East",
    quality: 0.5, modernity: 0.4, readiness: 0.6, 
    budget: 2, industrial: 0.35,
    land: { infantry: 130000, tanks: 2000, armored: 4000, artillery: 2000 },
    air: { fighters: 100, bombers: 0, support: 50 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  yemen: {
    name: "Yemen", 
    code: "ye", 
    region: "Middle East",
    quality: 0.45, modernity: 0.4, readiness: 0.5, 
    budget: 1, industrial: 0.30,
    land: { infantry: 60000, tanks: 200, armored: 500, artillery: 300 },
    air: { fighters: 20, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 20 }
  },

  oman: {
    name: "Omán", 
    code: "om", 
    region: "Middle East",
    quality: 0.85, modernity: 0.9, readiness: 0.85, 
    budget: 8, industrial: 0.55,
    land: { infantry: 42000, tanks: 117, armored: 800, artillery: 150 },
    air: { fighters: 48, bombers: 0, support: 30 },
    navy: { frigates: 3, destroyers: 0, submarines: 0, carriers: 0, corvettes: 5, patrol: 20 }
  },

  kuwait: {
    name: "Kuwait", 
    code: "kw", 
    region: "Middle East",
    quality: 0.8, modernity: 0.85, readiness: 0.8, 
    budget: 8, industrial: 0.50,
    land: { infantry: 15000, tanks: 300, armored: 700, artillery: 100 },
    air: { fighters: 60, bombers: 0, support: 30 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 30 }
  },

  bahrain: {
    name: "Baréin", 
    code: "bh", 
    region: "Middle East",
    quality: 0.8, modernity: 0.85, readiness: 0.8, 
    budget: 2, industrial: 0.45,
    land: { infantry: 8000, tanks: 180, armored: 300, artillery: 50 },
    air: { fighters: 28, bombers: 0, support: 15 },
    navy: { frigates: 1, destroyers: 0, submarines: 0, carriers: 0, corvettes: 2, patrol: 15 }
  },

  brunei: {
    name: "Brunéi", 
    code: "bn", 
    region: "Asia",
    quality: 0.75, modernity: 0.8, readiness: 0.75, 
    budget: 1, industrial: 0.40,
    land: { infantry: 7000, tanks: 0, armored: 100, artillery: 20 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 4, patrol: 20 }
  },

  // EXTRA 10 para redondear
  slovakia: {
    name: "Eslovaquia", 
    code: "sk", 
    region: "Europe",
    quality: 0.8, modernity: 0.8, readiness: 0.75, 
    budget: 2, industrial: 0.60,
    land: { infantry: 15000, tanks: 30, armored: 300, artillery: 50 },
    air: { fighters: 12, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  slovenia: {
    name: "Eslovenia", 
    code: "si", 
    region: "Europe",
    quality: 0.8, modernity: 0.85, readiness: 0.8, 
    budget: 1, industrial: 0.60,
    land: { infantry: 7000, tanks: 46, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 5 }
  },

  lithuania: {
    name: "Lituania", 
    code: "lt", 
    region: "Europe",
    quality: 0.85, modernity: 0.9, readiness: 0.9, 
    budget: 2, industrial: 0.55,
    land: { infantry: 20000, tanks: 0, armored: 300, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 4, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  latvia: {
    name: "Letonia", 
    code: "lv", 
    region: "Europe",
    quality: 0.8, modernity: 0.85, readiness: 0.85, 
    budget: 1, industrial: 0.50,
    land: { infantry: 6000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  estonia: {
    name: "Estonia", 
    code: "ee", 
    region: "Europe",
    quality: 0.85, modernity: 0.9, readiness: 0.9, 
    budget: 1, industrial: 0.55,
    land: { infantry: 7000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 5 }
  },

  cyprus: {
    name: "Chipre", 
    code: "cy", 
    region: "Europe",
    quality: 0.7, modernity: 0.65, readiness: 0.7, 
    budget: 1, industrial: 0.45,
    land: { infantry: 12000, tanks: 134, armored: 300, artillery: 100 },
    air: { fighters: 0, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  luxembourg: {
    name: "Luxemburgo", 
    code: "lu", 
    region: "Europe",
    quality: 0.8, modernity: 0.85, readiness: 0.8, 
    budget: 1, industrial: 0.60,
    land: { infantry: 1000, tanks: 0, armored: 50, artillery: 0 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  malta: {
    name: "Malta", 
    code: "mt", 
    region: "Europe",
    quality: 0.6, modernity: 0.6, readiness: 0.6, 
    budget: 0.5, industrial: 0.40,
    land: { infantry: 2000, tanks: 0, armored: 50, artillery: 0 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  iceland: {
    name: "Islandia", 
    code: "is", 
    region: "Europe",
    quality: 0.7, modernity: 0.7, readiness: 0.7, 
    budget: 0.5, industrial: 0.50,
    land: { infantry: 0, tanks: 0, armored: 0, artillery: 0 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 } // Guardia costera
  },

  mongolia: {
    name: "Mongolia", 
    code: "mn", 
    region: "Asia",
    quality: 0.5, modernity: 0.45, readiness: 0.55, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 10000, tanks: 100, armored: 200, artillery: 100 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

// ÚLTIMOS 20 PAÍSES - LLEGANDO A 100+ 
  dominicanrepublic: {
    name: "República Dominicana", 
    code: "do", 
    region: "North America",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 1, industrial: 0.40,
    land: { infantry: 55000, tanks: 0, armored: 200, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 20 }
  },

  costa_rica: {
    name: "Costa Rica", 
    code: "cr", 
    region: "North America",
    quality: 0.6, modernity: 0.6, readiness: 0.7, 
    budget: 0.5, industrial: 0.40,
    land: { infantry: 10000, tanks: 0, armored: 50, artillery: 20 }, // Policía paramilitar
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  panama: {
    name: "Panamá", 
    code: "pa", 
    region: "North America",
    quality: 0.6, modernity: 0.6, readiness: 0.7, 
    budget: 1, industrial: 0.45,
    land: { infantry: 20000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 25 }
  },

  uruguay: {
    name: "Uruguay", 
    code: "uy", 
    region: "South America",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 1, industrial: 0.45,
    land: { infantry: 15000, tanks: 50, armored: 200, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 15 },
    navy: { frigates: 2, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  paraguay: {
    name: "Paraguay", 
    code: "py", 
    region: "South America",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 15000, tanks: 20, armored: 100, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 } // Río
  },

  honduras: {
    name: "Honduras", 
    code: "hn", 
    region: "North America",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 15000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 15, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 20 }
  },

  guatemala: {
    name: "Guatemala", 
    code: "gt", 
    region: "North America",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 20000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  elsalvador: {
    name: "El Salvador", 
    code: "sv", 
    region: "North America",
    quality: 0.6, modernity: 0.55, readiness: 0.7, 
    budget: 0.5, industrial: 0.40,
    land: { infantry: 25000, tanks: 0, armored: 100, artillery: 30 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  nicaragua: {
    name: "Nicaragua", 
    code: "ni", 
    region: "North America",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 12000, tanks: 100, armored: 200, artillery: 100 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  fiji: {
    name: "Fiyi", 
    code: "fj", 
    region: "Oceania",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.2, industrial: 0.30,
    land: { infantry: 4000, tanks: 0, armored: 20, artillery: 10 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  papuanewguinea: {
    name: "Papúa Nueva Guinea", 
    code: "pg", 
    region: "Oceania",
    quality: 0.5, modernity: 0.45, readiness: 0.55, 
    budget: 0.2, industrial: 0.30,
    land: { infantry: 4000, tanks: 0, armored: 50, artillery: 10 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

  solomonislands: {
    name: "Islas Salomón", 
    code: "sb", 
    region: "Oceania",
    quality: 0.5, modernity: 0.45, readiness: 0.5, 
    budget: 0.1, industrial: 0.25,
    land: { infantry: 1000, tanks: 0, armored: 0, artillery: 0 },
    air: { fighters: 0, bombers: 0, support: 2 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 5 }
  },

  zambia: {
    name: "Zambia", 
    code: "zm", 
    region: "Africa",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 15000, tanks: 50, armored: 100, artillery: 50 },
    air: { fighters: 15, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  zimbabwe: {
    name: "Zimbabue", 
    code: "zw", 
    region: "Africa",
    quality: 0.5, modernity: 0.45, readiness: 0.55, 
    budget: 0.5, industrial: 0.35,
    land: { infantry: 30000, tanks: 50, armored: 100, artillery: 50 },
    air: { fighters: 10, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 0 }
  },

  uganda: {
    name: "Uganda", 
    code: "ug", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.7, 
    budget: 1, industrial: 0.40,
    land: { infantry: 45000, tanks: 200, armored: 400, artillery: 100 },
    air: { fighters: 15, bombers: 0, support: 20 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 } // Lago Victoria
  },

  tanzania: {
    name: "Tanzania", 
    code: "tz", 
    region: "Africa",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 1, industrial: 0.40,
    land: { infantry: 30000, tanks: 50, armored: 200, artillery: 100 },
    air: { fighters: 15, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  ivorycoast: {
    name: "Costa de Marfil", 
    code: "ci", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 1, industrial: 0.45,
    land: { infantry: 25000, tanks: 50, armored: 200, artillery: 50 },
    air: { fighters: 10, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  senegal: {
    name: "Senegal", 
    code: "sn", 
    region: "Africa",
    quality: 0.65, modernity: 0.6, readiness: 0.7, 
    budget: 0.5, industrial: 0.45,
    land: { infantry: 20000, tanks: 100, armored: 300, artillery: 50 },
    air: { fighters: 0, bombers: 0, support: 10 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 15 }
  },

  cameroon: {
    name: "Camerún", 
    code: "cm", 
    region: "Africa",
    quality: 0.6, modernity: 0.55, readiness: 0.65, 
    budget: 0.5, industrial: 0.40,
    land: { infantry: 20000, tanks: 50, armored: 200, artillery: 50 },
    air: { fighters: 15, bombers: 0, support: 15 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  },

    // ... muchos países ...
  madagascar: {
    name: "Madagascar", 
    code: "mg", 
    region: "Africa",
    quality: 0.55, modernity: 0.5, readiness: 0.6, 
    budget: 0.2, industrial: 0.35,
    land: { infantry: 15000, tanks: 0, armored: 50, artillery: 20 },
    air: { fighters: 0, bombers: 0, support: 5 },
    navy: { frigates: 0, destroyers: 0, submarines: 0, carriers: 0, corvettes: 0, patrol: 10 }
  }
  // ⚠️ AQUÍ FALTA ALGO o SOBRA LA COMA
};  // Este cierre parece estar bien