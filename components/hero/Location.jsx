import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="absolute -bottom-5 z-20 rounded-full border border-slate-200 bg-background/90 px-5 py-2 shadow-xl backdrop-blur dark:border-slate-700">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-sky-500" />
        <span className="text-sm font-medium">Tangail, Bangladesh</span>
      </div>
    </div>
  );
};

export default Location;
