import { FormControl } from "@angular/forms";
import { promise, promise } from "protractor";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidProjectName(control: FormControl): {[s: string]: boolean} {
        if(control.value === 'Test') {
            return{'InvalidProjectName': true}
        }
        return null;
    }

    static asyncInvalidProjectName(control: FormControl): promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'test'){
                    resolve({'InvalidProjectName': true})
                } else {
                    resolve(null)
                }
            },2000)

        })
    return promise; 
    }
}