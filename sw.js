/* ===============================
   LATAM FIRE POWER – SERVICE WORKER
   =============================== */

const CACHE_NAME = "latam-fire-power-v1.0.0";

/* Archivos críticos (carga inicial) */
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",

  /* CSS */
  "./styles/variables.css",
  "./styles/layout.css",
  "./styles/rankings.css",
  "./styles/tiers.css",
  "./styles/animations.css",
  "./styles/flag-frames.css",
  "./styles/overlay.css",
  "./styles/overlay-hud.css",
  "./styles/utilities.css",
  "./styles/countryview.css",
  "./styles/android-fixes.css",
  "./styles/responsive.css",
  "./styles/main.css",

  /* UI base */
  "./UI/ui.js",
  "./UI/subTabs.js",

  /* Init */
  "./init.js"
];

/* ===============================
   INSTALACIÓN
   =============================== */
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    })
  );
});

/* ===============================
   ACTIVACIÓN
   =============================== */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* ===============================
   FETCH – ESTRATEGIA HÍBRIDA
   =============================== */
self.addEventListener("fetch", event => {
  const request = event.request;

  /* Solo GET */
  if (request.method !== "GET") return;

  /* Datos y JS → cache first */
  if (
    request.url.includes("/Data/") ||
    request.url.includes("/engine/") ||
    request.url.includes("/UI/") ||
    request.url.includes("/standards/")
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  /* HTML → network first */
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(networkFirst(request));
    return;
  }

  /* CSS / imágenes → stale-while-revalidate */
  event.respondWith(staleWhileRevalidate(request));
});

/* ===============================
   ESTRATEGIAS
   =============================== */

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  return cached || fetchAndCache(request, cache);
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (e) {
    return cache.match(request);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const networkFetch = fetch(request).then(response => {
    cache.put(request, response.clone());
    return response;
  }).catch(() => cached);

  return cached || networkFetch;
}

async function fetchAndCache(request, cache) {
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}