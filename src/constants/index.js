import {
    backend,
    creator,
    css,
    cvDuncan,
    docker,
    figma,
    fitnessAdmin,
    git,
    gym,
    html,
    javascript,
    linux,
    me,
    meta,
    mobile,
    mongodb,
    myCV,
    personalWebsite,
    php,
    publishArticle,
    reactjs,
    readBook,
    shopify,
    starbucks,
    symfony,
    tailwind,
    tesla,
    tinDog,
    vue,
    web
} from "../assets";

export const myGithub = "https://github.com/Abduqayum77";
export const CVDuncan = cvDuncan;
export const MyCV = myCV;

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "cv",
        title: "Download CV",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Vue Developer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Symfony",
        icon: symfony,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Fitness Admin Panel",
        description:
            "The Fitness Admin Panel is a comprehensive web-based solution designed for managing and overseeing all aspects of a fitness business.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "javaScript",
                color: "orange-text-gradient",
            },
        ],
        image: fitnessAdmin,
        source_code_link: "https://github.com/Abduqayum77/fitness-admin",
        app_link: "https://fitnes-admin.netlify.app/",
    },
    {
        name: "Read Book",
        description:
            "Web application that enables users to read books, upload their own books, change them and delete according to their preferences",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "vue JS",
                color: "green-text-gradient",
            },
            {
                name: "mongoDB",
                color: "pink-text-gradient",
            },
            {
                name: "javaScript",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "violet-text-gradient",
            },
        ],
        image: readBook,
        source_code_link: "https://gitlab.com/my-book-project1",
        app_link: "https://abduqayum77.github.io/Read-Book/",
    },
    {
        name: "Publish Article",
        description:
            "A user can publish their articles in the publish content section and then their new articles will automatically be posted on Home page section.",
        tags: [
            {
                name: "expressJS",
                color: "blue-text-gradient",
            },
            {
                name: "mongoDB",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javaScript",
                color: "orange-text-gradient",
            },
            {
                name: "html",
                color: "violet-text-gradient",
            },
        ],
        image: publishArticle,
        source_code_link: "https://github.com/Abduqayum77/publish-article",
        app_link: "https://odd-cyan-jackrabbit-kilt.cyclic.app",
    },
    {
        name: "My second personal website",
        description:
            "This is my second personal website which shows about me - my skills, my projects and contact information.",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
            {
                name: "javaScript",
                color: "orange-text-gradient",
            },
        ],
        image: personalWebsite,
        source_code_link: "https://github.com/Abduqayum77/personal-website",
        app_link: "https://abduqayum77.github.io/personal-website/",
    },
    {
        name: "Tindog",
        description:
            "A responsive web application which shows available dogs and their prices in a give address.",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
        ],
        image: tinDog,
        source_code_link: "https://github.com/Abduqayum77/-TinDog",
        app_link: "https://abduqayum77.github.io/-TinDog/",
    },
    {
        name: "Golds Gym",
        description:
            "Browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "rapidAPI",
                color: "green-text-gradient",
            },
            {
                name: "materialUI",
                color: "pink-text-gradient",
            },
            {
                name: "javaScript",
                color: "orange-text-gradient",
            },
        ],
        image: gym,
        source_code_link: "https://github.com/Abduqayum77/gym",
        app_link: "https://abdukayum-gym.netlify.app",
    },
];

const myWords = [
    {
        text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation.",
        name: "Abdukayum Sotvoldiev",
        designation: "The owner",
        company: "ILALEX",
        image: me,
    },
];

export {services, technologies, experiences, testimonials, projects, myWords};
