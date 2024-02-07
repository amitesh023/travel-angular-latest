import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-gaq',
  templateUrl: './gaq.component.html',
  styleUrls: ['./gaq.component.scss'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation

})
export class GaqComponent implements OnInit {
  showComponent: boolean = false;
  destinationSearchBoxTxt: string = '';
  // selected: { startDate: dayjs.Dayjs, endDate: dayjs.Dayjs, };
  constructor() {
    // this.selected = {
    //   startDate: dayjs().format('YYYY-MM-DD'), // You can initialize it with the current date or any other default value
    //   endDate: dayjs().format('YYYY-MM-DD'),
    // };

  }

  @ViewChild('multiSelectSearch') multiSelectSearchInput: ElementRef | undefined;


  value = 'Clear me';
  options = [
    { value: 'World Wide including US & Canada', label: 'World Wide including US & Canada', icon: '/assets/images/flag-usa-canada.png' },
    { value: 'World Wide Excluding US & Canada', label: 'World Wide Excluding US & Canada', icon: '/assets/images/flag-international-blue.png' },
    { value: 'Schengen', label: 'Schengen', icon: '/assets/images/flag-schengen.png' },
    { value: 'GCC', label: 'GCC', icon: '/assets/images/flag-gcc.png' },
    { value: 'Albania', label: 'Albania', icon: '/assets/images/flag-albania.png' },
  ];

  selectedOptions: string[] = [];

  onInputChange() {
    if (this.multiSelectSearchInput) {
      console.log(this.multiSelectSearchInput.nativeElement.value);
    }
  }
  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  hideComponent() {
    this.showComponent = false;
  }

  ngOnInit(): void {
  }
}
