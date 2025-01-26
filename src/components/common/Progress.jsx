import { Progress } from "@heroui/react";

const ProgressBar = ({value,label}) => {
  return (
    <Progress
      classNames={{
        base: "max-w-lg",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={label}
      radius="sm"
      showValueLabel={true}
      size="md"
      value={value}
      className="w-[290px] sm:w-[350px]"
    />
  );
};

export default ProgressBar;
