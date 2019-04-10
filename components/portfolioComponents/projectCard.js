import React from 'react'

import './projectCard.scss';

const ProjectCard = ({name, image, description}) => {
  return (
    <div className="project-card">
        <div class="project-card-inner">
            <div class="project-card-front">
                {image && <img src={image} className="project-img" alt="Avatar" />}
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div class="project-card-back">
                <h3>Technical Details</h3>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
