import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetTasksInputDto } from "@services/tasks/models/input.model";
import { tasksService } from "@services/tasks/tasks.service";
import { initialState } from "./index.state";

const FORM_TASKS_NAME = "tasks";

// Region: Create Async Thunk
const fetchTasksAsync = createAsyncThunk(`${FORM_TASKS_NAME}/fetchTasksAsync`, async (params: GetTasksInputDto) => {
  const response = await tasksService.getTasks(params);

  return { ...response, input: params };
});

const fetchTasksInfoAsync = createAsyncThunk(`${FORM_TASKS_NAME}/fetchTasksInfoAsync`, async () => {
  const response = await tasksService.getTasksInfo();

  return { ...response };
});

const fetchTasksDetailAsync = createAsyncThunk(`${FORM_TASKS_NAME}/fetchTasksDetailAsync`, async (id: string) => {
  const response = await tasksService.getTaskById(id);

  return response;
});

export const tasksSlice = createSlice({
  name: FORM_TASKS_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.tasks.isLoading = true;
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.tasks.data = {
          totalCount: action.payload.totalCount,
          items: action.payload.items,
        };
        state.tasks.input = action.payload.input;
        state.tasks.isLoading = false;
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
        state.tasks.isLoading = false;
      });

    builder
      .addCase(fetchTasksInfoAsync.pending, (state) => {
        state.tasksInfo.isLoading = true;
      })
      .addCase(fetchTasksInfoAsync.fulfilled, (state, action) => {
        state.tasksInfo.data = action.payload;
        state.tasksInfo.isLoading = false;
      })
      .addCase(fetchTasksInfoAsync.rejected, (state) => {
        state.tasksInfo.isLoading = false;
      });

    builder
      .addCase(fetchTasksDetailAsync.pending, (state) => {
        state.task.isLoading = true;
      })
      .addCase(fetchTasksDetailAsync.fulfilled, (state, action) => {
        state.task.data = action.payload;
        state.task.isLoading = false;
      })
      .addCase(fetchTasksDetailAsync.rejected, (state) => {
        state.task.isLoading = false;
      });
  },
});

export default tasksSlice.reducer;

export const tasksSliceThunk = {
  fetchTasksAsync,
  fetchTasksInfoAsync,
  fetchTasksDetailAsync,
};
