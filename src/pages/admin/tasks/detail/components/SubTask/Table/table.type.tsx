import { renderTaskStatusTag } from "@enums/tasks/TaskStatusEnum.render";
import { SubTaskDto } from "@services/tasks/models/output.model";
import { ColumnsType } from "antd/lib/table";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export const columns = (): ColumnsType<SubTaskDto> => {
  const columns: ColumnsType<SubTaskDto> = [
    {
      title: "STT",
      dataIndex: "id",
      width: 70,
      key: "id",
      align: "center",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên công việc",
      width: 500,
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endDate",
      key: "endDate",
      render: (value: string) => value?.toDateFormat(),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value: number) => renderTaskStatusTag(value),
    },
    {
      title: "",
      dataIndex: "code",
      align: "center",
      width: 70,
      key: "code",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <EditButton subTask={record} />

          <DeleteButton id={record.id} />
        </div>
      ),
    },
  ];

  return columns;
};
