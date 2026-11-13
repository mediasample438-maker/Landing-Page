import React, { useState } from 'react';
import { FINISH_VARIANTS } from './data/productData';
import { FinishVariant } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LightingPreviewSection } from './components/LightingPreviewSection';
import { HotspotsSection } from './components/HotspotsSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { SpecsSection } from './components/SpecsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedFinish, setSelectedFinish] = useState<FinishVariant>(FINISH_VARIANTS[0]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>(['clamp']);
  const [quantity, setQuantity] = useState<number>(1);

  // Drawers and Modal Controls
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

  const cartCount = quantity + selectedAccessories.length;

  const handleToggleAccessory = (accId: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(accId) ? prev.filter((id) => id !== accId) : [...prev, accId]
    );
  };

  const handleProceedToCheckout = (discountPercent: number) => {
    setAppliedDiscount(discountPercent);
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleQuickBuy = () => {
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Sticky Header Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onQuickBuy={handleQuickBuy}
      />

      {/* Main Page Sections */}
      <main>
        {/* Hero Product Overview */}
        <HeroSection
          selectedFinish={selectedFinish}
          onSelectFinish={setSelectedFinish}
          onOrderNow={() => setIsCartOpen(true)}
        />

        {/* Interactive Lighting Simulator */}
        <LightingPreviewSection />

        {/* Engineering Breakdown Hotspots */}
        <HotspotsSection />

        {/* Efficiency & Ergonomics Calculator */}
        <SavingsCalculator />

        {/* Technical Specs & Comparison Matrix */}
        <SpecsSection />

        {/* Customer Reviews & Feedback */}
        <ReviewsSection />

        {/* FAQ & Support Contact */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedFinish={selectedFinish}
        selectedAccessories={selectedAccessories}
        onToggleAccessory={handleToggleAccessory}
        quantity={quantity}
        onChangeQuantity={setQuantity}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Fast Checkout & Order Confirmation Modal */}
      <OrderModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        selectedFinish={selectedFinish}
        quantity={quantity}
        discountPercent={appliedDiscount}
        selectedAccessories={selectedAccessories}
      />

    </div>
  );
}
