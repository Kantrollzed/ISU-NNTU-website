import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-leave',
  templateUrl: './people-leave.component.html',
  styleUrls: ['./people-leave.component.css']
})
export class PeopleLeaveComponent implements OnInit {

  constructor() { }

  data = [
    {
      fullName: "Иван Иванович1",
      year: "2019г",
      description: "Понравилось круто, модно, весело, usefull, кафедра 2ой дом, Zый преподаватель особенно мозг прокачал...",
      img: "https://www.blackpantera.ru/upload/medialibrary/f7f/Imya-Trofim-sudba-i-kharakter.jpg"
    },
    {
      fullName: "Иван Иванович2",
      year: "2019г",
      description: "Понравилось круто, модно, весело, usefull, кафедра 2ой дом, Zый преподаватель особенно мозг прокачал...",
      img: "https://www.blackpantera.ru/upload/medialibrary/f7f/Imya-Trofim-sudba-i-kharakter.jpg"
    },
    {
      fullName: "Иван Иванович3",
      year: "2019г",
      description: "Понравилось круто, модно, весело, usefull, кафедра 2ой дом, Zый преподаватель особенно мозг прокачал...",
      img: "https://www.blackpantera.ru/upload/medialibrary/f7f/Imya-Trofim-sudba-i-kharakter.jpg"
    },
    {
      fullName: "Иван Иванович4",
      year: "2019г",
      description: "Понравилось круто, модно, весело, usefull, кафедра 2ой дом, Zый преподаватель особенно мозг прокачал...",
      img: "https://www.blackpantera.ru/upload/medialibrary/f7f/Imya-Trofim-sudba-i-kharakter.jpg"
    },
    {
      fullName: "Иван Иванович5",
      year: "2019г",
      description: "Понравилось круто, модно, весело, usefull, кафедра 2ой дом, Zый преподаватель особенно мозг прокачал...",
      img: "https://www.blackpantera.ru/upload/medialibrary/f7f/Imya-Trofim-sudba-i-kharakter.jpg"
    },
  ];

  ngOnInit(): void {
  }

}
