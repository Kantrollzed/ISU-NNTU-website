import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { UserModel } from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  getUserDataByEmailAndPass(userEmail, pass): Observable<UserModel>  {
    return this.http.get(`${this.ROOT_URL}/users/${userEmail}/${pass}`)
      .pipe(map(users => users ? users[0] : null));
  }

  getUserDataByEmail(userEmail): Observable<UserModel>  {
    return this.http.get(`${this.ROOT_URL}/users/${userEmail}`)
      .pipe(map(users => users ? users[0] : null));
  }

  addUser(user: Object) {
    return this.http.post(`${this.ROOT_URL}/users`, user);
  }

}
