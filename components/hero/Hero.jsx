import Details from "./Details";
import HeroAnimate from "./HeroAnimate";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <HeroAnimate>
      <div className="flex justify-center items-center sm:flex-row flex-col-reverse gap-4">
        <div className="sm:w-[60%] w-full">
          <Details />
        </div>
        <div>
          <HeroImage />
        </div>
      </div>
    </HeroAnimate>
  );
};

export default Hero;
