// engine/powerEngine/core.js
console.log("powerEngine/core.js cargado");

// Todas las funciones se asignan a window, NO se usa export

// Funciones de calidad
window.diminishingReturns = function(value, factor) {
  if (factor === undefined) factor = window.CONFIG ? window.CONFIG.QUANTITY_DIMINISHING : 0.6;
  if (value <= 1) return value;
  return 1 + Math.log(value) * factor;
};

window.qualityEffectiveness = function(quality, quantity, standard) {
  const QUALITY_EMPHASIS = window.CONFIG ? window.CONFIG.QUALITY_EMPHASIS : 0.7;
  const normalizedQuantity = Math.min(quantity / standard, 3);
  const qualityImpact = Math.pow(quality, QUALITY_EMPHASIS);
  return qualityImpact * window.diminishingReturns(normalizedQuantity);
};

window.professionalismShield = function(c) {
  let bonus = 1;
  
  if (c.quality >= 1.15 && c.budget < 40) {
    bonus += (c.quality - 1) * 0.8;
  }
  
  if ((c.alliance === "NATO" || c.alliance === "US_PARTNER") && c.budget < 60) {
    bonus += (c.quality - 1) * 0.5;
  }
  
  return Math.min(bonus, 1.35);
};

// Factores estratégicos
window.sustainFactor = function(c) {
  if (c.alliance === "NATO") return 1.15;
  if (c.alliance) return 1.05;
  
  let sustain = 1;
  if (c.industrial < 0.6) sustain -= 0.2;
  if (c.budget < 20) sustain -= 0.15;
  
  return Math.max(0.3, sustain);
};

window.projectionFactor = function(c) {
  let score = 1;
  
  if (c.navy?.carriers > 0) score += 0.2;
  if (c.air?.support > 100) score += 0.15;
  if (c.budget > 60) score += 0.1;
  if (c.alliance === "NATO") score += 0.1;
  
  return Math.min(score, 1.5);
};

window.allianceFactor = function(c) {
  if (c.alliance === "NATO") return 1.12;
  if (c.alliance === "US_PARTNER") return 1.08;
  return 1;
};

window.sufficiencyFactor = function(value, threshold, isAllianceMember) {
  const adjustedThreshold = isAllianceMember ? threshold * 0.85 : threshold;
  
  if (value >= adjustedThreshold) return 1;
  
  return Math.sqrt(value / adjustedThreshold);
};

// Cálculo por rama
window.calculateBranchPower = function(data, standard, weights, c) {
  let effectivePower = 0;
  
  for (const [unitType, unitCount] of Object.entries(data)) {
    if (!unitCount || !standard[unitType]) continue;
    
    const unitEffectiveness = window.qualityEffectiveness(
      c.quality || 1,
      unitCount,
      standard[unitType]
    );
    
    effectivePower += unitEffectiveness * weights[unitType];
  }
  
  const strategyMultiplier = 
    Math.pow(c.modernity || 1, 0.4) * 
    Math.pow(c.readiness || 1, 0.5);
  
  return {
    raw: effectivePower,
    capped: window.diminishingReturns(effectivePower * strategyMultiplier, 0.5)
  };
};

window.hasNavalForces = function(navy) {
  return navy && Object.values(navy).some(v => v > 0);
};

window.calculateAllBranches = function(c, standards, weights) {
  const landPower = window.calculateBranchPower(c.land || {}, standards.land, weights.land, c);
  const airPower = window.calculateBranchPower(c.air || {}, standards.air, weights.air, c);
  
  let navyPower = { raw: 0, capped: 0 };
  if (window.hasNavalForces(c.navy)) {
    navyPower = window.calculateBranchPower(c.navy, standards.navy, weights.navy, c);
  }
  
  return { landPower, airPower, navyPower };
};

window.calculateDoctrineSufficiency = function(branchPowers, isNATO) {
  const { landPower, airPower, navyPower } = branchPowers;
  
  const sufficiencyScores = [
    window.sufficiencyFactor(landPower.capped, 0.9, isNATO),
    window.sufficiencyFactor(airPower.capped, 0.75, isNATO)
  ];
  
  if (navyPower.raw > 0) {
    sufficiencyScores.push(window.sufficiencyFactor(navyPower.capped, 0.65, isNATO));
  }
  
  return sufficiencyScores.reduce((a, b) => a + b, 0) / sufficiencyScores.length;
};

console.log("Funciones core cargadas en window");