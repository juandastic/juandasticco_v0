import React from 'react'

import './index.scss';
import Cover from '../components/cover';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Experiences from '../components/experiences';
import Contact from '../components/contact';

const Home = () => (
  <React.Fragment>
    <Cover />
    <About />
    <Portfolio />
    <Experiences />
    <Contact />
  </React.Fragment>
)

export default Home
