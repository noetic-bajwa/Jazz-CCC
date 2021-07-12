import { TestBed } from '@angular/core/testing';

import { OperatorStatsDataService } from './operator-stats-data.service';

describe('OperatorStatsDataService', () => {
  let service: OperatorStatsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorStatsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
