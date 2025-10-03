import { projectsInfo } from "@/db";
import { Header } from "../common/Header";
import ProjectCard from "./ProjectCard";
import ProjectsAnimate from "./ProjectsAnimate";

const Projects = () => {
  return (
    <div id="Projects" className="py-16 w-[90%] mx-auto">
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
