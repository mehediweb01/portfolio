import Map from "/map.svg";
import phone from "/phone.svg";
// my info icons
import meUser from "/me-user.svg";
import userTime from "/userTime.svg";
import yellowEmail from "/yellow-email.svg";

// skill section progressBar information
export const progressInfo = [
  {
    value: 85,
    label: "HTML & CSS",
  },

  {
    value: 90,
    label: "BOOTSTRAP & TAILWIND CSS ",
  },
  {
    value: 80,
    label: "JAVASCRIPT",
  },
  {
    value: 85,
    label: "REACT.JS",
  },
  {
    value: 45,
    label: "NEXT.JS",
  },
  {
    value: 60,
    label: "TYPESCRIPT",
  },
  {
    value: 80,
    label: "REACT-REDUX",
  },
];

// project information
export const projectsInfo = [
  {
    id: 1,
    img: "/my-feedback.png",
    name: "My Feedback",
    previewLink: "https://myfeedback-omega.vercel.app/",
    codeLink: "https://github.com/mehediweb01/MyFeedback",
    useCase: ["#React", "#TailwindCss", "#Radix-ui", "#React-slick"],
  },
  {
    id: 2,
    img: "/image-gallery.png",
    name: "Image Gallery",
    previewLink: "https://image-gallery-alpha-nine.vercel.app/",
    codeLink: "https://github.com/mehediweb01/image-gallery",
    useCase: ["#Next.js", "#TypeScript", "#TailwindCss"],
  },
  {
    id: 3,
    img: "/wizia.png",
    name: "Wizia",
    previewLink: "https://wizia-theta.vercel.app/",
    codeLink: "https://github.com/mehediweb01/wizia",
    useCase: ["#React", "#TypeScript", "", ""],
  },
  {
    id: 4,
    img: "/finance-website.png",
    name: "Finance-website",
    previewLink: "https://finance-website-five.vercel.app/",
    codeLink: "https://github.com/mehediweb01/Finance-Website",
    useCase: ["#React", "#TailwindCss", "#NextUi", "#FramerMotion"],
  },
  {
    id: 5,
    img: "/Governing Docs.png",
    name: "Governing-Docs",
    previewLink: "https://github.com/mehediweb01/GoveriningDocs",
    codeLink: "https://goverining-docs.vercel.app/",
    useCase: ["#React", "#TailwindCss"],
  },

  {
    id: 6,
    img: "/disasters.png",
    name: "Disasters-I/O",
    previewLink: "https://disasters-i-o.vercel.app/",
    codeLink: "https://github.com/mehediweb01/disasters-I-O",
    useCase: ["#React", "#TailwindCss"],
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
    icon: meUser,
    title: "Md.Mehedi Hasan",
    content: "front-end web developer",
  },
  {
    icon: userTime,
    title: "Freelance",
    content: "Available right now",
  },
  {
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
