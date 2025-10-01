import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <Link
        href="#About"
        className="relative z-20 bg-gradient-to-lr from-black/70 to-transparent border rounded-full text-white font-semibold font-inter text-xl sm:text-2xl tracking-[2px] px-4 py-2 leading-5 sm:leading-8 shadow-sm shadow-white transition-all duration-300 hover:font-bold hover:shadow-black hover:border-0 hover:!text-darkBlack after:content-[''] after:absolute after:inset-0 after:w-[30%] after:rounded-full after:left-0 after:top-0 after:bg-sky-300 after:transition-all after:duration-300 after:z-[-1] hover:after:w-full hover:after:rounded-full"
      >
        View Portfolio
      </Link>
    </div>
  );
};

export default ActionButtons;
