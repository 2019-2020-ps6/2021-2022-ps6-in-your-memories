import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
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

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: []
  }

  public questionForm: FormGroup = this.formBuilder.group({
    question: [''],
    answers: this.formBuilder.array([]),
    clue: ['']
  });

  constructor(public formBuilder: FormBuilder, private router: Router, public quizService: QuizService) {
    this.initializeQuestionForm();
  }

  ngOnInit(): void {
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      question: [''],
      answers: this.formBuilder.array([]),
      clue: ['']
    });
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    });
  }

  addQuestion() {
    if (this.questionForm.valid) {
      this.quiz.questions.push(this.questionForm.getRawValue() as Question)
    }
    this.initializeQuestionForm();
  }

  addAnswer(): void {
    this.answers.push(this.createAnswer());
  }

  addLastQuestion() {
    if (this.questionForm.valid) {
      this.quiz.questions.push(this.questionForm.getRawValue() as Question)
    }
    console.log(this.quiz)
    this.quizService.addQuiz(this.quiz)
    this.router.navigate(['home']);
  }
}
