import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // hh : mm : ss

  h:string; // variable représentant l'heure actuelle
  m:string; // variable représentant la minute actuelle
  s:string; // variable représentant la seconde actuelle

  gc:any;
  private afficherHeure()
  {
    const heure = new Date(Date.now());
    this.h = this.formatTime(heure.getHours());
    this.m = this.formatTime(heure.getMinutes());
    this.s = this.formatTime(heure.getSeconds());
  }

  private mettreAJour()
  {
    setInterval( ()=>{
      this.afficherHeure();}
    ,1000)
  }

  ngOnInit()
  {
    this.afficherHeure();
    this.gc=this.mettreAJour();
  }

  ngOnDestroy()
  {
    clearInterval(this.gc);
  }

  private formatTime(n:any)
  {
    if(n<10) return '0'+n.toString();
    else return n.toString();
  }
  title = 'Hamdi BEJI - Team Leader';
  addClass1:any;
  addClass2:any;

experiences:any[];
courses:any[];
  constructor(private experienceService:ExperienceService, private courseService:CourseService) { 

this.experiences=experienceService.experiences;
this.courses=courseService.courses;

  }



}
