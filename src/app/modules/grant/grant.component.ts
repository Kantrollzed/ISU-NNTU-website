import { Component, OnInit } from '@angular/core';

function ngOnInit() {
  return undefined;
}

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    }

  data = [
    {
      years: '26.04 2019',
      title: 'Медицина',
      tema: '«Распознавание\n' +
        '                        кристаллических структур плазмы крови» и «Определение деформации эритроцитов в\n' +
        '                        сдвиговом потоке», «Анализ процесса агрегации тромбоцитов»',
      img: 'assets/medicine.png',
      href: ''
    },
    {
      years: '2019-2020',
      title: 'Образование',
      tema: 'Проект по повышению качества образования студентов в рамках Open-source задач с\n' +
        '                        использованием OpenVINO и по работе с актуальными аппаратными решениями Intel в\n' +
        '                        области компьютерного зрения',
      img: 'assets/education.jpg',
      href: ''
    },
    {
      years: '2019',
      title: 'Транспорт',
      tema: 'Программа развития опорного ВУЗа, Стратегический проект 4. Региональный научно-\n' +
        '                        образовательный центр транспортного машиностроения.',
      img: 'assets/transport.jpg',
      href: ''
    },
  ];
}
