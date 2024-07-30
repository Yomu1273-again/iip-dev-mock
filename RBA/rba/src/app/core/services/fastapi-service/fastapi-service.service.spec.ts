import { TestBed } from '@angular/core/testing';

import { FastapiServiceService } from './fastapi-service.service';

describe('FastapiServiceService', () => {
  let service: FastapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
