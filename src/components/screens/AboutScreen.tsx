import React from 'react';
import { ScreenId, Language } from '../../types';
import { AeiLogo } from '../AeiLogo';
import { Award, Target, Compass, Users, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onOpenDonation: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onNavigate,
  language,
  onOpenDonation
}) => {
  const stats = [
    { number: '450+', label: 'Bourses d’excellence accordées' },
    { number: '28', label: 'Projets tech & IA soutenus' },
    { number: '15 000+', label: 'Bénéficiaires directs' },
    { number: '8', label: 'Pays africains d’action' },
  ];

  return (
    <div className="bg-[#FAF9F5] text-slate-800 min-h-screen pb-24 px-4 py-6 selection:bg-amber-400 selection:text-slate-900">
      <div className="max-w-md mx-auto space-y-6">
        {/* Top Emblem & Brand Slogan */}
        <div className="text-center space-y-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
          <AeiLogo size="md" variant="vertical" />
          <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed pt-2">
            Organisation panafricaine dédiée à la valorisation du potentiel académique, à l'émancipation technologique et à la recherche d'impact.
          </p>
        </div>

        {/* Key figures */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((st, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-2xs">
              <span className="font-serif-brand font-extrabold text-xl sm:text-2xl text-[#0B2545] block">
                {st.number}
              </span>
              <span className="text-[11px] text-amber-800 font-semibold mt-0.5 block leading-tight">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-sm font-bold font-serif-brand text-[#0B2545] uppercase tracking-wider">
            Notre Philosophie d'Action
          </h2>

          <div className="space-y-3">
            {[
              {
                title: 'Excellence Méritocratique',
                desc: 'Repérer et propulser les esprits les plus brillants et engagés, sans distinction d’origine sociale.'
              },
              {
                title: 'Innovation Contextualisée',
                desc: 'Développer des réponses concrètes aux défis locaux (énergie, urbanisme, santé, éducation numérique).'
              },
              {
                title: 'Gouvernance & Transparence',
                desc: 'Rigueur absolue dans l’attribution des fonds et audit public de chaque franc ou euro investi.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-normal mt-0.5">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0B2545] text-white p-6 rounded-3xl text-center space-y-3 shadow-lg">
          <h3 className="font-serif-brand font-bold text-base gold-gradient-text uppercase">
            Rejoignez le Mouvement AEI
          </h3>
          <p className="text-xs text-slate-300">
            Faites partie des bâtisseurs de l'Afrique de demain en apportant votre expertise ou votre soutien financier.
          </p>
          <button
            onClick={() => onOpenDonation()}
            className="w-full py-3 gold-gradient-btn text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
          >
            Faire un don maintenant
          </button>
        </div>
      </div>
    </div>
  );
};
