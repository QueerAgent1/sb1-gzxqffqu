import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TravelFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TravelFeature({ icon: Icon, title, description }: TravelFeatureProps) {
  return (
    <div className="text-center">
      <Icon className="h-10 w-10 text-emerald-green mx-auto mb-4" />
      <h4 className="text-xl font-playfair text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}