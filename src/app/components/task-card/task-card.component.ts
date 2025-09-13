import { Component, input } from '@angular/core';
import { ITask } from './task.interface';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'tsk-task-card',
  imports: [
    CommonModule,
    TitleCasePipe,
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  task = input<ITask>();
}
