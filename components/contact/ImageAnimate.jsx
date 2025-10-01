"use client";

import { motion } from "framer-motion";

const ImageAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{ opacity: 1, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "backInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ImageAnimate;
