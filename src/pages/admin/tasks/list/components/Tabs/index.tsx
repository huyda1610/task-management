import { cn } from "@core/utils/cn";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";
import { Tabs, TabsProps } from "antd";
import React, { useEffect } from "react";
import TasksTable from "./Table";

const TasksTabs: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);
  const { tasksInfo } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(
      tasksSliceThunk.fetchTasksAsync({
        ...tasks.input,
        status: activeKey,
      }),
    );
  }, [dispatch, activeKey]);

  const items: TabsProps["items"] = [
    {
      key: "",
      label: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Tất cả</span>
          <div
            className={cn(
              "rounded-md bg-info-lighter px-[6px] py-[1px] transition ease-in",
              activeKey === "" && "bg-info",
            )}
          >
            <span className={cn("text-sm font-semibold text-info", activeKey === "" && "text-white")}>
              {tasksInfo.data.all}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: TaskStatusEnum.Todo.toString(),
      label: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Chưa thực hiện</span>
          <div
            className={cn(
              "bg-gray-lighter rounded-md px-[6px] py-[1px] transition ease-in",
              activeKey === TaskStatusEnum.Todo.toString() && "bg-gray",
            )}
          >
            <span
              className={cn(
                "text-gray text-sm font-semibold",
                activeKey === TaskStatusEnum.Todo.toString() && "text-white",
              )}
            >
              {tasksInfo.data.todo}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: TaskStatusEnum.InProgress.toString(),
      label: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Đang thực hiện</span>
          <div
            className={cn(
              "rounded-md bg-warning-lighter px-[6px] py-[1px] transition ease-in",
              activeKey === TaskStatusEnum.InProgress.toString() && "bg-warning",
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold text-warning",
                activeKey === TaskStatusEnum.InProgress.toString() && "text-white",
              )}
            >
              {tasksInfo.data.inprogress}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: TaskStatusEnum.Done.toString(),
      label: (
        <div className="flex items-center gap-2">
          <span className="font-semibold">Đã thực hiện</span>
          <div
            className={cn(
              "rounded-md bg-success-lighter px-[6px] py-[1px] transition ease-in",
              activeKey === TaskStatusEnum.Done.toString() && "bg-success",
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold text-success",
                activeKey === TaskStatusEnum.Done.toString() && "text-white",
              )}
            >
              {tasksInfo.data.done}
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Tabs
        tabBarExtraContent={{ left: <div className="w-5"></div> }}
        activeKey={activeKey}
        items={items}
        onChange={(key) => {
          setActiveKey(key);
        }}
      />

      <TasksTable />
    </>
  );
};

export default TasksTabs;
