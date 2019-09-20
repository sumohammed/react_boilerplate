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
    "url": "public/javascript/module/Accept-fad386c4.js",
    "revision": "e673c56cda25ed0991512c1c2f987d8b"
  },
  {
    "url": "public/javascript/module/actionTypes-edbc1405.js",
    "revision": "517fccfbada9ac12a80cb90ac5cf69f6"
  },
  {
    "url": "public/javascript/module/Animate-9feb1866.js",
    "revision": "a9c8bc1a88a1a101dd2392e1021d271c"
  },
  {
    "url": "public/javascript/module/api-17772ac6.js",
    "revision": "c4128e972fc9abce426dcefec06b73e8"
  },
  {
    "url": "public/javascript/module/Bank-8ed251b2.js",
    "revision": "bbe9aae92a90214294ecf3fd9783fd19"
  },
  {
    "url": "public/javascript/module/ChangePassword-a9c5b768.js",
    "revision": "b24feaca65544d771c538d68b6b295bd"
  },
  {
    "url": "public/javascript/module/common-27892a1c.js",
    "revision": "2747a0230ebdfb43f6b44e5d76253dcd"
  },
  {
    "url": "public/javascript/module/DataSets-5c0a33f1.js",
    "revision": "f6fb77a47c1253d7620665b09c9abb7b"
  },
  {
    "url": "public/javascript/module/defineProperty-a0480c32.js",
    "revision": "00c036cb64cf9f213b1b07be44e89f57"
  },
  {
    "url": "public/javascript/module/Dialog-550d8283.js",
    "revision": "cb01544aa0119e7b0c55dee33ebe7678"
  },
  {
    "url": "public/javascript/module/extends-cc4fca12.js",
    "revision": "31cb83d825f08af13e5ce97a47e55203"
  },
  {
    "url": "public/javascript/module/GoalsIndex-1a6ca037.js",
    "revision": "1f863d5e855c59f2c08328d967292e20"
  },
  {
    "url": "public/javascript/module/HomeIndex-8ab303b8.js",
    "revision": "059a7a277ade1a80a552ab609ad5f555"
  },
  {
    "url": "public/javascript/module/Icons-5efe7a19.js",
    "revision": "0194ddb41519f58a2e85afcd83928e65"
  },
  {
    "url": "public/javascript/module/index-0d44c75a.js",
    "revision": "97a059027bdfe37771c1cda52edb0007"
  },
  {
    "url": "public/javascript/module/index-307e5487.js",
    "revision": "aaeac94dcaa8ba411fb88a12ab821931"
  },
  {
    "url": "public/javascript/module/index-80ae32d7.js",
    "revision": "a6f4d43c220d56f5657e0801913db87c"
  },
  {
    "url": "public/javascript/module/index-b337307e.js",
    "revision": "f5d0960fe6ed3a0af73e3427078872ad"
  },
  {
    "url": "public/javascript/module/index-d963c8b9.js",
    "revision": "aff7cd58edb872385f28e809ff87e9f2"
  },
  {
    "url": "public/javascript/module/index-e62460c9.js",
    "revision": "4a3af7b39b0bcb26945e03479b2fdd26"
  },
  {
    "url": "public/javascript/module/index-f0f0d0e2.js",
    "revision": "b29ad0e6ec123503a34e55bb54ef94a0"
  },
  {
    "url": "public/javascript/module/index.js",
    "revision": "732451d9042efea69f4e94cfbec7c6d1"
  },
  {
    "url": "public/javascript/module/Invite-f5481c0a.js",
    "revision": "c9e8b3974915e58659294996db1b1701"
  },
  {
    "url": "public/javascript/module/Join-c827e179.js",
    "revision": "cb8644121cbea29d54a4b384f6e68241"
  },
  {
    "url": "public/javascript/module/Link-304e0d41.js",
    "revision": "113dcf50b394b9930178ac439cb087e6"
  },
  {
    "url": "public/javascript/module/Loading-1c227429.js",
    "revision": "765f3c8b99ded7390935cb7c77f715a6"
  },
  {
    "url": "public/javascript/module/Menu-52e8819c.js",
    "revision": "4c2abdafb765c0a41acee18763d93923"
  },
  {
    "url": "public/javascript/module/New-2b3dc694.js",
    "revision": "a7ab1c5e6159fdd1958381e9e950f571"
  },
  {
    "url": "public/javascript/module/New-33f12699.js",
    "revision": "8d3de4090dada35b296ee01663479fb2"
  },
  {
    "url": "public/javascript/module/NewOption-9206b48d.js",
    "revision": "c4763c78d639ca36d8636e229a22bf2c"
  },
  {
    "url": "public/javascript/module/objectWithoutProperties-234758e1.js",
    "revision": "ed779aa56266c68303cf912dbfe30290"
  },
  {
    "url": "public/javascript/module/Pager-96b949a7.js",
    "revision": "61e30cab71af76f86c0ebb734272675f"
  },
  {
    "url": "public/javascript/module/PagerRouter-1bb02afb.js",
    "revision": "e774bee7e4ee8fc67ec81ea7977a8f6a"
  },
  {
    "url": "public/javascript/module/PassReset-733d1e99.js",
    "revision": "b8e584bb638bf9c4ddd814ede44fa177"
  },
  {
    "url": "public/javascript/module/Password-acecce87.js",
    "revision": "f145202bfe4db5afcfa9d8338cce3bd3"
  },
  {
    "url": "public/javascript/module/Pay-e35089d5.js",
    "revision": "943345fb3e6567d6b287aee44a3f5cd5"
  },
  {
    "url": "public/javascript/module/Payee-9fa16f30.js",
    "revision": "2c27cb8954bfb76f71bb324e95815d4b"
  },
  {
    "url": "public/javascript/module/PayeeAddPay-2bc17e0b.js",
    "revision": "1c491a6a2e07b10724a7ca89b4e0662d"
  },
  {
    "url": "public/javascript/module/PayIndex-c9539f12.js",
    "revision": "bd8741ee471e96f6770140276b2ba1c8"
  },
  {
    "url": "public/javascript/module/PersonalInfo-a50e0fea.js",
    "revision": "68e0fd5be94c21999edfd3c0dea44b41"
  },
  {
    "url": "public/javascript/module/Profile-a2453197.js",
    "revision": "958963beabe0833ccf89bcb1054854d6"
  },
  {
    "url": "public/javascript/module/ProfileIndex-75b6b2e7.js",
    "revision": "4558b910b1707324ba82767edfaac542"
  },
  {
    "url": "public/javascript/module/Schedule-30390f93.js",
    "revision": "c19107df33a4cbb3777c345fc5032372"
  },
  {
    "url": "public/javascript/module/Search-c02f4eba.js",
    "revision": "00106de678e7d78910e5236f8344de10"
  },
  {
    "url": "public/javascript/module/Security-98352042.js",
    "revision": "07b7960177fac35a4b01d4f204050383"
  },
  {
    "url": "public/javascript/module/Settings-d02e52c7.js",
    "revision": "a8e1089a7b56e144c106275546cf7e4d"
  },
  {
    "url": "public/javascript/module/Signin-72de719c.js",
    "revision": "3acee45ba99d2548e368650174012e09"
  },
  {
    "url": "public/javascript/module/slicedToArray-e1941acd.js",
    "revision": "342e657130a7ae1ea30439caae02c007"
  },
  {
    "url": "public/javascript/module/TabRouter-c3f5dbdd.js",
    "revision": "b818d02777bb3d3c2828b49411a33c24"
  },
  {
    "url": "public/javascript/module/Theme-32681cd8.js",
    "revision": "2175e234d7a1370b3554690a67c48422"
  },
  {
    "url": "public/javascript/module/toConsumableArray-0ed5356c.js",
    "revision": "77b032f63afc904834474b93ed07d3a2"
  },
  {
    "url": "public/javascript/module/Welcome-9d38f8f4.js",
    "revision": "43c09b3bdbdb42fc95cc89fa733f4c24"
  },
  {
    "url": "public/javascript/module/WelcomeIndex-c11c249c.js",
    "revision": "2d579bc2ac564178cf821be028bc71f0"
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
