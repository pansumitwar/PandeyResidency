import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

export type BookingStatus = 'Pending' | 'Confirmed' | 'Cancelled';

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  roomType: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  status: BookingStatus;
  createdAt: string;
}

const bookingsCollection = collection(db, 'bookings');

export async function getBookings(): Promise<Booking[]> {
  const snapshot = await getDocs(query(bookingsCollection, orderBy('createdAt', 'desc')));
  return snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...(docSnapshot.data() as Omit<Booking, 'id'>),
  }));
}

export async function createBooking(booking: Booking): Promise<Booking> {
  const created = await addDoc(bookingsCollection, {
    fullName: booking.fullName,
    phone: booking.phone,
    email: booking.email,
    roomType: booking.roomType,
    guests: booking.guests,
    checkIn: booking.checkIn,
    checkOut: booking.checkOut,
    specialRequest: booking.specialRequest,
    status: booking.status,
    createdAt: booking.createdAt,
  });

  return { id: created.id, ...booking };
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<void> {
  const bookingDoc = doc(db, 'bookings', id);
  await updateDoc(bookingDoc, { status });
}

export async function deleteBookingById(id: string): Promise<void> {
  const bookingDoc = doc(db, 'bookings', id);
  await deleteDoc(bookingDoc);
}
