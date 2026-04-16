import { useState, useMemo } from 'react';
import { Search, Gamepad2, Filter, Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import gamesData from './games.json';
import { GameCard } from './components/GameCard.js';
import { GameModal } from './components/GameModal.js';
import { cn } from './lib/utils.js';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState(null);

  const categories = useMemo(() => {
    const cats = new Set(gamesData.map(g => g.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredGames = useMemo(() => {
    return gamesData.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-bg-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary p-2 rounded-xl shadow-lg shadow-brand-primary/20">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white leading-none">
                Unblocked<span className="text-brand-primary">Games</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                Premium Gaming Hub
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-1">
              {['Home', 'New', 'Popular', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="h-6 w-px bg-slate-800" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Play Your Favorite Games <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Anywhere, Anytime.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg mb-10"
          >
            A curated collection of the best web-based games, unblocked and ready to play in your browser. No downloads, no installs.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-brand-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for a game..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-14 pr-4 py-5 bg-card-dark border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all border",
                  selectedCategory === category
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-card-dark text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <Filter className="w-4 h-4" />
            <span>Showing {filteredGames.length} games</span>
          </div>
        </div>

        {/* Game Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelect={setSelectedGame}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="bg-slate-800/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card-dark border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className="w-8 h-8 text-brand-primary" />
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Unblocked Games Hub
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                The ultimate destination for unblocked web games. Fast, secure, and always free to play.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                  <Github className="w-5 h-5 text-slate-300" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                  <ExternalLink className="w-5 h-5 text-slate-300" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Categories</h4>
              <ul className="space-y-4">
                {categories.slice(1, 6).map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className="text-slate-400 hover:text-brand-primary transition-colors text-sm"
                    >
                      {cat} Games
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DMCA</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Unblocked Games Hub. All rights reserved.
            </p>
            <p className="text-slate-600 text-[10px] uppercase tracking-widest">
              Built for the gaming community
            </p>
          </div>
        </div>
      </footer>

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </div>
  );
}
