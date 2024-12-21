import React from 'react';
import { Globe, Camera, Heart } from 'lucide-react';

export default function FeaturedContent() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-deep-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair text-white text-center mb-16">Latest Features</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Travel Feature */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <Globe className="h-10 w-10 text-electric-blue mb-4" />
            <h3 className="text-2xl font-playfair text-white mb-3">Luxury Travel</h3>
            <p className="text-gray-300 mb-4">
              Discover the most exclusive destinations and experiences around the world.
            </p>
            <a href="#travel" className="text-electric-blue hover:text-white transition-colors">
              Explore Destinations →
            </a>
          </div>

          {/* Fashion Feature */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <Camera className="h-10 w-10 text-emerald-green mb-4" />
            <h3 className="text-2xl font-playfair text-white mb-3">Latest Shoots</h3>
            <p className="text-gray-300 mb-4">
              Behind the scenes of my recent fashion campaigns and editorial work.
            </p>
            <a href="#fashion" className="text-emerald-green hover:text-white transition-colors">
              View Gallery →
            </a>
          </div>

          {/* Activism Feature */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <Heart className="h-10 w-10 text-deep-purple mb-4" />
            <h3 className="text-2xl font-playfair text-white mb-3">Advocacy</h3>
            <p className="text-gray-300 mb-4">
              Supporting and empowering the LGBTQ+ community through activism.
            </p>
            <a href="#activism" className="text-deep-purple hover:text-white transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}