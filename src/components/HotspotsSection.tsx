import React, { useState } from 'react';
import { HOTSPOTS, DETAIL_IMAGE } from '../data/productData';
import { Hotspot } from '../types';
import { Sliders, Sun, Eye, Zap, Info, ChevronRight } from 'lucide-react';

export const HotspotsSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sliders': return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Info className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="engineering" className="py-20 bg-zinc-950 text-white border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Precision Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Architectural Engineering Breakdown
          </h2>
          <p className="text-zinc-400 text-base">
            Click on the interactive hotspots below to explore the custom components engineered inside Aura Studio.
          </p>
        </div>

        {/* Hotspots Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Visual with Hotspots */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src={DETAIL_IMAGE}
              alt="Aura Studio Detail View"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Hotspot Pins */}
            {HOTSPOTS.map((hotspot) => {
              const isSelected = activeHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all`}
                  style={{ left: `${hotspot.xPercent}%`, top: `${hotspot.yPercent}%` }}
                  aria-label={`View hotspot ${hotspot.title}`}
                >
                  <span className={`relative flex h-8 w-8 items-center justify-center`}>
                    {/* Pulsing ring */}
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSelected ? 'bg-amber-400' : 'bg-white/60'} opacity-75`} />
                    {/* Inner pin button */}
                    <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-125 ${
                      isSelected
                        ? 'bg-amber-400 text-zinc-950 shadow-lg shadow-amber-400/50 scale-110'
                        : 'bg-zinc-900 text-white border border-white/40'
                    }`}>
                      {HOTSPOTS.indexOf(hotspot) + 1}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Hotspot Details */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Select Component ({HOTSPOTS.indexOf(activeHotspot) + 1} / {HOTSPOTS.length})
            </div>

            {/* Component Accordion Cards */}
            <div className="space-y-3">
              {HOTSPOTS.map((hotspot) => {
                const isSelected = activeHotspot.id === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 border-amber-500/80 shadow-xl shadow-amber-500/5'
                        : 'bg-zinc-950 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500/10' : 'bg-zinc-900'}`}>
                          {getIcon(hotspot.iconName)}
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-white">{hotspot.title}</h3>
                          <p className="text-xs text-amber-400/90">{hotspot.subtitle}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-zinc-400 transition-transform ${isSelected ? 'rotate-90 text-amber-400' : ''}`} />
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-300 leading-relaxed animate-fadeIn">
                        {hotspot.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
