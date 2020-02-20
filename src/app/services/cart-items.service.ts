import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  cartListItem: any = new BehaviorSubject([]);
  constructor() { }
}
