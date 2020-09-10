import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-p',
  templateUrl: './partners-p.component.html',
  styleUrls: ['./partners-p.component.css']
})
export class PartnersPComponent implements OnInit {

  constructor() { }

  data = [
    {
      companyName: 'Абибас1"',
      img: 'assets/partners/harman.png',
      description: 'Проектирование и разработка продукции, связанной с электроникой'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/intel.png',
      description: 'Разработка и производство электронных устройств и компьютерных компонентов'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/orig.png',
      description: 'Разработка высокотехнологичного программного обеспечения в сфере телерадиовещания и телекоммуникаций'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/mailru.jpg',
      description: 'Российская технологическая компания'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/epam.jpg',
      description: 'Ведущий мировой поставщик услуг по разработке ПО и цифровых платформ'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/aquantia.png',
      description: 'Разработка программного обеспечения в Нижнем НовгородеU'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/mera.png',
      description: 'Крупнейший российский поставщик услуг по разработке программного обеспечения'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/rfc.jpg',
      description: 'Российский федеральный ядерный центр – Всероссийский научно-исследовательский институт экспериментальной физики'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/fls.jpg',
      description: 'Проектирование, разработка, интеграция специализированных программных решений, обеспечивающих технологическое преимущество на глобальном рынке'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/NC-Logo.jpg',
      description: 'Компания для тех, кто хочет изменить будущее телекоммуникационной индустрии'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/niis.jpg',
      description: 'Динамично развивающийся научно-исследовательский институт радиоэлектронного профиля'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/st.jpg',
      description: 'Производитель программного обеспечения для мобильных устройств'
    },


  ];

  ngOnInit(): void {
  }

}
