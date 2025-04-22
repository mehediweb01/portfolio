import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.28, 0.96] }}
      className="min-h-screen bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat"
    >
      <div className="bg-black min-h-screen bg-opacity-50 text-white flex items-center justify-center gap-16 pb-8 px-2 sm:py-0 py-16">
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

            <h1 className="flex flex-col max-w-lg">
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
                <span className="sm:text-5xl text-2xl font-medium text-activeColor tracking-[2px] ms-5">
                  Md. Mehedi Hasan ,
                </span>
                <span className="sm:text-3xl text-base ms-5 text-[#D0D0D0] tracking-wider ">
                  Front-End Web Developer. Explore my portfolio to see my work.
                </span>
              </span>
            </h1>
          </div>
          <a
            href="#About"
            className="bg-transparent rounded-full text-[#B3E5FC] border-white relative after:absolute after:h-full after:w-[30%] after:hover:h-full after:hover:w-full after:bg-darkBlack after:left-0 after:top-0 after:rounded-full after:transition-all after:duration-400 transition-all duration-700 after:z-[-99999] z-20 after:hover:rounded-full  shadow-md shadow-sky-300 hover:!text-[#00BFFF] font-semibold hover:font-bold border-[1px] px-4 py-2 font-inter text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[1%]"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
