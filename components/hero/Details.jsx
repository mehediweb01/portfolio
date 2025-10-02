import me from "@/public/mehedi.png";
import Image from "next/image";
import TypeAnimate from "./TypeAnimate";

const Details = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-8 items-start md:items-center md:ms-0 ms-4">
      <div className="relative p-2 flex justify-center items-center">
        <div className="absolute w-full h-full rounded-lg border-1 border-activeColor/50 shadow-sm shadow-activeColor/50" />
        <Image
          src={me}
          alt="mehedi-profile"
          height={500}
          width={500}
          className="rounded-md w-44 sm:w-52 hover:-translate-y-3 hover:backdrop-blur-sm object-fill"
        />
      </div>

      <h1 className="flex flex-col max-w-lg drop-shadow">
        <span className="uppercase text-2xl sm:text-4xl tracking-[3px] font-poppins text-[#B3E5FC]">
          <TypeAnimate />
        </span>
        <span className="flex flex-col gap-2 font-serif mt-4">
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
