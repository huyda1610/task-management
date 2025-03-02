import { cn } from "@core/utils/cn";
import { convert } from "@core/utils/convert";
import { Form, FormProps, Spin } from "antd";
import React from "react";

type B2BFormProps = FormProps & {
  labelClassName?: string;
  loading?: boolean;
};

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean },
  labelClassName?: string,
) => (
  <div className="flex gap-1">
    <span className={cn("font-bold", labelClassName)}>{label}</span>
    {required && <span className="text-error">*</span>}
  </div>
);

function AntForm({ labelClassName, loading = false, ...props }: B2BFormProps) {
  const onFinish: FormProps["onFinish"] = (values) => {
    if (props.onFinish) props.onFinish(convert.trimStringsInObject(values));
  };

  return (
    <Spin spinning={loading}>
      <Form
        {...(props as any)}
        scrollToFirstError={{ behavior: "instant", block: "end", focus: true }}
        requiredMark={(labelNode, info) => customizeRequiredMark(labelNode, info, labelClassName)}
        layout={props?.layout ?? "vertical"}
        onFinish={onFinish}
      />
    </Spin>
  );
}

export default AntForm;
