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
    this.quizService.setSelectedQuiz(quiz);
    this.router.navigate(['questionnaire']);
  }

  quizEdit(quiz: Quiz): void {
    this.quizService.setSelectedQuiz(quiz);
    this.router.navigate(['edit-quiz']);
  }


  getTopQuiz(): Quiz[] {
    let topQuiz: Quiz[] = [];
    var monNouvelObjet = Object.values(this.quizList);
    console.log(monNouvelObjet.length)
    var i = 0;
    while (i < 5 && monNouvelObjet.length > 0) {
      var tempQuiz = monNouvelObjet[0];
      var x = 0;
      for (var a = 0; a < monNouvelObjet.length; a++)
        if ((monNouvelObjet[a].nbPlay > tempQuiz.nbPlay) || (monNouvelObjet[a].nbPlay == tempQuiz.nbPlay && Math.random() > 0.45)) {
          tempQuiz = monNouvelObjet[a];
          x = a;
        }
      topQuiz.push(monNouvelObjet[x]);
      monNouvelObjet.splice(x, 1);
      i++;
    }
    return topQuiz;
  }

  selectTheme(title? : String){
    this.router.navigate(['/quiz-list/theme='  +  title]);
  }

}
