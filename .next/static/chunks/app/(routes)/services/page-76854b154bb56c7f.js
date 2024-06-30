(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2043],
  {
    1625: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 1580)),
        Promise.resolve().then(t.bind(t, 1779)),
        Promise.resolve().then(t.bind(t, 8112));
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
    1779: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t(3827),
        s = t(8344),
        o = t(8481),
        r = t(6806);
      i.default = () =>
        (0, n.jsx)(s.tq, {
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
          },
          freeMode: !0,
          pagination: { clickable: !0 },
          modules: [o.tl],
          className: "h-[280px] md:h-[340px] w-[270px] md:w-[550px]",
          children: r.Bz.map((e, i) =>
            (0, n.jsx)(
              s.o5,
              {
                children: (0, n.jsxs)("div", {
                  className:
                    "flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2",
                  children: [
                    (0, n.jsx)("div", { className: "mb-4 text-4xl text-secondary", children: e.icon }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h3", { className: "mb-4 text-lg", children: e.title }),
                        (0, n.jsx)("p", { className: "text-sm", children: e.description }),
                      ],
                    }),
                  ],
                }),
              },
              i
            )
          ),
        });
    },
    8112: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t(3827),
        s = t(8647),
        o = t(1348),
        r = t(1840);
      i.default = () =>
        (0, n.jsx)(o.M, {
          mode: "wait",
          children: (0, n.jsx)("div", {
            children: (0, n.jsx)(r.E.div, {
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
          return w;
        },
        nT: function () {
          return k;
        },
        qZ: function () {
          return b;
        },
        zP: function () {
          return y;
        },
      });
      var n = t(3827),
        s = t(684),
        o = t(5582),
        r = t(4715),
        a = t(5005),
        l = t(2835),
        d = t(3300),
        c = t(8914),
        u = t(9805),
        h = t(2158),
        p = t(7859),
        m = t(1652),
        g = t(9392),
        f = t(1318);
      let x = [
          { id: 1, logo: (0, n.jsx)(s.Z, { size: 30, strokeWidth: 1 }), src: "mailto:limk69966@gmail.com" },
          { id: 2, logo: (0, n.jsx)(o.Z, { size: 30, strokeWidth: 1 }), src: "https://github.com/MaxKevin225" },
          { id: 3, logo: (0, n.jsx)(r.Z, { size: 30, strokeWidth: 1 }), src: "/myresume.pdf" },
        ],
        b = [
          { id: 1, title: "Home", icon: (0, n.jsx)(a.Z, { size: 25, color: "#fff", strokeWidth: 1 }), link: "/" },
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
        k = [
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
            icon: (0, n.jsx)(p.Z, {}),
            title: "Mobile App",
            description:
              "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
          },
          {
            icon: (0, n.jsx)(m.Z, {}),
            title: "Blockchain",
            description:
              "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
          },
          {
            icon: (0, n.jsx)(g.Z, {}),
            title: "Solutions",
            description:
              "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
          },
          {
            icon: (0, n.jsx)(f.Z, {}),
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
      return e((e.s = 1625));
    }),
      (_N_E = e.O());
  },
]);
