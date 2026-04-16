import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export function GameModal({ game, onClose }) {
  const [key, setKey] = useState(0);

  const reloadGame = () => setKey(prev => prev + 1);

  return (
    <AnimatePresence>
      {game && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl aspect-video bg-bg-dark rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-card-dark border-bottom border-slate-800">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-white">{game.title}</h2>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400 uppercase tracking-wider">
                  {game.category}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={reloadGame}
                  className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                  title="Reload Game"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Game Container */}
            <div className="flex-1 bg-black relative">
              <iframe
                key={key}
                src={game.url}
                className="w-full h-full border-none"
                allow="fullscreen; autoplay; encrypted-media"
                title={game.title}
              />
            </div>
            
            {/* Footer */}
            <div className="px-6 py-3 bg-card-dark/50 text-xs text-slate-500 flex justify-between items-center">
              <p>Playing on Unblocked Games Hub</p>
              <div className="flex gap-4">
                <span>Press ESC to exit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
