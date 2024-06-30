(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5879],
  {
    7339: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 6599));
    },
    6599: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t(3827),
        s = t(703),
        a = t(8481),
        o = t(8344),
        r = t(6806),
        l = t(1580),
        d = t(8112);
      i.default = () =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.default, {}),
            (0, n.jsxs)("div", {
              className: "flex flex-col justify-center h-lvh",
              children: [
                (0, n.jsx)(l.default, {}),
                (0, n.jsxs)("h1", {
                  className: "text-2xl leading-tight text-center md:text-4xl md:mb-5",
                  children: [
                    "Some comments",
                    (0, n.jsx)("span", { className: "block font-bold text-secondary", children: " of our clients" }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "flex items-center justify-center",
                  children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(o.tq, {
                      breakpoints: { 320: { slidesPerView: 1, spaceBetween: 15 } },
                      freeMode: !0,
                      pagination: { clickable: !0 },
                      modules: [a.tl],
                      className: "h-[380px] md:h-[300px] w-[270px] md:w-[550px]",
                      children: r.fk.map((e) => {
                        let { id: i, name: t, description: a, imageUrl: r } = e;
                        return (0, n.jsxs)(
                          o.o5,
                          {
                            children: [
                              (0, n.jsx)(s.default, {
                                src: r,
                                alt: t,
                                width: "100",
                                height: "100",
                                className: "mx-auto rounded-full",
                              }),
                              (0, n.jsx)("h4", { className: "text-center", children: t }),
                              (0, n.jsx)("div", { className: "mt-5 text-center", children: a }),
                            ],
                          },
                          i
                        );
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
    },
    1580: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t(3827),
        s = t(703);
      i.default = () =>
        (0, n.jsx)("div", {
          className: "bottom-0 right-0 hidden md:inline-block md:absolute",
          children: (0, n.jsx)(s.default, {
            src: "/circles.png",
            width: "300",
            height: "300",
            className: "w-full h-full ",
            alt: "Particles ",
          }),
        });
    },
    8112: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t(3827),
        s = t(8647),
        a = t(1348),
        o = t(1840);
      i.default = () =>
        (0, n.jsx)(a.M, {
          mode: "wait",
          children: (0, n.jsx)("div", {
            children: (0, n.jsx)(o.E.div, {
              className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
              variants: s.ap,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
            }),
          }),
        });
    },
    6806: function (e, i, t) {
      "use strict";
      t.d(i, {
        Ao: function () {
          return x;
        },
        Bz: function () {
          return v;
        },
        fk: function () {
          return j;
        },
        nT: function () {
          return y;
        },
        qZ: function () {
          return b;
        },
        zP: function () {
          return k;
        },
      });
      var n = t(3827),
        s = t(684),
        a = t(5582),
        o = t(4715),
        r = t(5005),
        l = t(2835),
        d = t(3300),
        c = t(8914),
        u = t(9805),
        h = t(2158),
        m = t(7859),
        f = t(1652),
        p = t(9392),
        g = t(1318);
      let x = [
          { id: 1, logo: (0, n.jsx)(s.Z, { size: 30, strokeWidth: 1 }), src: "mailto:limk69966@gmail.com" },
          { id: 2, logo: (0, n.jsx)(a.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/maxKevin" },
          { id: 3, logo: (0, n.jsx)(o.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
        ],
        b = [
          { id: 1, title: "Home", icon: (0, n.jsx)(r.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
          {
            id: 2,
            title: "User",
            icon: (0, n.jsx)(l.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
            link: "/about-me",
          },
          {
            id: 3,
            title: "Book",
            icon: (0, n.jsx)(d.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
            link: "/services",
          },
          {
            id: 4,
            title: "Target",
            icon: (0, n.jsx)(c.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
            link: "/portfolio",
          },
          {
            id: 6,
            title: "Contact",
            icon: (0, n.jsx)(u.Z, { size: 25, color: "#fff", strokeWidth: 1 }),
            link: "/contact",
          },
        ],
        k = [
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
            description: " Designed and developed front-end for 20+ websites, using React, Next.js, and Handlebars.js.",
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
        v = [
          {
            icon: (0, n.jsx)(h.Z, {}),
            title: "Full-Stack Web",
            description:
              "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
          },
          {
            icon: (0, n.jsx)(m.Z, {}),
            title: "Mobile App",
            description:
              "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
          },
          {
            icon: (0, n.jsx)(f.Z, {}),
            title: "Blockchain",
            description:
              "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
          },
          {
            icon: (0, n.jsx)(p.Z, {}),
            title: "Solutions",
            description:
              "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
          },
          {
            icon: (0, n.jsx)(g.Z, {}),
            title: "SEO",
            description: "Optimizing your online presence through advanced SEO strategies.",
          },
        ],
        j = [
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
    8647: function (e, i, t) {
      "use strict";
      t.d(i, {
        Ji: function () {
          return s;
        },
        ap: function () {
          return n;
        },
      });
      let n = {
          initial: { x: "100%", width: "100%" },
          animate: { x: "0%", width: "0%" },
          exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
        },
        s = (e) => ({
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
    e.O(0, [7958, 8414, 4492, 2971, 8069, 1744], function () {
      return e((e.s = 7339));
    }),
      (_N_E = e.O());
  },
]);
