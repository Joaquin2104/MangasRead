import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MangaList } from './manga-list/manga-list';
import { MangaAbout } from './manga-about/manga-about';
import { Cart } from './cart/cart';
import { MangaMangas } from './manga-mangas/manga-mangas';
import { InputNumber } from './input-number/input-number';

@NgModule({
  declarations: [App, MangaList, MangaAbout, Cart, MangaMangas, InputNumber],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
