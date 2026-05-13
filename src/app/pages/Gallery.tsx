import { motion } from 'motion/react';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = ['All', 'Rooms', 'Exterior', 'Restaurant', 'Nearby Views', 'Temple Route'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800', category: 'Rooms', alt: 'Deluxe Room' },
    { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800', category: 'Rooms', alt: 'Premium Room' },
    { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', category: 'Rooms', alt: 'Family Room' },
    { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', category: 'Exterior', alt: 'Hotel Exterior' },
    { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', category: 'Exterior', alt: 'Hotel Front View' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', category: 'Exterior', alt: 'Hotel Building' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', category: 'Restaurant', alt: 'Restaurant Interior' },
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800', category: 'Restaurant', alt: 'Dining Area' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', category: 'Restaurant', alt: 'Food Service' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'Nearby Views', alt: 'Mountain View' },
    { src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800', category: 'Nearby Views', alt: 'Himalayan Landscape' },
    { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', category: 'Nearby Views', alt: 'Nature View' },
    { src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800', category: 'Temple Route', alt: 'Temple Path' },
    { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800', category: 'Temple Route', alt: 'Kedarnath Route' },
    { src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800', category: 'Temple Route', alt: 'Pilgrimage Path' },
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div>
      <SEO
        title="Gallery - Hotel Pandey Residency | Photos of Our Hotel"
        description="Explore our photo gallery showcasing rooms, facilities, and the beautiful surroundings of Hotel Pandey Residency in Guptkashi."
      />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Explore our beautiful property and surroundings
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry columnsCount={3} gutter="16px">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                  onClick={() => openLightbox(index)}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </div>
      </section>

      {lightboxImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].alt}
              className="w-full h-full object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[lightboxImage].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
