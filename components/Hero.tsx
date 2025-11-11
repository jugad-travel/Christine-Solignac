import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
          Conseil Conjugal et Familial
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl">et Thérapie de Couple</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          J'accompagne des personnes seules et des couples qui souhaitent prendre soin de leurs relations affectives, relationnelles et sexuelles, avancer dans leur relation conjugale et accroître leur estime d'eux même.
        </p>
        
        <p className="text-lg text-gray-600 mb-12">
          À Aix-en-Provence, Marseille et en Visio
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="#rendez-vous"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous
          </Link>
          <Link 
            href="#accompagnement"
            className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg hover:bg-primary hover:text-white transition"
          >
            En savoir plus
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

