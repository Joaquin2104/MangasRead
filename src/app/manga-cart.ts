import { Injectable } from '@angular/core';
import { Manga } from './manga-list/Manga';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MangaCart {

  private _cartList: Manga[] = [];
  cartList: BehaviorSubject<Manga[]> = new BehaviorSubject(this._cartList);
  
  addToCart(manga: Manga) {
    let item = this._cartList.find((v1) => v1.name === manga.name);

    if (!item) {
      this._cartList.push({ ...manga });
    } else{
      item.quantity += manga.quantity;
    }

    this.cartList.next(this._cartList);
    
  }

}
