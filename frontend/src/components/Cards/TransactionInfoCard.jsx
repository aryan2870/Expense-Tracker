import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () =>
    type === "income" 
      ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
      : "bg-rose-50 text-rose-600 border border-rose-100";

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100/70 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center text-xl text-slate-700 bg-slate-50 group-hover:bg-white border border-slate-100 rounded-xl transition-colors duration-300">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        ) : (
          <LuUtensils size={20} className="text-slate-400" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-800 font-bold capitalize truncate">{title}</p>
        <p className="text-[11px] text-slate-400 font-medium mt-0.5">{date}</p>
      </div>

      <div className="flex items-center gap-3">
        {!hideDeleteBtn && (
          <button
            className="text-slate-400 hover:text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
            onClick={onDelete}
          >
            <LuTrash2 size={18} />
          </button>
        )}

        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${getAmountStyles()}`}
        >
          <span className="text-xs font-extrabold tracking-tight">
            {type === "income" ? "+" : "-"} Rs. {amount}
          </span>
          {type === "income" ? <LuTrendingUp size={14} /> : <LuTrendingDown size={14} />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
