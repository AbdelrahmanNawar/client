import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PaymentComponent } from './step3-payment.component';

describe('Step3PaymentComponent', () => {
  let component: Step3PaymentComponent;
  let fixture: ComponentFixture<Step3PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step3PaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
