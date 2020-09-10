import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent implements OnInit {

  constructor() { }

  discipline = [
    {
      title: 'Методы и средства защиты информации',
      href: '',
    },
    {
      title: 'Объектно-ориентированное программирование',
      href: '',
    },
    {
      title: 'Теоретико-числовые основы криптологии',
      href: '',
    },
    {
      title: 'Операционные системы',
      href: '',
    },
    {
      title: 'Технология программирования',
      href: '',
    },
    {
      title: 'Web-технологии',
    },
    {
      title: 'Надежность и отказоустойчивость информационных систем',
      href: '',
    },
    {
      title: 'Теория статистических решений и обработки экспериментальных данных',
      href: '',
    },
    {
      title: 'Иностранный язык делового общения',
      href: '',
    },
  ];

  ngOnInit(): void {
  }

}
