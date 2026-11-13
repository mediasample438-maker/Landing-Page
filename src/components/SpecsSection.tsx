import React, { useState } from 'react';
import { COMPARISON_TABLE } from '../data/productData';
import { Check, X, ShieldAlert, Cpu, Sparkles, Layers } from 'lucide-react';

export const SpecsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'comparison'>('specs');

  return (
    <section id="specs" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Technical Precision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Full Specifications & Benchmarks
          </h2>
          <p className="text-zinc-400 text-base">
            Detailed breakdown of optical physics, acoustics, power efficiency, and materials.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 mt-4">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'specs'
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Full Spec Sheet
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'comparison'
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Competitor Benchmark
            </button>
          </div>
        </div>

        {/* Tab 1: Detailed Tech Spec Matrix */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fadeIn">
            
            {/* Optical Engine */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg text-white">Optical & Light Engine</h3>
              </div>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">LED Technology</dt>
                  <dd className="font-semibold text-white">SunLike Tri-Spectrum Solid-State</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Color Rendering Index (CRI)</dt>
                  <dd className="font-semibold text-amber-400">CRI 99 (R9 &gt; 97)</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Color Temperature Range</dt>
                  <dd className="font-semibold text-white">1,800K – 6,500K Continuous</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Max Luminance Output</dt>
                  <dd className="font-semibold text-white">1,200 Lux @ 45cm desk distance</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-zinc-400">Flicker Metric (PstLM)</dt>
                  <dd className="font-semibold text-emerald-400">&lt; 0.005 (Flicker-Free IEEE 1789)</dd>
                </div>
              </dl>
            </div>

            {/* Power & Connectivity */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                <Cpu className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg text-white">Power & Wireless Base</h3>
              </div>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Input Power Supply</dt>
                  <dd className="font-semibold text-white">30W GaN USB-C Power Adapter</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Wireless Base Charger</dt>
                  <dd className="font-semibold text-white">15W Qi2 Fast Charging Magnetic Dock</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Sensors</dt>
                  <dd className="font-semibold text-white">Ambient Solar Light Sensor, Proximity Touch</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Max Lamp Power Draw</dt>
                  <dd className="font-semibold text-white">12 Watts LED</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-zinc-400">Cable</dt>
                  <dd className="font-semibold text-white">1.8m Braided Nylon USB-C to USB-C</dd>
                </div>
              </dl>
            </div>

            {/* Build & Materials */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                <Layers className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg text-white">Craftsmanship & Materials</h3>
              </div>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Chassis Body</dt>
                  <dd className="font-semibold text-white">6063 Anodized Aircraft Aluminum</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Base Weighting</dt>
                  <dd className="font-semibold text-white">Solid Steel Internal Counterbalance</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Heat Dissipation</dt>
                  <dd className="font-semibold text-white">Passive Micro-Finned Chimney Sink</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-zinc-400">Finish Coating</dt>
                  <dd className="font-semibold text-white">Micro-Bead Blasted Anti-Fingerprint</dd>
                </div>
              </dl>
            </div>

            {/* Dimensions */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-lg text-white">Dimensions & In The Box</h3>
              </div>
              <dl className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Total Height</dt>
                  <dd className="font-semibold text-white">420 mm (16.5 inches)</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Base Diameter</dt>
                  <dd className="font-semibold text-white">140 mm (5.5 inches)</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/50">
                  <dt className="text-zinc-400">Total Weight</dt>
                  <dd className="font-semibold text-white">1.85 kg (4.07 lbs)</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-zinc-400">Box Contents</dt>
                  <dd className="font-semibold text-white">Aura Lamp, Weighted Base, GaN Charger, USB-C Cable</dd>
                </div>
              </dl>
            </div>

          </div>
        )}

        {/* Tab 2: Comparison Benchmark Table */}
        {activeTab === 'comparison' && (
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl animate-fadeIn">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-mono">
                <tr>
                  <th className="p-4">Feature / Metric</th>
                  <th className="p-4 text-amber-400 font-bold bg-amber-500/10">Aura Studio Lamp</th>
                  <th className="p-4">Standard Desk LED</th>
                  <th className="p-4">Overhead Lighting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/40 transition-colors">
                    <td className="p-4 font-semibold text-zinc-200">{row.feature}</td>
                    <td className="p-4 font-bold text-amber-400 bg-amber-500/5 border-x border-zinc-800/50">{row.aura}</td>
                    <td className="p-4 text-zinc-400">{row.standard}</td>
                    <td className="p-4 text-zinc-400">{row.overhead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
