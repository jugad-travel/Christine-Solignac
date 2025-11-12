import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-4xl font-serif text-primary mb-4">
          404 - Page non trouvée
        </h1>
        <p className="text-gray-700 mb-8">
          La page que vous recherchez n'existe pas.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

