# Unblocked Games Hub

A polished, fast, and responsive unblocked games website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎮 **Curated Games**: A collection of popular web-based games.
- 🔍 **Real-time Search**: Find your favorite games instantly.
- 📂 **Categories**: Filter games by genre (Puzzle, Arcade, Classic, etc.).
- 📱 **Responsive Design**: Play on desktop, tablet, or mobile.
- 🚀 **Fast Loading**: Optimized for speed and performance.
- 🌑 **Dark Mode**: Sleek gaming-focused interface.

## How to Add More Games

To add a new game, simply edit the `src/games.json` file. Each game object should follow this structure:

```json
{
  "id": "unique-id",
  "title": "Game Title",
  "description": "Short description of the game.",
  "url": "https://iframe-url-of-the-game.com",
  "thumbnail": "https://image-url.com/thumb.jpg",
  "category": "Category Name"
}
```

## How to Publish to GitHub Pages

1. **Install the gh-pages package**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**:
   Add these scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   And add a `homepage` field:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
