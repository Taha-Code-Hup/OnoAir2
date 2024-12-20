import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
      <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/manage-flights">Manage Flights</a></li>
          <li><a routerLink="/manage-destinations">Manage Destinations</a></li>
          <li><a routerLink="/bookings">Bookings</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        background-color: #007bff;
        padding: 1rem;
        color: white;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1rem;
      }
      li {
        display: inline;
      }
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class HeaderComponent {}