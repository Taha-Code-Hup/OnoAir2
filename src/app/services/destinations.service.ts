import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  private destinations = [
    { code: 'TLV', name: 'Tel Aviv', airportName: 'Ben Gurion', website: 'https://www.iaa.gov.il/en/' },
    { code: 'JFK', name: 'New York', airportName: 'JFK International', website: 'https://www.jfkairport.com/' },
  ];

  getDestinations() {
    return this.destinations;
  }

  addDestination(destination: any) {
    this.destinations.push(destination);
  }
}
