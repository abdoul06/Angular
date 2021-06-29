import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

searchResult: string;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  onNewCourse() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
