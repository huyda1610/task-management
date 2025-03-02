import { TASKS_KEY } from "@core/constant";
import { clientStorage } from "@core/utils/client-storage";
import { generate } from "@core/utils/generate";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { ListResultDto } from "@services/base/models/ListResult.model";
import dayjs from "dayjs";
import { tasksData } from "./data/tasks";
import { userData } from "./data/user";
import { CreateTasksInputDto, EditTasksInputDto, GetTasksInputDto } from "./models/input.model";
import { TaskInfoDto, TaskOutputDto } from "./models/output.model";

const checkClientData = (): TaskOutputDto[] => {
  if (!clientStorage.get(TASKS_KEY)) {
    clientStorage.set(TASKS_KEY, JSON.stringify(tasksData));
  }

  return JSON.parse(clientStorage.get(TASKS_KEY) || "[]");
};

async function getTasks(params: GetTasksInputDto): Promise<ListResultDto<TaskOutputDto>> {
  await generate.delay(500);

  const tasks = checkClientData();

  const filterTasks = tasks.filter((task) => {
    if (params.status) {
      return task.status === Number(params.status);
    }

    if (params.searchKey) {
      return (
        task.title.toLowerCase().includes(params.searchKey.toLowerCase()) ||
        task.code.toLowerCase().includes(params.searchKey.toLowerCase())
      );
    }

    return true;
  });

  return {
    totalCount: filterTasks.length,
    items: filterTasks.slice((params.page - 1) * params.fetch, params.page * params.fetch),
  };
}

async function getTasksInfo(): Promise<TaskInfoDto> {
  await generate.delay(500);

  const tasks = checkClientData();

  return {
    all: tasks.length,
    todo: tasks.filter((task) => task.status === TaskStatusEnum.Todo).length,
    inprogress: tasks.filter((task) => task.status === TaskStatusEnum.InProgress).length,
    done: tasks.filter((task) => task.status === TaskStatusEnum.Done).length,
  };
}

async function deleteTaskById(id: string): Promise<void> {
  await generate.delay(500);

  const tasks = checkClientData();

  const newTasks = tasks.filter((task) => task.id !== id);

  clientStorage.set(TASKS_KEY, JSON.stringify(newTasks));
}

async function createTask(body: CreateTasksInputDto): Promise<string> {
  await generate.delay(500);

  const tasks = checkClientData();
  const id: string = crypto.randomUUID();

  const newTasks = [
    {
      id: id,
      code: generate.code(),
      title: body.title,
      description: body.description,
      assignedTo: userData.find((user) => user.id === body.assignedTo),
      status: TaskStatusEnum.Todo,
      createDate: dayjs().toISOString(),
      endDate: dayjs(body.endDate).toISOString(),
      subTask: body.subTask,
    },
    ...tasks,
  ];

  clientStorage.set(TASKS_KEY, JSON.stringify(newTasks));

  return id;
}

async function getTaskById(id: string): Promise<TaskOutputDto> {
  await generate.delay(500);

  const tasks = checkClientData();

  return tasks.find((task) => task.id === id)!;
}

async function editTask(id: string, body: EditTasksInputDto): Promise<void> {
  await generate.delay(500);

  const tasks = checkClientData();

  const editTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        title: body?.title ?? task.title,
        description: body?.description ?? task.description,
        assignedTo: body?.assignedTo ? userData.find((user) => user.id === body.assignedTo) : task.assignedTo,
        endDate: body?.endDate ?? task.endDate,
        subTask: body?.subTask ?? task.subTask,
        status: body?.status ?? task.status,
      };
    }

    return task;
  });

  clientStorage.set(TASKS_KEY, JSON.stringify(editTasks));
}

export const tasksService = {
  getTasks,
  getTasksInfo,
  deleteTaskById,
  createTask,
  getTaskById,
  editTask,
};
