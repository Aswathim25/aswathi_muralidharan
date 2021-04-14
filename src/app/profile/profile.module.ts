import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    NgxHorizontalTimelineModule,
    ToastrModule.forRoot(
      {  
        timeOut: 2000, 
        enableHtml: true,
        preventDuplicates: true,
        positionClass:'top-right',  
        closeButton: true,  
      }
    )
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
  ]
})
export class ProfileModule { }
