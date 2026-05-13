import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Mountain,
  Wifi,
  Car,
  Users,
  Utensils,
  MapPin,
  Star,
  Bed,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';
import { ImageWithFallback } from '../components/ImageWithFallback';

export default function Home() {
  const highlights = [
    { icon: MapPin, title: 'Near Kedarnath Route', description: 'Perfect location for pilgrims' },
    { icon: Mountain, title: 'Mountain View', description: 'Breathtaking Himalayan scenery' },
    { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet' },
    { icon: Utensils, title: 'Restaurant', description: 'Delicious local & Indian cuisine' },
    { icon: Car, title: 'Parking', description: 'Free parking available' },
    { icon: Users, title: 'Family Rooms', description: 'Spacious and comfortable' },
  ];

  const rooms = [
    {
      name: 'Single Bed Room',
      price: '₹1,500',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600',
      features: ['1 Single Bed', 'Attached Bathroom', 'TV', 'Hot Water'],
    },
    {
      name: 'Double Bed Room',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600',
      features: ['1 Double Bed', 'Attached Bathroom', 'TV', 'Mountain View'],
    },
    {
      name: 'Four Bed Family Room',
      price: '₹4,000',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
      features: ['4 Beds', 'Spacious', 'Attached Bathroom', 'Perfect for Families'],
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Excellent stay! The location is perfect for Kedarnath pilgrimage. Clean rooms and very hospitable staff.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Wonderful experience. The mountain view from the room was breathtaking. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      name: 'Amit Verma',
      location: 'Bangalore',
      rating: 5,
      text: 'Great value for money. Clean, comfortable and the staff was very helpful. Will visit again!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
  ];

  return (
    <div>
      <SEO />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920"
            alt="Hotel Pandey Residency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to Paradise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Experience luxury in the heart of the Himalayas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact-booking"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
            <a
              href="#rooms"
              className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white rounded-full font-semibold transition-all hover:scale-105"
            >
              Explore Rooms
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Hotel Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the premium amenities and features that make your stay unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Welcome to Hotel Pandey Residency</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nestled in the scenic town of Guptkashi, Hotel Pandey Residency offers a perfect
              blend of comfort, hospitality, and convenience for pilgrims and travelers visiting
              Kedarnath. Our hotel provides a peaceful retreat with modern amenities and stunning
              mountain views.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Rooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of comfortable and well-appointed rooms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
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
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-purple-600">{room.price}</span>
                    <span className="text-sm text-gray-600">/night</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bed className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-bold">{room.name}</h3>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact-booking"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Book Now
                  </Link>
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
            <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied guests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Peaceful Himalayan Stay Today
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Experience the perfect blend of comfort, hospitality, and nature
            </p>
            <Link
              to="/contact-booking"
              className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
