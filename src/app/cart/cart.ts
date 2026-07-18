import { Component } from '@angular/core';
import { MangaCart } from '../manga-cart';
import { Manga } from '../manga-list/Manga';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartList$!: Observable<Manga[]>;


constructor(private cart: MangaCart) {
  this.cartList$ = cart.cartList.asObservable();
}
}
