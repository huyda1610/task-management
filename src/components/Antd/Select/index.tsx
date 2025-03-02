import { cn } from "@core/utils/cn";
import { compare } from "@core/utils/compare";
import { Select, SelectProps, Spin } from "antd";
import { formGetPlaceholder } from "../Form/utils";

export type AntSelectProps = SelectProps<any> & {
  // Add custom props here
  ref?: any;
};

function AntSelect({ loading = false, ...props }: AntSelectProps) {
  const labelKey = props?.fieldNames?.label ?? "label";

  return (
    <Spin spinning={loading}>
      <Select
        {...props}
        filterOption={
          props?.filterOption ??
          ((inputValue, option) => {
            if (!option?.[labelKey]) return false;

            return compare.string(
              option?.[labelKey] && typeof option?.[labelKey] === "string" ? option?.[labelKey].toString() : "",
              inputValue,
              "include",
            );
          })
        }
        optionRender={(options) => {
          return (
            <div className={cn("w-full overflow-hidden text-ellipsis", props.className, "h-full")}>
              <span>{options?.label}</span>
            </div>
          );
        }}
        loading={false}
        placeholder={formGetPlaceholder(props?.placeholder, "Chọn")}
        className={cn("h-11", props?.className)}
      />
    </Spin>
  );
}

export default AntSelect;
