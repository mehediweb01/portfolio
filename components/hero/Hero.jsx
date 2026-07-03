import Details from "./Details";
import HeroAnimate from "./HeroAnimate";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      <HeroAnimate>
        <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-16 lg:flex-row mb-12">
          <Details />
          <HeroImage />
        </div>
      </HeroAnimate>
    </section>
  );
};

export default Hero;
