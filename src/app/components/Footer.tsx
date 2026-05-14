import { Link } from 'react-router';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br text-white"
    style={{ backgroundImage: "url('https://i.postimg.cc/VLZk4b1T/Image03.jpg')" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Hotel Pandey Residency</h3>
                <p className="text-xs text-white/70">Luxury in the Himalayas</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Experience the perfect blend of comfort and nature at Hotel Pandey Residency,
              your gateway to Kedarnath. Located in the scenic town of Guptkashi.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/nearby-places" className="text-white/80 hover:text-white transition-colors">Nearby Places</Link></li>
              <li><Link to="/contact-booking" className="text-white/80 hover:text-white transition-colors">Contact & Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  NH-109, Kedarnath Rd, near Bus Stand, Guptkashi, Dewar, Uttarakhand 246439
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a href="tel:+919456874629" className="text-white/80 hover:text-white transition-colors">
                  +91 9456874629
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:info@hotelpandeyresidency.com" className="text-white/80 hover:text-white transition-colors">
                  info@hotelpandeyresidency.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Location Map</h4>
            <div className="rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.234!2d79.0833!3d30.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMyJzAwLjAiTiA3OcKwMDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <Link
                to="/admin"
                title="Admin Panel"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Shield className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Hotel Pandey Residency. All rights reserved. |
            <span className="text-white/50 ml-2">Best Hotel in Guptkashi near Kedarnath</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
