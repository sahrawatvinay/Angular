import { Component, Input, OnInit } from '@angular/core';
import { FacebookProfileData } from '../models/facebook-profile-data';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor() {}
  title: string = 'This is title for posts!';
  postChildData: string = 'this is child data from Post';
  @Input() fromParentData!: FacebookProfileData;
}
