import { AntEmpty } from "@components/Antd/Empty";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts-for-react/src/types";
import { ChartBase } from "../type";
import { chartUtils } from "../utils";
import Group from "./Group";
import MixedWithLine from "./MixedWithLine";
import Stack from "./Stack";
type BarChartProps = ChartBase & {};

const BarChart = ({ ...props }: BarChartProps) => {
  const option: EChartsOption = {
    ...chartUtils.getTitle(props?.title, props?.description),
    ...chartUtils.getResponsiveLegend(),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: props.data?.map((item) => item.name),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        type: "bar",
        barWidth: "60%",
        data: props.data?.map((item) => item.value),
      },
    ],
  };

  if (props.data.length === 0) return <AntEmpty.Chart />;

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};

BarChart.Stack = Stack;
BarChart.Group = Group;
BarChart.MixedWithLine = MixedWithLine;

export default BarChart;
