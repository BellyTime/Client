if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = (e) => a(e, n),
      o = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-1846d813"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/476-155f317db37f70f6.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/framework-91d7f78b5b4003c8.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/main-a9b2afef917196f0.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/__offline-5104e004d17244c1.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/_app-5dd6c636eb97e1a2.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/_error-2280fa386d040b66.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/chatting/chatList-cd93e4917228b33e.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/chatting/room/%5Bid%5D-c15504e3f0f62131.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/check-2cf0598f5b47c791.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/coolTime-042ec10b791f0fbe.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/index-c73e79706fd28703.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/memberPage-b60effeb9b1798e3.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage-9c91c95d0ad18fb6.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/calender-701b565c57b608d6.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/followingfriend-8a147fb9a50fc22e.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/followingshop-f6cc1e12aa8a3aa4.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/reservation-f45252fef2ce5ae5.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/review-eecb46e5bab581eb.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/review/%5Bid%5D-d07ac696072456c6.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/reviewWrite/%5Bid%5D-24ac52c6110b9c4c.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/mypage/setting-2a0158fb72bbedc5.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/recommend/%5Bid%5D-0141b4f91e28cab0.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/search-6ae40dd9e2813002.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/shop/%5Bid%5D-3776d1ac47c84244.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/pages/shopfeed/%5Bid%5D-c1b8dde6e9b61201.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/chunks/webpack-cb7634a8b6194820.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/css/a1cd0d9543cff075.css",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/qjrkPqklLUjBAuT6VW68V/_buildManifest.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/qjrkPqklLUjBAuT6VW68V/_middlewareManifest.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        {
          url: "/_next/static/qjrkPqklLUjBAuT6VW68V/_ssgManifest.js",
          revision: "qjrkPqklLUjBAuT6VW68V",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/foodImgs/pizza.png",
          revision: "d523ce6537b2c3673fc8e0356fc7bb9d",
        },
        {
          url: "/icons/chat-alt-2.png",
          revision: "ac7b4c18ec7cc25e99991e0979d47b3a",
        },
        {
          url: "/icons/clock.png",
          revision: "a650f827a215cc8201d0120abe1137a6",
        },
        {
          url: "/icons/home.png",
          revision: "b29ffd40a93f9373e0a292a66bf4e5c8",
        },
        {
          url: "/icons/search.png",
          revision: "11211502855144998e25321d2cf843c7",
        },
        {
          url: "/icons/user.png",
          revision: "e7ab6f4fe668aa77f36f8b8932b51a2b",
        },
        {
          url: "/static/data.js",
          revision: "f53845ce178bdc73bc82cf12aadd5a81",
        },
        {
          url: "/static/dummyData/calenderlist.json",
          revision: "3d96b7523167e7013d157de5cf1bc10b",
        },
        {
          url: "/static/dummyData/canceledData.json",
          revision: "bd03159f25a6069f2f4defba70000d6f",
        },
        {
          url: "/static/dummyData/chatList.json",
          revision: "283d3bf7d82ae070bb889ff914555d2c",
        },
        {
          url: "/static/dummyData/chatShopList.json",
          revision: "791dd5832b3a2bd1625c8815419cddae",
        },
        {
          url: "/static/dummyData/coolTime.json",
          revision: "c044079c6de752ef87803f96a797c97e",
        },
        {
          url: "/static/dummyData/detailFeed.json",
          revision: "66843ccb4442a5889c2d53a98b2f8baa",
        },
        {
          url: "/static/dummyData/feedList.json",
          revision: "b0ec8c23b3f9181f5cdb4be6c2a6f118",
        },
        {
          url: "/static/dummyData/findFriend.json",
          revision: "ebb4158877fa57003133821cfdcb6a95",
        },
        {
          url: "/static/dummyData/followingFriends.json",
          revision: "fc1842022733fe4deee92ee2796b6fcf",
        },
        {
          url: "/static/dummyData/followingShops.json",
          revision: "48500add9c19a368d463048f5f725d76",
        },
        {
          url: "/static/dummyData/friendCoolTimeWithFriend.json",
          revision: "4e3905cbbe88c16b60bbba498b3027ec",
        },
        {
          url: "/static/dummyData/friends.json",
          revision: "d41d8cd98f00b204e9800998ecf8427e",
        },
        {
          url: "/static/dummyData/myReview.json",
          revision: "7f15d327ba27f7e111f2e20228eec0b3",
        },
        {
          url: "/static/dummyData/myprofile.json",
          revision: "9b844df585ff8ed03aa2adf0d32f906d",
        },
        {
          url: "/static/dummyData/newChatRoomId.json",
          revision: "54501ffef7cc6cbed64ab034a95ae99c",
        },
        {
          url: "/static/dummyData/recentSearchList.json",
          revision: "4a32d79a3c75297831bbc7e6701b0d91",
        },
        {
          url: "/static/dummyData/reservationData.json",
          revision: "ea2d62873a8878abb8e388a9f90798c7",
        },
        {
          url: "/static/dummyData/resultList.json",
          revision: "6d92b1291fb91413a03b680ae9dbb827",
        },
        {
          url: "/static/dummyData/searchList.json",
          revision: "daf6dfec293e7d4d480bc518e90c0523",
        },
        {
          url: "/static/dummyData/visitedShop.json",
          revision: "6e02d26819884ecd72f2ae7ef75e720e",
        },
        {
          url: "/static/dummyData/waitingData.json",
          revision: "bc52aae7b8766d86b7dac970d8111261",
        },
        {
          url: "/static/icon.png",
          revision: "62ed1115305a0ca11c46d6dbc12bdbc4",
        },
        {
          url: "/static/manifest.json",
          revision: "1a1be5a319cc75cbc97404db3f9ccf12",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
