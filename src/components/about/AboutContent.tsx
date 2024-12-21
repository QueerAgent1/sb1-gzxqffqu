import React from 'react';
import { octaviaPhotos } from '../../utils/images';

export default function AboutContent() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-4xl font-playfair text-white mb-6">Breaking Barriers, Setting Standards</h2>
        <p className="text-gray-300 mb-6">
          As a trailblazing supermodel and activist, I've dedicated my career to redefining beauty standards 
          and championing inclusivity in the fashion industry. My journey from aspiring model to international 
          runway sensation has been marked by persistence, authenticity, and a commitment to lifting others up.
        </p>
        <p className="text-gray-300">
          Beyond the glamour of fashion weeks and magazine covers, I'm passionate about creating meaningful 
          change in the industry and advocating for transgender rights and representation.
        </p>
      </div>
      <div className="relative">
        <img 
          src={octaviaPhotos.about}
          alt="Octavia in an editorial photoshoot"
          className="rounded-lg shadow-2xl"
        />
        <div className="absolute -bottom-6 -right-6 bg-electric-blue w-32 h-32 rounded-full -z-10" />
      </div>
    </div>
  );
}