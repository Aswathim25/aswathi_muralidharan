import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectPopup, {
      width: '350px',
    });
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

@Component({
  selector: 'project-popup',
  templateUrl: 'project_popup.component.html',
})
export class ProjectPopup {

  constructor(
    public dialogRef: MatDialogRef<ProjectPopup>){}
    // @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
