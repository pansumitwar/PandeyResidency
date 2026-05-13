import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import SEO from '../components/SEO';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function NearbyPlaces() {
  const places = [
    {
      name: 'Kedarnath Temple',
      distance: '30 km',
      description: 'One of the twelve Jyotirlingas of Lord Shiva, located at an altitude of 3,583 meters. A sacred pilgrimage site attracting thousands of devotees annually.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    },
    {
      name: 'Guptkashi Temple',
      distance: '1 km',
      description: 'Ancient temples dedicated to Lord Shiva and Goddess Parvati. A must-visit spiritual site with beautiful architecture and peaceful atmosphere.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    },
    {
      name: 'Sonprayag',
      distance: '15 km',
      description: 'Confluence of rivers Basuki and Mandakini. Starting point for Kedarnath trek with stunning natural beauty and serene environment.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    },
    {
      name: 'Triyuginarayan Temple',
      distance: '25 km',
      description: 'Ancient temple believed to be the wedding venue of Lord Shiva and Goddess Parvati. Features an eternal flame that has been burning for ages.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
    },
    {
      name: 'Ukhimath',
      distance: '20 km',
      description: 'Winter seat of Kedarnath deity. Beautiful town with temples and panoramic views of snow-capped peaks.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
    },
    {
      name: 'Chopta',
      distance: '65 km',
      description: 'Known as "Mini Switzerland of India". Base for Tungnath temple trek with breathtaking meadows and Himalayan views.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    },
  ];

  return (
    <div>
      <SEO
        title="Nearby Places - Hotel Pandey Residency | Tourist Attractions in Guptkashi"
        description="Explore nearby tourist attractions from Hotel Pandey Residency including Kedarnath Temple, Guptkashi Temple, Sonprayag, and more sacred places in Uttarakhand."
      />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt="Nearby Places"
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
            Nearby Places
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Explore the spiritual and natural wonders around Guptkashi
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Tourist Attractions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover sacred temples and stunning natural beauty near Hotel Pandey Residency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-gray-900">{place.distance}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold">{place.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                    Get Directions
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Find Us on Map</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              NH-109, Kedarnath Rd, near Bus Stand, Guptkashi, Dewar, Uttarakhand 246439
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.234!2d79.0833!3d30.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMyJzAwLjAiTiA3OcKwMDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Pandey Residency Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                NH-109, Kedarnath Rd, near Bus Stand, Guptkashi
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
              <Navigation className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Distance from Kedarnath</h3>
              <p className="text-gray-600 text-sm">30 km (via Sonprayag)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Near Bus Stand</h3>
              <p className="text-gray-600 text-sm">Just 100 meters from Guptkashi Bus Stand</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
