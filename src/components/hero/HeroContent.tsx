import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="max-w-3xl animate-fadeUp">
      <h1 className="text-6xl md:text-8xl font-playfair text-white mb-8 leading-tight">
        Redefining <br />
        <span className="bg-gradient-to-r from-electric-blue to-emerald-green bg-clip-text text-transparent">
          Beauty & Luxury
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
        Breaking barriers and setting new standards while advocating for 
        transgender rights and curating luxury experiences.
      </p>
      <div className="flex space-x-6">
        <a 
          href="#about" 
          className="group px-8 py-4 bg-electric-blue text-black rounded-full font-medium hover:bg-white transition-all duration-300 flex items-center"
        >
          Explore My Journey
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#contact" 
          className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}