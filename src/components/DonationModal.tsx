import React, { useState } from 'react';
import { Language } from '../types';
import { X, Heart, ShieldCheck, CheckCircle2, Download, CreditCard, Smartphone, Building, Sparkles } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialCause?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  language,
  initialCause = "Projet Ecocity"
}) => {
  const [currency, setCurrency] = useState<'FCFA' | 'EUR' | 'USD'>('FCFA');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [cause, setCause] = useState<string>(initialCause);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'mobile_money' | 'card' | 'bank'>('mobile_money');
  const [mobileOperator, setMobileOperator] = useState<'wave' | 'orange' | 'moov' | 'mtn'>('wave');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  if (!isOpen) return null;

  const presetAmounts = {
    FCFA: [5000, 10000, 25000, 50000],
    EUR: [20, 50, 100, 250],
    USD: [25, 50, 120, 300]
  };

  const getActiveAmount = (): number => {
    if (selectedAmount === 'custom') {
      return parseFloat(customAmount) || 0;
    }
    return selectedAmount;
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (getActiveAmount() <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setReceiptNumber(`AEI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-amber-200/50 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Top Gradient Header */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#123663] to-[#0B2545] text-white p-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300">
              <Heart className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <h2 className="font-serif-brand font-bold text-lg text-white">
                {language === 'fr' ? 'Soutenez Nos Actions' : 'Support Our Actions'}
              </h2>
              <p className="text-xs text-amber-200/80">
                {language === 'fr' ? 'Excellence & Innovations en Afrique' : 'Excellence & Innovations in Africa'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif-brand">
                  {language === 'fr' ? 'Merci infiniment pour votre don !' : 'Thank you so much for your donation!'}
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  {language === 'fr'
                    ? `Votre généreuse contribution de ${getActiveAmount().toLocaleString()} ${currency} soutient directement l'initiative "${cause}".`
                    : `Your generous contribution of ${getActiveAmount().toLocaleString()} ${currency} directly supports "${cause}".`}
                </p>
              </div>

              {/* Receipt Preview Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-sm mx-auto text-xs space-y-1.5 shadow-2xs">
                <div className="flex justify-between font-bold text-slate-800 pb-2 border-b border-slate-200">
                  <span>Reçu N°: {receiptNumber}</span>
                  <span className="text-emerald-700">Validé</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Donateur :</span>
                  <span className="font-semibold text-slate-800">{donorName || 'Généreux donateur'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Montant :</span>
                  <span className="font-bold text-amber-700">{getActiveAmount().toLocaleString()} {currency}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Programme :</span>
                  <span className="text-slate-800 font-medium">{cause}</span>
                </div>
                <div className="pt-2 text-[11px] text-slate-500 italic text-center">
                  Un certificat fiscal sera adressé à {donorEmail || 'votre adresse email'}.
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => alert(`Téléchargement du reçu ${receiptNumber} en cours...`)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger le reçu</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 gold-gradient-btn text-slate-900 rounded-xl text-xs font-bold shadow-md"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitDonation} className="space-y-4">
              {/* Currency Selector */}
              <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl">
                {(['FCFA', 'EUR', 'USD'] as const).map((curr) => (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => {
                      setCurrency(curr);
                      setSelectedAmount(presetAmounts[curr][1]);
                    }}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      currency === curr
                        ? 'bg-white text-[#0B2545] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {curr === 'FCFA' ? 'FCFA (XOF)' : curr === 'EUR' ? 'EUR (€)' : 'USD ($)'}
                  </button>
                ))}
              </div>

              {/* Amount Presets matching screenshot buttons */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  {language === 'fr' ? 'Choisissez un montant :' : 'Select an amount:'}
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {presetAmounts[currency].map((amt) => {
                    const isSelected = selectedAmount === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? 'gold-gradient-bg text-slate-900 border-amber-600 shadow-sm scale-102'
                            : 'bg-[#0B2545]/5 hover:bg-[#0B2545]/10 text-[#0B2545] border-slate-200'
                        }`}
                      >
                        {amt.toLocaleString()} {currency === 'EUR' ? '€' : currency === 'USD' ? '$' : 'FCFA'}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount input */}
                <div className="mt-2.5">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder={language === 'fr' ? 'Autre montant...' : 'Other amount...'}
                      value={selectedAmount === 'custom' ? customAmount : ''}
                      onChange={(e) => {
                        setSelectedAmount('custom');
                        setCustomAmount(e.target.value);
                      }}
                      onFocus={() => setSelectedAmount('custom')}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <span className="absolute right-3.5 top-2 text-xs font-bold text-slate-400">
                      {currency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cause Allocation Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'fr' ? 'Je soutiens :' : 'I support:'}
                </label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-slate-800"
                >
                  <option value="Projet Ecocity">Projet Ecocity : Construire l'Avenir</option>
                  <option value="Bourses d'Excellence">Bourses d'Excellence Académique 2024-2025</option>
                  <option value="Fonds Général & Innovation">Fonds Général & Innovation Technologique</option>
                  <option value="Laboratoires & FabLabs">Laboratoires & FabLabs pour Jeunes</option>
                  <option value="Santé & Nutrition Scolaire">Santé & Nutrition Scolaire</option>
                </select>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'fr' ? 'Mode de règlement sécurisé :' : 'Secure Payment Method:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mobile_money')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
                      paymentMethod === 'mobile_money'
                        ? 'border-amber-600 bg-amber-50/70 text-amber-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-amber-600" />
                    <span>Mobile Money</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
                      paymentMethod === 'card'
                        ? 'border-amber-600 bg-amber-50/70 text-amber-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Carte Bancaire</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-[11px] font-semibold transition-all ${
                      paymentMethod === 'bank'
                        ? 'border-amber-600 bg-amber-50/70 text-amber-900 shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span>Virement</span>
                  </button>
                </div>
              </div>

              {/* Mobile Money Options if selected */}
              {paymentMethod === 'mobile_money' && (
                <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-200/60 space-y-2">
                  <div className="flex gap-2">
                    {[
                      { id: 'wave', label: 'Wave' },
                      { id: 'orange', label: 'Orange' },
                      { id: 'moov', label: 'Moov' },
                      { id: 'mtn', label: 'MTN' }
                    ].map((op) => (
                      <button
                        key={op.id}
                        type="button"
                        onClick={() => setMobileOperator(op.id as any)}
                        className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all ${
                          mobileOperator === op.id
                            ? 'bg-amber-600 text-white shadow-2xs'
                            : 'bg-white border border-slate-200 text-slate-700'
                        }`}
                      >
                        {op.label}
                      </button>
                    ))}
                  </div>
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone (+221 / +228 / +225...)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              )}

              {/* Donor info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Nom complet / Organisation"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email pour le reçu fiscal"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* CTA Button matching 'JE DONNE MAINTENANT' */}
              <button
                type="submit"
                disabled={isProcessing || getActiveAmount() <= 0}
                className="w-full py-3 px-4 rounded-xl gold-gradient-btn text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    <span>Traitement sécurisé...</span>
                  </div>
                ) : (
                  <span>
                    {language === 'fr'
                      ? `JE DONNE MAINTENANT (${getActiveAmount().toLocaleString()} ${currency})`
                      : `DONATE NOW (${getActiveAmount().toLocaleString()} ${currency})`}
                  </span>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Paiement 100% sécurisé. Don déductible des impôts.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
