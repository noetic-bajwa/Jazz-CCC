import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnsubComponent } from './add-unsub.component';

describe('AddUnsubComponent', () => {
  let component: AddUnsubComponent;
  let fixture: ComponentFixture<AddUnsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
