"use client";

import { motion } from "framer-motion";

const HeroAnimate = ({ children }) => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="sm:min-h-screen h-fit bg-[url('/hero-bg.png')] bg-center bg-cover bg-no-repeat backdrop-blur-sm backdrop-brightness-50"
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimate;
