import { TestBed } from '@angular/core/testing';

import { IsNoeticGuard } from './is-noetic.guard';

describe('IsNoeticGuard', () => {
  let guard: IsNoeticGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNoeticGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
