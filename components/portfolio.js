import React from 'react'

import './portfolio.scss';
import ProjectsGrid from './portfolioComponents/projectsGrid';

const Portfolio = () => {
  const projects = {
    'Juandastic': {
      name: 'Juandastic',
      image: '/static/projects/juandastic.png',
      description: 'This Static landing page is created to share the projects and knowledge from a developer.',
      details: 'This was built on NextJS and ReactJS, it is running on a Docker container inside a DigitalOcean server with Traefik as Reverse Proxy.',
      projectLink: 'http://juandastic.co',
      codeLink: 'https://github.com/juandastic/juandasticco',
      tags: [
        'NextJS',
        'ReactJS',
        'HTML & CSS',
        'Design',
        'Docker',
        'Traefik'
      ]
    },
    'Voice Recorder': {
      name: 'Voice Recorder',
      image: '/static/projects/voice-recorder.png',
      description: 'This Single page application is to record and manage voice audios directly from the browser.',
      details: 'This project was built on ReactJS, NodeJS - ExpressJS and MongoDB and it is running on a Docker container inside a DigitalOcean server with Traefik as Reverse Proxy.',
      projectLink: 'https://voice-recorder.gmz2.work',
      codeLink: 'https://github.com/juandastic/voice-recorder',
      tags: [
        'ReactJS',
        'HTML & CSS',
        'MongoDB',
        'Docker',
        'Traefik'
      ]
    },
    'ProCons': {
      name: 'ProCons',
      image: '/static/projects/procons.png',
      description: 'This Wordpress landing page offers construction services and consultant',
      details: 'This Web Site use Wordpress as CMS with a custom theme to fix with the client requirements, it is running on a Docker container inside a DigitalOcean server with Traefik as Reverse Proxy.',
      projectLink: 'https://procons.gmz2.work/',
      codeLink: '',
      tags: [
        'Wordpress',
        'Design',
        'HTML & CSS',
        'Docker',
        'Traefik'
      ]
    },
    'Catarsis': {
      name: 'Catarsis',
      image: '/static/projects/catarsis.png',
      description: 'This is a Wordpress interactive mental health blog where the posts are written by the users with their own account.',
      details: 'This Wordpress has a custom theme and implements plugins to manage the users and their posts, it also includes Custom Post Type and Login validations.',
      projectLink: 'https://catarsis.gmz2.work/',
      codeLink: '',
      tags: [
        'Wordpress',
        'Design',
        'HTML & CSS',
        'Docker',
        'Traefik'
      ]
    },
    'Malejo Mascotas': {
      name: 'Malejo Mascotas',
      image: '/static/projects/malejo.png',
      description: 'This is a Wordpress e-commerce for a pet shop to sell products and offers its services.',
      details: 'This Web Site was built on Wordpress and WooCommerce with a custom theme.',
      projectLink: 'https://malejomascotas.com',
      codeLink: '',
      tags: [
        'Wordpress',
        'E-commerce',
        'HTML & CSS',
        'Design'
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
