import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RangeFilterComponent } from './common/range-filter/range-filter.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortItemListComponent } from './commom/sort-item-list/sort-item-list.component';


const appRoutes: Routes = [
  { path: 'items', component: ShoppingListComponent },
  { path: 'cart', component: CartItemsComponent },
  { path: '',   redirectTo: '/items', pathMatch: 'full' }  
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RangeFilterComponent,
    CartItemsComponent,
    SortItemListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



