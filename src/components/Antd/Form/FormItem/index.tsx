import SharePageText from "@components/Antd/PageText";
import { PLACEHOLDER_KEY } from "@core/constant";
import { cn } from "@core/utils/cn";
import { Form, FormItemProps } from "antd";
import React from "react";

type TextMode = {
  isShow: boolean;
  value: React.ReactNode;
  currency?: boolean;
  percent?: boolean;
  className?: string;
};

type AntFormItemProps = FormItemProps & {
  autoAddPlaceholder?: boolean;
  text?: TextMode;
};

function AntFormItem({
  autoAddPlaceholder = true,
  children,
  text,
  ...props
}: AntFormItemProps & { children: React.ReactNode }) {
  const childrenProps = {
    placeholder:
      typeof props?.label === "string" && props?.label ? PLACEHOLDER_KEY + props?.label?.toLowerCase() : props?.label,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (!autoAddPlaceholder || !React.isValidElement(child)) return child;

    return React.cloneElement(child, {
      ...childrenProps,
      ...props,
      ...(child.props as any),
    });
  });

  return (
    <Form.Item
      {...props}
      validateFirst
      className={cn(props?.className)}
      name={text?.isShow ? undefined : props?.name}
      rules={text?.isShow ? undefined : props?.rules}
    >
      {text?.isShow ? <SharePageText {...text}>{text?.value}</SharePageText> : childrenWithProps}
    </Form.Item>
  );
}

export default AntFormItem;
