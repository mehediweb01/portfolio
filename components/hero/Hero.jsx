import ActionButtons from "./ActionButtons";
import Details from "./Details";
import HeroAnimate from "./HeroAnimate";

const Hero = () => {
  return (
    <HeroAnimate>
      <div className="bg-black/65 sm:min-h-screen h-fit bg-opacity-50 text-white flex sm:items-center items-start justify-center gap-16 px-2 sm:py-0 py-8 relative">
        <div className="absolute top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-transparent shadow-[20px_50px_150px_50px_#17DFF5]" />

        <div className="flex flex-col gap-4 items-center sm:ms-0 ms-4">
          <Details />
          <ActionButtons />
        </div>
      </div>
    </HeroAnimate>
  );
};

export default Hero;
