import React, { useState } from 'react';
import { FAQS } from '../data/productData';
import { ChevronDown, HelpCircle, Send, Check } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);
  const [customQuestion, setCustomQuestion] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    setQuestionSent(true);
    setTimeout(() => {
      setCustomQuestion('');
      setQuestionSent(false);
    }, 4000);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm">
            Everything you need to know about setup, shipping, warranty, and zero-glare optical engineering.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Custom Question Form */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-sm text-white">Have a specific workstation setup question?</h3>
            <p className="text-xs text-zinc-400">Our optical engineering team responds within 2 hours.</p>
          </div>

          {questionSent ? (
            <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Question received! We'll reply via email.</span>
            </div>
          ) : (
            <form onSubmit={handleSendQuestion} className="flex gap-2 w-full sm:w-auto">
              <input
                type="text"
                required
                placeholder="Ask us anything..."
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 w-full sm:w-64"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-1 transition-all shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Ask</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
