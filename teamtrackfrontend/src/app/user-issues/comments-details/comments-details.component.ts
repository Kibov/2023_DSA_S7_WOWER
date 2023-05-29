import { Component, Input } from '@angular/core';
import { Comment } from '../../comment.model';
import { Issue } from 'src/app/interfaces/issue';
@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css'],
})
export class CommentsDetailsComponent {
  @Input() comment!: Issue;
}
