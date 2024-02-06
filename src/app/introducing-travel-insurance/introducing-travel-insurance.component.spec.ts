import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducingTravelInsuranceComponent } from './introducing-travel-insurance.component';

describe('IntroducingTravelInsuranceComponent', () => {
  let component: IntroducingTravelInsuranceComponent;
  let fixture: ComponentFixture<IntroducingTravelInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducingTravelInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducingTravelInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
