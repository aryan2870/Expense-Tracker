import React from "react";

import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expense", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="bg-white p-6 rounded-[28px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      <div className="flex items-center justify-between pb-4 border-b border-slate-50">
        <h5 className="text-base font-extrabold text-slate-800 tracking-tight">Finance Overview</h5>
      </div>

      <div className="mt-4">
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={totalBalance}
          colors={COLORS}
          showTextAnchor
        />
      </div>
    </div>
  );
};

export default FinanceOverview;
