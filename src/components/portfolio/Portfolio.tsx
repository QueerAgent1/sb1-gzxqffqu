import React, { useState } from 'react';
import PortfolioHeader from './PortfolioHeader';
import PortfolioFilters from './PortfolioFilters';
import PortfolioGrid from './PortfolioGrid';
import type { Category } from '../../types/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  return (
    <section className="py-20 bg-black" id="fashion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioHeader />
        <PortfolioFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <PortfolioGrid activeCategory={activeCategory} />
      </div>
    </section>
  );
}