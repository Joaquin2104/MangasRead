import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaMangas } from './manga-mangas/manga-mangas';
import { MangaAbout } from './manga-about/manga-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mangas',
    pathMatch: 'full',
  },
  {
    path: 'mangas',
    component: MangaMangas
  },
  {
    path: 'about',
    component: MangaAbout
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
