import React from 'react';
import { ShoppingCart, User, Package } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.prod.website-files.com/66a15b1a2947bee4cbb9ddf5/66ee253f8ab4f5ab741f7553_Sin%20ti%CC%81tulo.png"
              alt="Novamente"
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold text-white">
              Novamente
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Package className="w-5 h-5" />
              <span>Store</span>
            </button>
            
            <button className="relative flex items-center text-gray-400 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            <button className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}