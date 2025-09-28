"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="sm:min-h-screen h-fit bg-[url('/hero-bg.png')] bg-center bg-cover bg-no-repeat backdrop-blur-sm backdrop-brightness-50"
    >
      <div className="bg-black/65 sm:min-h-screen h-fit bg-opacity-50 text-white flex sm:items-center items-start justify-center gap-16 px-2 sm:py-0 py-8 relative">
        <div className="absolute top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_150px_50px_#17DFF5]" />

        <div className="flex flex-col gap-4 items-center sm:ms-0 ms-4">
          <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 items-start sm:items-center sm:ms-0 ms-4">
            <div className="relative p-2 flex justify-center items-center">
              <div className=" absolute w-full h-full rounded-full border-t-3 border-activeColor animate-spin-slow" />
              <img
                src="./mehedi-profile.png"
                alt="mehedi-profile"
                className="w-44 sm:w-52 md:w-60 rounded-full shadow-btn object-cover"
              />
            </div>

            <h1 className="flex flex-col max-w-lg drop-shadow">
              <span className="uppercase text-2xl sm:text-4xl tracking-[3px] font-itim text-[#B3E5FC]">
                {
                  <Typewriter
                    words={["welcome !"]}
                    loop={true}
                    cursor={false}
                    typeSpeed={200}
                    deleteSpeed={50}
                  />
                }
              </span>
              <span className="flex flex-col gap-2 font-serif jump-animate mt-4">
                <span className="sm:text-5xl text-2xl font-medium text-activeColor tracking-[2px] ms-5 drop-shadow">
                  Md. Mehedi Hasan ,
                </span>
                <span className="sm:text-3xl text-base ms-5 text-gray-100 tracking-wider drop-shadow-2xl">
                  Front-End Web Developer. Explore my portfolio to see my work.
                </span>
              </span>
            </h1>
          </div>
          <a
            href="#About"
            className="bg-gradient-to-lr from-black/70 to-transparent border-[1px] rounded-full text-whites relative after:absolute after:h-full after:w-[30%] after:hover:h-full after:hover:w-full after:bg-sky-300 after:left-0 after:top-0 after:rounded-full after:transition-all after:duration-400 transition-all after:z-[-99999] z-20 after:hover:rounded-full shadow-sm shadow-white hover:!text-darkBlack font-semibold hover:font-bold px-4 py-2 font-inter text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[2px] hover:border-0 hover:shadow-black duration-200"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
