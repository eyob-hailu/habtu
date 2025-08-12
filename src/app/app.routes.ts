import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LettersComponent } from './letters/letters.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MusicsComponent } from './musics/musics.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'letters', component: LettersComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'music', component: MusicsComponent },
  { path: '**', redirectTo: '' } // redirect unknown paths to Home
];
