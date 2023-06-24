import { TestBed } from '@angular/core/testing';

import { UsserDataService } from './usser-data.service';

describe('UsserDataService', () => {
  let service: UsserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
