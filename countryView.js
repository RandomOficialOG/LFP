// UI/countryView.js
// ============================================
// VISOR INTELIGENTE DE PAÍSES - VERSIÓN COMPLETA
// ============================================

class CountryView {
  constructor() {
    this.mode = 'grid'; // 'grid', 'list', 'detail'
    this.currentCountry = null;
    this.countries = {};
  }
  
  // Inicializar con datos
  init(countriesData) {
    this.countries = countriesData;
    this.calculatePowerScores(); // Calcular puntuaciones
    return this;
  }
  
  // Calcular puntuación de poder (basado en tu motor)
  calculatePowerScores() {
    for (const [key, country] of Object.entries(this.countries)) {
      // Fórmula simplificada - AJUSTA SEGÚN TU MOTOR
      const landPower = (
        (country.land.infantry * 0.1) +
        (country.land.tanks * 100) +
        (country.land.armored * 25) +
        (country.land.artillery * 50)
      ) * country.quality * country.readiness;
      
      const airPower = (
        (country.air.fighters * 150) +
        (country.air.support * 30)
      ) * country.modernity;
      
      const navyPower = (
        (country.navy.frigates || 0) * 500 +
        (country.navy.submarines || 0) * 600 +
        (country.navy.carriers || 0) * 2000 +
        (country.navy.corvettes || 0) * 200 +
        (country.navy.patrol || 0) * 30
      );
      
      country.powerScore = Math.round((landPower + airPower + navyPower) / 1000);
      country.budgetBillions = country.budget; // Para claridad
    }
  }
  
  // ===== RENDERIZADORES PRINCIPALES =====
  
  // 1. Vista de GRID (banderas + datos básicos)
  renderGrid(containerId = 'flags-container') {
    const container = document.getElementById(containerId) || this.createContainer();
    const countriesArray = this.getSortedCountries();
    
    container.innerHTML = `
      <div class="countries-header">
        <h2>⚔️ Poder Militar Latinoamericano</h2>
        <div class="view-controls">
          <button class="view-btn active" data-view="grid">🏁</button>
          <button class="view-btn" data-view="list">📋</button>
          <button class="view-btn" data-view="cards">🃏</button>
        </div>
      </div>
      <div class="flags-grid">
        ${countriesArray.map(country => this.gridCard(country)).join('')}
      </div>
      <div class="grid-footer">
        <small>Total: ${countriesArray.length} países | Clic para detalles</small>
      </div>
    `;
    
    this.addGridEvents(container);
    this.mode = 'grid';
    return container;
  }
  
  // 2. Vista de LISTA (ranking detallado)
  renderList(containerId = 'ranking') {
    const container = document.getElementById(containerId);
    const countriesArray = this.getSortedCountries();
    
    container.innerHTML = `
      <div class="ranking-header">
        <h2>🏆 Ranking de Poder Militar</h2>
        <div class="ranking-filters">
          <select id="region-filter">
            <option value="all">Todos</option>
            <option value="pacific">Alianza Pacífico</option>
            <option value="mercosur">Mercosur</option>
          </select>
        </div>
      </div>
      <div class="ranking-table">
        ${countriesArray.map((country, index) => this.rankingRow(country, index)).join('')}
      </div>
    `;
    
    this.mode = 'list';
    return container;
  }
  
  // 3. Vista de DETALLE (un país específico)
  renderDetail(countryCode) {
  const country = this.getCountryByCode(countryCode);
  if (!country) return null;

  const modal = this.createModal();

  modal.innerHTML = `
    <div class="country-detail">

      <div class="detail-header">
        <img src="https://flagcdn.com/w120/${country.code}.png" 
             alt="${country.name}" class="detail-flag">
        <div class="detail-title">
          <h2>${country.name}</h2>
          <div class="detail-score">
            Poder: <strong>${country.powerScore}</strong>
          </div>
        </div>
        <button class="close-btn">&times;</button>
      </div>

      <div class="detail-stats">
        <div class="stat-card">
          <h4>📊 Calificaciones</h4>
          <p>Calidad: <span>${country.quality * 100}%</span></p>
          <p>Modernidad: <span>${country.modernity * 100}%</span></p>
          <p>Disponibilidad: <span>${country.readiness * 100}%</span></p>
        </div>

        <div class="stat-card">
          <h4>💰 Presupuesto</h4>
          <p>$${country.budget} mil millones</p>
          <p>Capacidad industrial: ${country.industrial * 100}%</p>
        </div>
      </div>

      <!-- ===== TABS ===== -->
      <div class="equipment-tabs">
        <button class="tab-btn" data-tab="land">🪖 Tierra</button>
        <button class="tab-btn" data-tab="air">✈️ Aire</button>
        <button class="tab-btn" data-tab="navy">⚓ Mar</button>
      </div>

      <!-- ===== CONTENIDO OCULTO ===== -->
      <div class="equipment-content hidden" id="tab-land">
        <h4>🪖 Fuerzas Terrestres</h4>
        <p>Infantería: ${country.land.infantry.toLocaleString()}</p>
        <p>Tanques: ${country.land.tanks || 0}</p>
        <p>Blindados: ${country.land.armored || 0}</p>
        <p>Artillería: ${country.land.artillery || 0}</p>
      </div>

      <div class="equipment-content hidden" id="tab-air">
        <h4>✈️ Fuerzas Aéreas</h4>
        <p>Cazas: ${country.air.fighters || 0}</p>
        <p>Apoyo: ${country.air.support || 0}</p>
      </div>

      <div class="equipment-content hidden" id="tab-navy">
        <h4>⚓ Fuerzas Navales</h4>
        <p>Fragatas: ${country.navy.frigates || 0}</p>
        <p>Submarinos: ${country.navy.submarines || 0}</p>
        <p>Portaaviones: ${country.navy.carriers || 0}</p>
        <p>Patrulleras: ${country.navy.patrol || 0}</p>
      </div>

      <!-- ===== NOTAS ===== -->
      <div class="detail-notes">
        <h4>📝 Notas del Analista</h4>
        <p>${this.generateNotes(country)}</p>
      </div>

    </div>
  `;

  // ===== CONTROL DE TABS =====
  modal.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      modal.querySelectorAll('.equipment-content')
        .forEach(c => c.classList.add('hidden'));

      const tab = btn.dataset.tab;
      modal.querySelector(`#tab-${tab}`).classList.remove('hidden');
    };
  });

  modal.querySelector('.close-btn').onclick = () => modal.remove();
  document.body.appendChild(modal);

  return modal;
}
  
  // ===== COMPONENTES REUTILIZABLES =====
  
  gridCard(country) {
    return `
      <div class="flag-card" data-country="${country.code}" 
           onclick="countryView.renderDetail('${country.code}')">
        <img src="https://flagcdn.com/w80/${country.code}.png" 
             alt="${country.name}" class="flag">
        <div class="card-content">
          <h4>${country.name}</h4>
          <div class="power-badge">${country.powerScore}</div>
          <div class="mini-stats">
            <span>🪖 ${country.land.tanks || 0}</span>
            <span>✈️ ${country.air.fighters || 0}</span>
            <span>⛴️ ${country.navy.frigates || 0}</span>
          </div>
        </div>
      </div>
    `;
  }
  
  rankingRow(country, index) {
    return `
      <div class="ranking-row" data-country="${country.code}">
        <div class="rank">${index + 1}</div>
        <div class="country">
          <img src="https://flagcdn.com/w40/${country.code}.png" alt="${country.name}">
          <span>${country.name}</span>
        </div>
        <div class="score">${country.powerScore}</div>
        <div class="stats">
          <span class="stat">🪖 ${country.land.tanks || 0}</span>
          <span class="stat">✈️ ${country.air.fighters || 0}</span>
          <span class="stat">💰 $${country.budget}B</span>
        </div>
        <button class="detail-btn" onclick="countryView.renderDetail('${country.code}')">
          📊
        </button>
      </div>
    `;
  }
  
  // ===== UTILIDADES =====
  
  getSortedCountries() {
    return Object.values(this.countries)
      .sort((a, b) => b.powerScore - a.powerScore);
  }
  
  getCountryByCode(code) {
    return Object.values(this.countries).find(c => c.code === code);
  }
  
  generateNotes(country) {
    const notes = [];
    
    if (country.quality >= 0.9) notes.push("Fuerzas de alta calidad");
    if (country.modernity >= 0.9) notes.push("Equipamiento moderno");
    if (country.readiness < 0.7) notes.push("Baja disponibilidad operativa");
    if (country.land.infantry > 300000) notes.push("Fuerza terrestre masiva");
    if (country.air.fighters === 0) notes.push("Sin capacidad de caza");
    if (country.navy.carriers > 0) notes.push("Posee portaaviones");
    
    return notes.length > 0 
      ? notes.join(". ") + "." 
      : "Fuerzas equilibradas sin características extremas.";
  }
  
  createContainer() {
    const container = document.createElement('div');
    container.id = 'flags-container';
    document.querySelector('.container').prepend(container);
    return container;
  }
  
  createModal() {
    const modal = document.createElement('div');
    modal.className = 'country-modal';
    return modal;
  }
  
  addGridEvents(container) {
    // Eventos para botones de vista
    container.querySelectorAll('.view-btn').forEach(btn => {
      btn.onclick = (e) => {
        container.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const view = e.target.dataset.view;
        
        if (view === 'list') this.renderList();
        else if (view === 'grid') this.renderGrid();
      };
    });
  }
  
  // ===== API PÚBLICA SIMPLE =====
  static createAndMount(countriesData, targetId = 'flags-container') {
    const view = new CountryView().init(countriesData);
    window.countryView = view; // Hacerlo global
    return view.renderGrid(targetId);
  }
}

// Auto-inicialización si hay datos disponibles
if (typeof countries_latam !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    CountryView.createAndMount(countries_latam);
  });
}

// Exportar para uso modular
if (typeof module !== 'undefined') {
  module.exports = CountryView;
}