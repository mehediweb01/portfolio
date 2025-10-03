"use client";

import { motion } from "framer-motion";

const ContactAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="w-[90%] mx-auto flex md:flex-row flex-col justify-center items-start gap-8"
    >
      {children}
    </motion.div>
  );
};

export default ContactAnimate;
