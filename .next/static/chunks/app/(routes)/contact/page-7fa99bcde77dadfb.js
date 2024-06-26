(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [728],
  {
    3862: function (e, a, s) {
      Promise.resolve().then(s.bind(s, 8063));
    },
    8063: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(3827),
        l = s(2457),
        i = s(5904),
        n = s(684),
        r = s(5582),
        m = s(4715),
        c = s(1580),
        o = s(8112),
        d = s(4090),
        x = s(8212);
      a.default = () => {
        let [e, a] = (0, d.useState)({ name: "", email: "", message: "" }),
          [s, u] = (0, x.cI)("mbjneqbb"),
          h = (s) => {
            a({ ...e, [s.target.name]: s.target.value });
          },
          f = async (e) => {
            e.preventDefault(), await u(e), a({ name: "", email: "", message: "" });
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.default, {}),
            (0, t.jsx)(c.default, {}),
            (0, t.jsxs)("div", {
              className: "flex flex-col justify-center h-lvh",
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("title", { children: "Contact - Your Name" }),
                    (0, t.jsx)("meta", { name: "description", content: "Contact page for Your Name's portfolio" }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "container mx-auto mt-8 p-4 ",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-wrap",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "w-full md:w-1/2 px-2 md:px-4 mb-4",
                        children: [
                          (0, t.jsx)("h1", { className: "text-3xl font-bold mb-4", children: "Contact Me" }),
                          (0, t.jsx)("p", {
                            className: "mb-4",
                            children: "Feel free to reach out to me with any inquiries or collaboration opportunities!",
                          }),
                          (0, t.jsxs)("form", {
                            className: "max-w-md",
                            onSubmit: f,
                            children: [
                              (0, t.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                  (0, t.jsx)("label", {
                                    htmlFor: "name",
                                    className: "block text-gray-400",
                                    children: "Name",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    className:
                                      "form-input mt-1 block w-full bg-black focus:border-transparent outline-none p-3",
                                    value: e.name,
                                    onChange: h,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                  (0, t.jsx)("label", {
                                    htmlFor: "email",
                                    className: "block text-gray-400",
                                    children: "Email",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    className:
                                      "form-input mt-1 block w-full bg-black focus:border-transparent outline-none p-3",
                                    value: e.email,
                                    onChange: h,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                  (0, t.jsx)("label", {
                                    htmlFor: "message",
                                    className: "block text-gray-400",
                                    children: "Message",
                                  }),
                                  (0, t.jsx)("textarea", {
                                    id: "message",
                                    name: "message",
                                    rows: 4,
                                    className:
                                      "form-textarea mt-1 block w-full bg-black focus:border-transparent outline-none p-3",
                                    value: e.message,
                                    onChange: h,
                                  }),
                                ],
                              }),
                              (0, t.jsx)("button", {
                                type: "submit",
                                className: "bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded",
                                children: "Send Message",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "w-full md:w-1/2 px-2 md:px-4 mb-4",
                        children: [
                          (0, t.jsx)("h1", { className: "text-3xl font-bold mb-4", children: "Contact Details" }),
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)("p", { className: "mb-4", children: "You can also find me at:" }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [
                              (0, t.jsx)(l.Z, { className: "text-gray-400 mr-4", size: 24 }),
                              (0, t.jsx)("p", { className: "text-gray-400", children: "Waterway Sundew, Singapore" }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [
                              (0, t.jsx)(i.Z, { className: "text-gray-400 mr-4", size: 24 }),
                              (0, t.jsx)("p", { className: "text-gray-400", children: "507-440-3407" }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [
                              (0, t.jsx)(n.Z, { className: "text-gray-400 mr-4", size: 24 }),
                              (0, t.jsx)("a", {
                                href: "mailto:limk69966@gmail.com",
                                className: "text-gray-400",
                                children: "limk69966@gmail.com",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [
                              (0, t.jsx)(r.Z, { className: "text-gray-400 mr-4", size: 24 }),
                              (0, t.jsx)("a", {
                                href: "https://github.com/MaxKevin225",
                                className: "text-gray-400",
                                children: "github.com/MaxKevin225",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              (0, t.jsx)(m.Z, { className: "text-gray-400 mr-4", size: 24 }),
                              (0, t.jsx)("a", {
                                href: "/myresume.pdf",
                                download: !0,
                                className: "text-gray-400",
                                children: "Download Resume",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    1580: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(3827),
        l = s(703);
      a.default = () =>
        (0, t.jsx)("div", {
          className: "bottom-0 right-0 hidden md:inline-block md:absolute",
          children: (0, t.jsx)(l.default, {
            src: "/circles.png",
            width: "300",
            height: "300",
            className: "w-full h-full ",
            alt: "Particles ",
          }),
        });
    },
    8112: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(3827),
        l = s(8647),
        i = s(1348),
        n = s(1840);
      a.default = () =>
        (0, t.jsx)(i.M, {
          mode: "wait",
          children: (0, t.jsx)("div", {
            children: (0, t.jsx)(n.E.div, {
              className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
              variants: l.ap,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
            }),
          }),
        });
    },
    8647: function (e, a, s) {
      "use strict";
      s.d(a, {
        Ji: function () {
          return l;
        },
        ap: function () {
          return t;
        },
      });
      let t = {
          initial: { x: "100%", width: "100%" },
          animate: { x: "0%", width: "0%" },
          exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
        },
        l = (e) => ({
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
  },
  function (e) {
    e.O(0, [7958, 8414, 5722, 2971, 8069, 1744], function () {
      return e((e.s = 3862));
    }),
      (_N_E = e.O());
  },
]);
