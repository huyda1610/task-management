import AntCard from "@components/Antd/Card";
import useDelay from "@hooks/useDelay";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts-for-react/src/types";

function AnalyticsVisitsSales() {
  const initLoading = useDelay();

  const option: EChartsOption = {
    series: [
      {
        animationDelay() {
          return Math.random() * 400;
        },
        animationEasing: "exponentialInOut",
        animationType: "scale",
        center: ["50%", "50%"],
        color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9"],
        data: [
          { name: "Outsourcing", value: 500 },
          { name: "Customize", value: 310 },
          { name: "Technical support", value: 274 },
          { name: "Remote", value: 400 },
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        name: "Business proportion",
        radius: "80%",
        roseType: "radius",
        type: "pie",
      },
    ],

    tooltip: {
      trigger: "item",
    },
  };

  return (
    <AntCard
      skeletonLoading={{
        loading: initLoading,
        height: 400,
      }}
      title="Tỷ trọng kinh doanh"
    >
      <ReactECharts option={option} />
    </AntCard>
  );
}

export default AnalyticsVisitsSales;
