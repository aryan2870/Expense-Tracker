import React from "react";
import { LuDollarSign, LuShoppingCart } from "react-icons/lu";
import moment from "moment";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentTransactions = ({ transactions, onSeeIncome, onSeeExpense }) => {
  return (
    <div className="bg-white p-6 rounded-[28px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      <div className="flex items-center justify-between pb-4 border-b border-slate-50">
        <h5 className="text-base font-extrabold text-slate-800 tracking-tight">Recent Transactions</h5>

        <div className="flex items-center gap-2">
          <button className="card-btn" onClick={onSeeIncome}>
            Income
            <LuDollarSign className="text-xs" />
          </button>
          <button className="card-btn" onClick={onSeeExpense}>
            Expense
            <LuShoppingCart className="text-xs" />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        {transactions && transactions.length > 0 ? (
          transactions.slice(0, 5).map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.type === "expense" ? item.category : item.source}
              icon={item.icon}
              date={moment(item.date).format("DD MMM YYYY")}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn
            />
          ))
        ) : (
          <div className="text-center py-8 text-xs text-slate-400 font-medium">
            No recent transactions
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
