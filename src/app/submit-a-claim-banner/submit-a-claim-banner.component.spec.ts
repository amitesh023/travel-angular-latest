import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAClaimBannerComponent } from './submit-a-claim-banner.component';

describe('SubmitAClaimBannerComponent', () => {
  let component: SubmitAClaimBannerComponent;
  let fixture: ComponentFixture<SubmitAClaimBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitAClaimBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAClaimBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
