import React from 'react';
import { FinishVariant } from '../types';
import { FINISH_VARIANTS, HERO_IMAGE } from '../data/productData';
import { Check, Shield, Star, Truck, Zap, Sparkles, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  selectedFinish: FinishVariant;
  onSelectFinish: (finish: FinishVariant) => void;
  onOrderNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedFinish,
  onSelectFinish,
  onOrderNow,
}) => {
  return (
    <section id="overview" className="relative pt-10 pb-20 overflow-hidden bg-zinc-950 text-white border-b border-zinc-800/80">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Launch Badge */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Next-Gen Desk Architecture</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>In Stock • Batch #01 Ships Fast</span>
          </span>
        </div>

        {/* Main Grid: Text & Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-8 text-center sm:text-left">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Light Re-imagined for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Deep Focus.</span>
              </h1>
              <p className="mt-5 text-lg text-zinc-300 max-w-2xl leading-relaxed">
                Aura Studio combines CRI 99 SunLike LED optics, automatic circadian clock synchronization, and a zero-glare micro-louver lens into an ultra-minimal solid aluminum form.
              </p>
            </div>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left space-y-1">
                <span className="text-amber-400 font-mono text-xs uppercase font-bold block">99 CRI</span>
                <span className="text-zinc-200 text-xs font-medium block">TrueColor Sunlight</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left space-y-1">
                <span className="text-amber-400 font-mono text-xs uppercase font-bold block">Zero Glare</span>
                <span className="text-zinc-200 text-xs font-medium block">45° Optical Mask</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-left space-y-1">
                <span className="text-amber-400 font-mono text-xs uppercase font-bold block">15W Qi2</span>
                <span className="text-zinc-200 text-xs font-medium block">Wireless Charging Base</span>
              </div>
            </div>

            {/* Finish Selector */}
            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Select Finish: <strong className="text-white ml-1 font-normal">{selectedFinish.name}</strong>
                </span>
                {selectedFinish.badge && (
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {selectedFinish.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {FINISH_VARIANTS.map((finish) => {
                  const isSelected = selectedFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => onSelectFinish(finish)}
                      className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-zinc-950 scale-105'
                          : 'opacity-70 hover:opacity-100 hover:scale-100'
                      }`}
                      style={{ backgroundColor: finish.hex }}
                      title={finish.name}
                      aria-label={`Select ${finish.name} finish`}
                    >
                      {isSelected && (
                        <Check className={`w-5 h-5 ${finish.id === 'titanium' ? 'text-zinc-950' : 'text-white'}`} />
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-zinc-400 line-clamp-1">{selectedFinish.description}</p>
            </div>

            {/* Price & Primary CTA */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-left w-full sm:w-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">$299</span>
                  <span className="text-lg text-zinc-500 line-through">$349</span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Save $50
                  </span>
                </div>
                <span className="text-xs text-zinc-400">Free Express Shipping & 30-Day Trial</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onOrderNow}
                  id="hero-order-cta"
                  className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 active:scale-95 transition-all text-center"
                >
                  Configure & Order
                </button>
                <a
                  href="#modes"
                  className="px-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium flex items-center gap-1.5"
                >
                  <span>Interactive Demo</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2 text-xs text-zinc-400">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-zinc-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="User" referrerPolicy="no-referrer" />
                <img className="w-7 h-7 rounded-full border-2 border-zinc-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="User" referrerPolicy="no-referrer" />
                <img className="w-7 h-7 rounded-full border-2 border-zinc-950" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="User" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">4.9/5</span>
                <span>(340+ Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Product Hero Visual with Finish Tint */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-2xl group">
              
              {/* Product Hero Image */}
              <img
                src={HERO_IMAGE}
                alt={`Aura Studio Lamp in ${selectedFinish.name}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay Accent representing the selected finish */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Tag overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: selectedFinish.hex }} />
                  <span className="font-semibold text-white">{selectedFinish.name} Edition</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-amber-400" /> 5-Yr Warranty
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-amber-400" /> Free Global Ship
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
