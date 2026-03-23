import { Header } from "@/components/common/Header";
import Link from "next/link";
import { FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const AboutMe = () => {
  return (
    <div className="mt-16 mb-20">
      <Header>About</Header>
      <div className="w-full flex flex-col justify-center items-center gap-4 sm:mt-6 mt-3">
        <p className="dark:text-gray-300 text-gray-400 mb-12 text-center max-w-xl text-base sm:text-xl">
          I'm Md. Mehedi Hasan, a Front-end Web Developer with a passion for
          building seamless and user-friendly websites.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <FaReact size={44} className="text-sky-400" />
          <RiNextjsFill size={44} className="text-black dark:text-sky-400" />
          <FaJs size={44} className="text-yellow-400" />
        </div>
        <div className="sm:mt-8 mt-4">
          <Link href="/about">
            <button
              type="button"
              className="cursor-pointer font-medium text-xl sm:text-2xl bg-transparent rounded-md text-black dark:text-white px-3 py-2 hover:text-sky-400 transition-all duration-300 ease-in-out active:scale-110 border-2 border-sky-400"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
