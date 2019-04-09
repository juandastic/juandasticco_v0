import React from 'react'

import './about.scss';
import SkillsGrid from './aboutComponents/skillsGrid';

function About() {
  const skills = {
    'HTML & CSS':[
      {
        name: 'HTML5',
        logo: '/static/img/html5.png'
      },
      {
        name: 'CSS3',
        logo: '/static/img/css3.png'
      },
      {
        name: 'Sass',
        logo: '/static/img/sass.png'
      },
      {
        name: 'Jekyll',
        logo: '/static/img/jekyll.png'
      },
      {
        name: 'Bootstrap',
        logo: '/static/img/bootstrap.png'
      },
      {
        name: 'Foundation',
        logo: '/static/img/foundation.png'
      }
    ],
    'Javascript': [
      {
        name: 'Angular',
        logo: '/static/img/angular.png'
      },
      {
        name: 'ReactJS',
        logo: '/static/img/react.png'
      },
      {
        name: 'Ionic',
        logo: '/static/img/ionic.png'
      },
      {
        name: 'Javascript',
        logo: '/static/img/javascript.png'
      },
      {
        name: 'jQuery',
        logo: '/static/img/jquery.png'
      }
    ],
    'Back-End': [
      {
        name: 'NodeJS',
        logo: '/static/img/nodejs.png'
      },
      {
        name: 'Django',
        logo: '/static/img/django.png'
      },
      {
        name: 'Laravel',
        logo: '/static/img/laravel.png'
      },
      {
        name: 'MongoDB',
        logo: '/static/img/mongodb.png'
      },
      {
        name: 'MySQL',
        logo: '/static/img/mysql.png'
      }
    ],
    'Platforms & Build Tools': [
      {
        name: 'Docker',
        logo: '/static/img/docker.png'
      },
      {
        name: 'Traefic',
        logo: '/static/img/traefik.png'
      },
      {
        name: 'Grunt',
        logo: '/static/img/grunt.png'
      },
      {
        name: 'Gulp',
        logo: '/static/img/gulp.png'
      },
      {
        name: 'Webpack',
        logo: '/static/img/webpack.png'
      },
      {
        name: 'Wordpress',
        logo: '/static/img/wordpress.png'
      }
    ]
  }

  return (
    <div className="about">
      <h2>About</h2>
      <p>
        I live in Medellín Colombia and I have 4+ year as Web Developer, recently,
        I have worked with JavaScript and mostly with Front-end technologies in small and large projects.
      </p>
      <p> I have knowledge and experience working with :</p>
      <SkillsGrid skills={skills} />
    </div>
  )
}

export default About
