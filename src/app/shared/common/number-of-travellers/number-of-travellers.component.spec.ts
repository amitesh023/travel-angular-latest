import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfTravellersComponent } from './number-of-travellers.component';

describe('NumberOfTravellersComponent', () => {
  let component: NumberOfTravellersComponent;
  let fixture: ComponentFixture<NumberOfTravellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfTravellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfTravellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
