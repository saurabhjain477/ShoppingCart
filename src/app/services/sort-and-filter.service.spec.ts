import { TestBed } from '@angular/core/testing';

import { SortAndFilterService } from './sort-and-filter.service';

describe('SortAndFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortAndFilterService = TestBed.get(SortAndFilterService);
    expect(service).toBeTruthy();
  });
});
