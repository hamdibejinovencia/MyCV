import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { InformationsPersonnellesComponent } from '../informations-personnelles/informations-personnelles.component';
import { CompetencesComponent } from '../competences/competences.component';
import { FormationsEtCertificationsComponent } from '../formations-et-certifications/formations-et-certifications.component';
import { ExperienceComponent } from '../experience/experience.component';



const routes: Routes = [

  {
      path: 'home',
      component: AppComponent,
  },
  {
    path:'informations-personnelles',
    component: InformationsPersonnellesComponent
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
    path:'experience/:id',
    component:ExperienceComponent
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