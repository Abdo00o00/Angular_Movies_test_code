import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { twoGuard } from './two.guard';

describe('twoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => twoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
