import HeaderAnimate from "./HeaderAnimate";

const AboutHeader = () => {
  return (
    <HeaderAnimate>
      <span className="text-3xl sm:text-4xl md:text-5xl leading-4 sm:leading-6">
        Hi, I&apos;m
      </span>
      <br />
      <span className="text-3xl sm:text-4xl md:text-[44px] leading-10 sm:leading-[56px] md:leading-[75px] before:content-[''] lg:before:content-['🪼'] lg:before:absolute lg:relative lg:before:w-full lg:before:h-full lg:before:text-red-500 lg:before:-bottom-5 lg:before:left-0 lg:before:text-2xl animate-text">
        Md. Mehedi Hasan
      </span>
    </HeaderAnimate>
  );
};

export default AboutHeader;
