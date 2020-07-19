import { TestBed } from '@angular/core/testing';

import { UnsplashUrlBuilderService } from './unsplash-url-builder.service';

describe('UnsplashUrlBuilderService', () => {
  let service: UnsplashUrlBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashUrlBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
