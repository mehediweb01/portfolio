export const Header = ({ children }) => {
  return (
    <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl text-center dark:textShadow dark:[text-shadow:_3px_2px_1px_rgb(255_255_255_/_20%)] tracking-[3px] dark:text-header text-black">
      {children}
    </h1>
  );
};
