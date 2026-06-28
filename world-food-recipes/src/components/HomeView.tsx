import React, { useState } from 'react';
import { Search, Sparkles, ChefHat, Flame, ArrowRight, Clock, Star, Trophy, Globe2 } from 'lucide-react';
import { Recipe } from '../types';
import { POPULAR_CATEGORIES } from '../data/recipes';
import { NavTab } from './BottomNav';

interface HomeViewProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onCategoryClick: (cuisine: string) => void;
  onNavigateTab: (tab: NavTab) => void;
  onSearchSubmit: (query: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  recipes,
  onSelectRecipe,
  onCategoryClick,
  onNavigateTab,
  onSearchSubmit,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRecipes = recipes.filter(r => r.isFeatured);
  const dailyRecommendation = recipes.find(r => r.isDailyRecommendation) || recipes[0];
  const trendingRecipes = recipes.filter(r => r.isTrending);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    onSearchSubmit(searchQuery);
  };

  return (
    <div className="space-y-8 pb-10 animate-in fade-in duration-300">
      
      {/* Hero Banner with Tagline, Search & Attractive Dish Collage */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-orange-950 text-white p-6 sm:p-10 shadow-2xl border border-orange-500/20">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-4 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-semibold backdrop-blur-md">
              <Globe2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Global Food Community</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Discover, Cook, and <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Experience Food</span> From Around the World.
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
              Explore authentic heritage recipes from Pakistan, Italy, the Arab world, and Thailand. Feast your eyes on artisanal masterpieces and share kitchen stories.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative flex items-center shadow-xl">
                <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Biryani, Pad Thai, Shawarma..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-28 py-3.5 bg-white/95 dark:bg-stone-900 text-stone-900 dark:text-stone-100 rounded-2xl text-sm placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-orange-500/30 font-medium transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-5 py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Attractive Floating Dish Collage on Desktop */}
          <div className="hidden lg:flex relative w-80 h-80 shrink-0 items-center justify-center pointer-events-none select-none">
            {/* Dish 1: Biryani / Karahi top right */}
            <div className="absolute top-0 right-4 w-44 h-44 rounded-full overflow-hidden border-4 border-amber-400/40 shadow-2xl shadow-orange-500/30 transform hover:scale-105 transition-transform duration-500 animate-pulse" style={{ animationDuration: '4s' }}>
              <img src="https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&w=500&q=80" alt="Biryani" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-2 text-center text-[10px] font-bold text-amber-200">🇵🇰 Royal Dum Biryani</div>
            </div>

            {/* Dish 2: Artisanal Pizza bottom right */}
            <div className="absolute bottom-2 right-0 w-40 h-40 rounded-full overflow-hidden border-4 border-red-500/40 shadow-2xl shadow-red-500/20 z-20">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Pizza" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-1.5 text-center text-[10px] font-bold text-red-200">🇮🇹 Neapolitan Crust</div>
            </div>

            {/* Dish 3: Thai Stir Fry left */}
            <div className="absolute top-12 left-0 w-48 h-48 rounded-3xl overflow-hidden border-4 border-orange-400/40 shadow-2xl shadow-amber-500/20 z-10 -rotate-6">
              <img src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=80" alt="Thai Wok" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-2 text-center text-[11px] font-bold text-orange-200">🇹🇭 Spicy Pad Thai</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouthwatering Dish Visual Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span>📸 Mouthwatering Dish Showcase</span>
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">Feast your eyes on global culinary masterpieces</p>
          </div>
          <button
            onClick={() => onNavigateTab('recipes')}
            className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {recipes.slice(0, 6).map((dish) => (
            <div
              key={`showcase-${dish.id}`}
              onClick={() => onSelectRecipe(dish)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 active:scale-95 bg-stone-900"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-3 left-3 flex items-center gap-1">
                <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                  {dish.cuisine}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-[10px] font-bold text-stone-950 flex items-center gap-0.5 shadow">
                  ★ {dish.rating.toFixed(1)}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h3 className="text-sm sm:text-base font-extrabold leading-tight drop-shadow-md group-hover:text-amber-300 transition-colors line-clamp-1">
                  {dish.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-stone-300">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-400" />
                    {dish.prepTime + dish.cookTime} mins
                  </span>
                  <span className="flex items-center gap-1 text-red-400 font-semibold">
                    <Flame className="w-3 h-3" />
                    {dish.calories} kcal
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Recipe Recommendation Card */}
      {dailyRecommendation && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
              <span>⭐ Daily Recommendation</span>
            </h2>
            <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold bg-orange-100 dark:bg-orange-950/60 px-2.5 py-1 rounded-full">
              Chef Pick
            </span>
          </div>

          <div
            onClick={() => onSelectRecipe(dailyRecommendation)}
            className="group relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-3xl p-1 shadow-xl cursor-pointer active:scale-[0.99] transition-all duration-300"
          >
            <div className="bg-white dark:bg-stone-900 rounded-[22px] overflow-hidden flex flex-col sm:flex-row items-center">
              <div className="relative w-full sm:w-1/2 aspect-[16/10] overflow-hidden">
                <img
                  src={dailyRecommendation.image}
                  alt={dailyRecommendation.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                  {dailyRecommendation.cuisine}
                </div>
              </div>

              <div className="p-5 sm:p-6 w-full sm:w-1/2 space-y-3">
                <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{dailyRecommendation.rating.toFixed(1)} Rating</span>
                  <span className="text-stone-400">•</span>
                  <span className="text-stone-500 dark:text-stone-400">{dailyRecommendation.difficulty}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {dailyRecommendation.title}
                </h3>

                <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                  {dailyRecommendation.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{dailyRecommendation.prepTime + dailyRecommendation.cookTime} mins</span>
                  </div>
                  <div className="flex items-center gap-1 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-lg">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{dailyRecommendation.calories} kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popular Categories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
              🌍 Popular Cuisines
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">Explore authentic flavors by region</p>
          </div>
          <button
            onClick={() => onNavigateTab('recipes')}
            className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {POPULAR_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onCategoryClick(cat.name)}
              className="group relative rounded-2xl overflow-hidden aspect-[16/11] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-orange-500/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  {cat.recipesCount}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold drop-shadow tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-stone-200 line-clamp-1 font-normal opacity-90 hidden sm:block">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Recipes Slider/Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>🔥 Featured & Trending</span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">Loved by home chefs globally</p>
          </div>
          <button
            onClick={() => onNavigateTab('recipes')}
            className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            <span>Browse All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trendingRecipes.slice(0, 4).map((r) => (
            <div
              key={r.id}
              onClick={() => onSelectRecipe(r)}
              className="group flex gap-3.5 p-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-98 items-center"
            >
              <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-stone-100 dark:bg-stone-800">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-bold">
                  {r.cuisine.slice(0, 3)}
                </span>
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{r.rating.toFixed(1)}</span>
                  <span className="text-stone-400 font-normal">({r.reviewsCount})</span>
                </div>

                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 truncate group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {r.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                  {r.description}
                </p>

                <div className="pt-1 flex items-center gap-3 text-xs text-stone-600 dark:text-stone-300">
                  <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5 text-orange-500" /> {r.prepTime + r.cookTime}m</span>
                  <span className="flex items-center gap-1 font-medium text-red-600 dark:text-red-400"><Flame className="w-3.5 h-3.5" /> {r.calories} kcal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Call-to-Action Card */}
      <div className="rounded-3xl bg-gradient-to-tr from-orange-600 via-red-600 to-amber-600 text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto sm:mx-0">
            <ChefHat className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-extrabold tracking-tight">Have a secret family recipe?</h3>
          <p className="text-xs sm:text-sm text-orange-100 max-w-md">
            Share your Pakistani Karahi, Roman Lasagna, Levantine Shawarma, or Thai soup with thousands of foodies!
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('upload')}
          className="px-6 py-3 rounded-2xl bg-white text-orange-600 hover:bg-orange-50 font-extrabold text-sm shadow-lg active:scale-95 transition-all whitespace-nowrap"
        >
          Upload Your Recipe
        </button>
      </div>

    </div>
  );
};
