"use client";
import { DEFAULT_PAGE_SIZE_OPTIONS } from "@core/constant";
import { Pagination, PaginationProps } from "antd";

function AntPagination(props: PaginationProps) {
  const config: PaginationProps = {
    ...props,
    total: props?.total !== undefined && props.total > 0 ? props.total : 0,
    current: props?.total !== undefined && props.total > 0 ? props.current : 1,
    showSizeChanger: true,
    pageSizeOptions: props.pageSizeOptions ?? DEFAULT_PAGE_SIZE_OPTIONS,
    showTotal(total: number, range: [number, number]) {
      return `${range[0]}-${range[1]} trong ${total}`;
    },
  };

  return <Pagination {...config} />;
}

export default AntPagination;
