import AntTable from "@components/Antd/Table";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";
import { columns } from "./table.type";

const TasksTable: React.FC = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  return (
    <AntTable
      headerNoRounded
      dataSource={tasks.data.items}
      loading={tasks.isLoading}
      columns={columns(tasks.input.page, tasks.input.fetch)}
      pagination={{
        page: tasks.input.page,
        fetch: tasks.input.fetch,
        totalCount: tasks.data.totalCount,
        onChange: (page: number, fetch: number) => {
          dispatch(
            tasksSliceThunk.fetchTasksAsync({
              ...tasks.input,
              page,
              fetch,
            }),
          );
        },
      }}
    />
  );
};

export default TasksTable;
