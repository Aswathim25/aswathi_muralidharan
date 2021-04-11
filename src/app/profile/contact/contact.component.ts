import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { EmailService } from '../../email.service';
// import emailjs, { EmailJSResponseStatus } from 'emailjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  phone: boolean = false;
  model: any = {};

  constructor(private toastr: ToastrService) {}
     

  ngOnInit() {

     }

toggle() {
    this.phone = true
  }

}
