'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CeQueJePropose() {
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

  const services = [
    {
      title: 'Conseil conjugal et familial',
      description: 'Écoute active, mise en mots, recentrage sur les besoins.',
      image: '/images/jochen-van-wylick-ex0pl-zo7NM-unsplash.jpg'
    },
    {
      title: 'Thérapie de couple (approche systémique)',
      description: 'Explorer les schémas relationnels/communication pour faire évoluer les comportements sources de tension.',
      image: '/images/klara-kulikova-tS_p3fpe8iQ-unsplash.jpg'
    },
    {
      title: 'Accompagnement des parents / EVRAS',
      description: 'Soutien pour aborder affectivité/sexualité avec les enfants/adolescents.',
      image: '/images/kevin-delvecchio-7noZJ_4nhU8-unsplash.jpg'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center">
          Ce que je propose
        </h2>
      </div>

      <div ref={sectionRef} className="space-y-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="reveal relative w-full"
          >
            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              {/* Dégradé */}
              <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-white via-white/85 to-transparent' : 'bg-gradient-to-l from-white via-white/85 to-transparent'}`}></div>
              
              {/* Contenu superposé */}
              <div className={`absolute inset-0 flex items-center ${index % 2 === 0 ? 'justify-start px-4 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32' : 'justify-end px-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32'}`}>
                <div className={`max-w-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-primary mb-3 md:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

