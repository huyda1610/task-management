import { LeftOutlined } from "@ant-design/icons";
import AntButton from "@components/Antd/Button";
import { AntSkeleton } from "@components/Antd/Skeleton";
import { renderTaskStatusTag } from "@enums/tasks/TaskStatusEnum.render";
import useInitLoading from "@hooks/useInitLoading";
import useTitle from "@hooks/useTitle";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskDetailAssignedInfo from "./components/AssignedInfo";
import TaskDetailInfo from "./components/Info";
import TaskDetailSubTask from "./components/SubTask";

const TaskDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { taskId } = params;
  const navigate = useNavigate();

  const { task } = useAppSelector((state) => state.tasks);
  const initLoading = useInitLoading(task.isLoading);
  useTitle(`Công việc ${task.data?.code}`);

  useEffect(() => {
    dispatch(tasksSliceThunk.fetchTasksDetailAsync(taskId ?? ""));
  }, [taskId, dispatch]);

  const handleGoBack = () => navigate("/tasks");

  return (
    <article className="mx-auto w-full max-w-form-container">
      <div className="mb-10">
        {initLoading ? (
          <AntSkeleton.Node active loading={initLoading} height={40} />
        ) : (
          <div className="flex items-center gap-2">
            <AntButton type="text" shape="circle" icon={<LeftOutlined className="h-4 w-4" />} onClick={handleGoBack} />
            <h4 className="text-2xl font-bold text-black">Công việc {task.data?.code}</h4>
            {renderTaskStatusTag(task.data?.status)}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col gap-6">
        <div className="grid grid-cols-3 gap-6">
          <TaskDetailInfo isInitLoading={initLoading} />
          <TaskDetailAssignedInfo isInitLoading={initLoading} />
        </div>
        <TaskDetailSubTask isInitLoading={initLoading} />
      </div>
    </article>
  );
};

export default TaskDetailPage;
