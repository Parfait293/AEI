import React, { useState } from 'react';
import { X, Copy, Check, Image as ImageIcon, Link2, Code2, RefreshCw, Sparkles, Plus } from 'lucide-react';
import { DEFAULT_IMAGES } from '../data/mockData';

interface DynamicImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImages: typeof DEFAULT_IMAGES;
  onUpdateImage: (key: keyof typeof DEFAULT_IMAGES, newUrl: string) => void;
  onResetImages: () => void;
}

export const DynamicImageModal: React.FC<DynamicImageModalProps> = ({
  isOpen,
  onClose,
  currentImages,
  onUpdateImage,
  onResetImages
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [htmlInput, setHtmlInput] = useState<string>('');
  const [targetSlot, setTargetSlot] = useState<keyof typeof DEFAULT_IMAGES>('heroStudents');
  const [parseStatus, setParseStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const imageSlots: { key: keyof typeof DEFAULT_IMAGES; label: string; description: string }[] = [
    {
      key: 'heroStudents',
      label: 'Bannière Étudiants & Équipe (Image 1 & 2)',
      description: 'Image d’en-tête montrant les jeunes professionnels et étudiants africains.'
    },
    {
      key: 'heroCampus',
      label: 'Campus & Objectifs (Image 3)',
      description: 'Campus universitaire moderne avec pelouse verdoyante et bâtiments de recherche.'
    },
    {
      key: 'heroEcocity',
      label: 'Projet Ecocity : Construire l’Avenir (Image 5)',
      description: 'Architecture urbaine durable avec toitures solaires et terrasses végétalisées.'
    },
    {
      key: 'actionScholarships',
      label: 'Remise des Bourses d’Excellence',
      description: 'Cérémonie de remise des diplômes et bourses d’études.'
    },
    {
      key: 'actionDakar',
      label: 'Lancement Ecocity à Dakar',
      description: 'Atelier communautaire et table ronde de lancement de projet.'
    },
    {
      key: 'presidentAvatar',
      label: 'Portrait du Président Signa Kaore',
      description: 'Photo de profil officielle pour le mot du président.'
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleParseHtml = (e: React.FormEvent) => {
    e.preventDefault();
    if (!htmlInput.trim()) return;

    // Extract src from HTML tag like <img src="https://..." /> or plain URL
    const srcMatch = htmlInput.match(/src=["']([^"']+)["']/i);
    let extractedUrl = '';
    
    if (srcMatch && srcMatch[1]) {
      extractedUrl = srcMatch[1];
    } else if (htmlInput.trim().startsWith('http://') || htmlInput.trim().startsWith('https://')) {
      extractedUrl = htmlInput.trim();
    }

    if (extractedUrl) {
      onUpdateImage(targetSlot, extractedUrl);
      setParseStatus(`Image mise à jour avec succès pour "${targetSlot}" !`);
      setHtmlInput('');
      setTimeout(() => setParseStatus(null), 3000);
    } else {
      setParseStatus('Erreur : aucun lien ou balise <img> valide détecté.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B2545] to-[#163f73] text-white p-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-brand font-bold text-base text-white">
                Gestionnaire de Liens Dynamiques d'Images HTML
              </h2>
              <p className="text-xs text-amber-200/80">
                Générez ou intégrez dynamiquement des images à partir de balises HTML & URLs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          {/* Quick parser / HTML link generator */}
          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Injecter une image depuis un extrait HTML ou une URL</span>
            </div>
            <form onSubmit={handleParseHtml} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="sm:col-span-1">
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Emplacement cible :
                  </label>
                  <select
                    value={targetSlot}
                    onChange={(e) => setTargetSlot(e.target.value as any)}
                    className="w-full text-xs p-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium"
                  >
                    {imageSlots.map((slot) => (
                      <option key={slot.key} value={slot.key}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Code HTML (ex: <code className="text-amber-700">&lt;img src="..." /&gt;</code>) ou URL :
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder='<img src="https://images.unsplash.com/..." alt="Titre" />'
                      value={htmlInput}
                      onChange={(e) => setHtmlInput(e.target.value)}
                      className="flex-1 text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 gold-gradient-btn text-slate-900 font-bold text-xs rounded-lg shadow-sm whitespace-nowrap"
                    >
                      Appliquer
                    </button>
                  </div>
                </div>
              </div>

              {parseStatus && (
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{parseStatus}</span>
                </div>
              )}
            </form>
          </div>

          {/* List of active images with dynamic HTML code generator */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800 font-serif-brand">
                Images Actives & Balises HTML Dynamiques
              </h3>
              <button
                onClick={onResetImages}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-amber-700 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Réinitialiser par défaut</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {imageSlots.map((slot) => {
                const imgUrl = currentImages[slot.key];
                const dynamicHtmlTag = `<img src="${imgUrl}" alt="${slot.label}" class="w-full h-auto rounded-xl object-cover" />`;

                return (
                  <div
                    key={slot.key}
                    className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-col sm:flex-row gap-3.5 items-start sm:items-center justify-between"
                  >
                    {/* Thumbnail */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <img
                        src={imgUrl}
                        alt={slot.label}
                        className="w-14 h-14 rounded-lg object-cover border border-slate-300 shadow-2xs shrink-0"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 truncate">{slot.label}</h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{slot.description}</p>
                        <span className="text-[10px] font-mono text-amber-800 truncate block max-w-xs mt-0.5">
                          {imgUrl}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => handleCopy(dynamicHtmlTag, `html-${slot.key}`)}
                        className="px-2.5 py-1.5 bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shadow-2xs"
                        title="Copier le code HTML <img>"
                      >
                        {copiedKey === `html-${slot.key}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copié HTML</span>
                          </>
                        ) : (
                          <>
                            <Code2 className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copier &lt;img&gt;</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleCopy(imgUrl, `url-${slot.key}`)}
                        className="px-2.5 py-1.5 bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all shadow-2xs"
                        title="Copier le lien direct de l'image"
                      >
                        {copiedKey === `url-${slot.key}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Link2 className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        <span>Lien</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 text-white hover:bg-slate-900 rounded-xl text-xs font-bold transition-colors"
          >
            Fermer le gestionnaire
          </button>
        </div>
      </div>
    </div>
  );
};
