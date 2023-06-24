import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommentsPost } from 'src/app/interfaces/comments';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  @ViewChild('commentData') commentData!: ElementRef;
  @Output() addingDone = new EventEmitter<boolean>();

  constructor(private comment: CommentService) {}

  ngOnInit(): void {
    this.addingDone.emit(false);
  }
  logComment(): void {
    console.log(this.commentData.nativeElement.value);
    const toSave: CommentsPost = {
      user_name: '',
      issue_name: '',
      body: this.commentData.nativeElement.value,
    };
    this.comment.postComment(toSave).subscribe((data) => {
      this.addingDone.emit(true);
    });
  }
}
