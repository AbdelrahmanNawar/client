import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ProductsComponent } from './step1-products.component';

describe('Step1ProductsComponent', () => {
  let component: Step1ProductsComponent;
  let fixture: ComponentFixture<Step1ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step1ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
