import { TestBed } from '@angular/core/testing';

import { FortuneListService } from './fortuneList.service';

describe('FortuneListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortuneListService = TestBed.get(FortuneListService);
    expect(service).toBeTruthy();
  });
});
