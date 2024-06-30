(() => {
  var e = {};
  (e.id = 9165),
    (e.ids = [9165]),
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
      1378: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          });
        var n = i(482),
          r = i(9108),
          s = i(2563),
          o = i.n(s),
          a = i(8300),
          l = {};
        for (let e in a)
          0 >
            ["default", "tree", "pages", "GlobalError", "originalPathname", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => a[e]);
        i.d(t, l);
        let d = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(i.t.bind(i, 9361, 23)),
                    "next/dist/client/components/not-found-error",
                  ],
                },
              ],
            },
            {
              layout: [() => Promise.resolve().then(i.bind(i, 7384)), "G:\\portfolio\\app\\layout.tsx"],
              "not-found": [
                () => Promise.resolve().then(i.t.bind(i, 9361, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [],
          u = "/_not-found",
          p = { require: i, loadChunk: () => Promise.resolve() },
          m = new n.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: "/_not-found",
              pathname: "/_not-found",
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
      335: (e, t, i) => {
        Promise.resolve().then(i.t.bind(i, 2583, 23)),
          Promise.resolve().then(i.t.bind(i, 6840, 23)),
          Promise.resolve().then(i.t.bind(i, 8771, 23)),
          Promise.resolve().then(i.t.bind(i, 3225, 23)),
          Promise.resolve().then(i.t.bind(i, 9295, 23)),
          Promise.resolve().then(i.t.bind(i, 3982, 23));
      },
      8987: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => a });
        var n = i(5344),
          r = i(5643),
          s = i(6506),
          o = i(1425);
        let a = () =>
          n.jsx(o.i, {
            position: "bottom",
            className: "absolute z-40 inline-block w-full top-5 md:top-10",
            children: n.jsx("header", {
              children: (0, n.jsxs)("div", {
                className: "container justify-between max-w-6xl mx-auto md:flex",
                children: [
                  n.jsx(s.default, {
                    href: "/",
                    children: (0, n.jsxs)("h1", {
                      className: "my-3 text-4xl font-bold text-center md:text-left",
                      children: ["Kevin", n.jsx("span", { className: "text-secondary", children: " Lim" })],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center gap-7",
                    children: r.Ao.map(({ logo: e, src: t, id: i }) =>
                      n.jsx(
                        s.default,
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
        var n = i(5344),
          r = i(6506),
          s = i(5643),
          o = i(1425),
          a = i(8428);
        let l = () => {
          let e = (0, a.usePathname)();
          return n.jsx(o.i, {
            position: "right",
            className: "fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10",
            children: n.jsx("nav", {
              children: n.jsx("div", {
                className:
                  "flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm",
                children: s.qZ.map((t) =>
                  n.jsx(
                    "div",
                    {
                      className: `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                        e === t.link && "bg-secondary"
                      }`,
                      "data-tooltip-target": "tooltip-default",
                      children: (0, n.jsxs)(r.default, { href: t.link, children: [t.icon, " "] }),
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
        i.d(t, { i: () => o });
        var n = i(5344),
          r = i(8110),
          s = i(2219);
        function o(e) {
          let { children: t, className: i, position: o } = e;
          return n.jsx(r.E.div, {
            variants: (0, s.Ji)(o),
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            className: i,
            children: t,
          });
        }
      },
      5643: (e, t, i) => {
        "use strict";
        i.d(t, { Ao: () => x, Bz: () => j, fk: () => k, nT: () => y, qZ: () => b, zP: () => v });
        var n = i(5344),
          r = i(1206),
          s = i(2947),
          o = i(6885),
          a = i(2086),
          l = i(5480),
          d = i(7675),
          c = i(9483),
          u = i(8435),
          p = i(5281),
          m = i(8144),
          h = i(7958),
          g = i(4136),
          f = i(1723);
        let x = [
            { id: 1, logo: n.jsx(r.Z, { size: 30, strokeWidth: 1 }), src: "mailto:limk69966@gmail.com" },
            { id: 2, logo: n.jsx(s.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/maxKevin" },
            { id: 3, logo: n.jsx(o.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
          ],
          b = [
            { id: 1, title: "Home", icon: n.jsx(a.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
            { id: 2, title: "User", icon: n.jsx(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/about-me" },
            { id: 3, title: "Book", icon: n.jsx(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/services" },
            {
              id: 4,
              title: "Target",
              icon: n.jsx(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/portfolio",
            },
            {
              id: 6,
              title: "Contact",
              icon: n.jsx(u.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/contact",
            },
          ],
          v = [
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
              icon: n.jsx(p.Z, {}),
              title: "Full-Stack Web",
              description:
                "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
            },
            {
              icon: n.jsx(m.Z, {}),
              title: "Mobile App",
              description:
                "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
            },
            {
              icon: n.jsx(h.Z, {}),
              title: "Blockchain",
              description:
                "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
            },
            {
              icon: n.jsx(g.Z, {}),
              title: "Solutions",
              description:
                "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
            },
            {
              icon: n.jsx(f.Z, {}),
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
        i.d(t, { Ji: () => r, ap: () => n });
        let n = {
            initial: { x: "100%", width: "100%" },
            animate: { x: "0%", width: "0%" },
            exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
          },
          r = (e) => ({
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
      7384: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => f, metadata: () => g });
        var n = i(5036),
          r = i(7322),
          s = i.n(r);
        i(7272), i(6279), i(3986), i(1081);
        var o = i(6843);
        let a = (0, o.createProxy)(String.raw`G:\portfolio\components\navbar.tsx`),
          { __esModule: l, $$typeof: d } = a,
          c = a.default,
          u = (0, o.createProxy)(String.raw`G:\portfolio\components\header.tsx`),
          { __esModule: p, $$typeof: m } = u,
          h = u.default,
          g = { title: "TarreDev Landing Page", description: "Landing page made by TarreDev" };
        function f({ children: e }) {
          return n.jsx("html", {
            lang: "en",
            children: (0, n.jsxs)("body", { className: s().className, children: [n.jsx(c, {}), n.jsx(h, {}), e] }),
          });
        }
      },
      7272: () => {},
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    n = t.X(0, [1638, 8111], () => i(1378));
  module.exports = n;
})();
