import React, { useState } from 'react';
import { ScreenId, Language, EventItem, ActionItem } from '../../types';
import { ACTIONS, UPCOMING_EVENTS, DEFAULT_IMAGES } from '../../data/mockData';
import { Calendar, Clock, MapPin, Check, Share2, ArrowRight, UserCheck, Video } from 'lucide-react';

interface NewsEventsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onOpenDonation: () => void;
}

export const NewsEventsScreen: React.FC<NewsEventsScreenProps> = ({
  onNavigate,
  language
}) => {
  const [activeTab, setActiveTab] = useState<'actualites' | 'evenements'>('actualites');
  const [rsvpEventId, setRsvpEventId] = useState<string | null>(null);
  const [rsvpName, setRsvpName] = useState<string>('');
  const [rsvpEmail, setRsvpEmail] = useState<string>('');
  const [rsvpSuccess, setRsvpSuccess] = useState<boolean>(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setRsvpEventId(null);
    }, 2000);
  };

  return (
    <div className="bg-[#FAF9F5] text-slate-800 min-h-screen pb-24 px-4 py-6 selection:bg-amber-400 selection:text-slate-900">
      <div className="max-w-md mx-auto space-y-5">
        {/* Top Header */}
        <div className="text-center space-y-1">
          <h1 className="text-lg font-bold font-serif-brand text-[#0B2545] uppercase tracking-wider">
            {language === 'fr' ? 'Actualités & Événements' : 'News & Events'}
          </h1>
          <p className="text-xs text-slate-500">
            {language === 'fr' ? 'Suivez le dynamisme de nos actions sur le continent' : 'Follow our impactful journey across Africa'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-200/80 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('actualites')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'actualites'
                ? 'bg-white text-[#0B2545] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'fr' ? 'Dernières Actualités' : 'Latest News'}
          </button>
          <button
            onClick={() => setActiveTab('evenements')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'evenements'
                ? 'bg-white text-[#0B2545] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'fr' ? 'Agenda & Événements' : 'Upcoming Events'}
          </button>
        </div>

        {/* Tab 1: Actualités */}
        {activeTab === 'actualites' && (
          <div className="space-y-4">
            {ACTIONS.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 w-full">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] uppercase shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-amber-800 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h2 className="text-sm font-bold text-slate-900 font-serif-brand leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.fullStory}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab 2: Événements */}
        {activeTab === 'evenements' && (
          <div className="space-y-4">
            {UPCOMING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 text-[10px] font-bold uppercase">
                    {evt.mode}
                  </span>
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{evt.time}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-serif-brand">{evt.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{evt.description}</p>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-xl text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-semibold">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{evt.location}</span>
                  </div>
                  {evt.speaker && (
                    <div className="text-[11px] text-amber-800 font-medium pt-1">
                      Intervenant : {evt.speaker}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setRsvpEventId(evt.id)}
                  className="w-full py-2.5 gold-gradient-btn text-slate-950 font-bold text-xs rounded-xl shadow-xs"
                >
                  S'inscrire à l'événement
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RSVP Modal */}
      {rsvpEventId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" onClick={() => setRsvpEventId(null)} />
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5 z-10 space-y-4 animate-in zoom-in-95 duration-200">
            <h3 className="font-bold text-sm font-serif-brand text-slate-900">
              Inscription Gratuite à l'Événement
            </h3>

            {rsvpSuccess ? (
              <div className="py-4 text-center space-y-2">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-900">Votre invitation a été confirmée !</p>
                <p className="text-[11px] text-slate-500">Un lien d'accès vous a été envoyé par email.</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Nom complet"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
                <input
                  type="email"
                  required
                  placeholder="Adresse email"
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl"
                />
                <div className="flex gap-2 pt-1">
                  <button type="submit" className="flex-1 py-2 gold-gradient-btn text-slate-950 font-bold text-xs rounded-xl">
                    Confirmer ma place
                  </button>
                  <button type="button" onClick={() => setRsvpEventId(null)} className="px-3 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl">
                    Annuler
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
