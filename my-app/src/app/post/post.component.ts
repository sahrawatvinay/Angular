import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FacebookProfileData } from '../models/facebook-profile-data';
type Form = {
  postTitle: string;
  postDescription: string;
  postImageUrl: string;
  postUrl: string;
  background: boolean;
};
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
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
  formData: Form = {
    postTitle: '',
    postDescription: '',
    postImageUrl: '',
    postUrl: '',
    background: false,
  };
  sendDataToParentByEmit() {
    console.log('CLiCKKCKSDDS');
    this.eventEmitterMsg.emit(this.postDataOnEMit);
  }
}
