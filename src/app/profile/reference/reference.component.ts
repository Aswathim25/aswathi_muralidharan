import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  achievement1() {
    window.open('assets/images/Achievement1.jpg', '_blank');
  }
  achievement2() {
    window.open('assets/images/Achievement2.jpg', '_blank');
  }
  
  achievement3() {
    window.open('assets/images/Achievement3.PNG', '_blank');
  }
  achievement4() {
    window.open('assets/images/Achievement4.jpg', '_blank');
  }
  
  certificate1() {
    window.open('assets/images/certificate_1.jpg', '_blank');
  }

  certificate2() {
    window.open('assets/images/certificate_2.jpg', '_blank');
  }

  certificate3() {
    window.open('assets/images/certificate_3.jpg', '_blank');
  }
}
