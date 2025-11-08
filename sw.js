const CACHE_NAME = 'bingo-completo-v4';

// Instala - AGORA cacheia TUDO incluindo JS
self.addEventListener('install', event => {
  console.log('SW instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          './',
          './index.html', 
          './css/main.css',
          './manifest.json',
          // AGORA ADICIONA OS JS - ordem de dependência
          './js/regrasDeNegocio.js',
          './js/funcional.js',
          './js/naoFuncional.js', 
          './js/main.js',
          './js/body.js',
          './js/pwa.js'
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
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - AGORA cacheia JS também
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache ou faz fetch
        return response || fetch(event.request);
      })
  );
});