'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ConsulterSeul() {
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
    'Séparation/veuvage',
    'Célibat pesant',
    'Décisions de vie',
    'Estime de soi',
    'Sexualité'
  ];

  const benefices = [
    'Mieux se comprendre',
    'Se positionner',
    'Poser des choix',
    'Regagner confiance'
  ];

  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16 pt-12 md:pt-24">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-primary text-center">
          Consulter seul(e)
        </h2>
      </div>

      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative h-[500px] sm:h-[550px] md:h-[650px] w-full overflow-hidden">
          <Image
            src="/images/caleb-ekeroth-wSBQFWF77lI-unsplash.jpg"
            alt="Consultation individuelle"
            fill
            className="object-cover"
          />
          {/* Dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
          
          {/* Contenu superposé */}
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:pl-6 md:pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl w-full">
              <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-primary mb-3 md:mb-6">
                  Situations fréquentes
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed">
                  {situations.join(' • ')}
                </p>

                <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-primary mb-2 md:mb-4 mt-4 md:mt-8">
                  Approche
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed">
                  Écoute active, clarification des schémas, recentrage sur ressources personnelles.
                </p>

                <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-primary mb-2 md:mb-4 mt-4 md:mt-8">
                  Bénéfices
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-8 leading-relaxed">
                  {benefices.join(' • ')}
                </p>

                <a
                  href="https://planify.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift mt-2 md:mt-4"
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

