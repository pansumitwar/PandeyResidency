import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  Heart,
  Users,
  Award,
  Star,
  Sparkles,
  Home,
  Coffee,
  Shield,
} from 'lucide-react';
import SEO from '../components/SEO';
import { ImageWithFallback } from '../components/ImageWithFallback';

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}+</>;
}

export default function About() {
  const stats = [
    { icon: Users, value: 5000, label: 'Happy Guests' },
    { icon: Home, value: 15, label: 'Rooms' },
    { icon: Award, value: 10, label: 'Years of Service' },
    { icon: Star, value: 4500, label: 'Positive Reviews' },
  ];

  const facilities = [
    {
      icon: Home,
      title: 'Comfortable Stay',
      description: 'Well-furnished rooms with modern amenities for a relaxing experience',
    },
    {
      icon: Sparkles,
      title: 'Clean Rooms',
      description: 'Spotlessly clean and well-maintained rooms with daily housekeeping',
    },
    {
      icon: Heart,
      title: 'Warm Hospitality',
      description: 'Friendly staff dedicated to making your stay memorable',
    },
    {
      icon: Coffee,
      title: 'Mountain Environment',
      description: 'Serene location surrounded by breathtaking Himalayan views',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: '24/7 security and CCTV surveillance for your peace of mind',
    },
    {
      icon: Users,
      title: 'Kedarnath Route',
      description: 'Conveniently located on the main route to Kedarnath temple',
    },
  ];

  return (
    <div>
      <SEO
        title="About Us - Hotel Pandey Residency | Best Hotel in Guptkashi"
        description="Learn about Hotel Pandey Residency, your trusted accommodation partner in Guptkashi for over 10 years. Offering comfort, hospitality, and convenience near Kedarnath."
      />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920"
            alt="About Hotel Pandey Residency"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Your home away from home in the Himalayas
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                For over a decade, Hotel Pandey Residency has been serving pilgrims and travelers
                visiting the sacred Kedarnath temple. Located in the heart of Guptkashi, we have
                built our reputation on providing exceptional hospitality, clean accommodations,
                and warm service.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our hotel is strategically positioned on the Kedarnath route, making it an ideal
                stopover for devotees and tourists. We understand the needs of pilgrims and
                travelers, offering comfortable rooms, delicious meals, and all modern amenities
                while maintaining the warmth of traditional Indian hospitality.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're here for a spiritual journey or to explore the stunning beauty of
                Uttarakhand, Hotel Pandey Residency welcomes you with open arms and ensures your
                stay is comfortable, peaceful, and memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
                  alt="Hotel Exterior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  <Counter end={stat.value} />
                </p>
                <p className="text-gray-600">{stat.label}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <facility.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                  alt="Owner"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                />
                <div>
                  <h3 className="text-2xl font-bold">Message from the Owner</h3>
                  <p className="text-white/80">Mr. Pandey, Proprietor</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white/90 mb-4">
                "Namaste! It gives me immense pleasure to welcome you to Hotel Pandey Residency.
                For over 10 years, we have been serving pilgrims and travelers with dedication
                and warmth. Our mission has always been simple - to provide a home away from
                home for everyone who visits us."
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                "We understand that your journey to Kedarnath is both spiritual and physically
                demanding. That's why we ensure that when you stay with us, you get the comfort,
                rest, and hospitality you deserve. Thank you for choosing Hotel Pandey Residency.
                We look forward to serving you!"
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
