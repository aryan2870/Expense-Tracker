import React from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentIncome = ({ transactions, onSeeMore }) => {
  return (
    <div className="bg-white p-6 rounded-[28px] border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
      <div className="flex items-center justify-between pb-4 border-b border-slate-50">
        <h5 className="text-base font-extrabold text-slate-800 tracking-tight">Recent Income</h5>

        <button className="card-btn" onClick={onSeeMore}>
          See More <LuArrowRight className="text-xs" />
        </button>
      </div>

      <div className="mt-4 space-y-1">
        {transactions && transactions.length > 0 ? (
          transactions.slice(0, 5).map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.source}
              icon={item.icon}
              date={moment(item.date).format("MMM DD, YYYY")}
              amount={item.amount}
              type={"income"}
              hideDeleteBtn
            />
          ))
        ) : (
          <div className="text-center py-8 text-xs text-slate-400 font-medium">
            No income recorded
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentIncome;
