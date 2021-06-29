import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Abdillahi';
  allowUsername = false;

  onUpdateUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(event); 
  }

  constructor(){
    setTimeout(() => {
      this.allowUsername = true;
    }, 2000);
  }


}
