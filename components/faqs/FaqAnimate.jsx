"use client";

import { motion } from "motion/react";

const FaqAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 35 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="space-y-3 dark:space-y-5 mt-16"
    >
      {children}
    </motion.div>
  );
};

export default FaqAnimate;
