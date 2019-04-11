import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons'

import './projectCard.scss';

const ProjectCard = ({name, image, description, details,
  projectLink, codeLink, tags}) => {

  const [flippedCard, setFlippedCard] = useState(false);

  function handleFLip(e) {
    setFlippedCard(!flippedCard);
  };

  const projectTags = tags.map((tag) => {
    return (<span className="tag">{tag}</span>);
  })
  const cardClasses = ['project-card'];

  if (flippedCard) {
    cardClasses.push('flipped-card');
  }

  return (
    <div className={cardClasses.join(' ')} onClick={ handleFLip }>
        <div className="project-card-inner">
            <div className="project-card-front">
                {image && <img src={image} className="project-img" alt="Avatar" />}
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="project-card-back">
                <h3>Technical Details</h3>
                <p>{details}</p>
                <div className="project-tags">
                  <h3> <FontAwesomeIcon icon={faTag} /> Tags</h3>
                  {projectTags}
                </div>
                <div className="actions">
                  {
                      projectLink &&
                      <a className="action-link" href={projectLink} target="_blank">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                  }
                  {
                      codeLink &&
                      <a className="action-link" href={codeLink} target="_blank">
                        <FontAwesomeIcon icon={faCode} />
                      </a>
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
