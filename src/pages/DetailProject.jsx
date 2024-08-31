import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectData";

const DetailProject = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));
  const nav = useNavigate();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        nav("/project");
      }}
      className="fixed top-0 left-0 h-screen w-screen bg-black/20 flex justify-center items-center z-10"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="w-[40%] bg-white h-[80%] rounded-xl border border-gray-400 p-4 overflow-y-auto"
      >
        <div className="flex gap-3 items-center">
          <a
            onClick={(e) => {
              e.stopPropagation();
            }}
            href={project.webUrl}
            target="_blank"
            className="text-3xl font-semibold hover:underline "
          >
            {project.name}
          </a>
          <p className="bg-orange-400 rounded-lg flex justify-center items-center px-2 text-white text-sm h-fit py-1">
            {project.status}
          </p>
        </div>
        <h3 className="mt-5 text-xl font-medium">Repository</h3>
        <div className="flex gap-2 mt-2">
          {Object.keys(project.githubUrl).map((name, index) => (
            <a
              key={index}
              onClick={(e) => e.stopPropagation()}
              href={project.githubUrl[name]}
              target="_blank"
              className="bg-orange-400 hover:bg-orange-500 transiti duration-300 px-3 py-1 text-white uppercase text-sm font-medium rounded-lg"
            >
              {name}
            </a>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-medium">Tech Stack</h3>
        <div className="flex gap-1">
          {project.techStack.map((tech, index) => (
            <p
              key={index}
              className="bg-orange-400 text-white px-2 py-1 rounded-lg inline-block text-sm font-medium mt-2"
            >
              {tech}
            </p>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-medium">Description</h3>
        <div className="space-y-3">
          {project.description.map((desc, index) => (
            <p key={index} className="text-justify">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
