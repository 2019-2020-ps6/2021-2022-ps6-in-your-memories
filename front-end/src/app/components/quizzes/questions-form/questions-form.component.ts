import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  compteur : number = 0;
  maxAnswers : boolean = false;
  minAnswers : boolean = false;

  public questionForm: FormGroup = this.formBuilder.group({
    label: [''],
    answers: this.formBuilder.array([]),
    image: [''],
    indice: [''],
  });

  @Input()
  quiz: Quiz = {
    id: '',
    name: '',
    theme: '',
    questions: [],
    nbPlay: 0,
  }

  constructor(public formBuilder: FormBuilder, private router: Router, public quizService: QuizService) {
    this.initializeQuestionForm();
  }

  ngOnInit(): void {
  }

  private initializeQuestionForm(): void {
    this.questionForm = this.formBuilder.group({
      label: ['',Validators.required],
      answers: this.formBuilder.array([],Validators.required),
      image: [''],
      indice: ['',Validators.required]
    });
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer(): FormGroup {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
      imageAns: '',
    });
  }

  addQuestion() {
    if (this.questionForm.valid) {
      this.quiz.questions.push(this.questionForm.getRawValue() as Question)
    }
    this.initializeQuestionForm();
    this.compteur=0;
  }

  addAnswer(): void {
    if(this.compteur<4) {
      this.answers.push(this.createAnswer());
      this.compteur++;
    }
    else{
      this.maxAnswers=true;
    }
    if(this.compteur>=2){
      this.minAnswers = true;
    }
  }

  deleteAnswer() : void{
    if(this.compteur>0) {
      this.answers.removeAt(length-1);
      this.compteur--;
      this.maxAnswers=false;
    }
    if(this.compteur<2){
      this.minAnswers = false;
    }
  }

  addLastQuestion() {
    if (this.questionForm.valid) {
      this.quiz.questions.push(this.questionForm.getRawValue() as Question)
    }
    console.log(this.quiz.questions[0].label)
    this.quizService.addQuiz(this.quiz)
    this.router.navigate(['home']);
  }
}
