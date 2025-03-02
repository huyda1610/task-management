import AntButton from "@components/Antd/Button";
import AntDatePicker from "@components/Antd/DatePicker";
import AntForm from "@components/Antd/Form";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntInput from "@components/Antd/Input";
import AntSelect from "@components/Antd/Select";
import { ShareIcon } from "@components/Svg";
import { rule } from "@core/utils/form/rules";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { renderTaskStatusTag } from "@enums/tasks/TaskStatusEnum.render";
import { useEditContact } from "@pages/admin/tasks/detail/hooks/useEditTask";
import { SubTaskDto } from "@services/tasks/models/output.model";
import { useAppSelector } from "@stores/hook";
import { Drawer, Form, FormProps } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";

type PropsType = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  subTask: SubTaskDto;
};

const EditDrawer: React.FC<PropsType> = ({ openDrawer, setOpenDrawer, subTask }) => {
  const [form] = Form.useForm();
  const { task } = useAppSelector((state) => state.tasks);
  const { isLoading, editContact } = useEditContact({
    onSuccess: () => {
      handleClose();
    },
  });

  useEffect(() => {
    form.setFieldsValue({
      title: subTask.title,
      endDate: subTask.endDate ? dayjs(subTask.endDate) : null,
      status: subTask.status,
    });
  }, [subTask.title, subTask.endDate, subTask.status, form, openDrawer]);
  const handleClose = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const getStatus = (input: SubTaskDto[]): TaskStatusEnum => {
    if (input.every((item) => item.status === TaskStatusEnum.Done)) {
      return TaskStatusEnum.Done;
    }
    if (input.some((item) => item.status === TaskStatusEnum.InProgress || item.status === TaskStatusEnum.Done)) {
      return TaskStatusEnum.InProgress;
    }
    return TaskStatusEnum.Todo;
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    const editSubTask: SubTaskDto[] = [...(task?.data?.subTask ?? [])].map((item) =>
      item.id === subTask.id ? { ...item, ...values } : item,
    );

    editContact({
      subTask: editSubTask,
      status: getStatus(editSubTask),
    });
  };

  return (
    <Drawer
      title="Cập nhật công việc"
      width={500}
      onClose={handleClose}
      open={openDrawer}
      closeIcon={null}
      destroyOnClose
      extra={
        <div className="flex items-center gap-2">
          <AntButton onClick={handleClose} type="outline" disabled={isLoading}>
            Huỷ
          </AntButton>
          <AntButton
            onClick={form.submit}
            type="primary"
            icon={<ShareIcon.SolarPenNewRound className="mt-1" />}
            loading={isLoading}
          >
            Cập nhật
          </AntButton>
        </div>
      }
    >
      <AntForm form={form} onFinish={onFinish} className="flex flex-col gap-x-6">
        <AntFormItem className="sm:col-span-2" label="Tên công việc" name="title" rules={[rule.required()]}>
          <AntInput />
        </AntFormItem>
        <AntFormItem label="Trạng thái" name="status" rules={[rule.required()]}>
          <AntSelect
            options={[
              {
                label: renderTaskStatusTag(TaskStatusEnum.Todo),
                value: TaskStatusEnum.Todo,
              },
              {
                label: renderTaskStatusTag(TaskStatusEnum.InProgress),
                value: TaskStatusEnum.InProgress,
              },
              {
                label: renderTaskStatusTag(TaskStatusEnum.Done),
                value: TaskStatusEnum.Done,
              },
            ]}
          />
        </AntFormItem>
        <AntFormItem label="Ngày kết thúc" name="endDate" rules={[rule.required()]}>
          <AntDatePicker
            minDate={task?.data?.createDate ? dayjs(task?.data?.createDate) : undefined}
            maxDate={task?.data?.endDate ? dayjs(task?.data?.endDate) : undefined}
          />
        </AntFormItem>
      </AntForm>
    </Drawer>
  );
};

export default EditDrawer;
