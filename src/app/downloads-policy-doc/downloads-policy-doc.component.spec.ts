import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsPolicyDocComponent } from './downloads-policy-doc.component';

describe('DownloadsPolicyDocComponent', () => {
  let component: DownloadsPolicyDocComponent;
  let fixture: ComponentFixture<DownloadsPolicyDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsPolicyDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsPolicyDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
