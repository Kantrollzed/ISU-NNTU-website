import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }

  data = [
    {
      companyName: 'Абибас1"',
      img: 'assets/partners/harman.png',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/intel.png',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/orig.png',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/niis.jpg',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/NC-Logo.jpg',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/mera.png',
      description: 'Компания для тех, кто хочет изменить будущее телекоммуникационной индустрии'
    },
    {
      companyName: 'Абибас1',
      img: 'assets/partners/mailru.jpg',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас2',
      img: 'assets/partners/epam.jpg',
      description: 'The text about company, projects of this company with ISU'
    },
    {
      companyName: 'Абибас3',
      img: 'assets/partners/aquantia.png',
      description: 'The text about company, projects of this company with ISU'
    }
  ];

  ngOnInit(): void {
  }

}
