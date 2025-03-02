import { CloseCircleFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { B2BSearchItem, B2BSearchProps } from "../../type";
import React from "react";
import { B2BOptions } from "@core/components/Antd/type";

type ResultSearchProps = B2BSearchProps & {
  handleRemoveFilter: (key: string, value: string | number) => void;
  handleResetFilter?: () => void;
};

export default function ResultSearch({
  searchItems,
  totalResult,
  values,
  handleRemoveFilter,
  handleResetFilter,
}: ResultSearchProps) {
  function checkObjectHasData(obj: any): boolean {
    // Lấy mảng chứa tất cả các key của đối tượng
    const values = Object.values(obj);
    // Kiểm tra xem có ít nhất một key nào đó không
    return values.some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== null && value !== undefined && value !== "";
    });
  }

  const getResult = (data: B2BSearchItem, values: any): B2BOptions[] => {
    switch (data?.type) {
      case "date":
        return [
          {
            label: values[data?.key]?.format("DD/MM/YYYY"),
            value: values[data?.key],
          },
        ];
      case "rangePicker":
        return [
          {
            label: `${values[data?.key]?.[0]?.format("DD/MM/YYYY")} - ${values[data?.key]?.[1]?.format("DD/MM/YYYY")}`,
            value: values[data?.key],
          },
        ];
      case "select":
        return [
          {
            label: data?.options?.find((item) => item.value === values[data?.key])?.label ?? "",
            value: values[data?.key],
          },
        ];
      case "groupCheckbox":
        return (
          data?.options
            ?.filter((item) => values[data?.key].includes(item.value))
            .map((item) => ({
              label: item.label as string,
              value: item.value,
            })) ?? []
        );
      default:
        return [
          {
            label: values[data?.key],
            value: values[data?.key],
          },
        ];
    }
  };

  const renderResult = (label: string): React.ReactElement => {
    if (label?.length >= 25) {
      return (
        <Tooltip title={label}>
          <span className="truncate px-2 text-[13px] font-medium leading-[19.5px]">{label.slice(0, 15) + "..."}</span>
        </Tooltip>
      );
    }

    return <span className="truncate px-2 text-[13px] font-medium leading-[19.5px]">{label}</span>;
  };

  const isRenderResult = (data: B2BSearchItem): boolean => {
    if (!data || !values) return false;
    if (Array.isArray(values[data?.key])) return values[data?.key].length > 0;

    return values[data?.key];
  };

  return (
    <section className="flex flex-col">
      {values && checkObjectHasData(values) && (
        <p className="text-[14px] font-normal text-textSecondary my-3">
          Tìm thấy <strong className="text-textPrimary"> {totalResult ?? 0} </strong>kết quả
        </p>
      )}

      <div className="flex flex-wrap items-center justify-start gap-2">
        {searchItems.map(
          (data: B2BSearchItem) =>
            isRenderResult(data) && (
              <div
                key={data?.key}
                className="flex flex-row items-center justify-start gap-2 rounded-[8px] border-[1px] border-dashed border-[#919eab29] p-2"
              >
                <span className="text-[14px] font-semibold">{data?.title}: </span>

                {getResult(data, values).map((item) => (
                  <div
                    key={item.value}
                    className="flex h-6 flex-row items-center justify-center rounded-[8px] bg-primary-lighter hover:cursor-context-menu"
                  >
                    {renderResult(item.label)}

                    <Button
                      className="group"
                      shape="circle"
                      icon={<CloseCircleFilled className="h-4 w-4 text-gray group-hover:text-black" />}
                      type="text"
                      color="default"
                      style={{
                        padding: 0,
                        margin: "0px 4px 0px -4px",
                        height: "20px",
                        width: "20px",
                        minWidth: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => handleRemoveFilter(data?.key.toString(), item.value)}
                    ></Button>
                  </div>
                ))}
              </div>
            ),
        )}

        {values && checkObjectHasData(values) && (
          <Button type="text" danger onClick={handleResetFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877Z"></path>
                <path d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5c-.454.5-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886Zm-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864l-.5-5.263Zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707Z"></path>
              </g>
            </svg>

            <strong>Xóa bộ lọc</strong>
          </Button>
        )}
      </div>
    </section>
  );
}
