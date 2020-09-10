import { Component, OnInit } from '@angular/core';
import {UserStateService} from '../../services/user-state.service';
import {UserModel} from '../../models/user.model';
import {NewsUpdateService} from '../../services/news-update.service';
import {NewsModel} from '../../models/news.model';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel = new UserModel();
  userIsAdmin = false;
  news: NewsModel[] = [];

  addNewsForm: FormGroup;
  addBtnPressed = false;

  changeNewsForm: FormGroup;
  changeBtnPressed = false;

  constructor(
    private formBuilder: FormBuilder,
    private userState: UserStateService,
    private  newsServise: NewsUpdateService,
    private router: Router) {

    setTimeout(() => {
      this.user = this.userState.getUser();
      this.newsServise.getListNews()
        .subscribe((data) => {
          this.news = data;
        });
    }, 200);
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.user.userName === '') {
        this.router.navigate(['']);
      }

      if (this.user.category === 'Администратор') {
        this.userIsAdmin = true;
      }
    }, 300);

    this.addNewsForm = this.formBuilder.group({
      data: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      news: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

    this.changeNewsForm = this.formBuilder.group({
      data: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      news: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  // Add news

  addBtnPress(): void {
    this.addBtnPressed = true;
    if (this.addNewsForm.invalid === false) {
      this.addNews();
    }
    this.updateInfo();
  }

  addNews(): void {
    console.log(this.addNewsForm.value);

    this.newsServise.addNews(this.addNewsForm.value)
      .subscribe(() => {
        console.log('news was added');
      });
  }

  // Change news

  changeBtnPress(data): void {
    this.changeBtnPressed = true;
    console.log(this.changeNewsForm.invalid);
    if (this.changeNewsForm.invalid === false) {
      this.changeNew(data);
    }
    this.updateInfo();
  }

  changeNew(data): void {
    console.log(data);
    console.log(this.changeNewsForm.value);
    let newObj: Object = {
      "_id": data._id,
      "data": this.changeNewsForm.value["data"],
      "title": this.changeNewsForm.value["title"],
      "news": this.changeNewsForm.value["news"]
    };

    this.newsServise.updateNews(newObj)
      .subscribe(() => {
        console.log("updated success");
      });
  }

  // Delete news

  deleteNew(data): void {
    this.newsServise.deleteNews(data._id).subscribe((deleted) => {
        console.log(deleted);
        console.log('deleted ', data);
      }
    );
    this.updateInfo();
  }

  // Update info
  updateInfo(): void {
    setTimeout(() => {
      this.user = this.userState.getUser();
      this.newsServise.getListNews()
        .subscribe((data) => {
          this.news = data;
        });
    }, 200);
  }

}
