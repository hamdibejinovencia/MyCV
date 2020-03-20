import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hamdi BEJI - Team Leader';

experiences:any[];
courses:any[];
  constructor(private experienceService:ExperienceService, private courseService:CourseService) { 

this.experiences=experienceService.experiences;
this.courses=courseService.courses;

  }



}
