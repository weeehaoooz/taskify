import { ITask, ITaskStatusEnum } from "../task-card/task.interface";

export interface ISwimlane {
    id: string;
    title: string;
    criteria: ITaskStatusEnum;
    tasks?: ITask[];
}