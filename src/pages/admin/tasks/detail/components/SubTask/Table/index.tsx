import AntTable from "@components/Antd/Table";
import { useAppSelector } from "@stores/hook";
import { columns } from "./table.type";

const Table: React.FC = () => {
  const { task } = useAppSelector((state) => state.tasks);

  return <AntTable headerNoRounded dataSource={task.data.subTask} columns={columns()} />;
};

export default Table;
