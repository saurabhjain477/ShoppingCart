import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpSeriveService {


  shopingListItem: any = new BehaviorSubject([]);
  constructor( private http: HttpClient) {}

  getData(uri: string): Observable<any> {    
    return this.http.get(uri);
  }

  getShoppingItem() {
    const url = "https://api.myjson.com/bins/qzuzi";
    this.getData(url).subscribe(data => {
      this.shopingListItem.next(data);
      console.log(data);
    }, err => {
      console.error(err);
    });
  }



  
}
