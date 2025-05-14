import { TestBed } from '@angular/core/testing';

import { ChartsAPIService } from './charts-api.service';

describe('ChartsAPIService', () => {
  let service: ChartsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
