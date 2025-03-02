import { DEFAULT_PAGE, DEFAULT_PAGE_FETCH } from "@core/constant";
import { ListResultDto } from "@services/base/models/ListResult.model";
import { ResponseData, ResponseDataWithInput } from "@services/base/models/Response.model";
import { tasksData } from "@services/tasks/data/tasks";
import { GetTasksInputDto } from "@services/tasks/models/input.model";
import { TaskInfoDto, TaskOutputDto } from "@services/tasks/models/output.model";

export declare type AccountsState = {
  tasks: ResponseDataWithInput<GetTasksInputDto, ListResultDto<TaskOutputDto>>;
  tasksInfo: ResponseData<TaskInfoDto>;
  task: ResponseData<TaskOutputDto>;
};

export const initialState: AccountsState = {
  tasks: {
    data: {
      items: tasksData,
      totalCount: tasksData.length,
    },
    input: {
      fetch: DEFAULT_PAGE_FETCH,
      page: DEFAULT_PAGE,
      searchKey: "",
      status: "",
    },
    isLoading: false,
  },
  tasksInfo: {
    data: {
      all: 0,
      done: 0,
      inprogress: 0,
      todo: 0,
    },
    isLoading: false,
  },
  task: {
    isLoading: false,
    data: {} as TaskOutputDto,
  },
};
