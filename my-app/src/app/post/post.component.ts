import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  postDataOnEMit: string = 'data from post (child) component when emitted';
  @Input() fromParentData!: FacebookProfileData;
  @Output() eventEmitterMsg = new EventEmitter<string>();
  sendDataToParentByEmit() {
    console.log('CLiCKKCKSDDS');
    this.eventEmitterMsg.emit(this.postDataOnEMit);
  }
}
