import React from 'react';
import { travelFeatures } from '../../utils/travel';
import TravelFeature from './TravelFeature';

export default function TravelCTA() {
  return (
    <div className="bg-black/30 rounded-lg backdrop-blur-sm p-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-playfair text-white mb-4">
          Experience Luxury Travel with QueerLuxe
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join me for expertly curated travel experiences designed for the LGBTQ+ community.
        </p>
        <a
          href="https://queerluxetravel.com"
          className="inline-flex items-center px-6 py-3 border-2 border-emerald-green text-emerald-green hover:bg-emerald-green hover:text-black transition-colors duration-300 text-lg font-medium"
        >
          Plan Your Journey
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {travelFeatures.map((feature) => (
          <TravelFeature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}