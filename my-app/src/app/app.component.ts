import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FacebookProfileData } from './models/facebook-profile-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title: string = 'my-app';
  appCompParentData: FacebookProfileData = {
    name: 'Vinay',
    details: {
      age: 28,
      dob: '1996-02-22',
    },
    singlePosts: [{ data: 'abc' }, { data: 'def' }],
  };

  @ViewChild(PostComponent) childPostCompData!: string;
  constructor() {
    console.log(this.childPostCompData);
  }
  ngAfterViewInit(): void {
    console.log(this.childPostCompData);
  }
  receiveMsgParent($event: string) {
    console.log($event);
  }
}
