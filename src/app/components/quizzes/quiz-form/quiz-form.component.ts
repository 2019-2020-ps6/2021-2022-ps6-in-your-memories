import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../../services/quiz.service';
import { Quiz } from '../../../../models/quiz.model';
import {Router} from "@angular/router";
import {Patient} from "../../../../models/patient.model";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  public quizForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public quizService: QuizService, private router: Router) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: [''],
      questions: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
  }

  addQuestion() {
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    this.quizService.addQuiz(quizToCreate);
    this.router.navigate(['questions-form']);
  }
}
