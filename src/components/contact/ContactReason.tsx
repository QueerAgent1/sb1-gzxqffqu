import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactReasonProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ContactReason({ icon: Icon, title, description }: ContactReasonProps) {
  return (
    <div className="p-6 bg-black/30 rounded-lg backdrop-blur-sm">
      <Icon className="h-8 w-8 text-electric-blue mb-4" />
      <h3 className="text-xl font-playfair text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}