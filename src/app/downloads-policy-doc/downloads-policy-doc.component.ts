import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads-policy-doc',
  templateUrl: './downloads-policy-doc.component.html',
  styleUrls: ['./downloads-policy-doc.component.scss']
})
export class DownloadsPolicyDocComponent implements OnInit {

  constructor() { }
  downLoadData = [
    {
      id: 1,
      name: 'Travel Smart World Cup Edition Policy Handbook (English)',
      link: 'www.google.com'
    },
    {
      id: 2,
      name: 'Travel Smart World Cup Edition Policy Handbook (Arabic)',
      link: 'www.google.com'
    },
    {
      id: 3,
      name: 'Travel Smart Policy Handbook (English)',
      link: 'www.google.com'
    },
    {
      id: 4,
      name: 'Travel Smart Policy Handbook (Arabic)',
      link: 'www.google.com'
    },
    {
      id: 5,
      name: 'Covid FAQ (English)',
      link: 'www.google.com'
    },
    {
      id: 6,
      name: 'Covid FAQ (Arabic)',
      link: 'www.google.com'
    },
  ]
  ngOnInit(): void {
  }

}
