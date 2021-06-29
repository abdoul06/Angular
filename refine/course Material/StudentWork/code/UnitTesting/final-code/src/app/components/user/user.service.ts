import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'userfname1',
              lname: 'userlname1'
          },
          {
              name: 'userfname2',
              lname: 'userlname2'
          }
      ];
  }
}
