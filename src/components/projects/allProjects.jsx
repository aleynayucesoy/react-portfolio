import React from "react";
import INFO from "../../data/user";
import Project from "./project";

const AllProjects = () => {
  return (
    <div className="all-projects">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
