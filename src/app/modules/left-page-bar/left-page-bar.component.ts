import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-page-bar',
  templateUrl: './left-page-bar.component.html',
  styleUrls: ['./left-page-bar.component.css']
})
export class LeftPageBarComponent implements OnInit {

  constructor(private router: Router) { }

  name_menu = "АБИТУРИЕНТАМ:";

  data = [
    {
      title: "СТАРТАПЫ С УЧАСТИЕМ СТУДЕНТОВ",
      fragment: "startup-students-less"
    },
    {
      title: "ПРОЕКТНАЯ ДЕЯТЕЛЬНОСТЬ КОМАНДЫ \"MIRITEAM\"",
      fragment: "projects-miriteam"
    },
    {
      title: "ДОРОЖНАЯ КАРТА АБИТУРИЕНТА",
      fragment: "abitur-map"
    }
  ];

  private active_route = this.router.url;

  ngOnInit(): void {
  }

}
