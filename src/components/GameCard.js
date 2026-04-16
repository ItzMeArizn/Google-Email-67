import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function GameCard({ game, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card-dark rounded-xl overflow-hidden border border-slate-800 hover:border-brand-primary/50 transition-all duration-300 shadow-lg"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onSelect(game)}
            className="bg-brand-primary hover:bg-blue-600 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl"
          >
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>
        <div className="absolute top-2 right-2">
          <span className="bg-black/60 backdrop-blur-md text-xs font-medium px-2 py-1 rounded-md border border-white/10">
            {game.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">
          {game.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
}
