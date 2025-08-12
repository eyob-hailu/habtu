import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.css'
})
export class LettersComponent {
letters = [
    { title: 'Open When You Miss Me', content: 'Hey beautiful, I miss you too. Remember when...' },
    { title: 'Open When You Are Sad', content: 'You are stronger than you think. Always remember...' },
    { title: 'Future Note', content: 'One year from now, I hope we are even closer...' }
  ];

  selectedLetter: any = null;

  openLetter(letter: any) {
    this.selectedLetter = letter;
  }
}
