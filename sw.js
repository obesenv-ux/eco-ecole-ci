const CACHE_NAME = 'eco-ecole-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './eco-bot.html',
  './defis.html',
  './signalement.html',
  './apprendre.html',
  './admin.html',
  './manifest.json',
  './assets/js/eco-bot.js',
  './assets/data/connaissance.js',
  './assets/fiches/fiche-1-odd.html',
  './assets/fiches/fiche-2-compost.html',
  './assets/fiches/fiche-3-eau.html',
  './assets/fiches/fiche-4-tri.html'
];

// Installation du Service Worker et mise en cache des ressources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch(err => console.log('Erreur de mise en cache Service Worker :', err))
  );
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes avec stratégie Cache First (Fallback Network)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
