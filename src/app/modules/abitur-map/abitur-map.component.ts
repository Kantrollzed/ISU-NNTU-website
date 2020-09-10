import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abitur-map',
  templateUrl: './abitur-map.component.html',
  styleUrls: ['./abitur-map.component.css']
})
export class AbiturMapComponent implements OnInit {

  constructor() { }
  docs = [
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc1.png',
      description: 'Документ, удостоверяющий личность, гражданство'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc2.png',
      description: 'Документ об образовании (аттестат или диплом и/или копия)'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc3.png',
      description: 'Приписное свидетельство или военный билет для юношей (можно предоставить после зачисления)'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc4.png',
      description: 'Медицинская справка по форме 086-У для направлений, требующих предварительного медицинского осмотра (можно предоставить после зачисления)'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc5.png',
      description: 'Документы, подтверждающие право на льготы'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc6.png',
      description: 'Документы, подтверждающие индивидуальные достижения'
    },
    {
      img: 'https://www.nntu.ru/frontend/web/ngtu/files/abiturientam/2020/pictures/doc7.png',
      description: 'Результаты ЕГЭ (абитуриент сообщает в заявлении)'}
  ];

  adds = [
    {
      data: "22 АВГУСТА",
      description: "Зачисление абитуриентов, поступающих по квотам (целевики, льготники, олимпиадники)"
    },
    {
      data: "22 И 23 АВГУСТА",
      description: "Приём заявлений о согласии на зачисление первой волны"
    },
    {
      data: "24 АВГУСТА",
      description: "Зачисление абитуриентов не более 80% от конкурсных мест"
    },
    {
      data: "24 И 25 АВГУСТА",
      description: "Приём заявлений о согласии на зачисление второй волны"
    },
    {
      data: "26 АВГУСТА",
      description: "Зачисление абитуриентов до заполнения 100% конкурсных мест"
    }
    ];
  ngOnInit(): void {
  }

}
