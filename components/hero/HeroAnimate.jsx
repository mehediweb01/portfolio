"use client";

import { motion } from "framer-motion";
import { FaFileCode, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const HeroAnimate = ({ children }) => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a]/80 to-[#6d28d9]/40 dark:from-[#0f172a] dark:via-[#1e3a8a]/80 dark:to-[#6d28d9]/40 rounded-b-3xl mb-4 sm:mb-8 py-16"
    >
      <div className="md:block hidden">
        <div className="absolute bottom-48 right-12 opacity-50">
          <FaReact className="w-16 h-16 text-sky-400" />
        </div>
        <div className="absolute bottom-48 right-40 sm:right-52 opacity-50">
          <FaFileCode className="w-16 h-16 text-sky-400" />
        </div>
        <div className="absolute bottom-72 right-36 sm:right-40 opacity-50">
          <RiNextjsFill className="w-16 h-16 text-black" />
        </div>
      </div>
      {children}
    </motion.div>
  );
};

export default HeroAnimate;
