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
    // Rooms
    { src: 'https://r1imghtlak.mmtcdn.com/362cadd8-eb24-4b75-8cc1-96ccdadf4641.jpg', category: 'Rooms', alt: 'Room 1' },
    { src: 'https://r1imghtlak.mmtcdn.com/36dd2b48-22ba-418f-9a1b-e3b7308af9c9.jpg', category: 'Rooms', alt: 'Room 2' },
    { src: 'https://r1imghtlak.mmtcdn.com/ef945172-b445-4463-982c-7e6d184e4995.jpg', category: 'Rooms', alt: 'Room 3' },
    { src: 'https://r1imghtlak.mmtcdn.com/651fa81a-6a6f-42aa-b911-ea2217a6abd6.jpg', category: 'Rooms', alt: 'Room 4' },
    { src: 'https://r1imghtlak.mmtcdn.com/b39649c4-f62e-4a08-aae2-6d751b48eaf5.jpeg', category: 'Rooms', alt: 'Room 5' },
    // Outdoors/Exterior
    { src: 'https://r1imghtlak.mmtcdn.com/a7988a35-eeed-4ff1-af62-d538aa6cc7e8.jpg', category: 'Exterior', alt: 'Outdoor View 1' },
    { src: 'https://r1imghtlak.mmtcdn.com/4531c351-b78c-465c-bab7-7b87ec045ca7.jpg', category: 'Exterior', alt: 'Outdoor View 2' },
    { src: 'https://r1imghtlak.mmtcdn.com/0d9787ae-837f-41e9-b132-965b8ad3bca0.jpg', category: 'Exterior', alt: 'Outdoor View 3' },
    { src: 'https://r1imghtlak.mmtcdn.com/03386f4f-05e2-4fae-9199-b6ee1fb3075e.jpg', category: 'Exterior', alt: 'Outdoor View 4' },
    // Hotel Facade
    { src: 'https://r1imghtlak.mmtcdn.com/71c42f74-ac1f-4845-b943-f235524aeafb.jpeg', category: 'Exterior', alt: 'Hotel Facade 1' },
    { src: 'https://r1imghtlak.mmtcdn.com/7cd6d47f-10c9-4052-9995-11cff2586933.jpg', category: 'Exterior', alt: 'Hotel Facade 2' },
    // Reception & Other Areas
    { src: 'https://r1imghtlak.mmtcdn.com/ef4ab9d1-77fa-4928-a63d-1a3a524f96d9.jpg', category: 'All', alt: 'Reception Area 1' },
    { src: 'https://r1imghtlak.mmtcdn.com/96ce198e-9bb8-4ab0-8b20-d4b45743af88.jpg', category: 'All', alt: 'Reception Area 2' },
    // Entrance
    { src: 'https://r1imghtlak.mmtcdn.com/4754a148-0419-4526-a2e2-2d5d2b21297f.jpg', category: 'All', alt: 'Hotel Entrance' },
    // Washroom
    { src: 'https://r1imghtlak.mmtcdn.com/f27b26b8-bc57-449a-a1dd-e9877b18e548.jpg', category: 'All', alt: 'Bathroom' },
    // Restaurant
    { src: 'https://r1imghtlak.mmtcdn.com/c0a1cef1-b6ca-4a3b-b74b-0ea519637de2.jpeg', category: 'Restaurant', alt: 'Restaurant Area' },
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
