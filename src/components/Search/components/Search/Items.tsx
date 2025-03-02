import AntDatePicker from "@components/Antd/DatePicker";
import AntInput from "@components/Antd/Input";
import AntInputNumber from "@components/Antd/InputNumber";
import AntRangePicker from "@components/Antd/RangePicker";
import AntSelect from "@components/Antd/Select";
import { ShareSearchItem } from "@components/Search/type";
import { Checkbox, Form } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

type SearchItemsProps = {
  searchItems: ShareSearchItem[];
};

export default function SearchItems({ searchItems }: SearchItemsProps) {
  const itemClassName = (className?: string): string => {
    return twMerge("w-[240px] m-0", className);
  };

  const renderSearchItem = (): React.JSX.Element[] => {
    return searchItems.map((item) => {
      switch (item?.type) {
        case "input":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <AntInput
                key={item?.key}
                placeholder={item?.placeholder}
                maxLength={item?.maxLength}
                allowClear={item?.allowClear ?? true}
                className="h-11"
                showCount={false}
                // suffix={<RiSearch2Line size={16} className="text-gray-disabled" />}
              />
            </Form.Item>
          );

        case "inputNumber":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <AntInputNumber
                key={item?.key}
                placeholder={item?.placeholder}
                maxLength={item?.maxLength}
                max={item?.max}
                min={item?.min}
                // suffix={<RiSearch2Line size={16} className="text-gray-disabled" />}
              />
            </Form.Item>
          );

        case "select":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <AntSelect
                key={item?.key}
                placeholder={item?.placeholder}
                options={item?.options}
                allowClear={item?.allowClear ?? true}
                showSearch
              />
            </Form.Item>
          );

        case "groupCheckbox":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <Checkbox.Group key={item?.key} options={item?.options} />
            </Form.Item>
          );

        case "date":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <AntDatePicker
                key={item?.key}
                placeholder={item?.placeholder}
                minDate={item?.minDate}
                maxDate={item?.maxDate}
                allowClear={item?.allowClear ?? true}
              />
            </Form.Item>
          );
        case "rangePicker":
          return (
            <Form.Item className={itemClassName(item?.className)} rules={item?.rules} name={item?.key} key={item?.key}>
              <AntRangePicker
                key={item?.key}
                placeholder={item?.placeholder}
                allowEmpty={item?.allowEmpty}
                rangeDays={item?.rangeDays}
                rangeMonths={item?.rangeDays}
                rangeYears={item?.rangeYears}
                minDate={item?.minDate}
                maxDate={item?.maxDate}
                allowClear={item?.allowClear ?? true}
              />
            </Form.Item>
          );
        default:
          return <></>;
      }
    });
  };

  return <div className="flex w-full flex-wrap items-center justify-start gap-4">{renderSearchItem()}</div>;
}
