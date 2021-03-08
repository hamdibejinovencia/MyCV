import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { CourseService } from './course.service';
import { StringifyOptions } from 'querystring';
import { DatePipe } from '@angular/common';

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
  j:string; // variable représentant le jour 
  mm:string; // variable représentant le mois 
  y:string; // variable représentant l'année
  date:any;

  gc:any;
  private afficherHeure()
  {
    const heure = new Date(Date.now());
    this.h = this.formatTime(heure.getHours());
    this.m = this.formatTime(heure.getMinutes());
    this.s = this.formatTime(heure.getSeconds());
    this.date = new Date();
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
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
  constructor(private experienceService:ExperienceService, private courseService:CourseService,private datePipe: DatePipe) { 
    //this.datePipe = new DatePipe('fr-FR'); // Use your own locale

this.experiences=experienceService.experiences;
this.courses=courseService.courses;

  }



}
