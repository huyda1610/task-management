import { AntEmpty } from "@components/Antd/Empty";
import ReactECharts from "echarts-for-react";
import { ChartBase } from "../type";
import { chartUtils } from "../utils";
type PieChartProps = ChartBase & {};

const PieChart = ({ ...props }: PieChartProps) => {
  const option: echarts.EChartsOption = {
    ...chartUtils.getTitle(props?.title, props?.description),
    ...chartUtils.getResponsiveLegend(),
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: "70%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  if (props.data.length === 0) return <AntEmpty.Chart />;

  return <ReactECharts option={option} style={{ height: "400px", width: "100%", marginTop: 0 }} />;
};

export default PieChart;
