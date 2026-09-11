/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenId, Language, ViewMode } from './types';
import { DEFAULT_IMAGES } from './data/mockData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { DeviceFrame } from './components/DeviceFrame';
import { DonationModal } from './components/DonationModal';
import { DynamicImageModal } from './components/DynamicImageModal';

// Screen Views
import { HomeScreen } from './components/screens/HomeScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { CommissionsScreen } from './components/screens/CommissionsScreen';
import { NewsEventsScreen } from './components/screens/NewsEventsScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('accueil');
  const [activePreset, setActivePreset] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [language, setLanguage] = useState<Language>('fr');
  const [viewMode, setViewMode] = useState<ViewMode>('mobile');
  
  // Modals
  const [donationOpen, setDonationOpen] = useState<boolean>(false);
  const [donationCause, setDonationCause] = useState<string>('Projet Ecocity');
  const [imageManagerOpen, setImageManagerOpen] = useState<boolean>(false);

  // Dynamic Image State
  const [images, setImages] = useState<typeof DEFAULT_IMAGES>(() => {
    try {
      const saved = localStorage.getItem('aei_custom_images');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_IMAGES;
  });

  const handleUpdateImage = (key: keyof typeof DEFAULT_IMAGES, newUrl: string) => {
    const updated = { ...images, [key]: newUrl };
    setImages(updated);
    try {
      localStorage.setItem('aei_custom_images', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetImages = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem('aei_custom_images');
    } catch {
      // ignore
    }
  };

  const handleOpenDonation = (cause?: string) => {
    if (cause) setDonationCause(cause);
    setDonationOpen(true);
  };

  const handleSelectPreset = (preset: 1 | 2 | 3 | 4 | 5) => {
    setActivePreset(preset);
    if (preset === 1 || preset === 2 || preset === 3) {
      setActiveScreen('accueil');
    } else if (preset === 4) {
      setActiveScreen('commissions');
    } else if (preset === 5) {
      setActiveScreen('projets');
    }
  };

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    if (screen === 'accueil') setActivePreset(1);
    else if (screen === 'projets') setActivePreset(5);
    else if (screen === 'commissions') setActivePreset(4);
  };

  const getHeaderVariant = () => {
    if (activePreset === 2) return 'image2';
    if (activePreset === 3) return 'image3';
    if (activePreset === 5) return 'image5';
    return 'image1';
  };

  return (
    <DeviceFrame
      viewMode={viewMode}
      onToggleViewMode={setViewMode}
      activeScreen={activeScreen}
      activePreset={activePreset}
      onSelectScreenPreset={handleSelectPreset}
      onOpenImageManager={() => setImageManagerOpen(true)}
    >
      <div className="relative min-h-full flex flex-col justify-between bg-[#FAF9F5] text-slate-800">
        {/* Top Header */}
        <Header
          currentScreen={activeScreen}
          onNavigate={handleNavigate}
          language={language}
          onLanguageChange={setLanguage}
          onOpenDonation={() => handleOpenDonation()}
          onOpenImageManager={() => setImageManagerOpen(true)}
          headerVariant={getHeaderVariant()}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1">
          {activeScreen === 'accueil' && (
            <HomeScreen
              onNavigate={handleNavigate}
              language={language}
              onOpenDonation={handleOpenDonation}
              images={images}
            />
          )}

          {activeScreen === 'projets' && (
            <ProjectsScreen
              onNavigate={handleNavigate}
              language={language}
              onOpenDonation={handleOpenDonation}
              images={images}
            />
          )}

          {activeScreen === 'commissions' && (
            <CommissionsScreen
              onNavigate={handleNavigate}
              language={language}
              onOpenDonation={() => handleOpenDonation()}
            />
          )}

          {activeScreen === 'actualites' && (
            <NewsEventsScreen
              onNavigate={handleNavigate}
              language={language}
              onOpenDonation={() => handleOpenDonation()}
            />
          )}

          {activeScreen === 'apropos' && (
            <AboutScreen
              onNavigate={handleNavigate}
              language={language}
              onOpenDonation={() => handleOpenDonation()}
            />
          )}

          {activeScreen === 'contact' && (
            <ContactScreen
              onNavigate={handleNavigate}
              language={language}
            />
          )}
        </main>

        {/* Bottom Navigation */}
        <Navigation
          currentScreen={activeScreen}
          onNavigate={handleNavigate}
          language={language}
        />

        {/* Donation Modal Flow */}
        <DonationModal
          isOpen={donationOpen}
          onClose={() => setDonationOpen(false)}
          language={language}
          initialCause={donationCause}
        />

        {/* Dynamic HTML Image Link Manager */}
        <DynamicImageModal
          isOpen={imageManagerOpen}
          onClose={() => setImageManagerOpen(false)}
          currentImages={images}
          onUpdateImage={handleUpdateImage}
          onResetImages={handleResetImages}
        />
      </div>
    </DeviceFrame>
  );
}
