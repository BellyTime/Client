if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/665-867f34a7579ed79e.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/main-a9b2afef917196f0.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/__offline-5104e004d17244c1.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/_app-83d3f388fb3a534d.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/chat/chatList-207ebe986883e75e.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/chat/chatroom/%5Bid%5D-96b7c7992022f969.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/check-2cf0598f5b47c791.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/coolTime-7a26d0a192fb584d.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/index-abb7a5608bb4dc6d.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/memberPage-163197ab92dab37c.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage-fd19ecc322985782.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/calender-27a9f92712e867ea.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/followingfriend-10316cdd196380ab.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/followingshop-aea21d1e0baeb651.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/reservation-26cd7b31999d143b.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/review-7eddbd1bc78b6ef1.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/reviewWrite/%5Bid%5D-56c7a2d926a8c21a.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/mypage/setting-99595b43fc8286d8.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/search-8cdea1ad1faee93b.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/pages/shop/%5Bid%5D-a0a866b464eea4fc.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/chunks/webpack-cb7634a8b6194820.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/css/149b18973e5508c7.css",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/css/5c460e5a340b3aa6.css",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/mYazBQ3hJMFrDfmgOnROF/_buildManifest.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/mYazBQ3hJMFrDfmgOnROF/_middlewareManifest.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/_next/static/mYazBQ3hJMFrDfmgOnROF/_ssgManifest.js",revision:"mYazBQ3hJMFrDfmgOnROF"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/foodImgs/pizza.png",revision:"d523ce6537b2c3673fc8e0356fc7bb9d"},{url:"/icons/chat-alt-2.png",revision:"ac7b4c18ec7cc25e99991e0979d47b3a"},{url:"/icons/clock.png",revision:"a650f827a215cc8201d0120abe1137a6"},{url:"/icons/home.png",revision:"b29ffd40a93f9373e0a292a66bf4e5c8"},{url:"/icons/search.png",revision:"11211502855144998e25321d2cf843c7"},{url:"/icons/user.png",revision:"e7ab6f4fe668aa77f36f8b8932b51a2b"},{url:"/static/data.js",revision:"f53845ce178bdc73bc82cf12aadd5a81"},{url:"/static/dummyData/calenderlist.json",revision:"3d96b7523167e7013d157de5cf1bc10b"},{url:"/static/dummyData/canceledData.json",revision:"bd03159f25a6069f2f4defba70000d6f"},{url:"/static/dummyData/coolTime.json",revision:"c044079c6de752ef87803f96a797c97e"},{url:"/static/dummyData/findFriend.json",revision:"d32e5b8ba7a69c637e7d8cd5b2bdd210"},{url:"/static/dummyData/followingFriends.json",revision:"2040034d5e1162083d0266f3c89f3163"},{url:"/static/dummyData/followingShops.json",revision:"d4d9a36a07f8fa3b187574035f500100"},{url:"/static/dummyData/friends.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/static/dummyData/myprofile.json",revision:"9b844df585ff8ed03aa2adf0d32f906d"},{url:"/static/dummyData/recentSearchList.json",revision:"4a32d79a3c75297831bbc7e6701b0d91"},{url:"/static/dummyData/reservationData.json",revision:"ea2d62873a8878abb8e388a9f90798c7"},{url:"/static/dummyData/resultList.json",revision:"6d92b1291fb91413a03b680ae9dbb827"},{url:"/static/dummyData/searchList.json",revision:"daf6dfec293e7d4d480bc518e90c0523"},{url:"/static/dummyData/visitedShop.json",revision:"6e02d26819884ecd72f2ae7ef75e720e"},{url:"/static/dummyData/waitingData.json",revision:"bc52aae7b8766d86b7dac970d8111261"},{url:"/static/icon.png",revision:"62ed1115305a0ca11c46d6dbc12bdbc4"},{url:"/static/manifest.json",revision:"1a1be5a319cc75cbc97404db3f9ccf12"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
