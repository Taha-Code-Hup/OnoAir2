import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private flights = [
    { id: 1, flightNo: 'W61283', origin: 'Tel Aviv', destination: 'Krakow', date: '2024-12-12', seats: 200 },
    { id: 2, flightNo: 'LX8396', origin: 'Larnaca', destination: 'Zurich', date: '2024-12-15', seats: 150 },
  ];

  getFlights() {
    return this.flights;
  }

  addFlight(flight: any) {
    this.flights.push({ ...flight, id: this.flights.length + 1 });
  }
}
