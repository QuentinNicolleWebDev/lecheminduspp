// Service Worker — Le Chemin du SPP
// Rôle : rendre le site installable comme PWA (sans mode offline).
// Sans cache offline car les données (Memberstack/Supabase/JSON) sont dynamiques.

self.addEventListener('install', function(event) {
  // Activation immédiate du nouveau SW dès qu'il est installé
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Reprise du contrôle de toutes les pages ouvertes immédiatement
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Pas de cache : on laisse le navigateur faire son travail normal
  // Cette fonction doit exister pour que la PWA soit installable
  return;
});
