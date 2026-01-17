import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,                 // ensure this is a standalone component
  imports: [RouterOutlet, Navbar, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {          // renamed for clarity
  protected readonly title = signal('amogh-website');
}