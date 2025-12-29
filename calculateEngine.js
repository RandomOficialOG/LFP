// engine/calculateEngine.js
console.log("calculateEngine v3.1 cargado");

// Configuraciones globales
window.CONFIG = {
  QUALITY_EMPHASIS: 0.7,
  QUANTITY_DIMINISHING: 0.6,
  MIN_EFFECTIVE_SIZE: 0.3,
  REGIONS: {
    LATAM: {
      COMPRESSION: 0.88,
      AVG_POWER: 0.9,
      DOMINANCE_THRESHOLD: 1.8
    }
  },
  ALLIANCES: {
    NATO: { 
      MULTIPLIER: 1.12, 
      SUSTAIN: 1.15,
      THRESHOLD_REDUCTION: 0.85 
    },
    US_PARTNER: { 
      MULTIPLIER: 1.08, 
      SUSTAIN: 1.05 
    }
  }
};

window.STANDARDS = {
  GLOBAL: {
    land: { infantry: 500000, tanks: 800, armored: 15000, artillery: 600 },
    air:  { fighters: 600, bombers: 20, support: 120 },
    navy: { frigates: 25, destroyers: 15, submarines: 12, carriers: 3 }
  },
  ADVANCED: {
    land: { infantry: 180000, tanks: 300, armored: 8000, artillery: 250 },
    air:  { fighters: 280, bombers: 5, support: 80 },
    navy: { frigates: 15, destroyers: 8, submarines: 6, carriers: 1 }
  },
  REGIONAL: {
    land: { infantry: 350000, tanks: 400, armored: 9000, artillery: 350 },
    air:  { fighters: 300, bombers: 5, support: 60 },
    navy: { frigates: 10, destroyers: 4, submarines: 4, carriers: 0 }
  }
};

window.WEIGHTS = {
  land: { infantry: 0.15, tanks: 0.3, armored: 0.2, artillery: 0.3 },
  air: { fighters: 0.5, bombers: 0.25, support: 0.25 },
  navy: { carriers: 0.1, destroyers: 0.2, submarines: 0.5, frigates: 0.3, corvettes: 0.2, patrol: 0.1 },
  force: { land: 0.5, air: 0.25, navy: 0.25 }
};

window.TIER_THRESHOLDS = {
  GLOBAL: { S: 1.75, A: 1.45, B: 1.15 },
  LATAM: { S: 1.45, A: 1.20, B: 0.95 }
};

window.CAP_LIMITS = {
  1: 2.0,
  0.5: 1.7,
  "ALLY_MEDIUM": 1.55,
  DEFAULT: 1.2
};

// Función principal calculate (optimizada con desempate)
window.calculate = function(c, customConfig = null) {
  const role = window.detectEffectiveRole(c);
  const isNATO = (c.alliance === "NATO");
  
  const standards = customConfig?.standards || window.selectStandards(role);
  const weights = customConfig?.weights || window.WEIGHTS;
  
  // Calcular poder por rama
  const branchPowers = window.calculateAllBranches(c, standards, weights);
  const { landPower, airPower, navyPower } = branchPowers;
  
  // Suficiencia doctrinal
  const doctrineScore = window.calculateDoctrineSufficiency(branchPowers, isNATO);
  
  // Poder combinado
  let combinedPower = 
    landPower.capped * weights.force.land +
    airPower.capped * weights.force.air +
    navyPower.capped * weights.force.navy;
  
  // Aplicar modificadores estratégicos
  combinedPower *= doctrineScore;
  combinedPower *= window.projectionFactor(c);
  combinedPower *= window.allianceFactor(c);
  combinedPower *= window.sustainFactor(c);
  combinedPower *= window.regionalDominanceDampener(combinedPower, c.region);
  combinedPower *= window.doctrineDepthPenalty(c);
  combinedPower *= window.professionalismShield(c);
  
  // Normalización regional
  let normalizedPower = window.normalizeByRegion(combinedPower, c.region);
  
  // Límite final
  let finalPower = window.applyFinalCap(normalizedPower, role, c.region);
  
  // Desempate microscópico para evitar empates exactos
  const epsilon = (c.quality || 1) * 0.0001;
  finalPower += epsilon;
  
  // Clasificación
  const tier = window.classifyTier(finalPower, c.region);
  
  return {
    land: parseFloat(landPower.capped.toFixed(3)),
    air: parseFloat(airPower.capped.toFixed(3)),
    navy: parseFloat(navyPower.capped.toFixed(3)),
    total: parseFloat(finalPower.toFixed(3)), // ahora incluye epsilon en ranking
    tier,
    debug: {
      role,
      doctrine: doctrineScore.toFixed(2),
      qualityImpact: c.quality ? (c.quality - 1).toFixed(2) : "0.00"
    }
  };
};

console.log("calculateEngine completamente cargado (con desempate)");