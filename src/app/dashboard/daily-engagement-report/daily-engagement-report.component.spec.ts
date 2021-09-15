import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEngagementReportComponent } from './daily-engagement-report.component';

describe('DailyEngagementReportComponent', () => {
  let component: DailyEngagementReportComponent;
  let fixture: ComponentFixture<DailyEngagementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyEngagementReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEngagementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
