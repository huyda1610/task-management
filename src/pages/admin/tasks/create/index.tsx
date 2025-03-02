import { AntBreadcrumbItem } from "@components/Antd/Breadcrumb/type";
import AntButton from "@components/Antd/Button";
import AntForm from "@components/Antd/Form";
import ShareHeader from "@components/PageHeader";
import { ShareIcon } from "@components/Svg";
import { showNotificationSuccess } from "@core/utils/message";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import useModalConfirm from "@hooks/useModalConfirm";
import { useMutation } from "@hooks/useMutation";
import { CreateTasksInputDto } from "@services/tasks/models/input.model";
import { tasksService } from "@services/tasks/tasks.service";
import { Form, FormProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import TasksCreateInfoForm from "./components/InfoForm";
import SubTasksForm from "./components/SubTasksForm";

const breadcrumbs: AntBreadcrumbItem[] = [
  { title: "Dashboard", href: "/" },
  { title: "Công việc", href: "/tasks" },
  { title: "Tạo công việc" },
];

const TasksCreatePage: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const modalConfirm = useModalConfirm();
  const { isLoading, mutation } = useMutation<string, CreateTasksInputDto>({
    mutationFn: (input) => {
      return tasksService.createTask(input);
    },
    onSuccess: (id) => {
      navigate(`/tasks/${id}`);
      showNotificationSuccess("Tạo công việc thành công!");
    },
  });

  const handleCancel = (): void => {
    modalConfirm.confirm({
      content: "Bạn có chắc chắn muốn huỷ tạo công việc?",
      onOk: () => {
        navigate("/tasks");
      },
    });
  };

  const onFinish: FormProps["onFinish"] = (values) => {
    mutation({ ...values });
  };

  return (
    <article className="mx-auto w-full max-w-form-container">
      <ShareHeader
        title="Tạo công việc"
        breadcrumb={{
          items: breadcrumbs,
        }}
      />

      <AntForm
        initialValues={{
          subTask: [
            {
              id: crypto.randomUUID(),
              title: "",
              status: TaskStatusEnum.Todo,
              endDate: "",
            },
          ],
        }}
        form={form}
        onFinish={onFinish}
        className="flex flex-col gap-6"
      >
        <TasksCreateInfoForm />
        <SubTasksForm form={form} />

        <div className="flex justify-end gap-2">
          <AntButton onClick={handleCancel} type="outline" size="large" disabled={isLoading}>
            Huỷ
          </AntButton>
          <AntButton
            onClick={form.submit}
            type="primary"
            size="large"
            icon={<ShareIcon.SolarAddCircle className="mt-1.5" />}
            loading={isLoading}
          >
            Tạo công việc
          </AntButton>
        </div>
      </AntForm>
    </article>
  );
};

export default TasksCreatePage;
