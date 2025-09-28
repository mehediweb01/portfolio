"use client";

import { motion } from "motion/react";
import { skillsInfo } from "../db";
import { Header } from "./common/Header";

const Skills = () => {
  return (
    <div id="Skills" className="pt-16 w-full sm:w-[70%] md:w-[60%] mx-auto">
      <div className="relative">
        {/* Title */}
        <Header>Skills</Header>

        {/* shadow */}
        <div className="sm:inline-block hidden absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_300px_130px_#17DFF5] backdrop-blur-3xl opacity-50" />

        <div className="sm:inline-block hidden absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_200px_110px_#17DFF5] backdrop-blur-3xl opacity-50" />

        {/* skill details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.28, 0.96] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 my-2 sm:my-16 drop-shadow-lg"
        >
          {skillsInfo.map((item, i) => (
            <div
              key={i}
              className="dark:text-activeColor text-darkBlack px-6 py-4 rounded-md sm:border-white/20 sm:shadow-md sm:shadow-black shadow-white tracking-[3px] flex items-center gap-2 uppercase font-semibold dark:hover:border-activeColor border-darkBlack/20 dark:border-white/20 border-[1px] hover:shadow-md hover:scale-105 transition-all duration-300 hover:border-darkBlack"
            >
              {item.icon && (
                <item.icon className="dark:text-activeColor text-darkBlack size-6" />
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
