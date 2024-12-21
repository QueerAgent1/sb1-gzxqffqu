import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function DestinationCard({ title, description, image, link }: DestinationCardProps) {
  return (
    <a 
      href={link}
      className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-playfair text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </a>
  );
}