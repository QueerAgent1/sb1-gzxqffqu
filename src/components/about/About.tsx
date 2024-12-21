import React from 'react';
import AboutContent from './AboutContent';
import Achievements from './Achievements';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-deep-purple/20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutContent />
        <Achievements />
      </div>
    </section>
  );
}