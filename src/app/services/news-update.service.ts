import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {NewsModel} from '../models/news.model';

@Injectable({
  providedIn: 'root'
})

export class NewsUpdateService {

  private news: NewsModel[] = [new NewsModel('00', '00', '00')];

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
    this.getListNews()
      .subscribe((data) => {
        this.news = data;
      });
  }

  getListNews(): Observable<NewsModel[]> {
    return this.http.get<NewsModel[]>(`${this.ROOT_URL}/news`)
      .pipe(map(news => news ? news : null));
  }

  addNews(news: Object) {
    return this.http.post(`${this.ROOT_URL}/news`, news);
  }

  updateNews(news: Object) {
    return this.http.patch(`${this.ROOT_URL}/news`, news);
  }

  deleteNews(id) {
    return this.http.delete(`${this.ROOT_URL}/news/${id}`);
  }
}
