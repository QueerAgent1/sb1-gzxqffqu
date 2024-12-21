import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}