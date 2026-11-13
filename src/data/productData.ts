import { FinishVariant, LightingMode, Hotspot, Accessory, Review, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_product_1786074926164.jpg';
export const DETAIL_IMAGE = '/src/assets/images/product_detail_1786074936587.jpg';
export const LIFESTYLE_IMAGE = '/src/assets/images/lifestyle_workspace_1786074948949.jpg';

export const FINISH_VARIANTS: FinishVariant[] = [
  {
    id: 'onyx',
    name: 'Matte Onyx',
    hex: '#1c1d21',
    accentClass: 'from-zinc-900 to-black',
    badge: 'Most Popular',
    description: 'Deep aircraft-grade anodized aluminum finish designed to blend seamlessly into dark setups.'
  },
  {
    id: 'titanium',
    name: 'Titanium Silver',
    hex: '#d1d5db',
    accentClass: 'from-slate-200 to-slate-400',
    description: 'Precision blasted light metallic finish with subtle satin sheen.'
  },
  {
    id: 'copper',
    name: 'Warm Bronze',
    hex: '#b47b56',
    accentClass: 'from-amber-700 to-amber-900',
    badge: 'Limited Edition',
    description: 'Rich hand-brushed warm copper hue with anti-oxidation micro-coating.'
  },
  {
    id: 'sage',
    name: 'Forest Sage',
    hex: '#5f7466',
    accentClass: 'from-emerald-800 to-teal-900',
    description: 'Calming botanical muted green matte powder coat finish.'
  }
];

export const LIGHTING_MODES: LightingMode[] = [
  {
    id: 'focus',
    name: 'Deep Focus',
    kelvin: 5000,
    lux: 1200,
    description: 'High-clarity 5000K daylight beam engineered to boost alertness and reduce fatigue during intense coding or designing.',
    bgGradient: 'from-cyan-950/40 via-blue-900/30 to-slate-950',
    ambientHex: '#38bdf8',
    recommendedFor: 'Software Engineering, CAD, Deep Analysis'
  },
  {
    id: 'read',
    name: 'Warm Sunset',
    kelvin: 2700,
    lux: 650,
    description: 'Cozy, zero-blue warm light designed to ease eye strain while reading books or drafting notes late into the evening.',
    bgGradient: 'from-amber-950/40 via-orange-950/30 to-zinc-950',
    ambientHex: '#f59e0b',
    recommendedFor: 'Evening Reading, Writing, Unwinding'
  },
  {
    id: 'circadian',
    name: 'Circadian Auto',
    kelvin: 3800,
    lux: 900,
    description: 'Smartly synchronizes color temperature with your local solar clock to naturally balance melatonin levels throughout the workday.',
    bgGradient: 'from-sky-950/30 via-amber-950/20 to-zinc-950',
    ambientHex: '#38bdf8',
    recommendedFor: 'All-day Workstations, Remote Work'
  },
  {
    id: 'night',
    name: 'Night Glow',
    kelvin: 1800,
    lux: 180,
    description: 'Ultra-low blue spectral emission providing subtle ambient backlight without disrupting sleep cycles.',
    bgGradient: 'from-red-950/30 via-rose-950/20 to-neutral-950',
    ambientHex: '#f43f5e',
    recommendedFor: 'Late Night Audio, Media Viewing, Relaxation'
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'dial',
    xPercent: 78,
    yPercent: 72,
    title: 'Haptic Rotary Dial',
    subtitle: 'Tactile Precision Control',
    description: 'Machined aluminum dial with micro-click tactile feedback for effortless stepless dimming and Kelvin adjustment.',
    iconName: 'Sliders'
  },
  {
    id: 'lens',
    xPercent: 42,
    yPercent: 28,
    title: 'Anti-Glare Micro-Louver Matrix',
    subtitle: 'Directed Optical Dispersion',
    description: 'Custom optical honeycomb lens directs 100% of illumination down to your desk canvas, eliminating screen glare entirely.',
    iconName: 'Sun'
  },
  {
    id: 'sensor',
    xPercent: 30,
    yPercent: 45,
    title: 'Ambient Solar Sensor',
    subtitle: 'Adaptive Brightness',
    description: 'Continuously measures surrounding room light 100 times per second to auto-balance light intensity smoothly.',
    iconName: 'Eye'
  },
  {
    id: 'dock',
    xPercent: 62,
    yPercent: 88,
    title: 'Qi2 Magnetic Base Dock',
    subtitle: 'Integrated Fast Charging',
    description: 'Discreet 15W wireless charging pad seamlessly recessed into the weighted solid aluminum base plate.',
    iconName: 'Zap'
  }
];

export const ACCESSORIES: Accessory[] = [
  {
    id: 'clamp',
    name: 'Heavy-Duty Desk Clamp Mount',
    price: 39,
    description: 'Saves valuable desk footprint by anchoring Aura directly to desk edges up to 2.5" thick.',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=400&q=80',
    popular: true
  },
  {
    id: 'case',
    name: 'Hard-Shell Travel Sleeve',
    price: 29,
    description: 'Custom molded water-resistant EVA foam case for portable creators on the move.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'dial_ring',
    name: 'Brass Tactile Dial Accent Ring',
    price: 19,
    description: 'Interchangeable solid brass ring for custom aesthetic personalization.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Elena Rostova',
    role: 'Principal Product Designer',
    rating: 5,
    date: '2 days ago',
    title: 'The single best upgrade for my studio workstation',
    content: 'The zero-glare lens is a game changer for long Figma sessions. I used to get headaches by 4 PM, but the 5000K focus mode and zero flicker have completely eliminated eye fatigue.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    category: 'Designers'
  },
  {
    id: '2',
    author: 'Marcus Vance',
    role: 'Senior Staff Engineer',
    rating: 5,
    date: '1 week ago',
    title: 'Precision build quality that feels built to last decades',
    content: 'The rotary dial haptics are unmatched. It feels like adjusting a high-end audio receiver knob. The ambient circadian auto-dimming is seamless during late night coding sprints.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    category: 'Developers'
  },
  {
    id: '3',
    author: 'Samantha Chen',
    role: 'Author & Technical Writer',
    rating: 5,
    date: '2 weeks ago',
    title: 'Warm 2700K sunset mode is magic for evening focus',
    content: 'As someone who writes late into the night, standard desk lamps are way too harsh. Aura’s Warm Sunset setting makes my desk feel like a cozy sanctuary.',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    category: 'Writers'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'How does Aura prevent monitor screen glare?',
    answer: 'Aura uses a proprietary micro-louver optical matrix that shapes the light beam into an asymmetrical 45-degree angle cone. Light is directed precisely onto your workspace surface rather than bouncing off computer screens.',
    category: 'Product'
  },
  {
    id: 'f2',
    question: 'Is the LED bulb replaceable?',
    answer: 'Aura utilizes solid-state high-CRI SunLike LEDs rated for over 50,000 hours (roughly 25 years of average daily use). We back every lamp with a 5-year full replacement warranty.',
    category: 'Product'
  },
  {
    id: 'f3',
    question: 'Does Aura require a mobile app to operate?',
    answer: 'No app required! Every core feature, dimming step, color temperature adjustment, and mode switch can be operated directly using the physical rotary touch dial. An optional iOS/Android app is available for customized automated schedules.',
    category: 'Product'
  },
  {
    id: 'f4',
    question: 'What is your shipping and 30-day trial policy?',
    answer: 'We offer free global express shipping on all orders. You can test Aura at your desk for 30 full days. If you are not completely satisfied, return it in original packaging for a 100% full refund.',
    category: 'Shipping'
  },
  {
    id: 'f5',
    question: 'What is included in the box?',
    answer: 'Each box includes the Aura Studio Lamp, a weighted anti-slip aluminum base plate, a 6ft braided USB-C power cable, a 30W compact GaN wall power adapter, and a quick setup guide.',
    category: 'Warranty'
  }
];

export const COMPARISON_TABLE = [
  { feature: 'Color Rendering Index (CRI)', aura: 'CRI 99 (TrueColor)', standard: 'CRI 80', overhead: 'CRI 70' },
  { feature: 'Flicker-Free Driver', aura: 'Zero PWM Flicker (<0.1%)', standard: 'Standard PWM Flicker', overhead: 'High Frequency Flicker' },
  { feature: 'Screen Glare Elimination', aura: 'Micro-Louver Cutoff Angle', standard: 'Direct Screen Reflection', overhead: 'Diffused Room Reflection' },
  { feature: 'Auto-Circadian Tuning', aura: 'Integrated Solar Sync', standard: 'None', overhead: 'None' },
  { feature: 'Integrated Wireless Charger', aura: '15W Qi2 Fast Dock', standard: 'None', overhead: 'None' },
  { feature: 'Warranty', aura: '5-Year Replacement', standard: '1-Year Limited', overhead: 'None' }
];
