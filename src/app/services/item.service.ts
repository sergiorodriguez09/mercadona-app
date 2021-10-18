import { Item } from './../models/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
    {
      id: 0,
      title: "Manzanas",
      price: 0.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: "Leche",
      price: 2,
      quantity: 2,
      completed: false
    },
    {
      id: 2,
      title: "Huevos",
      price: 1.5,
      quantity: 1,
      completed: false
    },
    {
      id: 3,
      title: "Arroz",
      price: 1,
      quantity: 2,
      completed: false
    },
    {
      id: 4,
      title: "Galletas",
      price: 3,
      quantity: 4,
      completed: false
    },
    {
      id: 5,
      title: "Pan Bimbo",
      price: 2.5,
      quantity: 1,
      completed: false
    }
    ];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItem(item:Item) {
    this.items.unshift(item);
  }
}
