import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Mail, Phone, Calendar, BedDouble, UtensilsCrossed, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import SEO from '../components/SEO';
import { Booking, getBookings } from '../../lib/bookingService';

export default function ViewBookings() {
  const [identifier, setIdentifier] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = identifier.trim();

    if (!trimmed) {
      toast.error('Please enter your email or phone number.');
      return;
    }

    setIsSearching(true);
    setHasSearched(true);

    try {
      const allBookings = await getBookings();
      const matchingBookings = allBookings.filter((booking) => {
        const normalizedQuery = trimmed.toLowerCase();
        return (
          booking.email.toLowerCase().includes(normalizedQuery) ||
          booking.phone.includes(trimmed)
        );
      });

      setBookings(matchingBookings);

      if (matchingBookings.length === 0) {
        toast.error('No bookings found for that email or phone number.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Unable to fetch bookings right now.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 pb-16">
      <SEO
        title="View Your Bookings - Hotel Pandey Residency"
        description="View your hotel bookings by entering your email or phone number."
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/contact-booking"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to booking
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">View Your Booking</h1>
              <p className="text-gray-600 mt-3">
                Enter your email address or phone number to see your booking details and status.
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  type="text"
                  placeholder="Enter email or phone number"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>

            {!hasSearched ? (
              <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50 p-8 text-center text-gray-600">
                Enter your contact details to view your booking.
              </div>
            ) : bookings.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
                No bookings found for this contact.
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Booking ID</p>
                        <p className="font-semibold text-gray-900">{booking.id}</p>
                      </div>
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
                      <div className="space-y-2">
                        <p className="flex items-center gap-2"><BedDouble className="w-4 h-4 text-purple-600" /> <span className="font-medium">Room:</span> {booking.roomType}</p>
                        <p className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4 text-purple-600" /> <span className="font-medium">Meal plan:</span> {booking.mealPlan || 'Not specified'}</p>
                        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-purple-600" /> <span className="font-medium">Phone:</span> {booking.phone}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-600" /> <span className="font-medium">Stay:</span> {booking.nights || 1} day{(booking.nights || 1) > 1 ? 's' : ''}</p>
                        <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-600" /> <span className="font-medium">Check-in:</span> {new Date(booking.checkIn).toLocaleDateString()}</p>
                        <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-600" /> <span className="font-medium">Check-out:</span> {new Date(booking.checkOut).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                      <p className="font-semibold mb-1">Total amount</p>
                      <p className="text-lg font-bold text-purple-700">₹{(booking.totalAmount || 0).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
