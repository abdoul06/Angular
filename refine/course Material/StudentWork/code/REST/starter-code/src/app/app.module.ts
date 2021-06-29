import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';

//For InMemory testing


@NgModule({
      imports: [
            BrowserModule,
            HttpClientModule,
            ReactiveFormsModule
      ],
      declarations: [
            AppComponent,
            BookComponent
      ],
      providers: [],
      bootstrap: [
            AppComponent
      ]
})
export class AppModule { }
