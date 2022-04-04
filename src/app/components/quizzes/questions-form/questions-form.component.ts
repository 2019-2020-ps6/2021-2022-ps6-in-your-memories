import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuizService} from "../../../../services/quiz.service";
import {Router} from "@angular/router";
import {Question} from "../../../../models/question.model";
import {Quiz} from "../../../../models/quiz.model";


@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router, public quizService: QuizService) {
    this.questionForm = this.formBuilder.group({
      question: [''],
      answer1: [''],
      answer1IsCorrect : [''],
      answer2: [''],
      answer2IsCorrect : [''],
      answer3: [''],
      answer3IsCorrect : [''],
      answer4: [''],
      answer4IsCorrect : [''],
      clue: ['']
    });
  }

  ngOnInit(): void {
  }

  addQuestion() {

  }
}
