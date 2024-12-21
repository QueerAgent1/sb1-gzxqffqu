import React from 'react';
import { Crown } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Crown className="h-8 w-8 text-electric-blue" />
      <span className="ml-2 text-2xl font-playfair text-white">Octavia Opulence</span>
    </div>
  );
}