export enum TaskStatusEnum {
  // Chưa thực hiện
  Todo = 1,
  // Đang thực hiện
  InProgress = 2,
  //Đã hoàn thành
  Done = 3,
}

export const TaskStatusEnumOptions = [
  {
    label: "Chưa thực hiện",
    value: TaskStatusEnum.Todo,
  },
  {
    label: "Đang thực hiện",
    value: TaskStatusEnum.InProgress,
  },
  {
    label: "Đã hoàn thành",
    value: TaskStatusEnum.Done,
  },
];
