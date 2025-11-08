// Registrar Service Worker COM FORCE UPDATE
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Primeiro desregistra qualquer SW existente
    navigator.serviceWorker.getRegistrations().then(registrations => {
      return Promise.all(registrations.map(registration => registration.unregister()));
    }).then(() => {
      // Agora registra o novo SW
      return navigator.serviceWorker.register('./sw.js');
    }).then(function(registration) {
      console.log('SW NOVO registrado: ', registration.scope);
      
      // Força atualização imediata
      registration.update();
      
      // Verifica se há uma nova versão waiting
      if (registration.waiting) {
        console.log('Nova versão do SW waiting - recarregando...');
        window.location.reload();
      }
      
      // Escuta por updates
      registration.addEventListener('updatefound', () => {
        console.log('Nova versão do SW encontrada!');
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('Nova versão pronta - recarregando...');
            window.location.reload();
          }
        });
      });
    }).catch(function(error) {
      console.log('Falha SW: ', error);
    });
  });
}