import React from 'react';
import { Award, Star, Users } from 'lucide-react';
import Achievement from './Achievement';

const achievements = [
  {
    icon: Star,
    title: "International Covers",
    description: "Featured on leading fashion magazines worldwide",
  },
  {
    icon: Users,
    title: "Global Impact",
    description: "Inspiring millions through advocacy and representation",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards for modeling and activism",
  },
];

export default function Achievements() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {achievements.map((achievement) => (
        <Achievement key={achievement.title} {...achievement} />
      ))}
    </div>
  );
}