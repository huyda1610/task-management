import useTitle from "@hooks/useTitle";
import React from "react";
import EmpByMonth from "./components/EmpByMonth";
import RevenueByYear from "./components/RevenueByYear";

const DashboardPage: React.FC = () => {
  useTitle("Dashboard");
  return (
    <article className="flex flex-col gap-6">
      <RevenueByYear />
      <EmpByMonth />
    </article>
  );
};

export default DashboardPage;
