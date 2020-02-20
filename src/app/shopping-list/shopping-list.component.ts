import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpSeriveService } from '../services/http-serive.service';
import { SortAndFilterService } from '../services/sort-and-filter.service';
import { CartItemsService } from '../services/cart-items.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shopingListItem: any ;
  addedItemToCartList: any[] = [];
  @Output() addedItemToCart: EventEmitter<any>  = new EventEmitter<any>();
  constructor(
    private httpService: HttpSeriveService, 
    private sortAndFilterService: SortAndFilterService,
    private cartItemsService: CartItemsService) { }

  ngOnInit() {
    this.httpService.getShoppingItem();
    this.httpService.shopingListItem.subscribe(data => {
      this.shopingListItem = data;
    });
  }


  getDiscountedPrice(price, discount) {
    let discountPrice = price - (price * discount/100);
    return discountPrice;
  }

  filterRangeChange(e) {
    this.shopingListItem = this.sortAndFilterService.filterData(e.min, e.max);
  }

  addedShopItemList(e) {
    debugger;
    let elementExists = false;
    this.addedItemToCartList.forEach(element => {
      if(element.id  === e.id) {
        elementExists = true;
        e.count += 1;
      }
    });
    if(!elementExists) {
      e.count = 1;      
      this.addedItemToCartList.push(e);
    }
    this.cartItemsService.cartListItem.next(this.addedItemToCartList);
    this.addedItemToCart.emit(this.addedItemToCartList);
  }
  sortListItems(sortby) {
    if(sortby === 'PHL') {
      this.shopingListItem.sort((a,b) => {
        return a.price - b.price;
      });
    } else if(sortby === 'PLH') {
      this.shopingListItem.sort((a,b) => {
        return b.price - a.price;
      });
    } else {
      this.shopingListItem.sort((a,b) => {
        return b.discount - a.discount;
      });
    }
  }

}
