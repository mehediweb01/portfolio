"use client";

import { motion } from "framer-motion";

const HeaderAnimate = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="font-inter font-semibold sm:font-bold tracking-[2%] text-header sm:text-start text-center sm:mx-4"
    >
      {children}
    </motion.h1>
  );
};

export default HeaderAnimate;
