// import B2BLayout from "@layouts/index";
import AdminLayout from "@layouts/admin";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { TasksRouter } from "./tasks/index.router";

// const DashboardPage = lazy(() => import("@pages/admin/dashboard"));
// const TicketCreatePage = lazy(() => import("@pages/admin/ticket/create"));
const NotFoundPage = lazy(() => import("@pages/error/404"));
const ForbiddenPage = lazy(() => import("@pages/error/403"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        ...TasksRouter(),
        // ...TemplateRouter(),
        // ...SettingRouter(),
        // ...AiRouter(),
        // {
        //   path: "",
        //   element: <DashboardPage />,
        //   index: true,
        // },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "403",
      element: <ForbiddenPage />,
    },
  ],
  { basename: import.meta.env.VITE_BASENAME },
);
