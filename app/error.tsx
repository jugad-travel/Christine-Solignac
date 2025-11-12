'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-4xl font-serif text-primary mb-4">
          Une erreur s'est produite
        </h1>
        <p className="text-gray-700 mb-8">
          Désolé, une erreur inattendue s'est produite.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

