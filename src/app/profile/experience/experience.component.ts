import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-horizontal-timeline';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  
  items : TimelineItem[] = [];
  tenth: boolean = true;
  twelth: boolean = false;
  college: boolean = false;
  intern: boolean = false;
  job: boolean = false;
  title: String = "Secondary";

  ngOnInit() {
  
  }

  description(str: String) {
    console.log("Description : ",str)
    this.title = str
    if(str == "tenth") {
      this.tenth=true
      this.twelth=false
      this.college=false
      this.intern=false
      this.job=false
    }
    else if(str == "twelth") {

      this.tenth=false
      this.twelth=true
      this.college=false
      this.intern=false
      this.job=false
    }
    else if(str == "college") {
      this.tenth=false
      this.twelth=false
      this.college=true
      this.intern=false
      this.job=false
    }
    else if(str == "intern") {
      this.tenth=false
      this.twelth=false
      this.college=false
      this.intern=true
      this.job=false
    }
    else{
      this.tenth=false
      this.twelth=false
      this.college=false
      this.intern=false
      this.job=true
    }
  
  }
  
// 
}
function fun_tenth() {
  console.log("Called")
  this.tenth = false;
}
