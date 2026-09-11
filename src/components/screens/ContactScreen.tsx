import React, { useState } from 'react';
import { ScreenId, Language } from '../../types';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Globe } from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  language
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Information générale');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2500);
  };

  const offices = [
    { city: 'Lomé, Togo', address: 'Boulevard du 13 Janvier, Quartier Administratif', phone: '+228 90 12 34 56' },
    { city: 'Dakar, Sénégal', address: 'Avenue Cheikh Anta Diop, Fann Résidence', phone: '+221 77 98 76 54' },
    { city: 'Abidjan, Côte d’Ivoire', address: 'Plateau, Immeuble Horizon Vert', phone: '+225 07 45 67 89' },
    { city: 'Paris, France (Bureau Diaspora)', address: 'Rue de Rivoli, 75001 Paris', phone: '+33 1 40 00 12 34' }
  ];

  return (
    <div className="bg-[#FAF9F5] text-slate-800 min-h-screen pb-24 px-4 py-6 selection:bg-amber-400 selection:text-slate-900">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h1 className="text-lg font-bold font-serif-brand text-[#0B2545] uppercase tracking-wider">
            Contact & Bureaux Régionaux
          </h1>
          <p className="text-xs text-slate-500">
            Une équipe à votre écoute pour toute collaboration ou information
          </p>
        </div>

        {/* WhatsApp Direct Banner */}
        <a
          href="https://wa.me/22890000000?text=Bonjour%20AEI,%20je%20vous%20contacte%20depuis%20l'application"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-emerald-600 text-white flex items-center justify-between shadow-md hover:bg-emerald-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-xs">WhatsApp Direct AEI</h3>
              <p className="text-[11px] text-emerald-100">Réponse rapide de notre secrétariat</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-white text-emerald-800 text-xs font-bold rounded-lg shadow-2xs">
            Écrire
          </span>
        </a>

        {/* Contact Form */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <h2 className="text-sm font-bold font-serif-brand text-[#0B2545]">
            Envoyez-nous un Message
          </h2>

          {sent ? (
            <div className="py-8 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-sm font-bold text-slate-900">Message bien envoyé !</h3>
              <p className="text-xs text-slate-500">Notre équipe reviendra vers vous très rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Votre Nom</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Ex: Jean Koffi"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="jean.koffi@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Objet</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium"
                >
                  <option value="Information générale">Information générale</option>
                  <option value="Demande de Bourse">Demande de Bourse d'Excellence</option>
                  <option value="Partenariat institutionnel">Proposition de Partenariat</option>
                  <option value="Projet Ecocity">Question sur le Projet Ecocity</option>
                  <option value="Don & Mécénat">Don & Mécénat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 gold-gradient-btn text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          )}
        </div>

        {/* Regional Offices */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider font-serif-brand">
            Nos Représentations Régionales
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {offices.map((off, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B2545] font-serif-brand">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{off.city}</span>
                </div>
                <p className="text-[11px] text-slate-500">{off.address}</p>
                <p className="text-[11px] font-semibold text-amber-800">{off.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
