import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-innovation',
  templateUrl: './additional-innovation.component.html',
  styleUrls: ['./additional-innovation.component.css']
})
export class AdditionalInnovationComponent implements OnInit {

  constructor() { }

  data = [
    {
      id: '1',
      title: 'обучение языкам программирования (C, C++, C#, Python)',
      img: 'assets/15.png',
      href: ''
    },
    {
      id: '2',
      title: 'консультирование по аппаратно-программному обеспечению',
      img: 'assets/35.png',
      href: ''
    },
    {
      id: '3',
      title: 'разработка ПО и консультирование в этой области, обработка данных',
      img: 'assets/31.png',
      href: ''
    },
    {
      id: '4',
      title: 'обучение языкам программирования (C, C++, C#, Python)',
      img: 'assets/15.png',
      href: ''
    },
    {
      id: '5',
      title: 'консультирование по аппаратно-программному обеспечению',
      img: 'assets/35.png',
      href: ''
    },
    {
      id: '6',
      title: 'разработка ПО и консультирование в этой области, обработка данных',
      img: 'assets/31.png',
      href: ''
    },
    {
      id: '7',
      title: 'обучение языкам программирования (C, C++, C#, Python)',
      img: 'assets/15.png',
      href: ''
    },
    {
      id: '8',
      title: 'консультирование по аппаратно-программному обеспечению',
      img: 'assets/35.png',
      href: ''
    },
    {
      id: '9',
      title: 'разработка ПО и консультирование в этой области, обработка данных',
      img: 'assets/31.png',
      href: ''
    },
  ];

  classComponent = 'Innovation'; // you can choose: "Education", "Innovation"

  ngOnInit(): void {
  }

}
