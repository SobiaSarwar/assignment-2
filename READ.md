# World Food Recipes

A full-stack web app for exploring recipes from around the world, sharing cooking experiences, and getting cooking advice from an AI chef. The app lives in the [`world-food-recipes`](world-food-recipes) folder.

## What it does

- **Browse recipes**: Pakistani, Italian, Arabic and Thai dishes, each with preparation time, calories, difficulty and step-by-step instructions.
- **AI Chef**: Ask for ingredient substitutions, healthier variations or side-dish pairings. Questions can be tied to a specific recipe. Answers come from Google Gemini (`gemini-2.5-flash`) through a server-side `/api/ai-chef` endpoint.
- **Upload recipes**: Add your own recipes with custom ingredient lists and instructions.
- **Experiences**: Share cooking stories and photos, with likes and comments.
- **Favorites and profile**: Save recipes to your profile for quick access.

If no Gemini API key is configured, the AI Chef returns a built-in demo reply instead of failing.

## Tech stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Lucide icons, Motion
- **Backend**: Node.js, Express (serves the API and the Vite dev server on port 3000)
- **AI**: Google GenAI SDK (`@google/genai`)

## Running it locally

Requires [Node.js](https://nodejs.org/) installed.

```bash
cd world-food-recipes
npm install
npm run dev
```

Then open <http://localhost:3000> in your browser.

To enable live AI responses, copy `.env.example` to `.env` and set `GEMINI_API_KEY` to your own key.

For a production build, run `npm run build && npm run start`.

## Project layout

```
world-food-recipes/
├── server.ts        # Express server + /api/ai-chef and /api/health routes
├── src/
│   ├── App.tsx      # App shell and tab navigation
│   ├── components/  # Home, Recipes, Upload, Experiences, Profile views, AI Chef modal
│   └── data/        # Built-in recipe data
└── package.json
```

*Created as an academic assignment.*
