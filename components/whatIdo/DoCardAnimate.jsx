"use client";
import { motion } from "framer-motion";

const DoCardAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 my-6 w-[90%] mx-auto"
    >
      {children}
    </motion.div>
  );
};

export default DoCardAnimate;
