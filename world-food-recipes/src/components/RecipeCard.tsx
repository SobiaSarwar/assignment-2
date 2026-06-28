import React from 'react';
import { Clock, Flame, Star, Bookmark, Share2 } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onShare: (recipe: Recipe, e: React.MouseEvent) => void;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onShare,
  onClick,
}) => {
  // Cuisine badge color mapping
  const getCuisineColor = (cuisine: string) => {
    switch (cuisine) {
      case 'Pakistani': return 'bg-amber-600/90 text-white';
      case 'Italian': return 'bg-red-600/90 text-white';
      case 'Arabic': return 'bg-emerald-600/90 text-white';
      case 'Thai': return 'bg-orange-500/90 text-white';
      default: return 'bg-stone-800/90 text-white';
    }
  };

  return (
    <div
      onClick={() => onClick(recipe)}
      className="group relative bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.98]"
    >
      {/* Large Food Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md backdrop-blur-md ${getCuisineColor(recipe.cuisine)}`}>
            {recipe.cuisine}
          </span>

          <div className="flex items-center gap-1.5 pointer-events-auto">
            {/* Share Button */}
            <button
              onClick={(e) => onShare(recipe, e)}
              aria-label="Share recipe"
              className="w-8 h-8 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md flex items-center justify-center text-stone-700 dark:text-stone-200 hover:bg-white hover:scale-110 active:scale-95 transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Save/Favorite Button */}
            <button
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
              className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-sm hover:scale-110 active:scale-95 ${
                isFavorite
                  ? 'bg-red-500 text-white shadow-red-500/30'
                  : 'bg-white/80 dark:bg-stone-900/80 text-stone-700 dark:text-stone-200 hover:bg-white'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Image Overlay Tags */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold">{recipe.rating.toFixed(1)}</span>
            <span className="text-white/80 text-[10px]">({recipe.reviewsCount})</span>
          </div>

          <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-amber-200 font-semibold">
            {recipe.difficulty}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 line-clamp-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-1 font-normal leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Footer Metrics: Prep Time (minutes) & Calories */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-600 dark:text-stone-300">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-orange-500 shrink-0" />
            <span>{recipe.prepTime + recipe.cookTime} mins total</span>
          </div>

          <div className="flex items-center gap-1 font-medium bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded-md">
            <Flame className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>{recipe.calories} kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
