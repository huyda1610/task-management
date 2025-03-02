import { SubTaskDto } from "./output.model";

export type GetTasksInputDto = {
  status: string;
  searchKey: string;
  fetch: number; //Take how many rows
  page: number; // Skip how many rows
};

export type CreateTasksInputDto = {
  title: string;
  description: string;
  assignedTo: string;
  endDate: string;
  subTask: SubTaskDto[];
};

export type EditTasksInputDto = {
  title?: string;
  description?: string;
  assignedTo?: string;
  endDate?: string;
  subTask?: SubTaskDto[];
  status?: number;
};
