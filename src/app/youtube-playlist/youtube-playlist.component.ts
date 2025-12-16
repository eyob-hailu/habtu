import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-playlist.component.html',
})
export class YoutubePlaylistComponent {

  playlistId = 'PLbP732dVKGqh2_PYDB-5qmLdP1ZZOQ7dE';
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/videoseries?list=${this.playlistId}`
    );
  }
}
