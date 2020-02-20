import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-item-list',
  templateUrl: './sort-item-list.component.html',
  styleUrls: ['./sort-item-list.component.css']
})
export class SortItemListComponent implements OnInit {

  @Output() sortBy: EventEmitter<any> = new EventEmitter(); 
  constructor() { }
  sortOn: string;
  ngOnInit(): void {
  }

  sort(sortOn) {
    this.sortOn = sortOn;
    this.sortBy.emit(sortOn);
  }

}
