// UI/HUD/main.js (VERSIÓN CORREGIDA)
console.log("HUD/main.js cargado");

/* =========================
   VARIABLES GLOBALES DEL HUD
========================= */
let activeTab = "latam";
let currentRanking = [];

/* =========================
   INICIALIZACIÓN PRINCIPAL
========================= */
function initHUD() {
  console.log("🚀 Inicializando HUD...");
  
  // Esperar un momento para asegurar que todo esté cargado
  setTimeout(() => {
    // Verificar dependencias mínimas
    if (!checkEssentialDependencies()) {
      console.warn("⚠️ Algunas dependencias faltan, intentando continuar...");
      // Intentar de nuevo en 500ms
      setTimeout(initHUD, 500);
      return false;
    }
    
    // Añadir estilos CSS para banderas
    addFlagStyles();
    
    // Configurar event listeners
    setupTabListeners();
    
    // Renderizar vista inicial
    if (window.HUD && window.HUD.rankings && window.countries_latam && window.latam_config) {
      try {
        currentRanking = window.HUD.rankings.renderRanking(
          window.countries_latam, 
          window.latam_config, 
          "latam"
        );
        console.log("✅ HUD inicializado correctamente");
      } catch (error) {
        console.error("❌ Error al renderizar ranking:", error);
      }
    }
  }, 100);
  
  return true;
}

/* =========================
   VERIFICACIÓN DE DEPENDENCIAS ESENCIALES
========================= */
function checkEssentialDependencies() {
  console.log("🔍 Verificando dependencias esenciales...");
  
  // Solo verificar lo absolutamente necesario
  const essentialDeps = [
    { name: 'countries_latam', value: window.countries_latam, optional: false },
    { name: 'calculate', value: typeof calculate === 'function' ? calculate : null, optional: false },
    { name: 'getEquipment', value: typeof getEquipment === 'function' ? getEquipment : null, optional: true }
  ];

  let allGood = true;
  essentialDeps.forEach(dep => {
    if (!dep.value && !dep.optional) {
      console.error(`❌ Falta dependencia esencial: ${dep.name}`);
      allGood = false;
    } else if (!dep.value && dep.optional) {
      console.warn(`⚠️ Dependencia opcional faltante: ${dep.name}`);
    } else {
      console.log(`✅ ${dep.name} disponible`);
    }
  });

  // Verificar módulos HUD (construirlos si faltan)
  if (!window.HUD) window.HUD = {};
  if (!window.HUD.translations) {
    console.warn("⚠️ HUD.translations no cargado, creando versión básica...");
    window.HUD.translations = {
      t: (key) => key, // Fallback simple
      getFlag: (country) => "🏳️",
      getBigFlag: (country) => "🏳️",
      ensureCountryCode: (country) => country
    };
  }
  
  if (!window.HUD.rankings) {
    console.error("❌ HUD.rankings no cargado");
    allGood = false;
  }
  
  if (!window.HUD.country) {
    console.error("❌ HUD.country no cargado");
    allGood = false;
  }
  
  if (!window.HUD.tables) {
    console.warn("⚠️ HUD.tables no cargado, puede afectar equipamiento");
  }

  return allGood;
}

/* =========================
   ESTILOS PARA BANDERAS
========================= */
function addFlagStyles() {
  if (!document.querySelector('#flag-styles')) {
    const style = document.createElement('style');
    style.id = 'flag-styles';
    style.textContent = `
      .flag-img, .big-flag-img {
        border-radius: 4px;
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .flag-img {
        width: 40px;
        height: 30px;
        object-fit: cover;
      }
      .big-flag-img {
        width: 80px;
        height: 60px;
        object-fit: cover;
      }
      .rank-flag {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 30px;
        overflow: hidden;
      }
      .big-flag {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 60px;
        overflow: hidden;
        margin-right: 20px;
      }
    `;
    document.head.appendChild(style);
  }
}

/* =========================
   GESTIÓN DE PESTAÑAS
========================= */
function setupTabListeners() {
  const tabGlobal = document.getElementById("tab-global");
  const tabLatam = document.getElementById("tab-latam");
  
  if (!tabGlobal || !tabLatam) {
    console.error("❌ No se encontraron las pestañas");
    return;
  }
  
  // Añadir clase para identificar
  tabGlobal.classList.add('main-tab');
  tabLatam.classList.add('main-tab');
  
  tabGlobal.onclick = (e) => {
    document.querySelectorAll(".main-tab").forEach(t => t.classList.remove("active"));
    e.target.classList.add("active");
    activeTab = "global";
    if (window.HUD && window.HUD.rankings && window.countries_global) {
      try {
        currentRanking = window.HUD.rankings.renderRanking(
          window.countries_global, 
          null, 
          "global"
        );
      } catch (error) {
        console.error("Error al renderizar global:", error);
      }
    }
  };

  tabLatam.onclick = (e) => {
    document.querySelectorAll(".main-tab").forEach(t => t.classList.remove("active"));
    e.target.classList.add("active");
    activeTab = "latam";
    if (window.HUD && window.HUD.rankings && window.countries_latam && window.latam_config) {
      try {
        currentRanking = window.HUD.rankings.renderRanking(
          window.countries_latam, 
          window.latam_config, 
          "latam"
        );
      } catch (error) {
        console.error("Error al renderizar latam:", error);
      }
    }
  };
}

// Exportar al objeto global
window.HUD = window.HUD || {};
window.HUD.main = {
  initHUD,
  activeTab,
  currentRanking
};

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌐 Idioma actual:", window.HUD?.translations?.currentLang || 'es');
  // Dar tiempo a que todo cargue
  setTimeout(() => {
    window.HUD.main.initHUD();
  }, 300);
});
