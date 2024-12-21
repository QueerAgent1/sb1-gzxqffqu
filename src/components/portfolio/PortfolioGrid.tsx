import React from 'react';
import PortfolioImage from './PortfolioImage';
import { octaviaPhotos } from '../../utils/images';
import type { Category } from '../../types/portfolio';

interface PortfolioGridProps {
  activeCategory: Category;
}

export default function PortfolioGrid({ activeCategory }: PortfolioGridProps) {
  const filteredImages = octaviaPhotos.fashion.filter(
    (image) => activeCategory === 'All' || image.category === activeCategory
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredImages.map((image) => (
        <PortfolioImage
          key={image.src}
          {...image}
        />
      ))}
    </div>
  );
}