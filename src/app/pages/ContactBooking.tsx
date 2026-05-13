import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from 'lucide-react';
import { toast } from 'sonner';
import SEO from '../components/SEO';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  roomType: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
}

export default function ContactBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const newBooking = {
      id: Date.now().toString(),
      ...data,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    setIsSubmitting(false);
    setShowSuccess(true);
    toast.success('Booking request submitted successfully!');
    reset();

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div>
      <SEO
        title="Contact & Booking - Hotel Pandey Residency | Book Your Stay"
        description="Book your stay at Hotel Pandey Residency in Guptkashi. Contact us for reservations, inquiries, and information about our rooms and facilities."
      />

      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920"
            alt="Contact & Booking"
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
            Contact & Booking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Reserve your stay in the Himalayas
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Book Your Stay</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <input
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Please enter a valid 10-digit phone number',
                        },
                      })}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email',
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Room Type *</label>
                    <select
                      {...register('roomType', { required: 'Please select a room type' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    >
                      <option value="">Select Room Type</option>
                      <option value="Single Bed">Single Bed Room - ₹1,500</option>
                      <option value="Double Bed">Double Bed Room - ₹2,500</option>
                      <option value="Four Bed Family">Four Bed Family Room - ₹4,000</option>
                    </select>
                    {errors.roomType && (
                      <p className="text-red-600 text-sm mt-1">{errors.roomType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Number of Guests *</label>
                    <input
                      {...register('guests', {
                        required: 'Number of guests is required',
                        min: { value: 1, message: 'At least 1 guest required' },
                        max: { value: 10, message: 'Maximum 10 guests allowed' },
                      })}
                      type="number"
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="Number of guests"
                    />
                    {errors.guests && (
                      <p className="text-red-600 text-sm mt-1">{errors.guests.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Check-In Date *</label>
                    <input
                      {...register('checkIn', { required: 'Check-in date is required' })}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    />
                    {errors.checkIn && (
                      <p className="text-red-600 text-sm mt-1">{errors.checkIn.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Check-Out Date *</label>
                    <input
                      {...register('checkOut', { required: 'Check-out date is required' })}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    />
                    {errors.checkOut && (
                      <p className="text-red-600 text-sm mt-1">{errors.checkOut.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Special Requests</label>
                  <textarea
                    {...register('specialRequest')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                    placeholder="Any special requests or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a
                        href="tel:+919456874629"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        +91 9456874629
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a
                        href="mailto:info@hotelpandeyresidency.com"
                        className="text-purple-600 hover:text-purple-700"
                      >
                        info@hotelpandeyresidency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-600">
                        NH-109, Kedarnath Rd, near Bus Stand,
                        <br />
                        Guptkashi, Dewar, Uttarakhand 246439
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Check-in / Check-out</h3>
                      <p className="text-gray-600">
                        Check-in: 12:00 PM
                        <br />
                        Check-out: 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3 mb-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-purple-600" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-purple-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-purple-600" />
                  </a>
                  <a
                    href="https://wa.me/919456874629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.234!2d79.0833!3d30.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMyJzAwLjAiTiA3OcKwMDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Booking Request Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Hotel Pandey Residency. We will contact you shortly to
              confirm your booking.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
