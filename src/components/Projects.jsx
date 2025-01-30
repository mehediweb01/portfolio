import { Header } from "./common/Header";
import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  return (
    <div id="Project" className="py-16 w-[90%] mx-auto">
      <Header>Projects</Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start gap-5 mt-8">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
