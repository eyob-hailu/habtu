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
fullLetter: string = `Happy Birthday to the most smart, kind, genius, and peaceful person I ever know.  
I am really happy I knew you. From the very first day, your kindness and support have been something I could always count on. 
Even though I can’t always be right there with you, I want you to know how grateful I am that you were born. You make life  so much peacefullllll. On your birthday, I want you to feel loved, celebrated, and appreciated because you truly deserve it.   
You’ve been more than just a friend to me; you’ve been a blessing, someone who brings  joy, and strength into my life. Your kindness inspires me, your support lifts me up, and your presence makes everything better.   
I wish you a lot of things, actually but most of all, I wish you to live the life you’ve always wanted. A satisfied life. A life that makes you smile when you look back after you grow old. A life that makes you feel like “enkuan tefeterku 😊”. I copied your message Here.   
And when you miss me, remember  I’m probably missing you too.  You’re always with me in my thoughts and in my heart. Missing you isn’t an empty feeling it’s proof that what we share is real and special.   
When life feels heavy, please remember you are stronger than you think. I believe in you, even on days when you don’t believe in yourself. 
When u feel bored or just send me a random voice or txt . I’ll always be there.   
And for the days when you forget your own worth here’s your reminder: You are smart. You are kind. You are beautiful. You are loved. You inspire me more than you realize. Never let self-doubt make you forget who you are you’re one of a kind, and the world is better with you in it.      
And when you find yourself overthinking, please remember: not every thought is truth, not every worry is worth your energy. Take it one step at a time. You’ve got this. And you don’t have to figure it all out alone. I’ll always be here to listen.   
Finally, when you’re feeling grateful, let me join you. Because I’m grateful for you..your laughter, your patience, the way you light up my days. You’ve made my life better in ways you probably don’t even realize, and I’ll always cherish having you as part of my world.   

Enkuan tewoledsh, Hanuyeeeeee! 🎉🎂 I love youuuu ❤️😘😊  

Here’s to many more memories, laughter, and adventures together.  

Always,  
Eyob 💌`;


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
