import useTitle from "@hooks/useTitle";
import dayjs from "dayjs";
import React from "react";
import AnalyticsVisitsData from "./components/AnalyticsVisitsData";
import AnalyticsVisitsSales from "./components/AnalyticsVisitsSales";
import EmpByMonth from "./components/EmpByMonth";
import RevenueByYear from "./components/RevenueByYear";
import TicketsNumber from "./components/TicketsNumber";

const DashboardPage: React.FC = () => {
  useTitle("Dashboard");
  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col items-start justify-start gap-1">
        <h4 className="text-2xl font-bold text-black">Hi, Do Anh Huy 👋</h4>
        <span className="body--1 text-gray">
          Chào mừng bạn truy cập vào Dashboard vào ngày hôm nay, {dayjs().format("DD/MM/YYYY")}! <br />
        </span>
      </div>

      <TicketsNumber />

      <RevenueByYear />
      <EmpByMonth />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <AnalyticsVisitsData />
        <AnalyticsVisitsSales />
      </div>
    </article>
  );
};

export default DashboardPage;
