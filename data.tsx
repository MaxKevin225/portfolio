import { BookText, CodeSquare, HomeIcon, UserRound, MailIcon, Linkedin,GithubIcon, Twitter, DownloadIcon, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, FullscreenIcon, LockIcon, PhoneIcon, ContactIcon, ComputerIcon, AppleIcon, ArrowDownNarrowWideIcon, AppWindowIcon } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <MailIcon size={30} strokeWidth={1} />,
        src: "mailto:limk69966@gmail.com",
    },
    {
        id: 2,
        logo: <GithubIcon size={30} strokeWidth={1} />,
        src: "https://github.com/greensoft0608",
    },
    {
        id: 3,
        logo: <DownloadIcon size={30} strokeWidth={1} />,
        src: "/myresume.pdf",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Clients",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
    {
        id: 6,
        title: "Contact",
        icon: <ContactIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Developer",
        subtitle: "RisingMax, New York City",
        description: "Worked closely with designers and other engineers to build Impactful And High-Visibility Wristband Website (https://www.wristbandbuddy.com/) using Figma, React Native, React JS, Node.js and MongoDB.",
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
        description: "Successfully migrated legacy applications to modern frameworks such as Laravel and Angular, resulting in improved performance and scalability.",
        date: "Feb 2020",
    },
    {
        id: 4,
        title: "Education",
        subtitle: "Nanyang Technological University",
        description: "Master's Degree in Computer Science, Nanyang Technological University",
        date: "May 2017",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "YEARS OF EXPERIENCE",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 30,
        text: "SATISFIED CUSTOMERS",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 30,
        text: "COMPLETED PROJECTS",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "WINNING AWARDS",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <ComputerIcon />,
        title: "Full-Stack Web",
        description: "Crafting dynamic web apps with React, Node.js, and databases like MySQL and MongoDB for seamless user experiences.",
    },
    {
        icon: <AppleIcon />,
        title: "Mobile App",
        description: "Building cross-platform mobile apps using React Native, ensuring native-like performance and backend synchronization.",
    },
    {
        icon: <LockIcon />,
        title: "Blockchain",
        description: "Integrating Ethereum and Solidity for decentralized solutions like smart contracts, enhancing security and transparency.",
    },
    {
        icon: <Book />,
        title: "Solutions",
        description: "Tailored development addressing unique project needs, including custom features, integration, and scalable design.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimizing your online presence through advanced SEO strategies.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Agil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "E-commerce Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "React Native App",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Saloon Beauty App",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Rio DeFi Blockchain",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "KickICO Blockchain",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "ONEDEX Blockchain",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
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
        name: "María Garcia",
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