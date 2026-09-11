import React, { useState } from 'react';
import { ScreenId, Language, CommissionItem } from '../../types';
import { COMMISSIONS, PARTNERS } from '../../data/mockData';
import { AeiLogo } from '../AeiLogo';
import { 
  Lightbulb, 
  Settings, 
  Leaf, 
  Handshake, 
  ChevronRight, 
  MessageCircle, 
  Check, 
  Users, 
  X,
  Send,
  Building,
  ArrowRight
} from 'lucide-react';

interface CommissionsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onOpenDonation: () => void;
}

export const CommissionsScreen: React.FC<CommissionsScreenProps> = ({
  onNavigate,
  language
}) => {
  const [selectedCommission, setSelectedCommission] = useState<CommissionItem | null>(null);
  const [joinModalOpen, setJoinModalOpen] = useState<boolean>(false);
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantPhone, setApplicantPhone] = useState<string>('');
  const [applicantExpertise, setApplicantExpertise] = useState<string>('');
  const [joinSuccess, setJoinSuccess] = useState<boolean>(false);

  const getCommissionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-amber-600" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-amber-600" />;
      case 'Handshake':
        return <Handshake className="w-5 h-5 text-amber-600" />;
      default:
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSuccess(true);
    setTimeout(() => {
      setJoinSuccess(false);
      setJoinModalOpen(false);
      setSelectedCommission(null);
    }, 2000);
  };

  return (
    <div className="bg-[#FAF9F5] text-slate-800 min-h-screen pb-24 px-4 py-6 selection:bg-amber-400 selection:text-slate-900">
      <div className="max-w-md mx-auto space-y-6">
        {/* 1. Header Banner matching Image 4 (Logo + Slogan) */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
          <AeiLogo size="sm" variant="emblem-only" />
          <div className="flex flex-col">
            <span className="font-serif-brand font-bold text-sm text-[#0B2545] tracking-wider">
              ASSOCIATION AEI
            </span>
            <span className="font-bold text-xs gold-gradient-text tracking-tight">
              Bâtir aujourd'hui,
            </span>
            <span className="font-bold text-xs text-[#0B2545] tracking-tight">
              innover pour demain
            </span>
          </div>
        </div>

        {/* 2. Commissions Thématiques Card (Image 4 Style) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-base font-extrabold font-serif-brand text-[#0B2545]">
              Commissions Thématiques
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Groupes de travail d'experts, chercheurs et praticiens
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {COMMISSIONS.map((comm) => (
              <button
                key={comm.id}
                id={`comm-item-${comm.id}`}
                onClick={() => setSelectedCommission(comm)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-amber-50/50 transition-colors text-left group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCommissionIcon(comm.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors font-serif-brand">
                      {comm.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{comm.description}</p>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* 3. WhatsApp floating/prominent badge (Image 4 Style) */}
        <div className="flex justify-end pt-1">
          <a
            id="commissions-whatsapp-btn"
            href="https://wa.me/22890000000?text=Bonjour%20AEI,%20je%20souhaite%20rejoindre%20une%20commission%20thématique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-btn text-slate-950 font-bold text-xs shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* 4. Section Partenaires (Image 4 Style) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold font-serif-brand text-[#0B2545]">
              Partenaires
            </h2>
            <span className="text-xs text-slate-400">Réseau Institutionnel</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between items-center text-center space-y-2"
              >
                {/* Logo badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-amber-50/50 border border-slate-200 flex items-center justify-center text-[#0B2545] font-black text-xs tracking-wider">
                  <div className="flex flex-col items-center">
                    <Building className="w-4 h-4 text-amber-600 mb-0.5" />
                    <span>{partner.logoText}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 font-serif-brand">{partner.name}</h4>
                  <p className="text-[10px] text-amber-800 font-medium">{partner.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Become a partner banner */}
          <div className="bg-[#0B2545] text-white p-4 rounded-2xl text-center space-y-2">
            <h4 className="text-xs font-bold font-serif-brand gold-gradient-text uppercase">
              Devenir Partenaire Stratégique
            </h4>
            <p className="text-[11px] text-slate-300 max-w-xs mx-auto">
              Vous êtes une institution, université ou entreprise engagée pour l'Afrique ?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-1 px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl text-xs font-bold transition-colors"
            >
              Contactez notre pôle Partenariats
            </button>
          </div>
        </div>
      </div>

      {/* Commission Detail Modal */}
      {selectedCommission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setSelectedCommission(null)} />
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 space-y-4 animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
            <div className="p-4 bg-[#0B2545] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  {getCommissionIcon(selectedCommission.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-sm font-serif-brand text-white">{selectedCommission.title}</h3>
                  <p className="text-[10px] text-amber-300">Responsable : {selectedCommission.lead}</p>
                </div>
              </div>
              <button onClick={() => setSelectedCommission(null)} className="p-1 text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-700 font-serif-brand mb-1">Missions & Objectifs</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedCommission.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-700 font-serif-brand mb-2">Initiatives en cours</h4>
                <ul className="space-y-1.5">
                  {selectedCommission.initiatives.map((init, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{init}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">Membres actifs enregistrés :</span>
                <span className="font-bold text-amber-900">{selectedCommission.membersCount} experts</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => setJoinModalOpen(true)}
                className="flex-1 py-2.5 gold-gradient-btn text-slate-950 font-bold text-xs rounded-xl shadow-md"
              >
                Candidater pour rejoindre
              </button>
              <button
                onClick={() => setSelectedCommission(null)}
                className="px-4 py-2.5 bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Commission Application Modal */}
      {joinModalOpen && selectedCommission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setJoinModalOpen(false)} />
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-2xl p-5 z-10 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-sm text-[#0B2545] font-serif-brand">Rejoindre la Commission</h3>
                <p className="text-xs text-amber-800">{selectedCommission.title}</p>
              </div>
              <button onClick={() => setJoinModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {joinSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Candidature transmise avec succès !</h4>
                <p className="text-xs text-slate-600">Le comité de la commission prendra contact avec vous dans les 48h.</p>
              </div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nom & Prénom</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="Ex: Dr. Moussa Traoré"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email professionnel</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="moussa@institution.org"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Téléphone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="+228 90 00 00 00"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Expertise / Motivation</label>
                  <textarea
                    rows={3}
                    required
                    value={applicantExpertise}
                    onChange={(e) => setApplicantExpertise(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    placeholder="Décrivez brièvement votre expérience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 gold-gradient-btn text-slate-950 font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma candidature</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
