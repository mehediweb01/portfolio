"use client";

import useTheme from "@/hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { Buttons } from "../common/Button";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Buttons
      className="bg-transparent dark:hover:bg-white/20 hover:bg-black px-1 py-4 "
      size="sm"
      onClick={() => setTheme(!theme)}
    >
      {theme ? (
        <FaMoon className="size-5 dark:text-yellow-400" />
      ) : (
        <IoIosSunny className="size-6 text-white" />
      )}
    </Buttons>
  );
};

export default ToggleButton;
