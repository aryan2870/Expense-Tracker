import React, { useEffect, useState } from "react";

import CustomBarChart from "../Charts/CustomBarChart";

import { prepareExpenseBarChartData } from "../../utils/helper";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);

    return () => {};
  }, [data]);

  return (
    <div className="bg-white p-6 rounded-[28px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] col-span-1">
      <div className="flex items-center justify-between pb-4 border-b border-slate-50 mb-4">
        <h5 className="text-base font-extrabold text-slate-800 tracking-tight">Last 30 Days Expenses</h5>
      </div>

      <CustomBarChart data={chartData} />
    </div>
  );
};

export default Last30DaysExpenses;
