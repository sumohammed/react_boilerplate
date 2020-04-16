importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://api.hitriva.com"), // YOUR API DOMAIN
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
);

workbox.routing.registerNavigationRoute("/index.html");

workbox.precaching.precacheAndRoute([
  {
    "url": "public/javascript/nomodule/Home-255f48a8.js",
    "revision": "0dce416110326d0e8e9d4824d7ad1249"
  },
  {
    "url": "public/javascript/nomodule/index-a361c005.js",
    "revision": "5ff90c322c4a2d59ee1ca6e59e8e3367"
  },
  {
    "url": "public/javascript/nomodule/index.js",
    "revision": "dea816644fcf9ce4ec71c4d432316c80"
  },
  {
    "url": "index.html",
    "revision": "774733ed7fe52163f4d5d2f3ae0b3b98"
  },
  {
    "url": "public/css/styles.css",
    "revision": "2362b51ac36feea5724e898d0e7923c2"
  },
  {
    "url": "public/images/icons/icon-128x128.png",
    "revision": "0f39fa8ac56ffb23a8c9ca78e151d458"
  },
  {
    "url": "public/images/icons/icon-144x144.png",
    "revision": "b62f10fd7bec5d0ad2f4c54920873a67"
  },
  {
    "url": "public/images/icons/icon-152x152.png",
    "revision": "1fdbc0018a34b339ff0c011cb0c2c7f7"
  },
  {
    "url": "public/images/icons/icon-192x192.png",
    "revision": "8b714736d5481ca4f656789a81b8ee3d"
  },
  {
    "url": "public/images/icons/icon-384x384.png",
    "revision": "60b158338596b018884b9b4478d711dc"
  },
  {
    "url": "public/images/icons/icon-512x512.png",
    "revision": "35249da005b7936f39264fa1cba0753b"
  },
  {
    "url": "public/images/icons/icon-72x72.png",
    "revision": "c8d30f7e823fc68819646b9dc8ec3a0c"
  },
  {
    "url": "public/images/icons/icon-96x96.png",
    "revision": "015cf5ce37d9b61f9258d848faa3a975"
  },
  {
    "url": "template.html",
    "revision": "18e079ee373c3f260569dd7f83079168"
  }
]);

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: "offline"
  },
  hitFilter: params => {
    const queueTimeInSeconds = Math.round(params.get("qt") / 1000);
    params.set("cm1", queueTimeInSeconds);
  }
});
