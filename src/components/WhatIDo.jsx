import { IoSettingsOutline } from "react-icons/io5";
import { FaShapes } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { Header } from "./common/Header";
import { FaCode } from "react-icons/fa";
import { motion } from 'motion/react';
const WhatIDo = () => {
  return (
    <div className="relative py-8">
      {/* header */}
      <div className="py-8">
        <Header>
          What{" "}
          <span className="relative after:absolute after:content-['........'] after:text-center after:text-2xl after:animate-ping after:transition-all after:duration-300 after:bottom-[50%] after:-left-[10px]">
            I
          </span>{" "}
          do
        </Header>
        <p className="text-center font-itim text-4xl text-black dark:text-white/85 w-full jump-animate">
          my services
        </p>
      </div>
      {/* card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.28, 0.96] }}
        className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 mx-4 my-4"
      >
        <div className="px-6 py-8 rounded-lg shadow-md hover:shadow-black hover:shadow-inner shadow-black dark:shadow-inner dark:shadow-black space-y-4 border dark:border-none border-slate-100 dark:hover:shadow-black dark:hover:shadow-md">
          <FaLaptopCode className="size-12 text-header" />
          <h1 className="font-itim text-2xl sm:text-4xl leading-8 sm:leading-[48px] text-darkBlack dark:text-white">
            Front-end web developer
          </h1>
          <p className="font-itim text-base sm:text-xl leading-5 sm:leading-10 text-black max-w-lg dark:text-white">
            I create responsive, user-friendly, and modern web interfaces with
            clean, efficient front-end code
          </p>
        </div>
        {/* 2nd card */}
        <div className="px-6 py-8 rounded-lg shadow-md hover:shadow-black hover:shadow-inner shadow-black dark:shadow-inner dark:shadow-black space-y-4 border dark:border-none border-slate-100 dark:hover:shadow-black dark:hover:shadow-md">
          <FaCode className="size-12 text-header" />
          <h1 className="font-itim text-2xl sm:text-4xl leading-8 sm:leading-[48px] text-darkBlack dark:text-white">
            Clean Code
          </h1>
          <p className="font-itim text-base sm:text-xl leading-5 sm:leading-10 text-black max-w-lg dark:text-white">
            I strive to write clean, efficient, and scalable React code by
            following key principles: Component Reusability, Optimized
            Performance, Code Simplicity
          </p>
        </div>
      </motion.div>
      {/* setting animation */}
      <div className="absolute right-4 md:right-[10%] top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <IoSettingsOutline className="size-5 animate-spin" />
      </div>
      <div className="absolute left-4 md:left-[10%] top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <FaShapes className="size-5 animate-spin" />
      </div>
    </div>
  );
};

export default WhatIDo;
