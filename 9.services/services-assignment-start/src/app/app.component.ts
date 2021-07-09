import { Component } from '@angular/core';
import { CouterService } from './couter.service';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService, CouterService]
})
export class AppComponent {
  
}
