import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-2">Christine Solignac</h3>
            <p className="text-sm opacity-90">Conseil Conjugal et Familial</p>
            <p className="text-sm opacity-90 mt-1">Thérapie de Couple</p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-serif mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#accompagnement" className="hover:opacity-80 transition">
                  Mon accompagnement
                </Link>
              </li>
              <li>
                <Link href="/#qui-suis-je" className="hover:opacity-80 transition">
                  Qui suis-je
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:opacity-80 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-4">Adresses de consultation</h4>
            <div className="text-sm space-y-2 opacity-90">
              <p>
                <strong>Aix-en-Provence</strong><br />
                2 rue Pascal Fieschi<br />
                Résidence l'Empyrée Bât. B, 1er étage
              </p>
              <p className="mt-4">
                <strong>Marseille 6e</strong><br />
                Les jeudis après-midi<br />
                Maison des Familles St François d'Assise<br />
                116 boulevard Vauban
              </p>
              <p className="mt-4">
                <strong>Visio</strong><br />
                Consultations à distance disponibles
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Christine Solignac - Conseil Conjugal et Familial</p>
        </div>
      </div>
    </footer>
  );
}

