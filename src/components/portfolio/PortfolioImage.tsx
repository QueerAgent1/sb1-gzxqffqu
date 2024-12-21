import React from 'react';

interface PortfolioImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function PortfolioImage({ src, alt, category }: PortfolioImageProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-4 py-1 bg-electric-blue/20 text-electric-blue text-sm rounded-full mb-3">
            {category}
          </span>
          <p className="text-white text-lg font-playfair leading-relaxed">{alt}</p>
        </div>
      </div>
    </div>
  );
}