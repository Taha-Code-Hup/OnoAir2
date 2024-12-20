import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../services/destinations.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-manage-destinations',
  standalone: true,
  imports: [FormsModule,CommonModule,], // Add FormsModule here
  template: `
    <h1>Manage Destinations</h1>

    <form (ngSubmit)="addDestination()">
      <input [(ngModel)]="newDestination.code" placeholder="Code" name="code" required>
      <input [(ngModel)]="newDestination.name" placeholder="Name" name="name" required>
      <input [(ngModel)]="newDestination.airportName" placeholder="Airport Name" name="airportName" required>
      <input [(ngModel)]="newDestination.website" placeholder="Website" name="website" required>
      <button type="submit">Add Destination</button>
    </form>

    <table>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Airport Name</th>
        <th>Website</th>
      </tr>
      <tr *ngFor="let destination of destinations">
        <td>{{ destination.code }}</td>
        <td>{{ destination.name }}</td>
        <td>{{ destination.airportName }}</td>
        <td><a [href]="destination.website" target="_blank">{{ destination.website }}</a></td>
      </tr>
    </table>
  `,
})
export class ManageDestinationsComponent implements OnInit {
  destinations: any[] = [];
  newDestination = { code: '', name: '', airportName: '', website: '' };

  constructor(private destinationsService: DestinationsService) {}

  ngOnInit() {
    this.destinations = this.destinationsService.getDestinations();
  }

  addDestination() {
    this.destinationsService.addDestination(this.newDestination);
    this.newDestination = { code: '', name: '', airportName: '', website: '' };
    this.destinations = this.destinationsService.getDestinations(); // Refresh data
  }
}
