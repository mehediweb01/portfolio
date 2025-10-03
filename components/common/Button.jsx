import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import ButtonAnimation from "./ButtonAnimation";

export const Buttons = ({
  children,
  variant,
  className,
  onClick,
  type,
  size,
}) => {
  return (
    <ButtonAnimation className="w-full flex justify-center">
      <Button
        type={type}
        className={cn(
          "text-center bg-activeColor !text-darkBlack font-inter font-semibold text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[1%] rounded-2xl px-4 py-6 cursor-pointer",
          className
        )}
        variant={variant}
        onClick={onClick}
        size={size}
      >
        {children}
      </Button>
    </ButtonAnimation>
  );
};
