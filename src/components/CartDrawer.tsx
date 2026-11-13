import React, { useState } from 'react';
import { FinishVariant, Accessory } from '../types';
import { ACCESSORIES } from '../data/productData';
import { X, Trash2, Plus, Minus, Shield, Tag, Check, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFinish: FinishVariant;
  selectedAccessories: string[];
  onToggleAccessory: (accId: string) => void;
  quantity: number;
  onChangeQuantity: (q: number) => void;
  onProceedToCheckout: (discountPercent: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  selectedFinish,
  selectedAccessories,
  onToggleAccessory,
  quantity,
  onChangeQuantity,
  onProceedToCheckout,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // percentage
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const basePrice = 299;
  const itemSubtotal = basePrice * quantity;
  
  const accessoriesTotal = selectedAccessories.reduce((acc, id) => {
    const found = ACCESSORIES.find((a) => a.id === id);
    return acc + (found ? found.price * quantity : 0);
  }, 0);

  const rawTotal = itemSubtotal + accessoriesTotal;
  const discountAmount = Math.round((rawTotal * appliedDiscount) / 100);
  const finalTotal = rawTotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'LAUNCH20') {
      setAppliedDiscount(20);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "LAUNCH20" for 20% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span>Your Configuration</span>
              <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-mono">
                Batch #01
              </span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Main Product Card */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex gap-4">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center shrink-0 border border-white/20"
                style={{ backgroundColor: selectedFinish.hex }}
              >
                <span className="text-[10px] font-bold text-white uppercase text-center">
                  AURA
                </span>
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between font-bold text-sm">
                  <span>Aura Studio Lamp</span>
                  <span>${basePrice}</span>
                </div>
                <p className="text-xs text-amber-400 font-medium">{selectedFinish.name} Finish</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 border border-zinc-800 rounded-lg bg-zinc-950 px-2 py-1">
                    <button
                      onClick={() => onChangeQuantity(Math.max(1, quantity - 1))}
                      className="text-zinc-400 hover:text-white p-0.5"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono font-bold w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => onChangeQuantity(quantity + 1)}
                      className="text-zinc-400 hover:text-white p-0.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-xs text-zinc-400">${itemSubtotal}</span>
                </div>
              </div>
            </div>

            {/* Optional Recommended Add-ons */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                Recommended Studio Add-Ons
              </span>

              <div className="space-y-2">
                {ACCESSORIES.map((acc) => {
                  const isChecked = selectedAccessories.includes(acc.id);
                  return (
                    <div
                      key={acc.id}
                      onClick={() => onToggleAccessory(acc.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                            isChecked ? 'bg-amber-500 border-amber-500 text-zinc-950' : 'border-zinc-700 bg-zinc-950'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold block text-white">{acc.name}</span>
                          <span className="text-[10px] text-zinc-400 block">{acc.description}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 shrink-0 ml-2">
                        +${acc.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Promo Code Form */}
            <div className="space-y-2">
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Promo code (e.g. LAUNCH20)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white uppercase placeholder:normal-case focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs"
                >
                  Apply
                </button>
              </form>

              {appliedDiscount > 0 && (
                <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Code LAUNCH20 Applied (20% OFF)
                </p>
              )}
              {promoError && <p className="text-xs text-rose-400">{promoError}</p>}
            </div>

          </div>

          {/* Footer Summary & Checkout CTA */}
          <div className="p-6 border-t border-zinc-800 bg-zinc-950 space-y-4">
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${rawTotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Discount (20%)</span>
                  <span>-${discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Worldwide Shipping</span>
                <span className="text-emerald-400 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-zinc-800">
                <span>Total Due</span>
                <span className="text-amber-400 font-mono text-base">${finalTotal}</span>
              </div>
            </div>

            <button
              onClick={() => onProceedToCheckout(appliedDiscount)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Fast Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1">
              <Shield className="w-3 h-3 text-amber-400" />
              <span>30-Day Money Back Guarantee • Encrypted 256-bit Checkout</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
