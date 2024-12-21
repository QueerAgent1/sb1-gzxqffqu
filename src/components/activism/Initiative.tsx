import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InitiativeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function Initiative({ icon: Icon, title, description, color }: InitiativeProps) {
  return (
    <div className="p-6 bg-black/30 rounded-lg backdrop-blur-sm">
      <Icon className={`h-10 w-10 ${color} mb-4`} />
      <h3 className="text-xl font-playfair text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}