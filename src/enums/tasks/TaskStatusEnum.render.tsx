import AntTag from "@components/Antd/Tag";
import { TaskStatusEnum } from "./TaskStatusEnum";

export const renderTaskStatusTag = (status: TaskStatusEnum): React.ReactElement => {
  switch (status) {
    case TaskStatusEnum.Todo:
      return <AntTag color="gray">Chưa thực hiện</AntTag>;
    case TaskStatusEnum.InProgress:
      return <AntTag color="warning">Đang thực hiện</AntTag>;
    case TaskStatusEnum.Done:
      return <AntTag color="success">Đã thực hiện</AntTag>;
    default:
      return <></>;
  }
};
