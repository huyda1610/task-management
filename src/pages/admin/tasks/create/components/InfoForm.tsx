import AntCard from "@components/Antd/Card";
import AntDatePicker from "@components/Antd/DatePicker";
import AntFormItem from "@components/Antd/Form/FormItem";
import AntInput from "@components/Antd/Input";
import AntSelect from "@components/Antd/Select";
import AntTextArea from "@components/Antd/TextArea";
import { rule } from "@core/utils/form/rules";
import { userData } from "@services/tasks/data/user";
import dayjs from "dayjs";
import React from "react";

const TasksCreateInfoForm: React.FC = () => {
  return (
    <AntCard formCard title="Thông tin chung" bodyClassName="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
      <AntFormItem className="sm:col-span-2" label="Tên công việc" name="title" rules={[rule.required()]}>
        <AntInput />
      </AntFormItem>
      <AntFormItem className="sm:col-span-2" label="Ghi chú" name="description" rules={[rule.required()]}>
        <AntTextArea />
      </AntFormItem>
      <AntFormItem label="Người thực hiện" name="assignedTo" rules={[rule.required()]}>
        <AntSelect options={userData.map((item) => ({ value: item.id, label: item.email }))} showSearch />
      </AntFormItem>
      <AntFormItem label="Ngày kết thúc" name="endDate" rules={[rule.required()]}>
        <AntDatePicker minDate={dayjs()} />
      </AntFormItem>
    </AntCard>
  );
};

export default TasksCreateInfoForm;
