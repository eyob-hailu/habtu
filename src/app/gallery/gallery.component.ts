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
    { url: 'assets/images/photo1.jpg', caption: 'That day at the park ❤️' },
    { url: 'assets/images/photo2.jpg', caption: 'Our first coffee date ☕' },
    { url: 'assets/images/photo3.jpg', caption: 'Laughing until we cried 😂' }
  ];

  videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4'
  ];
}
