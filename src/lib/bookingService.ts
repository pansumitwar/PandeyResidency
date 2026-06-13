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
  mealPlan: string;
  totalAmount: number;
  nights: number;
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
  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data() as Partial<Omit<Booking, 'id'>>;

    return {
      id: docSnapshot.id,
      fullName: data.fullName ?? '',
      phone: data.phone ?? '',
      email: data.email ?? '',
      roomType: data.roomType ?? '',
      mealPlan: data.mealPlan ?? 'Not specified',
      totalAmount: data.totalAmount ?? 0,
      nights: data.nights ?? 1,
      guests: data.guests ?? 1,
      checkIn: data.checkIn ?? '',
      checkOut: data.checkOut ?? '',
      specialRequest: data.specialRequest ?? '',
      status: (data.status as BookingStatus) ?? 'Pending',
      createdAt: data.createdAt ?? new Date().toISOString(),
    };
  });
}

export async function createBooking(booking: Booking): Promise<Booking> {
  const created = await addDoc(bookingsCollection, {
    fullName: booking.fullName,
    phone: booking.phone,
    email: booking.email,
    roomType: booking.roomType,
    mealPlan: booking.mealPlan,
    totalAmount: booking.totalAmount,
    nights: booking.nights,
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
