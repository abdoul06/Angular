import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  user = {
    username: '',
    email: ''
  };
  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.signupForm.reset();
  }
}
