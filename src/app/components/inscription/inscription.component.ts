import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  public connexionForm: FormGroup;

  @Input()
  public alreadyConnected!: boolean;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.connexionForm = this.formBuilder.group({
      email: [''],
      mdp: [''],
    });
  }

  ngOnInit(): void {
  }

  Sinscrire() {
    this.alreadyConnected=true;
    this.router.navigate(['/home'])
  }

  GoConnexion(){
    this.router.navigate(['/connexion'])
  }

}
