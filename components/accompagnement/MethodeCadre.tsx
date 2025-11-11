export default function MethodeCadre() {
  const elements = [
    'Écoute active',
    'Approche systémique',
    'Cadre confidentiel et sécurisant',
    'Posture de neutralité',
    'Respect de l\'altérité'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-8">
          Méthode & cadre
        </h2>
        <div className="bg-white border-l-4 border-primary p-8 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            {elements.map((element, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 leading-relaxed">{element}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

