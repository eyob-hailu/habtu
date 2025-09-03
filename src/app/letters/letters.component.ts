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
I'm really glad I knew you hanuuuuu. From the very first day, your kindness and support have been something I could always count on. 
Even tho I can’t always be right there with you, I want you to know how grateful I am that you were born. You make my life  so much peacefullllll in a way u couldn't even imagine hanuyeee. On your birthday, I want you to feel loved, celebrated, and appreciated because you truly deserve it.   
You’ve been more than just a friend to me, Your kindness inspires me.... your support lifts me up and your presence bringssss peaceeee that is why i call u ministry of peace.   
I wish you a lot of things, actually but most of all, I wish you to live the life you’ve always wanted. A satisfied life. A life that makes you smile when you look back after you grow old. A life that makes you feel like “enkuan tefeterku 😊”. Like u always wish.. I copied your message Here.   
And when you miss me, remember  I will be missing you toooooo.  You are always with me in my thoughts and in my heart.
When life feels heavy, please remember you are stronger than you think. I believe in you, even on days when you don’t believe in yourself. 
When u feel bored or just send me a random txt . I’ll always be there. And I will help youuuuu boost ur confidence.   
And for the days when you forget your own worth here’s your reminder: You are smart. You are kind. You are beautiful. You are ministry of peace. You are loved.  Never let self doubt make you forget who you are you are one of a kind, and the world is better with you in it.      
And when you find yourself overthinking, please remember not not every worry is worth your energy. Take it one step at a time. You’ve got this. And you don’t have to figure it all out alone. I will always be here to listen.   
Finally, when you’re feeling grateful, let me join you. Because I’m grateful for you..your laughter, your patience, the way you light up my days. You made my life better in ways you probably don’t even realize, and I'm glad I know u. I'm glad u r in my life and enkuaaaaanm awekush.   

Enkuan tewoledsh, Hanuyeeeeee! 🎉🎂

I love youuuu ❤️😘😊  

Here’s to many more memories, laughter, and adventures together.  

  
💌💌💌💌`;


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
