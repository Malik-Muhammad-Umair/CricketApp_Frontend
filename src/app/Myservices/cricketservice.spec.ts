import { TestBed } from '@angular/core/testing';

import { Cricketservice } from './cricketservice';

describe('Cricketservice', () => {
  let service: Cricketservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cricketservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
