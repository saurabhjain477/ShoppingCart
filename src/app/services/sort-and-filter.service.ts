import { Injectable } from '@angular/core';
import { HttpSeriveService } from './http-serive.service';

@Injectable({
  providedIn: 'root'
})
export class SortAndFilterService {

  shopingListItem: any[] = []
  constructor(private httpService: HttpSeriveService) { 
    this.httpService.shopingListItem.subscribe(data => {
      this.shopingListItem = data;
    });
  }

  filterData(min, max) {    
    const filterShopingList = this.shopingListItem.filter(r => {
      let discountPrice = r.price - (r.price * r.discount/100);
      return discountPrice >= min && discountPrice <= max;
    });
    return filterShopingList
  }
}
