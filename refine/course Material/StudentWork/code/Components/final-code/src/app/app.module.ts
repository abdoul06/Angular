import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseStartComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
