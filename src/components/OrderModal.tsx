import React, { useState } from 'react';
import { FinishVariant } from '../types';
import { Check, ShieldCheck, Truck, Sparkles, CreditCard, X, ArrowLeft } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFinish: FinishVariant;
  quantity: number;
  discountPercent: number;
  selectedAccessories: string[];
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedFinish,
  quantity,
  discountPercent,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  
  // Checkout Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'pay'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');

  if (!isOpen) return null;

  const basePrice = 299 * quantity;
  const discountAmt = Math.round((basePrice * discountPercent) / 100);
  const finalTotal = basePrice - discountAmt;

  const orderId = 'AURA-' + Math.floor(100000 + Math.random() * 900000);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !address.trim()) return;
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl my-8 animate-fadeIn text-white">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-sm">
              {step === 'form' ? 'Express Studio Order' : 'Order Confirmed!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step 1: Checkout Form */}
        {step === 'form' && (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-5 text-xs">
            
            {/* Order Brief Summary */}
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Aura Studio ({quantity}x)</span>
                <span className="text-[11px] text-amber-400">{selectedFinish.name} Finish</span>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-white text-sm block">${finalTotal}</span>
                <span className="text-[10px] text-emerald-400 font-semibold">Free Express Delivery</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                1. Shipping Information
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Hayes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@studio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-zinc-400 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    placeholder="742 Evergreen Terrace"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">City / State</label>
                  <input
                    type="text"
                    required
                    placeholder="San Francisco, CA"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                2. Select Payment Method
              </span>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 font-semibold ${
                    paymentMethod === 'card' ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 font-semibold ${
                    paymentMethod === 'apple' ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <span> Apple Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pay')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 font-semibold ${
                    paymentMethod === 'pay' ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <span>Google Pay</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-xs">{cardNumber}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Exp 08/29 • CVC 882</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-extrabold text-sm shadow-xl transition-all"
            >
              Confirm Pre-Order • ${finalTotal}
            </button>

            <p className="text-[10px] text-zinc-400 text-center">
              By placing your order, you agree to Aura’s 30-day money back guarantee and 5-year full warranty.
            </p>
          </form>
        )}

        {/* Step 2: Instant Order Confirmation */}
        {step === 'confirmed' && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Thank You, {name || 'Creator'}!</h3>
              <p className="text-xs text-zinc-300">
                Your pre-order for <strong className="text-amber-400">Aura Studio ({selectedFinish.name})</strong> has been successfully placed.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-400">Order Reference:</span>
                <span className="text-amber-400 font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Estimated Dispatch:</span>
                <span className="text-emerald-400">In 3 Days (Batch #01)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Delivery Address:</span>
                <span className="text-zinc-200">{address || '742 Evergreen Terrace'}, {city || 'San Francisco'}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Confirmation email & live tracking link sent to <strong className="text-white">{email || 'your email'}</strong></span>
            </div>

            <button
              onClick={() => {
                setStep('form');
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-all"
            >
              Back to Product Page
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
