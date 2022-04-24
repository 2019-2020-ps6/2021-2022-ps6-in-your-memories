import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireAlzheimerComponent} from './questionnaireAlzheimer.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireAlzheimerComponent;
  let fixture: ComponentFixture<QuestionnaireAlzheimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAlzheimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAlzheimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
