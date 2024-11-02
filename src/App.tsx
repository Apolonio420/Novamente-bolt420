import React from 'react';
import Header from './components/Header';
import ImagePrompt from './components/ImagePrompt';
import Gallery from './components/Gallery';

const DEMO_IMAGES = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25',
    prompt: 'Cyberpunk city at night with neon lights and flying cars'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1708549975766-f1500c4991f6',
    prompt: 'Ethereal forest with glowing mushrooms and fairy lights'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    prompt: 'Futuristic space station orbiting a purple nebula'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Una nueva forma
              <span className="block text-purple-500">
                de pensar
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Create unique AI-generated artwork for your merchandise. From concept to product, bring your vision to life.
            </p>
          </div>

          {/* Image Generation */}
          <ImagePrompt />

          {/* User Gallery */}
          <Gallery title="Your Creations" images={DEMO_IMAGES} />

          {/* Community Gallery */}
          <Gallery title="Community Showcase" images={DEMO_IMAGES} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 Novamente. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;