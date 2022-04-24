import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireAVCComponent} from './questionnaireAVC.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireAVCComponent;
  let fixture: ComponentFixture<QuestionnaireAVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAVCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
