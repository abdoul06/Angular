import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';
  firstName = "Your Name";         
  birthDate : Date = new Date(1980, 6, 31);         

  now : Date = new Date();         
}
