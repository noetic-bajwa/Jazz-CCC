import { TestBed } from '@angular/core/testing';

import { AffiliateReportService } from './affiliate-report.service';

describe('AffiliateReportService', () => {
  let service: AffiliateReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffiliateReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
