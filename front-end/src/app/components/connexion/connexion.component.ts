import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
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

  SeConnecter() {
    this.alreadyConnected=true;
    this.router.navigate(['/home'])
  }

  GoInscription(){
    this.router.navigate(['/inscription'])
  }
}
