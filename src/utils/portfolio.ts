import { type Category } from '../types/portfolio';

export const portfolioCategories: Category[] = [
  'All',
  'Editorial',
  'Runway',
  'Print',
  'Behind the Scenes',
] as const;

export const portfolioImages = [
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    alt: 'Editorial fashion shot in Paris',
    category: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1596902852634-c6ca8e147eda',
    alt: 'Haute couture runway show',
    category: 'Runway',
  },
  {
    src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    alt: 'Vogue magazine cover shoot',
    category: 'Print',
  },
  {
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    alt: 'Behind the scenes at fashion week',
    category: 'Behind the Scenes',
  },
  {
    src: 'https://images.unsplash.com/photo-1576828831022-ca41d3905fb7',
    alt: 'High fashion editorial in New York',
    category: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    alt: 'Milan Fashion Week runway show',
    category: 'Runway',
  },
] as const;