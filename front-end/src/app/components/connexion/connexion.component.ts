import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConnexionService} from "../../../services/connexion.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public connexionForm: FormGroup;

  public alreadyConnected: boolean=false;

  constructor(private router: Router, public formBuilder: FormBuilder, public connexionService: ConnexionService) {
    this.connexionForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      mdp:['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  SeConnecter() {
    const user: User = this.connexionForm.getRawValue() as User;
    this.connexionService.logIn(user);
    this.alreadyConnected=true;
    this.connexionService.setAlreadyConnected(this.alreadyConnected);
    this.router.navigate(['/home'])
  }

  GoInscription(){
    this.router.navigate(['/inscription'])
  }
}
