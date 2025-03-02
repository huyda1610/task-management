import { DEFAULT_DATE_FORMAT } from "@core/constant";
import { cn } from "@core/utils/cn";
import { DatePicker, DatePickerProps } from "antd";
import { formGetPlaceholder } from "../Form/utils";

type AntDatePickerProps = DatePickerProps & {};

function AntDatePicker(props: AntDatePickerProps) {
  return (
    <DatePicker
      {...props}
      className={cn("h-11 w-full", props.className)}
      allowClear={props.allowClear ?? true}
      format={props?.format ?? DEFAULT_DATE_FORMAT}
      placeholder={formGetPlaceholder(props?.placeholder, "Chọn")}
    />
  );
}

export default AntDatePicker;
