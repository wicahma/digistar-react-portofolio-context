import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/project/detail/${project.id}`)}
      key={index}
      className="bg-white dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-500 shadow-lg flex flex-col rounded-xl p-5 mt-5 hover:shadow-xl transition-all duration-300 hover:bg-gray-100"
    >
      <h2 className="text-3xl font-semibold">{project.name}</h2>
      <p className="mt-3">{project.shortDescription}</p>
      <a
        onClick={(e) => e.stopPropagation()}
        href={project.webUrl}
        target="_blank"
        className="rounded-lg w-fit bg-orange-500 text-white px-3 py-1 font-medium mt-8 hover:bg-orange-600"
      >
        <p className="hover:underline">Visit Website</p>
      </a>
    </div>
  );
};

export default ProjectCard;
