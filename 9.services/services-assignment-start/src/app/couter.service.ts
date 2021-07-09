import { Injectable } from '@angular/core';

@Injectable()
export class CouterService {
  activetoInactiveCounter = 0;
  inactivetoActiveCounter = 0;


  incrementActiveToInactive() {
    this.activetoInactiveCounter++;
    console.log('active to Inactive: ' + this.activetoInactiveCounter)
  }

  incrementInactiveToActive() {
    this.inactivetoActiveCounter++;
    console.log('inactive to active: ' + this.inactivetoActiveCounter)
    
  }
}
