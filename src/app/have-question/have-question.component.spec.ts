import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveQuestionComponent } from './have-question.component';

describe('HaveQuestionComponent', () => {
  let component: HaveQuestionComponent;
  let fixture: ComponentFixture<HaveQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
