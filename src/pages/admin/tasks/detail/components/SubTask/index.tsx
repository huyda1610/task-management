import AntCard from "@components/Antd/Card";
import { useAppSelector } from "@stores/hook";
import React from "react";
import Table from "./Table";
import CreateTaskButton from "./TaskCreateBtn";

type TaskDetailSubTaskProps = { isInitLoading: boolean };
const TaskDetailSubTask: React.FC<TaskDetailSubTaskProps> = ({ isInitLoading }) => {
  const { task } = useAppSelector((state) => state.tasks);
  return (
    <AntCard
      title="Công việc cần thực hiện"
      bodyClassName="px-0"
      skeletonLoading={{ loading: isInitLoading, height: 300 }}
      loading={task.isLoading}
      extra={<CreateTaskButton />}
    >
      <Table />
    </AntCard>
  );
};

export default TaskDetailSubTask;
