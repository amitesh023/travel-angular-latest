import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
