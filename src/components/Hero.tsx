import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6">
              Supermodel. Activist. <br />
              Your Guide to Luxury
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Breaking barriers and redefining beauty standards while advocating for 
              transgender rights and luxury travel experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#about" 
                className="inline-flex items-center px-6 py-3 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Explore My Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}