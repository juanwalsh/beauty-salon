import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Aesthetics from './Aesthetics';
import Editorial from './Editorial';
import About from './About';
import Team from './Team';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Transformation from './Transformation';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aesthetics />
      <Editorial />
      <About />
      <Team />
      <Gallery />
      <Testimonials />
      <Transformation />
    </>
  );
};

export default Home;