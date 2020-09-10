import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-students-less',
  templateUrl: './startup-students-less.component.html',
  styleUrls: ['./startup-students-less.component.css']
})
export class StartupStudentsLessComponent implements OnInit {

  constructor() { }

  data = [
    {
      title: 'Верификация пользователя на мобильном устройстве',
      description: 'Обеспечение безовасности устройства на основе биометрических данных',
      img: 'assets/startup-students/verify.png',
      href: ''
    },
    {
      title: 'Система распознавания жестов',
      description: 'Эффективное распознавание жестов на основе нейросетевых технологий',
      img: 'assets/startup-students/fingers.png',
      href: ''
    },
    {
      title: 'Система распознавания эмоций',
      description: 'Эффективное распознавание эмоций с использованием сверточных нейронный сетей',
      img: 'assets/startup-students/face.png',
      href: ''
    }
  ];

  ngOnInit(): void {
  }

}
