(() => {
  var e = {};
  (e.id = 1555),
    (e.ids = [1555]),
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
      5708: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => p,
            originalPathname: () => d,
            pages: () => c,
            routeModule: () => f,
            tree: () => u,
          });
        var i = n(482),
          r = n(9108),
          a = n(2563),
          s = n.n(a),
          o = n(8300),
          l = {};
        for (let e in o)
          0 >
            ["default", "tree", "pages", "GlobalError", "originalPathname", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => o[e]);
        n.d(t, l);
        let u = [
            "",
            {
              children: [
                "(routes)",
                {
                  children: [
                    "about-me",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(n.bind(n, 7871)),
                            "G:\\portfolio\\app\\(routes)\\about-me\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  "not-found": [
                    () => Promise.resolve().then(n.t.bind(n, 9361, 23)),
                    "next/dist/client/components/not-found-error",
                  ],
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(n.bind(n, 7481))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [() => Promise.resolve().then(n.bind(n, 7384)), "G:\\portfolio\\app\\layout.tsx"],
              "not-found": [
                () => Promise.resolve().then(n.t.bind(n, 9361, 23)),
                "next/dist/client/components/not-found-error",
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(n.bind(n, 7481))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = ["G:\\portfolio\\app\\(routes)\\about-me\\page.tsx"],
          d = "/(routes)/about-me/page",
          p = { require: n, loadChunk: () => Promise.resolve() },
          f = new i.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: "/(routes)/about-me/page",
              pathname: "/about-me",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      4041: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 9688));
      },
      8928: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 8987)), Promise.resolve().then(n.bind(n, 1815));
      },
      335: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 2583, 23)),
          Promise.resolve().then(n.t.bind(n, 6840, 23)),
          Promise.resolve().then(n.t.bind(n, 8771, 23)),
          Promise.resolve().then(n.t.bind(n, 3225, 23)),
          Promise.resolve().then(n.t.bind(n, 9295, 23)),
          Promise.resolve().then(n.t.bind(n, 3982, 23));
      },
      9688: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => f });
        var i = n(5344),
          r = n(9410),
          a = n(1425);
        function s() {
          return i.jsx(a.i, {
            position: "bottom",
            className: "bottom-0 right-0 hidden md:inline-block md:absolute ",
            children: i.jsx(r.default, {
              src: "/home-4.png",
              width: "400",
              height: "400",
              className: "w-full h-full ",
              alt: "Particles ",
              style: { opacity: "0.2" },
            }),
          });
        }
        let o = (e) => {
          let { children: t } = e;
          return i.jsx("div", { className: "w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6", children: t });
        };
        var l = n(5643),
          u = n(9070);
        let c = () =>
            i.jsx("div", {
              className:
                "grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6",
              children: l.nT.map(({ id: e, endCounter: t, text: n, lineRight: r, lineRightMobile: a }) =>
                i.jsx(
                  "div",
                  {
                    className: `${r && "ltr"}`,
                    children: (0, i.jsxs)("div", {
                      className: `${r && "px-4 border-2 border-transparent md:border-e-gray-100"} ${
                        a && "border-e-gray-100"
                      }`,
                      children: [
                        (0, i.jsxs)("p", {
                          className: "flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary",
                          children: ["+ ", i.jsx(u.ZP, { end: t, start: 0, duration: 5 })],
                        }),
                        i.jsx("p", { className: "text-xs uppercase max-w-[100px]", children: n }),
                      ],
                    }),
                  },
                  e
                )
              ),
            }),
          d = () =>
            i.jsx("div", {
              className: "flex flex-col justify-center divide-y divide-slate-200",
              children: i.jsx("div", {
                className: "w-full max-w-3xl mx-auto md:pb-40 md:pt-20",
                children: i.jsx("div", {
                  className: "-my-6",
                  children: l.zP.map((e) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: "relative py-6 pl-8 sm:pl-32 group",
                        children: [
                          i.jsx("h3", { className: "mb-1 text-2xl font-bold sm:mb-0", children: e.title }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row items-start mb-1  group-last:before:hidden before:absolute  before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]  before:self-start before:-translate-x-1/2  before:translate-y-3 after:absolute after:left-2  sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600  after:border-4 after:box-content after:border-slate-50  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2  after:translate-y-1.5",
                            children: [
                              i.jsx("time", {
                                className:
                                  "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full",
                                children: e.date,
                              }),
                              i.jsx("div", { className: "text-xl font-bold text-gray-400", children: e.subtitle }),
                            ],
                          }),
                          i.jsx("div", { className: "text-slate-400", children: e.description }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              }),
            });
        var p = n(2160);
        let f = () =>
          (0, i.jsxs)(i.Fragment, {
            children: [
              i.jsx(p.default, {}),
              (0, i.jsxs)(o, {
                children: [
                  i.jsx(s, {}),
                  (0, i.jsxs)("h1", {
                    className: "text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10",
                    children: [
                      "Toda mi",
                      " ",
                      i.jsx("span", { className: "font-bold text-secondary", children: "trayectoria profesional" }),
                    ],
                  }),
                  i.jsx(c, {}),
                  i.jsx(d, {}),
                ],
              }),
            ],
          });
      },
      8987: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var i = n(5344),
          r = n(5643),
          a = n(6506),
          s = n(1425);
        let o = () =>
          i.jsx(s.i, {
            position: "bottom",
            className: "absolute z-40 inline-block w-full top-5 md:top-10",
            children: i.jsx("header", {
              children: (0, i.jsxs)("div", {
                className: "container justify-between max-w-6xl mx-auto md:flex",
                children: [
                  i.jsx(a.default, {
                    href: "/",
                    children: (0, i.jsxs)("h1", {
                      className: "my-3 text-4xl font-bold text-center md:text-left",
                      children: ["Kevin", i.jsx("span", { className: "text-secondary", children: " Lim" })],
                    }),
                  }),
                  i.jsx("div", {
                    className: "flex items-center justify-center gap-7",
                    children: r.Ao.map(({ logo: e, src: t, id: n }) =>
                      i.jsx(
                        a.default,
                        {
                          href: t,
                          target: "_blank",
                          className: "transition-all duration-300 hover:text-secondary",
                          children: e,
                        },
                        n
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
      },
      1815: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => l });
        var i = n(5344),
          r = n(6506),
          a = n(5643),
          s = n(1425),
          o = n(8428);
        let l = () => {
          let e = (0, o.usePathname)();
          return i.jsx(s.i, {
            position: "right",
            className: "fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10",
            children: i.jsx("nav", {
              children: i.jsx("div", {
                className:
                  "flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm",
                children: a.qZ.map((t) =>
                  i.jsx(
                    "div",
                    {
                      className: `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                        e === t.link && "bg-secondary"
                      }`,
                      "data-tooltip-target": "tooltip-default",
                      children: (0, i.jsxs)(r.default, { href: t.link, children: [t.icon, " "] }),
                    },
                    t.id
                  )
                ),
              }),
            }),
          });
        };
      },
      1425: (e, t, n) => {
        "use strict";
        n.d(t, { i: () => s });
        var i = n(5344),
          r = n(8110),
          a = n(2219);
        function s(e) {
          let { children: t, className: n, position: s } = e;
          return i.jsx(r.E.div, {
            variants: (0, a.Ji)(s),
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            className: n,
            children: t,
          });
        }
      },
      2160: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var i = n(5344),
          r = n(2219),
          a = n(3644),
          s = n(8110);
        let o = () =>
          i.jsx(a.M, {
            mode: "wait",
            children: i.jsx("div", {
              children: i.jsx(s.E.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
                variants: r.ap,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
              }),
            }),
          });
      },
      5643: (e, t, n) => {
        "use strict";
        n.d(t, { Ao: () => x, Bz: () => j, fk: () => w, nT: () => v, qZ: () => b, zP: () => y });
        var i = n(5344),
          r = n(1206),
          a = n(2947),
          s = n(6885),
          o = n(2086),
          l = n(5480),
          u = n(7675),
          c = n(9483),
          d = n(8435),
          p = n(5281),
          f = n(8144),
          m = n(7958),
          h = n(4136),
          g = n(1723);
        let x = [
            { id: 1, logo: i.jsx(r.Z, { size: 30, strokeWidth: 1 }), src: "mailto:limk69966@gmail.com" },
            { id: 2, logo: i.jsx(a.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/MaxKevin225" },
            { id: 3, logo: i.jsx(s.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
          ],
          b = [
            { id: 1, title: "Home", icon: i.jsx(o.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
            { id: 2, title: "User", icon: i.jsx(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/about-me" },
            { id: 3, title: "Book", icon: i.jsx(u.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/services" },
            {
              id: 4,
              title: "Target",
              icon: i.jsx(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/portfolio",
            },
            {
              id: 6,
              title: "Contact",
              icon: i.jsx(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/contact",
            },
          ],
          y = [
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
          j = [
            {
              icon: i.jsx(p.Z, {}),
              title: "Full-Stack Web",
              description:
                "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
            },
            {
              icon: i.jsx(f.Z, {}),
              title: "Mobile App",
              description:
                "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
            },
            {
              icon: i.jsx(m.Z, {}),
              title: "Blockchain",
              description:
                "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
            },
            {
              icon: i.jsx(h.Z, {}),
              title: "Solutions",
              description:
                "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
            },
            {
              icon: i.jsx(g.Z, {}),
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
      5796: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { CountUp: () => r });
        var i = function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
          r = (function () {
            function e(e, t, n) {
              var r = this;
              (this.endVal = t),
                (this.options = n),
                (this.version = "2.8.0"),
                (this.defaults = {
                  startVal: 0,
                  decimalPlaces: 0,
                  duration: 2,
                  useEasing: !0,
                  useGrouping: !0,
                  useIndianSeparators: !1,
                  smartEasingThreshold: 999,
                  smartEasingAmount: 333,
                  separator: ",",
                  decimal: ".",
                  prefix: "",
                  suffix: "",
                  enableScrollSpy: !1,
                  scrollSpyDelay: 200,
                  scrollSpyOnce: !1,
                }),
                (this.finalEndVal = null),
                (this.useEasing = !0),
                (this.countDown = !1),
                (this.error = ""),
                (this.startVal = 0),
                (this.paused = !0),
                (this.once = !1),
                (this.count = function (e) {
                  r.startTime || (r.startTime = e);
                  var t = e - r.startTime;
                  (r.remaining = r.duration - t),
                    r.useEasing
                      ? r.countDown
                        ? (r.frameVal = r.startVal - r.easingFn(t, 0, r.startVal - r.endVal, r.duration))
                        : (r.frameVal = r.easingFn(t, r.startVal, r.endVal - r.startVal, r.duration))
                      : (r.frameVal = r.startVal + (r.endVal - r.startVal) * (t / r.duration));
                  var n = r.countDown ? r.frameVal < r.endVal : r.frameVal > r.endVal;
                  (r.frameVal = n ? r.endVal : r.frameVal),
                    (r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces))),
                    r.printValue(r.frameVal),
                    t < r.duration
                      ? (r.rAF = requestAnimationFrame(r.count))
                      : null !== r.finalEndVal
                      ? r.update(r.finalEndVal)
                      : r.options.onCompleteCallback && r.options.onCompleteCallback();
                }),
                (this.formatNumber = function (e) {
                  var t,
                    n,
                    i,
                    a = (Math.abs(e).toFixed(r.options.decimalPlaces) + "").split(".");
                  if (((t = a[0]), (n = a.length > 1 ? r.options.decimal + a[1] : ""), r.options.useGrouping)) {
                    i = "";
                    for (var s = 3, o = 0, l = 0, u = t.length; l < u; ++l)
                      r.options.useIndianSeparators && 4 === l && ((s = 2), (o = 1)),
                        0 !== l && o % s == 0 && (i = r.options.separator + i),
                        o++,
                        (i = t[u - l - 1] + i);
                    t = i;
                  }
                  return (
                    r.options.numerals &&
                      r.options.numerals.length &&
                      ((t = t.replace(/[0-9]/g, function (e) {
                        return r.options.numerals[+e];
                      })),
                      (n = n.replace(/[0-9]/g, function (e) {
                        return r.options.numerals[+e];
                      }))),
                    (e < 0 ? "-" : "") + r.options.prefix + t + n + r.options.suffix
                  );
                }),
                (this.easeOutExpo = function (e, t, n, i) {
                  return (n * (1 - Math.pow(2, (-10 * e) / i)) * 1024) / 1023 + t;
                }),
                (this.options = i(i({}, this.defaults), n)),
                (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                (this.endVal = this.validateValue(t)),
                (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                this.resetDuration(),
                (this.options.separator = String(this.options.separator)),
                (this.useEasing = this.options.useEasing),
                "" === this.options.separator && (this.options.useGrouping = !1),
                (this.el = "string" == typeof e ? document.getElementById(e) : e),
                this.el ? this.printValue(this.startVal) : (this.error = "[CountUp] target is null or undefined");
            }
            return (
              (e.prototype.handleScroll = function (e) {
                if (e && window && !e.once) {
                  var t = window.innerHeight + window.scrollY,
                    n = e.el.getBoundingClientRect(),
                    i = n.top + window.pageYOffset,
                    r = n.top + n.height + window.pageYOffset;
                  r < t && r > window.scrollY && e.paused
                    ? ((e.paused = !1),
                      setTimeout(function () {
                        return e.start();
                      }, e.options.scrollSpyDelay),
                      e.options.scrollSpyOnce && (e.once = !0))
                    : (window.scrollY > r || i > t) && !e.paused && e.reset();
                }
              }),
              (e.prototype.determineDirectionAndSmartEasing = function () {
                var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                if (
                  ((this.countDown = this.startVal > e),
                  Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing)
                ) {
                  this.finalEndVal = e;
                  var t = this.countDown ? 1 : -1;
                  (this.endVal = e + t * this.options.smartEasingAmount), (this.duration = this.duration / 2);
                } else (this.endVal = e), (this.finalEndVal = null);
                null !== this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
              }),
              (e.prototype.start = function (e) {
                this.error ||
                  (this.options.onStartCallback && this.options.onStartCallback(),
                  e && (this.options.onCompleteCallback = e),
                  this.duration > 0
                    ? (this.determineDirectionAndSmartEasing(),
                      (this.paused = !1),
                      (this.rAF = requestAnimationFrame(this.count)))
                    : this.printValue(this.endVal));
              }),
              (e.prototype.pauseResume = function () {
                this.paused
                  ? ((this.startTime = null),
                    (this.duration = this.remaining),
                    (this.startVal = this.frameVal),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : cancelAnimationFrame(this.rAF),
                  (this.paused = !this.paused);
              }),
              (e.prototype.reset = function () {
                cancelAnimationFrame(this.rAF),
                  (this.paused = !0),
                  this.resetDuration(),
                  (this.startVal = this.validateValue(this.options.startVal)),
                  (this.frameVal = this.startVal),
                  this.printValue(this.startVal);
              }),
              (e.prototype.update = function (e) {
                cancelAnimationFrame(this.rAF),
                  (this.startTime = null),
                  (this.endVal = this.validateValue(e)),
                  this.endVal !== this.frameVal &&
                    ((this.startVal = this.frameVal),
                    null == this.finalEndVal && this.resetDuration(),
                    (this.finalEndVal = null),
                    this.determineDirectionAndSmartEasing(),
                    (this.rAF = requestAnimationFrame(this.count)));
              }),
              (e.prototype.printValue = function (e) {
                var t;
                if (this.el) {
                  var n = this.formattingFn(e);
                  (null === (t = this.options.plugin) || void 0 === t ? void 0 : t.render)
                    ? this.options.plugin.render(this.el, n)
                    : "INPUT" === this.el.tagName
                    ? (this.el.value = n)
                    : "text" === this.el.tagName || "tspan" === this.el.tagName
                    ? (this.el.textContent = n)
                    : (this.el.innerHTML = n);
                }
              }),
              (e.prototype.ensureNumber = function (e) {
                return "number" == typeof e && !isNaN(e);
              }),
              (e.prototype.validateValue = function (e) {
                var t = Number(e);
                return this.ensureNumber(t)
                  ? t
                  : ((this.error = "[CountUp] invalid start or end value: ".concat(e)), null);
              }),
              (e.prototype.resetDuration = function () {
                (this.startTime = null),
                  (this.duration = 1e3 * Number(this.options.duration)),
                  (this.remaining = this.duration);
              }),
              e
            );
          })();
      },
      9070: (e, t, n) => {
        "use strict";
        var i = n(3729),
          r = n(5796);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  var i, r;
                  (i = t),
                    (r = n[t]),
                    (i = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var i = n.call(e, t || "default");
                          if ("object" != typeof i) return i;
                          throw TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(i)) in e
                      ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[i] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function o() {
          return (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }).apply(this, arguments);
        }
        function l(e, t) {
          if (null == e) return {};
          var n,
            i,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                i,
                r = {},
                a = Object.keys(e);
              for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
          }
          return r;
        }
        function u(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        var c = i.useEffect;
        function d(e) {
          var t = i.useRef(e);
          return (
            c(function () {
              t.current = e;
            }),
            i.useCallback(function () {
              for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
              return t.current.apply(void 0, n);
            }, [])
          );
        }
        var p = function (e, t) {
            var n = t.decimal,
              i = t.decimals,
              a = t.duration,
              s = t.easingFn,
              o = t.end,
              l = t.formattingFn,
              u = t.numerals,
              c = t.prefix,
              d = t.separator,
              p = t.start,
              f = t.suffix,
              m = t.useEasing,
              h = t.useGrouping,
              g = t.useIndianSeparators,
              x = t.enableScrollSpy,
              b = t.scrollSpyDelay,
              y = t.scrollSpyOnce,
              v = t.plugin;
            return new r.CountUp(e, o, {
              startVal: p,
              duration: a,
              decimal: n,
              decimalPlaces: i,
              easingFn: s,
              formattingFn: l,
              numerals: u,
              separator: d,
              prefix: c,
              suffix: f,
              plugin: v,
              useEasing: m,
              useIndianSeparators: g,
              useGrouping: h,
              enableScrollSpy: x,
              scrollSpyDelay: b,
              scrollSpyOnce: y,
            });
          },
          f = [
            "ref",
            "startOnMount",
            "enableReinitialize",
            "delay",
            "onEnd",
            "onStart",
            "onPauseResume",
            "onReset",
            "onUpdate",
          ],
          m = {
            decimal: ".",
            separator: ",",
            delay: null,
            prefix: "",
            suffix: "",
            duration: 2,
            start: 0,
            decimals: 0,
            startOnMount: !0,
            enableReinitialize: !0,
            useEasing: !0,
            useGrouping: !0,
            useIndianSeparators: !1,
          },
          h = function (e) {
            var t = Object.fromEntries(
                Object.entries(e).filter(function (e) {
                  return (
                    void 0 !==
                    ((function (e) {
                      if (Array.isArray(e)) return e;
                    })(e) ||
                      (function (e, t) {
                        var n =
                          null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != n) {
                          var i,
                            r,
                            a,
                            s,
                            o = [],
                            l = !0,
                            u = !1;
                          try {
                            if (((a = (n = n.call(e)).next), 0 === t)) {
                              if (Object(n) !== n) return;
                              l = !1;
                            } else for (; !(l = (i = a.call(n)).done) && (o.push(i.value), o.length !== t); l = !0);
                          } catch (e) {
                            (u = !0), (r = e);
                          } finally {
                            try {
                              if (!l && null != n.return && ((s = n.return()), Object(s) !== s)) return;
                            } finally {
                              if (u) throw r;
                            }
                          }
                          return o;
                        }
                      })(e, 2) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return u(e, t);
                          var n = Object.prototype.toString.call(e).slice(8, -1);
                          if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
                            return Array.from(e);
                          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        }
                      })(e, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })())[1]
                  );
                })
              ),
              n = i.useMemo(
                function () {
                  return s(s({}, m), t);
                },
                [e]
              ),
              r = n.ref,
              a = n.startOnMount,
              o = n.enableReinitialize,
              c = n.delay,
              h = n.onEnd,
              g = n.onStart,
              x = n.onPauseResume,
              b = n.onReset,
              y = n.onUpdate,
              v = l(n, f),
              j = i.useRef(),
              w = i.useRef(),
              E = i.useRef(!1),
              V = d(function () {
                return p("string" == typeof r ? r : r.current, v);
              }),
              S = d(function (e) {
                var t = j.current;
                if (t && !e) return t;
                var n = V();
                return (j.current = n), n;
              }),
              P = d(function () {
                var e = function () {
                  return S(!0).start(function () {
                    null == h || h({ pauseResume: N, reset: O, start: R, update: k });
                  });
                };
                c && c > 0 ? (w.current = setTimeout(e, 1e3 * c)) : e(),
                  null == g || g({ pauseResume: N, reset: O, update: k });
              }),
              N = d(function () {
                S().pauseResume(), null == x || x({ reset: O, start: R, update: k });
              }),
              O = d(function () {
                S().el &&
                  (w.current && clearTimeout(w.current),
                  S().reset(),
                  null == b || b({ pauseResume: N, start: R, update: k }));
              }),
              k = d(function (e) {
                S().update(e), null == y || y({ pauseResume: N, reset: O, start: R });
              }),
              R = d(function () {
                O(), P();
              }),
              F = d(function (e) {
                a && (e && O(), P());
              });
            return (
              i.useEffect(
                function () {
                  E.current ? o && F(!0) : ((E.current = !0), F());
                },
                [
                  o,
                  E,
                  F,
                  c,
                  e.start,
                  e.suffix,
                  e.prefix,
                  e.duration,
                  e.separator,
                  e.decimals,
                  e.decimal,
                  e.formattingFn,
                ]
              ),
              i.useEffect(
                function () {
                  return function () {
                    O();
                  };
                },
                [O]
              ),
              { start: R, pauseResume: N, reset: O, update: k, getCountUp: S }
            );
          },
          g = ["className", "redraw", "containerProps", "children", "style"];
        t.ZP = function (e) {
          var t = e.className,
            n = e.redraw,
            r = e.containerProps,
            a = e.children,
            u = e.style,
            c = l(e, g),
            p = i.useRef(null),
            f = i.useRef(!1),
            m = h(
              s(s({}, c), {}, { ref: p, startOnMount: "function" != typeof a || 0 === e.delay, enableReinitialize: !1 })
            ),
            x = m.start,
            b = m.reset,
            y = m.update,
            v = m.pauseResume,
            j = m.getCountUp,
            w = d(function () {
              x();
            }),
            E = d(function (t) {
              e.preserveValue || b(), y(t);
            }),
            V = d(function () {
              if ("function" == typeof e.children && !(p.current instanceof Element)) {
                console.error(
                  'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
                );
                return;
              }
              j();
            });
          i.useEffect(
            function () {
              V();
            },
            [V]
          ),
            i.useEffect(
              function () {
                f.current && E(e.end);
              },
              [e.end, E]
            );
          var S = n && e;
          return (i.useEffect(
            function () {
              n && f.current && w();
            },
            [w, n, S]
          ),
          i.useEffect(
            function () {
              !n && f.current && w();
            },
            [
              w,
              n,
              e.start,
              e.suffix,
              e.prefix,
              e.duration,
              e.separator,
              e.decimals,
              e.decimal,
              e.className,
              e.formattingFn,
            ]
          ),
          i.useEffect(function () {
            f.current = !0;
          }, []),
          "function" == typeof a)
            ? a({ countUpRef: p, start: x, reset: b, update: y, pauseResume: v, getCountUp: j })
            : i.createElement(
                "span",
                o({ className: t, ref: p, style: u }, r),
                void 0 !== e.start ? j().formattingFn(e.start) : ""
              );
        };
      },
      2219: (e, t, n) => {
        "use strict";
        n.d(t, { Ji: () => r, ap: () => i });
        let i = {
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
      7871: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { $$typeof: () => a, __esModule: () => r, default: () => s });
        let i = (0, n(6843).createProxy)(String.raw`G:\portfolio\app\(routes)\about-me\page.tsx`),
          { __esModule: r, $$typeof: a } = i,
          s = i.default;
      },
      7384: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => g, metadata: () => h });
        var i = n(5036),
          r = n(7322),
          a = n.n(r);
        n(7272), n(6279), n(3986), n(1081);
        var s = n(6843);
        let o = (0, s.createProxy)(String.raw`G:\portfolio\components\navbar.tsx`),
          { __esModule: l, $$typeof: u } = o,
          c = o.default,
          d = (0, s.createProxy)(String.raw`G:\portfolio\components\header.tsx`),
          { __esModule: p, $$typeof: f } = d,
          m = d.default,
          h = { title: "TarreDev Landing Page", description: "Landing page made by TarreDev" };
        function g({ children: e }) {
          return i.jsx("html", {
            lang: "en",
            children: (0, i.jsxs)("body", { className: a().className, children: [i.jsx(c, {}), i.jsx(m, {}), e] }),
          });
        }
      },
      7481: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => r });
        var i = n(337);
        let r = (e) => [
          { type: "image/x-icon", sizes: "16x16", url: (0, i.fillMetadataSegment)(".", e.params, "favicon.ico") + "" },
        ];
      },
      7272: () => {},
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    i = t.X(0, [1638, 8111, 7593], () => n(5708));
  module.exports = i;
})();
