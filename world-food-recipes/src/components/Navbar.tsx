import React from 'react';
import { UtensilsCrossed, Sparkles, Sun, Moon, Search } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAIChef: () => void;
  onSearchClick?: () => void;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  onOpenAIChef,
  onSearchClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* App Logo and Title */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-red-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white">
            <UtensilsCrossed className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 dark:from-orange-400 dark:via-red-400 dark:to-amber-400 bg-clip-text text-transparent">
              World Food Recipes
            </h1>
            <p className="text-[10px] uppercase font-semibold tracking-widest text-stone-500 dark:text-stone-400 -mt-1 hidden sm:block">
              International Community
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button (mobile/desktop trigger) */}
          {onSearchClick && (
            <button
              onClick={onSearchClick}
              aria-label="Search Recipes"
              className="p-2.5 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {/* AI Chef Assistant Button */}
          <button
            onClick={onOpenAIChef}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium text-xs shadow-md shadow-orange-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
            <span>AI Chef</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-stone-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
