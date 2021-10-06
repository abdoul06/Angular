import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpform: NgForm
  subscriptions = ['Basic', 'Advanced', 'Pro']
  selectedSubscr = 'Basic'
  user = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false; 

  onSubmit() {
    this.submitted = true; 
    this.user.email = this.signUpform.value.email;
    this.user.subscription = this.signUpform.value.subscription; 
    this.user.password = this.signUpform.value.password;
    this.signUpform.reset();
    console.log(this.signUpform)
  }
}
