import { Progress } from "@heroui/react";

const ProgressBar = ({ value, label }) => {
  return (
    <Progress
      classNames={{
        base: "max-w-lg",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-sky-400 to-header",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={label}
      radius="sm"
      showValueLabel={true}
      size="md"
      value={value}
      className="w-[290px] sm:w-[380px]"
    />
  );
};

export default ProgressBar;
