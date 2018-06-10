import { TestBed, inject } from '@angular/core/testing';

import { RefreshTokenResolveService } from './refresh-token-resolve.service';

describe('RefreshTokenResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshTokenResolveService]
    });
  });

  it('should be created', inject([RefreshTokenResolveService], (service: RefreshTokenResolveService) => {
    expect(service).toBeTruthy();
  }));
});
