import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import photographyScreenshot from "./assets/photography-portfolio-screenshot.png";
import ecommercesite from "./assets/ecommerce-site.png";
import animationPortfolio from "./assets/3D-animation-portfolio.png";
import interactiveTerminal from "./assets/interactive-terminal-website.png";
import nextMotion from "./assets/nextMotion.png";
import dynamicTerminal from "./assets/dynamic-terminal-portfolio.png";
import dyme from "./assets/dyme.png";
import voovo from "./assets/Voovo.png";
import {
  FaChartBar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserCheck,
  FaHeadset,
  FaSyncAlt,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaGithub,
  FaPaintBrush,
  FaReact,
  FaNodeJs,
  FaLinkedin,
  FaWaveSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiExpress,
  SiMongodb,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiGraphql,
  SiApollographql,
  SiNextdotjs,
} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";

export const tabs = [
  { name: "About Me", id: "about" },
  { name: "Skills", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
];

export const whyChooseMe = [
  {
    title: "Unparalleled Technical Expertise",
    icon: <FaUserCheck />,
    link: "",
  },
  {
    title: "Data Driven Solutions",
    icon: <FaChartBar />,
    link: "",
  },
  {
    title: "Dedicated Client Support",
    icon: <FaHeadset />,
    link: "",
  },
  {
    title: "Innovative Problem Solving",
    icon: <FaSyncAlt />,
    link: "",
  },
  {
    title: "Dynamic Development Approach",
    icon: <FaLaptopCode />,
    link: "",
  },
  {
    title: "Collaborative Mindset",
    icon: <FaHandsHelping />,
    link: "",
  },
];

export const services = [
  {
    name: "Mobile App Development",
    icon: <TbDeviceMobileCode />,
    description: `
I create cross-platform mobile applications that deliver smooth user experiences across various devices. Using versatile development frameworks, I build high-performance apps that ensure exceptional functionality on both iOS and Android platforms.`,
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode />,
    description: `Delivering powerful solutions, from responsive websites to intricate web applications, by leveraging the latest technologies. With full-stack expertise, development is handled end-to-end, ensuring that your business needs are met with optimal performance and scalability.
`,
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `User interfaces are designed to be both intuitive and visually captivating, enhancing the overall user experience. By balancing aesthetics with practicality, digital products are crafted to not only look appealing but also offer seamless and engaging interactions for users.`,
  },
  {
    name: "Content Creation",
    icon: <TfiWrite />,
    description: `I create dynamic digital content that captivates your audience and elevates your brand’s presence. From engaging blog articles to impactful social media posts and clear technical documentation, I deliver content that is sharp, effective, and tailored to resonate with your target audience.`,
  },
  {
    name: "Database Design & Management",
    icon: <FaDatabase />,
    description: `I develop customized, high-performance database solutions that are optimized for your unique requirements. From designing data models to fine-tuning queries, I focus on creating databases that deliver top-notch performance and are easy to manage.`,
  },
  {
    name: "API Development",
    icon: <FaServer />,
    description: `I design and implement efficient, scalable database solutions tailored to your specific needs. From data modeling to query optimization, I ensure your data is structured for optimal performance and easy maintenance.`,
  },
];

export const skills = [
  {
    title: "App Development",
    data: [
      {
        skill: "Flutter",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
      {
        skill: "iOS (Swift)",
        level: "Intermediate",
      },
      {
        skill: "Android (Kotlin)",
        level: "Intermediate",
      },
      {
        skill: "Xcode",
        level: "Experienced",
      },
      {
        skill: "Android Studio",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "TypeScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "Vue.js",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
      },
      {
        skill: "Express.js",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "PostgreSQL",
        level: "Intermediate",
      },
      {
        skill: "PHP",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    data: [
      {
        skill: "AWS",
        level: "Intermediate",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "Kubernetes",
        level: "Basic",
      },
      {
        skill: "CI/CD Pipelines",
        level: "Intermediate",
      },
      {
        skill: "Azure",
        level: "Basic",
      },
      {
        skill: "Google Cloud Platform",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Database Management",
    data: [
      {
        skill: "SQL",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Experienced",
      },
      {
        skill: "Database Optimization",
        level: "Intermediate",
      },
      {
        skill: "Data Modeling",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "API Development",
    data: [
      {
        skill: "RESTful APIs",
        level: "Experienced",
      },
      {
        skill: "GraphQL",
        level: "Intermediate",
      },
      {
        skill: "Swagger/OpenAPI",
        level: "Intermediate",
      },
      {
        skill: "API Security",
        level: "Experienced",
      },
      {
        skill: "Postman",
        level: "Experienced",
      },
    ],
  },
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Intermediate",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "Adobe XD",
        level: "Intermediate",
      },
      {
        skill: "InVision",
        level: "Intermediate",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: ecommercesite,
    category: "Web",
    description: `Elevate your online shopping experience with our state of the art E-Commerce Application. 
    Seamlessly blending aesthetics with functionality, our platform offers more than just transactions, it creates 
    shopping experiences. From AI powered product recommendations to one click checkouts, every feature is 
    designed to delight your customers and boost your conversions. Welcome to the future of online retail.`,
    demoLink: "https://aqazza.github.io/Nahiyah-Clothing/",
    stack: [
      {
        name: "ReactJs",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "lightblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 2,
    title: "Dyme Financial Budgeting App",
    image: dyme,
    category: "Web",
    description: `Dyme gives you the ability to log and categorize transactions, 
    and a dashboard displaying financial summaries and insights. Users can monitor 
    their spending habits, create budgets, and adjust financial plans over time, 
    providing a comprehensive tool for achieving financial stability and planning 
    for future expenses. It's built with React on the frontend and uses Apollo Client 
    to communicate with a GraphQL API backend, ensuring efficient data handling and
     user-friendly functionality.`,
    demoLink: "https://dyme.herokuapp.com/login",
    stack: [
      {
        name: "MyGraphQL",
        icon: <SiGraphql />,
        iconColor: "purple", // Use a color that suits GraphQL
      },
      {
        name: "Apollo",
        icon: <SiApollographql />,
        iconColor: "darkblue", // Apollo logo color
      },
      {
        name: "API",
        icon: <FaDatabase />, // You can change this to any relevant API icon if available
        iconColor: "orange",
      },
      {
        name: "MySQL",
        icon: <SiCss3 />,
        iconColor: "orange",
      },
    ],
  },
  {
    id: 3,
    title: "Fiore Front-end CRM",
    image: animationPortfolio,
    category: "Web",
    description: `Fiore is a front-end project for a minimalistic, modern web application. It features a clean design with smooth animations and transitions. The site likely serves as a portfolio, landing page, or product showcase, focusing on visual appeal and user interaction. Key components include a responsive layout, interactive elements, and possibly custom styling or animations, making it visually engaging.`,
    demoLink: "https://fiore-three.vercel.app/",
    stack: [
      {
        name: "ReactJS",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        iconColor: "lightblue",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "lightblue",
      },
      {
        name: "HTML",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
    ],
  },
  {
    id: 4,
    title: "Social Network API",
    image: interactiveTerminal,
    category: "Web",
    description: `Here I showcase a backend application for a social network. It features a RESTful API built with Node.js, Express.js, and MongoDB, enabling users to perform CRUD operations on user profiles, thoughts, and reactions. This API provides the essential functionality needed for a social networking platform, focusing on efficient data handling and seamless integration with other systems. The repository includes all the necessary files and documentation to understand and run the project.`,
    demoLink: "https://github.com/aqazza/Social-NetworkAPI-AQ",
    stack: [
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "API",
        icon: <FaDatabase />, // You can change this to any relevant API icon if available
        iconColor: "orange",
      },
    ],
  },
  {
    id: 5,
    title: "nextMotion Portfolio",
    image: nextMotion,
    category: "Portfolio",
    description: `Discover a unique approach to personal branding with this terminal-themed portfolio website. Presenting professional accomplishments and skills through a command-line interface, it offers an engaging and memorable user experience for fellow developers and tech recruiters.`,
    demoLink: "https://anasnextportfolio.netlify.app/",
    stack: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        iconColor: "blue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "lightblue",
      },
      {
        name: "NextMotion", // Adding NextMotion
        icon: <FaWaveSquare />, // Placeholder icon for NextMotion, can be replaced with a specific one if available
        iconColor: "yellow", // Choose a suitable color
      },
    ],
  },
  {
    id: 6,
    title: "Career Portfolio",
    image: dynamicTerminal,
    category: "Portfolio",
    description: `I present a snapshot of my professional journey, showcasing my skills in software development, including full-stack projects and expertise in modern technologies. The site highlights my work, offering potential employers and clients a clear view of my abilities and accomplishments through a clean and user-friendly design. It's designed to be a comprehensive portfolio that effectively communicates my technical expertise and passion for creating robust digital solutions.`,
    demoLink: "https://anasqazza.vercel.app/",
    stack: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "blue",
      },
      {
        name: "HTML",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
      {
        name: "ReactJs",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 8,
    title: "Photography Portfolio",
    image: photographyScreenshot,
    category: "Portfolio",
    description: `The site features a collection of a photographer's best projects, presented in a sleek, modern design
     that emphasizes visual storytelling. Visitors can explore his diverse portfolio, which includes various 
     styles and themes, highlighting his creative versatility and technical expertise. The site also includes an easy-to-use
      contact forms, making it an engaging platform for potential clients to learn more about his work and connect with him.`,
    demoLink: "https://saied-ashour.netlify.app/",
    stack: [
      {
        name: "ReactJs",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "HTML",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
    ],
  },
  {
    id: 9,
    title: "Voovo Movie Recommender",
    image: voovo,
    category: "Web",
    description: `Voovo, is a movie and TV show recommendation platform that leverages APIs to present users with trending and 
    top-rated movie suggestions. Users can explore popular movies through a visually appealing interface built using React,
     Next.js, and Swiper.js for carousels. Additionally, the app features an AI-powered recommendation engine, where users can 
     input their movie preferences and receive personalized suggestions based on those inputs.`,
    demoLink: "https://voovo.netlify.app/",
    stack: [
      {
        name: "ReactJS",
        icon: <FaReact />,
        iconColor: "skyblue",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        iconColor: "yellow",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        iconColor: "lightblue",
      },
      {
        name: "CSS",
        icon: <SiCss3 />,
        iconColor: "lightblue",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        iconColor: "black",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 />,
        iconColor: "orange",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        iconColor: "green",
      },      
    ],
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Thompson",
    position: "CTO of TechInnovate",
    review: `Working with Anas Qazza was a game changer for our startup. His technical expertise 
             and innovative approach transformed our ideas into a robust, scalable platform. What 
             impressed me most was his ability to anticipate potential security issues and address 
             them proactively. A true professional who delivers beyond expectations!`,
  },
  {
    image: client2,
    name: "Sarah Chen",
    position: "Product Manager at GlobalSoft",
    review: `I can't speak highly enough of Anas' work. He took our outdated website and 
             turned it into a modern, user friendly interface that has significantly improved our 
             customer engagement. His attention to detail and commitment to delivering a secure, 
             high performance solution was evident throughout the project.`,
  },
  {
    image: client3,
    name: "Michael Okonkwo",
    position: "Founder of AfriTech Solutions",
    review: `Anas and his expertise in both frontend and backend development was crucial in 
             building our complex web application. He navigated challenging technical requirements 
             with ease and always kept us informed about the progress.`,
  },
  {
    image: client4,
    name: "Emily Rodriguez",
    position: "COO of MobileFirst Inc.",
    review: `We hired Anas to develop a mobile app for our business, and the results exceeded 
             our expectations. His proficiency in Flutter delivered a smooth, responsive app 
             that our users love. Moreover, his proactive approach to security gave us confidence 
             in the integrity of our product.`,
  },
  {
    image: client5,
    name: "David Nwosu",
    position: "IT Director at AfriBank",
    review: `Anas and his technical skills are matched only by his excellent communication and 
             project management abilities. He took the time to understand our business needs and 
             delivered a solution that not only met but exceeded our requirements.`,
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "anasqazza@gmail.com",
    icon: <MdEmail />,
  },
  {
    title: "Phone Number",
    value: "714-204-5079",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Address",
    value: "Cypress,CA",
    icon: <FaMapMarkerAlt />,
  },
];

export const socialHandles = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/anas-qazza",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/aqazza",
  },
];

export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "About Me", id: "about" },
      { name: "Skills", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
    ],
  },
];
