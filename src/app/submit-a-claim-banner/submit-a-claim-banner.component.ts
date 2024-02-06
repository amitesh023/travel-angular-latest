import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-submit-a-claim-banner',
  templateUrl: './submit-a-claim-banner.component.html',
  styleUrls: ['./submit-a-claim-banner.component.scss'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation

})
export class SubmitAClaimBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
