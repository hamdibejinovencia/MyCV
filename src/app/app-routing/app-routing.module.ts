import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import {  HomeComponent } from '../home/home.component';
import { CompetencesComponent } from '../competences/competences.component';
import { FormationsEtCertificationsComponent } from '../formations-et-certifications/formations-et-certifications.component';
import { ExperienceComponent } from '../experience/experience.component';
import { CourseComponent } from '../course/course.component';
import { EmailComponent } from '../email/email.component';
import { Splash1Component } from '../splash1/splash1.component';
import { Splash2Component } from '../splash2/splash2.component';
import { IntroComponent } from '../intro/intro.component';



const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
}, 
  {
      path: 'intro',
      component: IntroComponent,
  },
  {
    path:'accueil',
    component: HomeComponent
  },
  {
    path:'competences',
    component: CompetencesComponent
  },
  {
    path:'formations-et-certifications',
    component: FormationsEtCertificationsComponent
  },
  {
    path:'experiences',
    component:Splash1Component
  },
  {
    path:'experience/:id',
    component:ExperienceComponent
  },
  {
    path:'cours',
    component:Splash2Component
  },
  {
    path:'course/:id',
    component:CourseComponent
  },
  {
    path:'email',
    component:EmailComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }