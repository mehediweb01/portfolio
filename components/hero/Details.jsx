import me from "@/public/mehedi-profile.png";
import Image from "next/image";
import TypeAnimate from "./TypeAnimate";

const Details = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 items-start sm:items-center sm:ms-0 ms-4">
      <div className="relative p-2 flex justify-center items-center">
        <div className=" absolute w-full h-full rounded-full border-t-3 border-activeColor animate-spin-slow" />
        <Image
          src={me}
          alt="mehedi-profile"
          width={300}
          height={300}
          className="w-44 sm:w-52 md:w-60 rounded-full shadow-btn object-cover"
        />
      </div>

      <h1 className="flex flex-col max-w-lg drop-shadow">
        <span className="uppercase text-2xl sm:text-4xl tracking-[3px] font-poppins text-[#B3E5FC]">
          <TypeAnimate />
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
  );
};

export default Details;
