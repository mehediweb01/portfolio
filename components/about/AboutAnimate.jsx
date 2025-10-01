"use client";

import { motion } from "framer-motion";

const AboutAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3, ease: [0.43, 0.13, 0.28, 0.96] }}
      id="About"
      className="pt-16"
    >
      {children}
    </motion.div>
  );
};

export default AboutAnimate;
