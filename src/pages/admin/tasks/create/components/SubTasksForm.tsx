import AntButton from "@components/Antd/Button";
import AntCard from "@components/Antd/Card";
import AntDatePicker from "@components/Antd/DatePicker";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntInput from "@components/Antd/Input";
import { ShareIcon } from "@components/Svg";
import { rule } from "@core/utils/form/rules";
import { TaskStatusEnum } from "@enums/tasks/TaskStatusEnum";
import { FormInstance } from "antd";
import { Form } from "antd/lib";
import dayjs from "dayjs";
import React from "react";

type PropsType = {
  form: FormInstance;
};

const SubTasksForm: React.FC<PropsType> = ({ form }) => {
  const formWatch = Form.useWatch([], form);

  return (
    <Form.List name="subTask">
      {(fields, { add, remove }) => (
        <AntCard
          title="Công việc cần thực hiện"
          extra={
            <AntButton
              type="text"
              disabled={fields.length >= 10}
              onClick={() =>
                add({
                  id: crypto.randomUUID(),
                  title: "",
                  status: TaskStatusEnum.Todo,
                  endDate: "",
                })
              }
              icon={<ShareIcon.SolarAddCircle />}
              tooltip={{
                title: "Thêm công việc",
              }}
            ></AntButton>
          }
        >
          <article className="flex flex-col rounded-xl bg-gray-lighter p-4 pb-0">
            {/*Title*/}
            <section className="mb-2 flex w-full items-center gap-5 px-9">
              <div className="flex w-full gap-1">
                <strong>Công việc</strong>
                <span className="text-error">*</span>
              </div>
              <div className="flex w-full gap-1">
                <strong>Ngày kết thúc</strong>
                <span className="text-error">*</span>
              </div>
            </section>
            {/*Body*/}
            {fields.map((field, index) => (
              <section key={field.key} className="flex w-full items-center gap-5">
                <div className="mb-6 min-w-3">
                  <strong>{index + 1}</strong>
                </div>

                <div className="grid w-full grid-cols-2 gap-x-6">
                  <AntFormItem name={[field.name, "title"]} rules={[rule.required()]}>
                    <AntInput placeholder="Nhập công việc cần thực hiện" className="h-8" />
                  </AntFormItem>
                  <AntFormItem name={[field.name, "endDate"]} rules={[rule.required()]}>
                    <AntDatePicker
                      minDate={dayjs()}
                      maxDate={formWatch?.endDate ? dayjs(formWatch.endDate) : undefined}
                      placeholder="Chọn ngày kết thúc"
                      className="h-8"
                    />
                  </AntFormItem>
                </div>

                <div className="mb-5.5">
                  <AntButton
                    type="text"
                    shape="circle"
                    danger
                    disabled={fields.length === 1}
                    icon={<ShareIcon.SolarTrashBinTrash />}
                    onClick={() => remove(index)}
                    tooltip={{
                      title: "Xoá công việc",
                    }}
                  ></AntButton>
                </div>
              </section>
            ))}
          </article>
        </AntCard>
      )}
    </Form.List>
  );
};

export default SubTasksForm;
