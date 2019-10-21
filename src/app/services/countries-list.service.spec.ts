import { TestBed } from '@angular/core/testing';

import { CountriesListService } from './countries-list.service';

describe('CountriesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriesListService = TestBed.get(CountriesListService);
    expect(service).toBeTruthy();
  });
});
