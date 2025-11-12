'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

    // Gérer le chargement et la lecture de la vidéo avec transition
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const playVideo = async (video: HTMLVideoElement | null) => {
      if (video) {
        try {
          // Transition douce au démarrage
          video.style.opacity = '0';
          video.style.transition = 'opacity 1.5s ease-in-out';
          
          // Attendre que la vidéo soit prête
          if (video.readyState >= 2) {
            await video.play();
            setTimeout(() => {
              video.style.opacity = '1';
            }, 200);
          } else {
            video.addEventListener('loadeddata', () => {
              video.play().then(() => {
                setTimeout(() => {
                  video.style.opacity = '1';
                }, 200);
              });
            }, { once: true });
          }
        } catch (error) {
          console.log('Erreur de lecture vidéo:', error);
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleVideoLoad);
      playVideo(videoRef.current);
    }

    if (videoRefMobile.current) {
      videoRefMobile.current.addEventListener('loadeddata', handleVideoLoad);
      playVideo(videoRefMobile.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={sectionRef} className="relative reveal w-full">
        {/* Version Mobile */}
        <div className="md:hidden relative min-h-[85vh] w-full overflow-hidden">
          <div className="relative h-full w-full min-h-[85vh]">
            <video
              ref={videoRefMobile}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            >
              <source src="/images/66823-520427407_small.mp4" type="video/mp4" />
            </video>
            {/* Dégradé de gauche à droite */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0"></div>
          </div>
          
          {/* Contenu superposé */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 py-12 z-10">
            <div className="max-w-lg">
              <div className="space-y-6">
                {/* Titre avec séparation élégante */}
                <div className="space-y-3 pb-4 border-b border-primary/20">
                  <h1 className="text-3xl font-serif text-primary leading-tight drop-shadow-sm">
                    Conseil conjugal et familial
                  </h1>
                  <p className="text-xl font-serif text-primary/90 italic drop-shadow-sm">
                    & Thérapie de couple
                  </p>
                </div>
                
                {/* Premier paragraphe avec emphase */}
                <p className="text-base text-gray-800 leading-relaxed font-light tracking-wide drop-shadow-sm">
                  Retrouver un dialogue apaisé, clarifier vos choix, restaurer la confiance — <span className="font-normal text-primary">seul(e), en couple ou en famille</span>.
                </p>

                {/* Séparateur décoratif */}
                <div className="flex items-center space-x-2 py-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"></div>
                </div>

                {/* Deuxième paragraphe */}
                <p className="text-sm text-gray-700 leading-relaxed drop-shadow-sm">
                  Dans un cadre <span className="font-medium text-gray-800">confidentiel et sécurisant</span>, je vous aide à mettre des mots sur ce que vous vivez, à comprendre vos fonctionnements relationnels et à poser des choix libres pour avancer.
                </p>

                {/* Bouton avec espacement raffiné */}
                <div className="pt-6">
                  <a 
                    href="https://planify.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-8 py-4 rounded-full text-base text-center font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden md:block relative h-[90vh] w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
          >
            <source src="/images/66823-520427407_small.mp4" type="video/mp4" />
          </video>
          {/* Dégradé de gauche à droite */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          
          {/* Contenu superposé à gauche */}
          <div className="absolute inset-0 flex items-center justify-start pl-16 lg:pl-24 xl:pl-32 z-10">
            <div className="max-w-2xl text-left">
              <h1 className="text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
                Conseil conjugal et familial
                <br />
                <span className="text-5xl lg:text-6xl">& Thérapie de couple</span>
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed font-light">
                Retrouver un dialogue apaisé, clarifier vos choix, restaurer la confiance — seul(e), en couple ou en famille.
              </p>

              {/* Séparateur décoratif */}
              <div className="flex items-center space-x-3 py-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"></div>
              </div>

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

