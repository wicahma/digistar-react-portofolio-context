import React from "react";
import { projectsData } from "../data/ProjectData";
import { Outlet } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <>
      <div className="pt-20 px-3 text-gray-900 dark:text-gray-400">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="grid grid-cols-2 gap-3">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Project;
