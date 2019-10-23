import { TestBed } from '@angular/core/testing';

import { RemoveSourceService } from './remove-source.service';

describe('RemoveSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveSourceService = TestBed.get(RemoveSourceService);
    expect(service).toBeTruthy();
  });
});
