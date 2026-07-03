import Map from "./public/map.svg";
import phone from "./public/phone.svg";
// my info icons
import { FaCode, FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import meUser from "./public/me-user.svg";
import userTime from "./public/userTime.svg";
import yellowEmail from "./public/yellow-email.svg";
// skill icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import {
  RiBootstrapFill,
  RiJavascriptLine,
  RiNextjsLine,
  RiReactjsFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import { TbBrandRedux, TbBrandTypescript } from "react-icons/tb";

// navbar items
export const Items = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Certificate", href: "/certificate" },
  { name: "FAQs", href: "/faqs" },
];

export const AboutNavItems = [
  {
    id: 1,
    name: "About Me",
    slug: "about-me",
  },
  {
    id: 2,
    name: "Education",
    slug: "education",
  },
  {
    id: 3,
    name: "Expertise",
    slug: "expertise",
  },
];

// education
export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Business Administration (BBA)",
    field: "Management",
    Institution: "Govt. Saadat College",
    Affiliation: "National University, Bangladesh",
    session: "2024 - 2025",
    status: "Running (1st Year)",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    field: "Humanities",
    Institution: "Shaheed Shahed Hazari College",
    session: "2022 - 2023",
    gpa: "4.00 / 5.00",
    status: "Completed",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    Institution: "Gopaldighi K. P. U. High School",
    session: "2019 - 2020",
    gpa: "4.17 / 5.00",
    status: "Completed",
  },
];
// what i do
export const expertiseData = [
  {
    icon: FaLaptopCode,
    title: "Front-end Web Development",
    description:
      "I create responsive, user-friendly, and modern web interfaces with clean, efficient front-end code.",
  },
  {
    icon: FaCode,
    title: "Clean & Scalable Code",
    description:
      "I write maintainable and reusable React code by following best practices, component reusability, performance optimization, and clean architecture.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive UI Design",
    description:
      "I build fully responsive web applications that provide a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "I focus on fast-loading, optimized web applications by improving rendering performance, code organization, and user experience.",
  },
];

// skill section progressBar information
export const skillsInfo = [
  {
    icon: AiOutlineHtml5,
    label: "HTML",
  },
  {
    icon: FaCss3,
    label: "CSS",
  },
  {
    icon: RiBootstrapFill,
    label: "BOOTSTRAP ",
  },
  {
    icon: RiTailwindCssLine,
    label: "TAILWIND CSS",
  },
  {
    icon: RiJavascriptLine,
    label: "JAVASCRIPT",
  },
  {
    icon: RiReactjsFill,
    label: "REACT.JS",
  },
  {
    icon: RiNextjsLine,
    label: "NEXT.JS",
  },
  {
    icon: TbBrandTypescript,
    label: "TYPESCRIPT",
  },
  {
    icon: TbBrandRedux,
    label: "REACT-REDUX",
  },
  {
    icon: FaGitAlt,
    label: "Git",
  },
  {
    icon: FaGithub,
    label: "GitHub",
  },
];

// project information
export const projectsInfo = [
  {
    id: 1,
    img: "/admin-vision-dashboard.png",
    name: "Admin-Vision-Dashboard",
    previewLink: "https://admin-vision-dashboard.vercel.app/",
    codeLink: "https://github.com/mehediweb01/Admin-Vision-Dashboard.git",
    useCase: ["React", "TailwindCss", "MUI", "Recharts"],
    teamMember: 1,
  },
  {
    id: 2,
    img: "/dashboard.png",
    name: "Sales Dashboard",
    previewLink: "https://sales-dashboard-silk.vercel.app/",
    codeLink: "https://github.com/mehediweb01/sales-dashboard.git",
    useCase: ["React", "TailwindCss", "MUI", "Recharts"],
  },
  {
    id: 3,
    img: "/dev-shelf.png",
    name: "DevShelf",
    previewLink: "https://devshelf-ten.vercel.app/",
    codeLink: "https://github.com/mehediweb01/devshelf.git",
    useCase: [
      "NextJS",
      "TailwindCSS",
      "react-icons",
      "react-syntax-highlighter",
    ],
  },
  {
    id: 4,
    img: "/image-gallery.png",
    name: "Image Gallery",
    previewLink: "https://image-gallery-alpha-nine.vercel.app/",
    codeLink: "https://github.com/mehediweb01/image-gallery",
    useCase: ["NextJS", "TypeScript", "TailwindCss"],
  },
  {
    id: 5,
    img: "/quick-mart.png",
    name: "Quick Mart UI",
    previewLink: "https://quickmart-ui.vercel.app/",
    codeLink: "https://github.com/mehediweb01/quickmart-ui.git",
    useCase: ["NextJS", "TailwindCss", "react-icons"],
  },
  {
    id: 6,
    img: "/quote-generator.png",
    name: "Quote Generator",
    previewLink: "https://quote-generator-wheat-one.vercel.app/",
    codeLink: "https://github.com/mehediweb01/quote-generator",
    useCase: ["React", "TailwindCss"],
  },
];

// contact section information
export const contactInfo = [
  {
    icon: Map,
    title: "Address",
    content: "Tangail, Dhaka",
  },
  {
    icon: phone,
    title: "Phone",
    content: "+8801576-794817",
  },
];

export const myInfo = [
  {
    id: 1,
    icon: meUser,
    title: "Md.Mehedi Hasan",
    content: "front-end web developer",
  },
  {
    id: 2,
    icon: userTime,
    title: "Freelance",
    content: "Available right now",
  },
  {
    id: 3,
    icon: yellowEmail,
    title: "Email",
    content: "mehedihasan87456@gmail.com",
  },
];

// FAQs section
export const FAQsInfo = [
  {
    id: "1",
    question: " What skills do I have?",
    answer:
      "HTML, CSS, JavaScript, Responsive design (Bootstrap/Tailwind CSS), JavaScript frameworks (React), Version control (Git/GitHub), Basic understanding of APIs",
  },
  {
    id: "2",
    question: "Can I work with frameworks or libraries?",
    answer: "React.js, Tailwind Css, Bootstrap",
  },
  {
    id: "3",
    question: "Are there live demos of my projects?",
    answer:
      "Yes, live demo links for all my projects are included in the portfolio, along with their GitHub repositories.",
  },
  {
    id: "4",
    question: "Can I work with CMS or hosting platforms?",
    answer:
      "CMS like WordPress (basic level) and Hosting platforms such as Netlify, Vercel, and GitHub Pages",
  },
  {
    id: "5",
    question: "Do I have any real-world experience?",
    answer:
      "I've worked on personal projects to practice and enhance my skills, focusing on user-friendly and responsive designs.",
  },
  {
    id: "6",
    question: "What kind of roles or projects am I suitable for?",
    answer:
      "Junior front-end developer positions, Small to medium-sized projects and Responsive website development ",
  },
];

// certificates
export const certificates = [
  {
    id: 1,
    src: "/certificate/LWS-Excellence-Certificate.jpg",
    alt: "Certificate 2",
  },
  {
    id: 2,
    src: "/certificate/LWS-Certificate.jpg",
    alt: "Certificate 3",
  },
  {
    id: 3,
    src: "/certificate/hablu-programmer-certificate.png",
    alt: "Certificate 1",
  },
];

// footer section
export const socialIcons = [
  {
    id: 1,
    icon: FaFacebook,
    link: "https://www.facebook.com/mehediweb01",
  },
  {
    id: 2,
    icon: FaInstagram,
    link: "https://www.instagram.com/mehediweb01/",
  },
  {
    id: 3,
    icon: CiLinkedin,
    link: "https://www.linkedin.com/in/mehediweb01/",
  },
  {
    id: 4,
    icon: FaGithub,
    link: "https://github.com/mehediweb01",
  },
];
