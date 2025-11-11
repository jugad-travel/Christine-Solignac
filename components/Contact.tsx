'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'rendez-vous',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message. Je vous contacterai bientôt.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Contact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-serif text-primary mb-6">
              Adresses de consultation
            </h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-primary mb-2">Aix-en-Provence</h4>
                <p className="leading-relaxed">
                  2 rue Pascal Fieschi<br />
                  Résidence l'Empyrée Bât. B, 1er étage
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Marseille 6e</h4>
                <p className="leading-relaxed">
                  Les jeudis après-midi<br />
                  Maison des Familles St François d'Assise<br />
                  116 boulevard Vauban
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Visio</h4>
                <p className="leading-relaxed">
                  Consultations à distance disponibles
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h3 id="rendez-vous" className="text-2xl font-serif text-primary mb-6">
              Prendre rendez-vous
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de consultation
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="rendez-vous">Rendez-vous</option>
                  <option value="consultation-seule">Consultation seule</option>
                  <option value="consultation-couple">Consultation en couple</option>
                  <option value="enfants">Parler d'affectivité avec enfant</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Décrivez brièvement votre situation et vos besoins..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

