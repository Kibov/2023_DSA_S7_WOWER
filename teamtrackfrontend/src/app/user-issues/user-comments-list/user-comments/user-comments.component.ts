import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
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
