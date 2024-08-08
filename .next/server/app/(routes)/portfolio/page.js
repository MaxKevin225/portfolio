(() => {
  var e = {};
  (e.id = 5795),
    (e.ids = [5795]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      7310: (e) => {
        "use strict";
        e.exports = require("url");
      },
      6212: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          });
        var r = i(482),
          n = i(9108),
          o = i(2563),
          a = i.n(o),
          s = i(8300),
          l = {};
        for (let e in s)
          0 >
            ["default", "tree", "pages", "GlobalError", "originalPathname", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => s[e]);
        i.d(t, l);
        let d = [
            "",
            {
              children: [
                "(routes)",
                {
                  children: [
                    "portfolio",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(i.bind(i, 2147)),
                            "G:\\portfolio\\app\\(routes)\\portfolio\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  "not-found": [
                    () => Promise.resolve().then(i.t.bind(i, 9361, 23)),
                    "next/dist/client/components/not-found-error",
                  ],
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(i.bind(i, 7481))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [() => Promise.resolve().then(i.bind(i, 7384)), "G:\\portfolio\\app\\layout.tsx"],
              "not-found": [
                () => Promise.resolve().then(i.t.bind(i, 9361, 23)),
                "next/dist/client/components/not-found-error",
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(i.bind(i, 7481))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = ["G:\\portfolio\\app\\(routes)\\portfolio\\page.tsx"],
          u = "/(routes)/portfolio/page",
          m = { require: i, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/(routes)/portfolio/page",
              pathname: "/portfolio",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      8928: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 8987)), Promise.resolve().then(i.bind(i, 1815));
      },
      2601: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 2353)),
          Promise.resolve().then(i.bind(i, 2160)),
          Promise.resolve().then(i.t.bind(i, 1900, 23)),
          Promise.resolve().then(i.t.bind(i, 1476, 23));
      },
      335: (e, t, i) => {
        Promise.resolve().then(i.t.bind(i, 2583, 23)),
          Promise.resolve().then(i.t.bind(i, 6840, 23)),
          Promise.resolve().then(i.t.bind(i, 8771, 23)),
          Promise.resolve().then(i.t.bind(i, 3225, 23)),
          Promise.resolve().then(i.t.bind(i, 9295, 23)),
          Promise.resolve().then(i.t.bind(i, 3982, 23));
      },
      2353: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => o });
        var r = i(5344),
          n = i(9410);
        let o = () =>
          r.jsx("div", {
            className: "bottom-0 right-0 hidden md:inline-block md:absolute",
            children: r.jsx(n.default, {
              src: "/circles.png",
              width: "300",
              height: "300",
              className: "w-full h-full ",
              alt: "Particles ",
            }),
          });
      },
      8987: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => s });
        var r = i(5344),
          n = i(5643),
          o = i(6506),
          a = i(1425);
        let s = () =>
          r.jsx(a.i, {
            position: "bottom",
            className: "absolute z-40 inline-block w-full top-5 md:top-10",
            children: r.jsx("header", {
              children: (0, r.jsxs)("div", {
                className: "container justify-between max-w-6xl mx-auto md:flex",
                children: [
                  r.jsx(o.default, {
                    href: "/",
                    children: (0, r.jsxs)("h1", {
                      className: "my-3 text-4xl font-bold text-center md:text-left",
                      children: ["Kevin", r.jsx("span", { className: "text-secondary", children: " Lim" })],
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center justify-center gap-7",
                    children: n.Ao.map(({ logo: e, src: t, id: i }) =>
                      r.jsx(
                        o.default,
                        {
                          href: t,
                          target: "_blank",
                          className: "transition-all duration-300 hover:text-secondary",
                          children: e,
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
      },
      1815: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => l });
        var r = i(5344),
          n = i(6506),
          o = i(5643),
          a = i(1425),
          s = i(8428);
        let l = () => {
          let e = (0, s.usePathname)();
          return r.jsx(a.i, {
            position: "right",
            className: "fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10",
            children: r.jsx("nav", {
              children: r.jsx("div", {
                className:
                  "flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm",
                children: o.qZ.map((t) =>
                  r.jsx(
                    "div",
                    {
                      className: `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                        e === t.link && "bg-secondary"
                      }`,
                      "data-tooltip-target": "tooltip-default",
                      children: (0, r.jsxs)(n.default, { href: t.link, children: [t.icon, " "] }),
                    },
                    t.id
                  )
                ),
              }),
            }),
          });
        };
      },
      1425: (e, t, i) => {
        "use strict";
        i.d(t, { i: () => a });
        var r = i(5344),
          n = i(8110),
          o = i(2219);
        function a(e) {
          let { children: t, className: i, position: a } = e;
          return r.jsx(n.E.div, {
            variants: (0, o.Ji)(a),
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            className: i,
            children: t,
          });
        }
      },
      2160: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => s });
        var r = i(5344),
          n = i(2219),
          o = i(3644),
          a = i(8110);
        let s = () =>
          r.jsx(o.M, {
            mode: "wait",
            children: r.jsx("div", {
              children: r.jsx(a.E.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
                variants: n.ap,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
              }),
            }),
          });
      },
      5643: (e, t, i) => {
        "use strict";
        i.d(t, { Ao: () => x, Bz: () => w, fk: () => k, nT: () => v, qZ: () => y, zP: () => b });
        var r = i(5344),
          n = i(1206),
          o = i(2947),
          a = i(6885),
          s = i(2086),
          l = i(5480),
          d = i(7675),
          c = i(9483),
          u = i(8435),
          m = i(5281),
          h = i(8144),
          p = i(7958),
          g = i(4136),
          f = i(1723);
        let x = [
            { id: 1, logo: r.jsx(n.Z, { size: 30, strokeWidth: 1 }), src: "mailto:kevin@prohub.work" },
            { id: 2, logo: r.jsx(o.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/silversoft77" },
            { id: 3, logo: r.jsx(a.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
          ],
          y = [
            { id: 1, title: "Home", icon: r.jsx(s.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
            { id: 2, title: "User", icon: r.jsx(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/about-me" },
            { id: 3, title: "Book", icon: r.jsx(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/services" },
            {
              id: 4,
              title: "Target",
              icon: r.jsx(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/portfolio",
            },
            {
              id: 6,
              title: "Contact",
              icon: r.jsx(u.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/contact",
            },
          ],
          b = [
            {
              id: 1,
              title: "Full Stack Developer",
              subtitle: "RisingMax, New York City",
              description:
                "Worked closely with designers and other engineers to build Impactful And High-Visibility Wristband Website (https://www.wristbandbuddy.com/) using Figma, React Native, React JS, Node.js and MongoDB.",
              date: "Oct 2022",
            },
            {
              id: 2,
              title: "Full Stack Developer",
              subtitle: "Web Sharx, Toronto",
              description:
                " Designed and developed front-end for 20+ websites, using React, Next.js, and Handlebars.js.",
              date: "Sep 2021",
            },
            {
              id: 3,
              title: "Full Stack Developer",
              subtitle: "Focused Creative, St. John's",
              description:
                "Successfully migrated legacy applications to modern frameworks such as Laravel and Angular, resulting in improved performance and scalability.",
              date: "Feb 2020",
            },
            {
              id: 4,
              title: "Education",
              subtitle: "Nanyang Technological University",
              description: "Master's Degree in Computer Science, Nanyang Technological University",
              date: "May 2017",
            },
          ],
          v = [
            { id: 0, endCounter: 7, text: "YEARS OF EXPERIENCE", lineRight: !0, lineRightMobile: !0 },
            { id: 1, endCounter: 30, text: "SATISFIED CUSTOMERS", lineRight: !0, lineRightMobile: !1 },
            { id: 2, endCounter: 30, text: "COMPLETED PROJECTS", lineRight: !0, lineRightMobile: !0 },
            { id: 3, endCounter: 10, text: "WINNING AWARDS", lineRight: !1, lineRightMobile: !1 },
          ],
          w = [
            {
              icon: r.jsx(m.Z, {}),
              title: "Full-Stack Web",
              description:
                "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
            },
            {
              icon: r.jsx(h.Z, {}),
              title: "Mobile App",
              description:
                "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
            },
            {
              icon: r.jsx(p.Z, {}),
              title: "Blockchain",
              description:
                "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
            },
            {
              icon: r.jsx(g.Z, {}),
              title: "Solutions",
              description:
                "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
            },
            {
              icon: r.jsx(f.Z, {}),
              title: "SEO",
              description: "Optimizing your online presence through advanced SEO strategies.",
            },
          ],
          k = [
            {
              id: 1,
              name: "George Snow",
              description:
                "Incredible platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
              imageUrl: "/profile1.png",
            },
            {
              id: 2,
              name: "Juan Perez",
              description:
                "I love the variety of testimonials available on this page. It's inspiring to see how other people have overcome challenges similar to mine. Thank you for this ",
              imageUrl: "/profile2.png",
            },
            {
              id: 3,
              name: "Mar\xeda Garcia",
              description:
                "Excellent resource for authentic reviews on different products and services. It has helped me a lot in my online purchases. Bravo for this site!",
              imageUrl: "/profile3.png",
            },
            {
              id: 4,
              name: "Laura Snow",
              description:
                "What a fantastic find! The testimonials here are honest and detailed. I feel more confident making decisions after reading the experiences shared by other users.",
              imageUrl: "/profile4.png",
            },
            {
              id: 5,
              name: "Carlos Sanchez",
              description:
                "A gem on the web. The testimonials are easy to find and well organized. Definitely my number one destination when I need reliable references!",
              imageUrl: "/profile5.png",
            },
            {
              id: 6,
              name: "Antonio Martinez",
              description:
                "Fantastic resource for those seeking validation before making big decisions! The testimonials here are truthful and really helpful. Thanks for simplifying my decision-making process!",
              imageUrl: "/profile6.png",
            },
          ];
      },
      2219: (e, t, i) => {
        "use strict";
        i.d(t, { Ji: () => n, ap: () => r });
        let r = {
            initial: { x: "100%", width: "100%" },
            animate: { x: "0%", width: "0%" },
            exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
          },
          n = (e) => ({
            visible: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: { type: "tween", duration: 1.4, delay: 0.5, ease: [0.25, 0.25, 0.25, 0.75] },
            },
            hidden: {
              y: "bottom" === e ? -80 : 0,
              x: "right" === e ? 80 : 0,
              opacity: 0,
              transition: { type: "tween", duration: 0.5, delay: 0.5, ease: [0.25, 0.25, 0.25, 0.25] },
            },
          });
      },
      2147: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => x });
        var r = i(5036),
          n = i(2),
          o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          };
        /**
         * @license lucide-react v0.323.0 - ISC
         *
         * This source code is licensed under the ISC license.
         * See the LICENSE file in the root directory of this source tree.
         */ let a = (e) =>
            e
              .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
              .toLowerCase()
              .trim(),
          s = (e, t) => {
            let i = (0, n.forwardRef)(
              (
                {
                  color: i = "currentColor",
                  size: r = 24,
                  strokeWidth: s = 2,
                  absoluteStrokeWidth: l,
                  className: d = "",
                  children: c,
                  ...u
                },
                m
              ) =>
                (0, n.createElement)(
                  "svg",
                  {
                    ref: m,
                    ...o,
                    width: r,
                    height: r,
                    stroke: i,
                    strokeWidth: l ? (24 * Number(s)) / Number(r) : s,
                    className: ["lucide", `lucide-${a(e)}`, d].join(" "),
                    ...u,
                  },
                  [...t.map(([e, t]) => (0, n.createElement)(e, t)), ...(Array.isArray(c) ? c : [c])]
                )
            );
            return (i.displayName = `${e}`), i;
          };
        s("Mail", [
          ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
          ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
        ]),
          s("Github", [
            [
              "path",
              {
                d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
                key: "tonef",
              },
            ],
            ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
          ]),
          s("Download", [
            ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
            ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
            ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
          ]),
          s("Home", [
            ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
            ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
          ]),
          s("UserRound", [
            ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
            ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
          ]),
          s("BookText", [
            ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
            ["path", { d: "M8 7h6", key: "1f0q6e" }],
            ["path", { d: "M8 11h8", key: "vwpz6n" }],
          ]),
          s("CodeSquare", [
            ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
            ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
            ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }],
          ]),
          s("Contact", [
            ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
            ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
            ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
            ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
            ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }],
          ]),
          s("Computer", [
            ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
            ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
            ["path", { d: "M6 18h2", key: "rwmk9e" }],
            ["path", { d: "M12 18h6", key: "aqd8w3" }],
          ]),
          s("Apple", [
            [
              "path",
              {
                d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
                key: "3s7exb",
              },
            ],
            ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }],
          ]),
          s("Lock", [
            ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
            ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
          ]),
          s("Book", [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]]),
          s("Rocket", [
            [
              "path",
              {
                d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
                key: "m3kijz",
              },
            ],
            [
              "path",
              {
                d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
                key: "1fmvmk",
              },
            ],
            ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
            ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
          ]);
        let l = [
          { id: 1, title: "Web Pro", image: "/image-1.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 2, title: "Desarrollo Web Agil", image: "/image-2.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 3, title: "E-commerce Web", image: "/image-3.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 4, title: "React Native App", image: "/image-4.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 5, title: "Saloon Beauty App", image: "/image-5.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 6, title: "Rio DeFi Blockchain", image: "/image-6.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 7, title: "KickICO Blockchain", image: "/image-7.jpg", urlGithub: "#!", urlDemo: "#!" },
          { id: 8, title: "AIfProtocal Blockchain", image: "/image-8.jpg", urlGithub: "#!", urlDemo: "#!" },
        ];
        var d = i(1676),
          c = i(2760);
        let u = (e) => {
          let { children: t } = e;
          return r.jsx("div", { className: "w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6", children: t });
        };
        var m = i(7751),
          h = i.n(m),
          p = i(8026),
          g = i.n(p);
        let f = (e) => {
            let { data: t } = e,
              { id: i, title: n, image: o, urlDemo: a, urlGithub: s } = t;
            return (0, r.jsxs)(
              "div",
              {
                className: "p-4 border border-teal-50 rounded-xl",
                children: [
                  r.jsx("h3", { className: "mb-4 text-xl", children: n }),
                  r.jsx(h(), {
                    src: o,
                    alt: "Image",
                    width: 200,
                    height: 200,
                    className: "w-full md:w-[200px] rounded-2xl h-auto",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex gap-5 mt-5",
                    children: [
                      r.jsx(g(), {
                        href: s,
                        target: "_blank",
                        className: "p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80",
                        children: "Github",
                      }),
                      r.jsx(g(), {
                        href: a,
                        target: "_blank",
                        className: "p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80",
                        children: "Live demo",
                      }),
                    ],
                  }),
                ],
              },
              i
            );
          },
          x = () =>
            (0, r.jsxs)(u, {
              children: [
                r.jsx(c.ZP, {}),
                r.jsx(d.ZP, {}),
                (0, r.jsxs)("div", {
                  className: "flex flex-col justify-center h-full",
                  children: [
                    (0, r.jsxs)("h1", {
                      className: "text-2xl leading-tight text-center md:text-4xl md:mb-5",
                      children: [
                        "Mis \xfaltimos ",
                        r.jsx("span", { className: "font-bold text-secondary", children: "trabajos realizados" }),
                      ],
                    }),
                    r.jsx("div", {
                      className: "relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4",
                      children: l.map((e) => r.jsx(f, { data: e }, e.id)),
                    }),
                  ],
                }),
              ],
            });
      },
      7384: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => f, metadata: () => g });
        var r = i(5036),
          n = i(7322),
          o = i.n(n);
        i(7272), i(6279), i(3986), i(1081);
        var a = i(6843);
        let s = (0, a.createProxy)(String.raw`G:\portfolio\components\navbar.tsx`),
          { __esModule: l, $$typeof: d } = s,
          c = s.default,
          u = (0, a.createProxy)(String.raw`G:\portfolio\components\header.tsx`),
          { __esModule: m, $$typeof: h } = u,
          p = u.default,
          g = { title: "TarreDev Landing Page", description: "Landing page made by TarreDev" };
        function f({ children: e }) {
          return r.jsx("html", {
            lang: "en",
            children: (0, r.jsxs)("body", { className: o().className, children: [r.jsx(c, {}), r.jsx(p, {}), e] }),
          });
        }
      },
      1676: (e, t, i) => {
        "use strict";
        i.d(t, { ZP: () => a });
        let r = (0, i(6843).createProxy)(String.raw`G:\portfolio\components\circle-image.tsx`),
          { __esModule: n, $$typeof: o } = r,
          a = r.default;
      },
      2760: (e, t, i) => {
        "use strict";
        i.d(t, { ZP: () => a });
        let r = (0, i(6843).createProxy)(String.raw`G:\portfolio\components\transition-page.tsx`),
          { __esModule: n, $$typeof: o } = r,
          a = r.default;
      },
      6987: (e, t, i) => {
        "use strict";
        let { createProxy: r } = i(6843);
        e.exports = r("G:\\portfolio\\node_modules\\next\\dist\\client\\image-component.js");
      },
      8026: (e, t, i) => {
        "use strict";
        let { createProxy: r } = i(6843);
        e.exports = r("G:\\portfolio\\node_modules\\next\\dist\\client\\link.js");
      },
      4470: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function () {
              return s;
            },
          }),
          i(6031);
        let r = i(6184),
          n = i(4180);
        function o(e) {
          return void 0 !== e.default;
        }
        function a(e) {
          return void 0 === e
            ? e
            : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
        }
        function s(e, t) {
          var i;
          let s,
            l,
            d,
            {
              src: c,
              sizes: u,
              unoptimized: m = !1,
              priority: h = !1,
              loading: p,
              className: g,
              quality: f,
              width: x,
              height: y,
              fill: b = !1,
              style: v,
              onLoad: w,
              onLoadingComplete: k,
              placeholder: j = "empty",
              blurDataURL: P,
              fetchPriority: S,
              layout: M,
              objectFit: z,
              objectPosition: N,
              lazyBoundary: _,
              lazyRoot: C,
              ...E
            } = e,
            { imgConf: A, showAltText: G, blurComplete: R, defaultLoader: D } = t,
            I = A || n.imageConfigDefault;
          if ("allSizes" in I) s = I;
          else {
            let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
              t = I.deviceSizes.sort((e, t) => e - t);
            s = { ...I, allSizes: e, deviceSizes: t };
          }
          let O = E.loader || D;
          delete E.loader, delete E.srcSet;
          let W = "__next_img_default" in O;
          if (W) {
            if ("custom" === s.loader)
              throw Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let e = O;
            O = (t) => {
              let { config: i, ...r } = t;
              return e(r);
            };
          }
          if (M) {
            "fill" === M && (b = !0);
            let e = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[
              M
            ];
            e && (v = { ...v, ...e });
            let t = { responsive: "100vw", fill: "100vw" }[M];
            t && !u && (u = t);
          }
          let q = "",
            T = a(x),
            Z = a(y);
          if ("object" == typeof (i = c) && (o(i) || void 0 !== i.src)) {
            let e = o(c) ? c.default : c;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              );
            if (((l = e.blurWidth), (d = e.blurHeight), (P = P || e.blurDataURL), (q = e.src), !b)) {
              if (T || Z) {
                if (T && !Z) {
                  let t = T / e.width;
                  Z = Math.round(e.height * t);
                } else if (!T && Z) {
                  let t = Z / e.height;
                  T = Math.round(e.width * t);
                }
              } else (T = e.width), (Z = e.height);
            }
          }
          let B = !h && ("lazy" === p || void 0 === p);
          (!(c = "string" == typeof c ? c : q) || c.startsWith("data:") || c.startsWith("blob:")) &&
            ((m = !0), (B = !1)),
            s.unoptimized && (m = !0),
            W && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (m = !0),
            h && (S = "high");
          let L = a(f),
            F = Object.assign(
              b
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: z,
                    objectPosition: N,
                  }
                : {},
              G ? {} : { color: "transparent" },
              v
            ),
            H =
              R || "empty" === j
                ? null
                : "blur" === j
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, r.getImageBlurSvg)({
                    widthInt: T,
                    heightInt: Z,
                    blurWidth: l,
                    blurHeight: d,
                    blurDataURL: P || "",
                    objectFit: F.objectFit,
                  }) +
                  '")'
                : 'url("' + j + '")',
            U = H
              ? {
                  backgroundSize: F.objectFit || "cover",
                  backgroundPosition: F.objectPosition || "50% 50%",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: H,
                }
              : {},
            J = (function (e) {
              let { config: t, src: i, unoptimized: r, width: n, quality: o, sizes: a, loader: s } = e;
              if (r) return { src: i, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: d } = (function (e, t, i) {
                  let { deviceSizes: r, allSizes: n } = e;
                  if (i) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return { widths: n.filter((t) => t >= r[0] * e), kind: "w" };
                    }
                    return { widths: n, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: r, kind: "w" }
                    : {
                        widths: [...new Set([t, 2 * t].map((e) => n.find((t) => t >= e) || n[n.length - 1]))],
                        kind: "x",
                      };
                })(t, n, a),
                c = l.length - 1;
              return {
                sizes: a || "w" !== d ? a : "100vw",
                srcSet: l
                  .map((e, r) => s({ config: t, src: i, quality: o, width: e }) + " " + ("w" === d ? e : r + 1) + d)
                  .join(", "),
                src: s({ config: t, src: i, quality: o, width: l[c] }),
              };
            })({ config: s, src: c, unoptimized: m, width: T, quality: L, sizes: u, loader: O });
          return {
            props: {
              ...E,
              loading: B ? "lazy" : p,
              fetchPriority: S,
              width: T,
              height: Z,
              decoding: "async",
              className: g,
              style: { ...F, ...U },
              sizes: J.sizes,
              srcSet: J.srcSet,
              src: J.src,
            },
            meta: { unoptimized: m, priority: h, placeholder: j, fill: b },
          };
        }
      },
      6184: (e, t) => {
        "use strict";
        function i(e) {
          let { widthInt: t, heightInt: i, blurWidth: r, blurHeight: n, blurDataURL: o, objectFit: a } = e,
            s = r ? 40 * r : t,
            l = n ? 40 * n : i,
            d = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
          return (
            "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
            d +
            "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
            (d ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") +
            "' style='filter: url(%23b);' href='" +
            o +
            "'/%3E%3C/svg%3E"
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
      },
      4180: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
          })(t, {
            VALID_LOADERS: function () {
              return i;
            },
            imageConfigDefault: function () {
              return r;
            },
          });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
          r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1,
          };
      },
      7751: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
          })(t, {
            getImageProps: function () {
              return s;
            },
            default: function () {
              return l;
            },
          });
        let r = i(6783),
          n = i(4470),
          o = i(6987),
          a = r._(i(4534)),
          s = (e) => {
            let { props: t } = (0, n.getImgProps)(e, {
              defaultLoader: a.default,
              imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1,
              },
            });
            for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
            return { props: t };
          },
          l = o.Image;
      },
      4534: (e, t) => {
        "use strict";
        function i(e) {
          let { config: t, src: i, width: r, quality: n } = e;
          return t.path + "?url=" + encodeURIComponent(i) + "&w=" + r + "&q=" + (n || 75);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return r;
            },
          }),
          (i.__next_img_default = !0);
        let r = i;
      },
      6031: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "warnOnce", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let i = (e) => {};
      },
      7481: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => n });
        var r = i(337);
        let n = (e) => [
          { type: "image/x-icon", sizes: "16x16", url: (0, r.fillMetadataSegment)(".", e.params, "favicon.ico") + "" },
        ];
      },
      7272: () => {},
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    r = t.X(0, [1638, 8111, 7593], () => i(6212));
  module.exports = r;
})();
