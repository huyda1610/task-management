import { ReactNode } from "react";

type AntBreadcrumbItem = {
  href?: string;
  title: ReactNode;
  children?: AntBreadcrumbItem[];
};

type AntBreadcrumbProps = {
  separator?: ReactNode;
  items: AntBreadcrumbItem[];
};

export type { AntBreadcrumbItem, AntBreadcrumbProps };
