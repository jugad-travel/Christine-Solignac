'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Faire un premier pas en toute sécurité
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Prendre rendez-vous est une démarche positive vers le changement.
        </p>
        <a
          href="https://planify.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover-lift"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}

