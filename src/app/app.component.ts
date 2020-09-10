import {Component, OnInit} from '@angular/core';
import {UserStateService} from './services/user-state.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test1';
  username = '';
  isLoggedIn = false;

  constructor(
    private userState: UserStateService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.userState.isLoggedIn()) {
        this.username = this.userState.getUserName();
        this.isLoggedIn = true;
      }
    }, 500);
  }
}
