import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-education',
  templateUrl: './additional-education.component.html',
  styleUrls: ['./additional-education.component.css']
})
export class AdditionalEducationComponent implements OnInit {

  constructor() { }
  data = [
    {
      id: '1',
      title: 'cоздание мобильных приложений под ОС Android',
      img: 'assets/1.png',
      href: ''
    },
    {
      id: '2',
      title: 'информационная безопасность и защита информации',
      img: 'assets/2.png',
      href: ''
    },
    {
      id: '3',
      title: 'язык программирования Java. Синтаксическое ядро',
      img: 'assets/3.png',
      href: ''
    },
    {
      id: '4',
      title: 'создание мобильных приложений под ОС Android',
      img: 'assets/1.png',
      href: ''
    },
    {
      id: '5',
      title: 'информационная безопасность и защита информации',
      img: 'assets/2.png',
      href: ''
    },
    {
      id: '6',
      title: 'язык программирования Java. Синтаксическое ядро',
      img: 'assets/3.png',
      href: ''
    },
    {
      id: '7',
      title: 'создание мобильных приложений под ОС Android',
      img: 'assets/1.png',
      href: ''
    },
    {
      id: '8',
      title: 'информационная безопасность и защита информации',
      img: 'assets/2.png',
      href: ''
    },
    {
      id: '9',
      title: 'язык программирования Java. Синтаксическое ядро',
      img: 'assets/3.png',
      href: ''
    },
  ];

  classComponent = 'Education'; // you can choose: "Education", "Innovation"

  ngOnInit(): void {

  }

}
