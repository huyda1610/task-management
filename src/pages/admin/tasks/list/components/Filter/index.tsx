import ShareSearch from "@components/Search";
import { ShareSearchItem } from "@components/Search/type";
import { DEFAULT_PAGE } from "@core/constant";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";

function TasksFilter() {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);

  // const [data, setData] = React.useState<any>();
  const searchItems: ShareSearchItem[] = [
    {
      key: "searchKey",
      title: "searchKey",
      type: "input",
      placeholder: "Tìm kiếm theo tên công việc",
      className: "sm:w-[500px] w-full",
    },
  ];

  return (
    <ShareSearch
      searchItems={searchItems}
      totalResult={tasks.data?.totalCount}
      onValuesChange={(allValues) => {
        dispatch(
          tasksSliceThunk.fetchTasksAsync({
            ...tasks.input,
            ...allValues,
            page: DEFAULT_PAGE,
          }),
        );
      }}
    />
  );
}

export default TasksFilter;
