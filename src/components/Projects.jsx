import { useState } from "react";
import { projectsInfo } from "../db";
import { Header } from "./common/Header";
import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Modal Open
  const handleOpen = (item) => {
    setSelectedData(item);
    setIsOpen(true);
  };
  // Modal Close
  const handleClose = () => {
    setIsOpen(false);
    setSelectedData(null);
  };

  return (
    <div id="Project" className="py-16 w-[90%] mx-auto">
      <Header>Projects</Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-start gap-5 gap-y-6 mt-14">
        {projectsInfo.map((item) => (
          <div key={item.id}>
            <ProjectCard
              {...item}
              onOpen={() => handleOpen(item)}
              onOpenChange={(open) => !open && handleClose()}
              isOpen={isOpen}
              selectedItem={selectedData}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
