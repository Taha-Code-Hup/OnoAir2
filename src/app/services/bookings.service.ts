import { Injectable } from '@angular/core'; // No import for Booking needed

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private bookings: Booking[] = [
    {
      id: 1,
      origin: 'Tel Aviv',
      destination: 'Krakow',
      date: '2024-12-12',
      passengers: [{ name: 'John Doe', passport: '123456' }],
    },
  ];

  getBookings(): Booking[] {
    return this.bookings;
  }
}

// Define the Booking interface directly in the same file
export interface Booking {
  id: number;
  origin: string;
  destination: string;
  date: string;
  passengers: { name: string; passport: string }[];
}
