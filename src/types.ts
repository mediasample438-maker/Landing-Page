export interface FinishVariant {
  id: string;
  name: string;
  hex: string;
  accentClass: string;
  badge?: string;
  description: string;
}

export interface LightingMode {
  id: string;
  name: string;
  kelvin: number;
  lux: number;
  description: string;
  bgGradient: string;
  ambientHex: string;
  recommendedFor: string;
}

export interface Hotspot {
  id: string;
  xPercent: number; // 0 - 100
  yPercent: number; // 0 - 100
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  avatar: string;
  category: 'Designers' | 'Developers' | 'Writers' | 'All';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Product' | 'Shipping' | 'Warranty';
}

export interface OrderConfig {
  finish: FinishVariant;
  selectedAccessories: string[]; // accessory ids
  quantity: number;
  promoCode: string;
  discountPercent: number;
}
