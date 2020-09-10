import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-partners',
  templateUrl: './details-partners.component.html',
  styleUrls: ['./details-partners.component.css']
})
export class DetailsPartnersComponent implements OnInit {

  constructor() { }

  data = [
    {
      companyName: "Intel",
      img: "assets/partners/falcongaze.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/intel.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/росьтелетех.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/falcongaze.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/intel.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/росьтелетех.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/falcongaze.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/intel.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    },
    {
      companyName: "Intel",
      img: "assets/partners/росьтелетех.png",
      description: "The text about company, projects of this company with ISU The text about company, projects of this company with ISU"
    }
  ];

  ngOnInit(): void {
  }

}
