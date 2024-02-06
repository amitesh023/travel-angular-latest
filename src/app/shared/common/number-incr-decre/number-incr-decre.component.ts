import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-incr-decre',
  templateUrl: './number-incr-decre.component.html',
  styleUrls: ['./number-incr-decre.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class NumberIncrDecreComponent implements OnInit {

  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = 20;
  _wrap: boolean = false;
  color: string = 'default';

  @Input() travellerType: string = '';
  @Input() ageRange: string = '';

  constructor() { }


  
  myFormGroup = new FormGroup({
    formField: new FormControl()
  });
  
  @Input('value')
  set inputValue(_value: number) {
    this._value = this.parseNumber(_value);
  }

  @Input()
  set step(_step: number) {
    this._step = this.parseNumber(_step);
  }

  @Input()
  set min(_min: number) {
    this._min = this.parseNumber(_min);
  }

  @Input()
  set max(_max: number) {
    this._max = this.parseNumber(_max);
  }

  @Input()
  set wrap(_wrap: boolean) {
    this._wrap = this.parseBoolean(_wrap);
  } 

  ngOnInit(): void {
  }
  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }

  incrementValue(step: number = 1): void {
    let inputValue = this._value + step;

    if (this._wrap) {
      inputValue = this.wrappedValue(inputValue);
    }

    this._value = inputValue;
  }

  private wrappedValue(inputValue:number): number {
    if (inputValue > this._max) {
      return this._min;
    }

    if (inputValue < this._min) {
      if (this._max === Infinity) {
        return this._min;
      }

      return this._max + inputValue;
    }

    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this._wrap && inputValue <= this._min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this._wrap && inputValue >= this._max;
  }


}
