import React from 'react'

import './skillsGrid.scss';

const SkillsGrid = ({ skills }) => {
  const list = Object.keys(skills).map((key, categoryIndex) => {
    const items = skills[key].map((item, skillIndex)=>(
      <li key={skillIndex}>
        {item.logo && <img src={item.logo} />}
        {item.name}
      </li>
    ))
    return (
      <div key={categoryIndex}>
        <h3>{key}</h3>
        <ul>
          {items}
        </ul>
      </div>
    );
  });

  return (
    <div className="skills-grid">
      {list}
    </div>
  )
}

export default SkillsGrid
