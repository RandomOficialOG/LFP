console.log("equipmentView cargado");

function renderEquipment(country, category) {
  console.log("🎯 renderEquipment llamado para:", country?.name, category);
  
  const eq = getEquipment(country, category);
  console.log("📋 Datos de equipo:", eq);
  
  if (!eq) {
    return `<div class="eq-empty">Sin información clasificada disponible</div>`;
  }

  // Generar HTML según la categoría
  let html = `<div class="eq-detail-card fade-in">
    <div class="eq-header">
      <span class="eq-category">${category.toUpperCase()}</span>
    </div>
    <div class="eq-body">`;

  // Tanks
  if (category === "Tanques") {
    html += `
      <div class="eq-row">
        <span class="eq-label">Tanque principal</span>
        <span class="eq-value">${eq.main || "—"}</span>
      </div>
      ${eq.secondary ? `
      <div class="eq-row">
        <span class="eq-label">Tanque secundario</span>
        <span class="eq-value">${eq.secondary}</span>
      </div>` : ''}
      ${eq.light ? `
      <div class="eq-row">
        <span class="eq-label">Tanque ligero</span>
        <span class="eq-value">${eq.light}</span>
      </div>` : ''}
      ${eq.apc ? `
      <div class="eq-row">
        <span class="eq-label">Vehículo blindado</span>
        <span class="eq-value">${eq.apc}</span>
      </div>` : ''}
    `;
  }
  // Aircraft
  else if (category === "Aviones" || category === "fighters") {
    html += `
      ${eq.fighter ? `
      <div class="eq-row">
        <span class="eq-label">Caza principal</span>
        <span class="eq-value">${eq.fighter}</span>
      </div>` : ''}
      ${eq.multirole ? `
      <div class="eq-row">
        <span class="eq-label">Multirrol</span>
        <span class="eq-value">${eq.multirole}</span>
      </div>` : ''}
      ${eq.attack ? `
      <div class="eq-row">
        <span class="eq-label">Ataque</span>
        <span class="eq-value">${eq.attack}</span>
      </div>` : ''}
      ${eq.transport ? `
      <div class="eq-row">
        <span class="eq-label">Transporte</span>
        <span class="eq-value">${eq.transport}</span>
      </div>` : ''}
      ${eq.trainer ? `
      <div class="eq-row">
        <span class="eq-label">Entrenamiento</span>
        <span class="eq-value">${eq.trainer}</span>
      </div>` : ''}
    `;
  }
  // Navy
  else if (category === "Naval" || category === "frigates" || category === "submarines") {
    html += `
      ${eq.main_surface ? `
      <div class="eq-row">
        <span class="eq-label">Superficie principal</span>
        <span class="eq-value">${eq.main_surface}</span>
      </div>` : ''}
      ${eq.submarine ? `
      <div class="eq-row">
        <span class="eq-label">Submarinos</span>
        <span class="eq-value">${eq.submarine}</span>
      </div>` : ''}
      ${eq.corvette ? `
      <div class="eq-row">
        <span class="eq-label">Corbetas</span>
        <span class="eq-value">${eq.corvette}</span>
      </div>` : ''}
      ${eq.patrol ? `
      <div class="eq-row">
        <span class="eq-label">Patrulleras</span>
        <span class="eq-value">${eq.patrol}</span>
      </div>` : ''}
      ${eq.carrier ? `
      <div class="eq-row">
        <span class="eq-label">Portaaviones</span>
        <span class="eq-value">${eq.carrier}</span>
      </div>` : ''}
    `;
  }
  // Infantry
  else if (category === "Infanteria") {
    html += `
      ${eq.rifle ? `
      <div class="eq-row">
        <span class="eq-label">Rifle de asalto</span>
        <span class="eq-value">${eq.rifle}</span>
      </div>` : ''}
      ${eq.secondary ? `
      <div class="eq-row">
        <span class="eq-label">Rifle secundario</span>
        <span class="eq-value">${eq.secondary}</span>
      </div>` : ''}
      ${eq.machine_gun ? `
      <div class="eq-row">
        <span class="eq-label">Ametralladora</span>
        <span class="eq-value">${eq.machine_gun}</span>
      </div>` : ''}
      ${eq.sniper ? `
      <div class="eq-row">
        <span class="eq-label">Francotirador</span>
        <span class="eq-value">${eq.sniper}</span>
      </div>` : ''}
    `;
  }

  html += `</div></div>`;
  return html;
}