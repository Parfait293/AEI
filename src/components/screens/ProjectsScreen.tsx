import React, { useState } from 'react';
import { ScreenId, Language, SDGItem, ActionItem } from '../../types';
import { SDG_LIST, ACTIONS, DEFAULT_IMAGES } from '../../data/mockData';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  GraduationCap, 
  Sun, 
  Cpu, 
  Globe, 
  Share2, 
  Calendar, 
  MapPin, 
  X,
  HeartHandshake
} from 'lucide-react';

interface ProjectsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onOpenDonation: (cause?: string) => void;
  images: typeof DEFAULT_IMAGES;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onNavigate,
  language,
  onOpenDonation,
  images
}) => {
  const [selectedSDG, setSelectedSDG] = useState<SDGItem | null>(null);
  const [selectedAction, setSelectedAction] = useState<ActionItem | null>(null);
  const [donateAmount, setDonateAmount] = useState<string>('50');
  const [selectedCause, setSelectedCause] = useState<string>('Projet Ecocity');

  const getSDGIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-8 h-8 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-white" />;
      case 'Sun': return <Sun className="w-8 h-8 text-white" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-white" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-white" />;
      case 'Globe': return <Globe className="w-8 h-8 text-white" />;
      default: return <Sparkles className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-[#0B2545] text-white min-h-screen pb-24 selection:bg-amber-400 selection:text-slate-900">
      {/* 1. HERO - PROJET ECOCITY (Image 5 Style) */}
      <section className="relative overflow-hidden">
        <div className="relative h-80 sm:h-96 w-full">
          <img
            src={images.heroEcocity}
            alt="Projet Ecocity"
            className="w-full h-full object-cover object-center brightness-90"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-black/40 flex flex-col justify-end p-5 sm:p-7">
            <div className="max-w-md mx-auto w-full space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
                Initiative Phare 2024-2030
              </span>
              <h1 className="font-serif-brand font-extrabold text-xl sm:text-2xl text-white tracking-wide leading-tight uppercase">
                PROJET ECOCITY : CONSTRUIRE L'AVENIR
              </h1>
              <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed">
                {language === 'fr'
                  ? "Découvrez comment nous transformons les villes pour un avenir durable et inclusif. Soutenez notre initiative."
                  : "Discover how we are transforming cities for a sustainable and inclusive future. Support our initiative."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenDonation("Projet Ecocity")}
                  className="py-2.5 px-4 gold-gradient-btn text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transform active:scale-98"
                >
                  {language === 'fr' ? 'EN SAVOIR PLUS ET SOUTENIR' : 'LEARN MORE & SUPPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AEI ET LES ODD (Image 5 Style) */}
      <section className="px-4 py-8 bg-gradient-to-b from-[#0B2545] to-[#12335C]">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-center">
            <h2 className="text-sm font-extrabold font-serif-brand tracking-widest text-white uppercase">
              AEI ET LES ODD
            </h2>
            <p className="text-[11px] text-slate-300">
              Contribution directe aux Objectifs de Développement Durable
            </p>
          </div>

          {/* 6 ODD Tiles in 3-column / 2-column Grid with exact vivid colors matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {SDG_LIST.map((sdg) => (
              <div
                key={sdg.id}
                id={`sdg-card-${sdg.id}`}
                onClick={() => setSelectedSDG(sdg)}
                className={`p-3.5 rounded-2xl bg-gradient-to-br ${sdg.bgColor} text-white shadow-lg cursor-pointer transform hover:scale-102 active:scale-98 transition-all flex flex-col items-center justify-between text-center min-h-[135px] border border-white/20`}
              >
                <div className="p-1">
                  {getSDGIcon(sdg.iconName)}
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wide block leading-tight">
                    {sdg.code} : {sdg.title}
                  </span>
                </div>

                {/* Progress bar line matching Image 5 */}
                <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: `${sdg.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOS DERNIÈRES ACTIONS (Image 5 Style) */}
      <section className="px-4 py-8 bg-[#FAF9F5] text-slate-900">
        <div className="max-w-md mx-auto space-y-4">
          <div className="text-center">
            <h2 className="text-base font-extrabold font-serif-brand text-[#0B2545] uppercase tracking-wider">
              NOS DERNIÈRES ACTIONS
            </h2>
            <p className="text-[11px] text-slate-500">
              Impact concret sur le terrain en Afrique de l'Ouest et centrale
            </p>
          </div>

          {/* Action cards in horizontal scroll / grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ACTIONS.map((action) => (
              <div
                key={action.id}
                id={`action-card-${action.id}`}
                onClick={() => setSelectedAction(action)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={action.imageUrl}
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-bold text-[10px] uppercase shadow-sm">
                    {action.category}
                  </span>
                </div>

                <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xs text-slate-900 font-serif-brand group-hover:text-amber-700 transition-colors leading-snug">
                      {action.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                      {action.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {action.location}
                    </span>
                    <span className="font-semibold text-amber-700">Lire plus →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAITES UN DON ET SOUTENEZ L'EXCELLENCE (Image 5 Style) */}
      <section className="px-4 py-8 bg-gradient-to-b from-[#0B2545] to-[#06182E] text-white">
        <div className="max-w-md mx-auto space-y-4 text-center">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold font-serif-brand gold-gradient-text uppercase tracking-widest">
              FAITES UN DON ET SOUTENEZ L'EXCELLENCE
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Participez au financement direct des bourses et des projets durables
            </p>
          </div>

          {/* Amount buttons: 20€, 50€, 100€, Montant libre */}
          <div className="grid grid-cols-4 gap-2">
            {['20', '50', '100'].map((amt) => (
              <button
                key={amt}
                onClick={() => setDonateAmount(amt)}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  donateAmount === amt
                    ? 'bg-white text-[#0B2545] shadow-md font-extrabold scale-102'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {amt}€
              </button>
            ))}

            <button
              onClick={() => setDonateAmount('custom')}
              className={`py-2.5 px-1 rounded-xl text-[11px] font-bold transition-all truncate ${
                donateAmount === 'custom'
                  ? 'bg-white text-[#0B2545] shadow-md font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              Montant libre
            </button>
          </div>

          {/* Dropdown "Je soutiens :" */}
          <div className="text-left space-y-1">
            <label className="text-[11px] text-slate-300 font-medium">Je soutiens :</label>
            <select
              value={selectedCause}
              onChange={(e) => setSelectedCause(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white text-slate-900 text-xs font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="Projet Ecocity">Projet Ecocity : Urbanisme Durable</option>
              <option value="Bourses d'Excellence">Bourses d'Excellence 2024</option>
              <option value="Fonds Général">Fonds Général & Innovation</option>
              <option value="Laboratoires & Tech">Laboratoires Ouverts & IA</option>
            </select>
          </div>

          {/* FAIRE UN DON MAINTENANT Button */}
          <button
            id="projects-donate-cta"
            onClick={() => onOpenDonation(selectedCause)}
            className="w-full py-3.5 gold-gradient-btn text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl transform active:scale-98"
          >
            FAIRE UN DON MAINTENANT
          </button>

          <p className="text-[11px] text-slate-400">
            Paiement 100% sécurisé. Don déductible des impôts.
          </p>
        </div>
      </section>

      {/* 5. FOOTER (Image 5 Style) */}
      <footer className="bg-[#040E1B] text-slate-400 px-6 py-6 text-xs">
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <span>•</span>
            <button onClick={() => alert("Mentions Légales : Association Loi 1901 à but non lucratif enregistrée pour la promotion de l'excellence et l'innovation.")} className="hover:text-white transition-colors">
              Mentions Légales
            </button>
          </div>

          <div className="flex items-center gap-3 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-white/10">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-white/10">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-white/10">in</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-full hover:bg-white/10">📷</a>
          </div>
        </div>
      </footer>

      {/* SDG Detail Modal */}
      {selectedSDG && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setSelectedSDG(null)} />
          <div className="relative w-full max-w-md bg-white text-slate-900 rounded-2xl shadow-2xl p-5 z-10 space-y-4 animate-in zoom-in-95 duration-200">
            <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedSDG.bgColor} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                {getSDGIcon(selectedSDG.iconName)}
                <div>
                  <h3 className="font-extrabold text-sm">{selectedSDG.code}</h3>
                  <p className="text-xs opacity-90">{selectedSDG.title}</p>
                </div>
              </div>
              <button onClick={() => setSelectedSDG(null)} className="p-1 rounded-full hover:bg-white/20 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs text-amber-800 uppercase font-serif-brand">Notre Engagement AEI</h4>
              <p className="text-xs text-slate-700 leading-relaxed">{selectedSDG.description}</p>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/70 flex justify-between items-center text-xs font-bold text-amber-950">
                <span>Indicateur d'impact :</span>
                <span className="text-amber-800">{selectedSDG.stats}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  const causeName = selectedSDG.title;
                  setSelectedSDG(null);
                  onOpenDonation(causeName);
                }}
                className="flex-1 py-2.5 gold-gradient-btn text-slate-950 font-bold text-xs rounded-xl shadow-md"
              >
                Soutenir cette ODD
              </button>
              <button
                onClick={() => setSelectedSDG(null)}
                className="px-4 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Detail Modal */}
      {selectedAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setSelectedAction(null)} />
          <div className="relative w-full max-w-lg bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 space-y-4 animate-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
            <div className="relative h-44 w-full">
              <img src={selectedAction.imageUrl} alt={selectedAction.title} className="w-full h-full object-cover" />
              <button onClick={() => setSelectedAction(null)} className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3 flex-1">
              <div className="flex items-center gap-2 text-xs text-amber-700 font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedAction.date}</span>
                <span>•</span>
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedAction.location}</span>
              </div>

              <h3 className="text-base font-bold font-serif-brand text-slate-900">{selectedAction.title}</h3>
              <p className="text-xs text-slate-700 leading-relaxed">{selectedAction.fullStory}</p>

              {selectedAction.beneficiariesCount && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Impact direct mesuré : {selectedAction.beneficiariesCount} personnes accompagnées</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedAction(null)}
                className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
