import { lazy } from "react";

const TasksListPage = lazy(() => import("@pages/admin/tasks/list"));
const TasksCreatePage = lazy(() => import("@pages/admin/tasks/create"));
const TasksDetailPage = lazy(() => import("@pages/admin/tasks/detail"));

export const TasksRouter = () => {
  return [
    {
      path: "tasks",
      element: <TasksListPage />,
    },
    {
      path: "tasks/create",
      element: <TasksCreatePage />,
    },
    {
      path: "tasks/:taskId",
      element: <TasksDetailPage />,
    },
  ];
};
