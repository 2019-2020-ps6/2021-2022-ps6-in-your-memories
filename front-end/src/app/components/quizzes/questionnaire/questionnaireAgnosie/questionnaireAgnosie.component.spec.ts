import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionnaireAgnosieComponent} from './questionnaireAgnosie.component';

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireAgnosieComponent;
  let fixture: ComponentFixture<QuestionnaireAgnosieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAgnosieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireAgnosieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
