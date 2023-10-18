import React from "react";
import DadhboardStatsGrid from "./DadhboardStatsGrid";
import SalesPieChart from "./SalesPieChart";
import BarGraph from "./BarGraph";
import TableSale from "./TableSale";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 pl-9 pr-9 sm:pr-1">
      <DadhboardStatsGrid />
      <div className="flex flex-row gap-4 w-full sm:w-3/4 lg:w-full">
        <BarGraph />
        <SalesPieChart />
      </div>
      <div className="flex flex-row gap-4 w-full ">
        <TableSale />
      </div>
    </div>
  );
}
