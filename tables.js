// UI/HUD/tables.js
console.log("HUD/tables.js cargado");

/* =========================
   FUNCIONES DE EQUIPAMIENTO
========================= */
function renderEquipment(country, category) {
  console.log("🎯 renderEquipment:", country?.name, "->", category);
  const eq = getEquipment(country, category);
  
  if (!eq) {
    return `<div class="eq-empty">
      <div style="color: var(--tier-c); margin-bottom: 10px;">📭</div>
      <strong>${HUD.translations.t('equipmentNotAvailable')}</strong><br>
      <small>${country.name} - ${category}</small>
    </div>`;
  }

  let html = `<div class="eq-detail-card fade-in">
    <div class="eq-header">
      <span class="eq-category">${category.toUpperCase()}</span>
      <span class="eq-country">${country.name}</span>
    </div>
    <div class="eq-body">`;

  switch(category) {
    case "tanks": html += renderTanksEquipment(eq); break;
    case "infantry": html += renderInfantryEquipment(eq); break;
    case "armored": html += renderArmoredEquipment(eq); break;
    case "artillery": html += renderArtilleryEquipment(eq); break;
    case "fighters": html += renderFightersEquipment(eq); break;
    case "helicopters": html += renderHelicoptersEquipment(eq); break;
    case "frigates":
    case "submarines":
    case "corvettes":
    case "patrol": html += renderNavalEquipment(eq, category); break;
    default: html += renderGenericEquipment(eq);
  }

  html += `</div></div>`;
  return html;
}

function renderTanksEquipment(eq) {
  const properties = [
    { key: 'main', label: HUD.translations.t('mainTank') },
    { key: 'secondary', label: HUD.translations.t('secondaryTank') },
    { key: 'light', label: HUD.translations.t('lightTank') },
    { key: 'apc', label: HUD.translations.t('apc') },
    { key: 'ifv', label: HUD.translations.t('ifv') },
    { key: 'reconnaissance', label: HUD.translations.t('reconnaissance') },
    { key: 'mrap', label: HUD.translations.t('mrap') }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderInfantryEquipment(eq) {
  const properties = [
    { key: 'assault_rifle', label: HUD.translations.t('assaultRifle') },
    { key: 'battle_rifle', label: HUD.translations.t('battleRifle') },
    { key: 'machine_gun', label: HUD.translations.t('machineGun') },
    { key: 'sniper', label: HUD.translations.t('sniper') },
    { key: 'anti_tank', label: HUD.translations.t('antiTank') },
    { key: 'grenade_launcher', label: HUD.translations.t('grenadeLauncher') },
    { key: 'pistol', label: HUD.translations.t('pistol') },
    { key: 'shotgun', label: HUD.translations.t('shotgun') },
    { key: 'mortar', label: HUD.translations.t('mortar') }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderArmoredEquipment(eq) {
  const properties = [
    { key: 'apc', label: 'APC' },
    { key: 'ifv', label: 'IFV' },
    { key: 'reconnaissance', label: HUD.translations.t('reconnaissance') },
    { key: 'mrap', label: HUD.translations.t('mrap') },
    { key: 'command', label: 'Command' },
    { key: 'recovery', label: 'Recovery' },
    { key: 'engineering', label: 'Engineering' }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderArtilleryEquipment(eq) {
  const properties = [
    { key: 'towed', label: HUD.translations.t('towed') },
    { key: 'self_propelled', label: HUD.translations.t('selfPropelled') },
    { key: 'rocket', label: HUD.translations.t('rocket') },
    { key: 'mortar', label: 'Mortars' },
    { key: 'anti_aircraft', label: HUD.translations.t('antiAircraft') },
    { key: 'coastal', label: HUD.translations.t('coastal') }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderFightersEquipment(eq) {
  const properties = [
    { key: 'air_superiority', label: HUD.translations.t('airSuperiority') },
    { key: 'multirole', label: HUD.translations.t('multirole') },
    { key: 'interceptor', label: HUD.translations.t('interceptor') },
    { key: 'attack', label: HUD.translations.t('attackAircraft') },
    { key: 'trainer', label: HUD.translations.t('trainer') },
    { key: 'electronic_warfare', label: HUD.translations.t('electronicWarfare') },
    { key: 'awacs', label: HUD.translations.t('awacs') },
    { key: 'tanker', label: HUD.translations.t('tanker') }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderHelicoptersEquipment(eq) {
  const properties = [
    { key: 'attack', label: HUD.translations.t('attackHeli') },
    { key: 'utility', label: HUD.translations.t('utilityHeli') },
    { key: 'transport', label: HUD.translations.t('transportHeli') },
    { key: 'scout', label: HUD.translations.t('scoutHeli') },
    { key: 'medevac', label: HUD.translations.t('medevac') },
    { key: 'naval', label: HUD.translations.t('navalHeli') },
    { key: 'training', label: HUD.translations.t('trainingHeli') }
  ];
  return generateEquipmentRows(eq, properties);
}

function renderNavalEquipment(eq, category) {
  let properties = [];
  switch(category) {
    case "frigates":
      properties = [
        { key: 'main_surface', label: 'Main frigate' },
        { key: 'guided_missile', label: 'Guided missile' },
        { key: 'anti_submarine', label: 'Anti-submarine' },
        { key: 'general_purpose', label: 'General purpose' }
      ];
      break;
    case "submarines":
      properties = [
        { key: 'attack', label: 'Attack' },
        { key: 'conventional', label: 'Conventional' },
        { key: 'nuclear', label: 'Nuclear' },
        { key: 'ssk', label: 'SSK' }
      ];
      break;
    case "corvettes":
      properties = [
        { key: 'corvette', label: 'Corvette' },
        { key: 'missile', label: 'Missile' },
        { key: 'patrol_corvette', label: 'Patrol' }
      ];
      break;
    case "patrol":
      properties = [
        { key: 'offshore', label: 'Offshore' },
        { key: 'coastal', label: 'Coastal' },
        { key: 'riverine', label: 'Riverine' },
        { key: 'fast_attack', label: 'Fast attack' }
      ];
      break;
  }
  return generateEquipmentRows(eq, properties);
}

function generateEquipmentRows(eq, propertyDefinitions) {
  let html = '';
  propertyDefinitions.forEach(prop => {
    if (eq[prop.key]) {
      html += `<div class="eq-row">
        <span class="eq-label">${prop.label}</span>
        <span class="eq-value">${eq[prop.key]}</span>
      </div>`;
    }
  });
  
  const definedKeys = propertyDefinitions.map(p => p.key);
  for (const [key, value] of Object.entries(eq)) {
    if (!definedKeys.includes(key) && value && typeof value === 'string') {
      const label = formatLabel(key);
      html += `<div class="eq-row">
        <span class="eq-label">${label}</span>
        <span class="eq-value">${value}</span>
      </div>`;
    }
  }
  
  return html || `<div class="eq-row"><span class="eq-label">Equipment</span><span class="eq-value">${HUD.translations.t('equipmentNotSpecified')}</span></div>`;
}

function renderGenericEquipment(eq) {
  let html = '';
  for (const [key, value] of Object.entries(eq)) {
    if (value && typeof value === 'string') {
      const label = formatLabel(key);
      html += `<div class="eq-row">
        <span class="eq-label">${label}</span>
        <span class="eq-value">${value}</span>
      </div>`;
    }
  }
  return html || `<div class="eq-empty">${HUD.translations.t('noDataAvailable')}</div>`;
}

function formatLabel(key) {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace('Apb', 'APB')
    .replace('Mrap', 'MRAP')
    .replace('Ifv', 'IFV')
    .replace('Apv', 'APV')
    .replace('Awacs', 'AWACS');
}

// Exportar al objeto global
window.HUD = window.HUD || {};
window.HUD.tables = {
  renderEquipment,
  renderTanksEquipment,
  renderInfantryEquipment,
  renderArmoredEquipment,
  renderArtilleryEquipment,
  renderFightersEquipment,
  renderHelicoptersEquipment,
  renderNavalEquipment,
  generateEquipmentRows,
  renderGenericEquipment,
  formatLabel
};