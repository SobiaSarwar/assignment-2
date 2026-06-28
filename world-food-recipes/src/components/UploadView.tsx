import React, { useState } from 'react';
import { Upload, Plus, Trash2, Clock, Flame, Utensils, Sparkles, CheckCircle2, Image as ImageIcon, ChefHat } from 'lucide-react';
import { Recipe, CuisineType, DifficultyLevel, Ingredient } from '../types';

interface UploadViewProps {
  onAddRecipe: (newRecipe: Recipe) => void;
  onNavigateToRecipes: () => void;
}

export const UploadView: React.FC<UploadViewProps> = ({ onAddRecipe, onNavigateToRecipes }) => {
  const [title, setTitle] = useState('');
  const [cuisine, setCuisine] = useState<CuisineType>('Pakistani');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Easy');
  const [prepTime, setPrepTime] = useState<number>(20);
  const [cookTime, setCookTime] = useState<number>(30);
  const [calories, setCalories] = useState<number>(450);
  const [authorName, setAuthorName] = useState('Home Chef');
  const [description, setDescription] = useState('');
  
  // Image handling
  const [imageURL, setImageURL] = useState('');
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80');

  // Dynamic Ingredients List
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: '', amount: '' },
    { name: '', amount: '' }
  ]);

  // Dynamic Instructions
  const [instructions, setInstructions] = useState<string[]>(['', '']);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageURL(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredientRow = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  const removeIngredientRow = (index: number) => {
    if (ingredients.length <= 1) return;
    setIngredients(ingredients.filter((_, idx) => idx !== index));
  };

  const updateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const addInstructionRow = () => {
    setInstructions([...instructions, '']);
  };

  const removeInstructionRow = (index: number) => {
    if (instructions.length <= 1) return;
    setInstructions(instructions.filter((_, idx) => idx !== index));
  };

  const updateInstruction = (index: number, value: string) => {
    const updated = [...instructions];
    updated[index] = value;
    setInstructions(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in the recipe title and description.");
      return;
    }

    const validIngredients = ingredients.filter(i => i.name.trim() !== '');
    if (validIngredients.length === 0) {
      alert("Please add at least one ingredient.");
      return;
    }

    const validInstructions = instructions.filter(ins => ins.trim() !== '');
    if (validInstructions.length === 0) {
      alert("Please add at least one step instruction.");
      return;
    }

    const newRecipe: Recipe = {
      id: `community-${Date.now()}`,
      title: title.trim(),
      cuisine,
      image: imageURL || imagePreview,
      prepTime: Number(prepTime) || 15,
      cookTime: Number(cookTime) || 20,
      calories: Number(calories) || 400,
      difficulty,
      rating: 5.0,
      reviewsCount: 1,
      authorName: authorName.trim() || 'Food Community Member',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      description: description.trim(),
      ingredients: validIngredients,
      instructions: validInstructions,
      comments: [
        { id: `c-${Date.now()}`, userName: 'World Food Team', rating: 5, text: 'Welcome to the global culinary table! Looks delicious.', createdAt: 'Just now' }
      ],
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddRecipe(newRecipe);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto py-16 px-4 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100">Recipe Published! 🎉</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm max-w-md mx-auto">
            Your unique recipe <strong>"{title}"</strong> has been added to the world directory and user profile. Food enthusiasts worldwide can now discover, cook, and review your masterpiece!
          </p>
        </div>
        <div className="pt-4 flex gap-3 justify-center">
          <button
            onClick={() => {
              setTitle('');
              setDescription('');
              setIngredients([{ name: '', amount: '' }, { name: '', amount: '' }]);
              setInstructions(['', '']);
              setIsSubmitted(false);
            }}
            className="px-5 py-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold text-xs hover:bg-stone-200 transition-all"
          >
            Upload Another Recipe
          </button>
          <button
            onClick={onNavigateToRecipes}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-xs shadow-lg shadow-orange-600/30 hover:scale-105 transition-all"
          >
            Browse Recipe Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-16 space-y-6 animate-in fade-in duration-300">
      
      {/* Page Title */}
      <div className="space-y-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>📤 Upload Your Recipe</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </h1>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          Contribute your family culinary heritage to the global kitchen community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl">
        
        {/* Section 1: General Info */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2">
            <ChefHat className="w-4 h-4" />
            <span>1. Basic Information</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Recipe Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., Grandmothers Nihari, Neapolitan Pizza, Green Curry..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Cuisine Region *</label>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value as CuisineType)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
              >
                <option value="Pakistani">🇵🇰 Pakistani</option>
                <option value="Italian">🇮🇹 Italian</option>
                <option value="Arabic">🇸🇦 Arabic</option>
                <option value="Thai">🇹🇭 Thai</option>
                <option value="Community">🌍 World Fusion / Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Difficulty Level *</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as DifficultyLevel)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
              >
                <option value="Easy">🟢 Easy</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Hard">🔴 Hard</option>
                <option value="Chef Special">⭐ Chef Special</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Your Name / Handle *</label>
              <input
                type="text"
                required
                placeholder="e.g., Chef Sarah, Khan Kitchen, Marco..."
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Short Description & Origin Story *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe the aroma, taste profile, and what makes this recipe special..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Image Upload */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2">
            <ImageIcon className="w-4 h-4" />
            <span>2. Appetizing Food Image</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              {/* File Upload Trigger (supports drag and drop & click) */}
              <label className="relative flex flex-col items-center justify-center p-6 bg-stone-50 dark:bg-stone-800/60 border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-2xl hover:border-orange-500 dark:hover:border-orange-400 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 text-stone-400 group-hover:text-orange-500 mb-2 transition-transform group-hover:-translate-y-1" />
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300">Click or Drag Image Here</span>
                <span className="text-[10px] text-stone-400 mt-0.5">PNG, JPG, WEBP up to 5MB</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400 text-xs font-semibold">Or URL:</span>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={imageURL}
                  onChange={(e) => { setImageURL(e.target.value); setImagePreview(e.target.value); }}
                  className="w-full pl-16 pr-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* Image Preview Box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-inner">
              <img src={imagePreview} alt="Recipe Preview" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white">
                Live Preview
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Time & Nutrition */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2">
            <Clock className="w-4 h-4" />
            <span>3. Preparation Time & Calories</span>
          </h2>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Prep (mins)</label>
              <input
                type="number"
                min="5"
                max="300"
                value={prepTime}
                onChange={(e) => setPrepTime(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs font-bold text-stone-900 dark:text-stone-100"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 dark:text-stone-300">Cook (mins)</label>
              <input
                type="number"
                min="0"
                max="600"
                value={cookTime}
                onChange={(e) => setCookTime(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs font-bold text-stone-900 dark:text-stone-100"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                <Flame className="w-3 h-3" />
                <span>Calories (kcal)</span>
              </label>
              <input
                type="number"
                min="50"
                max="2500"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl text-xs font-bold text-red-700 dark:text-red-300"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Ingredients List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5">
              <Utensils className="w-4 h-4" />
              <span>4. Ingredients ({ingredients.length})</span>
            </h2>
            <button
              type="button"
              onClick={addIngredientRow}
              className="flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
            >
              <Plus className="w-4 h-4" />
              <span>Add Ingredient</span>
            </button>
          </div>

          <div className="space-y-2.5">
            {ingredients.map((ing, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Ingredient name (e.g., Basmati Rice, San Marzano tomatoes)"
                  value={ing.name}
                  onChange={(e) => updateIngredient(idx, 'name', e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Amount (e.g., 2 cups, 400g)"
                  value={ing.amount}
                  onChange={(e) => updateIngredient(idx, 'amount', e.target.value)}
                  className="w-1/3 px-3 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeIngredientRow(idx)}
                  disabled={ingredients.length <= 1}
                  className="p-2 text-stone-400 hover:text-red-500 disabled:opacity-20 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Step Instructions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 flex items-center gap-1.5">
              <span>5. Step-by-Step Cooking Instructions ({instructions.length})</span>
            </h2>
            <button
              type="button"
              onClick={addInstructionRow}
              className="flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline"
            >
              <Plus className="w-4 h-4" />
              <span>Add Step</span>
            </button>
          </div>

          <div className="space-y-3">
            {instructions.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-orange-100 dark:bg-stone-800 text-orange-700 dark:text-orange-300 font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  {idx + 1}
                </span>
                <textarea
                  rows={2}
                  placeholder={`Explain step ${idx + 1} clearly...`}
                  value={step}
                  onChange={(e) => updateInstruction(idx, e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none leading-relaxed"
                />
                <button
                  type="button"
                  onClick={() => removeInstructionRow(idx)}
                  disabled={instructions.length <= 1}
                  className="p-2 text-stone-400 hover:text-red-500 disabled:opacity-20 transition-colors mt-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 hover:from-orange-700 hover:via-red-700 hover:to-amber-700 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-orange-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            <span>Publish Recipe to Community</span>
          </button>
        </div>

      </form>
    </div>
  );
};
