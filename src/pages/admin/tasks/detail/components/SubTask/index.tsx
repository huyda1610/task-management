import AntButton from "@components/Antd/Button";
import AntCard from "@components/Antd/Card";
import { ShareIcon } from "@components/Svg";
import { useAppSelector } from "@stores/hook";
import React from "react";
import Table from "./Table";

type TaskDetailSubTaskProps = { isInitLoading: boolean };
const TaskDetailSubTask: React.FC<TaskDetailSubTaskProps> = ({ isInitLoading }) => {
  const { task } = useAppSelector((state) => state.tasks);
  return (
    <AntCard
      title="Công việc cần thực hiện"
      bodyClassName="px-0"
      skeletonLoading={{ loading: isInitLoading, height: 300 }}
      loading={task.isLoading}
      extra={
        <AntButton type="primary" icon={<ShareIcon.SolarAddCircle className="mt-1.5" />}>
          Tạo công việc
        </AntButton>
      }
    >
      <Table />
    </AntCard>
  );
};

export default TaskDetailSubTask;
