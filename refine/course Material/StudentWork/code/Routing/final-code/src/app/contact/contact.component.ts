import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenUsernames = ['User', 'Superuser'];

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmails])
      }),
      'courses': new FormArray([])
    });
 
   
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddCourse() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('courses')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl) { 
  let email = control.value; 
  if (email && email.indexOf("@") != -1) { 
    let [_, domain] = email.split("@"); 
    if (domain == "test.com") { 
      
       return {'emailIsForbidden': true};
      
    }
	 return null; 
  }
 
}  
  
}
