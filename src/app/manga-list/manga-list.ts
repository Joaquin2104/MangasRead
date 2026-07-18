import { Component } from '@angular/core';
import { Manga } from './Manga';
import { MangaCart } from '../manga-cart';

@Component({
  selector: 'app-manga-list',
  standalone: false,
  templateUrl: './manga-list.html',
  styleUrl: './manga-list.scss',
})
export class MangaList {
  mangas : Array<Manga>= [
    {
      id : 1,
      name : "Dungeon Meshi",
      author : "Ryoko Kui",
      price : 20000,
      stock : 12,
      image : "img/dungeon-meshi.jpg",
      clearance : true,
      quantity : 0,
    },

    {
      id : 2,
      name : "Mad",
      author : "Yusuke Otori.",
      price : 15000,
      stock : 8,
      image : "img/Mad.jfif",
      clearance : false,
      quantity : 0,
    },

      {
      id : 3,
      name : "Dandadan",
      author : "Yukinobu Tatsu",
      price : 30000,
      stock : 0,
      image : "img/Dandadan.jpeg",
      clearance : false,
      quantity : 0,
    },

    {
      id : 4,
      name : "Frieren",
      author : "Kanehito Yamada y Tsukasa Abe",
      price : 40000,
      stock : 2,
      image : "img/frieren.jpg",
      clearance : false,
      quantity : 0,
    },

    {
      id : 5,
      name : "ChainsawMan",
      author : "Tatsuki Fujimoto",
      price : 15000,
      stock : 39,
      image : "img/chainsawman.jfif",
      clearance : false,
      quantity : 0,
    },

    {
      id : 6,
      name : "DrStone",
      author : "Riichiro Inagaki y Boichi",
      price : 20000,
      stock : 10,
      image : "img/DrStone.jfif",
      clearance : false,
      quantity : 0,
    },
  ]

  constructor(private cart:MangaCart){

  }

addToCart(manga: Manga): void {
  this.cart.addToCart(manga);

  manga.stock -= manga.quantity;
  manga.quantity = 0;

}


}


