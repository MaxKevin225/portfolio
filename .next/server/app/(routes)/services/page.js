(() => {
  var e = {};
  (e.id = 2043),
    (e.ids = [2043]),
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
      9473: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => m,
            originalPathname: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          });
        var s = i(482),
          n = i(9108),
          r = i(2563),
          a = i.n(r),
          o = i(8300),
          l = {};
        for (let e in o)
          0 >
            ["default", "tree", "pages", "GlobalError", "originalPathname", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => o[e]);
        i.d(t, l);
        let d = [
            "",
            {
              children: [
                "(routes)",
                {
                  children: [
                    "services",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(i.bind(i, 6465)),
                            "G:\\portfolio\\app\\(routes)\\services\\page.tsx",
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
          c = ["G:\\portfolio\\app\\(routes)\\services\\page.tsx"],
          p = "/(routes)/services/page",
          m = { require: i, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/(routes)/services/page",
              pathname: "/services",
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
      3259: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 2353)),
          Promise.resolve().then(i.bind(i, 3019)),
          Promise.resolve().then(i.bind(i, 2160));
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
        i.r(t), i.d(t, { default: () => r });
        var s = i(5344),
          n = i(9410);
        let r = () =>
          s.jsx("div", {
            className: "bottom-0 right-0 hidden md:inline-block md:absolute",
            children: s.jsx(n.default, {
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
        i.r(t), i.d(t, { default: () => o });
        var s = i(5344),
          n = i(5643),
          r = i(6506),
          a = i(1425);
        let o = () =>
          s.jsx(a.i, {
            position: "bottom",
            className: "absolute z-40 inline-block w-full top-5 md:top-10",
            children: s.jsx("header", {
              children: (0, s.jsxs)("div", {
                className: "container justify-between max-w-6xl mx-auto md:flex",
                children: [
                  s.jsx(r.default, {
                    href: "/",
                    children: (0, s.jsxs)("h1", {
                      className: "my-3 text-4xl font-bold text-center md:text-left",
                      children: ["Kevin", s.jsx("span", { className: "text-secondary", children: " Lim" })],
                    }),
                  }),
                  s.jsx("div", {
                    className: "flex items-center justify-center gap-7",
                    children: n.Ao.map(({ logo: e, src: t, id: i }) =>
                      s.jsx(
                        r.default,
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
        var s = i(5344),
          n = i(6506),
          r = i(5643),
          a = i(1425),
          o = i(8428);
        let l = () => {
          let e = (0, o.usePathname)();
          return s.jsx(a.i, {
            position: "right",
            className: "fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10",
            children: s.jsx("nav", {
              children: s.jsx("div", {
                className:
                  "flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm",
                children: r.qZ.map((t) =>
                  s.jsx(
                    "div",
                    {
                      className: `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                        e === t.link && "bg-secondary"
                      }`,
                      "data-tooltip-target": "tooltip-default",
                      children: (0, s.jsxs)(n.default, { href: t.link, children: [t.icon, " "] }),
                    },
                    t.id
                  )
                ),
              }),
            }),
          });
        };
      },
      3019: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => o });
        var s = i(5344),
          n = i(1067),
          r = i(3583),
          a = i(5643);
        let o = () =>
          s.jsx(n.tq, {
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 15 },
            },
            freeMode: !0,
            pagination: { clickable: !0 },
            modules: [r.tl],
            className: "h-[280px] md:h-[340px] w-[270px] md:w-[550px]",
            children: a.Bz.map((e, t) =>
              s.jsx(
                n.o5,
                {
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2",
                    children: [
                      s.jsx("div", { className: "mb-4 text-4xl text-secondary", children: e.icon }),
                      (0, s.jsxs)("div", {
                        children: [
                          s.jsx("h3", { className: "mb-4 text-lg", children: e.title }),
                          s.jsx("p", { className: "text-sm", children: e.description }),
                        ],
                      }),
                    ],
                  }),
                },
                t
              )
            ),
          });
      },
      1425: (e, t, i) => {
        "use strict";
        i.d(t, { i: () => a });
        var s = i(5344),
          n = i(8110),
          r = i(2219);
        function a(e) {
          let { children: t, className: i, position: a } = e;
          return s.jsx(n.E.div, {
            variants: (0, r.Ji)(a),
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
        i.r(t), i.d(t, { default: () => o });
        var s = i(5344),
          n = i(2219),
          r = i(3644),
          a = i(8110);
        let o = () =>
          s.jsx(r.M, {
            mode: "wait",
            children: s.jsx("div", {
              children: s.jsx(a.E.div, {
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
        i.d(t, { Ao: () => f, Bz: () => j, fk: () => w, nT: () => y, qZ: () => v, zP: () => b });
        var s = i(5344),
          n = i(1206),
          r = i(2947),
          a = i(6885),
          o = i(2086),
          l = i(5480),
          d = i(7675),
          c = i(9483),
          p = i(8435),
          m = i(5281),
          u = i(8144),
          x = i(7958),
          h = i(4136),
          g = i(1723);
        let f = [
            { id: 1, logo: s.jsx(n.Z, { size: 30, strokeWidth: 1 }), src: "mailto:kevin@prohub.work" },
            { id: 2, logo: s.jsx(r.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/silversoft77" },
            { id: 3, logo: s.jsx(a.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
          ],
          v = [
            { id: 1, title: "Home", icon: s.jsx(o.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
            { id: 2, title: "User", icon: s.jsx(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/about-me" },
            { id: 3, title: "Book", icon: s.jsx(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/services" },
            {
              id: 4,
              title: "Target",
              icon: s.jsx(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/portfolio",
            },
            {
              id: 6,
              title: "Contact",
              icon: s.jsx(p.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
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
          y = [
            { id: 0, endCounter: 7, text: "YEARS OF EXPERIENCE", lineRight: !0, lineRightMobile: !0 },
            { id: 1, endCounter: 30, text: "SATISFIED CUSTOMERS", lineRight: !0, lineRightMobile: !1 },
            { id: 2, endCounter: 30, text: "COMPLETED PROJECTS", lineRight: !0, lineRightMobile: !0 },
            { id: 3, endCounter: 10, text: "WINNING AWARDS", lineRight: !1, lineRightMobile: !1 },
          ],
          j = [
            {
              icon: s.jsx(m.Z, {}),
              title: "Full-Stack Web",
              description:
                "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
            },
            {
              icon: s.jsx(u.Z, {}),
              title: "Mobile App",
              description:
                "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
            },
            {
              icon: s.jsx(x.Z, {}),
              title: "Blockchain",
              description:
                "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
            },
            {
              icon: s.jsx(h.Z, {}),
              title: "Solutions",
              description:
                "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
            },
            {
              icon: s.jsx(g.Z, {}),
              title: "SEO",
              description: "Optimizing your online presence through advanced SEO strategies.",
            },
          ],
          w = [
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
        i.d(t, { Ji: () => n, ap: () => s });
        let s = {
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
      6465: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => c });
        var s = i(5036),
          n = i(1676);
        let r = (0, i(6843).createProxy)(String.raw`G:\portfolio\components\slider-services.tsx`),
          { __esModule: a, $$typeof: o } = r,
          l = r.default;
        var d = i(2760);
        let c = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              s.jsx(d.ZP, {}),
              s.jsx(n.ZP, {}),
              (0, s.jsxs)("div", {
                className: "grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2",
                children: [
                  (0, s.jsxs)("div", {
                    className: "max-w-[450px]",
                    children: [
                      (0, s.jsxs)("h1", {
                        className: "text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5",
                        children: [
                          "Mis ",
                          s.jsx("span", { className: "font-bold text-secondary", children: " servicios." }),
                        ],
                      }),
                      s.jsx("p", {
                        className: "mb-3 text-xl text-gray-300",
                        children:
                          "\uD83C\uDF10 Full-stack web development: Comprehensive development services encompassing front-end and back-end technologies, tailored to your project requirements.",
                      }),
                      s.jsx("p", {
                        className: "mb-3 text-xl text-gray-300",
                        children:
                          "\uD83D\uDCF1 Mobile app development: Cross-platform mobile app development utilizing React Native, delivering native-like performance and user experiences.",
                      }),
                      s.jsx("p", {
                        className: "mb-3 text-xl text-gray-300",
                        children:
                          "⛓️ Blockchain integration: Leveraging blockchain technology to enhance security and transparency in web and mobile applications, with expertise in Ethereum, Solidity, and Smart Contracts.",
                      }),
                      s.jsx("p", {
                        className: "mb-3 text-xl text-gray-300",
                        children:
                          "\uD83D\uDD0D Customized Solutions: From traditional web and mobile applications to blockchain integration, I provide tailored solutions to meet your unique needs and exceed expectations.",
                      }),
                      s.jsx("button", {
                        className: "px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65",
                        children: "Contacta conmigo",
                      }),
                    ],
                  }),
                  s.jsx("div", { children: s.jsx(l, {}) }),
                ],
              }),
            ],
          });
      },
      7384: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => g, metadata: () => h });
        var s = i(5036),
          n = i(7322),
          r = i.n(n);
        i(7272), i(6279), i(3986), i(1081);
        var a = i(6843);
        let o = (0, a.createProxy)(String.raw`G:\portfolio\components\navbar.tsx`),
          { __esModule: l, $$typeof: d } = o,
          c = o.default,
          p = (0, a.createProxy)(String.raw`G:\portfolio\components\header.tsx`),
          { __esModule: m, $$typeof: u } = p,
          x = p.default,
          h = { title: "TarreDev Landing Page", description: "Landing page made by TarreDev" };
        function g({ children: e }) {
          return s.jsx("html", {
            lang: "en",
            children: (0, s.jsxs)("body", { className: r().className, children: [s.jsx(c, {}), s.jsx(x, {}), e] }),
          });
        }
      },
      1676: (e, t, i) => {
        "use strict";
        i.d(t, { ZP: () => a });
        let s = (0, i(6843).createProxy)(String.raw`G:\portfolio\components\circle-image.tsx`),
          { __esModule: n, $$typeof: r } = s,
          a = s.default;
      },
      2760: (e, t, i) => {
        "use strict";
        i.d(t, { ZP: () => a });
        let s = (0, i(6843).createProxy)(String.raw`G:\portfolio\components\transition-page.tsx`),
          { __esModule: n, $$typeof: r } = s,
          a = s.default;
      },
      7481: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => n });
        var s = i(337);
        let n = (e) => [
          { type: "image/x-icon", sizes: "16x16", url: (0, s.fillMetadataSegment)(".", e.params, "favicon.ico") + "" },
        ];
      },
      7272: () => {},
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    s = t.X(0, [1638, 8111, 7593, 4113], () => i(9473));
  module.exports = s;
})();
