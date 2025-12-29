// engine/powerEngine/countrys.js
console.log("powerEngine/countrys.js cargado");

window.regionalDominanceDampener = function(total, region) {
  if (region !== "LATAM") return 1;
  
  const threshold = 0.9 * 1.8; // AVG_POWER * DOMINANCE_THRESHOLD
  
  if (total <= threshold) return 1;
  
  const excess = total - threshold;
  return 1 / (1 + excess * 0.6);
};

window.doctrineDepthPenalty = function(c) {
  if (c.region !== "LATAM") return 1;
  
  let factor = 1;
  
  if (c.budget > 40 && !c.alliance) factor -= 0.1;
  if (c.navy?.carriers === 0) factor -= 0.05;
  
  return Math.max(0.85, factor);
};

window.detectEffectiveRole = function(c) {
  if (c.industrialRole !== undefined) return c.industrialRole;
  
  if (c.budget >= 150 && c.industrial >= 0.8) return 1;
  if (c.budget >= 45 && c.industrial >= 0.7) return 0.5;
  if (c.alliance && c.budget >= 12) return "ALLY_MEDIUM";
  return 0;
};

window.selectStandards = function(role) {
  // STANDARDS se definirá en calculateEngine.js
  const STANDARDS = window.STANDARDS || {
    GLOBAL: {},
    ADVANCED: {},
    REGIONAL: {}
  };
  
  switch(role) {
    case 1: return STANDARDS.GLOBAL;
    case 0.5: return STANDARDS.ADVANCED;
    case "ALLY_MEDIUM": return STANDARDS.ADVANCED;
    default: return STANDARDS.REGIONAL;
  }
};

console.log("Funciones countrys cargadas en window");