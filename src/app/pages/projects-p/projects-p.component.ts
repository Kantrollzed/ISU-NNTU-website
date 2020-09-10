import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-p',
  templateUrl: './projects-p.component.html',
  styleUrls: ['./projects-p.component.css']
})
export class ProjectsPComponent implements OnInit {

  constructor() { }
  public items = [
    {
      name1: 'Верификация пользователя на мобильном устройстве',
      text: 'Обеспечение безовасности устройства на основе биометрических данных',
      img: 'assets/startup-students/verify.png',
      href: ''
    },
    {
      name1: 'Система распознавания жестов',
      text: 'Эффективное распознавание жестов на основе нейросетевых технологий',
      img: 'assets/startup-students/fingers.png',
      href: ''
    },
    {
      name1: 'Система распознавания эмоций',
      text: 'Эффективное распознавание эмоций с использованием технологий нейронный сетей',
      img: 'assets/startup-students/face.png',
      href: ''
    },
    {
      name1: 'Интеллектуальный анализ изображений',
      text: 'Анализ изображений, полученных методом микроскопии',
      img: 'assets/startup-students/micro.jpg',
      href: ''
    },
    {
      name1: 'Умный склад',
      text: 'Идентификация аномалий (открытие крышки коробки или падение коробки)',
      img: 'assets/startup-students/sklad.jpeg',
      href: 'http://miriteam.com/solution4'
    },
    {
      name1: 'Система кругового обзора',
      text: 'Повышение качества формирования панорамного изображения за счет учета структуры сцены и пространственного расположения камер',
      img: 'assets/startup-students/camera.png',
      href: 'http://miriteam.com/solution6'
    },
    {
      name1: 'Умный город',
      text: 'Обнаружение повторного появления людей в поле зрения камеры для разных видеофрагментов',
      img: 'assets/startup-students/cars.png',
      href: 'http://miriteam.com/solution2'
    },

    ];
  ngOnInit(): void {
  }

}
