import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {NewsUpdateService} from '../../services/news-update.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  constructor(
    private newsServise: NewsUpdateService
  ) {
    this.newsServise.getListNews()
      .subscribe(data => {
        this.news = data;
        this.pageSlice = this.news.slice(0, 10);
      });
  }

  news = [];

  public pageSlice = this.news.slice(0, 10);

  ngOnInit(): void {

  }


  onPangeChange(event: PageEvent): void{
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.news.length){
      endIndex = this.news.length;
    }
    this.pageSlice = this.news.slice(startIndex, endIndex);
    scroll(0, 0);
  }
}
