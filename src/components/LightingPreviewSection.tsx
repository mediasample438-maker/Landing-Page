import React, { useState } from 'react';
import { LIGHTING_MODES, LIFESTYLE_IMAGE } from '../data/productData';
import { LightingMode } from '../types';
import { Sun, Moon, Sliders, Sparkles, CheckCircle2 } from 'lucide-react';

export const LightingPreviewSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<LightingMode>(LIGHTING_MODES[0]);
  const [kelvin, setKelvin] = useState<number>(LIGHTING_MODES[0].kelvin);
  const [brightness, setBrightness] = useState<number>(85);

  const handleSelectMode = (mode: LightingMode) => {
    setActiveMode(mode);
    setKelvin(mode.kelvin);
  };

  // Convert kelvin temperature to CSS RGB tint
  const getKelvinColor = (k: number) => {
    if (k <= 2200) return 'rgba(245, 120, 30, ';
    if (k <= 3000) return 'rgba(245, 158, 11, ';
    if (k <= 4200) return 'rgba(250, 204, 21, ';
    if (k <= 5500) return 'rgba(56, 189, 248, ';
    return 'rgba(129, 140, 248, ';
  };

  const ambientColor = getKelvinColor(kelvin);
  const opacityVal = (brightness / 100).toFixed(2);

  return (
    <section id="modes" className="py-20 bg-zinc-900/60 text-white border-b border-zinc-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sun className="w-3.5 h-3.5" />
            <span>Interactive Lighting Simulator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience Circadian Lighting Control
          </h2>
          <p className="text-zinc-400 text-base">
            Test how Aura’s optical engine transforms your desk atmosphere. Select presets or fine-tune color temperature and lux intensity in real time.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Preset Buttons & Manual Sliders */}
          <div className="lg:col-span-5 space-y-6 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span>Lighting Controls</span>
              </h3>
              <span className="text-xs font-mono text-zinc-400">
                {kelvin}K • {brightness}% Lux
              </span>
            </div>

            {/* Mode Presets */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                Preset Lighting Profiles
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {LIGHTING_MODES.map((mode) => {
                  const isSelected = activeMode.id === mode.id && kelvin === mode.kelvin;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => handleSelectMode(mode)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-white">{mode.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-amber-400">
                          {mode.kelvin}K
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-400 line-clamp-1">{mode.recommendedFor}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Kelvin Temperature Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-400">Color Temperature (Kelvin)</span>
                <span className="text-amber-400 font-mono font-bold">{kelvin} K</span>
              </div>
              <input
                type="range"
                min={1800}
                max={6500}
                step={50}
                value={kelvin}
                onChange={(e) => setKelvin(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-orange-600 via-amber-400 via-sky-400 to-indigo-400 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>1800K (Candle Glow)</span>
                <span>3800K (Neutral)</span>
                <span>6500K (Daylight)</span>
              </div>
            </div>

            {/* Custom Lux Brightness Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-400">Luminance (Brightness)</span>
                <span className="text-amber-400 font-mono font-bold">{brightness} %</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>150 Lux (Night)</span>
                <span>650 Lux (Reading)</span>
                <span>1200 Lux (Max Focus)</span>
              </div>
            </div>

            {/* Active Mode Info Box */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Optical Profile Insight</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                {activeMode.description}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/80">
                <span>CRI Rating: <strong className="text-white">99 / 100</strong></span>
                <span>Flicker Metric: <strong className="text-emerald-400">0.00% Zero Flicker</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Workstation Lighting Preview Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
              
              {/* Simulated Ambient Room Canvas */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                {/* Base Workspace Image */}
                <img
                  src={LIFESTYLE_IMAGE}
                  alt="Workstation lighting simulator"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Dynamic Ambient Lighting Overlay Layer */}
                <div
                  className="absolute inset-0 transition-all duration-300 pointer-events-none mix-blend-soft-light"
                  style={{
                    backgroundColor: `${ambientColor}${opacityVal})`,
                  }}
                />
                
                <div
                  className="absolute inset-0 transition-all duration-300 pointer-events-none mix-blend-color"
                  style={{
                    backgroundColor: `${ambientColor}${(parseFloat(opacityVal) * 0.4).toFixed(2)})`,
                  }}
                />

                {/* Simulated Desk Glow Cone */}
                <div
                  className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full h-[150%] rounded-full blur-3xl pointer-events-none transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle, ${ambientColor}${opacityVal}) 0%, transparent 70%)`,
                  }}
                />

                {/* Live Output HUD Overlay */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs space-y-1">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeMode.ambientHex }} />
                    <span>{kelvin}K Spectrum Output</span>
                  </div>
                  <div className="text-zinc-400 font-mono text-[11px]">
                    Luminance: {Math.round(brightness * 12)} Lux • Eye Strain: Reduced 94%
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>SunLike Natural Spectrum Verified</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
