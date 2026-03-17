const CACHE_NAME = "invokit-landing-v1";
const ASSETS = ["./","./index.html","./terms.html","./privacy.html","./success.html","./manifest.json","./assets/icon-32.png","./assets/icon-180.png","./assets/icon-192.png","./assets/icon-512.png","./assets/favicon.ico"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });