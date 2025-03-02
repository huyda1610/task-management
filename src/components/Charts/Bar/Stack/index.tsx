import { AntEmpty } from "@components/Antd/Empty";
import ReactECharts from "echarts-for-react";
import { ChartBase } from "../../type";
import { chartUtils } from "../../utils";

type SeriesType = {
  name: string;
  data: number[];
};

type StackProps = Omit<ChartBase, "data"> & {
  xAxisLabel: string[];
  series: SeriesType[];
};

const Stack = ({ ...props }: StackProps) => {
  const series = props.series.map((item) => ({
    ...item,
    type: "bar",
    emphasis: {
      focus: "series",
    },
    stack: "Stack_Unique",
  }));

  const option: echarts.EChartsOption = {
    ...chartUtils.getTitle(props?.title, props?.description),
    ...chartUtils.getResponsiveLegend(),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
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
    xAxis: [
      {
        type: "category",
        data: props.xAxisLabel,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: series as echarts.EChartsOption["series"],
  };

  if (props.series.length === 0 || props.xAxisLabel.length === 0) return <AntEmpty.Chart />;

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};

export default Stack;
