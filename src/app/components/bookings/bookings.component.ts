import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/booking.model'; // Import the Booking model
@Component({
  selector: 'app-bookings',
  standalone: true,
  template: `
    <h1>My Bookings</h1>
    <h2>Upcoming Bookings</h2>
    <ul>
      <li *ngFor="let booking of upcomingBookings">
        {{ booking.origin }} → {{ booking.destination }} ({{ booking.date }})
      </li>
    </ul>

    <h2>Past Bookings</h2>
    <ul>
      <li *ngFor="let booking of pastBookings">
        {{ booking.origin }} → {{ booking.destination }} ({{ booking.date }})
      </li>
    </ul>
  `,
})
export class BookingsComponent implements OnInit {
  upcomingBookings: Booking[] = [];
  pastBookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    const allBookings = this.bookingsService.getBookings();
    const today = new Date();

    this.upcomingBookings = allBookings.filter((booking: Booking) => new Date(booking.date) > today);
    this.pastBookings = allBookings.filter((booking: Booking) => new Date(booking.date) <= today);
  }
}

