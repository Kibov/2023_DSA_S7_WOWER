import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Comment } from '../../../comment.model';
@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserCommentsComponent implements OnInit {
  @Input()
  comment!: Comment;
  isSelected:boolean = false;
  @Output() commentSelected = new EventEmitter<void>();
  constructor(){}
  ngOnInit(): void {

  }
  onSelected(){
    if(this.isSelected === false)
    {this.isSelected = true}
    else
    {this.isSelected = false}
    this.commentSelected.emit();
  }
}
