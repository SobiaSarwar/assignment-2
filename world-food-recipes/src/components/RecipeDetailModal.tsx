import React, { useState } from 'react';
import { X, Clock, Flame, Star, Bookmark, Share2, Sparkles, CheckCircle2, MessageSquare, Send, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onShare: (recipe: Recipe) => void;
  onAddComment: (recipeId: string, userName: string, text: string, rating: number) => void;
  onAskAIChef: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  isFavorite,
  onToggleFavorite,
  onShare,
  onAddComment,
  onAskAIChef,
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [commentText, setCommentText] = useState('');
  const [commentRating, setCommentRating] = useState(5);
  const [commenterName, setCommenterName] = useState('Food Lover');

  if (!recipe) return null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(recipe.id, commenterName || 'Global Foodie', commentText, commentRating);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-stone-900 min-h-screen sm:min-h-0 sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col max-h-[95vh]">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-4 py-3 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
              {recipe.cuisine} Cuisine
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onAskAIChef(recipe)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold shadow-sm active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Chef</span>
            </button>

            <button
              onClick={() => onShare(recipe)}
              aria-label="Share"
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleFavorite(recipe.id)}
              aria-label="Save"
              className={`p-2 rounded-full transition-colors ${
                isFavorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-red-500 hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-8 no-scrollbar">
          
          {/* Hero Image & Title */}
          <div className="space-y-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] bg-stone-100 dark:bg-stone-800 shadow-lg">
              <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {recipe.authorAvatar && (
                    <img src={recipe.authorAvatar} alt={recipe.authorName} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  )}
                  <span className="text-sm font-medium drop-shadow">Recipe by <strong className="font-bold">{recipe.authorName}</strong></span>
                </div>
                <span className="text-xs bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">{recipe.createdAt}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-50 leading-tight">
              {recipe.title}
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-800">
            <div className="flex flex-col items-center justify-center p-2 text-center border-r border-stone-200 dark:border-stone-700/60 last:border-0 sm:last:border-r">
              <span className="text-xs text-stone-500 dark:text-stone-400">Prep Time</span>
              <span className="text-sm font-bold text-stone-800 dark:text-stone-100 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-orange-500" /> {recipe.prepTime} mins
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-r sm:border-r border-stone-200 dark:border-stone-700/60 last:border-0 sm:last:border-r">
              <span className="text-xs text-stone-500 dark:text-stone-400">Cook Time</span>
              <span className="text-sm font-bold text-stone-800 dark:text-stone-100 flex items-center gap-1 mt-0.5">
                <ChefHat className="w-3.5 h-3.5 text-amber-500" /> {recipe.cookTime} mins
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-r border-stone-200 dark:border-stone-700/60 last:border-0">
              <span className="text-xs text-stone-500 dark:text-stone-400">Calories</span>
              <span className="text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5">
                <Flame className="w-3.5 h-3.5 text-red-500" /> {recipe.calories} kcal
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="text-xs text-stone-500 dark:text-stone-400">Difficulty</span>
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                {recipe.difficulty}
              </span>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>🛒 Ingredients</span>
                <span className="text-xs font-normal text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full">
                  {recipe.ingredients.length} items
                </span>
              </h3>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Click to check off</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredient(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 text-stone-400 line-through'
                        : 'bg-white dark:bg-stone-800/80 border-stone-200 dark:border-stone-700/80 hover:border-orange-300 text-stone-800 dark:text-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${isChecked ? 'text-emerald-500 fill-emerald-100 dark:fill-emerald-900' : 'text-stone-300 dark:text-stone-600'}`} />
                      <span className="font-medium text-sm">{ing.name}</span>
                    </div>
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-stone-900 px-2.5 py-1 rounded-lg shrink-0">
                      {ing.amount}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              👩‍🍳 Step-by-Step Instructions
            </h3>

            <div className="space-y-4">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-red-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                    {idx + 1}
                  </div>
                  <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Ratings & Comments */}
          <div className="space-y-6 pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                <span>Community Reviews ({recipe.comments.length})</span>
              </h3>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{recipe.rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Existing Comments */}
            <div className="space-y-3">
              {recipe.comments.length === 0 ? (
                <p className="text-stone-400 text-sm italic py-4 text-center bg-stone-50 dark:bg-stone-800/30 rounded-xl">
                  Be the first chef to rate and comment on this recipe!
                </p>
              ) : (
                recipe.comments.map((c) => (
                  <div key={c.id} className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900 dark:text-stone-200">{c.userName}</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: c.rating || 5 }).map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        ))}
                        <span className="text-[10px] text-stone-400 ml-2">{c.createdAt}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">{c.text}</p>
                  </div>
                ))
              )}
            </div>

            {/* Add Review Form */}
            <form onSubmit={handleCommentSubmit} className="bg-orange-50/50 dark:bg-stone-800/80 p-4 rounded-2xl border border-orange-200/60 dark:border-stone-700 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-300">
                Leave a Star Rating & Review
              </h4>
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <input
                  type="text"
                  placeholder="Your Name / Chef Handle"
                  value={commenterName}
                  onChange={(e) => setCommenterName(e.target.value)}
                  className="px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl text-xs flex-1 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="flex items-center gap-1 bg-white dark:bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <span className="text-xs text-stone-500 mr-1">Rate:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setCommentRating(star)}
                      className="focus:outline-none"
                    >
                      <Star className={`w-4 h-4 transition-transform hover:scale-125 ${star <= commentRating ? 'text-amber-400 fill-amber-400' : 'text-stone-300 dark:text-stone-600'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Share your kitchen tips or taste experience..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium text-xs flex items-center gap-1.5 active:scale-95 transition-all shadow-md shadow-orange-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
