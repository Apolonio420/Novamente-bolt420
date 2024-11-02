import React from 'react';

interface GalleryProps {
  title: string;
  images: Array<{
    id: string;
    url: string;
    prompt: string;
  }>;
}

export default function Gallery({ title, images }: GalleryProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div 
            key={image.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
          >
            <img
              src={image.url}
              alt={image.prompt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm line-clamp-2">
                {image.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}