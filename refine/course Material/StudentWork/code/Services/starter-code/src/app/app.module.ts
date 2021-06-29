import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
    CourseStartComponent,
	ContactComponent,
    OrderByPipe,
    FilterPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
