import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent, ProjectPopup } from './projects/projects.component';
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';
import {MatDialogModule} from '@angular/material/dialog';  
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule, MatInputModule, MatAutocompleteModule, MatIconModule, MatCardModule, MatSliderModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    NgxHorizontalTimelineModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule, 
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule, 
    
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    TimelineComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectPopup
  ],
  entryComponents: [ProjectPopup],
  providers: []
})
export class ProfileModule { }
