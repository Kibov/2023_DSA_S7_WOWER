import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Comment } from '../../../comment.model';
import { Issue } from 'src/app/interfaces/issue';
@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserCommentsComponent implements OnInit {
  @Input() comment!: Issue;

  @Output() commentSelected = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}
  onSelected() {
    this.commentSelected.emit();
  }
}
