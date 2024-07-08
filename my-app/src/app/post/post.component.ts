import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FacebookProfileData } from '../models/facebook-profile-data';
import { SummaryPipe } from '../pipes/summary.pipe';
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
  imports: [FormsModule, SummaryPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor() {}
  title: string = 'This is title for posts!';
  summaryText: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
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
