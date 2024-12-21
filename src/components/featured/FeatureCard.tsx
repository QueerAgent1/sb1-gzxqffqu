import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
  iconColor: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  linkText,
  href,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
      <Icon className={`h-10 w-10 ${iconColor} mb-4`} />
      <h3 className="text-2xl font-playfair text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={href} className={`${iconColor} hover:text-white transition-colors`}>
        {linkText} →
      </a>
    </div>
  );
}