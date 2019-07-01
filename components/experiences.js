import React from 'react'

import './experiences.scss';
import PositionsTimeline from './experiencesComponents/positionsTimeline';

const Experiences = () => {
  const positions = [
    {
      order: 3,
      date: '2019 - Current',
      title: 'La Haus',
      projects: [
        {
          title: 'lahaus.com',
          description: 'Product improvements to make La Haus the biggest real estate market place of LATAM'
        }
      ]
    },
    {
      order: 2,
      date: '2017 - 2019',
      title: 'Globant',
      projects: [
        {
          title: 'Disney USA: Disney Cruise Line Onboard Products',
          description: 'Implementation from scratch an Angular 5 and NodeJS application with a complete e-commerce flow.'
        },
        {
          title: 'Disney USA: Disney Cruise Line',
          description: 'Sustainment and new features on large guest-facing application build on AngularJS, NodeJS, and internal APIs.'
        }
      ]
    },
    {
      order: 1,
      date: '2016 - 2017',
      title: 'Fenix Cloud',
      projects: [
        {
          title: 'CI IBLU Colombia: Warehouse Management Systems‎',
          description: 'Develop of AngularJS, PHP-Laravel, HTML & CSS application for a custom WMS.'
        }
      ]
    },
    {
      order: 0,
      date: '2014 - 2016',
      title: 'everis',
      projects: [
        {
          title: 'Axa Brasil: Oracle Integrator',
          description: 'Develop a PL/SQL script to retrieve and transform data to share information between two applications.'
        },
        {
          title: 'TigoUne Colombia: Myse',
          description: 'Migration of legacy PHP application to Yii framework application.'
        },
        {
          title: 'Une Colombia: Mydos Ise',
          description: 'Sustainment and new features on internal Projects Management System build on PHP, HTML && CSS, and jQuery.'
        }
      ]
    }
  ];

  return (
    <div className="experiences">
      <h2>Experiences</h2>
      <PositionsTimeline positions={positions} />
    </div>
  )
}

export default Experiences
