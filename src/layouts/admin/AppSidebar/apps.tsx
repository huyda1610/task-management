import { ShareIcon } from "@components/Svg";

export type AppsType = {
  name: string;
  subItems: AppsItemType[];
};

export type AppsItemType = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

export const apps: AppsType[] = [
  {
    name: "Tổng quan",
    subItems: [
      {
        icon: <ShareIcon.SolarChart2 />,
        name: "Dashboard",
        path: "/",
      },
    ],
  },
  {
    name: "Quản lý",
    subItems: [
      {
        name: "Công việc",
        icon: <ShareIcon.SolarClipboardList />,
        subItems: [
          { name: "Danh sách công việc", path: "/tasks" },
          { name: "Tạo công việc", path: "/tasks/create" },
        ],
      },
    ],
  },
];
