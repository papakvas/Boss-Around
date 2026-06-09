/* Boss Around — service worker (v2, network-first)
   IMPORTANT: app code (HTML/CSS/JS) is served NETWORK-FIRST so updates you
   deploy are picked up immediately when online. The cache is only a fallback
   for offline use. Supabase API/realtime traffic is never cached. */

const CACHE = 'boss-around-v3';
const SHELL = [
  './', './index.html', './styles.css', './app.js', './config.js',
  './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(SHELL).catch(() => {})) // best-effort precache
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never touch API / auth / realtime — always straight to the network.
  if (url.hostname.endsWith('supabase.co') || url.hostname.endsWith('supabase.in')) return;

  // Same-origin app shell: NETWORK-FIRST, fall back to cache, then index.html.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
  }
});

// Allow the page to tell a waiting SW to take over immediately.
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) { if ('focus' in client) return client.focus(); }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
