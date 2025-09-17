import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Jobboard } from './components/jobboard/jobboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Jobboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('job-tracker');
}
