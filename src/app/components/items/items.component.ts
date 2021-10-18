import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items:Item[] = [];
  public total:number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items = [];
    this.items = this.itemService.getItems();

    this.getTotal();
  }
  deleteItem(item:Item) {
    this.items = this.items.filter(m => m.id !== item.id)
    this.getTotal();
  }

  toggleItem(item:Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
                 .filter(item => !item.completed)
                 .map(item => item.quantity * item.price)
                 .reduce( (acc, item) => acc += item, 0);
  
  }
}
  


