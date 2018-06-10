import { TestBed, inject } from '@angular/core/testing';

import { ErrInterceptorService } from './err-interceptor.service';

describe('ErrInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrInterceptorService]
    });
  });

  it('should be created', inject([ErrInterceptorService], (service: ErrInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
