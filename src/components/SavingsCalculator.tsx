import React, { useState } from 'react';
import { Zap, Clock, ShieldCheck, Leaf, Sparkles } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(8);

  // Calculations:
  // Aura power draw: ~12W LED vs Conventional Lamp ~60W
  // Savings: 48W * hours * 365 / 1000 = kWh per year * $0.18 avg electricity rate
  const wattsSavedPerHour = 48;
  const yearlyKWhSaved = Math.round((wattsSavedPerHour * dailyHours * 365) / 1000);
  const yearlyMoneySaved = Math.round(yearlyKWhSaved * 0.18);
  const ledLifespanYears = Math.min(30, Math.round(50000 / (dailyHours * 365)));
  const eyeStrainReduction = Math.min(96, Math.round(75 + dailyHours * 2.2));

  return (
    <section className="py-20 bg-zinc-900/40 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-zinc-950 p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-2xl space-y-8">
          
          <div className="text-center space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Efficiency & Ergonomics Calculator</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Calculate Your Daily Workstation Impact
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto">
              Select your average daily desk hours to see how SunLike LED technology reduces energy overhead and protects eye health over time.
            </p>
          </div>

          {/* Interactive Hours Slider */}
          <div className="space-y-4 max-w-xl mx-auto bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-300 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Daily Workstation Usage:</span>
              </span>
              <span className="text-xl font-bold font-mono text-amber-400">
                {dailyHours} Hours / Day
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={16}
              step={1}
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />

            <div className="flex justify-between text-[11px] font-mono text-zinc-400">
              <span>1 Hour (Casual)</span>
              <span>8 Hours (Full-Time)</span>
              <span>16 Hours (Sprint)</span>
            </div>
          </div>

          {/* Dynamic Calculated Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
              <span className="text-zinc-400 text-xs font-medium block">Yearly Energy Savings</span>
              <span className="text-2xl font-extrabold text-emerald-400 font-mono block">${yearlyMoneySaved}</span>
              <span className="text-[10px] text-zinc-400 block">{yearlyKWhSaved} kWh Saved</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
              <span className="text-zinc-400 text-xs font-medium block">Eye Strain Protection</span>
              <span className="text-2xl font-extrabold text-amber-400 font-mono block">{eyeStrainReduction}%</span>
              <span className="text-[10px] text-zinc-400 block">Zero PWM Flicker</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
              <span className="text-zinc-400 text-xs font-medium block">LED Lifespan</span>
              <span className="text-2xl font-extrabold text-white font-mono block">{ledLifespanYears} Years</span>
              <span className="text-[10px] text-zinc-400 block">50,000 Rated Hours</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-1">
              <span className="text-zinc-400 text-xs font-medium block">CO2 Offset</span>
              <span className="text-2xl font-extrabold text-teal-400 font-mono block">{(yearlyKWhSaved * 0.85).toFixed(0)} lbs</span>
              <span className="text-[10px] text-zinc-400 block">Reduced Carbon Footprint</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
