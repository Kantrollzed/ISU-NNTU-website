import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldsstudy',
  templateUrl: './fieldsstudy.component.html',
  styleUrls: ['./fieldsstudy.component.css']
})
export class FieldsstudyComponent implements OnInit {

  constructor() { }
  public data = ['09.03.01  - «Информатика и вычислительная техника» по профилю «Автоматизированные системы обработки информации и управления»; ' + '\n' +
  '09.03.02  - «Информационные системы и технологии» по профилю «Безопасность информационных систем»', '09.04.01 (230100) - «Информатика и вычислительная техника» по магистерской программе «Автоматизированные системы обработки информации и управления»; \n' +
  '09.04.02 (230400) - «Информационные системы и технологии» по магистерской программе «Безопасность информационных систем»',];
  public info = this.data[0];
  public activeItem: string;

  ngOnInit(): void {

  }
  slider(num: string): void{
    this.info = num;
    this.activeItem = num;

  }

}
