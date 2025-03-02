import { Breadcrumb } from "antd";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/es/breadcrumb/Breadcrumb";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AntBreadcrumbProps } from "./type";

function AntBreadcrumb({ separator, items }: AntBreadcrumbProps) {
  // Clone the items array to avoid modifying the original one
  const modifiedItems = [...items];

  // Check if there are items to modify
  if (modifiedItems.length > 0) {
    // Modify the title of the last item
    modifiedItems[modifiedItems.length - 1].title = (
      <span className="text-[#637381]">{items[items.length - 1].title}</span>
    );
  }

  const itemRender = (currentRoute: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>): ReactNode => {
    return typeof currentRoute.title === "string" && currentRoute.href ? (
      <Link to={currentRoute.href}>{currentRoute.title}</Link>
    ) : (
      currentRoute.title
    );
  };

  return (
    <Breadcrumb
      className="!text-[0.875rem] !text-black"
      separator={separator}
      items={modifiedItems}
      itemRender={itemRender}
    />
  );
}

export default AntBreadcrumb;
