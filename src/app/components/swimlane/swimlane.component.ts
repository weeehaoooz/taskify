import { Component, computed, inject, input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ITask } from '../task-card/task.interface';
import { TaskCardComponent } from '../task-card/task-card.component';
import { ISwimlane } from './swimlane.interface';
import { TitleCasePipe } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'tsk-swimlane',
  imports: [
    TaskCardComponent,
    TitleCasePipe,
    DragDropModule
  ],
  templateUrl: './swimlane.component.html',
  styleUrl: './swimlane.component.scss'
})
export class SwimlaneComponent {
  private taskService = inject(TasksService);

  swimlane = input<ISwimlane>();
  connectedTo = input<string[]>([]);

  critera = computed(() => this.swimlane()?.criteria);
  tasks = computed(() => {
    const tasks = this.taskService.tasks();
    const criteria = this.swimlane()?.criteria
    return tasks.filter(task => task?.status === criteria);
  });

  drop(event: CdkDragDrop<ITask[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tasks(), event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        this.tasks(),
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
