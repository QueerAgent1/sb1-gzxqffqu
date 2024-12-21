import React from 'react';
import { portfolioCategories } from '../../utils/portfolio';
import type { Category } from '../../types/portfolio';

interface PortfolioFiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function PortfolioFilters({ activeCategory, onCategoryChange }: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {portfolioCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-electric-blue text-black'
              : 'bg-black/30 text-gray-300 hover:bg-electric-blue/20 hover:text-electric-blue'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}