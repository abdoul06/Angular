import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseStartComponent } from './courses/course-start/course-start.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent, children: [
    { path: '', component: CourseStartComponent },
    { path: ':id', component: CourseDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
