import React from 'react';
import { Globe, Camera, Heart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Globe,
    title: 'Luxury Travel',
    description: 'Discover the most exclusive destinations and experiences around the world.',
    linkText: 'Explore Destinations',
    href: '#travel',
    iconColor: 'text-electric-blue',
  },
  {
    icon: Camera,
    title: 'Latest Shoots',
    description: 'Behind the scenes of my recent fashion campaigns and editorial work.',
    linkText: 'View Gallery',
    href: '#fashion',
    iconColor: 'text-emerald-green',
  },
  {
    icon: Heart,
    title: 'Advocacy',
    description: 'Supporting and empowering the LGBTQ+ community through activism.',
    linkText: 'Learn More',
    href: '#activism',
    iconColor: 'text-deep-purple',
  },
];

export default function FeaturedContent() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-deep-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair text-white text-center mb-16">Latest Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.href} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}