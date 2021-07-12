import { TestBed } from '@angular/core/testing';

import { LtvReportDataService } from './ltv-report-data.service';

describe('LtvReportDataService', () => {
  let service: LtvReportDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtvReportDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
