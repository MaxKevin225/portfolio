(() => {
  var e = {};
  (e.id = 1931),
    (e.ids = [1931]),
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
      1647: (e, t, i) => {
        "use strict";
        i.r(t),
          i.d(t, {
            GlobalError: () => r.a,
            __next_app__: () => u,
            originalPathname: () => h,
            pages: () => d,
            routeModule: () => f,
            tree: () => c,
          });
        var s = i(482),
          a = i(9108),
          n = i(2563),
          r = i.n(n),
          o = i(8300),
          l = {};
        for (let e in o)
          0 >
            ["default", "tree", "pages", "GlobalError", "originalPathname", "__next_app__", "routeModule"].indexOf(e) &&
            (l[e] = () => o[e]);
        i.d(t, l);
        let c = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [() => Promise.resolve().then(i.bind(i, 751)), "G:\\portfolio\\app\\page.tsx"],
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
          d = ["G:\\portfolio\\app\\page.tsx"],
          h = "/page",
          u = { require: i, loadChunk: () => Promise.resolve() },
          f = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      8928: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 8987)), Promise.resolve().then(i.bind(i, 1815));
      },
      2567: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 6521));
      },
      335: (e, t, i) => {
        Promise.resolve().then(i.t.bind(i, 2583, 23)),
          Promise.resolve().then(i.t.bind(i, 6840, 23)),
          Promise.resolve().then(i.t.bind(i, 8771, 23)),
          Promise.resolve().then(i.t.bind(i, 3225, 23)),
          Promise.resolve().then(i.t.bind(i, 9295, 23)),
          Promise.resolve().then(i.t.bind(i, 3982, 23));
      },
      6521: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => z });
        var s = i(5344),
          a = i(3729),
          n = i.n(a);
        async function r(e, t = !0) {
          let { loadParallaxMover: s } = await i.e(7772).then(i.bind(i, 7191)),
            { loadExternalAttractInteraction: a } = await i.e(7226).then(i.bind(i, 7226)),
            { loadExternalBounceInteraction: n } = await i.e(5044).then(i.bind(i, 5044)),
            { loadExternalBubbleInteraction: r } = await i.e(7798).then(i.bind(i, 7798)),
            { loadExternalConnectInteraction: o } = await i.e(6395).then(i.bind(i, 6395)),
            { loadExternalGrabInteraction: l } = await i.e(1573).then(i.bind(i, 1573)),
            { loadExternalPauseInteraction: c } = await i.e(8689).then(i.bind(i, 8689)),
            { loadExternalPushInteraction: d } = await i.e(3961).then(i.bind(i, 3961)),
            { loadExternalRemoveInteraction: h } = await i.e(5692).then(i.bind(i, 5692)),
            { loadExternalRepulseInteraction: u } = await i.e(2160).then(i.bind(i, 30)),
            { loadExternalSlowInteraction: f } = await i.e(4683).then(i.bind(i, 4683)),
            { loadParticlesAttractInteraction: p } = await i.e(7577).then(i.bind(i, 7577)),
            { loadParticlesCollisionsInteraction: v } = await i.e(8657).then(i.bind(i, 8657)),
            { loadParticlesLinksInteraction: m } = await i.e(4717).then(i.bind(i, 4717)),
            { loadEasingQuadPlugin: y } = await i.e(3374).then(i.bind(i, 3374)),
            { loadEmojiShape: g } = await i.e(1438).then(i.bind(i, 1438)),
            { loadImageShape: b } = await i.e(3237).then(i.bind(i, 3237)),
            { loadLineShape: x } = await i.e(8825).then(i.bind(i, 8825)),
            { loadPolygonShape: w } = await i.e(4995).then(i.bind(i, 4995)),
            { loadSquareShape: k } = await i.e(4882).then(i.bind(i, 4882)),
            { loadStarShape: z } = await i.e(5841).then(i.bind(i, 5841)),
            { loadLifeUpdater: M } = await i.e(9213).then(i.bind(i, 9213)),
            { loadRotateUpdater: S } = await i.e(1878).then(i.bind(i, 1878)),
            { loadStrokeColorUpdater: P } = await i.e(8527).then(i.bind(i, 8527)),
            { loadBasic: j } = await i.e(4516).then(i.bind(i, 4516));
          await s(e, !1),
            await a(e, !1),
            await n(e, !1),
            await r(e, !1),
            await o(e, !1),
            await l(e, !1),
            await c(e, !1),
            await d(e, !1),
            await h(e, !1),
            await u(e, !1),
            await f(e, !1),
            await p(e, !1),
            await v(e, !1),
            await m(e, !1),
            await y(),
            await g(e, !1),
            await b(e, !1),
            await x(e, !1),
            await w(e, !1),
            await k(e, !1),
            await z(e, !1),
            await M(e, !1),
            await S(e, !1),
            await P(e, !1),
            await j(e, t);
        }
        var o = i(1146);
        let l = (e) => {
          let t = e.id ?? "tsparticles";
          return (
            (0, a.useEffect)(() => {
              let i;
              return (
                o.S6.load({ id: t, url: e.url, options: e.options }).then((t) => {
                  var s;
                  (i = t), null == (s = e.particlesLoaded) || s.call(e, t);
                }),
                () => {
                  null == i || i.destroy();
                }
              );
            }, [t, e, e.url, e.options]),
            (0, s.jsx)("div", { id: t, className: e.className })
          );
        };
        async function c(e) {
          await e(o.S6);
        }
        let d = () => {
          let [e, t] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              c(async (e) => {
                await r(e);
              }).then(() => {
                t(!0);
              });
            }, []),
            e &&
              s.jsx("div", {
                className: "w-[0px]",
                children: s.jsx(l, {
                  id: "tsparticles",
                  options: {
                    fpsLimit: 120,
                    interactivity: {
                      events: { onClick: { enable: !0, mode: "push" }, onHover: { enable: !0, mode: "repulse" } },
                      modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
                    },
                    particles: {
                      color: { value: "#ffffff" },
                      links: { color: "#ffffff", distance: 150, enable: !0, opacity: 0.5, width: 1 },
                      move: {
                        direction: "none",
                        enable: !0,
                        outModes: { default: "bounce" },
                        random: !1,
                        speed: 1,
                        straight: !1,
                      },
                      number: { density: { enable: !0 }, value: 80 },
                      opacity: { value: 0.5 },
                      shape: { type: "circle" },
                      size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: !0,
                  },
                }),
              })
          );
        };
        var h = i(9410),
          u = i(6506);
        function f(e, t, i, s) {
          return new (i || (i = Promise))(function (a, n) {
            function r(e) {
              try {
                l(s.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                l(s.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value) instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })
                  ).then(r, o);
            }
            l((s = s.apply(e, t || [])).next());
          });
        }
        function p(e, t) {
          var i,
            s,
            a,
            n,
            r = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (n = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (n[Symbol.iterator] = function () {
                return this;
              }),
            n
          );
          function o(n) {
            return function (o) {
              return (function (n) {
                if (i) throw TypeError("Generator is already executing.");
                for (; r; )
                  try {
                    if (
                      ((i = 1),
                      s &&
                        (a = 2 & n[0] ? s.return : n[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) &&
                        !(a = a.call(s, n[1])).done)
                    )
                      return a;
                    switch (((s = 0), a && (n = [2 & n[0], a.value]), n[0])) {
                      case 0:
                      case 1:
                        a = n;
                        break;
                      case 4:
                        return r.label++, { value: n[1], done: !1 };
                      case 5:
                        r.label++, (s = n[1]), (n = [0]);
                        continue;
                      case 7:
                        (n = r.ops.pop()), r.trys.pop();
                        continue;
                      default:
                        if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                          r = 0;
                          continue;
                        }
                        if (3 === n[0] && (!a || (n[1] > a[0] && n[1] < a[3]))) {
                          r.label = n[1];
                          break;
                        }
                        if (6 === n[0] && r.label < a[1]) {
                          (r.label = a[1]), (a = n);
                          break;
                        }
                        if (a && r.label < a[2]) {
                          (r.label = a[2]), r.ops.push(n);
                          break;
                        }
                        a[2] && r.ops.pop(), r.trys.pop();
                        continue;
                    }
                    n = t.call(e, r);
                  } catch (e) {
                    (n = [6, e]), (s = 0);
                  } finally {
                    i = a = 0;
                  }
                if (5 & n[0]) throw n[1];
                return { value: n[0] ? n[1] : void 0, done: !0 };
              })([n, o]);
            };
          }
        }
        function v(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            s = 0;
          if (i) return i.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
              },
            };
          throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function m(e, t) {
          var i = "function" == typeof Symbol && e[Symbol.iterator];
          if (!i) return e;
          var s,
            a,
            n = i.call(e),
            r = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(s = n.next()).done; ) r.push(s.value);
          } catch (e) {
            a = { error: e };
          } finally {
            try {
              s && !s.done && (i = n.return) && i.call(n);
            } finally {
              if (a) throw a.error;
            }
          }
          return r;
        }
        function y(e, t, i) {
          if (i || 2 == arguments.length)
            for (var s, a = 0, n = t.length; a < n; a++)
              (!s && a in t) || (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]));
          return e.concat(s || Array.prototype.slice.call(t));
        }
        function g(e, t, i, s, a) {
          for (var n = [], r = 5; r < arguments.length; r++) n[r - 5] = arguments[r];
          return f(this, void 0, void 0, function () {
            var r, o, l, c, d;
            return p(this, function (h) {
              switch (h.label) {
                case 0:
                  h.trys.push([0, 12, 13, 14]), (o = (r = v(n)).next()), (h.label = 1);
                case 1:
                  if (o.done) return [3, 11];
                  switch (typeof (l = o.value)) {
                    case "string":
                      return [3, 2];
                    case "number":
                      return [3, 4];
                    case "function":
                      return [3, 6];
                  }
                  return [3, 8];
                case 2:
                  return [
                    4,
                    (function (e, t, i, s, a, n) {
                      return f(this, void 0, void 0, function () {
                        var r, o;
                        return p(this, function (l) {
                          switch (l.label) {
                            case 0:
                              var c, d;
                              return (
                                (c = r = e.textContent || ""),
                                (d = m(i).slice(0)),
                                (o = y(y([], m(c), !1), [NaN], !1).findIndex(function (e, t) {
                                  return d[t] !== e;
                                })),
                                [
                                  4,
                                  (function (e, t, i, s, a) {
                                    return f(this, void 0, void 0, function () {
                                      var n, r, o, l, c, d, h, u, f, y, g, x;
                                      return p(this, function (w) {
                                        switch (w.label) {
                                          case 0:
                                            if (((n = t), a)) {
                                              for (r = 0, o = 1; o < t.length; o++)
                                                if (
                                                  ((c = (l = m([t[o - 1], t[o]], 2))[0]),
                                                  (d = l[1]).length > c.length || "" === d)
                                                ) {
                                                  r = o;
                                                  break;
                                                }
                                              n = t.slice(r, t.length);
                                            }
                                            w.label = 1;
                                          case 1:
                                            w.trys.push([1, 6, 7, 8]),
                                              (u = (h = v(
                                                (function (e) {
                                                  var t, i, s, a, n, r;
                                                  return p(this, function (o) {
                                                    switch (o.label) {
                                                      case 0:
                                                        (t = function (e) {
                                                          return p(this, function (t) {
                                                            switch (t.label) {
                                                              case 0:
                                                                return [
                                                                  4,
                                                                  {
                                                                    op: function (t) {
                                                                      return requestAnimationFrame(function () {
                                                                        return (t.textContent = e);
                                                                      });
                                                                    },
                                                                    opCode: function (t) {
                                                                      var i = t.textContent || "";
                                                                      return "" === e || i.length > e.length
                                                                        ? "DELETE"
                                                                        : "WRITING";
                                                                    },
                                                                  },
                                                                ];
                                                              case 1:
                                                                return t.sent(), [2];
                                                            }
                                                          });
                                                        }),
                                                          (o.label = 1);
                                                      case 1:
                                                        o.trys.push([1, 6, 7, 8]),
                                                          (s = (i = v(e)).next()),
                                                          (o.label = 2);
                                                      case 2:
                                                        return s.done ? [3, 5] : ((a = s.value), [5, t(a)]);
                                                      case 3:
                                                        o.sent(), (o.label = 4);
                                                      case 4:
                                                        return (s = i.next()), [3, 2];
                                                      case 5:
                                                        return [3, 8];
                                                      case 6:
                                                        return (n = { error: o.sent() }), [3, 8];
                                                      case 7:
                                                        try {
                                                          s && !s.done && (r = i.return) && r.call(i);
                                                        } finally {
                                                          if (n) throw n.error;
                                                        }
                                                        return [7];
                                                      case 8:
                                                        return [2];
                                                    }
                                                  });
                                                })(n)
                                              )).next()),
                                              (w.label = 2);
                                          case 2:
                                            return u.done
                                              ? [3, 5]
                                              : ((y =
                                                  "WRITING" === (f = u.value).opCode(e)
                                                    ? i + i * (Math.random() - 0.5)
                                                    : s + s * (Math.random() - 0.5)),
                                                f.op(e),
                                                [4, b(y)]);
                                          case 3:
                                            w.sent(), (w.label = 4);
                                          case 4:
                                            return (u = h.next()), [3, 2];
                                          case 5:
                                            return [3, 8];
                                          case 6:
                                            return (g = { error: w.sent() }), [3, 8];
                                          case 7:
                                            try {
                                              u && !u.done && (x = h.return) && x.call(h);
                                            } finally {
                                              if (g) throw g.error;
                                            }
                                            return [7];
                                          case 8:
                                            return [2];
                                        }
                                      });
                                    });
                                  })(
                                    e,
                                    y(
                                      y(
                                        [],
                                        m(
                                          (function (e, t, i) {
                                            var s, a;
                                            return (
                                              void 0 === i && (i = 0),
                                              p(this, function (n) {
                                                switch (n.label) {
                                                  case 0:
                                                    (a = (s = t(e)).length), (n.label = 1);
                                                  case 1:
                                                    return a > i ? [4, s.slice(0, --a).join("")] : [3, 3];
                                                  case 2:
                                                    return n.sent(), [3, 1];
                                                  case 3:
                                                    return [2];
                                                }
                                              })
                                            );
                                          })(r, t, o)
                                        ),
                                        !1
                                      ),
                                      m(
                                        (function (e, t, i) {
                                          var s, a;
                                          return (
                                            void 0 === i && (i = 0),
                                            p(this, function (n) {
                                              switch (n.label) {
                                                case 0:
                                                  (a = (s = t(e)).length), (n.label = 1);
                                                case 1:
                                                  return i < a ? [4, s.slice(0, ++i).join("")] : [3, 3];
                                                case 2:
                                                  return n.sent(), [3, 1];
                                                case 3:
                                                  return [2];
                                              }
                                            })
                                          );
                                        })(i, t, o)
                                      ),
                                      !1
                                    ),
                                    s,
                                    a,
                                    n
                                  ),
                                ]
                              );
                            case 1:
                              return l.sent(), [2];
                          }
                        });
                      });
                    })(e, t, l, i, s, a),
                  ];
                case 3:
                case 5:
                case 7:
                  return h.sent(), [3, 10];
                case 4:
                  return [4, b(l)];
                case 6:
                  return [4, l.apply(void 0, y([e, t, i, s, a], m(n), !1))];
                case 8:
                  return [4, l];
                case 9:
                  h.sent(), (h.label = 10);
                case 10:
                  return (o = r.next()), [3, 1];
                case 11:
                  return [3, 14];
                case 12:
                  return (c = { error: h.sent() }), [3, 14];
                case 13:
                  try {
                    o && !o.done && (d = r.return) && d.call(r);
                  } finally {
                    if (c) throw c.error;
                  }
                  return [7];
                case 14:
                  return [2];
              }
            });
          });
        }
        function b(e) {
          return f(this, void 0, void 0, function () {
            return p(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (t) {
                      return setTimeout(t, e);
                    }),
                  ];
                case 1:
                  return t.sent(), [2];
              }
            });
          });
        }
        !(function (e, t) {
          void 0 === t && (t = {});
          var i = t.insertAt;
          if (e && "undefined" != typeof document) {
            var s = document.head || document.getElementsByTagName("head")[0],
              a = document.createElement("style");
            (a.type = "text/css"),
              "top" === i && s.firstChild ? s.insertBefore(a, s.firstChild) : s.appendChild(a),
              a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(document.createTextNode(e));
          }
        })(
          ".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n"
        );
        var x = (0, a.memo)(
          (0, a.forwardRef)(function (e, t) {
            var i = e.sequence,
              s = e.repeat,
              r = e.className,
              o = e.speed,
              l = void 0 === o ? 40 : o,
              c = e.deletionSpeed,
              d = e.omitDeletionAnimation,
              h = void 0 !== d && d,
              u = e.preRenderFirstString,
              f = e.wrapper,
              p = e.splitter,
              v =
                void 0 === p
                  ? function (e) {
                      return y([], m(e), !1);
                    }
                  : p,
              b = e.cursor,
              x = void 0 === b || b,
              w = e.style,
              k = (function (e, t) {
                var i = {};
                for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (i[s] = e[s]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                  var a = 0;
                  for (s = Object.getOwnPropertySymbols(e); a < s.length; a++)
                    0 > t.indexOf(s[a]) && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (i[s[a]] = e[s[a]]);
                }
                return i;
              })(e, [
                "sequence",
                "repeat",
                "className",
                "speed",
                "deletionSpeed",
                "omitDeletionAnimation",
                "preRenderFirstString",
                "wrapper",
                "splitter",
                "cursor",
                "style",
              ]),
              z = k["aria-label"],
              M = k["aria-hidden"],
              S = k.role;
            c || (c = l);
            var P = [, ,].fill(40);
            [l, c].forEach(function (e, t) {
              switch (typeof e) {
                case "number":
                  P[t] = Math.abs(e - 100);
                  break;
                case "object":
                  var i = e.type,
                    s = e.value;
                  if ("number" != typeof s) break;
                  "keyStrokeDelayInMs" === i && (P[t] = s);
              }
            });
            var j,
              C,
              _,
              O,
              D,
              R,
              E,
              I,
              A = P[0],
              T = P[1],
              N =
                (void 0 === j && (j = null),
                (C = (0, a.useRef)(j)),
                (0, a.useEffect)(
                  function () {
                    t && ("function" == typeof t ? t(C.current) : (t.current = C.current));
                  },
                  [t]
                ),
                C),
              Z = "index-module_type__E-SaG";
            (_ = r ? "".concat(x ? Z + " " : "").concat(r) : x ? Z : ""),
              (O = (0, a.useRef)(function () {
                var e,
                  t = i;
                s === 1 / 0
                  ? (e = g)
                  : "number" == typeof s &&
                    (t = Array(1 + s)
                      .fill(i)
                      .flat());
                var a = e ? y(y([], m(t), !1), [e], !1) : y([], m(t), !1);
                return (
                  g.apply(void 0, y([N.current, v, A, T, h], m(a), !1)),
                  function () {
                    N.current;
                  }
                );
              })),
              (D = (0, a.useRef)()),
              (R = (0, a.useRef)(!1)),
              (E = (0, a.useRef)(!1)),
              (I = m((0, a.useState)(0), 2)[1]),
              R.current && (E.current = !0),
              (0, a.useEffect)(function () {
                return (
                  R.current || ((D.current = O.current()), (R.current = !0)),
                  I(function (e) {
                    return e + 1;
                  }),
                  function () {
                    E.current && D.current && D.current();
                  }
                );
              }, []);
            var G =
              void 0 !== u && u
                ? i.find(function (e) {
                    return "string" == typeof e;
                  }) || ""
                : null;
            return n().createElement(void 0 === f ? "span" : f, {
              "aria-hidden": M,
              "aria-label": z,
              role: S,
              style: w,
              className: _,
              children: z ? n().createElement("span", { "aria-hidden": "true", ref: N, children: G }) : G,
              ref: z ? void 0 : N,
            });
          }),
          function (e, t) {
            return !0;
          }
        );
        let w = () =>
          s.jsx("div", {
            className: "z-20 w-full bg-darkBg/60",
            children: (0, s.jsxs)("div", {
              className: "z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2",
              children: [
                s.jsx(h.default, {
                  src: "/home-4.png",
                  priority: !0,
                  width: "800",
                  height: "800",
                  alt: "Avatar",
                  style: { opacity: "0.7" },
                }),
                (0, s.jsxs)("div", {
                  className: "flex flex-col justify-center max-w-md",
                  children: [
                    (0, s.jsxs)("h1", {
                      className: "mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10",
                      children: [
                        "Hi There, I AM KEVIN LIM ",
                        s.jsx("br", {}),
                        s.jsx(x, {
                          sequence: [
                            "software developer",
                            1e3,
                            "full stack web developer",
                            1e3,
                            "mobile expert",
                            1e3,
                            "blockchain developer",
                            1e3,
                          ],
                          wrapper: "span",
                          speed: 50,
                          repeat: 1 / 0,
                          className: "font-bold text-secondary",
                        }),
                      ],
                    }),
                    s.jsx("p", {
                      className: "mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8",
                      children:
                        "As an experienced full-stack web developer with expertise in React JS, Node.js, Express.js, Typescript, Tailwind CSS, MySQL and MongoDB, I have a strong background in developing high-quality, responsive full stack web, mobile, and blockchain applications.",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-center gap-3 md:justify-start md:gap-10",
                      children: [
                        s.jsx("a", {
                          href: "/projects",
                          className:
                            "px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50",
                          children: s.jsx(u.default, { href: "portfolio", children: "View projects" }),
                        }),
                        s.jsx("a", {
                          href: "/contact",
                          className:
                            "px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary",
                          children: s.jsx(u.default, { href: "contact", children: "Contact me" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        var k = i(2160);
        function z() {
          return (0, s.jsxs)("main", {
            children: [
              s.jsx(k.default, {}),
              (0, s.jsxs)("div", {
                className: "flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover",
                children: [s.jsx(d, {}), s.jsx(w, {})],
              }),
            ],
          });
        }
      },
      8987: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => o });
        var s = i(5344),
          a = i(5643),
          n = i(6506),
          r = i(1425);
        let o = () =>
          s.jsx(r.i, {
            position: "bottom",
            className: "absolute z-40 inline-block w-full top-5 md:top-10",
            children: s.jsx("header", {
              children: (0, s.jsxs)("div", {
                className: "container justify-between max-w-6xl mx-auto md:flex",
                children: [
                  s.jsx(n.default, {
                    href: "/",
                    children: (0, s.jsxs)("h1", {
                      className: "my-3 text-4xl font-bold text-center md:text-left",
                      children: ["Kevin", s.jsx("span", { className: "text-secondary", children: " Lim" })],
                    }),
                  }),
                  s.jsx("div", {
                    className: "flex items-center justify-center gap-7",
                    children: a.Ao.map(({ logo: e, src: t, id: i }) =>
                      s.jsx(
                        n.default,
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
          a = i(6506),
          n = i(5643),
          r = i(1425),
          o = i(8428);
        let l = () => {
          let e = (0, o.usePathname)();
          return s.jsx(r.i, {
            position: "right",
            className: "fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10",
            children: s.jsx("nav", {
              children: s.jsx("div", {
                className:
                  "flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm",
                children: n.qZ.map((t) =>
                  s.jsx(
                    "div",
                    {
                      className: `px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                        e === t.link && "bg-secondary"
                      }`,
                      "data-tooltip-target": "tooltip-default",
                      children: (0, s.jsxs)(a.default, { href: t.link, children: [t.icon, " "] }),
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
        i.d(t, { i: () => r });
        var s = i(5344),
          a = i(8110),
          n = i(2219);
        function r(e) {
          let { children: t, className: i, position: r } = e;
          return s.jsx(a.E.div, {
            variants: (0, n.Ji)(r),
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
          a = i(2219),
          n = i(3644),
          r = i(8110);
        let o = () =>
          s.jsx(n.M, {
            mode: "wait",
            children: s.jsx("div", {
              children: s.jsx(r.E.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
                variants: a.ap,
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
        i.d(t, { Ao: () => y, Bz: () => w, fk: () => k, nT: () => x, qZ: () => g, zP: () => b });
        var s = i(5344),
          a = i(1206),
          n = i(2947),
          r = i(6885),
          o = i(2086),
          l = i(5480),
          c = i(7675),
          d = i(9483),
          h = i(8435),
          u = i(5281),
          f = i(8144),
          p = i(7958),
          v = i(4136),
          m = i(1723);
        let y = [
            { id: 1, logo: s.jsx(a.Z, { size: 30, strokeWidth: 1 }), src: "mailto:limk69966@gmail.com" },
            { id: 2, logo: s.jsx(n.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/maxKevin" },
            { id: 3, logo: s.jsx(r.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
          ],
          g = [
            { id: 1, title: "Home", icon: s.jsx(o.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
            { id: 2, title: "User", icon: s.jsx(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/about-me" },
            { id: 3, title: "Book", icon: s.jsx(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/services" },
            {
              id: 4,
              title: "Target",
              icon: s.jsx(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
              link: "/portfolio",
            },
            {
              id: 6,
              title: "Contact",
              icon: s.jsx(h.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
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
          x = [
            { id: 0, endCounter: 7, text: "YEARS OF EXPERIENCE", lineRight: !0, lineRightMobile: !0 },
            { id: 1, endCounter: 30, text: "SATISFIED CUSTOMERS", lineRight: !0, lineRightMobile: !1 },
            { id: 2, endCounter: 30, text: "COMPLETED PROJECTS", lineRight: !0, lineRightMobile: !0 },
            { id: 3, endCounter: 10, text: "WINNING AWARDS", lineRight: !1, lineRightMobile: !1 },
          ],
          w = [
            {
              icon: s.jsx(u.Z, {}),
              title: "Full-Stack Web",
              description:
                "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
            },
            {
              icon: s.jsx(f.Z, {}),
              title: "Mobile App",
              description:
                "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
            },
            {
              icon: s.jsx(p.Z, {}),
              title: "Blockchain",
              description:
                "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
            },
            {
              icon: s.jsx(v.Z, {}),
              title: "Solutions",
              description:
                "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
            },
            {
              icon: s.jsx(m.Z, {}),
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
        i.d(t, { Ji: () => a, ap: () => s });
        let s = {
            initial: { x: "100%", width: "100%" },
            animate: { x: "0%", width: "0%" },
            exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
          },
          a = (e) => ({
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
        i.r(t), i.d(t, { default: () => m, metadata: () => v });
        var s = i(5036),
          a = i(7322),
          n = i.n(a);
        i(7272), i(6279), i(3986), i(1081);
        var r = i(6843);
        let o = (0, r.createProxy)(String.raw`G:\portfolio\components\navbar.tsx`),
          { __esModule: l, $$typeof: c } = o,
          d = o.default,
          h = (0, r.createProxy)(String.raw`G:\portfolio\components\header.tsx`),
          { __esModule: u, $$typeof: f } = h,
          p = h.default,
          v = { title: "TarreDev Landing Page", description: "Landing page made by TarreDev" };
        function m({ children: e }) {
          return s.jsx("html", {
            lang: "en",
            children: (0, s.jsxs)("body", { className: n().className, children: [s.jsx(d, {}), s.jsx(p, {}), e] }),
          });
        }
      },
      751: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { $$typeof: () => n, __esModule: () => a, default: () => r });
        let s = (0, i(6843).createProxy)(String.raw`G:\portfolio\app\page.tsx`),
          { __esModule: a, $$typeof: n } = s,
          r = s.default;
      },
      7481: (e, t, i) => {
        "use strict";
        i.r(t), i.d(t, { default: () => a });
        var s = i(337);
        let a = (e) => [
          { type: "image/x-icon", sizes: "16x16", url: (0, s.fillMetadataSegment)(".", e.params, "favicon.ico") + "" },
        ];
      },
      7272: () => {},
      8727: (e, t, i) => {
        "use strict";
        i.d(t, { C: () => r });
        var s = i(9086),
          a = i(200),
          n = i(9567);
        class r extends s.e {
          constructor(e, t, i) {
            super(e, t), (this.radius = i);
          }
          contains(e) {
            return (0, n.Sp)(e, this.position) <= this.radius;
          }
          intersects(e) {
            let t = this.position,
              i = e.position,
              s = { x: Math.abs(i.x - t.x), y: Math.abs(i.y - t.y) },
              n = this.radius;
            if (e instanceof r) return n + e.radius > Math.sqrt(s.x ** 2 + s.y ** 2);
            if (e instanceof a.A) {
              let { width: t, height: i } = e.size;
              return (
                Math.pow(s.x - t, 2) + Math.pow(s.y - i, 2) <= n ** 2 ||
                (s.x <= n + t && s.y <= n + i) ||
                s.x <= t ||
                s.y <= i
              );
            }
            return !1;
          }
        }
      },
      7385: (e, t, i) => {
        "use strict";
        i.d(t, {
          $o: () => d,
          G1: () => o,
          QL: () => p,
          Re: () => c,
          VH: () => u,
          Wt: () => l,
          X5: () => g,
          YU: () => s,
          ZL: () => a,
          aM: () => r,
          gK: () => v,
          rR: () => f,
          tZ: () => m,
          vq: () => y,
          zX: () => h,
          zw: () => n,
        });
        let s = "generated",
          a = "pointerdown",
          n = "pointerup",
          r = "pointerleave",
          o = "pointerout",
          l = "pointermove",
          c = "touchstart",
          d = "touchend",
          h = "touchmove",
          u = "touchcancel",
          f = "resize",
          p = "visibilitychange",
          v = "tsParticles - Error",
          m = 100,
          y = 0.5,
          g = 1e3;
      },
      9086: (e, t, i) => {
        "use strict";
        i.d(t, { e: () => s });
        class s {
          constructor(e, t) {
            this.position = { x: e, y: t };
          }
        }
      },
      200: (e, t, i) => {
        "use strict";
        i.d(t, { A: () => n });
        var s = i(8727),
          a = i(9086);
        class n extends a.e {
          constructor(e, t, i, s) {
            super(e, t), (this.size = { height: s, width: i });
          }
          contains(e) {
            let t = this.size.width,
              i = this.size.height,
              s = this.position;
            return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + i;
          }
          intersects(e) {
            e instanceof s.C && e.intersects(this);
            let t = this.size.width,
              i = this.size.height,
              a = this.position,
              r = e.position,
              o = e instanceof n ? e.size : { width: 0, height: 0 },
              l = o.width,
              c = o.height;
            return r.x < a.x + t && r.x + l > a.x && r.y < a.y + i && r.y + c > a.y;
          }
        }
      },
      8698: (e, t, i) => {
        "use strict";
        i.d(t, { O: () => a });
        var s = i(6513);
        class a extends s.U {
          constructor(e, t) {
            super(e, t, 0);
          }
          static get origin() {
            return a.create(0, 0);
          }
          static clone(e) {
            return a.create(e.x, e.y);
          }
          static create(e, t) {
            return new a(e, t);
          }
        }
      },
      6513: (e, t, i) => {
        "use strict";
        i.d(t, { U: () => r });
        var s = i(7385),
          a = i(5236);
        let n = { x: 0, y: 0, z: 0 };
        class r {
          constructor(e, t, i) {
            if (
              ((this._updateFromAngle = (e, t) => {
                (this.x = Math.cos(e) * t), (this.y = Math.sin(e) * t);
              }),
              !(0, a.hj)(e) && e)
            )
              (this.x = e.x), (this.y = e.y), (this.z = e.z ? e.z : n.z);
            else if (void 0 !== e && void 0 !== t) (this.x = e), (this.y = t), (this.z = i ?? n.z);
            else throw Error(`${s.gK} Vector3d not initialized correctly`);
          }
          static get origin() {
            return r.create(n.x, n.y, n.z);
          }
          get angle() {
            return Math.atan2(this.y, this.x);
          }
          set angle(e) {
            this._updateFromAngle(e, this.length);
          }
          get length() {
            return Math.sqrt(this.getLengthSq());
          }
          set length(e) {
            this._updateFromAngle(this.angle, e);
          }
          static clone(e) {
            return r.create(e.x, e.y, e.z);
          }
          static create(e, t, i) {
            return new r(e, t, i);
          }
          add(e) {
            return r.create(this.x + e.x, this.y + e.y, this.z + e.z);
          }
          addTo(e) {
            (this.x += e.x), (this.y += e.y), (this.z += e.z);
          }
          copy() {
            return r.clone(this);
          }
          distanceTo(e) {
            return this.sub(e).length;
          }
          distanceToSq(e) {
            return this.sub(e).getLengthSq();
          }
          div(e) {
            return r.create(this.x / e, this.y / e, this.z / e);
          }
          divTo(e) {
            (this.x /= e), (this.y /= e), (this.z /= e);
          }
          getLengthSq() {
            return this.x ** 2 + this.y ** 2;
          }
          mult(e) {
            return r.create(this.x * e, this.y * e, this.z * e);
          }
          multTo(e) {
            (this.x *= e), (this.y *= e), (this.z *= e);
          }
          normalize() {
            let e = this.length;
            0 != e && this.multTo(1 / e);
          }
          rotate(e) {
            return r.create(
              this.x * Math.cos(e) - this.y * Math.sin(e),
              this.x * Math.sin(e) + this.y * Math.cos(e),
              n.z
            );
          }
          setTo(e) {
            (this.x = e.x), (this.y = e.y), (this.z = e.z ? e.z : n.z);
          }
          sub(e) {
            return r.create(this.x - e.x, this.y - e.y, this.z - e.z);
          }
          subFrom(e) {
            (this.x -= e.x), (this.y -= e.y), (this.z -= e.z);
          }
        }
      },
      4871: (e, t, i) => {
        "use strict";
        i.d(t, { R: () => r });
        var s = i(5236),
          a = i(4182),
          n = i(2953);
        class r extends n.O {
          constructor() {
            super(), (this.animation = new a.h());
          }
          static create(e, t) {
            let i = new r();
            return i.load(e), void 0 !== t && ((0, s.HD)(t) || (0, s.kJ)(t) ? i.load({ value: t }) : i.load(t)), i;
          }
          load(e) {
            if ((super.load(e), !e)) return;
            let t = e.animation;
            void 0 !== t && (void 0 !== t.enable ? this.animation.h.load(t) : this.animation.load(e.animation));
          }
        }
      },
      4120: (e, t, i) => {
        "use strict";
        i.d(t, { B: () => n, P: () => a });
        var s = i(9567);
        class a {
          constructor() {
            (this.count = 0),
              (this.enable = !1),
              (this.speed = 1),
              (this.decay = 0),
              (this.delay = 0),
              (this.sync = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.count && (this.count = (0, s.Cs)(e.count)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.speed && (this.speed = (0, s.Cs)(e.speed)),
              void 0 !== e.decay && (this.decay = (0, s.Cs)(e.decay)),
              void 0 !== e.delay && (this.delay = (0, s.Cs)(e.delay)),
              void 0 !== e.sync && (this.sync = e.sync));
          }
        }
        class n extends a {
          constructor() {
            super(), (this.mode = "auto"), (this.startValue = "random");
          }
          load(e) {
            super.load(e),
              e &&
                (void 0 !== e.mode && (this.mode = e.mode),
                void 0 !== e.startValue && (this.startValue = e.startValue));
          }
        }
      },
      7361: (e, t, i) => {
        "use strict";
        i.d(t, { g: () => n });
        var s = i(9242),
          a = i(5236);
        class n {
          constructor() {
            (this.composite = "destination-out"), (this.cover = new s.F()), (this.enable = !1);
          }
          load(e) {
            if (e) {
              if ((void 0 !== e.composite && (this.composite = e.composite), void 0 !== e.cover)) {
                let t = e.cover,
                  i = (0, a.HD)(e.cover) ? { color: e.cover } : e.cover;
                this.cover.load(void 0 !== t.color || void 0 !== t.image ? t : { color: i });
              }
              void 0 !== e.enable && (this.enable = e.enable);
            }
          }
        }
      },
      9242: (e, t, i) => {
        "use strict";
        i.d(t, { F: () => a });
        var s = i(2953);
        class a {
          constructor() {
            this.opacity = 1;
          }
          load(e) {
            e &&
              (void 0 !== e.color && (this.color = s.O.create(this.color, e.color)),
              void 0 !== e.image && (this.image = e.image),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        }
      },
      1035: (e, t, i) => {
        "use strict";
        i.d(t, { A: () => a });
        var s = i(2953);
        class a {
          constructor() {
            (this.color = new s.O()),
              (this.color.value = ""),
              (this.image = ""),
              (this.position = ""),
              (this.repeat = ""),
              (this.size = ""),
              (this.opacity = 1);
          }
          load(e) {
            e &&
              (void 0 !== e.color && (this.color = s.O.create(this.color, e.color)),
              void 0 !== e.image && (this.image = e.image),
              void 0 !== e.position && (this.position = e.position),
              void 0 !== e.repeat && (this.repeat = e.repeat),
              void 0 !== e.size && (this.size = e.size),
              void 0 !== e.opacity && (this.opacity = e.opacity));
          }
        }
      },
      7965: (e, t, i) => {
        "use strict";
        i.d(t, { y: () => n });
        var s = i(4120),
          a = i(9567);
        class n extends s.P {
          constructor() {
            super(), (this.offset = 0), (this.sync = !0);
          }
          load(e) {
            super.load(e), e && void 0 !== e.offset && (this.offset = (0, a.Cs)(e.offset));
          }
        }
      },
      4182: (e, t, i) => {
        "use strict";
        i.d(t, { h: () => a });
        var s = i(7965);
        class a {
          constructor() {
            (this.h = new s.y()), (this.s = new s.y()), (this.l = new s.y());
          }
          load(e) {
            e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
          }
        }
      },
      7303: (e, t, i) => {
        "use strict";
        i.d(t, { z: () => c });
        class s {
          constructor() {
            (this.enable = !1), (this.mode = []);
          }
          load(e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode));
          }
        }
        class a {
          constructor() {
            (this.selectors = []), (this.enable = !1), (this.mode = []), (this.type = "circle");
          }
          load(e) {
            e &&
              (void 0 !== e.selectors && (this.selectors = e.selectors),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.type && (this.type = e.type));
          }
        }
        class n {
          constructor() {
            (this.enable = !1), (this.force = 2), (this.smooth = 10);
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.force && (this.force = e.force),
              void 0 !== e.smooth && (this.smooth = e.smooth));
          }
        }
        class r {
          constructor() {
            (this.enable = !1), (this.mode = []), (this.parallax = new n());
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.mode && (this.mode = e.mode),
              this.parallax.load(e.parallax));
          }
        }
        class o {
          constructor() {
            (this.delay = 0.5), (this.enable = !0);
          }
          load(e) {
            void 0 !== e &&
              (void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.enable && (this.enable = e.enable));
          }
        }
        var l = i(5236);
        class c {
          constructor() {
            (this.onClick = new s()), (this.onDiv = new a()), (this.onHover = new r()), (this.resize = new o());
          }
          load(e) {
            if (!e) return;
            this.onClick.load(e.onClick);
            let t = e.onDiv;
            void 0 !== t &&
              (this.onDiv = (0, l.KH)(t, (e) => {
                let t = new a();
                return t.load(e), t;
              })),
              this.onHover.load(e.onHover),
              this.resize.load(e.resize);
          }
        }
      },
      4074: (e, t, i) => {
        "use strict";
        i.d(t, { o: () => n });
        var s = i(7303);
        class a {
          constructor(e, t) {
            (this._engine = e), (this._container = t);
          }
          load(e) {
            if (!e || !this._container) return;
            let t = this._engine.interactors.get(this._container);
            if (t) for (let i of t) i.loadModeOptions && i.loadModeOptions(this, e);
          }
        }
        class n {
          constructor(e, t) {
            (this.detectsOn = "window"), (this.events = new s.z()), (this.modes = new a(e, t));
          }
          load(e) {
            if (!e) return;
            let t = e.detectsOn;
            void 0 !== t && (this.detectsOn = t), this.events.load(e.events), this.modes.load(e.modes);
          }
        }
      },
      8745: (e, t, i) => {
        "use strict";
        i.d(t, { h: () => a });
        var s = i(5236);
        class a {
          load(e) {
            e &&
              (e.position &&
                (this.position = { x: e.position.x ?? 50, y: e.position.y ?? 50, mode: e.position.mode ?? "percent" }),
              e.options && (this.options = (0, s.ZB)({}, e.options)));
          }
        }
      },
      3011: (e, t, i) => {
        "use strict";
        i.d(t, { E: () => f });
        var s = i(5236),
          a = i(1035),
          n = i(7361);
        class r {
          constructor() {
            (this.enable = !0), (this.zIndex = 0);
          }
          load(e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.zIndex && (this.zIndex = e.zIndex));
          }
        }
        var o = i(4074),
          l = i(8745),
          c = i(6955),
          d = i(720),
          h = i(6696),
          u = i(9567);
        class f {
          constructor(e, t) {
            (this._findDefaultTheme = (e) =>
              this.themes.find((t) => t.default.value && t.default.mode === e) ??
              this.themes.find((e) => e.default.value && "any" === e.default.mode)),
              (this._importPreset = (e) => {
                this.load(this._engine.getPreset(e));
              }),
              (this._engine = e),
              (this._container = t),
              (this.autoPlay = !0),
              (this.background = new a.A()),
              (this.backgroundMask = new n.g()),
              (this.clear = !0),
              (this.defaultThemes = {}),
              (this.delay = 0),
              (this.fullScreen = new r()),
              (this.detectRetina = !0),
              (this.duration = 0),
              (this.fpsLimit = 120),
              (this.interactivity = new o.o(e, t)),
              (this.manualParticles = []),
              (this.particles = (0, h.x)(this._engine, this._container)),
              (this.pauseOnBlur = !0),
              (this.pauseOnOutsideViewport = !0),
              (this.responsive = []),
              (this.smooth = !1),
              (this.style = {}),
              (this.themes = []),
              (this.zLayers = 100);
          }
          load(e) {
            if (!e) return;
            void 0 !== e.preset && (0, s.KH)(e.preset, (e) => this._importPreset(e)),
              void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay),
              void 0 !== e.clear && (this.clear = e.clear),
              void 0 !== e.key && (this.key = e.key),
              void 0 !== e.name && (this.name = e.name),
              void 0 !== e.delay && (this.delay = (0, u.Cs)(e.delay));
            let t = e.detectRetina;
            void 0 !== t && (this.detectRetina = t), void 0 !== e.duration && (this.duration = (0, u.Cs)(e.duration));
            let i = e.fpsLimit;
            void 0 !== i && (this.fpsLimit = i),
              void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur),
              void 0 !== e.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
              void 0 !== e.zLayers && (this.zLayers = e.zLayers),
              this.background.load(e.background);
            let a = e.fullScreen;
            (0, s.jn)(a) ? (this.fullScreen.enable = a) : this.fullScreen.load(a),
              this.backgroundMask.load(e.backgroundMask),
              this.interactivity.load(e.interactivity),
              e.manualParticles &&
                (this.manualParticles = e.manualParticles.map((e) => {
                  let t = new l.h();
                  return t.load(e), t;
                })),
              this.particles.load(e.particles),
              (this.style = (0, s.ZB)(this.style, e.style)),
              this._engine.loadOptions(this, e),
              void 0 !== e.smooth && (this.smooth = e.smooth);
            let n = this._engine.interactors.get(this._container);
            if (n) for (let t of n) t.loadOptions && t.loadOptions(this, e);
            if (void 0 !== e.responsive)
              for (let t of e.responsive) {
                let e = new c.E();
                e.load(t), this.responsive.push(e);
              }
            if ((this.responsive.sort((e, t) => e.maxWidth - t.maxWidth), void 0 !== e.themes))
              for (let t of e.themes) {
                let e = this.themes.find((e) => e.name === t.name);
                if (e) e.load(t);
                else {
                  let e = new d.Q();
                  e.load(t), this.themes.push(e);
                }
              }
            (this.defaultThemes.dark = this._findDefaultTheme("dark")?.name),
              (this.defaultThemes.light = this._findDefaultTheme("light")?.name);
          }
          setResponsive(e, t, i) {
            this.load(i);
            let s = this.responsive.find((i) =>
              "screen" === i.mode && screen ? i.maxWidth > screen.availWidth : i.maxWidth * t > e
            );
            return this.load(s?.options), s?.maxWidth;
          }
          setTheme(e) {
            if (e) {
              let t = this.themes.find((t) => t.name === e);
              t && this.load(t.options);
            } else {
              let e = (0, s.HY)("(prefers-color-scheme: dark)"),
                t = e && e.matches,
                i = this._findDefaultTheme(t ? "dark" : "light");
              i && this.load(i.options);
            }
          }
        }
      },
      2953: (e, t, i) => {
        "use strict";
        i.d(t, { O: () => a });
        var s = i(5236);
        class a {
          constructor() {
            this.value = "";
          }
          static create(e, t) {
            let i = new a();
            return i.load(e), void 0 !== t && ((0, s.HD)(t) || (0, s.kJ)(t) ? i.load({ value: t }) : i.load(t)), i;
          }
          load(e) {
            e?.value !== void 0 && (this.value = e.value);
          }
        }
      },
      1441: (e, t, i) => {
        "use strict";
        i.d(t, { b: () => a });
        var s = i(7622);
        class a {
          constructor() {
            (this.horizontal = new s.u()), (this.vertical = new s.u());
          }
          load(e) {
            e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
          }
        }
      },
      7622: (e, t, i) => {
        "use strict";
        i.d(t, { u: () => a });
        var s = i(787);
        class a extends s.SW {
          constructor() {
            super(), (this.value = 1);
          }
        }
      },
      8037: (e, t, i) => {
        "use strict";
        i.d(t, { y: () => o });
        class s {
          constructor() {
            this.speed = 2;
          }
          load(e) {
            e && void 0 !== e.speed && (this.speed = e.speed);
          }
        }
        class a {
          constructor() {
            (this.enable = !0), (this.retries = 0);
          }
          load(e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.retries && (this.retries = e.retries));
          }
        }
        var n = i(1441),
          r = i(9567);
        class o {
          constructor() {
            (this.absorb = new s()),
              (this.bounce = new n.b()),
              (this.enable = !1),
              (this.maxSpeed = 50),
              (this.mode = "bounce"),
              (this.overlap = new a());
          }
          load(e) {
            e &&
              (this.absorb.load(e.absorb),
              this.bounce.load(e.bounce),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.maxSpeed && (this.maxSpeed = (0, r.Cs)(e.maxSpeed)),
              void 0 !== e.mode && (this.mode = e.mode),
              this.overlap.load(e.overlap));
          }
        }
      },
      1968: (e, t, i) => {
        "use strict";
        i.d(t, { A: () => f });
        var s = i(5236),
          a = i(1516),
          n = i(1018);
        class r {
          constructor() {
            (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
          }
          load(e) {
            e &&
              (void 0 !== e.x && (this.x = e.x),
              void 0 !== e.y && (this.y = e.y),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.radius && (this.radius = e.radius));
          }
        }
        var o = i(5250),
          l = i(9279),
          c = i(3999);
        class d {
          constructor() {
            this.default = "out";
          }
          load(e) {
            e &&
              (void 0 !== e.default && (this.default = e.default),
              (this.bottom = e.bottom ?? e.default),
              (this.left = e.left ?? e.default),
              (this.right = e.right ?? e.default),
              (this.top = e.top ?? e.default));
          }
        }
        var h = i(3481),
          u = i(9567);
        class f {
          constructor() {
            (this.angle = new a.k()),
              (this.attract = new n.k()),
              (this.center = new r()),
              (this.decay = 0),
              (this.distance = {}),
              (this.direction = "none"),
              (this.drift = 0),
              (this.enable = !1),
              (this.gravity = new o.S()),
              (this.path = new l.C()),
              (this.outModes = new d()),
              (this.random = !1),
              (this.size = !1),
              (this.speed = 2),
              (this.spin = new h.y()),
              (this.straight = !1),
              (this.trail = new c.S()),
              (this.vibrate = !1),
              (this.warp = !1);
          }
          load(e) {
            if (!e) return;
            this.angle.load((0, s.hj)(e.angle) ? { value: e.angle } : e.angle),
              this.attract.load(e.attract),
              this.center.load(e.center),
              void 0 !== e.decay && (this.decay = (0, u.Cs)(e.decay)),
              void 0 !== e.direction && (this.direction = e.direction),
              void 0 !== e.distance &&
                (this.distance = (0, s.hj)(e.distance)
                  ? { horizontal: e.distance, vertical: e.distance }
                  : { ...e.distance }),
              void 0 !== e.drift && (this.drift = (0, u.Cs)(e.drift)),
              void 0 !== e.enable && (this.enable = e.enable),
              this.gravity.load(e.gravity);
            let t = e.outModes;
            void 0 !== t && ((0, s.Kn)(t) ? this.outModes.load(t) : this.outModes.load({ default: t })),
              this.path.load(e.path),
              void 0 !== e.random && (this.random = e.random),
              void 0 !== e.size && (this.size = e.size),
              void 0 !== e.speed && (this.speed = (0, u.Cs)(e.speed)),
              this.spin.load(e.spin),
              void 0 !== e.straight && (this.straight = e.straight),
              this.trail.load(e.trail),
              void 0 !== e.vibrate && (this.vibrate = e.vibrate),
              void 0 !== e.warp && (this.warp = e.warp);
          }
        }
      },
      1516: (e, t, i) => {
        "use strict";
        i.d(t, { k: () => a });
        var s = i(9567);
        class a {
          constructor() {
            (this.offset = 0), (this.value = 90);
          }
          load(e) {
            e &&
              (void 0 !== e.offset && (this.offset = (0, s.Cs)(e.offset)),
              void 0 !== e.value && (this.value = (0, s.Cs)(e.value)));
          }
        }
      },
      1018: (e, t, i) => {
        "use strict";
        i.d(t, { k: () => a });
        var s = i(9567);
        class a {
          constructor() {
            (this.distance = 200), (this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
          }
          load(e) {
            if (
              e &&
              (void 0 !== e.distance && (this.distance = (0, s.Cs)(e.distance)),
              void 0 !== e.enable && (this.enable = e.enable),
              e.rotate)
            ) {
              let t = e.rotate.x;
              void 0 !== t && (this.rotate.x = t);
              let i = e.rotate.y;
              void 0 !== i && (this.rotate.y = i);
            }
          }
        }
      },
      5250: (e, t, i) => {
        "use strict";
        i.d(t, { S: () => a });
        var s = i(9567);
        class a {
          constructor() {
            (this.acceleration = 9.81), (this.enable = !1), (this.inverse = !1), (this.maxSpeed = 50);
          }
          load(e) {
            e &&
              (void 0 !== e.acceleration && (this.acceleration = (0, s.Cs)(e.acceleration)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.inverse && (this.inverse = e.inverse),
              void 0 !== e.maxSpeed && (this.maxSpeed = (0, s.Cs)(e.maxSpeed)));
          }
        }
      },
      3999: (e, t, i) => {
        "use strict";
        i.d(t, { S: () => n });
        var s = i(2953);
        class a {
          load(e) {
            e &&
              (void 0 !== e.color && (this.color = s.O.create(this.color, e.color)),
              void 0 !== e.image && (this.image = e.image));
          }
        }
        class n {
          constructor() {
            (this.enable = !1), (this.length = 10), (this.fill = new a());
          }
          load(e) {
            e &&
              (void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.fill && this.fill.load(e.fill),
              void 0 !== e.length && (this.length = e.length));
          }
        }
      },
      9279: (e, t, i) => {
        "use strict";
        i.d(t, { C: () => n });
        var s = i(787),
          a = i(5236);
        class n {
          constructor() {
            (this.clamp = !0), (this.delay = new s.SW()), (this.enable = !1), (this.options = {});
          }
          load(e) {
            e &&
              (void 0 !== e.clamp && (this.clamp = e.clamp),
              this.delay.load(e.delay),
              void 0 !== e.enable && (this.enable = e.enable),
              (this.generator = e.generator),
              e.options && (this.options = (0, a.ZB)(this.options, e.options)));
          }
        }
      },
      3481: (e, t, i) => {
        "use strict";
        i.d(t, { y: () => n });
        var s = i(5236),
          a = i(9567);
        class n {
          constructor() {
            (this.acceleration = 0), (this.enable = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.acceleration && (this.acceleration = (0, a.Cs)(e.acceleration)),
              void 0 !== e.enable && (this.enable = e.enable),
              e.position && (this.position = (0, s.ZB)({}, e.position)));
          }
        }
      },
      9595: (e, t, i) => {
        "use strict";
        i.d(t, { D: () => n });
        var s = i(7079),
          a = i(787);
        class n extends a.md {
          constructor() {
            super(), (this.animation = new s.O()), (this.value = 1);
          }
          load(e) {
            if (!e) return;
            super.load(e);
            let t = e.animation;
            void 0 !== t && this.animation.load(t);
          }
        }
      },
      7079: (e, t, i) => {
        "use strict";
        i.d(t, { O: () => a });
        var s = i(4120);
        class a extends s.B {
          constructor() {
            super(), (this.destroy = "none"), (this.speed = 2);
          }
          load(e) {
            super.load(e), e && void 0 !== e.destroy && (this.destroy = e.destroy);
          }
        }
      },
      5535: (e, t, i) => {
        "use strict";
        i.d(t, { B: () => g });
        var s = i(5236),
          a = i(4871),
          n = i(8037);
        class r {
          constructor() {
            (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = []);
          }
          load(e) {
            if (!e) return;
            let t = e.options;
            if (void 0 !== t)
              for (let e in t) {
                let i = t[e];
                i && (this.options[e] = (0, s.ZB)(this.options[e] ?? {}, i));
              }
            void 0 !== e.close && (this.close = e.close),
              void 0 !== e.fill && (this.fill = e.fill),
              void 0 !== e.type && (this.type = e.type);
          }
        }
        var o = i(1968),
          l = i(9595),
          c = i(1441);
        class d {
          constructor() {
            (this.enable = !1), (this.width = 1920), (this.height = 1080);
          }
          load(e) {
            if (!e) return;
            void 0 !== e.enable && (this.enable = e.enable);
            let t = e.width;
            void 0 !== t && (this.width = t);
            let i = e.height;
            void 0 !== i && (this.height = i);
          }
        }
        class h {
          constructor() {
            (this.mode = "delete"), (this.value = 0);
          }
          load(e) {
            e && (void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.value && (this.value = e.value));
          }
        }
        class u {
          constructor() {
            (this.density = new d()), (this.limit = new h()), (this.value = 0);
          }
          load(e) {
            e && (this.density.load(e.density), this.limit.load(e.limit), void 0 !== e.value && (this.value = e.value));
          }
        }
        var f = i(3858),
          p = i(8100),
          v = i(6802),
          m = i(8602),
          y = i(9944);
        class g {
          constructor(e, t) {
            (this._engine = e),
              (this._container = t),
              (this.bounce = new c.b()),
              (this.collisions = new n.y()),
              (this.color = new a.R()),
              (this.color.value = "#fff"),
              (this.effect = new r()),
              (this.groups = {}),
              (this.move = new o.A()),
              (this.number = new u()),
              (this.opacity = new l.D()),
              (this.reduceDuplicates = !1),
              (this.shadow = new f.j()),
              (this.shape = new p.b()),
              (this.size = new v.$()),
              (this.stroke = new m.m()),
              (this.zIndex = new y.K());
          }
          load(e) {
            if (!e) return;
            if (void 0 !== e.groups)
              for (let t of Object.keys(e.groups)) {
                if (!Object.hasOwn(e.groups, t)) continue;
                let i = e.groups[t];
                void 0 !== i && (this.groups[t] = (0, s.ZB)(this.groups[t] ?? {}, i));
              }
            void 0 !== e.reduceDuplicates && (this.reduceDuplicates = e.reduceDuplicates),
              this.bounce.load(e.bounce),
              this.color.load(a.R.create(this.color, e.color)),
              this.effect.load(e.effect),
              this.move.load(e.move),
              this.number.load(e.number),
              this.opacity.load(e.opacity),
              this.shape.load(e.shape),
              this.size.load(e.size),
              this.shadow.load(e.shadow),
              this.zIndex.load(e.zIndex),
              this.collisions.load(e.collisions),
              void 0 !== e.interactivity && (this.interactivity = (0, s.ZB)({}, e.interactivity));
            let t = e.stroke;
            if (
              (t &&
                (this.stroke = (0, s.KH)(t, (e) => {
                  let t = new m.m();
                  return t.load(e), t;
                })),
              this._container)
            ) {
              let t = this._engine.updaters.get(this._container);
              if (t) for (let i of t) i.loadOptions && i.loadOptions(this, e);
              let i = this._engine.interactors.get(this._container);
              if (i) for (let t of i) t.loadParticlesOptions && t.loadParticlesOptions(this, e);
            }
          }
        }
      },
      3858: (e, t, i) => {
        "use strict";
        i.d(t, { j: () => a });
        var s = i(2953);
        class a {
          constructor() {
            (this.blur = 0),
              (this.color = new s.O()),
              (this.enable = !1),
              (this.offset = { x: 0, y: 0 }),
              (this.color.value = "#000");
          }
          load(e) {
            e &&
              (void 0 !== e.blur && (this.blur = e.blur),
              (this.color = s.O.create(this.color, e.color)),
              void 0 !== e.enable && (this.enable = e.enable),
              void 0 !== e.offset &&
                (void 0 !== e.offset.x && (this.offset.x = e.offset.x),
                void 0 !== e.offset.y && (this.offset.y = e.offset.y)));
          }
        }
      },
      8100: (e, t, i) => {
        "use strict";
        i.d(t, { b: () => a });
        var s = i(5236);
        class a {
          constructor() {
            (this.close = !0), (this.fill = !0), (this.options = {}), (this.type = "circle");
          }
          load(e) {
            if (!e) return;
            let t = e.options;
            if (void 0 !== t)
              for (let e in t) {
                let i = t[e];
                i && (this.options[e] = (0, s.ZB)(this.options[e] ?? {}, i));
              }
            void 0 !== e.close && (this.close = e.close),
              void 0 !== e.fill && (this.fill = e.fill),
              void 0 !== e.type && (this.type = e.type);
          }
        }
      },
      6802: (e, t, i) => {
        "use strict";
        i.d(t, { $: () => n });
        var s = i(787),
          a = i(3701);
        class n extends s.md {
          constructor() {
            super(), (this.animation = new a.a()), (this.value = 3);
          }
          load(e) {
            if ((super.load(e), !e)) return;
            let t = e.animation;
            void 0 !== t && this.animation.load(t);
          }
        }
      },
      3701: (e, t, i) => {
        "use strict";
        i.d(t, { a: () => a });
        var s = i(4120);
        class a extends s.B {
          constructor() {
            super(), (this.destroy = "none"), (this.speed = 5);
          }
          load(e) {
            super.load(e), e && void 0 !== e.destroy && (this.destroy = e.destroy);
          }
        }
      },
      8602: (e, t, i) => {
        "use strict";
        i.d(t, { m: () => n });
        var s = i(4871),
          a = i(9567);
        class n {
          constructor() {
            this.width = 0;
          }
          load(e) {
            e &&
              (void 0 !== e.color && (this.color = s.R.create(this.color, e.color)),
              void 0 !== e.width && (this.width = (0, a.Cs)(e.width)),
              void 0 !== e.opacity && (this.opacity = (0, a.Cs)(e.opacity)));
          }
        }
      },
      9944: (e, t, i) => {
        "use strict";
        i.d(t, { K: () => a });
        var s = i(787);
        class a extends s.SW {
          constructor() {
            super(), (this.opacityRate = 1), (this.sizeRate = 1), (this.velocityRate = 1);
          }
          load(e) {
            super.load(e),
              e &&
                (void 0 !== e.opacityRate && (this.opacityRate = e.opacityRate),
                void 0 !== e.sizeRate && (this.sizeRate = e.sizeRate),
                void 0 !== e.velocityRate && (this.velocityRate = e.velocityRate));
          }
        }
      },
      6955: (e, t, i) => {
        "use strict";
        i.d(t, { E: () => a });
        var s = i(5236);
        class a {
          constructor() {
            (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
          }
          load(e) {
            e &&
              (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth),
              void 0 !== e.mode && ("screen" === e.mode ? (this.mode = "screen") : (this.mode = "canvas")),
              void 0 !== e.options && (this.options = (0, s.ZB)({}, e.options)));
          }
        }
      },
      720: (e, t, i) => {
        "use strict";
        i.d(t, { Q: () => n });
        class s {
          constructor() {
            (this.auto = !1), (this.mode = "any"), (this.value = !1);
          }
          load(e) {
            e &&
              (void 0 !== e.auto && (this.auto = e.auto),
              void 0 !== e.mode && (this.mode = e.mode),
              void 0 !== e.value && (this.value = e.value));
          }
        }
        var a = i(5236);
        class n {
          constructor() {
            (this.name = ""), (this.default = new s());
          }
          load(e) {
            e &&
              (void 0 !== e.name && (this.name = e.name),
              this.default.load(e.default),
              void 0 !== e.options && (this.options = (0, a.ZB)({}, e.options)));
          }
        }
      },
      787: (e, t, i) => {
        "use strict";
        i.d(t, { SW: () => n, md: () => o });
        var s = i(4120),
          a = i(9567);
        class n {
          constructor() {
            this.value = 0;
          }
          load(e) {
            e && void 0 !== e.value && (this.value = (0, a.Cs)(e.value));
          }
        }
        class r extends n {
          constructor() {
            super(), (this.animation = new s.P());
          }
          load(e) {
            if ((super.load(e), !e)) return;
            let t = e.animation;
            void 0 !== t && this.animation.load(t);
          }
        }
        class o extends r {
          constructor() {
            super(), (this.animation = new s.B());
          }
          load(e) {
            super.load(e);
          }
        }
      },
      107: (e, t, i) => {
        "use strict";
        i.d(t, {
          $F: () => p,
          C3: () => o,
          PL: () => v,
          TQ: () => r,
          ZH: () => l,
          Zw: () => f,
          pS: () => n,
          zv: () => c,
        });
        var s = i(827);
        let a = { x: 0, y: 0 };
        function n(e, t, i) {
          e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(i.x, i.y), e.closePath();
        }
        function r(e, t, i) {
          (e.fillStyle = i ?? "rgba(0,0,0,0)"), e.fillRect(a.x, a.y, t.width, t.height);
        }
        function o(e, t, i, s) {
          i && ((e.globalAlpha = s), e.drawImage(i, a.x, a.y, t.width, t.height), (e.globalAlpha = 1));
        }
        function l(e, t) {
          e.clearRect(a.x, a.y, t.width, t.height);
        }
        async function c(e) {
          let {
              container: t,
              context: i,
              particle: a,
              delta: n,
              colorStyles: r,
              backgroundMask: o,
              composite: l,
              radius: c,
              opacity: f,
              shadow: p,
              transform: v,
            } = e,
            m = a.getPosition(),
            y = a.rotation + (a.pathRotation ? a.velocity.angle : 0),
            g = { sin: Math.sin(y), cos: Math.cos(y) },
            b = { a: g.cos * (v.a ?? 1), b: g.sin * (v.b ?? 1), c: -g.sin * (v.c ?? 1), d: g.cos * (v.d ?? 1) };
          i.setTransform(b.a, b.b, b.c, b.d, m.x, m.y), o && (i.globalCompositeOperation = l);
          let x = a.shadowColor;
          p.enable &&
            x &&
            ((i.shadowBlur = p.blur),
            (i.shadowColor = (0, s.iz)(x)),
            (i.shadowOffsetX = p.offset.x),
            (i.shadowOffsetY = p.offset.y)),
            r.fill && (i.fillStyle = r.fill);
          let w = a.strokeWidth ?? 0;
          (i.lineWidth = w), r.stroke && (i.strokeStyle = r.stroke);
          let k = {
            container: t,
            context: i,
            particle: a,
            radius: c,
            opacity: f,
            delta: n,
            transformData: b,
            strokeWidth: w,
          };
          await h(k), await u(k), await d(k), (i.globalCompositeOperation = "source-over"), i.resetTransform();
        }
        async function d(e) {
          let { container: t, context: i, particle: s, radius: a, opacity: n, delta: r, transformData: o } = e;
          if (!s.effect) return;
          let l = t.effectDrawers.get(s.effect);
          l &&
            (await l.draw({
              context: i,
              particle: s,
              radius: a,
              opacity: n,
              delta: r,
              pixelRatio: t.retina.pixelRatio,
              transformData: { ...o },
            }));
        }
        async function h(e) {
          let {
            container: t,
            context: i,
            particle: s,
            radius: a,
            opacity: n,
            delta: r,
            strokeWidth: o,
            transformData: l,
          } = e;
          if (!s.shape) return;
          let c = t.shapeDrawers.get(s.shape);
          c &&
            (i.beginPath(),
            await c.draw({
              context: i,
              particle: s,
              radius: a,
              opacity: n,
              delta: r,
              pixelRatio: t.retina.pixelRatio,
              transformData: { ...l },
            }),
            s.shapeClose && i.closePath(),
            o > 0 && i.stroke(),
            s.shapeFill && i.fill());
        }
        async function u(e) {
          let { container: t, context: i, particle: s, radius: a, opacity: n, delta: r, transformData: o } = e;
          if (!s.shape) return;
          let l = t.shapeDrawers.get(s.shape);
          l?.afterDraw &&
            (await l.afterDraw({
              context: i,
              particle: s,
              radius: a,
              opacity: n,
              delta: r,
              pixelRatio: t.retina.pixelRatio,
              transformData: { ...o },
            }));
        }
        async function f(e, t, i) {
          t.draw && (await t.draw(e, i));
        }
        async function p(e, t, i, s) {
          t.drawParticle && (await t.drawParticle(e, i, s));
        }
        function v(e, t, i) {
          return { h: e.h, s: e.s, l: e.l + ("darken" === t ? -1 : 1) * i };
        }
      },
      827: (e, t, i) => {
        "use strict";
        i.d(t, {
          BE: () => g,
          Dt: () => b,
          PB: () => M,
          VI: () => l,
          Y6: () => f,
          bS: () => w,
          gW: () => x,
          iz: () => v,
          lC: () => h,
          lN: () => d,
          oc: () => y,
          tX: () => c,
          ve: () => u,
          vz: () => m,
        });
        var s = i(9567),
          a = i(5236),
          n = i(7385);
        let r = "random",
          o = new Map();
        function l(e) {
          o.set(e.key, e);
        }
        function c(e, t, i = !0) {
          if (!e) return;
          let s = (0, a.HD)(e) ? { value: e } : e;
          if ((0, a.HD)(s.value))
            return (function e(t, i, s = !0) {
              if (!t) return;
              let n = (0, a.HD)(t) ? { value: t } : t;
              if ((0, a.HD)(n.value))
                return n.value === r
                  ? p()
                  : (function (e) {
                      for (let [, t] of o) if (e.startsWith(t.stringPrefix)) return t.parseString(e);
                      let t = e.replace(
                          /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                          (e, t, i, s, a) => t + t + i + i + s + s + (void 0 !== a ? a + a : "")
                        ),
                        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);
                      return i
                        ? {
                            a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                            b: parseInt(i[3], 16),
                            g: parseInt(i[2], 16),
                            r: parseInt(i[1], 16),
                          }
                        : void 0;
                    })(n.value);
              if ((0, a.kJ)(n.value)) return e({ value: (0, a.c8)(n.value, i, s) });
              for (let [, e] of o) {
                let t = e.handleColor(n);
                if (t) return t;
              }
            })(s.value, t, i);
          if ((0, a.kJ)(s.value)) return c({ value: (0, a.c8)(s.value, t, i) });
          for (let [, e] of o) {
            let t = e.handleRangeColor(s);
            if (t) return t;
          }
        }
        function d(e, t, i = !0) {
          let s = c(e, t, i);
          return s ? h(s) : void 0;
        }
        function h(e) {
          let t = e.r / 255,
            i = e.g / 255,
            s = e.b / 255,
            a = Math.max(t, i, s),
            n = Math.min(t, i, s),
            r = { h: 0, l: (a + n) * 0.5, s: 0 };
          return (
            a !== n &&
              ((r.s = r.l < 0.5 ? (a - n) / (a + n) : (a - n) / (2 - a - n)),
              (r.h = t === a ? (i - s) / (a - n) : (r.h = i === a ? 2 + (s - t) / (a - n) : 4 + (t - i) / (a - n)))),
            (r.l *= 100),
            (r.s *= 100),
            (r.h *= 60),
            r.h < 0 && (r.h += 360),
            r.h >= 360 && (r.h -= 360),
            r
          );
        }
        function u(e) {
          let t = ((e.h % 360) + 360) % 360,
            i = Math.max(0, Math.min(100, e.s)),
            s = Math.max(0, Math.min(100, e.l)),
            a = t / 360,
            n = i / 100,
            r = s / 100;
          if (0 === i) {
            let e = Math.round(255 * r);
            return { r: e, g: e, b: e };
          }
          let o = (e, t, i) =>
              (i < 0 && i++, i > 1 && i--, 6 * i < 1)
                ? e + (t - e) * 6 * i
                : 2 * i < 1
                ? t
                : 3 * i < 2
                ? e + (t - e) * (0.6666666666666666 - i) * 6
                : e,
            l = r < 0.5 ? r * (1 + n) : r + n - r * n,
            c = 2 * r - l;
          return {
            r: Math.round(Math.min(255, 255 * o(c, l, a + 0.3333333333333333))),
            g: Math.round(Math.min(255, 255 * o(c, l, a))),
            b: Math.round(Math.min(255, 255 * o(c, l, a - 0.3333333333333333))),
          };
        }
        function f(e) {
          let t = u(e);
          return { a: e.a, b: t.b, g: t.g, r: t.r };
        }
        function p(e) {
          let t = e ?? 0;
          return {
            b: Math.floor((0, s.vd)((0, s.Cs)(t, 256))),
            g: Math.floor((0, s.vd)((0, s.Cs)(t, 256))),
            r: Math.floor((0, s.vd)((0, s.Cs)(t, 256))),
          };
        }
        function v(e, t) {
          return `rgba(${e.r}, ${e.g}, ${e.b}, ${t ?? 1})`;
        }
        function m(e, t) {
          return `hsla(${e.h}, ${e.s}%, ${e.l}%, ${t ?? 1})`;
        }
        function y(e, t, i, a) {
          let n = e,
            r = t;
          return (
            void 0 === n.r && (n = u(e)),
            void 0 === r.r && (r = u(t)),
            { b: (0, s.CD)(n.b, r.b, i, a), g: (0, s.CD)(n.g, r.g, i, a), r: (0, s.CD)(n.r, r.r, i, a) }
          );
        }
        function g(e, t, i) {
          if (i === r) return p();
          if ("mid" !== i) return i;
          {
            let i = e.getFillColor() ?? e.getStrokeColor(),
              s = t?.getFillColor() ?? t?.getStrokeColor();
            if (i && s && t) return y(i, s, e.getRadius(), t.getRadius());
            {
              let e = i ?? s;
              if (e) return u(e);
            }
          }
        }
        function b(e, t, i) {
          let s = (0, a.HD)(e) ? e : e.value;
          return s === r ? (i ? c({ value: s }) : t ? r : "mid") : "mid" === s ? "mid" : c({ value: s });
        }
        function x(e) {
          return void 0 !== e ? { h: e.h.value, s: e.s.value, l: e.l.value } : void 0;
        }
        function w(e, t, i) {
          let s = { h: { enable: !1, value: e.h }, s: { enable: !1, value: e.s }, l: { enable: !1, value: e.l } };
          return t && (k(s.h, t.h, i), k(s.s, t.s, i), k(s.l, t.l, i)), s;
        }
        function k(e, t, i) {
          (e.enable = t.enable),
            e.enable
              ? ((e.velocity = ((0, s.Gu)(t.speed) / n.tZ) * i),
                (e.decay = 1 - (0, s.Gu)(t.decay)),
                (e.status = "increasing"),
                (e.loops = 0),
                (e.maxLoops = (0, s.Gu)(t.count)),
                (e.time = 0),
                (e.delayTime = (0, s.Gu)(t.delay) * n.X5),
                t.sync || ((e.velocity *= (0, s.sZ)()), (e.value *= (0, s.sZ)())),
                (e.initialValue = e.value),
                (e.offset = (0, s.Cs)(t.offset)))
              : (e.velocity = 0);
        }
        function z(e, t, i, a) {
          if (
            !e ||
            !e.enable ||
            ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) ||
            (e.time || (e.time = 0),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += a.value),
            (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
          )
            return;
          let n = e.offset ? (0, s.vd)(e.offset) : 0,
            r = (e.velocity ?? 0) * a.factor + 3.6 * n,
            o = e.decay ?? 1,
            l = (0, s.KI)(t),
            c = (0, s.Uv)(t);
          i && "increasing" !== e.status
            ? ((e.value -= r), e.value < 0 && (e.loops || (e.loops = 0), e.loops++, (e.status = "increasing")))
            : ((e.value += r),
              e.value > l && (e.loops || (e.loops = 0), e.loops++, i ? (e.status = "decreasing") : (e.value -= l))),
            e.velocity && 1 !== o && (e.velocity *= o),
            (e.value = (0, s.uZ)(e.value, c, l));
        }
        function M(e, t) {
          if (!e) return;
          let { h: i, s, l: a } = e,
            n = { h: { min: 0, max: 360 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } };
          i && z(i, n.h, !1, t), s && z(s, n.s, !0, t), a && z(a, n.l, !0, t);
        }
      },
      9567: (e, t, i) => {
        "use strict";
        i.d(t, {
          BV: () => S,
          CD: () => f,
          Cs: () =>
            function e(t, i) {
              if (t === i || (void 0 === i && (0, a.hj)(t))) return t;
              let s = m(t),
                n = y(t);
              return void 0 !== i ? { min: Math.min(s, i), max: Math.max(n, i) } : e(s, n);
            },
          Gk: () => w,
          Gu: () => v,
          Id: () => x,
          KI: () => y,
          Sp: () => b,
          Uv: () => m,
          _X: () => d,
          bx: () => c,
          hA: () => z,
          lQ: () => k,
          mC: () => M,
          oW: () => g,
          sZ: () => h,
          uZ: () => u,
          vd: () => p,
        });
        var s = i(8698),
          a = i(5236),
          n = i(7385);
        let r = Math.random,
          o = new Map(),
          l = 2 * Math.PI;
        function c(e, t) {
          o.get(e) || o.set(e, t);
        }
        function d(e) {
          return o.get(e) ?? ((e) => e);
        }
        function h() {
          return u(r(), 0, 1 - Number.EPSILON);
        }
        function u(e, t, i) {
          return Math.min(Math.max(e, t), i);
        }
        function f(e, t, i, s) {
          return Math.floor((e * i + t * s) / (i + s));
        }
        function p(e) {
          let t = y(e),
            i = m(e);
          return t === i && (i = 0), h() * (t - i) + i;
        }
        function v(e) {
          return (0, a.hj)(e) ? e : p(e);
        }
        function m(e) {
          return (0, a.hj)(e) ? e : e.min;
        }
        function y(e) {
          return (0, a.hj)(e) ? e : e.max;
        }
        function g(e, t) {
          let i = e.x - t.x,
            s = e.y - t.y;
          return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
        }
        function b(e, t) {
          return g(e, t).distance;
        }
        function x(e) {
          return (e * Math.PI) / 180;
        }
        function w(e, t, i) {
          if ((0, a.hj)(e)) return x(e);
          switch (e) {
            case "top":
              return -(0.5 * Math.PI);
            case "top-right":
              return -(0.25 * Math.PI);
            case "right":
              return 0;
            case "bottom-right":
              return 0.25 * Math.PI;
            case "bottom":
              return 0.5 * Math.PI;
            case "bottom-left":
              return 0.75 * Math.PI;
            case "left":
              return Math.PI;
            case "top-left":
              return -(0.75 * Math.PI);
            case "inside":
              return Math.atan2(i.y - t.y, i.x - t.x);
            case "outside":
              return Math.atan2(t.y - i.y, t.x - i.x);
            default:
              return h() * l;
          }
        }
        function k(e) {
          let t = s.O.origin;
          return (t.length = 1), (t.angle = e), t;
        }
        function z(e, t, i, a) {
          return s.O.create((e.x * (i - a)) / (i + a) + (2 * t.x * a) / (i + a), e.y);
        }
        function M(e) {
          return { x: e.position?.x ?? h() * e.size.width, y: e.position?.y ?? h() * e.size.height };
        }
        function S(e) {
          return e ? (e.endsWith("%") ? parseFloat(e) / n.tZ : parseFloat(e)) : 1;
        }
      },
      6696: (e, t, i) => {
        "use strict";
        i.d(t, { h: () => a, x: () => n });
        var s = i(5535);
        function a(e, ...t) {
          for (let i of t) e.load(i);
        }
        function n(e, t, ...i) {
          let r = new s.B(e, t);
          return a(r, ...i), r;
        }
      },
      5236: (e, t, i) => {
        "use strict";
        i.d(t, {
          Ac: () => m,
          Cr: () => I,
          HD: () => O,
          HY: () => d,
          KH: () => M,
          Kn: () => R,
          Kr: () => c,
          M_: () => y,
          NM: () => h,
          V0: () => j,
          XD: () => b,
          ZB: () =>
            function e(t, ...i) {
              for (let s of i) {
                if (null == s) continue;
                if (!R(s)) {
                  t = s;
                  continue;
                }
                let i = Array.isArray(s);
                for (let a in (i && (R(t) || !t || !Array.isArray(t))
                  ? (t = [])
                  : !i && (R(t) || !t || Array.isArray(t)) && (t = {}),
                s)) {
                  if ("__proto__" === a) continue;
                  let i = s[a],
                    n = t;
                  n[a] = R(i) && Array.isArray(i) ? i.map((t) => e(n[a], t)) : e(n[a], i);
                }
              }
              return t;
            },
          bt: () => C,
          c8: () => v,
          dB: () => f,
          dp: () => z,
          gy: () => w,
          hj: () => D,
          iC: () => x,
          jl: () => o,
          jn: () => _,
          kJ: () => E,
          kR: () => k,
          mx: () => p,
          wA: () => S,
          wm: () => g,
          yf: () => u,
        });
        var s = i(9567),
          a = i(7385),
          n = i(8698);
        let r = {
          debug: console.debug,
          error: console.error,
          info: console.info,
          log: console.log,
          verbose: console.log,
          warning: console.warn,
        };
        function o() {
          return r;
        }
        function l(e) {
          let t = { bounced: !1 },
            { pSide: i, pOtherSide: s, rectSide: a, rectOtherSide: n, velocity: r, factor: o } = e;
          return (
            s.min < n.min ||
              s.min > n.max ||
              s.max < n.min ||
              s.max > n.max ||
              (((i.max >= a.min && i.max <= (a.max + a.min) * 0.5 && r > 0) ||
                (i.min <= a.max && i.min > (a.max + a.min) * 0.5 && r < 0)) &&
                ((t.velocity = -(r * o)), (t.bounced = !0))),
            t
          );
        }
        function c() {
          return !0;
        }
        function d(e) {}
        function h(e) {}
        function u(e) {}
        function f(e, t) {
          return e === t || (E(t) && t.indexOf(e) > -1);
        }
        async function p(e, t) {
          try {
            await document.fonts.load(`${t ?? "400"} 36px '${e ?? "Verdana"}'`);
          } catch {}
        }
        function v(e, t, i = !0) {
          return e[void 0 !== t && i ? t % e.length : Math.floor((0, s.sZ)() * e.length)];
        }
        function m(e, t, i, s, a) {
          var n;
          let r;
          return (
            (n = y(e, s ?? 0)),
            (r = !0),
            (a && "bottom" !== a) || (r = n.top < t.height + i.x),
            r && (!a || "left" === a) && (r = n.right > i.x),
            r && (!a || "right" === a) && (r = n.left < t.width + i.y),
            r && (!a || "top" === a) && (r = n.bottom > i.y),
            r
          );
        }
        function y(e, t) {
          return { bottom: e.y + t, left: e.x - t, right: e.x + t, top: e.y - t };
        }
        function g(e, t) {
          return !!P(t, (t) => t.enable && f(e, t.mode));
        }
        function b(e, t, i) {
          M(t, (t) => {
            let s = t.mode;
            t.enable &&
              f(e, s) &&
              M(t.selectors, (e) => {
                i(e, t);
              });
          });
        }
        function x(e, t) {
          if (t && e)
            return P(e, (e) =>
              (function (e, t) {
                let i = M(t, (t) => e.matches(t));
                return E(i) ? i.some((e) => e) : i;
              })(t, e.selectors)
            );
        }
        function w(e) {
          return {
            position: e.getPosition(),
            radius: e.getRadius(),
            mass: e.getMass(),
            velocity: e.velocity,
            factor: n.O.create(
              (0, s.Gu)(e.options.bounce.horizontal.value),
              (0, s.Gu)(e.options.bounce.vertical.value)
            ),
          };
        }
        function k(e, t) {
          let { x: i, y: a } = e.velocity.sub(t.velocity),
            [n, r] = [e.position, t.position],
            { dx: o, dy: l } = (0, s.oW)(r, n);
          if (i * o + a * l < 0) return;
          let c = -Math.atan2(l, o),
            d = e.mass,
            h = t.mass,
            u = e.velocity.rotate(c),
            f = t.velocity.rotate(c),
            p = (0, s.hA)(u, f, d, h),
            v = (0, s.hA)(f, u, d, h),
            m = p.rotate(-c),
            y = v.rotate(-c);
          (e.velocity.x = m.x * e.factor.x),
            (e.velocity.y = m.y * e.factor.y),
            (t.velocity.x = y.x * t.factor.x),
            (t.velocity.y = y.y * t.factor.y);
        }
        function z(e, t) {
          let i = y(e.getPosition(), e.getRadius()),
            a = e.options.bounce,
            n = l({
              pSide: { min: i.left, max: i.right },
              pOtherSide: { min: i.top, max: i.bottom },
              rectSide: { min: t.left, max: t.right },
              rectOtherSide: { min: t.top, max: t.bottom },
              velocity: e.velocity.x,
              factor: (0, s.Gu)(a.horizontal.value),
            });
          n.bounced &&
            (void 0 !== n.velocity && (e.velocity.x = n.velocity),
            void 0 !== n.position && (e.position.x = n.position));
          let r = l({
            pSide: { min: i.top, max: i.bottom },
            pOtherSide: { min: i.left, max: i.right },
            rectSide: { min: t.top, max: t.bottom },
            rectOtherSide: { min: t.left, max: t.right },
            velocity: e.velocity.y,
            factor: (0, s.Gu)(a.vertical.value),
          });
          r.bounced &&
            (void 0 !== r.velocity && (e.velocity.y = r.velocity),
            void 0 !== r.position && (e.position.y = r.position));
        }
        function M(e, t) {
          return E(e) ? e.map((e, i) => t(e, i)) : t(e, 0);
        }
        function S(e, t, i) {
          return E(e) ? v(e, t, i) : e;
        }
        function P(e, t) {
          return E(e) ? e.find((e, i) => t(e, i)) : t(e, 0) ? e : void 0;
        }
        function j(e, t) {
          let i = e.value,
            n = e.animation,
            r = {
              delayTime: (0, s.Gu)(n.delay) * a.X5,
              enable: n.enable,
              value: (0, s.Gu)(e.value) * t,
              max: (0, s.KI)(i) * t,
              min: (0, s.Uv)(i) * t,
              loops: 0,
              maxLoops: (0, s.Gu)(n.count),
              time: 0,
            };
          if (n.enable) {
            switch (((r.decay = 1 - (0, s.Gu)(n.decay)), n.mode)) {
              case "increase":
                r.status = "increasing";
                break;
              case "decrease":
                r.status = "decreasing";
                break;
              case "random":
                r.status = (0, s.sZ)() >= a.vq ? "increasing" : "decreasing";
            }
            let e = "auto" === n.mode;
            switch (n.startValue) {
              case "min":
                (r.value = r.min), e && (r.status = "increasing");
                break;
              case "max":
                (r.value = r.max), e && (r.status = "decreasing");
                break;
              default:
                (r.value = (0, s.vd)(r)), e && (r.status = (0, s.sZ)() >= a.vq ? "increasing" : "decreasing");
            }
          }
          return (r.initialValue = r.value), r;
        }
        function C(e, t) {
          return (function (e, t) {
            if ("percent" !== e.mode) {
              let { mode: t, ...i } = e;
              return i;
            }
            return "x" in e
              ? { x: (e.x / a.tZ) * t.width, y: (e.y / a.tZ) * t.height }
              : { width: (e.width / a.tZ) * t.width, height: (e.height / a.tZ) * t.height };
          })(e, t);
        }
        function _(e) {
          return "boolean" == typeof e;
        }
        function O(e) {
          return "string" == typeof e;
        }
        function D(e) {
          return "number" == typeof e;
        }
        function R(e) {
          return "object" == typeof e && null !== e;
        }
        function E(e) {
          return Array.isArray(e);
        }
        function I(e, t, i, a, n) {
          if (e.destroyed || !t || !t.enable || ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0))) return;
          let r = (t.velocity ?? 0) * n.factor,
            o = t.min,
            l = t.max,
            c = t.decay ?? 1;
          if (
            (t.time || (t.time = 0),
            (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += n.value),
            !((t.delayTime ?? 0) > 0) || !(t.time < (t.delayTime ?? 0)))
          ) {
            switch (t.status) {
              case "increasing":
                t.value >= l
                  ? (i ? (t.status = "decreasing") : (t.value -= l), t.loops || (t.loops = 0), t.loops++)
                  : (t.value += r);
                break;
              case "decreasing":
                t.value <= o
                  ? (i ? (t.status = "increasing") : (t.value += l), t.loops || (t.loops = 0), t.loops++)
                  : (t.value -= r);
            }
            t.velocity && 1 !== c && (t.velocity *= c),
              (function (e, t, i, s, a) {
                switch (t) {
                  case "max":
                    i >= a && e.destroy();
                    break;
                  case "min":
                    i <= s && e.destroy();
                }
              })(e, a, t.value, o, l),
              e.destroyed || (t.value = (0, s.uZ)(t.value, o, l));
          }
        }
      },
      1146: (e, t, i) => {
        "use strict";
        i.d(t, {
          Cd: () => f.C,
          L8: () => p,
          Oz: () => g.O,
          $S: () => v,
          Ae: () => m.A,
          SW: () => b.SW,
          OW: () => y.O,
          bx: () => r.bx,
          M_: () => a.M_,
          kR: () => a.kR,
          gy: () => a.gy,
          uZ: () => r.uZ,
          oc: () => d.oc,
          Id: () => r.Id,
          iC: () => a.iC,
          XD: () => a.XD,
          pS: () => x.pS,
          gK: () => s.gK,
          KH: () => a.KH,
          Sp: () => r.Sp,
          oW: () => r.oW,
          _X: () => r._X,
          bS: () => d.bS,
          BE: () => d.BE,
          Dt: () => d.Dt,
          jl: () => a.jl,
          sZ: () => r.sZ,
          KI: () => r.KI,
          Gu: () => r.Gu,
          vz: () => d.vz,
          iz: () => d.iz,
          V0: () => a.V0,
          kJ: () => a.kJ,
          wm: () => a.wm,
          dB: () => a.dB,
          Kn: () => a.Kn,
          Ac: () => a.Ac,
          Kr: () => a.Kr,
          c8: () => a.c8,
          wA: () => a.wA,
          mx: () => a.mx,
          X5: () => s.X5,
          aM: () => s.aM,
          Wt: () => s.Wt,
          tZ: () => s.tZ,
          vd: () => r.vd,
          lN: () => d.lN,
          tX: () => d.tX,
          dp: () => a.dp,
          lC: () => d.lC,
          Cs: () => r.Cs,
          S6: () => w,
          Cr: () => a.Cr,
          PB: () => d.PB,
        });
        var s = i(7385),
          a = i(5236);
        class n {
          constructor() {
            this._listeners = new Map();
          }
          addEventListener(e, t) {
            this.removeEventListener(e, t);
            let i = this._listeners.get(e);
            i || ((i = []), this._listeners.set(e, i)), i.push(t);
          }
          dispatchEvent(e, t) {
            let i = this._listeners.get(e);
            i?.forEach((e) => e(t));
          }
          hasEventListener(e) {
            return !!this._listeners.get(e);
          }
          removeAllEventListeners(e) {
            e ? this._listeners.delete(e) : (this._listeners = new Map());
          }
          removeEventListener(e, t) {
            let i = this._listeners.get(e);
            if (!i) return;
            let s = i.length,
              a = i.indexOf(t);
            a < 0 || (1 === s ? this._listeners.delete(e) : i.splice(a, 1));
          }
        }
        var r = i(9567);
        async function o(e, t, i, s = !1) {
          let a = t.get(e);
          return (!a || s) && ((a = await Promise.all([...i.values()].map((t) => t(e)))), t.set(e, a)), a;
        }
        async function l(e) {
          let t = (0, a.wA)(e.url, e.index);
          if (!t) return e.fallback;
          let i = await fetch(t);
          return i.ok
            ? await i.json()
            : ((0, a.jl)().error(`${s.gK} ${i.status} while retrieving config file`), e.fallback);
        }
        class c {
          constructor() {
            (this._configs = new Map()),
              (this._domArray = []),
              (this._eventDispatcher = new n()),
              (this._initialized = !1),
              (this.plugins = []),
              (this._initializers = { interactors: new Map(), movers: new Map(), updaters: new Map() }),
              (this.interactors = new Map()),
              (this.movers = new Map()),
              (this.updaters = new Map()),
              (this.presets = new Map()),
              (this.effectDrawers = new Map()),
              (this.shapeDrawers = new Map()),
              (this.pathGenerators = new Map());
          }
          get configs() {
            let e = {};
            for (let [t, i] of this._configs) e[t] = i;
            return e;
          }
          get version() {
            return "3.2.1";
          }
          addConfig(e) {
            let t = e.key ?? e.name ?? "default";
            this._configs.set(t, e),
              this._eventDispatcher.dispatchEvent("configAdded", { data: { name: t, config: e } });
          }
          async addEffect(e, t, i = !0) {
            (0, a.KH)(e, (e) => {
              this.getEffectDrawer(e) || this.effectDrawers.set(e, t);
            }),
              await this.refresh(i);
          }
          addEventListener(e, t) {
            this._eventDispatcher.addEventListener(e, t);
          }
          async addInteractor(e, t, i = !0) {
            this._initializers.interactors.set(e, t), await this.refresh(i);
          }
          async addMover(e, t, i = !0) {
            this._initializers.movers.set(e, t), await this.refresh(i);
          }
          async addParticleUpdater(e, t, i = !0) {
            this._initializers.updaters.set(e, t), await this.refresh(i);
          }
          async addPathGenerator(e, t, i = !0) {
            this.getPathGenerator(e) || this.pathGenerators.set(e, t), await this.refresh(i);
          }
          async addPlugin(e, t = !0) {
            this.getPlugin(e.id) || this.plugins.push(e), await this.refresh(t);
          }
          async addPreset(e, t, i = !1, s = !0) {
            (i || !this.getPreset(e)) && this.presets.set(e, t), await this.refresh(s);
          }
          async addShape(e, t, i = !0) {
            (0, a.KH)(e, (e) => {
              this.getShapeDrawer(e) || this.shapeDrawers.set(e, t);
            }),
              await this.refresh(i);
          }
          clearPlugins(e) {
            this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e);
          }
          dispatchEvent(e, t) {
            this._eventDispatcher.dispatchEvent(e, t);
          }
          dom() {
            return this._domArray;
          }
          domItem(e) {
            let t = this.dom(),
              i = t[e];
            if (!i || i.destroyed) {
              t.splice(e, 1);
              return;
            }
            return i;
          }
          async getAvailablePlugins(e) {
            let t = new Map();
            for (let i of this.plugins) i.needsPlugin(e.actualOptions) && t.set(i.id, await i.getPlugin(e));
            return t;
          }
          getEffectDrawer(e) {
            return this.effectDrawers.get(e);
          }
          async getInteractors(e, t = !1) {
            return await o(e, this.interactors, this._initializers.interactors, t);
          }
          async getMovers(e, t = !1) {
            return await o(e, this.movers, this._initializers.movers, t);
          }
          getPathGenerator(e) {
            return this.pathGenerators.get(e);
          }
          getPlugin(e) {
            return this.plugins.find((t) => t.id === e);
          }
          getPreset(e) {
            return this.presets.get(e);
          }
          getShapeDrawer(e) {
            return this.shapeDrawers.get(e);
          }
          getSupportedEffects() {
            return this.effectDrawers.keys();
          }
          getSupportedShapes() {
            return this.shapeDrawers.keys();
          }
          async getUpdaters(e, t = !1) {
            return await o(e, this.updaters, this._initializers.updaters, t);
          }
          init() {
            this._initialized || (this._initialized = !0);
          }
          async load(e) {
            let t;
            let n = e.id ?? e.element?.id ?? `tsparticles${Math.floor(1e4 * (0, r.sZ)())}`,
              { index: o, url: c } = e,
              d = c ? await l({ fallback: e.options, url: c, index: o }) : e.options,
              h = e.element ?? document.getElementById(n);
            h || (((h = document.createElement("div")).id = n), document.body.append(h));
            let u = (0, a.wA)(d, o),
              f = this.dom(),
              p = f.findIndex((e) => e.id.description === n);
            if (p >= 0) {
              let e = this.domItem(p);
              e && !e.destroyed && (e.destroy(), f.splice(p, 1));
            }
            if ("canvas" === h.tagName.toLowerCase()) (t = h).dataset[s.YU] = "false";
            else {
              let e = h.getElementsByTagName("canvas");
              e.length
                ? ((t = e[0]).dataset[s.YU] = "false")
                : (((t = document.createElement("canvas")).dataset[s.YU] = "true"), h.appendChild(t));
            }
            t.style.width || (t.style.width = "100%"), t.style.height || (t.style.height = "100%");
            let { Container: v } = await i.e(9470).then(i.bind(i, 9470)),
              m = new v(this, n, u);
            return p >= 0 ? f.splice(p, 0, m) : f.push(m), m.canvas.loadCanvas(t), await m.start(), m;
          }
          loadOptions(e, t) {
            for (let i of this.plugins) i.loadOptions(e, t);
          }
          loadParticlesOptions(e, t, ...i) {
            let s = this.updaters.get(e);
            if (s) for (let e of s) e.loadOptions?.(t, ...i);
          }
          async refresh(e = !0) {
            e && (await Promise.all(this.dom().map((e) => e.refresh())));
          }
          removeEventListener(e, t) {
            this._eventDispatcher.removeEventListener(e, t);
          }
          setOnClickHandler(e) {
            let t = this.dom();
            if (!t.length) throw Error(`${s.gK} can only set click handlers after calling tsParticles.load()`);
            for (let i of t) i.addClickHandler(e);
          }
        }
        var d = i(827);
        class h {
          constructor() {
            (this.key = "hsl"), (this.stringPrefix = "hsl");
          }
          handleColor(e) {
            let t = e.value.hsl ?? e.value;
            if (void 0 !== t.h && void 0 !== t.s && void 0 !== t.l) return (0, d.ve)(t);
          }
          handleRangeColor(e) {
            let t = e.value.hsl ?? e.value;
            if (void 0 !== t.h && void 0 !== t.l)
              return (0, d.ve)({ h: (0, r.Gu)(t.h), l: (0, r.Gu)(t.l), s: (0, r.Gu)(t.s) });
          }
          parseString(e) {
            if (!e.startsWith("hsl")) return;
            let t = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
            return t
              ? (0, d.Y6)({
                  a: t.length > 4 ? (0, r.BV)(t[5]) : 1,
                  h: parseInt(t[1], 10),
                  l: parseInt(t[3], 10),
                  s: parseInt(t[2], 10),
                })
              : void 0;
          }
        }
        class u {
          constructor() {
            (this.key = "rgb"), (this.stringPrefix = "rgb");
          }
          handleColor(e) {
            let t = e.value.rgb ?? e.value;
            if (void 0 !== t.r) return t;
          }
          handleRangeColor(e) {
            let t = e.value.rgb ?? e.value;
            if (void 0 !== t.r) return { r: (0, r.Gu)(t.r), g: (0, r.Gu)(t.g), b: (0, r.Gu)(t.b) };
          }
          parseString(e) {
            if (!e.startsWith(this.stringPrefix)) return;
            let t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);
            return t
              ? {
                  a: t.length > 4 ? (0, r.BV)(t[5]) : 1,
                  b: parseInt(t[3], 10),
                  g: parseInt(t[2], 10),
                  r: parseInt(t[1], 10),
                }
              : void 0;
          }
        }
        var f = i(8727);
        class p {
          constructor(e) {
            (this.type = "external"), (this.container = e);
          }
        }
        class v {
          constructor(e) {
            (this.type = "particles"), (this.container = e);
          }
        }
        var m = i(200),
          y = i(8698);
        i(6513), i(4871), i(4120), i(1035), i(7361), i(9242), i(7965), i(4182), i(7303), i(4074), i(8745), i(3011);
        var g = i(2953);
        i(1441),
          i(7622),
          i(8037),
          i(5535),
          i(3858),
          i(8602),
          i(1018),
          i(1968),
          i(1516),
          i(5250),
          i(9279),
          i(3481),
          i(3999),
          i(9595),
          i(7079),
          i(8100),
          i(6802),
          i(3701),
          i(9944),
          i(6955),
          i(720);
        var b = i(787),
          x = i(107);
        i(6696);
        let w = (function () {
          let e = new u(),
            t = new h();
          (0, d.VI)(e), (0, d.VI)(t);
          let i = new c();
          return i.init(), i;
        })();
        (0, a.Kr)() || (window.tsParticles = w);
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    s = t.X(0, [1638, 8111, 7593], () => i(1647));
  module.exports = s;
})();
