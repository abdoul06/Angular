import { Component, OnInit } from '@angular/core';

import { Course } from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
 selectedRow: number;
 searchResult: string;
  courses: Course[] = [
    new Course(
      'JavaScript',
      'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications.',
      '/assets/javascript.jpg', 
	  0),
    new Course('Angular',
      'A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations',
      '/assets/angular.jpg', 
	  1),
    new Course('HTML',
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
      '/assets/html.jpg',
	  2),
    new Course('React',
      `React can be used as a base in the development of single-page or mobile applications, as it's optimal only for its intended use of being the quickest method to fetch rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.`,
      '/assets/react.jpg',
	  3),
    new Course('Vue.js',
      'Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.',
      '/assets/vue.jpg',
	  4)
  ];

  constructor() {
  }
  getCourses() {
    return this.courses.slice();
  }
  setHoveredRow(index){
    this.selectedRow = index;
  };
  ngOnInit() {
    this.courses = this.getCourses();
  }
} 
  
 /*
  courses = [
    {
     name: 'JavaScript',
     description: 'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications.',
	 imagePath:'/assets/javascript.jpg',
	 0
	},
	{
    name: 'Angular',
    description: 'A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations',
	imagePath:'/assets/angular.jpg',
	1
	},
	{
	name: 'HTML',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web',
	imagePath:'/assets/html.jpg',
	2
	},
	{
	name: 'React',
    description: `React can be used as a base in the development of single-page or mobile applications, as it's optimal only for its intended use of being the quickest method to fetch rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.`,
	imagePath:'/assets/react.jpg',
	3
	},
	{
	name: 'Vue.js',
    description: 'Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.',
	imagePath:'/assets/vue.jpg', 
	4
	}
  ];
  */

 

