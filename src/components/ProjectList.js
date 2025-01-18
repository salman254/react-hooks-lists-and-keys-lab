import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // Ensure projects are being passed correctly

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Map over projects and render ProjectItem components */}
        {projects.map((project) => (
          <ProjectItem 
            key={project.id} 
            name={project.name} 
            about={project.about} 
            technologies={project.technologies} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
