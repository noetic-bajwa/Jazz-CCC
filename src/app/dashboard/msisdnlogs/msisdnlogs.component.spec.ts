import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSISDNLogsComponent } from './msisdnlogs.component';

describe('MSISDNLogsComponent', () => {
  let component: MSISDNLogsComponent;
  let fixture: ComponentFixture<MSISDNLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSISDNLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSISDNLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
