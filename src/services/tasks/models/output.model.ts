import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";

export type UserDto = {
  id: string;
  name: string;
  email: string;
};

export type SubTaskDto = {
  id: string;
  title: string;
  status: TaskStatusEnum;
  endDate: string;
};

export type TaskOutputDto = {
  id: string;
  code: string;
  title: string;
  description: string;
  assignedTo: UserDto;
  status: TaskStatusEnum;
  createDate: string;
  endDate: string;
  subTask: SubTaskDto[];
};

export type TaskInfoDto = {
  all: number;
  todo: number;
  inprogress: number;
  done: number;
};
