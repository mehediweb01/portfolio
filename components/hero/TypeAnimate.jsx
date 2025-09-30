"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeAnimate = () => {
  return (
    <Typewriter
      words={["welcome !"]}
      loop={true}
      cursor={false}
      typeSpeed={200}
      deleteSpeed={50}
    />
  );
};

export default TypeAnimate;
