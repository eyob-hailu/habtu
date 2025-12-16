import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css'],
})
export class LettersComponent implements OnInit {
fullLetter: string = `Happy Birthday to someone who has quietly become a huge part of my life 🤍
From the smallest moments to the hardest ones, you’ve shown up with a heart that never gets tired of caring. The way you stay, the way you try, the way you give—it doesn’t go unnoticed, even when no one says it out loud.
You deserve a world that treats you gently and gives back the same warmth you put into everything you do. And on the days when life feels heavy, remember this: you don’t have to be strong alone. You have a place where you can rest, talk, laugh, or just be quiet—and I’m always right here.
I hope this year gives you reasons to smile without forcing it, peace without effort, and love without conditions. Just so you know, I love you—always. Enjoy today… it’s yours 🥂✨
 `;


  displayedText: string = '';
  typingSpeed: number = 35; // milliseconds per character

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    let i = 0;
    const interval = setInterval(() => {
      this.displayedText += this.fullLetter.charAt(i);
      i++;
      const container = document.getElementById('letterContainer');
      if (container) container.scrollTop = container.scrollHeight; // auto scroll
      if (i >= this.fullLetter.length) clearInterval(interval);
    }, this.typingSpeed);
  }
}
