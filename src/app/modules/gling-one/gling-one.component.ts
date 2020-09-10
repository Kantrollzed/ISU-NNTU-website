import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gling-one',
  templateUrl: './gling-one.component.html',
  styleUrls: ['./gling-one.component.css']
})
export class GlingOneComponent implements OnInit {

  constructor() { }

  public data = ['В программу кафедры входят как базовые курсы дискретной и непрерывной математики, ' +
  'так и курсы, посвященные современным технологиям разработки программ', 'Кафедра учит общим принципам, а не работе с конретной средой разработки или сервером БД. Это позволяет выпускникам кафедры быть востребоваными в разных компаниях по разработке ПО', 'Кафедра информатики и систем управления входит в состав Учебно-научного института радиоэлектроники и информационных технологий (ИРИТ)'];
  public info = this.data[0];
  public activeItem: string;
  ngOnInit(): void {

  }
  slider(num: string): void{
    this.info = num;
    this.activeItem = num;

  }

}
