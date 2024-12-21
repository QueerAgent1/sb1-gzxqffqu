import React from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#fashion', label: 'Fashion' },
  { href: '#travel', label: 'Travel' },
  { href: '#activism', label: 'Activism' },
  { href: '#contact', label: 'Contact' },
];

export default function NavLinks() {
  return (
    <div className="hidden md:block">
      <div className="flex items-baseline space-x-8">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-gray-300 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}