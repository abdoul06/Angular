import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['Male', 'Female']
  signupForm: FormGroup; 
  forbiddenUserName = ['chris', 'anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup ({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    }); 
    
  }

  onSubmit() {
   console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  forbiddenNames(control: FormControl) : {[s: string]: boolean} {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; 
  }

  forbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbiddent': true});
        } else {
          resolve(null)
        }
      },1500);
    });
    return promise; 
  }
}
