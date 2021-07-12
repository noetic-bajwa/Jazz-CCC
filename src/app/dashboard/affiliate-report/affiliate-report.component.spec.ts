import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateReportComponent } from './affiliate-report.component';

describe('AffiliateReportComponent', () => {
  let component: AffiliateReportComponent;
  let fixture: ComponentFixture<AffiliateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
