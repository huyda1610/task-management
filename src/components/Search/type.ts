import { CheckboxOptionType } from "antd";
import { Rule } from "antd/es/form";
import dayjs from "dayjs";

export type ShareSearchProps = {
  className?: string;
  searchItems: ShareSearchItem[];
  totalResult?: number;
  defaultValues?: any;
  values?: any;
  onValuesChange?: (allValues: any, changedValues: any) => void;
  showResult?: boolean;
};

export type ShareSearchItem = ItemDefault & FormType & {};

type ItemDefault = {
  title: string;
  key: string;
  placeholder?: string;
  className?: string;
  allowClear?: boolean;
  rules?: Rule[];
  isDrawer?: boolean;
};

export type FormType = Input | InputNumber | Date | RangePicker | Select | GroupCheckbox;

type Input = {
  type: "input";
  maxLength?: number;
};

type InputNumber = {
  type: "inputNumber";
  maxLength?: number;
  max?: number;
  min?: number;
};

type Date = {
  type: "date";
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
};

type RangePicker = {
  type: "rangePicker";
  allowEmpty?: [boolean, boolean];
  rangeDays?: number;
  rangeMonths?: number;
  rangeYears?: number;
  placeholder?: [string, string];
  minDate?: dayjs.Dayjs;
  maxDate?: dayjs.Dayjs;
};

type Select = {
  type: "select";
  options: { value: string | number; label: string }[];
};

type GroupCheckbox = {
  type: "groupCheckbox";
  options: CheckboxOptionType[];
  optionCheckAll?: boolean;
};
