import React from "react";
import { projectsData } from "../data/ProjectData";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Project = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="pt-20 px-3">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="grid grid-cols-2 gap-3">
            {projectsData.map((project, index) => (
              <div
                onClick={() => nav(`/project/detail/${project.id}`)}
                key={index}
                className="bg-white border border-gray-300 shadow-lg flex flex-col rounded-xl p-5 mt-5 hover:shadow-xl transition-all duration-300 hover:bg-gray-100"
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
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Project;
