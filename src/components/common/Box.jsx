const Box = ({ icon, title, content }) => {
  return (
    <div className="p-2 rounded-md shadow-inner shadow-black">
      <div className="p-1 rounded-md shadow-inner shadow-sky-400">
        <div className="bg-black/80 flex flex-col justify-center items-center gap-3 px-8 py-6 rounded-md">
          <img src={icon} alt="" className="size-16" />
          <h2 className="font-inter font-bold text-2xl sm:text-4xl leading-6 sm:leading-10 text-header">
            {title}
          </h2>
          <p className="font-itim text-xl sm:text-2xl leading-4 sm:leading-6 text-white">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
