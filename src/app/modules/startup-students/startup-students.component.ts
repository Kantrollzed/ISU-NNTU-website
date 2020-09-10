import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-startup-students',
  templateUrl: './startup-students.component.html',
  styleUrls: ['./startup-students.component.css']
})
export class StartupStudentsComponent implements OnInit {

  constructor() { }

  data = [
    {
      title: 'Умный склад',
      description: 'Идентификация аномалий (открытие крышки коробки или падение коробки)',
      img: 'assets/startup-students/sklad.jpeg',
      href: 'http://miriteam.com/solution4'
    },
    {
      title: 'Система кругового обзора',
      description: 'Повышение качества формирования панорамного изображения за счет учета структуры сцены и пространственного расположения камер',
      img: 'assets/startup-students/camera.png',
      href: 'http://miriteam.com/solution6'
    },
    {
      title: 'Умный город',
      description: 'Обнаружение повторного появления людей в поле зрения камеры для разных видеофрагментов',
      img: 'assets/startup-students/cars.png',
      href: 'http://miriteam.com/solution2'
    },
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
        description: 'Эффективное распознавание эмоций с использованием технологий нейронный сетей',
        img: 'assets/startup-students/face.png',
        href: ''
      }
    ];

  ngOnInit(): void {

  }

}
