import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studlife',
  templateUrl: './studlife.component.html',
  styleUrls: ['./studlife.component.css']
})
export class StudlifeComponent implements OnInit {

  constructor() { }

  organisation = [
    {
      title: 'Студенческий совет',
      href: 'https://www.nntu.ru/content/zhizn/studencheskii-sovet',
    },
    {
      title: 'Профком студентов',
      href: 'https://www.nntu.ru/content/universitet/profkom-studentov',
    },
    {
      title: 'Российский союз молодёжи',
      href: 'https://www.nntu.ru/content/zhizn/rossiiskii-soyuz-molodezhi',
    },
    {
      title: 'Студенческий клуб',
      description: 'Студия «Шоколад»' +
        'Студия КВН' +
        'Танцевально-спортивный центр\n' +
        'Школа радистов\n' +
        'Театр эстрадных миниатюр «ТЭМП»\n' +
        'Медиацентр «ПолиТеле»',
      href: 'https://www.nntu.ru/structure/view/podrazdeleniya/studencheskii-klub',
    },
    {
      title: 'Спорт в университете',
      href: 'https://www.nntu.ru/content/zhizn/sport-v-universitete',
    },
    {
      title: 'Студенческие отряды',
      description: 'Оперативный отряд «Дружина» \n' +
        'Педагогический отряд «Всплеск» \n' +
        'Педагогический отряд «Навсегда» \n' +
        'Отряд проводников «Альянс» \n Отряд проводников «Ассорти» \n' +
        'Строительный отряд «Сила тока» \n' +
        'Строительный отряд «Квант»\n' +
        'Строительный отряд «Эталон»\n' +
        'Энергетический отряд «Энергия»\n' +
        'Профильный отряд «Авангард»',
      href: 'https://www.nntu.ru/content/zhizn/studencheskie-otryady',
    },
    {
      title: 'СОЛ "Ждановец"',
      href: 'http://zhdanovec.nntu.ru/',
    },
    {
      title: 'Студенческий городок',
      href: 'https://www.nntu.ru/content/zhizn/studencheskii-gorodok',
    },
    {
      title: 'Учебные корпуса',
      href: 'https://www.nntu.ru/content/zhizn/uchebnye-korpusa',
    },
  ];

  ngOnInit(): void {
  }

}
