if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[t]) return;
    let i = {};
    const r = (e) => a(e, t),
      f = { module: { uri: t }, exports: i, require: r };
    s[t] = Promise.all(n.map((e) => f[e] || r(e))).then((e) => (c(...e), i));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/app-build-manifest.json", revision: "e0756bcf8038a67daca08ecf52802900" },
        {
          url: "/_next/static/WmyxVePcOylnyUBUfBayR/_buildManifest.js",
          revision: "33a63e93a9966760de0478faeb86109e",
        },
        {
          url: "/_next/static/WmyxVePcOylnyUBUfBayR/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/_next/static/chunks/138-0c5028e532aee099.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/212-7b839ebb8464c911.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/214.b1305d5d2d11f41b.js", revision: "b1305d5d2d11f41b" },
        { url: "/_next/static/chunks/22-afa2b8824bdb1158.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/259-063b32a70ac94bdc.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/295-40eb046fef228503.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/360-4ae69c4d43e57814.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/453-7c791877596ce428.js", revision: "WmyxVePcOylnyUBUfBayR" },
        {
          url: "/_next/static/chunks/4bd1b696-6f2370461a550571.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        { url: "/_next/static/chunks/625-68af8dbe170c761f.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/660-5e4c9248a06909d6.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/686-286e374132f779d5.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/776-6f28ead68c229b25.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/795.7fc8b2d58a4c1bc7.js", revision: "7fc8b2d58a4c1bc7" },
        { url: "/_next/static/chunks/806-43f0398f9955234d.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/839-a7861ac0a21b10a9.js", revision: "WmyxVePcOylnyUBUfBayR" },
        { url: "/_next/static/chunks/891-4cea48a0645f866c.js", revision: "WmyxVePcOylnyUBUfBayR" },
        {
          url: "/_next/static/chunks/app/_not-found/page-c4aaa825860c2ef1.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/api/contact/route-f7fb3ff307ded341.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/api/test-supabase/route-f34326cf5a85db06.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/api/tests/diva/route-0252c0fa3eb7966e.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/api/tests/mbi/route-670f41307e0b6b1c.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/blog/%5Bslug%5D/page-e36ad0aee6f29c31.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/blog/page-2ba9bc91cb510fc8.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/contact/page-a324bfba089dc2a7.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/faq/page-49bf73627de6302f.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/global-error-08953455fe3d7474.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/icon/route-5f5b1055b247b314.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/layout-2666b0a400c8d8dc.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/mon-approche/page-6f02032d12eeb652.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/not-found-be170183b2412f3f.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/page-605f035efde88105.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/partenariat/page-9dc8511194de3e37.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/qui-suis-je/page-eab2d5ba9ec9b837.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/robots.txt/route-880586234e10d5cb.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/services/%5Bslug%5D/page-77c7ec2b87b278e7.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/services/page-6592c7b7b32f004e.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/sitemap.xml/route-0e980101cd80365a.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/tarifs/page-fec010167a9c3588.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/tests/burnout/page-59c705b8e75a8ee9.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/tests/page-1ef75677ab1951b6.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/app/tests/tdah/page-317e3f05b714e63e.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/framework-554e43672125c683.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        { url: "/_next/static/chunks/main-1cad4988b95eeab6.js", revision: "WmyxVePcOylnyUBUfBayR" },
        {
          url: "/_next/static/chunks/main-app-bf59cb342a4525bb.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/pages/_app-ff9e5fc2a10d7f72.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/pages/_error-f06744c91d09a041.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-df1df200fe537c5e.js",
          revision: "WmyxVePcOylnyUBUfBayR",
        },
        { url: "/_next/static/css/2fadf77459ff8606.css", revision: "2fadf77459ff8606" },
        { url: "/_next/static/css/9460a01d41f9a7e6.css", revision: "9460a01d41f9a7e6" },
        {
          url: "/_next/static/media/0da54fcd0470ea43-s.woff2",
          revision: "b970cda172e5c105d36642ea0cbbd193",
        },
        {
          url: "/_next/static/media/35f3de0ebb1cfc70-s.woff2",
          revision: "18e8ea957b6c2d8032ba0f1c9603b6af",
        },
        {
          url: "/_next/static/media/5ece437c7024c161-s.woff2",
          revision: "c3fbcb38845f29aec4dfd00940b0c166",
        },
        {
          url: "/_next/static/media/680a7121f7a85e3f-s.woff2",
          revision: "c9890e96868d69cf23857ff02fd06aa8",
        },
        {
          url: "/_next/static/media/8a1d8947e5852e30-s.p.woff2",
          revision: "06dac3d9f8a5ed82542f7e51f9eaa120",
        },
        {
          url: "/_next/static/media/9cc5b37ab1350db7-s.p.woff2",
          revision: "26082c73a711d4530a40ee117c5d6cb5",
        },
        {
          url: "/_next/static/media/audrey-hero.9c868d9d.jpg",
          revision: "3c556496440e39c86a0c379a8c540fd4",
        },
        {
          url: "/_next/static/media/e6099e249fd938cc-s.p.woff2",
          revision: "c008db4e8a972ad72dcbd4251a98ac63",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/icons/icon.svg", revision: "ffd9fc253330beebfe07dc25388877fd" },
        { url: "/manifest.json", revision: "aaf65adb5f63cac62d6c42765043a4cf" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
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
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: n }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers })
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
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
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
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
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
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
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
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET"
    ));
});
