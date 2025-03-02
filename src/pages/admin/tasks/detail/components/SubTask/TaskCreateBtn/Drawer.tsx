import AntButton from "@components/Antd/Button";
import AntDatePicker from "@components/Antd/DatePicker";
import AntForm from "@components/Antd/Form";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntInput from "@components/Antd/Input";
import { ShareIcon } from "@components/Svg";
import { rule } from "@core/utils/form/rules";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { useAppSelector } from "@stores/hook";
import { Drawer, Form, FormProps } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useEditContact } from "../../../hooks/useEditTask";

type PropsType = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateDrawer: React.FC<PropsType> = ({ openDrawer, setOpenDrawer }) => {
  const [form] = Form.useForm();
  const { task } = useAppSelector((state) => state.tasks);
  const { isLoading, editContact } = useEditContact({
    onSuccess: () => {
      handleClose();
    },
  });
  const handleClose = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    editContact({
      subTask: [
        ...(task?.data?.subTask ?? []),
        {
          id: crypto.randomUUID(),
          status: TaskStatusEnum.Todo,
          endDate: values?.endDate,
          title: values?.title,
        },
      ],
    });
  };

  return (
    <Drawer
      title="Tạo công việc"
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
            icon={<ShareIcon.SolarAddCircle className="mt-1" />}
            loading={isLoading}
          >
            Tạo
          </AntButton>
        </div>
      }
    >
      <AntForm form={form} onFinish={onFinish} className="flex flex-col gap-x-6">
        <AntFormItem className="sm:col-span-2" label="Tên công việc" name="title" rules={[rule.required()]}>
          <AntInput />
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

export default CreateDrawer;
