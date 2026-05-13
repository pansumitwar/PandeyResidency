import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  LogOut,
  Search,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  Mountain,
} from 'lucide-react';
import { toast } from 'sonner';

interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  roomType: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Confirmed'>('All');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
      return;
    }

    loadBookings();
  }, [navigate]);

  const loadBookings = () => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(storedBookings);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  const confirmBooking = (id: string) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Confirmed' as const } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success('Booking confirmed successfully');
    setSelectedBooking(null);
  };

  const deleteBooking = (id: string) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success('Booking deleted successfully');
    setSelectedBooking(null);
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === 'All' || booking.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === 'Pending').length,
    confirmed: bookings.filter((b) => b.status === 'Confirmed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mountain className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-white/80">Hotel Pandey Residency</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-7 h-7 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
              </div>
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm">Confirmed</p>
                <p className="text-3xl font-bold text-green-600">{stats.confirmed}</p>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">All Bookings</h2>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Guest Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Room Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Check-In</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Check-Out</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      No bookings found
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">{booking.fullName}</td>
                      <td className="py-3 px-4">{booking.phone}</td>
                      <td className="py-3 px-4">{booking.roomType}</td>
                      <td className="py-3 px-4">{new Date(booking.checkIn).toLocaleDateString()}</td>
                      <td className="py-3 px-4">{new Date(booking.checkOut).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5 text-blue-600" />
                          </button>
                          {booking.status === 'Pending' && (
                            <button
                              onClick={() => confirmBooking(booking.id)}
                              className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                              title="Confirm Booking"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </button>
                          )}
                          <button
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this booking?')) {
                                deleteBooking(booking.id);
                              }
                            }}
                            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                            title="Delete Booking"
                          >
                            <Trash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {selectedBooking && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBooking(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Booking Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Guest Name</p>
                <p className="font-semibold">{selectedBooking.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <p className="font-semibold">{selectedBooking.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="font-semibold">{selectedBooking.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Room Type</p>
                <p className="font-semibold">{selectedBooking.roomType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Number of Guests</p>
                <p className="font-semibold">{selectedBooking.guests}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedBooking.status === 'Confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}
                >
                  {selectedBooking.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Check-In Date</p>
                <p className="font-semibold">
                  {new Date(selectedBooking.checkIn).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Check-Out Date</p>
                <p className="font-semibold">
                  {new Date(selectedBooking.checkOut).toLocaleDateString()}
                </p>
              </div>
            </div>

            {selectedBooking.specialRequest && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">Special Requests</p>
                <p className="bg-gray-50 p-3 rounded-lg">{selectedBooking.specialRequest}</p>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {selectedBooking.status === 'Pending' && (
                <button
                  onClick={() => confirmBooking(selectedBooking.id)}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirm Booking
                </button>
              )}
              <button
                onClick={() => setSelectedBooking(null)}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
