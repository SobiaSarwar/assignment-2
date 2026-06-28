import React, { useState } from 'react';
import { Search, Filter, Clock, Flame, SlidersHorizontal, RotateCcw, UtensilsCrossed } from 'lucide-react';
import { Recipe, CuisineType } from '../types';
import { RecipeCard } from './RecipeCard';

interface RecipesViewProps {
  recipes: Recipe[];
  favorites: Record<string, boolean>;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onShareRecipe: (recipe: Recipe, e: React.MouseEvent) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  initialCuisineFilter?: string;
  initialSearchQuery?: string;
}

export const RecipesView: React.FC<RecipesViewProps> = ({
  recipes,
  favorites,
  onToggleFavorite,
  onShareRecipe,
  onSelectRecipe,
  initialCuisineFilter = 'All',
  initialSearchQuery = '',
}) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>(initialCuisineFilter);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  
  // Filters
  const [maxPrepTime, setMaxPrepTime] = useState<number>(240); // up to 240 mins
  const [maxCalories, setMaxCalories] = useState<number>(1000); // up to 1000 kcal
  const [showFilters, setShowFilters] = useState(false);

  const cuisines: { id: string; label: string; emoji: string }[] = [
    { id: 'All', label: 'All Cuisines', emoji: '🍽️' },
    { id: 'Pakistani', label: 'Pakistani', emoji: '🇵🇰' },
    { id: 'Italian', label: 'Italian', emoji: '🇮🇹' },
    { id: 'Arabic', label: 'Arabic', emoji: '🇸🇦' },
    { id: 'Thai', label: 'Thai', emoji: '🇹🇭' },
  ];

  // Filter calculation
  const filteredRecipes = recipes.filter((r) => {
    const matchesCuisine = selectedCuisine === 'All' || r.cuisine === selectedCuisine;
    const totalTime = r.prepTime + r.cookTime;
    const matchesTime = totalTime <= maxPrepTime;
    const matchesCal = r.calories <= maxCalories;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      r.title.toLowerCase().includes(query) || 
      r.description.toLowerCase().includes(query) || 
      r.cuisine.toLowerCase().includes(query) ||
      r.ingredients.some(i => i.name.toLowerCase().includes(query));

    return matchesCuisine && matchesTime && matchesCal && matchesSearch;
  });

  const resetFilters = () => {
    setMaxPrepTime(240);
    setMaxCalories(1000);
    setSearchQuery('');
    setSelectedCuisine('All');
  };

  const hasActiveFilters = maxPrepTime < 240 || maxCalories < 1000 || searchQuery !== '' || selectedCuisine !== 'All';

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      
      {/* Search & Filter Header Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
              📚 World Recipe Directory
            </h1>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Showing {filteredRecipes.length} international delicacies
            </p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              showFilters || hasActiveFilters
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-orange-500'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && !showFilters && (
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
            )}
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name, ingredient (e.g., San Marzano, Basmati, Coconut)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-stone-400 hover:text-stone-600 text-xs font-semibold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Cuisine Pills Horizontal Scroll */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 pt-1">
          {cuisines.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCuisine(c.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs whitespace-nowrap transition-all select-none ${
                selectedCuisine === c.id
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md shadow-orange-600/20 scale-105'
                  : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Expandable Filter Panel (Time & Calories) */}
        {showFilters && (
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-5 animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <span className="font-bold text-sm flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <Filter className="w-4 h-4 text-orange-500" />
                <span>Refine by Time & Calories</span>
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400 font-bold hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Max Preparation/Cooking Time Filter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    <span>Max Preparation + Cooking Time</span>
                  </span>
                  <span className="text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {maxPrepTime >= 240 ? 'Any Time' : `≤ ${maxPrepTime} mins`}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="240"
                  step="15"
                  value={maxPrepTime}
                  onChange={(e) => setMaxPrepTime(Number(e.target.value))}
                  className="w-full accent-orange-600 bg-stone-200 dark:bg-stone-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>15 mins (Quick)</span>
                  <span>4 hours (Slow Cook)</span>
                </div>
              </div>

              {/* Max Calories Filter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    <span>Max Calories per Serving</span>
                  </span>
                  <span className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-stone-800 px-2 py-0.5 rounded">
                    {maxCalories >= 1000 ? 'Any Calories' : `≤ ${maxCalories} kcal`}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={maxCalories}
                  onChange={(e) => setMaxCalories(Number(e.target.value))}
                  className="w-full accent-red-600 bg-stone-200 dark:bg-stone-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>200 kcal (Light)</span>
                  <span>1000 kcal (Hearty)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recipe Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-4">
          <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-stone-800 flex items-center justify-center mx-auto text-orange-500">
            <UtensilsCrossed className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">No matching recipes found</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto">
              We could not find any recipe matching "{searchQuery}" with the selected time and calorie limits.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold shadow hover:bg-orange-700 transition-all"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={!!favorites[recipe.id]}
              onToggleFavorite={onToggleFavorite}
              onShare={onShareRecipe}
              onClick={onSelectRecipe}
            />
          ))}
        </div>
      )}

    </div>
  );
};
