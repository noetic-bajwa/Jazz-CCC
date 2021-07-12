import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LTVReportComponent } from './ltvreport.component';

describe('LTVReportComponent', () => {
  let component: LTVReportComponent;
  let fixture: ComponentFixture<LTVReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LTVReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LTVReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
