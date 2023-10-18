import React from "react";
import DadhboardStatsGrid from "./DadhboardStatsGrid";
import SalesPieChart from "./SalesPieChart";
import BarGraph from "./BarGraph";
import TableSale from "./TableSale";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:grid-cols-2 gap-4 pl-9 pr-9">
      <DadhboardStatsGrid />
      <div className="flex gap-4">
        <BarGraph />
        <SalesPieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <TableSale />
      </div>
    </div>
  );
}
