export interface ITask {
    id: string;
    title: string;
    description: string | null;
    status: ITaskStatusEnum | null;
    priority: ITaskPriorityEnum | null;
    created_at: string ;
    updated_at: string | null;
    deleted_at: string | null;
}

export enum ITaskStatusEnum {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export enum ITaskPriorityEnum {
    MINIMAL = 'MINIMAL',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL'
}
