import { TestBed } from '@angular/core/testing';

import { HttpSeriveService } from './http-serive.service';

describe('HttpSeriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSeriveService = TestBed.get(HttpSeriveService);
    expect(service).toBeTruthy();
  });
});
