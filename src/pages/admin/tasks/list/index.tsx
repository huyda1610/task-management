import { AntBreadcrumbItem } from "@components/Antd/Breadcrumb/type";
import AntCard from "@components/Antd/Card";
import ShareHeader from "@components/PageHeader";
import useInitLoading from "@hooks/useInitLoading";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";
import { useEffect } from "react";
import TasksFilter from "./components/Filter";
import TasksTabs from "./components/Tabs";

const breadcrumbs: AntBreadcrumbItem[] = [
  { title: "Dashboard", href: "/" },
  { title: "Công việc", href: "/tasks" },
  { title: "Danh sách công việc" },
];

const TasksListPage: React.FC = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  const { tasksInfo } = useAppSelector((state) => state.tasks);
  const initLoading = useInitLoading(tasks.isLoading || tasksInfo.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(tasksSliceThunk.fetchTasksInfoAsync());
  }, [dispatch]);

  return (
    <>
      <ShareHeader
        title="Danh sách công việc"
        breadcrumb={{
          items: breadcrumbs,
        }}
      />

      <AntCard
        bodyClassName="flex flex-col p-0"
        skeletonLoading={{
          loading: initLoading,
          height: "table",
        }}
      >
        <div className="flex justify-between px-5 pt-4">
          <TasksFilter />
        </div>
        <TasksTabs />
      </AntCard>
    </>
  );
};

export default TasksListPage;
