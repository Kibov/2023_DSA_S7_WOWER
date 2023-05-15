import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Project } from 'src/app/project.model';

@Component({
  selector: 'app-user-adding-projects',
  templateUrl: './user-adding-projects.component.html',
  styleUrls: ['./user-adding-projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserAddingProjectsComponent implements OnInit {
  @Input() project!: Project;
  constructor() {}
  ngOnInit(): void {}
  isProjectNameEmpty: string = '';
  isDescriptionEmpty: string = '';
  notVisible: boolean = false;
  @ViewChild('projNameInput') addNameRef!: ElementRef;
  @ViewChild('projDescriptionInput') addDescriptionRef!: ElementRef;
  @Output() projAdded = new EventEmitter<Project>();

  onClick() {
    if (this.notVisible === false) {
      this.notVisible = true;
    } else {
      this.notVisible = false;
    }
  }
  onAddProject() {
    const addName = this.addNameRef.nativeElement.value;
    const addDescription = this.addDescriptionRef.nativeElement.value;
    // const addDate = new Date();
    // const newProject = new Project(addName, addDescription, addDate);
    const newProject = new Project(addName, addDescription);

    console.log(newProject);

    this.projAdded.emit(newProject);
    this.notVisible = false;
  }
}
