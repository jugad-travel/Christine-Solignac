'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PourquoiConsulter() {
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
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const raisons = [
    'Se comprendre, se repositionner, reprendre confiance.',
    'Retrouver une communication constructive.',
    'Clarifier un choix ou un projet de couple (mariage, parentalité, organisation de vie).'
  ];

  return (
    <section className="py-0 bg-white">
      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
          <Image
            src="/images/casey-horner-JIdmuiF9luY-unsplash.jpg"
            alt="Pourquoi consulter"
            fill
            className="object-cover"
            priority
          />
          {/* Dégradé - photo à droite, texte à gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
                Pourquoi consulter ?
              </h2>
              <ul className="space-y-6">
                {raisons.map((raison, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mt-2 flex-shrink-0 mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {raison}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

