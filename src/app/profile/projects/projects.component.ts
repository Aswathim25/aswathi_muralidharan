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
    window.open('assets/images/project_2_1.gif','_blank')
  }

  openVideo() {
    window.open('https://youtu.be/bY0fga_lJTo','_blank');
  }

  project4() {
    window.open('https://github.com/Aswathim25/aswathi_muralidharan.git','_blank')
  }

  project4_site() {
    window.open('https://aswathim25.github.io/aswathi_muralidharan','_blank')
  }

  project1() {
    window.open('https://github.com/Aswathim25/reinforcement_learning','_blank')
  }

  project2() {
    window.open('https://github.com/Aswathim25/marine_oil_spill','_blank')
  }
}
