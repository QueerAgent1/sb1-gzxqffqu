import React from 'react';
import HeroContent from './HeroContent';
import { octaviaPhotos } from '../../utils/images';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${octaviaPhotos.hero}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}