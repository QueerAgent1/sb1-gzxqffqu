import React from 'react';
import TravelHeader from './TravelHeader';
import FeaturedDestinations from './FeaturedDestinations';
import TravelCTA from './TravelCTA';

export default function Travel() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-emerald-green/20" id="travel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TravelHeader />
        <FeaturedDestinations />
        <TravelCTA />
      </div>
    </section>
  );
}