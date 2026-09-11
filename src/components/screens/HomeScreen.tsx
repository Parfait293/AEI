import React, { useState } from 'react';
import { ScreenId, Language } from '../../types';
import { DEFAULT_IMAGES } from '../../data/mockData';
import { AeiLogo } from '../AeiLogo';
import { 
  BookOpen, 
  Cpu, 
  Heart, 
  ChevronDown, 
  Star, 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles,
  MessageCircle,
  Share2,
  GraduationCap
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onOpenDonation: (cause?: string) => void;
  images: typeof DEFAULT_IMAGES;
  subView?: 'default' | 'interventions' | 'objectifs';
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  language,
  onOpenDonation,
  images
}) => {
  const [selectedDomain, setSelectedDomain] = useState<'education' | 'tech' | 'sante' | null>(null);
  const [quickAmount, setQuickAmount] = useState<number | 'custom'>(10000);
  const [customAmountVal, setCustomAmountVal] = useState<string>('');

  const domains = [
    {
      id: 'education',
      titleFr: 'ÉDUCATION',
      titleEn: 'EDUCATION',
      icon: <BookOpen className="w-8 h-8 text-amber-900" />,
      descFr: 'Octroi de bourses, mentorat de haut niveau et renforcement des capacités académiques en Afrique.',
      descEn: 'Scholarships, top-tier mentorship and capacity building in African universities.',
      stats: '450+ boursiers'
    },
    {
      id: 'tech',
      titleFr: 'TECHNOLOGIE',
      titleEn: 'TECHNOLOGY',
      icon: <Cpu className="w-8 h-8 text-amber-900" />,
      descFr: 'Formation au codage, intelligence artificielle, création de FabLabs et incubation de startups.',
      descEn: 'Coding bootcamps, AI research, FabLabs network and startup incubation.',
      stats: '28 projets tech'
    },
    {
      id: 'sante',
      titleFr: 'SANTÉ',
      titleEn: 'HEALTH',
      icon: <Heart className="w-8 h-8 text-amber-900" />,
      descFr: 'Programmes de santé préventive, e-santé en milieu rural et nutrition en milieu scolaire.',
      descEn: 'Preventive healthcare, rural e-health initiatives and school nutrition.',
      stats: '15,000+ soignés'
    }
  ];

  const objectives = [
    {
      titleFr: 'EXCELLENCE',
      titleEn: 'EXCELLENCE',
      icon: <Star className="w-7 h-7 text-amber-600" />,
      descFr: 'Promouvoir les plus hauts standards académiques et professionnels auprès de la jeunesse africaine.',
      descEn: 'Promoting the highest academic and professional standards among African youth.'
    },
    {
      titleFr: 'INNOVATION',
      titleEn: 'INNOVATION',
      icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
      descFr: 'Encourager la créativité, la recherche appliquée et le déploiement de solutions d\'avenir locales.',
      descEn: 'Encouraging creativity, applied research, and local forward-looking solutions.'
    },
    {
      titleFr: 'ANTICIPATION',
      titleEn: 'ANTICIPATION',
      icon: <Compass className="w-7 h-7 text-emerald-600" />,
      descFr: 'Préparer les leaders et scientifiques de demain aux défis technologiques et climatiques majeurs.',
      descEn: 'Preparing tomorrow’s leaders for major technological and environmental challenges.'
    }
  ];

  return (
    <div className="bg-[#FAF9F5] text-slate-800 pb-20 selection:bg-amber-400 selection:text-slate-900">
      {/* 1. HERO SECTION (Image 1 & 2 Style) */}
      <section className="relative overflow-hidden bg-[#0B2545] text-white">
        {/* Dynamic Background Image with subtle parallax feel */}
        <div className="relative h-[440px] sm:h-[480px] w-full">
          <img
            src={images.heroStudents}
            alt="Association Excellence et Innovations"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-700"
          />
          {/* Brand Gradient Overlay */}
          <div className="absolute inset-0 navy-hero-gradient flex flex-col justify-between p-6">
            {/* Top Emblem in Hero if required */}
            <div className="flex justify-center pt-2">
              <div className="bg-white/90 backdrop-blur-xs p-2 rounded-full shadow-lg border border-amber-300/60 inline-flex items-center justify-center">
                <AeiLogo size="sm" variant="emblem-only" />
              </div>
            </div>

            {/* Central Typography and Slogan */}
            <div className="text-center space-y-3 max-w-lg mx-auto pb-4">
              <h1 className="font-serif-brand font-extrabold text-2xl sm:text-3xl tracking-wide gold-gradient-text drop-shadow-md leading-tight">
                ASSOCIATION EXCELLENCE & INNOVATIONS
              </h1>
              
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200 uppercase">
                  BÂTIR AUJOURD'HUI, INNOVER POUR DEMAIN.
                </p>
                <p className="text-xs text-slate-200/90 max-w-sm mx-auto leading-relaxed">
                  {language === 'fr'
                    ? "Promouvoir l'excellence académique et l'innovation en Afrique."
                    : "Promoting academic excellence and technological innovation in Africa."}
                </p>
              </div>

              {/* Action Buttons (Faire un don / Nos Programmes) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs mx-auto">
                <button
                  id="hero-donate-button"
                  onClick={() => onOpenDonation()}
                  className="w-full py-3 px-5 gold-gradient-btn text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transform active:scale-98"
                >
                  {language === 'fr' ? 'Faire un don' : 'Make a donation'}
                </button>
                <button
                  id="hero-programmes-button"
                  onClick={() => onNavigate('projets')}
                  className="w-full py-3 px-5 bg-[#0B2545]/80 hover:bg-[#0B2545] border border-amber-400/80 text-white font-bold text-xs tracking-wider rounded-xl transition-all shadow-md active:scale-98"
                >
                  {language === 'fr' ? 'Nos Programmes' : 'Our Programs'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Inverted Chevron transition divider like Image 1 */}
        <div className="relative flex justify-center -mt-4 z-10">
          <div className="w-10 h-10 bg-[#0B2545] rounded-full border-2 border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. NOTRE RAISON D'ÊTRE (Image 1 Style) */}
      <section className="relative px-6 py-10 bg-[#FAF8F5] overflow-hidden">
        {/* Subtle Watermark motif (Graduation cap & hands) */}
        <div className="absolute right-2 top-8 opacity-5 pointer-events-none text-amber-900">
          <GraduationCap className="w-56 h-56" />
        </div>

        <div className="max-w-md mx-auto relative z-10 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold font-serif-brand text-[#0B2545] tracking-wider uppercase">
            NOTRE RAISON D'ÊTRE
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full" />

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify sm:text-center">
            {language === 'fr'
              ? "L'Association Excellence & Innovations (AEI) est née de la conviction profonde que l'éducation supérieure de qualité, la recherche appliquée et l'innovation technologique sont les moteurs fondamentaux du développement durable et de la souveraineté africaine."
              : "Association Excellence & Innovations (AEI) stems from the deep conviction that quality higher education, applied research, and technological innovation are the key drivers of sustainable development and sovereignty across Africa."}
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-justify sm:text-center pt-2">
            {language === 'fr'
              ? "Notre mission est d'identifier, d'accompagner et de financer les talents d'élite ainsi que les projets scientifiques novateurs, en fédérant les compétences des diasporas et des partenaires stratégiques pour bâtir une Afrique prospère."
              : "Our mission is to identify, support, and finance top talents and innovative scientific projects, uniting the skills of the diaspora and strategic partners to build a prosperous Africa."}
          </p>
        </div>
      </section>

      {/* 3. NOS DOMAINES D'INTERVENTION (Image 2 Style) */}
      <section className="px-5 py-10 bg-white border-y border-amber-100/70">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold font-serif-brand gold-gradient-text uppercase tracking-wider">
              NOS DOMAINES D'INTERVENTION
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {language === 'fr' ? 'Trois piliers stratégiques au cœur de nos actions' : 'Three strategic pillars at the core of our work'}
            </p>
          </div>

          {/* 3 Gold Circles matching Image 2 */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {domains.map((dom) => {
              const isSelected = selectedDomain === dom.id;
              return (
                <div
                  key={dom.id}
                  id={`domain-card-${dom.id}`}
                  onClick={() => setSelectedDomain(isSelected ? null : (dom.id as any))}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Circular Gold Gradient Badge */}
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full gold-gradient-bg p-1 shadow-md transition-all duration-300 flex items-center justify-center ${
                    isSelected ? 'ring-4 ring-amber-500 scale-105' : 'group-hover:scale-105'
                  }`}>
                    <div className="w-full h-full rounded-full border-2 border-white/60 flex items-center justify-center bg-gradient-to-b from-amber-200/40 to-transparent">
                      {dom.icon}
                    </div>
                  </div>

                  <span className="mt-2.5 text-xs font-bold font-serif-brand text-slate-900 tracking-wider">
                    {language === 'fr' ? dom.titleFr : dom.titleEn}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold">{dom.stats}</span>
                </div>
              );
            })}
          </div>

          {/* Domain Detail Expandable card */}
          {selectedDomain && (
            <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase text-amber-900 font-serif-brand">
                    {domains.find(d => d.id === selectedDomain)?.titleFr}
                  </h4>
                  <p className="text-xs text-slate-700 mt-1">
                    {language === 'fr'
                      ? domains.find(d => d.id === selectedDomain)?.descFr
                      : domains.find(d => d.id === selectedDomain)?.descEn}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-xs text-amber-800 font-bold px-2 py-1 bg-white rounded-lg shadow-2xs"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

          {/* NOTRE VISION (Image 2 Style) */}
          <div className="pt-4 text-center space-y-2">
            <h3 className="text-sm font-bold font-serif-brand text-slate-900 uppercase">
              NOTRE VISION :
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto leading-relaxed">
              {language === 'fr'
                ? "Bâtir un avenir meilleur par l'excellence et l'innovation. Nous investissons dans le potentiel humain pour un impact durable."
                : "Building a better future through excellence and innovation. We invest in human potential for lasting impact."}
            </p>
            <button
              onClick={() => onNavigate('apropos')}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-600/70 text-xs font-semibold text-amber-900 bg-amber-50/50 hover:bg-amber-100 transition-colors shadow-2xs"
            >
              <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. NOS OBJECTIFS (Image 3 Style) */}
      <section className="px-5 py-10 bg-[#FAF9F5]">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-serif-brand text-[#0B2545]">
              Nos Objectifs
            </h2>
            <button
              onClick={() => onNavigate('projets')}
              className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1"
            >
              <span>{language === 'fr' ? 'Découvrir nos actions' : 'Discover our actions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 White cards with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-2"
              >
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {obj.icon}
                </div>
                <h3 className="font-serif-brand font-bold text-xs text-slate-900 tracking-wider">
                  {language === 'fr' ? obj.titleFr : obj.titleEn}
                </h3>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {language === 'fr' ? obj.descFr : obj.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* 5. MOT DU PRÉSIDENT (Image 3 Style) */}
          <div className="relative bg-gradient-to-br from-[#F5E6C8] to-[#E9D5A7] p-6 rounded-2xl border border-amber-300/80 shadow-sm overflow-hidden text-center space-y-3">
            <div className="text-[11px] font-bold font-serif-brand uppercase tracking-widest text-amber-950">
              Mot du Président
            </div>

            <blockquote className="font-serif-brand italic font-bold text-sm sm:text-base text-[#0B2545] max-w-xs mx-auto leading-snug">
              “L'excellence est notre point de départ, l'innovation notre chemin vers l'avenir.”
            </blockquote>

            <div className="font-signature text-xl sm:text-2xl text-amber-950 pt-1">
              - Signa Kaore -
            </div>
            <div className="text-[10px] text-amber-900/80 uppercase font-semibold">
              Président Fondateur AEI
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOUTENEZ NOS ACTIONS - DONATION BANNER (Image 2 Style) */}
      <section className="px-5 py-10 bg-[#0B2545] text-white">
        <div className="max-w-md mx-auto space-y-5 text-center">
          <div>
            <h2 className="text-base sm:text-lg font-bold font-serif-brand gold-gradient-text uppercase tracking-widest">
              SOUTENEZ NOS ACTIONS
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Chaque contribution transforme directement le parcours d'un jeune en Afrique.
            </p>
          </div>

          {/* Amount buttons matching Image 2 */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[5000, 10000, 25000].map((amt) => (
              <button
                key={amt}
                id={`home-amt-${amt}`}
                onClick={() => setQuickAmount(amt)}
                className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                  quickAmount === amt
                    ? 'gold-gradient-bg text-slate-950 shadow-md scale-102'
                    : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                }`}
              >
                {amt.toLocaleString()} FCFA
              </button>
            ))}

            <button
              onClick={() => setQuickAmount('custom')}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                quickAmount === 'custom'
                  ? 'gold-gradient-bg text-slate-950 shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
              }`}
            >
              Autre Montant...
            </button>
          </div>

          {quickAmount === 'custom' && (
            <input
              type="number"
              placeholder="Montant en FCFA"
              value={customAmountVal}
              onChange={(e) => setCustomAmountVal(e.target.value)}
              className="w-full px-4 py-2 text-xs bg-white/10 border border-white/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-center font-bold"
            />
          )}

          {/* JE DONNE MAINTENANT Button */}
          <button
            id="home-submit-donation"
            onClick={() => onOpenDonation()}
            className="w-full py-3.5 gold-gradient-btn text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl transform active:scale-98"
          >
            JE DONNE MAINTENANT
          </button>
        </div>
      </section>

      {/* 7. FOOTER (Image 1 Style) */}
      <footer className="bg-[#06182E] text-white px-6 py-8">
        <div className="max-w-md mx-auto flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            {/* Social icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <span className="font-bold text-sm">f</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <span className="font-bold text-xs">in</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <span className="font-bold text-xs">𝕏</span>
            </a>

            {/* WhatsApp Green Pill Button */}
            <a
              href="https://wa.me/22890000000?text=Bonjour%20AEI,%20je%20souhaite%20m'informer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-400">
            © 2024 AEI. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};
