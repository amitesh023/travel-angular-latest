import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-have-question',
  templateUrl: './have-question.component.html',
  styleUrls: ['./have-question.component.scss'],
  encapsulation: ViewEncapsulation.None  // Disable encapsulation
})
export class HaveQuestionComponent implements OnInit {

  constructor() { }

  faqData = [
    {
      id: 1,
      name: 'Is travel insurance mandatory?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      id: 2,
      name: 'How much does travel insurance cost?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      id: 3,
      name: 'What does travel insurance cover?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      id: 4,
      name: 'Can I get travel insurance if I am pregnant?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."

    },
    {
      id: 5,
      name: 'What are pre-existing conditions for travel insurance?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      id: 6,
      name: 'Is holiday insurance the same as travel insurance?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      id: 7,
      name: 'Can travel insurance be extended?',
      details: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
  ];

  ngOnInit(): void {
  }

}
