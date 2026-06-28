export type CuisineType = 'All' | 'Pakistani' | 'Italian' | 'Arabic' | 'Thai' | 'Community';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Chef Special';

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Comment {
  id: string;
  userName: string;
  userAvatar?: string;
  rating?: number;
  text: string;
  createdAt: string;
}

export interface Recipe {
  id: string;
  title: string;
  cuisine: CuisineType;
  image: string;
  prepTime: number; // in mins
  cookTime: number; // in mins
  calories: number;
  difficulty: DifficultyLevel;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isDailyRecommendation?: boolean;
  isTrending?: boolean;
  authorName: string;
  authorAvatar?: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  comments: Comment[];
  createdAt: string;
}

export interface KitchenExperience {
  id: string;
  authorName: string;
  authorAvatar: string;
  recipeTitle?: string;
  title: string;
  story: string;
  image: string;
  rating: number;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  comments: Comment[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  unlocked: boolean;
  progress?: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  favoriteRecipeIds: string[];
  uploadedRecipes: Recipe[];
  experiencePosts: KitchenExperience[];
  badges: Badge[];
  followersCount: number;
  followingCount: number;
}
