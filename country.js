// UI/HUD/country.js
console.log("HUD/country.js cargado");

/* =========================
   ANIMATION HELPERS
========================= */
function animateValue(obj, start, end, duration) {
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

/* =========================
   HELPER PARA STAT CARDS
========================= */
function createStatCard(label, count, category, minCount = 1) {
  const hasUnits = count >= minCount;
  const displayCount = count || 0;
  const clickableClass = hasUnits ? 'clickable' : 'disabled';
  const dataEq = hasUnits ? category : '';
  
  return `
    <div class="stat-card ${clickableClass}" 
         data-eq="${dataEq}" 
         data-count="${displayCount}"
         title="${hasUnits ? '' : HUD.translations.t('unavailable')}">
      <span class="stat-label">${label}</span>
      <span class="stat-val" data-target="${displayCount}">0</span>
      ${!hasUnits ? '<span class="zero-badge">0</span>' : ''}
    </div>
  `;
}

/* =========================
   SECTIONS RENDERERS
========================= */
function renderLand(c) {
  return `
    <div class="stats-grid">
      ${createStatCard(HUD.translations.t('tanks'), c.land?.tanks, 'tanks', 1)}
      ${createStatCard(HUD.translations.t('infantry'), c.land?.infantry, 'infantry', 1000)}
      ${createStatCard(HUD.translations.t('armored'), c.land?.armored, 'armored', 1)}
      ${createStatCard(HUD.translations.t('artillery'), c.land?.artillery, 'artillery', 1)}
    </div>
  `;
}

function renderAir(c) {
  return `
    <div class="stats-grid">
      ${createStatCard(HUD.translations.t('fighters'), c.air?.fighters, 'fighters', 1)}
      ${createStatCard(HUD.translations.t('helicopters'), c.air?.support, 'helicopters', 1)}
      ${createStatCard(HUD.translations.t('bombers'), c.air?.bombers || 0, 'bombers', 1)}
      ${createStatCard(HUD.translations.t('transport'), c.air?.transport || 0, 'transport', 1)}
    </div>
  `;
}

function renderNavy(c) {
  if (!c.navy) {
    return `<div class="empty-state">${HUD.translations.t('noNaval')}</div>`;
  }
  
  return `
    <div class="stats-grid">
      ${createStatCard(HUD.translations.t('frigates'), c.navy?.frigates, 'frigates', 1)}
      ${createStatCard(HUD.translations.t('submarines'), c.navy?.submarines, 'submarines', 1)}
      ${createStatCard(HUD.translations.t('corvettes'), c.navy?.corvettes, 'corvettes', 1)}
      ${createStatCard(HUD.translations.t('patrol'), c.navy?.patrol, 'patrol', 1)}
    </div>
  `;
}

/* =========================
   OVERLAY / MODAL
========================= */
function showOverlay(index, currentRanking, activeTab) {
  const c = currentRanking[index];
  const backdrop = document.createElement("div");
  backdrop.className = "overlay-backdrop fade-in";
  const panel = document.createElement("div");
  panel.className = `overlay-panel scale-up ${HUD.rankings.getTierClass(c.tier)}`;
  
  if (activeTab === "global") {
    panel.setAttribute('data-global-rank', index + 1);
  } else {
    panel.setAttribute('data-latam-rank', index + 1);
  }

  const prestigeTitle = activeTab === "latam" 
    ? HUD.rankings.getLatamPrestigeTitle(c.tier) 
    : HUD.rankings.getGlobalPrestigeTitle(c.tier);

  panel.innerHTML = `
    <div class="panel-header">
      <button class="close-btn">&times;</button>
      <div class="header-content">
        <div class="big-flag">${HUD.translations.getBigFlag(c)}</div>
        <div class="header-text">
          <h2>${c.name}</h2>
          <div class="sub-header">
            <span class="tier-pill ${HUD.rankings.getTierClass(c.tier)}">Tier ${c.tier}</span>
            <span class="prestige-text">${prestigeTitle}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-body">
      <div class="tabs-container">
        <button class="sub-tab active" data-tab="land">${HUD.translations.t('land')}</button>
        <button class="sub-tab" data-tab="air">${HUD.translations.t('air')}</button>
        <button class="sub-tab" data-tab="navy">${HUD.translations.t('navy')}</button>
      </div>

      <div class="content-area">
        <div class="tab-content active" id="land">${renderLand(c)}</div>
        <div class="tab-content" id="air">${renderAir(c)}</div>
        <div class="tab-content" id="navy">${renderNavy(c)}</div>
      </div>
      
      <div id="equipment-display-area">
        <p class="eq-placeholder">${HUD.translations.t('selectUnit')}</p>
      </div>
    </div>
  `;

  const close = () => {
    backdrop.classList.remove("fade-in");
    setTimeout(() => backdrop.remove(), 300);
  };

  panel.querySelector(".close-btn")?.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => {
    if(e.target === backdrop) close();
  });

  backdrop.appendChild(panel);
  document.body.appendChild(backdrop);

  setupTabs(panel, c);
  animateCounters(panel);
}

function setupTabs(panel, c) {
  const tabs = panel.querySelectorAll(".sub-tab");
  const contents = panel.querySelectorAll(".tab-content");
  const eqDisplay = panel.querySelector("#equipment-display-area");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(co => co.classList.remove("active"));

      tab.classList.add("active");
      const activeContent = panel.querySelector(`#${tab.dataset.tab}`);
      activeContent.classList.add("active");
      
      eqDisplay.innerHTML = `<p class="eq-placeholder">${HUD.translations.t('selectUnit')}</p>`;
      animateCounters(activeContent);
    });
  });

  panel.addEventListener("click", (e) => {
    const item = e.target.closest(".clickable[data-eq]");
    if (item && item.dataset.eq) {
      panel.querySelectorAll(".clickable").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      if (window.HUD && window.HUD.tables) {
        eqDisplay.innerHTML = window.HUD.tables.renderEquipment(c, item.dataset.eq);
      }
    }
  });
}

function animateCounters(container) {
  const counters = container.querySelectorAll(".stat-val");
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    if(!isNaN(target) && target > 0) {
      animateValue(counter, 0, target, 800);
    }
  });
}

// Exportar al objeto global
window.HUD = window.HUD || {};
window.HUD.country = {
  showOverlay,
  renderLand,
  renderAir,
  renderNavy,
  createStatCard,
  animateValue,
  animateCounters
};