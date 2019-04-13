import React from 'react'

import './positionsTimeline.scss';

const PositionsTimeline = ({positions}) => {
  const items = positions.map((item, itemIndex) => {
    const itemClasses = ['container'];
    const orientation = (item.order % 2 == 0) ? 'left': 'right'
    itemClasses.push(orientation);
    return (
      <div key={itemIndex} className={itemClasses.join(' ')}>
        <div className="content">
          <h3>{item.date}</h3>
          <h4>{item.title}</h4>
          {item.projects.map((project, projectIndex)=>(
            <div key={projectIndex} className="projectItem">
              <h4>{project.title}:</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
    </div>
    );
  });

  return (
    <div className="timeline">
      {items}
    </div>
  )
}

export default PositionsTimeline
