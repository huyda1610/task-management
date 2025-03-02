import AntCard from "@components/Antd/Card";
import AntRangePicker from "@components/Antd/RangePicker";
import BarChart from "@components/Charts/Bar";
import useInitLoading from "@hooks/useInitLoading";
import { useMutation } from "@hooks/useMutation";
import { dashboardService } from "@services/dashboard/dashboard.service";
import { RevenueByYearInput } from "@services/dashboard/models/input.model";
import { RevenueByYearDto } from "@services/dashboard/models/output.model";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";

type DateFilterType = {
  startYear: Dayjs | null;
  endYear: Dayjs | null;
};

const RevenueByYear: React.FC = () => {
  const [dateFilter, setDateFilter] = useState<DateFilterType>({
    startYear: dayjs().subtract(5, "year").startOf("month"),
    endYear: dayjs().endOf("month"),
  });

  const { isLoading, data, mutation } = useMutation<RevenueByYearDto[], RevenueByYearInput>({
    mutationFn: (input) => {
      return dashboardService.getRevenueByYear(input);
    },
  });
  const initLoading = useInitLoading(isLoading);

  useEffect(() => {
    mutation({
      startYear: dateFilter?.startYear
        ? dateFilter?.startYear.year()
        : dayjs().subtract(5, "year").startOf("month").year(),
      endYear: dateFilter?.endYear ? dateFilter?.endYear.year() : dayjs().endOf("month").year(),
    });
  }, [dateFilter]);

  return (
    <AntCard
      chartCard
      title={"Doanh thu qua các năm"}
      skeletonLoading={{
        loading: initLoading,
        height: 400,
      }}
      loading={isLoading}
      extra={
        <AntRangePicker
          value={[dateFilter.startYear, dateFilter.endYear]}
          onChange={(dates) => {
            if (!dates) return;

            setDateFilter({
              startYear: dates[0],
              endYear: dates[1],
            });
          }}
          picker="year"
          className="h-8 w-fit hover:shadow-lg"
          allowClear={false}
          maxDate={dayjs()}
          minDate={dayjs().subtract(10, "year")}
        />
      }
    >
      <BarChart.MixedWithLine
        xAxisLabel={data?.map((item) => item.year.toString()) ?? []}
        yAxis={[
          {
            type: "value",
            name: "Doanh thu (VNĐ)",
            axisLabel: {
              formatter: "{value} VNĐ",
            },
          },
          {
            type: "value",
            name: "Phát triển (%)",
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ]}
        series={[
          {
            name: "Doanh thu",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return Number(value).toCurrencyFormat() + " VNĐ";
              },
            },
            data: data?.map((item) => item.revenue) ?? [],
          },
          {
            name: "Phát triển",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " %";
              },
            },
            data: data?.map((item) => item.growth) ?? [],
          },
        ]}
      />
    </AntCard>
  );
};

export default RevenueByYear;
