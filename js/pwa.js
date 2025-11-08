// Registrar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
      .then(function(registration) {
        console.log('SW registrado: ', registration.scope);
      })
      .catch(function(error) {
        console.log('Falha SW: ', error);
      });
  });
}