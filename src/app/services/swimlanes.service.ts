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
      id: "1",
      title: 'To Do',
      criteria: ITaskStatusEnum.TODO
    },
    {
      id: "2",
      title: 'In Progress',
      criteria: ITaskStatusEnum.IN_PROGRESS
    },
    {
      id: "3",
      title: 'Done',
      criteria: ITaskStatusEnum.DONE
    }
  ] as ISwimlane[];
  
  constructor() {
    this.swimlanes.set(this.sampleSwimlanes);
  }
}
