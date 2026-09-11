import React from 'react';
import { ViewMode, ScreenId } from '../types';
import { Smartphone, Monitor, Sparkles, Image as ImageIcon, Check } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  activeScreen: ScreenId;
  onSelectScreenPreset: (screenPresetIndex: 1 | 2 | 3 | 4 | 5) => void;
  activePreset: 1 | 2 | 3 | 4 | 5;
  onOpenImageManager: () => void;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  viewMode,
  onToggleViewMode,
  onSelectScreenPreset,
  activePreset,
  onOpenImageManager
}) => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start text-slate-100 selection:bg-amber-400 selection:text-slate-900">
      {/* Top Floating Control Bar */}
      <div className="w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-serif-brand font-bold text-xs sm:text-sm text-white tracking-wide">
            AEI Mobile App
          </span>
          <span className="hidden sm:inline-block text-[11px] text-amber-400/90 font-medium px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
            5 Écrans Répliques
          </span>
        </div>

        {/* Screen Presets matching the 5 uploaded mockups */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full">
          <span className="text-[11px] text-slate-400 hidden md:inline-block mr-1">Écrans :</span>
          {([1, 2, 3, 4, 5] as const).map((num) => {
            const labels = {
              1: '1. Accueil & Raison d’Être',
              2: '2. Domaines & Don FCFA',
              3: '3. Objectifs & Mot Président',
              4: '4. Commissions & Partenaires',
              5: '5. Projet Ecocity & ODD'
            };
            const isCurrent = activePreset === num;
            return (
              <button
                key={num}
                id={`screen-preset-btn-${num}`}
                onClick={() => onSelectScreenPreset(num)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                  isCurrent
                    ? 'gold-gradient-bg text-slate-950 shadow-md font-extrabold scale-102'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                <span>Écran {num}</span>
              </button>
            );
          })}
        </div>

        {/* Action controls (Image Manager & View Toggle) */}
        <div className="flex items-center gap-2">
          <button
            id="toolbar-image-manager-btn"
            onClick={onOpenImageManager}
            className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            title="Gérer les liens d'images HTML dynamiques"
          >
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Liens Images HTML</span>
          </button>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              onClick={() => onToggleViewMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Vue Mockup Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleViewMode('responsive')}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === 'responsive'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Vue Plein Écran Web"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex-1 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-x-hidden">
        {viewMode === 'mobile' ? (
          /* iPhone-styled Mockup Frame */
          <div className="relative w-full max-w-[400px] h-[860px] bg-black rounded-[48px] p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] border-slate-800 ring-1 ring-slate-700/50 flex flex-col my-auto overflow-hidden">
            {/* Top Phone Speaker / Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-center pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800 mr-2" />
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>

            {/* Simulated Mobile Status Bar matching screenshots (12:07 or 9:41, Wifi, 5G, Battery) */}
            <div className="w-full h-8 bg-white/95 px-7 pt-1.5 flex items-center justify-between text-slate-900 text-[11px] font-bold z-40 select-none border-b border-slate-100">
              <span>{activePreset === 5 ? '9:41' : '12:07'}</span>
              <div className="flex items-center gap-1.5 text-[10px]">
                {/* Signal bars */}
                <div className="flex items-end gap-0.5 h-2.5">
                  <div className="w-0.5 h-1 bg-slate-900 rounded-xs" />
                  <div className="w-0.5 h-1.5 bg-slate-900 rounded-xs" />
                  <div className="w-0.5 h-2 bg-slate-900 rounded-xs" />
                  <div className="w-0.5 h-2.5 bg-slate-900 rounded-xs" />
                </div>
                {/* 5G / Wifi */}
                <span>5G</span>
                {/* Battery icon */}
                <div className="w-4 h-2 border border-slate-900 rounded-xs p-0.5 flex items-center">
                  <div className="w-full h-full bg-slate-900 rounded-2xs" />
                </div>
              </div>
            </div>

            {/* Internal App Scrollable Window */}
            <div className="w-full flex-1 bg-white rounded-b-[38px] overflow-y-auto overflow-x-hidden relative">
              {children}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50 pointer-events-none" />
          </div>
        ) : (
          /* Fullscreen Responsive Frame */
          <div className="w-full max-w-2xl bg-white min-h-screen shadow-2xl rounded-2xl overflow-hidden text-slate-800">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
