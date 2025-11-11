'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LeCabinet() {
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-primary text-center mb-16">
          Le cabinet
        </h2>

        <div ref={sectionRef} className="space-y-12">
          {/* Photos du cabinet */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg reveal">
              <Image
                src="/images/cabinet christine solignac 1 .jpg"
                alt="Cabinet Christine Solignac - Aix-en-Provence"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg reveal">
              <Image
                src="/images/cabinet christine solignac 2 .jpg"
                alt="Cabinet Christine Solignac - Aix-en-Provence"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Google Maps et informations */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg reveal">
              <div className="relative h-[350px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5!2d5.45!3d43.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8b8b8b8b8b8%3A0x0!2s2%20Rue%20Pascal%20Fieschi%2C%2013080%20Aix-en-Provence!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Localisation du cabinet - 2 Rue Pascal Fieschi, Aix-en-Provence"
                ></iframe>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-2">
                  <strong className="text-primary">2 Rue Pascal Fieschi</strong>
                </p>
                <p className="text-gray-600">
                  13080 Aix-en-Provence
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Résidence l'Empyrée Bât. B, 1er étage
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl reveal">
              <h3 className="text-2xl font-serif text-primary mb-6">
                Informations pratiques
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 01 6 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-700">En transport en commun</p>
                    <p className="text-sm text-gray-600">29 minutes depuis le centre-ville</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-700">En voiture</p>
                    <p className="text-sm text-gray-600">10 minutes depuis le centre-ville</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block text-primary hover:opacity-80 transition font-medium"
              >
                Voir tous les détails →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

