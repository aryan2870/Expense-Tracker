import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  // Map color strings to modern gradients and glow effects
  const getStyleScheme = () => {
    switch (color) {
      case "bg-primary":
        return {
          iconBg: "bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-purple-500/35",
          textAccent: "text-purple-600",
        };
      case "bg-orange-500":
        return {
          iconBg: "bg-gradient-to-tr from-amber-500 to-orange-500 shadow-orange-500/35",
          textAccent: "text-orange-600",
        };
      case "bg-red-500":
        return {
          iconBg: "bg-gradient-to-tr from-rose-500 to-red-500 shadow-red-500/35",
          textAccent: "text-red-600",
        };
      default:
        return {
          iconBg: "bg-slate-700 shadow-slate-700/35",
          textAccent: "text-slate-800",
        };
    }
  };

  const scheme = getStyleScheme();

  return (
    <div className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgba(135,92,245,0.06)] hover:-translate-y-0.5 transition-all duration-300 group">
      <div
        className={`w-14 h-14 flex items-center justify-center text-2xl text-white rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 ${scheme.iconBg}`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</h6>
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold text-slate-400">Rs.</span>
          <span className="text-2xl font-extrabold text-slate-800 tracking-tight">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
