import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserStateService} from '../../services/user-state.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  personIsConfirmed = true;

  constructor(
    private formBuilder: FormBuilder,
    private userState: UserStateService,
    private userServise: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.userState.isLoggedIn()) {
        this.router.navigate(['']);
      }
    }, 100);

    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }


  onSubmit() {
    this.submitted = true;
    console.log('button pressed');
    if (this.loginForm.invalid) {
      return;
    }
    const userEmail = this.loginForm.controls.userEmail.value;
    const password = this.loginForm.controls.password.value;
    this.userServise.getUserDataByEmailAndPass(userEmail, password)
      .subscribe(data => {
        this.userState.setUser(data);
        window.localStorage.setItem('ISU_NNTU_userEmail', userEmail);
        console.log(window.location);
        window.location.replace(window.location.origin + '');
      });

    }

}
