const cacheName = "blissboard-v1";
const cacheFiles = [
  "/index.html",
  "/style.css",
  "/script.js",
  "/words.js",
  "/images/eyes.svg",
  "/images/eyes-dark.svg",
  "/images/character.svg",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
