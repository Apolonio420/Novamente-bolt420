import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { generateImage } from '../services/api';

export default function ImagePrompt() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);

    try {
      await generateImage({ prompt });
      setPrompt('');
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to generate..."
          className="w-full px-6 py-4 text-lg rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all pl-12"
          disabled={isGenerating}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isGenerating) {
              handleGenerate();
            }
          }}
        />
        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <button 
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate
            </>
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
    </div>
  );
}