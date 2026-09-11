import React, { useState } from 'react';
import { AeiLogo } from './AeiLogo';
import { Language, ScreenId } from '../types';
import { Menu, X, Globe, HeartHandshake, User, Sparkles, Image as ImageIcon, MessageCircle, ChevronRight, Phone } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDonation: () => void;
  onOpenImageManager: () => void;
  headerVariant?: 'image1' | 'image2' | 'image3' | 'image5';
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  language,
  onLanguageChange,
  onOpenDonation,
  onOpenImageManager,
  headerVariant = 'image1'
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks: { id: ScreenId; labelFr: string; labelEn: string; icon: string }[] = [
    { id: 'accueil', labelFr: 'Accueil', labelEn: 'Home', icon: 'Home' },
    { id: 'projets', labelFr: 'Projets & ODD', labelEn: 'Projects & SDGs', icon: 'Folder' },
    { id: 'commissions', labelFr: 'Commissions Thématiques', labelEn: 'Thematic Commissions', icon: 'Layers' },
    { id: 'actualites', labelFr: 'Actualités & Événements', labelEn: 'News & Events', icon: 'Newspaper' },
    { id: 'apropos', labelFr: 'À Propos & Vision', labelEn: 'About & Vision', icon: 'Info' },
    { id: 'contact', labelFr: 'Contact', labelEn: 'Contact', icon: 'Mail' }
  ];

  const handleNavClick = (screen: ScreenId) => {
    onNavigate(screen);
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-2.5 shadow-sm transition-all">
        <div className="max-w-md mx-auto flex items-center justify-between">
          {/* Left area: Menu or Hamburger */}
          <div className="flex items-center gap-2">
            <button
              id="header-menu-button"
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6 text-[#0B2545]" />
            </button>

            {/* In Image 4 / horizontal layout, we might display text alongside */}
            {headerVariant === 'image2' || headerVariant === 'image3' ? null : (
              <span className="hidden xs:inline-block text-[11px] font-semibold text-amber-700 tracking-wider">
                AEI
              </span>
            )}
          </div>

          {/* Center Logo */}
          <div
            onClick={() => onNavigate('accueil')}
            className="cursor-pointer transition-transform hover:scale-102 active:scale-98"
          >
            <AeiLogo size="sm" variant={headerVariant === 'image1' ? 'vertical' : 'emblem-only'} />
          </div>

          {/* Right area: Language Switcher, Donation CTA or Profile */}
          <div className="flex items-center gap-2">
            {/* Dynamic Image manager trigger tool for user customization */}
            <button
              id="header-image-manager-btn"
              onClick={onOpenImageManager}
              title="Gérer les liens d'images dynamiques"
              className="p-1.5 rounded-full text-amber-700 hover:bg-amber-50 active:scale-95 transition-all text-xs flex items-center"
            >
              <ImageIcon className="w-4 h-4" />
            </button>

            {/* Language Switcher pill like in Image 1 */}
            <button
              id="header-language-toggle"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:border-amber-500 hover:text-amber-700 transition-colors shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{language === 'fr' ? 'FR / EN' : 'EN / FR'}</span>
            </button>

            {/* Top 'Faire un don' pill like in Image 2 */}
            <button
              id="header-donate-cta"
              onClick={onOpenDonation}
              className="hidden sm:inline-flex items-center px-3 py-1 rounded-full border border-amber-600/70 text-xs font-semibold text-amber-800 bg-amber-50/50 hover:bg-amber-100 transition-colors"
            >
              {language === 'fr' ? 'Faire un don' : 'Donate'}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer / Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Sidebar content */}
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-4 bg-gradient-to-r from-[#0B2545] to-[#123969] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full shadow-md">
                  <AeiLogo size="sm" variant="emblem-only" />
                </div>
                <div>
                  <h3 className="font-serif-brand font-bold text-sm text-white">AEI AFRIQUE</h3>
                  <p className="text-[10px] text-amber-300">Excellence & Innovations</p>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                {language === 'fr' ? 'Navigation Principale' : 'Main Navigation'}
              </div>

              {navLinks.map((item) => (
                <button
                  key={item.id}
                  id={`drawer-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    currentScreen === item.id
                      ? 'bg-amber-50 text-amber-900 border-l-4 border-amber-500 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {language === 'fr' ? item.labelFr : item.labelEn}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 my-3">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  {language === 'fr' ? 'Outils & Personnalisation' : 'Tools & Customization'}
                </div>

                <button
                  id="drawer-open-image-manager"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenImageManager();
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-amber-600" />
                  <span>{language === 'fr' ? 'Liens dynamiques d’images' : 'Dynamic Image Links'}</span>
                </button>

                <a
                  id="drawer-whatsapp-btn"
                  href="https://wa.me/22890000000?text=Bonjour%20AEI,%20je%20souhaite%20en%20savoir%20plus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'fr' ? 'Rejoindre sur WhatsApp' : 'Join on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2.5">
              <button
                id="drawer-donate-btn"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenDonation();
                }}
                className="w-full py-2.5 px-4 rounded-xl gold-gradient-btn text-slate-900 font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{language === 'fr' ? 'Faire un Don' : 'Make a Donation'}</span>
              </button>

              <div className="text-center text-[11px] text-slate-400">
                © 2024 AEI. Bâtir aujourd'hui, innover pour demain.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
