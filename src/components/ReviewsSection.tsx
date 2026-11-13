import React, { useState } from 'react';
import { REVIEWS } from '../data/productData';
import { Review } from '../types';
import { Star, CheckCircle, Plus, Sparkles, MessageSquare, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Designers' | 'Developers' | 'Writers'>('All');
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [helpfulCounts, setHelpfulCounts] = useState<{ [key: string]: number }>({ '1': 24, '2': 18, '3': 31 });

  // New review form modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('Product Creator');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const filteredReviews = reviewsList.filter(
    (rev) => activeCategory === 'All' || rev.category === activeCategory
  );

  const handleToggleHelpful = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newTitle.trim() || !newContent.trim()) return;

    const newRev: Review = {
      id: Date.now().toString(),
      author: newAuthor,
      role: newRole,
      rating: newRating,
      date: 'Just now',
      title: newTitle,
      content: newContent,
      verified: true,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80`,
      category: 'Designers',
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowAddModal(false);
    setNewAuthor('');
    setNewTitle('');
    setNewContent('');
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-900/40 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Verified Creator Feedback</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Loved by Designers & Engineers
            </h2>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xl font-bold text-white font-mono">4.9 / 5.0</span>
              <span className="text-xs text-zinc-400">• Based on 342 verified purchases</span>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-white font-medium text-xs flex items-center gap-2 self-start md:self-auto transition-all"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {(['All', 'Designers', 'Developers', 'Writers'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-all shadow-lg"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">{rev.date}</span>
                </div>

                <h3 className="font-bold text-sm text-white">{rev.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{rev.content}</p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-8 h-8 rounded-full object-cover border border-zinc-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-semibold text-xs text-white block flex items-center gap-1">
                      {rev.author}
                      {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 inline" />}
                    </span>
                    <span className="text-[10px] text-zinc-400 block">{rev.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleToggleHelpful(rev.id)}
                  className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{helpfulCounts[rev.id] || 0}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-5 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Submit Verified Review</span>
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-zinc-400 hover:text-white text-xs font-mono px-2 py-1 bg-zinc-900 rounded"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-400 mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-medium">Role / Occupation</label>
                  <input
                    type="text"
                    placeholder="e.g. UI/UX Designer"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-medium">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className={`p-2 rounded-lg border ${
                          newRating >= star ? 'bg-amber-500/10 border-amber-500 text-amber-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'
                        }`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-medium">Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Best workstation lamp I have ever used"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-medium">Review Body</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share your thoughts on optics, design, and ergonomics..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg transition-all"
                >
                  Post Review
                </button>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
