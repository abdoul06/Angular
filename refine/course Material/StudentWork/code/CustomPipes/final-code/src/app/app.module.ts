import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { TruncatePipe } from './truncate.pipe';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseListComponent,
    CourseStartComponent,
    CourseItemComponent,
    TruncatePipe,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
