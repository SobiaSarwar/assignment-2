import React, { useState } from 'react';
import { Award, Heart, Utensils, BookOpen, Flame, Clock, Star, Share2, Sparkles, ChefHat, UserCircle2, ArrowRight } from 'lucide-react';
import { Recipe, KitchenExperience } from '../types';
import { RecipeCard } from './RecipeCard';

interface ProfileViewProps {
  recipes: Recipe[];
  favorites: Record<string, boolean>;
  experiences: KitchenExperience[];
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onShareRecipe: (recipe: Recipe, e: React.MouseEvent) => void;
  onNavigateTab: (tab: any) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  recipes,
  favorites,
  experiences,
  onSelectRecipe,
  onToggleFavorite,
  onShareRecipe,
  onNavigateTab,
}) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'favorites' | 'uploads' | 'stories'>('favorites');

  const favoriteRecipes = recipes.filter(r => favorites[r.id]);
  const userUploads = recipes.filter(r => r.id.startsWith('community-') || r.authorName.includes('Home Chef'));
  const userStories = experiences.filter(e => e.authorName.includes('Explorer') || e.authorName.includes('Chef'));

  const badges = [
    { name: 'Spice Master 🌶️', desc: 'Explored Pakistani Karahis & Niharis', color: 'from-amber-500 to-orange-600' },
    { name: 'Pasta Artisan 🍝', desc: 'Cooked Authentic Italian Classics', color: 'from-emerald-500 to-teal-600' },
    { name: 'Community Host 🌍', desc: 'Shared family recipes & kitchen tales', color: 'from-orange-500 to-red-600' },
    { name: 'AI Apprentice 🤖', desc: 'Consulted the AI Master Chef 5+ times', color: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300">
      
      {/* Profile Header Card */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-3xl object-cover border-4 border-orange-500 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-amber-500 to-orange-600 p-1.5 rounded-xl text-white shadow">
              <ChefHat className="w-4 h-4" />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center justify-center sm:justify-start gap-2">
                  <span>Culinary Enthusiast</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </h1>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  Global Kitchen Member • Joined June 2026
                </p>
              </div>

              <button
                onClick={() => onNavigateTab('upload')}
                className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition-all self-center sm:self-start"
              >
                + Upload Recipe
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg leading-relaxed">
              Passionate home cook exploring world heritage cuisines. Obsessed with slow-cooked Pakistani spices, Neapolitan sourdough crusts, and Levantine garlic dips.
            </p>

            {/* Profile Metrics */}
            <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-6 border-t border-stone-100 dark:border-stone-800 text-stone-800 dark:text-stone-200 font-bold text-sm">
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>{favoriteRecipes.length} Favorites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-orange-500" />
                <span>{userUploads.length} Recipes Uploaded</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>{experiences.length} Kitchen Tales</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culinary Badges Showcase */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2 px-1">
          <Award className="w-4 h-4 text-orange-500" />
          <span>Culinary Achievements & Badges</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-br ${b.color} text-white shadow-md flex items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-lg shrink-0">
                ★
              </div>
              <div>
                <h3 className="font-extrabold text-sm drop-shadow">{b.name}</h3>
                <p className="text-[11px] text-white/90 font-medium leading-tight mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="space-y-6">
        <div className="flex border-b border-stone-200 dark:border-stone-800 gap-6">
          <button
            onClick={() => setActiveProfileTab('favorites')}
            className={`pb-3 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all relative ${
              activeProfileTab === 'favorites'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <Heart className={`w-4 h-4 ${activeProfileTab === 'favorites' ? 'fill-orange-600 dark:fill-orange-400' : ''}`} />
            <span>Saved Favorites ({favoriteRecipes.length})</span>
            {activeProfileTab === 'favorites' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-orange-600 dark:bg-orange-400 rounded-t-full" />
            )}
          </button>

          <button
            onClick={() => setActiveProfileTab('uploads')}
            className={`pb-3 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all relative ${
              activeProfileTab === 'uploads'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>My Uploaded Recipes ({userUploads.length})</span>
            {activeProfileTab === 'uploads' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-orange-600 dark:bg-orange-400 rounded-t-full" />
            )}
          </button>

          <button
            onClick={() => setActiveProfileTab('stories')}
            className={`pb-3 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all relative ${
              activeProfileTab === 'stories'
                ? 'text-orange-600 dark:text-orange-400'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>My Kitchen Tales ({userStories.length})</span>
            {activeProfileTab === 'stories' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-orange-600 dark:bg-orange-400 rounded-t-full" />
            )}
          </button>
        </div>

        {/* Tab Content 1: Saved Favorites */}
        {activeProfileTab === 'favorites' && (
          <div>
            {favoriteRecipes.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3 px-4">
                <Heart className="w-12 h-12 text-stone-300 mx-auto" />
                <h4 className="font-bold text-stone-700 dark:text-stone-300 text-base">No saved favorite recipes yet</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Click the heart icon on any Biryani, Lasagna, Hummus, or Pad Thai recipe card to save it to your personal cookbook.
                </p>
                <button
                  onClick={() => onNavigateTab('recipes')}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow hover:bg-orange-700 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Explore Recipe Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {favoriteRecipes.map(r => (
                  <RecipeCard
                    key={r.id}
                    recipe={r}
                    isFavorite={true}
                    onToggleFavorite={onToggleFavorite}
                    onShare={onShareRecipe}
                    onClick={onSelectRecipe}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content 2: My Uploaded Recipes */}
        {activeProfileTab === 'uploads' && (
          <div>
            {userUploads.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3 px-4">
                <ChefHat className="w-12 h-12 text-stone-300 mx-auto" />
                <h4 className="font-bold text-stone-700 dark:text-stone-300 text-base">You haven't uploaded any recipes</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Share your family kitchen secrets with the global community! Your contributions will show up right here.
                </p>
                <button
                  onClick={() => onNavigateTab('upload')}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow hover:bg-orange-700 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Upload Your First Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {userUploads.map(r => (
                  <RecipeCard
                    key={r.id}
                    recipe={r}
                    isFavorite={!!favorites[r.id]}
                    onToggleFavorite={onToggleFavorite}
                    onShare={onShareRecipe}
                    onClick={onSelectRecipe}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content 3: My Kitchen Tales */}
        {activeProfileTab === 'stories' && (
          <div className="space-y-4 max-w-2xl">
            {userStories.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3 px-4">
                <BookOpen className="w-12 h-12 text-stone-300 mx-auto" />
                <h4 className="font-bold text-stone-700 dark:text-stone-300 text-base">No kitchen stories published yet</h4>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  Share a photo of your Sunday dinner or a funny kitchen disaster on the Experiences tab.
                </p>
                <button
                  onClick={() => onNavigateTab('experiences')}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow hover:bg-orange-700 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Go to Kitchen Tales Feed</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              userStories.map((st) => (
                <div key={st.id} className="p-5 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-2">
                  <div className="flex justify-between items-center text-xs text-stone-400">
                    <span>{st.createdAt}</span>
                    <span className="text-amber-500 font-bold">★ {st.rating}.0</span>
                  </div>
                  <h4 className="font-bold text-base text-stone-900 dark:text-stone-100">{st.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300">{st.story}</p>
                </div>
              ))
            )}
          </div>
        )}

      </div>

    </div>
  );
};
