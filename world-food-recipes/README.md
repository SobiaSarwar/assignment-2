# 👨‍🍳 AI Master Chef & World Recipe Directory

A modern full-stack web application built for exploring international heritage cuisines (Pakistani, Italian, Arabic, and Thai), sharing community kitchen stories, and getting culinary guidance from an interactive AI Master Chef.

---

## 🌟 Key Features

1. **🌍 Global Recipe Showcase**: Browse authentic recipes complete with preparation times, calorie counts, difficulty ratings, and step-by-step cooking instructions.
2. **🤖 AI Master Chef Assistant**: Powered by Google Gemini AI, offering real-time ingredient substitutions, health modifications, and side-dish pairings.
3. **📤 Community Uploads**: Upload secret family recipes with dynamic ingredient lists and instructions.
4. **📸 Kitchen Tales & Experiences**: Share cooking triumphs, photos, and reviews with interactive likes and comments.
5. **❤️ Saved Favorites & Profile**: Personalize your cookbook by saving favorite delicacies for quick access.

---

## 💻 How to Run This App on Your Laptop (Google Chrome)

If your want to run this project locally on your computer, follow these simple steps:

### Prerequisites
- **Node.js** (v18 or higher) installed on your system. You can download it for free at [nodejs.org](https://nodejs.org/).
- **Google Chrome** (or any modern web browser).

### Step-by-Step Installation

1. **Unzip or Clone the Project**:
   - If downloaded as a ZIP file, extract it into a folder on your laptop.
   - If cloned from GitHub:
     ```bash
     git clone <YOUR_GITHUB_REPOSITORY_URL>
     cd <PROJECT_FOLDER_NAME>
     ```

2. **Install Dependencies**:
   Open your terminal (Mac/Linux) or Command Prompt / PowerShell (Windows) inside the project folder and run:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   *(Or if running the full production build: `npm run build && npm run start`)*

4. **Open in Google Chrome**:
   Once the server starts, it will display a local URL in your terminal. Open **Google Chrome** and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 🛠️ Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express.js
- **Artificial Intelligence**: Google GenAI SDK (`@google/genai`)

---
*Created as an Academic Assignment Submission.*
