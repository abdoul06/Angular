import { Injectable } from '@angular/core';
import { CouterService } from './couter.service';

@Injectable()
export class UserServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
  constructor(private counterService: CouterService) { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive()
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive()
  }
}
