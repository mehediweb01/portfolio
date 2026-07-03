import me from "@/public/me.png";
import Image from "next/image";
import FloatingResumeCard from "../about/FloatingResumeCard";
import Location from "./Location";
import TechBadge from "./TechBadge";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-sky-500/20 blur-[90px]" />
      </div>

      <TechBadge />

      {/* Image */}
      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-sky-500 via-cyan-400 to-indigo-500 p-[3px] shadow-[0_25px_80px_rgba(14,165,233,0.25)] dark:border-slate-700">
        <Image
          src={me}
          alt="Md. Mehedi Hasan"
          priority
          width={320}
          height={420}
          className="h-[420px] w-[300px] rounded-[28px] object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <FloatingResumeCard />
      <Location />
    </div>
  );
};

export default HeroImage;
