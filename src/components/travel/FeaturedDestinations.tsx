import React from 'react';
import { destinations } from '../../utils/travel';
import DestinationCard from './DestinationCard';

export default function FeaturedDestinations() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {destinations.map((destination) => (
        <DestinationCard key={destination.title} {...destination} />
      ))}
    </div>
  );
}