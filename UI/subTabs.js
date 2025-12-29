// UI/subTabs.js

function createSubTabs(country) {
  const container = document.createElement("div");
  container.className = "category-window";

  // --- SUB TABS ---
  const tabs = document.createElement("div");
  tabs.className = "sub-tabs";

  const tabDefs = [
    { id: "tanks", label: "Tanques" },
    { id: "aircraft", label: "Aviación" },
    { id: "navy", label: "Marina" }
  ];

  tabDefs.forEach((tab, index) => {
    const btn = document.createElement("button");
    btn.className = "sub-tab" + (index === 0 ? " active" : "");
    btn.textContent = tab.label;
    btn.dataset.type = tab.id;

    btn.addEventListener("click", () => {
      switchSubTab(container, tab.id);
    });

    tabs.appendChild(btn);
  });

  container.appendChild(tabs);

  // --- CONTENT PANELS ---
  tabDefs.forEach((tab, index) => {
    const content = document.createElement("div");
    content.className = "tab-content" + (index === 0 ? " active" : "");
    content.dataset.type = tab.id;

    renderEquipment(content, country, tab.id);
    container.appendChild(content);
  });

  return container;
}

// -----------------------------

function switchSubTab(container, type) {
  container.querySelectorAll(".sub-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });

  container.querySelectorAll(".tab-content").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.type === type);
  });
}

// -----------------------------

function renderEquipment(container, country, type) {
  container.innerHTML = "";

  let equipmentData;

  switch (type) {
    case "tanks":
      equipmentData = window.tanks?.[country.code];
      break;
    case "aircraft":
      equipmentData = window.aircraft?.[country.code];
      break;
    case "navy":
      equipmentData = window.navy?.[country.code];
      break;
  }

  if (!equipmentData || equipmentData.length === 0) {
    container.innerHTML = `<p style="opacity:0.6;">Sin información disponible</p>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "arsenal-list";

  equipmentData.forEach(item => {
    const card = document.createElement("div");
    card.className = "arsenal-item";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.role || "Equipo estándar"}</p>
    `;

    list.appendChild(card);
  });

  container.appendChild(list);
}
