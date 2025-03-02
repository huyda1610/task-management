import AntButton from "@components/Antd/Button";
import AntCard from "@components/Antd/Card";
import AntDatePicker from "@components/Antd/DatePicker";
import AntForm from "@components/Antd/Form";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntInput from "@components/Antd/Input";
import AntTextArea from "@components/Antd/TextArea";
import { ShareIcon } from "@components/Svg";
import { rule } from "@core/utils/form/rules";
import { useAppSelector } from "@stores/hook";
import { Form, FormProps } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useEditContact } from "../hooks/useEditTask";

type TaskDetailInfoProps = { isInitLoading: boolean };

const TaskDetailInfo: React.FC<TaskDetailInfoProps> = ({ isInitLoading }) => {
  const [isCanEdit, setIsCanEdit] = React.useState<boolean>(false);
  const { task } = useAppSelector((state) => state.tasks);
  const [form] = Form.useForm();

  const handleToggleEdit = () => setIsCanEdit((prevState) => !prevState);
  const { isLoading, editContact } = useEditContact({ onSuccess: () => handleToggleEdit() });

  useEffect(() => {
    if (task.data)
      form.setFieldsValue({
        ...task.data,
        endDate: task.data.endDate ? dayjs(task.data.endDate) : null,
      });
  }, [task.data, form]);

  const onFinish: FormProps["onFinish"] = (values) => {
    editContact(values);
  };

  return (
    <AntCard
      title="Thông tin chung"
      loading={task.isLoading}
      skeletonLoading={{
        loading: isInitLoading,
        height: 300,
      }}
      className="col-span-2"
      extra={
        !isCanEdit && (
          <AntButton type="text" shape="circle" tooltip={{ title: "Chỉnh sửa" }} onClick={handleToggleEdit}>
            <ShareIcon.SolarPen className="!text-primary" />
          </AntButton>
        )
      }
    >
      <AntForm form={form} onFinish={onFinish} className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        <AntFormItem
          text={{
            value: task.data?.title,
            isShow: !isCanEdit,
          }}
          className="sm:col-span-2"
          label="Tên công việc"
          name="title"
          rules={[rule.required()]}
        >
          <AntInput />
        </AntFormItem>
        <AntFormItem
          text={{
            value: task.data?.description,
            isShow: !isCanEdit,
          }}
          className="sm:col-span-2"
          label="Ghi chú"
          name="description"
          rules={[rule.required()]}
        >
          <AntTextArea />
        </AntFormItem>
        <AntFormItem
          text={{
            value: task.data?.createDate?.toDateFormat(),
            isShow: true,
          }}
          label="Ngày bắt đầu"
          rules={[rule.required()]}
        >
          <AntDatePicker minDate={dayjs()} />
        </AntFormItem>
        <AntFormItem
          text={{
            value: task.data?.endDate?.toDateFormat(),
            isShow: !isCanEdit,
          }}
          label="Ngày kết thúc"
          name="endDate"
          rules={[rule.required()]}
        >
          <AntDatePicker minDate={dayjs(task.data?.createDate)} allowClear={false} />
        </AntFormItem>
      </AntForm>

      {isCanEdit && (
        <div className="flex justify-end gap-2">
          <AntButton onClick={handleToggleEdit} type="outline" disabled={isLoading}>
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
      )}
    </AntCard>
  );
};

export default TaskDetailInfo;
