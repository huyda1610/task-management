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
  const { task } = useAppSelector((state) => state.tasks);

  const deleteTask = async () => {
    try {
      await tasksService.editTask(task.data?.id ?? "", {
        subTask: task.data?.subTask.filter((item) => item.id !== id),
      });
      showNotificationSuccess("Xoá công việc thành công");

      dispatch(tasksSliceThunk.fetchTasksDetailAsync(task.data?.id ?? ""));
    } catch (error) {
      showNotificationError("Xoá công việc thất bại");
    }
  };

  const handleDelete = () => {
    modalConfirm.confirm({
      onOk: async () => {
        // Call API to delete task
        await deleteTask();
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
      disabled={task.data?.subTask.length === 1}
      className="mt-0.5"
    />
  );
};

export default DeleteButton;
