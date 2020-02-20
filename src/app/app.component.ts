import { Component, OnInit } from '@angular/core';
import { CartItemsService } from './services/cart-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  cartItemList: any[] = [];
  totalCartItems = 0;
  
  constructor(private cartItemsService: CartItemsService) {
     
  }

  ngOnInit() {
    this.cartItemsService.cartListItem.subscribe(data => {
      this.cartItemList = data
      this.totalCartItems = 0;
      this.cartItemList.forEach(element => {
        this.totalCartItems += element.count;
      });
    }); 
  }

}
