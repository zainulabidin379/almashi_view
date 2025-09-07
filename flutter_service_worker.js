'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "082e94a9701c354e6206030273edbef5",
"version.json": "febafda859d896f5d741735b8c6662df",
"index.html": "8409e9046c645d91261f864c3b0eefc4",
"/": "8409e9046c645d91261f864c3b0eefc4",
"loader.css": "a57eed145f2cd2ee01f0bd713a5c93c7",
"main.dart.js": "0129050ea32729d4310f6d5a85fbe125",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/apple-touch-icon.png": "6ce96b8ab4d0ea4c1aabf717c2148096",
"icons/icon-192.png": "f9f3c3ffe3dddef1e0c5e53c96e02275",
"icons/icon-192-maskable.png": "ba116d2ac8074086fec28899c8cb73a5",
"icons/icon-512-maskable.png": "f5e32e16fd8fbde96237d8592b294fa3",
"icons/icon-512.png": "00e1419026a9aa44c990880add0e8a5c",
"manifest.json": "b15cf45672ef60495029cbb98b88028f",
".git/config": "7bf28e13aef9e0186f8618863a0e37f4",
".git/objects/0c/7c2d9007d1604c043bae6655ce6b56a6f13355": "30e94510c323e975e3c1affd72057f3b",
".git/objects/0c/ca69e6be68a4216f205df27506bc2b2f35af86": "abf54cfb1cbd2465c62c48ead55e2494",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/7fbc936882531b3b6287b3dbfb1d63a2b59efc": "582d7450256de46ac12d3da4cecfdc3a",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/3c/887750bb018ebdea6960fd5370cd5027edec5c": "88582284f31ec234ca9103b0d473e1ed",
".git/objects/56/2442c71a20c766514f076e5c77526242bced33": "8d7aa673eeae0efe39894c9b45d16c39",
".git/objects/d9/7533241d37c8fa8811bd1af6d8729aebeaa94c": "71446f92b9b2f4803da343a4362d39b2",
".git/objects/ac/b714d37039bf3fbcc3d3573daa0c92abf9dce8": "9f0e42794c2a382a156cc0881e8385cf",
".git/objects/bb/0ede19cdfaa1eaed072dc48df95afb1ac5357c": "aa162f5be923dadc45ef26457df61832",
".git/objects/bb/5b31a898a77a7dc43389ecccbe926dc9fd3269": "682b6146434381d606c8637b53b25abc",
".git/objects/be/1103b58ad9a1f6f833704d4615b0ad333e360d": "5f5f1e36ad638a8640757aa761dd85f9",
".git/objects/df/ba2783be38a1bd11574473f34a1be5ca6156d7": "756833cffbd2696c0db289c6a51947f2",
".git/objects/d6/3c709c1fe5e97ea38c85651a1abf7a5f056dc0": "52dad5b27affc07bdc3bcb36c543bf76",
".git/objects/e5/b367b517774f17c1e908078e9fcca9cb3b1ef4": "00a73a0925783e415915dedcc3cd567c",
".git/objects/f4/518b129b99f9b6835bc77b80b44a8947b596f5": "5f424504a404cdf384701d9cc89df1d3",
".git/objects/eb/1b06415f593b2ab9ff33af1e326d19298664cb": "08340759b2bab4a8c6fd06a8bd8f7f61",
".git/objects/ee/281a58a334d958a7345a777f89e28ba89629ce": "872c028e7390e0b09e2c3bb4cc542c0b",
".git/objects/f2/6f82bb79bcc06b70db2bcf15f050711e2b1539": "f7a721664401098fd24c6c7000a992e1",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/ca/23b989fd2e905d97cc0d77b92bc4b6ff858a1c": "f9598174265e422c1b02facd1147ea1c",
".git/objects/e4/2789f04f719a2cf5c8f0b76be976a58889c6b2": "3647dda67b3fa2bfaee19e3bfdaf1b20",
".git/objects/fe/3453d6cf3afc2cb6fddb91739d3134f22e37b0": "ceca4b7e4dbb617bb702526006976499",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/fe/b195df6ce70934e54b7f3170f70039492011d1": "d3187add42c3463b13e7806564300803",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/c1/f6ecfb56652ad4edfd14e1f6b95b5648afc146": "b54594508c2a6306172f9afe169e2ed5",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/4b/86a9e233c75a83866ba13c96cb0cbf39639774": "f226c51b8c5a0385843eb6d6401b6fc5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/11/49ca441fe746c434b50f31ec5bbbc7d32577c2": "11ff8c3fc093b46f694c4548d9993fdb",
".git/objects/7d/741ae661985f0081cbcbc666804f089171cbf8": "1c757a90ce3b499d071fd309d22358b2",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/80/63e1e3f8183d9ed76f9f17c45bacebf5971749": "f3a30367821ebfbd7c08c6afee5e9b77",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/2a/a64c1ad997db5e97665cc12135c16e90d67bb0": "629b360c140970970031d6377760e41b",
".git/objects/00/21f00e0d32d91f30d09999576f1e5d781878a2": "f4ffd881caaf470acabf17eca58d7c93",
".git/objects/31/1fb9e352fbc20ad8e34fdc60c70017c7378b6a": "68cd1900a3b438ad8ea85cb7611294f7",
".git/objects/3a/e097c5729eabff90aa1eca4abaeec46177d047": "c77e30b30479481c86cf8fb0cc2dc7aa",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/37/46925e990e2c035cd6f1def456c84e6c8f4732": "2e54ef0d8cba6fef18c6cb627128267f",
".git/objects/06/768e5886c33cb206197252a2c251121dd40fb6": "2f85632b2cc36bef6d698ccf37be0322",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/17da1858393f3ba89fcc51aabe5c4c5c43679b": "e91c01b8e6b9e65384696ca44953f189",
".git/objects/b8/08e87c78fb12495a0277bac799602190deb17c": "0749d53510cc549e70bac37309fb7d5a",
".git/objects/b1/06c4581283a404c4bfc2f69cf257ee0bf4fabb": "d27a7ee8babcfc67799405384a6f8e27",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/de/4d0258e46a8e9a31cf5172d9ff7ef89a905400": "20a0fccf081da7b82c269835f58ad706",
".git/objects/b9/acb2e5baa27fa176208ccbc85a73308a1f84ab": "46e57fa0aa64056f0ee617ab75fcee92",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/f7/95ea378fbf841c2f0934bd607c73c1305f24f8": "4da81dec9eb23bf19469833e10a8e08f",
".git/objects/c5/66b78a8f5b477da9a7094d5669edf0c0351346": "ce01b0f0747bb384d3e1a2d81660c0eb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/2d/1c924ae18a5ca8f2f5986ee2dc72ec934019aa": "ef6a1f315d5c80a50e5cbf7e1f0f03d7",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/15/2411c09f334d22403d4f0ed8f7431eb16d3567": "69abed275c6418932eeab6885fc6f353",
".git/objects/85/bd52e6a931c8462449a62621392c0a1368b17a": "7a4836b637d23ce84a8e20c6b1dbc37e",
".git/objects/1d/f916a970b51c388bc78a730eba18a1c6ab0f1a": "d08744851d1dbe8bcbef7eae9e82401a",
".git/objects/49/61d5937f17776873cbb7e140c8dbc56ad9c568": "d905528d2434c800153de059ad4d2867",
".git/objects/49/3f5177bf1461a93c87bb7a961df467d90f77c4": "d4f7cb859c91ed2d904a8f350472b1cf",
".git/objects/49/856bc3e2c991b6b1465f7a4e672104da6fe9b1": "2879d6a765758dca8d18a18aef9cb7b7",
".git/objects/2b/563b59c5766983e3659cbd4639a1ea1708d28e": "18e4b6699b318f222d6e93572b19e244",
".git/objects/78/1149816f9c96271d9f40f5ddaca6bf1661c6f3": "c953bc0ef8886a2b8810c93c1746c8c8",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/objects/14/acc498f2a18e428fc364c99bfd9874230e6946": "2cc740f3b639b8c3b31e28b34f784457",
".git/objects/22/cd4b19d2454ebc8f45d605f0af0bc397aa2900": "ed65daca3440c729acfe1359f405a0b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/index": "47c129fea4e3fb6a825701acff217552",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
