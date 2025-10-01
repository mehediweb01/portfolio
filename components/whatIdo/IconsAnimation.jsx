import { FaShapes } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const IconsAnimation = () => {
  return (
    <>
      <div className="absolute right-4 md:right-[10%] top-[12%] md:top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <IoSettingsOutline className="size-5 animate-spin dark:text-sky-400" />
      </div>
      <div className="absolute left-4 md:left-[10%] top-[12%] md:top-[20%] shadow-inner shadow-sky-600 py-2 px-6 rounded-md">
        <FaShapes className="size-5 animate-spin dark:text-sky-400" />
      </div>
    </>
  );
};

export default IconsAnimation;
