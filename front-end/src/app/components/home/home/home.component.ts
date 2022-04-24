import {Component, OnInit} from '@angular/core';
import {Quiz} from "../../../../models/quiz.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public quizList: Quiz[] = [];
  public searchForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router, public quizService: QuizService) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.quizList = quizzes;
    });
  }

  ngOnInit(): void {
  }

  quizSelected(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz.id);
    this.router.navigate(['questionnaire']);
  }

  quizEdit(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz.id);
    this.router.navigate(['edit-quiz']);
  }

}
