import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  project: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.project = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })
  }

  onSubmit() {
    console.log(this.project.value)
  }

  // forbiddenNams(control: FormControl) : Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if(control.value === 'Test') {
  //         resolve({'projectNameInvalid': true});
  //       } else {
  //         resolve (null)
  //       }
  //     },1500);
  //     return promise
  //   })
  // }
}
