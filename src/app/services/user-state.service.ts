import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  private user: UserModel;

  constructor(private userServise: AuthService, private router: Router) {
    const userEmail = window.localStorage.getItem('ISU_NNTU_userEmail');
    this.user = null;
    console.log(userEmail);
    if (userEmail != null) {
      this.userServise.getUserDataByEmail(userEmail)
        .subscribe(data => {
          this.user = data;
        });
    }
  }

  setUser(user: UserModel) {
    this.user = user;
  }

  logOut() {
    window.localStorage.clear();
    this.user = null;
  }

  getUserName() {
    return this.user.userName;
  }

  getUser() {
    return this.user;
  }

  getUserId() {
    return this.user.id;
  }

  getUserCategory() {
    return this.user.category;
  }

  isLoggedIn() {
    return this.user != null;
  }
}
