import { Globe, Compass, Map } from 'lucide-react';

export const destinations = [
  {
    title: "Maldives Retreat",
    description: "Luxury overwater villas with private pools",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#maldives",
  },
  {
    title: "Amalfi Coast",
    description: "Cliffside luxury hotels with Mediterranean views",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#amalfi",
  },
  {
    title: "Dubai Opulence",
    description: "Sky-high luxury in the heart of the desert",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "#dubai",
  },
] as const;

export const travelFeatures = [
  {
    icon: Globe,
    title: "Curated Experiences",
    description: "Hand-picked luxury destinations",
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Personalized travel planning",
  },
  {
    icon: Map,
    title: "Hidden Gems",
    description: "Exclusive access to unique locations",
  },
] as const;