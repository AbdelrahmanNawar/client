import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2ShipmentComponent } from './step2-shipment.component';

describe('Step2ShipmentComponent', () => {
  let component: Step2ShipmentComponent;
  let fixture: ComponentFixture<Step2ShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2ShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2ShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
