"use client";

import { motion } from "framer-motion";

const BoxAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, translateY: 0 }}
      whileHover={{ opacity: 0.7, translateY: "10px" }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
    >
      {children}
    </motion.div>
  );
};

export default BoxAnimate;
