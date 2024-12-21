import React from 'react';
import ActivismContent from './ActivismContent';
import Initiatives from './Initiatives';

export default function Activism() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple/20 to-black" id="activism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActivismContent />
        <Initiatives />
      </div>
    </section>
  );
}