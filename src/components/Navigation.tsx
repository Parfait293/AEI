import React from 'react';
import { ScreenId, Language } from '../types';
import { Home, FolderGit2, Newspaper, Info, Mail, Layers } from 'lucide-react';

interface NavigationProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  language: Language;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onNavigate,
  language
}) => {
  const navItems: { id: ScreenId; labelFr: string; labelEn: string; icon: React.ReactNode }[] = [
    {
      id: 'accueil',
      labelFr: 'Accueil',
      labelEn: 'Home',
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'projets',
      labelFr: 'Projets',
      labelEn: 'Projects',
      icon: <FolderGit2 className="w-5 h-5" />
    },
    {
      id: 'commissions',
      labelFr: 'Commissions',
      labelEn: 'Commissions',
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: 'actualites',
      labelFr: 'Actualités',
      labelEn: 'News',
      icon: <Newspaper className="w-5 h-5" />
    },
    {
      id: 'apropos',
      labelFr: 'À Propos',
      labelEn: 'About',
      icon: <Info className="w-5 h-5" />
    },
    {
      id: 'contact',
      labelFr: 'Contact',
      labelEn: 'Contact',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 py-1.5 px-2 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-6 gap-1">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              id={`bottom-nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-lg transition-all ${
                isActive
                  ? 'text-amber-600 scale-105 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className={`p-1 rounded-full ${isActive ? 'bg-amber-100/70 text-amber-700' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[9.5px] mt-0.5 tracking-tight truncate max-w-full">
                {language === 'fr' ? item.labelFr : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
