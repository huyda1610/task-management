import AntButton from "@components/Antd/Button";
import { ShareIcon } from "@components/Svg";
import { useAppSelector } from "@stores/hook";
import React from "react";
import CreateDrawer from "./Drawer";

const CreateTaskButton: React.FC = () => {
  const { task } = useAppSelector((state) => state.tasks);
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  return (
    <>
      <AntButton
        type="primary"
        icon={<ShareIcon.SolarAddCircle className="mt-1.5" />}
        disabled={task.data?.subTask?.length === 10}
        onClick={() => setOpenDrawer((prevState) => !prevState)}
      >
        Tạo công việc
      </AntButton>

      <CreateDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default CreateTaskButton;
