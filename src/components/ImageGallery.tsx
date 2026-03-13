import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectImage {
  src: string;
  title: string;
  proposalLink?: string;
}

interface ImageGalleryProps {
  gallery: ProjectImage[];
}

export function ImageGallery({ gallery }: ImageGalleryProps) {
  return (
    <PhotoProvider
      maskOpacity={0.85}
      bannerVisible={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {gallery.map((img, index) => (
          <motion.div 
            key={index} 
            className="relative group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 h-56"
            whileHover="hover"
          >
            <PhotoView src={img.src}>
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
              />
            </PhotoView>
            
            {/* Title Overlay with Gradient (Bottom for better look, or Top as requested) */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-80" />
            
            <motion.div 
              className="absolute top-4 left-4 right-4 pointer-events-none"
              variants={{
                hover: { y: 2, x: 2 }
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h5 className="text-white text-sm font-semibold tracking-wide drop-shadow-md">
                {img.title}
              </h5>
            </motion.div>
            
            {img.proposalLink && (
              <motion.a 
                href={img.proposalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-xl text-[10px] font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 border border-white/20"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Propuesta <ExternalLink size={12} />
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </PhotoProvider>
  );
}
