import React, { useState, useEffect } from 'react';
import { NavTab, BottomNav } from './components/BottomNav';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { RecipesView } from './components/RecipesView';
import { UploadView } from './components/UploadView';
import { ExperiencesView } from './components/ExperiencesView';
import { ProfileView } from './components/ProfileView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { AIChefModal } from './components/AIChefModal';
import { INITIAL_RECIPES, INITIAL_EXPERIENCES } from './data/recipes';
import { Recipe, KitchenExperience } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('world_food_recipes_v1');
    return saved ? JSON.parse(saved) : INITIAL_RECIPES;
  });

  const [experiences, setExperiences] = useState<KitchenExperience[]>(() => {
    const saved = localStorage.getItem('world_food_experiences_v1');
    return saved ? JSON.parse(saved) : INITIAL_EXPERIENCES;
  });

  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('world_food_favs_v1');
    return saved ? JSON.parse(saved) : {};
  });

  // Modal states
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isAIChefOpen, setIsAIChefOpen] = useState(false);
  const [aiChefContextRecipe, setAIChefContextRecipe] = useState<Recipe | null>(null);

  // Filters passed from Home view to Recipes view
  const [targetCuisine, setTargetCuisine] = useState<string>('All');
  const [targetSearch, setTargetSearch] = useState<string>('');

  // Persist state
  useEffect(() => {
    localStorage.setItem('world_food_recipes_v1', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('world_food_experiences_v1', JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem('world_food_favs_v1', JSON.stringify(favorites));
  }, [favorites]);

  // Handlers
  const handleToggleFavorite = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleShareRecipe = (recipe: Recipe, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: `Check out this authentic ${recipe.cuisine} recipe: ${recipe.title}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert(`Link for "${recipe.title}" copied to clipboard! Share the taste.`);
    }
  };

  const handleOpenAIChef = (recipeContext?: Recipe | null) => {
    setAIChefContextRecipe(recipeContext || null);
    setIsAIChefOpen(true);
  };

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes(prev => [newRecipe, ...prev]);
  };

  const handleAddCommentToRecipe = (recipeId: string, userName: string, text: string, rating: number) => {
    setRecipes(prev => prev.map(r => {
      if (r.id !== recipeId) return r;
      const newComment = {
        id: `com-${Date.now()}`,
        userName: userName || 'Food Lover',
        text,
        rating,
        createdAt: 'Just now'
      };
      const updatedComments = [newComment, ...r.comments];
      const newRating = ((r.rating * r.reviewsCount) + rating) / (r.reviewsCount + 1);
      return {
        ...r,
        comments: updatedComments,
        reviewsCount: r.reviewsCount + 1,
        rating: Number(newRating.toFixed(1))
      };
    }));
  };

  const handleLikeExperience = (expId: string) => {
    setExperiences(prev => prev.map(exp => {
      if (exp.id !== expId) return exp;
      return { ...exp, likesCount: exp.likesCount + 1 };
    }));
  };

  const handleAddStory = (newExp: KitchenExperience) => {
    setExperiences(prev => [newExp, ...prev]);
  };

  const handleAddExpComment = (expId: string, userName: string, text: string) => {
    setExperiences(prev => prev.map(exp => {
      if (exp.id !== expId) return exp;
      const newCm = {
        id: `ecm-${Date.now()}`,
        userName: userName || 'Community Member',
        text,
        createdAt: 'Just now'
      };
      return {
        ...exp,
        commentsCount: exp.commentsCount + 1,
        comments: exp.comments ? [newCm, ...exp.comments] : [newCm]
      };
    }));
  };

  // Navigation helpers from Home view
  const handleCategoryClick = (cuisineName: string) => {
    setTargetCuisine(cuisineName);
    setTargetSearch('');
    setActiveTab('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setTargetSearch(query);
    setTargetCuisine('All');
    setActiveTab('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keep selectedRecipe updated with latest comments/ratings
  const currentSelectedRecipe = selectedRecipe
    ? recipes.find(r => r.id === selectedRecipe.id) || selectedRecipe
    : null;

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      
      {/* Top Navbar */}
      <Navbar
        onOpenAIChef={() => handleOpenAIChef()}
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-24">
        {activeTab === 'home' && (
          <HomeView
            recipes={recipes}
            onSelectRecipe={setSelectedRecipe}
            onCategoryClick={handleCategoryClick}
            onNavigateTab={setActiveTab}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        {activeTab === 'recipes' && (
          <RecipesView
            recipes={recipes}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onShareRecipe={handleShareRecipe}
            onSelectRecipe={setSelectedRecipe}
            initialCuisineFilter={targetCuisine}
            initialSearchQuery={targetSearch}
          />
        )}

        {activeTab === 'upload' && (
          <UploadView
            onAddRecipe={handleAddRecipe}
            onNavigateToRecipes={() => setActiveTab('recipes')}
          />
        )}

        {activeTab === 'experiences' && (
          <ExperiencesView
            experiences={experiences}
            onLikeExperience={handleLikeExperience}
            onAddStory={handleAddStory}
            onAddExpComment={handleAddExpComment}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            recipes={recipes}
            favorites={favorites}
            experiences={experiences}
            onSelectRecipe={setSelectedRecipe}
            onToggleFavorite={handleToggleFavorite}
            onShareRecipe={handleShareRecipe}
            onNavigateTab={setActiveTab}
          />
        )}
      </main>

      {/* Persistent Mobile & Desktop Bottom/Floating Bar */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab === 'recipes') {
            setTargetCuisine('All');
            setTargetSearch('');
          }
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAIChef={() => handleOpenAIChef()}
      />

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={currentSelectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        isFavorite={selectedRecipe ? !!favorites[selectedRecipe.id] : false}
        onToggleFavorite={(id) => handleToggleFavorite(id)}
        onShare={(r) => handleShareRecipe(r)}
        onOpenAIChef={(r) => {
          setSelectedRecipe(null);
          handleOpenAIChef(r);
        }}
        onAddComment={handleAddCommentToRecipe}
      />

      {/* AI Master Chef Assistant Modal */}
      <AIChefModal
        isOpen={isAIChefOpen}
        onClose={() => {
          setIsAIChefOpen(false);
          setAIChefContextRecipe(null);
        }}
        initialRecipe={aiChefContextRecipe}
      />

    </div>
  );
}
