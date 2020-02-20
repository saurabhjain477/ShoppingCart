import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItemList: any[] = [];
  constructor(private cartItemsService: CartItemsService) {
    this.cartItemsService.cartListItem.subscribe(data => {
      this.cartItemList = data;
    });
   }

  ngOnInit() {
  }

  incDecItem(id,action) {
    this.cartItemList.forEach(element => {
      if(element.id === id) {
        if(action == 'inc') {
          element.count += 1;          
        } else if(action == 'dec') {
          element.count -= 1;
        }
      }      
    });
  }

  removeItem(id) {
    this.cartItemList = this.cartItemList.filter(x => {return x.id != id;});
  }

  getTotalPrice(list) {
    let totalPrice = 0;
    list.forEach(item => {
      totalPrice += ((item.price - (item.price * item.discount/100)) * item.count)
    });
    return totalPrice
  }
}
