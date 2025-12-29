console.log("HUD/rankings.js cargado");

/* =========================
   CACHE DE RANKINGS
========================= */
const rankingCache = {
  global: null,
  latam: null
};

/* =========================
   HELPERS DE TIER Y CLASIFICACIÓN
========================= */
function getTier(total, context) {
  if (context === "global") {
    if (total >= 1.85) return "S+";
    if (total >= 1.6) return "S";
    if (total >= 1.0) return "A+";
    if (total >= 0.25) return "A";
    if (total >= 0.1) return "B";
    if (total >= 0.097) return "C";
    return "D";
  }

  if (total >= 0.5) return "A";
  if (total >= 0.1) return "B";
  if (total >= 0.05) return "C";
  return "D";
}

function getTierClass(tier) {
  const tierClasses = {
    "S+": "tier-splus",
    "S": "tier-s",
    "A+": "tier-aplus",
    "A": "tier-a",
    "B": "tier-b",
    "C": "tier-c",
    "D": "tier-d"
  };
  return tierClasses[String(tier).toUpperCase()] || "tier-c";
}

function getLatamPrestigeTitle(tier) {
  const t = HUD.translations.t;
  return {
    "A": t('prestigeLatamA'),
    "B": t('prestigeLatamB'),
    "C": t('prestigeLatamC'),
    "D": t('prestigeLatamD')
  }[tier] || t('prestigeLatamC');
}

function getGlobalPrestigeTitle(tier) {
  const t = HUD.translations.t;
  return {
    "S+": t('prestigeGlobalSPlus'),
    "S": t('prestigeGlobalS'),
    "A+": t('prestigeGlobalAPlus'),
    "A": t('prestigeGlobalA'),
    "B": t('prestigeGlobalB'),
    "C": t('prestigeGlobalC'),
    "D": t('prestigeGlobalD')
  }[tier] || t('prestigeGlobalC');
}

/* =========================
   RENDER DE RANKING (DOM)
========================= */
function drawRanking(currentRanking, activeTab) {
  const rankingDiv = document.getElementById("ranking");
  if (!rankingDiv) return;

  rankingDiv.innerHTML = "";

  const fragment = document.createDocumentFragment();

  currentRanking.forEach((c, i) => {
    const row = document.createElement("div");
    row.className = `rank-row ${getTierClass(c.tier)} slide-in`;
    row.style.setProperty('--delay', `${i * 0.05}s`);
    row.dataset.index = i;
    row.dataset.tab = activeTab;

    row.innerHTML = `
      <div class="rank-col-left">
        <span class="rank-num">#${i + 1}</span>
        <div class="rank-flag">${HUD.translations.getFlag(c)}</div>
        <span class="rank-name">${c.name}</span>
      </div>
      <div class="rank-col-right">
        <span class="tier-badge ${getTierClass(c.tier)}">${c.tier}</span>
      </div>
    `;

    fragment.appendChild(row);
  });
  console.log("✅ Current ranking a renderizar:", currentRanking.map(c => c.name));

  rankingDiv.appendChild(fragment);
}

/* =========================
   RENDER PRINCIPAL (OPTIMIZADO)
========================= */
function renderRanking(countries, config = null, activeTab) {
  console.log("📊 Renderizando ranking optimizado:", activeTab);

  // Usar cache si existe
  if (rankingCache[activeTab]) {
    drawRanking(rankingCache[activeTab], activeTab);
    return rankingCache[activeTab];
  }

  // Calcular ranking solo UNA vez
  const ranking = Object.values(countries)
    .map(c => {
      const country = HUD.translations.ensureCountryCode(c);
      const power = calculate(country, config);
      return {
        ...country,
        power,
        tier: getTier(power.total, activeTab)
      };
    })
    .sort((a, b) => b.power.total - a.power.total);

  rankingCache[activeTab] = ranking;
  drawRanking(ranking, activeTab);
  return ranking;
}

/* =========================
   EVENT DELEGATION (1 SOLO LISTENER)
========================= */
document.addEventListener("click", (e) => {
  const row = e.target.closest(".rank-row");
  if (!row) return;

  const index = Number(row.dataset.index);
  const tab = row.dataset.tab;

  if (window.HUD?.country && rankingCache[tab]) {
    window.HUD.country.showOverlay(index, rankingCache[tab], tab);
  }
});

/* =========================
   EXPORT GLOBAL
========================= */
window.HUD = window.HUD || {};
window.HUD.rankings = {
  renderRanking,
  getTier,
  getTierClass,
  getLatamPrestigeTitle,
  getGlobalPrestigeTitle,
  _cache: rankingCache // opcional, útil para debug
};