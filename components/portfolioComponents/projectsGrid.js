import React from 'react'

import './projectsGrid.scss';
import ProjectCard from './projectCard';

const ProjectsGrid = ({projects}) => {
  const list = Object.keys(projects).map((key, index) => {
    return (
      <ProjectCard key={index} {...projects[key]} />
    );
  });
  return (
    <div className="projects">
      {list}
    </div>
  )
}

export default ProjectsGrid
