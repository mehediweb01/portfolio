"use client";
import { motion } from "framer-motion";

const ButtonAnimation = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ButtonAnimation;
