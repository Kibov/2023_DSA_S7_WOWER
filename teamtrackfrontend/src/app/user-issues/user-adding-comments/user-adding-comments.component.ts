import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Comment } from 'src/app/comment.model';
import { Issue } from 'src/app/interfaces/issue';
@Component({
  selector: 'app-user-adding-comments',
  templateUrl: './user-adding-comments.component.html',
  styleUrls: ['./user-adding-comments.component.css'],
})
export class UserAddingCommentsComponent implements OnInit {
  @Input() comment!: Issue;
  constructor() {}
  isUserNameEmpty: string = '';
  isTopicEmpty: string = '';
  isContentEmpty: string = '';
  selectedOption: string = '';
  notVisible: boolean = false;
  @ViewChild('userNameInput') addNameRef!: ElementRef;
  @ViewChild('topicInput') addTopicRef!: ElementRef;
  @ViewChild('selectedPrio') addPrioRef!: ElementRef;
  @ViewChild('contentInput') addContentRef!: ElementRef;
  @Output() comAdded = new EventEmitter<Issue>();
  ngOnInit(): void {}
  onClick() {
    if (this.notVisible === false) {
      this.notVisible = true;
    } else {
      this.notVisible = false;
    }
  }
  onAddIssue() {
    // const addName = this.addNameRef.nativeElement.value;
    // const addTopic = this.addTopicRef.nativeElement.value;
    // const addPrio = this.addPrioRef.nativeElement.value;
    // const addContent = this.addContentRef.nativeElement.value;
    // const newCom = new Comment(addName, addTopic, addPrio, addContent);
    // this.comAdded.emit(newCom);
    // this.notVisible = false;
  }
}
