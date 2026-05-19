import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Nearby Places', path: '/nearby-places' },
    { name: 'Contact & Booking', path: '/contact-booking' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/10 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div 
            // className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-purple-600' : 'bg-white/20'}`}
            >
              {/* <Mountain className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} /> */}

              <img
                src="src\app\components\figma\pandey-logo.png"
                alt="Hotel Pandey Residency Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
              />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Hotel Pandey Residency
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                Luxury in the Himalayas
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all hover:scale-105 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-purple-600'
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919456874629"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 ${
                isScrolled
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-white text-purple-600 hover:bg-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? isScrolled
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/20 text-white'
                        : isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:+919456874629"
                  className={`flex items-center gap-2 justify-center py-2.5 px-4 rounded-lg font-semibold ${
                    isScrolled
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-purple-600'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
