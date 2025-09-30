import { projectsInfo } from "../db";
import { Header } from "./common/Header";
import ProjectCard from "./projects/ProjectCard";
import ProjectsAnimate from "./projects/ProjectsAnimate";

const Projects = () => {
  return (
    <div id="Project" className="py-16 w-[90%] mx-auto">
      <Header>Projects</Header>
      <ProjectsAnimate>
        {projectsInfo.map((item) => (
          <div key={item.id}>
            <ProjectCard item={item} {...item} />
          </div>
        ))}
      </ProjectsAnimate>
    </div>
  );
};

export default Projects;
