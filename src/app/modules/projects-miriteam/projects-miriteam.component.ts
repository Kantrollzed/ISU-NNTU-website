import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-miriteam',
  templateUrl: './projects-miriteam.component.html',
  styleUrls: ['./projects-miriteam.component.css']
})
export class ProjectsMiriteamComponent implements OnInit {

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
    }
  ];

  ngOnInit(): void {
  }

}
