import AntButton from "@components/Antd/Button";
import { ShareIcon } from "@components/Svg";
import { renderTaskStatusTag } from "@enums/tasks/TaskStatusEnum.render";
import { TaskOutputDto } from "@services/tasks/models/output.model";
import { ColumnsType } from "antd/lib/table";
import DeleteButton from "./DeleteButton";

export const columns = (): ColumnsType<TaskOutputDto> => {
  const columns: ColumnsType<TaskOutputDto> = [
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
        <div className="flex justify-center gap-2">
          <AntButton type="text" shape="circle" tooltip={{ title: "Chỉnh sửa" }}>
            <ShareIcon.SolarPen className="!text-primary" width={22} height={22} />
          </AntButton>

          <DeleteButton id={record.id} />
        </div>
      ),
    },
  ];

  return columns;
};
