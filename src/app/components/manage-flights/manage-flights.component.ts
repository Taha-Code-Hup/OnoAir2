import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-manage-flights',
  standalone: true,
  imports: [FormsModule,CommonModule], // Add FormsModule here
  template: `
    <h1>Manage Flights</h1>

    <form (ngSubmit)="addFlight()">
      <input [(ngModel)]="newFlight.flightNo" placeholder="Flight No" name="flightNo" required>
      <input [(ngModel)]="newFlight.origin" placeholder="Origin" name="origin" required>
      <input [(ngModel)]="newFlight.destination" placeholder="Destination" name="destination" required>
      <input [(ngModel)]="newFlight.date" placeholder="Date" name="date" required>
      <input [(ngModel)]="newFlight.seats" placeholder="Seats" name="seats" required>
      <button type="submit">Add Flight</button>
    </form>

    <table>
      <tr>
        <th>Flight No</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Date</th>
        <th>Seats</th>
      </tr>
      <tr *ngFor="let flight of flights">
        <td>{{ flight.flightNo }}</td>
        <td>{{ flight.origin }}</td>
        <td>{{ flight.destination }}</td>
        <td>{{ flight.date }}</td>
        <td>{{ flight.seats }}</td>
      </tr>
    </table>
  `,
})
export class ManageFlightsComponent implements OnInit {
  flights: any[] = [];
  newFlight = { flightNo: '', origin: '', destination: '', date: '', seats: 0 };

  constructor(private flightsService: FlightsService) {}

  ngOnInit() {
    this.flights = this.flightsService.getFlights();
  }

  addFlight() {
    this.flightsService.addFlight(this.newFlight);
    this.newFlight = { flightNo: '', origin: '', destination: '', date: '', seats: 0 };
    this.flights = this.flightsService.getFlights(); // Refresh data
  }
}
