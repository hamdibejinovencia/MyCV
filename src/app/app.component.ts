import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hamdi BEJI - Team Leader';

experiences:any[];
  constructor(private service:ExperienceService) { 

this.experiences=service.experiences;

  }



}
