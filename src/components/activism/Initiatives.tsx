import React from 'react';
import { Heart, Megaphone, Users } from 'lucide-react';
import Initiative from './Initiative';

const initiatives = [
  {
    icon: Heart,
    title: "Trans Youth Support",
    description: "Mentorship and resources for transgender youth",
    color: "text-electric-blue",
  },
  {
    icon: Megaphone,
    title: "Speaking Out",
    description: "Advocating for LGBTQ+ rights in fashion and beyond",
    color: "text-emerald-green",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Creating safe spaces and support networks",
    color: "text-deep-purple",
  },
];

export default function Initiatives() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {initiatives.map((initiative) => (
        <Initiative key={initiative.title} {...initiative} />
      ))}
    </div>
  );
}