// Service Worker — cache-first strategy for offline PWA support
const CACHE = 'de-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/css/style.css',
  '/js/app.js',
  '/js/audio.js',
  '/js/article.js',
  '/js/schedule.js',
  '/js/mockexam.js',
  '/js/wfragen.js',
  '/js/overview.js',
  '/js/wordlist.js',
  '/js/cases.js',
  '/js/lesen.js',
  '/js/state.js',
  '/js/intro.js',
  '/js/email.js',
  '/js/conjugation.js',
  '/js/hoeren.js',
  '/js/flashcards.js',
  '/js/scramble.js',
  '/js/nav.js',
  '/js/speaking.js',
  '/js/data/schedule.js',
  '/js/data/wf-questions.js',
  '/js/data/sprechen.js',
  '/js/data/cases.js',
  '/js/data/lesen.js',
  '/js/data/conjugation.js',
  '/js/data/words.js',
  '/js/data/form.js',
  '/js/data/email-prompts.js',
  '/js/data/hoeren.js',
  '/js/data/scramble.js',
  '/icons/icon-192.png',
  '/icons/icon-192-maskable.png',
  '/icons/icon-512.png',
  '/icons/icon-512-maskable.png',
  '/og.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Only handle same-origin GET requests
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
        }
        return res;
      });
    })
  );
});
