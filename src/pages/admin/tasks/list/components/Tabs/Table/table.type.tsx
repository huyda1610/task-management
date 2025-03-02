import { get } from "@core/utils/get";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { renderTaskStatusTag } from "@enums/tasks/TaskStatusEnum.render";
import { TaskOutputDto } from "@services/tasks/models/output.model";
import { Progress } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

export const columns = (page: number, fetch: number): ColumnsType<TaskOutputDto> => {
  const columns: ColumnsType<TaskOutputDto> = [
    {
      title: "STT",
      dataIndex: "id",
      width: 70,
      key: "id",
      align: "center",
      render: (_, __, index) => get.tableId(page, fetch, index),
    },
    {
      title: "Mã",
      dataIndex: "code",
      width: 120,
      key: "code",
      render: (value: string, record) => (
        <Link className="underline hover:text-black hover:underline" to={`/tasks/${record.id}`}>
          {value}
        </Link>
      ),
    },
    {
      title: "Tên công việc",
      width: 400,
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Người thực hiện",
      dataIndex: "assignedTo",
      key: "assignedTo",
      render: (_, record) => record.assignedTo.name,
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "createDate",
      key: "createDate",
      render: (value: string) => value?.toDateFormat(),
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endDate",
      key: "endDate",
      render: (value: string) => value?.toDateFormat(),
    },
    {
      title: "Công việc cần thực hiện",
      dataIndex: "subTask",
      key: "subTask",
      width: 230,
      render: (_, record) => {
        const successSubTask: number = record.subTask?.filter((task) => task.status === TaskStatusEnum.Done).length;
        return (
          <div>
            <span className="font-semibold">
              {successSubTask}/{record.subTask.length}
            </span>
            <Progress percent={(successSubTask * 100) / record.subTask.length} showInfo={false} />
          </div>
        );
      },
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
      render: (_, record) => <DeleteButton id={record.id} />,
    },
  ];

  return columns;
};
