import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';


	  
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
course = new Course('Angular',
      'A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations',
      '/assets/angular.jpg');
  constructor() { }

  ngOnInit() {
  }

}
