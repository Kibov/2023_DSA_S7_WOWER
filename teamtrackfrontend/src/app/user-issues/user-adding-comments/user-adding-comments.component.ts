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
import { Issue, IssueToSave } from 'src/app/interfaces/issue';
import { IssueService } from 'src/app/services/issue/issue.service';
import { ProjectDataService } from 'src/app/services/project/project-data.service';
@Component({
  selector: 'app-user-adding-comments',
  templateUrl: './user-adding-comments.component.html',
  styleUrls: ['./user-adding-comments.component.css'],
})
export class UserAddingCommentsComponent implements OnInit {
  @Input() comment!: Issue;
  constructor(private projectData: ProjectDataService) {}
  isUserNameEmpty: string = '';
  isTopicEmpty: string = '';
  isContentEmpty: string = '';
  selectedOption: string = '';
  notVisible: boolean = false;
  @ViewChild('userNameInput') addNameRef!: ElementRef;
  @ViewChild('topicInput') addTopicRef!: ElementRef;
  @ViewChild('selectedPrio') addPrioRef!: ElementRef;
  @ViewChild('contentInput') addContentRef!: ElementRef;
  @Output() comAdded = new EventEmitter<IssueToSave>();
  ngOnInit(): void {}
  onClick() {
    if (this.notVisible === false) {
      this.notVisible = true;
    } else {
      this.notVisible = false;
    }
  }
  onAddIssue() {
    let newIssue: IssueToSave = {
      user_name: this.addNameRef.nativeElement.value,
      description: this.addContentRef.nativeElement.value,
      status: this.addPrioRef.nativeElement.value,
      name: this.addTopicRef.nativeElement.value,
      project_id: this.projectData.serviceId,
    };
    this.addNameRef.nativeElement.value = '';
    this.addTopicRef.nativeElement.value = '';
    this.addPrioRef.nativeElement.value = '';
    this.addContentRef.nativeElement.value = '';

    this.comAdded.emit(newIssue);
    this.notVisible = false;
  }
}
