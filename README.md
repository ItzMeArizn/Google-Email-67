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

1. **Set the Base Path**: I have already set `base: './'` in `vite.config.js`. This ensures that your assets load correctly even if your site is hosted at `username.github.io/repo-name/`.

2. **Build the Project**:
   Run the following command to generate the production files:
   ```bash
   npm run build
   ```
   This will create a `dist` folder.

3. **Deploy the `dist` folder**:
   GitHub Pages needs to serve the contents of the `dist` folder. You can use the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
   Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   Then run:
   ```bash
   npm run deploy
   ```

**Note**: If you are manually uploading files to GitHub, you must upload the **contents** of the `dist` folder, not the `dist` folder itself or the root project files.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
