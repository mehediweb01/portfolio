const WhatIDo = () => {
  return (
    <div>
      {/* header */}
      <div className="py-8">
        <h1 className="font-itim text-7xl sm:text-100 text-header text-center textShadow dark:[text-shadow:_3px_2px_1px_rgb(255_255_255_/_50%)]">
          What{" "}
          <span className="relative after:absolute after:content-['........'] after:text-center after:text-2xl after:animate-ping after:transition-all after:duration-300 after:bottom-[50%] after:-left-[10px]">
            I
          </span>{" "}
          do
        </h1>
        <p className="text-center font-itim text-4xl text-black dark:text-white/85 w-full after:content-['.services']  after:text-green-400 after:text-[35px] after:transition-all after:duration-1000 after:animate-indeterminate-bar relative after:absolute after:shadow-md after:shadow-sky-300 after:rounded-full after:px-2">
          my services
        </p>
      </div>
      {/* card */}
      <div>{/* card section */}</div>
    </div>
  );
};

export default WhatIDo;
