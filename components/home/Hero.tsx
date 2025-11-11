'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
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

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div ref={sectionRef} className="relative reveal w-full">
        <div className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="/images/christine solignac B&W.png"
            alt="Christine Solignac"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dégradé - photo à droite, texte à gauche - moins opaque pour voir Christine */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/60 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
                Conseil conjugal et familial
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">& Thérapie de couple</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light">
                Retrouver un dialogue apaisé, clarifier vos choix, restaurer la confiance — seul(e), en couple ou en famille.
              </p>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Dans un cadre confidentiel et sécurisant, je vous aide à mettre des mots sur ce que vous vivez, à comprendre vos fonctionnements relationnels et à poser des choix libres pour avancer.
              </p>

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
        </div>
      </div>
    </section>
  );
}

