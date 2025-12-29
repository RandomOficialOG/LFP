window.standards_latam = {
  land: { infantry: 250000, tanks: 350, armored: 5000, artillery: 400 },
  air:  { fighters: 40, bombers: 0, support: 100 },
  navy: { frigates: 5, destroyers: 0, submarines: 2, carriers: 0, corvettes: 4, patrol: 40 }
};

window.weights_latam = {
  land: { 
    infantry: 0.25, 
    tanks: 0.2, 
    armored: 0.25, 
    artillery: 0.3 
  },
  air: { 
    fighters: 0.6, 
    bombers: 0.0, 
    support: 0.4  
  },
  navy: { 
    carriers: 0.0,  
    destroyers: 0.2, 
    submarines: 0.4, 
    frigates: 0.25, 
    corvettes: 0.1, 
    patrol: 0.05  
  },
  force: {
    land: 0.50, 
    air: 0.25,  
    navy: 0.25  
  }
};

// Empaquetamos todo para enviarlo al motor
window.latam_config = {
  standards: standards_latam,
  weights: weights_latam
};