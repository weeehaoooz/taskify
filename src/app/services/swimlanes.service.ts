import { Injectable, signal } from '@angular/core';
import { ISwimlane } from '../components/swimlane/swimlane.interface';
import { ITaskStatusEnum } from '../components/task-card/task.interface';

@Injectable({
  providedIn: 'root'
})
export class SwimlanesService {
  
  swimlanes = signal<ISwimlane[]>([]);

  private sampleSwimlanes = [
    {
      id: "todo",
      title: 'To Do',
      criteria: ITaskStatusEnum.TODO
    },
    {
      id: "in-progress",
      title: 'In Progress',
      criteria: ITaskStatusEnum.IN_PROGRESS
    },
    {
      id: "done",
      title: 'Done',
      criteria: ITaskStatusEnum.DONE
    }
  ] as ISwimlane[];
  
  constructor() {
    this.swimlanes.set(this.sampleSwimlanes);
  }
}
