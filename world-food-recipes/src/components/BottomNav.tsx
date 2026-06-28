import React from 'react';
import { Home, BookOpen, PlusCircle, MessageSquareHeart, User } from 'lucide-react';

export type NavTab = 'home' | 'recipes' | 'upload' | 'experiences' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems: { id: NavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'recipes', label: 'Recipes', icon: BookOpen },
    { id: 'upload', label: 'Upload', icon: PlusCircle },
    { id: 'experiences', label: 'Stories', icon: MessageSquareHeart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 pb-safe shadow-lg transition-colors duration-200">
      <div className="max-w-md mx-auto px-2 h-16 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isUpload = item.id === 'upload';

          if (isUpload) {
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                aria-label="Upload Your Recipe"
                className="group -mt-6 flex flex-col items-center justify-center focus:outline-none"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-tr from-orange-500 via-red-500 to-amber-500 scale-105 shadow-orange-500/40 text-white' 
                    : 'bg-gradient-to-tr from-orange-600 to-red-600 hover:scale-105 shadow-orange-600/30 text-white'
                }`}>
                  <PlusCircle className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-semibold tracking-tight mt-1 text-orange-600 dark:text-orange-400">
                  Upload Recipe
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-16 py-1 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-orange-600 dark:text-orange-400 scale-105 font-bold'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 font-medium'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className="text-[10px] tracking-tight mt-1">
                {item.label === 'Stories' ? 'Experiences' : item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 bg-orange-600 dark:bg-orange-400 rounded-full mt-0.5 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
