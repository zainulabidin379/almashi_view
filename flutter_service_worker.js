'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2ba7b4c5fd46aa776575e62b1f1383b6",
"version.json": "febafda859d896f5d741735b8c6662df",
"index.html": "8409e9046c645d91261f864c3b0eefc4",
"/": "8409e9046c645d91261f864c3b0eefc4",
"loader.css": "a57eed145f2cd2ee01f0bd713a5c93c7",
"main.dart.js": "c4f2d9cfdd777304f27c4a4ffaabc782",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/apple-touch-icon.png": "6ce96b8ab4d0ea4c1aabf717c2148096",
"icons/icon-192.png": "f9f3c3ffe3dddef1e0c5e53c96e02275",
"icons/icon-192-maskable.png": "ba116d2ac8074086fec28899c8cb73a5",
"icons/icon-512-maskable.png": "f5e32e16fd8fbde96237d8592b294fa3",
"icons/icon-512.png": "00e1419026a9aa44c990880add0e8a5c",
"manifest.json": "b15cf45672ef60495029cbb98b88028f",
"assets/AssetManifest.json": "0e854ecf6daa7c2b7c76bbe4878d8f9f",
"assets/NOTICES": "01f1f8280024e9e3b6547280d18d6212",
"assets/FontManifest.json": "da637b9cc82c74259bf9d2f591b2674c",
"assets/AssetManifest.bin.json": "65eebe16c0a4dcea082f4fe982d44e87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "842c8179bf24d485fa6642ef22356f41",
"assets/fonts/MaterialIcons-Regular.otf": "dd8e8a09b7b69879f58bc466eb56c704",
"assets/assets/svg/search.svg": "375911c8d840613bbb275f656a4af7a2",
"assets/assets/svg/visibilityOn.svg": "d816236bb9440ea8ff5e887ae4277b80",
"assets/assets/svg/user.svg": "c808b73ff2f071323312807f0d90aaf6",
"assets/assets/svg/home.svg": "6625c8692c41fa6533d2e3ae690f5288",
"assets/assets/svg/shop.svg": "46388d69c453c5cefb85ab71ffae3591",
"assets/assets/svg/logout.svg": "41c164e04d430cf6c23aa1f9840c4a1a",
"assets/assets/svg/cancel.svg": "eea4429e0b12aa3dbacfaee8d6af7023",
"assets/assets/svg/reports.svg": "c79e78a8c3055de853939119c6af8c91",
"assets/assets/svg/redemptions.svg": "7dddd35748b482c2a75282442c6fd88a",
"assets/assets/svg/settings.svg": "4d2b0e5b1f903da6358f75a7106c6869",
"assets/assets/svg/visibilityOff.svg": "7925515cfd438db103f119c136447d2e",
"assets/assets/svg/arrowRight.svg": "16e7994ccc6913e75cbee9616f733078",
"assets/assets/svg/email.svg": "8c323e4e3dd8b0f57c4406928823cc69",
"assets/assets/svg/add.svg": "92c964eceb14b79f75e4c6c938cb91f7",
"assets/assets/svg/orders.svg": "e873938c91717efa8b6ebac17e115c8e",
"assets/assets/svg/edit.svg": "00171d15d4b38c4e34eb601c434974f7",
"assets/assets/svg/delete.svg": "09d53deeaa3ed7d99da18dc8fcc9b4a5",
"assets/assets/svg/dropdown.svg": "0c532ff5a0da911f1e1de0cc63cd131a",
"assets/assets/svg/upload.svg": "9d4a37e012413656e617b41fdc917f92",
"assets/assets/svg/logo.svg": "b0fb864b7f2a22baa29c9c4ac972894f",
"assets/assets/svg/arrowLeft.svg": "95c5972ea76c392db12265d3d435e04e",
"assets/assets/svg/password.svg": "8ce92ebcbef703389af159bd92bc4deb",
"assets/assets/svg/users.svg": "7b823dabce3d79cb64108ba200dceb8b",
"assets/assets/images/login.png": "8927d8a11e27a3168772bc5f047262f1",
"assets/assets/fonts/Baloo2-Bold.ttf": "ae54f1b8d95136c189d9a0ba889b92fe",
"assets/assets/fonts/Baloo2-SemiBold.ttf": "b9bee2f0c92fe9c03c914d55cbbf331d",
"assets/assets/fonts/Baloo2-Regular.ttf": "a95cb88be1095a0cf15b8bd8b8566149",
"assets/assets/fonts/Baloo2-Medium.ttf": "188e0e531c8c950a48b71a9e490b4481",
"assets/assets/fonts/Baloo2-ExtraBold.ttf": "a191eea0345157925f2c0c41c327a606",
"logo.svg": "2368ff27352a17a92da5dc897c92b234",
"favicon.svg": "4f70340b4040b595071bb003af95a3c4",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
