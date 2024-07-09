import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: Array<any> = [
    { id: 1, name: 'Vinay' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Dave' },
  ];
  addUser(data: any) {
    this.userList.push(data);
  }
  constructor() {}
}
