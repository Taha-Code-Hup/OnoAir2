import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  template: `
    <h1>Flight Details</h1>
    <p>Flight No: {{ flight.flightNo }}</p>
    <p>Origin: {{ flight.origin }}</p>
    <p>Destination: {{ flight.destination }}</p>
    <p>Boarding Date: {{ flight.boardingDate }}</p>
    <p>Arrival Date: {{ flight.arrivalDate }}</p>
    <p>No. of Seats: {{ flight.seats }}</p>
  `,
})
export class FlightDetailsComponent implements OnInit {
  @Input() flight: any;

  ngOnInit() {
    if (!this.flight) {
      this.flight = {
        flightNo: 'N/A',
        origin: 'N/A',
        destination: 'N/A',
        boardingDate: 'N/A',
        arrivalDate: 'N/A',
        seats: 'N/A',
      };
    }
  }
}
