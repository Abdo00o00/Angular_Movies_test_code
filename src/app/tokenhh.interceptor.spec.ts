import { TestBed } from '@angular/core/testing';

import { TokenhhInterceptor } from './tokenhh.interceptor';

describe('TokenhhInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenhhInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenhhInterceptor = TestBed.inject(TokenhhInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
