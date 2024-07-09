import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  objArray: Array<any> = [
    { id: 1, name: 'Ram', sub: 'Math' },
    { id: 2, name: 'Sham', sub: 'Science' },
    { id: 3, name: 'Karan', sub: 'SST' },
    { id: 4, name: 'Bheem', sub: 'English' },
    { id: 5, name: 'Drona', sub: 'Hindi' },
  ];
  isActive: boolean = false;
  btnStepVal: string = '';
  btnClick(value: string) {
    this.btnStepVal = value;
  }
  usersListNav: Array<any>;
  constructor(private usrSvc: UserService) {
    this.usersListNav = usrSvc.userList;
  }
  addItem(): void {
    this.objArray.push({ id: 6, name: 'gg', sub: 'wp' });
  }
  removeItem(idx: number): void {
    this.objArray.splice(idx, 1);
  }
}
