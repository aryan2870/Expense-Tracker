import React, { useEffect, useState } from "react";

import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const prepareChartData = () => {
      const dataArr = data?.map((item) => ({
        name: item?.source,
        amount: item?.amount,
      }));

      setChartData(dataArr);
    };
    prepareChartData();
    return () => {};
  }, [data]);
  return (
    <div className="bg-white p-6 rounded-[28px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      <div className="flex items-center justify-between pb-4 border-b border-slate-50 mb-4">
        <h5 className="text-base font-extrabold text-slate-800 tracking-tight">Last 60 Days Income</h5>
      </div>

      <CustomPieChart
        data={chartData}
        label={"Total Income"}
        totalAmount={totalIncome}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default RecentIncomeWithChart;
