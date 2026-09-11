export type Language = 'fr' | 'en';

export type ScreenId = 'accueil' | 'projets' | 'actualites' | 'commissions' | 'apropos' | 'contact';

export type ViewMode = 'mobile' | 'responsive';

export interface SDGItem {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  iconName: string;
  progress: number;
  stats: string;
}

export interface CommissionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  lead: string;
  membersCount: number;
  initiatives: string[];
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  description: string;
  logoText: string;
  websiteUrl?: string;
}

export interface ActionItem {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  fullStory: string;
  imageUrl: string;
  category: string;
  beneficiariesCount?: number;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  mode: 'Présentiel' | 'En ligne' | 'Hybride';
  description: string;
  speaker?: string;
}

export interface DonationOption {
  amount: number;
  currency: 'FCFA' | 'EUR' | 'USD';
  label: string;
}
