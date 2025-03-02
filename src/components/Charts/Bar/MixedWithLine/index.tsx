import { AntEmpty } from "@components/Antd/Empty";
import ReactECharts from "echarts-for-react";
import { YAXisOption } from "echarts/types/dist/shared";
import { ChartBase } from "../../type";
import { chartUtils } from "../../utils";

type MixedWithLineProps = Omit<ChartBase, "data"> & {
  xAxisLabel: string[];
  yAxis: YAXisOption[];
  series: echarts.EChartsOption["series"];
};

const MixedWithLine = ({ ...props }: MixedWithLineProps) => {
  const option: echarts.EChartsOption = {
    ...chartUtils.getTitle(props?.title, props?.description),
    ...chartUtils.getResponsiveLegend(),
    dataZoom: [
      {
        type: "slider",
        show: true,
        xAxisIndex: 0,
        start: 0,
        end: 100,
        height: 15, // Reduced height for smaller slider
        borderColor: "#ccc",
        fillerColor: "rgba(144,197,237,0.2)",
        handleSize: 15, // Smaller handles
        handleStyle: {
          color: "#5470c6",
          shadowBlur: 3,
          shadowColor: "rgba(0,0,0,0.3)",
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },
        textStyle: {
          fontSize: 10, // Smaller font size for slider text
        },
        brushSelect: false,
        zoomLock: false,
        // moveOnMouseMove: true,
      },
      {
        type: "inside",
        xAxisIndex: 0,
        start: 0,
        end: 100,
        zoomOnMouseWheel: true,
        moveOnMouseMove: true,
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        data: props?.xAxisLabel,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: props.yAxis,
    series: props.series,
  };

  if (props.xAxisLabel.length === 0) return <AntEmpty.Chart />;

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};

export default MixedWithLine;
