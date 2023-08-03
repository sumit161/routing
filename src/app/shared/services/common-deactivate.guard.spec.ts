import { TestBed } from '@angular/core/testing';

import { CommonDeactivateGuard } from './common-deactivate.guard';

describe('CommonDeactivateGuard', () => {
  let guard: CommonDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommonDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
