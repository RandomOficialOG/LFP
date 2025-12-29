// UI/ui.js
console.log("ui.js cargado (nueva versión modular)");

// Este archivo coordina la carga de módulos HUD
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎮 UI Principal iniciando...");

  // Verificar que todos los módulos HUD estén cargados
  if (!window.HUD) {
    console.error("❌ Módulos HUD no cargados");
    return;
  }

  console.log("✅ Módulos HUD cargados:", Object.keys(window.HUD));

  // Esperar a que el navegador termine layout + CSS pendiente
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (window.HUD.main && window.HUD.main.initHUD) {
        window.HUD.main.initHUD();
        console.log("🧩 HUD principal inicializado");
      } else {
        console.error("❌ HUD.main no disponible");
      }
    });
  });
});

// Activar animaciones SOLO cuando todo (CSS, imágenes, fuentes) esté listo
window.addEventListener("load", () => {
  document.documentElement.classList.remove("loading");
  console.log("✨ Animaciones activadas");
});
