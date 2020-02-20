import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItemListComponent } from './sort-item-list.component';

describe('SortItemListComponent', () => {
  let component: SortItemListComponent;
  let fixture: ComponentFixture<SortItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
