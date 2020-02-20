import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.css']
})
export class RangeFilterComponent implements OnInit {

  @Input() minRange: number = 0;
  @Input() maxRange: number = 1000;

  minRangeValue: number;
  maxRangeValue: number;
  minDisable: boolean = false;
  maxDisable: boolean = false;
  @Output() filterRangeChange: EventEmitter<any>  = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.maxRangeValue = this.maxRange;
    this.minRangeValue = this.minRange;
  }

  minRangeMethod(e) {
    this.minRangeValue = e.value;
    this.maxDisable = false;
    this.minDisable = false;
    if(this.minRangeValue >= this.maxRangeValue) {
      this.minRangeValue = this.maxRangeValue;
      e.value = this.maxRangeValue;
      this.minDisable = true;
    }
    this.filterRangeData(this.minRangeValue, this.maxRangeValue); 
  }

  maxRangeMethod(e) {
    this.maxRangeValue = e.value;
    this.maxDisable = false;
    this.minDisable = false;
    if(this.minRangeValue === this.maxRangeValue) {
      this.maxRangeValue = this.minRangeValue;
      e.value = this.minRangeValue;
      this.maxDisable = true;
    }
    this.filterRangeData(this.minRangeValue, this.maxRangeValue); 
  }

  filterRangeData(min, max) {    
    this.filterRangeChange.emit({
      'min': min,
      'max': max
    });
  }
  


}
