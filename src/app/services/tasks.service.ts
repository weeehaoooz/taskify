import { Injectable, signal } from '@angular/core';
import { ITask, ITaskPriorityEnum, ITaskStatusEnum } from '../components/task-card/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = signal<ITask[]>([]);

  constructor() {
    const sampleTasks = [
      {
        id: "1",
        title: 'Task 1',
        description: 'Description 1',
        status: ITaskStatusEnum.TODO,
        priority: ITaskPriorityEnum.LOW,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      },
      {
        id: "2",
        title: 'Task 2',
        description: 'Description 2',
        status: ITaskStatusEnum.IN_PROGRESS,
        priority: ITaskPriorityEnum.MEDIUM,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      },
      {
        id: "3",
        title: 'Task 3',
        description: 'Description 3',
        status: ITaskStatusEnum.DONE,
        priority: ITaskPriorityEnum.HIGH,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      },
      {
        id: "4",
        title: 'Task 4',
        description: 'Description 4',
        status: ITaskStatusEnum.TODO,
        priority: ITaskPriorityEnum.LOW,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      },
      {
        id: "5",
        title: 'Task 5',
        description: 'Description 5',
        status: ITaskStatusEnum.IN_PROGRESS,
        priority: ITaskPriorityEnum.MEDIUM,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      },
      {
        id: "6",
        title: 'Task 6',
        description: 'Description 6',
        status: ITaskStatusEnum.TODO,
        priority: ITaskPriorityEnum.HIGH,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null
      }
    ] as ITask[];
    this.tasks.set(sampleTasks);
  }  
}
