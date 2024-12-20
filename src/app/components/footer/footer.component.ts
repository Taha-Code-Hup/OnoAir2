import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>© 2024 OnoAir | <a href="#">Help</a></p>
    </footer>
  `,
  styles: [
    `
      footer {
        background-color: #f1f1f1;
        text-align: center;
        padding: 1rem;
      }
      a {
        text-decoration: none;
        color: #007bff;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class FooterComponent {}
