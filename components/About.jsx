"use client";

import mehedi from "@/public/mehedi.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.3, ease: [0.43, 0.13, 0.28, 0.96] }}
      id="About"
      className="pt-16"
    >
      <div className="flex items-center justify-center flex-col-reverse sm:flex-row gap-16 pb-8">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: [0.43, 0.13, 0.28, 0.96] }}
            className="font-inter font-semibold sm:font-bold tracking-[2%] text-header sm:text-start text-center sm:mx-4"
          >
            <span className="text-5xl md:text-7xl sm:text-6xl leading-4 sm:leading-6">
              Hi, I&apos;m
            </span>
            <br />
            <span className="text-4xl md:text-[56px] sm:text-5xl leading-10 sm:leading-[60px] md:leading-[85px]  before:content-[''] lg:before:content-['🪼'] lg:before:absolute lg:relative lg:before:w-full lg:before:h-full lg:before:text-red-500 lg:before:-bottom-5 lg:before:left-0 lg:before:text-2xl animate-text">
              Md. Mehedi Hasan
            </span>
          </motion.h1>

          <p className="first-letter:text-5xl first-letter:sm:text-7xl first-letter:text-activeColor first-letter:leading-10 font-inter font-semibold leading-8 max-w-lg sm:text-start text-base text-center sm:mx-2 md:text-xl text-darkBlack dark:text-[#D0D0D0]">
            I&apos;m
            <span className="ms-3 ">
              <Typewriter
                words={[
                  "Md. Mehedi Hasan, a skilled Front-End Web Developer with expertise in JavaScript, React.js, Tailwind CSS, Bootstrap, and more. I specialize in creating responsive, user-friendly websites with clean designs and seamless functionality. Whether you need a sleek business site or a dynamic web app, I deliver top-notch solutions tailored to your needs. Client satisfaction and quality are my priorities—let's bring your ideas to life!",
                ]}
                loop={1}
                cursor={false}
              />
            </span>
          </p>
          <div className="flex justify-center items-center sm:justify-start space-x-4 sm:mx-4">
            <Link
              href="#Contact"
              className="text-center bg-activeColor !text-darkBlack font-inter font-semibold text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[1%] rounded-2xl px-4 py-3 hover:shadow-btnWhite dark:hover:shadow-btn transition-all duration-300 shadow-activeColor relative z-20 group after:content-[''] after:h-px hover:after:h-[1%] after:w-1/2 after:transition-all after:duration-700 after:bg-slate-600 after:-z-50 after:absolute after:bottom-0 after:left-0 hover:after:rounded-lg after:animate-indeterminate-bar"
            >
              Contact me
            </Link>

            <Link
              href="#FAQs"
              className="text-center bg-transparent !text-darkBlack dark:!text-white font-inter font-semibold text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[1%] rounded-2xl px-6 py-3 border border-slate-300 relative group after:content-[''] z-20 after:absolute after:bg-activeColor after:h-px after:w-1/2 hover:after:h-[2px] transition-all after:transition-all after:duration-300 after:left-0 after:bottom-0  after:z-[-1] duration-300 hover:shadow-btnWhite dark:hover:shadow-btn shadow-activeColor after:animate-indeterminate-bar "
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="mx-4">
          <Image
            src={mehedi}
            alt="mehedi image"
            className="sm:rounded-md rounded-full sm:h-full sm:w-full h-80 w-80 shadow-inner shadow-activeColor hover:shadow-md hover:shadow-activeColor hover:-translate-y-3 jump-animate p-2 hover:backdrop-blur-sm object-fill"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default About;
