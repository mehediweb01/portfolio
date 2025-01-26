import ProgressBar from "./common/Progress";

const Skills = () => {
  return (
    <div id="Skills" className="pt-16">
      <div>
        {/* Title */}
        <h1 className="font-itim text-7xl sm:text-100 text-header text-center textShadow dark:[text-shadow:_3px_2px_1px_rgb(255_255_255_/_50%)]">
          Skills
        </h1>
        {/* details */}
        <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start sm:gap-2 gap-5 mx-4 my-12">
          {/* left section */}
          <div>
            <img
              src="./skills.png"
              alt="skills image"
              className="w-full h-72 sm:h-80 md:h-96"
            />
          </div>
          {/* right section */}
          <div className="space-y-4">
            <ProgressBar value={95} label={"HTML & CSS"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
