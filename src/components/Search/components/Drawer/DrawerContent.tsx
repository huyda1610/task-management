import AntDatePicker from "@components/Antd/DatePicker";
import AntInput from "@components/Antd/Input";
import AntInputNumber from "@components/Antd/InputNumber";
import AntRangePicker from "@components/Antd/RangePicker";
import AntSelect from "@components/Antd/Select";
import { ShareSearchProps } from "@components/Search/type";
import { Form, FormInstance } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

type DrawerContentSearchProps = ShareSearchProps & {
  formSearch: FormInstance<any>;
};

export default function DrawerContentSearch({ searchItems }: DrawerContentSearchProps) {
  const itemClassName = (className?: string): string => {
    return twMerge("", className);
  };

  const renderSearchItem = (): React.JSX.Element[] => {
    return searchItems.map((item) => {
      switch (item?.type) {
        case "input":
          return (
            <Form.Item
              label={item.title}
              className={itemClassName(item?.className)}
              rules={item?.rules}
              name={item?.key}
              key={item?.key}
              layout="vertical"
            >
              <AntInput
                key={item?.key}
                placeholder={item?.placeholder}
                maxLength={item?.maxLength}
                allowClear={item?.allowClear ?? true}
              />
            </Form.Item>
          );

        case "inputNumber":
          return (
            <Form.Item
              label={item.title}
              className={itemClassName(item?.className)}
              rules={item?.rules}
              name={item?.key}
              key={item?.key}
              layout="vertical"
            >
              <AntInputNumber
                key={item?.key}
                placeholder={item?.placeholder}
                maxLength={item?.maxLength}
                max={item?.max}
                min={item?.min}
              />
            </Form.Item>
          );

        case "select":
          return (
            <Form.Item
              label={item.title}
              className={itemClassName(item?.className)}
              rules={item?.rules}
              name={item?.key}
              key={item?.key}
              layout="vertical"
            >
              <AntSelect
                key={item?.key}
                placeholder={item?.placeholder}
                options={item?.options}
                showSearch
                allowClear={item?.allowClear ?? true}
              />
            </Form.Item>
          );

        case "groupCheckbox":
          return <></>;

        case "date":
          return (
            <Form.Item
              label={item.title}
              className={itemClassName(item?.className)}
              rules={item?.rules}
              name={item?.key}
              key={item?.key}
              layout="vertical"
            >
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
            <Form.Item
              label={item.title}
              className={itemClassName(item?.className)}
              rules={item?.rules}
              name={item?.key}
              key={item?.key}
              layout="vertical"
            >
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

  return <div className="search flex flex-col px-5 py-6">{renderSearchItem()}</div>;
}
