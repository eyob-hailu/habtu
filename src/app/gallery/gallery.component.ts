import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
 photos = [
    { url: 'assets/img1.jpg', caption: 'That day at the park ❤️' },
    { url: 'assets/img2.jpg', caption: 'Our first coffee date ☕' },
    { url: 'assets/parents.jpg', caption: 'Laughing until we cried 😂' }
  ];


}
