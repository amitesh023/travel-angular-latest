import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsuranceProductsComponent } from './travel-insurance-products.component';

describe('TravelInsuranceProductsComponent', () => {
  let component: TravelInsuranceProductsComponent;
  let fixture: ComponentFixture<TravelInsuranceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelInsuranceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelInsuranceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
