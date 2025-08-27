self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('stock-app-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './products.csv',
                './manifest.json',
                './icon-192.png',
                './icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
