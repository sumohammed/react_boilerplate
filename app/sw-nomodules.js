importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp("https://api.hitriva.com"),
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
    "url": "public/javascript/nomodule/Accept-eae8a920.js",
    "revision": "b6e64307befb07f098e877dd1d102423"
  },
  {
    "url": "public/javascript/nomodule/actionTypes-b0d14a88.js",
    "revision": "0fb83b250061a3619d92ea24f7eee2c2"
  },
  {
    "url": "public/javascript/nomodule/Animate-411c42ad.js",
    "revision": "c306bac90983e1dca72867f66de0ff8c"
  },
  {
    "url": "public/javascript/nomodule/api-79424633.js",
    "revision": "bcc21c1ac3c76da104aecfa9f78ceacd"
  },
  {
    "url": "public/javascript/nomodule/Bank-eef0d3b0.js",
    "revision": "835b8c8139266613983e177bd82e8128"
  },
  {
    "url": "public/javascript/nomodule/ChangePassword-792a1d6e.js",
    "revision": "fb21ac8f503a0f55d04af78dd7392331"
  },
  {
    "url": "public/javascript/nomodule/common-d400c37d.js",
    "revision": "9450570d5eef2073212201bf7ac543ee"
  },
  {
    "url": "public/javascript/nomodule/DataSets-87160df1.js",
    "revision": "6ef62a92714789a1f2204677fb841f48"
  },
  {
    "url": "public/javascript/nomodule/defineProperty-a1089ec5.js",
    "revision": "0dfe5fd24f7d52c08b5ee0b7a5039a7c"
  },
  {
    "url": "public/javascript/nomodule/Dialog-24c60389.js",
    "revision": "5ceb8ada7ec90959b5229aaa192e182c"
  },
  {
    "url": "public/javascript/nomodule/extends-0c7a6a58.js",
    "revision": "0b096514ab30b000d5a3453ae0bca5a6"
  },
  {
    "url": "public/javascript/nomodule/GoalsIndex-99928fe1.js",
    "revision": "f562747527a8c29be49c5f2e62757c2c"
  },
  {
    "url": "public/javascript/nomodule/HomeIndex-168d9b4f.js",
    "revision": "e73fc7f743f74815cbbae374072743dd"
  },
  {
    "url": "public/javascript/nomodule/Icons-c6c555dc.js",
    "revision": "5df5ca45f502f38e6b9d5cd156bfb4c6"
  },
  {
    "url": "public/javascript/nomodule/index-21526502.js",
    "revision": "fef84a16722e1d0f21a984594e68e196"
  },
  {
    "url": "public/javascript/nomodule/index-272f0464.js",
    "revision": "0245e935e12fc41249417916783bd4af"
  },
  {
    "url": "public/javascript/nomodule/index-2d74275c.js",
    "revision": "1309fd8bba031b04f54dbb5b99a78ce4"
  },
  {
    "url": "public/javascript/nomodule/index-b0513f57.js",
    "revision": "d362369337841ea6b147b7f7b3692adb"
  },
  {
    "url": "public/javascript/nomodule/index-e4d520eb.js",
    "revision": "af52284a6fb6011c55df736fc37b9089"
  },
  {
    "url": "public/javascript/nomodule/index-f2503f13.js",
    "revision": "b876972436b1b6ed4884f2dc0f83d847"
  },
  {
    "url": "public/javascript/nomodule/index-fbae8ffb.js",
    "revision": "fe2699a3412077051bef629970aaf2f5"
  },
  {
    "url": "public/javascript/nomodule/index.js",
    "revision": "90048ef3763dd7bee1e4df771d76f785"
  },
  {
    "url": "public/javascript/nomodule/Invite-9b0af1e9.js",
    "revision": "e69cf23e368bd0ed778c9fc2d7978f7b"
  },
  {
    "url": "public/javascript/nomodule/Join-d3493402.js",
    "revision": "cceed1fc31914f75ff49ff689c05f3f7"
  },
  {
    "url": "public/javascript/nomodule/Link-d68e5b48.js",
    "revision": "693e459aecd9b0099efaab760ca74977"
  },
  {
    "url": "public/javascript/nomodule/Loading-c194f59b.js",
    "revision": "d9f84da0a1fd88c0582a15cf7a3f16fe"
  },
  {
    "url": "public/javascript/nomodule/Menu-52ea7ecf.js",
    "revision": "5cdcea06acf46a0e2a0457a15007763c"
  },
  {
    "url": "public/javascript/nomodule/New-27c2202f.js",
    "revision": "8d4bde8e222a336ad4a70928a0abb191"
  },
  {
    "url": "public/javascript/nomodule/New-30d82b32.js",
    "revision": "e7424fe98024e9b25a654817cf03cd1a"
  },
  {
    "url": "public/javascript/nomodule/NewOption-4e5656eb.js",
    "revision": "89631283d974fb260a2251eb1859176f"
  },
  {
    "url": "public/javascript/nomodule/objectWithoutProperties-6039c2e9.js",
    "revision": "f92887d2b4a3e1f73541d975c3b2c441"
  },
  {
    "url": "public/javascript/nomodule/Pager-f37bd16c.js",
    "revision": "bbc9386911bbdac8ca57b8f7d7754e48"
  },
  {
    "url": "public/javascript/nomodule/PagerRouter-33985d49.js",
    "revision": "fba789e245003ebb3d72f6d4065402b0"
  },
  {
    "url": "public/javascript/nomodule/PassReset-66cfffbb.js",
    "revision": "64eb443c1cc6c0aaeec204f9c5a44b91"
  },
  {
    "url": "public/javascript/nomodule/Password-7dc6cfc1.js",
    "revision": "944bdeb3d73d8d2963175a26ae0d514a"
  },
  {
    "url": "public/javascript/nomodule/Pay-2f562d32.js",
    "revision": "ca201ad68ba2927aef057ce8722c8439"
  },
  {
    "url": "public/javascript/nomodule/Payee-1bb3f747.js",
    "revision": "f766e686b597624826052e16aec5c8e2"
  },
  {
    "url": "public/javascript/nomodule/PayeeAddPay-77a50bd5.js",
    "revision": "2240ba4ea650e5694615214dc073c0ed"
  },
  {
    "url": "public/javascript/nomodule/PayIndex-5163dbc9.js",
    "revision": "b895da7dccab512cb6f433f45cf5ee14"
  },
  {
    "url": "public/javascript/nomodule/PersonalInfo-5e01fe74.js",
    "revision": "f25199fe743b3487bd621fc221856ec3"
  },
  {
    "url": "public/javascript/nomodule/Profile-084adb9a.js",
    "revision": "1eb35bbe89f203fcbb907fcc6c076379"
  },
  {
    "url": "public/javascript/nomodule/ProfileIndex-c5238db5.js",
    "revision": "a0fcf7019a8a1df31693415981c8443c"
  },
  {
    "url": "public/javascript/nomodule/Schedule-842dbc16.js",
    "revision": "97d50d67af4381bb38038092b752af5b"
  },
  {
    "url": "public/javascript/nomodule/Search-b58a0e80.js",
    "revision": "b6e5a27213ffb3f772598c45856f2f6e"
  },
  {
    "url": "public/javascript/nomodule/Security-d837bd93.js",
    "revision": "25bd03f6ef53e78d5d532483bc15527c"
  },
  {
    "url": "public/javascript/nomodule/Settings-42f9125a.js",
    "revision": "60069f44e5a8cf88d99427f182e0695d"
  },
  {
    "url": "public/javascript/nomodule/Signin-a134d279.js",
    "revision": "3354dd406fe9ea279ab1c9e41bcb6f64"
  },
  {
    "url": "public/javascript/nomodule/slicedToArray-4acdf83a.js",
    "revision": "169851ef1e9ac2ef0c34ad0370204244"
  },
  {
    "url": "public/javascript/nomodule/TabRouter-753fa24e.js",
    "revision": "df918e60d59aa23ca3d015cb476ec50d"
  },
  {
    "url": "public/javascript/nomodule/Theme-62752f73.js",
    "revision": "21ea20fce65661212f0cb8c9bd75ec23"
  },
  {
    "url": "public/javascript/nomodule/toConsumableArray-62f8d598.js",
    "revision": "1b42769d7ee210e7ef642563db4ebf77"
  },
  {
    "url": "public/javascript/nomodule/Welcome-90869f23.js",
    "revision": "ae312cb7e89f0077d271a7d609475f50"
  },
  {
    "url": "public/javascript/nomodule/WelcomeIndex-304aacec.js",
    "revision": "dd5b301950524503ab383d0ecdf3639a"
  },
  {
    "url": "index.html",
    "revision": "22e25843581b6babd038999531c92341"
  },
  {
    "url": "public/css/styles.css",
    "revision": "ccbcd5e91ce825344cb063d29790ce7f"
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
