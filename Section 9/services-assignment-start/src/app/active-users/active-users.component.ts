import { Component, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UserServiceService) {
  
  }

  onSetToInactive(id: number) {
    console.log(id)
    this.userService.onSetToInactive(id)
    
    // this.userSetToInactive.emit(id);
  }
}
