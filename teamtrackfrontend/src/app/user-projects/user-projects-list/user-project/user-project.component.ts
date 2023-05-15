import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectInterface } from 'src/app/interfaces/project-interface';
import { Project } from 'src/app/project.model';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css'],
})
export class UserProjectComponent implements OnInit {
  @Input() project!: ProjectInterface;
  isSelected: boolean = false;
  @Output() projectSelected = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSelected() {
    if (this.isSelected === false) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
    this.projectSelected.emit();
  }

  goToMore() {
    this.router.navigateByUrl('/issues');
  }
}
