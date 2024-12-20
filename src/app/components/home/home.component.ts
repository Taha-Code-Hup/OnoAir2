import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Last Minute Flights</h1>
    <table>
      <tr>
        <th>Flight No</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Date</th>
      </tr>
      <tr *ngFor="let flight of flights">
        <td>{{ flight.flightNo }}</td>
        <td>{{ flight.origin }}</td>
        <td>{{ flight.destination }}</td>
        <td>{{ flight.date }}</td>
      </tr>
    </table>
  `,
})
export class HomeComponent implements OnInit {
  flights: any[] = [];

  constructor(private flightsService: FlightsService) {}

  ngOnInit() {
    this.flights = this.flightsService.getFlights(); // Use getFlights() here
  }
}
