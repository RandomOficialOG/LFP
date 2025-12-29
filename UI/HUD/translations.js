// UI/HUD/translations.js
console.log("HUD/translations.js cargado");

/* =========================
   SISTEMA DE TRADUCCIÓN
========================= */
const detectLanguage = () => {
  const savedLang = localStorage.getItem('latam-firepower-lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    console.log(`🌐 Idioma desde localStorage: ${savedLang}`);
    return savedLang;
  }
  
  const browserLang = navigator.language || navigator.userLanguage;
  console.log(`🌐 Idioma del navegador detectado: ${browserLang}`);
  
  if (browserLang.startsWith('es') || browserLang.startsWith('pt')) {
    return 'es';
  }
  
  return 'en';
};

let currentLang = detectLanguage();

const TRANSLATIONS = {
  es: {
    land: 'Terrestre',
    air: 'Aéreo',
    navy: 'Naval',
    tanks: 'Tanques',
    infantry: 'Infantería',
    armored: 'Blindados',
    artillery: 'Artillería',
    fighters: 'Cazas',
    helicopters: 'Helicópteros',
    bombers: 'Bombarderos',
    transport: 'Transporte',
    frigates: 'Fragatas',
    submarines: 'Submarinos',
    corvettes: 'Corbetas',
    patrol: 'Patrulleras',
    selectUnit: 'Selecciona una unidad para ver detalles',
    noNaval: '🚫 Sin fuerza naval significativa',
    unavailable: 'No disponible',
    prestigeLatamA: 'Potencia Regional',
    prestigeLatamB: 'Potencia Secundaria',
    prestigeLatamC: 'Potencia Limitada',
    prestigeLatamD: 'Capacidad Mínima',
    prestigeGlobalSPlus: 'Superpotencia',
    prestigeGlobalS: 'Gran Potencia',
    prestigeGlobalAPlus: 'Potencia Emergente',
    prestigeGlobalA: 'Potencia Regional',
    prestigeGlobalB: 'Potencia Media',
    prestigeGlobalC: 'Potencia Menor',
    prestigeGlobalD: 'Capacidad Limitada',
    mainTank: 'Tanque principal',
    secondaryTank: 'Tanque secundario',
    lightTank: 'Tanque ligero',
    apc: 'Vehículo blindado',
    ifv: 'Vehículo de combate de infantería',
    reconnaissance: 'Vehículo de reconocimiento',
    mrap: 'MRAP',
    assaultRifle: 'Rifle de asalto',
    battleRifle: 'Rifle de combate',
    machineGun: 'Ametralladora',
    sniper: 'Fusil de francotirador',
    antiTank: 'Sistema antitanque',
    grenadeLauncher: 'Lanzagranadas',
    pistol: 'Pistola',
    shotgun: 'Escopeta',
    mortar: 'Mortero portátil',
    towed: 'Artillería remolcada',
    selfPropelled: 'Artillería autopropulsada',
    rocket: 'Sistema de lanzacohetes',
    antiAircraft: 'Artillería antiaérea',
    coastal: 'Artillería costera',
    airSuperiority: 'Caza superioridad aérea',
    multirole: 'Caza multirrol',
    interceptor: 'Interceptor',
    attackAircraft: 'Avión de ataque',
    trainer: 'Entrenador',
    electronicWarfare: 'Guerra electrónica',
    awacs: 'AWACS',
    tanker: 'Avión nodriza',
    attackHeli: 'Helicóptero de ataque',
    utilityHeli: 'Helicóptero utilitario',
    transportHeli: 'Helicóptero de transporte',
    scoutHeli: 'Helicóptero de exploración',
    medevac: 'Helicóptero médico',
    navalHeli: 'Helicóptero naval',
    trainingHeli: 'Helicóptero de entrenamiento',
    equipmentNotAvailable: 'Información no disponible',
    equipmentNotSpecified: 'No especificado',
    noDataAvailable: 'No hay datos disponibles'
  },
  
  en: {
    land: 'Land',
    air: 'Air',
    navy: 'Navy',
    tanks: 'Tanks',
    infantry: 'Infantry',
    armored: 'Armored',
    artillery: 'Artillery',
    fighters: 'Fighters',
    helicopters: 'Helicopters',
    bombers: 'Bombers',
    transport: 'Transport',
    frigates: 'Frigates',
    submarines: 'Submarines',
    corvettes: 'Corvettes',
    patrol: 'Patrol',
    selectUnit: 'Select a unit to view details',
    noNaval: '🚫 No significant naval force',
    unavailable: 'Unavailable',
    prestigeLatamA: 'Regional Power',
    prestigeLatamB: 'Secondary Power',
    prestigeLatamC: 'Limited Capacity',
    prestigeLatamD: 'Minimal Capacity',
    prestigeGlobalSPlus: 'Superpower',
    prestigeGlobalS: 'Great Power',
    prestigeGlobalAPlus: 'Emerging Power',
    prestigeGlobalA: 'Regional Power',
    prestigeGlobalB: 'Medium Power',
    prestigeGlobalC: 'Minor Power',
    prestigeGlobalD: 'Limited Capacity',
    mainTank: 'Main tank',
    secondaryTank: 'Secondary tank',
    lightTank: 'Light tank',
    apc: 'Armored vehicle',
    ifv: 'Infantry fighting vehicle',
    reconnaissance: 'Reconnaissance vehicle',
    mrap: 'MRAP',
    assaultRifle: 'Assault rifle',
    battleRifle: 'Battle rifle',
    machineGun: 'Machine gun',
    sniper: 'Sniper rifle',
    antiTank: 'Anti-tank system',
    grenadeLauncher: 'Grenade launcher',
    pistol: 'Pistol',
    shotgun: 'Shotgun',
    mortar: 'Portable mortar',
    towed: 'Towed artillery',
    selfPropelled: 'Self-propelled artillery',
    rocket: 'Rocket system',
    antiAircraft: 'Anti-aircraft artillery',
    coastal: 'Coastal artillery',
    airSuperiority: 'Air superiority fighter',
    multirole: 'Multirole fighter',
    interceptor: 'Interceptor',
    attackAircraft: 'Attack aircraft',
    trainer: 'Trainer',
    electronicWarfare: 'Electronic warfare',
    awacs: 'AWACS',
    tanker: 'Tanker aircraft',
    attackHeli: 'Attack helicopter',
    utilityHeli: 'Utility helicopter',
    transportHeli: 'Transport helicopter',
    scoutHeli: 'Scout helicopter',
    medevac: 'Medevac helicopter',
    navalHeli: 'Naval helicopter',
    trainingHeli: 'Training helicopter',
    equipmentNotAvailable: 'Information not available',
    equipmentNotSpecified: 'Not specified',
    noDataAvailable: 'No data available'
  }
};

const t = (key) => TRANSLATIONS[currentLang][key] || key;

const setLanguage = (lang) => {
  if (lang === 'es' || lang === 'en') {
    currentLang = lang;
    localStorage.setItem('latam-firepower-lang', lang);
    console.log(`🌐 Idioma cambiado a: ${lang}`);
    location.reload();
  }
};

/* =========================
   HELPERS DE VISUALIZACIÓN
========================= */
function getFlag(country) {
  if (country.flag) return country.flag;
  if (country.code) {
    return `<img src="https://flagcdn.com/w40/${country.code}.png" 
                alt="${country.name}" 
                class="flag-img"
                onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='🏳️';">`;
  }
  return "🏳️";
}

function getBigFlag(country) {
  if (country.code) {
    return `<img src="https://flagcdn.com/w80/${country.code}.png" 
                alt="${country.name}" 
                class="big-flag-img"
                onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='🏳️';">`;
  }
  return "🏳️";
}

function ensureCountryCode(country) {
  if (!country) return country;
  if (country.code) return country;
  
  const nameMap = {
    'Chile': 'cl', 'chile': 'cl',
    'Brasil': 'br', 'Brazil': 'br', 'brasil': 'br',
    'Argentina': 'ar', 'argentina': 'ar',
    'Perú': 'pe', 'Peru': 'pe', 'perú': 'pe', 'peru': 'pe',
    'México': 'mx', 'Mexico': 'mx', 'méxico': 'mx',
    'Colombia': 'co', 'colombia': 'co',
    'Venezuela': 've', 'venezuela': 've',
    'Ecuador': 'ec', 'ecuador': 'ec',
    'Bolivia': 'bo', 'bolivia': 'bo',
    'Paraguay': 'py', 'paraguay': 'py',
    'Uruguay': 'uy', 'uruguay': 'uy',
    'Cuba': 'cu', 'cuba': 'cu',
    'Rep. Dominicana': 'do', 'República Dominicana': 'do',
    'Guatemala': 'gt', 'guatemala': 'gt',
    'Honduras': 'hn', 'honduras': 'hn',
    'El Salvador': 'sv', 'el salvador': 'sv',
    'Nicaragua': 'ni', 'nicaragua': 'ni',
    'Panamá': 'pa', 'Panama': 'pa', 'panamá': 'pa', 'panama': 'pa',
    'Costa Rica': 'cr', 'costa rica': 'cr'
  };
  
  const code = nameMap[country.name] || country.code;
  return { ...country, code: code || 'xx' };
}

// Exportar al objeto global
window.HUD = window.HUD || {};
window.HUD.translations = {
  t,
  setLanguage,
  getFlag,
  getBigFlag,
  ensureCountryCode,
  currentLang
};
