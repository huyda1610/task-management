import AntButton from "@components/Antd/Button";
import { ShareIcon } from "@components/Svg";
import { showNotificationError, showNotificationSuccess } from "@core/utils/message";
import useModalConfirm from "@hooks/useModalConfirm";
import { tasksService } from "@services/tasks/tasks.service";
import { useAppDispatch, useAppSelector } from "@stores/hook";
import { tasksSliceThunk } from "@stores/tasks-slice";

type PropsType = {
  id: string;
};

const DeleteButton = ({ id }: PropsType) => {
  const modalConfirm = useModalConfirm();
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);

  const deleteTask = async () => {
    try {
      await tasksService.deleteTaskById(id);
      showNotificationSuccess("Xoá công việc thành công");

      dispatch(tasksSliceThunk.fetchTasksAsync(tasks.input));
      dispatch(tasksSliceThunk.fetchTasksInfoAsync());
    } catch (error) {
      showNotificationError("Xoá công việc thất bại");
    }
  };

  const handleDelete = () => {
    modalConfirm.confirm({
      onOk: () => {
        // Call API to delete task
        deleteTask();
      },
    });
  };
  return (
    <AntButton
      tooltip={{ title: "Xoá công việc" }}
      shape="circle"
      type="text"
      danger
      icon={<ShareIcon.SolarTrashBinTrash />}
      onClick={handleDelete}
    />
  );
};

export default DeleteButton;
