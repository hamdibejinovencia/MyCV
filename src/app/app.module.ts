
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CompetencesComponent } from './competences/competences.component';
import { FormationsEtCertificationsComponent } from './formations-et-certifications/formations-et-certifications.component';
import { ExperienceComponent } from './experience/experience.component';
import { CourseComponent } from './course/course.component';
import { EmailComponent } from './email/email.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule, DatePipe } from '@angular/common';

 
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { Splash1Component } from './splash1/splash1.component';
import { Splash2Component } from './splash2/splash2.component';
import { IntroComponent } from './intro/intro.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    CompetencesComponent,
    FormationsEtCertificationsComponent,
    ExperienceComponent,
    CourseComponent,
    EmailComponent,
    HomeComponent,
    Splash1Component,
    Splash2Component,
    IntroComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule
  ],
  exports:
  [
    MatProgressSpinnerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
