// engine/powerEngine/ranking.js
console.log("powerEngine/ranking.js cargado");

window.normalizeByRegion = function(power, region) {
  if (region === "LATAM") {
    return Math.pow(power, 0.88); // COMPRESSION
  }
  return power;
};

window.applyFinalCap = function(power, role, region) {
  const CAP_LIMITS = window.CAP_LIMITS || { DEFAULT: 1.2 };
  
  const finalCap = (region === "LATAM") 
    ? 2.2 
    : CAP_LIMITS[role] || CAP_LIMITS.DEFAULT;
  
  return Math.min(power, finalCap);
};

window.classifyTier = function(total, region) {
  const TIER_THRESHOLDS = window.TIER_THRESHOLDS || {
    GLOBAL: { S: 1.75, A: 1.45, B: 1.15 },
    LATAM: { S: 1.45, A: 1.20, B: 0.95 }
  };
  
  const thresholds = region === "LATAM" 
    ? TIER_THRESHOLDS.LATAM 
    : TIER_THRESHOLDS.GLOBAL;
  
  if (total >= thresholds.S) return "S";
  if (total >= thresholds.A) return "A";
  if (total >= thresholds.B) return "B";
  return "C";
};

console.log("Funciones ranking cargadas en window");