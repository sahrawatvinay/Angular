import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: Array<User> = [
    { id: 1, name: 'Vinay' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Dave' },
  ];
  addUser(data: any) {
    this.userList.push(data);
  }
  constructor() {}
}
