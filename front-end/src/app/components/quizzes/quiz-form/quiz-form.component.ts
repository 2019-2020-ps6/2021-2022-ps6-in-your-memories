import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {QuizService} from '../../../../services/quiz.service';
import {Quiz} from '../../../../models/quiz.model';
import {Router} from "@angular/router";


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})

export class QuizFormComponent implements OnInit {

  quiz : Quiz = {
    id: "",
    name: "",
    theme: "",
    questions: [],
  }

  bool : boolean = true;
  missArgument: boolean = false;

  constructor(public formBuilder: FormBuilder, public quizService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
  }

  setName(text : string){
    this.quiz.name = text;
  }

  setTheme(text:string){
      this.quiz.theme = text;
  }

  addQuestion() {
    if(this.quiz.name=="" || this.quiz.theme==""){
      this.missArgument=true;
    }
    else{
      this.bool = false
    }
  }

  OnQuizForm(){

  }
}
