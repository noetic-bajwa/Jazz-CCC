import { TestBed } from '@angular/core/testing';

import { DailyEngagementReportService } from './daily-engagement-report.service';

describe('DailyEngagementReportService', () => {
  let service: DailyEngagementReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyEngagementReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
