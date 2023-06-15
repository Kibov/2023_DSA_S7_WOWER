import { Component, Input } from '@angular/core';
import { Issue } from 'src/app/interfaces/issue';
@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css'],
})
export class CommentsDetailsComponent {
  @Input() comment!: Issue;
}
