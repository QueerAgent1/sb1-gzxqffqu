import React from 'react';
import { Crown } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Crown className="h-8 w-8 text-electric-blue" />
            <span className="ml-2 text-2xl font-playfair text-white">Octavia Opulence</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#fashion" className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors">
                Fashion
              </a>
              <a href="#travel" className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors">
                Travel
              </a>
              <a href="#activism" className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors">
                Activism
              </a>
              <a href="#contact" className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}