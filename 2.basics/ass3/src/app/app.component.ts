import { Component } from '@angular/core';
import { retry } from 'rxjs-compat/operator/retry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordCreated = false; 
  passwords = []; 
  password = 1; 

  onCreatePassword() {
    this.passwordCreated = !this.passwordCreated; 
    this.passwords.push(this.password++)
    console.log(this.passwords)
  }

  getColor() {
    return this.passwords.length > 4 ? 'green' : '';
  }
}
