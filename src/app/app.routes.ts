import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageFlightsComponent } from './components/manage-flights/manage-flights.component';
import { ManageDestinationsComponent } from './components/manage-destinations/manage-destinations.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { BookingsComponent } from './components/bookings/bookings.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manage-flights', component: ManageFlightsComponent },
  { path: 'manage-destinations', component: ManageDestinationsComponent },
  { path: 'flight-details/:id', component: FlightDetailsComponent },
  { path: 'bookings', component: BookingsComponent },
];
