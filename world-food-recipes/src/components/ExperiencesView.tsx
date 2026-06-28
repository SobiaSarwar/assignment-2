import React, { useState } from 'react';
import { MessageSquareHeart, Heart, MessageCircle, Share2, Star, Camera, Send, PlusCircle, ChefHat, Sparkles } from 'lucide-react';
import { KitchenExperience } from '../types';

interface ExperiencesViewProps {
  experiences: KitchenExperience[];
  onLikeExperience: (id: string) => void;
  onAddStory: (newExp: KitchenExperience) => void;
  onAddExpComment: (expId: string, userName: string, text: string) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  experiences,
  onLikeExperience,
  onAddStory,
  onAddExpComment,
}) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [commenterHandle, setCommenterHandle] = useState('Home Chef');

  // Form states for new story
  const [storyTitle, setStoryTitle] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [storyBody, setStoryBody] = useState('');
  const [rating, setRating] = useState(5);
  const [authorName, setAuthorName] = useState('Culinary Explorer');
  const [photoURL, setPhotoURL] = useState('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80');

  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyTitle.trim() || !storyBody.trim()) return;

    const newExp: KitchenExperience = {
      id: `exp-${Date.now()}`,
      authorName: authorName.trim() || 'Food Community Chef',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      recipeTitle: recipeName.trim() || undefined,
      title: storyTitle.trim(),
      story: storyBody.trim(),
      image: photoURL,
      rating,
      likesCount: 1,
      commentsCount: 0,
      createdAt: 'Just now',
      comments: []
    };

    onAddStory(newExp);
    setShowUploadModal(false);
    setStoryTitle('');
    setRecipeName('');
    setStoryBody('');
  };

  const handlePostComment = (expId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    onAddExpComment(expId, commenterHandle || 'Global Foodie', newCommentText.trim());
    setNewCommentText('');
  };

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-300">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-stone-900 to-orange-950 p-6 rounded-3xl text-white shadow-xl border border-orange-500/20">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/30 text-orange-200 text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Stories</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Kitchen Experiences & Tales
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm">
            Real triumphs, wood-fired experiments, and family dinner stories from food lovers worldwide.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs shadow-lg shadow-orange-500/20 active:scale-95 transition-all shrink-0"
        >
          <Camera className="w-4 h-4" />
          <span>Share Your Story</span>
        </button>
      </div>

      {/* Stories Feed */}
      <div className="space-y-6 max-w-2xl mx-auto">
        {experiences.map((exp) => {
          const isCommenting = activeCommentPostId === exp.id;

          return (
            <article
              key={exp.id}
              className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 space-y-4 p-5 sm:p-6"
            >
              {/* Post Header: Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={exp.authorAvatar} alt={exp.authorName} className="w-10 h-10 rounded-full object-cover border border-orange-200 dark:border-stone-700 shadow-sm" />
                  <div>
                    <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100">{exp.authorName}</h3>
                    <p className="text-[11px] text-stone-400">{exp.createdAt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 dark:bg-stone-800 px-2.5 py-1 rounded-full border border-amber-200/60 dark:border-stone-700">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300">{exp.rating}.0</span>
                </div>
              </div>

              {/* Recipe Tag if linked */}
              {exp.recipeTitle && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-xs font-semibold">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Cooked: <strong>{exp.recipeTitle}</strong></span>
                </div>
              )}

              {/* Post Title & Story */}
              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100 leading-snug">
                  {exp.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  {exp.story}
                </p>
              </div>

              {/* Kitchen Photo */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-sm">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
              </div>

              {/* Community Interactions Footer */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-stone-600 dark:text-stone-300">
                <div className="flex items-center gap-4">
                  {/* Like Button */}
                  <button
                    onClick={() => onLikeExperience(exp.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-red-50 dark:hover:bg-red-950/30 text-xs font-bold transition-colors group active:scale-90"
                  >
                    <Heart className="w-4 h-4 text-red-500 group-hover:fill-red-500 transition-colors" />
                    <span className="text-red-600 dark:text-red-400">{exp.likesCount} Likes</span>
                  </button>

                  {/* Comment Toggle Button */}
                  <button
                    onClick={() => setActiveCommentPostId(isCommenting ? null : exp.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                      isCommenting 
                        ? 'bg-orange-100 dark:bg-stone-800 text-orange-600' 
                        : 'hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-orange-500" />
                    <span>{exp.commentsCount + (exp.comments?.length || 0)} Comments</span>
                  </button>
                </div>

                <button
                  onClick={() => alert(`Story link copied to clipboard!`)}
                  className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Comments Section Drawer */}
              {isCommenting && (
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-4 animate-in slide-in-from-top-2 duration-200">
                  <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Community Comments ({exp.comments?.length || 0})
                  </h5>

                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                    {(!exp.comments || exp.comments.length === 0) ? (
                      <p className="text-xs text-stone-400 italic">No comments yet. Share your congratulations or cooking question!</p>
                    ) : (
                      exp.comments.map((cm) => (
                        <div key={cm.id} className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-2xl text-xs space-y-1">
                          <div className="flex justify-between font-bold text-stone-800 dark:text-stone-200">
                            <span>{cm.userName}</span>
                            <span className="text-[10px] text-stone-400 font-normal">{cm.createdAt}</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-300">{cm.text}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Add Comment Input */}
                  <form onSubmit={(e) => handlePostComment(exp.id, e)} className="flex gap-2 pt-2">
                    <input
                      type="text"
                      placeholder="Your handle..."
                      value={commenterHandle}
                      onChange={(e) => setCommenterHandle(e.target.value)}
                      className="w-1/4 px-3 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      className="flex-1 px-3 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold shrink-0 flex items-center justify-center transition-all shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

            </article>
          );
        })}
      </div>

      {/* New Story Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-stone-900 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Camera className="w-5 h-5 text-orange-500" />
                <span>Share Kitchen Story</span>
              </h3>
              <button onClick={() => setShowUploadModal(false)} className="text-stone-400 hover:text-stone-700 font-bold text-sm">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateStory} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Catchy Headline *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Sizzling Pad Thai Triumph on Sunday Night!"
                  value={storyTitle}
                  onChange={(e) => setStoryTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Chef name..."
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Recipe Cooked (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Sindhi Biryani"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Kitchen Photo URL *</label>
                <input
                  type="url"
                  required
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Your Cooking Experience & Review *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share how it turned out, guest reactions, or lessons learned in the kitchen..."
                  value={storyBody}
                  onChange={(e) => setStoryBody(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none leading-relaxed"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-extrabold text-xs shadow-lg shadow-orange-600/30"
                >
                  Publish Kitchen Tale
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
