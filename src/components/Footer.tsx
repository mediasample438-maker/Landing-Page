import React, { useState } from 'react';
import { Sun, Shield, Truck, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-zinc-950 font-bold">
                <Sun className="w-4 h-4 text-zinc-950" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                AURA <span className="text-amber-400 font-light text-xs">STUDIO</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Engineered with SunLike LED optics, 99 CRI natural color accuracy, and zero-glare spatial light dispersion for high-focus creators.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Subscribe to Studio Dispatch
            </span>
            <p className="text-zinc-400 text-[11px]">
              Receive early access to limited edition finishes and circadian ergonomics research.
            </p>

            {subscribed ? (
              <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed! Check your inbox for your 10% accessory code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-1 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-900 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-300">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>5-Year Full Replacement Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-zinc-300">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Free Express Shipping Worldwide</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2 text-zinc-300">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>30-Day Risk-Free Workstation Trial</span>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Aura Studio Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Returns & Refunds</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
