import { Header } from "@/components/common/Header";
import { expertiseData } from "@/db";
import Card from "./Card";
import DoCardAnimate from "./DoCardAnimate";
import IconsAnimation from "./IconsAnimation";

const Expertise = () => {
  return (
    <div className="relative py-8 min-h-screen">
      {/* header */}
      <div className="py-8">
        <Header>Expertise</Header>
        <p className="text-center font-poppins text-base lg:text-xl text-gray-500 dark:text-white/85 w-full">
          What I Specialize In
        </p>
      </div>

      {/* card */}
      <div className="mt-16">
        <DoCardAnimate>
          {expertiseData.map((details, i) => (
            <Card key={i} {...details} />
          ))}
        </DoCardAnimate>
      </div>

      <IconsAnimation />
    </div>
  );
};

export default Expertise;
