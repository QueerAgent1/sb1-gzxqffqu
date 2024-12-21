import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AchievementProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Achievement({ icon: Icon, title, description }: AchievementProps) {
  return (
    <div className="text-center p-6 bg-black/30 rounded-lg backdrop-blur-sm">
      <Icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
      <h3 className="text-xl font-playfair text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}