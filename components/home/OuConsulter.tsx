'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OuConsulter() {
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

  const lieux = [
    {
      ville: 'Aix-en-Provence',
      adresse: '2 rue Pascal Fieschi',
      complement: 'Résidence l\'Empyrée Bât. B, 1er étage',
      horaire: null
    },
    {
      ville: 'Marseille 6e',
      adresse: 'Maison des Familles St François d\'Assise',
      complement: '116 boulevard Vauban',
      horaire: 'Le jeudi après-midi'
    },
    {
      ville: 'Visio',
      adresse: 'Consultations à distance',
      complement: 'Sur demande',
      horaire: null
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Où & comment consulter
        </h2>

        <div ref={sectionRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {lieux.map((lieu, index) => (
            <div
              key={index}
              className="reveal bg-white p-8 rounded-2xl shadow-sm hover-lift"
            >
              <h3 className="text-2xl font-serif text-primary mb-4">
                {lieu.ville}
              </h3>
              <p className="text-gray-700 mb-2 leading-relaxed">
                {lieu.adresse}
              </p>
              <p className="text-gray-600 mb-2 leading-relaxed">
                {lieu.complement}
              </p>
              {lieu.horaire && (
                <p className="text-primary font-medium mt-4">
                  {lieu.horaire}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href="https://planify.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover-lift"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}

