const HomePage = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-[url('./bg-image.png')] bg-center bg-cover bg-no-repeat"
    >
      {/* <div className="bg-black min-h-screen bg-opacity-50 text-white flex items-center justify-center gap-16 pb-8 px-2 sm:py-0 py-16"> */}
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 items-start sm:items-center sm:ms-0 ms-4">
          <img
            src="./mehedi-profile.png"
            alt="mehedi-profile"
            className="w-44 sm:w-52 md:w-60 rounded-full shadow-btn"
          />

          <h1 className="flex flex-col max-w-lg">
            <span className="uppercase text-4xl sm:text-6xl tracking-[3px] font-itim text-header">
              welcome !
            </span>
            <span className="flex flex-col gap-3 font-serif">
              <span className="sm:text-5xl text-2xl font-medium text-activeColor tracking-[2px] ms-5">
                Md. Mehedi Hasan ,
              </span>
              <span className="sm:text-3xl text-xl ms-5 text-whites ">
                Front-End Web Developer. Explore my portfolio to see my work.
              </span>
            </span>
          </h1>
        </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
