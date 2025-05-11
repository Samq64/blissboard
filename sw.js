const cacheName = "blissboard-v1";
const assets = [
  "index.html",
  "style.css",
  "script.js",
  "words.js",
  "images/eyes.svg",
  "images/character.svg",
  "images/icon.png",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
