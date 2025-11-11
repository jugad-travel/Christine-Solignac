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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Ce que je propose
        </h2>

        <div ref={sectionRef} className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-3xl font-serif text-primary mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

