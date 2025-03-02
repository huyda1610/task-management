import { cn } from "@core/utils/cn";
import { SpinProps, Table, TableProps } from "antd";
import { AntEmpty } from "../Empty";
import AntPagination from "../Pagination";
import TableSpin from "./Spin";

type PaginationType = {
  page: number;
  fetch: number;
  totalCount?: number;
  onChange: (page: number, fetch: number) => void;
};

type AntTableProps = TableProps<any> & {
  pagination?: PaginationType;
  headerNoRounded?: boolean;
};

function AntTable({ pagination, headerNoRounded, ...props }: AntTableProps) {
  return (
    <>
      <Table
        {...props}
        rowKey={props?.rowKey ?? "id"}
        className={cn(
          "antd-custom-table",
          headerNoRounded && "antd-table-no-border",
          props?.dataSource?.length === 0 && "antd-custom-table-empty",
          props?.className,
        )}
        scroll={{ x: "max-content", ...props.scroll }}
        indentSize={20}
        pagination={false}
        loading={{
          indicator: <TableSpin />,
          spinning: (props.loading as SpinProps["spinning"]) ?? false,
        }}
        locale={{
          emptyText: <AntEmpty.Table />,
        }}
      />

      {pagination && (
        <AntPagination
          onChange={pagination?.onChange}
          total={pagination?.totalCount}
          className="m-2 flex justify-end"
          current={pagination?.page}
          pageSize={pagination?.fetch}
        />
      )}
    </>
  );
}

export default AntTable;
