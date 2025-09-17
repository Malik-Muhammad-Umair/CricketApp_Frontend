import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cricketservice } from './Myservices/cricketservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cricketapp');


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  hidecall(){
    this.toggleMenu();
  }
}
