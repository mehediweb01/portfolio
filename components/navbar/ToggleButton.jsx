"use client";

import useTheme from "@/hooks/useTheme";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { Button } from "../ui/button";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      className="bg-transparent dark:hover:bg-white/20 hover:bg-black cursor-pointer "
      size="sm"
      onClick={() => setTheme(!theme)}
    >
      {theme ? (
        <FaMoon className="size-6 dark:text-yellow-400" />
      ) : (
        <IoIosSunny className="size-6 text-white" />
      )}
    </Button>
  );
};

export default ToggleButton;
