import ImageAnimate from "@/components/contact/ImageAnimate";
import { contactInfo } from "@/db";
import contact from "@/public/contact.jpg";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="flex-1 w-full md:w-1/2 mt-0 sm:mt-6">
      <div className="px-8 py-4">
        <h1 className="font-poppins text-2xl sm:text-3xl text-center text-black dark:text-header ">
          Md. Mehedi Hasan
        </h1>
        <p className="font-poppins text-base sm:text-xl text-center text-black dark:text-whites">
          Front-end web developer
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 justify-self-stretch gap-y-8 px-4">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 flex-col"
          >
            <Image
              src={item.icon}
              alt={`${"icons" + index}`}
              className="md:size-16 sm:size-12 size-10 object-contain"
            />

            <h2 className="font-inter font-bold text-xl lg:text-2xl text-blueMagenta dark:text-whites">
              {item.title}
            </h2>
            <p className="font-inter text-black font-bold text-sm lg:text-base leading-6 dark:text-sky-400 ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="sm:block hidden mt-4 px-4 py-2 rounded-md shadow-inner shadow-black dark:shadow-activeColor/80 ">
        <ImageAnimate>
          <Image
            src={contact}
            alt="contact image"
            className="h-[300px] w-full rounded-lg shadow-md shadow-sky-200 dark:shadow-none animate-pulse duration-500 transition-all"
            height={500}
            width={500}
          />
        </ImageAnimate>
      </div>
    </div>
  );
};

export default RightSection;
