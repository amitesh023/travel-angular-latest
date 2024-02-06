import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-travel-insurance-products',
  templateUrl: './travel-insurance-products.component.html',
  styleUrls: ['./travel-insurance-products.component.scss'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation
  

})
export class TravelInsuranceProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
