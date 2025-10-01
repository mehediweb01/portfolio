"use client";

import { Typewriter } from "react-simple-typewriter";

const AboutTypeAnimate = ({ children }) => {
  return (
    <Typewriter
      words={[
        "Md. Mehedi Hasan, a skilled Front-End Web Developer with expertise in JavaScript, React.js, Tailwind CSS, Bootstrap, and more. I specialize in creating responsive, user-friendly websites with clean designs and seamless functionality. Whether you need a sleek business site or a dynamic web app, I deliver top-notch solutions tailored to your needs. Client satisfaction and quality are my priorities—let's bring your ideas to life!",
      ]}
      loop={1}
      cursor={false}
    />
  );
};

export default AboutTypeAnimate;
