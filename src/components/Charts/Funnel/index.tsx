import { AntEmpty } from "@components/Antd/Empty";
import ReactECharts from "echarts-for-react";
import { ChartBase } from "../type";
import { chartUtils } from "../utils";
type FunnelChartProps = ChartBase & {};

const FunnelChart = ({ ...props }: FunnelChartProps) => {
  const option: echarts.EChartsOption = {
    ...chartUtils.getTitle(props?.title, props?.description),
    ...chartUtils.getResponsiveLegend(),
    tooltip: {
      trigger: "item",

      // formatter: "{a} <br/>{b} : <strong>{c}%</strong>",
    },
    toolbox: {
      // feature: {
      //   dataView: { readOnly: false },
      //   restore: {},
      //   saveAsImage: {},
      // },
    },
    legend: {
      bottom: "2%",
      left: "center",
      orient: "horizontal",
    },
    series: [
      {
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: props?.data,
      },
    ],
  };

  if (props.data.length === 0) return <AntEmpty.Chart />;

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};

export default FunnelChart;
