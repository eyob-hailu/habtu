import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-musics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {
wishes = [
    'You are the sunshine of my life ☀️',
    'I’m so grateful to have you as my best friend 💖',
    'May your year be filled with laughter and love ❤️',
    'You’re one of a kind 🌟',
    'I’m always here for you 🤗'
  ];

  selectedWish: string | null = null;

  showWish(wish: string) {
    this.selectedWish = wish;
  }
}
