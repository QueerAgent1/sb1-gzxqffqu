import React from 'react';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import FeaturedContent from './components/featured/FeaturedContent';
import Portfolio from './components/portfolio/Portfolio';
import Activism from './components/activism/Activism';
import Travel from './components/travel/Travel';
import Contact from './components/contact/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <FeaturedContent />
      <Portfolio />
      <Activism />
      <Travel />
      <Contact />
    </div>
  );
}