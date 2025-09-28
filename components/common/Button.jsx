import { Button } from "@heroui/button";
import { cn } from "@heroui/react";

export const Buttons = ({ children, variant, className, onClick, type }) => {
  return (
    <Button
      variant={variant}
      className={cn(
        "text-center bg-activeColor !text-darkBlack font-inter font-semibold text-xl sm:text-2xl leading-5 sm:leading-8 tracking-[1%] rounded-2xl px-4 py-6",
        className
      )}
      onPress={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};
