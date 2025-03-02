import AntButton from "@components/Antd/Button";
import { ShareIcon } from "@components/Svg";
import { SubTaskDto } from "@services/tasks/models/output.model";
import React from "react";
import EditDrawer from "./Drawer";

type PropsType = {
  subTask: SubTaskDto;
};

const EditButton: React.FC<PropsType> = ({ subTask }) => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  return (
    <>
      <AntButton
        type="text"
        shape="circle"
        tooltip={{ title: "Chỉnh sửa" }}
        onClick={() => setOpenDrawer((prevState) => !prevState)}
      >
        <ShareIcon.SolarPen className="!text-primary" width={22} height={22} />
      </AntButton>

      <EditDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} subTask={subTask} />
    </>
  );
};

export default EditButton;
