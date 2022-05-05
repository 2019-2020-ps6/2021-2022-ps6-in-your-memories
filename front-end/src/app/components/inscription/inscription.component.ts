import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";
import {ConnexionService} from "../../../services/connexion.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  public inscriptionForm: FormGroup;

  @Input()
  public alreadyConnected!: boolean;

  constructor(private router: Router, public formBuilder: FormBuilder, private userService : UserService, private connexionService: ConnexionService) {
    this.inscriptionForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.inscriptionForm = this.formBuilder.group({
      lastName:['',Validators.required],
      firstName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mdp:['',Validators.required],
    })
  }

  onInscriptionForm() {
    const formValue = this.inscriptionForm.value;
    const newUser = new User(
      formValue['id'],
      formValue['lastName'],
      formValue['firstName'],
      formValue['email'],
      formValue['mdp']
    );
    this.userService.addUser(newUser)

    this.alreadyConnected = true;
    this.connexionService.setAlreadyConnected(this.alreadyConnected);
    this.router.navigate(['/home'])


  }

  GoConnexion(){
    this.router.navigate(['/connexion'])
  }

}
