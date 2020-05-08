import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private router: Router
  ) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['']
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['name'],
      formValue['icon'],
    );
    this.playerService.getIndex(newUser);
    this.playerService.addUser(newUser);
    this.router.navigate(['/players']);
  }

}
