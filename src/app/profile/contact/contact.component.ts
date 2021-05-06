import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  phone: boolean = false;
  model: any = {};

  constructor() {}
     

  ngOnInit() {

     }

toggle() {
    this.phone = true
  }

}
