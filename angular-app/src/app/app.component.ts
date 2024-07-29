import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
  wishItems: wishItem[] = [
    new wishItem('angular', false),
    new wishItem('react', false),
    new wishItem('node', true),
    new wishItem('express', true),
  ];
}
