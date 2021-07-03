import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService: UserServiceService) {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }
}
