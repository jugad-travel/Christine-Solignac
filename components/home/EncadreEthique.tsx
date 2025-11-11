'use client';

import { useEffect, useRef } from 'react';

export default function EncadreEthique() {
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
      const items = sectionRef.current.querySelectorAll('.reveal');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const valeurs = [
    {
      titre: 'Confidentialité',
      description: 'Tous vos échanges sont strictement confidentiels'
    },
    {
      titre: 'Neutralité',
      description: 'Posture professionnelle sans parti pris'
    },
    {
      titre: 'Non-jugement',
      description: 'Un espace d\'écoute bienveillant et respectueux'
    },
    {
      titre: 'Supervision et formation continue',
      description: 'Pratique régulièrement supervisée et actualisée'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Cadre éthique
        </h2>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-6">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="reveal bg-gray-50 p-8 rounded-2xl shadow-sm hover-lift border border-gray-200"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-2">
                    {valeur.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valeur.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

