"use client";
import { cn } from "@core/utils/cn";
import { Input, InputProps } from "antd";
import { formGetPlaceholder } from "../Form/utils";

export type AntInputProps = InputProps & {};

function AntInput({ ...props }: AntInputProps) {
  return (
    <Input
      {...props}
      showCount={props?.showCount ?? true}
      maxLength={props?.maxLength ?? 250}
      placeholder={formGetPlaceholder(props?.placeholder, "Nhập")}
      className={cn("h-11", props?.className)}
    />
  );
}

export default AntInput;
