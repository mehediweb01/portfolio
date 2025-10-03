"use client";

import { motion } from "framer-motion";

const SkillAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 my-2 sm:my-16 drop-shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default SkillAnimate;
