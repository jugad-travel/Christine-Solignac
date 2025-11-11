'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VenirEnCouple() {
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

  const situations = [
    'Incompréhensions',
    'Conflits récurrents',
    'Éducation des enfants',
    'Pertes d\'élan amoureux',
    'Question de séparation',
    'Infidélité',
    'Désir d\'enfant/arrivée d\'un enfant'
  ];

  const benefices = [
    'Restaurer le dialogue',
    'Clarifier le projet de couple',
    'Reconstruire la confiance'
  ];

  return (
    <section className="py-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-24">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center">
          Venir en couple
        </h2>
      </div>

      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative h-[600px] md:h-[650px] w-full overflow-hidden">
          <Image
            src="/images/timo-stern-EvcUtLF12XQ-unsplash.jpg"
            alt="Thérapie de couple"
            fill
            className="object-cover"
          />
          {/* Dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
          
          {/* Contenu superposé */}
          <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                  Situations
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {situations.join(' • ')}
                </p>

                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 mt-8">
                  Approche (thérapie systémique)
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Explorer fonctionnements relationnels et modes de communication, favoriser compréhension mutuelle et décisions éclairées (transformer/continuer ou se séparer avec moins de souffrance).
                </p>

                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 mt-8">
                  Bénéfices
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {benefices.join(' • ')}
                </p>

                <a
                  href="https://planify.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift mt-4"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

