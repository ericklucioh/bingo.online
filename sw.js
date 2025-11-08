const CACHE_NAME = 'bingo-v3';

// Instala - só cachear recursos não-JS
self.addEventListener('install', event => {
  console.log('SW instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          './',
          './index.html', 
          './css/main.css',
          './manifest.json'
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativa
self.addEventListener('activate', event => {
  console.log('SW ativado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - passa todas as requisições JS diretamente
self.addEventListener('fetch', event => {
  // Ignora completamente JS files
  if (event.request.destination === 'script') {
    return fetch(event.request);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});