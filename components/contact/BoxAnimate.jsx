"use client";

import { motion } from "framer-motion";

const BoxAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "150px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
    >
      {children}
    </motion.div>
  );
};

export default BoxAnimate;
