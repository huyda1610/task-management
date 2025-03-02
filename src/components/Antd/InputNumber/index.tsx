import { cn } from "@core/utils/cn";
import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib";
import { formGetPlaceholder } from "../Form/utils";

export type AntInputNumberProps = InputNumberProps;

function AntInputNumber({ ...props }: AntInputNumberProps) {
  return (
    <InputNumber
      {...props}
      changeOnWheel
      className={cn("w-full", props.className)}
      placeholder={formGetPlaceholder(props?.placeholder, "Nhập")}
    />
  );
}

export default AntInputNumber;
