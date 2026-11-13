import React from 'react';
import { ShoppingBag, Sparkles, ShieldCheck, Sun } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onQuickBuy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onQuickBuy }) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 text-zinc-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sun className="w-5 h-5 text-zinc-950 animate-pulse" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              AURA <span className="text-amber-400 font-light text-sm tracking-wider uppercase border border-amber-500/30 px-1.5 py-0.5 rounded-md bg-amber-500/10">STUDIO</span>
            </span>
            <span className="text-[10px] text-zinc-400 block -mt-1 font-mono tracking-widest uppercase">Precision Optics</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
          <a href="#modes" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <span>Lighting Simulator</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          </a>
          <a href="#engineering" className="hover:text-amber-400 transition-colors">Engineering</a>
          <a href="#specs" className="hover:text-amber-400 transition-colors">Specs</a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            id="cart-trigger-btn"
            className="relative p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-zinc-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Pre-order Button */}
          <button
            onClick={onQuickBuy}
            id="quick-order-btn"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Order Aura — $299</span>
          </button>
        </div>

      </div>
    </header>
  );
};
