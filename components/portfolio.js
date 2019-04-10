import React from 'react'

import './portfolio.scss';
import ProjectsGrid from './portfolioComponents/projectsGrid';

const Portfolio = () => {
  const projects = {
    'Juandastic': {
      name: 'Juandastic',
      image: '/static/projects/juandastic.png',
      description: 'This Static landing page is created to share the projects and knowledge from a developer.',
      tags: [
        ''
      ]
    },
    'Voice Recorder': {
      name: 'Voice Recorder',
      image: '/static/projects/voice-recorder.png',
      description: 'This Single page application is to record and manage voice audios directly from the browser.',
      tags: [
        ''
      ]
    },
    'ProCons': {
      name: 'ProCons',
      image: '/static/projects/procons.png',
      description: 'This Wordpress landing page offers construction services and consultant',
      tags: [
        ''
      ]
    },
    'Catarsis': {
      name: 'Catarsis',
      image: '/static/projects/catarsis.png',
      description: 'This is a Wordpress interactive mental health blog where the posts are written by the users with their own account.',
      tags: [
        ''
      ]
    },
    'Malejo Mascotas': {
      name: 'Malejo Mascotas',
      image: '/static/projects/malejo.png',
      description: 'This is a Wordpress e-commerce for a pet shop to sell products and offers its services.',
      tags: [
        ''
      ]
    }
  };

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default Portfolio
