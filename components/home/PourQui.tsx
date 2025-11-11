'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PourQui() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.reveal');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Personnes seules',
      description: 'Décisions de vie, séparation/veuvage, estime de soi, sexualité, blocages personnels.',
      image: '/images/caleb-ekeroth-wSBQFWF77lI-unsplash.jpg',
      alt: 'Personne seule en réflexion'
    },
    {
      title: 'Couples',
      description: 'Communication rompue, conflits récurrents, désaccords éducatifs, baisse du désir, infidélité, projet commun à (re)construire.',
      image: '/images/timo-stern-EvcUtLF12XQ-unsplash.jpg',
      alt: 'Couple en échange'
    },
    {
      title: 'Parents / enfant',
      description: 'Parler d\'affectivité et de sexualité, poser des limites, accompagner face aux contenus en ligne.',
      image: '/images/luemen-rutkowski-ZWbBxZ6zTwM-unsplash.jpg',
      alt: 'Communication parent-enfant'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Pour qui ?
        </h2>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover-lift"
            >
              <div className="relative h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {card.description}
                </p>
                <Link
                  href="/contact"
                  className="text-primary hover:opacity-80 transition inline-flex items-center"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

