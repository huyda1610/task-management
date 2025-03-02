import AntCard from "@components/Antd/Card";
import BarChart from "@components/Charts/Bar";
import useInitLoading from "@hooks/useInitLoading";
import { useMutation } from "@hooks/useMutation";
import { dashboardService } from "@services/dashboard/dashboard.service";
import { EmpByYearDto } from "@services/dashboard/models/output.model";
import React, { useEffect } from "react";

const EmpByMonth: React.FC = () => {
  const { isLoading, data, mutation } = useMutation<EmpByYearDto[]>({
    mutationFn: () => {
      return dashboardService.getEmpByMonth();
    },
  });
  const initLoading = useInitLoading(isLoading);

  useEffect(() => {
    mutation();
  }, []);

  return (
    <AntCard
      chartCard
      title="Nhân sự công ty"
      description="Trong 24 tháng gần nhất"
      skeletonLoading={{
        loading: initLoading,
        height: 400,
      }}
      loading={isLoading}
    >
      <BarChart.MixedWithLine
        xAxisLabel={data?.map((item) => item.date?.toDateFormat("MM/YYYY")) ?? []}
        yAxis={[
          {
            type: "value",
            name: "Tuyển dụng",
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "Tổng nhân viên",
            axisLabel: {
              formatter: "{value}",
            },
          },
        ]}
        series={[
          {
            name: "Tuyển dụng mới",
            type: "bar",
            data: data?.map((item) => item.hired) ?? [],
            color: "#22C55E",
          },
          {
            name: "Nghỉ việc",
            type: "bar",
            data: data?.map((item) => item.departures) ?? [],
            color: "#FF5630",
          },
          {
            name: "Tổng nhân viên",
            type: "line",
            yAxisIndex: 1,
            color: "#0691d8",
            data: data?.map((item) => item.total) ?? [],
          },
        ]}
      />
    </AntCard>
  );
};

export default EmpByMonth;
