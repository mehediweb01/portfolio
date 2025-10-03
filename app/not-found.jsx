import ButtonAnimation from "@/components/common/ButtonAnimation";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="md:text-3xl sm:text-2xl text-xl text-black dark:text-activeColor font-poppins">
        page not found - 404
      </h1>
      <ButtonAnimation className={"mt-7 "}>
        <Link
          href="/"
          className="text-black dark:text-activeColor border border-slate-400 px-4 py-2 rounded-md text-xl hover:text-sky-600 transition-all duration-300 "
        >
          Back to home
        </Link>
      </ButtonAnimation>
    </div>
  );
};

export default NotFound;
