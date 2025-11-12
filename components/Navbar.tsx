'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <div className="text-lg md:text-2xl font-serif text-primary">Christine Solignac</div>
            <div className="text-xs text-gray-600 hidden sm:block">Conseil Conjugal et Familial</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary hover:opacity-80 transition">
              Accueil
            </Link>
            <Link href="/accompagnement" className="text-primary hover:opacity-80 transition">
              Mon accompagnement
            </Link>
            <Link href="/qui-suis-je" className="text-primary hover:opacity-80 transition">
              Qui suis-je
            </Link>
            <Link href="/contact" className="text-primary hover:opacity-80 transition">
              Contact & rendez-vous
            </Link>
            <a 
              href="https://planify.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link 
              href="/" 
              className="block text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/accompagnement" 
              className="block text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mon accompagnement
            </Link>
            <Link 
              href="/qui-suis-je" 
              className="block text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Qui suis-je
            </Link>
            <Link 
              href="/contact" 
              className="block text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact & rendez-vous
            </Link>
            <a 
              href="https://planify.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-white px-6 py-2 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Prendre rendez-vous
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

