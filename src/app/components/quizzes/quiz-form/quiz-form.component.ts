import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../../services/quiz.service';
import { Quiz } from '../../../../models/quiz.model';
import {Router} from "@angular/router";

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
      theme: ['']
    });
  }

  ngOnInit(): void {
  }

  addQuiz(): void {
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
  }

  addQuestion() {
    this.router.navigate(["questions-form"]);
  }
}
