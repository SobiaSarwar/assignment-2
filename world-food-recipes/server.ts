import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Route: AI Chef Recipe & Culinary Advice
  app.post("/api/ai-chef", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Fallback simulated response if API key is not configured yet
        const { prompt, recipeContext } = req.body;
        return res.json({
          reply: `👨‍🍳 **AI Chef Advice (Demo Mode)**:\n\nThat's a wonderful question about cooking ${recipeContext?.title || 'international dishes'}!\n\nHere is a culinary tip: Always balance your spices and taste as you simmer. For Pakistani curries like Biryani or Karahi, searing the aromatics in ghee unlocks fat-soluble essential oils. For Italian pastas, reserving starchy pasta water is key to a velvety emulsion!\n\n*(Note: Add your GEMINI_API_KEY in the secrets panel to enable live generative AI responses).*`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const { prompt, recipeContext } = req.body;

      let systemInstruction = `You are "AI Chef", a friendly, expert master chef specializing in World Cuisine (Pakistani, Italian, Arabic, Thai). Provide helpful, appetizing, step-by-step cooking advice, ingredient substitutions, and flavor pairing recommendations. Keep answers concise, formatted nicely with Markdown bullet points and bold text.`;
      
      let fullPrompt = prompt;
      if (recipeContext) {
        fullPrompt = `User is asking about this recipe:\nTitle: ${recipeContext.title}\nCuisine: ${recipeContext.cuisine}\nIngredients: ${JSON.stringify(recipeContext.ingredients)}\n\nUser Question/Request: ${prompt}`;
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ reply: response.text || "I'm currently tasting another dish! Please try asking again." });
    } catch (error: any) {
      console.error("AI Chef Error:", error);
      res.status(500).json({ error: error.message || "Failed to consult AI Chef" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "World Food Recipes" });
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`👨‍🍳 World Food Recipes Server running on http://localhost:${PORT}`);
  });
}

startServer();
