const CACHE_NAME = 'bingo-completo-v7';

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

// Fetch - Estratégia: Network First COM FILTRO
self.addEventListener('fetch', event => {
  // ⚠️ FILTRO CRÍTICO: Ignora requisições que não são HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return; // Deixa a requisição passar sem interferência
  }
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a rede funcionou, atualiza o cache
        return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
      })
      .catch(() => {
        // Se a rede falhou, tenta do cache
        return caches.match(event.request);
      })
  );
});