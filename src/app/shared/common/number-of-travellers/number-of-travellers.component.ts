import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-of-travellers',
  templateUrl: './number-of-travellers.component.html',
  styleUrls: ['./number-of-travellers.component.scss'],
})
export class NumberOfTravellersComponent implements OnInit {

  showDOBComponent: boolean = false;  


  _today:Date = new Date();

// Get the current date
_date:number = this._today.getDate();

// Get the current month (months are zero-based, so January is 0)
_month:number = this._today.getMonth() + 1;

// Get the current year
_year:number = this._today.getFullYear();

// Format the date
 _dobValue:any = this._date + '/' + this._month  + '/' + this._year;
  // _dobValue: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  toggleDOBCal(){
    this.showDOBComponent = !this.showDOBComponent;
  }

  hideComponent(){
  console.log('test'); 
  //this.showComponent = false; 
  }

}
