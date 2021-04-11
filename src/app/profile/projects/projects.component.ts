import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayGif(){
    window.open('/assets/images/project_2_1.gif','_blank')
  }

  openVideo() {
    window.open('https://youtu.be/bY0fga_lJTo','_blank');
  }

}
