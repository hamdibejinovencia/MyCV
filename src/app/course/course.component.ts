import * as $ from 'jquery' ;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  id:number;
  sub:any;
  course:Course;
  constructor(private route: ActivatedRoute, private service:CourseService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
     
      // In a real app: dispatch action to load the details here.
      this.course=this.service.courses[this.id-1];
      console.log(this.course);
  });
  }

}


