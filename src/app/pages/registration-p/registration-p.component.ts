import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStateService} from '../../services/user-state.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-registration-p',
  templateUrl: './registration-p.component.html',
  styleUrls: ['./registration-p.component.css']
})
export class RegistrationPComponent implements OnInit {

  registerForm: FormGroup;
  setgroup = '';
  user: Object;

  submitted = false;
  personAlreadyAdded = false;
  groups = ['17-ИСТ', '18-ИСТ', '19-ИСТ', '20-ИСТ', '17-ИВТ', '18-ИВТ', '19-ИВТ', '20-ИВТ'];


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

    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      userEmail: ['', Validators.compose([Validators.required, Validators.email])],
      category: ['', Validators.required],
      group_name: [this.setgroup, Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit() {
    this.personAlreadyAdded = false;
    this.submitted = true;

    // Validate form
    if (this.registerForm.invalid) {
      if (this.registerForm.controls.category.value === 'Студент') {
        console.log('errors from student');
        return;
      }
      else if (this.registerForm.controls.userName.errors ||
          this.registerForm.controls.userEmail.errors ||
          this.registerForm.controls.category.errors ||
          this.registerForm.controls.password.errors) {
        console.log('errors isn`t from student');
        return;
      }
    }


    this.userServise.getUserDataByEmail(this.registerForm.controls.userEmail.value)
      .subscribe(data => {
        if (data != null) {
          this.personAlreadyAdded = true;
          console.log('person with this email already added');
          return;
        }
        else {

          this.user = {
            'userName': this.registerForm.controls.userName.value,
            'userEmail': this.registerForm.controls.userEmail.value,
            'category': this.registerForm.controls.category.value,
            'group_name': this.registerForm.controls.group_name.value,
            'password': this.registerForm.controls.password.value
          };
          this.userServise.addUser(this.user)
            .subscribe(() => {
              console.log('person added by now');
            });
          window.localStorage.setItem('ISU_NNTU_userEmail', this.registerForm.controls.userEmail.value);
          window.location.replace(window.location.origin + '');
        }
      });
  }


}
