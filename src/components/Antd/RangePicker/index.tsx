import { DEFAULT_DATE_FORMAT } from "@core/constant";
import { cn } from "@core/utils/cn";
import { DatePicker, DatePickerProps } from "antd";
import { RangePickerProps } from "antd/lib/date-picker/generatePicker/interface";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

type AntRangePickerProps = RangePickerProps<Dayjs> & {
  rangeDays?: number;
  rangeMonths?: number;
  rangeYears?: number;
  disableFutureMonth?: boolean;
};

function AntRangePicker({
  format,
  rangeDays,
  rangeMonths,
  rangeYears,
  disableFutureMonth,
  ...props
}: AntRangePickerProps) {
  const disabled: DatePickerProps["disabledDate"] = (current, { from }) => {
    if (disableFutureMonth && current.isAfter(dayjs().toString(), "days")) {
      return true;
    }
    if (from && rangeDays) {
      return Math.abs(current.diff(from, "days")) > rangeDays;
    }

    if (from && rangeMonths) {
      return Math.abs(current.diff(from, "month")) > rangeMonths;
    }

    if (from && rangeYears) {
      return Math.abs(current.diff(from, "year")) > rangeYears;
    }
    return false;
  };

  const getFormat = (): DatePickerProps["format"] => {
    if (format) return format;

    switch (props.picker) {
      case "month":
        return "MM/YYYY";
      case "year":
        return "YYYY";

      default:
        return DEFAULT_DATE_FORMAT;
    }
  };

  return (
    <RangePicker
      {...props}
      format={getFormat()}
      disabledDate={disabled}
      className={cn("h-11 w-full", props?.className)}
    />
  );
}

export default AntRangePicker;
