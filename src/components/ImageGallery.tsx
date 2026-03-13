import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ExternalLink } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  proposalLink?: string;
}

export function ImageGallery({ images, proposalLink }: ImageGalleryProps) {
  return (
    <PhotoProvider
      maskOpacity={0.8}
      bannerVisible={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl border border-[#EFEBE1]">
            <PhotoView src={src}>
              <img 
                src={src} 
                alt={`Proyecto visual ${index + 1}`} 
                className="w-full h-48 object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-110"
              />
            </PhotoView>
            
            {proposalLink && (
              <a 
                href={proposalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-[#6F4E37] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 border border-[#EFEBE1]"
                onClick={(e) => e.stopPropagation()}
              >
                Propuesta <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
}
