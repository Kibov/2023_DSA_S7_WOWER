import { Component, Input } from '@angular/core';
import { Comment } from '../../comment.model';
@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css'],
})
export class CommentsDetailsComponent {
  @Input() comment!: Comment;
}
