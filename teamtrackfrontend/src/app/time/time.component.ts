import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimeService } from '../services/time/time.service';
import {
  TimeTable,
  TimeTablePost,
  TimeTableUpdate,
} from '../interfaces/timetable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueDataService } from '../services/issue/issue-data.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  @ViewChild('dateStart') dateStart!: ElementRef;
  @ViewChild('dateEnd') dateEnd!: ElementRef;
  @ViewChild('timeStart') timeStart!: ElementRef;
  @ViewChild('timeEnd') timeEnd!: ElementRef;
  timeTable!: TimeTable[];
  isLogTimeVisible!: boolean;
  timeToLog!: TimeTablePost;
  currentIssueId!: number;

  constructor(private time: TimeService, private issue: IssueDataService) {}

  ngOnInit(): void {
    this.isLogTimeVisible = false;
    this.currentIssueId = this.issue.issueId;

    this.time.getAllForIssue().subscribe((data: TimeTable[]) => {
      this.timeTable = data;
    });
  }

  ngAfterViewChecked(): void {
    if (this.currentIssueId != this.issue.issueId) {
      this.currentIssueId = this.issue.issueId;
      this.time.getAllForIssue().subscribe((data: TimeTable[]) => {
        this.timeTable = data;
      });
    }
  }

  showLogTime(): void {
    this.isLogTimeVisible = !this.isLogTimeVisible;
  }

  logTime(): void {
    const timeToSave: TimeTableUpdate = {
      user_name: '',
      issue_name: '',
      startedat:
        this.dateStart.nativeElement.value +
        ' ' +
        this.timeStart.nativeElement.value +
        ':000',
      finishedat:
        this.dateEnd.nativeElement.value +
        ' ' +
        this.timeEnd.nativeElement.value +
        ':000',
    };
    this.time.postTime(timeToSave).subscribe((data) => {
      this.isLogTimeVisible = false;
      this.time.getAllForIssue().subscribe(
        (data: TimeTable[]) => {
          this.timeTable = [];
          this.timeTable = data;
        },
        (error) => {
          this.timeTable = [];
        }
      );
    });
  }
}
