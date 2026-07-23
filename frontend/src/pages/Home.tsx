import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesPreview />
      <FeaturedProducts />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
