import AntButton from "@components/Antd/Button";
import AntCard from "@components/Antd/Card";
import AntForm from "@components/Antd/Form";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntSelect from "@components/Antd/Select";
import ShareRenderIf from "@components/RenderIf";
import { ShareIcon } from "@components/Svg";
import { rule } from "@core/utils/form/rules";
import { get } from "@core/utils/get";
import { userData } from "@services/tasks/data/user";
import { useAppSelector } from "@stores/hook";
import { Avatar, Divider, Form, FormProps } from "antd";
import React, { useEffect } from "react";
import { useEditContact } from "../hooks/useEditTask";

type TaskDetailAssignedInfoProps = { isInitLoading: boolean };

const TaskDetailAssignedInfo: React.FC<TaskDetailAssignedInfoProps> = ({ isInitLoading }) => {
  const [isCanEdit, setIsCanEdit] = React.useState<boolean>(false);
  const { task } = useAppSelector((state) => state.tasks);

  const [form] = Form.useForm();

  useEffect(() => {
    if (task.data)
      form.setFieldsValue({
        assignedTo: task.data.assignedTo?.id,
      });
  }, [task.data, form]);

  const handleToggleEdit = () => setIsCanEdit((prevState) => !prevState);
  const { isLoading, editContact } = useEditContact({ onSuccess: () => handleToggleEdit() });

  const onFinish: FormProps["onFinish"] = (values) => {
    editContact(values);
  };

  return (
    <AntCard
      title="Thông tin người thực hiện"
      skeletonLoading={{
        loading: isInitLoading,
        height: 300,
      }}
      loading={task.isLoading}
      extra={
        !isCanEdit && (
          <AntButton type="text" shape="circle" tooltip={{ title: "Chỉnh sửa" }} onClick={handleToggleEdit}>
            <ShareIcon.SolarPen className="!text-primary" />
          </AntButton>
        )
      }
    >
      <div className="flex items-start gap-3">
        <Avatar className={"bg-primary align-middle font-bold"} size={44}>
          {get.getAvatarTitle(task.data?.assignedTo?.name ?? "")}
        </Avatar>

        <div className="flex flex-col gap-0.5">
          <strong>{task.data?.assignedTo?.name}</strong>
          <span>Email: {task.data?.assignedTo?.email}</span>
        </div>
      </div>

      <ShareRenderIf ifTrue={isCanEdit}>
        <Divider />

        <AntForm form={form} onFinish={onFinish} className="mt-6">
          <AntFormItem label="Người thực hiện" name="assignedTo" rules={[rule.required()]}>
            <AntSelect options={userData.map((item) => ({ value: item.id, label: item.email }))} showSearch />
          </AntFormItem>
        </AntForm>

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
      </ShareRenderIf>
    </AntCard>
  );
};

export default TaskDetailAssignedInfo;
