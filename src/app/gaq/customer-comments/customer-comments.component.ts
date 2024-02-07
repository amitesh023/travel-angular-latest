import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-customer-comments',
  templateUrl: './customer-comments.component.html',
  styleUrl: './customer-comments.component.scss',
  encapsulation: ViewEncapsulation.None  // Disable encapsulation

})
export class CustomerCommentsComponent {

  dynamicSlides = [
    {
      id: 1,
      src: '../../../assets/images/pic-traveler.jpg',
      title: 'Purchased cost-effective travel insurance with COVID-19 coverage within minutes. Highly recommended.',
      name: 'Traveler',

    },
    {
      id: 2,
      src: '../../../assets/images/pic-traveler.jpg',
      title: 'Side 2',
      name: 'Happy Traveler',
    },
    
    {
      id: 5,
      src: '../../../assets/images/pic-traveler.jpg',
      title: 'Slide 3',
      name: 'Amitesh',

    }
  ]

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    nav: true,
    items: 1,
    // responsive: {
    //   0: {
    //   },
    // }
  }

}
