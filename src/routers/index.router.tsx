// import B2BLayout from "@layouts/index";
import AdminLayout from "@layouts/admin";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { TasksRouter } from "./tasks/index.router";

const DashboardPage = lazy(() => import("@pages/admin/dashboard"));
const NotFoundPage = lazy(() => import("@pages/error/404"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        ...TasksRouter(),
        {
          path: "",
          element: <DashboardPage />,
          index: true,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  { basename: import.meta.env.VITE_BASENAME },
);
