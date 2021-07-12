import { TestBed } from '@angular/core/testing';

import { MSISDNLogsService } from './msisdnlogs.service';

describe('MSISDNLogsService', () => {
  let service: MSISDNLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MSISDNLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
