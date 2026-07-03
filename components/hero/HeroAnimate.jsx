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
      className="relative overflow-hidden"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

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
